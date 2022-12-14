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
 * @interface SendPaymentInput
 */
export interface SendPaymentInput {
    /**
     * Wallet ID to be Debited
     * @type {string}
     * @memberof SendPaymentInput
     */
    debitAccountId: string;
    /**
     * Wallet ID to Credited
     * @type {string}
     * @memberof SendPaymentInput
     */
    creditAccountId: string;
    /**
     * Payment Amount
     * @type {number}
     * @memberof SendPaymentInput
     */
    amount?: number;
    /**
     * Payment Comment
     * @type {string}
     * @memberof SendPaymentInput
     */
    comment?: string;
    /**
     * If scheduledDate is set, the following rules will apply:
     * 1. ScheduledDate cannot be equal to the current date, Paris time (CET).
     * 2. The payment will be inserted but not executed, the status will be pending and necessary checks like user balance or user status will not be checked.
     * 3. At 1am, Paris time (CET), on [scheduledDate], the checks will be performed and the payment will be finalized.
     * **This feature is only available for some partners, contact commercial services for more information.**
     * @type {string}
     * @memberof SendPaymentInput
     */
    scheduledDate?: string;
    /**
     * 
     * @type {PrivateData}
     * @memberof SendPaymentInput
     */
    privateData?: PrivateData;
    /**
     * Origin Transaction Identification
     * @type {number}
     * @memberof SendPaymentInput
     */
    originTransactionId?: number;
    /**
     * 
     * @type {string}
     * @memberof SendPaymentInput
     */
    reference?: string;
}

/**
 * Check if a given object implements the SendPaymentInput interface.
 */
export function instanceOfSendPaymentInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "debitAccountId" in value;
    isInstance = isInstance && "creditAccountId" in value;

    return isInstance;
}

export function SendPaymentInputFromJSON(json: any): SendPaymentInput {
    return SendPaymentInputFromJSONTyped(json, false);
}

export function SendPaymentInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendPaymentInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'debitAccountId': json['debitAccountId'],
        'creditAccountId': json['creditAccountId'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'scheduledDate': !exists(json, 'scheduledDate') ? undefined : json['scheduledDate'],
        'privateData': !exists(json, 'privateData') ? undefined : PrivateDataFromJSON(json['privateData']),
        'originTransactionId': !exists(json, 'originTransactionId') ? undefined : json['originTransactionId'],
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
    };
}

export function SendPaymentInputToJSON(value?: SendPaymentInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'debitAccountId': value.debitAccountId,
        'creditAccountId': value.creditAccountId,
        'amount': value.amount,
        'comment': value.comment,
        'scheduledDate': value.scheduledDate,
        'privateData': PrivateDataToJSON(value.privateData),
        'originTransactionId': value.originTransactionId,
        'reference': value.reference,
    };
}

