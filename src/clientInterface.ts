/**
 * SAPPAYLib
 *
 */

import { RequestBuilderFactory } from './core';
import { Credentials } from './models/credentials';

export interface ClientInterface {
  getRequestBuilderFactory(): SdkRequestBuilderFactory;
  getCreds(): Credentials;
}

export type SdkRequestBuilderFactory = RequestBuilderFactory<
  Server,
  AuthParams
>;

export type SdkRequestBuilder = ReturnType<SdkRequestBuilderFactory>;

export type Server = 'default' | 'DURL';

export type AuthParams = boolean;
