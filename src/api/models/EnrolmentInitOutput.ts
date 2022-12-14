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
 * @interface EnrolmentInitOutput
 */
export interface EnrolmentInitOutput {
    /**
     * Redirect URL to Deutsche Post PostIdent
     * @type {string}
     * @memberof EnrolmentInitOutput
     */
    redirecturl?: string;
    /**
     * 
     * @type {Error}
     * @memberof EnrolmentInitOutput
     */
    error?: Error;
}

/**
 * Check if a given object implements the EnrolmentInitOutput interface.
 */
export function instanceOfEnrolmentInitOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EnrolmentInitOutputFromJSON(json: any): EnrolmentInitOutput {
    return EnrolmentInitOutputFromJSONTyped(json, false);
}

export function EnrolmentInitOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrolmentInitOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'redirecturl': !exists(json, 'redirecturl') ? undefined : json['redirecturl'],
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function EnrolmentInitOutputToJSON(value?: EnrolmentInitOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'redirecturl': value.redirecturl,
        'error': value.error,
    };
}

