import { gql } from 'apollo-server';

const oauthTypes = gql`
  enum OAuthProvider {
    CLIO
  }

  type OAuthorize {
    url: String!
  }

  type OAuthorization {
    id: ID!
    provider: OAuthProvider!
    token: String!
  }

  input CreateOAuthorizationInput {
    code: String!
    provider: OAuthProvider!
    redirectUrl: String
  }

  type CreateOAuthorizationPayload {
    authorization: OAuthorization
  }

  extend type Query {
    oauthorize(
      provider: OAuthProvider!
      redirectUrl: String
    ): OAuthorize
  }

  extend type Mutation {
    oauthorizeCreate(
      input: CreateOAuthorizationInput!
    ): CreateOAuthorizationPayload
  }
`;

export default oauthTypes;
