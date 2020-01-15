import {
  requireAuthentication,
  resolverFn,
  ResolverRequest,
} from '../../lib/resolver';
import * as Backend from '../../services/backend';
import {
  CreateOrganizationContactApiInput,
  OrganizationContactResponse,
  UpdateOrganizationContactApiInput,
} from './api';

function convertToUpdateOrgContactApiInput(
  input: any,
): UpdateOrganizationContactApiInput {
  let apiInput = {
    addr1: input.street,
    city: input.city,
    provinceAbbrev: input.provinceState,
    country: input.country,
    postalCode: input.postalZipCode,
    telephone: input.businessTelephone,
    extension: input.extension,
    fax: input.businessFax,
    email: input.businessEmail,
  } as UpdateOrganizationContactApiInput;
  return apiInput;
}

function convertToCreateOrgContactApiInput(
  input: any,
): CreateOrganizationContactApiInput {
  let apiInput = {
    ...convertToUpdateOrgContactApiInput(input),
    legalName: input.legalName,
    registrationDate: input.registrationDate,
    entityNumber: input.entityNumber,
    homeJurisdictionId: input.homeJurisdictionId,
    organizationTypeId: input.organizationTypeId,
  };
  return apiInput;
}

function convertFromOrgContactApiResponse(
  data: any,
): OrganizationContactResponse {
  const contactName = data.contactName;
  const organization = data.organization;
  const address = data.address;
  const jurisdiction = data.jurisdiction || {};

  return {
    legalName: organization.name,
    registrationDate: contactName.regDt,
    entityNumber: organization.canNumber,
    homeJurisdictionId: jurisdiction.id,
    homeJurisdictionCode: jurisdiction.code,
    homeJurisdictionName: jurisdiction.name,
    organizationTypeId: organization.orgType.id,
    organizationTypeDesc: organization.orgType.description,
    addressTypeId: address.addressType.id,
    addressTypeDesc: address.addressType.description,
    street: address.addr1,
    city: address.city,
    provinceStateId: address.provSt.id,
    provinceStateAbbrev: address.provSt.abbrev,
    provinceStateName: address.provSt.name,
    countryId: address.provSt.country.id,
    countryAbbrev: address.provSt.country.abbrev,
    countryName: address.provSt.country.name,
    postalZipCode: address.postalCode,
    businessTelephone: address.phone,
    extension: address.extension,
    businessFax: address.fax,
    businessEmail: address.email,
  } as OrganizationContactResponse;
}

async function createOrganizationContactResolver(
  request: ResolverRequest,
): Promise<any> {
  const auth = requireAuthentication(request);
  const { input } = request.args;
  const data = convertToCreateOrgContactApiInput(input);
  const response = await Backend.createOrganizationContact(data, auth);
  return response;
}

async function updateOrganizationContactResolver(
  request: ResolverRequest,
): Promise<any> {
  const auth = requireAuthentication(request);
  const { input } = request.args;
  const data = convertToUpdateOrgContactApiInput(input);
  const response = await Backend.updateOrganizationContact(
    input.organizationId,
    data,
    auth,
  );
  return response;
}

async function getOrganizationContactResolver(
  request: ResolverRequest,
): Promise<any> {
  const auth = requireAuthentication(request);
  const { organizationId } = request.args;
  const apiResponse = await Backend.getOrganizationContact(
    organizationId,
    auth,
  );
  const convertedResponse = Object.keys(apiResponse).length
    ? convertFromOrgContactApiResponse(apiResponse)
    : {};
  return convertedResponse;
}

async function createCEFfromOrganizationResolver(
  request: ResolverRequest,
): Promise<any> {
  const auth = requireAuthentication(request);
  const { input } = request.args;
  const data = {};
  const response = await Backend.createCEFfromOrganization(
    input.organizationId,
    data,
    auth,
  );
  return response;
}

const resolvers = {
  Query: {
    organizationContact: resolverFn(getOrganizationContactResolver),
  },
  Mutation: {
    createOrganizationContact: resolverFn(
      createOrganizationContactResolver,
    ),
    createCEFfromOrganization: resolverFn(
      createCEFfromOrganizationResolver,
    ),
    updateOrganizationContact: resolverFn(
      updateOrganizationContactResolver,
    ),
  },
};

export { resolvers };
export default resolvers;
