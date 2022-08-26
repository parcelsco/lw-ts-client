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
import type { PSP } from './PSP';
import {
    PSPFromJSON,
    PSPFromJSONTyped,
    PSPToJSON,
} from './PSP';

/**
 * 
 * @export
 * @interface TransactionOut
 */
export interface TransactionOut {
    /**
     * Debited account
     * @type {string}
     * @memberof TransactionOut
     */
    senderAccountId?: string;
    /**
     * Debited amount
     * Amounts arerepresented in cents (Euros)
     * @type {number}
     * @memberof TransactionOut
     */
    debitAmount?: number;
    /**
     * IBAN ID
     * @type {number}
     * @memberof TransactionOut
     */
    ibanId?: number;
    /**
     * 
     * @type {string}
     * @memberof TransactionOut
     */
    maskedLabel?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionOut
     */
    bankStatus?: string;
    /**
     * 
     * @type {PSP}
     * @memberof TransactionOut
     */
    pSP?: PSP;
    /**
     * Money-In - ID responsible for the chargeback
     * @type {number}
     * @memberof TransactionOut
     */
    originId?: number;
    /**
     * Transaction ID
     * @type {number}
     * @memberof TransactionOut
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
     * @memberof TransactionOut
     */
    method?: number;
    /**
     * Payment Method Details
     * 0 Standard
     * 1 Pay By Bank<br/>0 = STANDARD.<br/>1 = PAY_BY_BANK.<br/>
     * @type {number}
     * @memberof TransactionOut
     */
    methodDetails?: TransactionOutMethodDetailsEnum;
    /**
     * Transaction initialization date, UTC Unix timestamp
     * @type {number}
     * @memberof TransactionOut
     */
    date?: number;
    /**
     * Your fee
     * Amounts are given as integer numbers in cents
     * @type {number}
     * @memberof TransactionOut
     */
    commissionAmount?: number;
    /**
     * Comment
     * @type {string}
     * @memberof TransactionOut
     */
    comment?: string;
    /**
     * Money-In and Money-Out
     * <ul><li>0: Success</li><li>3: LemonWay Error</li><li>4: Pending</li><li>6: Error PSP</li><li>7: Cancelled</li><li>16: Validation Pending</li></ul>
     * P2P
     * <ul><li>0: Pending</li><li>3: Success</li></ul>
     * @type {number}
     * @memberof TransactionOut
     */
    status?: number;
    /**
     * Transaction execution date
     * @type {number}
     * @memberof TransactionOut
     */
    executionDate?: number;
    /**
     * 
     * @type {LemonWayCommission}
     * @memberof TransactionOut
     */
    lemonWayCommission?: LemonWayCommission;
    /**
     * Unique ID generated by your server
     * @type {string}
     * @memberof TransactionOut
     */
    reference?: string;
}


/**
 * @export
 */
export const TransactionOutMethodDetailsEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;
export type TransactionOutMethodDetailsEnum = typeof TransactionOutMethodDetailsEnum[keyof typeof TransactionOutMethodDetailsEnum];


/**
 * Check if a given object implements the TransactionOut interface.
 */
export function instanceOfTransactionOut(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransactionOutFromJSON(json: any): TransactionOut {
    return TransactionOutFromJSONTyped(json, false);
}

export function TransactionOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'senderAccountId': !exists(json, 'senderAccountId') ? undefined : json['senderAccountId'],
        'debitAmount': !exists(json, 'debitAmount') ? undefined : json['debitAmount'],
        'ibanId': !exists(json, 'IbanId') ? undefined : json['IbanId'],
        'maskedLabel': !exists(json, 'maskedLabel') ? undefined : json['maskedLabel'],
        'bankStatus': !exists(json, 'bankStatus') ? undefined : json['bankStatus'],
        'pSP': !exists(json, 'PSP') ? undefined : PSPFromJSON(json['PSP']),
        'originId': !exists(json, 'originId') ? undefined : json['originId'],
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

export function TransactionOutToJSON(value?: TransactionOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'senderAccountId': value.senderAccountId,
        'debitAmount': value.debitAmount,
        'IbanId': value.ibanId,
        'maskedLabel': value.maskedLabel,
        'bankStatus': value.bankStatus,
        'PSP': PSPToJSON(value.pSP),
        'originId': value.originId,
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

