import {Customer} from './customer';
import {Reading} from './Reading';

export class Connection {
  id: number;
  meterSerialNumber: string;
  meterLocation: string;
  connectionCode: string;
  status: string;
  customer: Customer;
  readings: Reading[];
}
