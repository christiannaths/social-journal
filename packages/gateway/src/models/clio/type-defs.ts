import { gql } from 'apollo-server';

const clioTypes = gql`
  type ClioContact {
    id: ID!
    firstName: String
    middleName: String
    lastName: String
    telephone: String
    mobile: String
    emailAddress: String
    street: String
    city: String
    province: String
    postalCode: String
    country: String
  }

  input ImportClioContactsInput {
    token: String!
  }

  type ImportClioContactsPayload {
    contacts: [ClioContact]
  }

  extend type Query {
    clioContacts(token: String!): [ClioContact]
  }

  extend type Mutation {
    importClioContacts(
      input: ImportClioContactsInput!
    ): ImportClioContactsPayload
  }
`;

export default clioTypes;
