const Api = require('./base');

async function getUserBySessionId(sessionId) {
  const endpoint = `/v1/users/${sessionId}`;
  const response = await Api.get(endpoint);

  return response;
}

module.exports = { getUserBySessionId };
