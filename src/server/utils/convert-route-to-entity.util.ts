const mapping: Record<string, string> = {
  customers: 'customer',
  organizations: 'organization',
  'sales-opportunities': 'sales_opportunity',
  'service-interactions': 'service_interaction',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
