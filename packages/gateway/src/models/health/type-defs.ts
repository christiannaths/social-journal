import { gql } from 'apollo-server';

const healthType = gql`
  type Health {
    backend: Int
  }

  extend type Query {
    health: Health
  }
`;

export { healthType };
export default healthType;
