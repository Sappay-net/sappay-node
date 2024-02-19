/**
 * SAPPAYLib
 *
 */

import { accessTokenAuthenticationProvider } from './authentication';
import {
  AuthParams,
  ClientInterface,
  SdkRequestBuilder,
  SdkRequestBuilderFactory,
  Server,
} from './clientInterface';
import { Configuration, Environment } from './configuration';
import {
  DEFAULT_CONFIGURATION,
  DEFAULT_RETRY_CONFIG,
} from './defaultConfiguration';
import { ApiError } from './core';
import {
  AuthenticatorInterface,
  createRequestBuilderFactory,
  HttpClient,
  HttpClientInterface,
  RetryConfiguration,
  XmlSerializerInterface,
} from './core';
import { XmlSerialization } from './http/xmlSerialization';
import { Credentials } from './models/credentials';
require('dotenv').config();

const USER_AGENT = 'APIMATIC 3.0';

export class Client implements ClientInterface {
  private _config: Readonly<Configuration>;
  private _timeout: number;
  private _retryConfig: RetryConfiguration;
  private _requestBuilderFactory: SdkRequestBuilderFactory;

  constructor(config?: Partial<Configuration>) {
    this._config = {
      ...DEFAULT_CONFIGURATION,
      ...config,
    };
    this._retryConfig = {
      ...DEFAULT_RETRY_CONFIG,
      ...this._config.httpClientOptions?.retryConfig,
    };
    this._timeout =
      typeof this._config.httpClientOptions?.timeout != 'undefined'
        ? this._config.httpClientOptions.timeout
        : this._config.timeout;
    this._requestBuilderFactory = createRequestHandlerFactory(
      (server) => getBaseUri(server, this._config),
      accessTokenAuthenticationProvider(this._config),
      new HttpClient({
        timeout: this._timeout,
        clientConfigOverrides: this._config.unstable_httpClientOptions,
        httpAgent: this._config.httpClientOptions?.httpAgent,
        httpsAgent: this._config.httpClientOptions?.httpsAgent,
      }),
      [withErrorHandlers, withUserAgent, withAuthenticationByDefault],
      new XmlSerialization(),
      this._retryConfig
    );
  }

  public getRequestBuilderFactory(): SdkRequestBuilderFactory {
    return this._requestBuilderFactory;
  }

  public getCreds(): Credentials {
    if (this._config.credentials) {
      return this._config.credentials;
    }
    throw new Error('Credentials not found');
  }

  /**
   * Clone this client and override given configuration options
   */
  public withConfiguration(config: Partial<Configuration>) {
    return new Client({ ...this._config, ...config });
  }
}

function createHttpClientAdapter(client: HttpClient): HttpClientInterface {
  return async (request, requestOptions) => {
    return await client.executeRequest(request, requestOptions);
  };
}

function getBaseUri(server: Server = 'default', config: Configuration): string {
  if (config.environment === Environment.Production) {
    if (server === 'default') {
      return 'https://api.prod.sappay.net/';
    }
    if (server === 'DURL') {
      return 'https://api.stg.sappay.net/';
    }
  }
  if (config.environment === Environment.Development) {
    if (server === 'default') {
      return 'https://api.stg.sappay.net/';
    }
  }
  throw new Error('Could not get Base URL. Invalid environment or server.');
}

function createRequestHandlerFactory(
  baseUrlProvider: (server?: Server) => string,
  authProvider: AuthenticatorInterface<AuthParams>,
  httpClient: HttpClient,
  addons: ((rb: SdkRequestBuilder) => void)[],
  xmlSerializer: XmlSerializerInterface,
  retryConfig: RetryConfiguration
): SdkRequestBuilderFactory {
  const requestBuilderFactory = createRequestBuilderFactory(
    createHttpClientAdapter(httpClient),
    baseUrlProvider,
    ApiError,
    authProvider,
    xmlSerializer,
    retryConfig
  );

  return tap(requestBuilderFactory, ...addons);
}

function tap(
  requestBuilderFactory: SdkRequestBuilderFactory,
  ...callback: ((requestBuilder: SdkRequestBuilder) => void)[]
): SdkRequestBuilderFactory {
  return (...args) => {
    const requestBuilder = requestBuilderFactory(...args);
    callback.forEach((c) => c(requestBuilder));
    return requestBuilder;
  };
}

function withErrorHandlers(rb: SdkRequestBuilder) {
  rb.defaultToError(ApiError);
}

function withUserAgent(rb: SdkRequestBuilder) {
  rb.header('user-agent', USER_AGENT);
}

function withAuthenticationByDefault(rb: SdkRequestBuilder) {
  rb.authenticate(false);
}
