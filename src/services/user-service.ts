import api from "./api";
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
  const response = await api.post<IDbUser>(baseUrl, data);
  return response.data;
}

async function findById(user_id: string): Promise<IDbUser> {
  const response = await api.get<IDbUser>(`${baseUrl}/${user_id}`);
  return response.data;
}

async function update(
  user_id: string,
  data: IUpdateUserRequest
): Promise<IDbUser> {
  const response = await api.patch<IDbUser>(
    `${baseUrl}/${user_id}`,
    data
  );
  return response.data;
}


