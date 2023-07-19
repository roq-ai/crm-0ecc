import * as yup from 'yup';

export const serviceInteractionValidationSchema = yup.object().shape({
  description: yup.string().required(),
  customer_id: yup.string().nullable().required(),
});
