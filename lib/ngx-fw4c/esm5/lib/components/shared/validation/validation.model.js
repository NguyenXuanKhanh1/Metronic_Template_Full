/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var SummaryError = /** @class */ (function () {
    function SummaryError(init) {
        Object.assign(this, init);
    }
    return SummaryError;
}());
export { SummaryError };
if (false) {
    /** @type {?} */
    SummaryError.prototype.element;
    /** @type {?} */
    SummaryError.prototype.messages;
}
var ValidationRuleResponse = /** @class */ (function () {
    function ValidationRuleResponse(init) {
        Object.assign(this, init);
    }
    return ValidationRuleResponse;
}());
export { ValidationRuleResponse };
if (false) {
    /** @type {?} */
    ValidationRuleResponse.prototype.status;
    /** @type {?} */
    ValidationRuleResponse.prototype.message;
}
/**
 * @abstract
 */
var /**
 * @abstract
 */
ValidationRule = /** @class */ (function () {
    function ValidationRule(overridenErrorMessage) {
        this.errorMessage = overridenErrorMessage;
    }
    return ValidationRule;
}());
/**
 * @abstract
 */
export { ValidationRule };
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
var RequiredValidationRule = /** @class */ (function (_super) {
    tslib_1.__extends(RequiredValidationRule, _super);
    function RequiredValidationRule(overridenErrorMessage) {
        var _this = _super.call(this, overridenErrorMessage) || this;
        _this.key = ValidationConstant.Required;
        return _this;
    }
    return RequiredValidationRule;
}(ValidationRule));
export { RequiredValidationRule };
var EmailValidationRule = /** @class */ (function (_super) {
    tslib_1.__extends(EmailValidationRule, _super);
    function EmailValidationRule(overridenErrorMessage) {
        var _this = _super.call(this, overridenErrorMessage) || this;
        _this.key = ValidationConstant.Email;
        return _this;
    }
    return EmailValidationRule;
}(ValidationRule));
export { EmailValidationRule };
var PhoneValidationRule = /** @class */ (function (_super) {
    tslib_1.__extends(PhoneValidationRule, _super);
    function PhoneValidationRule(overridenErrorMessage) {
        var _this = _super.call(this, overridenErrorMessage) || this;
        _this.key = ValidationConstant.Phone;
        return _this;
    }
    return PhoneValidationRule;
}(ValidationRule));
export { PhoneValidationRule };
var CustomValidationRule = /** @class */ (function (_super) {
    tslib_1.__extends(CustomValidationRule, _super);
    function CustomValidationRule(execute, overridenErrorMessage) {
        var _this = _super.call(this, overridenErrorMessage) || this;
        _this.execute = execute;
        _this.key = ValidationConstant.Custom;
        return _this;
    }
    return CustomValidationRule;
}(ValidationRule));
export { CustomValidationRule };
var ValidationOption = /** @class */ (function () {
    function ValidationOption(init) {
        this.rules = [];
        this.errorMessageClass = ValidationConstant.ErrorMessageClass;
        this.errorElementClass = ValidationConstant.ErrorElementClass;
        this.successElementClass = ValidationConstant.SuccessElementClass;
        Object.assign(this, init);
    }
    return ValidationOption;
}());
export { ValidationOption };
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
var ClientValidator = /** @class */ (function () {
    function ClientValidator(init) {
        this.options = [];
        this.relatedValidationProviders = [];
        this.requiredMessage = ValidationConstant.requiredMessage;
        this.invalidMessage = ValidationConstant.invalidMessage;
        Object.assign(this, init);
    }
    return ClientValidator;
}());
export { ClientValidator };
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
var ValidationConstant = /** @class */ (function () {
    function ValidationConstant() {
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
    return ValidationConstant;
}());
export { ValidationConstant };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLGlDQUdDOzs7OztJQUZHLGlEQUE0Qjs7OztJQUM1QixrREFBd0M7O0FBRzVDO0lBR0ksc0JBQVksSUFBNEI7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMRywrQkFBb0I7O0lBQ3BCLGdDQUFtQjs7QUFNdkI7SUFHSSxnQ0FBWSxJQUFzQztRQUM5QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQUxHLHdDQUFpQjs7SUFDakIseUNBQWlCOzs7OztBQU1yQjs7OztJQU9JLHdCQUFZLHFCQUFvRTtRQUU1RSxJQUFJLENBQUMsWUFBWSxHQUFHLHFCQUFxQixDQUFDO0lBQzlDLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFYRCxJQVdDOzs7Ozs7O0lBVkcsNkJBQVk7O0lBQ1osaUNBQStGOztJQUMvRixzQ0FBMkQ7O0lBQzNELDRCQUFZOztJQUNaLGlDQUFrQjs7SUFDbEIsa0NBQW1COztBQU92QjtJQUE0QyxrREFBYztJQUN0RCxnQ0FDSSxxQkFBb0U7UUFEeEUsWUFHSSxrQkFBTSxxQkFBcUIsQ0FBQyxTQUUvQjtRQURHLEtBQUksQ0FBQyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDOztJQUMzQyxDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBNEMsY0FBYyxHQU96RDs7QUFFRDtJQUF5QywrQ0FBYztJQUNuRCw2QkFBWSxxQkFBb0U7UUFBaEYsWUFFSSxrQkFBTSxxQkFBcUIsQ0FBQyxTQUUvQjtRQURHLEtBQUksQ0FBQyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDOztJQUN4QyxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBeUMsY0FBYyxHQU10RDs7QUFFRDtJQUF5QywrQ0FBYztJQUNuRCw2QkFBWSxxQkFBb0U7UUFBaEYsWUFFSSxrQkFBTSxxQkFBcUIsQ0FBQyxTQUUvQjtRQURHLEtBQUksQ0FBQyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDOztJQUN4QyxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBeUMsY0FBYyxHQU10RDs7QUFFRDtJQUEwQyxnREFBYztJQUNwRCw4QkFDSSxPQUE4RixFQUM5RixxQkFBb0U7UUFGeEUsWUFJSSxrQkFBTSxxQkFBcUIsQ0FBQyxTQUcvQjtRQUZHLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDOztJQUN6QyxDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBMEMsY0FBYyxHQVN2RDs7QUFFRDtJQWFJLDBCQUFZLElBQWdDO1FBWDVDLFVBQUssR0FBcUIsRUFBRSxDQUFDO1FBUTdCLHNCQUFpQixHQUFZLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDO1FBQ2xFLHNCQUFpQixHQUFZLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDO1FBQ2xFLHdCQUFtQixHQUFZLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDO1FBRWxFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7Ozs7SUFmRywwQ0FBdUI7O0lBQ3ZCLGlDQUE2Qjs7SUFDN0IseUNBQWdFOztJQUNoRSx1Q0FBcUI7O0lBQ3JCLHdDQUFzQjs7SUFDdEIsc0NBQXVCOztJQUN2QixtQ0FBa0I7O0lBQ2xCLGlDQUFlOztJQUNmLHlDQUF1Qjs7SUFDdkIsNkNBQWtFOztJQUNsRSw2Q0FBa0U7O0lBQ2xFLCtDQUFzRTs7QUFNMUU7SUFRSSx5QkFBWSxJQUErQjtRQU4zQyxZQUFPLEdBQXVCLEVBQUUsQ0FBQztRQUdqQywrQkFBMEIsR0FBeUIsRUFBRSxDQUFDO1FBQ3RELG9CQUFlLEdBQVcsa0JBQWtCLENBQUMsZUFBZSxDQUFDO1FBQzdELG1CQUFjLEdBQVcsa0JBQWtCLENBQUMsY0FBYyxDQUFDO1FBRXZELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUFYRCxJQVdDOzs7O0lBVkcsa0NBQW9COztJQUNwQixrQ0FBaUM7O0lBQ2pDLHFDQUF1Qjs7SUFDdkIsZ0NBQWU7O0lBQ2YscURBQXNEOztJQUN0RCwwQ0FBNkQ7O0lBQzdELHlDQUEyRDs7QUFNL0Q7SUFBQTtJQXNCQSxDQUFDO0lBckJpQiwyQkFBUSxHQUFXLFVBQVUsQ0FBQztJQUM5Qix3QkFBSyxHQUFXLE9BQU8sQ0FBQztJQUN4Qix3QkFBSyxHQUFXLE9BQU8sQ0FBQztJQUN4Qix5QkFBTSxHQUFXLFFBQVEsQ0FBQztJQUMxQiwrQkFBWSxHQUFXLGdDQUFnQyxDQUFDO0lBQ3hELG9DQUFpQixHQUFXLFlBQVksQ0FBQztJQUN6QyxzQ0FBbUIsR0FBVyxVQUFVLENBQUM7SUFDekMsb0NBQWlCLEdBQVcsYUFBYSxDQUFDO0lBQzFDLHFDQUFrQixHQUFXLHVFQUF1RSxDQUFDO0lBQ3JHLG9DQUFpQixHQUFXLGtCQUFrQixDQUFDO0lBQy9DLGdDQUFhLEdBQVcsaUJBQWlCLENBQUM7SUFDMUMsc0NBQW1CLEdBQVcsZ0JBQWdCLENBQUM7SUFDL0MsdUNBQW9CLEdBQVcsb0JBQW9CLENBQUM7SUFDcEQsZ0NBQWEsR0FBVyxpQkFBaUIsQ0FBQztJQUMxQyx3Q0FBcUIsR0FBVyx5QkFBeUIsQ0FBQztJQUMxRCxtQ0FBZ0IsR0FBRyxrQkFBa0IsQ0FBQztJQUN0Qyx3Q0FBcUIsR0FBRyx1QkFBdUIsQ0FBQztJQUNoRCxnQ0FBYSxHQUFHLGVBQWUsQ0FBQztJQUNoQyxvQ0FBaUIsR0FBRyxtQkFBbUIsQ0FBQztJQUN4QyxrQ0FBZSxHQUFXLGFBQWEsQ0FBQztJQUN4QyxpQ0FBYyxHQUFXLGNBQWMsQ0FBQztJQUMxRCx5QkFBQztDQUFBLEFBdEJELElBc0JDO1NBdEJZLGtCQUFrQjs7O0lBQzNCLDRCQUE0Qzs7SUFDNUMseUJBQXNDOztJQUN0Qyx5QkFBc0M7O0lBQ3RDLDBCQUF3Qzs7SUFDeEMsZ0NBQXNFOztJQUN0RSxxQ0FBdUQ7O0lBQ3ZELHVDQUF1RDs7SUFDdkQscUNBQXdEOztJQUN4RCxzQ0FBbUg7O0lBQ25ILHFDQUE2RDs7SUFDN0QsaUNBQXdEOztJQUN4RCx1Q0FBNkQ7O0lBQzdELHdDQUFrRTs7SUFDbEUsaUNBQXdEOztJQUN4RCx5Q0FBd0U7O0lBQ3hFLG9DQUFvRDs7SUFDcEQseUNBQThEOztJQUM5RCxpQ0FBOEM7O0lBQzlDLHFDQUFzRDs7SUFDdEQsbUNBQXNEOztJQUN0RCxrQ0FBc0Q7O0FBQ3pELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tICcuL3ZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElWYWxpZGF0aW9uIHtcclxuICAgIGNhbGxiYWNrKCk6IE9ic2VydmFibGU8YW55PjtcclxuICAgIGdldEVycm9ycygpOiBPYnNlcnZhYmxlPFN1bW1hcnlFcnJvcltdPjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1bW1hcnlFcnJvciB7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gICAgbWVzc2FnZXM6IHN0cmluZ1tdO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8U3VtbWFyeUVycm9yPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uUnVsZVJlc3BvbnNlIHtcclxuICAgIHN0YXR1cz86IGJvb2xlYW47XHJcbiAgICBtZXNzYWdlPzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8VmFsaWRhdGlvblJ1bGVSZXNwb25zZT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVmFsaWRhdGlvblJ1bGUge1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICBleGVjdXRlOiAodmFsdWU/OiBhbnksIHBheWxvYWQ/OiBhbnksIHJvd0luZGV4PzogbnVtYmVyKSA9PiBPYnNlcnZhYmxlPFZhbGlkYXRpb25SdWxlUmVzcG9uc2U+O1xyXG4gICAgZXJyb3JNZXNzYWdlOiAoZWxlbWVudD86IGFueSwgcm93SW5kZXg/OiBzdHJpbmcpID0+IHN0cmluZztcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgaXNWYWxpZD86IGJvb2xlYW47XHJcbiAgICByZXF1aXJlZD86IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcihvdmVycmlkZW5FcnJvck1lc3NhZ2U/OiAoZWxlbWVudD86IGFueSwgcm93SW5kZXg/OiBzdHJpbmcpID0+IHN0cmluZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBvdmVycmlkZW5FcnJvck1lc3NhZ2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXF1aXJlZFZhbGlkYXRpb25SdWxlIGV4dGVuZHMgVmFsaWRhdGlvblJ1bGUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgb3ZlcnJpZGVuRXJyb3JNZXNzYWdlPzogKGVsZW1lbnQ/OiBhbnksIHJvd0luZGV4Pzogc3RyaW5nKSA9PiBzdHJpbmdcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKG92ZXJyaWRlbkVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBWYWxpZGF0aW9uQ29uc3RhbnQuUmVxdWlyZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFbWFpbFZhbGlkYXRpb25SdWxlIGV4dGVuZHMgVmFsaWRhdGlvblJ1bGUge1xyXG4gICAgY29uc3RydWN0b3Iob3ZlcnJpZGVuRXJyb3JNZXNzYWdlPzogKGVsZW1lbnQ/OiBhbnksIHJvd0luZGV4Pzogc3RyaW5nKSA9PiBzdHJpbmdcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKG92ZXJyaWRlbkVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBWYWxpZGF0aW9uQ29uc3RhbnQuRW1haWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQaG9uZVZhbGlkYXRpb25SdWxlIGV4dGVuZHMgVmFsaWRhdGlvblJ1bGUge1xyXG4gICAgY29uc3RydWN0b3Iob3ZlcnJpZGVuRXJyb3JNZXNzYWdlPzogKGVsZW1lbnQ/OiBhbnksIHJvd0luZGV4Pzogc3RyaW5nKSA9PiBzdHJpbmdcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKG92ZXJyaWRlbkVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBWYWxpZGF0aW9uQ29uc3RhbnQuUGhvbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21WYWxpZGF0aW9uUnVsZSBleHRlbmRzIFZhbGlkYXRpb25SdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGV4ZWN1dGU6ICh2YWx1ZT86IGFueSwgcGF5bG9hZD86IGFueSwgcm93SW5kZXg/OiBudW1iZXIpID0+IE9ic2VydmFibGU8VmFsaWRhdGlvblJ1bGVSZXNwb25zZT4sXHJcbiAgICAgICAgb3ZlcnJpZGVuRXJyb3JNZXNzYWdlPzogKGVsZW1lbnQ/OiBhbnksIHJvd0luZGV4Pzogc3RyaW5nKSA9PiBzdHJpbmdcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKG92ZXJyaWRlbkVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5leGVjdXRlID0gZXhlY3V0ZTtcclxuICAgICAgICB0aGlzLmtleSA9IFZhbGlkYXRpb25Db25zdGFudC5DdXN0b207XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uT3B0aW9uIHtcclxuICAgIHZhbGlkYXRpb25OYW1lOiBzdHJpbmc7XHJcbiAgICBydWxlczogVmFsaWRhdGlvblJ1bGVbXSA9IFtdO1xyXG4gICAgdmFsdWVSZXNvbHZlcjogKHBheWxvYWQ6IGFueSwgcm93SW5kZXg/OiBudW1iZXIpID0+IGFueSB8IGFueVtdO1xyXG4gICAgZGlzcGxheVRleHQ/OiBzdHJpbmc7XHJcbiAgICB2YWxpZGF0aW9uSWQ/OiBzdHJpbmc7XHJcbiAgICBwYXlsb2FkUmVmPzogKCkgPT4gYW55O1xyXG4gICAgZHluYW1pYz86IGJvb2xlYW47XHJcbiAgICBzY29wZT86IHN0cmluZztcclxuICAgIGVycm9yVGFyZ2V0SWQ/OiBzdHJpbmc7XHJcbiAgICBlcnJvck1lc3NhZ2VDbGFzcz86IHN0cmluZyA9IFZhbGlkYXRpb25Db25zdGFudC5FcnJvck1lc3NhZ2VDbGFzcztcclxuICAgIGVycm9yRWxlbWVudENsYXNzPzogc3RyaW5nID0gVmFsaWRhdGlvbkNvbnN0YW50LkVycm9yRWxlbWVudENsYXNzO1xyXG4gICAgc3VjY2Vzc0VsZW1lbnRDbGFzcz86IHN0cmluZyA9IFZhbGlkYXRpb25Db25zdGFudC5TdWNjZXNzRWxlbWVudENsYXNzO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8VmFsaWRhdGlvbk9wdGlvbj4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xpZW50VmFsaWRhdG9yIHtcclxuICAgIGZvcm1SZWY6IEVsZW1lbnRSZWY7XHJcbiAgICBvcHRpb25zOiBWYWxpZGF0aW9uT3B0aW9uW10gPSBbXTtcclxuICAgIHBheWxvYWRSZWY/OiAoKSA9PiBhbnk7XHJcbiAgICBzY29wZT86IHN0cmluZztcclxuICAgIHJlbGF0ZWRWYWxpZGF0aW9uUHJvdmlkZXJzPzogVmFsaWRhdGlvblNlcnZpY2VbXSA9IFtdO1xyXG4gICAgcmVxdWlyZWRNZXNzYWdlOiBzdHJpbmcgPSBWYWxpZGF0aW9uQ29uc3RhbnQucmVxdWlyZWRNZXNzYWdlO1xyXG4gICAgaW52YWxpZE1lc3NhZ2U6IHN0cmluZyA9IFZhbGlkYXRpb25Db25zdGFudC5pbnZhbGlkTWVzc2FnZTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPENsaWVudFZhbGlkYXRvcj4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbkNvbnN0YW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgUmVxdWlyZWQ6IHN0cmluZyA9ICdSZXF1aXJlZCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIEVtYWlsOiBzdHJpbmcgPSAnRW1haWwnO1xyXG4gICAgcHVibGljIHN0YXRpYyBQaG9uZTogc3RyaW5nID0gJ1Bob25lJztcclxuICAgIHB1YmxpYyBzdGF0aWMgQ3VzdG9tOiBzdHJpbmcgPSAnQ3VzdG9tJztcclxuICAgIHB1YmxpYyBzdGF0aWMgRXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnS2jDtG5nIGjhu6NwIGzhu4cgdnVpIGzDsm5nIHRo4butIGzhuqFpLic7XHJcbiAgICBwdWJsaWMgc3RhdGljIEVycm9yRWxlbWVudENsYXNzOiBzdHJpbmcgPSAnbmctaW52YWxpZCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFN1Y2Nlc3NFbGVtZW50Q2xhc3M6IHN0cmluZyA9ICduZy12YWxpZCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIEVycm9yTWVzc2FnZUNsYXNzOiBzdHJpbmcgPSAndGV4dC1kYW5nZXInO1xyXG4gICAgcHVibGljIHN0YXRpYyBEZWZhdWx0RXJyb3JTdHlsZXM6IHN0cmluZyA9ICdwYWRkaW5nOjA7bGlzdC1zdHlsZTpub25lO2ZvbnQtd2VpZ2h0OjQwMDtmb250LXNpemU6MTNweDsgd2lkdGg6IDEwMCUnO1xyXG4gICAgcHVibGljIHN0YXRpYyBEZWZhdWx0RXJyb3JDbGFzczogc3RyaW5nID0gJ3ZhbGlkYXRpb24tZXJyb3InO1xyXG4gICAgcHVibGljIHN0YXRpYyBBdHRyaWJ1dGVOYW1lOiBzdHJpbmcgPSAndmFsaWRhdGlvbi1uYW1lJztcclxuICAgIHB1YmxpYyBzdGF0aWMgQXR0cmlidXRlT3B0aW9uTmFtZTogc3RyaW5nID0gJ2R5bmFtaWMtb3B0aW9uJztcclxuICAgIHB1YmxpYyBzdGF0aWMgQXR0cmlidXRlRHluYW1pY05hbWU6IHN0cmluZyA9ICdkeW5hbWljLXZhbGlkYXRpb24nO1xyXG4gICAgcHVibGljIHN0YXRpYyBFcnJvclRhcmdldElkOiBzdHJpbmcgPSAnZXJyb3ItdGFyZ2V0LWlkJztcclxuICAgIHB1YmxpYyBzdGF0aWMgRHluYW1pY0Vycm9yQXR0cmlidXRlOiBzdHJpbmcgPSAnZHluYW1pYy1lcnJvci1hdHRyaWJ1dGUnO1xyXG4gICAgcHVibGljIHN0YXRpYyBFUlJPUl9FTEVNRU5UX0lEID0gJ2Vycm9yLWVsZW1lbnQtaWQnO1xyXG4gICAgcHVibGljIHN0YXRpYyBFUlJPUl9JVEVNX0VMRU1FTlRfSUQgPSAnZXJyb3ItaXRlbS1lbGVtZW50LWlkJztcclxuICAgIHB1YmxpYyBzdGF0aWMgVkFMSURBVElPTl9JRCA9ICd2YWxpZGF0aW9uLWlkJztcclxuICAgIHB1YmxpYyBzdGF0aWMgQVJSQVlfU0VRVUVOQ0VfSUQgPSAnYXJyYXktc2VxdWVuY2UtaWQnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZXF1aXJlZE1lc3NhZ2U6IHN0cmluZyA9ICdsw6AgYuG6r3QgYnXhu5ljJztcclxuICAgIHB1YmxpYyBzdGF0aWMgaW52YWxpZE1lc3NhZ2U6IHN0cmluZyA9ICdraMO0bmcgaOG7o3AgbOG7hyc7XHJcbn07XHJcbiJdfQ==