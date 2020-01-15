import {
  resolverFn,
  ResolverRequest as R,
  requireAuthentication,
} from '../../lib/resolver';
import * as Backend from '../../services/backend';
import * as helpers from './helpers';
import { users as mockUsers } from './mock-data';

async function currentUserRolesResolver(request: R): Promise<any> {
  const auth = requireAuthentication(request);
  const userRoles = await Backend.getUserRoles(auth.id, auth);

  const groupRoles = userRoles.groups.map((role) => {
    const { code, name } = role;
    return { code, name };
  });

  let entityRoles = userRoles.entityRoles.map((entityRole) => {
    const { entityId } = entityRole;
    return entityRole.roles.map((role) => {
      const { code, description: name } = role;
      return { entityId, code, name };
    });
  });

  const roles = [...groupRoles, ...entityRoles.flat(Infinity)];

  return roles;
}

async function currentUserResolver(request: R): Promise<any> {
  const auth = requireAuthentication(request);
  const response = await Backend.getCurrentUserProfile(auth);

  const { identityEmail: email } = response;
  const pictureUrl = helpers.pictureUrl(response) || null;
  const { id: contactId } = response.contact;
  const { firstName, lastName } = helpers.defaultName(response);
  const initials = firstName[0] + lastName[0];
  const { phone, cell } = helpers.defaultAddress(response);

  // const roles = await currentUserRolesResolver(request);

  const currentUser = {
    ...response,
    contactId,
    email,
    pictureUrl,
    firstName,
    lastName,
    initials,
    phone,
    cell,
    // roles,
  };

  return currentUser;
}

async function userByEmailResolver(request: R): Promise<any> {
  console.log(
    "[TODO: userExistsByEmail] Hook this up to the backend once it's ready. https://tensai.atlassian.net/browse/MVP-267",
  );

  const { email } = request.args;
  const user = mockUsers.find((user) => user.email === email);

  return user;
}

/**
 * Taking these out for now.

async function createUserResolver(request: R): Promise<any> {
  const { args } = request;

  try {
    const { token } = args.invitation;

    if (!token) throw new Error('Invitation token not found');

    delete args.invitation;
    args.token = token;

    const serviceCall = Backend.createUserProfileFromToken as any;
    const response = await serviceCall(args);
    const { data } = response;

    return data;
  } catch {
    const auth = requireAuthentication(request);
    const serviceCall = Backend.createUserProfile(args, auth) as any;
    const response = await serviceCall(args);
    const { data } = response;

    return data;
  }
}

async function changePasswordResolver(request: R): Promise<boolean> {
  const { token } = request.context.currentUser;
  const { oldPassword, newPassword } = request.args;
  const password = { old: oldPassword, new: newPassword };
  const response = await Auth.changePassword(token, password);

  return response;
}

async function resetPasswordResolver(request: R): Promise<boolean> {
  const { token } = request.context.currentUser;
  const response = await Auth.resetPassword(token);

  return response;
}

function updateUserResolver(request: R): User {
  const { args } = request;
  const { userId } = request.args;
  const user = users.find((user) => user.uuid === userId);
  const userUpdate = omitBy(args, isNil);

  console.warn('[TODO]');
  console.warn('This mutation is not persisted to the database,');
  console.warn('hook up the backend api to save these changes.');

  return {
    ...user,
    ...userUpdate,
  } as User;
}
*/

const resolvers = {
  Query: {
    currentUser: resolverFn(currentUserResolver),
    userByEmail: resolverFn(userByEmailResolver),
  },

  User: {
    roles: resolverFn(currentUserRolesResolver),
  },
};

export { resolvers };
export default resolvers;
