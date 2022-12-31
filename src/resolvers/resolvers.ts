// import { Resolvers } from 'src/__generated__/resolvers-types';
import clients from './Query/Clients/clients';
import createClient from './Mutation/Clients/createClient';

export const resolvers = {
  Query: {
    clients,
  },
  Mutation: {
    createClient,
  },
};
