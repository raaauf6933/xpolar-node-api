import { PrismaClient } from '@prisma/client';
import { Error, MutationCreateClientArgs } from '@types';

const prisma = new PrismaClient();

const createClientValidator = async (args: MutationCreateClientArgs) => {
  const errors: Error[] = [];

  const code = await prisma.client.findFirst({
    where: {
      code: args.input.code,
    },
  });
  const name = await prisma.client.findFirst({
    where: {
      name: args.input.name,
    },
  });

  if (args.input.code > 999) {
    errors.push({
      field: 'code',
      message: 'Code should be in range from 1 - 999',
    });
  }
  if (code) {
    errors.push({
      field: 'code',
      message: 'Code is already taken',
    });
  }
  if (name) {
    errors.push({
      field: 'name',
      message: 'name is already taken',
    });
  }

  if (errors.length > 0) return errors;
};

const CreateClient = async (_, args: MutationCreateClientArgs) => {
  try {
    // validator
    const errors = await createClientValidator(args);

    if (errors) return { errors };

    const result = await prisma.client.create({
      data: {
        name: args.input.name,
        status: args.input.status,
        code: args.input.code,
      },
    });

    return {
      client: {
        ...result,
      },
    };
  } catch (error) {
    return {
      errors: error,
    };
  }
};

export default CreateClient;
