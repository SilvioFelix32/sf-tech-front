import api from './api';

export const productsService = {
    getAll,
    getById,
    getByAvailability,
    create,
    update,
    delete: _delete
};

const baseUrl = 'products'

async function getAll(company: string, params: any) {
    const response = await api.get(`${company}/${baseUrl}`, params);
    return response.data;
}

async function getById(company: string, id: string) {
    const response = await api.get(`${company}/${baseUrl}/${id}`);
    return response.data;
}

async function getByAvailability(company: string, params: any) {
    const response = await api.get(`${company}/${baseUrl}/availability`, { params });
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