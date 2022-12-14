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
import type { Iban } from './Iban';
import {
    IbanFromJSON,
    IbanFromJSONTyped,
    IbanToJSON,
} from './Iban';

/**
 * 
 * @export
 * @interface AccountIbansOutput
 */
export interface AccountIbansOutput {
    /**
     * List of documents that changed since the entry date
     * @type {Array<Iban>}
     * @memberof AccountIbansOutput
     */
    ibans?: Array<Iban>;
    /**
     * 
     * @type {Error}
     * @memberof AccountIbansOutput
     */
    error?: Error;
}

/**
 * Check if a given object implements the AccountIbansOutput interface.
 */
export function instanceOfAccountIbansOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountIbansOutputFromJSON(json: any): AccountIbansOutput {
    return AccountIbansOutputFromJSONTyped(json, false);
}

export function AccountIbansOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountIbansOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ibans': !exists(json, 'ibans') ? undefined : ((json['ibans'] as Array<any>).map(IbanFromJSON)),
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function AccountIbansOutputToJSON(value?: AccountIbansOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ibans': value.ibans === undefined ? undefined : ((value.ibans as Array<any>).map(IbanToJSON)),
        'error': value.error,
    };
}

