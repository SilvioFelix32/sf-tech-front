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
    headers: { company_id },
  });
  return response.data;
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(product_id: string) {
  await api.delete(`${baseUrl}/${product_id}`);
}
