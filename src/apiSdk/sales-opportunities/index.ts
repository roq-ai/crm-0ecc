import axios from 'axios';
import queryString from 'query-string';
import { SalesOpportunityInterface, SalesOpportunityGetQueryInterface } from 'interfaces/sales-opportunity';
import { GetQueryInterface } from '../../interfaces';

export const getSalesOpportunities = async (query?: SalesOpportunityGetQueryInterface) => {
  const response = await axios.get(`/api/sales-opportunities${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createSalesOpportunity = async (salesOpportunity: SalesOpportunityInterface) => {
  const response = await axios.post('/api/sales-opportunities', salesOpportunity);
  return response.data;
};

export const updateSalesOpportunityById = async (id: string, salesOpportunity: SalesOpportunityInterface) => {
  const response = await axios.put(`/api/sales-opportunities/${id}`, salesOpportunity);
  return response.data;
};

export const getSalesOpportunityById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/sales-opportunities/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSalesOpportunityById = async (id: string) => {
  const response = await axios.delete(`/api/sales-opportunities/${id}`);
  return response.data;
};
