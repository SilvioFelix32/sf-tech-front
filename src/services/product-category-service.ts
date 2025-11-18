import api from "./api";
import { IProductCategory } from "../interfaces";
import { getCookie } from "./cookie-service";
import {
  CategoryService,
  IParamsRequest,
  ICategoryResponse,
} from "@/interfaces";
import { handleApiError } from "../errors/errorHandler";

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
    throw handleApiError(error);
  }
}

async function getById(category_id: string): Promise<IProductCategory> {
  try {
    const response = await api.get<IProductCategory>(
      `${baseUrl}/${category_id}`
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

async function create(company_id: string, params: IProductCategory) {
  try {
    const response = await api.post(`${baseUrl}`, params, {
      headers: { company_id },
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

async function update(
  company_id: string,
  category_id: string,
  params: IProductCategory
) {
  try {
    const response = await api.patch(`${baseUrl}/${category_id}`, params, {
      headers: { company_id, authorization: `Bearer ${nextauth}` },
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(category_id: string) {
  try {
    await api.delete(`${baseUrl}/${category_id}`, {
      headers: { authorization: `Bearer ${nextauth}` },
    });
  } catch (error) {
    throw handleApiError(error);
  }
}
