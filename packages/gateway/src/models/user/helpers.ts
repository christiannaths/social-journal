function pictureUrl(user: any): string {
  const { pictureS3Bucket, picturePath } = user;
  const pictureUrl = (pictureS3Bucket || '') + (picturePath || '');

  return pictureUrl;
}

function defaultPhoneNumber(user: any = {}) {
  const { telephone, mobilePhone } = user;
  const phone = telephone || mobilePhone;

  return phone;
}

function defaultAddress(user: any = {}) {
  const { contactAddresses } = (user.contact || {}) as any;

  if (!contactAddresses) return {};

  const contactAddress = contactAddresses.find((address) => {
    const { id } = (address.addressType || {}) as any;
    return id === 7;
  });

  if (!contactAddress) return {};

  return contactAddress;
}

function defaultName(user: any = {}) {
  const { contactNames } = (user.contact || {}) as any;

  if (!contactNames) return {};

  const contactName = contactNames.find((name) => {
    const { id } = (name.nameType || {}) as any;
    return id === 1;
  });

  if (!contactName) return {};

  const { firstname: firstName, lastname: lastName } = contactName;

  return { ...contactName, firstName, lastName };
}

export { pictureUrl, defaultAddress, defaultPhoneNumber, defaultName };
