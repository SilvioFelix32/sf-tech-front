export type Gender = "Male" | "Female" | "Other";

export type AddressType = "House" | "Work" | "Temporary";

export type AddressPreference = "House" | "Work" | "Temporary";

export interface IAddress {
    address_id?: string;
    user_id: string;
    address_type: AddressType;
    address_preference: AddressPreference;
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    cep: string;
    createdAt?: string | Date;
    updatedAt?: string | Date;
}

export interface IDbUser {
    user_id?: string;
    first_name: string;
    last_name: string;
    email: string;
    cpf: string;
    cellphone: string;
    birthdate: string;
    gender: Gender;
    addresses?: IAddress[];
    createdAt?: string | Date;
    updatedAt?: string | Date;
}

export type ICreateUserRequest = Omit<
    IDbUser,
    "user_id" | "createdAt" | "updatedAt"
>;

export type IUpdateUserRequest = Partial<ICreateUserRequest>;

export interface DbUserService {
    create: (data: ICreateUserRequest) => Promise<IDbUser>;
    findById: (user_id: string) => Promise<IDbUser>;
    update: (
        user_id: string,
        data: IUpdateUserRequest
    ) => Promise<IDbUser>;
}


