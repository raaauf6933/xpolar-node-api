import { ContextFunction } from '@apollo/server';
import { ExpressContextFunctionArgument } from '@apollo/server/dist/esm/express4';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface MyContext {
  prisma: PrismaClient;
}

export const context: ContextFunction<
  [ExpressContextFunctionArgument]
> = async () => {
  return {
    prisma,
  };
};
