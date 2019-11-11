/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DecimalPipe } from '@angular/common';
export class KbPipe extends DecimalPipe {
    /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    transform(value, digits, locale) {
        return `${super.transform(Math.round(value / 1024), '1.0')} KB`;
    }
}
KbPipe.decorators = [
    { type: Pipe, args: [{
                name: 'cKb'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2IucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2Zvcm1hdHRlci9rYi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFNOUMsTUFBTSxPQUFPLE1BQU8sU0FBUSxXQUFXOzs7Ozs7O0lBQ3JDLFNBQVMsQ0FBQyxLQUFhLEVBQUUsTUFBZSxFQUFFLE1BQWU7UUFDdkQsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUNsRSxDQUFDOzs7WUFQRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLEtBQUs7YUFDWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdjS2InXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgS2JQaXBlIGV4dGVuZHMgRGVjaW1hbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciwgZGlnaXRzPzogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIHJldHVybiBgJHtzdXBlci50cmFuc2Zvcm0oTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMjQpLCAnMS4wJyl9IEtCYDtcclxuICB9XHJcbn1cclxuIl19