
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.14.0
 * Query Engine version: 2b0c12756921c891fec4f68d9444e18c7d5d4a6a
 */
Prisma.prismaVersion = {
  client: "3.14.0",
  engine: "2b0c12756921c891fec4f68d9444e18c7d5d4a6a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.CompanyScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  fantasy_name: 'fantasy_name',
  celphone1: 'celphone1',
  celphone2: 'celphone2',
  email: 'email',
  url_banner: 'url_banner',
  url_site: 'url_site',
  url_facebook: 'url_facebook',
  url_instagram: 'url_instagram',
  url_linkedin: 'url_linkedin',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.CompanyParamsScalarFieldEnum = makeEnum({
  id: 'id',
  company_id: 'company_id',
  environment: 'environment',
  obs_email: 'obs_email',
  obs_voucher: 'obs_voucher',
  privacy_policy: 'privacy_policy',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.ProductCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  company_id: 'company_id',
  product_type: 'product_type',
  config_type_id: 'config_type_id',
  title: 'title',
  description: 'description',
  url_banner: 'url_banner',
  active: 'active',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.ProductScalarFieldEnum = makeEnum({
  id: 'id',
  product_category_id: 'product_category_id',
  company_id: 'company_id',
  product_type: 'product_type',
  sku: 'sku',
  title: 'title',
  subtitle: 'subtitle',
  description: 'description',
  url_banner: 'url_banner',
  active: 'active',
  combo: 'combo',
  amount_min_sale: 'amount_min_sale',
  amount_max_sale: 'amount_max_sale',
  amount_max_total_diary: 'amount_max_total_diary',
  highlighted: 'highlighted',
  order_on_menu: 'order_on_menu',
  for_sale: 'for_sale',
  age_group: 'age_group',
  promotion: 'promotion',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.ItemSalesScalarFieldEnum = makeEnum({
  id: 'id',
  sale_id: 'sale_id',
  product_id: 'product_id',
  amount: 'amount',
  unitary_value: 'unitary_value',
  percent_discount: 'percent_discount',
  subtotal: 'subtotal',
  total: 'total',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.ProductComboScalarFieldEnum = makeEnum({
  id: 'id',
  product_id: 'product_id',
  item_id: 'item_id',
  amount: 'amount',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.ConfigProductExceptionScalarFieldEnum = makeEnum({
  id: 'id',
  product_id: 'product_id',
  date: 'date',
  action: 'action',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.ProductTotalSalesScalarFieldEnum = makeEnum({
  id: 'id',
  product_id: 'product_id',
  date: 'date',
  amount: 'amount',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.PriceTableScalarFieldEnum = makeEnum({
  id: 'id',
  company_id: 'company_id',
  description: 'description',
  initial_date: 'initial_date',
  final_date: 'final_date',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.ProductPricesTableScalarFieldEnum = makeEnum({
  id: 'id',
  price_table_id: 'price_table_id',
  product_id: 'product_id',
  value: 'value',
  value_promotion: 'value_promotion',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.SaleScalarFieldEnum = makeEnum({
  id: 'id',
  company_id: 'company_id',
  user_id: 'user_id',
  session: 'session',
  status: 'status',
  name: 'name',
  last_name: 'last_name',
  cellphone: 'cellphone',
  email: 'email',
  cep: 'cep',
  state: 'state',
  city: 'city',
  address: 'address',
  address_number: 'address_number',
  address_complement: 'address_complement',
  subtotal: 'subtotal',
  descount_voucher: 'descount_voucher',
  descount_percentage: 'descount_percentage',
  descount_value: 'descount_value',
  total: 'total',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.SalesHistoryScalarFieldEnum = makeEnum({
  id: 'id',
  sale_id: 'sale_id',
  historic: 'historic',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  company_id: 'company_id',
  document: 'document',
  name: 'name',
  last_name: 'last_name',
  sex_type: 'sex_type',
  birth_date: 'birth_date',
  celphone: 'celphone',
  email: 'email',
  cep: 'cep',
  state: 'state',
  city: 'city',
  neighborhood: 'neighborhood',
  address: 'address',
  address_number: 'address_number',
  address_complement: 'address_complement',
  active: 'active',
  email_confirmed: 'email_confirmed',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.Environment = makeEnum({
  PRODUCTION: 'PRODUCTION',
  HOMOLOGATION: 'HOMOLOGATION'
});

exports.ProductType = makeEnum({
  COMPUTADOR: 'COMPUTADOR',
  NOTEBOOK: 'NOTEBOOK',
  CELULAR: 'CELULAR',
  MOUSE: 'MOUSE',
  TECLADO: 'TECLADO',
  FONE_DE_SOM: 'FONE_DE_SOM',
  IMPRESSORA: 'IMPRESSORA',
  MONITOR: 'MONITOR',
  PERIFERICO: 'PERIFERICO',
  USB: 'USB',
  OUTROS: 'OUTROS'
});

exports.TypeActionExceptionProduct = makeEnum({
  BLOCK: 'BLOCK',
  RELEASE: 'RELEASE'
});

exports.SaleStatus = makeEnum({
  NEW: 'NEW',
  ABANDONED: 'ABANDONED',
  CHECKOUT: 'CHECKOUT',
  PAY: 'PAY',
  FAILURE: 'FAILURE',
  FINISHED: 'FINISHED'
});

exports.Sex = makeEnum({
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHERS: 'OTHERS'
});

exports.Prisma.ModelName = makeEnum({
  Company: 'Company',
  CompanyParams: 'CompanyParams',
  ProductCategory: 'ProductCategory',
  Product: 'Product',
  ItemSales: 'ItemSales',
  ProductCombo: 'ProductCombo',
  ConfigProductException: 'ConfigProductException',
  ProductTotalSales: 'ProductTotalSales',
  PriceTable: 'PriceTable',
  ProductPricesTable: 'ProductPricesTable',
  Sale: 'Sale',
  SalesHistory: 'SalesHistory',
  User: 'User'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
