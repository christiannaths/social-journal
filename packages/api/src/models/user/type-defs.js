const { gql } = require('apollo-server');

const userType = gql`
  type User {
    id: ID
    sessionId: ID
    createdAt: DateTime
    updatedAt: DateTime
  }

  extend type Query {
    currentUser: User
  }
`;

module.exports = userType;
