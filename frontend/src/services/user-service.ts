import { IUser } from "../types/IUser";
import api from "./api";

export const userService = {
  login,
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

const baseUrl = "/users";

async function login(params: any) {
  const response = await api.post("login", params);
  return response.data;
}

async function getAll(company_id: string) {
  const response = await api.get<IUser[]>(`${baseUrl}`, {
    headers: { company_id },
  });
  return response.data;
}

async function getById(company_id: string, user_id: string) {
  const response = await api.get<IUser>(`${baseUrl}/${user_id}`, {
    headers: { company_id },
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

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(company_id: string, user_id: string) {
  await api.delete(`${baseUrl}/${user_id}`, {
    headers: { company_id },
  });
}
