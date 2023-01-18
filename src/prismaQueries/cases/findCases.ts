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
  const spreadFilter = { ...filter };

  const {
    batchNumber,
    birthDate,
    clientReference,
    debtorId,
    department,
    firstName,
    lastName,
    status,
  } = spreadFilter;

  const batchNumbers = batchNumber?.split(',');

  const getBatchNumbers = () => {
    if (batchNumbers && batchNumbers.length > 0) {
      // const filterBatchNumbers = {
      //   batchReference: {},
      // };

      const batches = batchNumbers.map((e)=> ({
        caseBatch: {
          batchReference: {
            startsWith: e,
          },
        }
      }))

      // batchNumbers?.reduce(function (o, s) {
      //   return (o['AND'] = {
      //     batchReference: {
      //       startsWith: s,
      //     },
      //   });
      // }, filterBatchNumbers);

      // filterBatchNumbers.batchReference = {
      //   startsWith: batchNumbers[0],
      // };

      return batches;
    } else {
      return {};
    }

    // batchNumbers?.forEach((val,index)=> {

    //   // if(index === 0){
    //   //   filterBatchNumbers.batchReference = {

    //   //   }
    //   // }else{

    //   // }

    // })
  };

  

  const filterOpts: FilterOpts = {
    isDeleted: false,
    // AND: {

    AND: [
      {
        caseBatch: {
          status: 'SUCCESS',
        },
      },

      {
        OR: getBatchNumbers(),
      },
    ],

    // {

    // batchReference: {
    //     in:batchNumbers,

    // },
    // OR:{
    //   batchReference:{
    //     startsWith:""
    //   },
    //   OR:{
    //     batchReference:""
    //   }
    // },
    // },
    // },
    //   AND: {
    //     person: {
    //       ...(firstName
    //         ? {
    //             firstName: {
    //               contains: firstName,
    //             },
    //           }
    //         : {}),
    //       AND: {
    //         ...(lastName ? { lastName } : {}),
    //       },
    //     },
    //   },
    // },
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
