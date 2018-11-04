import {Customer} from './customer';

export class Connection {
  id: number;
  meterSerialNumber: string;
  meterLocation: string;
  connectionCode: string;
  status: string;
  customer: Customer;
}
