import express from 'express';
import {ApolloServer, makeExecutableSchema} from 'apollo-server-express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import 'graphql-import-node';
import * as typeDefs from '../../schema.graphql';
import {createServer} from 'http';
import {ArticleModel, articles, ArticleType, authors, CommentModel, comments, CommentType} from './data';
import {Resolvers} from './graphql.generated';
import jwt from 'jsonwebtoken';

const jwt_secret = 'myawesomejwtsecretkeyforablogprjectrighthere';

const ID = () => Math.random().toString(36).substr(2, 9);

const resolvers: Resolvers = {
  Query: {
    articles() {
      const articlesResult = articles.map(article => new ArticleType(article));
      return {
        totalCount: articlesResult.length,
        items: articlesResult,
      };
    },
    article(parent: any, {id}: {id: string}) {
      const article = articles.find(a => a.id === id);
      if (!article) {
        throw new Error('No article found');
      }
      return new ArticleType(article);
    },
  },
  Mutation: {
    login(parent, {login, password}) {
      const author = authors.find(a => a.login === login && a.password === password);
      if (!author) {
        throw new Error('Authentication failed');
      }
      return {
        accessToken: jwt.sign({author: author.id}, jwt_secret, {
          expiresIn: '1y',
          subject: 'auth',
        }),
      }
    },

    articleAdd(parent, {article}, {auth}) {
      if (!auth) {
        throw new Error('Action is not permitted');
      }
      const articleNew: ArticleModel = {
        id: ID(),
        authorId: auth.authorId,
        title: article.title,
        date: new Date(),
        imageUrl: article.imageUrl,
        text: article.text,
      };
      articles.push(articleNew);
      return new ArticleType(articleNew);
    },

    commentAdd(parent, {articleId, comment}) {
      const commentNew: CommentModel = {
        id: ID(),
        articleId,
        name: comment.name,
        email: comment.email || '',
        date: new Date(),
        url: comment.url || '',
        text: comment.text,
      };
      comments.push(commentNew);
      return new CommentType(commentNew);
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const apolloServer = new ApolloServer({
  schema,
  playground: true,
  context: ({req}) => {
    const token = (req.headers.authorization || '')?.split(' ').pop();
    if (token) {
      try {
        return {
          auth: jwt.verify(token, jwt_secret, {subject: 'auth'}),
        };
      } catch (e) {
        throw new Error('Session is expired');
      }
    }
  },
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
