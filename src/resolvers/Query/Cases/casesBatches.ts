import { QueryCaseBatchesArgs } from '@/__generated__/resolvers-types';
import findCaseBatches from '@/prismaQueries/cases/findCaseBatches';
import { nodeListPaginate } from '@utils/nodeListPaginate';

const CaseBatches = async (_, args: QueryCaseBatchesArgs) => {
  const { limit, page } = args;

  try {
    const { count, caseBatches } = await findCaseBatches({
      sortBy: {
        direction: args.sortBy?.direction,
      },
    });

    
  

    return nodeListPaginate(page, limit, caseBatches, count);
  } catch (error) {
    return error;
  }
};

export default CaseBatches;
