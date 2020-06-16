import { GraphQLServer } from 'graphql-yoga';

import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
  typeDefs: 'src/graphql/schema.graphql',
  resolvers,
});

// eslint-disable-next-line no-console, @typescript-eslint/no-floating-promises
server.start(() => console.log('Server running on port 4000'));
