import {
  fetch,
  post,
  put,
  responseHandler,
  setAuthHeader,
} from './base';
import {
  CreateOrganizationContactApiInput,
  UpdateOrganizationContactApiInput,
} from '../../models/organization/api';

async function getOrganizationContact(
  id: any,
  auth: any,
): Promise<any> {
  const endpoint = `/organizations/${id}`;
  const headers = setAuthHeader(auth);
  const response = await fetch(endpoint, { headers });

  return responseHandler(response);
}

async function createOrganizationContact(
  data: CreateOrganizationContactApiInput,
  auth: any,
): Promise<any> {
  const endpoint = '/organizations/';
  const headers = setAuthHeader(auth);
  const response = await post(endpoint, { data, headers });
  return responseHandler(response);
}

async function updateOrganizationContact(
  id: number,
  data: UpdateOrganizationContactApiInput,
  auth: any,
): Promise<any> {
  const endpoint = `/organizations/${id}`;
  const headers = setAuthHeader(auth);
  // map the data to a

  const response = await put(endpoint, { data, headers });
  return responseHandler(response);
}

async function createCEFfromOrganization(
  id: number,
  data: {},
  auth: any,
): Promise<any> {
  const endpoint = `/organizations/${id}/createCEF`;
  const headers = setAuthHeader(auth);

  const response = await post(endpoint, { data, headers });
  return responseHandler(response);
}

export {
  getOrganizationContact,
  createOrganizationContact,
  updateOrganizationContact,
  createCEFfromOrganization,
};

export default {
  getOrganizationContact,
  createOrganizationContact,
  updateOrganizationContact,
  createCEFfromOrganization,
};
