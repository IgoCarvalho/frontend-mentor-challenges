import { z } from 'zod';

const dateValidation = z
  .string()
  .nonempty("Can't be blank")
  .min(2, 'Must have 2 characters')
  .max(2, 'Must have 2 characters')
  .regex(/^[0-9]{2}$/, 'Wrong format, numbers only');

const cvcValidation = z
  .string()
  .nonempty("Can't be blank")
  .min(3, 'Must have 3 characters')
  .max(3, 'Must have 3 characters')
  .regex(/^[0-9]{3}$/, 'Wrong format, numbers only');

const cardNumberValidation = z
  .string()
  .nonempty("Can't be blank")
  .regex(/^([0-9]|\s)+$/, 'Wrong format, numbers only')
  .regex(/^(([0-9]{4}){4}|([0-9]{4}\s){3}[0-9]{4})$/, 'Wrong format')
  .min(16, 'Wrong format')
  .max(19, 'Wrong format');

export const cardFormSchema = z.object({
  cardholderName: z.string().nonempty("Can't be blank"),
  cardNumber: cardNumberValidation,
  expiryMonth: dateValidation,
  expiryYear: dateValidation,
  cvc: cvcValidation,
});

export type CardFormFields = z.infer<typeof cardFormSchema>;
