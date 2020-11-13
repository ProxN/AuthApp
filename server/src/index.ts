import 'reflect-metadata';
import { config } from 'dotenv';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import express from 'express';
import path from 'path';
import authReslover from './resolvers/auth.reslover';
import { HelloReslover } from './resolvers/hello';
import User from './entities/User';
config({ path: './config.env' });
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

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloReslover, authReslover],
      validate: false,
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
