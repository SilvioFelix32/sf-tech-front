import api from "./api";
import { IProduct } from "../types";
import cookies from "js-cookie";

export const productsService = {
  getAll,
  search,
  getById,
  create,
  update,
  delete: _delete,
};

const baseUrl = "/products";
const nextauth = cookies.get("nextauth.token");

async function getAll(company_id: string, params: any) {
  const response = await api.get(`${baseUrl}`, {
    headers: { company_id },
    params,
  });
  return response.data;
}

async function search(company_id: string, params: any) {
  const response = await api.get(`${baseUrl}`, {
    headers: { company_id },
    params,
  });
  return response.data;
}

async function getById(product_id: string) {
  const response = await api.get<IProduct>(`${baseUrl}/${product_id}`);
  return response.data;
}

async function create(
  category_id: string,
  company_id: string,
  params: IProduct
) {
  const response = await api.post(`${baseUrl}/${category_id}`, params, {
    headers: { company_id },
  });
  return response.data;
}

async function update(
  company_id: string,
  product_id: string,
  params: IProduct
) {
  const response = await api.patch(`${baseUrl}/${product_id}`, params, {
    headers: { company_id, authorization: `Bearer ${nextauth}` },
  });
  return response.data;
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(product_id: string) {
  await api.delete(`${baseUrl}/${product_id}`, {
    headers: { authorization: `Bearer ${nextauth}` },
  });
}
