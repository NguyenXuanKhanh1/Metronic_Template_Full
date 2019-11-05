/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function INestableComponent() { }
if (false) {
    /**
     * @return {?}
     */
    INestableComponent.prototype.callback = function () { };
    /**
     * @return {?}
     */
    INestableComponent.prototype.getErrors = function () { };
}
/**
 * @record
 */
export function SummaryError() { }
if (false) {
    /** @type {?} */
    SummaryError.prototype.element;
    /** @type {?} */
    SummaryError.prototype.messages;
}
/**
 * @abstract
 */
export class ValidationAction {
    /**
     * @param {?=} overridenErrorMessage
     */
    constructor(overridenErrorMessage) {
        this.errorMessage = overridenErrorMessage;
    }
}
if (false) {
    /** @type {?} */
    ValidationAction.prototype.key;
    /** @type {?} */
    ValidationAction.prototype.execute;
    /** @type {?} */
    ValidationAction.prototype.errorMessage;
    /** @type {?} */
    ValidationAction.prototype.id;
    /** @type {?} */
    ValidationAction.prototype.isValid;
}
export class RequiredValidationAction extends ValidationAction {
    /**
     * @param {?=} overridenErrorMessage
     */
    constructor(overridenErrorMessage) {
        super(overridenErrorMessage);
        this.key = ValidationConstant.Required;
    }
}
export class EmailValidationAction extends ValidationAction {
    /**
     * @param {?=} overridenErrorMessage
     */
    constructor(overridenErrorMessage) {
        super(overridenErrorMessage);
        this.key = ValidationConstant.Email;
    }
}
export class PhoneValidationAction extends ValidationAction {
    /**
     * @param {?=} overridenErrorMessage
     */
    constructor(overridenErrorMessage) {
        super(overridenErrorMessage);
        this.key = ValidationConstant.Phone;
    }
}
export class CustomValidationAction extends ValidationAction {
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
        this.actions = [];
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
    ValidationOption.prototype.actions;
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
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsd0NBR0M7Ozs7O0lBRkcsd0RBQTRCOzs7O0lBQzVCLHlEQUF3Qzs7Ozs7QUFHNUMsa0NBR0M7OztJQUZHLCtCQUFvQjs7SUFDcEIsZ0NBQW1COzs7OztBQUd2QixNQUFNLE9BQWdCLGdCQUFnQjs7OztJQU1sQyxZQUFZLHFCQUFvRTtRQUU1RSxJQUFJLENBQUMsWUFBWSxHQUFHLHFCQUFxQixDQUFDO0lBQzlDLENBQUM7Q0FDSjs7O0lBVEcsK0JBQVk7O0lBQ1osbUNBQStFOztJQUMvRSx3Q0FBMkQ7O0lBQzNELDhCQUFZOztJQUNaLG1DQUFrQjs7QUFPdEIsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGdCQUFnQjs7OztJQUMxRCxZQUNJLHFCQUFvRTtRQUVwRSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxHQUFHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztJQUMzQyxDQUFDO0NBQ0o7QUFFRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsZ0JBQWdCOzs7O0lBQ3ZELFlBQVkscUJBQW9FO1FBRTVFLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDO0lBQ3hDLENBQUM7Q0FDSjtBQUVELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxnQkFBZ0I7Ozs7SUFDdkQsWUFBWSxxQkFBb0U7UUFFNUUsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7SUFDeEMsQ0FBQztDQUNKO0FBRUQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGdCQUFnQjs7Ozs7SUFDeEQsWUFDSSxPQUE4RSxFQUM5RSxxQkFBb0U7UUFFcEUsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7SUFDekMsQ0FBQztDQUNKO0FBRUQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQWF6QixZQUFZLElBQWdDO1FBWDVDLFlBQU8sR0FBdUIsRUFBRSxDQUFDO1FBUWpDLHNCQUFpQixHQUFZLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDO1FBQ2xFLHNCQUFpQixHQUFZLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDO1FBQ2xFLHdCQUFtQixHQUFZLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDO1FBRWxFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjs7O0lBZkcsMENBQXVCOztJQUN2QixtQ0FBaUM7O0lBQ2pDLHlDQUFnRTs7SUFDaEUsdUNBQXFCOztJQUNyQix3Q0FBc0I7O0lBQ3RCLHNDQUF1Qjs7SUFDdkIsbUNBQWtCOztJQUNsQixpQ0FBZTs7SUFDZix5Q0FBdUI7O0lBQ3ZCLDZDQUFrRTs7SUFDbEUsNkNBQWtFOztJQUNsRSwrQ0FBc0U7O0FBTTFFLE1BQU0sT0FBTyxlQUFlOzs7O0lBTXhCLFlBQVksSUFBK0I7UUFKM0MsWUFBTyxHQUF1QixFQUFFLENBQUM7UUFHakMsK0JBQTBCLEdBQXlCLEVBQUUsQ0FBQztRQUVsRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7OztJQVJHLGtDQUFvQjs7SUFDcEIsa0NBQWlDOztJQUNqQyxxQ0FBdUI7O0lBQ3ZCLGdDQUFlOztJQUNmLHFEQUFzRDs7QUFNMUQsTUFBTSxPQUFPLGtCQUFrQjs7QUFDYiwyQkFBUSxHQUFXLFVBQVUsQ0FBQztBQUM5Qix3QkFBSyxHQUFXLE9BQU8sQ0FBQztBQUN4Qix3QkFBSyxHQUFXLE9BQU8sQ0FBQztBQUN4Qix5QkFBTSxHQUFXLFFBQVEsQ0FBQztBQUMxQiwrQkFBWSxHQUFXLGdDQUFnQyxDQUFDO0FBQ3hELG9DQUFpQixHQUFXLFlBQVksQ0FBQztBQUN6QyxzQ0FBbUIsR0FBVyxVQUFVLENBQUM7QUFDekMsb0NBQWlCLEdBQVcsYUFBYSxDQUFDO0FBQzFDLHFDQUFrQixHQUFXLHVFQUF1RSxDQUFDO0FBQ3JHLG9DQUFpQixHQUFXLGtCQUFrQixDQUFDO0FBQy9DLGdDQUFhLEdBQVcsaUJBQWlCLENBQUM7QUFDMUMsc0NBQW1CLEdBQVcsZ0JBQWdCLENBQUM7QUFDL0MsdUNBQW9CLEdBQVcsb0JBQW9CLENBQUM7QUFDcEQsZ0NBQWEsR0FBVyxpQkFBaUIsQ0FBQztBQUMxQyx3Q0FBcUIsR0FBVyx5QkFBeUIsQ0FBQztBQUMxRCxtQ0FBZ0IsR0FBRyxrQkFBa0IsQ0FBQztBQUN0Qyx3Q0FBcUIsR0FBRyx1QkFBdUIsQ0FBQztBQUNoRCxnQ0FBYSxHQUFHLGVBQWUsQ0FBQztBQUNoQyxvQ0FBaUIsR0FBRyxtQkFBbUIsQ0FBQzs7O0lBbEJ0RCw0QkFBNEM7O0lBQzVDLHlCQUFzQzs7SUFDdEMseUJBQXNDOztJQUN0QywwQkFBd0M7O0lBQ3hDLGdDQUFzRTs7SUFDdEUscUNBQXVEOztJQUN2RCx1Q0FBdUQ7O0lBQ3ZELHFDQUF3RDs7SUFDeEQsc0NBQW1IOztJQUNuSCxxQ0FBNkQ7O0lBQzdELGlDQUF3RDs7SUFDeEQsdUNBQTZEOztJQUM3RCx3Q0FBa0U7O0lBQ2xFLGlDQUF3RDs7SUFDeEQseUNBQXdFOztJQUN4RSxvQ0FBb0Q7O0lBQ3BELHlDQUE4RDs7SUFDOUQsaUNBQThDOztJQUM5QyxxQ0FBc0Q7O0FBQ3pELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tICcuL3ZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOZXN0YWJsZUNvbXBvbmVudCB7XHJcbiAgICBjYWxsYmFjaygpOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBnZXRFcnJvcnMoKTogT2JzZXJ2YWJsZTxTdW1tYXJ5RXJyb3JbXT47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3VtbWFyeUVycm9yIHtcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICBtZXNzYWdlczogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWYWxpZGF0aW9uQWN0aW9uIHtcclxuICAgIGtleTogc3RyaW5nO1xyXG4gICAgZXhlY3V0ZTogKHBheWxvYWQ6IGFueSwgdmFsdWU/OiBhbnksIHJvd0luZGV4PzogbnVtYmVyKSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gICAgZXJyb3JNZXNzYWdlOiAoZWxlbWVudD86IGFueSwgcm93SW5kZXg/OiBzdHJpbmcpID0+IHN0cmluZztcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgaXNWYWxpZD86IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcihvdmVycmlkZW5FcnJvck1lc3NhZ2U/OiAoZWxlbWVudD86IGFueSwgcm93SW5kZXg/OiBzdHJpbmcpID0+IHN0cmluZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBvdmVycmlkZW5FcnJvck1lc3NhZ2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXF1aXJlZFZhbGlkYXRpb25BY3Rpb24gZXh0ZW5kcyBWYWxpZGF0aW9uQWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIG92ZXJyaWRlbkVycm9yTWVzc2FnZT86IChlbGVtZW50PzogYW55LCByb3dJbmRleD86IHN0cmluZykgPT4gc3RyaW5nXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihvdmVycmlkZW5FcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMua2V5ID0gVmFsaWRhdGlvbkNvbnN0YW50LlJlcXVpcmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRW1haWxWYWxpZGF0aW9uQWN0aW9uIGV4dGVuZHMgVmFsaWRhdGlvbkFjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihvdmVycmlkZW5FcnJvck1lc3NhZ2U/OiAoZWxlbWVudD86IGFueSwgcm93SW5kZXg/OiBzdHJpbmcpID0+IHN0cmluZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIob3ZlcnJpZGVuRXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmtleSA9IFZhbGlkYXRpb25Db25zdGFudC5FbWFpbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBob25lVmFsaWRhdGlvbkFjdGlvbiBleHRlbmRzIFZhbGlkYXRpb25BY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3Iob3ZlcnJpZGVuRXJyb3JNZXNzYWdlPzogKGVsZW1lbnQ/OiBhbnksIHJvd0luZGV4Pzogc3RyaW5nKSA9PiBzdHJpbmdcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKG92ZXJyaWRlbkVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBWYWxpZGF0aW9uQ29uc3RhbnQuUGhvbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21WYWxpZGF0aW9uQWN0aW9uIGV4dGVuZHMgVmFsaWRhdGlvbkFjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBleGVjdXRlOiAocGF5bG9hZDogYW55LCB2YWx1ZT86IGFueSwgcm93SW5kZXg/OiBudW1iZXIpID0+IE9ic2VydmFibGU8Ym9vbGVhbj4sXHJcbiAgICAgICAgb3ZlcnJpZGVuRXJyb3JNZXNzYWdlPzogKGVsZW1lbnQ/OiBhbnksIHJvd0luZGV4Pzogc3RyaW5nKSA9PiBzdHJpbmdcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKG92ZXJyaWRlbkVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5leGVjdXRlID0gZXhlY3V0ZTtcclxuICAgICAgICB0aGlzLmtleSA9IFZhbGlkYXRpb25Db25zdGFudC5DdXN0b207XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uT3B0aW9uIHtcclxuICAgIHZhbGlkYXRpb25OYW1lOiBzdHJpbmc7XHJcbiAgICBhY3Rpb25zOiBWYWxpZGF0aW9uQWN0aW9uW10gPSBbXTtcclxuICAgIHZhbHVlUmVzb2x2ZXI6IChwYXlsb2FkOiBhbnksIHJvd0luZGV4PzogbnVtYmVyKSA9PiBhbnkgfCBhbnlbXTtcclxuICAgIGRpc3BsYXlUZXh0Pzogc3RyaW5nO1xyXG4gICAgdmFsaWRhdGlvbklkPzogc3RyaW5nO1xyXG4gICAgcGF5bG9hZFJlZj86ICgpID0+IGFueTtcclxuICAgIGR5bmFtaWM/OiBib29sZWFuO1xyXG4gICAgc2NvcGU/OiBzdHJpbmc7XHJcbiAgICBlcnJvclRhcmdldElkPzogc3RyaW5nO1xyXG4gICAgZXJyb3JNZXNzYWdlQ2xhc3M/OiBzdHJpbmcgPSBWYWxpZGF0aW9uQ29uc3RhbnQuRXJyb3JNZXNzYWdlQ2xhc3M7XHJcbiAgICBlcnJvckVsZW1lbnRDbGFzcz86IHN0cmluZyA9IFZhbGlkYXRpb25Db25zdGFudC5FcnJvckVsZW1lbnRDbGFzcztcclxuICAgIHN1Y2Nlc3NFbGVtZW50Q2xhc3M/OiBzdHJpbmcgPSBWYWxpZGF0aW9uQ29uc3RhbnQuU3VjY2Vzc0VsZW1lbnRDbGFzcztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFZhbGlkYXRpb25PcHRpb24+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENsaWVudFZhbGlkYXRvciB7XHJcbiAgICBmb3JtUmVmOiBFbGVtZW50UmVmO1xyXG4gICAgb3B0aW9uczogVmFsaWRhdGlvbk9wdGlvbltdID0gW107XHJcbiAgICBwYXlsb2FkUmVmPzogKCkgPT4gYW55O1xyXG4gICAgc2NvcGU/OiBzdHJpbmc7XHJcbiAgICByZWxhdGVkVmFsaWRhdGlvblByb3ZpZGVycz86IFZhbGlkYXRpb25TZXJ2aWNlW10gPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPENsaWVudFZhbGlkYXRvcj4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbkNvbnN0YW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgUmVxdWlyZWQ6IHN0cmluZyA9ICdSZXF1aXJlZCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIEVtYWlsOiBzdHJpbmcgPSAnRW1haWwnO1xyXG4gICAgcHVibGljIHN0YXRpYyBQaG9uZTogc3RyaW5nID0gJ1Bob25lJztcclxuICAgIHB1YmxpYyBzdGF0aWMgQ3VzdG9tOiBzdHJpbmcgPSAnQ3VzdG9tJztcclxuICAgIHB1YmxpYyBzdGF0aWMgRXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnS2jDtG5nIGjhu6NwIGzhu4cgdnVpIGzDsm5nIHRo4butIGzhuqFpLic7XHJcbiAgICBwdWJsaWMgc3RhdGljIEVycm9yRWxlbWVudENsYXNzOiBzdHJpbmcgPSAnbmctaW52YWxpZCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFN1Y2Nlc3NFbGVtZW50Q2xhc3M6IHN0cmluZyA9ICduZy12YWxpZCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIEVycm9yTWVzc2FnZUNsYXNzOiBzdHJpbmcgPSAndGV4dC1kYW5nZXInO1xyXG4gICAgcHVibGljIHN0YXRpYyBEZWZhdWx0RXJyb3JTdHlsZXM6IHN0cmluZyA9ICdwYWRkaW5nOjA7bGlzdC1zdHlsZTpub25lO2ZvbnQtd2VpZ2h0OjQwMDtmb250LXNpemU6MTNweDsgd2lkdGg6IDEwMCUnO1xyXG4gICAgcHVibGljIHN0YXRpYyBEZWZhdWx0RXJyb3JDbGFzczogc3RyaW5nID0gJ3ZhbGlkYXRpb24tZXJyb3InO1xyXG4gICAgcHVibGljIHN0YXRpYyBBdHRyaWJ1dGVOYW1lOiBzdHJpbmcgPSAndmFsaWRhdGlvbi1uYW1lJztcclxuICAgIHB1YmxpYyBzdGF0aWMgQXR0cmlidXRlT3B0aW9uTmFtZTogc3RyaW5nID0gJ2R5bmFtaWMtb3B0aW9uJztcclxuICAgIHB1YmxpYyBzdGF0aWMgQXR0cmlidXRlRHluYW1pY05hbWU6IHN0cmluZyA9ICdkeW5hbWljLXZhbGlkYXRpb24nO1xyXG4gICAgcHVibGljIHN0YXRpYyBFcnJvclRhcmdldElkOiBzdHJpbmcgPSAnZXJyb3ItdGFyZ2V0LWlkJztcclxuICAgIHB1YmxpYyBzdGF0aWMgRHluYW1pY0Vycm9yQXR0cmlidXRlOiBzdHJpbmcgPSAnZHluYW1pYy1lcnJvci1hdHRyaWJ1dGUnO1xyXG4gICAgcHVibGljIHN0YXRpYyBFUlJPUl9FTEVNRU5UX0lEID0gJ2Vycm9yLWVsZW1lbnQtaWQnO1xyXG4gICAgcHVibGljIHN0YXRpYyBFUlJPUl9JVEVNX0VMRU1FTlRfSUQgPSAnZXJyb3ItaXRlbS1lbGVtZW50LWlkJztcclxuICAgIHB1YmxpYyBzdGF0aWMgVkFMSURBVElPTl9JRCA9ICd2YWxpZGF0aW9uLWlkJztcclxuICAgIHB1YmxpYyBzdGF0aWMgQVJSQVlfU0VRVUVOQ0VfSUQgPSAnYXJyYXktc2VxdWVuY2UtaWQnO1xyXG59O1xyXG4iXX0=