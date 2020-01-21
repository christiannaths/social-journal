const Api = require('./base');

async function getHealth() {
  const endpoint = '/v1/health';
  const response = await Api.get(endpoint);
  const { status, execution } = response.data;

  return { status, execution };
}

module.exports = { getHealth };
