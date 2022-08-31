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


import * as runtime from '../runtime';
import type {
  GetPaymentDetailsOutput,
  SendPaymentInput,
  SendPaymentOutput,
} from '../models';
import {
    GetPaymentDetailsOutputFromJSON,
    GetPaymentDetailsOutputToJSON,
    SendPaymentInputFromJSON,
    SendPaymentInputToJSON,
    SendPaymentOutputFromJSON,
    SendPaymentOutputToJSON,
} from '../models';

export interface P2PsP2pGetRequest {
    transactionid: string;
    authorization: string;
    pSUIPAddress: string;
    transactionId?: number;
    transactionComment?: string;
    reference?: string;
    privateDataValue?: Array<string>;
    page?: number;
    limit?: number;
    pSUAcceptLanguage?: string;
    pSUUserAgent?: string;
}

export interface P2PsP2pPostRequest {
    authorization: string;
    pSUIPAddress: string;
    parameters: SendPaymentInput;
    pSUAcceptLanguage?: string;
    pSUUserAgent?: string;
}

/**
 * 
 */
export class P2PsApi extends runtime.BaseAPI {

    /**
     * Returns a lit of payment transactions between payments accounts that match the search fields.
     * Search for Transactions between Payments Accounts
     */
    async p2PsP2pGetRaw(requestParameters: P2PsP2pGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPaymentDetailsOutput>> {
        if (requestParameters.transactionid === null || requestParameters.transactionid === undefined) {
            throw new runtime.RequiredError('transactionid','Required parameter requestParameters.transactionid was null or undefined when calling p2PsP2pGet.');
        }

        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling p2PsP2pGet.');
        }

        if (requestParameters.pSUIPAddress === null || requestParameters.pSUIPAddress === undefined) {
            throw new runtime.RequiredError('pSUIPAddress','Required parameter requestParameters.pSUIPAddress was null or undefined when calling p2PsP2pGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.transactionId !== undefined) {
            queryParameters['transactionId'] = requestParameters.transactionId;
        }

        if (requestParameters.transactionComment !== undefined) {
            queryParameters['transactionComment'] = requestParameters.transactionComment;
        }

        if (requestParameters.reference !== undefined) {
            queryParameters['reference'] = requestParameters.reference;
        }

        if (requestParameters.privateDataValue) {
            queryParameters['privateData.value'] = requestParameters.privateDataValue;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.pSUAcceptLanguage !== undefined && requestParameters.pSUAcceptLanguage !== null) {
            headerParameters['PSU-Accept-Language'] = String(requestParameters.pSUAcceptLanguage);
        }

        if (requestParameters.pSUIPAddress !== undefined && requestParameters.pSUIPAddress !== null) {
            headerParameters['PSU-IP-Address'] = String(requestParameters.pSUIPAddress);
        }

        if (requestParameters.pSUUserAgent !== undefined && requestParameters.pSUUserAgent !== null) {
            headerParameters['PSU-User-Agent'] = String(requestParameters.pSUUserAgent);
        }

        const response = await this.request({
            path: `/v2/p2p/{transactionid}`.replace(`{${"transactionid"}}`, encodeURIComponent(String(requestParameters.transactionid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetPaymentDetailsOutputFromJSON(jsonValue));
    }

    /**
     * Returns a lit of payment transactions between payments accounts that match the search fields.
     * Search for Transactions between Payments Accounts
     */
    async p2PsP2pGet(requestParameters: P2PsP2pGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPaymentDetailsOutput> {
        const response = await this.p2PsP2pGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async p2PsP2pPostRaw(requestParameters: P2PsP2pPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SendPaymentOutput>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling p2PsP2pPost.');
        }

        if (requestParameters.pSUIPAddress === null || requestParameters.pSUIPAddress === undefined) {
            throw new runtime.RequiredError('pSUIPAddress','Required parameter requestParameters.pSUIPAddress was null or undefined when calling p2PsP2pPost.');
        }

        if (requestParameters.parameters === null || requestParameters.parameters === undefined) {
            throw new runtime.RequiredError('parameters','Required parameter requestParameters.parameters was null or undefined when calling p2PsP2pPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.pSUAcceptLanguage !== undefined && requestParameters.pSUAcceptLanguage !== null) {
            headerParameters['PSU-Accept-Language'] = String(requestParameters.pSUAcceptLanguage);
        }

        if (requestParameters.pSUIPAddress !== undefined && requestParameters.pSUIPAddress !== null) {
            headerParameters['PSU-IP-Address'] = String(requestParameters.pSUIPAddress);
        }

        if (requestParameters.pSUUserAgent !== undefined && requestParameters.pSUUserAgent !== null) {
            headerParameters['PSU-User-Agent'] = String(requestParameters.pSUUserAgent);
        }

        const response = await this.request({
            path: `/v2/p2p`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendPaymentInputToJSON(requestParameters.parameters),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SendPaymentOutputFromJSON(jsonValue));
    }

    /**
     */
    async p2PsP2pPost(requestParameters: P2PsP2pPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SendPaymentOutput> {
        const response = await this.p2PsP2pPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}