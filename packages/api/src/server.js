const { ApolloServer } = require('apollo-server');
const { context } = require('./context');
const { typeDefs, resolvers } = require('./schema');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  cors: true,
});

module.exports = server;
