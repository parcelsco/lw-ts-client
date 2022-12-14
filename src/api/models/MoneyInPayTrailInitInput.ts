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
/**
 * 
 * @export
 * @interface MoneyInPayTrailInitInput
 */
export interface MoneyInPayTrailInitInput {
    /**
     * Your site returns the URL, called to terminate the operation and on which the callback will be sent, with data in POST parameters.
     * This URL must contain a unique ID so you know which operation is related to the return.
     * @type {string}
     * @memberof MoneyInPayTrailInitInput
     */
    returnUrl: string;
    /**
     * Unique ID of the call, generated by your server. This ID can be used as a search field when looking for operation details
     * @type {string}
     * @memberof MoneyInPayTrailInitInput
     */
    reference?: string;
    /**
     * Payment Account ID to Credit
     * @type {string}
     * @memberof MoneyInPayTrailInitInput
     */
    accountId: string;
    /**
     * Amount to Debit
     * Amounts are given as integer numbers in cents
     * @type {number}
     * @memberof MoneyInPayTrailInitInput
     */
    totalAmount?: number;
    /**
     * Your Fee
     * Amounts are given as integer numbers in cents
     * @type {number}
     * @memberof MoneyInPayTrailInitInput
     */
    commissionAmount?: number;
    /**
     * Comment Regarding the Transaction
     * @type {string}
     * @memberof MoneyInPayTrailInitInput
     */
    comment?: string;
    /**
     * If true:
     * 1. [amountCom] will be ignored and will be replaced with Lemonway's fee
     * 2. You will not receive any fee
     * @type {boolean}
     * @memberof MoneyInPayTrailInitInput
     */
    autoCommission?: boolean;
}

/**
 * Check if a given object implements the MoneyInPayTrailInitInput interface.
 */
export function instanceOfMoneyInPayTrailInitInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "returnUrl" in value;
    isInstance = isInstance && "accountId" in value;

    return isInstance;
}

export function MoneyInPayTrailInitInputFromJSON(json: any): MoneyInPayTrailInitInput {
    return MoneyInPayTrailInitInputFromJSONTyped(json, false);
}

export function MoneyInPayTrailInitInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoneyInPayTrailInitInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'returnUrl': json['returnUrl'],
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
        'accountId': json['accountId'],
        'totalAmount': !exists(json, 'totalAmount') ? undefined : json['totalAmount'],
        'commissionAmount': !exists(json, 'commissionAmount') ? undefined : json['commissionAmount'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'autoCommission': !exists(json, 'autoCommission') ? undefined : json['autoCommission'],
    };
}

export function MoneyInPayTrailInitInputToJSON(value?: MoneyInPayTrailInitInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'returnUrl': value.returnUrl,
        'reference': value.reference,
        'accountId': value.accountId,
        'totalAmount': value.totalAmount,
        'commissionAmount': value.commissionAmount,
        'comment': value.comment,
        'autoCommission': value.autoCommission,
    };
}

