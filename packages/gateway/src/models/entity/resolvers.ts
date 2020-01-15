import {
  requireAuthentication,
  resolverFn,
  ResolverRequest as R,
} from '../../lib/resolver';
import {
  fetch,
  setAuthHeader,
  responseHandler,
} from '../../services/backend/base';

async function listFirmMembersResolver(request: R): Promise<any> {
  const { entityId } = request.args;
  const endpoint = `/entities/${entityId}/firmMembers`;
  const auth = requireAuthentication(request);
  const headers = setAuthHeader(auth);
  const response = await fetch(endpoint, { headers });

  return responseHandler(response);
}

const resolvers = {
  Query: {
    entityFirmMembers: resolverFn(listFirmMembersResolver),
  },
};

export { resolvers };
export default resolvers;
