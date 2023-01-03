import { CommonStatus } from '@/__generated__/resolvers-types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Clients = async () => {
  try {
    const result = await prisma.client.findMany();

    return result.map((e) => ({
      ...e,
      status: e.status ? CommonStatus.Act : CommonStatus.Deact,
    }));
  } catch (error) {
    return error;
  }
};

export default Clients;
