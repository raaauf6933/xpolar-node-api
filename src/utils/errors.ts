/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { GraphQLError } from 'graphql';

export const INVALID_TOKEN = new GraphQLError(
  'You are not authorized to perform this action.',
  {
    extensions: {
      code: 'INVALID_TOKEN',
    },
  }
);

interface GenericErrorType {
  errorId: string;
  code: string;
  message: string;
}

export class genericError implements GenericErrorType {
  errorId: number;
  code: string;
  message: string;
  constructor(type: string, code: string, message: string) {
    this.type = type;
    this.code = code;
    this.message = message;
  }
}
