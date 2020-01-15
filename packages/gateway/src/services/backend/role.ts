import { fetch, responseHandler, setAuthHeader } from './base';

async function getUserRoles(userId: string, auth: any): Promise<any> {
  const endpoint = `/users/${userId}/accessRights/`;
  const headers = setAuthHeader(auth);
  const response = await fetch(endpoint, { headers });

  return responseHandler(response);
}

export { getUserRoles };
export default { getUserRoles };
