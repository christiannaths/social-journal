const { gql } = require('apollo-server');
const Health = require('./models/health');

const Setup = gql`
  scalar DateTime

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const typeDefs = [Setup, Health.typeDefs];

const resolvers = [Health.resolvers];

export { typeDefs, resolvers };
export default { typeDefs, resolvers };
