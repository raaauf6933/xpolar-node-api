import logger from './config/logger';
import vars from './config/vars';
import apolloApp from './config/apollo_server';
import DB_init from './config/db_connection';

// Test db connection
DB_init();

// GraphQL Server
const graphQlServer = apolloApp.listen(vars.graphql_port, () =>
  logger.info(
    `🚀 🚀 🚀 GraphQL started on port ${vars.graphql_port} (${vars.env}) 🚀 🚀 🚀`
  )
);

const exitHandler = () => {
  if (graphQlServer) {
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

  if (graphQlServer) {
    graphQlServer.close();
  }
});

/**
 * Exports express
 * @public
 */
// export default app;
