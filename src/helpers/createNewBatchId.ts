import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createNewBatchId = async (
  client_id: string,
  opts: {
    code: boolean;
  }
): Promise<{ id: string; error?: unknown }> => {
  try {
    const client = await prisma.client.findFirst({
      where: {
        id: parseInt(client_id),
      },
    });
    const code = client?.code;

    const last_batch = await prisma.case_batch.findMany({
      where: {
        client_id: client?.id,
      },
      take: -1,
    });

    const last_batch_id = last_batch[0]?.batch_id
      ? parseInt(last_batch[0].batch_id) + 1
      : 1;

    const batchID = new Intl.NumberFormat('en-US', {
      minimumIntegerDigits: 5,
      useGrouping: false,
    }).format(last_batch_id);

    const id = opts.code ? `${code}${batchID}` : batchID;

    return { id };
  } catch (error) {
    return { error, id: '' };
  }
};

export default createNewBatchId;
