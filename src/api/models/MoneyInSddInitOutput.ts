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
import type { TransactionIn } from './TransactionIn';
import {
    TransactionInFromJSON,
    TransactionInFromJSONTyped,
    TransactionInToJSON,
} from './TransactionIn';

/**
 * 
 * @export
 * @interface MoneyInSddInitOutput
 */
export interface MoneyInSddInitOutput {
    /**
     * 
     * @type {TransactionIn}
     * @memberof MoneyInSddInitOutput
     */
    transaction?: TransactionIn;
    /**
     * 
     * @type {Error}
     * @memberof MoneyInSddInitOutput
     */
    error?: Error;
}

/**
 * Check if a given object implements the MoneyInSddInitOutput interface.
 */
export function instanceOfMoneyInSddInitOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MoneyInSddInitOutputFromJSON(json: any): MoneyInSddInitOutput {
    return MoneyInSddInitOutputFromJSONTyped(json, false);
}

export function MoneyInSddInitOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoneyInSddInitOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transaction': !exists(json, 'transaction') ? undefined : TransactionInFromJSON(json['transaction']),
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function MoneyInSddInitOutputToJSON(value?: MoneyInSddInitOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transaction': TransactionInToJSON(value.transaction),
        'error': value.error,
    };
}

