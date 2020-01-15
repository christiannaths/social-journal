import { gql } from 'apollo-server';

const userTypes = gql`
  type Role {
    id: Int
    code: String
    description: String
    name: String
    entityId: Int
  }

  type User {
    id: Int
    contactId: Int
    email: String
    firstName: String
    lastName: String
    initials: String
    phone: String
    cell: String
    pictureUrl: String
    roles: [Role]
  }

  extend type Query {
    currentUser: User
    userByEmail(email: String!): User
  }
`;

export { userTypes };
export default userTypes;
