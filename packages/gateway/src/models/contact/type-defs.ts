import { gql } from 'apollo-server';

const contactTypes = gql`
  input UpdateContactInput {
    contactId: Int!
    birthDate: DateTime
    residency: String!
    contactNameId: Int!
    nameTypeId: Int!
    firstName: String!
    middleName: String
    lastName: String!
    addressTypeId: Int!
    contactAddressId: Int!
    street: String!
    city: String
    provinceState: String!
    country: String!
    postalZipCode: String!
    telephone: String
    mobile: String
    email: String!
  }

  type ContactAddress {
    id: Int
    addressTypeId: Int
    street: String
    city: String
    provinceState: String
    country: String
    postalZipCode: String
    telephone: String
    mobile: String
    email: String
  }

  type ContactName {
    id: Int
    nameTypeId: Int
    firstName: String
    middleName: String
    lastName: String
  }

  type Contact {
    id: Int
    birthDate: DateTime
    residency: String
    contactNames: [ContactName]
    contactAddresses: [ContactAddress]
  }

  extend type Mutation {
    updateContact(input: UpdateContactInput): Boolean
  }
  extend type Query {
    contact(contactId: Int, entityId: Int): Contact
  }
`;

export default contactTypes;
export { contactTypes };
