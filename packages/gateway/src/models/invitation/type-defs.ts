import { gql } from 'apollo-server';

const invitationType = gql`
  input CreateInvitationInput {
    email: String!
    entityId: ID!
    firstName: String!
    positionTypeId: ID!
    lastName: String!
    roleId: ID!
  }

  type CreateInvitationPayload {
    token: String
  }

  extend type Mutation {
    createInvitation(
      input: CreateInvitationInput!
    ): CreateInvitationPayload
  }
`;

export { invitationType };
export default invitationType;
