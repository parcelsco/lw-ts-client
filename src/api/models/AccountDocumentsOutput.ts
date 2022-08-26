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
import type { Document } from './Document';
import {
    DocumentFromJSON,
    DocumentFromJSONTyped,
    DocumentToJSON,
} from './Document';

/**
 * 
 * @export
 * @interface AccountDocumentsOutput
 */
export interface AccountDocumentsOutput {
    /**
     * List of documents that changed since the entry date
     * @type {Array<Document>}
     * @memberof AccountDocumentsOutput
     */
    documents?: Array<Document>;
    /**
     * 
     * @type {Error}
     * @memberof AccountDocumentsOutput
     */
    error?: Error;
}

/**
 * Check if a given object implements the AccountDocumentsOutput interface.
 */
export function instanceOfAccountDocumentsOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountDocumentsOutputFromJSON(json: any): AccountDocumentsOutput {
    return AccountDocumentsOutputFromJSONTyped(json, false);
}

export function AccountDocumentsOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountDocumentsOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'documents': !exists(json, 'documents') ? undefined : ((json['documents'] as Array<any>).map(DocumentFromJSON)),
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function AccountDocumentsOutputToJSON(value?: AccountDocumentsOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'documents': value.documents === undefined ? undefined : ((value.documents as Array<any>).map(DocumentToJSON)),
        'error': value.error,
    };
}

