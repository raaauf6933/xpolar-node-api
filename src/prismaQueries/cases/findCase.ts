import {
  PrismaClient,
  address,
  case_batch,
  cases,
  client,
  contacts,
  person,
} from '@prisma/client';

const prisma = new PrismaClient();

interface findCaseOpts {
  id: number;
}

type Case =
  | (cases & {
      caseBatch: case_batch & {
        client: client;
      };
      person: person & {
        address: address[];
        contacts: contacts[];
      };
    })
  | null;

const findCase = async (Opts: findCaseOpts): Promise<Case> => {
  const _case = await prisma.cases.findFirst({
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
    where: {
      caseBatch: {
        status: 'SUCCESS',
      },
      AND: {
        id: Opts.id,
      },
    },
  });

  return _case;
};

export default findCase;
