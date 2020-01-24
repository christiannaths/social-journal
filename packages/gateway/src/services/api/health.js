const Api = require('./base');

async function getHealth() {
  const endpoint = '/v1/health';

  try {
    const response = await Api.get(endpoint);
    const { status, execution } = response;
    return { status, execution };
  } catch (error) {
    return null;
  }
}

module.exports = { getHealth };
