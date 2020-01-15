import { gql } from 'apollo-server';

const referenceDataTypes = gql`
  enum CountryCode {
    CAN
    USA
    MX
  }

  type Province {
    id: Int!
    name: String
    abbrev: String
    flagUrl: String
  }

  type Country {
    id: Int!
    name: String
    abbrev: CountryCode
    flagUrl: String
    provinces: [Province]
  }

  type AddressType {
    id: Int
    description: String
    descriptionFr: String
    displayOrder: Int
  }

  type OrganizationType {
    id: Int
    description: String
    descriptionFr: String
    displayOrder: Int
  }

  type Jurisdiction {
    id: Int
    code: String
    name: String
  }

  extend type Query {
    country(abbrev: CountryCode!): Country
    countries: [Country]
    addressTypes: [AddressType]
    jurisdictions: [Jurisdiction]
    organizationTypes: [OrganizationType]
  }
`;

export { referenceDataTypes };
export default referenceDataTypes;
