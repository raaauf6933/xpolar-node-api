import { PageInfo } from '@types';

export const nodeListPaginate = <T extends object>(
  page: number,
  limit: number,
  data: T[]
) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const result = data
    .slice(startIndex, endIndex)
    .map((e) => ({ node: { ...e } }));

  const pageInfo: PageInfo = {};

  if (endIndex < data.length) {
    pageInfo.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (startIndex > 0) {
    pageInfo.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  return {
    edges: result,
    count: result.length,
    totalCount: data.length,
    pageInfo,
  };
};
