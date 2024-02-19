/**
 * SAPPAYLib
 *
 */
import { Schema } from '../schema';
/** checkoutPayload payload */
export interface CheckoutPayload {
    invoice_id: string;
    payment_processor_id: string;
    customer_msisdn: string;
    otp: string;
}
export declare const checkoutPayloadSchema: Schema<CheckoutPayload>;
