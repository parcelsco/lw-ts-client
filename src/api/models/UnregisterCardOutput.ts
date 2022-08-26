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
 * @interface UnregisterCardOutput
 */
export interface UnregisterCardOutput {
    /**
     * ID Card
     * @type {number}
     * @memberof UnregisterCardOutput
     */
    cardId?: number;
    /**
     * 
     * @type {Error}
     * @memberof UnregisterCardOutput
     */
    error?: Error;
}

/**
 * Check if a given object implements the UnregisterCardOutput interface.
 */
export function instanceOfUnregisterCardOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UnregisterCardOutputFromJSON(json: any): UnregisterCardOutput {
    return UnregisterCardOutputFromJSONTyped(json, false);
}

export function UnregisterCardOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnregisterCardOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cardId': !exists(json, 'cardId') ? undefined : json['cardId'],
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function UnregisterCardOutputToJSON(value?: UnregisterCardOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cardId': value.cardId,
        'error': value.error,
    };
}

