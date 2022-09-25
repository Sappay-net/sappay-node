/**
 * SAPPAYLib
 *
 */

import { number, object, Schema, string, unknown, optional } from '../schema';

/** customer in invoice payload */
export interface Customer {
  name: string;
  email: string;
  country: number;
  city: number;
  details?: unknown;
}

export const customerSchema: Schema<Customer> = object({
  name: ['name', string()],
  email: ['email', string()],
  country: ['country', number()],
  city: ['city', number()],
  details: ['details', optional(unknown())],
});
