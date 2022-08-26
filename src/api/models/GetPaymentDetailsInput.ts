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
import type { PrivateData } from './PrivateData';
import {
    PrivateDataFromJSON,
    PrivateDataFromJSONTyped,
    PrivateDataToJSON,
} from './PrivateData';

/**
 * 
 * @export
 * @interface GetPaymentDetailsInput
 */
export interface GetPaymentDetailsInput {
    /**
     * Transaction ID
     * @type {number}
     * @memberof GetPaymentDetailsInput
     */
    transactionId?: number;
    /**
     * Transaction Comment
     * @type {string}
     * @memberof GetPaymentDetailsInput
     */
    transactionComment?: string;
    /**
     * Unique ID generated by your server
     * @type {string}
     * @memberof GetPaymentDetailsInput
     */
    reference?: string;
    /**
     * 
     * @type {PrivateData}
     * @memberof GetPaymentDetailsInput
     */
    privateData?: PrivateData;
}

/**
 * Check if a given object implements the GetPaymentDetailsInput interface.
 */
export function instanceOfGetPaymentDetailsInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetPaymentDetailsInputFromJSON(json: any): GetPaymentDetailsInput {
    return GetPaymentDetailsInputFromJSONTyped(json, false);
}

export function GetPaymentDetailsInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPaymentDetailsInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transactionId': !exists(json, 'transactionId') ? undefined : json['transactionId'],
        'transactionComment': !exists(json, 'transactionComment') ? undefined : json['transactionComment'],
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
        'privateData': !exists(json, 'privateData') ? undefined : PrivateDataFromJSON(json['privateData']),
    };
}

export function GetPaymentDetailsInputToJSON(value?: GetPaymentDetailsInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transactionId': value.transactionId,
        'transactionComment': value.transactionComment,
        'reference': value.reference,
        'privateData': PrivateDataToJSON(value.privateData),
    };
}

