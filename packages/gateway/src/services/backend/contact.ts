import { put, responseHandler, setAuthHeader } from './base';
import { UpdateContactApiInput } from '../../models/contact/api';

async function updateContact(
  id: number,
  data: UpdateContactApiInput,
  auth: any,
): Promise<any> {
  const endpoint = `/contacts/${id}`;
  const headers = setAuthHeader(auth);
  const response = await put(endpoint, { data, headers });
  return responseHandler(response);
}
export { updateContact };

export default {
  updateContact,
};
