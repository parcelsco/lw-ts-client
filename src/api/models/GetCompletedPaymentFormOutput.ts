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
import type { PaymentFormDetails } from './PaymentFormDetails';
import {
    PaymentFormDetailsFromJSON,
    PaymentFormDetailsFromJSONTyped,
    PaymentFormDetailsToJSON,
} from './PaymentFormDetails';

/**
 * 
 * @export
 * @interface GetCompletedPaymentFormOutput
 */
export interface GetCompletedPaymentFormOutput {
    /**
     * 
     * @type {PaymentFormDetails}
     * @memberof GetCompletedPaymentFormOutput
     */
    form?: PaymentFormDetails;
    /**
     * 
     * @type {Error}
     * @memberof GetCompletedPaymentFormOutput
     */
    error?: Error;
}

/**
 * Check if a given object implements the GetCompletedPaymentFormOutput interface.
 */
export function instanceOfGetCompletedPaymentFormOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetCompletedPaymentFormOutputFromJSON(json: any): GetCompletedPaymentFormOutput {
    return GetCompletedPaymentFormOutputFromJSONTyped(json, false);
}

export function GetCompletedPaymentFormOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCompletedPaymentFormOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'form': !exists(json, 'form') ? undefined : PaymentFormDetailsFromJSON(json['form']),
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function GetCompletedPaymentFormOutputToJSON(value?: GetCompletedPaymentFormOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'form': PaymentFormDetailsToJSON(value.form),
        'error': value.error,
    };
}

