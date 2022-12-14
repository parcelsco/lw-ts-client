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
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { TransactionsTransactionIn } from './TransactionsTransactionIn';
import {
    TransactionsTransactionInFromJSON,
    TransactionsTransactionInFromJSONTyped,
    TransactionsTransactionInToJSON,
} from './TransactionsTransactionIn';

/**
 * 
 * @export
 * @interface GetMoneyInSddOutput
 */
export interface GetMoneyInSddOutput {
    /**
     * 
     * @type {TransactionsTransactionIn}
     * @memberof GetMoneyInSddOutput
     */
    transactions?: TransactionsTransactionIn;
    /**
     * 
     * @type {Links}
     * @memberof GetMoneyInSddOutput
     */
    links?: Links;
    /**
     * 
     * @type {Error}
     * @memberof GetMoneyInSddOutput
     */
    error?: Error;
}

/**
 * Check if a given object implements the GetMoneyInSddOutput interface.
 */
export function instanceOfGetMoneyInSddOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetMoneyInSddOutputFromJSON(json: any): GetMoneyInSddOutput {
    return GetMoneyInSddOutputFromJSONTyped(json, false);
}

export function GetMoneyInSddOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMoneyInSddOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transactions': !exists(json, 'transactions') ? undefined : TransactionsTransactionInFromJSON(json['transactions']),
        'links': !exists(json, '_links') ? undefined : LinksFromJSON(json['_links']),
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function GetMoneyInSddOutputToJSON(value?: GetMoneyInSddOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transactions': TransactionsTransactionInToJSON(value.transactions),
        '_links': LinksToJSON(value.links),
        'error': value.error,
    };
}

