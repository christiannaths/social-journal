import * as Okta from './okta';

/**
 * To get the auth token, log into the web-app and
 * get the token from the console:
 * JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken
 */
async function getUser(jwt: string): Promise<any> {
  try {
    const userID = await Okta.getUserIdFromJwt(jwt);
    const user = await Okta.getUser(userID);

    return user.profile;
  } catch (error) {
    console.debug(error);

    return null;
  }
}

async function changePassword(
  jwt: string,
  password: any,
): Promise<boolean> {
  const userId = await Okta.getUserIdFromJwt(jwt);
  const oldPassword = { value: password.old };
  const newPassword = { value: password.new };
  const data = { oldPassword, newPassword };
  const creds = await Okta.changePassword(userId, data);
  const success = Boolean(creds) && Boolean(creds.password);

  return success;
}

async function resetPassword(jwt: string): Promise<boolean> {
  const userId = await Okta.getUserIdFromJwt(jwt);
  const creds = await Okta.resetPassword(userId);
  const success = Boolean(creds);

  return success;
}

export { getUser, changePassword, resetPassword };

export default {
  getUser,
  changePassword,
  resetPassword,
};
