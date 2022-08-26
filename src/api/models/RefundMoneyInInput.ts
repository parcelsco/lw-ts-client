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
 * @interface RefundMoneyInInput
 */
export interface RefundMoneyInInput {
    /**
     * Refund Amount. If empty, the total amount of the payment will be refunded.
     * @type {number}
     * @memberof RefundMoneyInInput
     */
    amountToRefund?: number;
    /**
     * Comment Regarding the Refund
     * <b>Please explain why you refunded</b>
     * @type {string}
     * @memberof RefundMoneyInInput
     */
    comment?: string;
}

/**
 * Check if a given object implements the RefundMoneyInInput interface.
 */
export function instanceOfRefundMoneyInInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RefundMoneyInInputFromJSON(json: any): RefundMoneyInInput {
    return RefundMoneyInInputFromJSONTyped(json, false);
}

export function RefundMoneyInInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefundMoneyInInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amountToRefund': !exists(json, 'amountToRefund') ? undefined : json['amountToRefund'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
    };
}

export function RefundMoneyInInputToJSON(value?: RefundMoneyInInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amountToRefund': value.amountToRefund,
        'comment': value.comment,
    };
}

