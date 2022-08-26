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
 * @interface MoneyIn3DAuthenticateInput
 */
export interface MoneyIn3DAuthenticateInput {
    /**
     * 
     * @type {CardInfo}
     * @memberof MoneyIn3DAuthenticateInput
     */
    card?: CardInfo;
    /**
     * MD Data Returned by 3-D Secure Site
     * @type {string}
     * @memberof MoneyIn3DAuthenticateInput
     */
    md?: string;
    /**
     * Pares Data Returned by 3-D Secure Authentication Website
     * @type {string}
     * @memberof MoneyIn3DAuthenticateInput
     */
    pares?: string;
    /**
     * Leave Empty
     * @type {string}
     * @memberof MoneyIn3DAuthenticateInput
     */
    specialConfig?: string;
}

/**
 * Check if a given object implements the MoneyIn3DAuthenticateInput interface.
 */
export function instanceOfMoneyIn3DAuthenticateInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MoneyIn3DAuthenticateInputFromJSON(json: any): MoneyIn3DAuthenticateInput {
    return MoneyIn3DAuthenticateInputFromJSONTyped(json, false);
}

export function MoneyIn3DAuthenticateInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoneyIn3DAuthenticateInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'card': !exists(json, 'card') ? undefined : CardInfoFromJSON(json['card']),
        'md': !exists(json, 'md') ? undefined : json['md'],
        'pares': !exists(json, 'pares') ? undefined : json['pares'],
        'specialConfig': !exists(json, 'specialConfig') ? undefined : json['specialConfig'],
    };
}

export function MoneyIn3DAuthenticateInputToJSON(value?: MoneyIn3DAuthenticateInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'card': CardInfoToJSON(value.card),
        'md': value.md,
        'pares': value.pares,
        'specialConfig': value.specialConfig,
    };
}

