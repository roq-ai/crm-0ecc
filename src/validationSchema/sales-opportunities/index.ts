import * as yup from 'yup';

export const salesOpportunityValidationSchema = yup.object().shape({
  status: yup.string().required(),
  customer_id: yup.string().nullable().required(),
});
