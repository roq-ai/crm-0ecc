import { SalesOpportunityInterface } from 'interfaces/sales-opportunity';
import { ServiceInteractionInterface } from 'interfaces/service-interaction';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  name: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  sales_opportunity?: SalesOpportunityInterface[];
  service_interaction?: ServiceInteractionInterface[];
  organization?: OrganizationInterface;
  _count?: {
    sales_opportunity?: number;
    service_interaction?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
}
