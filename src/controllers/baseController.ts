/**
 * SAPPAYLib
 *
 */

import { ClientInterface, SdkRequestBuilderFactory } from '../clientInterface';
import { Credentials } from '../models/credentials';

/** Base class for all controllers */
export class BaseController {
  /** Create a request builder */
  protected createRequest: SdkRequestBuilderFactory;
  protected credentials: Credentials;

  constructor(client: ClientInterface) {
    this.createRequest = client.getRequestBuilderFactory();
    this.credentials = client.getCreds();
  }
}
