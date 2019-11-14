import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ValidationService } from './validation.service';
export interface IValidation {
    callback(): Observable<any>;
    getErrors(): Observable<SummaryError[]>;
}
export declare class SummaryError {
    element: ElementRef;
    messages: string[];
    constructor(init?: Partial<SummaryError>);
}
export declare class ValidationRuleResponse {
    status?: boolean;
    message?: string;
    constructor(init?: Partial<ValidationRuleResponse>);
}
export declare abstract class ValidationRule {
    key: string;
    execute: (value?: any, payload?: any, rowIndex?: number) => Observable<ValidationRuleResponse>;
    errorMessage: (element?: any, rowIndex?: string) => string;
    id?: string;
    isValid?: boolean;
    required?: boolean;
    constructor(overridenErrorMessage?: (element?: any, rowIndex?: string) => string);
}
export declare class RequiredValidationRule extends ValidationRule {
    constructor(overridenErrorMessage?: (element?: any, rowIndex?: string) => string);
}
export declare class EmailValidationRule extends ValidationRule {
    constructor(overridenErrorMessage?: (element?: any, rowIndex?: string) => string);
}
export declare class PhoneValidationRule extends ValidationRule {
    constructor(overridenErrorMessage?: (element?: any, rowIndex?: string) => string);
}
export declare class CustomValidationRule extends ValidationRule {
    constructor(execute: (value?: any, payload?: any, rowIndex?: number) => Observable<ValidationRuleResponse>, overridenErrorMessage?: (element?: any, rowIndex?: string) => string);
}
export declare class ValidationOption {
    validationName: string;
    rules: ValidationRule[];
    valueResolver: (payload: any, rowIndex?: number) => any | any[];
    displayText?: string;
    validationId?: string;
    payloadRef?: () => any;
    relevantFields: (payload: any) => string[];
    dynamic?: boolean;
    dirtyCheck: boolean;
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
    requiredMessage: string;
    invalidMessage: string;
    constructor(init?: Partial<ClientValidator>);
}
export declare class ChangedItem {
    id?: string;
    oldValue?: any;
    value?: any;
    field?: string;
    change: boolean;
    constructor(init?: Partial<ChangedItem>);
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
    static requiredMessage: string;
    static invalidMessage: string;
}
