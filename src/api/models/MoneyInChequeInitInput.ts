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
 * @interface MoneyInChequeInitInput
 */
export interface MoneyInChequeInitInput {
    /**
     * Leave Empty
     * @type {string}
     * @memberof MoneyInChequeInitInput
     */
    transferId?: string;
    /**
     * Leave empty
     * @type {string}
     * @memberof MoneyInChequeInitInput
     */
    partner?: string;
    /**
     * Cheque payment (by default) or Pagaré:<br/>15 = Cheque payment.<br/>23 = Pagaré.<br/>
     * @type {number}
     * @memberof MoneyInChequeInitInput
     */
    chequeType?: MoneyInChequeInitInputChequeTypeEnum;
    /**
     * The seven-digit number at the bottom left-hand corner of the cheque.
     * @type {string}
     * @memberof MoneyInChequeInitInput
     */
    chequeNumber?: string;
    /**
     * Zone Interbancaire (ZIB). The twelve-digit number used to identify the cheque holder’s bank.
     * @type {string}
     * @memberof MoneyInChequeInitInput
     */
    bankIdentifier?: string;
    /**
     * Zone Interne (ZIN). The twelve-digit number used to identify the cheque holder’s account.
     * @type {string}
     * @memberof MoneyInChequeInitInput
     */
    internalIdentifier?: string;
    /**
     * La Clé de Recomposition de la Ligne Magnétique du Chèque. These 2 numbers help identify a potential counterfeit cheque. (only France)
     * @type {number}
     * @memberof MoneyInChequeInitInput
     */
    rLMC?: number;
    /**
     * Fichier National des Chèques Irréguliers de la Banque de France. This FNCI check allows to make a verification on the cheque information. (only France) Please contact our support for this feature.
     * @type {boolean}
     * @memberof MoneyInChequeInitInput
     */
    checkFnci?: boolean;
    /**
     * Unique ID of the call, generated by your server. This ID can be used as a search field when looking for operation details
     * @type {string}
     * @memberof MoneyInChequeInitInput
     */
    reference?: string;
    /**
     * Payment Account ID to Credit
     * @type {string}
     * @memberof MoneyInChequeInitInput
     */
    accountId: string;
    /**
     * Amount to Debit
     * Amounts are given as integer numbers in cents
     * @type {number}
     * @memberof MoneyInChequeInitInput
     */
    totalAmount?: number;
    /**
     * Your Fee
     * Amounts are given as integer numbers in cents
     * @type {number}
     * @memberof MoneyInChequeInitInput
     */
    commissionAmount?: number;
    /**
     * Comment Regarding the Transaction
     * @type {string}
     * @memberof MoneyInChequeInitInput
     */
    comment?: string;
    /**
     * If true:
     * 1. [amountCom] will be ignored and will be replaced with Lemonway's fee
     * 2. You will not receive any fee
     * @type {boolean}
     * @memberof MoneyInChequeInitInput
     */
    autoCommission?: boolean;
}


/**
 * @export
 */
export const MoneyInChequeInitInputChequeTypeEnum = {
    NUMBER_15: 15,
    NUMBER_23: 23
} as const;
export type MoneyInChequeInitInputChequeTypeEnum = typeof MoneyInChequeInitInputChequeTypeEnum[keyof typeof MoneyInChequeInitInputChequeTypeEnum];


/**
 * Check if a given object implements the MoneyInChequeInitInput interface.
 */
export function instanceOfMoneyInChequeInitInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accountId" in value;

    return isInstance;
}

export function MoneyInChequeInitInputFromJSON(json: any): MoneyInChequeInitInput {
    return MoneyInChequeInitInputFromJSONTyped(json, false);
}

export function MoneyInChequeInitInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoneyInChequeInitInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transferId': !exists(json, 'transferId') ? undefined : json['transferId'],
        'partner': !exists(json, 'partner') ? undefined : json['partner'],
        'chequeType': !exists(json, 'chequeType') ? undefined : json['chequeType'],
        'chequeNumber': !exists(json, 'ChequeNumber') ? undefined : json['ChequeNumber'],
        'bankIdentifier': !exists(json, 'BankIdentifier') ? undefined : json['BankIdentifier'],
        'internalIdentifier': !exists(json, 'InternalIdentifier') ? undefined : json['InternalIdentifier'],
        'rLMC': !exists(json, 'RLMC') ? undefined : json['RLMC'],
        'checkFnci': !exists(json, 'CheckFnci') ? undefined : json['CheckFnci'],
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
        'accountId': json['accountId'],
        'totalAmount': !exists(json, 'totalAmount') ? undefined : json['totalAmount'],
        'commissionAmount': !exists(json, 'commissionAmount') ? undefined : json['commissionAmount'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'autoCommission': !exists(json, 'autoCommission') ? undefined : json['autoCommission'],
    };
}

export function MoneyInChequeInitInputToJSON(value?: MoneyInChequeInitInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transferId': value.transferId,
        'partner': value.partner,
        'chequeType': value.chequeType,
        'ChequeNumber': value.chequeNumber,
        'BankIdentifier': value.bankIdentifier,
        'InternalIdentifier': value.internalIdentifier,
        'RLMC': value.rLMC,
        'CheckFnci': value.checkFnci,
        'reference': value.reference,
        'accountId': value.accountId,
        'totalAmount': value.totalAmount,
        'commissionAmount': value.commissionAmount,
        'comment': value.comment,
        'autoCommission': value.autoCommission,
    };
}
