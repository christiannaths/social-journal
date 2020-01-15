import axios from 'axios';
import { AxiosRequestConfig } from 'axios/index.d';

interface Response {
  status: number;
  statusText?: string;
  data: {
    error?: any;
  };
}

async function request(options: AxiosRequestConfig, method: any) {
  console.debug(`[${options.method} Request]`, options.url);

  try {
    const response = await axios.request({ method, ...options });
    return response;
  } catch (error) {
    const { response } = error;
    return response;
  }
}

const fetch = (options: any) => request(options, 'GET');
const post = (options: any) => request(options, 'POST');
const put = (options: any) => request(options, 'PUT');

export { fetch, post, put, Response };
