/**
 * SAPPAYLib
 *
 */
import { RequestOptions } from '../core';
import { CheckoutPayload } from '../models/checkoutPayload';
import { Invoice } from '../models/invoice';
import { TransactionStatus } from '../models/TransactionStatus';
import { BaseController } from './baseController';
export declare class ApiController extends BaseController {
    accessToken: string | null;
    /**
     * Authenticate
     *
     * @param clientId      client_id of Merchant
     * @param clientSecret  client_secret of Merchant
     * @return accessToken  Response from the API call
     */
    authentication(credentials: {
        clientId: string;
        clientSecret: string;
    } | null, requestOptions?: RequestOptions): Promise<string>;
    /**
     * Create Invoice
     *
     * @param invoicePayload payload having invoice details
     * @return accessToken  Response from the API call
     */
    createInvoice(invoicePayload: Invoice, requestOptions?: RequestOptions): Promise<string>;
    /**
     * Get Invoice
     *
     * @param invoiceId invoice id
     * @return Invoice  Response from the API call
     */
    getCheckout(invoiceId: string): Promise<any>;
    /**
     * Perform Checkout
     *
     * @param checkoutPayload payload having otp and invoice id
     * @return accessToken  Response from the API call
     */
    performCheckout(checkoutPayload: CheckoutPayload, requestOptions?: RequestOptions): Promise<any>;
    /**
     * Get Status
     *
     * @param invoiceId invoice id
     * @return TransactionStatus  last transaction status against invoiceId from the API call
     */
    getStatus(invoiceId: string): Promise<TransactionStatus | null>;
}
