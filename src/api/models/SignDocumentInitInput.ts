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
 * @interface SignDocumentInitInput
 */
export interface SignDocumentInitInput {
    /**
     * Required if no mobile number is already assigned to the payment account (using RegisterWallet or UpdateWalletDetails).
     * Format must be MSISDN : international number with country code, without "+" and "00".
     * @type {string}
     * @memberof SignDocumentInitInput
     */
    mobileNumber?: string;
    /**
     * Use <b>21</b> for SDD mandate
     * @type {number}
     * @memberof SignDocumentInitInput
     */
    type: number;
    /**
     * Your site will the return URL, called by WEBKIT to terminate the operation.
     * @type {string}
     * @memberof SignDocumentInitInput
     */
    returnUrl: string;
    /**
     * You iste will return the URL, called by WEBKIT in case of an error.
     * @type {string}
     * @memberof SignDocumentInitInput
     */
    errorUrl: string;
}

/**
 * Check if a given object implements the SignDocumentInitInput interface.
 */
export function instanceOfSignDocumentInitInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "returnUrl" in value;
    isInstance = isInstance && "errorUrl" in value;

    return isInstance;
}

export function SignDocumentInitInputFromJSON(json: any): SignDocumentInitInput {
    return SignDocumentInitInputFromJSONTyped(json, false);
}

export function SignDocumentInitInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignDocumentInitInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mobileNumber': !exists(json, 'mobileNumber') ? undefined : json['mobileNumber'],
        'type': json['type'],
        'returnUrl': json['returnUrl'],
        'errorUrl': json['errorUrl'],
    };
}

export function SignDocumentInitInputToJSON(value?: SignDocumentInitInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mobileNumber': value.mobileNumber,
        'type': value.type,
        'returnUrl': value.returnUrl,
        'errorUrl': value.errorUrl,
    };
}

