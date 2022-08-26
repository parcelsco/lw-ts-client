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
 * @interface TransactionInfo
 */
export interface TransactionInfo {
    /**
     * Transaction Reference Sent to the PSP
     * @type {string}
     * @memberof TransactionInfo
     */
    reference: string;
    /**
     * Merchant Order ID
     * @type {string}
     * @memberof TransactionInfo
     */
    order: string;
    /**
     * Transaction DateTime (UTC Unix timestamp)
     * @type {string}
     * @memberof TransactionInfo
     */
    dateTime: string;
    /**
     * Merchant ID Sent to PSP
     * @type {string}
     * @memberof TransactionInfo
     */
    merchantId: string;
    /**
     * Transaction Authorisation ID Received from PSP
     * @type {string}
     * @memberof TransactionInfo
     */
    authorisationId: string;
}

/**
 * Check if a given object implements the TransactionInfo interface.
 */
export function instanceOfTransactionInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "reference" in value;
    isInstance = isInstance && "order" in value;
    isInstance = isInstance && "dateTime" in value;
    isInstance = isInstance && "merchantId" in value;
    isInstance = isInstance && "authorisationId" in value;

    return isInstance;
}

export function TransactionInfoFromJSON(json: any): TransactionInfo {
    return TransactionInfoFromJSONTyped(json, false);
}

export function TransactionInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reference': json['reference'],
        'order': json['order'],
        'dateTime': json['dateTime'],
        'merchantId': json['merchantId'],
        'authorisationId': json['authorisationId'],
    };
}

export function TransactionInfoToJSON(value?: TransactionInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reference': value.reference,
        'order': value.order,
        'dateTime': value.dateTime,
        'merchantId': value.merchantId,
        'authorisationId': value.authorisationId,
    };
}

