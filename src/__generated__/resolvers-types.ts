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

export type CaseBatch = {
  __typename?: 'CaseBatch';
  assignmentEndDate?: Maybe<Scalars['DateTime']>;
  assignmentStartDate?: Maybe<Scalars['DateTime']>;
  batch_id?: Maybe<Scalars['String']>;
  batch_reference?: Maybe<Scalars['String']>;
  cases?: Maybe<Array<Maybe<Cases>>>;
  client?: Maybe<Client>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

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

export type Cases = {
  __typename?: 'Cases';
  caseBatch?: Maybe<CaseBatch>;
  id: Scalars['ID'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  person?: Maybe<Person>;
};

export type Client = {
  __typename?: 'Client';
  code?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  status: CommonStatus;
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
};

export type Pagination = {
  __typename?: 'Pagination';
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type Person = {
  __typename?: 'Person';
  Cases?: Maybe<Cases>;
  id: Scalars['ID'];
  isDeleted?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  caseBatches?: Maybe<CaseBatchesCountableConnection>;
  clients?: Maybe<ClientCountableConnection>;
};


export type QueryCaseBatchesArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
  sortBy?: InputMaybe<CaseBatchesSortingInput>;
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CaseBatch: ResolverTypeWrapper<CaseBatch>;
  CaseBatchesCountableConnection: ResolverTypeWrapper<CaseBatchesCountableConnection>;
  CaseBatchesCountableEdge: ResolverTypeWrapper<CaseBatchesCountableEdge>;
  CaseBatchesSortingInput: CaseBatchesSortingInput;
  Cases: ResolverTypeWrapper<Cases>;
  Client: ResolverTypeWrapper<Client>;
  ClientCountableConnection: ResolverTypeWrapper<ClientCountableConnection>;
  ClientCountableEdge: ResolverTypeWrapper<ClientCountableEdge>;
  CommonStatus: CommonStatus;
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
  Boolean: Scalars['Boolean'];
  CaseBatch: CaseBatch;
  CaseBatchesCountableConnection: CaseBatchesCountableConnection;
  CaseBatchesCountableEdge: CaseBatchesCountableEdge;
  CaseBatchesSortingInput: CaseBatchesSortingInput;
  Cases: Cases;
  Client: Client;
  ClientCountableConnection: ClientCountableConnection;
  ClientCountableEdge: ClientCountableEdge;
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
  Person: Person;
  Query: {};
  String: Scalars['String'];
  Time: Scalars['Time'];
  Upload: Scalars['Upload'];
  createClientInput: CreateClientInput;
  importCasesInput: ImportCasesInput;
}>;

export type CaseBatchResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['CaseBatch'] = ResolversParentTypes['CaseBatch']> = ResolversObject<{
  assignmentEndDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  assignmentStartDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  batch_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  batch_reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cases?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cases']>>>, ParentType, ContextType>;
  client?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type CasesResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Cases'] = ResolversParentTypes['Cases']> = ResolversObject<{
  caseBatch?: Resolver<Maybe<ResolversTypes['CaseBatch']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClientResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Client'] = ResolversParentTypes['Client']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['CommonStatus'], ParentType, ContextType>;
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
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaginationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Pagination'] = ResolversParentTypes['Pagination']> = ResolversObject<{
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = ResolversObject<{
  Cases?: Resolver<Maybe<ResolversTypes['Cases']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  caseBatches?: Resolver<Maybe<ResolversTypes['CaseBatchesCountableConnection']>, ParentType, ContextType, RequireFields<QueryCaseBatchesArgs, 'limit' | 'page'>>;
  clients?: Resolver<Maybe<ResolversTypes['ClientCountableConnection']>, ParentType, ContextType, RequireFields<QueryClientsArgs, 'limit' | 'page'>>;
}>;

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = MyContext> = ResolversObject<{
  CaseBatch?: CaseBatchResolvers<ContextType>;
  CaseBatchesCountableConnection?: CaseBatchesCountableConnectionResolvers<ContextType>;
  CaseBatchesCountableEdge?: CaseBatchesCountableEdgeResolvers<ContextType>;
  Cases?: CasesResolvers<ContextType>;
  Client?: ClientResolvers<ContextType>;
  ClientCountableConnection?: ClientCountableConnectionResolvers<ContextType>;
  ClientCountableEdge?: ClientCountableEdgeResolvers<ContextType>;
  CreateClient?: CreateClientResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Error?: ErrorResolvers<ContextType>;
  ImportCases?: ImportCasesResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Pagination?: PaginationResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Time?: GraphQLScalarType;
  Upload?: GraphQLScalarType;
}>;

