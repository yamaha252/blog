import express from 'express';
import {ApolloServer, makeExecutableSchema} from 'apollo-server-express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import 'graphql-import-node';
import * as typeDefs from '../../schema.graphql';
import {createServer} from 'http';
import {Resolvers} from './graphql.generated';

const resolvers: Resolvers = {
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const apolloServer = new ApolloServer({
  schema,
  playground: true,
});

const app = express();
app.use(
  cors({
    maxAge: 84600
  }),
  helmet({
    contentSecurityPolicy: false
  }),
  compression()
);

apolloServer.applyMiddleware({app, path: '/graphql'});

const port = process.env.PORT || 4000;
const server = createServer(app);

server.listen({port}, () => {
  console.log('Apollo Server on http://localhost:4000/graphql');
});
