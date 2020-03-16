const { resolver } = require('../../lib/resolver');
const Api = require('../../services/api');

function benchmark() {
  const a = Date.now();

  for (let i = 0; i < 99999999; i++) {
    const n = (1 + 4 * 5) ^ (2 / 4);
  }

  const b = Date.now();
  return (b - a) / 1000;
}

async function gatewayHealthResolver(request) {
  const status = 'SUCCESS';
  const executionTime = benchmark();

  return { status, executionTime };
}

async function apiHealthResolver(request) {
  const response = await Api.getHealth();
  const { status, execution: executionTime } = response;

  return { status, executionTime };
}

const resolvers = {
  Query: {
    apiHealth: resolver(apiHealthResolver),
    gatewayHealth: resolver(gatewayHealthResolver),
  },
};

module.exports = resolvers;
