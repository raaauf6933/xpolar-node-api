import { QueryClientsArgs } from '@/__generated__/resolvers-types';
import findClients from '@/prismaQueries/clients/findClients';
import { nodeListPaginate } from '@utils/nodeListPaginate';

const Clients = async (_, args: QueryClientsArgs) => {
  const { limit, page } = args;
  try {
    const { count, clients } = await findClients();

    return nodeListPaginate(page, limit, clients, count);
  } catch (error) {
    return error;
  }
};

export default Clients;
