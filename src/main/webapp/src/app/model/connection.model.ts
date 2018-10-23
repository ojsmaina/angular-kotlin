import {Customer} from './customer';

export class Connection {
  meterSerialNumber: string;
  meterLocation: string;
  connectionCode: string;
  status: string;
  customer: Customer;
}
