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
 * @interface DisableIBANOutput
 */
export interface DisableIBANOutput {
    /**
     * IBAN ID
     * @type {number}
     * @memberof DisableIBANOutput
     */
    id?: number;
    /**
     * IBAN Status
     * @type {number}
     * @memberof DisableIBANOutput
     */
    status?: number;
    /**
     * 
     * @type {Error}
     * @memberof DisableIBANOutput
     */
    error?: Error;
}

/**
 * Check if a given object implements the DisableIBANOutput interface.
 */
export function instanceOfDisableIBANOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DisableIBANOutputFromJSON(json: any): DisableIBANOutput {
    return DisableIBANOutputFromJSONTyped(json, false);
}

export function DisableIBANOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): DisableIBANOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function DisableIBANOutputToJSON(value?: DisableIBANOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'status': value.status,
        'error': value.error,
    };
}

