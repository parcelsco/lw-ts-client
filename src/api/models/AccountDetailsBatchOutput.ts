/* tslint:disable */
/* eslint-disable */
/**
 * Lemonway DirectKit API 2.0
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AccountDetails } from './AccountDetails';
import {
    AccountDetailsFromJSON,
    AccountDetailsFromJSONTyped,
    AccountDetailsToJSON,
} from './AccountDetails';

/**
 * 
 * @export
 * @interface AccountDetailsBatchOutput
 */
export interface AccountDetailsBatchOutput {
    /**
     * 
     * @type {Array<AccountDetails>}
     * @memberof AccountDetailsBatchOutput
     */
    accounts?: Array<AccountDetails>;
    /**
     * 
     * @type {Error}
     * @memberof AccountDetailsBatchOutput
     */
    error?: Error;
}

/**
 * Check if a given object implements the AccountDetailsBatchOutput interface.
 */
export function instanceOfAccountDetailsBatchOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountDetailsBatchOutputFromJSON(json: any): AccountDetailsBatchOutput {
    return AccountDetailsBatchOutputFromJSONTyped(json, false);
}

export function AccountDetailsBatchOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountDetailsBatchOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accounts': !exists(json, 'accounts') ? undefined : ((json['accounts'] as Array<any>).map(AccountDetailsFromJSON)),
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function AccountDetailsBatchOutputToJSON(value?: AccountDetailsBatchOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accounts': value.accounts === undefined ? undefined : ((value.accounts as Array<any>).map(AccountDetailsToJSON)),
        'error': value.error,
    };
}

