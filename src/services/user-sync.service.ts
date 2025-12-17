import { userService } from "./user-service";
import { authService } from "./auth.service";
import { User } from "./auth";
import { ICreateUserRequest, IDbUser } from "../interfaces/IDbUser";
import { getCookie, setCookie } from "./cookie-service";
import { faker } from "@faker-js/faker";

const SYNC_CACHE_PREFIX = "user_synced_";
const SYNC_CACHE_EXPIRY = 60 * 60 * 24 * 30;

function isUserSynced(user_id: string): boolean {
  if (typeof window === "undefined") return false;
  const cacheKey = `${SYNC_CACHE_PREFIX}${user_id}`;
  return !!getCookie(cacheKey);
}

function setUserSynced(user_id: string): void {
  if (typeof window === "undefined") return;
  const cacheKey = `${SYNC_CACHE_PREFIX}${user_id}`;
  setCookie(cacheKey, "true", {
    expires: SYNC_CACHE_EXPIRY,
  });
}

function mapUserToDbUser(user: User): ICreateUserRequest {
  const cpf = faker.string.numeric(11);
  const ddd = faker.string.numeric(2);
  const phoneNumber = faker.string.numeric(9);
  const cellphone = `(${ddd}) ${phoneNumber.substring(0, 5)}-${phoneNumber.substring(5)}`;
  const birthdate = faker.date.birthdate({ min: 18, max: 80, mode: "age" }).toISOString().split("T")[0];

  return {
    user_id: user.user_id,
    first_name: user.name || "",
    last_name: user.lastName || "",
    email: user.email || "",
    cpf,
    cellphone,
    birthdate,
    gender: "Other",
  };
}

async function createUserInDb(user: User): Promise<IDbUser> {
  const userData = mapUserToDbUser(user);
  return await userService.create(userData);
}

export async function syncUserWithDb(user_id: string): Promise<void> {
  try {
    if (!user_id) {
      return;
    }

    if (isUserSynced(user_id)) {
      return;
    }

    try {
      const userExists = await userService.findById(user_id);
      if (userExists) {
        setUserSynced(user_id);
        return;
      }
    } catch (error: any) {
      if (error?.response?.status === 404) {
        try {
          const currentUser = await authService.getCurrentUser();
          if (currentUser && currentUser.user_id === user_id) {
            await createUserInDb(currentUser);
            setUserSynced(user_id);
          }
        } catch (createError: any) {
          if (createError?.response?.status === 409) {
            setUserSynced(user_id)
          } else {
            throw createError;
          }
        }
      } else {
        throw new Error(`Erro ao sincronizar usuário com o banco de dados: ${error}`);
      }
    }
  } catch (error: any) {
    console.error("Erro ao sincronizar usuário com o banco de dados:", error);
  }
}
