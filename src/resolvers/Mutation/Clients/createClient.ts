import { PrismaClient } from '@prisma/client';
import { CommonStatus, MutationCreateClientArgs } from '@types';

const prisma = new PrismaClient();

const CreateClient = async (_, args: MutationCreateClientArgs) => {
  try {
    const result = await prisma.client.create({
      data: {
        name: args.input.name,
        status: args.input.status === CommonStatus.Act ? 1 : 0,
      },
    });

    return {
      client: {
        ...result,
        status: result.status ? CommonStatus.Act : CommonStatus.Deact,
      },
    };
  } catch (error) {
    return {
      errors: error,
    };
  }
};

export default CreateClient;
