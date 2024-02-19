/**
 * SAPPAYLib
 *
 */
import { Schema } from '../schema';
/** checkoutPayload payload */
export interface TransactionStatus {
    invoice_id: string;
    transaction_id: string;
    transaction_status: string;
    transaction_message: string;
    transaction_date: string;
    redirect_url: string;
}
export declare const transactionStatusSchema: Schema<TransactionStatus>;
