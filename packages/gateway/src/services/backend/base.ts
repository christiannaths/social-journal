import config from 'config';
import { ApolloError, ForbiddenError } from 'apollo-server';
import * as http from '../../lib/http';
// import * as util from 'util';

const { origin: baseURL } = config.get('backendService');

function setAuthHeader(auth: any): any {
  return { 'x-loggedInUserId': auth.id };
}

function responseHandler(response: any): any {
  const { data: responseData = {} } = response;
  const { apiStatus, data, errors } = responseData;

  switch (apiStatus) {
    case 'SUCCESS':
      return data || true;

    case 'NOT_FOUND':
      throw new ApolloError(apiStatus, apiStatus);

    case 'ACCESS_DENIED':
      throw new ForbiddenError(apiStatus);

    default:
      throw new ApolloError(apiStatus, apiStatus, {
        apiErrors: errors,
      });
  }
}

async function fetch(url: string, options: any = {}): Promise<any> {
  const method = 'GET';
  const config = { baseURL, url, method, ...options };
  const response = await http.fetch(config);

  return response;
}

async function post(url: string, options: any = {}): Promise<any> {
  const method = 'POST';
  const config = { baseURL, url, method, ...options };
  const response = await http.post(config);

  return response;
}

async function put(url: string, options: any = {}): Promise<any> {
  const method = 'PUT';
  const config = { baseURL, url, method, ...options };
  const response = await http.put(config);

  return response;
}

export { setAuthHeader, responseHandler, fetch, post, put };

export default {
  setAuthHeader,
  responseHandler,
  fetch,
  post,
  put,
};
