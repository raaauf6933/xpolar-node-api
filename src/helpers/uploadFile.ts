import { createWriteStream } from 'fs';
import { join, parse } from 'path';
import os from 'os';
import path from 'path';

const uploadFile = async (file) => {
  const {
    createReadStream,
    filename,
    //  mimetype, encoding
  } = await file;

  return new Promise((resolve: (data: string) => void) => {
    const stream = createReadStream();

    // eslint-disable-next-line prefer-const
    let { ext, name } = parse(filename);

    name = `single${Math.floor(Math.random() * 10000 + 1)}`;

    const url =
      process.env.NODE_ENV !== 'development'
        ? join(os.tmpdir(), path.basename(`${name}-${Date.now()}${ext}`))
        : `Upload/${name}-${Date.now()}${ext}`;

    const fileStream = createWriteStream(url);

    stream.pipe(fileStream);

    fileStream.once('finish', () => {
      if (typeof fileStream.path === 'string') resolve(fileStream.path);
    });
  });
};

export default uploadFile;
