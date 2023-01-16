import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { readFileSync } from 'fs';
import { resolvers } from '@resolvers/resolvers';
import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.mjs';
import { MyContext, context } from './context';

const typeDefs = readFileSync('./src/schema/schema.graphql', {
  encoding: 'utf-8',
});

const app = express();

const graphQlServer = http.createServer(app);

// Set up Apollo Server
const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer: graphQlServer })],
  cache: 'bounded',
});
await server.start();

app.use(graphqlUploadExpress());
app.use(
  cors(),
  bodyParser.json(),
  expressMiddleware(server, {
    context,
  })
);

export default graphQlServer;
