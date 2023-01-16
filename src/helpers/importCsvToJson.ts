import { InputMaybe, Scalars } from '@/__generated__/resolvers-types';
import createUploadStream from '@/helpers/createUploadStream';
import csv from 'csvtojson/v2';

const ImportCsvToJson = async (
  file: InputMaybe<Scalars['Upload']>
): Promise<object[]> => {
  const fileStream = await createUploadStream(file, {
    fileExtensions: ['.csv'],
  });

  const json = await csv().fromStream(fileStream);

  return json;
};

export default ImportCsvToJson;
