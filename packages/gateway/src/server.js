const { ApolloServer } = require('apollo-server');
const config = require('config');
const serviceHealthChecks = require('./services/health-checks');
const { typeDefs, resolvers } = require('./schema');
const context = require('./context');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  cors: true,
});

const { host, port } = config.get('server');

server.listen({ host, port }).then(({ url }) => {
  console.info(`🚀  Server ready at ${url}`);
  serviceHealthChecks.perform();
});
