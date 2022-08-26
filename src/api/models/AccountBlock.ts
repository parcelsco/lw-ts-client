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
 * @interface AccountBlock
 */
export interface AccountBlock {
    /**
     * Updated payment account ID
     * @type {string}
     * @memberof AccountBlock
     */
    id?: string;
    /**
     * Status of the payment account
     * 1: is bocked true
     * 0: is blocked false
     * @type {boolean}
     * @memberof AccountBlock
     */
    isBlocked?: boolean;
}

/**
 * Check if a given object implements the AccountBlock interface.
 */
export function instanceOfAccountBlock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountBlockFromJSON(json: any): AccountBlock {
    return AccountBlockFromJSONTyped(json, false);
}

export function AccountBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'isBlocked': !exists(json, 'isBlocked') ? undefined : json['isBlocked'],
    };
}

export function AccountBlockToJSON(value?: AccountBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'isBlocked': value.isBlocked,
    };
}

