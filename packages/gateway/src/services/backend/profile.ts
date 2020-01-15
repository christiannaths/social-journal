import { fetch, post, responseHandler, setAuthHeader } from './base';

async function getCurrentUserProfile(auth: any): Promise<any> {
  const endpoint = `/profiles/users`;
  const headers = setAuthHeader(auth);
  const response = await fetch(endpoint, { headers });

  return responseHandler(response);
}

async function getCurrentUserContactProfile(auth: any): Promise<any> {
  const endpoint = '/profiles/contacts/';

  const userProfile = await getCurrentUserProfile(auth);
  const contactId = userProfile.contact.id;
  const headers = setAuthHeader(auth);
  const response = await fetch(endpoint + contactId, { headers });

  return responseHandler(response);
}

async function listCurrentUserContactProfiles(auth: any): Promise<any> {
  const endpoint = '/profiles/contacts/';
  const headers = setAuthHeader(auth);
  const response = await fetch(endpoint, { headers });

  return responseHandler(response);
}

async function createUserProfile(data: any, auth: any): Promise<any> {
  const endpoint = '/profiles/users/';
  const headers = setAuthHeader(auth);
  const response = await post(endpoint, { data, headers });

  return responseHandler(response);
}

async function createUserProfileFromToken(data: any): Promise<any> {
  const endpoint = '/unauthenticated/invitation/profiles/';
  const response = await post(endpoint, { data });

  return responseHandler(response);
}

async function createContactProfile(
  data: any,
  auth: any,
): Promise<any> {
  const endpoint = '/profiles/contacts/';
  const headers = setAuthHeader(auth);
  const response = await post(endpoint, { data, headers });

  return responseHandler(response);
}

export {
  getCurrentUserProfile,
  getCurrentUserContactProfile,
  listCurrentUserContactProfiles,
  createUserProfile,
  createContactProfile,
  createUserProfileFromToken,
};

export default {
  getCurrentUserProfile,
  getCurrentUserContactProfile,
  listCurrentUserContactProfiles,
  createUserProfile,
  createContactProfile,
  createUserProfileFromToken,
};
