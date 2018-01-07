import express from 'express';
import body_parser from 'body-parser';
import {
  graphqlExpress,
  graphiqlExpress
} from 'apollo-server-express';
import {
  makeExecutableSchema
} from 'graphql-tools';

// let's import the schema file we just created
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

const app = express();

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(body_parser.json({
  limit: '50mb'
}));

app.use('/graphql', body_parser.json(), graphqlExpress({
  schema: executableSchema
}));
app.get('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
})); // if you want GraphiQL enabled

// start the server
app.listen(
  app.get('port'),
  () => {
    const port = app.get('port');
    console.log(`GraphQL Server Running at http://127.0.0.1:${port}`);
    console.log(`GraphiQL Interface Running at http://127.0.0.1:${port}/graphiql`);
  }
);

export default app;
