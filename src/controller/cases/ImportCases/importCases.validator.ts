import ImportCsvToJson from '@/helpers/importCsvToJson';
import {
  Error as scalarError,
  MutationImportCasesArgs,
} from '@/__generated__/resolvers-types';
import { genericError } from '@/utils/errors';

interface Params {
  cases: object[];
  args: MutationImportCasesArgs;
}

export const ImportCaseValidator = async (
  args: MutationImportCasesArgs
): Promise<{ errors?: scalarError[]; data: Params }> => {
  const errors: scalarError[] = [];
  let cases: object[] = [];

  // validate and upload csv file
  const casesPromise: Promise<object[]> = new Promise((resolve, reject) => {
    ImportCsvToJson(args.file)
      .then((res) => resolve(res))
      .catch((err) => {
        if (err instanceof genericError) {
          errors.push({ field: 'file', message: err.message });
          resolve([]);
        } else {
          reject(err);
        }
      });
  });

  // validate contents of csv
  // ... here

  cases = await casesPromise;

  if (errors.length > 0)
    return {
      errors,
      data: {
        cases: [],
        args: {
          ...args,
        },
      },
    };

  return {
    data: {
      args: { ...args },
      cases,
    },
  };
};
