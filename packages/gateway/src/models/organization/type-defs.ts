import { gql } from 'apollo-server';

const sharedAddressOrganizationTypes = `
    street: String!
    city: String
    provinceState: String!
    country: String!
    postalZipCode: String!
    businessTelephone: String
    extension: String
    businessFax: String
    businessEmail: String
`;

const organizationTypes = gql`
  type OrganizationContact {
    legalName: String
    registrationDate: DateTime
    entityNumber: String
    homeJurisdictionId: Int
    homeJurisdictionCode: String
    homeJurisdictionName: String
    organizationTypeId: Int
    organizationTypeDesc: String
    addressTypeId: Int
    addressTypeDesc: String
    street: String
    city: String
    provinceStateId: Int
    provinceStateAbbrev: String
    provinceStateName: String
    countryId: Int
    countryAbbrev: String
    countryName: String
    postalZipCode: String
    businessTelephone: String
    extension: String
    businessFax: String
    businessEmail: String
  }

  input CreateOrganizationContactInput {
    legalName: String!
    registrationDate: DateTime
    entityNumber: String
    homeJurisdictionId: Int!
    organizationTypeId: Int!
    ${sharedAddressOrganizationTypes}
  }

  type CreateOrganizationContactPayload {
    id: Int
  }

  input UpdateOrganizationContactInput {
    organizationId: Int!
    ${sharedAddressOrganizationTypes}
  }

  input CreateCEFFromOrganizationInput {
    organizationId: Int!
  }

  type CreateCEFFromOrganizationPayload {
    id: Int
  }

  extend type Query {
    organizationContact(organizationId: Int!): OrganizationContact
  }

  extend type Mutation {

    createOrganizationContact(
      input: CreateOrganizationContactInput
    ): CreateOrganizationContactPayload

    updateOrganizationContact(
      input: UpdateOrganizationContactInput
    ): Boolean

    createCEFfromOrganization(
      input: CreateCEFFromOrganizationInput
    ): CreateCEFFromOrganizationPayload
  }
`;

export default organizationTypes;
export { organizationTypes };
