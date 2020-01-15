import { fetch, responseHandler } from './base';

async function getUserByEmail(email: string): Promise<any> {
  const endpoint = `/unauthenticated/users/${email}`;
  const response = await fetch(endpoint);

  return responseHandler(response);
}

export { getUserByEmail };
export default { getUserByEmail };
