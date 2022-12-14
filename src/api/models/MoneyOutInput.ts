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
 * @interface MoneyOutInput
 */
export interface MoneyOutInput {
    /**
     * Payment Account ID to be debited
     * @type {string}
     * @memberof MoneyOutInput
     */
    accountId: string;
    /**
     * IBAN ID
     * If no IBAN is specified, the last verified(validated) IBAN will be used.
     * @type {number}
     * @memberof MoneyOutInput
     */
    ibanId?: number;
    /**
     * Total amount to debit from the Wallet
     * The client will receive on his bank account[totalAmount] minus[commissionAmount].
     * Amounts are given as integer numbers in cents
     * @type {number}
     * @memberof MoneyOutInput
     */
    totalAmount?: number;
    /**
     * Your fee
     * Amounts are given as integer numbers in cents
     * @type {number}
     * @memberof MoneyOutInput
     */
    commissionAmount?: number;
    /**
     * Payment Comment
     * @type {string}
     * @memberof MoneyOutInput
     */
    comment?: string;
    /**
     * This should be set to No (0) for most sites
     * If true:
     * 1. [amountCom] will be ignored and will be replaced with Lemonway's fee.
     * 2. You will not receive any fee.
     * @type {boolean}
     * @memberof MoneyOutInput
     */
    autoCommission: boolean;
    /**
     * Unique ID of the call, generated by your server. This ID can be used as a search field when looking for operation details
     * @type {string}
     * @memberof MoneyOutInput
     */
    reference?: string;
}

/**
 * Check if a given object implements the MoneyOutInput interface.
 */
export function instanceOfMoneyOutInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accountId" in value;
    isInstance = isInstance && "autoCommission" in value;

    return isInstance;
}

export function MoneyOutInputFromJSON(json: any): MoneyOutInput {
    return MoneyOutInputFromJSONTyped(json, false);
}

export function MoneyOutInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoneyOutInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': json['accountId'],
        'ibanId': !exists(json, 'ibanId') ? undefined : json['ibanId'],
        'totalAmount': !exists(json, 'totalAmount') ? undefined : json['totalAmount'],
        'commissionAmount': !exists(json, 'commissionAmount') ? undefined : json['commissionAmount'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'autoCommission': json['autoCommission'],
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
    };
}

export function MoneyOutInputToJSON(value?: MoneyOutInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountId': value.accountId,
        'ibanId': value.ibanId,
        'totalAmount': value.totalAmount,
        'commissionAmount': value.commissionAmount,
        'comment': value.comment,
        'autoCommission': value.autoCommission,
        'reference': value.reference,
    };
}

