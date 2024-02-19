/**
 * SAPPAYLib
 *
 */

import { number, object, Schema, string, lazy } from '../schema';
import { Customer, customerSchema } from './customer';

enum Type {
  POS = 'POS',
  ECOMMERCE = 'ECOMMERCE',
}

export const typeSchema: Schema<Type> = string() as Schema<Type>;

/** invoice payload */
export interface Invoice {
  customer: Customer;
  type: Type;
  amount: number;
  reference_id: string;
  token: string;
}

export const invoiceSchema: Schema<Invoice> = object({
  customer: ['customer', lazy(() => customerSchema)],
  type: ['type', lazy(() => typeSchema)],
  amount: ['amount', number()],
  reference_id: ['reference_id', string()],
  token: ['token', string()],
});
