const { gql } = require('apollo-server');

const healthType = gql`
  type Health {
    status: String
    executionTime: Float
  }

  extend type Query {
    apiHealth: Health
    gatewayHealth: Health
  }
`;

module.exports = healthType;
