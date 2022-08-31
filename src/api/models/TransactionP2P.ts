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
import type { LemonWayCommission } from './LemonWayCommission';
import {
    LemonWayCommissionFromJSON,
    LemonWayCommissionFromJSONTyped,
    LemonWayCommissionToJSON,
} from './LemonWayCommission';
import type { PrivateData } from './PrivateData';
import {
    PrivateDataFromJSON,
    PrivateDataFromJSONTyped,
    PrivateDataToJSON,
} from './PrivateData';

/**
 * 
 * @export
 * @interface TransactionP2P
 */
export interface TransactionP2P {
    /**
     * Debited account
     * @type {string}
     * @memberof TransactionP2P
     */
    senderAccountId?: string;
    /**
     * Credited account
     * @type {string}
     * @memberof TransactionP2P
     */
    receiverAccountId?: string;
    /**
     * Debited amount
     * Amounts are represented in cents (Euro)
     * @type {number}
     * @memberof TransactionP2P
     */
    debitAmount?: number;
    /**
     * Credited amount
     * Amounts are represented in cents (Euro)
     * @type {number}
     * @memberof TransactionP2P
     */
    creditAmount?: number;
    /**
     * 
     * @type {PrivateData}
     * @memberof TransactionP2P
     */
    privateData?: PrivateData;
    /**
     * Request date for a payment or payment date. UTC unix timestamp
     * @type {string}
     * @memberof TransactionP2P
     */
    scheduledDate?: string;
    /**
     * Returned 1 for a P2P commission transaction
     * @type {boolean}
     * @memberof TransactionP2P
     */
    isFee?: boolean;
    /**
     * Original transaction ID
     * @type {number}
     * @memberof TransactionP2P
     */
    feeReference?: number;
    /**
     * Transaction ID
     * @type {number}
     * @memberof TransactionP2P
     */
    id?: number;
    /**
     * Payment Method
     * 0 Card
     * 1 Bank transfert (Money-In)
     * 3 Bank transfert (Money-Out)
     * 4 P2P
     * 13 IDEAL
     * 14 DirectDebit
     * 15 CHEQUE
     * 16 Neosurf
     * 17 SoFort
     * 18 PFS Physical Card
     * 19 Multibanco
     * 20 Payshop
     * 21 MB WAY
     * 22 Polish Instant Transfer
     * 23 PAGARE
     * 24 MobilePay
     * 25 PayTrail
     * 26 WeChat (via PayTend)
     * 27 P24
     * 28 MoneyIn by TPE
     * 29 Trustly
     * @type {number}
     * @memberof TransactionP2P
     */
    method?: number;
    /**
     * Payment Method Details
     * 0 Standard
     * 1 Pay By Bank<br/>0 = STANDARD.<br/>1 = PAY_BY_BANK.<br/>
     * @type {number}
     * @memberof TransactionP2P
     */
    methodDetails?: TransactionP2PMethodDetailsEnum;
    /**
     * Transaction initialization date, UTC Unix timestamp
     * @type {number}
     * @memberof TransactionP2P
     */
    date?: number;
    /**
     * Your fee
     * Amounts are given as integer numbers in cents
     * @type {number}
     * @memberof TransactionP2P
     */
    commissionAmount?: number;
    /**
     * Comment
     * @type {string}
     * @memberof TransactionP2P
     */
    comment?: string;
    /**
     * Money-In and Money-Out
     * <ul><li>0: Success</li><li>3: LemonWay Error</li><li>4: Pending</li><li>6: Error PSP</li><li>7: Cancelled</li><li>16: Validation Pending</li></ul>
     * P2P
     * <ul><li>0: Pending</li><li>3: Success</li></ul>
     * @type {number}
     * @memberof TransactionP2P
     */
    status?: number;
    /**
     * Transaction execution date
     * @type {number}
     * @memberof TransactionP2P
     */
    executionDate?: number;
    /**
     * 
     * @type {LemonWayCommission}
     * @memberof TransactionP2P
     */
    lemonWayCommission?: LemonWayCommission;
    /**
     * Unique ID generated by your server
     * @type {string}
     * @memberof TransactionP2P
     */
    reference?: string;
}


/**
 * @export
 */
export const TransactionP2PMethodDetailsEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;
export type TransactionP2PMethodDetailsEnum = typeof TransactionP2PMethodDetailsEnum[keyof typeof TransactionP2PMethodDetailsEnum];


/**
 * Check if a given object implements the TransactionP2P interface.
 */
export function instanceOfTransactionP2P(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransactionP2PFromJSON(json: any): TransactionP2P {
    return TransactionP2PFromJSONTyped(json, false);
}

export function TransactionP2PFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionP2P {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'senderAccountId': !exists(json, 'senderAccountId') ? undefined : json['senderAccountId'],
        'receiverAccountId': !exists(json, 'receiverAccountId') ? undefined : json['receiverAccountId'],
        'debitAmount': !exists(json, 'debitAmount') ? undefined : json['debitAmount'],
        'creditAmount': !exists(json, 'creditAmount') ? undefined : json['creditAmount'],
        'privateData': !exists(json, 'privateData') ? undefined : PrivateDataFromJSON(json['privateData']),
        'scheduledDate': !exists(json, 'scheduledDate') ? undefined : json['scheduledDate'],
        'isFee': !exists(json, 'isFee') ? undefined : json['isFee'],
        'feeReference': !exists(json, 'feeReference') ? undefined : json['feeReference'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'method': !exists(json, 'method') ? undefined : json['method'],
        'methodDetails': !exists(json, 'methodDetails') ? undefined : json['methodDetails'],
        'date': !exists(json, 'date') ? undefined : json['date'],
        'commissionAmount': !exists(json, 'commissionAmount') ? undefined : json['commissionAmount'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'executionDate': !exists(json, 'executionDate') ? undefined : json['executionDate'],
        'lemonWayCommission': !exists(json, 'lemonWayCommission') ? undefined : LemonWayCommissionFromJSON(json['lemonWayCommission']),
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
    };
}

export function TransactionP2PToJSON(value?: TransactionP2P | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'senderAccountId': value.senderAccountId,
        'receiverAccountId': value.receiverAccountId,
        'debitAmount': value.debitAmount,
        'creditAmount': value.creditAmount,
        'privateData': PrivateDataToJSON(value.privateData),
        'scheduledDate': value.scheduledDate,
        'isFee': value.isFee,
        'feeReference': value.feeReference,
        'id': value.id,
        'method': value.method,
        'methodDetails': value.methodDetails,
        'date': value.date,
        'commissionAmount': value.commissionAmount,
        'comment': value.comment,
        'status': value.status,
        'executionDate': value.executionDate,
        'lemonWayCommission': LemonWayCommissionToJSON(value.lemonWayCommission),
        'reference': value.reference,
    };
}
