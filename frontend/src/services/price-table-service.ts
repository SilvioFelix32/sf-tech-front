import api from "./api";

export const productsPricesService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

const baseUrl = "/product-prices";

async function getAll(company_id: string) {
  const response = await api.get(`${baseUrl}`, { headers: { company_id } });
  return response.data;
}

async function getById(company: string, price_table_id: string) {
  const response = await api.get(`${company}/${baseUrl}/${price_table_id}`);
  return response.data;
}

async function create(company: string, params: any) {
  const response = await api.post(`${company}/${baseUrl}`, params);
  return response.data;
}

async function update(company: string, id: string, params: any) {
  const response = await api.patch(`${company}/${baseUrl}/${id}`, params);
  return response.data;
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(company: string, id: string) {
  await api.delete(`${company}/${baseUrl}/${id}`);
}
