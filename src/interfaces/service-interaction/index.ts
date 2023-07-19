import { CustomerInterface } from 'interfaces/customer';
import { GetQueryInterface } from 'interfaces';

export interface ServiceInteractionInterface {
  id?: string;
  description: string;
  customer_id: string;
  created_at?: any;
  updated_at?: any;

  customer?: CustomerInterface;
  _count?: {};
}

export interface ServiceInteractionGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  customer_id?: string;
}
