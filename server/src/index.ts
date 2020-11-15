import 'reflect-metadata';
import { config } from 'dotenv';
config({ path: './config.env' });

import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import authResolver from './resolvers/auth.resolver';
import userResolver from './resolvers/user.resolver';
import User from './entities/User';
import authChecker from './utils/authChecker';
import { DB_HOST, DB_NAME, DB_PASS, DB_USER, PORT } from './constants';

const main = async () => {
  await createConnection({
    type: 'postgres',
    host: DB_HOST,
    password: DB_PASS,
    username: DB_USER,
    database: DB_NAME,
    port: 5432,
    entities: [User],
    synchronize: true,
    logging: true,
    migrations: [path.join(__dirname, './migrations/*.ts')],
  }).then(() => console.log('DB CONNECTED SUCCESSFULLY'));

  const app = express();

  app.use(cookieParser());

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [authResolver, userResolver],
      validate: false,
      authChecker,
    }),
    context: ({ req, res }) => ({
      req,
      res,
    }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => console.log(`Server starting at PORT ${PORT}`));
};

main();
