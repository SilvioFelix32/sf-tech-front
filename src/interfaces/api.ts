
// API Types - Request/Response interfaces

import { IParamsRequest } from "./IParamsRequest"
import { ICategoryResponse, CategoryService } from "./ICategoryResponse"
import { ICompanyParams } from "./ICompanyParams"
import { IProductResponse, ProductsService, IProductInterface } from "./IProductResponse"
import { IUpdateProduct, StockLevel } from "./IProducts"
import { ISaleResponse, SaleService, ISaleSingleResponse } from "./ISaleResponse"
import { ISale, ISaleItem, ICreateSaleRequest, IUpdateSaleStatusRequest, SaleStatus, PaymentMethod } from "./ISale"

export type {
    ICategoryResponse, IParamsRequest, ICompanyParams,
    IProductResponse, IUpdateProduct, StockLevel,
    CategoryService, ProductsService, IProductInterface,
    ISaleResponse, SaleService, ISaleSingleResponse,
    ISale, ISaleItem, ICreateSaleRequest, IUpdateSaleStatusRequest
}

export { SaleStatus, PaymentMethod }