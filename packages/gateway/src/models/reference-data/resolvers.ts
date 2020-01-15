import {
  resolverFn,
  ResolverRequest as R,
  requireAuthentication,
} from '../../lib/resolver';
import * as Backend from '../../services/backend';

async function getProvincesResolver(request: R): Promise<any> {
  const { abbrev } = request.parent;
  const auth = requireAuthentication(request);
  const type = `countries/${abbrev}/provinces`;
  const provinces = (await Backend.getReferenceData(type, auth)) || [];

  return provinces;
}

async function getCountriesResolver(request: R): Promise<any> {
  const auth = requireAuthentication(request);
  const type = 'countries';
  const countries = (await Backend.getReferenceData(type, auth)) || [];

  return countries;
}

async function getCountryResolver(request: R): Promise<any> {
  const { abbrev } = request.args;
  const auth = requireAuthentication(request);
  const type = 'countries';
  const countries = (await Backend.getReferenceData(type, auth)) || [];

  const result = countries.find((c) => c.abbrev === abbrev);

  return result;
}

async function getAddressTypesResolver(request: R): Promise<any> {
  const type = 'addressTypes';
  const auth = requireAuthentication(request);
  const addressTypes =
    (await Backend.getReferenceData(type, auth)) || [];

  return addressTypes;
}

async function getJurisdictionsResolver(request: R): Promise<any> {
  const type = 'jurisdictions';
  const auth = requireAuthentication(request);
  const jurisdictions =
    (await Backend.getReferenceData(type, auth)) || [];

  return jurisdictions;
}

async function getOrganizationTypesResolver(request: R): Promise<any> {
  const type = 'organizationTypes';
  const auth = requireAuthentication(request);
  const organizationTypes =
    (await Backend.getReferenceData(type, auth)) || [];

  return organizationTypes;
}

const resolvers = {
  Query: {
    country: resolverFn(getCountryResolver),
    countries: resolverFn(getCountriesResolver),
    addressTypes: resolverFn(getAddressTypesResolver),
    jurisdictions: resolverFn(getJurisdictionsResolver),
    organizationTypes: resolverFn(getOrganizationTypesResolver),
  },

  Country: {
    provinces: resolverFn(getProvincesResolver),
  },
};

export { resolvers };
export default resolvers;
