export class UpdateCustomerDto {
  first_name?: string;
  last_name?: string;
  phone?: string;
  email?: string;
  password?: string;
  birth_date?: Date;
  gender?: number;
  lang_id?: number;
  hashed_refresh_token?: string;
}
