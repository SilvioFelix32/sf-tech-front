import api from "./api";
import { AxiosError } from "axios";
import { IProductCategory } from "../types";
import { getCookie } from "./cookie-service";
import {
  CategoryService,
  IParamsRequest,
  ICategoryResponse,
} from "./interfaces";

export const categoryService: CategoryService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

const baseUrl = "/categories";
const nextauth = getCookie("nextauth.token");

async function getAll(
  company_id: string,
  params: IParamsRequest
): Promise<ICategoryResponse> {
  try {
    const response = await api.get<ICategoryResponse>(`${baseUrl}`, {
      headers: { company_id },
      params,
    });
    return response.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
}

async function getById(category_id: string): Promise<IProductCategory> {
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

function handleAxiosError(error: AxiosError) {
  if (error.response) {
    console.error("Response error:", error.response.data);
  } else if (error.request) {
    console.error("Request error:", error.request);
  } else {
    console.error("Error:", error.message);
  }
}
