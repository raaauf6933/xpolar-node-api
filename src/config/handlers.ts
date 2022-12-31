import { IncomingMessage, Server, ServerResponse } from 'http';
import logger from './logger';

export const restHandlers = (
  restApiServer: Server<typeof IncomingMessage, typeof ServerResponse>,
  graphQlServer: Server<typeof IncomingMessage, typeof ServerResponse>
) => {
  const exitHandler = () => {
    if (restApiServer) {
      restApiServer.close(() => {
        logger.info('Server closed');
        process.exit(1);
      });
    } else if (graphQlServer) {
      graphQlServer.close(() => {
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
    if (restApiServer) {
      restApiServer.close();
    }

    if (graphQlServer) {
      graphQlServer.close();
    }
  });
};
