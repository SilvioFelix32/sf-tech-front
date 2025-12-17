import { userService } from "./user-service";
import { authService } from "./auth.service";
import { User } from "./auth";
import { ICreateUserRequest, IDbUser } from "../interfaces/IDbUser";
import { getCookie, setCookie, removeCookie } from "./cookie-service";
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

function clearUserSyncCache(user_id: string): void {
  if (typeof window === "undefined") return;
  const cacheKey = `${SYNC_CACHE_PREFIX}${user_id}`;
  removeCookie(cacheKey);
}

function mapUserToDbUser(user: User): ICreateUserRequest {
  const cpf = faker.string.numeric(11);
  const ddd = faker.string.numeric(2);
  const phoneNumber = faker.string.numeric(9);
  const cellphone = `(${ddd}) ${phoneNumber.substring(0, 5)}-${phoneNumber.substring(5)}`;
  const birthdate = faker.date.birthdate({ min: 18, max: 80, mode: "age" }).toISOString().split("T")[0];

  return {
    first_name: user.name || "",
    last_name: user.lastName || "",
    email: user.email || "",
    cpf,
    cellphone,
    birthdate,
    gender: "Other",
  };
}

async function checkUserExists(user_id: string): Promise<boolean> {
  try {
    await userService.findById(user_id);
    return true;
  } catch (error: any) {
    if (error?.response?.status === 404) {
      return false;
    }
    throw error;
  }
}

async function createUserInDb(user: User): Promise<IDbUser> {
  const userData = mapUserToDbUser(user);
  return await userService.create(userData);
}

export async function syncUserWithDb(): Promise<void> {
  try {
    const currentUser = await authService.getCurrentUser();
    
    if (!currentUser || !currentUser.user_id) {
      return;
    }

    const { user_id } = currentUser;

    if (isUserSynced(user_id)) {
      return;
    }

    const userExists = await checkUserExists(user_id);

    if (!userExists) {
      await createUserInDb(currentUser);
    }

    setUserSynced(user_id);
  } catch (error: any) {
    console.error("Erro ao sincronizar usuário com o banco de dados:", error);
  }
}

export function clearSyncCache(user_id: string): void {
  clearUserSyncCache(user_id);
}

export async function clearCurrentUserSyncCache(): Promise<void> {
  try {
    const currentUser = await authService.getCurrentUser();
    if (currentUser?.user_id) {
      clearUserSyncCache(currentUser.user_id);
    }
  } catch (error) {
    console.error("Erro ao limpar cache de sincronização:", error);
  }
}

