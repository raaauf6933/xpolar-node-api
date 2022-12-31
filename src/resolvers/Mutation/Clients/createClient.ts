import { PrismaClient } from '@prisma/client';
import { MutationCreateClientArgs } from 'src/__generated__/resolvers-types';

const prisma = new PrismaClient();

const CreateClient = async (_, args: MutationCreateClientArgs) => {

  try {
    const result = await prisma.client.create({
      data: {
        name: args.input.name,
        status: 1,
      },
    });

    return { client: result };
  } catch (error) {
    return {
      errors: error,
    };
  }
};

export default CreateClient;
