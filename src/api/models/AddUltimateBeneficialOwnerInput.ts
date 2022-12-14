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
 * @interface AddUltimateBeneficialOwnerInput
 */
export interface AddUltimateBeneficialOwnerInput {
    /**
     * Client First Name
     * @type {string}
     * @memberof AddUltimateBeneficialOwnerInput
     */
    firstName: string;
    /**
     * Client Last Name
     * @type {string}
     * @memberof AddUltimateBeneficialOwnerInput
     */
    lastName: string;
    /**
     * Client Nationality (use ISO 3166-1 alpha-3 format)
     * @type {string}
     * @memberof AddUltimateBeneficialOwnerInput
     */
    nationality?: string;
    /**
     * Client Birthdate
     * @type {string}
     * @memberof AddUltimateBeneficialOwnerInput
     */
    dateOfBirth: string;
    /**
     * Client City of Birth
     * @type {string}
     * @memberof AddUltimateBeneficialOwnerInput
     */
    cityOfBirth: string;
    /**
     * Client Country of Birth (use ISO 3166-1 alpha-3 format)
     * @type {string}
     * @memberof AddUltimateBeneficialOwnerInput
     */
    countryOfBirth: string;
    /**
     * Country of Residence (use ISO 3166-1 alpha-3 format)
     * @type {string}
     * @memberof AddUltimateBeneficialOwnerInput
     */
    countryOfResidence?: string;
}

/**
 * Check if a given object implements the AddUltimateBeneficialOwnerInput interface.
 */
export function instanceOfAddUltimateBeneficialOwnerInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "firstName" in value;
    isInstance = isInstance && "lastName" in value;
    isInstance = isInstance && "dateOfBirth" in value;
    isInstance = isInstance && "cityOfBirth" in value;
    isInstance = isInstance && "countryOfBirth" in value;

    return isInstance;
}

export function AddUltimateBeneficialOwnerInputFromJSON(json: any): AddUltimateBeneficialOwnerInput {
    return AddUltimateBeneficialOwnerInputFromJSONTyped(json, false);
}

export function AddUltimateBeneficialOwnerInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddUltimateBeneficialOwnerInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': json['firstName'],
        'lastName': json['lastName'],
        'nationality': !exists(json, 'nationality') ? undefined : json['nationality'],
        'dateOfBirth': json['dateOfBirth'],
        'cityOfBirth': json['cityOfBirth'],
        'countryOfBirth': json['countryOfBirth'],
        'countryOfResidence': !exists(json, 'countryOfResidence') ? undefined : json['countryOfResidence'],
    };
}

export function AddUltimateBeneficialOwnerInputToJSON(value?: AddUltimateBeneficialOwnerInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstName': value.firstName,
        'lastName': value.lastName,
        'nationality': value.nationality,
        'dateOfBirth': value.dateOfBirth,
        'cityOfBirth': value.cityOfBirth,
        'countryOfBirth': value.countryOfBirth,
        'countryOfResidence': value.countryOfResidence,
    };
}

