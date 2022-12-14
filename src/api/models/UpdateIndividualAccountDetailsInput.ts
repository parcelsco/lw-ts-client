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
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
} from './Address';
import type { Birth } from './Birth';
import {
    BirthFromJSON,
    BirthFromJSONTyped,
    BirthToJSON,
} from './Birth';

/**
 * 
 * @export
 * @interface UpdateIndividualAccountDetailsInput
 */
export interface UpdateIndividualAccountDetailsInput {
    /**
     * New Email. Unique as usual
     * @type {string}
     * @memberof UpdateIndividualAccountDetailsInput
     */
    email?: string;
    /**
     * Client title
     * @type {string}
     * @memberof UpdateIndividualAccountDetailsInput
     */
    title?: string;
    /**
     * Client first name
     * @type {string}
     * @memberof UpdateIndividualAccountDetailsInput
     */
    firstName?: string;
    /**
     * Client last name
     * @type {string}
     * @memberof UpdateIndividualAccountDetailsInput
     */
    lastName?: string;
    /**
     * 
     * @type {Address}
     * @memberof UpdateIndividualAccountDetailsInput
     */
    adresse?: Address;
    /**
     * 
     * @type {Birth}
     * @memberof UpdateIndividualAccountDetailsInput
     */
    birth?: Birth;
    /**
     * MSISDN phone number
     * @type {string}
     * @memberof UpdateIndividualAccountDetailsInput
     */
    phoneNumber?: string;
    /**
     * Mobile phone number with MSISDN format: international number with country code without "00" neither "+".<br /> 
     * This will be used by default when eletronically signing documents.
     * @type {string}
     * @memberof UpdateIndividualAccountDetailsInput
     */
    mobileNumber?: string;
    /**
     * For crowdfunding/loan platforms, indicate if the wallet is created for a debtor.
     * @type {boolean}
     * @memberof UpdateIndividualAccountDetailsInput
     */
    isDebtor?: boolean;
    /**
     * client nationality, using ISO 3166-1 alpha-3 format.
     * Please separate multiple nationalities with a comma.
     * @type {string}
     * @memberof UpdateIndividualAccountDetailsInput
     */
    nationality?: string;
    /**
     * Indicates if the payment account is created for a payer or a beneficiary:
     * 1. Empty: unknown status (default)
     * 2. 1: Payer
     * 3. 2: Beneficiary
     * @type {number}
     * @memberof UpdateIndividualAccountDetailsInput
     */
    payerOrBeneficiary?: number;
    /**
     * Indicate if the company of the wallet
     * @type {boolean}
     * @memberof UpdateIndividualAccountDetailsInput
     */
    isCompany?: boolean;
}

/**
 * Check if a given object implements the UpdateIndividualAccountDetailsInput interface.
 */
export function instanceOfUpdateIndividualAccountDetailsInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateIndividualAccountDetailsInputFromJSON(json: any): UpdateIndividualAccountDetailsInput {
    return UpdateIndividualAccountDetailsInputFromJSONTyped(json, false);
}

export function UpdateIndividualAccountDetailsInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateIndividualAccountDetailsInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'adresse': !exists(json, 'adresse') ? undefined : AddressFromJSON(json['adresse']),
        'birth': !exists(json, 'Birth') ? undefined : BirthFromJSON(json['Birth']),
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'mobileNumber': !exists(json, 'mobileNumber') ? undefined : json['mobileNumber'],
        'isDebtor': !exists(json, 'isDebtor') ? undefined : json['isDebtor'],
        'nationality': !exists(json, 'nationality') ? undefined : json['nationality'],
        'payerOrBeneficiary': !exists(json, 'payerOrBeneficiary') ? undefined : json['payerOrBeneficiary'],
        'isCompany': !exists(json, 'isCompany') ? undefined : json['isCompany'],
    };
}

export function UpdateIndividualAccountDetailsInputToJSON(value?: UpdateIndividualAccountDetailsInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'title': value.title,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'adresse': AddressToJSON(value.adresse),
        'Birth': BirthToJSON(value.birth),
        'phoneNumber': value.phoneNumber,
        'mobileNumber': value.mobileNumber,
        'isDebtor': value.isDebtor,
        'nationality': value.nationality,
        'payerOrBeneficiary': value.payerOrBeneficiary,
        'isCompany': value.isCompany,
    };
}

