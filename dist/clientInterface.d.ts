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
export declare type SdkRequestBuilderFactory = RequestBuilderFactory<Server, AuthParams>;
export declare type SdkRequestBuilder = ReturnType<SdkRequestBuilderFactory>;
export declare type Server = 'default' | 'DURL';
export declare type AuthParams = boolean;
