/**
 * SAPPAYLib
 *
 */
import { Schema } from '../schema';
import { Customer } from './customer';
declare enum Type {
    POS = "POS",
    ECOMMERCE = "ECOMMERCE"
}
export declare const typeSchema: Schema<Type>;
/** invoice payload */
export interface Invoice {
    customer: Customer;
    type: Type;
    amount: number;
    reference_id: string;
    token: string;
}
export declare const invoiceSchema: Schema<Invoice>;
export {};
