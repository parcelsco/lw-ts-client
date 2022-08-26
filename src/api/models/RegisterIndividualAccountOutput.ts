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
import type { IndividualAccount } from './IndividualAccount';
import {
    IndividualAccountFromJSON,
    IndividualAccountFromJSONTyped,
    IndividualAccountToJSON,
} from './IndividualAccount';

/**
 * 
 * @export
 * @interface RegisterIndividualAccountOutput
 */
export interface RegisterIndividualAccountOutput {
    /**
     * 
     * @type {IndividualAccount}
     * @memberof RegisterIndividualAccountOutput
     */
    account?: IndividualAccount;
    /**
     * 
     * @type {Error}
     * @memberof RegisterIndividualAccountOutput
     */
    error?: Error;
}

/**
 * Check if a given object implements the RegisterIndividualAccountOutput interface.
 */
export function instanceOfRegisterIndividualAccountOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RegisterIndividualAccountOutputFromJSON(json: any): RegisterIndividualAccountOutput {
    return RegisterIndividualAccountOutputFromJSONTyped(json, false);
}

export function RegisterIndividualAccountOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterIndividualAccountOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account': !exists(json, 'account') ? undefined : IndividualAccountFromJSON(json['account']),
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function RegisterIndividualAccountOutputToJSON(value?: RegisterIndividualAccountOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account': IndividualAccountToJSON(value.account),
        'error': value.error,
    };
}

