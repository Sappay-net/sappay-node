/**
 * SAPPAYLib
 *
 */
import { ClientInterface, SdkRequestBuilderFactory } from './clientInterface';
import { Configuration } from './configuration';
import { Credentials } from './models/credentials';
export declare class Client implements ClientInterface {
    private _config;
    private _timeout;
    private _retryConfig;
    private _requestBuilderFactory;
    constructor(config?: Partial<Configuration>);
    getRequestBuilderFactory(): SdkRequestBuilderFactory;
    getCreds(): Credentials;
    /**
     * Clone this client and override given configuration options
     */
    withConfiguration(config: Partial<Configuration>): Client;
}
