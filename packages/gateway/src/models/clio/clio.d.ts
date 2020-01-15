interface ClioContact {
  id: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  telephone?: string;
  mobile?: string;
  emailAddress?: string;
  street?: string;
  city?: string;
  province?: string;
  postalCode?: string;
  country?: string;
}

interface ClioContactsArgs {
  token: string;
}

interface ImportClioContactsInput {
  input: {
    token: string;
  };
}

interface ImportClioContactsPayload {
  contacts: ClioContact[];
}

export {
  ClioContact,
  ClioContactsArgs,
  ImportClioContactsInput,
  ImportClioContactsPayload,
};
