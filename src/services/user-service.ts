import api from "./api";
import { IUser } from "../types/IUser";
import { cookiesService } from ".";
import {
  IUserLoginParams,
  IUsersResponse,
  UserService,
} from "./interfaces/IUserResponse";
import { IParamsRequest } from "./interfaces/IParamsRequest";

export const userService: UserService = {
  login,
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

const nextauth = cookiesService?.getCookie("nextauth.token");
const baseUrl = "/users";

async function login(params: IUserLoginParams) {
  const response = await api.post("login", params);
  return response;
}

async function getAll(
  company_id: string,
  params: IParamsRequest
): Promise<IUsersResponse> {
  try {
    const response = await api.get<IUsersResponse>(`${baseUrl}`, {
      headers: { company_id },
      params,
    });
    return response.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
}

async function getById(company_id: string, user_id: string): Promise<IUser> {
  const response = await api.get<IUser>(`${baseUrl}/${user_id}`, {
    headers: { company_id, authorization: `Bearer ${nextauth}` },
  });
  return response.data;
}

async function create(company_id: string, params: IUser) {
  const response = await api.post(`${baseUrl}`, params, {
    headers: { company_id },
  });
  return response.data;
}

async function update(company_id: string, user_id: string, params: IUser) {
  const response = await api.patch(`${baseUrl}/${user_id}`, params, {
    headers: { company_id },
  });
  return response.data;
}

async function _delete(company_id: string, user_id: string) {
  await api.delete(`${baseUrl}/${user_id}`, {
    headers: { company_id },
  });
}

function handleAxiosError(error: any) {
  throw new Error("Function not implemented.");
}
