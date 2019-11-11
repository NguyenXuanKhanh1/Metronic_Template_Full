/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
var ValidationProvider = /** @class */ (function () {
    function ValidationProvider() {
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
            if (!email)
                return of(true);
            return of(_this.isValidEmail(email));
        });
        this.phone = (/**
         * @param {?} phone
         * @return {?}
         */
        function (phone) {
            if (!phone)
                return of(true);
            return of(_this.isValidPhone(phone));
        });
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    ValidationProvider.prototype.isRequired = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (typeof (value) === 'string') {
            /** @type {?} */
            var trimmedValue = (/** @type {?} */ (value.trim()));
            return trimmedValue != '' && trimmedValue != undefined && trimmedValue != null;
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
    ValidationProvider.prototype.isValidEmail = /**
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
    ValidationProvider.prototype.isValidPhone = /**
     * @private
     * @param {?} phone
     * @return {?}
     */
    function (phone) {
        if (!phone)
            return true;
        return phone.length === 10;
    };
    ValidationProvider.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ValidationProvider.ctorParameters = function () { return []; };
    /** @nocollapse */ ValidationProvider.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ValidationProvider_Factory() { return new ValidationProvider(); }, token: ValidationProvider, providedIn: "root" });
    return ValidationProvider;
}());
export { ValidationProvider };
if (false) {
    /** @type {?} */
    ValidationProvider.prototype.required;
    /** @type {?} */
    ValidationProvider.prototype.email;
    /** @type {?} */
    ValidationProvider.prototype.phone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUV0QztJQUVFO1FBQUEsaUJBQWlCO1FBRVYsYUFBUTs7OztRQUF3QyxVQUFDLEtBQVU7WUFDaEUsT0FBTyxFQUFFLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBQTtRQUVNLFVBQUs7Ozs7UUFBMkMsVUFBQyxLQUFhO1lBQ25FLElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLE9BQU8sRUFBRSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDLEVBQUE7UUFFTSxVQUFLOzs7O1FBQTJDLFVBQUMsS0FBYTtZQUNuRSxJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixPQUFPLEVBQUUsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFBO0lBZGUsQ0FBQzs7Ozs7O0lBZ0JULHVDQUFVOzs7OztJQUFsQixVQUFtQixLQUFVO1FBQzNCLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsRUFBRTs7Z0JBQ3pCLFlBQVksR0FBRyxtQkFBUSxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUE7WUFDekMsT0FBTyxZQUFZLElBQUksRUFBRSxJQUFJLFlBQVksSUFBSSxTQUFTLElBQUksWUFBWSxJQUFJLElBQUksQ0FBQztTQUNoRjtRQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QixPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxLQUFLO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDdkIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFFTyx5Q0FBWTs7Ozs7SUFBcEIsVUFBcUIsS0FBYTtRQUNoQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sSUFBSSxDQUFDOztZQUNwQixLQUFLLEdBQUcsK0RBQStEO1FBQzNFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFFTyx5Q0FBWTs7Ozs7SUFBcEIsVUFBcUIsS0FBYTtRQUNoQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Z0JBdkNGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7OzZCQUhsQztDQTJDQyxBQXhDRCxJQXdDQztTQXZDWSxrQkFBa0I7OztJQUc3QixzQ0FFQzs7SUFFRCxtQ0FHQzs7SUFFRCxtQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uUHJvdmlkZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHB1YmxpYyByZXF1aXJlZDogKHZhbHVlOiBhbnkpID0+IE9ic2VydmFibGU8Ym9vbGVhbj4gPSAodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIG9mKHRoaXMuaXNSZXF1aXJlZCh2YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVtYWlsOiAoZW1haWw6IHN0cmluZykgPT4gT2JzZXJ2YWJsZTxib29sZWFuPiA9IChlbWFpbDogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoIWVtYWlsKSByZXR1cm4gb2YodHJ1ZSk7XHJcbiAgICByZXR1cm4gb2YodGhpcy5pc1ZhbGlkRW1haWwoZW1haWwpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwaG9uZTogKHBob25lOiBzdHJpbmcpID0+IE9ic2VydmFibGU8Ym9vbGVhbj4gPSAocGhvbmU6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFwaG9uZSkgcmV0dXJuIG9mKHRydWUpO1xyXG4gICAgcmV0dXJuIG9mKHRoaXMuaXNWYWxpZFBob25lKHBob25lKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzUmVxdWlyZWQodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHR5cGVvZiAodmFsdWUpID09PSAnc3RyaW5nJykge1xyXG4gICAgICBjb25zdCB0cmltbWVkVmFsdWUgPSA8c3RyaW5nPnZhbHVlLnRyaW0oKTtcclxuICAgICAgcmV0dXJuIHRyaW1tZWRWYWx1ZSAhPSAnJyAmJiB0cmltbWVkVmFsdWUgIT0gdW5kZWZpbmVkICYmIHRyaW1tZWRWYWx1ZSAhPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlKSByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNWYWxpZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghZW1haWwpIHJldHVybiB0cnVlO1xyXG4gICAgdmFyIHJlZ2V4ID0gL14oW2EtekEtWjAtOV8uKy1dKStcXEAoKFthLXpBLVowLTktXSkrXFwuKSsoW2EtekEtWjAtOV17Miw0fSkrJC87XHJcbiAgICByZXR1cm4gcmVnZXgudGVzdChlbWFpbCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVmFsaWRQaG9uZShwaG9uZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXBob25lKSByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBwaG9uZS5sZW5ndGggPT09IDEwO1xyXG4gIH1cclxufSJdfQ==