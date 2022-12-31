import logger from './config/logger';
import vars from './config/vars';
import apolloApp from './config/apollo_server';
import expressApp from './config/express';

import { restHandlers } from './config/handlers';

// GraphQL Server
const graphQlServer = apolloApp.listen(vars.graphql_port, () =>
  logger.info(
    `🚀 🚀 🚀 GraphQL started on port ${vars.graphql_port} (${vars.env}) 🚀 🚀 🚀`
  )
);

// listen to requests
const restApiServer = expressApp.listen(vars.port, () =>
  logger.info(
    `🚀 🚀 🚀 REST server started on port ${vars.port} (${vars.env}) 🚀 🚀 🚀`
  )
);

restHandlers(restApiServer, graphQlServer);

/**
 * Exports express
 * @public
 */
// export default app;
