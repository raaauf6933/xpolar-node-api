import { QueryClientsArgs } from '@/__generated__/resolvers-types';
import { PrismaClient } from '@prisma/client';
import { nodeListPaginate } from '@utils/nodeListPaginate';

const prisma = new PrismaClient();

const Clients = async (_, args: QueryClientsArgs) => {
  const { limit, page } = args;
  try {
    const clients = await prisma.client.findMany();

    return nodeListPaginate(page, limit, clients);
  } catch (error) {
    return error;
  }
};

export default Clients;
