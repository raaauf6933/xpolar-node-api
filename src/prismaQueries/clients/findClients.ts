import { PrismaClient, client } from '@prisma/client';

const prisma = new PrismaClient();

const findClients = async (): Promise<{
  count: number;
  clients: client[];
}> => {
  const [count, clients] = await prisma.$transaction([
    prisma.client.count(),
    prisma.client.findMany(),
  ]);

  return {
    count,
    clients,
  };
};

export default findClients;
