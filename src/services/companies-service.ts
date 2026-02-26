import api from "./api";
import { handleApiError } from "@/errors/errorHandler";
import { ICompanyParams } from "@/interfaces";

export const companiesService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

const baseUrl = "/companies";

async function getAll() {
  try {
    const response = await api.get(baseUrl);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

async function getById(company_id: string) {
  try {
    const response = await api.get(`${baseUrl}/${company_id}`);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

async function create(body: ICompanyParams) {
  try {
    const response = await api.post(baseUrl, body);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

async function update(id: string, params: ICompanyParams) {
  try {
    const response = await api.patch(`${baseUrl}/${id}`, params);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(id: string) {
  try {
    await api.delete(`${baseUrl}/${id}`);
  } catch (error) {
    throw handleApiError(error);
  }
}
