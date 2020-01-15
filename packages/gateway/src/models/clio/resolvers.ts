import { URLSearchParams } from 'url';
import { ApolloError } from 'apollo-server';
import { ApiContactsResponse } from './api.d';
import {
  ClioContact,
  ClioContactsArgs,
  ImportClioContactsInput,
  ImportClioContactsPayload,
} from './clio.d';

const contactFields = [
  'id',
  'first_name',
  'middle_name',
  'last_name',
  'primary_phone_number',
  'primary_email_address',
  'primary_address{city,country,province,postal_code,street}',
];

async function clioContacts(
  _parent: any,
  args: ClioContactsArgs,
): Promise<ClioContact[]> {
  if (!args.token) {
    throw new ApolloError('could not read clio access token');
  }
  const headers = {
    authorization: `Bearer ${args.token}`,
  };

  const params = new URLSearchParams();
  params.append('type', 'Person');
  params.append('fields', contactFields.join(','));

  const query = params.toString();
  const resp = await fetch(
    `https://app.clio.com/api/v4/contacts.json?${query}`,
    { headers },
  );

  const json: ApiContactsResponse = await resp.json();
  if (json.error) {
    throw new ApolloError(json.error.message);
  }

  if (!json.data) {
    throw new ApolloError('could not read contacts');
  }

  return json.data.map((contact) => ({
    id: contact.id,
    firstName: contact.first_name,
    middleName: contact.middle_name,
    lastName: contact.last_name,
    telephone: contact.primary_phone_number,
    mobile: contact.primary_phone_number,
    emailAddress: contact.primary_email_address,
    street: contact.primary_address && contact.primary_address.street,
    city: contact.primary_address && contact.primary_address.city,
    country: contact.primary_address && contact.primary_address.country,
    province:
      contact.primary_address && contact.primary_address.province,
    postalCode:
      contact.primary_address && contact.primary_address.postal_code,
  }));
}

async function importClioContacts(
  _parent: any,
  args: ImportClioContactsInput,
): Promise<ImportClioContactsPayload> {
  if (!args.input.token) {
    throw new ApolloError('could not read clio access token');
  }
  const contacts = await clioContacts(null, args.input);

  // TODO: implement the create contact code here
  // const backendResponse = await backendService.createIndividualContact(...);

  return { contacts };
}

const resolvers = {
  Query: {
    clioContacts,
  },
  Mutation: {
    importClioContacts,
  },
};

export default resolvers;
