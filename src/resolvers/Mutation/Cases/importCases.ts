import { MutationImportCasesArgs } from '@/__generated__/resolvers-types';
import { MyContext } from '@/config/context';
import createNewBatchId from '@/helpers/createNewBatchId';
import ImportCsvToJson from '@/helpers/importCsvToJson';

const ImportCases = async (
  _,
  args: MutationImportCasesArgs,
  context: MyContext
) => {
  const { prisma } = context;
  try {
    const json = await ImportCsvToJson(args.file);

    const { id: batch_reference } = await createNewBatchId(args.input.client, {
      code: true,
    });
    const { id: batch_id } = await createNewBatchId(args.input.client, {
      code: false,
    });

    const result = await prisma.case_batch.create({
      data: {
        assignment_end_date: new Date(
          args.input.assignmentEndDate
        ).toISOString(),
        assignment_start_date: new Date(
          args.input.assignmentStartDate
        ).toISOString(),
        batch_reference,
        batch_id,
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

    if (Array.isArray(json)) {
      const testData = json.map((test) => ({ first_name: test.first_name }));
      await prisma.test_upload.createMany({
        data: testData,
      });
    }

    const caseBatch = {
      ...result,
    };

    return {
      caseBatch,
    };
  } catch (error) {
    return {
      errors: error,
    };
  }
};

export default ImportCases;
