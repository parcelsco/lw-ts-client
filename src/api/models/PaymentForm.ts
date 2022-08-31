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
 * @interface PaymentForm
 */
export interface PaymentForm {
    /**
     * 
     * @type {string}
     * @memberof PaymentForm
     */
    walletIp?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentForm
     */
    walletUa?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentForm
     */
    amountTotRange?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentForm
     */
    amountCom?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentForm
     */
    language?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentForm
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentForm
     */
    style?: string;
    /**
     * Mercanet v1 only: Link to a custom Mercanet CSS Stylesheet.
     * The stylesheet should be publicly accessible via HTTPS
     * @type {string}
     * @memberof PaymentForm
     */
    atosStyle?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentForm
     */
    notifUrl?: string;
    /**
     * Reserved for future version
     * @type {string}
     * @memberof PaymentForm
     */
    options?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PaymentForm
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PaymentForm
     */
    raisonSociale?: string;
    /**
     * Payment Form ID
     * @type {string}
     * @memberof PaymentForm
     */
    id?: string;
    /**
     * Optional identity of the payment form. You should not use special character here.
     * @type {string}
     * @memberof PaymentForm
     */
    optId?: string;
    /**
     * Payer Account
     * If this field is filled then the money reaches this wallet before arriving at the beneficiary wallet (via a transfer wallet to wallet)
     * note: Don't put the <b>SC Wallet</b> here, it won't work. You cannot credit the <b>SC Wallet</b> with a credit card.
     * @type {string}
     * @memberof PaymentForm
     */
    accountPayer?: string;
    /**
     * Beneficiary Account
     * if this field is not filled then the end-user must to fill its value on the payment form. We recommend you to always fill it instead of your end-user.
     * note: Don't put the <b>SC Wallet</b> here, it won't work. You cannot credit the <b>SC Wallet</b> with a credit card.
     * @type {string}
     * @memberof PaymentForm
     */
    accountReceiver?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentForm
     */
    comment?: string;
    /**
     * URL redirection after the payment procedure is successfully finished
     * @type {string}
     * @memberof PaymentForm
     */
    returnUrl?: string;
    /**
     * URL redirection after the payment procedure is cancelled
     * @type {string}
     * @memberof PaymentForm
     */
    cancelUrl?: string;
    /**
     * URL redirection after the payment procedure is failed
     * @type {string}
     * @memberof PaymentForm
     */
    errorUrl?: string;
    /**
     * Payer's First Name
     * If this field is not filled then the end-user have to fill it in the payment form.
     * @type {string}
     * @memberof PaymentForm
     */
    firstNamePayer?: string;
    /**
     * Payer's Last Name
     * If this field is not filled then the end-user have to fill it in the payment form.
     * @type {string}
     * @memberof PaymentForm
     */
    lastNamePayer?: string;
    /**
     * Payer's Email
     * If this field is not filled then the end-user have to fill it in the payment form.
     * @type {string}
     * @memberof PaymentForm
     */
    emailPayer?: string;
}

/**
 * Check if a given object implements the PaymentForm interface.
 */
export function instanceOfPaymentForm(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaymentFormFromJSON(json: any): PaymentForm {
    return PaymentFormFromJSONTyped(json, false);
}

export function PaymentFormFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentForm {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'walletIp': !exists(json, 'walletIp') ? undefined : json['walletIp'],
        'walletUa': !exists(json, 'walletUa') ? undefined : json['walletUa'],
        'amountTotRange': !exists(json, 'amountTotRange') ? undefined : json['amountTotRange'],
        'amountCom': !exists(json, 'amountCom') ? undefined : json['amountCom'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'style': !exists(json, 'style') ? undefined : json['style'],
        'atosStyle': !exists(json, 'atosStyle') ? undefined : json['atosStyle'],
        'notifUrl': !exists(json, 'notifUrl') ? undefined : json['notifUrl'],
        'options': !exists(json, 'options') ? undefined : json['options'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'raisonSociale': !exists(json, 'raisonSociale') ? undefined : json['raisonSociale'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'optId': !exists(json, 'optId') ? undefined : json['optId'],
        'accountPayer': !exists(json, 'accountPayer') ? undefined : json['accountPayer'],
        'accountReceiver': !exists(json, 'accountReceiver') ? undefined : json['accountReceiver'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'returnUrl': !exists(json, 'returnUrl') ? undefined : json['returnUrl'],
        'cancelUrl': !exists(json, 'cancelUrl') ? undefined : json['cancelUrl'],
        'errorUrl': !exists(json, 'errorUrl') ? undefined : json['errorUrl'],
        'firstNamePayer': !exists(json, 'firstNamePayer') ? undefined : json['firstNamePayer'],
        'lastNamePayer': !exists(json, 'lastNamePayer') ? undefined : json['lastNamePayer'],
        'emailPayer': !exists(json, 'emailPayer') ? undefined : json['emailPayer'],
    };
}

export function PaymentFormToJSON(value?: PaymentForm | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'walletIp': value.walletIp,
        'walletUa': value.walletUa,
        'amountTotRange': value.amountTotRange,
        'amountCom': value.amountCom,
        'language': value.language,
        'version': value.version,
        'style': value.style,
        'atosStyle': value.atosStyle,
        'notifUrl': value.notifUrl,
        'options': value.options,
        'active': value.active,
        'raisonSociale': value.raisonSociale,
        'id': value.id,
        'optId': value.optId,
        'accountPayer': value.accountPayer,
        'accountReceiver': value.accountReceiver,
        'comment': value.comment,
        'returnUrl': value.returnUrl,
        'cancelUrl': value.cancelUrl,
        'errorUrl': value.errorUrl,
        'firstNamePayer': value.firstNamePayer,
        'lastNamePayer': value.lastNamePayer,
        'emailPayer': value.emailPayer,
    };
}
