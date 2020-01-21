const { gql } = require('apollo-server');
const Health = require('./models/health');
const User = require('./models/user');

const baseTypeDefs = gql`
  scalar DateTime

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const typeDefs = [baseTypeDefs, Health.typeDefs, User.typeDefs];
const resolvers = [Health.resolvers, User.resolvers];

module.exports = { typeDefs, resolvers };
