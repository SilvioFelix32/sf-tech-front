import api from './api';

export const priceItemService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

const baseUrl = `products/prices`

async function getAll(company: any, TableId: string, params: any) {
    const response = await api.get(`${company}/${baseUrl}/${TableId}/items`, params);
    return response.data;
}

async function getById(company: any, TableId: string, itemId: string) {
    const response = await api.get(`${company}/${baseUrl}/${TableId}/items/${itemId}`);
    return response.data;
}

async function create(company: any, TableId: string, params: any) {
    const response = await api.post(`${company}/${baseUrl}/${TableId}/items`, params);
    return response.data;
}

async function update(company: any, TableId: string, params: any, itemId: string) {
    const response = await api.patch(`${company}/${baseUrl}/${TableId}/items/${itemId}`, params);
    return response.data;
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(company: any, TableId: string, itemId: string) {
    await api.delete(`${company}/${baseUrl}/${TableId}/items/${itemId}`);
}