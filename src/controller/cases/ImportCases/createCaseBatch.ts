import { MutationImportCasesArgs } from '@/__generated__/resolvers-types';
import createNewBatchId from '@/helpers/createNewBatchId';
import { PrismaClient } from '@prisma/client';

const CreateCasebatch = async (
  args: MutationImportCasesArgs,
  prisma: PrismaClient
) => {
  const { id: batchReference } = await createNewBatchId(args?.input?.client, {
    code: true,
  });
  const { id: batchId } = await createNewBatchId(args.input.client, {
    code: false,
  });

  const result = await prisma.case_batch.create({
    data: {
      assignmentEndDate: new Date(args.input.assignmentEndDate).toISOString(),
      assignmentStartDate: new Date(
        args.input.assignmentStartDate
      ).toISOString(),
      batchReference,
      batchId,
      status: 'UPLOADING',
      client: {
        connect: {
          id: parseInt(args.input.client),
        },
      },
    },
    include: {
      client: true,
    },
  });

  return result;
};

export default CreateCasebatch;
