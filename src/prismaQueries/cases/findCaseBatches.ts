import { OrderDirection } from '@/__generated__/resolvers-types';
import { PrismaClient, case_batch, client } from '@prisma/client';

const prisma = new PrismaClient();

type CaseBatches = (case_batch & {
  client: client;
})[];

interface findCaseBatchesOpts {
  sortBy: {
    direction?: OrderDirection;
  };
}

const findCaseBatches = async (
  Opts: findCaseBatchesOpts
): Promise<{
  count: number;
  caseBatches: CaseBatches;
}> => {
  const [count, caseBatches] = await prisma.$transaction([
    prisma.case_batch.count({
      orderBy: {
        createdAt: Opts.sortBy?.direction,
      },
    }),
    prisma.case_batch.findMany({
      include: {
        client: true,
      },
      orderBy: {
        createdAt: Opts.sortBy?.direction,
      },
    }),
  ]);

  return {
    caseBatches,
    count,
  };
};

export default findCaseBatches;
