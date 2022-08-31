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
 * @interface CreateIBANOutput
 */
export interface CreateIBANOutput {
    /**
     * IBAN ID
     * @type {number}
     * @memberof CreateIBANOutput
     */
    id?: number;
    /**
     * IBAN
     * @type {string}
     * @memberof CreateIBANOutput
     */
    iban?: string;
    /**
     * BIC/SWIFT Code
     * @type {string}
     * @memberof CreateIBANOutput
     */
    bic?: string;
    /**
     * IBAN Owner: First Name, Last Name, or Enterprise Name
     * @type {string}
     * @memberof CreateIBANOutput
     */
    holder?: string;
    /**
     * Domiciliation
     * @type {string}
     * @memberof CreateIBANOutput
     */
    domiciliation?: string;
    /**
     * IBAN Status
     * @type {number}
     * @memberof CreateIBANOutput
     */
    status?: number;
    /**
     * IBAN left that can be generated for this wallet
     * @type {number}
     * @memberof CreateIBANOutput
     */
    maxAvailableIbanPerWallet?: number;
    /**
     * IBAN left that can be generated in total
     * @type {number}
     * @memberof CreateIBANOutput
     */
    maxAvailableIban?: number;
    /**
     * PDF in base64
     * @type {string}
     * @memberof CreateIBANOutput
     */
    pdf?: string;
    /**
     * QR Code PNG in base64
     * @type {string}
     * @memberof CreateIBANOutput
     */
    qrCode?: string;
    /**
     * 
     * @type {Error}
     * @memberof CreateIBANOutput
     */
    error?: Error;
}

/**
 * Check if a given object implements the CreateIBANOutput interface.
 */
export function instanceOfCreateIBANOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateIBANOutputFromJSON(json: any): CreateIBANOutput {
    return CreateIBANOutputFromJSONTyped(json, false);
}

export function CreateIBANOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateIBANOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'iban': !exists(json, 'iban') ? undefined : json['iban'],
        'bic': !exists(json, 'bic') ? undefined : json['bic'],
        'holder': !exists(json, 'holder') ? undefined : json['holder'],
        'domiciliation': !exists(json, 'domiciliation') ? undefined : json['domiciliation'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'maxAvailableIbanPerWallet': !exists(json, 'maxAvailableIbanPerWallet') ? undefined : json['maxAvailableIbanPerWallet'],
        'maxAvailableIban': !exists(json, 'maxAvailableIban') ? undefined : json['maxAvailableIban'],
        'pdf': !exists(json, 'pdf') ? undefined : json['pdf'],
        'qrCode': !exists(json, 'qrCode') ? undefined : json['qrCode'],
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function CreateIBANOutputToJSON(value?: CreateIBANOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'iban': value.iban,
        'bic': value.bic,
        'holder': value.holder,
        'domiciliation': value.domiciliation,
        'status': value.status,
        'maxAvailableIbanPerWallet': value.maxAvailableIbanPerWallet,
        'maxAvailableIban': value.maxAvailableIban,
        'pdf': value.pdf,
        'qrCode': value.qrCode,
        'error': value.error,
    };
}
