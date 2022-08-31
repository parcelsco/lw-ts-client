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
 * @interface BankBranchAddress
 */
export interface BankBranchAddress {
    /**
     * Number and Street
     * @type {string}
     * @memberof BankBranchAddress
     */
    street: string;
    /**
     * Postal or Zip Code
     * @type {string}
     * @memberof BankBranchAddress
     */
    zipCode: string;
    /**
     * City
     * @type {string}
     * @memberof BankBranchAddress
     */
    city: string;
}

/**
 * Check if a given object implements the BankBranchAddress interface.
 */
export function instanceOfBankBranchAddress(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "street" in value;
    isInstance = isInstance && "zipCode" in value;
    isInstance = isInstance && "city" in value;

    return isInstance;
}

export function BankBranchAddressFromJSON(json: any): BankBranchAddress {
    return BankBranchAddressFromJSONTyped(json, false);
}

export function BankBranchAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankBranchAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'street': json['Street'],
        'zipCode': json['ZipCode'],
        'city': json['City'],
    };
}

export function BankBranchAddressToJSON(value?: BankBranchAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Street': value.street,
        'ZipCode': value.zipCode,
        'City': value.city,
    };
}
