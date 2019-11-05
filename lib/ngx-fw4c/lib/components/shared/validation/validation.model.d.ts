import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ValidationService } from './validation.service';
export interface INestableComponent {
    callback(): Observable<any>;
    getErrors(): Observable<SummaryError[]>;
}
export interface SummaryError {
    element: ElementRef;
    messages: string[];
}
export declare abstract class ValidationAction {
    key: string;
    execute: (payload: any, value?: any, rowIndex?: number) => Observable<boolean>;
    errorMessage: (element?: any, rowIndex?: string) => string;
    id?: string;
    isValid?: boolean;
    constructor(overridenErrorMessage?: (element?: any, rowIndex?: string) => string);
}
export declare class RequiredValidationAction extends ValidationAction {
    constructor(overridenErrorMessage?: (element?: any, rowIndex?: string) => string);
}
export declare class EmailValidationAction extends ValidationAction {
    constructor(overridenErrorMessage?: (element?: any, rowIndex?: string) => string);
}
export declare class PhoneValidationAction extends ValidationAction {
    constructor(overridenErrorMessage?: (element?: any, rowIndex?: string) => string);
}
export declare class CustomValidationAction extends ValidationAction {
    constructor(execute: (payload: any, value?: any, rowIndex?: number) => Observable<boolean>, overridenErrorMessage?: (element?: any, rowIndex?: string) => string);
}
export declare class ValidationOption {
    validationName: string;
    actions: ValidationAction[];
    valueResolver: (payload: any, rowIndex?: number) => any | any[];
    displayText?: string;
    validationId?: string;
    payloadRef?: () => any;
    dynamic?: boolean;
    scope?: string;
    errorTargetId?: string;
    errorMessageClass?: string;
    errorElementClass?: string;
    successElementClass?: string;
    constructor(init?: Partial<ValidationOption>);
}
export declare class ClientValidator {
    formRef: ElementRef;
    options: ValidationOption[];
    payloadRef?: () => any;
    scope?: string;
    relatedValidationProviders?: ValidationService[];
    constructor(init?: Partial<ClientValidator>);
}
export declare class ValidationConstant {
    static Required: string;
    static Email: string;
    static Phone: string;
    static Custom: string;
    static ErrorMessage: string;
    static ErrorElementClass: string;
    static SuccessElementClass: string;
    static ErrorMessageClass: string;
    static DefaultErrorStyles: string;
    static DefaultErrorClass: string;
    static AttributeName: string;
    static AttributeOptionName: string;
    static AttributeDynamicName: string;
    static ErrorTargetId: string;
    static DynamicErrorAttribute: string;
    static ERROR_ELEMENT_ID: string;
    static ERROR_ITEM_ELEMENT_ID: string;
    static VALIDATION_ID: string;
    static ARRAY_SEQUENCE_ID: string;
}
