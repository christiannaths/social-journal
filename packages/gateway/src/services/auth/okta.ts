// @ts-ignore
import JWTVerifier from '@okta/jwt-verifier';
// @ts-ignore
import { Client as OktaClient } from '@okta/okta-sdk-nodejs';
import appConfig from 'config';

const config = appConfig.get('okta') as any;

const client = new OktaClient({
  orgUrl: config.url,
  token: config.token,
});

async function getUser(args: any): Promise<any> {
  return await client.getUser(args);
}

const { changePassword, resetPassword } = client;

async function getUserIdFromJwt(jwt: string): Promise<string> {
  const verifier = new JWTVerifier({
    issuer: `${config.url}/oauth2/default`,
    clientId: config.clientId,
  });
  const { aud } = config;
  const parsedJwt = await verifier.verifyAccessToken(jwt, aud);
  const { sub: userId } = parsedJwt.claims;

  return userId;
}

export { getUser, changePassword, resetPassword, getUserIdFromJwt };
