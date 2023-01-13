import { PrismaClient, client } from '@prisma/client';

const prisma = new PrismaClient();

const getClient = async (id: number): Promise<client | null> => {
  const result = await prisma.client.findFirst({
    where: {
      id,
    },
  });

  return result;
};

export default getClient;
