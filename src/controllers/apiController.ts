/**
 * SAPPAYLib
 *
 */

import { RequestOptions, ApiResponse } from '../core';
import {
  CheckoutPayload,
  checkoutPayloadSchema,
} from '../models/checkoutPayload';
import { Invoice, invoiceSchema } from '../models/invoice';
import { string, unknown, lazy } from '../schema';
import { BaseController } from './baseController';
require('dotenv').config();

export class ApiController extends BaseController {
  accessToken: string | null = null;
  /**
   * Authenticate
   *
   * @param clientId      client_id of Merchant
   * @param clientSecret  client_secret of Merchant
   * @return accessToken  Response from the API call
   */
  async authentication(
    credentials: {
      clientId: string;
      clientSecret: string;
    } | null,
    requestOptions?: RequestOptions
  ): Promise<string> {
    const req = this.createRequest('POST', '/api/o/token/');
    const mapped = req.prepareArgs({
      clientId: [credentials?.clientId ?? this.credentials.clientId, string()],
      clientSecret: [
        credentials?.clientSecret ?? this.credentials.clientSecret,
        string(),
      ],
    });
    req.contentType('application/json');
    req.text(
      JSON.stringify({
        client_id: mapped.clientId,
        client_secret: mapped.clientSecret,
        grant_type: 'password',
        username: this.credentials.username,
        password: this.credentials.password,
      })
    );
    return req
      .callAsJson(unknown(), requestOptions)
      .then(
        (res: ApiResponse<any>) =>
          (this.accessToken = res.result.access_token as string)
      );
  }

  /**
   * Create Invoice
   *
   * @param invoicePayload payload having invoice details
   * @return accessToken  Response from the API call
   */
  async createInvoice(
    invoicePayload: Invoice,
    requestOptions?: RequestOptions
  ): Promise<string> {
    const req = this.createRequest('POST', '/api/platform_invoice/');
    const mapped = req.prepareArgs({
      invoicePayload: [invoicePayload, lazy(() => invoiceSchema)],
    });
    req.contentType('application/json');
    req.header('Authorization', `Bearer ${this.accessToken}`);
    req.text(JSON.stringify(mapped.invoicePayload));
    /*
    return req.call(requestOptions);
    */
    return req
      .callAsJson(unknown(), requestOptions)
      .then(
        (res: ApiResponse<any>) => res.result.response.invoice_id as string
      );
  }

  /**
   * Get Invoice
   *
   * @param invoiceId invoice id
   * @return Invoice  Response from the API call
   */
  async getCheckout(invoiceId: string): Promise<any> {
    const req = this.createRequest(
      'GET',
      `/api/checkout/initiate/?invoice_id=${invoiceId}`
    );
    req.contentType('application/json');
    req.header('Authorization', `Bearer ${this.accessToken}`);
    return req
      .call()
      .then((res: ApiResponse<any>) => JSON.parse(res.body as string));
  }

  /**
   * Perform Checkout
   *
   * @param checkoutPayload payload having otp and invoice id
   * @return accessToken  Response from the API call
   */
  async performCheckout(
    checkoutPayload: CheckoutPayload,
    requestOptions?: RequestOptions
  ): Promise<any> {
    const req = this.createRequest('POST', '/api/checkout/perform/');
    const mapped = req.prepareArgs({
      checkoutPayload: [checkoutPayload, lazy(() => checkoutPayloadSchema)],
    });
    req.contentType('application/json');
    req.header('Authorization', `Bearer ${this.accessToken}`);
    req.text(JSON.stringify(mapped.checkoutPayload));
    return req
      .callAsJson(unknown(), requestOptions)
      .then((res: ApiResponse<any>) => JSON.parse(res.body as string));
  }
}
