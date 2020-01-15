import {
  ResolverRequest,
  requireAuthentication,
  resolverFn,
} from '../../lib/resolver';
import * as Backend from '../../services/backend/contact';
import { UpdateContactApiInput } from './api';
import {
  fetch,
  responseHandler,
  setAuthHeader,
} from '../../services/backend/base';

function convertToUpdatContactApiInput(
  input: any,
): UpdateContactApiInput {
  let apiInput = {
    birthDate: input.birthDate,
    residency: input.residency,
    contactNameId: input.contactNameId,
    nameTypeId: input.nameTypeId,
    firstName: input.firstName,
    middleName: input.middleName,
    lastName: input.lastName,
    addressTypeId: input.addressTypeId,
    contactAddressId: input.contactAddressId,
    addr1: input.street,
    city: input.city,
    provinceAbbrev: input.provinceState,
    country: input.country,
    postalCode: input.postalZipCode,
    telephone: input.telephone,
    mobilePhone: input.mobile,
    email: input.email,
  } as UpdateContactApiInput;
  return apiInput;
}

function convertFromContactNameApiResponse(apiResponse: any): any {
  const response = {
    id: apiResponse.id,
    nameTypeId: apiResponse.nameType.id,
    firstName: apiResponse.firstname,
    middleName: apiResponse.middlename,
    lastName: apiResponse.lastname,
  };

  return response;
}

function convertFromContactAddressApiResponse(apiResponse: any): any {
  const response = {
    id: apiResponse.id,
    addressTypeId: apiResponse.addressType.id,
    street: apiResponse.addr1,
    city: apiResponse.city,
    provinceState: apiResponse.provSt
      ? apiResponse.provSt.abbrev
      : null,
    country:
      apiResponse.provSt && apiResponse.provSt.country
        ? apiResponse.provSt.country.abbrev
        : null,
    postalZipCode: apiResponse.postalCode,
    telephone: apiResponse.phone,
    mobile: apiResponse.cell,
    email: apiResponse.email,
  };

  return response;
}
function convertFromContactApiResponse(apiResponse: any): any {
  const names = apiResponse.contactNames as [any];
  const contactAddresses = apiResponse.contactAddresses as [any];
  const response = {
    id: apiResponse.id,
    birthDate: apiResponse.birthDt,
    residency: apiResponse.residenceCountry
      ? apiResponse.residenceCountry.abbrev
      : null,
    contactNames:
      names != null
        ? names.map((cn) => convertFromContactNameApiResponse(cn))
        : [],
    contactAddresses:
      contactAddresses != null
        ? contactAddresses.map((ca) =>
            convertFromContactAddressApiResponse(ca),
          )
        : [],
  };

  return response;
}

async function updateContactResolver(
  request: ResolverRequest,
): Promise<any> {
  const auth = requireAuthentication(request);
  const { input } = request.args;
  const data = convertToUpdatContactApiInput(input);
  const response = await Backend.updateContact(
    input.contactId,
    data,
    auth,
  );
  return response;
}

async function getContactResolver(
  request: ResolverRequest,
): Promise<any> {
  const { contactId, entityId } = request.args;
  const url =
    '/contacts/' +
    (contactId ? contactId + `?entityId=${entityId}` : '');
  const auth = requireAuthentication(request);
  const headers = setAuthHeader(auth);
  const apiResponse = responseHandler(await fetch(url, { headers }));
  const convertedResponse = convertFromContactApiResponse(apiResponse);
  return convertedResponse;
}

const resolvers = {
  Mutation: {
    updateContact: resolverFn(updateContactResolver),
  },
  Query: {
    contact: resolverFn(getContactResolver),
  },
};

export { resolvers };
export default resolvers;
