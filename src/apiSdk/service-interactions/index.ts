import axios from 'axios';
import queryString from 'query-string';
import { ServiceInteractionInterface, ServiceInteractionGetQueryInterface } from 'interfaces/service-interaction';
import { GetQueryInterface } from '../../interfaces';

export const getServiceInteractions = async (query?: ServiceInteractionGetQueryInterface) => {
  const response = await axios.get(`/api/service-interactions${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createServiceInteraction = async (serviceInteraction: ServiceInteractionInterface) => {
  const response = await axios.post('/api/service-interactions', serviceInteraction);
  return response.data;
};

export const updateServiceInteractionById = async (id: string, serviceInteraction: ServiceInteractionInterface) => {
  const response = await axios.put(`/api/service-interactions/${id}`, serviceInteraction);
  return response.data;
};

export const getServiceInteractionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/service-interactions/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteServiceInteractionById = async (id: string) => {
  const response = await axios.delete(`/api/service-interactions/${id}`);
  return response.data;
};
