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
import type { CardInfo } from './CardInfo';
import {
    CardInfoFromJSON,
    CardInfoFromJSONTyped,
    CardInfoToJSON,
} from './CardInfo';

/**
 * 
 * @export
 * @interface MoneyIn3DConfirmInput
 */
export interface MoneyIn3DConfirmInput {
    /**
     * **Mercanet only**
     * Indicates if the request is delayed and will require validation.
     * 1. If true, payment will only be pre-authorized, you will have to call the MoneyInValidate method within 6 days or [delayedDays] in order to request the card debit.
     * 2. If empty, the default behavior is no delay and no validation is necessary (unless stated otherwise in your contract).
     * 3. If false, the card will be debited without delay and without validation necessary.
     * @type {boolean}
     * @memberof MoneyIn3DConfirmInput
     */
    isPreAuth?: boolean;
    /**
     * **Mercanet only**
     * If isPreAuth is not true, this will be ignored. 
     * Please use with caution, if delayedDays &gt; 6, it is possible that the payment will be denied when you try to validate it, because a new authorization will be made.
     * @type {number}
     * @memberof MoneyIn3DConfirmInput
     */
    delayedDays?: number;
    /**
     * 
     * @type {CardInfo}
     * @memberof MoneyIn3DConfirmInput
     */
    card?: CardInfo;
    /**
     * MD Data Returned by 3-D Secure Site
     * @type {string}
     * @memberof MoneyIn3DConfirmInput
     */
    md?: string;
    /**
     * Pares Data Returned by 3-D Secure Authentication Website
     * @type {string}
     * @memberof MoneyIn3DConfirmInput
     */
    pares?: string;
    /**
     * Leave Empty
     * @type {string}
     * @memberof MoneyIn3DConfirmInput
     */
    specialConfig?: string;
}

/**
 * Check if a given object implements the MoneyIn3DConfirmInput interface.
 */
export function instanceOfMoneyIn3DConfirmInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MoneyIn3DConfirmInputFromJSON(json: any): MoneyIn3DConfirmInput {
    return MoneyIn3DConfirmInputFromJSONTyped(json, false);
}

export function MoneyIn3DConfirmInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoneyIn3DConfirmInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isPreAuth': !exists(json, 'isPreAuth') ? undefined : json['isPreAuth'],
        'delayedDays': !exists(json, 'delayedDays') ? undefined : json['delayedDays'],
        'card': !exists(json, 'card') ? undefined : CardInfoFromJSON(json['card']),
        'md': !exists(json, 'md') ? undefined : json['md'],
        'pares': !exists(json, 'pares') ? undefined : json['pares'],
        'specialConfig': !exists(json, 'specialConfig') ? undefined : json['specialConfig'],
    };
}

export function MoneyIn3DConfirmInputToJSON(value?: MoneyIn3DConfirmInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isPreAuth': value.isPreAuth,
        'delayedDays': value.delayedDays,
        'card': CardInfoToJSON(value.card),
        'md': value.md,
        'pares': value.pares,
        'specialConfig': value.specialConfig,
    };
}

