/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DecimalPipe } from '@angular/common';
var CurrencyPipe = /** @class */ (function (_super) {
    tslib_1.__extends(CurrencyPipe, _super);
    function CurrencyPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    CurrencyPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    function (value, digits, locale) {
        return _super.prototype.transform.call(this, value, '1.0') + " VN\u0110";
    };
    CurrencyPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'cCurrency'
                },] }
    ];
    return CurrencyPipe;
}(DecimalPipe));
export { CurrencyPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2Zvcm1hdHRlci9jdXJyZW5jeS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDO0lBSWtDLHdDQUFXO0lBSjdDOztJQVFBLENBQUM7Ozs7Ozs7SUFIQyxnQ0FBUzs7Ozs7O0lBQVQsVUFBVSxLQUFVLEVBQUUsTUFBZSxFQUFFLE1BQWU7UUFDcEQsT0FBVSxpQkFBTSxTQUFTLFlBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxjQUFNLENBQUM7SUFDaEQsQ0FBQzs7Z0JBUEYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxXQUFXO2lCQUNsQjs7SUFNRCxtQkFBQztDQUFBLEFBUkQsQ0FJa0MsV0FBVyxHQUk1QztTQUpZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlY2ltYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnY0N1cnJlbmN5J1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5UGlwZSBleHRlbmRzIERlY2ltYWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGRpZ2l0cz86IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gYCR7c3VwZXIudHJhbnNmb3JtKHZhbHVlLCAnMS4wJyl9IFZOxJBgO1xyXG4gIH1cclxufVxyXG4iXX0=