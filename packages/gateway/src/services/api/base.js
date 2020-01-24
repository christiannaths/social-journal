const axios = require('axios');
const camelcaseKeys = require('camelcase-keys');
const config = require('config');

async function request(endpoint, options, method) {
  const { origin } = config.get('apiService');

  options.url = options.url || origin + endpoint;
  options.method = options.method || method;

  console.debug(`[${options.method} Request]`, options.url);

  try {
    const response = await axios.request(options);

    if (!response.data) return null;

    return camelcaseKeys(response.data);
  } catch (error) {
    const { response } = error;

    console.error('[ERROR]', error);
    console.error('[Response]', response);

    return camelcaseKeys(response);
  }
}

const Api = {
  get: function(endpoint, options = {}) {
    return request(endpoint, options, 'GET');
  },
  post: function(endpoint, options = {}) {
    return request(endpoint, options, 'POST');
  },
  put: function(endpoint, options = {}) {
    return request(endpoint, options, 'PUT');
  },
  delete: function(endpoint, options = {}) {
    return request(endpoint, options, 'DELETE');
  },
};

module.exports = Api;
