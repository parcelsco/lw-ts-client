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
 * @interface UnregisterSddMandateInput
 */
export interface UnregisterSddMandateInput {
    /**
     * Payment Account ID
     * @type {string}
     * @memberof UnregisterSddMandateInput
     */
    account: string;
}

/**
 * Check if a given object implements the UnregisterSddMandateInput interface.
 */
export function instanceOfUnregisterSddMandateInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "account" in value;

    return isInstance;
}

export function UnregisterSddMandateInputFromJSON(json: any): UnregisterSddMandateInput {
    return UnregisterSddMandateInputFromJSONTyped(json, false);
}

export function UnregisterSddMandateInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnregisterSddMandateInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account': json['account'],
    };
}

export function UnregisterSddMandateInputToJSON(value?: UnregisterSddMandateInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account': value.account,
    };
}

