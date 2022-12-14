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
 * @interface UnregisterCardInput
 */
export interface UnregisterCardInput {
    /**
     * Payment Account ID
     * @type {string}
     * @memberof UnregisterCardInput
     */
    wallet: string;
}

/**
 * Check if a given object implements the UnregisterCardInput interface.
 */
export function instanceOfUnregisterCardInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "wallet" in value;

    return isInstance;
}

export function UnregisterCardInputFromJSON(json: any): UnregisterCardInput {
    return UnregisterCardInputFromJSONTyped(json, false);
}

export function UnregisterCardInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnregisterCardInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'wallet': json['wallet'],
    };
}

export function UnregisterCardInputToJSON(value?: UnregisterCardInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'wallet': value.wallet,
    };
}

