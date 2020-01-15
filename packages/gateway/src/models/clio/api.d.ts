interface ApiError {
  type: string;
  message: string;
}

interface ApiAddress {
  id: number;
  etag: string;
  street: string;
  city: string;
  province: string;
  postal_code: string;
  country: string;
  name: string;
  created_at: string;
  updated_at: string;
  primary: boolean;
}

interface ApiEmailAddress {
  id: number;
  etag: string;
  address: string;
  name: string;
  primary: boolean;
  created_at: string;
  updated_at: string;
}

interface ApiContact {
  id: number;
  etag: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  type: string;
  created_at: string;
  updated_at: string;
  prefix: string;
  title: string;
  initials: string;
  clio_connect_email: string;
  locked_clio_connect_email: boolean;
  client_connect_user_id: number;
  primary_email_address: string;
  secondary_email_address: string;
  primary_phone_number: string;
  secondary_phone_number: string;
  ledes_client_id: string;
  is_client: boolean;
  is_co_counsel: boolean;
  activity_rates: any[];
  addresses: ApiAddress[];
  custom_field_values: any[];
  custom_field_set_associations: any[];
  email_addresses: ApiEmailAddress[];
  instant_messengers: any[];
  phone_numbers: any[];
  web_sites: any[];
  notification_methods: any[];
  account_balances: any[];
  related_contacts: any[];
  primary_work_address: ApiAddress;
  primary_address: ApiAddress;
  secondary_address: ApiAddress;
  company: any;
  avatar: any;
  payment_profile: any;
  folder: any;
  co_counsel_rate: any;
  primary_web_site: any;
}

interface ApiContactsResponse {
  error?: ApiError;
  data?: ApiContact[];
}

export { ApiError, ApiContact, ApiContactsResponse };
