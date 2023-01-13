import { PrismaClient, case_batch } from '@prisma/client';

const prisma = new PrismaClient();

const GetLastCaseBatch = async (id: number): Promise<case_batch[]> => {
  const result = await prisma.case_batch.findMany({
    where: {
      client_id: id,
    },
    take: -1,
  });

  return result;
};

export default GetLastCaseBatch;
