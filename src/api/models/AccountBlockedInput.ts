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
 * @interface AccountBlockedInput
 */
export interface AccountBlockedInput {
    /**
     * 
     * @type {boolean}
     * @memberof AccountBlockedInput
     */
    isBlocked: boolean;
    /**
     * 
     * @type {string}
     * @memberof AccountBlockedInput
     */
    comment?: string;
}

/**
 * Check if a given object implements the AccountBlockedInput interface.
 */
export function instanceOfAccountBlockedInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "isBlocked" in value;

    return isInstance;
}

export function AccountBlockedInputFromJSON(json: any): AccountBlockedInput {
    return AccountBlockedInputFromJSONTyped(json, false);
}

export function AccountBlockedInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountBlockedInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isBlocked': json['isBlocked'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
    };
}

export function AccountBlockedInputToJSON(value?: AccountBlockedInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isBlocked': value.isBlocked,
        'comment': value.comment,
    };
}

