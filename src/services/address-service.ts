import api from "./api";
import { IAddress } from "../interfaces/IDbUser";

const baseUrl = "/addresses";

export interface AddressService {
  create: (data: Omit<IAddress, "address_id" | "createdAt" | "updatedAt">) => Promise<IAddress>;
  findAll: (user_id: string) => Promise<IAddress[]>;
  findOne: (address_id: string) => Promise<IAddress>;
  update: (address_id: string, data: Partial<IAddress>) => Promise<IAddress>;
  remove: (address_id: string) => Promise<void>;
}

export const addressService: AddressService = {
  create,
  findAll,
  findOne,
  update,
  remove,
};

async function create(data: Omit<IAddress, "address_id" | "createdAt" | "updatedAt">): Promise<IAddress> {
  const response = await api.post<IAddress>(baseUrl, data);
  return response.data;
}

async function findAll(user_id: string): Promise<IAddress[]> {
  const response = await api.get<IAddress[]>(`${baseUrl}/user/${user_id}`);
  return response.data;
}

async function findOne(address_id: string): Promise<IAddress> {
  const response = await api.get<IAddress>(`${baseUrl}/${address_id}`);
  return response.data;
}

async function update(address_id: string, data: Partial<IAddress>): Promise<IAddress> {
  const response = await api.patch<IAddress>(`${baseUrl}/${address_id}`, data);
  return response.data;
}

async function remove(address_id: string): Promise<void> {
  await api.delete(`${baseUrl}/${address_id}`);
}

