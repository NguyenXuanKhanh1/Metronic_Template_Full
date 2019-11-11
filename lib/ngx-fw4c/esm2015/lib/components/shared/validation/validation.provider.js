/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
export class ValidationProvider {
    constructor() {
        this.required = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            return of(this.isRequired(value));
        });
        this.email = (/**
         * @param {?} email
         * @return {?}
         */
        (email) => {
            if (!email)
                return of(true);
            return of(this.isValidEmail(email));
        });
        this.phone = (/**
         * @param {?} phone
         * @return {?}
         */
        (phone) => {
            if (!phone)
                return of(true);
            return of(this.isValidPhone(phone));
        });
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isRequired(value) {
        if (typeof (value) === 'string') {
            /** @type {?} */
            const trimmedValue = (/** @type {?} */ (value.trim()));
            return trimmedValue != '' && trimmedValue != undefined && trimmedValue != null;
        }
        if (Array.isArray(value)) {
            return value.length > 0;
        }
        if (value)
            return true;
        return false;
    }
    /**
     * @private
     * @param {?} email
     * @return {?}
     */
    isValidEmail(email) {
        if (!email)
            return true;
        /** @type {?} */
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    /**
     * @private
     * @param {?} phone
     * @return {?}
     */
    isValidPhone(phone) {
        if (!phone)
            return true;
        return phone.length === 10;
    }
}
ValidationProvider.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ValidationProvider.ctorParameters = () => [];
/** @nocollapse */ ValidationProvider.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ValidationProvider_Factory() { return new ValidationProvider(); }, token: ValidationProvider, providedIn: "root" });
if (false) {
    /** @type {?} */
    ValidationProvider.prototype.required;
    /** @type {?} */
    ValidationProvider.prototype.email;
    /** @type {?} */
    ValidationProvider.prototype.phone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUd0QyxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCO1FBRU8sYUFBUTs7OztRQUF3QyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3BFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQUE7UUFFTSxVQUFLOzs7O1FBQTJDLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDdkUsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBQTtRQUVNLFVBQUs7Ozs7UUFBMkMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUN2RSxJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFBO0lBZGUsQ0FBQzs7Ozs7O0lBZ0JULFVBQVUsQ0FBQyxLQUFVO1FBQzNCLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsRUFBRTs7a0JBQ3pCLFlBQVksR0FBRyxtQkFBUSxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUE7WUFDekMsT0FBTyxZQUFZLElBQUksRUFBRSxJQUFJLFlBQVksSUFBSSxTQUFTLElBQUksWUFBWSxJQUFJLElBQUksQ0FBQztTQUNoRjtRQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QixPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxLQUFLO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDdkIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sSUFBSSxDQUFDOztZQUNwQixLQUFLLEdBQUcsK0RBQStEO1FBQzNFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7O1lBdkNGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Ozs7SUFJaEMsc0NBRUM7O0lBRUQsbUNBR0M7O0lBRUQsbUNBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblByb3ZpZGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBwdWJsaWMgcmVxdWlyZWQ6ICh2YWx1ZTogYW55KSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gKHZhbHVlOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBvZih0aGlzLmlzUmVxdWlyZWQodmFsdWUpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBlbWFpbDogKGVtYWlsOiBzdHJpbmcpID0+IE9ic2VydmFibGU8Ym9vbGVhbj4gPSAoZW1haWw6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFlbWFpbCkgcmV0dXJuIG9mKHRydWUpO1xyXG4gICAgcmV0dXJuIG9mKHRoaXMuaXNWYWxpZEVtYWlsKGVtYWlsKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGhvbmU6IChwaG9uZTogc3RyaW5nKSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gKHBob25lOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICghcGhvbmUpIHJldHVybiBvZih0cnVlKTtcclxuICAgIHJldHVybiBvZih0aGlzLmlzVmFsaWRQaG9uZShwaG9uZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1JlcXVpcmVkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICh0eXBlb2YgKHZhbHVlKSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgY29uc3QgdHJpbW1lZFZhbHVlID0gPHN0cmluZz52YWx1ZS50cmltKCk7XHJcbiAgICAgIHJldHVybiB0cmltbWVkVmFsdWUgIT0gJycgJiYgdHJpbW1lZFZhbHVlICE9IHVuZGVmaW5lZCAmJiB0cmltbWVkVmFsdWUgIT0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZSkgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVmFsaWRFbWFpbChlbWFpbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWVtYWlsKSByZXR1cm4gdHJ1ZTtcclxuICAgIHZhciByZWdleCA9IC9eKFthLXpBLVowLTlfListXSkrXFxAKChbYS16QS1aMC05LV0pK1xcLikrKFthLXpBLVowLTldezIsNH0pKyQvO1xyXG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoZW1haWwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ZhbGlkUGhvbmUocGhvbmU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFwaG9uZSkgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gcGhvbmUubGVuZ3RoID09PSAxMDtcclxuICB9XHJcbn0iXX0=