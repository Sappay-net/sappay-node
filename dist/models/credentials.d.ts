/**
 * SAPPAYLib
 *
 */
import { Schema } from '../schema';
/** credentials payload */
export interface Credentials {
    username: string;
    password: string;
    clientId: string;
    clientSecret: string;
}
export declare const credentialsSchema: Schema<Credentials>;
