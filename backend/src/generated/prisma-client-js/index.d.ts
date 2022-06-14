
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Company
 * 
 */
export type Company = {
  id: string
  name: string
  fantasy_name: string | null
  celphone1: string
  celphone2: string | null
  email: string
  url_banner: string | null
  url_site: string | null
  url_facebook: string | null
  url_instagram: string | null
  url_linkedin: string | null
  created_at: Date
  updated_at: Date
}

/**
 * Model CompanyParams
 * 
 */
export type CompanyParams = {
  id: string
  company_id: string
  environment: Environment | null
  obs_email: string | null
  obs_voucher: string | null
  privacy_policy: string | null
  created_at: Date
  updated_at: Date
}

/**
 * Model ProductCategory
 * 
 */
export type ProductCategory = {
  id: string
  company_id: string
  product_type: ProductType
  config_type_id: string | null
  title: string
  description: string
  url_banner: string | null
  active: boolean
  created_at: Date
  updated_at: Date
}

/**
 * Model Product
 * 
 */
export type Product = {
  id: string
  product_category_id: string
  company_id: string
  product_type: ProductType
  sku: string
  title: string
  subtitle: string
  description: string
  url_banner: string | null
  active: boolean
  combo: boolean | null
  amount_min_sale: number | null
  amount_max_sale: number | null
  amount_max_total_diary: number | null
  highlighted: boolean | null
  order_on_menu: number | null
  for_sale: boolean | null
  age_group: string | null
  promotion: boolean | null
  created_at: Date
  updated_at: Date
}

/**
 * Model ItemSales
 * 
 */
export type ItemSales = {
  id: string
  sale_id: string
  product_id: string
  amount: number
  unitary_value: number
  percent_discount: number
  subtotal: number
  total: number
  created_at: Date
  updated_at: Date
}

/**
 * Model ProductCombo
 * 
 */
export type ProductCombo = {
  id: string
  product_id: string
  item_id: string
  amount: number
  created_at: Date
  updated_at: Date
}

/**
 * Model ConfigProductException
 * 
 */
export type ConfigProductException = {
  id: string
  product_id: string
  date: Date
  action: TypeActionExceptionProduct
  created_at: Date
  updated_at: Date
}

/**
 * Model ProductTotalSales
 * 
 */
export type ProductTotalSales = {
  id: string
  product_id: string
  date: Date
  amount: number
  created_at: Date
  updated_at: Date
}

/**
 * Model PriceTable
 * 
 */
export type PriceTable = {
  id: string
  company_id: string
  description: string
  initial_date: Date | null
  final_date: Date | null
  created_at: Date
  updated_at: Date
}

/**
 * Model ProductPricesTable
 * 
 */
export type ProductPricesTable = {
  id: string
  price_table_id: string
  product_id: string
  value: number
  value_promotion: number
  created_at: Date
  updated_at: Date
}

/**
 * Model Sale
 * 
 */
export type Sale = {
  id: string
  company_id: string
  user_id: string
  session: string | null
  status: SaleStatus
  name: string
  last_name: string
  cellphone: string
  email: string
  cep: string
  state: string
  city: string
  address: string
  address_number: string | null
  address_complement: string | null
  subtotal: number
  descount_voucher: string | null
  descount_percentage: number | null
  descount_value: number | null
  total: number
  created_at: Date
  updated_at: Date
}

/**
 * Model SalesHistory
 * 
 */
export type SalesHistory = {
  id: string
  sale_id: string
  historic: string
  created_at: Date
  updated_at: Date
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  company_id: string
  document: string | null
  name: string
  last_name: string
  sex_type: Sex | null
  birth_date: Date | null
  celphone: string | null
  email: string
  cep: string | null
  state: string | null
  city: string | null
  neighborhood: string | null
  address: string | null
  address_number: string | null
  address_complement: string | null
  active: boolean | null
  email_confirmed: boolean | null
  created_at: Date
  updated_at: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Environment: {
  PRODUCTION: 'PRODUCTION',
  HOMOLOGATION: 'HOMOLOGATION'
};

export type Environment = (typeof Environment)[keyof typeof Environment]


export const ProductType: {
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
};

export type ProductType = (typeof ProductType)[keyof typeof ProductType]


export const TypeActionExceptionProduct: {
  BLOCK: 'BLOCK',
  RELEASE: 'RELEASE'
};

export type TypeActionExceptionProduct = (typeof TypeActionExceptionProduct)[keyof typeof TypeActionExceptionProduct]


export const SaleStatus: {
  NEW: 'NEW',
  ABANDONED: 'ABANDONED',
  CHECKOUT: 'CHECKOUT',
  PAY: 'PAY',
  FAILURE: 'FAILURE',
  FINISHED: 'FINISHED'
};

export type SaleStatus = (typeof SaleStatus)[keyof typeof SaleStatus]


export const Sex: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHERS: 'OTHERS'
};

export type Sex = (typeof Sex)[keyof typeof Sex]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): PrismaPromise<Prisma.JsonObject>;

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<GlobalReject>;

  /**
   * `prisma.companyParams`: Exposes CRUD operations for the **CompanyParams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyParams
    * const companyParams = await prisma.companyParams.findMany()
    * ```
    */
  get companyParams(): Prisma.CompanyParamsDelegate<GlobalReject>;

  /**
   * `prisma.productCategory`: Exposes CRUD operations for the **ProductCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductCategories
    * const productCategories = await prisma.productCategory.findMany()
    * ```
    */
  get productCategory(): Prisma.ProductCategoryDelegate<GlobalReject>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<GlobalReject>;

  /**
   * `prisma.itemSales`: Exposes CRUD operations for the **ItemSales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemSales
    * const itemSales = await prisma.itemSales.findMany()
    * ```
    */
  get itemSales(): Prisma.ItemSalesDelegate<GlobalReject>;

  /**
   * `prisma.productCombo`: Exposes CRUD operations for the **ProductCombo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductCombos
    * const productCombos = await prisma.productCombo.findMany()
    * ```
    */
  get productCombo(): Prisma.ProductComboDelegate<GlobalReject>;

  /**
   * `prisma.configProductException`: Exposes CRUD operations for the **ConfigProductException** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConfigProductExceptions
    * const configProductExceptions = await prisma.configProductException.findMany()
    * ```
    */
  get configProductException(): Prisma.ConfigProductExceptionDelegate<GlobalReject>;

  /**
   * `prisma.productTotalSales`: Exposes CRUD operations for the **ProductTotalSales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductTotalSales
    * const productTotalSales = await prisma.productTotalSales.findMany()
    * ```
    */
  get productTotalSales(): Prisma.ProductTotalSalesDelegate<GlobalReject>;

  /**
   * `prisma.priceTable`: Exposes CRUD operations for the **PriceTable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceTables
    * const priceTables = await prisma.priceTable.findMany()
    * ```
    */
  get priceTable(): Prisma.PriceTableDelegate<GlobalReject>;

  /**
   * `prisma.productPricesTable`: Exposes CRUD operations for the **ProductPricesTable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductPricesTables
    * const productPricesTables = await prisma.productPricesTable.findMany()
    * ```
    */
  get productPricesTable(): Prisma.ProductPricesTableDelegate<GlobalReject>;

  /**
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<GlobalReject>;

  /**
   * `prisma.salesHistory`: Exposes CRUD operations for the **SalesHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesHistories
    * const salesHistories = await prisma.salesHistory.findMany()
    * ```
    */
  get salesHistory(): Prisma.SalesHistoryDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.14.0
   * Query Engine version: 2b0c12756921c891fec4f68d9444e18c7d5d4a6a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */


  export type CompanyCountOutputType = {
    company_params: number
    product_category: number
    sales: number
    price_tables: number
    products: number
    users: number
  }

  export type CompanyCountOutputTypeSelect = {
    company_params?: boolean
    product_category?: boolean
    sales?: boolean
    price_tables?: boolean
    products?: boolean
    users?: boolean
  }

  export type CompanyCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CompanyCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CompanyCountOutputType
    : S extends undefined
    ? never
    : S extends CompanyCountOutputTypeArgs
    ?'include' extends U
    ? CompanyCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CompanyCountOutputType ? CompanyCountOutputType[P] : never
  } 
    : CompanyCountOutputType
  : CompanyCountOutputType




  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     * 
    **/
    select?: CompanyCountOutputTypeSelect | null
  }



  /**
   * Count Type ProductCategoryCountOutputType
   */


  export type ProductCategoryCountOutputType = {
    products: number
  }

  export type ProductCategoryCountOutputTypeSelect = {
    products?: boolean
  }

  export type ProductCategoryCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProductCategoryCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProductCategoryCountOutputType
    : S extends undefined
    ? never
    : S extends ProductCategoryCountOutputTypeArgs
    ?'include' extends U
    ? ProductCategoryCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ProductCategoryCountOutputType ? ProductCategoryCountOutputType[P] : never
  } 
    : ProductCategoryCountOutputType
  : ProductCategoryCountOutputType




  // Custom InputTypes

  /**
   * ProductCategoryCountOutputType without action
   */
  export type ProductCategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductCategoryCountOutputType
     * 
    **/
    select?: ProductCategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type ProductCountOutputType
   */


  export type ProductCountOutputType = {
    items: number
    config_product_exeption: number
    total_sale: number
    product_item: number
    sales_item: number
    price_table: number
  }

  export type ProductCountOutputTypeSelect = {
    items?: boolean
    config_product_exeption?: boolean
    total_sale?: boolean
    product_item?: boolean
    sales_item?: boolean
    price_table?: boolean
  }

  export type ProductCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProductCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProductCountOutputType
    : S extends undefined
    ? never
    : S extends ProductCountOutputTypeArgs
    ?'include' extends U
    ? ProductCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ProductCountOutputType ? ProductCountOutputType[P] : never
  } 
    : ProductCountOutputType
  : ProductCountOutputType




  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     * 
    **/
    select?: ProductCountOutputTypeSelect | null
  }



  /**
   * Count Type PriceTableCountOutputType
   */


  export type PriceTableCountOutputType = {
    products: number
  }

  export type PriceTableCountOutputTypeSelect = {
    products?: boolean
  }

  export type PriceTableCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PriceTableCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PriceTableCountOutputType
    : S extends undefined
    ? never
    : S extends PriceTableCountOutputTypeArgs
    ?'include' extends U
    ? PriceTableCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof PriceTableCountOutputType ? PriceTableCountOutputType[P] : never
  } 
    : PriceTableCountOutputType
  : PriceTableCountOutputType




  // Custom InputTypes

  /**
   * PriceTableCountOutputType without action
   */
  export type PriceTableCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PriceTableCountOutputType
     * 
    **/
    select?: PriceTableCountOutputTypeSelect | null
  }



  /**
   * Count Type SaleCountOutputType
   */


  export type SaleCountOutputType = {
    items: number
    history: number
  }

  export type SaleCountOutputTypeSelect = {
    items?: boolean
    history?: boolean
  }

  export type SaleCountOutputTypeGetPayload<
    S extends boolean | null | undefined | SaleCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? SaleCountOutputType
    : S extends undefined
    ? never
    : S extends SaleCountOutputTypeArgs
    ?'include' extends U
    ? SaleCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof SaleCountOutputType ? SaleCountOutputType[P] : never
  } 
    : SaleCountOutputType
  : SaleCountOutputType




  // Custom InputTypes

  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SaleCountOutputType
     * 
    **/
    select?: SaleCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    Sale: number
  }

  export type UserCountOutputTypeSelect = {
    Sale?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Company
   */


  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    fantasy_name: string | null
    celphone1: string | null
    celphone2: string | null
    email: string | null
    url_banner: string | null
    url_site: string | null
    url_facebook: string | null
    url_instagram: string | null
    url_linkedin: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    fantasy_name: string | null
    celphone1: string | null
    celphone2: string | null
    email: string | null
    url_banner: string | null
    url_site: string | null
    url_facebook: string | null
    url_instagram: string | null
    url_linkedin: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    fantasy_name: number
    celphone1: number
    celphone2: number
    email: number
    url_banner: number
    url_site: number
    url_facebook: number
    url_instagram: number
    url_linkedin: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    fantasy_name?: true
    celphone1?: true
    celphone2?: true
    email?: true
    url_banner?: true
    url_site?: true
    url_facebook?: true
    url_instagram?: true
    url_linkedin?: true
    created_at?: true
    updated_at?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    fantasy_name?: true
    celphone1?: true
    celphone2?: true
    email?: true
    url_banner?: true
    url_site?: true
    url_facebook?: true
    url_instagram?: true
    url_linkedin?: true
    created_at?: true
    updated_at?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    fantasy_name?: true
    celphone1?: true
    celphone2?: true
    email?: true
    url_banner?: true
    url_site?: true
    url_facebook?: true
    url_instagram?: true
    url_linkedin?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CompanyAggregateArgs = {
    /**
     * Filter which Company to aggregate.
     * 
    **/
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     * 
    **/
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs = {
    where?: CompanyWhereInput
    orderBy?: Enumerable<CompanyOrderByWithAggregationInput>
    by: Array<CompanyScalarFieldEnum>
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }


  export type CompanyGroupByOutputType = {
    id: string
    name: string
    fantasy_name: string | null
    celphone1: string
    celphone2: string | null
    email: string
    url_banner: string | null
    url_site: string | null
    url_facebook: string | null
    url_instagram: string | null
    url_linkedin: string | null
    created_at: Date
    updated_at: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect = {
    id?: boolean
    name?: boolean
    fantasy_name?: boolean
    celphone1?: boolean
    celphone2?: boolean
    email?: boolean
    url_banner?: boolean
    url_site?: boolean
    url_facebook?: boolean
    url_instagram?: boolean
    url_linkedin?: boolean
    created_at?: boolean
    updated_at?: boolean
    company_params?: boolean | CompanyParamsFindManyArgs
    product_category?: boolean | ProductCategoryFindManyArgs
    sales?: boolean | SaleFindManyArgs
    price_tables?: boolean | PriceTableFindManyArgs
    products?: boolean | ProductFindManyArgs
    users?: boolean | UserFindManyArgs
    _count?: boolean | CompanyCountOutputTypeArgs
  }

  export type CompanyInclude = {
    company_params?: boolean | CompanyParamsFindManyArgs
    product_category?: boolean | ProductCategoryFindManyArgs
    sales?: boolean | SaleFindManyArgs
    price_tables?: boolean | PriceTableFindManyArgs
    products?: boolean | ProductFindManyArgs
    users?: boolean | UserFindManyArgs
    _count?: boolean | CompanyCountOutputTypeArgs
  }

  export type CompanyGetPayload<
    S extends boolean | null | undefined | CompanyArgs,
    U = keyof S
      > = S extends true
        ? Company
    : S extends undefined
    ? never
    : S extends CompanyArgs | CompanyFindManyArgs
    ?'include' extends U
    ? Company  & {
    [P in TrueKeys<S['include']>]:
        P extends 'company_params' ? Array < CompanyParamsGetPayload<S['include'][P]>>  :
        P extends 'product_category' ? Array < ProductCategoryGetPayload<S['include'][P]>>  :
        P extends 'sales' ? Array < SaleGetPayload<S['include'][P]>>  :
        P extends 'price_tables' ? Array < PriceTableGetPayload<S['include'][P]>>  :
        P extends 'products' ? Array < ProductGetPayload<S['include'][P]>>  :
        P extends 'users' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends '_count' ? CompanyCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'company_params' ? Array < CompanyParamsGetPayload<S['select'][P]>>  :
        P extends 'product_category' ? Array < ProductCategoryGetPayload<S['select'][P]>>  :
        P extends 'sales' ? Array < SaleGetPayload<S['select'][P]>>  :
        P extends 'price_tables' ? Array < PriceTableGetPayload<S['select'][P]>>  :
        P extends 'products' ? Array < ProductGetPayload<S['select'][P]>>  :
        P extends 'users' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends '_count' ? CompanyCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Company ? Company[P] : never
  } 
    : Company
  : Company


  type CompanyCountArgs = Merge<
    Omit<CompanyFindManyArgs, 'select' | 'include'> & {
      select?: CompanyCountAggregateInputType | true
    }
  >

  export interface CompanyDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompanyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CompanyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Company'> extends True ? CheckSelect<T, Prisma__CompanyClient<Company>, Prisma__CompanyClient<CompanyGetPayload<T>>> : CheckSelect<T, Prisma__CompanyClient<Company | null >, Prisma__CompanyClient<CompanyGetPayload<T> | null >>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompanyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CompanyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Company'> extends True ? CheckSelect<T, Prisma__CompanyClient<Company>, Prisma__CompanyClient<CompanyGetPayload<T>>> : CheckSelect<T, Prisma__CompanyClient<Company | null >, Prisma__CompanyClient<CompanyGetPayload<T> | null >>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompanyFindManyArgs>(
      args?: SelectSubset<T, CompanyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Company>>, PrismaPromise<Array<CompanyGetPayload<T>>>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
    **/
    create<T extends CompanyCreateArgs>(
      args: SelectSubset<T, CompanyCreateArgs>
    ): CheckSelect<T, Prisma__CompanyClient<Company>, Prisma__CompanyClient<CompanyGetPayload<T>>>

    /**
     * Create many Companies.
     *     @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompanyCreateManyArgs>(
      args?: SelectSubset<T, CompanyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
    **/
    delete<T extends CompanyDeleteArgs>(
      args: SelectSubset<T, CompanyDeleteArgs>
    ): CheckSelect<T, Prisma__CompanyClient<Company>, Prisma__CompanyClient<CompanyGetPayload<T>>>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompanyUpdateArgs>(
      args: SelectSubset<T, CompanyUpdateArgs>
    ): CheckSelect<T, Prisma__CompanyClient<Company>, Prisma__CompanyClient<CompanyGetPayload<T>>>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompanyDeleteManyArgs>(
      args?: SelectSubset<T, CompanyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompanyUpdateManyArgs>(
      args: SelectSubset<T, CompanyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
    **/
    upsert<T extends CompanyUpsertArgs>(
      args: SelectSubset<T, CompanyUpsertArgs>
    ): CheckSelect<T, Prisma__CompanyClient<Company>, Prisma__CompanyClient<CompanyGetPayload<T>>>

    /**
     * Find zero or more Companies that matches the filter.
     * @param {CompanyFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const company = await prisma.company.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CompanyFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Company.
     * @param {CompanyAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const company = await prisma.company.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CompanyAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CompanyClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    company_params<T extends CompanyParamsFindManyArgs = {}>(args?: Subset<T, CompanyParamsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<CompanyParams>>, PrismaPromise<Array<CompanyParamsGetPayload<T>>>>;

    product_category<T extends ProductCategoryFindManyArgs = {}>(args?: Subset<T, ProductCategoryFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ProductCategory>>, PrismaPromise<Array<ProductCategoryGetPayload<T>>>>;

    sales<T extends SaleFindManyArgs = {}>(args?: Subset<T, SaleFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Sale>>, PrismaPromise<Array<SaleGetPayload<T>>>>;

    price_tables<T extends PriceTableFindManyArgs = {}>(args?: Subset<T, PriceTableFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PriceTable>>, PrismaPromise<Array<PriceTableGetPayload<T>>>>;

    products<T extends ProductFindManyArgs = {}>(args?: Subset<T, ProductFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Product>>, PrismaPromise<Array<ProductGetPayload<T>>>>;

    users<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * Throw an Error if a Company can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Company to fetch.
     * 
    **/
    where: CompanyWhereUniqueInput
  }


  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * Throw an Error if a Company can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Company to fetch.
     * 
    **/
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     * 
    **/
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     * 
    **/
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     * 
    **/
    distinct?: Enumerable<CompanyScalarFieldEnum>
  }


  /**
   * Company findMany
   */
  export type CompanyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * Filter, which Companies to fetch.
     * 
    **/
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     * 
    **/
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     * 
    **/
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CompanyScalarFieldEnum>
  }


  /**
   * Company create
   */
  export type CompanyCreateArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * The data needed to create a Company.
     * 
    **/
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }


  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs = {
    /**
     * The data used to create many Companies.
     * 
    **/
    data: Enumerable<CompanyCreateManyInput>
  }


  /**
   * Company update
   */
  export type CompanyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * The data needed to update a Company.
     * 
    **/
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     * 
    **/
    where: CompanyWhereUniqueInput
  }


  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs = {
    /**
     * The data used to update Companies.
     * 
    **/
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     * 
    **/
    where?: CompanyWhereInput
  }


  /**
   * Company upsert
   */
  export type CompanyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * The filter to search for the Company to update in case it exists.
     * 
    **/
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     * 
    **/
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }


  /**
   * Company delete
   */
  export type CompanyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * Filter which Company to delete.
     * 
    **/
    where: CompanyWhereUniqueInput
  }


  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs = {
    /**
     * Filter which Companies to delete
     * 
    **/
    where?: CompanyWhereInput
  }


  /**
   * Company findRaw
   */
  export type CompanyFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Company aggregateRaw
   */
  export type CompanyAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Company without action
   */
  export type CompanyArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
  }



  /**
   * Model CompanyParams
   */


  export type AggregateCompanyParams = {
    _count: CompanyParamsCountAggregateOutputType | null
    _min: CompanyParamsMinAggregateOutputType | null
    _max: CompanyParamsMaxAggregateOutputType | null
  }

  export type CompanyParamsMinAggregateOutputType = {
    id: string | null
    company_id: string | null
    environment: Environment | null
    obs_email: string | null
    obs_voucher: string | null
    privacy_policy: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CompanyParamsMaxAggregateOutputType = {
    id: string | null
    company_id: string | null
    environment: Environment | null
    obs_email: string | null
    obs_voucher: string | null
    privacy_policy: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CompanyParamsCountAggregateOutputType = {
    id: number
    company_id: number
    environment: number
    obs_email: number
    obs_voucher: number
    privacy_policy: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CompanyParamsMinAggregateInputType = {
    id?: true
    company_id?: true
    environment?: true
    obs_email?: true
    obs_voucher?: true
    privacy_policy?: true
    created_at?: true
    updated_at?: true
  }

  export type CompanyParamsMaxAggregateInputType = {
    id?: true
    company_id?: true
    environment?: true
    obs_email?: true
    obs_voucher?: true
    privacy_policy?: true
    created_at?: true
    updated_at?: true
  }

  export type CompanyParamsCountAggregateInputType = {
    id?: true
    company_id?: true
    environment?: true
    obs_email?: true
    obs_voucher?: true
    privacy_policy?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CompanyParamsAggregateArgs = {
    /**
     * Filter which CompanyParams to aggregate.
     * 
    **/
    where?: CompanyParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyParams to fetch.
     * 
    **/
    orderBy?: Enumerable<CompanyParamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CompanyParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyParams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyParams.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyParams
    **/
    _count?: true | CompanyParamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyParamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyParamsMaxAggregateInputType
  }

  export type GetCompanyParamsAggregateType<T extends CompanyParamsAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyParams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyParams[P]>
      : GetScalarType<T[P], AggregateCompanyParams[P]>
  }




  export type CompanyParamsGroupByArgs = {
    where?: CompanyParamsWhereInput
    orderBy?: Enumerable<CompanyParamsOrderByWithAggregationInput>
    by: Array<CompanyParamsScalarFieldEnum>
    having?: CompanyParamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyParamsCountAggregateInputType | true
    _min?: CompanyParamsMinAggregateInputType
    _max?: CompanyParamsMaxAggregateInputType
  }


  export type CompanyParamsGroupByOutputType = {
    id: string
    company_id: string
    environment: Environment | null
    obs_email: string | null
    obs_voucher: string | null
    privacy_policy: string | null
    created_at: Date
    updated_at: Date
    _count: CompanyParamsCountAggregateOutputType | null
    _min: CompanyParamsMinAggregateOutputType | null
    _max: CompanyParamsMaxAggregateOutputType | null
  }

  type GetCompanyParamsGroupByPayload<T extends CompanyParamsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CompanyParamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyParamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyParamsGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyParamsGroupByOutputType[P]>
        }
      >
    >


  export type CompanyParamsSelect = {
    id?: boolean
    company?: boolean | CompanyArgs
    company_id?: boolean
    environment?: boolean
    obs_email?: boolean
    obs_voucher?: boolean
    privacy_policy?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CompanyParamsInclude = {
    company?: boolean | CompanyArgs
  }

  export type CompanyParamsGetPayload<
    S extends boolean | null | undefined | CompanyParamsArgs,
    U = keyof S
      > = S extends true
        ? CompanyParams
    : S extends undefined
    ? never
    : S extends CompanyParamsArgs | CompanyParamsFindManyArgs
    ?'include' extends U
    ? CompanyParams  & {
    [P in TrueKeys<S['include']>]:
        P extends 'company' ? CompanyGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'company' ? CompanyGetPayload<S['select'][P]> :  P extends keyof CompanyParams ? CompanyParams[P] : never
  } 
    : CompanyParams
  : CompanyParams


  type CompanyParamsCountArgs = Merge<
    Omit<CompanyParamsFindManyArgs, 'select' | 'include'> & {
      select?: CompanyParamsCountAggregateInputType | true
    }
  >

  export interface CompanyParamsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one CompanyParams that matches the filter.
     * @param {CompanyParamsFindUniqueArgs} args - Arguments to find a CompanyParams
     * @example
     * // Get one CompanyParams
     * const companyParams = await prisma.companyParams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompanyParamsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CompanyParamsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CompanyParams'> extends True ? CheckSelect<T, Prisma__CompanyParamsClient<CompanyParams>, Prisma__CompanyParamsClient<CompanyParamsGetPayload<T>>> : CheckSelect<T, Prisma__CompanyParamsClient<CompanyParams | null >, Prisma__CompanyParamsClient<CompanyParamsGetPayload<T> | null >>

    /**
     * Find the first CompanyParams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyParamsFindFirstArgs} args - Arguments to find a CompanyParams
     * @example
     * // Get one CompanyParams
     * const companyParams = await prisma.companyParams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompanyParamsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CompanyParamsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CompanyParams'> extends True ? CheckSelect<T, Prisma__CompanyParamsClient<CompanyParams>, Prisma__CompanyParamsClient<CompanyParamsGetPayload<T>>> : CheckSelect<T, Prisma__CompanyParamsClient<CompanyParams | null >, Prisma__CompanyParamsClient<CompanyParamsGetPayload<T> | null >>

    /**
     * Find zero or more CompanyParams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyParamsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyParams
     * const companyParams = await prisma.companyParams.findMany()
     * 
     * // Get first 10 CompanyParams
     * const companyParams = await prisma.companyParams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyParamsWithIdOnly = await prisma.companyParams.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompanyParamsFindManyArgs>(
      args?: SelectSubset<T, CompanyParamsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<CompanyParams>>, PrismaPromise<Array<CompanyParamsGetPayload<T>>>>

    /**
     * Create a CompanyParams.
     * @param {CompanyParamsCreateArgs} args - Arguments to create a CompanyParams.
     * @example
     * // Create one CompanyParams
     * const CompanyParams = await prisma.companyParams.create({
     *   data: {
     *     // ... data to create a CompanyParams
     *   }
     * })
     * 
    **/
    create<T extends CompanyParamsCreateArgs>(
      args: SelectSubset<T, CompanyParamsCreateArgs>
    ): CheckSelect<T, Prisma__CompanyParamsClient<CompanyParams>, Prisma__CompanyParamsClient<CompanyParamsGetPayload<T>>>

    /**
     * Create many CompanyParams.
     *     @param {CompanyParamsCreateManyArgs} args - Arguments to create many CompanyParams.
     *     @example
     *     // Create many CompanyParams
     *     const companyParams = await prisma.companyParams.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompanyParamsCreateManyArgs>(
      args?: SelectSubset<T, CompanyParamsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CompanyParams.
     * @param {CompanyParamsDeleteArgs} args - Arguments to delete one CompanyParams.
     * @example
     * // Delete one CompanyParams
     * const CompanyParams = await prisma.companyParams.delete({
     *   where: {
     *     // ... filter to delete one CompanyParams
     *   }
     * })
     * 
    **/
    delete<T extends CompanyParamsDeleteArgs>(
      args: SelectSubset<T, CompanyParamsDeleteArgs>
    ): CheckSelect<T, Prisma__CompanyParamsClient<CompanyParams>, Prisma__CompanyParamsClient<CompanyParamsGetPayload<T>>>

    /**
     * Update one CompanyParams.
     * @param {CompanyParamsUpdateArgs} args - Arguments to update one CompanyParams.
     * @example
     * // Update one CompanyParams
     * const companyParams = await prisma.companyParams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompanyParamsUpdateArgs>(
      args: SelectSubset<T, CompanyParamsUpdateArgs>
    ): CheckSelect<T, Prisma__CompanyParamsClient<CompanyParams>, Prisma__CompanyParamsClient<CompanyParamsGetPayload<T>>>

    /**
     * Delete zero or more CompanyParams.
     * @param {CompanyParamsDeleteManyArgs} args - Arguments to filter CompanyParams to delete.
     * @example
     * // Delete a few CompanyParams
     * const { count } = await prisma.companyParams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompanyParamsDeleteManyArgs>(
      args?: SelectSubset<T, CompanyParamsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyParamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyParams
     * const companyParams = await prisma.companyParams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompanyParamsUpdateManyArgs>(
      args: SelectSubset<T, CompanyParamsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CompanyParams.
     * @param {CompanyParamsUpsertArgs} args - Arguments to update or create a CompanyParams.
     * @example
     * // Update or create a CompanyParams
     * const companyParams = await prisma.companyParams.upsert({
     *   create: {
     *     // ... data to create a CompanyParams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyParams we want to update
     *   }
     * })
    **/
    upsert<T extends CompanyParamsUpsertArgs>(
      args: SelectSubset<T, CompanyParamsUpsertArgs>
    ): CheckSelect<T, Prisma__CompanyParamsClient<CompanyParams>, Prisma__CompanyParamsClient<CompanyParamsGetPayload<T>>>

    /**
     * Find zero or more CompanyParams that matches the filter.
     * @param {CompanyParamsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const companyParams = await prisma.companyParams.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CompanyParamsFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CompanyParams.
     * @param {CompanyParamsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const companyParams = await prisma.companyParams.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CompanyParamsAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of CompanyParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyParamsCountArgs} args - Arguments to filter CompanyParams to count.
     * @example
     * // Count the number of CompanyParams
     * const count = await prisma.companyParams.count({
     *   where: {
     *     // ... the filter for the CompanyParams we want to count
     *   }
     * })
    **/
    count<T extends CompanyParamsCountArgs>(
      args?: Subset<T, CompanyParamsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyParamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyParamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyParamsAggregateArgs>(args: Subset<T, CompanyParamsAggregateArgs>): PrismaPromise<GetCompanyParamsAggregateType<T>>

    /**
     * Group by CompanyParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyParamsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyParamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyParamsGroupByArgs['orderBy'] }
        : { orderBy?: CompanyParamsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyParamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyParamsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyParams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CompanyParamsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    company<T extends CompanyArgs = {}>(args?: Subset<T, CompanyArgs>): CheckSelect<T, Prisma__CompanyClient<Company | null >, Prisma__CompanyClient<CompanyGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * CompanyParams findUnique
   */
  export type CompanyParamsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the CompanyParams
     * 
    **/
    select?: CompanyParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyParamsInclude | null
    /**
     * Throw an Error if a CompanyParams can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which CompanyParams to fetch.
     * 
    **/
    where: CompanyParamsWhereUniqueInput
  }


  /**
   * CompanyParams findFirst
   */
  export type CompanyParamsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the CompanyParams
     * 
    **/
    select?: CompanyParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyParamsInclude | null
    /**
     * Throw an Error if a CompanyParams can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which CompanyParams to fetch.
     * 
    **/
    where?: CompanyParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyParams to fetch.
     * 
    **/
    orderBy?: Enumerable<CompanyParamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyParams.
     * 
    **/
    cursor?: CompanyParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyParams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyParams.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyParams.
     * 
    **/
    distinct?: Enumerable<CompanyParamsScalarFieldEnum>
  }


  /**
   * CompanyParams findMany
   */
  export type CompanyParamsFindManyArgs = {
    /**
     * Select specific fields to fetch from the CompanyParams
     * 
    **/
    select?: CompanyParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyParamsInclude | null
    /**
     * Filter, which CompanyParams to fetch.
     * 
    **/
    where?: CompanyParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyParams to fetch.
     * 
    **/
    orderBy?: Enumerable<CompanyParamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyParams.
     * 
    **/
    cursor?: CompanyParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyParams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyParams.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CompanyParamsScalarFieldEnum>
  }


  /**
   * CompanyParams create
   */
  export type CompanyParamsCreateArgs = {
    /**
     * Select specific fields to fetch from the CompanyParams
     * 
    **/
    select?: CompanyParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyParamsInclude | null
    /**
     * The data needed to create a CompanyParams.
     * 
    **/
    data: XOR<CompanyParamsCreateInput, CompanyParamsUncheckedCreateInput>
  }


  /**
   * CompanyParams createMany
   */
  export type CompanyParamsCreateManyArgs = {
    /**
     * The data used to create many CompanyParams.
     * 
    **/
    data: Enumerable<CompanyParamsCreateManyInput>
  }


  /**
   * CompanyParams update
   */
  export type CompanyParamsUpdateArgs = {
    /**
     * Select specific fields to fetch from the CompanyParams
     * 
    **/
    select?: CompanyParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyParamsInclude | null
    /**
     * The data needed to update a CompanyParams.
     * 
    **/
    data: XOR<CompanyParamsUpdateInput, CompanyParamsUncheckedUpdateInput>
    /**
     * Choose, which CompanyParams to update.
     * 
    **/
    where: CompanyParamsWhereUniqueInput
  }


  /**
   * CompanyParams updateMany
   */
  export type CompanyParamsUpdateManyArgs = {
    /**
     * The data used to update CompanyParams.
     * 
    **/
    data: XOR<CompanyParamsUpdateManyMutationInput, CompanyParamsUncheckedUpdateManyInput>
    /**
     * Filter which CompanyParams to update
     * 
    **/
    where?: CompanyParamsWhereInput
  }


  /**
   * CompanyParams upsert
   */
  export type CompanyParamsUpsertArgs = {
    /**
     * Select specific fields to fetch from the CompanyParams
     * 
    **/
    select?: CompanyParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyParamsInclude | null
    /**
     * The filter to search for the CompanyParams to update in case it exists.
     * 
    **/
    where: CompanyParamsWhereUniqueInput
    /**
     * In case the CompanyParams found by the `where` argument doesn't exist, create a new CompanyParams with this data.
     * 
    **/
    create: XOR<CompanyParamsCreateInput, CompanyParamsUncheckedCreateInput>
    /**
     * In case the CompanyParams was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CompanyParamsUpdateInput, CompanyParamsUncheckedUpdateInput>
  }


  /**
   * CompanyParams delete
   */
  export type CompanyParamsDeleteArgs = {
    /**
     * Select specific fields to fetch from the CompanyParams
     * 
    **/
    select?: CompanyParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyParamsInclude | null
    /**
     * Filter which CompanyParams to delete.
     * 
    **/
    where: CompanyParamsWhereUniqueInput
  }


  /**
   * CompanyParams deleteMany
   */
  export type CompanyParamsDeleteManyArgs = {
    /**
     * Filter which CompanyParams to delete
     * 
    **/
    where?: CompanyParamsWhereInput
  }


  /**
   * CompanyParams findRaw
   */
  export type CompanyParamsFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * CompanyParams aggregateRaw
   */
  export type CompanyParamsAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * CompanyParams without action
   */
  export type CompanyParamsArgs = {
    /**
     * Select specific fields to fetch from the CompanyParams
     * 
    **/
    select?: CompanyParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyParamsInclude | null
  }



  /**
   * Model ProductCategory
   */


  export type AggregateProductCategory = {
    _count: ProductCategoryCountAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  export type ProductCategoryMinAggregateOutputType = {
    id: string | null
    company_id: string | null
    product_type: ProductType | null
    config_type_id: string | null
    title: string | null
    description: string | null
    url_banner: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductCategoryMaxAggregateOutputType = {
    id: string | null
    company_id: string | null
    product_type: ProductType | null
    config_type_id: string | null
    title: string | null
    description: string | null
    url_banner: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductCategoryCountAggregateOutputType = {
    id: number
    company_id: number
    product_type: number
    config_type_id: number
    title: number
    description: number
    url_banner: number
    active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductCategoryMinAggregateInputType = {
    id?: true
    company_id?: true
    product_type?: true
    config_type_id?: true
    title?: true
    description?: true
    url_banner?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductCategoryMaxAggregateInputType = {
    id?: true
    company_id?: true
    product_type?: true
    config_type_id?: true
    title?: true
    description?: true
    url_banner?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductCategoryCountAggregateInputType = {
    id?: true
    company_id?: true
    product_type?: true
    config_type_id?: true
    title?: true
    description?: true
    url_banner?: true
    active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductCategoryAggregateArgs = {
    /**
     * Filter which ProductCategory to aggregate.
     * 
    **/
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductCategories
    **/
    _count?: true | ProductCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type GetProductCategoryAggregateType<T extends ProductCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductCategory[P]>
      : GetScalarType<T[P], AggregateProductCategory[P]>
  }




  export type ProductCategoryGroupByArgs = {
    where?: ProductCategoryWhereInput
    orderBy?: Enumerable<ProductCategoryOrderByWithAggregationInput>
    by: Array<ProductCategoryScalarFieldEnum>
    having?: ProductCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCategoryCountAggregateInputType | true
    _min?: ProductCategoryMinAggregateInputType
    _max?: ProductCategoryMaxAggregateInputType
  }


  export type ProductCategoryGroupByOutputType = {
    id: string
    company_id: string
    product_type: ProductType
    config_type_id: string | null
    title: string
    description: string
    url_banner: string | null
    active: boolean
    created_at: Date
    updated_at: Date
    _count: ProductCategoryCountAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  type GetProductCategoryGroupByPayload<T extends ProductCategoryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ProductCategorySelect = {
    id?: boolean
    company?: boolean | CompanyArgs
    company_id?: boolean
    product_type?: boolean
    config_type_id?: boolean
    title?: boolean
    description?: boolean
    url_banner?: boolean
    active?: boolean
    products?: boolean | ProductFindManyArgs
    created_at?: boolean
    updated_at?: boolean
    _count?: boolean | ProductCategoryCountOutputTypeArgs
  }

  export type ProductCategoryInclude = {
    company?: boolean | CompanyArgs
    products?: boolean | ProductFindManyArgs
    _count?: boolean | ProductCategoryCountOutputTypeArgs
  }

  export type ProductCategoryGetPayload<
    S extends boolean | null | undefined | ProductCategoryArgs,
    U = keyof S
      > = S extends true
        ? ProductCategory
    : S extends undefined
    ? never
    : S extends ProductCategoryArgs | ProductCategoryFindManyArgs
    ?'include' extends U
    ? ProductCategory  & {
    [P in TrueKeys<S['include']>]:
        P extends 'company' ? CompanyGetPayload<S['include'][P]> :
        P extends 'products' ? Array < ProductGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProductCategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'company' ? CompanyGetPayload<S['select'][P]> :
        P extends 'products' ? Array < ProductGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProductCategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof ProductCategory ? ProductCategory[P] : never
  } 
    : ProductCategory
  : ProductCategory


  type ProductCategoryCountArgs = Merge<
    Omit<ProductCategoryFindManyArgs, 'select' | 'include'> & {
      select?: ProductCategoryCountAggregateInputType | true
    }
  >

  export interface ProductCategoryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ProductCategory that matches the filter.
     * @param {ProductCategoryFindUniqueArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductCategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductCategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProductCategory'> extends True ? CheckSelect<T, Prisma__ProductCategoryClient<ProductCategory>, Prisma__ProductCategoryClient<ProductCategoryGetPayload<T>>> : CheckSelect<T, Prisma__ProductCategoryClient<ProductCategory | null >, Prisma__ProductCategoryClient<ProductCategoryGetPayload<T> | null >>

    /**
     * Find the first ProductCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductCategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductCategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProductCategory'> extends True ? CheckSelect<T, Prisma__ProductCategoryClient<ProductCategory>, Prisma__ProductCategoryClient<ProductCategoryGetPayload<T>>> : CheckSelect<T, Prisma__ProductCategoryClient<ProductCategory | null >, Prisma__ProductCategoryClient<ProductCategoryGetPayload<T> | null >>

    /**
     * Find zero or more ProductCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCategories
     * const productCategories = await prisma.productCategory.findMany()
     * 
     * // Get first 10 ProductCategories
     * const productCategories = await prisma.productCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productCategoryWithIdOnly = await prisma.productCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductCategoryFindManyArgs>(
      args?: SelectSubset<T, ProductCategoryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ProductCategory>>, PrismaPromise<Array<ProductCategoryGetPayload<T>>>>

    /**
     * Create a ProductCategory.
     * @param {ProductCategoryCreateArgs} args - Arguments to create a ProductCategory.
     * @example
     * // Create one ProductCategory
     * const ProductCategory = await prisma.productCategory.create({
     *   data: {
     *     // ... data to create a ProductCategory
     *   }
     * })
     * 
    **/
    create<T extends ProductCategoryCreateArgs>(
      args: SelectSubset<T, ProductCategoryCreateArgs>
    ): CheckSelect<T, Prisma__ProductCategoryClient<ProductCategory>, Prisma__ProductCategoryClient<ProductCategoryGetPayload<T>>>

    /**
     * Create many ProductCategories.
     *     @param {ProductCategoryCreateManyArgs} args - Arguments to create many ProductCategories.
     *     @example
     *     // Create many ProductCategories
     *     const productCategory = await prisma.productCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCategoryCreateManyArgs>(
      args?: SelectSubset<T, ProductCategoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProductCategory.
     * @param {ProductCategoryDeleteArgs} args - Arguments to delete one ProductCategory.
     * @example
     * // Delete one ProductCategory
     * const ProductCategory = await prisma.productCategory.delete({
     *   where: {
     *     // ... filter to delete one ProductCategory
     *   }
     * })
     * 
    **/
    delete<T extends ProductCategoryDeleteArgs>(
      args: SelectSubset<T, ProductCategoryDeleteArgs>
    ): CheckSelect<T, Prisma__ProductCategoryClient<ProductCategory>, Prisma__ProductCategoryClient<ProductCategoryGetPayload<T>>>

    /**
     * Update one ProductCategory.
     * @param {ProductCategoryUpdateArgs} args - Arguments to update one ProductCategory.
     * @example
     * // Update one ProductCategory
     * const productCategory = await prisma.productCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductCategoryUpdateArgs>(
      args: SelectSubset<T, ProductCategoryUpdateArgs>
    ): CheckSelect<T, Prisma__ProductCategoryClient<ProductCategory>, Prisma__ProductCategoryClient<ProductCategoryGetPayload<T>>>

    /**
     * Delete zero or more ProductCategories.
     * @param {ProductCategoryDeleteManyArgs} args - Arguments to filter ProductCategories to delete.
     * @example
     * // Delete a few ProductCategories
     * const { count } = await prisma.productCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductCategoryDeleteManyArgs>(
      args?: SelectSubset<T, ProductCategoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCategories
     * const productCategory = await prisma.productCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductCategoryUpdateManyArgs>(
      args: SelectSubset<T, ProductCategoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductCategory.
     * @param {ProductCategoryUpsertArgs} args - Arguments to update or create a ProductCategory.
     * @example
     * // Update or create a ProductCategory
     * const productCategory = await prisma.productCategory.upsert({
     *   create: {
     *     // ... data to create a ProductCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCategory we want to update
     *   }
     * })
    **/
    upsert<T extends ProductCategoryUpsertArgs>(
      args: SelectSubset<T, ProductCategoryUpsertArgs>
    ): CheckSelect<T, Prisma__ProductCategoryClient<ProductCategory>, Prisma__ProductCategoryClient<ProductCategoryGetPayload<T>>>

    /**
     * Find zero or more ProductCategories that matches the filter.
     * @param {ProductCategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const productCategory = await prisma.productCategory.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ProductCategoryFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProductCategory.
     * @param {ProductCategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const productCategory = await prisma.productCategory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ProductCategoryAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryCountArgs} args - Arguments to filter ProductCategories to count.
     * @example
     * // Count the number of ProductCategories
     * const count = await prisma.productCategory.count({
     *   where: {
     *     // ... the filter for the ProductCategories we want to count
     *   }
     * })
    **/
    count<T extends ProductCategoryCountArgs>(
      args?: Subset<T, ProductCategoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductCategoryAggregateArgs>(args: Subset<T, ProductCategoryAggregateArgs>): PrismaPromise<GetProductCategoryAggregateType<T>>

    /**
     * Group by ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ProductCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCategoryGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductCategoryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    company<T extends CompanyArgs = {}>(args?: Subset<T, CompanyArgs>): CheckSelect<T, Prisma__CompanyClient<Company | null >, Prisma__CompanyClient<CompanyGetPayload<T> | null >>;

    products<T extends ProductFindManyArgs = {}>(args?: Subset<T, ProductFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Product>>, PrismaPromise<Array<ProductGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ProductCategory findUnique
   */
  export type ProductCategoryFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ProductCategory
     * 
    **/
    select?: ProductCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductCategoryInclude | null
    /**
     * Throw an Error if a ProductCategory can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ProductCategory to fetch.
     * 
    **/
    where: ProductCategoryWhereUniqueInput
  }


  /**
   * ProductCategory findFirst
   */
  export type ProductCategoryFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ProductCategory
     * 
    **/
    select?: ProductCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductCategoryInclude | null
    /**
     * Throw an Error if a ProductCategory can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ProductCategory to fetch.
     * 
    **/
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     * 
    **/
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     * 
    **/
    distinct?: Enumerable<ProductCategoryScalarFieldEnum>
  }


  /**
   * ProductCategory findMany
   */
  export type ProductCategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProductCategory
     * 
    **/
    select?: ProductCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductCategoryInclude | null
    /**
     * Filter, which ProductCategories to fetch.
     * 
    **/
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductCategories.
     * 
    **/
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductCategoryScalarFieldEnum>
  }


  /**
   * ProductCategory create
   */
  export type ProductCategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the ProductCategory
     * 
    **/
    select?: ProductCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductCategoryInclude | null
    /**
     * The data needed to create a ProductCategory.
     * 
    **/
    data: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
  }


  /**
   * ProductCategory createMany
   */
  export type ProductCategoryCreateManyArgs = {
    /**
     * The data used to create many ProductCategories.
     * 
    **/
    data: Enumerable<ProductCategoryCreateManyInput>
  }


  /**
   * ProductCategory update
   */
  export type ProductCategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProductCategory
     * 
    **/
    select?: ProductCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductCategoryInclude | null
    /**
     * The data needed to update a ProductCategory.
     * 
    **/
    data: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
    /**
     * Choose, which ProductCategory to update.
     * 
    **/
    where: ProductCategoryWhereUniqueInput
  }


  /**
   * ProductCategory updateMany
   */
  export type ProductCategoryUpdateManyArgs = {
    /**
     * The data used to update ProductCategories.
     * 
    **/
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductCategories to update
     * 
    **/
    where?: ProductCategoryWhereInput
  }


  /**
   * ProductCategory upsert
   */
  export type ProductCategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProductCategory
     * 
    **/
    select?: ProductCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductCategoryInclude | null
    /**
     * The filter to search for the ProductCategory to update in case it exists.
     * 
    **/
    where: ProductCategoryWhereUniqueInput
    /**
     * In case the ProductCategory found by the `where` argument doesn't exist, create a new ProductCategory with this data.
     * 
    **/
    create: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
    /**
     * In case the ProductCategory was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
  }


  /**
   * ProductCategory delete
   */
  export type ProductCategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProductCategory
     * 
    **/
    select?: ProductCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductCategoryInclude | null
    /**
     * Filter which ProductCategory to delete.
     * 
    **/
    where: ProductCategoryWhereUniqueInput
  }


  /**
   * ProductCategory deleteMany
   */
  export type ProductCategoryDeleteManyArgs = {
    /**
     * Filter which ProductCategories to delete
     * 
    **/
    where?: ProductCategoryWhereInput
  }


  /**
   * ProductCategory findRaw
   */
  export type ProductCategoryFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProductCategory aggregateRaw
   */
  export type ProductCategoryAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProductCategory without action
   */
  export type ProductCategoryArgs = {
    /**
     * Select specific fields to fetch from the ProductCategory
     * 
    **/
    select?: ProductCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductCategoryInclude | null
  }



  /**
   * Model Product
   */


  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    amount_min_sale: number | null
    amount_max_sale: number | null
    amount_max_total_diary: number | null
    order_on_menu: number | null
  }

  export type ProductSumAggregateOutputType = {
    amount_min_sale: number | null
    amount_max_sale: number | null
    amount_max_total_diary: number | null
    order_on_menu: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    product_category_id: string | null
    company_id: string | null
    product_type: ProductType | null
    sku: string | null
    title: string | null
    subtitle: string | null
    description: string | null
    url_banner: string | null
    active: boolean | null
    combo: boolean | null
    amount_min_sale: number | null
    amount_max_sale: number | null
    amount_max_total_diary: number | null
    highlighted: boolean | null
    order_on_menu: number | null
    for_sale: boolean | null
    age_group: string | null
    promotion: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    product_category_id: string | null
    company_id: string | null
    product_type: ProductType | null
    sku: string | null
    title: string | null
    subtitle: string | null
    description: string | null
    url_banner: string | null
    active: boolean | null
    combo: boolean | null
    amount_min_sale: number | null
    amount_max_sale: number | null
    amount_max_total_diary: number | null
    highlighted: boolean | null
    order_on_menu: number | null
    for_sale: boolean | null
    age_group: string | null
    promotion: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    product_category_id: number
    company_id: number
    product_type: number
    sku: number
    title: number
    subtitle: number
    description: number
    url_banner: number
    active: number
    combo: number
    amount_min_sale: number
    amount_max_sale: number
    amount_max_total_diary: number
    highlighted: number
    order_on_menu: number
    for_sale: number
    age_group: number
    promotion: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    amount_min_sale?: true
    amount_max_sale?: true
    amount_max_total_diary?: true
    order_on_menu?: true
  }

  export type ProductSumAggregateInputType = {
    amount_min_sale?: true
    amount_max_sale?: true
    amount_max_total_diary?: true
    order_on_menu?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    product_category_id?: true
    company_id?: true
    product_type?: true
    sku?: true
    title?: true
    subtitle?: true
    description?: true
    url_banner?: true
    active?: true
    combo?: true
    amount_min_sale?: true
    amount_max_sale?: true
    amount_max_total_diary?: true
    highlighted?: true
    order_on_menu?: true
    for_sale?: true
    age_group?: true
    promotion?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    product_category_id?: true
    company_id?: true
    product_type?: true
    sku?: true
    title?: true
    subtitle?: true
    description?: true
    url_banner?: true
    active?: true
    combo?: true
    amount_min_sale?: true
    amount_max_sale?: true
    amount_max_total_diary?: true
    highlighted?: true
    order_on_menu?: true
    for_sale?: true
    age_group?: true
    promotion?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    product_category_id?: true
    company_id?: true
    product_type?: true
    sku?: true
    title?: true
    subtitle?: true
    description?: true
    url_banner?: true
    active?: true
    combo?: true
    amount_min_sale?: true
    amount_max_sale?: true
    amount_max_total_diary?: true
    highlighted?: true
    order_on_menu?: true
    for_sale?: true
    age_group?: true
    promotion?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductAggregateArgs = {
    /**
     * Filter which Product to aggregate.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs = {
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithAggregationInput>
    by: Array<ProductScalarFieldEnum>
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }


  export type ProductGroupByOutputType = {
    id: string
    product_category_id: string
    company_id: string
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner: string | null
    active: boolean
    combo: boolean | null
    amount_min_sale: number | null
    amount_max_sale: number | null
    amount_max_total_diary: number | null
    highlighted: boolean | null
    order_on_menu: number | null
    for_sale: boolean | null
    age_group: string | null
    promotion: boolean | null
    created_at: Date
    updated_at: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect = {
    id?: boolean
    product_category?: boolean | ProductCategoryArgs
    product_category_id?: boolean
    company?: boolean | CompanyArgs
    company_id?: boolean
    product_type?: boolean
    sku?: boolean
    title?: boolean
    subtitle?: boolean
    description?: boolean
    url_banner?: boolean
    active?: boolean
    combo?: boolean
    amount_min_sale?: boolean
    amount_max_sale?: boolean
    amount_max_total_diary?: boolean
    highlighted?: boolean
    order_on_menu?: boolean
    for_sale?: boolean
    age_group?: boolean
    promotion?: boolean
    items?: boolean | ProductComboFindManyArgs
    config_product_exeption?: boolean | ConfigProductExceptionFindManyArgs
    total_sale?: boolean | ProductTotalSalesFindManyArgs
    product_item?: boolean | ProductComboFindManyArgs
    sales_item?: boolean | ItemSalesFindManyArgs
    price_table?: boolean | ProductPricesTableFindManyArgs
    created_at?: boolean
    updated_at?: boolean
    _count?: boolean | ProductCountOutputTypeArgs
  }

  export type ProductInclude = {
    product_category?: boolean | ProductCategoryArgs
    company?: boolean | CompanyArgs
    items?: boolean | ProductComboFindManyArgs
    config_product_exeption?: boolean | ConfigProductExceptionFindManyArgs
    total_sale?: boolean | ProductTotalSalesFindManyArgs
    product_item?: boolean | ProductComboFindManyArgs
    sales_item?: boolean | ItemSalesFindManyArgs
    price_table?: boolean | ProductPricesTableFindManyArgs
    _count?: boolean | ProductCountOutputTypeArgs
  }

  export type ProductGetPayload<
    S extends boolean | null | undefined | ProductArgs,
    U = keyof S
      > = S extends true
        ? Product
    : S extends undefined
    ? never
    : S extends ProductArgs | ProductFindManyArgs
    ?'include' extends U
    ? Product  & {
    [P in TrueKeys<S['include']>]:
        P extends 'product_category' ? ProductCategoryGetPayload<S['include'][P]> :
        P extends 'company' ? CompanyGetPayload<S['include'][P]> :
        P extends 'items' ? Array < ProductComboGetPayload<S['include'][P]>>  :
        P extends 'config_product_exeption' ? Array < ConfigProductExceptionGetPayload<S['include'][P]>>  :
        P extends 'total_sale' ? Array < ProductTotalSalesGetPayload<S['include'][P]>>  :
        P extends 'product_item' ? Array < ProductComboGetPayload<S['include'][P]>>  :
        P extends 'sales_item' ? Array < ItemSalesGetPayload<S['include'][P]>>  :
        P extends 'price_table' ? Array < ProductPricesTableGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProductCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'product_category' ? ProductCategoryGetPayload<S['select'][P]> :
        P extends 'company' ? CompanyGetPayload<S['select'][P]> :
        P extends 'items' ? Array < ProductComboGetPayload<S['select'][P]>>  :
        P extends 'config_product_exeption' ? Array < ConfigProductExceptionGetPayload<S['select'][P]>>  :
        P extends 'total_sale' ? Array < ProductTotalSalesGetPayload<S['select'][P]>>  :
        P extends 'product_item' ? Array < ProductComboGetPayload<S['select'][P]>>  :
        P extends 'sales_item' ? Array < ItemSalesGetPayload<S['select'][P]>>  :
        P extends 'price_table' ? Array < ProductPricesTableGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProductCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Product ? Product[P] : never
  } 
    : Product
  : Product


  type ProductCountArgs = Merge<
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }
  >

  export interface ProductDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Product'> extends True ? CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>> : CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Product'> extends True ? CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>> : CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs>(
      args?: SelectSubset<T, ProductFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Product>>, PrismaPromise<Array<ProductGetPayload<T>>>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs>(
      args: SelectSubset<T, ProductCreateArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs>(
      args?: SelectSubset<T, ProductCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs>(
      args: SelectSubset<T, ProductDeleteArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs>(
      args: SelectSubset<T, ProductUpdateArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs>(
      args?: SelectSubset<T, ProductDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs>(
      args: SelectSubset<T, ProductUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs>(
      args: SelectSubset<T, ProductUpsertArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Find zero or more Products that matches the filter.
     * @param {ProductFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const product = await prisma.product.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ProductFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Product.
     * @param {ProductAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const product = await prisma.product.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ProductAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    product_category<T extends ProductCategoryArgs = {}>(args?: Subset<T, ProductCategoryArgs>): CheckSelect<T, Prisma__ProductCategoryClient<ProductCategory | null >, Prisma__ProductCategoryClient<ProductCategoryGetPayload<T> | null >>;

    company<T extends CompanyArgs = {}>(args?: Subset<T, CompanyArgs>): CheckSelect<T, Prisma__CompanyClient<Company | null >, Prisma__CompanyClient<CompanyGetPayload<T> | null >>;

    items<T extends ProductComboFindManyArgs = {}>(args?: Subset<T, ProductComboFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ProductCombo>>, PrismaPromise<Array<ProductComboGetPayload<T>>>>;

    config_product_exeption<T extends ConfigProductExceptionFindManyArgs = {}>(args?: Subset<T, ConfigProductExceptionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ConfigProductException>>, PrismaPromise<Array<ConfigProductExceptionGetPayload<T>>>>;

    total_sale<T extends ProductTotalSalesFindManyArgs = {}>(args?: Subset<T, ProductTotalSalesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ProductTotalSales>>, PrismaPromise<Array<ProductTotalSalesGetPayload<T>>>>;

    product_item<T extends ProductComboFindManyArgs = {}>(args?: Subset<T, ProductComboFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ProductCombo>>, PrismaPromise<Array<ProductComboGetPayload<T>>>>;

    sales_item<T extends ItemSalesFindManyArgs = {}>(args?: Subset<T, ItemSalesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ItemSales>>, PrismaPromise<Array<ItemSalesGetPayload<T>>>>;

    price_table<T extends ProductPricesTableFindManyArgs = {}>(args?: Subset<T, ProductPricesTableFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ProductPricesTable>>, PrismaPromise<Array<ProductPricesTableGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Throw an Error if a Product can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Product to fetch.
     * 
    **/
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Throw an Error if a Product can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Product to fetch.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     * 
    **/
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter, which Products to fetch.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product create
   */
  export type ProductCreateArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * The data needed to create a Product.
     * 
    **/
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs = {
    /**
     * The data used to create many Products.
     * 
    **/
    data: Enumerable<ProductCreateManyInput>
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * The data needed to update a Product.
     * 
    **/
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     * 
    **/
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs = {
    /**
     * The data used to update Products.
     * 
    **/
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     * 
    **/
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * The filter to search for the Product to update in case it exists.
     * 
    **/
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     * 
    **/
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter which Product to delete.
     * 
    **/
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs = {
    /**
     * Filter which Products to delete
     * 
    **/
    where?: ProductWhereInput
  }


  /**
   * Product findRaw
   */
  export type ProductFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Product aggregateRaw
   */
  export type ProductAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Product without action
   */
  export type ProductArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
  }



  /**
   * Model ItemSales
   */


  export type AggregateItemSales = {
    _count: ItemSalesCountAggregateOutputType | null
    _avg: ItemSalesAvgAggregateOutputType | null
    _sum: ItemSalesSumAggregateOutputType | null
    _min: ItemSalesMinAggregateOutputType | null
    _max: ItemSalesMaxAggregateOutputType | null
  }

  export type ItemSalesAvgAggregateOutputType = {
    amount: number | null
    unitary_value: number | null
    percent_discount: number | null
    subtotal: number | null
    total: number | null
  }

  export type ItemSalesSumAggregateOutputType = {
    amount: number | null
    unitary_value: number | null
    percent_discount: number | null
    subtotal: number | null
    total: number | null
  }

  export type ItemSalesMinAggregateOutputType = {
    id: string | null
    sale_id: string | null
    product_id: string | null
    amount: number | null
    unitary_value: number | null
    percent_discount: number | null
    subtotal: number | null
    total: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ItemSalesMaxAggregateOutputType = {
    id: string | null
    sale_id: string | null
    product_id: string | null
    amount: number | null
    unitary_value: number | null
    percent_discount: number | null
    subtotal: number | null
    total: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ItemSalesCountAggregateOutputType = {
    id: number
    sale_id: number
    product_id: number
    amount: number
    unitary_value: number
    percent_discount: number
    subtotal: number
    total: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ItemSalesAvgAggregateInputType = {
    amount?: true
    unitary_value?: true
    percent_discount?: true
    subtotal?: true
    total?: true
  }

  export type ItemSalesSumAggregateInputType = {
    amount?: true
    unitary_value?: true
    percent_discount?: true
    subtotal?: true
    total?: true
  }

  export type ItemSalesMinAggregateInputType = {
    id?: true
    sale_id?: true
    product_id?: true
    amount?: true
    unitary_value?: true
    percent_discount?: true
    subtotal?: true
    total?: true
    created_at?: true
    updated_at?: true
  }

  export type ItemSalesMaxAggregateInputType = {
    id?: true
    sale_id?: true
    product_id?: true
    amount?: true
    unitary_value?: true
    percent_discount?: true
    subtotal?: true
    total?: true
    created_at?: true
    updated_at?: true
  }

  export type ItemSalesCountAggregateInputType = {
    id?: true
    sale_id?: true
    product_id?: true
    amount?: true
    unitary_value?: true
    percent_discount?: true
    subtotal?: true
    total?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ItemSalesAggregateArgs = {
    /**
     * Filter which ItemSales to aggregate.
     * 
    **/
    where?: ItemSalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSales to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemSalesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ItemSalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSales from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSales.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemSales
    **/
    _count?: true | ItemSalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemSalesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSalesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemSalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemSalesMaxAggregateInputType
  }

  export type GetItemSalesAggregateType<T extends ItemSalesAggregateArgs> = {
        [P in keyof T & keyof AggregateItemSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemSales[P]>
      : GetScalarType<T[P], AggregateItemSales[P]>
  }




  export type ItemSalesGroupByArgs = {
    where?: ItemSalesWhereInput
    orderBy?: Enumerable<ItemSalesOrderByWithAggregationInput>
    by: Array<ItemSalesScalarFieldEnum>
    having?: ItemSalesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemSalesCountAggregateInputType | true
    _avg?: ItemSalesAvgAggregateInputType
    _sum?: ItemSalesSumAggregateInputType
    _min?: ItemSalesMinAggregateInputType
    _max?: ItemSalesMaxAggregateInputType
  }


  export type ItemSalesGroupByOutputType = {
    id: string
    sale_id: string
    product_id: string
    amount: number
    unitary_value: number
    percent_discount: number
    subtotal: number
    total: number
    created_at: Date
    updated_at: Date
    _count: ItemSalesCountAggregateOutputType | null
    _avg: ItemSalesAvgAggregateOutputType | null
    _sum: ItemSalesSumAggregateOutputType | null
    _min: ItemSalesMinAggregateOutputType | null
    _max: ItemSalesMaxAggregateOutputType | null
  }

  type GetItemSalesGroupByPayload<T extends ItemSalesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ItemSalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemSalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemSalesGroupByOutputType[P]>
            : GetScalarType<T[P], ItemSalesGroupByOutputType[P]>
        }
      >
    >


  export type ItemSalesSelect = {
    id?: boolean
    sales?: boolean | SaleArgs
    sale_id?: boolean
    product?: boolean | ProductArgs
    product_id?: boolean
    amount?: boolean
    unitary_value?: boolean
    percent_discount?: boolean
    subtotal?: boolean
    total?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ItemSalesInclude = {
    sales?: boolean | SaleArgs
    product?: boolean | ProductArgs
  }

  export type ItemSalesGetPayload<
    S extends boolean | null | undefined | ItemSalesArgs,
    U = keyof S
      > = S extends true
        ? ItemSales
    : S extends undefined
    ? never
    : S extends ItemSalesArgs | ItemSalesFindManyArgs
    ?'include' extends U
    ? ItemSales  & {
    [P in TrueKeys<S['include']>]:
        P extends 'sales' ? SaleGetPayload<S['include'][P]> :
        P extends 'product' ? ProductGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'sales' ? SaleGetPayload<S['select'][P]> :
        P extends 'product' ? ProductGetPayload<S['select'][P]> :  P extends keyof ItemSales ? ItemSales[P] : never
  } 
    : ItemSales
  : ItemSales


  type ItemSalesCountArgs = Merge<
    Omit<ItemSalesFindManyArgs, 'select' | 'include'> & {
      select?: ItemSalesCountAggregateInputType | true
    }
  >

  export interface ItemSalesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ItemSales that matches the filter.
     * @param {ItemSalesFindUniqueArgs} args - Arguments to find a ItemSales
     * @example
     * // Get one ItemSales
     * const itemSales = await prisma.itemSales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemSalesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ItemSalesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ItemSales'> extends True ? CheckSelect<T, Prisma__ItemSalesClient<ItemSales>, Prisma__ItemSalesClient<ItemSalesGetPayload<T>>> : CheckSelect<T, Prisma__ItemSalesClient<ItemSales | null >, Prisma__ItemSalesClient<ItemSalesGetPayload<T> | null >>

    /**
     * Find the first ItemSales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSalesFindFirstArgs} args - Arguments to find a ItemSales
     * @example
     * // Get one ItemSales
     * const itemSales = await prisma.itemSales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemSalesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ItemSalesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ItemSales'> extends True ? CheckSelect<T, Prisma__ItemSalesClient<ItemSales>, Prisma__ItemSalesClient<ItemSalesGetPayload<T>>> : CheckSelect<T, Prisma__ItemSalesClient<ItemSales | null >, Prisma__ItemSalesClient<ItemSalesGetPayload<T> | null >>

    /**
     * Find zero or more ItemSales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSalesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemSales
     * const itemSales = await prisma.itemSales.findMany()
     * 
     * // Get first 10 ItemSales
     * const itemSales = await prisma.itemSales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemSalesWithIdOnly = await prisma.itemSales.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ItemSalesFindManyArgs>(
      args?: SelectSubset<T, ItemSalesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ItemSales>>, PrismaPromise<Array<ItemSalesGetPayload<T>>>>

    /**
     * Create a ItemSales.
     * @param {ItemSalesCreateArgs} args - Arguments to create a ItemSales.
     * @example
     * // Create one ItemSales
     * const ItemSales = await prisma.itemSales.create({
     *   data: {
     *     // ... data to create a ItemSales
     *   }
     * })
     * 
    **/
    create<T extends ItemSalesCreateArgs>(
      args: SelectSubset<T, ItemSalesCreateArgs>
    ): CheckSelect<T, Prisma__ItemSalesClient<ItemSales>, Prisma__ItemSalesClient<ItemSalesGetPayload<T>>>

    /**
     * Create many ItemSales.
     *     @param {ItemSalesCreateManyArgs} args - Arguments to create many ItemSales.
     *     @example
     *     // Create many ItemSales
     *     const itemSales = await prisma.itemSales.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ItemSalesCreateManyArgs>(
      args?: SelectSubset<T, ItemSalesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ItemSales.
     * @param {ItemSalesDeleteArgs} args - Arguments to delete one ItemSales.
     * @example
     * // Delete one ItemSales
     * const ItemSales = await prisma.itemSales.delete({
     *   where: {
     *     // ... filter to delete one ItemSales
     *   }
     * })
     * 
    **/
    delete<T extends ItemSalesDeleteArgs>(
      args: SelectSubset<T, ItemSalesDeleteArgs>
    ): CheckSelect<T, Prisma__ItemSalesClient<ItemSales>, Prisma__ItemSalesClient<ItemSalesGetPayload<T>>>

    /**
     * Update one ItemSales.
     * @param {ItemSalesUpdateArgs} args - Arguments to update one ItemSales.
     * @example
     * // Update one ItemSales
     * const itemSales = await prisma.itemSales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemSalesUpdateArgs>(
      args: SelectSubset<T, ItemSalesUpdateArgs>
    ): CheckSelect<T, Prisma__ItemSalesClient<ItemSales>, Prisma__ItemSalesClient<ItemSalesGetPayload<T>>>

    /**
     * Delete zero or more ItemSales.
     * @param {ItemSalesDeleteManyArgs} args - Arguments to filter ItemSales to delete.
     * @example
     * // Delete a few ItemSales
     * const { count } = await prisma.itemSales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemSalesDeleteManyArgs>(
      args?: SelectSubset<T, ItemSalesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSalesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemSales
     * const itemSales = await prisma.itemSales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemSalesUpdateManyArgs>(
      args: SelectSubset<T, ItemSalesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemSales.
     * @param {ItemSalesUpsertArgs} args - Arguments to update or create a ItemSales.
     * @example
     * // Update or create a ItemSales
     * const itemSales = await prisma.itemSales.upsert({
     *   create: {
     *     // ... data to create a ItemSales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemSales we want to update
     *   }
     * })
    **/
    upsert<T extends ItemSalesUpsertArgs>(
      args: SelectSubset<T, ItemSalesUpsertArgs>
    ): CheckSelect<T, Prisma__ItemSalesClient<ItemSales>, Prisma__ItemSalesClient<ItemSalesGetPayload<T>>>

    /**
     * Find zero or more ItemSales that matches the filter.
     * @param {ItemSalesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const itemSales = await prisma.itemSales.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ItemSalesFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ItemSales.
     * @param {ItemSalesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const itemSales = await prisma.itemSales.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ItemSalesAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of ItemSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSalesCountArgs} args - Arguments to filter ItemSales to count.
     * @example
     * // Count the number of ItemSales
     * const count = await prisma.itemSales.count({
     *   where: {
     *     // ... the filter for the ItemSales we want to count
     *   }
     * })
    **/
    count<T extends ItemSalesCountArgs>(
      args?: Subset<T, ItemSalesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemSalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemSalesAggregateArgs>(args: Subset<T, ItemSalesAggregateArgs>): PrismaPromise<GetItemSalesAggregateType<T>>

    /**
     * Group by ItemSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSalesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemSalesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemSalesGroupByArgs['orderBy'] }
        : { orderBy?: ItemSalesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemSalesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemSalesGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemSales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ItemSalesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    sales<T extends SaleArgs = {}>(args?: Subset<T, SaleArgs>): CheckSelect<T, Prisma__SaleClient<Sale | null >, Prisma__SaleClient<SaleGetPayload<T> | null >>;

    product<T extends ProductArgs = {}>(args?: Subset<T, ProductArgs>): CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ItemSales findUnique
   */
  export type ItemSalesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ItemSales
     * 
    **/
    select?: ItemSalesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemSalesInclude | null
    /**
     * Throw an Error if a ItemSales can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ItemSales to fetch.
     * 
    **/
    where: ItemSalesWhereUniqueInput
  }


  /**
   * ItemSales findFirst
   */
  export type ItemSalesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ItemSales
     * 
    **/
    select?: ItemSalesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemSalesInclude | null
    /**
     * Throw an Error if a ItemSales can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ItemSales to fetch.
     * 
    **/
    where?: ItemSalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSales to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemSalesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemSales.
     * 
    **/
    cursor?: ItemSalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSales from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSales.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemSales.
     * 
    **/
    distinct?: Enumerable<ItemSalesScalarFieldEnum>
  }


  /**
   * ItemSales findMany
   */
  export type ItemSalesFindManyArgs = {
    /**
     * Select specific fields to fetch from the ItemSales
     * 
    **/
    select?: ItemSalesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemSalesInclude | null
    /**
     * Filter, which ItemSales to fetch.
     * 
    **/
    where?: ItemSalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSales to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemSalesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemSales.
     * 
    **/
    cursor?: ItemSalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSales from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSales.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ItemSalesScalarFieldEnum>
  }


  /**
   * ItemSales create
   */
  export type ItemSalesCreateArgs = {
    /**
     * Select specific fields to fetch from the ItemSales
     * 
    **/
    select?: ItemSalesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemSalesInclude | null
    /**
     * The data needed to create a ItemSales.
     * 
    **/
    data: XOR<ItemSalesCreateInput, ItemSalesUncheckedCreateInput>
  }


  /**
   * ItemSales createMany
   */
  export type ItemSalesCreateManyArgs = {
    /**
     * The data used to create many ItemSales.
     * 
    **/
    data: Enumerable<ItemSalesCreateManyInput>
  }


  /**
   * ItemSales update
   */
  export type ItemSalesUpdateArgs = {
    /**
     * Select specific fields to fetch from the ItemSales
     * 
    **/
    select?: ItemSalesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemSalesInclude | null
    /**
     * The data needed to update a ItemSales.
     * 
    **/
    data: XOR<ItemSalesUpdateInput, ItemSalesUncheckedUpdateInput>
    /**
     * Choose, which ItemSales to update.
     * 
    **/
    where: ItemSalesWhereUniqueInput
  }


  /**
   * ItemSales updateMany
   */
  export type ItemSalesUpdateManyArgs = {
    /**
     * The data used to update ItemSales.
     * 
    **/
    data: XOR<ItemSalesUpdateManyMutationInput, ItemSalesUncheckedUpdateManyInput>
    /**
     * Filter which ItemSales to update
     * 
    **/
    where?: ItemSalesWhereInput
  }


  /**
   * ItemSales upsert
   */
  export type ItemSalesUpsertArgs = {
    /**
     * Select specific fields to fetch from the ItemSales
     * 
    **/
    select?: ItemSalesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemSalesInclude | null
    /**
     * The filter to search for the ItemSales to update in case it exists.
     * 
    **/
    where: ItemSalesWhereUniqueInput
    /**
     * In case the ItemSales found by the `where` argument doesn't exist, create a new ItemSales with this data.
     * 
    **/
    create: XOR<ItemSalesCreateInput, ItemSalesUncheckedCreateInput>
    /**
     * In case the ItemSales was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ItemSalesUpdateInput, ItemSalesUncheckedUpdateInput>
  }


  /**
   * ItemSales delete
   */
  export type ItemSalesDeleteArgs = {
    /**
     * Select specific fields to fetch from the ItemSales
     * 
    **/
    select?: ItemSalesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemSalesInclude | null
    /**
     * Filter which ItemSales to delete.
     * 
    **/
    where: ItemSalesWhereUniqueInput
  }


  /**
   * ItemSales deleteMany
   */
  export type ItemSalesDeleteManyArgs = {
    /**
     * Filter which ItemSales to delete
     * 
    **/
    where?: ItemSalesWhereInput
  }


  /**
   * ItemSales findRaw
   */
  export type ItemSalesFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ItemSales aggregateRaw
   */
  export type ItemSalesAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ItemSales without action
   */
  export type ItemSalesArgs = {
    /**
     * Select specific fields to fetch from the ItemSales
     * 
    **/
    select?: ItemSalesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemSalesInclude | null
  }



  /**
   * Model ProductCombo
   */


  export type AggregateProductCombo = {
    _count: ProductComboCountAggregateOutputType | null
    _avg: ProductComboAvgAggregateOutputType | null
    _sum: ProductComboSumAggregateOutputType | null
    _min: ProductComboMinAggregateOutputType | null
    _max: ProductComboMaxAggregateOutputType | null
  }

  export type ProductComboAvgAggregateOutputType = {
    amount: number | null
  }

  export type ProductComboSumAggregateOutputType = {
    amount: number | null
  }

  export type ProductComboMinAggregateOutputType = {
    id: string | null
    product_id: string | null
    item_id: string | null
    amount: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductComboMaxAggregateOutputType = {
    id: string | null
    product_id: string | null
    item_id: string | null
    amount: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductComboCountAggregateOutputType = {
    id: number
    product_id: number
    item_id: number
    amount: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductComboAvgAggregateInputType = {
    amount?: true
  }

  export type ProductComboSumAggregateInputType = {
    amount?: true
  }

  export type ProductComboMinAggregateInputType = {
    id?: true
    product_id?: true
    item_id?: true
    amount?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductComboMaxAggregateInputType = {
    id?: true
    product_id?: true
    item_id?: true
    amount?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductComboCountAggregateInputType = {
    id?: true
    product_id?: true
    item_id?: true
    amount?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductComboAggregateArgs = {
    /**
     * Filter which ProductCombo to aggregate.
     * 
    **/
    where?: ProductComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCombos to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductComboOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCombos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCombos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductCombos
    **/
    _count?: true | ProductComboCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductComboAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductComboSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductComboMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductComboMaxAggregateInputType
  }

  export type GetProductComboAggregateType<T extends ProductComboAggregateArgs> = {
        [P in keyof T & keyof AggregateProductCombo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductCombo[P]>
      : GetScalarType<T[P], AggregateProductCombo[P]>
  }




  export type ProductComboGroupByArgs = {
    where?: ProductComboWhereInput
    orderBy?: Enumerable<ProductComboOrderByWithAggregationInput>
    by: Array<ProductComboScalarFieldEnum>
    having?: ProductComboScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductComboCountAggregateInputType | true
    _avg?: ProductComboAvgAggregateInputType
    _sum?: ProductComboSumAggregateInputType
    _min?: ProductComboMinAggregateInputType
    _max?: ProductComboMaxAggregateInputType
  }


  export type ProductComboGroupByOutputType = {
    id: string
    product_id: string
    item_id: string
    amount: number
    created_at: Date
    updated_at: Date
    _count: ProductComboCountAggregateOutputType | null
    _avg: ProductComboAvgAggregateOutputType | null
    _sum: ProductComboSumAggregateOutputType | null
    _min: ProductComboMinAggregateOutputType | null
    _max: ProductComboMaxAggregateOutputType | null
  }

  type GetProductComboGroupByPayload<T extends ProductComboGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductComboGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductComboGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductComboGroupByOutputType[P]>
            : GetScalarType<T[P], ProductComboGroupByOutputType[P]>
        }
      >
    >


  export type ProductComboSelect = {
    id?: boolean
    product?: boolean | ProductArgs
    product_id?: boolean
    item?: boolean | ProductArgs
    item_id?: boolean
    amount?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductComboInclude = {
    product?: boolean | ProductArgs
    item?: boolean | ProductArgs
  }

  export type ProductComboGetPayload<
    S extends boolean | null | undefined | ProductComboArgs,
    U = keyof S
      > = S extends true
        ? ProductCombo
    : S extends undefined
    ? never
    : S extends ProductComboArgs | ProductComboFindManyArgs
    ?'include' extends U
    ? ProductCombo  & {
    [P in TrueKeys<S['include']>]:
        P extends 'product' ? ProductGetPayload<S['include'][P]> :
        P extends 'item' ? ProductGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'product' ? ProductGetPayload<S['select'][P]> :
        P extends 'item' ? ProductGetPayload<S['select'][P]> :  P extends keyof ProductCombo ? ProductCombo[P] : never
  } 
    : ProductCombo
  : ProductCombo


  type ProductComboCountArgs = Merge<
    Omit<ProductComboFindManyArgs, 'select' | 'include'> & {
      select?: ProductComboCountAggregateInputType | true
    }
  >

  export interface ProductComboDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ProductCombo that matches the filter.
     * @param {ProductComboFindUniqueArgs} args - Arguments to find a ProductCombo
     * @example
     * // Get one ProductCombo
     * const productCombo = await prisma.productCombo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductComboFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductComboFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProductCombo'> extends True ? CheckSelect<T, Prisma__ProductComboClient<ProductCombo>, Prisma__ProductComboClient<ProductComboGetPayload<T>>> : CheckSelect<T, Prisma__ProductComboClient<ProductCombo | null >, Prisma__ProductComboClient<ProductComboGetPayload<T> | null >>

    /**
     * Find the first ProductCombo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductComboFindFirstArgs} args - Arguments to find a ProductCombo
     * @example
     * // Get one ProductCombo
     * const productCombo = await prisma.productCombo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductComboFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductComboFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProductCombo'> extends True ? CheckSelect<T, Prisma__ProductComboClient<ProductCombo>, Prisma__ProductComboClient<ProductComboGetPayload<T>>> : CheckSelect<T, Prisma__ProductComboClient<ProductCombo | null >, Prisma__ProductComboClient<ProductComboGetPayload<T> | null >>

    /**
     * Find zero or more ProductCombos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductComboFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCombos
     * const productCombos = await prisma.productCombo.findMany()
     * 
     * // Get first 10 ProductCombos
     * const productCombos = await prisma.productCombo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productComboWithIdOnly = await prisma.productCombo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductComboFindManyArgs>(
      args?: SelectSubset<T, ProductComboFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ProductCombo>>, PrismaPromise<Array<ProductComboGetPayload<T>>>>

    /**
     * Create a ProductCombo.
     * @param {ProductComboCreateArgs} args - Arguments to create a ProductCombo.
     * @example
     * // Create one ProductCombo
     * const ProductCombo = await prisma.productCombo.create({
     *   data: {
     *     // ... data to create a ProductCombo
     *   }
     * })
     * 
    **/
    create<T extends ProductComboCreateArgs>(
      args: SelectSubset<T, ProductComboCreateArgs>
    ): CheckSelect<T, Prisma__ProductComboClient<ProductCombo>, Prisma__ProductComboClient<ProductComboGetPayload<T>>>

    /**
     * Create many ProductCombos.
     *     @param {ProductComboCreateManyArgs} args - Arguments to create many ProductCombos.
     *     @example
     *     // Create many ProductCombos
     *     const productCombo = await prisma.productCombo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductComboCreateManyArgs>(
      args?: SelectSubset<T, ProductComboCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProductCombo.
     * @param {ProductComboDeleteArgs} args - Arguments to delete one ProductCombo.
     * @example
     * // Delete one ProductCombo
     * const ProductCombo = await prisma.productCombo.delete({
     *   where: {
     *     // ... filter to delete one ProductCombo
     *   }
     * })
     * 
    **/
    delete<T extends ProductComboDeleteArgs>(
      args: SelectSubset<T, ProductComboDeleteArgs>
    ): CheckSelect<T, Prisma__ProductComboClient<ProductCombo>, Prisma__ProductComboClient<ProductComboGetPayload<T>>>

    /**
     * Update one ProductCombo.
     * @param {ProductComboUpdateArgs} args - Arguments to update one ProductCombo.
     * @example
     * // Update one ProductCombo
     * const productCombo = await prisma.productCombo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductComboUpdateArgs>(
      args: SelectSubset<T, ProductComboUpdateArgs>
    ): CheckSelect<T, Prisma__ProductComboClient<ProductCombo>, Prisma__ProductComboClient<ProductComboGetPayload<T>>>

    /**
     * Delete zero or more ProductCombos.
     * @param {ProductComboDeleteManyArgs} args - Arguments to filter ProductCombos to delete.
     * @example
     * // Delete a few ProductCombos
     * const { count } = await prisma.productCombo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductComboDeleteManyArgs>(
      args?: SelectSubset<T, ProductComboDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCombos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductComboUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCombos
     * const productCombo = await prisma.productCombo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductComboUpdateManyArgs>(
      args: SelectSubset<T, ProductComboUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductCombo.
     * @param {ProductComboUpsertArgs} args - Arguments to update or create a ProductCombo.
     * @example
     * // Update or create a ProductCombo
     * const productCombo = await prisma.productCombo.upsert({
     *   create: {
     *     // ... data to create a ProductCombo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCombo we want to update
     *   }
     * })
    **/
    upsert<T extends ProductComboUpsertArgs>(
      args: SelectSubset<T, ProductComboUpsertArgs>
    ): CheckSelect<T, Prisma__ProductComboClient<ProductCombo>, Prisma__ProductComboClient<ProductComboGetPayload<T>>>

    /**
     * Find zero or more ProductCombos that matches the filter.
     * @param {ProductComboFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const productCombo = await prisma.productCombo.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ProductComboFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProductCombo.
     * @param {ProductComboAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const productCombo = await prisma.productCombo.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ProductComboAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of ProductCombos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductComboCountArgs} args - Arguments to filter ProductCombos to count.
     * @example
     * // Count the number of ProductCombos
     * const count = await prisma.productCombo.count({
     *   where: {
     *     // ... the filter for the ProductCombos we want to count
     *   }
     * })
    **/
    count<T extends ProductComboCountArgs>(
      args?: Subset<T, ProductComboCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductComboCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductCombo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductComboAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductComboAggregateArgs>(args: Subset<T, ProductComboAggregateArgs>): PrismaPromise<GetProductComboAggregateType<T>>

    /**
     * Group by ProductCombo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductComboGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductComboGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductComboGroupByArgs['orderBy'] }
        : { orderBy?: ProductComboGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductComboGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductComboGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductCombo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductComboClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    product<T extends ProductArgs = {}>(args?: Subset<T, ProductArgs>): CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>;

    item<T extends ProductArgs = {}>(args?: Subset<T, ProductArgs>): CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ProductCombo findUnique
   */
  export type ProductComboFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ProductCombo
     * 
    **/
    select?: ProductComboSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductComboInclude | null
    /**
     * Throw an Error if a ProductCombo can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ProductCombo to fetch.
     * 
    **/
    where: ProductComboWhereUniqueInput
  }


  /**
   * ProductCombo findFirst
   */
  export type ProductComboFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ProductCombo
     * 
    **/
    select?: ProductComboSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductComboInclude | null
    /**
     * Throw an Error if a ProductCombo can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ProductCombo to fetch.
     * 
    **/
    where?: ProductComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCombos to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductComboOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCombos.
     * 
    **/
    cursor?: ProductComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCombos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCombos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCombos.
     * 
    **/
    distinct?: Enumerable<ProductComboScalarFieldEnum>
  }


  /**
   * ProductCombo findMany
   */
  export type ProductComboFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProductCombo
     * 
    **/
    select?: ProductComboSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductComboInclude | null
    /**
     * Filter, which ProductCombos to fetch.
     * 
    **/
    where?: ProductComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCombos to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductComboOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductCombos.
     * 
    **/
    cursor?: ProductComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCombos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCombos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductComboScalarFieldEnum>
  }


  /**
   * ProductCombo create
   */
  export type ProductComboCreateArgs = {
    /**
     * Select specific fields to fetch from the ProductCombo
     * 
    **/
    select?: ProductComboSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductComboInclude | null
    /**
     * The data needed to create a ProductCombo.
     * 
    **/
    data: XOR<ProductComboCreateInput, ProductComboUncheckedCreateInput>
  }


  /**
   * ProductCombo createMany
   */
  export type ProductComboCreateManyArgs = {
    /**
     * The data used to create many ProductCombos.
     * 
    **/
    data: Enumerable<ProductComboCreateManyInput>
  }


  /**
   * ProductCombo update
   */
  export type ProductComboUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProductCombo
     * 
    **/
    select?: ProductComboSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductComboInclude | null
    /**
     * The data needed to update a ProductCombo.
     * 
    **/
    data: XOR<ProductComboUpdateInput, ProductComboUncheckedUpdateInput>
    /**
     * Choose, which ProductCombo to update.
     * 
    **/
    where: ProductComboWhereUniqueInput
  }


  /**
   * ProductCombo updateMany
   */
  export type ProductComboUpdateManyArgs = {
    /**
     * The data used to update ProductCombos.
     * 
    **/
    data: XOR<ProductComboUpdateManyMutationInput, ProductComboUncheckedUpdateManyInput>
    /**
     * Filter which ProductCombos to update
     * 
    **/
    where?: ProductComboWhereInput
  }


  /**
   * ProductCombo upsert
   */
  export type ProductComboUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProductCombo
     * 
    **/
    select?: ProductComboSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductComboInclude | null
    /**
     * The filter to search for the ProductCombo to update in case it exists.
     * 
    **/
    where: ProductComboWhereUniqueInput
    /**
     * In case the ProductCombo found by the `where` argument doesn't exist, create a new ProductCombo with this data.
     * 
    **/
    create: XOR<ProductComboCreateInput, ProductComboUncheckedCreateInput>
    /**
     * In case the ProductCombo was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductComboUpdateInput, ProductComboUncheckedUpdateInput>
  }


  /**
   * ProductCombo delete
   */
  export type ProductComboDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProductCombo
     * 
    **/
    select?: ProductComboSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductComboInclude | null
    /**
     * Filter which ProductCombo to delete.
     * 
    **/
    where: ProductComboWhereUniqueInput
  }


  /**
   * ProductCombo deleteMany
   */
  export type ProductComboDeleteManyArgs = {
    /**
     * Filter which ProductCombos to delete
     * 
    **/
    where?: ProductComboWhereInput
  }


  /**
   * ProductCombo findRaw
   */
  export type ProductComboFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProductCombo aggregateRaw
   */
  export type ProductComboAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProductCombo without action
   */
  export type ProductComboArgs = {
    /**
     * Select specific fields to fetch from the ProductCombo
     * 
    **/
    select?: ProductComboSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductComboInclude | null
  }



  /**
   * Model ConfigProductException
   */


  export type AggregateConfigProductException = {
    _count: ConfigProductExceptionCountAggregateOutputType | null
    _min: ConfigProductExceptionMinAggregateOutputType | null
    _max: ConfigProductExceptionMaxAggregateOutputType | null
  }

  export type ConfigProductExceptionMinAggregateOutputType = {
    id: string | null
    product_id: string | null
    date: Date | null
    action: TypeActionExceptionProduct | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ConfigProductExceptionMaxAggregateOutputType = {
    id: string | null
    product_id: string | null
    date: Date | null
    action: TypeActionExceptionProduct | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ConfigProductExceptionCountAggregateOutputType = {
    id: number
    product_id: number
    date: number
    action: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ConfigProductExceptionMinAggregateInputType = {
    id?: true
    product_id?: true
    date?: true
    action?: true
    created_at?: true
    updated_at?: true
  }

  export type ConfigProductExceptionMaxAggregateInputType = {
    id?: true
    product_id?: true
    date?: true
    action?: true
    created_at?: true
    updated_at?: true
  }

  export type ConfigProductExceptionCountAggregateInputType = {
    id?: true
    product_id?: true
    date?: true
    action?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ConfigProductExceptionAggregateArgs = {
    /**
     * Filter which ConfigProductException to aggregate.
     * 
    **/
    where?: ConfigProductExceptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfigProductExceptions to fetch.
     * 
    **/
    orderBy?: Enumerable<ConfigProductExceptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ConfigProductExceptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfigProductExceptions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfigProductExceptions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConfigProductExceptions
    **/
    _count?: true | ConfigProductExceptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfigProductExceptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfigProductExceptionMaxAggregateInputType
  }

  export type GetConfigProductExceptionAggregateType<T extends ConfigProductExceptionAggregateArgs> = {
        [P in keyof T & keyof AggregateConfigProductException]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfigProductException[P]>
      : GetScalarType<T[P], AggregateConfigProductException[P]>
  }




  export type ConfigProductExceptionGroupByArgs = {
    where?: ConfigProductExceptionWhereInput
    orderBy?: Enumerable<ConfigProductExceptionOrderByWithAggregationInput>
    by: Array<ConfigProductExceptionScalarFieldEnum>
    having?: ConfigProductExceptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfigProductExceptionCountAggregateInputType | true
    _min?: ConfigProductExceptionMinAggregateInputType
    _max?: ConfigProductExceptionMaxAggregateInputType
  }


  export type ConfigProductExceptionGroupByOutputType = {
    id: string
    product_id: string
    date: Date
    action: TypeActionExceptionProduct
    created_at: Date
    updated_at: Date
    _count: ConfigProductExceptionCountAggregateOutputType | null
    _min: ConfigProductExceptionMinAggregateOutputType | null
    _max: ConfigProductExceptionMaxAggregateOutputType | null
  }

  type GetConfigProductExceptionGroupByPayload<T extends ConfigProductExceptionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ConfigProductExceptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfigProductExceptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfigProductExceptionGroupByOutputType[P]>
            : GetScalarType<T[P], ConfigProductExceptionGroupByOutputType[P]>
        }
      >
    >


  export type ConfigProductExceptionSelect = {
    id?: boolean
    product?: boolean | ProductArgs
    product_id?: boolean
    date?: boolean
    action?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ConfigProductExceptionInclude = {
    product?: boolean | ProductArgs
  }

  export type ConfigProductExceptionGetPayload<
    S extends boolean | null | undefined | ConfigProductExceptionArgs,
    U = keyof S
      > = S extends true
        ? ConfigProductException
    : S extends undefined
    ? never
    : S extends ConfigProductExceptionArgs | ConfigProductExceptionFindManyArgs
    ?'include' extends U
    ? ConfigProductException  & {
    [P in TrueKeys<S['include']>]:
        P extends 'product' ? ProductGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'product' ? ProductGetPayload<S['select'][P]> :  P extends keyof ConfigProductException ? ConfigProductException[P] : never
  } 
    : ConfigProductException
  : ConfigProductException


  type ConfigProductExceptionCountArgs = Merge<
    Omit<ConfigProductExceptionFindManyArgs, 'select' | 'include'> & {
      select?: ConfigProductExceptionCountAggregateInputType | true
    }
  >

  export interface ConfigProductExceptionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ConfigProductException that matches the filter.
     * @param {ConfigProductExceptionFindUniqueArgs} args - Arguments to find a ConfigProductException
     * @example
     * // Get one ConfigProductException
     * const configProductException = await prisma.configProductException.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ConfigProductExceptionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ConfigProductExceptionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ConfigProductException'> extends True ? CheckSelect<T, Prisma__ConfigProductExceptionClient<ConfigProductException>, Prisma__ConfigProductExceptionClient<ConfigProductExceptionGetPayload<T>>> : CheckSelect<T, Prisma__ConfigProductExceptionClient<ConfigProductException | null >, Prisma__ConfigProductExceptionClient<ConfigProductExceptionGetPayload<T> | null >>

    /**
     * Find the first ConfigProductException that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigProductExceptionFindFirstArgs} args - Arguments to find a ConfigProductException
     * @example
     * // Get one ConfigProductException
     * const configProductException = await prisma.configProductException.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ConfigProductExceptionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ConfigProductExceptionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ConfigProductException'> extends True ? CheckSelect<T, Prisma__ConfigProductExceptionClient<ConfigProductException>, Prisma__ConfigProductExceptionClient<ConfigProductExceptionGetPayload<T>>> : CheckSelect<T, Prisma__ConfigProductExceptionClient<ConfigProductException | null >, Prisma__ConfigProductExceptionClient<ConfigProductExceptionGetPayload<T> | null >>

    /**
     * Find zero or more ConfigProductExceptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigProductExceptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConfigProductExceptions
     * const configProductExceptions = await prisma.configProductException.findMany()
     * 
     * // Get first 10 ConfigProductExceptions
     * const configProductExceptions = await prisma.configProductException.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configProductExceptionWithIdOnly = await prisma.configProductException.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ConfigProductExceptionFindManyArgs>(
      args?: SelectSubset<T, ConfigProductExceptionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ConfigProductException>>, PrismaPromise<Array<ConfigProductExceptionGetPayload<T>>>>

    /**
     * Create a ConfigProductException.
     * @param {ConfigProductExceptionCreateArgs} args - Arguments to create a ConfigProductException.
     * @example
     * // Create one ConfigProductException
     * const ConfigProductException = await prisma.configProductException.create({
     *   data: {
     *     // ... data to create a ConfigProductException
     *   }
     * })
     * 
    **/
    create<T extends ConfigProductExceptionCreateArgs>(
      args: SelectSubset<T, ConfigProductExceptionCreateArgs>
    ): CheckSelect<T, Prisma__ConfigProductExceptionClient<ConfigProductException>, Prisma__ConfigProductExceptionClient<ConfigProductExceptionGetPayload<T>>>

    /**
     * Create many ConfigProductExceptions.
     *     @param {ConfigProductExceptionCreateManyArgs} args - Arguments to create many ConfigProductExceptions.
     *     @example
     *     // Create many ConfigProductExceptions
     *     const configProductException = await prisma.configProductException.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ConfigProductExceptionCreateManyArgs>(
      args?: SelectSubset<T, ConfigProductExceptionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ConfigProductException.
     * @param {ConfigProductExceptionDeleteArgs} args - Arguments to delete one ConfigProductException.
     * @example
     * // Delete one ConfigProductException
     * const ConfigProductException = await prisma.configProductException.delete({
     *   where: {
     *     // ... filter to delete one ConfigProductException
     *   }
     * })
     * 
    **/
    delete<T extends ConfigProductExceptionDeleteArgs>(
      args: SelectSubset<T, ConfigProductExceptionDeleteArgs>
    ): CheckSelect<T, Prisma__ConfigProductExceptionClient<ConfigProductException>, Prisma__ConfigProductExceptionClient<ConfigProductExceptionGetPayload<T>>>

    /**
     * Update one ConfigProductException.
     * @param {ConfigProductExceptionUpdateArgs} args - Arguments to update one ConfigProductException.
     * @example
     * // Update one ConfigProductException
     * const configProductException = await prisma.configProductException.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ConfigProductExceptionUpdateArgs>(
      args: SelectSubset<T, ConfigProductExceptionUpdateArgs>
    ): CheckSelect<T, Prisma__ConfigProductExceptionClient<ConfigProductException>, Prisma__ConfigProductExceptionClient<ConfigProductExceptionGetPayload<T>>>

    /**
     * Delete zero or more ConfigProductExceptions.
     * @param {ConfigProductExceptionDeleteManyArgs} args - Arguments to filter ConfigProductExceptions to delete.
     * @example
     * // Delete a few ConfigProductExceptions
     * const { count } = await prisma.configProductException.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ConfigProductExceptionDeleteManyArgs>(
      args?: SelectSubset<T, ConfigProductExceptionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfigProductExceptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigProductExceptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConfigProductExceptions
     * const configProductException = await prisma.configProductException.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ConfigProductExceptionUpdateManyArgs>(
      args: SelectSubset<T, ConfigProductExceptionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ConfigProductException.
     * @param {ConfigProductExceptionUpsertArgs} args - Arguments to update or create a ConfigProductException.
     * @example
     * // Update or create a ConfigProductException
     * const configProductException = await prisma.configProductException.upsert({
     *   create: {
     *     // ... data to create a ConfigProductException
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConfigProductException we want to update
     *   }
     * })
    **/
    upsert<T extends ConfigProductExceptionUpsertArgs>(
      args: SelectSubset<T, ConfigProductExceptionUpsertArgs>
    ): CheckSelect<T, Prisma__ConfigProductExceptionClient<ConfigProductException>, Prisma__ConfigProductExceptionClient<ConfigProductExceptionGetPayload<T>>>

    /**
     * Find zero or more ConfigProductExceptions that matches the filter.
     * @param {ConfigProductExceptionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const configProductException = await prisma.configProductException.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ConfigProductExceptionFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ConfigProductException.
     * @param {ConfigProductExceptionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const configProductException = await prisma.configProductException.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ConfigProductExceptionAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of ConfigProductExceptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigProductExceptionCountArgs} args - Arguments to filter ConfigProductExceptions to count.
     * @example
     * // Count the number of ConfigProductExceptions
     * const count = await prisma.configProductException.count({
     *   where: {
     *     // ... the filter for the ConfigProductExceptions we want to count
     *   }
     * })
    **/
    count<T extends ConfigProductExceptionCountArgs>(
      args?: Subset<T, ConfigProductExceptionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfigProductExceptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConfigProductException.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigProductExceptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConfigProductExceptionAggregateArgs>(args: Subset<T, ConfigProductExceptionAggregateArgs>): PrismaPromise<GetConfigProductExceptionAggregateType<T>>

    /**
     * Group by ConfigProductException.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigProductExceptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConfigProductExceptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfigProductExceptionGroupByArgs['orderBy'] }
        : { orderBy?: ConfigProductExceptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConfigProductExceptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigProductExceptionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConfigProductException.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ConfigProductExceptionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    product<T extends ProductArgs = {}>(args?: Subset<T, ProductArgs>): CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ConfigProductException findUnique
   */
  export type ConfigProductExceptionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ConfigProductException
     * 
    **/
    select?: ConfigProductExceptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ConfigProductExceptionInclude | null
    /**
     * Throw an Error if a ConfigProductException can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ConfigProductException to fetch.
     * 
    **/
    where: ConfigProductExceptionWhereUniqueInput
  }


  /**
   * ConfigProductException findFirst
   */
  export type ConfigProductExceptionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ConfigProductException
     * 
    **/
    select?: ConfigProductExceptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ConfigProductExceptionInclude | null
    /**
     * Throw an Error if a ConfigProductException can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ConfigProductException to fetch.
     * 
    **/
    where?: ConfigProductExceptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfigProductExceptions to fetch.
     * 
    **/
    orderBy?: Enumerable<ConfigProductExceptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfigProductExceptions.
     * 
    **/
    cursor?: ConfigProductExceptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfigProductExceptions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfigProductExceptions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfigProductExceptions.
     * 
    **/
    distinct?: Enumerable<ConfigProductExceptionScalarFieldEnum>
  }


  /**
   * ConfigProductException findMany
   */
  export type ConfigProductExceptionFindManyArgs = {
    /**
     * Select specific fields to fetch from the ConfigProductException
     * 
    **/
    select?: ConfigProductExceptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ConfigProductExceptionInclude | null
    /**
     * Filter, which ConfigProductExceptions to fetch.
     * 
    **/
    where?: ConfigProductExceptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfigProductExceptions to fetch.
     * 
    **/
    orderBy?: Enumerable<ConfigProductExceptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConfigProductExceptions.
     * 
    **/
    cursor?: ConfigProductExceptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfigProductExceptions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfigProductExceptions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ConfigProductExceptionScalarFieldEnum>
  }


  /**
   * ConfigProductException create
   */
  export type ConfigProductExceptionCreateArgs = {
    /**
     * Select specific fields to fetch from the ConfigProductException
     * 
    **/
    select?: ConfigProductExceptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ConfigProductExceptionInclude | null
    /**
     * The data needed to create a ConfigProductException.
     * 
    **/
    data: XOR<ConfigProductExceptionCreateInput, ConfigProductExceptionUncheckedCreateInput>
  }


  /**
   * ConfigProductException createMany
   */
  export type ConfigProductExceptionCreateManyArgs = {
    /**
     * The data used to create many ConfigProductExceptions.
     * 
    **/
    data: Enumerable<ConfigProductExceptionCreateManyInput>
  }


  /**
   * ConfigProductException update
   */
  export type ConfigProductExceptionUpdateArgs = {
    /**
     * Select specific fields to fetch from the ConfigProductException
     * 
    **/
    select?: ConfigProductExceptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ConfigProductExceptionInclude | null
    /**
     * The data needed to update a ConfigProductException.
     * 
    **/
    data: XOR<ConfigProductExceptionUpdateInput, ConfigProductExceptionUncheckedUpdateInput>
    /**
     * Choose, which ConfigProductException to update.
     * 
    **/
    where: ConfigProductExceptionWhereUniqueInput
  }


  /**
   * ConfigProductException updateMany
   */
  export type ConfigProductExceptionUpdateManyArgs = {
    /**
     * The data used to update ConfigProductExceptions.
     * 
    **/
    data: XOR<ConfigProductExceptionUpdateManyMutationInput, ConfigProductExceptionUncheckedUpdateManyInput>
    /**
     * Filter which ConfigProductExceptions to update
     * 
    **/
    where?: ConfigProductExceptionWhereInput
  }


  /**
   * ConfigProductException upsert
   */
  export type ConfigProductExceptionUpsertArgs = {
    /**
     * Select specific fields to fetch from the ConfigProductException
     * 
    **/
    select?: ConfigProductExceptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ConfigProductExceptionInclude | null
    /**
     * The filter to search for the ConfigProductException to update in case it exists.
     * 
    **/
    where: ConfigProductExceptionWhereUniqueInput
    /**
     * In case the ConfigProductException found by the `where` argument doesn't exist, create a new ConfigProductException with this data.
     * 
    **/
    create: XOR<ConfigProductExceptionCreateInput, ConfigProductExceptionUncheckedCreateInput>
    /**
     * In case the ConfigProductException was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ConfigProductExceptionUpdateInput, ConfigProductExceptionUncheckedUpdateInput>
  }


  /**
   * ConfigProductException delete
   */
  export type ConfigProductExceptionDeleteArgs = {
    /**
     * Select specific fields to fetch from the ConfigProductException
     * 
    **/
    select?: ConfigProductExceptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ConfigProductExceptionInclude | null
    /**
     * Filter which ConfigProductException to delete.
     * 
    **/
    where: ConfigProductExceptionWhereUniqueInput
  }


  /**
   * ConfigProductException deleteMany
   */
  export type ConfigProductExceptionDeleteManyArgs = {
    /**
     * Filter which ConfigProductExceptions to delete
     * 
    **/
    where?: ConfigProductExceptionWhereInput
  }


  /**
   * ConfigProductException findRaw
   */
  export type ConfigProductExceptionFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ConfigProductException aggregateRaw
   */
  export type ConfigProductExceptionAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ConfigProductException without action
   */
  export type ConfigProductExceptionArgs = {
    /**
     * Select specific fields to fetch from the ConfigProductException
     * 
    **/
    select?: ConfigProductExceptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ConfigProductExceptionInclude | null
  }



  /**
   * Model ProductTotalSales
   */


  export type AggregateProductTotalSales = {
    _count: ProductTotalSalesCountAggregateOutputType | null
    _avg: ProductTotalSalesAvgAggregateOutputType | null
    _sum: ProductTotalSalesSumAggregateOutputType | null
    _min: ProductTotalSalesMinAggregateOutputType | null
    _max: ProductTotalSalesMaxAggregateOutputType | null
  }

  export type ProductTotalSalesAvgAggregateOutputType = {
    amount: number | null
  }

  export type ProductTotalSalesSumAggregateOutputType = {
    amount: number | null
  }

  export type ProductTotalSalesMinAggregateOutputType = {
    id: string | null
    product_id: string | null
    date: Date | null
    amount: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductTotalSalesMaxAggregateOutputType = {
    id: string | null
    product_id: string | null
    date: Date | null
    amount: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductTotalSalesCountAggregateOutputType = {
    id: number
    product_id: number
    date: number
    amount: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductTotalSalesAvgAggregateInputType = {
    amount?: true
  }

  export type ProductTotalSalesSumAggregateInputType = {
    amount?: true
  }

  export type ProductTotalSalesMinAggregateInputType = {
    id?: true
    product_id?: true
    date?: true
    amount?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductTotalSalesMaxAggregateInputType = {
    id?: true
    product_id?: true
    date?: true
    amount?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductTotalSalesCountAggregateInputType = {
    id?: true
    product_id?: true
    date?: true
    amount?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductTotalSalesAggregateArgs = {
    /**
     * Filter which ProductTotalSales to aggregate.
     * 
    **/
    where?: ProductTotalSalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTotalSales to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductTotalSalesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductTotalSalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTotalSales from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTotalSales.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductTotalSales
    **/
    _count?: true | ProductTotalSalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductTotalSalesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductTotalSalesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductTotalSalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductTotalSalesMaxAggregateInputType
  }

  export type GetProductTotalSalesAggregateType<T extends ProductTotalSalesAggregateArgs> = {
        [P in keyof T & keyof AggregateProductTotalSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductTotalSales[P]>
      : GetScalarType<T[P], AggregateProductTotalSales[P]>
  }




  export type ProductTotalSalesGroupByArgs = {
    where?: ProductTotalSalesWhereInput
    orderBy?: Enumerable<ProductTotalSalesOrderByWithAggregationInput>
    by: Array<ProductTotalSalesScalarFieldEnum>
    having?: ProductTotalSalesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductTotalSalesCountAggregateInputType | true
    _avg?: ProductTotalSalesAvgAggregateInputType
    _sum?: ProductTotalSalesSumAggregateInputType
    _min?: ProductTotalSalesMinAggregateInputType
    _max?: ProductTotalSalesMaxAggregateInputType
  }


  export type ProductTotalSalesGroupByOutputType = {
    id: string
    product_id: string
    date: Date
    amount: number
    created_at: Date
    updated_at: Date
    _count: ProductTotalSalesCountAggregateOutputType | null
    _avg: ProductTotalSalesAvgAggregateOutputType | null
    _sum: ProductTotalSalesSumAggregateOutputType | null
    _min: ProductTotalSalesMinAggregateOutputType | null
    _max: ProductTotalSalesMaxAggregateOutputType | null
  }

  type GetProductTotalSalesGroupByPayload<T extends ProductTotalSalesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductTotalSalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductTotalSalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductTotalSalesGroupByOutputType[P]>
            : GetScalarType<T[P], ProductTotalSalesGroupByOutputType[P]>
        }
      >
    >


  export type ProductTotalSalesSelect = {
    id?: boolean
    product?: boolean | ProductArgs
    product_id?: boolean
    date?: boolean
    amount?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductTotalSalesInclude = {
    product?: boolean | ProductArgs
  }

  export type ProductTotalSalesGetPayload<
    S extends boolean | null | undefined | ProductTotalSalesArgs,
    U = keyof S
      > = S extends true
        ? ProductTotalSales
    : S extends undefined
    ? never
    : S extends ProductTotalSalesArgs | ProductTotalSalesFindManyArgs
    ?'include' extends U
    ? ProductTotalSales  & {
    [P in TrueKeys<S['include']>]:
        P extends 'product' ? ProductGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'product' ? ProductGetPayload<S['select'][P]> :  P extends keyof ProductTotalSales ? ProductTotalSales[P] : never
  } 
    : ProductTotalSales
  : ProductTotalSales


  type ProductTotalSalesCountArgs = Merge<
    Omit<ProductTotalSalesFindManyArgs, 'select' | 'include'> & {
      select?: ProductTotalSalesCountAggregateInputType | true
    }
  >

  export interface ProductTotalSalesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ProductTotalSales that matches the filter.
     * @param {ProductTotalSalesFindUniqueArgs} args - Arguments to find a ProductTotalSales
     * @example
     * // Get one ProductTotalSales
     * const productTotalSales = await prisma.productTotalSales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductTotalSalesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductTotalSalesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProductTotalSales'> extends True ? CheckSelect<T, Prisma__ProductTotalSalesClient<ProductTotalSales>, Prisma__ProductTotalSalesClient<ProductTotalSalesGetPayload<T>>> : CheckSelect<T, Prisma__ProductTotalSalesClient<ProductTotalSales | null >, Prisma__ProductTotalSalesClient<ProductTotalSalesGetPayload<T> | null >>

    /**
     * Find the first ProductTotalSales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTotalSalesFindFirstArgs} args - Arguments to find a ProductTotalSales
     * @example
     * // Get one ProductTotalSales
     * const productTotalSales = await prisma.productTotalSales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductTotalSalesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductTotalSalesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProductTotalSales'> extends True ? CheckSelect<T, Prisma__ProductTotalSalesClient<ProductTotalSales>, Prisma__ProductTotalSalesClient<ProductTotalSalesGetPayload<T>>> : CheckSelect<T, Prisma__ProductTotalSalesClient<ProductTotalSales | null >, Prisma__ProductTotalSalesClient<ProductTotalSalesGetPayload<T> | null >>

    /**
     * Find zero or more ProductTotalSales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTotalSalesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductTotalSales
     * const productTotalSales = await prisma.productTotalSales.findMany()
     * 
     * // Get first 10 ProductTotalSales
     * const productTotalSales = await prisma.productTotalSales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productTotalSalesWithIdOnly = await prisma.productTotalSales.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductTotalSalesFindManyArgs>(
      args?: SelectSubset<T, ProductTotalSalesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ProductTotalSales>>, PrismaPromise<Array<ProductTotalSalesGetPayload<T>>>>

    /**
     * Create a ProductTotalSales.
     * @param {ProductTotalSalesCreateArgs} args - Arguments to create a ProductTotalSales.
     * @example
     * // Create one ProductTotalSales
     * const ProductTotalSales = await prisma.productTotalSales.create({
     *   data: {
     *     // ... data to create a ProductTotalSales
     *   }
     * })
     * 
    **/
    create<T extends ProductTotalSalesCreateArgs>(
      args: SelectSubset<T, ProductTotalSalesCreateArgs>
    ): CheckSelect<T, Prisma__ProductTotalSalesClient<ProductTotalSales>, Prisma__ProductTotalSalesClient<ProductTotalSalesGetPayload<T>>>

    /**
     * Create many ProductTotalSales.
     *     @param {ProductTotalSalesCreateManyArgs} args - Arguments to create many ProductTotalSales.
     *     @example
     *     // Create many ProductTotalSales
     *     const productTotalSales = await prisma.productTotalSales.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductTotalSalesCreateManyArgs>(
      args?: SelectSubset<T, ProductTotalSalesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProductTotalSales.
     * @param {ProductTotalSalesDeleteArgs} args - Arguments to delete one ProductTotalSales.
     * @example
     * // Delete one ProductTotalSales
     * const ProductTotalSales = await prisma.productTotalSales.delete({
     *   where: {
     *     // ... filter to delete one ProductTotalSales
     *   }
     * })
     * 
    **/
    delete<T extends ProductTotalSalesDeleteArgs>(
      args: SelectSubset<T, ProductTotalSalesDeleteArgs>
    ): CheckSelect<T, Prisma__ProductTotalSalesClient<ProductTotalSales>, Prisma__ProductTotalSalesClient<ProductTotalSalesGetPayload<T>>>

    /**
     * Update one ProductTotalSales.
     * @param {ProductTotalSalesUpdateArgs} args - Arguments to update one ProductTotalSales.
     * @example
     * // Update one ProductTotalSales
     * const productTotalSales = await prisma.productTotalSales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductTotalSalesUpdateArgs>(
      args: SelectSubset<T, ProductTotalSalesUpdateArgs>
    ): CheckSelect<T, Prisma__ProductTotalSalesClient<ProductTotalSales>, Prisma__ProductTotalSalesClient<ProductTotalSalesGetPayload<T>>>

    /**
     * Delete zero or more ProductTotalSales.
     * @param {ProductTotalSalesDeleteManyArgs} args - Arguments to filter ProductTotalSales to delete.
     * @example
     * // Delete a few ProductTotalSales
     * const { count } = await prisma.productTotalSales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductTotalSalesDeleteManyArgs>(
      args?: SelectSubset<T, ProductTotalSalesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductTotalSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTotalSalesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductTotalSales
     * const productTotalSales = await prisma.productTotalSales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductTotalSalesUpdateManyArgs>(
      args: SelectSubset<T, ProductTotalSalesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductTotalSales.
     * @param {ProductTotalSalesUpsertArgs} args - Arguments to update or create a ProductTotalSales.
     * @example
     * // Update or create a ProductTotalSales
     * const productTotalSales = await prisma.productTotalSales.upsert({
     *   create: {
     *     // ... data to create a ProductTotalSales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductTotalSales we want to update
     *   }
     * })
    **/
    upsert<T extends ProductTotalSalesUpsertArgs>(
      args: SelectSubset<T, ProductTotalSalesUpsertArgs>
    ): CheckSelect<T, Prisma__ProductTotalSalesClient<ProductTotalSales>, Prisma__ProductTotalSalesClient<ProductTotalSalesGetPayload<T>>>

    /**
     * Find zero or more ProductTotalSales that matches the filter.
     * @param {ProductTotalSalesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const productTotalSales = await prisma.productTotalSales.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ProductTotalSalesFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProductTotalSales.
     * @param {ProductTotalSalesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const productTotalSales = await prisma.productTotalSales.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ProductTotalSalesAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of ProductTotalSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTotalSalesCountArgs} args - Arguments to filter ProductTotalSales to count.
     * @example
     * // Count the number of ProductTotalSales
     * const count = await prisma.productTotalSales.count({
     *   where: {
     *     // ... the filter for the ProductTotalSales we want to count
     *   }
     * })
    **/
    count<T extends ProductTotalSalesCountArgs>(
      args?: Subset<T, ProductTotalSalesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductTotalSalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductTotalSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTotalSalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductTotalSalesAggregateArgs>(args: Subset<T, ProductTotalSalesAggregateArgs>): PrismaPromise<GetProductTotalSalesAggregateType<T>>

    /**
     * Group by ProductTotalSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTotalSalesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductTotalSalesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductTotalSalesGroupByArgs['orderBy'] }
        : { orderBy?: ProductTotalSalesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductTotalSalesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductTotalSalesGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductTotalSales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductTotalSalesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    product<T extends ProductArgs = {}>(args?: Subset<T, ProductArgs>): CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ProductTotalSales findUnique
   */
  export type ProductTotalSalesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ProductTotalSales
     * 
    **/
    select?: ProductTotalSalesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductTotalSalesInclude | null
    /**
     * Throw an Error if a ProductTotalSales can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ProductTotalSales to fetch.
     * 
    **/
    where: ProductTotalSalesWhereUniqueInput
  }


  /**
   * ProductTotalSales findFirst
   */
  export type ProductTotalSalesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ProductTotalSales
     * 
    **/
    select?: ProductTotalSalesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductTotalSalesInclude | null
    /**
     * Throw an Error if a ProductTotalSales can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ProductTotalSales to fetch.
     * 
    **/
    where?: ProductTotalSalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTotalSales to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductTotalSalesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductTotalSales.
     * 
    **/
    cursor?: ProductTotalSalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTotalSales from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTotalSales.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTotalSales.
     * 
    **/
    distinct?: Enumerable<ProductTotalSalesScalarFieldEnum>
  }


  /**
   * ProductTotalSales findMany
   */
  export type ProductTotalSalesFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProductTotalSales
     * 
    **/
    select?: ProductTotalSalesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductTotalSalesInclude | null
    /**
     * Filter, which ProductTotalSales to fetch.
     * 
    **/
    where?: ProductTotalSalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTotalSales to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductTotalSalesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductTotalSales.
     * 
    **/
    cursor?: ProductTotalSalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTotalSales from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTotalSales.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductTotalSalesScalarFieldEnum>
  }


  /**
   * ProductTotalSales create
   */
  export type ProductTotalSalesCreateArgs = {
    /**
     * Select specific fields to fetch from the ProductTotalSales
     * 
    **/
    select?: ProductTotalSalesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductTotalSalesInclude | null
    /**
     * The data needed to create a ProductTotalSales.
     * 
    **/
    data: XOR<ProductTotalSalesCreateInput, ProductTotalSalesUncheckedCreateInput>
  }


  /**
   * ProductTotalSales createMany
   */
  export type ProductTotalSalesCreateManyArgs = {
    /**
     * The data used to create many ProductTotalSales.
     * 
    **/
    data: Enumerable<ProductTotalSalesCreateManyInput>
  }


  /**
   * ProductTotalSales update
   */
  export type ProductTotalSalesUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProductTotalSales
     * 
    **/
    select?: ProductTotalSalesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductTotalSalesInclude | null
    /**
     * The data needed to update a ProductTotalSales.
     * 
    **/
    data: XOR<ProductTotalSalesUpdateInput, ProductTotalSalesUncheckedUpdateInput>
    /**
     * Choose, which ProductTotalSales to update.
     * 
    **/
    where: ProductTotalSalesWhereUniqueInput
  }


  /**
   * ProductTotalSales updateMany
   */
  export type ProductTotalSalesUpdateManyArgs = {
    /**
     * The data used to update ProductTotalSales.
     * 
    **/
    data: XOR<ProductTotalSalesUpdateManyMutationInput, ProductTotalSalesUncheckedUpdateManyInput>
    /**
     * Filter which ProductTotalSales to update
     * 
    **/
    where?: ProductTotalSalesWhereInput
  }


  /**
   * ProductTotalSales upsert
   */
  export type ProductTotalSalesUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProductTotalSales
     * 
    **/
    select?: ProductTotalSalesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductTotalSalesInclude | null
    /**
     * The filter to search for the ProductTotalSales to update in case it exists.
     * 
    **/
    where: ProductTotalSalesWhereUniqueInput
    /**
     * In case the ProductTotalSales found by the `where` argument doesn't exist, create a new ProductTotalSales with this data.
     * 
    **/
    create: XOR<ProductTotalSalesCreateInput, ProductTotalSalesUncheckedCreateInput>
    /**
     * In case the ProductTotalSales was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductTotalSalesUpdateInput, ProductTotalSalesUncheckedUpdateInput>
  }


  /**
   * ProductTotalSales delete
   */
  export type ProductTotalSalesDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProductTotalSales
     * 
    **/
    select?: ProductTotalSalesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductTotalSalesInclude | null
    /**
     * Filter which ProductTotalSales to delete.
     * 
    **/
    where: ProductTotalSalesWhereUniqueInput
  }


  /**
   * ProductTotalSales deleteMany
   */
  export type ProductTotalSalesDeleteManyArgs = {
    /**
     * Filter which ProductTotalSales to delete
     * 
    **/
    where?: ProductTotalSalesWhereInput
  }


  /**
   * ProductTotalSales findRaw
   */
  export type ProductTotalSalesFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProductTotalSales aggregateRaw
   */
  export type ProductTotalSalesAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProductTotalSales without action
   */
  export type ProductTotalSalesArgs = {
    /**
     * Select specific fields to fetch from the ProductTotalSales
     * 
    **/
    select?: ProductTotalSalesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductTotalSalesInclude | null
  }



  /**
   * Model PriceTable
   */


  export type AggregatePriceTable = {
    _count: PriceTableCountAggregateOutputType | null
    _min: PriceTableMinAggregateOutputType | null
    _max: PriceTableMaxAggregateOutputType | null
  }

  export type PriceTableMinAggregateOutputType = {
    id: string | null
    company_id: string | null
    description: string | null
    initial_date: Date | null
    final_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PriceTableMaxAggregateOutputType = {
    id: string | null
    company_id: string | null
    description: string | null
    initial_date: Date | null
    final_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PriceTableCountAggregateOutputType = {
    id: number
    company_id: number
    description: number
    initial_date: number
    final_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PriceTableMinAggregateInputType = {
    id?: true
    company_id?: true
    description?: true
    initial_date?: true
    final_date?: true
    created_at?: true
    updated_at?: true
  }

  export type PriceTableMaxAggregateInputType = {
    id?: true
    company_id?: true
    description?: true
    initial_date?: true
    final_date?: true
    created_at?: true
    updated_at?: true
  }

  export type PriceTableCountAggregateInputType = {
    id?: true
    company_id?: true
    description?: true
    initial_date?: true
    final_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PriceTableAggregateArgs = {
    /**
     * Filter which PriceTable to aggregate.
     * 
    **/
    where?: PriceTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceTables to fetch.
     * 
    **/
    orderBy?: Enumerable<PriceTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PriceTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceTables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceTables.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceTables
    **/
    _count?: true | PriceTableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceTableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceTableMaxAggregateInputType
  }

  export type GetPriceTableAggregateType<T extends PriceTableAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceTable[P]>
      : GetScalarType<T[P], AggregatePriceTable[P]>
  }




  export type PriceTableGroupByArgs = {
    where?: PriceTableWhereInput
    orderBy?: Enumerable<PriceTableOrderByWithAggregationInput>
    by: Array<PriceTableScalarFieldEnum>
    having?: PriceTableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceTableCountAggregateInputType | true
    _min?: PriceTableMinAggregateInputType
    _max?: PriceTableMaxAggregateInputType
  }


  export type PriceTableGroupByOutputType = {
    id: string
    company_id: string
    description: string
    initial_date: Date | null
    final_date: Date | null
    created_at: Date
    updated_at: Date
    _count: PriceTableCountAggregateOutputType | null
    _min: PriceTableMinAggregateOutputType | null
    _max: PriceTableMaxAggregateOutputType | null
  }

  type GetPriceTableGroupByPayload<T extends PriceTableGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PriceTableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceTableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceTableGroupByOutputType[P]>
            : GetScalarType<T[P], PriceTableGroupByOutputType[P]>
        }
      >
    >


  export type PriceTableSelect = {
    id?: boolean
    company?: boolean | CompanyArgs
    company_id?: boolean
    description?: boolean
    initial_date?: boolean
    final_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    products?: boolean | ProductPricesTableFindManyArgs
    _count?: boolean | PriceTableCountOutputTypeArgs
  }

  export type PriceTableInclude = {
    company?: boolean | CompanyArgs
    products?: boolean | ProductPricesTableFindManyArgs
    _count?: boolean | PriceTableCountOutputTypeArgs
  }

  export type PriceTableGetPayload<
    S extends boolean | null | undefined | PriceTableArgs,
    U = keyof S
      > = S extends true
        ? PriceTable
    : S extends undefined
    ? never
    : S extends PriceTableArgs | PriceTableFindManyArgs
    ?'include' extends U
    ? PriceTable  & {
    [P in TrueKeys<S['include']>]:
        P extends 'company' ? CompanyGetPayload<S['include'][P]> | null :
        P extends 'products' ? Array < ProductPricesTableGetPayload<S['include'][P]>>  :
        P extends '_count' ? PriceTableCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'company' ? CompanyGetPayload<S['select'][P]> | null :
        P extends 'products' ? Array < ProductPricesTableGetPayload<S['select'][P]>>  :
        P extends '_count' ? PriceTableCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof PriceTable ? PriceTable[P] : never
  } 
    : PriceTable
  : PriceTable


  type PriceTableCountArgs = Merge<
    Omit<PriceTableFindManyArgs, 'select' | 'include'> & {
      select?: PriceTableCountAggregateInputType | true
    }
  >

  export interface PriceTableDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PriceTable that matches the filter.
     * @param {PriceTableFindUniqueArgs} args - Arguments to find a PriceTable
     * @example
     * // Get one PriceTable
     * const priceTable = await prisma.priceTable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PriceTableFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PriceTableFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PriceTable'> extends True ? CheckSelect<T, Prisma__PriceTableClient<PriceTable>, Prisma__PriceTableClient<PriceTableGetPayload<T>>> : CheckSelect<T, Prisma__PriceTableClient<PriceTable | null >, Prisma__PriceTableClient<PriceTableGetPayload<T> | null >>

    /**
     * Find the first PriceTable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceTableFindFirstArgs} args - Arguments to find a PriceTable
     * @example
     * // Get one PriceTable
     * const priceTable = await prisma.priceTable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PriceTableFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PriceTableFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PriceTable'> extends True ? CheckSelect<T, Prisma__PriceTableClient<PriceTable>, Prisma__PriceTableClient<PriceTableGetPayload<T>>> : CheckSelect<T, Prisma__PriceTableClient<PriceTable | null >, Prisma__PriceTableClient<PriceTableGetPayload<T> | null >>

    /**
     * Find zero or more PriceTables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceTableFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceTables
     * const priceTables = await prisma.priceTable.findMany()
     * 
     * // Get first 10 PriceTables
     * const priceTables = await prisma.priceTable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceTableWithIdOnly = await prisma.priceTable.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PriceTableFindManyArgs>(
      args?: SelectSubset<T, PriceTableFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PriceTable>>, PrismaPromise<Array<PriceTableGetPayload<T>>>>

    /**
     * Create a PriceTable.
     * @param {PriceTableCreateArgs} args - Arguments to create a PriceTable.
     * @example
     * // Create one PriceTable
     * const PriceTable = await prisma.priceTable.create({
     *   data: {
     *     // ... data to create a PriceTable
     *   }
     * })
     * 
    **/
    create<T extends PriceTableCreateArgs>(
      args: SelectSubset<T, PriceTableCreateArgs>
    ): CheckSelect<T, Prisma__PriceTableClient<PriceTable>, Prisma__PriceTableClient<PriceTableGetPayload<T>>>

    /**
     * Create many PriceTables.
     *     @param {PriceTableCreateManyArgs} args - Arguments to create many PriceTables.
     *     @example
     *     // Create many PriceTables
     *     const priceTable = await prisma.priceTable.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PriceTableCreateManyArgs>(
      args?: SelectSubset<T, PriceTableCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PriceTable.
     * @param {PriceTableDeleteArgs} args - Arguments to delete one PriceTable.
     * @example
     * // Delete one PriceTable
     * const PriceTable = await prisma.priceTable.delete({
     *   where: {
     *     // ... filter to delete one PriceTable
     *   }
     * })
     * 
    **/
    delete<T extends PriceTableDeleteArgs>(
      args: SelectSubset<T, PriceTableDeleteArgs>
    ): CheckSelect<T, Prisma__PriceTableClient<PriceTable>, Prisma__PriceTableClient<PriceTableGetPayload<T>>>

    /**
     * Update one PriceTable.
     * @param {PriceTableUpdateArgs} args - Arguments to update one PriceTable.
     * @example
     * // Update one PriceTable
     * const priceTable = await prisma.priceTable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PriceTableUpdateArgs>(
      args: SelectSubset<T, PriceTableUpdateArgs>
    ): CheckSelect<T, Prisma__PriceTableClient<PriceTable>, Prisma__PriceTableClient<PriceTableGetPayload<T>>>

    /**
     * Delete zero or more PriceTables.
     * @param {PriceTableDeleteManyArgs} args - Arguments to filter PriceTables to delete.
     * @example
     * // Delete a few PriceTables
     * const { count } = await prisma.priceTable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PriceTableDeleteManyArgs>(
      args?: SelectSubset<T, PriceTableDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceTableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceTables
     * const priceTable = await prisma.priceTable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PriceTableUpdateManyArgs>(
      args: SelectSubset<T, PriceTableUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PriceTable.
     * @param {PriceTableUpsertArgs} args - Arguments to update or create a PriceTable.
     * @example
     * // Update or create a PriceTable
     * const priceTable = await prisma.priceTable.upsert({
     *   create: {
     *     // ... data to create a PriceTable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceTable we want to update
     *   }
     * })
    **/
    upsert<T extends PriceTableUpsertArgs>(
      args: SelectSubset<T, PriceTableUpsertArgs>
    ): CheckSelect<T, Prisma__PriceTableClient<PriceTable>, Prisma__PriceTableClient<PriceTableGetPayload<T>>>

    /**
     * Find zero or more PriceTables that matches the filter.
     * @param {PriceTableFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const priceTable = await prisma.priceTable.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PriceTableFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PriceTable.
     * @param {PriceTableAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const priceTable = await prisma.priceTable.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PriceTableAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of PriceTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceTableCountArgs} args - Arguments to filter PriceTables to count.
     * @example
     * // Count the number of PriceTables
     * const count = await prisma.priceTable.count({
     *   where: {
     *     // ... the filter for the PriceTables we want to count
     *   }
     * })
    **/
    count<T extends PriceTableCountArgs>(
      args?: Subset<T, PriceTableCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceTableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceTableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PriceTableAggregateArgs>(args: Subset<T, PriceTableAggregateArgs>): PrismaPromise<GetPriceTableAggregateType<T>>

    /**
     * Group by PriceTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceTableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PriceTableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceTableGroupByArgs['orderBy'] }
        : { orderBy?: PriceTableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PriceTableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceTableGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceTable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PriceTableClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    company<T extends CompanyArgs = {}>(args?: Subset<T, CompanyArgs>): CheckSelect<T, Prisma__CompanyClient<Company | null >, Prisma__CompanyClient<CompanyGetPayload<T> | null >>;

    products<T extends ProductPricesTableFindManyArgs = {}>(args?: Subset<T, ProductPricesTableFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ProductPricesTable>>, PrismaPromise<Array<ProductPricesTableGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PriceTable findUnique
   */
  export type PriceTableFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the PriceTable
     * 
    **/
    select?: PriceTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PriceTableInclude | null
    /**
     * Throw an Error if a PriceTable can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PriceTable to fetch.
     * 
    **/
    where: PriceTableWhereUniqueInput
  }


  /**
   * PriceTable findFirst
   */
  export type PriceTableFindFirstArgs = {
    /**
     * Select specific fields to fetch from the PriceTable
     * 
    **/
    select?: PriceTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PriceTableInclude | null
    /**
     * Throw an Error if a PriceTable can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PriceTable to fetch.
     * 
    **/
    where?: PriceTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceTables to fetch.
     * 
    **/
    orderBy?: Enumerable<PriceTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceTables.
     * 
    **/
    cursor?: PriceTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceTables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceTables.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceTables.
     * 
    **/
    distinct?: Enumerable<PriceTableScalarFieldEnum>
  }


  /**
   * PriceTable findMany
   */
  export type PriceTableFindManyArgs = {
    /**
     * Select specific fields to fetch from the PriceTable
     * 
    **/
    select?: PriceTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PriceTableInclude | null
    /**
     * Filter, which PriceTables to fetch.
     * 
    **/
    where?: PriceTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceTables to fetch.
     * 
    **/
    orderBy?: Enumerable<PriceTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceTables.
     * 
    **/
    cursor?: PriceTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceTables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceTables.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PriceTableScalarFieldEnum>
  }


  /**
   * PriceTable create
   */
  export type PriceTableCreateArgs = {
    /**
     * Select specific fields to fetch from the PriceTable
     * 
    **/
    select?: PriceTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PriceTableInclude | null
    /**
     * The data needed to create a PriceTable.
     * 
    **/
    data: XOR<PriceTableCreateInput, PriceTableUncheckedCreateInput>
  }


  /**
   * PriceTable createMany
   */
  export type PriceTableCreateManyArgs = {
    /**
     * The data used to create many PriceTables.
     * 
    **/
    data: Enumerable<PriceTableCreateManyInput>
  }


  /**
   * PriceTable update
   */
  export type PriceTableUpdateArgs = {
    /**
     * Select specific fields to fetch from the PriceTable
     * 
    **/
    select?: PriceTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PriceTableInclude | null
    /**
     * The data needed to update a PriceTable.
     * 
    **/
    data: XOR<PriceTableUpdateInput, PriceTableUncheckedUpdateInput>
    /**
     * Choose, which PriceTable to update.
     * 
    **/
    where: PriceTableWhereUniqueInput
  }


  /**
   * PriceTable updateMany
   */
  export type PriceTableUpdateManyArgs = {
    /**
     * The data used to update PriceTables.
     * 
    **/
    data: XOR<PriceTableUpdateManyMutationInput, PriceTableUncheckedUpdateManyInput>
    /**
     * Filter which PriceTables to update
     * 
    **/
    where?: PriceTableWhereInput
  }


  /**
   * PriceTable upsert
   */
  export type PriceTableUpsertArgs = {
    /**
     * Select specific fields to fetch from the PriceTable
     * 
    **/
    select?: PriceTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PriceTableInclude | null
    /**
     * The filter to search for the PriceTable to update in case it exists.
     * 
    **/
    where: PriceTableWhereUniqueInput
    /**
     * In case the PriceTable found by the `where` argument doesn't exist, create a new PriceTable with this data.
     * 
    **/
    create: XOR<PriceTableCreateInput, PriceTableUncheckedCreateInput>
    /**
     * In case the PriceTable was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PriceTableUpdateInput, PriceTableUncheckedUpdateInput>
  }


  /**
   * PriceTable delete
   */
  export type PriceTableDeleteArgs = {
    /**
     * Select specific fields to fetch from the PriceTable
     * 
    **/
    select?: PriceTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PriceTableInclude | null
    /**
     * Filter which PriceTable to delete.
     * 
    **/
    where: PriceTableWhereUniqueInput
  }


  /**
   * PriceTable deleteMany
   */
  export type PriceTableDeleteManyArgs = {
    /**
     * Filter which PriceTables to delete
     * 
    **/
    where?: PriceTableWhereInput
  }


  /**
   * PriceTable findRaw
   */
  export type PriceTableFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * PriceTable aggregateRaw
   */
  export type PriceTableAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * PriceTable without action
   */
  export type PriceTableArgs = {
    /**
     * Select specific fields to fetch from the PriceTable
     * 
    **/
    select?: PriceTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PriceTableInclude | null
  }



  /**
   * Model ProductPricesTable
   */


  export type AggregateProductPricesTable = {
    _count: ProductPricesTableCountAggregateOutputType | null
    _avg: ProductPricesTableAvgAggregateOutputType | null
    _sum: ProductPricesTableSumAggregateOutputType | null
    _min: ProductPricesTableMinAggregateOutputType | null
    _max: ProductPricesTableMaxAggregateOutputType | null
  }

  export type ProductPricesTableAvgAggregateOutputType = {
    value: number | null
    value_promotion: number | null
  }

  export type ProductPricesTableSumAggregateOutputType = {
    value: number | null
    value_promotion: number | null
  }

  export type ProductPricesTableMinAggregateOutputType = {
    id: string | null
    price_table_id: string | null
    product_id: string | null
    value: number | null
    value_promotion: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductPricesTableMaxAggregateOutputType = {
    id: string | null
    price_table_id: string | null
    product_id: string | null
    value: number | null
    value_promotion: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductPricesTableCountAggregateOutputType = {
    id: number
    price_table_id: number
    product_id: number
    value: number
    value_promotion: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductPricesTableAvgAggregateInputType = {
    value?: true
    value_promotion?: true
  }

  export type ProductPricesTableSumAggregateInputType = {
    value?: true
    value_promotion?: true
  }

  export type ProductPricesTableMinAggregateInputType = {
    id?: true
    price_table_id?: true
    product_id?: true
    value?: true
    value_promotion?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductPricesTableMaxAggregateInputType = {
    id?: true
    price_table_id?: true
    product_id?: true
    value?: true
    value_promotion?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductPricesTableCountAggregateInputType = {
    id?: true
    price_table_id?: true
    product_id?: true
    value?: true
    value_promotion?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductPricesTableAggregateArgs = {
    /**
     * Filter which ProductPricesTable to aggregate.
     * 
    **/
    where?: ProductPricesTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPricesTables to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductPricesTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductPricesTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPricesTables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPricesTables.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductPricesTables
    **/
    _count?: true | ProductPricesTableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductPricesTableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductPricesTableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductPricesTableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductPricesTableMaxAggregateInputType
  }

  export type GetProductPricesTableAggregateType<T extends ProductPricesTableAggregateArgs> = {
        [P in keyof T & keyof AggregateProductPricesTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductPricesTable[P]>
      : GetScalarType<T[P], AggregateProductPricesTable[P]>
  }




  export type ProductPricesTableGroupByArgs = {
    where?: ProductPricesTableWhereInput
    orderBy?: Enumerable<ProductPricesTableOrderByWithAggregationInput>
    by: Array<ProductPricesTableScalarFieldEnum>
    having?: ProductPricesTableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductPricesTableCountAggregateInputType | true
    _avg?: ProductPricesTableAvgAggregateInputType
    _sum?: ProductPricesTableSumAggregateInputType
    _min?: ProductPricesTableMinAggregateInputType
    _max?: ProductPricesTableMaxAggregateInputType
  }


  export type ProductPricesTableGroupByOutputType = {
    id: string
    price_table_id: string
    product_id: string
    value: number
    value_promotion: number
    created_at: Date
    updated_at: Date
    _count: ProductPricesTableCountAggregateOutputType | null
    _avg: ProductPricesTableAvgAggregateOutputType | null
    _sum: ProductPricesTableSumAggregateOutputType | null
    _min: ProductPricesTableMinAggregateOutputType | null
    _max: ProductPricesTableMaxAggregateOutputType | null
  }

  type GetProductPricesTableGroupByPayload<T extends ProductPricesTableGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductPricesTableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductPricesTableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductPricesTableGroupByOutputType[P]>
            : GetScalarType<T[P], ProductPricesTableGroupByOutputType[P]>
        }
      >
    >


  export type ProductPricesTableSelect = {
    id?: boolean
    price_table?: boolean | PriceTableArgs
    price_table_id?: boolean
    product?: boolean | ProductArgs
    product_id?: boolean
    value?: boolean
    value_promotion?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductPricesTableInclude = {
    price_table?: boolean | PriceTableArgs
    product?: boolean | ProductArgs
  }

  export type ProductPricesTableGetPayload<
    S extends boolean | null | undefined | ProductPricesTableArgs,
    U = keyof S
      > = S extends true
        ? ProductPricesTable
    : S extends undefined
    ? never
    : S extends ProductPricesTableArgs | ProductPricesTableFindManyArgs
    ?'include' extends U
    ? ProductPricesTable  & {
    [P in TrueKeys<S['include']>]:
        P extends 'price_table' ? PriceTableGetPayload<S['include'][P]> | null :
        P extends 'product' ? ProductGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'price_table' ? PriceTableGetPayload<S['select'][P]> | null :
        P extends 'product' ? ProductGetPayload<S['select'][P]> | null :  P extends keyof ProductPricesTable ? ProductPricesTable[P] : never
  } 
    : ProductPricesTable
  : ProductPricesTable


  type ProductPricesTableCountArgs = Merge<
    Omit<ProductPricesTableFindManyArgs, 'select' | 'include'> & {
      select?: ProductPricesTableCountAggregateInputType | true
    }
  >

  export interface ProductPricesTableDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ProductPricesTable that matches the filter.
     * @param {ProductPricesTableFindUniqueArgs} args - Arguments to find a ProductPricesTable
     * @example
     * // Get one ProductPricesTable
     * const productPricesTable = await prisma.productPricesTable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductPricesTableFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductPricesTableFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProductPricesTable'> extends True ? CheckSelect<T, Prisma__ProductPricesTableClient<ProductPricesTable>, Prisma__ProductPricesTableClient<ProductPricesTableGetPayload<T>>> : CheckSelect<T, Prisma__ProductPricesTableClient<ProductPricesTable | null >, Prisma__ProductPricesTableClient<ProductPricesTableGetPayload<T> | null >>

    /**
     * Find the first ProductPricesTable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPricesTableFindFirstArgs} args - Arguments to find a ProductPricesTable
     * @example
     * // Get one ProductPricesTable
     * const productPricesTable = await prisma.productPricesTable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductPricesTableFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductPricesTableFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProductPricesTable'> extends True ? CheckSelect<T, Prisma__ProductPricesTableClient<ProductPricesTable>, Prisma__ProductPricesTableClient<ProductPricesTableGetPayload<T>>> : CheckSelect<T, Prisma__ProductPricesTableClient<ProductPricesTable | null >, Prisma__ProductPricesTableClient<ProductPricesTableGetPayload<T> | null >>

    /**
     * Find zero or more ProductPricesTables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPricesTableFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductPricesTables
     * const productPricesTables = await prisma.productPricesTable.findMany()
     * 
     * // Get first 10 ProductPricesTables
     * const productPricesTables = await prisma.productPricesTable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productPricesTableWithIdOnly = await prisma.productPricesTable.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductPricesTableFindManyArgs>(
      args?: SelectSubset<T, ProductPricesTableFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ProductPricesTable>>, PrismaPromise<Array<ProductPricesTableGetPayload<T>>>>

    /**
     * Create a ProductPricesTable.
     * @param {ProductPricesTableCreateArgs} args - Arguments to create a ProductPricesTable.
     * @example
     * // Create one ProductPricesTable
     * const ProductPricesTable = await prisma.productPricesTable.create({
     *   data: {
     *     // ... data to create a ProductPricesTable
     *   }
     * })
     * 
    **/
    create<T extends ProductPricesTableCreateArgs>(
      args: SelectSubset<T, ProductPricesTableCreateArgs>
    ): CheckSelect<T, Prisma__ProductPricesTableClient<ProductPricesTable>, Prisma__ProductPricesTableClient<ProductPricesTableGetPayload<T>>>

    /**
     * Create many ProductPricesTables.
     *     @param {ProductPricesTableCreateManyArgs} args - Arguments to create many ProductPricesTables.
     *     @example
     *     // Create many ProductPricesTables
     *     const productPricesTable = await prisma.productPricesTable.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductPricesTableCreateManyArgs>(
      args?: SelectSubset<T, ProductPricesTableCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProductPricesTable.
     * @param {ProductPricesTableDeleteArgs} args - Arguments to delete one ProductPricesTable.
     * @example
     * // Delete one ProductPricesTable
     * const ProductPricesTable = await prisma.productPricesTable.delete({
     *   where: {
     *     // ... filter to delete one ProductPricesTable
     *   }
     * })
     * 
    **/
    delete<T extends ProductPricesTableDeleteArgs>(
      args: SelectSubset<T, ProductPricesTableDeleteArgs>
    ): CheckSelect<T, Prisma__ProductPricesTableClient<ProductPricesTable>, Prisma__ProductPricesTableClient<ProductPricesTableGetPayload<T>>>

    /**
     * Update one ProductPricesTable.
     * @param {ProductPricesTableUpdateArgs} args - Arguments to update one ProductPricesTable.
     * @example
     * // Update one ProductPricesTable
     * const productPricesTable = await prisma.productPricesTable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductPricesTableUpdateArgs>(
      args: SelectSubset<T, ProductPricesTableUpdateArgs>
    ): CheckSelect<T, Prisma__ProductPricesTableClient<ProductPricesTable>, Prisma__ProductPricesTableClient<ProductPricesTableGetPayload<T>>>

    /**
     * Delete zero or more ProductPricesTables.
     * @param {ProductPricesTableDeleteManyArgs} args - Arguments to filter ProductPricesTables to delete.
     * @example
     * // Delete a few ProductPricesTables
     * const { count } = await prisma.productPricesTable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductPricesTableDeleteManyArgs>(
      args?: SelectSubset<T, ProductPricesTableDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPricesTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPricesTableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductPricesTables
     * const productPricesTable = await prisma.productPricesTable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductPricesTableUpdateManyArgs>(
      args: SelectSubset<T, ProductPricesTableUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductPricesTable.
     * @param {ProductPricesTableUpsertArgs} args - Arguments to update or create a ProductPricesTable.
     * @example
     * // Update or create a ProductPricesTable
     * const productPricesTable = await prisma.productPricesTable.upsert({
     *   create: {
     *     // ... data to create a ProductPricesTable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductPricesTable we want to update
     *   }
     * })
    **/
    upsert<T extends ProductPricesTableUpsertArgs>(
      args: SelectSubset<T, ProductPricesTableUpsertArgs>
    ): CheckSelect<T, Prisma__ProductPricesTableClient<ProductPricesTable>, Prisma__ProductPricesTableClient<ProductPricesTableGetPayload<T>>>

    /**
     * Find zero or more ProductPricesTables that matches the filter.
     * @param {ProductPricesTableFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const productPricesTable = await prisma.productPricesTable.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ProductPricesTableFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProductPricesTable.
     * @param {ProductPricesTableAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const productPricesTable = await prisma.productPricesTable.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ProductPricesTableAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of ProductPricesTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPricesTableCountArgs} args - Arguments to filter ProductPricesTables to count.
     * @example
     * // Count the number of ProductPricesTables
     * const count = await prisma.productPricesTable.count({
     *   where: {
     *     // ... the filter for the ProductPricesTables we want to count
     *   }
     * })
    **/
    count<T extends ProductPricesTableCountArgs>(
      args?: Subset<T, ProductPricesTableCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductPricesTableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductPricesTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPricesTableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductPricesTableAggregateArgs>(args: Subset<T, ProductPricesTableAggregateArgs>): PrismaPromise<GetProductPricesTableAggregateType<T>>

    /**
     * Group by ProductPricesTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPricesTableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductPricesTableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductPricesTableGroupByArgs['orderBy'] }
        : { orderBy?: ProductPricesTableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductPricesTableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductPricesTableGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductPricesTable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductPricesTableClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    price_table<T extends PriceTableArgs = {}>(args?: Subset<T, PriceTableArgs>): CheckSelect<T, Prisma__PriceTableClient<PriceTable | null >, Prisma__PriceTableClient<PriceTableGetPayload<T> | null >>;

    product<T extends ProductArgs = {}>(args?: Subset<T, ProductArgs>): CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ProductPricesTable findUnique
   */
  export type ProductPricesTableFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ProductPricesTable
     * 
    **/
    select?: ProductPricesTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductPricesTableInclude | null
    /**
     * Throw an Error if a ProductPricesTable can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ProductPricesTable to fetch.
     * 
    **/
    where: ProductPricesTableWhereUniqueInput
  }


  /**
   * ProductPricesTable findFirst
   */
  export type ProductPricesTableFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ProductPricesTable
     * 
    **/
    select?: ProductPricesTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductPricesTableInclude | null
    /**
     * Throw an Error if a ProductPricesTable can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ProductPricesTable to fetch.
     * 
    **/
    where?: ProductPricesTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPricesTables to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductPricesTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPricesTables.
     * 
    **/
    cursor?: ProductPricesTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPricesTables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPricesTables.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPricesTables.
     * 
    **/
    distinct?: Enumerable<ProductPricesTableScalarFieldEnum>
  }


  /**
   * ProductPricesTable findMany
   */
  export type ProductPricesTableFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProductPricesTable
     * 
    **/
    select?: ProductPricesTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductPricesTableInclude | null
    /**
     * Filter, which ProductPricesTables to fetch.
     * 
    **/
    where?: ProductPricesTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPricesTables to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductPricesTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductPricesTables.
     * 
    **/
    cursor?: ProductPricesTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPricesTables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPricesTables.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductPricesTableScalarFieldEnum>
  }


  /**
   * ProductPricesTable create
   */
  export type ProductPricesTableCreateArgs = {
    /**
     * Select specific fields to fetch from the ProductPricesTable
     * 
    **/
    select?: ProductPricesTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductPricesTableInclude | null
    /**
     * The data needed to create a ProductPricesTable.
     * 
    **/
    data: XOR<ProductPricesTableCreateInput, ProductPricesTableUncheckedCreateInput>
  }


  /**
   * ProductPricesTable createMany
   */
  export type ProductPricesTableCreateManyArgs = {
    /**
     * The data used to create many ProductPricesTables.
     * 
    **/
    data: Enumerable<ProductPricesTableCreateManyInput>
  }


  /**
   * ProductPricesTable update
   */
  export type ProductPricesTableUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProductPricesTable
     * 
    **/
    select?: ProductPricesTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductPricesTableInclude | null
    /**
     * The data needed to update a ProductPricesTable.
     * 
    **/
    data: XOR<ProductPricesTableUpdateInput, ProductPricesTableUncheckedUpdateInput>
    /**
     * Choose, which ProductPricesTable to update.
     * 
    **/
    where: ProductPricesTableWhereUniqueInput
  }


  /**
   * ProductPricesTable updateMany
   */
  export type ProductPricesTableUpdateManyArgs = {
    /**
     * The data used to update ProductPricesTables.
     * 
    **/
    data: XOR<ProductPricesTableUpdateManyMutationInput, ProductPricesTableUncheckedUpdateManyInput>
    /**
     * Filter which ProductPricesTables to update
     * 
    **/
    where?: ProductPricesTableWhereInput
  }


  /**
   * ProductPricesTable upsert
   */
  export type ProductPricesTableUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProductPricesTable
     * 
    **/
    select?: ProductPricesTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductPricesTableInclude | null
    /**
     * The filter to search for the ProductPricesTable to update in case it exists.
     * 
    **/
    where: ProductPricesTableWhereUniqueInput
    /**
     * In case the ProductPricesTable found by the `where` argument doesn't exist, create a new ProductPricesTable with this data.
     * 
    **/
    create: XOR<ProductPricesTableCreateInput, ProductPricesTableUncheckedCreateInput>
    /**
     * In case the ProductPricesTable was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductPricesTableUpdateInput, ProductPricesTableUncheckedUpdateInput>
  }


  /**
   * ProductPricesTable delete
   */
  export type ProductPricesTableDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProductPricesTable
     * 
    **/
    select?: ProductPricesTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductPricesTableInclude | null
    /**
     * Filter which ProductPricesTable to delete.
     * 
    **/
    where: ProductPricesTableWhereUniqueInput
  }


  /**
   * ProductPricesTable deleteMany
   */
  export type ProductPricesTableDeleteManyArgs = {
    /**
     * Filter which ProductPricesTables to delete
     * 
    **/
    where?: ProductPricesTableWhereInput
  }


  /**
   * ProductPricesTable findRaw
   */
  export type ProductPricesTableFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProductPricesTable aggregateRaw
   */
  export type ProductPricesTableAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProductPricesTable without action
   */
  export type ProductPricesTableArgs = {
    /**
     * Select specific fields to fetch from the ProductPricesTable
     * 
    **/
    select?: ProductPricesTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductPricesTableInclude | null
  }



  /**
   * Model Sale
   */


  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleAvgAggregateOutputType = {
    subtotal: number | null
    descount_percentage: number | null
    descount_value: number | null
    total: number | null
  }

  export type SaleSumAggregateOutputType = {
    subtotal: number | null
    descount_percentage: number | null
    descount_value: number | null
    total: number | null
  }

  export type SaleMinAggregateOutputType = {
    id: string | null
    company_id: string | null
    user_id: string | null
    session: string | null
    status: SaleStatus | null
    name: string | null
    last_name: string | null
    cellphone: string | null
    email: string | null
    cep: string | null
    state: string | null
    city: string | null
    address: string | null
    address_number: string | null
    address_complement: string | null
    subtotal: number | null
    descount_voucher: string | null
    descount_percentage: number | null
    descount_value: number | null
    total: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SaleMaxAggregateOutputType = {
    id: string | null
    company_id: string | null
    user_id: string | null
    session: string | null
    status: SaleStatus | null
    name: string | null
    last_name: string | null
    cellphone: string | null
    email: string | null
    cep: string | null
    state: string | null
    city: string | null
    address: string | null
    address_number: string | null
    address_complement: string | null
    subtotal: number | null
    descount_voucher: string | null
    descount_percentage: number | null
    descount_value: number | null
    total: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SaleCountAggregateOutputType = {
    id: number
    company_id: number
    user_id: number
    session: number
    status: number
    name: number
    last_name: number
    cellphone: number
    email: number
    cep: number
    state: number
    city: number
    address: number
    address_number: number
    address_complement: number
    subtotal: number
    descount_voucher: number
    descount_percentage: number
    descount_value: number
    total: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SaleAvgAggregateInputType = {
    subtotal?: true
    descount_percentage?: true
    descount_value?: true
    total?: true
  }

  export type SaleSumAggregateInputType = {
    subtotal?: true
    descount_percentage?: true
    descount_value?: true
    total?: true
  }

  export type SaleMinAggregateInputType = {
    id?: true
    company_id?: true
    user_id?: true
    session?: true
    status?: true
    name?: true
    last_name?: true
    cellphone?: true
    email?: true
    cep?: true
    state?: true
    city?: true
    address?: true
    address_number?: true
    address_complement?: true
    subtotal?: true
    descount_voucher?: true
    descount_percentage?: true
    descount_value?: true
    total?: true
    created_at?: true
    updated_at?: true
  }

  export type SaleMaxAggregateInputType = {
    id?: true
    company_id?: true
    user_id?: true
    session?: true
    status?: true
    name?: true
    last_name?: true
    cellphone?: true
    email?: true
    cep?: true
    state?: true
    city?: true
    address?: true
    address_number?: true
    address_complement?: true
    subtotal?: true
    descount_voucher?: true
    descount_percentage?: true
    descount_value?: true
    total?: true
    created_at?: true
    updated_at?: true
  }

  export type SaleCountAggregateInputType = {
    id?: true
    company_id?: true
    user_id?: true
    session?: true
    status?: true
    name?: true
    last_name?: true
    cellphone?: true
    email?: true
    cep?: true
    state?: true
    city?: true
    address?: true
    address_number?: true
    address_complement?: true
    subtotal?: true
    descount_voucher?: true
    descount_percentage?: true
    descount_value?: true
    total?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SaleAggregateArgs = {
    /**
     * Filter which Sale to aggregate.
     * 
    **/
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     * 
    **/
    orderBy?: Enumerable<SaleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs = {
    where?: SaleWhereInput
    orderBy?: Enumerable<SaleOrderByWithAggregationInput>
    by: Array<SaleScalarFieldEnum>
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _avg?: SaleAvgAggregateInputType
    _sum?: SaleSumAggregateInputType
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }


  export type SaleGroupByOutputType = {
    id: string
    company_id: string
    user_id: string
    session: string | null
    status: SaleStatus
    name: string
    last_name: string
    cellphone: string
    email: string
    cep: string
    state: string
    city: string
    address: string
    address_number: string | null
    address_complement: string | null
    subtotal: number
    descount_voucher: string | null
    descount_percentage: number | null
    descount_value: number | null
    total: number
    created_at: Date
    updated_at: Date
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect = {
    id?: boolean
    company?: boolean | CompanyArgs
    company_id?: boolean
    user?: boolean | UserArgs
    user_id?: boolean
    session?: boolean
    status?: boolean
    name?: boolean
    last_name?: boolean
    cellphone?: boolean
    email?: boolean
    cep?: boolean
    state?: boolean
    city?: boolean
    address?: boolean
    address_number?: boolean
    address_complement?: boolean
    subtotal?: boolean
    descount_voucher?: boolean
    descount_percentage?: boolean
    descount_value?: boolean
    total?: boolean
    items?: boolean | ItemSalesFindManyArgs
    history?: boolean | SalesHistoryFindManyArgs
    created_at?: boolean
    updated_at?: boolean
    _count?: boolean | SaleCountOutputTypeArgs
  }

  export type SaleInclude = {
    company?: boolean | CompanyArgs
    user?: boolean | UserArgs
    items?: boolean | ItemSalesFindManyArgs
    history?: boolean | SalesHistoryFindManyArgs
    _count?: boolean | SaleCountOutputTypeArgs
  }

  export type SaleGetPayload<
    S extends boolean | null | undefined | SaleArgs,
    U = keyof S
      > = S extends true
        ? Sale
    : S extends undefined
    ? never
    : S extends SaleArgs | SaleFindManyArgs
    ?'include' extends U
    ? Sale  & {
    [P in TrueKeys<S['include']>]:
        P extends 'company' ? CompanyGetPayload<S['include'][P]> | null :
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :
        P extends 'items' ? Array < ItemSalesGetPayload<S['include'][P]>>  :
        P extends 'history' ? Array < SalesHistoryGetPayload<S['include'][P]>>  :
        P extends '_count' ? SaleCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'company' ? CompanyGetPayload<S['select'][P]> | null :
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :
        P extends 'items' ? Array < ItemSalesGetPayload<S['select'][P]>>  :
        P extends 'history' ? Array < SalesHistoryGetPayload<S['select'][P]>>  :
        P extends '_count' ? SaleCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Sale ? Sale[P] : never
  } 
    : Sale
  : Sale


  type SaleCountArgs = Merge<
    Omit<SaleFindManyArgs, 'select' | 'include'> & {
      select?: SaleCountAggregateInputType | true
    }
  >

  export interface SaleDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SaleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SaleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Sale'> extends True ? CheckSelect<T, Prisma__SaleClient<Sale>, Prisma__SaleClient<SaleGetPayload<T>>> : CheckSelect<T, Prisma__SaleClient<Sale | null >, Prisma__SaleClient<SaleGetPayload<T> | null >>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SaleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SaleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Sale'> extends True ? CheckSelect<T, Prisma__SaleClient<Sale>, Prisma__SaleClient<SaleGetPayload<T>>> : CheckSelect<T, Prisma__SaleClient<Sale | null >, Prisma__SaleClient<SaleGetPayload<T> | null >>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleWithIdOnly = await prisma.sale.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SaleFindManyArgs>(
      args?: SelectSubset<T, SaleFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Sale>>, PrismaPromise<Array<SaleGetPayload<T>>>>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
    **/
    create<T extends SaleCreateArgs>(
      args: SelectSubset<T, SaleCreateArgs>
    ): CheckSelect<T, Prisma__SaleClient<Sale>, Prisma__SaleClient<SaleGetPayload<T>>>

    /**
     * Create many Sales.
     *     @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     *     @example
     *     // Create many Sales
     *     const sale = await prisma.sale.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SaleCreateManyArgs>(
      args?: SelectSubset<T, SaleCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
    **/
    delete<T extends SaleDeleteArgs>(
      args: SelectSubset<T, SaleDeleteArgs>
    ): CheckSelect<T, Prisma__SaleClient<Sale>, Prisma__SaleClient<SaleGetPayload<T>>>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SaleUpdateArgs>(
      args: SelectSubset<T, SaleUpdateArgs>
    ): CheckSelect<T, Prisma__SaleClient<Sale>, Prisma__SaleClient<SaleGetPayload<T>>>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SaleDeleteManyArgs>(
      args?: SelectSubset<T, SaleDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SaleUpdateManyArgs>(
      args: SelectSubset<T, SaleUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
    **/
    upsert<T extends SaleUpsertArgs>(
      args: SelectSubset<T, SaleUpsertArgs>
    ): CheckSelect<T, Prisma__SaleClient<Sale>, Prisma__SaleClient<SaleGetPayload<T>>>

    /**
     * Find zero or more Sales that matches the filter.
     * @param {SaleFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const sale = await prisma.sale.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SaleFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Sale.
     * @param {SaleAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const sale = await prisma.sale.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SaleAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SaleClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    company<T extends CompanyArgs = {}>(args?: Subset<T, CompanyArgs>): CheckSelect<T, Prisma__CompanyClient<Company | null >, Prisma__CompanyClient<CompanyGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    items<T extends ItemSalesFindManyArgs = {}>(args?: Subset<T, ItemSalesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ItemSales>>, PrismaPromise<Array<ItemSalesGetPayload<T>>>>;

    history<T extends SalesHistoryFindManyArgs = {}>(args?: Subset<T, SalesHistoryFindManyArgs>): CheckSelect<T, PrismaPromise<Array<SalesHistory>>, PrismaPromise<Array<SalesHistoryGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Sale
     * 
    **/
    select?: SaleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SaleInclude | null
    /**
     * Throw an Error if a Sale can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Sale to fetch.
     * 
    **/
    where: SaleWhereUniqueInput
  }


  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Sale
     * 
    **/
    select?: SaleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SaleInclude | null
    /**
     * Throw an Error if a Sale can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Sale to fetch.
     * 
    **/
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     * 
    **/
    orderBy?: Enumerable<SaleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     * 
    **/
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     * 
    **/
    distinct?: Enumerable<SaleScalarFieldEnum>
  }


  /**
   * Sale findMany
   */
  export type SaleFindManyArgs = {
    /**
     * Select specific fields to fetch from the Sale
     * 
    **/
    select?: SaleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SaleInclude | null
    /**
     * Filter, which Sales to fetch.
     * 
    **/
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     * 
    **/
    orderBy?: Enumerable<SaleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     * 
    **/
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SaleScalarFieldEnum>
  }


  /**
   * Sale create
   */
  export type SaleCreateArgs = {
    /**
     * Select specific fields to fetch from the Sale
     * 
    **/
    select?: SaleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SaleInclude | null
    /**
     * The data needed to create a Sale.
     * 
    **/
    data: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }


  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs = {
    /**
     * The data used to create many Sales.
     * 
    **/
    data: Enumerable<SaleCreateManyInput>
  }


  /**
   * Sale update
   */
  export type SaleUpdateArgs = {
    /**
     * Select specific fields to fetch from the Sale
     * 
    **/
    select?: SaleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SaleInclude | null
    /**
     * The data needed to update a Sale.
     * 
    **/
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     * 
    **/
    where: SaleWhereUniqueInput
  }


  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs = {
    /**
     * The data used to update Sales.
     * 
    **/
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     * 
    **/
    where?: SaleWhereInput
  }


  /**
   * Sale upsert
   */
  export type SaleUpsertArgs = {
    /**
     * Select specific fields to fetch from the Sale
     * 
    **/
    select?: SaleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SaleInclude | null
    /**
     * The filter to search for the Sale to update in case it exists.
     * 
    **/
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     * 
    **/
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }


  /**
   * Sale delete
   */
  export type SaleDeleteArgs = {
    /**
     * Select specific fields to fetch from the Sale
     * 
    **/
    select?: SaleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SaleInclude | null
    /**
     * Filter which Sale to delete.
     * 
    **/
    where: SaleWhereUniqueInput
  }


  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs = {
    /**
     * Filter which Sales to delete
     * 
    **/
    where?: SaleWhereInput
  }


  /**
   * Sale findRaw
   */
  export type SaleFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Sale aggregateRaw
   */
  export type SaleAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Sale without action
   */
  export type SaleArgs = {
    /**
     * Select specific fields to fetch from the Sale
     * 
    **/
    select?: SaleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SaleInclude | null
  }



  /**
   * Model SalesHistory
   */


  export type AggregateSalesHistory = {
    _count: SalesHistoryCountAggregateOutputType | null
    _min: SalesHistoryMinAggregateOutputType | null
    _max: SalesHistoryMaxAggregateOutputType | null
  }

  export type SalesHistoryMinAggregateOutputType = {
    id: string | null
    sale_id: string | null
    historic: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalesHistoryMaxAggregateOutputType = {
    id: string | null
    sale_id: string | null
    historic: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalesHistoryCountAggregateOutputType = {
    id: number
    sale_id: number
    historic: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SalesHistoryMinAggregateInputType = {
    id?: true
    sale_id?: true
    historic?: true
    created_at?: true
    updated_at?: true
  }

  export type SalesHistoryMaxAggregateInputType = {
    id?: true
    sale_id?: true
    historic?: true
    created_at?: true
    updated_at?: true
  }

  export type SalesHistoryCountAggregateInputType = {
    id?: true
    sale_id?: true
    historic?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SalesHistoryAggregateArgs = {
    /**
     * Filter which SalesHistory to aggregate.
     * 
    **/
    where?: SalesHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesHistories to fetch.
     * 
    **/
    orderBy?: Enumerable<SalesHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SalesHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesHistories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesHistories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesHistories
    **/
    _count?: true | SalesHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesHistoryMaxAggregateInputType
  }

  export type GetSalesHistoryAggregateType<T extends SalesHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesHistory[P]>
      : GetScalarType<T[P], AggregateSalesHistory[P]>
  }




  export type SalesHistoryGroupByArgs = {
    where?: SalesHistoryWhereInput
    orderBy?: Enumerable<SalesHistoryOrderByWithAggregationInput>
    by: Array<SalesHistoryScalarFieldEnum>
    having?: SalesHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesHistoryCountAggregateInputType | true
    _min?: SalesHistoryMinAggregateInputType
    _max?: SalesHistoryMaxAggregateInputType
  }


  export type SalesHistoryGroupByOutputType = {
    id: string
    sale_id: string
    historic: string
    created_at: Date
    updated_at: Date
    _count: SalesHistoryCountAggregateOutputType | null
    _min: SalesHistoryMinAggregateOutputType | null
    _max: SalesHistoryMaxAggregateOutputType | null
  }

  type GetSalesHistoryGroupByPayload<T extends SalesHistoryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SalesHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], SalesHistoryGroupByOutputType[P]>
        }
      >
    >


  export type SalesHistorySelect = {
    id?: boolean
    sale?: boolean | SaleArgs
    sale_id?: boolean
    historic?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SalesHistoryInclude = {
    sale?: boolean | SaleArgs
  }

  export type SalesHistoryGetPayload<
    S extends boolean | null | undefined | SalesHistoryArgs,
    U = keyof S
      > = S extends true
        ? SalesHistory
    : S extends undefined
    ? never
    : S extends SalesHistoryArgs | SalesHistoryFindManyArgs
    ?'include' extends U
    ? SalesHistory  & {
    [P in TrueKeys<S['include']>]:
        P extends 'sale' ? SaleGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'sale' ? SaleGetPayload<S['select'][P]> :  P extends keyof SalesHistory ? SalesHistory[P] : never
  } 
    : SalesHistory
  : SalesHistory


  type SalesHistoryCountArgs = Merge<
    Omit<SalesHistoryFindManyArgs, 'select' | 'include'> & {
      select?: SalesHistoryCountAggregateInputType | true
    }
  >

  export interface SalesHistoryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one SalesHistory that matches the filter.
     * @param {SalesHistoryFindUniqueArgs} args - Arguments to find a SalesHistory
     * @example
     * // Get one SalesHistory
     * const salesHistory = await prisma.salesHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SalesHistoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SalesHistoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SalesHistory'> extends True ? CheckSelect<T, Prisma__SalesHistoryClient<SalesHistory>, Prisma__SalesHistoryClient<SalesHistoryGetPayload<T>>> : CheckSelect<T, Prisma__SalesHistoryClient<SalesHistory | null >, Prisma__SalesHistoryClient<SalesHistoryGetPayload<T> | null >>

    /**
     * Find the first SalesHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesHistoryFindFirstArgs} args - Arguments to find a SalesHistory
     * @example
     * // Get one SalesHistory
     * const salesHistory = await prisma.salesHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SalesHistoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SalesHistoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SalesHistory'> extends True ? CheckSelect<T, Prisma__SalesHistoryClient<SalesHistory>, Prisma__SalesHistoryClient<SalesHistoryGetPayload<T>>> : CheckSelect<T, Prisma__SalesHistoryClient<SalesHistory | null >, Prisma__SalesHistoryClient<SalesHistoryGetPayload<T> | null >>

    /**
     * Find zero or more SalesHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesHistories
     * const salesHistories = await prisma.salesHistory.findMany()
     * 
     * // Get first 10 SalesHistories
     * const salesHistories = await prisma.salesHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesHistoryWithIdOnly = await prisma.salesHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SalesHistoryFindManyArgs>(
      args?: SelectSubset<T, SalesHistoryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<SalesHistory>>, PrismaPromise<Array<SalesHistoryGetPayload<T>>>>

    /**
     * Create a SalesHistory.
     * @param {SalesHistoryCreateArgs} args - Arguments to create a SalesHistory.
     * @example
     * // Create one SalesHistory
     * const SalesHistory = await prisma.salesHistory.create({
     *   data: {
     *     // ... data to create a SalesHistory
     *   }
     * })
     * 
    **/
    create<T extends SalesHistoryCreateArgs>(
      args: SelectSubset<T, SalesHistoryCreateArgs>
    ): CheckSelect<T, Prisma__SalesHistoryClient<SalesHistory>, Prisma__SalesHistoryClient<SalesHistoryGetPayload<T>>>

    /**
     * Create many SalesHistories.
     *     @param {SalesHistoryCreateManyArgs} args - Arguments to create many SalesHistories.
     *     @example
     *     // Create many SalesHistories
     *     const salesHistory = await prisma.salesHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SalesHistoryCreateManyArgs>(
      args?: SelectSubset<T, SalesHistoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a SalesHistory.
     * @param {SalesHistoryDeleteArgs} args - Arguments to delete one SalesHistory.
     * @example
     * // Delete one SalesHistory
     * const SalesHistory = await prisma.salesHistory.delete({
     *   where: {
     *     // ... filter to delete one SalesHistory
     *   }
     * })
     * 
    **/
    delete<T extends SalesHistoryDeleteArgs>(
      args: SelectSubset<T, SalesHistoryDeleteArgs>
    ): CheckSelect<T, Prisma__SalesHistoryClient<SalesHistory>, Prisma__SalesHistoryClient<SalesHistoryGetPayload<T>>>

    /**
     * Update one SalesHistory.
     * @param {SalesHistoryUpdateArgs} args - Arguments to update one SalesHistory.
     * @example
     * // Update one SalesHistory
     * const salesHistory = await prisma.salesHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SalesHistoryUpdateArgs>(
      args: SelectSubset<T, SalesHistoryUpdateArgs>
    ): CheckSelect<T, Prisma__SalesHistoryClient<SalesHistory>, Prisma__SalesHistoryClient<SalesHistoryGetPayload<T>>>

    /**
     * Delete zero or more SalesHistories.
     * @param {SalesHistoryDeleteManyArgs} args - Arguments to filter SalesHistories to delete.
     * @example
     * // Delete a few SalesHistories
     * const { count } = await prisma.salesHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SalesHistoryDeleteManyArgs>(
      args?: SelectSubset<T, SalesHistoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesHistories
     * const salesHistory = await prisma.salesHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SalesHistoryUpdateManyArgs>(
      args: SelectSubset<T, SalesHistoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SalesHistory.
     * @param {SalesHistoryUpsertArgs} args - Arguments to update or create a SalesHistory.
     * @example
     * // Update or create a SalesHistory
     * const salesHistory = await prisma.salesHistory.upsert({
     *   create: {
     *     // ... data to create a SalesHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesHistory we want to update
     *   }
     * })
    **/
    upsert<T extends SalesHistoryUpsertArgs>(
      args: SelectSubset<T, SalesHistoryUpsertArgs>
    ): CheckSelect<T, Prisma__SalesHistoryClient<SalesHistory>, Prisma__SalesHistoryClient<SalesHistoryGetPayload<T>>>

    /**
     * Find zero or more SalesHistories that matches the filter.
     * @param {SalesHistoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const salesHistory = await prisma.salesHistory.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SalesHistoryFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SalesHistory.
     * @param {SalesHistoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const salesHistory = await prisma.salesHistory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SalesHistoryAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of SalesHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesHistoryCountArgs} args - Arguments to filter SalesHistories to count.
     * @example
     * // Count the number of SalesHistories
     * const count = await prisma.salesHistory.count({
     *   where: {
     *     // ... the filter for the SalesHistories we want to count
     *   }
     * })
    **/
    count<T extends SalesHistoryCountArgs>(
      args?: Subset<T, SalesHistoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesHistoryAggregateArgs>(args: Subset<T, SalesHistoryAggregateArgs>): PrismaPromise<GetSalesHistoryAggregateType<T>>

    /**
     * Group by SalesHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesHistoryGroupByArgs['orderBy'] }
        : { orderBy?: SalesHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesHistoryGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SalesHistoryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    sale<T extends SaleArgs = {}>(args?: Subset<T, SaleArgs>): CheckSelect<T, Prisma__SaleClient<Sale | null >, Prisma__SaleClient<SaleGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * SalesHistory findUnique
   */
  export type SalesHistoryFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the SalesHistory
     * 
    **/
    select?: SalesHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SalesHistoryInclude | null
    /**
     * Throw an Error if a SalesHistory can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which SalesHistory to fetch.
     * 
    **/
    where: SalesHistoryWhereUniqueInput
  }


  /**
   * SalesHistory findFirst
   */
  export type SalesHistoryFindFirstArgs = {
    /**
     * Select specific fields to fetch from the SalesHistory
     * 
    **/
    select?: SalesHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SalesHistoryInclude | null
    /**
     * Throw an Error if a SalesHistory can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which SalesHistory to fetch.
     * 
    **/
    where?: SalesHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesHistories to fetch.
     * 
    **/
    orderBy?: Enumerable<SalesHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesHistories.
     * 
    **/
    cursor?: SalesHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesHistories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesHistories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesHistories.
     * 
    **/
    distinct?: Enumerable<SalesHistoryScalarFieldEnum>
  }


  /**
   * SalesHistory findMany
   */
  export type SalesHistoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the SalesHistory
     * 
    **/
    select?: SalesHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SalesHistoryInclude | null
    /**
     * Filter, which SalesHistories to fetch.
     * 
    **/
    where?: SalesHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesHistories to fetch.
     * 
    **/
    orderBy?: Enumerable<SalesHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesHistories.
     * 
    **/
    cursor?: SalesHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesHistories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesHistories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SalesHistoryScalarFieldEnum>
  }


  /**
   * SalesHistory create
   */
  export type SalesHistoryCreateArgs = {
    /**
     * Select specific fields to fetch from the SalesHistory
     * 
    **/
    select?: SalesHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SalesHistoryInclude | null
    /**
     * The data needed to create a SalesHistory.
     * 
    **/
    data: XOR<SalesHistoryCreateInput, SalesHistoryUncheckedCreateInput>
  }


  /**
   * SalesHistory createMany
   */
  export type SalesHistoryCreateManyArgs = {
    /**
     * The data used to create many SalesHistories.
     * 
    **/
    data: Enumerable<SalesHistoryCreateManyInput>
  }


  /**
   * SalesHistory update
   */
  export type SalesHistoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the SalesHistory
     * 
    **/
    select?: SalesHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SalesHistoryInclude | null
    /**
     * The data needed to update a SalesHistory.
     * 
    **/
    data: XOR<SalesHistoryUpdateInput, SalesHistoryUncheckedUpdateInput>
    /**
     * Choose, which SalesHistory to update.
     * 
    **/
    where: SalesHistoryWhereUniqueInput
  }


  /**
   * SalesHistory updateMany
   */
  export type SalesHistoryUpdateManyArgs = {
    /**
     * The data used to update SalesHistories.
     * 
    **/
    data: XOR<SalesHistoryUpdateManyMutationInput, SalesHistoryUncheckedUpdateManyInput>
    /**
     * Filter which SalesHistories to update
     * 
    **/
    where?: SalesHistoryWhereInput
  }


  /**
   * SalesHistory upsert
   */
  export type SalesHistoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the SalesHistory
     * 
    **/
    select?: SalesHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SalesHistoryInclude | null
    /**
     * The filter to search for the SalesHistory to update in case it exists.
     * 
    **/
    where: SalesHistoryWhereUniqueInput
    /**
     * In case the SalesHistory found by the `where` argument doesn't exist, create a new SalesHistory with this data.
     * 
    **/
    create: XOR<SalesHistoryCreateInput, SalesHistoryUncheckedCreateInput>
    /**
     * In case the SalesHistory was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SalesHistoryUpdateInput, SalesHistoryUncheckedUpdateInput>
  }


  /**
   * SalesHistory delete
   */
  export type SalesHistoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the SalesHistory
     * 
    **/
    select?: SalesHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SalesHistoryInclude | null
    /**
     * Filter which SalesHistory to delete.
     * 
    **/
    where: SalesHistoryWhereUniqueInput
  }


  /**
   * SalesHistory deleteMany
   */
  export type SalesHistoryDeleteManyArgs = {
    /**
     * Filter which SalesHistories to delete
     * 
    **/
    where?: SalesHistoryWhereInput
  }


  /**
   * SalesHistory findRaw
   */
  export type SalesHistoryFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * SalesHistory aggregateRaw
   */
  export type SalesHistoryAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * SalesHistory without action
   */
  export type SalesHistoryArgs = {
    /**
     * Select specific fields to fetch from the SalesHistory
     * 
    **/
    select?: SalesHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SalesHistoryInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    company_id: string | null
    document: string | null
    name: string | null
    last_name: string | null
    sex_type: Sex | null
    birth_date: Date | null
    celphone: string | null
    email: string | null
    cep: string | null
    state: string | null
    city: string | null
    neighborhood: string | null
    address: string | null
    address_number: string | null
    address_complement: string | null
    active: boolean | null
    email_confirmed: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    company_id: string | null
    document: string | null
    name: string | null
    last_name: string | null
    sex_type: Sex | null
    birth_date: Date | null
    celphone: string | null
    email: string | null
    cep: string | null
    state: string | null
    city: string | null
    neighborhood: string | null
    address: string | null
    address_number: string | null
    address_complement: string | null
    active: boolean | null
    email_confirmed: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    company_id: number
    document: number
    name: number
    last_name: number
    sex_type: number
    birth_date: number
    celphone: number
    email: number
    cep: number
    state: number
    city: number
    neighborhood: number
    address: number
    address_number: number
    address_complement: number
    active: number
    email_confirmed: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    company_id?: true
    document?: true
    name?: true
    last_name?: true
    sex_type?: true
    birth_date?: true
    celphone?: true
    email?: true
    cep?: true
    state?: true
    city?: true
    neighborhood?: true
    address?: true
    address_number?: true
    address_complement?: true
    active?: true
    email_confirmed?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    company_id?: true
    document?: true
    name?: true
    last_name?: true
    sex_type?: true
    birth_date?: true
    celphone?: true
    email?: true
    cep?: true
    state?: true
    city?: true
    neighborhood?: true
    address?: true
    address_number?: true
    address_complement?: true
    active?: true
    email_confirmed?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    company_id?: true
    document?: true
    name?: true
    last_name?: true
    sex_type?: true
    birth_date?: true
    celphone?: true
    email?: true
    cep?: true
    state?: true
    city?: true
    neighborhood?: true
    address?: true
    address_number?: true
    address_complement?: true
    active?: true
    email_confirmed?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    company_id: string
    document: string | null
    name: string
    last_name: string
    sex_type: Sex | null
    birth_date: Date | null
    celphone: string | null
    email: string
    cep: string | null
    state: string | null
    city: string | null
    neighborhood: string | null
    address: string | null
    address_number: string | null
    address_complement: string | null
    active: boolean | null
    email_confirmed: boolean | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    company?: boolean | CompanyArgs
    company_id?: boolean
    document?: boolean
    name?: boolean
    last_name?: boolean
    sex_type?: boolean
    birth_date?: boolean
    celphone?: boolean
    email?: boolean
    cep?: boolean
    state?: boolean
    city?: boolean
    neighborhood?: boolean
    address?: boolean
    address_number?: boolean
    address_complement?: boolean
    active?: boolean
    email_confirmed?: boolean
    created_at?: boolean
    updated_at?: boolean
    Sale?: boolean | SaleFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    company?: boolean | CompanyArgs
    Sale?: boolean | SaleFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'company' ? CompanyGetPayload<S['include'][P]> | null :
        P extends 'Sale' ? Array < SaleGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'company' ? CompanyGetPayload<S['select'][P]> | null :
        P extends 'Sale' ? Array < SaleGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    company<T extends CompanyArgs = {}>(args?: Subset<T, CompanyArgs>): CheckSelect<T, Prisma__CompanyClient<Company | null >, Prisma__CompanyClient<CompanyGetPayload<T> | null >>;

    Sale<T extends SaleFindManyArgs = {}>(args?: Subset<T, SaleFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Sale>>, PrismaPromise<Array<SaleGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CompanyScalarFieldEnum: {
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
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const CompanyParamsScalarFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    environment: 'environment',
    obs_email: 'obs_email',
    obs_voucher: 'obs_voucher',
    privacy_policy: 'privacy_policy',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CompanyParamsScalarFieldEnum = (typeof CompanyParamsScalarFieldEnum)[keyof typeof CompanyParamsScalarFieldEnum]


  export const ProductCategoryScalarFieldEnum: {
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
  };

  export type ProductCategoryScalarFieldEnum = (typeof ProductCategoryScalarFieldEnum)[keyof typeof ProductCategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
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
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ItemSalesScalarFieldEnum: {
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
  };

  export type ItemSalesScalarFieldEnum = (typeof ItemSalesScalarFieldEnum)[keyof typeof ItemSalesScalarFieldEnum]


  export const ProductComboScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    item_id: 'item_id',
    amount: 'amount',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductComboScalarFieldEnum = (typeof ProductComboScalarFieldEnum)[keyof typeof ProductComboScalarFieldEnum]


  export const ConfigProductExceptionScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    date: 'date',
    action: 'action',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ConfigProductExceptionScalarFieldEnum = (typeof ConfigProductExceptionScalarFieldEnum)[keyof typeof ConfigProductExceptionScalarFieldEnum]


  export const ProductTotalSalesScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    date: 'date',
    amount: 'amount',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductTotalSalesScalarFieldEnum = (typeof ProductTotalSalesScalarFieldEnum)[keyof typeof ProductTotalSalesScalarFieldEnum]


  export const PriceTableScalarFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    description: 'description',
    initial_date: 'initial_date',
    final_date: 'final_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PriceTableScalarFieldEnum = (typeof PriceTableScalarFieldEnum)[keyof typeof PriceTableScalarFieldEnum]


  export const ProductPricesTableScalarFieldEnum: {
    id: 'id',
    price_table_id: 'price_table_id',
    product_id: 'product_id',
    value: 'value',
    value_promotion: 'value_promotion',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductPricesTableScalarFieldEnum = (typeof ProductPricesTableScalarFieldEnum)[keyof typeof ProductPricesTableScalarFieldEnum]


  export const SaleScalarFieldEnum: {
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
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const SalesHistoryScalarFieldEnum: {
    id: 'id',
    sale_id: 'sale_id',
    historic: 'historic',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SalesHistoryScalarFieldEnum = (typeof SalesHistoryScalarFieldEnum)[keyof typeof SalesHistoryScalarFieldEnum]


  export const UserScalarFieldEnum: {
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
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: Enumerable<CompanyWhereInput>
    OR?: Enumerable<CompanyWhereInput>
    NOT?: Enumerable<CompanyWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    fantasy_name?: StringNullableFilter | string | null
    celphone1?: StringFilter | string
    celphone2?: StringNullableFilter | string | null
    email?: StringFilter | string
    url_banner?: StringNullableFilter | string | null
    url_site?: StringNullableFilter | string | null
    url_facebook?: StringNullableFilter | string | null
    url_instagram?: StringNullableFilter | string | null
    url_linkedin?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    company_params?: CompanyParamsListRelationFilter
    product_category?: ProductCategoryListRelationFilter
    sales?: SaleListRelationFilter
    price_tables?: PriceTableListRelationFilter
    products?: ProductListRelationFilter
    users?: UserListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    fantasy_name?: SortOrder
    celphone1?: SortOrder
    celphone2?: SortOrder
    email?: SortOrder
    url_banner?: SortOrder
    url_site?: SortOrder
    url_facebook?: SortOrder
    url_instagram?: SortOrder
    url_linkedin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    company_params?: CompanyParamsOrderByRelationAggregateInput
    product_category?: ProductCategoryOrderByRelationAggregateInput
    sales?: SaleOrderByRelationAggregateInput
    price_tables?: PriceTableOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    fantasy_name?: SortOrder
    celphone1?: SortOrder
    celphone2?: SortOrder
    email?: SortOrder
    url_banner?: SortOrder
    url_site?: SortOrder
    url_facebook?: SortOrder
    url_instagram?: SortOrder
    url_linkedin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CompanyScalarWhereWithAggregatesInput>
    OR?: Enumerable<CompanyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CompanyScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    fantasy_name?: StringNullableWithAggregatesFilter | string | null
    celphone1?: StringWithAggregatesFilter | string
    celphone2?: StringNullableWithAggregatesFilter | string | null
    email?: StringWithAggregatesFilter | string
    url_banner?: StringNullableWithAggregatesFilter | string | null
    url_site?: StringNullableWithAggregatesFilter | string | null
    url_facebook?: StringNullableWithAggregatesFilter | string | null
    url_instagram?: StringNullableWithAggregatesFilter | string | null
    url_linkedin?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CompanyParamsWhereInput = {
    AND?: Enumerable<CompanyParamsWhereInput>
    OR?: Enumerable<CompanyParamsWhereInput>
    NOT?: Enumerable<CompanyParamsWhereInput>
    id?: StringFilter | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    company_id?: StringFilter | string
    environment?: EnumEnvironmentNullableFilter | Environment | null
    obs_email?: StringNullableFilter | string | null
    obs_voucher?: StringNullableFilter | string | null
    privacy_policy?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type CompanyParamsOrderByWithRelationInput = {
    id?: SortOrder
    company?: CompanyOrderByWithRelationInput
    company_id?: SortOrder
    environment?: SortOrder
    obs_email?: SortOrder
    obs_voucher?: SortOrder
    privacy_policy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CompanyParamsWhereUniqueInput = {
    id?: string
    company_id?: string
  }

  export type CompanyParamsOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    environment?: SortOrder
    obs_email?: SortOrder
    obs_voucher?: SortOrder
    privacy_policy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CompanyParamsCountOrderByAggregateInput
    _max?: CompanyParamsMaxOrderByAggregateInput
    _min?: CompanyParamsMinOrderByAggregateInput
  }

  export type CompanyParamsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CompanyParamsScalarWhereWithAggregatesInput>
    OR?: Enumerable<CompanyParamsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CompanyParamsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    company_id?: StringWithAggregatesFilter | string
    environment?: EnumEnvironmentNullableWithAggregatesFilter | Environment | null
    obs_email?: StringNullableWithAggregatesFilter | string | null
    obs_voucher?: StringNullableWithAggregatesFilter | string | null
    privacy_policy?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProductCategoryWhereInput = {
    AND?: Enumerable<ProductCategoryWhereInput>
    OR?: Enumerable<ProductCategoryWhereInput>
    NOT?: Enumerable<ProductCategoryWhereInput>
    id?: StringFilter | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    company_id?: StringFilter | string
    product_type?: EnumProductTypeFilter | ProductType
    config_type_id?: StringNullableFilter | string | null
    title?: StringFilter | string
    description?: StringFilter | string
    url_banner?: StringNullableFilter | string | null
    active?: BoolFilter | boolean
    products?: ProductListRelationFilter
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type ProductCategoryOrderByWithRelationInput = {
    id?: SortOrder
    company?: CompanyOrderByWithRelationInput
    company_id?: SortOrder
    product_type?: SortOrder
    config_type_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url_banner?: SortOrder
    active?: SortOrder
    products?: ProductOrderByRelationAggregateInput
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductCategoryWhereUniqueInput = {
    id?: string
  }

  export type ProductCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    product_type?: SortOrder
    config_type_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url_banner?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProductCategoryCountOrderByAggregateInput
    _max?: ProductCategoryMaxOrderByAggregateInput
    _min?: ProductCategoryMinOrderByAggregateInput
  }

  export type ProductCategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductCategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductCategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductCategoryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    company_id?: StringWithAggregatesFilter | string
    product_type?: EnumProductTypeWithAggregatesFilter | ProductType
    config_type_id?: StringNullableWithAggregatesFilter | string | null
    title?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    url_banner?: StringNullableWithAggregatesFilter | string | null
    active?: BoolWithAggregatesFilter | boolean
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProductWhereInput = {
    AND?: Enumerable<ProductWhereInput>
    OR?: Enumerable<ProductWhereInput>
    NOT?: Enumerable<ProductWhereInput>
    id?: StringFilter | string
    product_category?: XOR<ProductCategoryRelationFilter, ProductCategoryWhereInput>
    product_category_id?: StringFilter | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    company_id?: StringFilter | string
    product_type?: EnumProductTypeFilter | ProductType
    sku?: StringFilter | string
    title?: StringFilter | string
    subtitle?: StringFilter | string
    description?: StringFilter | string
    url_banner?: StringNullableFilter | string | null
    active?: BoolFilter | boolean
    combo?: BoolNullableFilter | boolean | null
    amount_min_sale?: IntNullableFilter | number | null
    amount_max_sale?: IntNullableFilter | number | null
    amount_max_total_diary?: IntNullableFilter | number | null
    highlighted?: BoolNullableFilter | boolean | null
    order_on_menu?: IntNullableFilter | number | null
    for_sale?: BoolNullableFilter | boolean | null
    age_group?: StringNullableFilter | string | null
    promotion?: BoolNullableFilter | boolean | null
    items?: ProductComboListRelationFilter
    config_product_exeption?: ConfigProductExceptionListRelationFilter
    total_sale?: ProductTotalSalesListRelationFilter
    product_item?: ProductComboListRelationFilter
    sales_item?: ItemSalesListRelationFilter
    price_table?: ProductPricesTableListRelationFilter
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    product_category?: ProductCategoryOrderByWithRelationInput
    product_category_id?: SortOrder
    company?: CompanyOrderByWithRelationInput
    company_id?: SortOrder
    product_type?: SortOrder
    sku?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    url_banner?: SortOrder
    active?: SortOrder
    combo?: SortOrder
    amount_min_sale?: SortOrder
    amount_max_sale?: SortOrder
    amount_max_total_diary?: SortOrder
    highlighted?: SortOrder
    order_on_menu?: SortOrder
    for_sale?: SortOrder
    age_group?: SortOrder
    promotion?: SortOrder
    items?: ProductComboOrderByRelationAggregateInput
    config_product_exeption?: ConfigProductExceptionOrderByRelationAggregateInput
    total_sale?: ProductTotalSalesOrderByRelationAggregateInput
    product_item?: ProductComboOrderByRelationAggregateInput
    sales_item?: ItemSalesOrderByRelationAggregateInput
    price_table?: ProductPricesTableOrderByRelationAggregateInput
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductWhereUniqueInput = {
    id?: string
  }

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    product_category_id?: SortOrder
    company_id?: SortOrder
    product_type?: SortOrder
    sku?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    url_banner?: SortOrder
    active?: SortOrder
    combo?: SortOrder
    amount_min_sale?: SortOrder
    amount_max_sale?: SortOrder
    amount_max_total_diary?: SortOrder
    highlighted?: SortOrder
    order_on_menu?: SortOrder
    for_sale?: SortOrder
    age_group?: SortOrder
    promotion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    product_category_id?: StringWithAggregatesFilter | string
    company_id?: StringWithAggregatesFilter | string
    product_type?: EnumProductTypeWithAggregatesFilter | ProductType
    sku?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    subtitle?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    url_banner?: StringNullableWithAggregatesFilter | string | null
    active?: BoolWithAggregatesFilter | boolean
    combo?: BoolNullableWithAggregatesFilter | boolean | null
    amount_min_sale?: IntNullableWithAggregatesFilter | number | null
    amount_max_sale?: IntNullableWithAggregatesFilter | number | null
    amount_max_total_diary?: IntNullableWithAggregatesFilter | number | null
    highlighted?: BoolNullableWithAggregatesFilter | boolean | null
    order_on_menu?: IntNullableWithAggregatesFilter | number | null
    for_sale?: BoolNullableWithAggregatesFilter | boolean | null
    age_group?: StringNullableWithAggregatesFilter | string | null
    promotion?: BoolNullableWithAggregatesFilter | boolean | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ItemSalesWhereInput = {
    AND?: Enumerable<ItemSalesWhereInput>
    OR?: Enumerable<ItemSalesWhereInput>
    NOT?: Enumerable<ItemSalesWhereInput>
    id?: StringFilter | string
    sales?: XOR<SaleRelationFilter, SaleWhereInput>
    sale_id?: StringFilter | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    product_id?: StringFilter | string
    amount?: IntFilter | number
    unitary_value?: FloatFilter | number
    percent_discount?: FloatFilter | number
    subtotal?: FloatFilter | number
    total?: FloatFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type ItemSalesOrderByWithRelationInput = {
    id?: SortOrder
    sales?: SaleOrderByWithRelationInput
    sale_id?: SortOrder
    product?: ProductOrderByWithRelationInput
    product_id?: SortOrder
    amount?: SortOrder
    unitary_value?: SortOrder
    percent_discount?: SortOrder
    subtotal?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ItemSalesWhereUniqueInput = {
    id?: string
  }

  export type ItemSalesOrderByWithAggregationInput = {
    id?: SortOrder
    sale_id?: SortOrder
    product_id?: SortOrder
    amount?: SortOrder
    unitary_value?: SortOrder
    percent_discount?: SortOrder
    subtotal?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ItemSalesCountOrderByAggregateInput
    _avg?: ItemSalesAvgOrderByAggregateInput
    _max?: ItemSalesMaxOrderByAggregateInput
    _min?: ItemSalesMinOrderByAggregateInput
    _sum?: ItemSalesSumOrderByAggregateInput
  }

  export type ItemSalesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ItemSalesScalarWhereWithAggregatesInput>
    OR?: Enumerable<ItemSalesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ItemSalesScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sale_id?: StringWithAggregatesFilter | string
    product_id?: StringWithAggregatesFilter | string
    amount?: IntWithAggregatesFilter | number
    unitary_value?: FloatWithAggregatesFilter | number
    percent_discount?: FloatWithAggregatesFilter | number
    subtotal?: FloatWithAggregatesFilter | number
    total?: FloatWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProductComboWhereInput = {
    AND?: Enumerable<ProductComboWhereInput>
    OR?: Enumerable<ProductComboWhereInput>
    NOT?: Enumerable<ProductComboWhereInput>
    id?: StringFilter | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    product_id?: StringFilter | string
    item?: XOR<ProductRelationFilter, ProductWhereInput>
    item_id?: StringFilter | string
    amount?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type ProductComboOrderByWithRelationInput = {
    id?: SortOrder
    product?: ProductOrderByWithRelationInput
    product_id?: SortOrder
    item?: ProductOrderByWithRelationInput
    item_id?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductComboWhereUniqueInput = {
    id?: string
    product_id_item_id?: ProductComboProduct_idItem_idCompoundUniqueInput
  }

  export type ProductComboOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    item_id?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProductComboCountOrderByAggregateInput
    _avg?: ProductComboAvgOrderByAggregateInput
    _max?: ProductComboMaxOrderByAggregateInput
    _min?: ProductComboMinOrderByAggregateInput
    _sum?: ProductComboSumOrderByAggregateInput
  }

  export type ProductComboScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductComboScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductComboScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductComboScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    product_id?: StringWithAggregatesFilter | string
    item_id?: StringWithAggregatesFilter | string
    amount?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ConfigProductExceptionWhereInput = {
    AND?: Enumerable<ConfigProductExceptionWhereInput>
    OR?: Enumerable<ConfigProductExceptionWhereInput>
    NOT?: Enumerable<ConfigProductExceptionWhereInput>
    id?: StringFilter | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    product_id?: StringFilter | string
    date?: DateTimeFilter | Date | string
    action?: EnumTypeActionExceptionProductFilter | TypeActionExceptionProduct
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type ConfigProductExceptionOrderByWithRelationInput = {
    id?: SortOrder
    product?: ProductOrderByWithRelationInput
    product_id?: SortOrder
    date?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ConfigProductExceptionWhereUniqueInput = {
    id?: string
    product_id_date?: ConfigProductExceptionProduct_idDateCompoundUniqueInput
  }

  export type ConfigProductExceptionOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    date?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ConfigProductExceptionCountOrderByAggregateInput
    _max?: ConfigProductExceptionMaxOrderByAggregateInput
    _min?: ConfigProductExceptionMinOrderByAggregateInput
  }

  export type ConfigProductExceptionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ConfigProductExceptionScalarWhereWithAggregatesInput>
    OR?: Enumerable<ConfigProductExceptionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ConfigProductExceptionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    product_id?: StringWithAggregatesFilter | string
    date?: DateTimeWithAggregatesFilter | Date | string
    action?: EnumTypeActionExceptionProductWithAggregatesFilter | TypeActionExceptionProduct
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProductTotalSalesWhereInput = {
    AND?: Enumerable<ProductTotalSalesWhereInput>
    OR?: Enumerable<ProductTotalSalesWhereInput>
    NOT?: Enumerable<ProductTotalSalesWhereInput>
    id?: StringFilter | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    product_id?: StringFilter | string
    date?: DateTimeFilter | Date | string
    amount?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type ProductTotalSalesOrderByWithRelationInput = {
    id?: SortOrder
    product?: ProductOrderByWithRelationInput
    product_id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductTotalSalesWhereUniqueInput = {
    id?: string
    product_id_date?: ProductTotalSalesProduct_idDateCompoundUniqueInput
  }

  export type ProductTotalSalesOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProductTotalSalesCountOrderByAggregateInput
    _avg?: ProductTotalSalesAvgOrderByAggregateInput
    _max?: ProductTotalSalesMaxOrderByAggregateInput
    _min?: ProductTotalSalesMinOrderByAggregateInput
    _sum?: ProductTotalSalesSumOrderByAggregateInput
  }

  export type ProductTotalSalesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductTotalSalesScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductTotalSalesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductTotalSalesScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    product_id?: StringWithAggregatesFilter | string
    date?: DateTimeWithAggregatesFilter | Date | string
    amount?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PriceTableWhereInput = {
    AND?: Enumerable<PriceTableWhereInput>
    OR?: Enumerable<PriceTableWhereInput>
    NOT?: Enumerable<PriceTableWhereInput>
    id?: StringFilter | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput> | null
    company_id?: StringFilter | string
    description?: StringFilter | string
    initial_date?: DateTimeNullableFilter | Date | string | null
    final_date?: DateTimeNullableFilter | Date | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    products?: ProductPricesTableListRelationFilter
  }

  export type PriceTableOrderByWithRelationInput = {
    id?: SortOrder
    company?: CompanyOrderByWithRelationInput
    company_id?: SortOrder
    description?: SortOrder
    initial_date?: SortOrder
    final_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    products?: ProductPricesTableOrderByRelationAggregateInput
  }

  export type PriceTableWhereUniqueInput = {
    id?: string
  }

  export type PriceTableOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    description?: SortOrder
    initial_date?: SortOrder
    final_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PriceTableCountOrderByAggregateInput
    _max?: PriceTableMaxOrderByAggregateInput
    _min?: PriceTableMinOrderByAggregateInput
  }

  export type PriceTableScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PriceTableScalarWhereWithAggregatesInput>
    OR?: Enumerable<PriceTableScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PriceTableScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    company_id?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    initial_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    final_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProductPricesTableWhereInput = {
    AND?: Enumerable<ProductPricesTableWhereInput>
    OR?: Enumerable<ProductPricesTableWhereInput>
    NOT?: Enumerable<ProductPricesTableWhereInput>
    id?: StringFilter | string
    price_table?: XOR<PriceTableRelationFilter, PriceTableWhereInput> | null
    price_table_id?: StringFilter | string
    product?: XOR<ProductRelationFilter, ProductWhereInput> | null
    product_id?: StringFilter | string
    value?: FloatFilter | number
    value_promotion?: FloatFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type ProductPricesTableOrderByWithRelationInput = {
    id?: SortOrder
    price_table?: PriceTableOrderByWithRelationInput
    price_table_id?: SortOrder
    product?: ProductOrderByWithRelationInput
    product_id?: SortOrder
    value?: SortOrder
    value_promotion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductPricesTableWhereUniqueInput = {
    id?: string
  }

  export type ProductPricesTableOrderByWithAggregationInput = {
    id?: SortOrder
    price_table_id?: SortOrder
    product_id?: SortOrder
    value?: SortOrder
    value_promotion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProductPricesTableCountOrderByAggregateInput
    _avg?: ProductPricesTableAvgOrderByAggregateInput
    _max?: ProductPricesTableMaxOrderByAggregateInput
    _min?: ProductPricesTableMinOrderByAggregateInput
    _sum?: ProductPricesTableSumOrderByAggregateInput
  }

  export type ProductPricesTableScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductPricesTableScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductPricesTableScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductPricesTableScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    price_table_id?: StringWithAggregatesFilter | string
    product_id?: StringWithAggregatesFilter | string
    value?: FloatWithAggregatesFilter | number
    value_promotion?: FloatWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SaleWhereInput = {
    AND?: Enumerable<SaleWhereInput>
    OR?: Enumerable<SaleWhereInput>
    NOT?: Enumerable<SaleWhereInput>
    id?: StringFilter | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput> | null
    company_id?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput> | null
    user_id?: StringFilter | string
    session?: StringNullableFilter | string | null
    status?: EnumSaleStatusFilter | SaleStatus
    name?: StringFilter | string
    last_name?: StringFilter | string
    cellphone?: StringFilter | string
    email?: StringFilter | string
    cep?: StringFilter | string
    state?: StringFilter | string
    city?: StringFilter | string
    address?: StringFilter | string
    address_number?: StringNullableFilter | string | null
    address_complement?: StringNullableFilter | string | null
    subtotal?: FloatFilter | number
    descount_voucher?: StringNullableFilter | string | null
    descount_percentage?: FloatNullableFilter | number | null
    descount_value?: FloatNullableFilter | number | null
    total?: FloatFilter | number
    items?: ItemSalesListRelationFilter
    history?: SalesHistoryListRelationFilter
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type SaleOrderByWithRelationInput = {
    id?: SortOrder
    company?: CompanyOrderByWithRelationInput
    company_id?: SortOrder
    user?: UserOrderByWithRelationInput
    user_id?: SortOrder
    session?: SortOrder
    status?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    cellphone?: SortOrder
    email?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    address?: SortOrder
    address_number?: SortOrder
    address_complement?: SortOrder
    subtotal?: SortOrder
    descount_voucher?: SortOrder
    descount_percentage?: SortOrder
    descount_value?: SortOrder
    total?: SortOrder
    items?: ItemSalesOrderByRelationAggregateInput
    history?: SalesHistoryOrderByRelationAggregateInput
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SaleWhereUniqueInput = {
    id?: string
  }

  export type SaleOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    user_id?: SortOrder
    session?: SortOrder
    status?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    cellphone?: SortOrder
    email?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    address?: SortOrder
    address_number?: SortOrder
    address_complement?: SortOrder
    subtotal?: SortOrder
    descount_voucher?: SortOrder
    descount_percentage?: SortOrder
    descount_value?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SaleCountOrderByAggregateInput
    _avg?: SaleAvgOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
    _sum?: SaleSumOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SaleScalarWhereWithAggregatesInput>
    OR?: Enumerable<SaleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SaleScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    company_id?: StringWithAggregatesFilter | string
    user_id?: StringWithAggregatesFilter | string
    session?: StringNullableWithAggregatesFilter | string | null
    status?: EnumSaleStatusWithAggregatesFilter | SaleStatus
    name?: StringWithAggregatesFilter | string
    last_name?: StringWithAggregatesFilter | string
    cellphone?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    cep?: StringWithAggregatesFilter | string
    state?: StringWithAggregatesFilter | string
    city?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    address_number?: StringNullableWithAggregatesFilter | string | null
    address_complement?: StringNullableWithAggregatesFilter | string | null
    subtotal?: FloatWithAggregatesFilter | number
    descount_voucher?: StringNullableWithAggregatesFilter | string | null
    descount_percentage?: FloatNullableWithAggregatesFilter | number | null
    descount_value?: FloatNullableWithAggregatesFilter | number | null
    total?: FloatWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SalesHistoryWhereInput = {
    AND?: Enumerable<SalesHistoryWhereInput>
    OR?: Enumerable<SalesHistoryWhereInput>
    NOT?: Enumerable<SalesHistoryWhereInput>
    id?: StringFilter | string
    sale?: XOR<SaleRelationFilter, SaleWhereInput>
    sale_id?: StringFilter | string
    historic?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type SalesHistoryOrderByWithRelationInput = {
    id?: SortOrder
    sale?: SaleOrderByWithRelationInput
    sale_id?: SortOrder
    historic?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesHistoryWhereUniqueInput = {
    id?: string
  }

  export type SalesHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    sale_id?: SortOrder
    historic?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SalesHistoryCountOrderByAggregateInput
    _max?: SalesHistoryMaxOrderByAggregateInput
    _min?: SalesHistoryMinOrderByAggregateInput
  }

  export type SalesHistoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SalesHistoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<SalesHistoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SalesHistoryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sale_id?: StringWithAggregatesFilter | string
    historic?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput> | null
    company_id?: StringFilter | string
    document?: StringNullableFilter | string | null
    name?: StringFilter | string
    last_name?: StringFilter | string
    sex_type?: EnumSexNullableFilter | Sex | null
    birth_date?: DateTimeNullableFilter | Date | string | null
    celphone?: StringNullableFilter | string | null
    email?: StringFilter | string
    cep?: StringNullableFilter | string | null
    state?: StringNullableFilter | string | null
    city?: StringNullableFilter | string | null
    neighborhood?: StringNullableFilter | string | null
    address?: StringNullableFilter | string | null
    address_number?: StringNullableFilter | string | null
    address_complement?: StringNullableFilter | string | null
    active?: BoolNullableFilter | boolean | null
    email_confirmed?: BoolNullableFilter | boolean | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    Sale?: SaleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    company?: CompanyOrderByWithRelationInput
    company_id?: SortOrder
    document?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    sex_type?: SortOrder
    birth_date?: SortOrder
    celphone?: SortOrder
    email?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    address?: SortOrder
    address_number?: SortOrder
    address_complement?: SortOrder
    active?: SortOrder
    email_confirmed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Sale?: SaleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    document?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    sex_type?: SortOrder
    birth_date?: SortOrder
    celphone?: SortOrder
    email?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    address?: SortOrder
    address_number?: SortOrder
    address_complement?: SortOrder
    active?: SortOrder
    email_confirmed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    company_id?: StringWithAggregatesFilter | string
    document?: StringNullableWithAggregatesFilter | string | null
    name?: StringWithAggregatesFilter | string
    last_name?: StringWithAggregatesFilter | string
    sex_type?: EnumSexNullableWithAggregatesFilter | Sex | null
    birth_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    celphone?: StringNullableWithAggregatesFilter | string | null
    email?: StringWithAggregatesFilter | string
    cep?: StringNullableWithAggregatesFilter | string | null
    state?: StringNullableWithAggregatesFilter | string | null
    city?: StringNullableWithAggregatesFilter | string | null
    neighborhood?: StringNullableWithAggregatesFilter | string | null
    address?: StringNullableWithAggregatesFilter | string | null
    address_number?: StringNullableWithAggregatesFilter | string | null
    address_complement?: StringNullableWithAggregatesFilter | string | null
    active?: BoolNullableWithAggregatesFilter | boolean | null
    email_confirmed?: BoolNullableWithAggregatesFilter | boolean | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    fantasy_name?: string | null
    celphone1: string
    celphone2?: string | null
    email: string
    url_banner?: string | null
    url_site?: string | null
    url_facebook?: string | null
    url_instagram?: string | null
    url_linkedin?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    company_params?: CompanyParamsCreateNestedManyWithoutCompanyInput
    product_category?: ProductCategoryCreateNestedManyWithoutCompanyInput
    sales?: SaleCreateNestedManyWithoutCompanyInput
    price_tables?: PriceTableCreateNestedManyWithoutCompanyInput
    products?: ProductCreateNestedManyWithoutCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    fantasy_name?: string | null
    celphone1: string
    celphone2?: string | null
    email: string
    url_banner?: string | null
    url_site?: string | null
    url_facebook?: string | null
    url_instagram?: string | null
    url_linkedin?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    company_params?: CompanyParamsUncheckedCreateNestedManyWithoutCompanyInput
    product_category?: ProductCategoryUncheckedCreateNestedManyWithoutCompanyInput
    sales?: SaleUncheckedCreateNestedManyWithoutCompanyInput
    price_tables?: PriceTableUncheckedCreateNestedManyWithoutCompanyInput
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: NullableStringFieldUpdateOperationsInput | string | null
    celphone1?: StringFieldUpdateOperationsInput | string
    celphone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    url_site?: NullableStringFieldUpdateOperationsInput | string | null
    url_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    url_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    url_linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_params?: CompanyParamsUpdateManyWithoutCompanyInput
    product_category?: ProductCategoryUpdateManyWithoutCompanyInput
    sales?: SaleUpdateManyWithoutCompanyInput
    price_tables?: PriceTableUpdateManyWithoutCompanyInput
    products?: ProductUpdateManyWithoutCompanyInput
    users?: UserUpdateManyWithoutCompanyInput
  }

  export type CompanyUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: NullableStringFieldUpdateOperationsInput | string | null
    celphone1?: StringFieldUpdateOperationsInput | string
    celphone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    url_site?: NullableStringFieldUpdateOperationsInput | string | null
    url_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    url_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    url_linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_params?: CompanyParamsUncheckedUpdateManyWithoutCompanyInput
    product_category?: ProductCategoryUncheckedUpdateManyWithoutCompanyInput
    sales?: SaleUncheckedUpdateManyWithoutCompanyInput
    price_tables?: PriceTableUncheckedUpdateManyWithoutCompanyInput
    products?: ProductUncheckedUpdateManyWithoutCompanyInput
    users?: UserUncheckedUpdateManyWithoutCompanyInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    fantasy_name?: string | null
    celphone1: string
    celphone2?: string | null
    email: string
    url_banner?: string | null
    url_site?: string | null
    url_facebook?: string | null
    url_instagram?: string | null
    url_linkedin?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: NullableStringFieldUpdateOperationsInput | string | null
    celphone1?: StringFieldUpdateOperationsInput | string
    celphone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    url_site?: NullableStringFieldUpdateOperationsInput | string | null
    url_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    url_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    url_linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: NullableStringFieldUpdateOperationsInput | string | null
    celphone1?: StringFieldUpdateOperationsInput | string
    celphone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    url_site?: NullableStringFieldUpdateOperationsInput | string | null
    url_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    url_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    url_linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyParamsCreateInput = {
    id?: string
    company: CompanyCreateNestedOneWithoutCompany_paramsInput
    environment?: Environment | null
    obs_email?: string | null
    obs_voucher?: string | null
    privacy_policy?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CompanyParamsUncheckedCreateInput = {
    id?: string
    company_id: string
    environment?: Environment | null
    obs_email?: string | null
    obs_voucher?: string | null
    privacy_policy?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CompanyParamsUpdateInput = {
    company?: CompanyUpdateOneRequiredWithoutCompany_paramsInput
    environment?: NullableEnumEnvironmentFieldUpdateOperationsInput | Environment | null
    obs_email?: NullableStringFieldUpdateOperationsInput | string | null
    obs_voucher?: NullableStringFieldUpdateOperationsInput | string | null
    privacy_policy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyParamsUncheckedUpdateInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    environment?: NullableEnumEnvironmentFieldUpdateOperationsInput | Environment | null
    obs_email?: NullableStringFieldUpdateOperationsInput | string | null
    obs_voucher?: NullableStringFieldUpdateOperationsInput | string | null
    privacy_policy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyParamsCreateManyInput = {
    id?: string
    company_id: string
    environment?: Environment | null
    obs_email?: string | null
    obs_voucher?: string | null
    privacy_policy?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CompanyParamsUpdateManyMutationInput = {
    environment?: NullableEnumEnvironmentFieldUpdateOperationsInput | Environment | null
    obs_email?: NullableStringFieldUpdateOperationsInput | string | null
    obs_voucher?: NullableStringFieldUpdateOperationsInput | string | null
    privacy_policy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyParamsUncheckedUpdateManyInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    environment?: NullableEnumEnvironmentFieldUpdateOperationsInput | Environment | null
    obs_email?: NullableStringFieldUpdateOperationsInput | string | null
    obs_voucher?: NullableStringFieldUpdateOperationsInput | string | null
    privacy_policy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryCreateInput = {
    id?: string
    company: CompanyCreateNestedOneWithoutProduct_categoryInput
    product_type: ProductType
    config_type_id?: string | null
    title: string
    description: string
    url_banner?: string | null
    active?: boolean
    products?: ProductCreateNestedManyWithoutProduct_categoryInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductCategoryUncheckedCreateInput = {
    id?: string
    company_id: string
    product_type: ProductType
    config_type_id?: string | null
    title: string
    description: string
    url_banner?: string | null
    active?: boolean
    products?: ProductUncheckedCreateNestedManyWithoutProduct_categoryInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductCategoryUpdateInput = {
    company?: CompanyUpdateOneRequiredWithoutProduct_categoryInput
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    config_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductUpdateManyWithoutProduct_categoryInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryUncheckedUpdateInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    config_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductUncheckedUpdateManyWithoutProduct_categoryInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryCreateManyInput = {
    id?: string
    company_id: string
    product_type: ProductType
    config_type_id?: string | null
    title: string
    description: string
    url_banner?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductCategoryUpdateManyMutationInput = {
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    config_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryUncheckedUpdateManyInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    config_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    product_category: ProductCategoryCreateNestedOneWithoutProductsInput
    company: CompanyCreateNestedOneWithoutProductsInput
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner?: string | null
    active?: boolean
    combo?: boolean | null
    amount_min_sale?: number | null
    amount_max_sale?: number | null
    amount_max_total_diary?: number | null
    highlighted?: boolean | null
    order_on_menu?: number | null
    for_sale?: boolean | null
    age_group?: string | null
    promotion?: boolean | null
    items?: ProductComboCreateNestedManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionCreateNestedManyWithoutProductInput
    total_sale?: ProductTotalSalesCreateNestedManyWithoutProductInput
    product_item?: ProductComboCreateNestedManyWithoutItemInput
    sales_item?: ItemSalesCreateNestedManyWithoutProductInput
    price_table?: ProductPricesTableCreateNestedManyWithoutProductInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    product_category_id: string
    company_id: string
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner?: string | null
    active?: boolean
    combo?: boolean | null
    amount_min_sale?: number | null
    amount_max_sale?: number | null
    amount_max_total_diary?: number | null
    highlighted?: boolean | null
    order_on_menu?: number | null
    for_sale?: boolean | null
    age_group?: string | null
    promotion?: boolean | null
    items?: ProductComboUncheckedCreateNestedManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionUncheckedCreateNestedManyWithoutProductInput
    total_sale?: ProductTotalSalesUncheckedCreateNestedManyWithoutProductInput
    product_item?: ProductComboUncheckedCreateNestedManyWithoutItemInput
    sales_item?: ItemSalesUncheckedCreateNestedManyWithoutProductInput
    price_table?: ProductPricesTableUncheckedCreateNestedManyWithoutProductInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductUpdateInput = {
    product_category?: ProductCategoryUpdateOneRequiredWithoutProductsInput
    company?: CompanyUpdateOneRequiredWithoutProductsInput
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    combo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount_min_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_total_diary?: NullableIntFieldUpdateOperationsInput | number | null
    highlighted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_on_menu?: NullableIntFieldUpdateOperationsInput | number | null
    for_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    promotion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    items?: ProductComboUpdateManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionUpdateManyWithoutProductInput
    total_sale?: ProductTotalSalesUpdateManyWithoutProductInput
    product_item?: ProductComboUpdateManyWithoutItemInput
    sales_item?: ItemSalesUpdateManyWithoutProductInput
    price_table?: ProductPricesTableUpdateManyWithoutProductInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateInput = {
    product_category_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    combo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount_min_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_total_diary?: NullableIntFieldUpdateOperationsInput | number | null
    highlighted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_on_menu?: NullableIntFieldUpdateOperationsInput | number | null
    for_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    promotion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    items?: ProductComboUncheckedUpdateManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionUncheckedUpdateManyWithoutProductInput
    total_sale?: ProductTotalSalesUncheckedUpdateManyWithoutProductInput
    product_item?: ProductComboUncheckedUpdateManyWithoutItemInput
    sales_item?: ItemSalesUncheckedUpdateManyWithoutProductInput
    price_table?: ProductPricesTableUncheckedUpdateManyWithoutProductInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyInput = {
    id?: string
    product_category_id: string
    company_id: string
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner?: string | null
    active?: boolean
    combo?: boolean | null
    amount_min_sale?: number | null
    amount_max_sale?: number | null
    amount_max_total_diary?: number | null
    highlighted?: boolean | null
    order_on_menu?: number | null
    for_sale?: boolean | null
    age_group?: string | null
    promotion?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    combo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount_min_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_total_diary?: NullableIntFieldUpdateOperationsInput | number | null
    highlighted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_on_menu?: NullableIntFieldUpdateOperationsInput | number | null
    for_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    promotion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    product_category_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    combo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount_min_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_total_diary?: NullableIntFieldUpdateOperationsInput | number | null
    highlighted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_on_menu?: NullableIntFieldUpdateOperationsInput | number | null
    for_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    promotion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemSalesCreateInput = {
    id?: string
    sales: SaleCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutSales_itemInput
    amount: number
    unitary_value: number
    percent_discount: number
    subtotal: number
    total: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ItemSalesUncheckedCreateInput = {
    id?: string
    sale_id: string
    product_id: string
    amount: number
    unitary_value: number
    percent_discount: number
    subtotal: number
    total: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ItemSalesUpdateInput = {
    sales?: SaleUpdateOneRequiredWithoutItemsInput
    product?: ProductUpdateOneRequiredWithoutSales_itemInput
    amount?: IntFieldUpdateOperationsInput | number
    unitary_value?: FloatFieldUpdateOperationsInput | number
    percent_discount?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemSalesUncheckedUpdateInput = {
    sale_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    unitary_value?: FloatFieldUpdateOperationsInput | number
    percent_discount?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemSalesCreateManyInput = {
    id?: string
    sale_id: string
    product_id: string
    amount: number
    unitary_value: number
    percent_discount: number
    subtotal: number
    total: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ItemSalesUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    unitary_value?: FloatFieldUpdateOperationsInput | number
    percent_discount?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemSalesUncheckedUpdateManyInput = {
    sale_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    unitary_value?: FloatFieldUpdateOperationsInput | number
    percent_discount?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductComboCreateInput = {
    id?: string
    product: ProductCreateNestedOneWithoutItemsInput
    item: ProductCreateNestedOneWithoutProduct_itemInput
    amount: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductComboUncheckedCreateInput = {
    id?: string
    product_id: string
    item_id: string
    amount: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductComboUpdateInput = {
    product?: ProductUpdateOneRequiredWithoutItemsInput
    item?: ProductUpdateOneRequiredWithoutProduct_itemInput
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductComboUncheckedUpdateInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductComboCreateManyInput = {
    id?: string
    product_id: string
    item_id: string
    amount: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductComboUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductComboUncheckedUpdateManyInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigProductExceptionCreateInput = {
    id?: string
    product: ProductCreateNestedOneWithoutConfig_product_exeptionInput
    date: Date | string
    action?: TypeActionExceptionProduct
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConfigProductExceptionUncheckedCreateInput = {
    id?: string
    product_id: string
    date: Date | string
    action?: TypeActionExceptionProduct
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConfigProductExceptionUpdateInput = {
    product?: ProductUpdateOneRequiredWithoutConfig_product_exeptionInput
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: EnumTypeActionExceptionProductFieldUpdateOperationsInput | TypeActionExceptionProduct
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigProductExceptionUncheckedUpdateInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: EnumTypeActionExceptionProductFieldUpdateOperationsInput | TypeActionExceptionProduct
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigProductExceptionCreateManyInput = {
    id?: string
    product_id: string
    date: Date | string
    action?: TypeActionExceptionProduct
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConfigProductExceptionUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: EnumTypeActionExceptionProductFieldUpdateOperationsInput | TypeActionExceptionProduct
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigProductExceptionUncheckedUpdateManyInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: EnumTypeActionExceptionProductFieldUpdateOperationsInput | TypeActionExceptionProduct
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTotalSalesCreateInput = {
    id?: string
    product: ProductCreateNestedOneWithoutTotal_saleInput
    date: Date | string
    amount: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductTotalSalesUncheckedCreateInput = {
    id?: string
    product_id: string
    date: Date | string
    amount: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductTotalSalesUpdateInput = {
    product?: ProductUpdateOneRequiredWithoutTotal_saleInput
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTotalSalesUncheckedUpdateInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTotalSalesCreateManyInput = {
    id?: string
    product_id: string
    date: Date | string
    amount: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductTotalSalesUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTotalSalesUncheckedUpdateManyInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceTableCreateInput = {
    id?: string
    company?: CompanyCreateNestedOneWithoutPrice_tablesInput
    description: string
    initial_date?: Date | string | null
    final_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductPricesTableCreateNestedManyWithoutPrice_tableInput
  }

  export type PriceTableUncheckedCreateInput = {
    id?: string
    company_id: string
    description: string
    initial_date?: Date | string | null
    final_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductPricesTableUncheckedCreateNestedManyWithoutPrice_tableInput
  }

  export type PriceTableUpdateInput = {
    company?: CompanyUpdateOneWithoutPrice_tablesInput
    description?: StringFieldUpdateOperationsInput | string
    initial_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    final_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductPricesTableUpdateManyWithoutPrice_tableInput
  }

  export type PriceTableUncheckedUpdateInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    initial_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    final_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductPricesTableUncheckedUpdateManyWithoutPrice_tableInput
  }

  export type PriceTableCreateManyInput = {
    id?: string
    company_id: string
    description: string
    initial_date?: Date | string | null
    final_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PriceTableUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    initial_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    final_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceTableUncheckedUpdateManyInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    initial_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    final_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPricesTableCreateInput = {
    id?: string
    price_table?: PriceTableCreateNestedOneWithoutProductsInput
    product?: ProductCreateNestedOneWithoutPrice_tableInput
    value: number
    value_promotion: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductPricesTableUncheckedCreateInput = {
    id?: string
    price_table_id: string
    product_id: string
    value: number
    value_promotion: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductPricesTableUpdateInput = {
    price_table?: PriceTableUpdateOneWithoutProductsInput
    product?: ProductUpdateOneWithoutPrice_tableInput
    value?: FloatFieldUpdateOperationsInput | number
    value_promotion?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPricesTableUncheckedUpdateInput = {
    price_table_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    value_promotion?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPricesTableCreateManyInput = {
    id?: string
    price_table_id: string
    product_id: string
    value: number
    value_promotion: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductPricesTableUpdateManyMutationInput = {
    value?: FloatFieldUpdateOperationsInput | number
    value_promotion?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPricesTableUncheckedUpdateManyInput = {
    price_table_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    value_promotion?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateInput = {
    id?: string
    company?: CompanyCreateNestedOneWithoutSalesInput
    user?: UserCreateNestedOneWithoutSaleInput
    session?: string | null
    status?: SaleStatus
    name: string
    last_name: string
    cellphone: string
    email: string
    cep: string
    state: string
    city: string
    address: string
    address_number?: string | null
    address_complement?: string | null
    subtotal: number
    descount_voucher?: string | null
    descount_percentage?: number | null
    descount_value?: number | null
    total: number
    items?: ItemSalesCreateNestedManyWithoutSalesInput
    history?: SalesHistoryCreateNestedManyWithoutSaleInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SaleUncheckedCreateInput = {
    id?: string
    company_id: string
    user_id: string
    session?: string | null
    status?: SaleStatus
    name: string
    last_name: string
    cellphone: string
    email: string
    cep: string
    state: string
    city: string
    address: string
    address_number?: string | null
    address_complement?: string | null
    subtotal: number
    descount_voucher?: string | null
    descount_percentage?: number | null
    descount_value?: number | null
    total: number
    items?: ItemSalesUncheckedCreateNestedManyWithoutSalesInput
    history?: SalesHistoryUncheckedCreateNestedManyWithoutSaleInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SaleUpdateInput = {
    company?: CompanyUpdateOneWithoutSalesInput
    user?: UserUpdateOneWithoutSaleInput
    session?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSaleStatusFieldUpdateOperationsInput | SaleStatus
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    descount_voucher?: NullableStringFieldUpdateOperationsInput | string | null
    descount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    descount_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    items?: ItemSalesUpdateManyWithoutSalesInput
    history?: SalesHistoryUpdateManyWithoutSaleInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSaleStatusFieldUpdateOperationsInput | SaleStatus
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    descount_voucher?: NullableStringFieldUpdateOperationsInput | string | null
    descount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    descount_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    items?: ItemSalesUncheckedUpdateManyWithoutSalesInput
    history?: SalesHistoryUncheckedUpdateManyWithoutSaleInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateManyInput = {
    id?: string
    company_id: string
    user_id: string
    session?: string | null
    status?: SaleStatus
    name: string
    last_name: string
    cellphone: string
    email: string
    cep: string
    state: string
    city: string
    address: string
    address_number?: string | null
    address_complement?: string | null
    subtotal: number
    descount_voucher?: string | null
    descount_percentage?: number | null
    descount_value?: number | null
    total: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SaleUpdateManyMutationInput = {
    session?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSaleStatusFieldUpdateOperationsInput | SaleStatus
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    descount_voucher?: NullableStringFieldUpdateOperationsInput | string | null
    descount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    descount_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateManyInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSaleStatusFieldUpdateOperationsInput | SaleStatus
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    descount_voucher?: NullableStringFieldUpdateOperationsInput | string | null
    descount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    descount_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesHistoryCreateInput = {
    id?: string
    sale: SaleCreateNestedOneWithoutHistoryInput
    historic: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesHistoryUncheckedCreateInput = {
    id?: string
    sale_id: string
    historic: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesHistoryUpdateInput = {
    sale?: SaleUpdateOneRequiredWithoutHistoryInput
    historic?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesHistoryUncheckedUpdateInput = {
    sale_id?: StringFieldUpdateOperationsInput | string
    historic?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesHistoryCreateManyInput = {
    id?: string
    sale_id: string
    historic: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesHistoryUpdateManyMutationInput = {
    historic?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesHistoryUncheckedUpdateManyInput = {
    sale_id?: StringFieldUpdateOperationsInput | string
    historic?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    company?: CompanyCreateNestedOneWithoutUsersInput
    document?: string | null
    name: string
    last_name: string
    sex_type?: Sex | null
    birth_date?: Date | string | null
    celphone?: string | null
    email: string
    cep?: string | null
    state?: string | null
    city?: string | null
    neighborhood?: string | null
    address?: string | null
    address_number?: string | null
    address_complement?: string | null
    active?: boolean | null
    email_confirmed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    Sale?: SaleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    company_id: string
    document?: string | null
    name: string
    last_name: string
    sex_type?: Sex | null
    birth_date?: Date | string | null
    celphone?: string | null
    email: string
    cep?: string | null
    state?: string | null
    city?: string | null
    neighborhood?: string | null
    address?: string | null
    address_number?: string | null
    address_complement?: string | null
    active?: boolean | null
    email_confirmed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    Sale?: SaleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    company?: CompanyUpdateOneWithoutUsersInput
    document?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sex_type?: NullableEnumSexFieldUpdateOperationsInput | Sex | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    celphone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Sale?: SaleUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    document?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sex_type?: NullableEnumSexFieldUpdateOperationsInput | Sex | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    celphone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Sale?: SaleUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateManyInput = {
    id?: string
    company_id: string
    document?: string | null
    name: string
    last_name: string
    sex_type?: Sex | null
    birth_date?: Date | string | null
    celphone?: string | null
    email: string
    cep?: string | null
    state?: string | null
    city?: string | null
    neighborhood?: string | null
    address?: string | null
    address_number?: string | null
    address_complement?: string | null
    active?: boolean | null
    email_confirmed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    document?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sex_type?: NullableEnumSexFieldUpdateOperationsInput | Sex | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    celphone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    document?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sex_type?: NullableEnumSexFieldUpdateOperationsInput | Sex | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    celphone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type CompanyParamsListRelationFilter = {
    every?: CompanyParamsWhereInput
    some?: CompanyParamsWhereInput
    none?: CompanyParamsWhereInput
  }

  export type ProductCategoryListRelationFilter = {
    every?: ProductCategoryWhereInput
    some?: ProductCategoryWhereInput
    none?: ProductCategoryWhereInput
  }

  export type SaleListRelationFilter = {
    every?: SaleWhereInput
    some?: SaleWhereInput
    none?: SaleWhereInput
  }

  export type PriceTableListRelationFilter = {
    every?: PriceTableWhereInput
    some?: PriceTableWhereInput
    none?: PriceTableWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type CompanyParamsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PriceTableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fantasy_name?: SortOrder
    celphone1?: SortOrder
    celphone2?: SortOrder
    email?: SortOrder
    url_banner?: SortOrder
    url_site?: SortOrder
    url_facebook?: SortOrder
    url_instagram?: SortOrder
    url_linkedin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fantasy_name?: SortOrder
    celphone1?: SortOrder
    celphone2?: SortOrder
    email?: SortOrder
    url_banner?: SortOrder
    url_site?: SortOrder
    url_facebook?: SortOrder
    url_instagram?: SortOrder
    url_linkedin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fantasy_name?: SortOrder
    celphone1?: SortOrder
    celphone2?: SortOrder
    email?: SortOrder
    url_banner?: SortOrder
    url_site?: SortOrder
    url_facebook?: SortOrder
    url_instagram?: SortOrder
    url_linkedin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type CompanyRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type EnumEnvironmentNullableFilter = {
    equals?: Environment | null
    in?: Enumerable<Environment> | null
    notIn?: Enumerable<Environment> | null
    not?: NestedEnumEnvironmentNullableFilter | Environment | null
    isSet?: boolean
  }

  export type CompanyParamsCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    environment?: SortOrder
    obs_email?: SortOrder
    obs_voucher?: SortOrder
    privacy_policy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CompanyParamsMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    environment?: SortOrder
    obs_email?: SortOrder
    obs_voucher?: SortOrder
    privacy_policy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CompanyParamsMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    environment?: SortOrder
    obs_email?: SortOrder
    obs_voucher?: SortOrder
    privacy_policy?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumEnvironmentNullableWithAggregatesFilter = {
    equals?: Environment | null
    in?: Enumerable<Environment> | null
    notIn?: Enumerable<Environment> | null
    not?: NestedEnumEnvironmentNullableWithAggregatesFilter | Environment | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumEnvironmentNullableFilter
    _max?: NestedEnumEnvironmentNullableFilter
    isSet?: boolean
  }

  export type EnumProductTypeFilter = {
    equals?: ProductType
    in?: Enumerable<ProductType>
    notIn?: Enumerable<ProductType>
    not?: NestedEnumProductTypeFilter | ProductType
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type ProductCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    product_type?: SortOrder
    config_type_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url_banner?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    product_type?: SortOrder
    config_type_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url_banner?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    product_type?: SortOrder
    config_type_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url_banner?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumProductTypeWithAggregatesFilter = {
    equals?: ProductType
    in?: Enumerable<ProductType>
    notIn?: Enumerable<ProductType>
    not?: NestedEnumProductTypeWithAggregatesFilter | ProductType
    _count?: NestedIntFilter
    _min?: NestedEnumProductTypeFilter
    _max?: NestedEnumProductTypeFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ProductCategoryRelationFilter = {
    is?: ProductCategoryWhereInput
    isNot?: ProductCategoryWhereInput
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
    isSet?: boolean
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type ProductComboListRelationFilter = {
    every?: ProductComboWhereInput
    some?: ProductComboWhereInput
    none?: ProductComboWhereInput
  }

  export type ConfigProductExceptionListRelationFilter = {
    every?: ConfigProductExceptionWhereInput
    some?: ConfigProductExceptionWhereInput
    none?: ConfigProductExceptionWhereInput
  }

  export type ProductTotalSalesListRelationFilter = {
    every?: ProductTotalSalesWhereInput
    some?: ProductTotalSalesWhereInput
    none?: ProductTotalSalesWhereInput
  }

  export type ItemSalesListRelationFilter = {
    every?: ItemSalesWhereInput
    some?: ItemSalesWhereInput
    none?: ItemSalesWhereInput
  }

  export type ProductPricesTableListRelationFilter = {
    every?: ProductPricesTableWhereInput
    some?: ProductPricesTableWhereInput
    none?: ProductPricesTableWhereInput
  }

  export type ProductComboOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConfigProductExceptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductTotalSalesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemSalesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductPricesTableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    product_category_id?: SortOrder
    company_id?: SortOrder
    product_type?: SortOrder
    sku?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    url_banner?: SortOrder
    active?: SortOrder
    combo?: SortOrder
    amount_min_sale?: SortOrder
    amount_max_sale?: SortOrder
    amount_max_total_diary?: SortOrder
    highlighted?: SortOrder
    order_on_menu?: SortOrder
    for_sale?: SortOrder
    age_group?: SortOrder
    promotion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    amount_min_sale?: SortOrder
    amount_max_sale?: SortOrder
    amount_max_total_diary?: SortOrder
    order_on_menu?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    product_category_id?: SortOrder
    company_id?: SortOrder
    product_type?: SortOrder
    sku?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    url_banner?: SortOrder
    active?: SortOrder
    combo?: SortOrder
    amount_min_sale?: SortOrder
    amount_max_sale?: SortOrder
    amount_max_total_diary?: SortOrder
    highlighted?: SortOrder
    order_on_menu?: SortOrder
    for_sale?: SortOrder
    age_group?: SortOrder
    promotion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    product_category_id?: SortOrder
    company_id?: SortOrder
    product_type?: SortOrder
    sku?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    url_banner?: SortOrder
    active?: SortOrder
    combo?: SortOrder
    amount_min_sale?: SortOrder
    amount_max_sale?: SortOrder
    amount_max_total_diary?: SortOrder
    highlighted?: SortOrder
    order_on_menu?: SortOrder
    for_sale?: SortOrder
    age_group?: SortOrder
    promotion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    amount_min_sale?: SortOrder
    amount_max_sale?: SortOrder
    amount_max_total_diary?: SortOrder
    order_on_menu?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
    isSet?: boolean
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    isSet?: boolean
  }

  export type SaleRelationFilter = {
    is?: SaleWhereInput
    isNot?: SaleWhereInput
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type ItemSalesCountOrderByAggregateInput = {
    id?: SortOrder
    sale_id?: SortOrder
    product_id?: SortOrder
    amount?: SortOrder
    unitary_value?: SortOrder
    percent_discount?: SortOrder
    subtotal?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ItemSalesAvgOrderByAggregateInput = {
    amount?: SortOrder
    unitary_value?: SortOrder
    percent_discount?: SortOrder
    subtotal?: SortOrder
    total?: SortOrder
  }

  export type ItemSalesMaxOrderByAggregateInput = {
    id?: SortOrder
    sale_id?: SortOrder
    product_id?: SortOrder
    amount?: SortOrder
    unitary_value?: SortOrder
    percent_discount?: SortOrder
    subtotal?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ItemSalesMinOrderByAggregateInput = {
    id?: SortOrder
    sale_id?: SortOrder
    product_id?: SortOrder
    amount?: SortOrder
    unitary_value?: SortOrder
    percent_discount?: SortOrder
    subtotal?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ItemSalesSumOrderByAggregateInput = {
    amount?: SortOrder
    unitary_value?: SortOrder
    percent_discount?: SortOrder
    subtotal?: SortOrder
    total?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type ProductComboProduct_idItem_idCompoundUniqueInput = {
    product_id: string
    item_id: string
  }

  export type ProductComboCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    item_id?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductComboAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ProductComboMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    item_id?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductComboMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    item_id?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductComboSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTypeActionExceptionProductFilter = {
    equals?: TypeActionExceptionProduct
    in?: Enumerable<TypeActionExceptionProduct>
    notIn?: Enumerable<TypeActionExceptionProduct>
    not?: NestedEnumTypeActionExceptionProductFilter | TypeActionExceptionProduct
  }

  export type ConfigProductExceptionProduct_idDateCompoundUniqueInput = {
    product_id: string
    date: Date | string
  }

  export type ConfigProductExceptionCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    date?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ConfigProductExceptionMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    date?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ConfigProductExceptionMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    date?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumTypeActionExceptionProductWithAggregatesFilter = {
    equals?: TypeActionExceptionProduct
    in?: Enumerable<TypeActionExceptionProduct>
    notIn?: Enumerable<TypeActionExceptionProduct>
    not?: NestedEnumTypeActionExceptionProductWithAggregatesFilter | TypeActionExceptionProduct
    _count?: NestedIntFilter
    _min?: NestedEnumTypeActionExceptionProductFilter
    _max?: NestedEnumTypeActionExceptionProductFilter
  }

  export type ProductTotalSalesProduct_idDateCompoundUniqueInput = {
    product_id: string
    date: Date | string
  }

  export type ProductTotalSalesCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductTotalSalesAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ProductTotalSalesMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductTotalSalesMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductTotalSalesSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
    isSet?: boolean
  }

  export type PriceTableCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    description?: SortOrder
    initial_date?: SortOrder
    final_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PriceTableMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    description?: SortOrder
    initial_date?: SortOrder
    final_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PriceTableMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    description?: SortOrder
    initial_date?: SortOrder
    final_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    isSet?: boolean
  }

  export type PriceTableRelationFilter = {
    is?: PriceTableWhereInput | null
    isNot?: PriceTableWhereInput | null
  }

  export type ProductPricesTableCountOrderByAggregateInput = {
    id?: SortOrder
    price_table_id?: SortOrder
    product_id?: SortOrder
    value?: SortOrder
    value_promotion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductPricesTableAvgOrderByAggregateInput = {
    value?: SortOrder
    value_promotion?: SortOrder
  }

  export type ProductPricesTableMaxOrderByAggregateInput = {
    id?: SortOrder
    price_table_id?: SortOrder
    product_id?: SortOrder
    value?: SortOrder
    value_promotion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductPricesTableMinOrderByAggregateInput = {
    id?: SortOrder
    price_table_id?: SortOrder
    product_id?: SortOrder
    value?: SortOrder
    value_promotion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductPricesTableSumOrderByAggregateInput = {
    value?: SortOrder
    value_promotion?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type EnumSaleStatusFilter = {
    equals?: SaleStatus
    in?: Enumerable<SaleStatus>
    notIn?: Enumerable<SaleStatus>
    not?: NestedEnumSaleStatusFilter | SaleStatus
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
    isSet?: boolean
  }

  export type SalesHistoryListRelationFilter = {
    every?: SalesHistoryWhereInput
    some?: SalesHistoryWhereInput
    none?: SalesHistoryWhereInput
  }

  export type SalesHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaleCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    user_id?: SortOrder
    session?: SortOrder
    status?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    cellphone?: SortOrder
    email?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    address?: SortOrder
    address_number?: SortOrder
    address_complement?: SortOrder
    subtotal?: SortOrder
    descount_voucher?: SortOrder
    descount_percentage?: SortOrder
    descount_value?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SaleAvgOrderByAggregateInput = {
    subtotal?: SortOrder
    descount_percentage?: SortOrder
    descount_value?: SortOrder
    total?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    user_id?: SortOrder
    session?: SortOrder
    status?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    cellphone?: SortOrder
    email?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    address?: SortOrder
    address_number?: SortOrder
    address_complement?: SortOrder
    subtotal?: SortOrder
    descount_voucher?: SortOrder
    descount_percentage?: SortOrder
    descount_value?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    user_id?: SortOrder
    session?: SortOrder
    status?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    cellphone?: SortOrder
    email?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    address?: SortOrder
    address_number?: SortOrder
    address_complement?: SortOrder
    subtotal?: SortOrder
    descount_voucher?: SortOrder
    descount_percentage?: SortOrder
    descount_value?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SaleSumOrderByAggregateInput = {
    subtotal?: SortOrder
    descount_percentage?: SortOrder
    descount_value?: SortOrder
    total?: SortOrder
  }

  export type EnumSaleStatusWithAggregatesFilter = {
    equals?: SaleStatus
    in?: Enumerable<SaleStatus>
    notIn?: Enumerable<SaleStatus>
    not?: NestedEnumSaleStatusWithAggregatesFilter | SaleStatus
    _count?: NestedIntFilter
    _min?: NestedEnumSaleStatusFilter
    _max?: NestedEnumSaleStatusFilter
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
    isSet?: boolean
  }

  export type SalesHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    sale_id?: SortOrder
    historic?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    sale_id?: SortOrder
    historic?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    sale_id?: SortOrder
    historic?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumSexNullableFilter = {
    equals?: Sex | null
    in?: Enumerable<Sex> | null
    notIn?: Enumerable<Sex> | null
    not?: NestedEnumSexNullableFilter | Sex | null
    isSet?: boolean
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    document?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    sex_type?: SortOrder
    birth_date?: SortOrder
    celphone?: SortOrder
    email?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    address?: SortOrder
    address_number?: SortOrder
    address_complement?: SortOrder
    active?: SortOrder
    email_confirmed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    document?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    sex_type?: SortOrder
    birth_date?: SortOrder
    celphone?: SortOrder
    email?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    address?: SortOrder
    address_number?: SortOrder
    address_complement?: SortOrder
    active?: SortOrder
    email_confirmed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    document?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    sex_type?: SortOrder
    birth_date?: SortOrder
    celphone?: SortOrder
    email?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    address?: SortOrder
    address_number?: SortOrder
    address_complement?: SortOrder
    active?: SortOrder
    email_confirmed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumSexNullableWithAggregatesFilter = {
    equals?: Sex | null
    in?: Enumerable<Sex> | null
    notIn?: Enumerable<Sex> | null
    not?: NestedEnumSexNullableWithAggregatesFilter | Sex | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumSexNullableFilter
    _max?: NestedEnumSexNullableFilter
    isSet?: boolean
  }

  export type CompanyParamsCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<CompanyParamsCreateWithoutCompanyInput>, Enumerable<CompanyParamsUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<CompanyParamsCreateOrConnectWithoutCompanyInput>
    createMany?: CompanyParamsCreateManyCompanyInputEnvelope
    connect?: Enumerable<CompanyParamsWhereUniqueInput>
  }

  export type ProductCategoryCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<ProductCategoryCreateWithoutCompanyInput>, Enumerable<ProductCategoryUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<ProductCategoryCreateOrConnectWithoutCompanyInput>
    createMany?: ProductCategoryCreateManyCompanyInputEnvelope
    connect?: Enumerable<ProductCategoryWhereUniqueInput>
  }

  export type SaleCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<SaleCreateWithoutCompanyInput>, Enumerable<SaleUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<SaleCreateOrConnectWithoutCompanyInput>
    createMany?: SaleCreateManyCompanyInputEnvelope
    connect?: Enumerable<SaleWhereUniqueInput>
  }

  export type PriceTableCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<PriceTableCreateWithoutCompanyInput>, Enumerable<PriceTableUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<PriceTableCreateOrConnectWithoutCompanyInput>
    createMany?: PriceTableCreateManyCompanyInputEnvelope
    connect?: Enumerable<PriceTableWhereUniqueInput>
  }

  export type ProductCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCompanyInput>, Enumerable<ProductUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCompanyInput>
    createMany?: ProductCreateManyCompanyInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type UserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<UserCreateWithoutCompanyInput>, Enumerable<UserUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCompanyInput>
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type CompanyParamsUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<CompanyParamsCreateWithoutCompanyInput>, Enumerable<CompanyParamsUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<CompanyParamsCreateOrConnectWithoutCompanyInput>
    createMany?: CompanyParamsCreateManyCompanyInputEnvelope
    connect?: Enumerable<CompanyParamsWhereUniqueInput>
  }

  export type ProductCategoryUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<ProductCategoryCreateWithoutCompanyInput>, Enumerable<ProductCategoryUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<ProductCategoryCreateOrConnectWithoutCompanyInput>
    createMany?: ProductCategoryCreateManyCompanyInputEnvelope
    connect?: Enumerable<ProductCategoryWhereUniqueInput>
  }

  export type SaleUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<SaleCreateWithoutCompanyInput>, Enumerable<SaleUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<SaleCreateOrConnectWithoutCompanyInput>
    createMany?: SaleCreateManyCompanyInputEnvelope
    connect?: Enumerable<SaleWhereUniqueInput>
  }

  export type PriceTableUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<PriceTableCreateWithoutCompanyInput>, Enumerable<PriceTableUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<PriceTableCreateOrConnectWithoutCompanyInput>
    createMany?: PriceTableCreateManyCompanyInputEnvelope
    connect?: Enumerable<PriceTableWhereUniqueInput>
  }

  export type ProductUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCompanyInput>, Enumerable<ProductUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCompanyInput>
    createMany?: ProductCreateManyCompanyInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<UserCreateWithoutCompanyInput>, Enumerable<UserUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCompanyInput>
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CompanyParamsUpdateManyWithoutCompanyInput = {
    create?: XOR<Enumerable<CompanyParamsCreateWithoutCompanyInput>, Enumerable<CompanyParamsUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<CompanyParamsCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<CompanyParamsUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: CompanyParamsCreateManyCompanyInputEnvelope
    set?: Enumerable<CompanyParamsWhereUniqueInput>
    disconnect?: Enumerable<CompanyParamsWhereUniqueInput>
    delete?: Enumerable<CompanyParamsWhereUniqueInput>
    connect?: Enumerable<CompanyParamsWhereUniqueInput>
    update?: Enumerable<CompanyParamsUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<CompanyParamsUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<CompanyParamsScalarWhereInput>
  }

  export type ProductCategoryUpdateManyWithoutCompanyInput = {
    create?: XOR<Enumerable<ProductCategoryCreateWithoutCompanyInput>, Enumerable<ProductCategoryUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<ProductCategoryCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<ProductCategoryUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: ProductCategoryCreateManyCompanyInputEnvelope
    set?: Enumerable<ProductCategoryWhereUniqueInput>
    disconnect?: Enumerable<ProductCategoryWhereUniqueInput>
    delete?: Enumerable<ProductCategoryWhereUniqueInput>
    connect?: Enumerable<ProductCategoryWhereUniqueInput>
    update?: Enumerable<ProductCategoryUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<ProductCategoryUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<ProductCategoryScalarWhereInput>
  }

  export type SaleUpdateManyWithoutCompanyInput = {
    create?: XOR<Enumerable<SaleCreateWithoutCompanyInput>, Enumerable<SaleUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<SaleCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<SaleUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: SaleCreateManyCompanyInputEnvelope
    set?: Enumerable<SaleWhereUniqueInput>
    disconnect?: Enumerable<SaleWhereUniqueInput>
    delete?: Enumerable<SaleWhereUniqueInput>
    connect?: Enumerable<SaleWhereUniqueInput>
    update?: Enumerable<SaleUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<SaleUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<SaleScalarWhereInput>
  }

  export type PriceTableUpdateManyWithoutCompanyInput = {
    create?: XOR<Enumerable<PriceTableCreateWithoutCompanyInput>, Enumerable<PriceTableUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<PriceTableCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<PriceTableUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: PriceTableCreateManyCompanyInputEnvelope
    set?: Enumerable<PriceTableWhereUniqueInput>
    disconnect?: Enumerable<PriceTableWhereUniqueInput>
    delete?: Enumerable<PriceTableWhereUniqueInput>
    connect?: Enumerable<PriceTableWhereUniqueInput>
    update?: Enumerable<PriceTableUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<PriceTableUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<PriceTableScalarWhereInput>
  }

  export type ProductUpdateManyWithoutCompanyInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCompanyInput>, Enumerable<ProductUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: ProductCreateManyCompanyInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type UserUpdateManyWithoutCompanyInput = {
    create?: XOR<Enumerable<UserCreateWithoutCompanyInput>, Enumerable<UserUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type CompanyParamsUncheckedUpdateManyWithoutCompanyInput = {
    create?: XOR<Enumerable<CompanyParamsCreateWithoutCompanyInput>, Enumerable<CompanyParamsUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<CompanyParamsCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<CompanyParamsUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: CompanyParamsCreateManyCompanyInputEnvelope
    set?: Enumerable<CompanyParamsWhereUniqueInput>
    disconnect?: Enumerable<CompanyParamsWhereUniqueInput>
    delete?: Enumerable<CompanyParamsWhereUniqueInput>
    connect?: Enumerable<CompanyParamsWhereUniqueInput>
    update?: Enumerable<CompanyParamsUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<CompanyParamsUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<CompanyParamsScalarWhereInput>
  }

  export type ProductCategoryUncheckedUpdateManyWithoutCompanyInput = {
    create?: XOR<Enumerable<ProductCategoryCreateWithoutCompanyInput>, Enumerable<ProductCategoryUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<ProductCategoryCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<ProductCategoryUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: ProductCategoryCreateManyCompanyInputEnvelope
    set?: Enumerable<ProductCategoryWhereUniqueInput>
    disconnect?: Enumerable<ProductCategoryWhereUniqueInput>
    delete?: Enumerable<ProductCategoryWhereUniqueInput>
    connect?: Enumerable<ProductCategoryWhereUniqueInput>
    update?: Enumerable<ProductCategoryUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<ProductCategoryUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<ProductCategoryScalarWhereInput>
  }

  export type SaleUncheckedUpdateManyWithoutCompanyInput = {
    create?: XOR<Enumerable<SaleCreateWithoutCompanyInput>, Enumerable<SaleUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<SaleCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<SaleUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: SaleCreateManyCompanyInputEnvelope
    set?: Enumerable<SaleWhereUniqueInput>
    disconnect?: Enumerable<SaleWhereUniqueInput>
    delete?: Enumerable<SaleWhereUniqueInput>
    connect?: Enumerable<SaleWhereUniqueInput>
    update?: Enumerable<SaleUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<SaleUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<SaleScalarWhereInput>
  }

  export type PriceTableUncheckedUpdateManyWithoutCompanyInput = {
    create?: XOR<Enumerable<PriceTableCreateWithoutCompanyInput>, Enumerable<PriceTableUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<PriceTableCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<PriceTableUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: PriceTableCreateManyCompanyInputEnvelope
    set?: Enumerable<PriceTableWhereUniqueInput>
    disconnect?: Enumerable<PriceTableWhereUniqueInput>
    delete?: Enumerable<PriceTableWhereUniqueInput>
    connect?: Enumerable<PriceTableWhereUniqueInput>
    update?: Enumerable<PriceTableUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<PriceTableUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<PriceTableScalarWhereInput>
  }

  export type ProductUncheckedUpdateManyWithoutCompanyInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCompanyInput>, Enumerable<ProductUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: ProductCreateManyCompanyInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutCompanyInput = {
    create?: XOR<Enumerable<UserCreateWithoutCompanyInput>, Enumerable<UserUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type CompanyCreateNestedOneWithoutCompany_paramsInput = {
    create?: XOR<CompanyCreateWithoutCompany_paramsInput, CompanyUncheckedCreateWithoutCompany_paramsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCompany_paramsInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutCompany_paramsInput = {
    create?: XOR<CompanyCreateWithoutCompany_paramsInput, CompanyUncheckedCreateWithoutCompany_paramsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCompany_paramsInput
    upsert?: CompanyUpsertWithoutCompany_paramsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<CompanyUpdateWithoutCompany_paramsInput, CompanyUncheckedUpdateWithoutCompany_paramsInput>
  }

  export type NullableEnumEnvironmentFieldUpdateOperationsInput = {
    set?: Environment | null
    unset?: boolean
  }

  export type CompanyCreateNestedOneWithoutProduct_categoryInput = {
    create?: XOR<CompanyCreateWithoutProduct_categoryInput, CompanyUncheckedCreateWithoutProduct_categoryInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProduct_categoryInput
    connect?: CompanyWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutProduct_categoryInput = {
    create?: XOR<Enumerable<ProductCreateWithoutProduct_categoryInput>, Enumerable<ProductUncheckedCreateWithoutProduct_categoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutProduct_categoryInput>
    createMany?: ProductCreateManyProduct_categoryInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ProductUncheckedCreateNestedManyWithoutProduct_categoryInput = {
    create?: XOR<Enumerable<ProductCreateWithoutProduct_categoryInput>, Enumerable<ProductUncheckedCreateWithoutProduct_categoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutProduct_categoryInput>
    createMany?: ProductCreateManyProduct_categoryInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type CompanyUpdateOneRequiredWithoutProduct_categoryInput = {
    create?: XOR<CompanyCreateWithoutProduct_categoryInput, CompanyUncheckedCreateWithoutProduct_categoryInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProduct_categoryInput
    upsert?: CompanyUpsertWithoutProduct_categoryInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<CompanyUpdateWithoutProduct_categoryInput, CompanyUncheckedUpdateWithoutProduct_categoryInput>
  }

  export type EnumProductTypeFieldUpdateOperationsInput = {
    set?: ProductType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductUpdateManyWithoutProduct_categoryInput = {
    create?: XOR<Enumerable<ProductCreateWithoutProduct_categoryInput>, Enumerable<ProductUncheckedCreateWithoutProduct_categoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutProduct_categoryInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutProduct_categoryInput>
    createMany?: ProductCreateManyProduct_categoryInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutProduct_categoryInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutProduct_categoryInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type ProductUncheckedUpdateManyWithoutProduct_categoryInput = {
    create?: XOR<Enumerable<ProductCreateWithoutProduct_categoryInput>, Enumerable<ProductUncheckedCreateWithoutProduct_categoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutProduct_categoryInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutProduct_categoryInput>
    createMany?: ProductCreateManyProduct_categoryInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutProduct_categoryInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutProduct_categoryInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type ProductCategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductsInput
    connect?: ProductCategoryWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutProductsInput = {
    create?: XOR<CompanyCreateWithoutProductsInput, CompanyUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProductsInput
    connect?: CompanyWhereUniqueInput
  }

  export type ProductComboCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductComboCreateWithoutProductInput>, Enumerable<ProductComboUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductComboCreateOrConnectWithoutProductInput>
    createMany?: ProductComboCreateManyProductInputEnvelope
    connect?: Enumerable<ProductComboWhereUniqueInput>
  }

  export type ConfigProductExceptionCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ConfigProductExceptionCreateWithoutProductInput>, Enumerable<ConfigProductExceptionUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ConfigProductExceptionCreateOrConnectWithoutProductInput>
    createMany?: ConfigProductExceptionCreateManyProductInputEnvelope
    connect?: Enumerable<ConfigProductExceptionWhereUniqueInput>
  }

  export type ProductTotalSalesCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductTotalSalesCreateWithoutProductInput>, Enumerable<ProductTotalSalesUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductTotalSalesCreateOrConnectWithoutProductInput>
    createMany?: ProductTotalSalesCreateManyProductInputEnvelope
    connect?: Enumerable<ProductTotalSalesWhereUniqueInput>
  }

  export type ProductComboCreateNestedManyWithoutItemInput = {
    create?: XOR<Enumerable<ProductComboCreateWithoutItemInput>, Enumerable<ProductComboUncheckedCreateWithoutItemInput>>
    connectOrCreate?: Enumerable<ProductComboCreateOrConnectWithoutItemInput>
    createMany?: ProductComboCreateManyItemInputEnvelope
    connect?: Enumerable<ProductComboWhereUniqueInput>
  }

  export type ItemSalesCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ItemSalesCreateWithoutProductInput>, Enumerable<ItemSalesUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ItemSalesCreateOrConnectWithoutProductInput>
    createMany?: ItemSalesCreateManyProductInputEnvelope
    connect?: Enumerable<ItemSalesWhereUniqueInput>
  }

  export type ProductPricesTableCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductPricesTableCreateWithoutProductInput>, Enumerable<ProductPricesTableUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductPricesTableCreateOrConnectWithoutProductInput>
    createMany?: ProductPricesTableCreateManyProductInputEnvelope
    connect?: Enumerable<ProductPricesTableWhereUniqueInput>
  }

  export type ProductComboUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductComboCreateWithoutProductInput>, Enumerable<ProductComboUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductComboCreateOrConnectWithoutProductInput>
    createMany?: ProductComboCreateManyProductInputEnvelope
    connect?: Enumerable<ProductComboWhereUniqueInput>
  }

  export type ConfigProductExceptionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ConfigProductExceptionCreateWithoutProductInput>, Enumerable<ConfigProductExceptionUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ConfigProductExceptionCreateOrConnectWithoutProductInput>
    createMany?: ConfigProductExceptionCreateManyProductInputEnvelope
    connect?: Enumerable<ConfigProductExceptionWhereUniqueInput>
  }

  export type ProductTotalSalesUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductTotalSalesCreateWithoutProductInput>, Enumerable<ProductTotalSalesUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductTotalSalesCreateOrConnectWithoutProductInput>
    createMany?: ProductTotalSalesCreateManyProductInputEnvelope
    connect?: Enumerable<ProductTotalSalesWhereUniqueInput>
  }

  export type ProductComboUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<Enumerable<ProductComboCreateWithoutItemInput>, Enumerable<ProductComboUncheckedCreateWithoutItemInput>>
    connectOrCreate?: Enumerable<ProductComboCreateOrConnectWithoutItemInput>
    createMany?: ProductComboCreateManyItemInputEnvelope
    connect?: Enumerable<ProductComboWhereUniqueInput>
  }

  export type ItemSalesUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ItemSalesCreateWithoutProductInput>, Enumerable<ItemSalesUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ItemSalesCreateOrConnectWithoutProductInput>
    createMany?: ItemSalesCreateManyProductInputEnvelope
    connect?: Enumerable<ItemSalesWhereUniqueInput>
  }

  export type ProductPricesTableUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductPricesTableCreateWithoutProductInput>, Enumerable<ProductPricesTableUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductPricesTableCreateOrConnectWithoutProductInput>
    createMany?: ProductPricesTableCreateManyProductInputEnvelope
    connect?: Enumerable<ProductPricesTableWhereUniqueInput>
  }

  export type ProductCategoryUpdateOneRequiredWithoutProductsInput = {
    create?: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductsInput
    upsert?: ProductCategoryUpsertWithoutProductsInput
    connect?: ProductCategoryWhereUniqueInput
    update?: XOR<ProductCategoryUpdateWithoutProductsInput, ProductCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CompanyUpdateOneRequiredWithoutProductsInput = {
    create?: XOR<CompanyCreateWithoutProductsInput, CompanyUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProductsInput
    upsert?: CompanyUpsertWithoutProductsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<CompanyUpdateWithoutProductsInput, CompanyUncheckedUpdateWithoutProductsInput>
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
    unset?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type ProductComboUpdateManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductComboCreateWithoutProductInput>, Enumerable<ProductComboUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductComboCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductComboUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductComboCreateManyProductInputEnvelope
    set?: Enumerable<ProductComboWhereUniqueInput>
    disconnect?: Enumerable<ProductComboWhereUniqueInput>
    delete?: Enumerable<ProductComboWhereUniqueInput>
    connect?: Enumerable<ProductComboWhereUniqueInput>
    update?: Enumerable<ProductComboUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductComboUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductComboScalarWhereInput>
  }

  export type ConfigProductExceptionUpdateManyWithoutProductInput = {
    create?: XOR<Enumerable<ConfigProductExceptionCreateWithoutProductInput>, Enumerable<ConfigProductExceptionUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ConfigProductExceptionCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ConfigProductExceptionUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ConfigProductExceptionCreateManyProductInputEnvelope
    set?: Enumerable<ConfigProductExceptionWhereUniqueInput>
    disconnect?: Enumerable<ConfigProductExceptionWhereUniqueInput>
    delete?: Enumerable<ConfigProductExceptionWhereUniqueInput>
    connect?: Enumerable<ConfigProductExceptionWhereUniqueInput>
    update?: Enumerable<ConfigProductExceptionUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ConfigProductExceptionUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ConfigProductExceptionScalarWhereInput>
  }

  export type ProductTotalSalesUpdateManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductTotalSalesCreateWithoutProductInput>, Enumerable<ProductTotalSalesUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductTotalSalesCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductTotalSalesUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductTotalSalesCreateManyProductInputEnvelope
    set?: Enumerable<ProductTotalSalesWhereUniqueInput>
    disconnect?: Enumerable<ProductTotalSalesWhereUniqueInput>
    delete?: Enumerable<ProductTotalSalesWhereUniqueInput>
    connect?: Enumerable<ProductTotalSalesWhereUniqueInput>
    update?: Enumerable<ProductTotalSalesUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductTotalSalesUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductTotalSalesScalarWhereInput>
  }

  export type ProductComboUpdateManyWithoutItemInput = {
    create?: XOR<Enumerable<ProductComboCreateWithoutItemInput>, Enumerable<ProductComboUncheckedCreateWithoutItemInput>>
    connectOrCreate?: Enumerable<ProductComboCreateOrConnectWithoutItemInput>
    upsert?: Enumerable<ProductComboUpsertWithWhereUniqueWithoutItemInput>
    createMany?: ProductComboCreateManyItemInputEnvelope
    set?: Enumerable<ProductComboWhereUniqueInput>
    disconnect?: Enumerable<ProductComboWhereUniqueInput>
    delete?: Enumerable<ProductComboWhereUniqueInput>
    connect?: Enumerable<ProductComboWhereUniqueInput>
    update?: Enumerable<ProductComboUpdateWithWhereUniqueWithoutItemInput>
    updateMany?: Enumerable<ProductComboUpdateManyWithWhereWithoutItemInput>
    deleteMany?: Enumerable<ProductComboScalarWhereInput>
  }

  export type ItemSalesUpdateManyWithoutProductInput = {
    create?: XOR<Enumerable<ItemSalesCreateWithoutProductInput>, Enumerable<ItemSalesUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ItemSalesCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ItemSalesUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ItemSalesCreateManyProductInputEnvelope
    set?: Enumerable<ItemSalesWhereUniqueInput>
    disconnect?: Enumerable<ItemSalesWhereUniqueInput>
    delete?: Enumerable<ItemSalesWhereUniqueInput>
    connect?: Enumerable<ItemSalesWhereUniqueInput>
    update?: Enumerable<ItemSalesUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ItemSalesUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ItemSalesScalarWhereInput>
  }

  export type ProductPricesTableUpdateManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductPricesTableCreateWithoutProductInput>, Enumerable<ProductPricesTableUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductPricesTableCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductPricesTableUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductPricesTableCreateManyProductInputEnvelope
    set?: Enumerable<ProductPricesTableWhereUniqueInput>
    disconnect?: Enumerable<ProductPricesTableWhereUniqueInput>
    delete?: Enumerable<ProductPricesTableWhereUniqueInput>
    connect?: Enumerable<ProductPricesTableWhereUniqueInput>
    update?: Enumerable<ProductPricesTableUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductPricesTableUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductPricesTableScalarWhereInput>
  }

  export type ProductComboUncheckedUpdateManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductComboCreateWithoutProductInput>, Enumerable<ProductComboUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductComboCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductComboUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductComboCreateManyProductInputEnvelope
    set?: Enumerable<ProductComboWhereUniqueInput>
    disconnect?: Enumerable<ProductComboWhereUniqueInput>
    delete?: Enumerable<ProductComboWhereUniqueInput>
    connect?: Enumerable<ProductComboWhereUniqueInput>
    update?: Enumerable<ProductComboUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductComboUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductComboScalarWhereInput>
  }

  export type ConfigProductExceptionUncheckedUpdateManyWithoutProductInput = {
    create?: XOR<Enumerable<ConfigProductExceptionCreateWithoutProductInput>, Enumerable<ConfigProductExceptionUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ConfigProductExceptionCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ConfigProductExceptionUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ConfigProductExceptionCreateManyProductInputEnvelope
    set?: Enumerable<ConfigProductExceptionWhereUniqueInput>
    disconnect?: Enumerable<ConfigProductExceptionWhereUniqueInput>
    delete?: Enumerable<ConfigProductExceptionWhereUniqueInput>
    connect?: Enumerable<ConfigProductExceptionWhereUniqueInput>
    update?: Enumerable<ConfigProductExceptionUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ConfigProductExceptionUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ConfigProductExceptionScalarWhereInput>
  }

  export type ProductTotalSalesUncheckedUpdateManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductTotalSalesCreateWithoutProductInput>, Enumerable<ProductTotalSalesUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductTotalSalesCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductTotalSalesUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductTotalSalesCreateManyProductInputEnvelope
    set?: Enumerable<ProductTotalSalesWhereUniqueInput>
    disconnect?: Enumerable<ProductTotalSalesWhereUniqueInput>
    delete?: Enumerable<ProductTotalSalesWhereUniqueInput>
    connect?: Enumerable<ProductTotalSalesWhereUniqueInput>
    update?: Enumerable<ProductTotalSalesUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductTotalSalesUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductTotalSalesScalarWhereInput>
  }

  export type ProductComboUncheckedUpdateManyWithoutItemInput = {
    create?: XOR<Enumerable<ProductComboCreateWithoutItemInput>, Enumerable<ProductComboUncheckedCreateWithoutItemInput>>
    connectOrCreate?: Enumerable<ProductComboCreateOrConnectWithoutItemInput>
    upsert?: Enumerable<ProductComboUpsertWithWhereUniqueWithoutItemInput>
    createMany?: ProductComboCreateManyItemInputEnvelope
    set?: Enumerable<ProductComboWhereUniqueInput>
    disconnect?: Enumerable<ProductComboWhereUniqueInput>
    delete?: Enumerable<ProductComboWhereUniqueInput>
    connect?: Enumerable<ProductComboWhereUniqueInput>
    update?: Enumerable<ProductComboUpdateWithWhereUniqueWithoutItemInput>
    updateMany?: Enumerable<ProductComboUpdateManyWithWhereWithoutItemInput>
    deleteMany?: Enumerable<ProductComboScalarWhereInput>
  }

  export type ItemSalesUncheckedUpdateManyWithoutProductInput = {
    create?: XOR<Enumerable<ItemSalesCreateWithoutProductInput>, Enumerable<ItemSalesUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ItemSalesCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ItemSalesUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ItemSalesCreateManyProductInputEnvelope
    set?: Enumerable<ItemSalesWhereUniqueInput>
    disconnect?: Enumerable<ItemSalesWhereUniqueInput>
    delete?: Enumerable<ItemSalesWhereUniqueInput>
    connect?: Enumerable<ItemSalesWhereUniqueInput>
    update?: Enumerable<ItemSalesUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ItemSalesUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ItemSalesScalarWhereInput>
  }

  export type ProductPricesTableUncheckedUpdateManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductPricesTableCreateWithoutProductInput>, Enumerable<ProductPricesTableUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductPricesTableCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductPricesTableUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductPricesTableCreateManyProductInputEnvelope
    set?: Enumerable<ProductPricesTableWhereUniqueInput>
    disconnect?: Enumerable<ProductPricesTableWhereUniqueInput>
    delete?: Enumerable<ProductPricesTableWhereUniqueInput>
    connect?: Enumerable<ProductPricesTableWhereUniqueInput>
    update?: Enumerable<ProductPricesTableUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductPricesTableUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductPricesTableScalarWhereInput>
  }

  export type SaleCreateNestedOneWithoutItemsInput = {
    create?: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutItemsInput
    connect?: SaleWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutSales_itemInput = {
    create?: XOR<ProductCreateWithoutSales_itemInput, ProductUncheckedCreateWithoutSales_itemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSales_itemInput
    connect?: ProductWhereUniqueInput
  }

  export type SaleUpdateOneRequiredWithoutItemsInput = {
    create?: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutItemsInput
    upsert?: SaleUpsertWithoutItemsInput
    connect?: SaleWhereUniqueInput
    update?: XOR<SaleUpdateWithoutItemsInput, SaleUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutSales_itemInput = {
    create?: XOR<ProductCreateWithoutSales_itemInput, ProductUncheckedCreateWithoutSales_itemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSales_itemInput
    upsert?: ProductUpsertWithoutSales_itemInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutSales_itemInput, ProductUncheckedUpdateWithoutSales_itemInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductCreateNestedOneWithoutItemsInput = {
    create?: XOR<ProductCreateWithoutItemsInput, ProductUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutProduct_itemInput = {
    create?: XOR<ProductCreateWithoutProduct_itemInput, ProductUncheckedCreateWithoutProduct_itemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_itemInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutItemsInput = {
    create?: XOR<ProductCreateWithoutItemsInput, ProductUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutItemsInput
    upsert?: ProductUpsertWithoutItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutItemsInput, ProductUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutProduct_itemInput = {
    create?: XOR<ProductCreateWithoutProduct_itemInput, ProductUncheckedCreateWithoutProduct_itemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_itemInput
    upsert?: ProductUpsertWithoutProduct_itemInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutProduct_itemInput, ProductUncheckedUpdateWithoutProduct_itemInput>
  }

  export type ProductCreateNestedOneWithoutConfig_product_exeptionInput = {
    create?: XOR<ProductCreateWithoutConfig_product_exeptionInput, ProductUncheckedCreateWithoutConfig_product_exeptionInput>
    connectOrCreate?: ProductCreateOrConnectWithoutConfig_product_exeptionInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutConfig_product_exeptionInput = {
    create?: XOR<ProductCreateWithoutConfig_product_exeptionInput, ProductUncheckedCreateWithoutConfig_product_exeptionInput>
    connectOrCreate?: ProductCreateOrConnectWithoutConfig_product_exeptionInput
    upsert?: ProductUpsertWithoutConfig_product_exeptionInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutConfig_product_exeptionInput, ProductUncheckedUpdateWithoutConfig_product_exeptionInput>
  }

  export type EnumTypeActionExceptionProductFieldUpdateOperationsInput = {
    set?: TypeActionExceptionProduct
  }

  export type ProductCreateNestedOneWithoutTotal_saleInput = {
    create?: XOR<ProductCreateWithoutTotal_saleInput, ProductUncheckedCreateWithoutTotal_saleInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTotal_saleInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutTotal_saleInput = {
    create?: XOR<ProductCreateWithoutTotal_saleInput, ProductUncheckedCreateWithoutTotal_saleInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTotal_saleInput
    upsert?: ProductUpsertWithoutTotal_saleInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutTotal_saleInput, ProductUncheckedUpdateWithoutTotal_saleInput>
  }

  export type CompanyCreateNestedOneWithoutPrice_tablesInput = {
    create?: XOR<CompanyCreateWithoutPrice_tablesInput, CompanyUncheckedCreateWithoutPrice_tablesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutPrice_tablesInput
    connect?: CompanyWhereUniqueInput
  }

  export type ProductPricesTableCreateNestedManyWithoutPrice_tableInput = {
    create?: XOR<Enumerable<ProductPricesTableCreateWithoutPrice_tableInput>, Enumerable<ProductPricesTableUncheckedCreateWithoutPrice_tableInput>>
    connectOrCreate?: Enumerable<ProductPricesTableCreateOrConnectWithoutPrice_tableInput>
    createMany?: ProductPricesTableCreateManyPrice_tableInputEnvelope
    connect?: Enumerable<ProductPricesTableWhereUniqueInput>
  }

  export type ProductPricesTableUncheckedCreateNestedManyWithoutPrice_tableInput = {
    create?: XOR<Enumerable<ProductPricesTableCreateWithoutPrice_tableInput>, Enumerable<ProductPricesTableUncheckedCreateWithoutPrice_tableInput>>
    connectOrCreate?: Enumerable<ProductPricesTableCreateOrConnectWithoutPrice_tableInput>
    createMany?: ProductPricesTableCreateManyPrice_tableInputEnvelope
    connect?: Enumerable<ProductPricesTableWhereUniqueInput>
  }

  export type CompanyUpdateOneWithoutPrice_tablesInput = {
    create?: XOR<CompanyCreateWithoutPrice_tablesInput, CompanyUncheckedCreateWithoutPrice_tablesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutPrice_tablesInput
    upsert?: CompanyUpsertWithoutPrice_tablesInput
    disconnect?: boolean
    delete?: boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<CompanyUpdateWithoutPrice_tablesInput, CompanyUncheckedUpdateWithoutPrice_tablesInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type ProductPricesTableUpdateManyWithoutPrice_tableInput = {
    create?: XOR<Enumerable<ProductPricesTableCreateWithoutPrice_tableInput>, Enumerable<ProductPricesTableUncheckedCreateWithoutPrice_tableInput>>
    connectOrCreate?: Enumerable<ProductPricesTableCreateOrConnectWithoutPrice_tableInput>
    upsert?: Enumerable<ProductPricesTableUpsertWithWhereUniqueWithoutPrice_tableInput>
    createMany?: ProductPricesTableCreateManyPrice_tableInputEnvelope
    set?: Enumerable<ProductPricesTableWhereUniqueInput>
    disconnect?: Enumerable<ProductPricesTableWhereUniqueInput>
    delete?: Enumerable<ProductPricesTableWhereUniqueInput>
    connect?: Enumerable<ProductPricesTableWhereUniqueInput>
    update?: Enumerable<ProductPricesTableUpdateWithWhereUniqueWithoutPrice_tableInput>
    updateMany?: Enumerable<ProductPricesTableUpdateManyWithWhereWithoutPrice_tableInput>
    deleteMany?: Enumerable<ProductPricesTableScalarWhereInput>
  }

  export type ProductPricesTableUncheckedUpdateManyWithoutPrice_tableInput = {
    create?: XOR<Enumerable<ProductPricesTableCreateWithoutPrice_tableInput>, Enumerable<ProductPricesTableUncheckedCreateWithoutPrice_tableInput>>
    connectOrCreate?: Enumerable<ProductPricesTableCreateOrConnectWithoutPrice_tableInput>
    upsert?: Enumerable<ProductPricesTableUpsertWithWhereUniqueWithoutPrice_tableInput>
    createMany?: ProductPricesTableCreateManyPrice_tableInputEnvelope
    set?: Enumerable<ProductPricesTableWhereUniqueInput>
    disconnect?: Enumerable<ProductPricesTableWhereUniqueInput>
    delete?: Enumerable<ProductPricesTableWhereUniqueInput>
    connect?: Enumerable<ProductPricesTableWhereUniqueInput>
    update?: Enumerable<ProductPricesTableUpdateWithWhereUniqueWithoutPrice_tableInput>
    updateMany?: Enumerable<ProductPricesTableUpdateManyWithWhereWithoutPrice_tableInput>
    deleteMany?: Enumerable<ProductPricesTableScalarWhereInput>
  }

  export type PriceTableCreateNestedOneWithoutProductsInput = {
    create?: XOR<PriceTableCreateWithoutProductsInput, PriceTableUncheckedCreateWithoutProductsInput>
    connectOrCreate?: PriceTableCreateOrConnectWithoutProductsInput
    connect?: PriceTableWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutPrice_tableInput = {
    create?: XOR<ProductCreateWithoutPrice_tableInput, ProductUncheckedCreateWithoutPrice_tableInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPrice_tableInput
    connect?: ProductWhereUniqueInput
  }

  export type PriceTableUpdateOneWithoutProductsInput = {
    create?: XOR<PriceTableCreateWithoutProductsInput, PriceTableUncheckedCreateWithoutProductsInput>
    connectOrCreate?: PriceTableCreateOrConnectWithoutProductsInput
    upsert?: PriceTableUpsertWithoutProductsInput
    disconnect?: boolean
    delete?: boolean
    connect?: PriceTableWhereUniqueInput
    update?: XOR<PriceTableUpdateWithoutProductsInput, PriceTableUncheckedUpdateWithoutProductsInput>
  }

  export type ProductUpdateOneWithoutPrice_tableInput = {
    create?: XOR<ProductCreateWithoutPrice_tableInput, ProductUncheckedCreateWithoutPrice_tableInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPrice_tableInput
    upsert?: ProductUpsertWithoutPrice_tableInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutPrice_tableInput, ProductUncheckedUpdateWithoutPrice_tableInput>
  }

  export type CompanyCreateNestedOneWithoutSalesInput = {
    create?: XOR<CompanyCreateWithoutSalesInput, CompanyUncheckedCreateWithoutSalesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutSalesInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSaleInput = {
    create?: XOR<UserCreateWithoutSaleInput, UserUncheckedCreateWithoutSaleInput>
    connectOrCreate?: UserCreateOrConnectWithoutSaleInput
    connect?: UserWhereUniqueInput
  }

  export type ItemSalesCreateNestedManyWithoutSalesInput = {
    create?: XOR<Enumerable<ItemSalesCreateWithoutSalesInput>, Enumerable<ItemSalesUncheckedCreateWithoutSalesInput>>
    connectOrCreate?: Enumerable<ItemSalesCreateOrConnectWithoutSalesInput>
    createMany?: ItemSalesCreateManySalesInputEnvelope
    connect?: Enumerable<ItemSalesWhereUniqueInput>
  }

  export type SalesHistoryCreateNestedManyWithoutSaleInput = {
    create?: XOR<Enumerable<SalesHistoryCreateWithoutSaleInput>, Enumerable<SalesHistoryUncheckedCreateWithoutSaleInput>>
    connectOrCreate?: Enumerable<SalesHistoryCreateOrConnectWithoutSaleInput>
    createMany?: SalesHistoryCreateManySaleInputEnvelope
    connect?: Enumerable<SalesHistoryWhereUniqueInput>
  }

  export type ItemSalesUncheckedCreateNestedManyWithoutSalesInput = {
    create?: XOR<Enumerable<ItemSalesCreateWithoutSalesInput>, Enumerable<ItemSalesUncheckedCreateWithoutSalesInput>>
    connectOrCreate?: Enumerable<ItemSalesCreateOrConnectWithoutSalesInput>
    createMany?: ItemSalesCreateManySalesInputEnvelope
    connect?: Enumerable<ItemSalesWhereUniqueInput>
  }

  export type SalesHistoryUncheckedCreateNestedManyWithoutSaleInput = {
    create?: XOR<Enumerable<SalesHistoryCreateWithoutSaleInput>, Enumerable<SalesHistoryUncheckedCreateWithoutSaleInput>>
    connectOrCreate?: Enumerable<SalesHistoryCreateOrConnectWithoutSaleInput>
    createMany?: SalesHistoryCreateManySaleInputEnvelope
    connect?: Enumerable<SalesHistoryWhereUniqueInput>
  }

  export type CompanyUpdateOneWithoutSalesInput = {
    create?: XOR<CompanyCreateWithoutSalesInput, CompanyUncheckedCreateWithoutSalesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutSalesInput
    upsert?: CompanyUpsertWithoutSalesInput
    disconnect?: boolean
    delete?: boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<CompanyUpdateWithoutSalesInput, CompanyUncheckedUpdateWithoutSalesInput>
  }

  export type UserUpdateOneWithoutSaleInput = {
    create?: XOR<UserCreateWithoutSaleInput, UserUncheckedCreateWithoutSaleInput>
    connectOrCreate?: UserCreateOrConnectWithoutSaleInput
    upsert?: UserUpsertWithoutSaleInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSaleInput, UserUncheckedUpdateWithoutSaleInput>
  }

  export type EnumSaleStatusFieldUpdateOperationsInput = {
    set?: SaleStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type ItemSalesUpdateManyWithoutSalesInput = {
    create?: XOR<Enumerable<ItemSalesCreateWithoutSalesInput>, Enumerable<ItemSalesUncheckedCreateWithoutSalesInput>>
    connectOrCreate?: Enumerable<ItemSalesCreateOrConnectWithoutSalesInput>
    upsert?: Enumerable<ItemSalesUpsertWithWhereUniqueWithoutSalesInput>
    createMany?: ItemSalesCreateManySalesInputEnvelope
    set?: Enumerable<ItemSalesWhereUniqueInput>
    disconnect?: Enumerable<ItemSalesWhereUniqueInput>
    delete?: Enumerable<ItemSalesWhereUniqueInput>
    connect?: Enumerable<ItemSalesWhereUniqueInput>
    update?: Enumerable<ItemSalesUpdateWithWhereUniqueWithoutSalesInput>
    updateMany?: Enumerable<ItemSalesUpdateManyWithWhereWithoutSalesInput>
    deleteMany?: Enumerable<ItemSalesScalarWhereInput>
  }

  export type SalesHistoryUpdateManyWithoutSaleInput = {
    create?: XOR<Enumerable<SalesHistoryCreateWithoutSaleInput>, Enumerable<SalesHistoryUncheckedCreateWithoutSaleInput>>
    connectOrCreate?: Enumerable<SalesHistoryCreateOrConnectWithoutSaleInput>
    upsert?: Enumerable<SalesHistoryUpsertWithWhereUniqueWithoutSaleInput>
    createMany?: SalesHistoryCreateManySaleInputEnvelope
    set?: Enumerable<SalesHistoryWhereUniqueInput>
    disconnect?: Enumerable<SalesHistoryWhereUniqueInput>
    delete?: Enumerable<SalesHistoryWhereUniqueInput>
    connect?: Enumerable<SalesHistoryWhereUniqueInput>
    update?: Enumerable<SalesHistoryUpdateWithWhereUniqueWithoutSaleInput>
    updateMany?: Enumerable<SalesHistoryUpdateManyWithWhereWithoutSaleInput>
    deleteMany?: Enumerable<SalesHistoryScalarWhereInput>
  }

  export type ItemSalesUncheckedUpdateManyWithoutSalesInput = {
    create?: XOR<Enumerable<ItemSalesCreateWithoutSalesInput>, Enumerable<ItemSalesUncheckedCreateWithoutSalesInput>>
    connectOrCreate?: Enumerable<ItemSalesCreateOrConnectWithoutSalesInput>
    upsert?: Enumerable<ItemSalesUpsertWithWhereUniqueWithoutSalesInput>
    createMany?: ItemSalesCreateManySalesInputEnvelope
    set?: Enumerable<ItemSalesWhereUniqueInput>
    disconnect?: Enumerable<ItemSalesWhereUniqueInput>
    delete?: Enumerable<ItemSalesWhereUniqueInput>
    connect?: Enumerable<ItemSalesWhereUniqueInput>
    update?: Enumerable<ItemSalesUpdateWithWhereUniqueWithoutSalesInput>
    updateMany?: Enumerable<ItemSalesUpdateManyWithWhereWithoutSalesInput>
    deleteMany?: Enumerable<ItemSalesScalarWhereInput>
  }

  export type SalesHistoryUncheckedUpdateManyWithoutSaleInput = {
    create?: XOR<Enumerable<SalesHistoryCreateWithoutSaleInput>, Enumerable<SalesHistoryUncheckedCreateWithoutSaleInput>>
    connectOrCreate?: Enumerable<SalesHistoryCreateOrConnectWithoutSaleInput>
    upsert?: Enumerable<SalesHistoryUpsertWithWhereUniqueWithoutSaleInput>
    createMany?: SalesHistoryCreateManySaleInputEnvelope
    set?: Enumerable<SalesHistoryWhereUniqueInput>
    disconnect?: Enumerable<SalesHistoryWhereUniqueInput>
    delete?: Enumerable<SalesHistoryWhereUniqueInput>
    connect?: Enumerable<SalesHistoryWhereUniqueInput>
    update?: Enumerable<SalesHistoryUpdateWithWhereUniqueWithoutSaleInput>
    updateMany?: Enumerable<SalesHistoryUpdateManyWithWhereWithoutSaleInput>
    deleteMany?: Enumerable<SalesHistoryScalarWhereInput>
  }

  export type SaleCreateNestedOneWithoutHistoryInput = {
    create?: XOR<SaleCreateWithoutHistoryInput, SaleUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: SaleCreateOrConnectWithoutHistoryInput
    connect?: SaleWhereUniqueInput
  }

  export type SaleUpdateOneRequiredWithoutHistoryInput = {
    create?: XOR<SaleCreateWithoutHistoryInput, SaleUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: SaleCreateOrConnectWithoutHistoryInput
    upsert?: SaleUpsertWithoutHistoryInput
    connect?: SaleWhereUniqueInput
    update?: XOR<SaleUpdateWithoutHistoryInput, SaleUncheckedUpdateWithoutHistoryInput>
  }

  export type CompanyCreateNestedOneWithoutUsersInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    connect?: CompanyWhereUniqueInput
  }

  export type SaleCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SaleCreateWithoutUserInput>, Enumerable<SaleUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SaleCreateOrConnectWithoutUserInput>
    createMany?: SaleCreateManyUserInputEnvelope
    connect?: Enumerable<SaleWhereUniqueInput>
  }

  export type SaleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SaleCreateWithoutUserInput>, Enumerable<SaleUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SaleCreateOrConnectWithoutUserInput>
    createMany?: SaleCreateManyUserInputEnvelope
    connect?: Enumerable<SaleWhereUniqueInput>
  }

  export type CompanyUpdateOneWithoutUsersInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    upsert?: CompanyUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type NullableEnumSexFieldUpdateOperationsInput = {
    set?: Sex | null
    unset?: boolean
  }

  export type SaleUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<SaleCreateWithoutUserInput>, Enumerable<SaleUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SaleCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SaleUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SaleCreateManyUserInputEnvelope
    set?: Enumerable<SaleWhereUniqueInput>
    disconnect?: Enumerable<SaleWhereUniqueInput>
    delete?: Enumerable<SaleWhereUniqueInput>
    connect?: Enumerable<SaleWhereUniqueInput>
    update?: Enumerable<SaleUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SaleUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SaleScalarWhereInput>
  }

  export type SaleUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<SaleCreateWithoutUserInput>, Enumerable<SaleUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SaleCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SaleUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SaleCreateManyUserInputEnvelope
    set?: Enumerable<SaleWhereUniqueInput>
    disconnect?: Enumerable<SaleWhereUniqueInput>
    delete?: Enumerable<SaleWhereUniqueInput>
    connect?: Enumerable<SaleWhereUniqueInput>
    update?: Enumerable<SaleUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SaleUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SaleScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumEnvironmentNullableFilter = {
    equals?: Environment | null
    in?: Enumerable<Environment> | null
    notIn?: Enumerable<Environment> | null
    not?: NestedEnumEnvironmentNullableFilter | Environment | null
    isSet?: boolean
  }

  export type NestedEnumEnvironmentNullableWithAggregatesFilter = {
    equals?: Environment | null
    in?: Enumerable<Environment> | null
    notIn?: Enumerable<Environment> | null
    not?: NestedEnumEnvironmentNullableWithAggregatesFilter | Environment | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumEnvironmentNullableFilter
    _max?: NestedEnumEnvironmentNullableFilter
    isSet?: boolean
  }

  export type NestedEnumProductTypeFilter = {
    equals?: ProductType
    in?: Enumerable<ProductType>
    notIn?: Enumerable<ProductType>
    not?: NestedEnumProductTypeFilter | ProductType
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedEnumProductTypeWithAggregatesFilter = {
    equals?: ProductType
    in?: Enumerable<ProductType>
    notIn?: Enumerable<ProductType>
    not?: NestedEnumProductTypeWithAggregatesFilter | ProductType
    _count?: NestedIntFilter
    _min?: NestedEnumProductTypeFilter
    _max?: NestedEnumProductTypeFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
    isSet?: boolean
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    isSet?: boolean
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedEnumTypeActionExceptionProductFilter = {
    equals?: TypeActionExceptionProduct
    in?: Enumerable<TypeActionExceptionProduct>
    notIn?: Enumerable<TypeActionExceptionProduct>
    not?: NestedEnumTypeActionExceptionProductFilter | TypeActionExceptionProduct
  }

  export type NestedEnumTypeActionExceptionProductWithAggregatesFilter = {
    equals?: TypeActionExceptionProduct
    in?: Enumerable<TypeActionExceptionProduct>
    notIn?: Enumerable<TypeActionExceptionProduct>
    not?: NestedEnumTypeActionExceptionProductWithAggregatesFilter | TypeActionExceptionProduct
    _count?: NestedIntFilter
    _min?: NestedEnumTypeActionExceptionProductFilter
    _max?: NestedEnumTypeActionExceptionProductFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    isSet?: boolean
  }

  export type NestedEnumSaleStatusFilter = {
    equals?: SaleStatus
    in?: Enumerable<SaleStatus>
    notIn?: Enumerable<SaleStatus>
    not?: NestedEnumSaleStatusFilter | SaleStatus
  }

  export type NestedEnumSaleStatusWithAggregatesFilter = {
    equals?: SaleStatus
    in?: Enumerable<SaleStatus>
    notIn?: Enumerable<SaleStatus>
    not?: NestedEnumSaleStatusWithAggregatesFilter | SaleStatus
    _count?: NestedIntFilter
    _min?: NestedEnumSaleStatusFilter
    _max?: NestedEnumSaleStatusFilter
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
    isSet?: boolean
  }

  export type NestedEnumSexNullableFilter = {
    equals?: Sex | null
    in?: Enumerable<Sex> | null
    notIn?: Enumerable<Sex> | null
    not?: NestedEnumSexNullableFilter | Sex | null
    isSet?: boolean
  }

  export type NestedEnumSexNullableWithAggregatesFilter = {
    equals?: Sex | null
    in?: Enumerable<Sex> | null
    notIn?: Enumerable<Sex> | null
    not?: NestedEnumSexNullableWithAggregatesFilter | Sex | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumSexNullableFilter
    _max?: NestedEnumSexNullableFilter
    isSet?: boolean
  }

  export type CompanyParamsCreateWithoutCompanyInput = {
    id?: string
    environment?: Environment | null
    obs_email?: string | null
    obs_voucher?: string | null
    privacy_policy?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CompanyParamsUncheckedCreateWithoutCompanyInput = {
    id?: string
    environment?: Environment | null
    obs_email?: string | null
    obs_voucher?: string | null
    privacy_policy?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CompanyParamsCreateOrConnectWithoutCompanyInput = {
    where: CompanyParamsWhereUniqueInput
    create: XOR<CompanyParamsCreateWithoutCompanyInput, CompanyParamsUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyParamsCreateManyCompanyInputEnvelope = {
    data: Enumerable<CompanyParamsCreateManyCompanyInput>
  }

  export type ProductCategoryCreateWithoutCompanyInput = {
    id?: string
    product_type: ProductType
    config_type_id?: string | null
    title: string
    description: string
    url_banner?: string | null
    active?: boolean
    products?: ProductCreateNestedManyWithoutProduct_categoryInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductCategoryUncheckedCreateWithoutCompanyInput = {
    id?: string
    product_type: ProductType
    config_type_id?: string | null
    title: string
    description: string
    url_banner?: string | null
    active?: boolean
    products?: ProductUncheckedCreateNestedManyWithoutProduct_categoryInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductCategoryCreateOrConnectWithoutCompanyInput = {
    where: ProductCategoryWhereUniqueInput
    create: XOR<ProductCategoryCreateWithoutCompanyInput, ProductCategoryUncheckedCreateWithoutCompanyInput>
  }

  export type ProductCategoryCreateManyCompanyInputEnvelope = {
    data: Enumerable<ProductCategoryCreateManyCompanyInput>
  }

  export type SaleCreateWithoutCompanyInput = {
    id?: string
    user?: UserCreateNestedOneWithoutSaleInput
    session?: string | null
    status?: SaleStatus
    name: string
    last_name: string
    cellphone: string
    email: string
    cep: string
    state: string
    city: string
    address: string
    address_number?: string | null
    address_complement?: string | null
    subtotal: number
    descount_voucher?: string | null
    descount_percentage?: number | null
    descount_value?: number | null
    total: number
    items?: ItemSalesCreateNestedManyWithoutSalesInput
    history?: SalesHistoryCreateNestedManyWithoutSaleInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SaleUncheckedCreateWithoutCompanyInput = {
    id?: string
    user_id: string
    session?: string | null
    status?: SaleStatus
    name: string
    last_name: string
    cellphone: string
    email: string
    cep: string
    state: string
    city: string
    address: string
    address_number?: string | null
    address_complement?: string | null
    subtotal: number
    descount_voucher?: string | null
    descount_percentage?: number | null
    descount_value?: number | null
    total: number
    items?: ItemSalesUncheckedCreateNestedManyWithoutSalesInput
    history?: SalesHistoryUncheckedCreateNestedManyWithoutSaleInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SaleCreateOrConnectWithoutCompanyInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutCompanyInput, SaleUncheckedCreateWithoutCompanyInput>
  }

  export type SaleCreateManyCompanyInputEnvelope = {
    data: Enumerable<SaleCreateManyCompanyInput>
  }

  export type PriceTableCreateWithoutCompanyInput = {
    id?: string
    description: string
    initial_date?: Date | string | null
    final_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductPricesTableCreateNestedManyWithoutPrice_tableInput
  }

  export type PriceTableUncheckedCreateWithoutCompanyInput = {
    id?: string
    description: string
    initial_date?: Date | string | null
    final_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductPricesTableUncheckedCreateNestedManyWithoutPrice_tableInput
  }

  export type PriceTableCreateOrConnectWithoutCompanyInput = {
    where: PriceTableWhereUniqueInput
    create: XOR<PriceTableCreateWithoutCompanyInput, PriceTableUncheckedCreateWithoutCompanyInput>
  }

  export type PriceTableCreateManyCompanyInputEnvelope = {
    data: Enumerable<PriceTableCreateManyCompanyInput>
  }

  export type ProductCreateWithoutCompanyInput = {
    id?: string
    product_category: ProductCategoryCreateNestedOneWithoutProductsInput
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner?: string | null
    active?: boolean
    combo?: boolean | null
    amount_min_sale?: number | null
    amount_max_sale?: number | null
    amount_max_total_diary?: number | null
    highlighted?: boolean | null
    order_on_menu?: number | null
    for_sale?: boolean | null
    age_group?: string | null
    promotion?: boolean | null
    items?: ProductComboCreateNestedManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionCreateNestedManyWithoutProductInput
    total_sale?: ProductTotalSalesCreateNestedManyWithoutProductInput
    product_item?: ProductComboCreateNestedManyWithoutItemInput
    sales_item?: ItemSalesCreateNestedManyWithoutProductInput
    price_table?: ProductPricesTableCreateNestedManyWithoutProductInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductUncheckedCreateWithoutCompanyInput = {
    id?: string
    product_category_id: string
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner?: string | null
    active?: boolean
    combo?: boolean | null
    amount_min_sale?: number | null
    amount_max_sale?: number | null
    amount_max_total_diary?: number | null
    highlighted?: boolean | null
    order_on_menu?: number | null
    for_sale?: boolean | null
    age_group?: string | null
    promotion?: boolean | null
    items?: ProductComboUncheckedCreateNestedManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionUncheckedCreateNestedManyWithoutProductInput
    total_sale?: ProductTotalSalesUncheckedCreateNestedManyWithoutProductInput
    product_item?: ProductComboUncheckedCreateNestedManyWithoutItemInput
    sales_item?: ItemSalesUncheckedCreateNestedManyWithoutProductInput
    price_table?: ProductPricesTableUncheckedCreateNestedManyWithoutProductInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductCreateOrConnectWithoutCompanyInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput>
  }

  export type ProductCreateManyCompanyInputEnvelope = {
    data: Enumerable<ProductCreateManyCompanyInput>
  }

  export type UserCreateWithoutCompanyInput = {
    id?: string
    document?: string | null
    name: string
    last_name: string
    sex_type?: Sex | null
    birth_date?: Date | string | null
    celphone?: string | null
    email: string
    cep?: string | null
    state?: string | null
    city?: string | null
    neighborhood?: string | null
    address?: string | null
    address_number?: string | null
    address_complement?: string | null
    active?: boolean | null
    email_confirmed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    Sale?: SaleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: string
    document?: string | null
    name: string
    last_name: string
    sex_type?: Sex | null
    birth_date?: Date | string | null
    celphone?: string | null
    email: string
    cep?: string | null
    state?: string | null
    city?: string | null
    neighborhood?: string | null
    address?: string | null
    address_number?: string | null
    address_complement?: string | null
    active?: boolean | null
    email_confirmed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    Sale?: SaleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateManyCompanyInputEnvelope = {
    data: Enumerable<UserCreateManyCompanyInput>
  }

  export type CompanyParamsUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CompanyParamsWhereUniqueInput
    update: XOR<CompanyParamsUpdateWithoutCompanyInput, CompanyParamsUncheckedUpdateWithoutCompanyInput>
    create: XOR<CompanyParamsCreateWithoutCompanyInput, CompanyParamsUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyParamsUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CompanyParamsWhereUniqueInput
    data: XOR<CompanyParamsUpdateWithoutCompanyInput, CompanyParamsUncheckedUpdateWithoutCompanyInput>
  }

  export type CompanyParamsUpdateManyWithWhereWithoutCompanyInput = {
    where: CompanyParamsScalarWhereInput
    data: XOR<CompanyParamsUpdateManyMutationInput, CompanyParamsUncheckedUpdateManyWithoutCompany_paramsInput>
  }

  export type CompanyParamsScalarWhereInput = {
    AND?: Enumerable<CompanyParamsScalarWhereInput>
    OR?: Enumerable<CompanyParamsScalarWhereInput>
    NOT?: Enumerable<CompanyParamsScalarWhereInput>
    id?: StringFilter | string
    company_id?: StringFilter | string
    environment?: EnumEnvironmentNullableFilter | Environment | null
    obs_email?: StringNullableFilter | string | null
    obs_voucher?: StringNullableFilter | string | null
    privacy_policy?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type ProductCategoryUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ProductCategoryWhereUniqueInput
    update: XOR<ProductCategoryUpdateWithoutCompanyInput, ProductCategoryUncheckedUpdateWithoutCompanyInput>
    create: XOR<ProductCategoryCreateWithoutCompanyInput, ProductCategoryUncheckedCreateWithoutCompanyInput>
  }

  export type ProductCategoryUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ProductCategoryWhereUniqueInput
    data: XOR<ProductCategoryUpdateWithoutCompanyInput, ProductCategoryUncheckedUpdateWithoutCompanyInput>
  }

  export type ProductCategoryUpdateManyWithWhereWithoutCompanyInput = {
    where: ProductCategoryScalarWhereInput
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyWithoutProduct_categoryInput>
  }

  export type ProductCategoryScalarWhereInput = {
    AND?: Enumerable<ProductCategoryScalarWhereInput>
    OR?: Enumerable<ProductCategoryScalarWhereInput>
    NOT?: Enumerable<ProductCategoryScalarWhereInput>
    id?: StringFilter | string
    company_id?: StringFilter | string
    product_type?: EnumProductTypeFilter | ProductType
    config_type_id?: StringNullableFilter | string | null
    title?: StringFilter | string
    description?: StringFilter | string
    url_banner?: StringNullableFilter | string | null
    active?: BoolFilter | boolean
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type SaleUpsertWithWhereUniqueWithoutCompanyInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutCompanyInput, SaleUncheckedUpdateWithoutCompanyInput>
    create: XOR<SaleCreateWithoutCompanyInput, SaleUncheckedCreateWithoutCompanyInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutCompanyInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutCompanyInput, SaleUncheckedUpdateWithoutCompanyInput>
  }

  export type SaleUpdateManyWithWhereWithoutCompanyInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutSalesInput>
  }

  export type SaleScalarWhereInput = {
    AND?: Enumerable<SaleScalarWhereInput>
    OR?: Enumerable<SaleScalarWhereInput>
    NOT?: Enumerable<SaleScalarWhereInput>
    id?: StringFilter | string
    company_id?: StringFilter | string
    user_id?: StringFilter | string
    session?: StringNullableFilter | string | null
    status?: EnumSaleStatusFilter | SaleStatus
    name?: StringFilter | string
    last_name?: StringFilter | string
    cellphone?: StringFilter | string
    email?: StringFilter | string
    cep?: StringFilter | string
    state?: StringFilter | string
    city?: StringFilter | string
    address?: StringFilter | string
    address_number?: StringNullableFilter | string | null
    address_complement?: StringNullableFilter | string | null
    subtotal?: FloatFilter | number
    descount_voucher?: StringNullableFilter | string | null
    descount_percentage?: FloatNullableFilter | number | null
    descount_value?: FloatNullableFilter | number | null
    total?: FloatFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type PriceTableUpsertWithWhereUniqueWithoutCompanyInput = {
    where: PriceTableWhereUniqueInput
    update: XOR<PriceTableUpdateWithoutCompanyInput, PriceTableUncheckedUpdateWithoutCompanyInput>
    create: XOR<PriceTableCreateWithoutCompanyInput, PriceTableUncheckedCreateWithoutCompanyInput>
  }

  export type PriceTableUpdateWithWhereUniqueWithoutCompanyInput = {
    where: PriceTableWhereUniqueInput
    data: XOR<PriceTableUpdateWithoutCompanyInput, PriceTableUncheckedUpdateWithoutCompanyInput>
  }

  export type PriceTableUpdateManyWithWhereWithoutCompanyInput = {
    where: PriceTableScalarWhereInput
    data: XOR<PriceTableUpdateManyMutationInput, PriceTableUncheckedUpdateManyWithoutPrice_tablesInput>
  }

  export type PriceTableScalarWhereInput = {
    AND?: Enumerable<PriceTableScalarWhereInput>
    OR?: Enumerable<PriceTableScalarWhereInput>
    NOT?: Enumerable<PriceTableScalarWhereInput>
    id?: StringFilter | string
    company_id?: StringFilter | string
    description?: StringFilter | string
    initial_date?: DateTimeNullableFilter | Date | string | null
    final_date?: DateTimeNullableFilter | Date | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCompanyInput, ProductUncheckedUpdateWithoutCompanyInput>
    create: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCompanyInput, ProductUncheckedUpdateWithoutCompanyInput>
  }

  export type ProductUpdateManyWithWhereWithoutCompanyInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProductsInput>
  }

  export type ProductScalarWhereInput = {
    AND?: Enumerable<ProductScalarWhereInput>
    OR?: Enumerable<ProductScalarWhereInput>
    NOT?: Enumerable<ProductScalarWhereInput>
    id?: StringFilter | string
    product_category_id?: StringFilter | string
    company_id?: StringFilter | string
    product_type?: EnumProductTypeFilter | ProductType
    sku?: StringFilter | string
    title?: StringFilter | string
    subtitle?: StringFilter | string
    description?: StringFilter | string
    url_banner?: StringNullableFilter | string | null
    active?: BoolFilter | boolean
    combo?: BoolNullableFilter | boolean | null
    amount_min_sale?: IntNullableFilter | number | null
    amount_max_sale?: IntNullableFilter | number | null
    amount_max_total_diary?: IntNullableFilter | number | null
    highlighted?: BoolNullableFilter | boolean | null
    order_on_menu?: IntNullableFilter | number | null
    for_sale?: BoolNullableFilter | boolean | null
    age_group?: StringNullableFilter | string | null
    promotion?: BoolNullableFilter | boolean | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: StringFilter | string
    company_id?: StringFilter | string
    document?: StringNullableFilter | string | null
    name?: StringFilter | string
    last_name?: StringFilter | string
    sex_type?: EnumSexNullableFilter | Sex | null
    birth_date?: DateTimeNullableFilter | Date | string | null
    celphone?: StringNullableFilter | string | null
    email?: StringFilter | string
    cep?: StringNullableFilter | string | null
    state?: StringNullableFilter | string | null
    city?: StringNullableFilter | string | null
    neighborhood?: StringNullableFilter | string | null
    address?: StringNullableFilter | string | null
    address_number?: StringNullableFilter | string | null
    address_complement?: StringNullableFilter | string | null
    active?: BoolNullableFilter | boolean | null
    email_confirmed?: BoolNullableFilter | boolean | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type CompanyCreateWithoutCompany_paramsInput = {
    id?: string
    name: string
    fantasy_name?: string | null
    celphone1: string
    celphone2?: string | null
    email: string
    url_banner?: string | null
    url_site?: string | null
    url_facebook?: string | null
    url_instagram?: string | null
    url_linkedin?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    product_category?: ProductCategoryCreateNestedManyWithoutCompanyInput
    sales?: SaleCreateNestedManyWithoutCompanyInput
    price_tables?: PriceTableCreateNestedManyWithoutCompanyInput
    products?: ProductCreateNestedManyWithoutCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutCompany_paramsInput = {
    id?: string
    name: string
    fantasy_name?: string | null
    celphone1: string
    celphone2?: string | null
    email: string
    url_banner?: string | null
    url_site?: string | null
    url_facebook?: string | null
    url_instagram?: string | null
    url_linkedin?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    product_category?: ProductCategoryUncheckedCreateNestedManyWithoutCompanyInput
    sales?: SaleUncheckedCreateNestedManyWithoutCompanyInput
    price_tables?: PriceTableUncheckedCreateNestedManyWithoutCompanyInput
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutCompany_paramsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutCompany_paramsInput, CompanyUncheckedCreateWithoutCompany_paramsInput>
  }

  export type CompanyUpsertWithoutCompany_paramsInput = {
    update: XOR<CompanyUpdateWithoutCompany_paramsInput, CompanyUncheckedUpdateWithoutCompany_paramsInput>
    create: XOR<CompanyCreateWithoutCompany_paramsInput, CompanyUncheckedCreateWithoutCompany_paramsInput>
  }

  export type CompanyUpdateWithoutCompany_paramsInput = {
    name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: NullableStringFieldUpdateOperationsInput | string | null
    celphone1?: StringFieldUpdateOperationsInput | string
    celphone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    url_site?: NullableStringFieldUpdateOperationsInput | string | null
    url_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    url_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    url_linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_category?: ProductCategoryUpdateManyWithoutCompanyInput
    sales?: SaleUpdateManyWithoutCompanyInput
    price_tables?: PriceTableUpdateManyWithoutCompanyInput
    products?: ProductUpdateManyWithoutCompanyInput
    users?: UserUpdateManyWithoutCompanyInput
  }

  export type CompanyUncheckedUpdateWithoutCompany_paramsInput = {
    name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: NullableStringFieldUpdateOperationsInput | string | null
    celphone1?: StringFieldUpdateOperationsInput | string
    celphone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    url_site?: NullableStringFieldUpdateOperationsInput | string | null
    url_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    url_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    url_linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_category?: ProductCategoryUncheckedUpdateManyWithoutCompanyInput
    sales?: SaleUncheckedUpdateManyWithoutCompanyInput
    price_tables?: PriceTableUncheckedUpdateManyWithoutCompanyInput
    products?: ProductUncheckedUpdateManyWithoutCompanyInput
    users?: UserUncheckedUpdateManyWithoutCompanyInput
  }

  export type CompanyCreateWithoutProduct_categoryInput = {
    id?: string
    name: string
    fantasy_name?: string | null
    celphone1: string
    celphone2?: string | null
    email: string
    url_banner?: string | null
    url_site?: string | null
    url_facebook?: string | null
    url_instagram?: string | null
    url_linkedin?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    company_params?: CompanyParamsCreateNestedManyWithoutCompanyInput
    sales?: SaleCreateNestedManyWithoutCompanyInput
    price_tables?: PriceTableCreateNestedManyWithoutCompanyInput
    products?: ProductCreateNestedManyWithoutCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutProduct_categoryInput = {
    id?: string
    name: string
    fantasy_name?: string | null
    celphone1: string
    celphone2?: string | null
    email: string
    url_banner?: string | null
    url_site?: string | null
    url_facebook?: string | null
    url_instagram?: string | null
    url_linkedin?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    company_params?: CompanyParamsUncheckedCreateNestedManyWithoutCompanyInput
    sales?: SaleUncheckedCreateNestedManyWithoutCompanyInput
    price_tables?: PriceTableUncheckedCreateNestedManyWithoutCompanyInput
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutProduct_categoryInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutProduct_categoryInput, CompanyUncheckedCreateWithoutProduct_categoryInput>
  }

  export type ProductCreateWithoutProduct_categoryInput = {
    id?: string
    company: CompanyCreateNestedOneWithoutProductsInput
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner?: string | null
    active?: boolean
    combo?: boolean | null
    amount_min_sale?: number | null
    amount_max_sale?: number | null
    amount_max_total_diary?: number | null
    highlighted?: boolean | null
    order_on_menu?: number | null
    for_sale?: boolean | null
    age_group?: string | null
    promotion?: boolean | null
    items?: ProductComboCreateNestedManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionCreateNestedManyWithoutProductInput
    total_sale?: ProductTotalSalesCreateNestedManyWithoutProductInput
    product_item?: ProductComboCreateNestedManyWithoutItemInput
    sales_item?: ItemSalesCreateNestedManyWithoutProductInput
    price_table?: ProductPricesTableCreateNestedManyWithoutProductInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductUncheckedCreateWithoutProduct_categoryInput = {
    id?: string
    company_id: string
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner?: string | null
    active?: boolean
    combo?: boolean | null
    amount_min_sale?: number | null
    amount_max_sale?: number | null
    amount_max_total_diary?: number | null
    highlighted?: boolean | null
    order_on_menu?: number | null
    for_sale?: boolean | null
    age_group?: string | null
    promotion?: boolean | null
    items?: ProductComboUncheckedCreateNestedManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionUncheckedCreateNestedManyWithoutProductInput
    total_sale?: ProductTotalSalesUncheckedCreateNestedManyWithoutProductInput
    product_item?: ProductComboUncheckedCreateNestedManyWithoutItemInput
    sales_item?: ItemSalesUncheckedCreateNestedManyWithoutProductInput
    price_table?: ProductPricesTableUncheckedCreateNestedManyWithoutProductInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductCreateOrConnectWithoutProduct_categoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProduct_categoryInput, ProductUncheckedCreateWithoutProduct_categoryInput>
  }

  export type ProductCreateManyProduct_categoryInputEnvelope = {
    data: Enumerable<ProductCreateManyProduct_categoryInput>
  }

  export type CompanyUpsertWithoutProduct_categoryInput = {
    update: XOR<CompanyUpdateWithoutProduct_categoryInput, CompanyUncheckedUpdateWithoutProduct_categoryInput>
    create: XOR<CompanyCreateWithoutProduct_categoryInput, CompanyUncheckedCreateWithoutProduct_categoryInput>
  }

  export type CompanyUpdateWithoutProduct_categoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: NullableStringFieldUpdateOperationsInput | string | null
    celphone1?: StringFieldUpdateOperationsInput | string
    celphone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    url_site?: NullableStringFieldUpdateOperationsInput | string | null
    url_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    url_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    url_linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_params?: CompanyParamsUpdateManyWithoutCompanyInput
    sales?: SaleUpdateManyWithoutCompanyInput
    price_tables?: PriceTableUpdateManyWithoutCompanyInput
    products?: ProductUpdateManyWithoutCompanyInput
    users?: UserUpdateManyWithoutCompanyInput
  }

  export type CompanyUncheckedUpdateWithoutProduct_categoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: NullableStringFieldUpdateOperationsInput | string | null
    celphone1?: StringFieldUpdateOperationsInput | string
    celphone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    url_site?: NullableStringFieldUpdateOperationsInput | string | null
    url_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    url_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    url_linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_params?: CompanyParamsUncheckedUpdateManyWithoutCompanyInput
    sales?: SaleUncheckedUpdateManyWithoutCompanyInput
    price_tables?: PriceTableUncheckedUpdateManyWithoutCompanyInput
    products?: ProductUncheckedUpdateManyWithoutCompanyInput
    users?: UserUncheckedUpdateManyWithoutCompanyInput
  }

  export type ProductUpsertWithWhereUniqueWithoutProduct_categoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutProduct_categoryInput, ProductUncheckedUpdateWithoutProduct_categoryInput>
    create: XOR<ProductCreateWithoutProduct_categoryInput, ProductUncheckedCreateWithoutProduct_categoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutProduct_categoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutProduct_categoryInput, ProductUncheckedUpdateWithoutProduct_categoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutProduct_categoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProductsInput>
  }

  export type ProductCategoryCreateWithoutProductsInput = {
    id?: string
    company: CompanyCreateNestedOneWithoutProduct_categoryInput
    product_type: ProductType
    config_type_id?: string | null
    title: string
    description: string
    url_banner?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductCategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    company_id: string
    product_type: ProductType
    config_type_id?: string | null
    title: string
    description: string
    url_banner?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductCategoryCreateOrConnectWithoutProductsInput = {
    where: ProductCategoryWhereUniqueInput
    create: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
  }

  export type CompanyCreateWithoutProductsInput = {
    id?: string
    name: string
    fantasy_name?: string | null
    celphone1: string
    celphone2?: string | null
    email: string
    url_banner?: string | null
    url_site?: string | null
    url_facebook?: string | null
    url_instagram?: string | null
    url_linkedin?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    company_params?: CompanyParamsCreateNestedManyWithoutCompanyInput
    product_category?: ProductCategoryCreateNestedManyWithoutCompanyInput
    sales?: SaleCreateNestedManyWithoutCompanyInput
    price_tables?: PriceTableCreateNestedManyWithoutCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    fantasy_name?: string | null
    celphone1: string
    celphone2?: string | null
    email: string
    url_banner?: string | null
    url_site?: string | null
    url_facebook?: string | null
    url_instagram?: string | null
    url_linkedin?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    company_params?: CompanyParamsUncheckedCreateNestedManyWithoutCompanyInput
    product_category?: ProductCategoryUncheckedCreateNestedManyWithoutCompanyInput
    sales?: SaleUncheckedCreateNestedManyWithoutCompanyInput
    price_tables?: PriceTableUncheckedCreateNestedManyWithoutCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutProductsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutProductsInput, CompanyUncheckedCreateWithoutProductsInput>
  }

  export type ProductComboCreateWithoutProductInput = {
    id?: string
    item: ProductCreateNestedOneWithoutProduct_itemInput
    amount: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductComboUncheckedCreateWithoutProductInput = {
    id?: string
    item_id: string
    amount: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductComboCreateOrConnectWithoutProductInput = {
    where: ProductComboWhereUniqueInput
    create: XOR<ProductComboCreateWithoutProductInput, ProductComboUncheckedCreateWithoutProductInput>
  }

  export type ProductComboCreateManyProductInputEnvelope = {
    data: Enumerable<ProductComboCreateManyProductInput>
  }

  export type ConfigProductExceptionCreateWithoutProductInput = {
    id?: string
    date: Date | string
    action?: TypeActionExceptionProduct
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConfigProductExceptionUncheckedCreateWithoutProductInput = {
    id?: string
    date: Date | string
    action?: TypeActionExceptionProduct
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConfigProductExceptionCreateOrConnectWithoutProductInput = {
    where: ConfigProductExceptionWhereUniqueInput
    create: XOR<ConfigProductExceptionCreateWithoutProductInput, ConfigProductExceptionUncheckedCreateWithoutProductInput>
  }

  export type ConfigProductExceptionCreateManyProductInputEnvelope = {
    data: Enumerable<ConfigProductExceptionCreateManyProductInput>
  }

  export type ProductTotalSalesCreateWithoutProductInput = {
    id?: string
    date: Date | string
    amount: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductTotalSalesUncheckedCreateWithoutProductInput = {
    id?: string
    date: Date | string
    amount: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductTotalSalesCreateOrConnectWithoutProductInput = {
    where: ProductTotalSalesWhereUniqueInput
    create: XOR<ProductTotalSalesCreateWithoutProductInput, ProductTotalSalesUncheckedCreateWithoutProductInput>
  }

  export type ProductTotalSalesCreateManyProductInputEnvelope = {
    data: Enumerable<ProductTotalSalesCreateManyProductInput>
  }

  export type ProductComboCreateWithoutItemInput = {
    id?: string
    product: ProductCreateNestedOneWithoutItemsInput
    amount: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductComboUncheckedCreateWithoutItemInput = {
    id?: string
    product_id: string
    amount: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductComboCreateOrConnectWithoutItemInput = {
    where: ProductComboWhereUniqueInput
    create: XOR<ProductComboCreateWithoutItemInput, ProductComboUncheckedCreateWithoutItemInput>
  }

  export type ProductComboCreateManyItemInputEnvelope = {
    data: Enumerable<ProductComboCreateManyItemInput>
  }

  export type ItemSalesCreateWithoutProductInput = {
    id?: string
    sales: SaleCreateNestedOneWithoutItemsInput
    amount: number
    unitary_value: number
    percent_discount: number
    subtotal: number
    total: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ItemSalesUncheckedCreateWithoutProductInput = {
    id?: string
    sale_id: string
    amount: number
    unitary_value: number
    percent_discount: number
    subtotal: number
    total: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ItemSalesCreateOrConnectWithoutProductInput = {
    where: ItemSalesWhereUniqueInput
    create: XOR<ItemSalesCreateWithoutProductInput, ItemSalesUncheckedCreateWithoutProductInput>
  }

  export type ItemSalesCreateManyProductInputEnvelope = {
    data: Enumerable<ItemSalesCreateManyProductInput>
  }

  export type ProductPricesTableCreateWithoutProductInput = {
    id?: string
    price_table?: PriceTableCreateNestedOneWithoutProductsInput
    value: number
    value_promotion: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductPricesTableUncheckedCreateWithoutProductInput = {
    id?: string
    price_table_id: string
    value: number
    value_promotion: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductPricesTableCreateOrConnectWithoutProductInput = {
    where: ProductPricesTableWhereUniqueInput
    create: XOR<ProductPricesTableCreateWithoutProductInput, ProductPricesTableUncheckedCreateWithoutProductInput>
  }

  export type ProductPricesTableCreateManyProductInputEnvelope = {
    data: Enumerable<ProductPricesTableCreateManyProductInput>
  }

  export type ProductCategoryUpsertWithoutProductsInput = {
    update: XOR<ProductCategoryUpdateWithoutProductsInput, ProductCategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
  }

  export type ProductCategoryUpdateWithoutProductsInput = {
    company?: CompanyUpdateOneRequiredWithoutProduct_categoryInput
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    config_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryUncheckedUpdateWithoutProductsInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    config_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUpsertWithoutProductsInput = {
    update: XOR<CompanyUpdateWithoutProductsInput, CompanyUncheckedUpdateWithoutProductsInput>
    create: XOR<CompanyCreateWithoutProductsInput, CompanyUncheckedCreateWithoutProductsInput>
  }

  export type CompanyUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: NullableStringFieldUpdateOperationsInput | string | null
    celphone1?: StringFieldUpdateOperationsInput | string
    celphone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    url_site?: NullableStringFieldUpdateOperationsInput | string | null
    url_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    url_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    url_linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_params?: CompanyParamsUpdateManyWithoutCompanyInput
    product_category?: ProductCategoryUpdateManyWithoutCompanyInput
    sales?: SaleUpdateManyWithoutCompanyInput
    price_tables?: PriceTableUpdateManyWithoutCompanyInput
    users?: UserUpdateManyWithoutCompanyInput
  }

  export type CompanyUncheckedUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: NullableStringFieldUpdateOperationsInput | string | null
    celphone1?: StringFieldUpdateOperationsInput | string
    celphone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    url_site?: NullableStringFieldUpdateOperationsInput | string | null
    url_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    url_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    url_linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_params?: CompanyParamsUncheckedUpdateManyWithoutCompanyInput
    product_category?: ProductCategoryUncheckedUpdateManyWithoutCompanyInput
    sales?: SaleUncheckedUpdateManyWithoutCompanyInput
    price_tables?: PriceTableUncheckedUpdateManyWithoutCompanyInput
    users?: UserUncheckedUpdateManyWithoutCompanyInput
  }

  export type ProductComboUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductComboWhereUniqueInput
    update: XOR<ProductComboUpdateWithoutProductInput, ProductComboUncheckedUpdateWithoutProductInput>
    create: XOR<ProductComboCreateWithoutProductInput, ProductComboUncheckedCreateWithoutProductInput>
  }

  export type ProductComboUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductComboWhereUniqueInput
    data: XOR<ProductComboUpdateWithoutProductInput, ProductComboUncheckedUpdateWithoutProductInput>
  }

  export type ProductComboUpdateManyWithWhereWithoutProductInput = {
    where: ProductComboScalarWhereInput
    data: XOR<ProductComboUpdateManyMutationInput, ProductComboUncheckedUpdateManyWithoutItemsInput>
  }

  export type ProductComboScalarWhereInput = {
    AND?: Enumerable<ProductComboScalarWhereInput>
    OR?: Enumerable<ProductComboScalarWhereInput>
    NOT?: Enumerable<ProductComboScalarWhereInput>
    id?: StringFilter | string
    product_id?: StringFilter | string
    item_id?: StringFilter | string
    amount?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type ConfigProductExceptionUpsertWithWhereUniqueWithoutProductInput = {
    where: ConfigProductExceptionWhereUniqueInput
    update: XOR<ConfigProductExceptionUpdateWithoutProductInput, ConfigProductExceptionUncheckedUpdateWithoutProductInput>
    create: XOR<ConfigProductExceptionCreateWithoutProductInput, ConfigProductExceptionUncheckedCreateWithoutProductInput>
  }

  export type ConfigProductExceptionUpdateWithWhereUniqueWithoutProductInput = {
    where: ConfigProductExceptionWhereUniqueInput
    data: XOR<ConfigProductExceptionUpdateWithoutProductInput, ConfigProductExceptionUncheckedUpdateWithoutProductInput>
  }

  export type ConfigProductExceptionUpdateManyWithWhereWithoutProductInput = {
    where: ConfigProductExceptionScalarWhereInput
    data: XOR<ConfigProductExceptionUpdateManyMutationInput, ConfigProductExceptionUncheckedUpdateManyWithoutConfig_product_exeptionInput>
  }

  export type ConfigProductExceptionScalarWhereInput = {
    AND?: Enumerable<ConfigProductExceptionScalarWhereInput>
    OR?: Enumerable<ConfigProductExceptionScalarWhereInput>
    NOT?: Enumerable<ConfigProductExceptionScalarWhereInput>
    id?: StringFilter | string
    product_id?: StringFilter | string
    date?: DateTimeFilter | Date | string
    action?: EnumTypeActionExceptionProductFilter | TypeActionExceptionProduct
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type ProductTotalSalesUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductTotalSalesWhereUniqueInput
    update: XOR<ProductTotalSalesUpdateWithoutProductInput, ProductTotalSalesUncheckedUpdateWithoutProductInput>
    create: XOR<ProductTotalSalesCreateWithoutProductInput, ProductTotalSalesUncheckedCreateWithoutProductInput>
  }

  export type ProductTotalSalesUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductTotalSalesWhereUniqueInput
    data: XOR<ProductTotalSalesUpdateWithoutProductInput, ProductTotalSalesUncheckedUpdateWithoutProductInput>
  }

  export type ProductTotalSalesUpdateManyWithWhereWithoutProductInput = {
    where: ProductTotalSalesScalarWhereInput
    data: XOR<ProductTotalSalesUpdateManyMutationInput, ProductTotalSalesUncheckedUpdateManyWithoutTotal_saleInput>
  }

  export type ProductTotalSalesScalarWhereInput = {
    AND?: Enumerable<ProductTotalSalesScalarWhereInput>
    OR?: Enumerable<ProductTotalSalesScalarWhereInput>
    NOT?: Enumerable<ProductTotalSalesScalarWhereInput>
    id?: StringFilter | string
    product_id?: StringFilter | string
    date?: DateTimeFilter | Date | string
    amount?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type ProductComboUpsertWithWhereUniqueWithoutItemInput = {
    where: ProductComboWhereUniqueInput
    update: XOR<ProductComboUpdateWithoutItemInput, ProductComboUncheckedUpdateWithoutItemInput>
    create: XOR<ProductComboCreateWithoutItemInput, ProductComboUncheckedCreateWithoutItemInput>
  }

  export type ProductComboUpdateWithWhereUniqueWithoutItemInput = {
    where: ProductComboWhereUniqueInput
    data: XOR<ProductComboUpdateWithoutItemInput, ProductComboUncheckedUpdateWithoutItemInput>
  }

  export type ProductComboUpdateManyWithWhereWithoutItemInput = {
    where: ProductComboScalarWhereInput
    data: XOR<ProductComboUpdateManyMutationInput, ProductComboUncheckedUpdateManyWithoutProduct_itemInput>
  }

  export type ItemSalesUpsertWithWhereUniqueWithoutProductInput = {
    where: ItemSalesWhereUniqueInput
    update: XOR<ItemSalesUpdateWithoutProductInput, ItemSalesUncheckedUpdateWithoutProductInput>
    create: XOR<ItemSalesCreateWithoutProductInput, ItemSalesUncheckedCreateWithoutProductInput>
  }

  export type ItemSalesUpdateWithWhereUniqueWithoutProductInput = {
    where: ItemSalesWhereUniqueInput
    data: XOR<ItemSalesUpdateWithoutProductInput, ItemSalesUncheckedUpdateWithoutProductInput>
  }

  export type ItemSalesUpdateManyWithWhereWithoutProductInput = {
    where: ItemSalesScalarWhereInput
    data: XOR<ItemSalesUpdateManyMutationInput, ItemSalesUncheckedUpdateManyWithoutSales_itemInput>
  }

  export type ItemSalesScalarWhereInput = {
    AND?: Enumerable<ItemSalesScalarWhereInput>
    OR?: Enumerable<ItemSalesScalarWhereInput>
    NOT?: Enumerable<ItemSalesScalarWhereInput>
    id?: StringFilter | string
    sale_id?: StringFilter | string
    product_id?: StringFilter | string
    amount?: IntFilter | number
    unitary_value?: FloatFilter | number
    percent_discount?: FloatFilter | number
    subtotal?: FloatFilter | number
    total?: FloatFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type ProductPricesTableUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductPricesTableWhereUniqueInput
    update: XOR<ProductPricesTableUpdateWithoutProductInput, ProductPricesTableUncheckedUpdateWithoutProductInput>
    create: XOR<ProductPricesTableCreateWithoutProductInput, ProductPricesTableUncheckedCreateWithoutProductInput>
  }

  export type ProductPricesTableUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductPricesTableWhereUniqueInput
    data: XOR<ProductPricesTableUpdateWithoutProductInput, ProductPricesTableUncheckedUpdateWithoutProductInput>
  }

  export type ProductPricesTableUpdateManyWithWhereWithoutProductInput = {
    where: ProductPricesTableScalarWhereInput
    data: XOR<ProductPricesTableUpdateManyMutationInput, ProductPricesTableUncheckedUpdateManyWithoutPrice_tableInput>
  }

  export type ProductPricesTableScalarWhereInput = {
    AND?: Enumerable<ProductPricesTableScalarWhereInput>
    OR?: Enumerable<ProductPricesTableScalarWhereInput>
    NOT?: Enumerable<ProductPricesTableScalarWhereInput>
    id?: StringFilter | string
    price_table_id?: StringFilter | string
    product_id?: StringFilter | string
    value?: FloatFilter | number
    value_promotion?: FloatFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type SaleCreateWithoutItemsInput = {
    id?: string
    company?: CompanyCreateNestedOneWithoutSalesInput
    user?: UserCreateNestedOneWithoutSaleInput
    session?: string | null
    status?: SaleStatus
    name: string
    last_name: string
    cellphone: string
    email: string
    cep: string
    state: string
    city: string
    address: string
    address_number?: string | null
    address_complement?: string | null
    subtotal: number
    descount_voucher?: string | null
    descount_percentage?: number | null
    descount_value?: number | null
    total: number
    history?: SalesHistoryCreateNestedManyWithoutSaleInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SaleUncheckedCreateWithoutItemsInput = {
    id?: string
    company_id: string
    user_id: string
    session?: string | null
    status?: SaleStatus
    name: string
    last_name: string
    cellphone: string
    email: string
    cep: string
    state: string
    city: string
    address: string
    address_number?: string | null
    address_complement?: string | null
    subtotal: number
    descount_voucher?: string | null
    descount_percentage?: number | null
    descount_value?: number | null
    total: number
    history?: SalesHistoryUncheckedCreateNestedManyWithoutSaleInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SaleCreateOrConnectWithoutItemsInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutSales_itemInput = {
    id?: string
    product_category: ProductCategoryCreateNestedOneWithoutProductsInput
    company: CompanyCreateNestedOneWithoutProductsInput
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner?: string | null
    active?: boolean
    combo?: boolean | null
    amount_min_sale?: number | null
    amount_max_sale?: number | null
    amount_max_total_diary?: number | null
    highlighted?: boolean | null
    order_on_menu?: number | null
    for_sale?: boolean | null
    age_group?: string | null
    promotion?: boolean | null
    items?: ProductComboCreateNestedManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionCreateNestedManyWithoutProductInput
    total_sale?: ProductTotalSalesCreateNestedManyWithoutProductInput
    product_item?: ProductComboCreateNestedManyWithoutItemInput
    price_table?: ProductPricesTableCreateNestedManyWithoutProductInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductUncheckedCreateWithoutSales_itemInput = {
    id?: string
    product_category_id: string
    company_id: string
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner?: string | null
    active?: boolean
    combo?: boolean | null
    amount_min_sale?: number | null
    amount_max_sale?: number | null
    amount_max_total_diary?: number | null
    highlighted?: boolean | null
    order_on_menu?: number | null
    for_sale?: boolean | null
    age_group?: string | null
    promotion?: boolean | null
    items?: ProductComboUncheckedCreateNestedManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionUncheckedCreateNestedManyWithoutProductInput
    total_sale?: ProductTotalSalesUncheckedCreateNestedManyWithoutProductInput
    product_item?: ProductComboUncheckedCreateNestedManyWithoutItemInput
    price_table?: ProductPricesTableUncheckedCreateNestedManyWithoutProductInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductCreateOrConnectWithoutSales_itemInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSales_itemInput, ProductUncheckedCreateWithoutSales_itemInput>
  }

  export type SaleUpsertWithoutItemsInput = {
    update: XOR<SaleUpdateWithoutItemsInput, SaleUncheckedUpdateWithoutItemsInput>
    create: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
  }

  export type SaleUpdateWithoutItemsInput = {
    company?: CompanyUpdateOneWithoutSalesInput
    user?: UserUpdateOneWithoutSaleInput
    session?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSaleStatusFieldUpdateOperationsInput | SaleStatus
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    descount_voucher?: NullableStringFieldUpdateOperationsInput | string | null
    descount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    descount_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    history?: SalesHistoryUpdateManyWithoutSaleInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateWithoutItemsInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSaleStatusFieldUpdateOperationsInput | SaleStatus
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    descount_voucher?: NullableStringFieldUpdateOperationsInput | string | null
    descount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    descount_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    history?: SalesHistoryUncheckedUpdateManyWithoutSaleInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutSales_itemInput = {
    update: XOR<ProductUpdateWithoutSales_itemInput, ProductUncheckedUpdateWithoutSales_itemInput>
    create: XOR<ProductCreateWithoutSales_itemInput, ProductUncheckedCreateWithoutSales_itemInput>
  }

  export type ProductUpdateWithoutSales_itemInput = {
    product_category?: ProductCategoryUpdateOneRequiredWithoutProductsInput
    company?: CompanyUpdateOneRequiredWithoutProductsInput
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    combo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount_min_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_total_diary?: NullableIntFieldUpdateOperationsInput | number | null
    highlighted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_on_menu?: NullableIntFieldUpdateOperationsInput | number | null
    for_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    promotion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    items?: ProductComboUpdateManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionUpdateManyWithoutProductInput
    total_sale?: ProductTotalSalesUpdateManyWithoutProductInput
    product_item?: ProductComboUpdateManyWithoutItemInput
    price_table?: ProductPricesTableUpdateManyWithoutProductInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutSales_itemInput = {
    product_category_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    combo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount_min_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_total_diary?: NullableIntFieldUpdateOperationsInput | number | null
    highlighted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_on_menu?: NullableIntFieldUpdateOperationsInput | number | null
    for_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    promotion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    items?: ProductComboUncheckedUpdateManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionUncheckedUpdateManyWithoutProductInput
    total_sale?: ProductTotalSalesUncheckedUpdateManyWithoutProductInput
    product_item?: ProductComboUncheckedUpdateManyWithoutItemInput
    price_table?: ProductPricesTableUncheckedUpdateManyWithoutProductInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateWithoutItemsInput = {
    id?: string
    product_category: ProductCategoryCreateNestedOneWithoutProductsInput
    company: CompanyCreateNestedOneWithoutProductsInput
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner?: string | null
    active?: boolean
    combo?: boolean | null
    amount_min_sale?: number | null
    amount_max_sale?: number | null
    amount_max_total_diary?: number | null
    highlighted?: boolean | null
    order_on_menu?: number | null
    for_sale?: boolean | null
    age_group?: string | null
    promotion?: boolean | null
    config_product_exeption?: ConfigProductExceptionCreateNestedManyWithoutProductInput
    total_sale?: ProductTotalSalesCreateNestedManyWithoutProductInput
    product_item?: ProductComboCreateNestedManyWithoutItemInput
    sales_item?: ItemSalesCreateNestedManyWithoutProductInput
    price_table?: ProductPricesTableCreateNestedManyWithoutProductInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductUncheckedCreateWithoutItemsInput = {
    id?: string
    product_category_id: string
    company_id: string
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner?: string | null
    active?: boolean
    combo?: boolean | null
    amount_min_sale?: number | null
    amount_max_sale?: number | null
    amount_max_total_diary?: number | null
    highlighted?: boolean | null
    order_on_menu?: number | null
    for_sale?: boolean | null
    age_group?: string | null
    promotion?: boolean | null
    config_product_exeption?: ConfigProductExceptionUncheckedCreateNestedManyWithoutProductInput
    total_sale?: ProductTotalSalesUncheckedCreateNestedManyWithoutProductInput
    product_item?: ProductComboUncheckedCreateNestedManyWithoutItemInput
    sales_item?: ItemSalesUncheckedCreateNestedManyWithoutProductInput
    price_table?: ProductPricesTableUncheckedCreateNestedManyWithoutProductInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductCreateOrConnectWithoutItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutItemsInput, ProductUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutProduct_itemInput = {
    id?: string
    product_category: ProductCategoryCreateNestedOneWithoutProductsInput
    company: CompanyCreateNestedOneWithoutProductsInput
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner?: string | null
    active?: boolean
    combo?: boolean | null
    amount_min_sale?: number | null
    amount_max_sale?: number | null
    amount_max_total_diary?: number | null
    highlighted?: boolean | null
    order_on_menu?: number | null
    for_sale?: boolean | null
    age_group?: string | null
    promotion?: boolean | null
    items?: ProductComboCreateNestedManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionCreateNestedManyWithoutProductInput
    total_sale?: ProductTotalSalesCreateNestedManyWithoutProductInput
    sales_item?: ItemSalesCreateNestedManyWithoutProductInput
    price_table?: ProductPricesTableCreateNestedManyWithoutProductInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductUncheckedCreateWithoutProduct_itemInput = {
    id?: string
    product_category_id: string
    company_id: string
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner?: string | null
    active?: boolean
    combo?: boolean | null
    amount_min_sale?: number | null
    amount_max_sale?: number | null
    amount_max_total_diary?: number | null
    highlighted?: boolean | null
    order_on_menu?: number | null
    for_sale?: boolean | null
    age_group?: string | null
    promotion?: boolean | null
    items?: ProductComboUncheckedCreateNestedManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionUncheckedCreateNestedManyWithoutProductInput
    total_sale?: ProductTotalSalesUncheckedCreateNestedManyWithoutProductInput
    sales_item?: ItemSalesUncheckedCreateNestedManyWithoutProductInput
    price_table?: ProductPricesTableUncheckedCreateNestedManyWithoutProductInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductCreateOrConnectWithoutProduct_itemInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProduct_itemInput, ProductUncheckedCreateWithoutProduct_itemInput>
  }

  export type ProductUpsertWithoutItemsInput = {
    update: XOR<ProductUpdateWithoutItemsInput, ProductUncheckedUpdateWithoutItemsInput>
    create: XOR<ProductCreateWithoutItemsInput, ProductUncheckedCreateWithoutItemsInput>
  }

  export type ProductUpdateWithoutItemsInput = {
    product_category?: ProductCategoryUpdateOneRequiredWithoutProductsInput
    company?: CompanyUpdateOneRequiredWithoutProductsInput
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    combo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount_min_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_total_diary?: NullableIntFieldUpdateOperationsInput | number | null
    highlighted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_on_menu?: NullableIntFieldUpdateOperationsInput | number | null
    for_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    promotion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    config_product_exeption?: ConfigProductExceptionUpdateManyWithoutProductInput
    total_sale?: ProductTotalSalesUpdateManyWithoutProductInput
    product_item?: ProductComboUpdateManyWithoutItemInput
    sales_item?: ItemSalesUpdateManyWithoutProductInput
    price_table?: ProductPricesTableUpdateManyWithoutProductInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutItemsInput = {
    product_category_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    combo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount_min_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_total_diary?: NullableIntFieldUpdateOperationsInput | number | null
    highlighted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_on_menu?: NullableIntFieldUpdateOperationsInput | number | null
    for_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    promotion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    config_product_exeption?: ConfigProductExceptionUncheckedUpdateManyWithoutProductInput
    total_sale?: ProductTotalSalesUncheckedUpdateManyWithoutProductInput
    product_item?: ProductComboUncheckedUpdateManyWithoutItemInput
    sales_item?: ItemSalesUncheckedUpdateManyWithoutProductInput
    price_table?: ProductPricesTableUncheckedUpdateManyWithoutProductInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutProduct_itemInput = {
    update: XOR<ProductUpdateWithoutProduct_itemInput, ProductUncheckedUpdateWithoutProduct_itemInput>
    create: XOR<ProductCreateWithoutProduct_itemInput, ProductUncheckedCreateWithoutProduct_itemInput>
  }

  export type ProductUpdateWithoutProduct_itemInput = {
    product_category?: ProductCategoryUpdateOneRequiredWithoutProductsInput
    company?: CompanyUpdateOneRequiredWithoutProductsInput
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    combo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount_min_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_total_diary?: NullableIntFieldUpdateOperationsInput | number | null
    highlighted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_on_menu?: NullableIntFieldUpdateOperationsInput | number | null
    for_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    promotion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    items?: ProductComboUpdateManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionUpdateManyWithoutProductInput
    total_sale?: ProductTotalSalesUpdateManyWithoutProductInput
    sales_item?: ItemSalesUpdateManyWithoutProductInput
    price_table?: ProductPricesTableUpdateManyWithoutProductInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutProduct_itemInput = {
    product_category_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    combo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount_min_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_total_diary?: NullableIntFieldUpdateOperationsInput | number | null
    highlighted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_on_menu?: NullableIntFieldUpdateOperationsInput | number | null
    for_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    promotion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    items?: ProductComboUncheckedUpdateManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionUncheckedUpdateManyWithoutProductInput
    total_sale?: ProductTotalSalesUncheckedUpdateManyWithoutProductInput
    sales_item?: ItemSalesUncheckedUpdateManyWithoutProductInput
    price_table?: ProductPricesTableUncheckedUpdateManyWithoutProductInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateWithoutConfig_product_exeptionInput = {
    id?: string
    product_category: ProductCategoryCreateNestedOneWithoutProductsInput
    company: CompanyCreateNestedOneWithoutProductsInput
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner?: string | null
    active?: boolean
    combo?: boolean | null
    amount_min_sale?: number | null
    amount_max_sale?: number | null
    amount_max_total_diary?: number | null
    highlighted?: boolean | null
    order_on_menu?: number | null
    for_sale?: boolean | null
    age_group?: string | null
    promotion?: boolean | null
    items?: ProductComboCreateNestedManyWithoutProductInput
    total_sale?: ProductTotalSalesCreateNestedManyWithoutProductInput
    product_item?: ProductComboCreateNestedManyWithoutItemInput
    sales_item?: ItemSalesCreateNestedManyWithoutProductInput
    price_table?: ProductPricesTableCreateNestedManyWithoutProductInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductUncheckedCreateWithoutConfig_product_exeptionInput = {
    id?: string
    product_category_id: string
    company_id: string
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner?: string | null
    active?: boolean
    combo?: boolean | null
    amount_min_sale?: number | null
    amount_max_sale?: number | null
    amount_max_total_diary?: number | null
    highlighted?: boolean | null
    order_on_menu?: number | null
    for_sale?: boolean | null
    age_group?: string | null
    promotion?: boolean | null
    items?: ProductComboUncheckedCreateNestedManyWithoutProductInput
    total_sale?: ProductTotalSalesUncheckedCreateNestedManyWithoutProductInput
    product_item?: ProductComboUncheckedCreateNestedManyWithoutItemInput
    sales_item?: ItemSalesUncheckedCreateNestedManyWithoutProductInput
    price_table?: ProductPricesTableUncheckedCreateNestedManyWithoutProductInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductCreateOrConnectWithoutConfig_product_exeptionInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutConfig_product_exeptionInput, ProductUncheckedCreateWithoutConfig_product_exeptionInput>
  }

  export type ProductUpsertWithoutConfig_product_exeptionInput = {
    update: XOR<ProductUpdateWithoutConfig_product_exeptionInput, ProductUncheckedUpdateWithoutConfig_product_exeptionInput>
    create: XOR<ProductCreateWithoutConfig_product_exeptionInput, ProductUncheckedCreateWithoutConfig_product_exeptionInput>
  }

  export type ProductUpdateWithoutConfig_product_exeptionInput = {
    product_category?: ProductCategoryUpdateOneRequiredWithoutProductsInput
    company?: CompanyUpdateOneRequiredWithoutProductsInput
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    combo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount_min_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_total_diary?: NullableIntFieldUpdateOperationsInput | number | null
    highlighted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_on_menu?: NullableIntFieldUpdateOperationsInput | number | null
    for_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    promotion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    items?: ProductComboUpdateManyWithoutProductInput
    total_sale?: ProductTotalSalesUpdateManyWithoutProductInput
    product_item?: ProductComboUpdateManyWithoutItemInput
    sales_item?: ItemSalesUpdateManyWithoutProductInput
    price_table?: ProductPricesTableUpdateManyWithoutProductInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutConfig_product_exeptionInput = {
    product_category_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    combo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount_min_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_total_diary?: NullableIntFieldUpdateOperationsInput | number | null
    highlighted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_on_menu?: NullableIntFieldUpdateOperationsInput | number | null
    for_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    promotion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    items?: ProductComboUncheckedUpdateManyWithoutProductInput
    total_sale?: ProductTotalSalesUncheckedUpdateManyWithoutProductInput
    product_item?: ProductComboUncheckedUpdateManyWithoutItemInput
    sales_item?: ItemSalesUncheckedUpdateManyWithoutProductInput
    price_table?: ProductPricesTableUncheckedUpdateManyWithoutProductInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateWithoutTotal_saleInput = {
    id?: string
    product_category: ProductCategoryCreateNestedOneWithoutProductsInput
    company: CompanyCreateNestedOneWithoutProductsInput
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner?: string | null
    active?: boolean
    combo?: boolean | null
    amount_min_sale?: number | null
    amount_max_sale?: number | null
    amount_max_total_diary?: number | null
    highlighted?: boolean | null
    order_on_menu?: number | null
    for_sale?: boolean | null
    age_group?: string | null
    promotion?: boolean | null
    items?: ProductComboCreateNestedManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionCreateNestedManyWithoutProductInput
    product_item?: ProductComboCreateNestedManyWithoutItemInput
    sales_item?: ItemSalesCreateNestedManyWithoutProductInput
    price_table?: ProductPricesTableCreateNestedManyWithoutProductInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductUncheckedCreateWithoutTotal_saleInput = {
    id?: string
    product_category_id: string
    company_id: string
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner?: string | null
    active?: boolean
    combo?: boolean | null
    amount_min_sale?: number | null
    amount_max_sale?: number | null
    amount_max_total_diary?: number | null
    highlighted?: boolean | null
    order_on_menu?: number | null
    for_sale?: boolean | null
    age_group?: string | null
    promotion?: boolean | null
    items?: ProductComboUncheckedCreateNestedManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionUncheckedCreateNestedManyWithoutProductInput
    product_item?: ProductComboUncheckedCreateNestedManyWithoutItemInput
    sales_item?: ItemSalesUncheckedCreateNestedManyWithoutProductInput
    price_table?: ProductPricesTableUncheckedCreateNestedManyWithoutProductInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductCreateOrConnectWithoutTotal_saleInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutTotal_saleInput, ProductUncheckedCreateWithoutTotal_saleInput>
  }

  export type ProductUpsertWithoutTotal_saleInput = {
    update: XOR<ProductUpdateWithoutTotal_saleInput, ProductUncheckedUpdateWithoutTotal_saleInput>
    create: XOR<ProductCreateWithoutTotal_saleInput, ProductUncheckedCreateWithoutTotal_saleInput>
  }

  export type ProductUpdateWithoutTotal_saleInput = {
    product_category?: ProductCategoryUpdateOneRequiredWithoutProductsInput
    company?: CompanyUpdateOneRequiredWithoutProductsInput
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    combo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount_min_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_total_diary?: NullableIntFieldUpdateOperationsInput | number | null
    highlighted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_on_menu?: NullableIntFieldUpdateOperationsInput | number | null
    for_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    promotion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    items?: ProductComboUpdateManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionUpdateManyWithoutProductInput
    product_item?: ProductComboUpdateManyWithoutItemInput
    sales_item?: ItemSalesUpdateManyWithoutProductInput
    price_table?: ProductPricesTableUpdateManyWithoutProductInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutTotal_saleInput = {
    product_category_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    combo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount_min_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_total_diary?: NullableIntFieldUpdateOperationsInput | number | null
    highlighted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_on_menu?: NullableIntFieldUpdateOperationsInput | number | null
    for_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    promotion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    items?: ProductComboUncheckedUpdateManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionUncheckedUpdateManyWithoutProductInput
    product_item?: ProductComboUncheckedUpdateManyWithoutItemInput
    sales_item?: ItemSalesUncheckedUpdateManyWithoutProductInput
    price_table?: ProductPricesTableUncheckedUpdateManyWithoutProductInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateWithoutPrice_tablesInput = {
    id?: string
    name: string
    fantasy_name?: string | null
    celphone1: string
    celphone2?: string | null
    email: string
    url_banner?: string | null
    url_site?: string | null
    url_facebook?: string | null
    url_instagram?: string | null
    url_linkedin?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    company_params?: CompanyParamsCreateNestedManyWithoutCompanyInput
    product_category?: ProductCategoryCreateNestedManyWithoutCompanyInput
    sales?: SaleCreateNestedManyWithoutCompanyInput
    products?: ProductCreateNestedManyWithoutCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutPrice_tablesInput = {
    id?: string
    name: string
    fantasy_name?: string | null
    celphone1: string
    celphone2?: string | null
    email: string
    url_banner?: string | null
    url_site?: string | null
    url_facebook?: string | null
    url_instagram?: string | null
    url_linkedin?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    company_params?: CompanyParamsUncheckedCreateNestedManyWithoutCompanyInput
    product_category?: ProductCategoryUncheckedCreateNestedManyWithoutCompanyInput
    sales?: SaleUncheckedCreateNestedManyWithoutCompanyInput
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutPrice_tablesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutPrice_tablesInput, CompanyUncheckedCreateWithoutPrice_tablesInput>
  }

  export type ProductPricesTableCreateWithoutPrice_tableInput = {
    id?: string
    product?: ProductCreateNestedOneWithoutPrice_tableInput
    value: number
    value_promotion: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductPricesTableUncheckedCreateWithoutPrice_tableInput = {
    id?: string
    product_id: string
    value: number
    value_promotion: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductPricesTableCreateOrConnectWithoutPrice_tableInput = {
    where: ProductPricesTableWhereUniqueInput
    create: XOR<ProductPricesTableCreateWithoutPrice_tableInput, ProductPricesTableUncheckedCreateWithoutPrice_tableInput>
  }

  export type ProductPricesTableCreateManyPrice_tableInputEnvelope = {
    data: Enumerable<ProductPricesTableCreateManyPrice_tableInput>
  }

  export type CompanyUpsertWithoutPrice_tablesInput = {
    update: XOR<CompanyUpdateWithoutPrice_tablesInput, CompanyUncheckedUpdateWithoutPrice_tablesInput>
    create: XOR<CompanyCreateWithoutPrice_tablesInput, CompanyUncheckedCreateWithoutPrice_tablesInput>
  }

  export type CompanyUpdateWithoutPrice_tablesInput = {
    name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: NullableStringFieldUpdateOperationsInput | string | null
    celphone1?: StringFieldUpdateOperationsInput | string
    celphone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    url_site?: NullableStringFieldUpdateOperationsInput | string | null
    url_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    url_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    url_linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_params?: CompanyParamsUpdateManyWithoutCompanyInput
    product_category?: ProductCategoryUpdateManyWithoutCompanyInput
    sales?: SaleUpdateManyWithoutCompanyInput
    products?: ProductUpdateManyWithoutCompanyInput
    users?: UserUpdateManyWithoutCompanyInput
  }

  export type CompanyUncheckedUpdateWithoutPrice_tablesInput = {
    name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: NullableStringFieldUpdateOperationsInput | string | null
    celphone1?: StringFieldUpdateOperationsInput | string
    celphone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    url_site?: NullableStringFieldUpdateOperationsInput | string | null
    url_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    url_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    url_linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_params?: CompanyParamsUncheckedUpdateManyWithoutCompanyInput
    product_category?: ProductCategoryUncheckedUpdateManyWithoutCompanyInput
    sales?: SaleUncheckedUpdateManyWithoutCompanyInput
    products?: ProductUncheckedUpdateManyWithoutCompanyInput
    users?: UserUncheckedUpdateManyWithoutCompanyInput
  }

  export type ProductPricesTableUpsertWithWhereUniqueWithoutPrice_tableInput = {
    where: ProductPricesTableWhereUniqueInput
    update: XOR<ProductPricesTableUpdateWithoutPrice_tableInput, ProductPricesTableUncheckedUpdateWithoutPrice_tableInput>
    create: XOR<ProductPricesTableCreateWithoutPrice_tableInput, ProductPricesTableUncheckedCreateWithoutPrice_tableInput>
  }

  export type ProductPricesTableUpdateWithWhereUniqueWithoutPrice_tableInput = {
    where: ProductPricesTableWhereUniqueInput
    data: XOR<ProductPricesTableUpdateWithoutPrice_tableInput, ProductPricesTableUncheckedUpdateWithoutPrice_tableInput>
  }

  export type ProductPricesTableUpdateManyWithWhereWithoutPrice_tableInput = {
    where: ProductPricesTableScalarWhereInput
    data: XOR<ProductPricesTableUpdateManyMutationInput, ProductPricesTableUncheckedUpdateManyWithoutProductsInput>
  }

  export type PriceTableCreateWithoutProductsInput = {
    id?: string
    company?: CompanyCreateNestedOneWithoutPrice_tablesInput
    description: string
    initial_date?: Date | string | null
    final_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PriceTableUncheckedCreateWithoutProductsInput = {
    id?: string
    company_id: string
    description: string
    initial_date?: Date | string | null
    final_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PriceTableCreateOrConnectWithoutProductsInput = {
    where: PriceTableWhereUniqueInput
    create: XOR<PriceTableCreateWithoutProductsInput, PriceTableUncheckedCreateWithoutProductsInput>
  }

  export type ProductCreateWithoutPrice_tableInput = {
    id?: string
    product_category: ProductCategoryCreateNestedOneWithoutProductsInput
    company: CompanyCreateNestedOneWithoutProductsInput
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner?: string | null
    active?: boolean
    combo?: boolean | null
    amount_min_sale?: number | null
    amount_max_sale?: number | null
    amount_max_total_diary?: number | null
    highlighted?: boolean | null
    order_on_menu?: number | null
    for_sale?: boolean | null
    age_group?: string | null
    promotion?: boolean | null
    items?: ProductComboCreateNestedManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionCreateNestedManyWithoutProductInput
    total_sale?: ProductTotalSalesCreateNestedManyWithoutProductInput
    product_item?: ProductComboCreateNestedManyWithoutItemInput
    sales_item?: ItemSalesCreateNestedManyWithoutProductInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductUncheckedCreateWithoutPrice_tableInput = {
    id?: string
    product_category_id: string
    company_id: string
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner?: string | null
    active?: boolean
    combo?: boolean | null
    amount_min_sale?: number | null
    amount_max_sale?: number | null
    amount_max_total_diary?: number | null
    highlighted?: boolean | null
    order_on_menu?: number | null
    for_sale?: boolean | null
    age_group?: string | null
    promotion?: boolean | null
    items?: ProductComboUncheckedCreateNestedManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionUncheckedCreateNestedManyWithoutProductInput
    total_sale?: ProductTotalSalesUncheckedCreateNestedManyWithoutProductInput
    product_item?: ProductComboUncheckedCreateNestedManyWithoutItemInput
    sales_item?: ItemSalesUncheckedCreateNestedManyWithoutProductInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductCreateOrConnectWithoutPrice_tableInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPrice_tableInput, ProductUncheckedCreateWithoutPrice_tableInput>
  }

  export type PriceTableUpsertWithoutProductsInput = {
    update: XOR<PriceTableUpdateWithoutProductsInput, PriceTableUncheckedUpdateWithoutProductsInput>
    create: XOR<PriceTableCreateWithoutProductsInput, PriceTableUncheckedCreateWithoutProductsInput>
  }

  export type PriceTableUpdateWithoutProductsInput = {
    company?: CompanyUpdateOneWithoutPrice_tablesInput
    description?: StringFieldUpdateOperationsInput | string
    initial_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    final_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceTableUncheckedUpdateWithoutProductsInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    initial_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    final_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutPrice_tableInput = {
    update: XOR<ProductUpdateWithoutPrice_tableInput, ProductUncheckedUpdateWithoutPrice_tableInput>
    create: XOR<ProductCreateWithoutPrice_tableInput, ProductUncheckedCreateWithoutPrice_tableInput>
  }

  export type ProductUpdateWithoutPrice_tableInput = {
    product_category?: ProductCategoryUpdateOneRequiredWithoutProductsInput
    company?: CompanyUpdateOneRequiredWithoutProductsInput
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    combo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount_min_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_total_diary?: NullableIntFieldUpdateOperationsInput | number | null
    highlighted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_on_menu?: NullableIntFieldUpdateOperationsInput | number | null
    for_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    promotion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    items?: ProductComboUpdateManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionUpdateManyWithoutProductInput
    total_sale?: ProductTotalSalesUpdateManyWithoutProductInput
    product_item?: ProductComboUpdateManyWithoutItemInput
    sales_item?: ItemSalesUpdateManyWithoutProductInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutPrice_tableInput = {
    product_category_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    combo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount_min_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_total_diary?: NullableIntFieldUpdateOperationsInput | number | null
    highlighted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_on_menu?: NullableIntFieldUpdateOperationsInput | number | null
    for_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    promotion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    items?: ProductComboUncheckedUpdateManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionUncheckedUpdateManyWithoutProductInput
    total_sale?: ProductTotalSalesUncheckedUpdateManyWithoutProductInput
    product_item?: ProductComboUncheckedUpdateManyWithoutItemInput
    sales_item?: ItemSalesUncheckedUpdateManyWithoutProductInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateWithoutSalesInput = {
    id?: string
    name: string
    fantasy_name?: string | null
    celphone1: string
    celphone2?: string | null
    email: string
    url_banner?: string | null
    url_site?: string | null
    url_facebook?: string | null
    url_instagram?: string | null
    url_linkedin?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    company_params?: CompanyParamsCreateNestedManyWithoutCompanyInput
    product_category?: ProductCategoryCreateNestedManyWithoutCompanyInput
    price_tables?: PriceTableCreateNestedManyWithoutCompanyInput
    products?: ProductCreateNestedManyWithoutCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutSalesInput = {
    id?: string
    name: string
    fantasy_name?: string | null
    celphone1: string
    celphone2?: string | null
    email: string
    url_banner?: string | null
    url_site?: string | null
    url_facebook?: string | null
    url_instagram?: string | null
    url_linkedin?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    company_params?: CompanyParamsUncheckedCreateNestedManyWithoutCompanyInput
    product_category?: ProductCategoryUncheckedCreateNestedManyWithoutCompanyInput
    price_tables?: PriceTableUncheckedCreateNestedManyWithoutCompanyInput
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutSalesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutSalesInput, CompanyUncheckedCreateWithoutSalesInput>
  }

  export type UserCreateWithoutSaleInput = {
    id?: string
    company?: CompanyCreateNestedOneWithoutUsersInput
    document?: string | null
    name: string
    last_name: string
    sex_type?: Sex | null
    birth_date?: Date | string | null
    celphone?: string | null
    email: string
    cep?: string | null
    state?: string | null
    city?: string | null
    neighborhood?: string | null
    address?: string | null
    address_number?: string | null
    address_complement?: string | null
    active?: boolean | null
    email_confirmed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateWithoutSaleInput = {
    id?: string
    company_id: string
    document?: string | null
    name: string
    last_name: string
    sex_type?: Sex | null
    birth_date?: Date | string | null
    celphone?: string | null
    email: string
    cep?: string | null
    state?: string | null
    city?: string | null
    neighborhood?: string | null
    address?: string | null
    address_number?: string | null
    address_complement?: string | null
    active?: boolean | null
    email_confirmed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutSaleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSaleInput, UserUncheckedCreateWithoutSaleInput>
  }

  export type ItemSalesCreateWithoutSalesInput = {
    id?: string
    product: ProductCreateNestedOneWithoutSales_itemInput
    amount: number
    unitary_value: number
    percent_discount: number
    subtotal: number
    total: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ItemSalesUncheckedCreateWithoutSalesInput = {
    id?: string
    product_id: string
    amount: number
    unitary_value: number
    percent_discount: number
    subtotal: number
    total: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ItemSalesCreateOrConnectWithoutSalesInput = {
    where: ItemSalesWhereUniqueInput
    create: XOR<ItemSalesCreateWithoutSalesInput, ItemSalesUncheckedCreateWithoutSalesInput>
  }

  export type ItemSalesCreateManySalesInputEnvelope = {
    data: Enumerable<ItemSalesCreateManySalesInput>
  }

  export type SalesHistoryCreateWithoutSaleInput = {
    id?: string
    historic: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesHistoryUncheckedCreateWithoutSaleInput = {
    id?: string
    historic: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesHistoryCreateOrConnectWithoutSaleInput = {
    where: SalesHistoryWhereUniqueInput
    create: XOR<SalesHistoryCreateWithoutSaleInput, SalesHistoryUncheckedCreateWithoutSaleInput>
  }

  export type SalesHistoryCreateManySaleInputEnvelope = {
    data: Enumerable<SalesHistoryCreateManySaleInput>
  }

  export type CompanyUpsertWithoutSalesInput = {
    update: XOR<CompanyUpdateWithoutSalesInput, CompanyUncheckedUpdateWithoutSalesInput>
    create: XOR<CompanyCreateWithoutSalesInput, CompanyUncheckedCreateWithoutSalesInput>
  }

  export type CompanyUpdateWithoutSalesInput = {
    name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: NullableStringFieldUpdateOperationsInput | string | null
    celphone1?: StringFieldUpdateOperationsInput | string
    celphone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    url_site?: NullableStringFieldUpdateOperationsInput | string | null
    url_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    url_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    url_linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_params?: CompanyParamsUpdateManyWithoutCompanyInput
    product_category?: ProductCategoryUpdateManyWithoutCompanyInput
    price_tables?: PriceTableUpdateManyWithoutCompanyInput
    products?: ProductUpdateManyWithoutCompanyInput
    users?: UserUpdateManyWithoutCompanyInput
  }

  export type CompanyUncheckedUpdateWithoutSalesInput = {
    name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: NullableStringFieldUpdateOperationsInput | string | null
    celphone1?: StringFieldUpdateOperationsInput | string
    celphone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    url_site?: NullableStringFieldUpdateOperationsInput | string | null
    url_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    url_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    url_linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_params?: CompanyParamsUncheckedUpdateManyWithoutCompanyInput
    product_category?: ProductCategoryUncheckedUpdateManyWithoutCompanyInput
    price_tables?: PriceTableUncheckedUpdateManyWithoutCompanyInput
    products?: ProductUncheckedUpdateManyWithoutCompanyInput
    users?: UserUncheckedUpdateManyWithoutCompanyInput
  }

  export type UserUpsertWithoutSaleInput = {
    update: XOR<UserUpdateWithoutSaleInput, UserUncheckedUpdateWithoutSaleInput>
    create: XOR<UserCreateWithoutSaleInput, UserUncheckedCreateWithoutSaleInput>
  }

  export type UserUpdateWithoutSaleInput = {
    company?: CompanyUpdateOneWithoutUsersInput
    document?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sex_type?: NullableEnumSexFieldUpdateOperationsInput | Sex | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    celphone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSaleInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    document?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sex_type?: NullableEnumSexFieldUpdateOperationsInput | Sex | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    celphone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemSalesUpsertWithWhereUniqueWithoutSalesInput = {
    where: ItemSalesWhereUniqueInput
    update: XOR<ItemSalesUpdateWithoutSalesInput, ItemSalesUncheckedUpdateWithoutSalesInput>
    create: XOR<ItemSalesCreateWithoutSalesInput, ItemSalesUncheckedCreateWithoutSalesInput>
  }

  export type ItemSalesUpdateWithWhereUniqueWithoutSalesInput = {
    where: ItemSalesWhereUniqueInput
    data: XOR<ItemSalesUpdateWithoutSalesInput, ItemSalesUncheckedUpdateWithoutSalesInput>
  }

  export type ItemSalesUpdateManyWithWhereWithoutSalesInput = {
    where: ItemSalesScalarWhereInput
    data: XOR<ItemSalesUpdateManyMutationInput, ItemSalesUncheckedUpdateManyWithoutItemsInput>
  }

  export type SalesHistoryUpsertWithWhereUniqueWithoutSaleInput = {
    where: SalesHistoryWhereUniqueInput
    update: XOR<SalesHistoryUpdateWithoutSaleInput, SalesHistoryUncheckedUpdateWithoutSaleInput>
    create: XOR<SalesHistoryCreateWithoutSaleInput, SalesHistoryUncheckedCreateWithoutSaleInput>
  }

  export type SalesHistoryUpdateWithWhereUniqueWithoutSaleInput = {
    where: SalesHistoryWhereUniqueInput
    data: XOR<SalesHistoryUpdateWithoutSaleInput, SalesHistoryUncheckedUpdateWithoutSaleInput>
  }

  export type SalesHistoryUpdateManyWithWhereWithoutSaleInput = {
    where: SalesHistoryScalarWhereInput
    data: XOR<SalesHistoryUpdateManyMutationInput, SalesHistoryUncheckedUpdateManyWithoutHistoryInput>
  }

  export type SalesHistoryScalarWhereInput = {
    AND?: Enumerable<SalesHistoryScalarWhereInput>
    OR?: Enumerable<SalesHistoryScalarWhereInput>
    NOT?: Enumerable<SalesHistoryScalarWhereInput>
    id?: StringFilter | string
    sale_id?: StringFilter | string
    historic?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type SaleCreateWithoutHistoryInput = {
    id?: string
    company?: CompanyCreateNestedOneWithoutSalesInput
    user?: UserCreateNestedOneWithoutSaleInput
    session?: string | null
    status?: SaleStatus
    name: string
    last_name: string
    cellphone: string
    email: string
    cep: string
    state: string
    city: string
    address: string
    address_number?: string | null
    address_complement?: string | null
    subtotal: number
    descount_voucher?: string | null
    descount_percentage?: number | null
    descount_value?: number | null
    total: number
    items?: ItemSalesCreateNestedManyWithoutSalesInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SaleUncheckedCreateWithoutHistoryInput = {
    id?: string
    company_id: string
    user_id: string
    session?: string | null
    status?: SaleStatus
    name: string
    last_name: string
    cellphone: string
    email: string
    cep: string
    state: string
    city: string
    address: string
    address_number?: string | null
    address_complement?: string | null
    subtotal: number
    descount_voucher?: string | null
    descount_percentage?: number | null
    descount_value?: number | null
    total: number
    items?: ItemSalesUncheckedCreateNestedManyWithoutSalesInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SaleCreateOrConnectWithoutHistoryInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutHistoryInput, SaleUncheckedCreateWithoutHistoryInput>
  }

  export type SaleUpsertWithoutHistoryInput = {
    update: XOR<SaleUpdateWithoutHistoryInput, SaleUncheckedUpdateWithoutHistoryInput>
    create: XOR<SaleCreateWithoutHistoryInput, SaleUncheckedCreateWithoutHistoryInput>
  }

  export type SaleUpdateWithoutHistoryInput = {
    company?: CompanyUpdateOneWithoutSalesInput
    user?: UserUpdateOneWithoutSaleInput
    session?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSaleStatusFieldUpdateOperationsInput | SaleStatus
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    descount_voucher?: NullableStringFieldUpdateOperationsInput | string | null
    descount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    descount_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    items?: ItemSalesUpdateManyWithoutSalesInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateWithoutHistoryInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSaleStatusFieldUpdateOperationsInput | SaleStatus
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    descount_voucher?: NullableStringFieldUpdateOperationsInput | string | null
    descount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    descount_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    items?: ItemSalesUncheckedUpdateManyWithoutSalesInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateWithoutUsersInput = {
    id?: string
    name: string
    fantasy_name?: string | null
    celphone1: string
    celphone2?: string | null
    email: string
    url_banner?: string | null
    url_site?: string | null
    url_facebook?: string | null
    url_instagram?: string | null
    url_linkedin?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    company_params?: CompanyParamsCreateNestedManyWithoutCompanyInput
    product_category?: ProductCategoryCreateNestedManyWithoutCompanyInput
    sales?: SaleCreateNestedManyWithoutCompanyInput
    price_tables?: PriceTableCreateNestedManyWithoutCompanyInput
    products?: ProductCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    fantasy_name?: string | null
    celphone1: string
    celphone2?: string | null
    email: string
    url_banner?: string | null
    url_site?: string | null
    url_facebook?: string | null
    url_instagram?: string | null
    url_linkedin?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    company_params?: CompanyParamsUncheckedCreateNestedManyWithoutCompanyInput
    product_category?: ProductCategoryUncheckedCreateNestedManyWithoutCompanyInput
    sales?: SaleUncheckedCreateNestedManyWithoutCompanyInput
    price_tables?: PriceTableUncheckedCreateNestedManyWithoutCompanyInput
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUsersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
  }

  export type SaleCreateWithoutUserInput = {
    id?: string
    company?: CompanyCreateNestedOneWithoutSalesInput
    session?: string | null
    status?: SaleStatus
    name: string
    last_name: string
    cellphone: string
    email: string
    cep: string
    state: string
    city: string
    address: string
    address_number?: string | null
    address_complement?: string | null
    subtotal: number
    descount_voucher?: string | null
    descount_percentage?: number | null
    descount_value?: number | null
    total: number
    items?: ItemSalesCreateNestedManyWithoutSalesInput
    history?: SalesHistoryCreateNestedManyWithoutSaleInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SaleUncheckedCreateWithoutUserInput = {
    id?: string
    company_id: string
    session?: string | null
    status?: SaleStatus
    name: string
    last_name: string
    cellphone: string
    email: string
    cep: string
    state: string
    city: string
    address: string
    address_number?: string | null
    address_complement?: string | null
    subtotal: number
    descount_voucher?: string | null
    descount_percentage?: number | null
    descount_value?: number | null
    total: number
    items?: ItemSalesUncheckedCreateNestedManyWithoutSalesInput
    history?: SalesHistoryUncheckedCreateNestedManyWithoutSaleInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SaleCreateOrConnectWithoutUserInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput>
  }

  export type SaleCreateManyUserInputEnvelope = {
    data: Enumerable<SaleCreateManyUserInput>
  }

  export type CompanyUpsertWithoutUsersInput = {
    update: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
  }

  export type CompanyUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: NullableStringFieldUpdateOperationsInput | string | null
    celphone1?: StringFieldUpdateOperationsInput | string
    celphone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    url_site?: NullableStringFieldUpdateOperationsInput | string | null
    url_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    url_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    url_linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_params?: CompanyParamsUpdateManyWithoutCompanyInput
    product_category?: ProductCategoryUpdateManyWithoutCompanyInput
    sales?: SaleUpdateManyWithoutCompanyInput
    price_tables?: PriceTableUpdateManyWithoutCompanyInput
    products?: ProductUpdateManyWithoutCompanyInput
  }

  export type CompanyUncheckedUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: NullableStringFieldUpdateOperationsInput | string | null
    celphone1?: StringFieldUpdateOperationsInput | string
    celphone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    url_site?: NullableStringFieldUpdateOperationsInput | string | null
    url_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    url_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    url_linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_params?: CompanyParamsUncheckedUpdateManyWithoutCompanyInput
    product_category?: ProductCategoryUncheckedUpdateManyWithoutCompanyInput
    sales?: SaleUncheckedUpdateManyWithoutCompanyInput
    price_tables?: PriceTableUncheckedUpdateManyWithoutCompanyInput
    products?: ProductUncheckedUpdateManyWithoutCompanyInput
  }

  export type SaleUpsertWithWhereUniqueWithoutUserInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutUserInput, SaleUncheckedUpdateWithoutUserInput>
    create: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutUserInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutUserInput, SaleUncheckedUpdateWithoutUserInput>
  }

  export type SaleUpdateManyWithWhereWithoutUserInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutSaleInput>
  }

  export type CompanyParamsCreateManyCompanyInput = {
    id?: string
    environment?: Environment | null
    obs_email?: string | null
    obs_voucher?: string | null
    privacy_policy?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductCategoryCreateManyCompanyInput = {
    id?: string
    product_type: ProductType
    config_type_id?: string | null
    title: string
    description: string
    url_banner?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SaleCreateManyCompanyInput = {
    id?: string
    user_id: string
    session?: string | null
    status?: SaleStatus
    name: string
    last_name: string
    cellphone: string
    email: string
    cep: string
    state: string
    city: string
    address: string
    address_number?: string | null
    address_complement?: string | null
    subtotal: number
    descount_voucher?: string | null
    descount_percentage?: number | null
    descount_value?: number | null
    total: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PriceTableCreateManyCompanyInput = {
    id?: string
    description: string
    initial_date?: Date | string | null
    final_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductCreateManyCompanyInput = {
    id?: string
    product_category_id: string
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner?: string | null
    active?: boolean
    combo?: boolean | null
    amount_min_sale?: number | null
    amount_max_sale?: number | null
    amount_max_total_diary?: number | null
    highlighted?: boolean | null
    order_on_menu?: number | null
    for_sale?: boolean | null
    age_group?: string | null
    promotion?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateManyCompanyInput = {
    id?: string
    document?: string | null
    name: string
    last_name: string
    sex_type?: Sex | null
    birth_date?: Date | string | null
    celphone?: string | null
    email: string
    cep?: string | null
    state?: string | null
    city?: string | null
    neighborhood?: string | null
    address?: string | null
    address_number?: string | null
    address_complement?: string | null
    active?: boolean | null
    email_confirmed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CompanyParamsUpdateWithoutCompanyInput = {
    environment?: NullableEnumEnvironmentFieldUpdateOperationsInput | Environment | null
    obs_email?: NullableStringFieldUpdateOperationsInput | string | null
    obs_voucher?: NullableStringFieldUpdateOperationsInput | string | null
    privacy_policy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyParamsUncheckedUpdateWithoutCompanyInput = {
    environment?: NullableEnumEnvironmentFieldUpdateOperationsInput | Environment | null
    obs_email?: NullableStringFieldUpdateOperationsInput | string | null
    obs_voucher?: NullableStringFieldUpdateOperationsInput | string | null
    privacy_policy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyParamsUncheckedUpdateManyWithoutCompany_paramsInput = {
    environment?: NullableEnumEnvironmentFieldUpdateOperationsInput | Environment | null
    obs_email?: NullableStringFieldUpdateOperationsInput | string | null
    obs_voucher?: NullableStringFieldUpdateOperationsInput | string | null
    privacy_policy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryUpdateWithoutCompanyInput = {
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    config_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductUpdateManyWithoutProduct_categoryInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryUncheckedUpdateWithoutCompanyInput = {
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    config_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductUncheckedUpdateManyWithoutProduct_categoryInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryUncheckedUpdateManyWithoutProduct_categoryInput = {
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    config_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUpdateWithoutCompanyInput = {
    user?: UserUpdateOneWithoutSaleInput
    session?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSaleStatusFieldUpdateOperationsInput | SaleStatus
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    descount_voucher?: NullableStringFieldUpdateOperationsInput | string | null
    descount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    descount_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    items?: ItemSalesUpdateManyWithoutSalesInput
    history?: SalesHistoryUpdateManyWithoutSaleInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateWithoutCompanyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSaleStatusFieldUpdateOperationsInput | SaleStatus
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    descount_voucher?: NullableStringFieldUpdateOperationsInput | string | null
    descount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    descount_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    items?: ItemSalesUncheckedUpdateManyWithoutSalesInput
    history?: SalesHistoryUncheckedUpdateManyWithoutSaleInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateManyWithoutSalesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSaleStatusFieldUpdateOperationsInput | SaleStatus
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    descount_voucher?: NullableStringFieldUpdateOperationsInput | string | null
    descount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    descount_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceTableUpdateWithoutCompanyInput = {
    description?: StringFieldUpdateOperationsInput | string
    initial_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    final_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductPricesTableUpdateManyWithoutPrice_tableInput
  }

  export type PriceTableUncheckedUpdateWithoutCompanyInput = {
    description?: StringFieldUpdateOperationsInput | string
    initial_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    final_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductPricesTableUncheckedUpdateManyWithoutPrice_tableInput
  }

  export type PriceTableUncheckedUpdateManyWithoutPrice_tablesInput = {
    description?: StringFieldUpdateOperationsInput | string
    initial_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    final_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutCompanyInput = {
    product_category?: ProductCategoryUpdateOneRequiredWithoutProductsInput
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    combo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount_min_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_total_diary?: NullableIntFieldUpdateOperationsInput | number | null
    highlighted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_on_menu?: NullableIntFieldUpdateOperationsInput | number | null
    for_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    promotion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    items?: ProductComboUpdateManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionUpdateManyWithoutProductInput
    total_sale?: ProductTotalSalesUpdateManyWithoutProductInput
    product_item?: ProductComboUpdateManyWithoutItemInput
    sales_item?: ItemSalesUpdateManyWithoutProductInput
    price_table?: ProductPricesTableUpdateManyWithoutProductInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutCompanyInput = {
    product_category_id?: StringFieldUpdateOperationsInput | string
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    combo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount_min_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_total_diary?: NullableIntFieldUpdateOperationsInput | number | null
    highlighted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_on_menu?: NullableIntFieldUpdateOperationsInput | number | null
    for_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    promotion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    items?: ProductComboUncheckedUpdateManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionUncheckedUpdateManyWithoutProductInput
    total_sale?: ProductTotalSalesUncheckedUpdateManyWithoutProductInput
    product_item?: ProductComboUncheckedUpdateManyWithoutItemInput
    sales_item?: ItemSalesUncheckedUpdateManyWithoutProductInput
    price_table?: ProductPricesTableUncheckedUpdateManyWithoutProductInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyWithoutProductsInput = {
    product_category_id?: StringFieldUpdateOperationsInput | string
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    combo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount_min_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_total_diary?: NullableIntFieldUpdateOperationsInput | number | null
    highlighted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_on_menu?: NullableIntFieldUpdateOperationsInput | number | null
    for_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    promotion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutCompanyInput = {
    document?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sex_type?: NullableEnumSexFieldUpdateOperationsInput | Sex | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    celphone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Sale?: SaleUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    document?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sex_type?: NullableEnumSexFieldUpdateOperationsInput | Sex | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    celphone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Sale?: SaleUncheckedUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateManyWithoutUsersInput = {
    document?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sex_type?: NullableEnumSexFieldUpdateOperationsInput | Sex | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    celphone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyProduct_categoryInput = {
    id?: string
    company_id: string
    product_type: ProductType
    sku: string
    title: string
    subtitle: string
    description: string
    url_banner?: string | null
    active?: boolean
    combo?: boolean | null
    amount_min_sale?: number | null
    amount_max_sale?: number | null
    amount_max_total_diary?: number | null
    highlighted?: boolean | null
    order_on_menu?: number | null
    for_sale?: boolean | null
    age_group?: string | null
    promotion?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductUpdateWithoutProduct_categoryInput = {
    company?: CompanyUpdateOneRequiredWithoutProductsInput
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    combo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount_min_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_total_diary?: NullableIntFieldUpdateOperationsInput | number | null
    highlighted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_on_menu?: NullableIntFieldUpdateOperationsInput | number | null
    for_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    promotion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    items?: ProductComboUpdateManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionUpdateManyWithoutProductInput
    total_sale?: ProductTotalSalesUpdateManyWithoutProductInput
    product_item?: ProductComboUpdateManyWithoutItemInput
    sales_item?: ItemSalesUpdateManyWithoutProductInput
    price_table?: ProductPricesTableUpdateManyWithoutProductInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutProduct_categoryInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    product_type?: EnumProductTypeFieldUpdateOperationsInput | ProductType
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url_banner?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    combo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount_min_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_sale?: NullableIntFieldUpdateOperationsInput | number | null
    amount_max_total_diary?: NullableIntFieldUpdateOperationsInput | number | null
    highlighted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_on_menu?: NullableIntFieldUpdateOperationsInput | number | null
    for_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    promotion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    items?: ProductComboUncheckedUpdateManyWithoutProductInput
    config_product_exeption?: ConfigProductExceptionUncheckedUpdateManyWithoutProductInput
    total_sale?: ProductTotalSalesUncheckedUpdateManyWithoutProductInput
    product_item?: ProductComboUncheckedUpdateManyWithoutItemInput
    sales_item?: ItemSalesUncheckedUpdateManyWithoutProductInput
    price_table?: ProductPricesTableUncheckedUpdateManyWithoutProductInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductComboCreateManyProductInput = {
    id?: string
    item_id: string
    amount: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConfigProductExceptionCreateManyProductInput = {
    id?: string
    date: Date | string
    action?: TypeActionExceptionProduct
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductTotalSalesCreateManyProductInput = {
    id?: string
    date: Date | string
    amount: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductComboCreateManyItemInput = {
    id?: string
    product_id: string
    amount: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ItemSalesCreateManyProductInput = {
    id?: string
    sale_id: string
    amount: number
    unitary_value: number
    percent_discount: number
    subtotal: number
    total: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductPricesTableCreateManyProductInput = {
    id?: string
    price_table_id: string
    value: number
    value_promotion: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductComboUpdateWithoutProductInput = {
    item?: ProductUpdateOneRequiredWithoutProduct_itemInput
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductComboUncheckedUpdateWithoutProductInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductComboUncheckedUpdateManyWithoutItemsInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigProductExceptionUpdateWithoutProductInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: EnumTypeActionExceptionProductFieldUpdateOperationsInput | TypeActionExceptionProduct
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigProductExceptionUncheckedUpdateWithoutProductInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: EnumTypeActionExceptionProductFieldUpdateOperationsInput | TypeActionExceptionProduct
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigProductExceptionUncheckedUpdateManyWithoutConfig_product_exeptionInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: EnumTypeActionExceptionProductFieldUpdateOperationsInput | TypeActionExceptionProduct
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTotalSalesUpdateWithoutProductInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTotalSalesUncheckedUpdateWithoutProductInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTotalSalesUncheckedUpdateManyWithoutTotal_saleInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductComboUpdateWithoutItemInput = {
    product?: ProductUpdateOneRequiredWithoutItemsInput
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductComboUncheckedUpdateWithoutItemInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductComboUncheckedUpdateManyWithoutProduct_itemInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemSalesUpdateWithoutProductInput = {
    sales?: SaleUpdateOneRequiredWithoutItemsInput
    amount?: IntFieldUpdateOperationsInput | number
    unitary_value?: FloatFieldUpdateOperationsInput | number
    percent_discount?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemSalesUncheckedUpdateWithoutProductInput = {
    sale_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    unitary_value?: FloatFieldUpdateOperationsInput | number
    percent_discount?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemSalesUncheckedUpdateManyWithoutSales_itemInput = {
    sale_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    unitary_value?: FloatFieldUpdateOperationsInput | number
    percent_discount?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPricesTableUpdateWithoutProductInput = {
    price_table?: PriceTableUpdateOneWithoutProductsInput
    value?: FloatFieldUpdateOperationsInput | number
    value_promotion?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPricesTableUncheckedUpdateWithoutProductInput = {
    price_table_id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    value_promotion?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPricesTableCreateManyPrice_tableInput = {
    id?: string
    product_id: string
    value: number
    value_promotion: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductPricesTableUpdateWithoutPrice_tableInput = {
    product?: ProductUpdateOneWithoutPrice_tableInput
    value?: FloatFieldUpdateOperationsInput | number
    value_promotion?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPricesTableUncheckedUpdateWithoutPrice_tableInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    value_promotion?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPricesTableUncheckedUpdateManyWithoutProductsInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    value_promotion?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemSalesCreateManySalesInput = {
    id?: string
    product_id: string
    amount: number
    unitary_value: number
    percent_discount: number
    subtotal: number
    total: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesHistoryCreateManySaleInput = {
    id?: string
    historic: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ItemSalesUpdateWithoutSalesInput = {
    product?: ProductUpdateOneRequiredWithoutSales_itemInput
    amount?: IntFieldUpdateOperationsInput | number
    unitary_value?: FloatFieldUpdateOperationsInput | number
    percent_discount?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemSalesUncheckedUpdateWithoutSalesInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    unitary_value?: FloatFieldUpdateOperationsInput | number
    percent_discount?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemSalesUncheckedUpdateManyWithoutItemsInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    unitary_value?: FloatFieldUpdateOperationsInput | number
    percent_discount?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesHistoryUpdateWithoutSaleInput = {
    historic?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesHistoryUncheckedUpdateWithoutSaleInput = {
    historic?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesHistoryUncheckedUpdateManyWithoutHistoryInput = {
    historic?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateManyUserInput = {
    id?: string
    company_id: string
    session?: string | null
    status?: SaleStatus
    name: string
    last_name: string
    cellphone: string
    email: string
    cep: string
    state: string
    city: string
    address: string
    address_number?: string | null
    address_complement?: string | null
    subtotal: number
    descount_voucher?: string | null
    descount_percentage?: number | null
    descount_value?: number | null
    total: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SaleUpdateWithoutUserInput = {
    company?: CompanyUpdateOneWithoutSalesInput
    session?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSaleStatusFieldUpdateOperationsInput | SaleStatus
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    descount_voucher?: NullableStringFieldUpdateOperationsInput | string | null
    descount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    descount_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    items?: ItemSalesUpdateManyWithoutSalesInput
    history?: SalesHistoryUpdateManyWithoutSaleInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateWithoutUserInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSaleStatusFieldUpdateOperationsInput | SaleStatus
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    descount_voucher?: NullableStringFieldUpdateOperationsInput | string | null
    descount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    descount_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    items?: ItemSalesUncheckedUpdateManyWithoutSalesInput
    history?: SalesHistoryUncheckedUpdateManyWithoutSaleInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateManyWithoutSaleInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSaleStatusFieldUpdateOperationsInput | SaleStatus
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_number?: NullableStringFieldUpdateOperationsInput | string | null
    address_complement?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    descount_voucher?: NullableStringFieldUpdateOperationsInput | string | null
    descount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    descount_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}