/**
 * SAPPAYLib
 *
 */

import { object, Schema, string } from '../schema';

/** checkoutPayload payload */
export interface CheckoutPayload {
  invoice_id: string;
  payment_processor_id: string;
  customer_msisdn: string;
  otp: string;
}

export const checkoutPayloadSchema: Schema<CheckoutPayload> = object({
  invoice_id: ['invoice_id', string()],
  payment_processor_id: ['payment_processor_id', string()],
  customer_msisdn: ['customer_msisdn', string()],
  otp: ['otp', string()],
});
