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
 * @interface AccountBalance
 */
export interface AccountBalance {
    /**
     * Payment account ID
     * @type {string}
     * @memberof AccountBalance
     */
    id?: string;
    /**
     * Payment account balance
     * @type {number}
     * @memberof AccountBalance
     */
    balance?: number;
    /**
     * Status of the payment account<br/>2 = Registered, KYC incomplete.<br/>3 = Registered, rejected KYC.<br/>5 = Registered, KYC 1 (status given at registration).<br/>6 = Registered, KYC 2.<br/>7 = Registered, KYC 3.<br/>8 = Registered, expired KYC.<br/>10 = Blocked.<br/>12 = Closed.<br/>13 = Registered, status is being updated from KYC 2 to KYC 3.<br/>14 = One-time customer.<br/>15 = Special account for crowdlending.<br/>16 = Technical account.<br/>
     * @type {number}
     * @memberof AccountBalance
     */
    status?: AccountBalanceStatusEnum;
}


/**
 * @export
 */
export const AccountBalanceStatusEnum = {
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_7: 7,
    NUMBER_8: 8,
    NUMBER_10: 10,
    NUMBER_12: 12,
    NUMBER_13: 13,
    NUMBER_14: 14,
    NUMBER_15: 15,
    NUMBER_16: 16
} as const;
export type AccountBalanceStatusEnum = typeof AccountBalanceStatusEnum[keyof typeof AccountBalanceStatusEnum];


/**
 * Check if a given object implements the AccountBalance interface.
 */
export function instanceOfAccountBalance(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountBalanceFromJSON(json: any): AccountBalance {
    return AccountBalanceFromJSONTyped(json, false);
}

export function AccountBalanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountBalance {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'balance': !exists(json, 'balance') ? undefined : json['balance'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function AccountBalanceToJSON(value?: AccountBalance | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'balance': value.balance,
        'status': value.status,
    };
}
