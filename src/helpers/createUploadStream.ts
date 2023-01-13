import vars from '@/config/vars';
import { parse } from 'path';
import uploadToS3, { s3 } from './uploadToS3';

const createUploadStream = async (file) => {
  const { filename, createReadStream } = await file;

  const { ext, name } = parse(filename);

  const newFileName = `${name}-${Date.now()}${ext}`;

  const Stream = createReadStream();

  const uploadStream = uploadToS3(newFileName);
  Stream.pipe(uploadStream.writeStream);

  await uploadStream.promise;
  return s3
    .getObject({ Bucket: vars.s3.bucket, Key: newFileName })
    .createReadStream();
};

export default createUploadStream;
