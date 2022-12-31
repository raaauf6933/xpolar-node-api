import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { readFileSync } from 'fs';
import { resolvers } from '../resolvers/resolvers.js';

const typeDefs = readFileSync('./src/schema/schema.graphql', {
  encoding: 'utf-8',
});

const app = express();
const graphQlServer = http.createServer(app);

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer: graphQlServer })],
});
await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));

export default graphQlServer;
