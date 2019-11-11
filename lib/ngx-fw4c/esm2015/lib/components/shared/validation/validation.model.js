/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function IValidation() { }
if (false) {
    /**
     * @return {?}
     */
    IValidation.prototype.callback = function () { };
    /**
     * @return {?}
     */
    IValidation.prototype.getErrors = function () { };
}
export class SummaryError {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    SummaryError.prototype.element;
    /** @type {?} */
    SummaryError.prototype.messages;
}
export class ValidationRuleResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    ValidationRuleResponse.prototype.status;
    /** @type {?} */
    ValidationRuleResponse.prototype.message;
}
/**
 * @abstract
 */
export class ValidationRule {
    /**
     * @param {?=} overridenErrorMessage
     */
    constructor(overridenErrorMessage) {
        this.errorMessage = overridenErrorMessage;
    }
}
if (false) {
    /** @type {?} */
    ValidationRule.prototype.key;
    /** @type {?} */
    ValidationRule.prototype.execute;
    /** @type {?} */
    ValidationRule.prototype.errorMessage;
    /** @type {?} */
    ValidationRule.prototype.id;
    /** @type {?} */
    ValidationRule.prototype.isValid;
    /** @type {?} */
    ValidationRule.prototype.required;
}
export class RequiredValidationRule extends ValidationRule {
    /**
     * @param {?=} overridenErrorMessage
     */
    constructor(overridenErrorMessage) {
        super(overridenErrorMessage);
        this.key = ValidationConstant.Required;
    }
}
export class EmailValidationRule extends ValidationRule {
    /**
     * @param {?=} overridenErrorMessage
     */
    constructor(overridenErrorMessage) {
        super(overridenErrorMessage);
        this.key = ValidationConstant.Email;
    }
}
export class PhoneValidationRule extends ValidationRule {
    /**
     * @param {?=} overridenErrorMessage
     */
    constructor(overridenErrorMessage) {
        super(overridenErrorMessage);
        this.key = ValidationConstant.Phone;
    }
}
export class CustomValidationRule extends ValidationRule {
    /**
     * @param {?} execute
     * @param {?=} overridenErrorMessage
     */
    constructor(execute, overridenErrorMessage) {
        super(overridenErrorMessage);
        this.execute = execute;
        this.key = ValidationConstant.Custom;
    }
}
export class ValidationOption {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.rules = [];
        this.errorMessageClass = ValidationConstant.ErrorMessageClass;
        this.errorElementClass = ValidationConstant.ErrorElementClass;
        this.successElementClass = ValidationConstant.SuccessElementClass;
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    ValidationOption.prototype.validationName;
    /** @type {?} */
    ValidationOption.prototype.rules;
    /** @type {?} */
    ValidationOption.prototype.valueResolver;
    /** @type {?} */
    ValidationOption.prototype.displayText;
    /** @type {?} */
    ValidationOption.prototype.validationId;
    /** @type {?} */
    ValidationOption.prototype.payloadRef;
    /** @type {?} */
    ValidationOption.prototype.dynamic;
    /** @type {?} */
    ValidationOption.prototype.scope;
    /** @type {?} */
    ValidationOption.prototype.errorTargetId;
    /** @type {?} */
    ValidationOption.prototype.errorMessageClass;
    /** @type {?} */
    ValidationOption.prototype.errorElementClass;
    /** @type {?} */
    ValidationOption.prototype.successElementClass;
}
export class ClientValidator {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.options = [];
        this.relatedValidationProviders = [];
        this.requiredMessage = ValidationConstant.requiredMessage;
        this.invalidMessage = ValidationConstant.invalidMessage;
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    ClientValidator.prototype.formRef;
    /** @type {?} */
    ClientValidator.prototype.options;
    /** @type {?} */
    ClientValidator.prototype.payloadRef;
    /** @type {?} */
    ClientValidator.prototype.scope;
    /** @type {?} */
    ClientValidator.prototype.relatedValidationProviders;
    /** @type {?} */
    ClientValidator.prototype.requiredMessage;
    /** @type {?} */
    ClientValidator.prototype.invalidMessage;
}
export class ValidationConstant {
}
ValidationConstant.Required = 'Required';
ValidationConstant.Email = 'Email';
ValidationConstant.Phone = 'Phone';
ValidationConstant.Custom = 'Custom';
ValidationConstant.ErrorMessage = 'Không hợp lệ vui lòng thử lại.';
ValidationConstant.ErrorElementClass = 'ng-invalid';
ValidationConstant.SuccessElementClass = 'ng-valid';
ValidationConstant.ErrorMessageClass = 'text-danger';
ValidationConstant.DefaultErrorStyles = 'padding:0;list-style:none;font-weight:400;font-size:13px; width: 100%';
ValidationConstant.DefaultErrorClass = 'validation-error';
ValidationConstant.AttributeName = 'validation-name';
ValidationConstant.AttributeOptionName = 'dynamic-option';
ValidationConstant.AttributeDynamicName = 'dynamic-validation';
ValidationConstant.ErrorTargetId = 'error-target-id';
ValidationConstant.DynamicErrorAttribute = 'dynamic-error-attribute';
ValidationConstant.ERROR_ELEMENT_ID = 'error-element-id';
ValidationConstant.ERROR_ITEM_ELEMENT_ID = 'error-item-element-id';
ValidationConstant.VALIDATION_ID = 'validation-id';
ValidationConstant.ARRAY_SEQUENCE_ID = 'array-sequence-id';
ValidationConstant.requiredMessage = 'là bắt buộc';
ValidationConstant.invalidMessage = 'không hợp lệ';
if (false) {
    /** @type {?} */
    ValidationConstant.Required;
    /** @type {?} */
    ValidationConstant.Email;
    /** @type {?} */
    ValidationConstant.Phone;
    /** @type {?} */
    ValidationConstant.Custom;
    /** @type {?} */
    ValidationConstant.ErrorMessage;
    /** @type {?} */
    ValidationConstant.ErrorElementClass;
    /** @type {?} */
    ValidationConstant.SuccessElementClass;
    /** @type {?} */
    ValidationConstant.ErrorMessageClass;
    /** @type {?} */
    ValidationConstant.DefaultErrorStyles;
    /** @type {?} */
    ValidationConstant.DefaultErrorClass;
    /** @type {?} */
    ValidationConstant.AttributeName;
    /** @type {?} */
    ValidationConstant.AttributeOptionName;
    /** @type {?} */
    ValidationConstant.AttributeDynamicName;
    /** @type {?} */
    ValidationConstant.ErrorTargetId;
    /** @type {?} */
    ValidationConstant.DynamicErrorAttribute;
    /** @type {?} */
    ValidationConstant.ERROR_ELEMENT_ID;
    /** @type {?} */
    ValidationConstant.ERROR_ITEM_ELEMENT_ID;
    /** @type {?} */
    ValidationConstant.VALIDATION_ID;
    /** @type {?} */
    ValidationConstant.ARRAY_SEQUENCE_ID;
    /** @type {?} */
    ValidationConstant.requiredMessage;
    /** @type {?} */
    ValidationConstant.invalidMessage;
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsaUNBR0M7Ozs7O0lBRkcsaURBQTRCOzs7O0lBQzVCLGtEQUF3Qzs7QUFHNUMsTUFBTSxPQUFPLFlBQVk7Ozs7SUFHckIsWUFBWSxJQUE0QjtRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7OztJQUxHLCtCQUFvQjs7SUFDcEIsZ0NBQW1COztBQU12QixNQUFNLE9BQU8sc0JBQXNCOzs7O0lBRy9CLFlBQVksSUFBc0M7UUFDOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKOzs7SUFMRyx3Q0FBaUI7O0lBQ2pCLHlDQUFpQjs7Ozs7QUFNckIsTUFBTSxPQUFnQixjQUFjOzs7O0lBT2hDLFlBQVkscUJBQW9FO1FBRTVFLElBQUksQ0FBQyxZQUFZLEdBQUcscUJBQXFCLENBQUM7SUFDOUMsQ0FBQztDQUNKOzs7SUFWRyw2QkFBWTs7SUFDWixpQ0FBK0Y7O0lBQy9GLHNDQUEyRDs7SUFDM0QsNEJBQVk7O0lBQ1osaUNBQWtCOztJQUNsQixrQ0FBbUI7O0FBT3ZCLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxjQUFjOzs7O0lBQ3RELFlBQ0kscUJBQW9FO1FBRXBFLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDO0lBQzNDLENBQUM7Q0FDSjtBQUVELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxjQUFjOzs7O0lBQ25ELFlBQVkscUJBQW9FO1FBRTVFLEtBQUssQ0FBQyxxQkFBcUIsQ0FB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LGNBQWMsQ0FBQzs7O0lBcEJ0RCw0QkFBNEM7O0lBQzVDLHlCQUFzQzs7SUFDdEMseUJBQXNDOztJQUN0QywwQkFBd0M7O0lBQ3hDLGdDQUFzRTs7SUFDdEUscUNBQXVEOztJQUN2RCx1Q0FBdUQ7O0lBQ3ZELHFDQUF3RDs7SUFDeEQsc0NBQW1IOztJQUNuSCxxQ0FBNkQ7O0lBQzdELGlDQUF3RDs7SUFDeEQsdUNBQTZEOztJQUM3RCx3Q0FBa0U7O0lBQ2xFLGlDQUF3RDs7SUFDeEQseUNBQXdFOztJQUN4RSxvQ0FBb0Q7O0lBQ3BELHlDQUE4RDs7SUFDOUQsaUNBQThDOztJQUM5QyxxQ0FBc0Q7O0lBQ3RELG1DQUFzRDs7SUFDdEQsa0NBQXNEOztBQUN6RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi92YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVmFsaWRhdGlvbiB7XHJcbiAgICBjYWxsYmFjaygpOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBnZXRFcnJvcnMoKTogT2JzZXJ2YWJsZTxTdW1tYXJ5RXJyb3JbXT47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdW1tYXJ5RXJyb3Ige1xyXG4gICAgZWxlbWVudDogRWxlbWVudFJlZjtcclxuICAgIG1lc3NhZ2VzOiBzdHJpbmdbXTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFN1bW1hcnlFcnJvcj4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblJ1bGVSZXNwb25zZSB7XHJcbiAgICBzdGF0dXM/OiBib29sZWFuO1xyXG4gICAgbWVzc2FnZT86IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFZhbGlkYXRpb25SdWxlUmVzcG9uc2U+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZhbGlkYXRpb25SdWxlIHtcclxuICAgIGtleTogc3RyaW5nO1xyXG4gICAgZXhlY3V0ZTogKHZhbHVlPzogYW55LCBwYXlsb2FkPzogYW55LCByb3dJbmRleD86IG51bWJlcikgPT4gT2JzZXJ2YWJsZTxWYWxpZGF0aW9uUnVsZVJlc3BvbnNlPjtcclxuICAgIGVycm9yTWVzc2FnZTogKGVsZW1lbnQ/OiBhbnksIHJvd0luZGV4Pzogc3RyaW5nKSA9PiBzdHJpbmc7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIGlzVmFsaWQ/OiBib29sZWFuO1xyXG4gICAgcmVxdWlyZWQ/OiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3Iob3ZlcnJpZGVuRXJyb3JNZXNzYWdlPzogKGVsZW1lbnQ/OiBhbnksIHJvd0luZGV4Pzogc3RyaW5nKSA9PiBzdHJpbmdcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gb3ZlcnJpZGVuRXJyb3JNZXNzYWdlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVxdWlyZWRWYWxpZGF0aW9uUnVsZSBleHRlbmRzIFZhbGlkYXRpb25SdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIG92ZXJyaWRlbkVycm9yTWVzc2FnZT86IChlbGVtZW50PzogYW55LCByb3dJbmRleD86IHN0cmluZykgPT4gc3RyaW5nXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihvdmVycmlkZW5FcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMua2V5ID0gVmFsaWRhdGlvbkNvbnN0YW50LlJlcXVpcmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRW1haWxWYWxpZGF0aW9uUnVsZSBleHRlbmRzIFZhbGlkYXRpb25SdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKG92ZXJyaWRlbkVycm9yTWVzc2FnZT86IChlbGVtZW50PzogYW55LCByb3dJbmRleD86IHN0cmluZykgPT4gc3RyaW5nXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihvdmVycmlkZW5FcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMua2V5ID0gVmFsaWRhdGlvbkNvbnN0YW50LkVtYWlsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGhvbmVWYWxpZGF0aW9uUnVsZSBleHRlbmRzIFZhbGlkYXRpb25SdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKG92ZXJyaWRlbkVycm9yTWVzc2FnZT86IChlbGVtZW50PzogYW55LCByb3dJbmRleD86IHN0cmluZykgPT4gc3RyaW5nXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihvdmVycmlkZW5FcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMua2V5ID0gVmFsaWRhdGlvbkNvbnN0YW50LlBob25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tVmFsaWRhdGlvblJ1bGUgZXh0ZW5kcyBWYWxpZGF0aW9uUnVsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBleGVjdXRlOiAodmFsdWU/OiBhbnksIHBheWxvYWQ/OiBhbnksIHJvd0luZGV4PzogbnVtYmVyKSA9PiBPYnNlcnZhYmxlPFZhbGlkYXRpb25SdWxlUmVzcG9uc2U+LFxyXG4gICAgICAgIG92ZXJyaWRlbkVycm9yTWVzc2FnZT86IChlbGVtZW50PzogYW55LCByb3dJbmRleD86IHN0cmluZykgPT4gc3RyaW5nXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihvdmVycmlkZW5FcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuZXhlY3V0ZSA9IGV4ZWN1dGU7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBWYWxpZGF0aW9uQ29uc3RhbnQuQ3VzdG9tO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbk9wdGlvbiB7XHJcbiAgICB2YWxpZGF0aW9uTmFtZTogc3RyaW5nO1xyXG4gICAgcnVsZXM6IFZhbGlkYXRpb25SdWxlW10gPSBbXTtcclxuICAgIHZhbHVlUmVzb2x2ZXI6IChwYXlsb2FkOiBhbnksIHJvd0luZGV4PzogbnVtYmVyKSA9PiBhbnkgfCBhbnlbXTtcclxuICAgIGRpc3BsYXlUZXh0Pzogc3RyaW5nO1xyXG4gICAgdmFsaWRhdGlvbklkPzogc3RyaW5nO1xyXG4gICAgcGF5bG9hZFJlZj86ICgpID0+IGFueTtcclxuICAgIGR5bmFtaWM/OiBib29sZWFuO1xyXG4gICAgc2NvcGU/OiBzdHJpbmc7XHJcbiAgICBlcnJvclRhcmdldElkPzogc3RyaW5nO1xyXG4gICAgZXJyb3JNZXNzYWdlQ2xhc3M/OiBzdHJpbmcgPSBWYWxpZGF0aW9uQ29uc3RhbnQuRXJyb3JNZXNzYWdlQ2xhc3M7XHJcbiAgICBlcnJvckVsZW1lbnRDbGFzcz86IHN0cmluZyA9IFZhbGlkYXRpb25Db25zdGFudC5FcnJvckVsZW1lbnRDbGFzcztcclxuICAgIHN1Y2Nlc3NFbGVtZW50Q2xhc3M/OiBzdHJpbmcgPSBWYWxpZGF0aW9uQ29uc3RhbnQuU3VjY2Vzc0VsZW1lbnRDbGFzcztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFZhbGlkYXRpb25PcHRpb24+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENsaWVudFZhbGlkYXRvciB7XHJcbiAgICBmb3JtUmVmOiBFbGVtZW50UmVmO1xyXG4gICAgb3B0aW9uczogVmFsaWRhdGlvbk9wdGlvbltdID0gW107XHJcbiAgICBwYXlsb2FkUmVmPzogKCkgPT4gYW55O1xyXG4gICAgc2NvcGU/OiBzdHJpbmc7XHJcbiAgICByZWxhdGVkVmFsaWRhdGlvblByb3ZpZGVycz86IFZhbGlkYXRpb25TZXJ2aWNlW10gPSBbXTtcclxuICAgIHJlcXVpcmVkTWVzc2FnZTogc3RyaW5nID0gVmFsaWRhdGlvbkNvbnN0YW50LnJlcXVpcmVkTWVzc2FnZTtcclxuICAgIGludmFsaWRNZXNzYWdlOiBzdHJpbmcgPSBWYWxpZGF0aW9uQ29uc3RhbnQuaW52YWxpZE1lc3NhZ2U7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxDbGllbnRWYWxpZGF0b3I+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25Db25zdGFudCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIFJlcXVpcmVkOiBzdHJpbmcgPSAnUmVxdWlyZWQnO1xyXG4gICAgcHVibGljIHN0YXRpYyBFbWFpbDogc3RyaW5nID0gJ0VtYWlsJztcclxuICAgIHB1YmxpYyBzdGF0aWMgUGhvbmU6IHN0cmluZyA9ICdQaG9uZSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIEN1c3RvbTogc3RyaW5nID0gJ0N1c3RvbSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIEVycm9yTWVzc2FnZTogc3RyaW5nID0gJ0tow7RuZyBo4bujcCBs4buHIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaS4nO1xyXG4gICAgcHVibGljIHN0YXRpYyBFcnJvckVsZW1lbnRDbGFzczogc3RyaW5nID0gJ25nLWludmFsaWQnO1xyXG4gICAgcHVibGljIHN0YXRpYyBTdWNjZXNzRWxlbWVudENsYXNzOiBzdHJpbmcgPSAnbmctdmFsaWQnO1xyXG4gICAgcHVibGljIHN0YXRpYyBFcnJvck1lc3NhZ2VDbGFzczogc3RyaW5nID0gJ3RleHQtZGFuZ2VyJztcclxuICAgIHB1YmxpYyBzdGF0aWMgRGVmYXVsdEVycm9yU3R5bGVzOiBzdHJpbmcgPSAncGFkZGluZzowO2xpc3Qtc3R5bGU6bm9uZTtmb250LXdlaWdodDo0MDA7Zm9udC1zaXplOjEzcHg7IHdpZHRoOiAxMDAlJztcclxuICAgIHB1YmxpYyBzdGF0aWMgRGVmYXVsdEVycm9yQ2xhc3M6IHN0cmluZyA9ICd2YWxpZGF0aW9uLWVycm9yJztcclxuICAgIHB1YmxpYyBzdGF0aWMgQXR0cmlidXRlTmFtZTogc3RyaW5nID0gJ3ZhbGlkYXRpb24tbmFtZSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIEF0dHJpYnV0ZU9wdGlvbk5hbWU6IHN0cmluZyA9ICdkeW5hbWljLW9wdGlvbic7XHJcbiAgICBwdWJsaWMgc3RhdGljIEF0dHJpYnV0ZUR5bmFtaWNOYW1lOiBzdHJpbmcgPSAnZHluYW1pYy12YWxpZGF0aW9uJztcclxuICAgIHB1YmxpYyBzdGF0aWMgRXJyb3JUYXJnZXRJZDogc3RyaW5nID0gJ2Vycm9yLXRhcmdldC1pZCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIER5bmFtaWNFcnJvckF0dHJpYnV0ZTogc3RyaW5nID0gJ2R5bmFtaWMtZXJyb3ItYXR0cmlidXRlJztcclxuICAgIHB1YmxpYyBzdGF0aWMgRVJST1JfRUxFTUVOVF9JRCA9ICdlcnJvci1lbGVtZW50LWlkJztcclxuICAgIHB1YmxpYyBzdGF0aWMgRVJST1JfSVRFTV9FTEVNRU5UX0lEID0gJ2Vycm9yLWl0ZW0tZWxlbWVudC1pZCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFZBTElEQVRJT05fSUQgPSAndmFsaWRhdGlvbi1pZCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIEFSUkFZX1NFUVVFTkNFX0lEID0gJ2FycmF5LXNlcXVlbmNlLWlkJztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVxdWlyZWRNZXNzYWdlOiBzdHJpbmcgPSAnbMOgIGLhuq90IGJ14buZYyc7XHJcbiAgICBwdWJsaWMgc3RhdGljIGludmFsaWRNZXNzYWdlOiBzdHJpbmcgPSAna2jDtG5nIGjhu6NwIGzhu4cnO1xyXG59O1xyXG4iXX0=