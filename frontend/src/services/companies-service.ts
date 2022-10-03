import api from "./api";

export const companiesService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

const baseUrl = "/companies";

async function getAll() {
  const response = await api.get(baseUrl);
  return response.data;
}

async function getById(company_id: string) {
  const response = await api.get(`${baseUrl}/${company_id}`);
  return response.data;
}

async function create(params: any) {
  const response = await api.post(baseUrl, params);
  return response.data;
}

async function update(id: string, params: any) {
  const response = await api.patch(`${baseUrl}/${id}`, params);
  return response.data;
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(id: string) {
  await api.delete(`${baseUrl}/${id}`);
}
