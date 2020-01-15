import { gql } from 'apollo-server';

const entityTypes = gql`
  type EntityFirmMember {
    positionId: Int
    email: String
    name: String
    position: String
    office: String
    role: String
    status: String
    startDate: DateTime
    endDate: DateTime
  }

  extend type Query {
    entityFirmMembers(entityId: Int!): [EntityFirmMember]
  }
`;

export { entityTypes };
export default entityTypes;
