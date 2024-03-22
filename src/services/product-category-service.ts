import api from "./api";
import { IProductCategory } from "../types";
import cookies from "js-cookie";

export const productCategoryService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

const baseUrl = "/categories";
const nextauth = cookies.get("nextauth.token");

async function getAll(company_id: string, params: any) {
  const response = await api.get(`${baseUrl}`, {
    headers: { company_id },
    params,
  });
  return response.data;
}

async function getById(category_id: string) {
  const response = await api.get<IProductCategory>(`${baseUrl}/${category_id}`);
  return response.data;
}

async function create(company_id: string, params: IProductCategory) {
  const response = await api.post(`${baseUrl}`, params, {
    headers: { company_id },
  });
  return response.data;
}

async function update(
  company_id: string,
  category_id: string,
  params: IProductCategory
) {
  const response = await api.patch(`${baseUrl}/${category_id}`, params, {
    headers: { company_id, authorization: `Bearer ${nextauth}` },
  });
  return response.data;
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(category_id: string) {
  await api.delete(`${baseUrl}/${category_id}`, {
    headers: { authorization: `Bearer ${nextauth}` },
  });
}
