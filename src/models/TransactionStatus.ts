/**
 * SAPPAYLib
 *
 */

import { object, Schema, string } from '../schema';

/** checkoutPayload payload */
export interface TransactionStatus {
  invoice_id: string;
  transaction_id: string;
  transaction_status: string;
  transaction_message: string;
  transaction_date: string;
  redirect_url: string;
}

export const transactionStatusSchema: Schema<TransactionStatus> = object({
  invoice_id: ['invoice_id', string()],
  transaction_id: ['payment_processor_id', string()],
  transaction_status: ['customer_msisdn', string()],
  transaction_message: ['otp', string()],
  transaction_date: ['otp', string()],
  redirect_url: ['otp', string()],
});
