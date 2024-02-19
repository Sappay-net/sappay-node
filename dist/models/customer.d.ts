/**
 * SAPPAYLib
 *
 */
import { Schema } from '../schema';
/** customer in invoice payload */
export interface Customer {
    name: string;
    email: string;
    country: number;
    city: number;
    details?: unknown;
}
export declare const customerSchema: Schema<Customer>;
