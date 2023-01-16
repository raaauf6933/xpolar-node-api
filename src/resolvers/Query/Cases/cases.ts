import { QueryCasesArgs } from '@/__generated__/resolvers-types';
import findCases from '@/prismaQueries/cases/findCases';
import { nodeListPaginate } from '@utils/nodeListPaginate';

const Cases = async (_, args: QueryCasesArgs) => {
  const { limit, page, filter } = args;

  const { cases, count } = await findCases({
    limit,
    page,
    sortBy: {
      direction: args.sortBy?.direction,
    },
    filter,
  });

  // format shape of db result
  const data = cases.map((caseBatch) => ({
    ...caseBatch,
    caseBatch: caseBatch.caseBatch,
  }));

  return nodeListPaginate(page, limit, data, count);
};

export default Cases;
