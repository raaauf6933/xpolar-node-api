import logger from './config/logger';
import vars from './config/vars';
import app from './config/express';

// listen to requests
const server = app.listen(vars.port, () =>
  logger.info(
    `🚀 🚀 🚀 server started on port ${vars.port} (${vars.env}) 🚀 🚀 🚀`
  )
);

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: unknown) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});

/**
 * Exports express
 * @public
 */
export default app;
