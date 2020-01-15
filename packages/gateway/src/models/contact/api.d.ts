interface UpdateContactApiInput {
  birthDate: string;
  nameTypeId: number;
  residency: string;
  contactNameId: number;
  firstName: string;
  lastName: string;
  middleName: string;
  contactAddressId: number;
  addressTypeId: number;
  addr1: string;
  addr2: string;
  addr3: string;
  city: string;
  provinceAbbrev: string;
  country: string;
  postalCode: string;
  telephone: string;
  extension: string;
  mobilePhone: string;
  fax: string;
  email: string;
}

export {
  UpdateContactApiInput,
}