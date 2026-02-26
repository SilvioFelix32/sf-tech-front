import { salesApi } from "./api";
import { handleApiError } from "@/errors/errorHandler";
import {
  SaleService,
  ISale,
  ISaleResponse,
  ISaleSingleResponse,
  ICreateSaleRequest,
  IUpdateSaleStatusRequest,
} from "@/interfaces";

export const saleService: SaleService = {
  getAll,
  getById,
  create,
  updateStatus,
  delete: _delete,
};

const baseUrl = "/sales";

async function getAll(
  company_id: string,
  user_id?: string
): Promise<ISale[]> {
  try {
    const headers: Record<string, string> = {
      company_id,
    };

    if (user_id) {
      headers.user_id = user_id;
    }

    const response = await salesApi.get<ISaleResponse | ISale[]>(`${baseUrl}`, {
      headers,
    });
    
    if (response.data && "data" in response.data) {
      return (response.data as ISaleResponse).data;
    }
    
    return response.data as ISale[];
  } catch (error) {
    throw handleApiError(error);
  }
}

async function getById(company_id: string, saleId: string): Promise<ISale> {
  try {
    const response = await salesApi.get<ISaleSingleResponse | ISale>(
      `${baseUrl}/${saleId}`,
      {
        headers: {
          company_id,
        },
      }
    );
    // Se a resposta vier com wrapper { data: ISale }, extrair o data
    if (response.data && "data" in response.data) {
      return (response.data as ISaleSingleResponse).data;
    }
    return response.data as ISale;
  } catch (error) {
    throw handleApiError(error);
  }
}

async function create(
  company_id: string,
  user_id: string,
  params: ICreateSaleRequest
): Promise<ISale> {
  try {
    const response = await salesApi.post<ISale>(`${baseUrl}`, params, {
      headers: {
        company_id,
        user_id,
      },
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

async function updateStatus(
  company_id: string,
  saleId: string,
  params: IUpdateSaleStatusRequest
): Promise<ISale> {
  try {
    const response = await salesApi.patch<ISaleSingleResponse | ISale>(
      `${baseUrl}/update/${saleId}`,
      params,
      {
        headers: {
          company_id,
        },
      }
    );
    if (response.data && "data" in response.data) {
      return (response.data as ISaleSingleResponse).data;
    }
    return response.data as ISale;
  } catch (error) {
    throw handleApiError(error);
  }
}

async function _delete(company_id: string, saleId: string): Promise<void> {
  try {
    await salesApi.delete(`${baseUrl}/${saleId}`, {
      headers: {
        company_id,
      },
    });
  } catch (error) {
    throw handleApiError(error);
  }
}

