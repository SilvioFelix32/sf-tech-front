import api from "./api";
import { AxiosError } from "axios";
import { IProduct } from "../types";
import cookies from "js-cookie";
import { IProductResponse } from "../types/IProductResponse";

const nextauth = cookies.get("nextauth.token");
interface ProductsService {
  getAll: (company_id: string, params: any) => Promise<IProductResponse>;
  search: (company_id: string, params: string) => Promise<IProductResponse>;
  getById: (product_id: string) => Promise<IProduct>;
  create: (company_id: string, params: IProduct) => Promise<IProduct>;
  update: (
    company_id: string,
    product_id: string,
    params: IProduct
  ) => Promise<IProduct>;
  delete: (product_id: string) => Promise<void>;
}

const productsService: ProductsService = {
  getAll,
  search,
  getById,
  create,
  update,
  delete: _delete,
};

const baseUrl = "/products";

async function getAll(
  company_id: string,
  params: any
): Promise<IProductResponse> {
  try {
    const response = await api.get<IProductResponse>(`${baseUrl}`, {
      headers: { company_id },
      params,
    });
    return response.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
}

async function search(
  company_id: string,
  params: string
): Promise<IProductResponse> {
  try {
    const response = await api.get<IProductResponse>(`${baseUrl}?=${params}`, {
      headers: { company_id },
    });
    return response.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
}

async function getById(product_id: string): Promise<IProduct> {
  try {
    const response = await api.get<IProduct>(`${baseUrl}/${product_id}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
}

async function create(company_id: string, params: IProduct): Promise<IProduct> {
  try {
    const response = await api.post<IProduct>(`${baseUrl}`, params, {
      headers: { company_id },
    });
    return response.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
}

async function update(
  company_id: string,
  product_id: string,
  params: IProduct
): Promise<IProduct> {
  try {
    const response = await api.patch<IProduct>(
      `${baseUrl}/${product_id}`,
      params,
      {
        headers: { company_id, authorization: `Bearer ${nextauth}` },
      }
    );
    return response.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
}

async function _delete(product_id: string): Promise<void> {
  try {
    await api.delete(`${baseUrl}/${product_id}`, {
      headers: { authorization: `Bearer ${nextauth}` },
    });
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
}

function handleAxiosError(error: AxiosError) {
  if (error.response) {
    // Erro de resposta do servidor (por exemplo, status de erro HTTP)
    console.error("Response error:", error.response.data);
  } else if (error.request) {
    // A requisição foi feita, mas não houve resposta do servidor
    console.error("Request error:", error.request);
  } else {
    // Erro ao configurar a requisição ou ao processar a resposta
    console.error("Error:", error.message);
  }
}

export default productsService;
