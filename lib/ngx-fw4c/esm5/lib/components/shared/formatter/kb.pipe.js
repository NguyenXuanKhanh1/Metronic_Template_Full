/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DecimalPipe } from '@angular/common';
var KbPipe = /** @class */ (function (_super) {
    tslib_1.__extends(KbPipe, _super);
    function KbPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    KbPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    function (value, digits, locale) {
        return _super.prototype.transform.call(this, Math.round(value / 1024), '1.0') + " KB";
    };
    KbPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'katanaKb'
                },] }
    ];
    return KbPipe;
}(DecimalPipe));
export { KbPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2IucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2Zvcm1hdHRlci9rYi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDO0lBSTRCLGtDQUFXO0lBSnZDOztJQVFBLENBQUM7Ozs7Ozs7SUFIQywwQkFBUzs7Ozs7O0lBQVQsVUFBVSxLQUFhLEVBQUUsTUFBZSxFQUFFLE1BQWU7UUFDdkQsT0FBVSxpQkFBTSxTQUFTLFlBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLFFBQUssQ0FBQztJQUNsRSxDQUFDOztnQkFQRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFVBQVU7aUJBQ2pCOztJQU1ELGFBQUM7Q0FBQSxBQVJELENBSTRCLFdBQVcsR0FJdEM7U0FKWSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEZWNpbWFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2thdGFuYUtiJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEtiUGlwZSBleHRlbmRzIERlY2ltYWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIsIGRpZ2l0cz86IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gYCR7c3VwZXIudHJhbnNmb3JtKE1hdGgucm91bmQodmFsdWUgLyAxMDI0KSwgJzEuMCcpfSBLQmA7XHJcbiAgfVxyXG59XHJcbiJdfQ==