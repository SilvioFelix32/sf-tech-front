import { IProductCategories } from "../types/IProductCategories";
import api from "./api";

export const productCategoryService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

const baseUrl = "/product-categories";

async function getAll(company_id: string) {
  const response = await api.get(`${baseUrl}`, {
    headers: { company_id },
  });
  return response.data;
}

async function getById(product_id: string) {
  const response = await api.get(`${baseUrl}/${product_id}`);
  return response.data;
}

async function create(company_id: string, params: any) {
  const response = await api.post(`${baseUrl}`, params, {
    headers: { company_id },
  });
  return response.data;
}

async function update(company_id: string, product_id: string, params: any) {
  const response = await api.patch(
    `${baseUrl}/${product_id}`,
    {
      headers: { company_id },
    },
    params
  );
  return response.data;
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(company_id: string, product_id: string) {
  await api.delete(`${baseUrl}/${product_id}`),
    {
      headers: { company_id },
    };
}
