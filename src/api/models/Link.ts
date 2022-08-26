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
 * @interface Link
 */
export interface Link {
    /**
     * 
     * @type {string}
     * @memberof Link
     */
    href?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Link
     */
    readonly templated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Link
     */
    method?: string;
    /**
     * 
     * @type {string}
     * @memberof Link
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof Link
     */
    deprecation?: string;
    /**
     * 
     * @type {string}
     * @memberof Link
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Link
     */
    profile?: string;
    /**
     * 
     * @type {string}
     * @memberof Link
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof Link
     */
    hreflang?: string;
}

/**
 * Check if a given object implements the Link interface.
 */
export function instanceOfLink(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LinkFromJSON(json: any): Link {
    return LinkFromJSONTyped(json, false);
}

export function LinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): Link {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'href': !exists(json, 'href') ? undefined : json['href'],
        'templated': !exists(json, 'templated') ? undefined : json['templated'],
        'method': !exists(json, 'method') ? undefined : json['method'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'deprecation': !exists(json, 'deprecation') ? undefined : json['deprecation'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'profile': !exists(json, 'profile') ? undefined : json['profile'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'hreflang': !exists(json, 'hreflang') ? undefined : json['hreflang'],
    };
}

export function LinkToJSON(value?: Link | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'href': value.href,
        'method': value.method,
        'type': value.type,
        'deprecation': value.deprecation,
        'name': value.name,
        'profile': value.profile,
        'title': value.title,
        'hreflang': value.hreflang,
    };
}

