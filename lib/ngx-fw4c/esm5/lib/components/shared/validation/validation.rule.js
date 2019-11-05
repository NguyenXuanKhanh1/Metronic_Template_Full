/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
var ValidationRule = /** @class */ (function () {
    function ValidationRule() {
        var _this = this;
        this.required = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return of(_this.isRequired(value));
        });
        this.email = (/**
         * @param {?} email
         * @return {?}
         */
        function (email) {
            return of(_this.isValidEmail(email));
        });
        this.phone = (/**
         * @param {?} phone
         * @return {?}
         */
        function (phone) {
            return of(_this.isValidPhone(phone));
        });
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    ValidationRule.prototype.isRequired = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (typeof (value) === 'string') {
            /** @type {?} */
            var trimmedValue = (/** @type {?} */ (value.trim()));
            return trimmedValue !== '';
        }
        if (Array.isArray(value)) {
            return value.length > 0;
        }
        if (value)
            return true;
        return false;
    };
    /**
     * @private
     * @param {?} email
     * @return {?}
     */
    ValidationRule.prototype.isValidEmail = /**
     * @private
     * @param {?} email
     * @return {?}
     */
    function (email) {
        if (!email)
            return true;
        /** @type {?} */
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    };
    /**
     * @private
     * @param {?} phone
     * @return {?}
     */
    ValidationRule.prototype.isValidPhone = /**
     * @private
     * @param {?} phone
     * @return {?}
     */
    function (phone) {
        if (!phone)
            return true;
        return phone.length === 10;
    };
    ValidationRule.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ValidationRule.ctorParameters = function () { return []; };
    /** @nocollapse */ ValidationRule.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ValidationRule_Factory() { return new ValidationRule(); }, token: ValidationRule, providedIn: "root" });
    return ValidationRule;
}());
export { ValidationRule };
if (false) {
    /** @type {?} */
    ValidationRule.prototype.required;
    /** @type {?} */
    ValidationRule.prototype.email;
    /** @type {?} */
    ValidationRule.prototype.phone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5ydWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvdmFsaWRhdGlvbi92YWxpZGF0aW9uLnJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFdEM7SUFFRTtRQUFBLGlCQUFpQjtRQUVWLGFBQVE7Ozs7UUFBd0MsVUFBQyxLQUFVO1lBQ2hFLE9BQU8sRUFBRSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQUE7UUFFTSxVQUFLOzs7O1FBQTJDLFVBQUMsS0FBYTtZQUNuRSxPQUFPLEVBQUUsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFBO1FBRU0sVUFBSzs7OztRQUEyQyxVQUFDLEtBQWE7WUFDbkUsT0FBTyxFQUFFLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBQTtJQVplLENBQUM7Ozs7OztJQWNULG1DQUFVOzs7OztJQUFsQixVQUFtQixLQUFVO1FBQzNCLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsRUFBRTs7Z0JBQ3pCLFlBQVksR0FBRyxtQkFBUSxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUE7WUFDekMsT0FBTyxZQUFZLEtBQUssRUFBRSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDekI7UUFDRCxJQUFJLEtBQUs7WUFBRSxPQUFPLElBQUksQ0FBQztRQUN2QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVPLHFDQUFZOzs7OztJQUFwQixVQUFxQixLQUFhO1FBQ2hDLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTyxJQUFJLENBQUM7O1lBQ3BCLEtBQUssR0FBRywrREFBK0Q7UUFDM0UsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUVPLHFDQUFZOzs7OztJQUFwQixVQUFxQixLQUFhO1FBQ2hDLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDeEIsT0FBTyxLQUFLLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDOztnQkFyQ0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs7eUJBSGxDO0NBeUNDLEFBdENELElBc0NDO1NBckNZLGNBQWM7OztJQUd6QixrQ0FFQzs7SUFFRCwrQkFFQzs7SUFFRCwrQkFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uUnVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgcHVibGljIHJlcXVpcmVkOiAodmFsdWU6IGFueSkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPiA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gb2YodGhpcy5pc1JlcXVpcmVkKHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZW1haWw6IChlbWFpbDogc3RyaW5nKSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gKGVtYWlsOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBvZih0aGlzLmlzVmFsaWRFbWFpbChlbWFpbCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBob25lOiAocGhvbmU6IHN0cmluZykgPT4gT2JzZXJ2YWJsZTxib29sZWFuPiA9IChwaG9uZTogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gb2YodGhpcy5pc1ZhbGlkUGhvbmUocGhvbmUpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNSZXF1aXJlZCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodHlwZW9mICh2YWx1ZSkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGNvbnN0IHRyaW1tZWRWYWx1ZSA9IDxzdHJpbmc+dmFsdWUudHJpbSgpO1xyXG4gICAgICByZXR1cm4gdHJpbW1lZFZhbHVlICE9PSAnJztcclxuICAgIH1cclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZSkgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVmFsaWRFbWFpbChlbWFpbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWVtYWlsKSByZXR1cm4gdHJ1ZTtcclxuICAgIHZhciByZWdleCA9IC9eKFthLXpBLVowLTlfListXSkrXFxAKChbYS16QS1aMC05LV0pK1xcLikrKFthLXpBLVowLTldezIsNH0pKyQvO1xyXG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoZW1haWwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ZhbGlkUGhvbmUocGhvbmU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFwaG9uZSkgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gcGhvbmUubGVuZ3RoID09PSAxMDtcclxuICB9XHJcbn0iXX0=