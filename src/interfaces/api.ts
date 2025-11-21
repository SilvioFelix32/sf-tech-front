
// API Types - Request/Response interfaces

import { IParamsRequest } from "./IParamsRequest"
import { ICategoryResponse, CategoryService } from "./ICategoryResponse"
import { ICompanyParams } from "./ICompanyParams"
import { IProductResponse, ProductsService, IProductInterface } from "./IProductResponse"
import { IUsersResponse, UserService, IUserLoginParams } from "./IUserResponse"
import { IUpdateProduct } from "./IProducts"
import { ISaleResponse, SaleService, ISaleSingleResponse } from "./ISaleResponse"
import { ISale, ISaleItem, ICreateSaleRequest } from "./ISale"

export type {
    ICategoryResponse, IParamsRequest, ICompanyParams,
    IProductResponse, IUsersResponse, IUpdateProduct,
    CategoryService, ProductsService, IProductInterface,
    UserService, IUserLoginParams,
    ISaleResponse, SaleService, ISaleSingleResponse,
    ISale, ISaleItem, ICreateSaleRequest
}