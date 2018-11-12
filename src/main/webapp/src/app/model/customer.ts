import {Connection} from './connection';
import {PhoneNumber} from './phone.number';

export class Customer {
  id: number;
  firstName: string;
  middleName: string;
  surname: string;
  idNumber: string;
  email: string;
  phoneNumbers: PhoneNumber[];
  connections: Connection[];
}

export interface CustomerApi {
  items: Customer[];
  total_count: number;
}
