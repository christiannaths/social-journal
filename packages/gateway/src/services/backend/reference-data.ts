import { fetch, setAuthHeader, responseHandler } from './base';

async function getReferenceData(type: string, auth: any) {
  const endpoint = `/referenceData/${type}`;
  const headers = setAuthHeader(auth);
  const response = await fetch(endpoint, { headers });

  return responseHandler(response);
}

export { getReferenceData };
export default { getReferenceData };
