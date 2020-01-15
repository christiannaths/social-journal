import { post, responseHandler, setAuthHeader } from './base';

async function createInvitation(data: any, auth: any) {
  const headers = setAuthHeader(auth);
  const response = await post('/admin/inviteuser', { data, headers });

  console.log({ data });
  console.log({ headers });

  return responseHandler(response);
}

export { createInvitation };

export default { createInvitation };
