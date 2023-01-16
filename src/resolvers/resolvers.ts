// import { Resolvers } from 'src/__generated__/resolvers-types';
import clients from './Query/Clients/clients';
import createClient from './Mutation/Clients/createClient';
import importCases from './Mutation/Cases/importCases';
import caseBatches from './Query/Cases/casesBatches';
import _case from './Query/Cases/case';
import cases from './Query/Cases/cases';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';
import { DateScalar, TimeScalar, DateTimeScalar } from 'graphql-date-scalars';

export const resolvers = {
  Upload: GraphQLUpload,
  DateTime: DateTimeScalar,
  Time: TimeScalar,
  Date: DateScalar,
  Query: {
    case: _case,
    cases,
    clients,
    caseBatches,
  },
  Mutation: {
    createClient,
    importCases,
  },
};
