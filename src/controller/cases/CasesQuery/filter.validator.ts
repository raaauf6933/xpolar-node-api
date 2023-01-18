import {
  Error as scalarError,
  CasesFilterInput,
} from '@/__generated__/resolvers-types';

const batchNumbersRegex = /^[0-9]+(?:[0-9]+)?(,[0-9]+(?:[0-9]+)?)*$/m;

const filterValidator = (filter: CasesFilterInput | null | undefined) => {
  const errors: scalarError[] = [];

  const batchNumber = filter?.batchNumber;

  if (batchNumber && !batchNumbersRegex.test(batchNumber)) {
    errors.push({ field: 'batchNumber', message: 'Invalid Batch Number(s)' });
  }
  console.log(errors);
  if (errors.length > 0) {
    return errors;
  }

  return null;
};

export default filterValidator;
