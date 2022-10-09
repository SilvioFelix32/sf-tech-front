import api from "./api";
import { IProduct } from "../types";

export const productsService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

const baseUrl = "/products";

async function getAll(company_id: string) {
  const response = await api.get<IProduct[]>(`${baseUrl}`, {
    headers: { company_id },
  });
  return response.data;
}

async function getById(product_id: string) {
  const response = await api.get<IProduct>(`${baseUrl}/${product_id}`);
  return response.data;
}

async function create(company_id: string, params: any) {
  //https://i.imgur.com/2HFGvvT.png
  const response = await api.post(`${company_id}/${baseUrl}`, params);
  return response.data;
}

async function update(company_id: string, product_id: string, params: any) {
  const response = await api.patch(
    `${company_id}/${baseUrl}/${product_id}`,
    params
  );
  return response.data;
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(company_id: string, product_id: string) {
  await api.delete(`${company_id}/${baseUrl}/${product_id}`);
}
