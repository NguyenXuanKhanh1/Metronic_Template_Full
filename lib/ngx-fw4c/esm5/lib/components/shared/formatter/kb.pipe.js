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
                    name: 'cKb'
                },] }
    ];
    return KbPipe;
}(DecimalPipe));
export { KbPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2IucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2Zvcm1hdHRlci9rYi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDO0lBSTRCLGtDQUFXO0lBSnZDOztJQVFBLENBQUM7Ozs7Ozs7SUFIQywwQkFBUzs7Ozs7O0lBQVQsVUFBVSxLQUFhLEVBQUUsTUFBZSxFQUFFLE1BQWU7UUFDdkQsT0FBVSxpQkFBTSxTQUFTLFlBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLFFBQUssQ0FBQztJQUNsRSxDQUFDOztnQkFQRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLEtBQUs7aUJBQ1o7O0lBTUQsYUFBQztDQUFBLEFBUkQsQ0FJNEIsV0FBVyxHQUl0QztTQUpZLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlY2ltYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnY0tiJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEtiUGlwZSBleHRlbmRzIERlY2ltYWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIsIGRpZ2l0cz86IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gYCR7c3VwZXIudHJhbnNmb3JtKE1hdGgucm91bmQodmFsdWUgLyAxMDI0KSwgJzEuMCcpfSBLQmA7XHJcbiAgfVxyXG59XHJcbiJdfQ==