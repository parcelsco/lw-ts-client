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
 * @interface MoneyInValidateOutput
 */
export interface MoneyInValidateOutput {
    /**
     * 
     * @type {TransactionIn}
     * @memberof MoneyInValidateOutput
     */
    transaction?: TransactionIn;
    /**
     * 
     * @type {Error}
     * @memberof MoneyInValidateOutput
     */
    error?: Error;
}

/**
 * Check if a given object implements the MoneyInValidateOutput interface.
 */
export function instanceOfMoneyInValidateOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MoneyInValidateOutputFromJSON(json: any): MoneyInValidateOutput {
    return MoneyInValidateOutputFromJSONTyped(json, false);
}

export function MoneyInValidateOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoneyInValidateOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transaction': !exists(json, 'transaction') ? undefined : TransactionInFromJSON(json['transaction']),
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function MoneyInValidateOutputToJSON(value?: MoneyInValidateOutput | null): any {
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
