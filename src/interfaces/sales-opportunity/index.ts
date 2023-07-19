import { CustomerInterface } from 'interfaces/customer';
import { GetQueryInterface } from 'interfaces';

export interface SalesOpportunityInterface {
  id?: string;
  status: string;
  customer_id: string;
  created_at?: any;
  updated_at?: any;

  customer?: CustomerInterface;
  _count?: {};
}

export interface SalesOpportunityGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  customer_id?: string;
}
