/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
export class ValidationRule {
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
            return of(this.isValidEmail(email));
        });
        this.phone = (/**
         * @param {?} phone
         * @return {?}
         */
        (phone) => {
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
            return trimmedValue !== '';
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
ValidationRule.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ValidationRule.ctorParameters = () => [];
/** @nocollapse */ ValidationRule.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ValidationRule_Factory() { return new ValidationRule(); }, token: ValidationRule, providedIn: "root" });
if (false) {
    /** @type {?} */
    ValidationRule.prototype.required;
    /** @type {?} */
    ValidationRule.prototype.email;
    /** @type {?} */
    ValidationRule.prototype.phone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5ydWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvdmFsaWRhdGlvbi92YWxpZGF0aW9uLnJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHdEMsTUFBTSxPQUFPLGNBQWM7SUFDekI7UUFFTyxhQUFROzs7O1FBQXdDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDcEUsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBQTtRQUVNLFVBQUs7Ozs7UUFBMkMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUN2RSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFBO1FBRU0sVUFBSzs7OztRQUEyQyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQ3ZFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDLEVBQUE7SUFaZSxDQUFDOzs7Ozs7SUFjVCxVQUFVLENBQUMsS0FBVTtRQUMzQixJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLEVBQUU7O2tCQUN6QixZQUFZLEdBQUcsbUJBQVEsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFBO1lBQ3pDLE9BQU8sWUFBWSxLQUFLLEVBQUUsQ0FBQztTQUM1QjtRQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QixPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxLQUFLO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDdkIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sSUFBSSxDQUFDOztZQUNwQixLQUFLLEdBQUcsK0RBQStEO1FBQzNFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7O1lBckNGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Ozs7SUFJaEMsa0NBRUM7O0lBRUQsK0JBRUM7O0lBRUQsK0JBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblJ1bGUge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHB1YmxpYyByZXF1aXJlZDogKHZhbHVlOiBhbnkpID0+IE9ic2VydmFibGU8Ym9vbGVhbj4gPSAodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIG9mKHRoaXMuaXNSZXF1aXJlZCh2YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVtYWlsOiAoZW1haWw6IHN0cmluZykgPT4gT2JzZXJ2YWJsZTxib29sZWFuPiA9IChlbWFpbDogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gb2YodGhpcy5pc1ZhbGlkRW1haWwoZW1haWwpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwaG9uZTogKHBob25lOiBzdHJpbmcpID0+IE9ic2VydmFibGU8Ym9vbGVhbj4gPSAocGhvbmU6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIG9mKHRoaXMuaXNWYWxpZFBob25lKHBob25lKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzUmVxdWlyZWQodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHR5cGVvZiAodmFsdWUpID09PSAnc3RyaW5nJykge1xyXG4gICAgICBjb25zdCB0cmltbWVkVmFsdWUgPSA8c3RyaW5nPnZhbHVlLnRyaW0oKTtcclxuICAgICAgcmV0dXJuIHRyaW1tZWRWYWx1ZSAhPT0gJyc7XHJcbiAgICB9XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUpIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ZhbGlkRW1haWwoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFlbWFpbCkgcmV0dXJuIHRydWU7XHJcbiAgICB2YXIgcmVnZXggPSAvXihbYS16QS1aMC05Xy4rLV0pK1xcQCgoW2EtekEtWjAtOS1dKStcXC4pKyhbYS16QS1aMC05XXsyLDR9KSskLztcclxuICAgIHJldHVybiByZWdleC50ZXN0KGVtYWlsKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNWYWxpZFBob25lKHBob25lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghcGhvbmUpIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIHBob25lLmxlbmd0aCA9PT0gMTA7XHJcbiAgfVxyXG59Il19