import api from "./api";
import { handleApiError } from "@/errors/errorHandler";
import {
  IDbUser,
  ICreateUserRequest,
  IUpdateUserRequest,
  DbUserService,
} from "../interfaces/IDbUser";

const baseUrl = "/sftech-users";

export const userService: DbUserService = {
  create,
  findById,
  update,
};

async function create(data: ICreateUserRequest): Promise<IDbUser> {
  try {
    const response = await api.post<IDbUser>(baseUrl, data);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

async function findById(user_id: string): Promise<IDbUser> {
  try {
    const response = await api.get<IDbUser>(`${baseUrl}/${user_id}`);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

async function update(
  user_id: string,
  data: IUpdateUserRequest
): Promise<IDbUser> {
  try {
    const response = await api.patch<IDbUser>(
      `${baseUrl}/${user_id}`,
      data
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}


