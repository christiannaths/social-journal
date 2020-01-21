const { resolver } = require('../../lib/resolver');
const { requireAuthentication } = require('../../lib/auth');
const Api = require('../../services/api');

async function currentUserResolver(request) {
  const currentUser = requireAuthentication(request);
  const { sessionId } = currentUser;
  const response = await Api.getUserBySessionId(sessionId);
  const { id, createdAt, updatedAt } = response;

  return { id, sessionId, createdAt, updatedAt };
}

const resolvers = {
  Query: {
    currentUser: resolver(currentUserResolver),
  },
};

module.exports = resolvers;
