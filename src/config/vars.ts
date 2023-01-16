import dotenv from 'dotenv';

dotenv.config();

const vars = {
  env: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET,
  DB: {
    uri: process.env.DB_URI,
  },
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  emailConfig: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    username: process.env.EMAIL_USERNAME,
    password: process.env.EMAIL_PASSWORD,
  },
  graphql_port: process.env.GRAPHQL_PORT || 5000,
  s3: {
    bucket: process.env.S3_BUCKET || 'xpolar-dev-bucket',
    endpoint: process.env.S3_ENDPOINT,
    accessKeyId: process.env.S3_ACESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    sslEnabled: false,
    s3ForcePathStyle: true,
  },
};

export default vars;
