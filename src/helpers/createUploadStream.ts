import vars from '@/config/vars';
import { parse } from 'path';
import uploadToS3, { s3 } from './uploadToS3';
import { ReadStream } from 'fs';
import { genericError } from '@utils/errors';

type FileData = Promise<{
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => ReadStream;
}>;

interface createUploadStreamOpts {
  fileExtensions: string[];
}

const createUploadStream = async (
  file: FileData,
  options: createUploadStreamOpts
) => {
  const { filename, createReadStream } = await file;

  const { ext, name } = parse(filename);

  if (options.fileExtensions.some((e) => e !== ext))
    throw new genericError(
      'GENERIC_ERROR',
      'YOUR_ERROR_CODE',
      `file format must be in ${options.fileExtensions.join(',')}`
    );

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
