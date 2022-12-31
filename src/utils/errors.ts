import { GraphQLError } from 'graphql';

export const INVALID_TOKEN = new GraphQLError(
  'You are not authorized to perform this action.',
  {
    extensions: {
      code: 'INVALID_TOKEN',
    },
  }
);
