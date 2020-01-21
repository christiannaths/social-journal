const { AuthenticationError } = require('apollo-server');

function requireAuthentication(request) {
  const { currentUser } = request.context;
  const failed = !currentUser || !currentUser.sessionId;

  if (failed) throw new AuthenticationError('Authentication failed');

  return currentUser;
}

module.exports = { requireAuthentication };
