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
 * @interface RegisterIBANExtendedOutput
 */
export interface RegisterIBANExtendedOutput {
    /**
     * IBAN ID
     * @type {number}
     * @memberof RegisterIBANExtendedOutput
     */
    ibanId?: number;
    /**
     * IBAN Status<br/>1 = None.<br/>2 = Internal.<br/>3 = Not used.<br/>4 = Waiting to be verified by Lemon Way.<br/>5 = Activated.<br/>6 = Rejected by the bank.<br/>7 = Rejected, no owner.<br/>8 = Deactivated.<br/>9 = Rejected.<br/>
     * @type {number}
     * @memberof RegisterIBANExtendedOutput
     */
    status?: RegisterIBANExtendedOutputStatusEnum;
    /**
     * 
     * @type {Error}
     * @memberof RegisterIBANExtendedOutput
     */
    error?: Error;
}


/**
 * @export
 */
export const RegisterIBANExtendedOutputStatusEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_7: 7,
    NUMBER_8: 8,
    NUMBER_9: 9
} as const;
export type RegisterIBANExtendedOutputStatusEnum = typeof RegisterIBANExtendedOutputStatusEnum[keyof typeof RegisterIBANExtendedOutputStatusEnum];


/**
 * Check if a given object implements the RegisterIBANExtendedOutput interface.
 */
export function instanceOfRegisterIBANExtendedOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RegisterIBANExtendedOutputFromJSON(json: any): RegisterIBANExtendedOutput {
    return RegisterIBANExtendedOutputFromJSONTyped(json, false);
}

export function RegisterIBANExtendedOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterIBANExtendedOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ibanId': !exists(json, 'ibanId') ? undefined : json['ibanId'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function RegisterIBANExtendedOutputToJSON(value?: RegisterIBANExtendedOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ibanId': value.ibanId,
        'status': value.status,
        'error': value.error,
    };
}

