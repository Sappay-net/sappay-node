/**
 * SAPPAYLib
 *
 */
import { ClientInterface, SdkRequestBuilderFactory } from '../clientInterface';
import { Credentials } from '../models/credentials';
/** Base class for all controllers */
export declare class BaseController {
    /** Create a request builder */
    protected createRequest: SdkRequestBuilderFactory;
    protected credentials: Credentials;
    constructor(client: ClientInterface);
}
