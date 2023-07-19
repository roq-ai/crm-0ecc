interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Administrator', 'Sales Manager', 'Customer Service Representative'],
  tenantName: 'Organization',
  applicationName: 'CRM ',
  addOns: ['chat', 'notifications', 'file'],
};