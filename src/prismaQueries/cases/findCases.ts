import {
  CasesFilterInput,
  OrderDirection,
} from '@/__generated__/resolvers-types';
import {
  PrismaClient,
  address,
  case_batch,
  cases,
  client,
  contacts,
  person,
  Prisma,
} from '@prisma/client';

const prisma = new PrismaClient();

type FilterOpts = Prisma.casesWhereInput;

interface findCasesOpts {
  sortBy: {
    direction?: OrderDirection;
  };
  limit: number;
  page: number;
  filter: CasesFilterInput | undefined | null;
}

type Cases = (cases & {
  caseBatch: case_batch & {
    client: client;
  };
  person: person & {
    contacts: contacts[];
    address: address[];
  };
})[];

const findCases = async (
  Opts: findCasesOpts
): Promise<{
  count: number;
  cases: Cases;
}> => {
  const { filter } = Opts;

  const firstName = filter?.firstName;
  const lastName = filter?.lastName;

  const filterOpts: FilterOpts = {
    isDeleted: false,
    AND: {
      caseBatch: {
        status: 'SUCCESS',
        AND: {
          batchReference: {
            in: ['20100002', '20200001'],
          },
        },
      },
      AND: {
        person: {
          ...(firstName
            ? {
                firstName: {
                  contains: firstName,
                },
              }
            : {}),
          AND: {
            ...(lastName ? { lastName } : {}),
          },
        },
      },
    },
  };

  const [count, cases] = await prisma.$transaction([
    prisma.cases.count({
      where: filterOpts,
      orderBy: {
        createdAt: Opts.sortBy?.direction,
      },
    }),
    prisma.cases.findMany({
      take: Opts.limit,
      skip: (Opts.page - 1) * Opts.limit,

      include: {
        caseBatch: {
          include: {
            client: true,
          },
        },
        person: {
          include: {
            address: true,
            contacts: true,
          },
        },
      },
      where: filterOpts,
      orderBy: {
        createdAt: Opts.sortBy?.direction,
      },
    }),
  ]);

  return {
    count,
    cases,
  };
};

export default findCases;
