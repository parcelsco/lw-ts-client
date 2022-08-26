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
 * @interface Birth
 */
export interface Birth {
    /**
     * Client Date of Birth
     * @type {string}
     * @memberof Birth
     */
    date: string;
    /**
     * Client City of Birth
     * @type {string}
     * @memberof Birth
     */
    city?: string;
    /**
     * Client Country of Birth, using ISO 3166-1 alpha-3. Three-letter country code, for example: FRA (France), GBR (United Kingdom of Great Britain and Northern Ireland)
     * @type {string}
     * @memberof Birth
     */
    country?: string;
}

/**
 * Check if a given object implements the Birth interface.
 */
export function instanceOfBirth(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "date" in value;

    return isInstance;
}

export function BirthFromJSON(json: any): Birth {
    return BirthFromJSONTyped(json, false);
}

export function BirthFromJSONTyped(json: any, ignoreDiscriminator: boolean): Birth {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'date': json['date'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'country': !exists(json, 'Country') ? undefined : json['Country'],
    };
}

export function BirthToJSON(value?: Birth | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date': value.date,
        'city': value.city,
        'Country': value.country,
    };
}

