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
 * @interface CardInfoExtended
 */
export interface CardInfoExtended {
    /**
     * Card Holder
     * @type {string}
     * @memberof CardInfoExtended
     */
    cardHolder?: string;
    /**
     * Card Type<br/>0 = CB.<br/>1 = Visa.<br/>2 = Mastercard.<br/>
     * @type {number}
     * @memberof CardInfoExtended
     */
    cardType: CardInfoExtendedCardTypeEnum;
    /**
     * Masked Card Number
     * @type {string}
     * @memberof CardInfoExtended
     */
    cardNumber: string;
    /**
     * Card Expiration Date
     * @type {string}
     * @memberof CardInfoExtended
     */
    cardDate: string;
    /**
     * Card Country
     * @type {string}
     * @memberof CardInfoExtended
     */
    cardCountry?: string;
}


/**
 * @export
 */
export const CardInfoExtendedCardTypeEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type CardInfoExtendedCardTypeEnum = typeof CardInfoExtendedCardTypeEnum[keyof typeof CardInfoExtendedCardTypeEnum];


/**
 * Check if a given object implements the CardInfoExtended interface.
 */
export function instanceOfCardInfoExtended(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cardType" in value;
    isInstance = isInstance && "cardNumber" in value;
    isInstance = isInstance && "cardDate" in value;

    return isInstance;
}

export function CardInfoExtendedFromJSON(json: any): CardInfoExtended {
    return CardInfoExtendedFromJSONTyped(json, false);
}

export function CardInfoExtendedFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardInfoExtended {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cardHolder': !exists(json, 'cardHolder') ? undefined : json['cardHolder'],
        'cardType': json['cardType'],
        'cardNumber': json['cardNumber'],
        'cardDate': json['cardDate'],
        'cardCountry': !exists(json, 'cardCountry') ? undefined : json['cardCountry'],
    };
}

export function CardInfoExtendedToJSON(value?: CardInfoExtended | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cardHolder': value.cardHolder,
        'cardType': value.cardType,
        'cardNumber': value.cardNumber,
        'cardDate': value.cardDate,
        'cardCountry': value.cardCountry,
    };
}

