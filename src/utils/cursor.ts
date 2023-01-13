export const encodeCursor = (cursor: string) =>
  Buffer.from(cursor).toString('base64');

export const decodeCursor = (cursor: string) =>
  Buffer.from(cursor, 'base64').toString('ascii');
