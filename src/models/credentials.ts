/**
 * SAPPAYLib
 *
 */

import { object, Schema, string } from '../schema';

/** credentials payload */
export interface Credentials {
  username: string;
  password: string;
  clientId: string;
  clientSecret: string;
}

export const credentialsSchema: Schema<Credentials> = object({
  username: ['username', string()],
  password: ['password', string()],
  clientId: ['clientId', string()],
  clientSecret: ['clientSecret', string()],
});
