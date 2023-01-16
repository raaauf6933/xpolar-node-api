import { MutationImportCasesArgs } from '@/__generated__/resolvers-types';
import { MyContext } from '@/config/context';
import CreateCasebatch from '@/controller/cases/ImportCases/createCaseBatch';
import CreateCases from '@/controller/cases/ImportCases/createCases';
import { ImportCaseValidator } from '@/controller/cases/ImportCases/importCases.validator';

const ImportCases = async (
  _,
  args: MutationImportCasesArgs,
  context: MyContext
) => {
  const { prisma } = context;
  try {
    // validator
    const { errors, data } = await ImportCaseValidator(args);
    if (errors) return { errors };

    // if there's no then error proceed

    // create Batch
    const caseBatch = await CreateCasebatch(data.args, prisma);

    // create Cases
    CreateCases(data.args, caseBatch, data.cases, prisma);

    return {
      caseBatch,
      error: null,
    };
  } catch (error) {
    return error;
  }
};

export default ImportCases;
