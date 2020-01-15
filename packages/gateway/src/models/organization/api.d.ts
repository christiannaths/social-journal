interface UpdateOrganizationContactApiInput {
//  addressTypeId: number;
  addr1: string;
  addr2: string;
  addr3: string;
  city: string;
  provinceAbbrev: string;
  country: string;
  postalCode: string;
  telephone: string;
  extension: string;
  fax: string;
  email: string;
}
interface CreateOrganizationContactApiInput extends UpdateOrganizationContactApiInput {
  legalName: string;
  registrationDate: any;
  entityNumber: string;
  homeJurisdictionId: number;
  organizationTypeId: number;
}

interface OrganizationContactResponse {
  legalName: string;
  registrationDate: any;
  entityNumber: string;
  homeJurisdictionId: number;
  homeJurisdictionCode: string;
  homeJurisdictionName: string;
  organizationTypeId: number;
  organizationTypeDesc: string;
  addressTypeId: number;
  addressTypeDesc: string;
  street: string;
  city: string;
  provinceStateId: number;
  provinceStateAbbrev: string;
  provinceStateName: string;
  countryId: number;
  countryAbbrev: string;
  countryName: string;
  postalZipCode: string;
  businessTelephone: string;
  extension: string;
  businessFax: string;
  businessEmail: string;
}

export {
  CreateOrganizationContactApiInput,
  UpdateOrganizationContactApiInput,
  OrganizationContactResponse
}