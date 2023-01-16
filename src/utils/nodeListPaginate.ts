import { PageInfo } from '@types';

export const nodeListPaginate = <T extends object>(
  page: number,
  limit: number,
  data: T[],
  count: number
) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const result = data.map((e) => ({ node: { ...e } }));

  const pageInfo: PageInfo = {};

  if (endIndex < count) {
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

  const from = page * limit - (limit - 1);
  const to = Math.min(from + limit - 1, count);

  pageInfo.showing = {
    from: from,
    to: to,
  };

  return {
    edges: result,
    count: data.length,
    totalCount: count,
    pageInfo,
  };
};
