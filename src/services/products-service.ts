import api from "./api";
import { handleApiError } from "@/errors/errorHandler";
import { getCookie } from "./cookie-service";
import { IProduct } from "../interfaces";
import {
  ProductsService,
  IParamsRequest,
  IProductResponse,
  IProductInterface,
} from "@/interfaces";

const nextauth = getCookie("nextauth.token");

export const productsService: ProductsService = {
  getAll,
  search,
  getById,
  create,
  update,
  delete: _delete,
};

const baseUrl = "/products";

async function getAll(params: IParamsRequest): Promise<IProductResponse> {
  try {
    const response = await api.get<IProductResponse>(`${baseUrl}`, {
      params,
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

async function search(searchTerm: string): Promise<IProductInterface> {
  try {
    const response = await api.get<IProductInterface>(
      `${baseUrl}?=${searchTerm}`
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

async function getById(product_id: string): Promise<IProduct> {
  try {
    const response = await api.get<IProduct>(`${baseUrl}/${product_id}`);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

async function create(
  category_id: string,
  params: IProduct
): Promise<IProduct> {
  try {
    console.log("TOKEN", nextauth);
    
    const response = await api.post<IProduct>(`${baseUrl}`, params, {
      headers: {
        category_id,
        authorization: `Bearer ${nextauth}`,
      },
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

async function update(product_id: string, params: IProduct): Promise<IProduct> {
  try {
    const response = await api.patch<IProduct>(
      `${baseUrl}/${product_id}`,
      params,
      {
        headers: {
          category_id: params.category_id,
          authorization: `Bearer ${nextauth}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

async function _delete(product_id: string): Promise<void> {
  try {
    await api.delete(`${baseUrl}/${product_id}`, {
      headers: { authorization: `Bearer ${nextauth}` },
    });
  } catch (error) {
    throw handleApiError(error);
  }
}
