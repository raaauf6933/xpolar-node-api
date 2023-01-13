import { InputMaybe ,Scalars} from '@/__generated__/resolvers-types';
import createUploadStream from '@/helpers/createUploadStream';
import csv from 'csvtojson/v2';

const ImportCsvToJson = async (file:InputMaybe<Scalars['Upload']>):Promise<object[]| unknown> => {

  try {
    const fileStream = await createUploadStream(file);
    const json = await csv().fromStream(fileStream);
  
    return json;
  } catch (error) {
    return error;
  }
 
};

export default ImportCsvToJson;
