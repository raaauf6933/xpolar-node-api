import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Clients = async () => {
  try {
    const result = await prisma.client.findMany();

    return result;
  } catch (error) {
    return error;
  }
};

export default Clients;
