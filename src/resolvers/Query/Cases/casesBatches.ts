import { QueryCaseBatchesArgs } from '@/__generated__/resolvers-types';
import { PrismaClient } from '@prisma/client';
import { nodeListPaginate } from '@utils/nodeListPaginate';

const prisma = new PrismaClient();

const CaseBatches = async (_, args: QueryCaseBatchesArgs) => {
  const { limit, page } = args;

  try {
    const case_batches = await prisma.case_batch.findMany({
      include: {
        client: true,
      },
      orderBy: {
        createdAt: args.sortBy?.direction,
      },
    });

    // format shape of db result
    const data = case_batches.map((caseBatch) => ({
      ...caseBatch,
      assignmentEndDate: caseBatch.assignment_end_date,
      assignmentStartDate: caseBatch.assignment_start_date,
    }));

    return nodeListPaginate(page, limit, data);
  } catch (error) {
    return error;
  }
};

export default CaseBatches;
