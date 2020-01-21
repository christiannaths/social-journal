const Api = require('./base');

async function getUserBySessionId(sessionId) {
  const endpoint = `/v1/users/${sessionId}`;
  const response = await Api.get(endpoint);

  console.log(response);

  const { id, createdAt, updatedAt } = response;

  return { id, sessionId, createdAt, updatedAt };
}

module.exports = { getUserBySessionId };
