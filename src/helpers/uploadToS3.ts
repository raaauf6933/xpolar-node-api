import stream from 'stream';
import vars from '@/config/vars';
import AWS from 'aws-sdk';

export const s3 = new AWS.S3({
  endpoint: vars.s3.endpoint,
  accessKeyId: vars.s3.accessKeyId,
  secretAccessKey: vars.s3.secretAccessKey,
  sslEnabled: vars.s3.sslEnabled,
  s3ForcePathStyle: vars.s3.s3ForcePathStyle,
});

const uploadToS3 = (key: string, bucket?: string) => {
  const pass = new stream.PassThrough();

  return {
    writeStream: pass,
    promise: s3
      .upload({
        Bucket: bucket || vars.s3.bucket,
        Key: key,
        Body: pass,
      })
      .promise(),
  };
};

export default uploadToS3;
