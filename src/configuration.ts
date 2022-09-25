/**
 * SAPPAYLib
 *
 */

import { HttpClientOptions } from './core';
import { Credentials } from './models/credentials';

/** An interface for all configuration parameters required by the SDK. */
export interface Configuration {
  credentials?: Credentials;
  timeout: number;
  environment: Environment;
  accessToken: string;
  httpClientOptions?: Partial<HttpClientOptions>;
  unstable_httpClientOptions?: any;
}

/** Environments available for API */
export enum Environment {
  Production = 'production',
}
