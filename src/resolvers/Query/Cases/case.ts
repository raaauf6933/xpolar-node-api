import { QueryCaseArgs } from '@/__generated__/resolvers-types';
import findCase from '@/prismaQueries/cases/findCase';

const Case = async (_, args: QueryCaseArgs) => {
  const _case = await findCase({
    id: parseInt(args.id),
  });

  return _case;
};

export default Case;
