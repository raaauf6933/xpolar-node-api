import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { MyContext } from '../config/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Time: any;
  Upload: any;
};

export type Address = {
  __typename?: 'Address';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  person?: Maybe<Person>;
  region?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type Case = {
  __typename?: 'Case';
  caseBatch?: Maybe<CaseBatch>;
  caseReference?: Maybe<Scalars['String']>;
  caseUniqueBatchId?: Maybe<Scalars['String']>;
  clientReference?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  person?: Maybe<Person>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CaseBatch = {
  __typename?: 'CaseBatch';
  assignmentEndDate?: Maybe<Scalars['DateTime']>;
  assignmentStartDate?: Maybe<Scalars['DateTime']>;
  batchId?: Maybe<Scalars['String']>;
  batchReference?: Maybe<Scalars['String']>;
  cases?: Maybe<Array<Maybe<Case>>>;
  client?: Maybe<Client>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  status?: Maybe<CaseBatchStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum CaseBatchStatus {
  Failed = 'FAILED',
  Success = 'SUCCESS',
  Uploading = 'UPLOADING'
}

export type CaseBatchesCountableConnection = {
  __typename?: 'CaseBatchesCountableConnection';
  count: Scalars['Int'];
  edges: Array<CaseBatchesCountableEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CaseBatchesCountableEdge = {
  __typename?: 'CaseBatchesCountableEdge';
  node: CaseBatch;
};

export type CaseBatchesSortingInput = {
  direction: OrderDirection;
};

export type CasesCountableConnection = {
  __typename?: 'CasesCountableConnection';
  count: Scalars['Int'];
  edges: Array<CasesCountableEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CasesCountableEdge = {
  __typename?: 'CasesCountableEdge';
  node: Case;
};

export type CasesFilterInput = {
  batchNumber?: InputMaybe<Scalars['String']>;
  clientReference?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type CasesSortingInput = {
  direction: OrderDirection;
};

export type Client = {
  __typename?: 'Client';
  code?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  status?: Maybe<CommonStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClientCountableConnection = {
  __typename?: 'ClientCountableConnection';
  count: Scalars['Int'];
  edges: Array<ClientCountableEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ClientCountableEdge = {
  __typename?: 'ClientCountableEdge';
  node: Client;
};

export enum CommonStatus {
  Act = 'ACT',
  Deact = 'DEACT'
}

export type Contacts = {
  __typename?: 'Contacts';
  contactValue?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  person?: Maybe<Person>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CreateClient = {
  __typename?: 'CreateClient';
  client?: Maybe<Client>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

export type Error = {
  __typename?: 'Error';
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type ImportCases = {
  __typename?: 'ImportCases';
  caseBatch?: Maybe<CaseBatch>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createClient?: Maybe<CreateClient>;
  importCases?: Maybe<ImportCases>;
};


export type MutationCreateClientArgs = {
  input: CreateClientInput;
};


export type MutationImportCasesArgs = {
  file?: InputMaybe<Scalars['Upload']>;
  input: ImportCasesInput;
};

export type Node = {
  id: Scalars['ID'];
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  next?: Maybe<Pagination>;
  previous?: Maybe<Pagination>;
  showing?: Maybe<PaginationItems>;
};

export type Pagination = {
  __typename?: 'Pagination';
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type PaginationItems = {
  __typename?: 'PaginationItems';
  from?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
};

export type Person = {
  __typename?: 'Person';
  address?: Maybe<Array<Maybe<Address>>>;
  birthDay?: Maybe<Scalars['String']>;
  cases?: Maybe<Case>;
  contacs?: Maybe<Array<Maybe<Contacts>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Query = {
  __typename?: 'Query';
  case?: Maybe<Case>;
  caseBatches?: Maybe<CaseBatchesCountableConnection>;
  cases?: Maybe<CasesCountableConnection>;
  clients?: Maybe<ClientCountableConnection>;
};


export type QueryCaseArgs = {
  id: Scalars['ID'];
};


export type QueryCaseBatchesArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
  sortBy?: InputMaybe<CaseBatchesSortingInput>;
};


export type QueryCasesArgs = {
  filter?: InputMaybe<CasesFilterInput>;
  limit: Scalars['Int'];
  page: Scalars['Int'];
  sortBy?: InputMaybe<CasesSortingInput>;
};


export type QueryClientsArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
};

export enum UserType {
  Admin = 'ADMIN',
  SuperAdmin = 'SUPER_ADMIN'
}

export type CreateClientInput = {
  code: Scalars['Int'];
  name: Scalars['String'];
  status: CommonStatus;
};

export type ImportCasesInput = {
  assignmentEndDate: Scalars['Date'];
  assignmentStartDate: Scalars['Date'];
  client: Scalars['ID'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Address: ResolverTypeWrapper<Address>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Case: ResolverTypeWrapper<Case>;
  CaseBatch: ResolverTypeWrapper<CaseBatch>;
  CaseBatchStatus: CaseBatchStatus;
  CaseBatchesCountableConnection: ResolverTypeWrapper<CaseBatchesCountableConnection>;
  CaseBatchesCountableEdge: ResolverTypeWrapper<CaseBatchesCountableEdge>;
  CaseBatchesSortingInput: CaseBatchesSortingInput;
  CasesCountableConnection: ResolverTypeWrapper<CasesCountableConnection>;
  CasesCountableEdge: ResolverTypeWrapper<CasesCountableEdge>;
  CasesFilterInput: CasesFilterInput;
  CasesSortingInput: CasesSortingInput;
  Client: ResolverTypeWrapper<Client>;
  ClientCountableConnection: ResolverTypeWrapper<ClientCountableConnection>;
  ClientCountableEdge: ResolverTypeWrapper<ClientCountableEdge>;
  CommonStatus: CommonStatus;
  Contacts: ResolverTypeWrapper<Contacts>;
  CreateClient: ResolverTypeWrapper<CreateClient>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Error: ResolverTypeWrapper<Error>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  ImportCases: ResolverTypeWrapper<ImportCases>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: never;
  OrderDirection: OrderDirection;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Pagination: ResolverTypeWrapper<Pagination>;
  PaginationItems: ResolverTypeWrapper<PaginationItems>;
  Person: ResolverTypeWrapper<Person>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  UserType: UserType;
  createClientInput: CreateClientInput;
  importCasesInput: ImportCasesInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Address: Address;
  Boolean: Scalars['Boolean'];
  Case: Case;
  CaseBatch: CaseBatch;
  CaseBatchesCountableConnection: CaseBatchesCountableConnection;
  CaseBatchesCountableEdge: CaseBatchesCountableEdge;
  CaseBatchesSortingInput: CaseBatchesSortingInput;
  CasesCountableConnection: CasesCountableConnection;
  CasesCountableEdge: CasesCountableEdge;
  CasesFilterInput: CasesFilterInput;
  CasesSortingInput: CasesSortingInput;
  Client: Client;
  ClientCountableConnection: ClientCountableConnection;
  ClientCountableEdge: ClientCountableEdge;
  Contacts: Contacts;
  CreateClient: CreateClient;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Error: Error;
  ID: Scalars['ID'];
  ImportCases: ImportCases;
  Int: Scalars['Int'];
  Mutation: {};
  Node: never;
  PageInfo: PageInfo;
  Pagination: Pagination;
  PaginationItems: PaginationItems;
  Person: Person;
  Query: {};
  String: Scalars['String'];
  Time: Scalars['Time'];
  Upload: Scalars['Upload'];
  createClientInput: CreateClientInput;
  importCasesInput: ImportCasesInput;
}>;

export type AddressResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  zipCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CaseResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Case'] = ResolversParentTypes['Case']> = ResolversObject<{
  caseBatch?: Resolver<Maybe<ResolversTypes['CaseBatch']>, ParentType, ContextType>;
  caseReference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caseUniqueBatchId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  clientReference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CaseBatchResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['CaseBatch'] = ResolversParentTypes['CaseBatch']> = ResolversObject<{
  assignmentEndDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  assignmentStartDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  batchId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  batchReference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cases?: Resolver<Maybe<Array<Maybe<ResolversTypes['Case']>>>, ParentType, ContextType>;
  client?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['CaseBatchStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CaseBatchesCountableConnectionResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['CaseBatchesCountableConnection'] = ResolversParentTypes['CaseBatchesCountableConnection']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['CaseBatchesCountableEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CaseBatchesCountableEdgeResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['CaseBatchesCountableEdge'] = ResolversParentTypes['CaseBatchesCountableEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['CaseBatch'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CasesCountableConnectionResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['CasesCountableConnection'] = ResolversParentTypes['CasesCountableConnection']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['CasesCountableEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CasesCountableEdgeResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['CasesCountableEdge'] = ResolversParentTypes['CasesCountableEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['Case'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClientResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Client'] = ResolversParentTypes['Client']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['CommonStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClientCountableConnectionResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['ClientCountableConnection'] = ResolversParentTypes['ClientCountableConnection']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ClientCountableEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClientCountableEdgeResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['ClientCountableEdge'] = ResolversParentTypes['ClientCountableEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['Client'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactsResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Contacts'] = ResolversParentTypes['Contacts']> = ResolversObject<{
  contactValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateClientResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['CreateClient'] = ResolversParentTypes['CreateClient']> = ResolversObject<{
  client?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type ErrorResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = ResolversObject<{
  field?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ImportCasesResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['ImportCases'] = ResolversParentTypes['ImportCases']> = ResolversObject<{
  caseBatch?: Resolver<Maybe<ResolversTypes['CaseBatch']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createClient?: Resolver<Maybe<ResolversTypes['CreateClient']>, ParentType, ContextType, RequireFields<MutationCreateClientArgs, 'input'>>;
  importCases?: Resolver<Maybe<ResolversTypes['ImportCases']>, ParentType, ContextType, RequireFields<MutationImportCasesArgs, 'input'>>;
}>;

export type NodeResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
}>;

export type PageInfoResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  next?: Resolver<Maybe<ResolversTypes['Pagination']>, ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Pagination']>, ParentType, ContextType>;
  showing?: Resolver<Maybe<ResolversTypes['PaginationItems']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaginationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Pagination'] = ResolversParentTypes['Pagination']> = ResolversObject<{
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaginationItemsResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['PaginationItems'] = ResolversParentTypes['PaginationItems']> = ResolversObject<{
  from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = ResolversObject<{
  address?: Resolver<Maybe<Array<Maybe<ResolversTypes['Address']>>>, ParentType, ContextType>;
  birthDay?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cases?: Resolver<Maybe<ResolversTypes['Case']>, ParentType, ContextType>;
  contacs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contacts']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  case?: Resolver<Maybe<ResolversTypes['Case']>, ParentType, ContextType, RequireFields<QueryCaseArgs, 'id'>>;
  caseBatches?: Resolver<Maybe<ResolversTypes['CaseBatchesCountableConnection']>, ParentType, ContextType, RequireFields<QueryCaseBatchesArgs, 'limit' | 'page'>>;
  cases?: Resolver<Maybe<ResolversTypes['CasesCountableConnection']>, ParentType, ContextType, RequireFields<QueryCasesArgs, 'limit' | 'page'>>;
  clients?: Resolver<Maybe<ResolversTypes['ClientCountableConnection']>, ParentType, ContextType, RequireFields<QueryClientsArgs, 'limit' | 'page'>>;
}>;

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = MyContext> = ResolversObject<{
  Address?: AddressResolvers<ContextType>;
  Case?: CaseResolvers<ContextType>;
  CaseBatch?: CaseBatchResolvers<ContextType>;
  CaseBatchesCountableConnection?: CaseBatchesCountableConnectionResolvers<ContextType>;
  CaseBatchesCountableEdge?: CaseBatchesCountableEdgeResolvers<ContextType>;
  CasesCountableConnection?: CasesCountableConnectionResolvers<ContextType>;
  CasesCountableEdge?: CasesCountableEdgeResolvers<ContextType>;
  Client?: ClientResolvers<ContextType>;
  ClientCountableConnection?: ClientCountableConnectionResolvers<ContextType>;
  ClientCountableEdge?: ClientCountableEdgeResolvers<ContextType>;
  Contacts?: ContactsResolvers<ContextType>;
  CreateClient?: CreateClientResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Error?: ErrorResolvers<ContextType>;
  ImportCases?: ImportCasesResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Pagination?: PaginationResolvers<ContextType>;
  PaginationItems?: PaginationItemsResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Time?: GraphQLScalarType;
  Upload?: GraphQLScalarType;
}>;

