const { resolver } = require('../../lib/resolver');
const { requireAuthentication } = require('../../lib/auth');
const { AuthenticationError } = require('apollo-server');
const Api = require('../../services/api');

async function currentUserResolver(request) {
  const currentUser = requireAuthentication(request);
  const { sessionId } = currentUser;
  const user = await Api.getUserBySessionId(sessionId);

  if (!user) throw new AuthenticationError();

  const { id, createdAt, updatedAt } = user;

  return { id, sessionId, createdAt, updatedAt };
}

const resolvers = {
  Query: {
    currentUser: resolver(currentUserResolver),
  },
};

module.exports = resolvers;
