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
 * @interface MoneyInWithCardIdOutput
 */
export interface MoneyInWithCardIdOutput {
    /**
     * 
     * @type {TransactionIn}
     * @memberof MoneyInWithCardIdOutput
     */
    transaction?: TransactionIn;
    /**
     * 
     * @type {Error}
     * @memberof MoneyInWithCardIdOutput
     */
    error?: Error;
}

/**
 * Check if a given object implements the MoneyInWithCardIdOutput interface.
 */
export function instanceOfMoneyInWithCardIdOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MoneyInWithCardIdOutputFromJSON(json: any): MoneyInWithCardIdOutput {
    return MoneyInWithCardIdOutputFromJSONTyped(json, false);
}

export function MoneyInWithCardIdOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoneyInWithCardIdOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transaction': !exists(json, 'transaction') ? undefined : TransactionInFromJSON(json['transaction']),
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function MoneyInWithCardIdOutputToJSON(value?: MoneyInWithCardIdOutput | null): any {
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

