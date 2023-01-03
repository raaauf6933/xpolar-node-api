import { PrismaClient } from '@prisma/client';
import logger from './logger';

const prisma = new PrismaClient();
const db_connect = async () => {
  try {
    await prisma.$connect();
    logger.info('DB connection has been established');
  } catch (err) {
    if (err instanceof Error) logger.error(err.message);
    logger.info('Server closed');
    process.exit(1);
  }
};

export default db_connect;
