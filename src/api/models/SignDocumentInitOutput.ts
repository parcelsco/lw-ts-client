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
 * @interface SignDocumentInitOutput
 */
export interface SignDocumentInitOutput {
    /**
     * Payment token to use as GET parameter when redirecting your user to the WEBKIT.
     * so even if the user comes back to your error page (if the user cancelled for example), 
     * you can still submit the same token to the WEBKIT.
     * @type {string}
     * @memberof SignDocumentInitOutput
     */
    signDocument?: string;
    /**
     * 
     * @type {Error}
     * @memberof SignDocumentInitOutput
     */
    error?: Error;
}

/**
 * Check if a given object implements the SignDocumentInitOutput interface.
 */
export function instanceOfSignDocumentInitOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SignDocumentInitOutputFromJSON(json: any): SignDocumentInitOutput {
    return SignDocumentInitOutputFromJSONTyped(json, false);
}

export function SignDocumentInitOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignDocumentInitOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'signDocument': !exists(json, 'signDocument') ? undefined : json['signDocument'],
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function SignDocumentInitOutputToJSON(value?: SignDocumentInitOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'signDocument': value.signDocument,
        'error': value.error,
    };
}

