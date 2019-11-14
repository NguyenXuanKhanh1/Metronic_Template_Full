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
                    name: 'katanaCurrency'
                },] }
    ];
    return CurrencyPipe;
}(DecimalPipe));
export { CurrencyPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2Zvcm1hdHRlci9jdXJyZW5jeS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDO0lBSWtDLHdDQUFXO0lBSjdDOztJQVFBLENBQUM7Ozs7Ozs7SUFIQyxnQ0FBUzs7Ozs7O0lBQVQsVUFBVSxLQUFVLEVBQUUsTUFBZSxFQUFFLE1BQWU7UUFDcEQsT0FBVSxpQkFBTSxTQUFTLFlBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxjQUFNLENBQUM7SUFDaEQsQ0FBQzs7Z0JBUEYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxnQkFBZ0I7aUJBQ3ZCOztJQU1ELG1CQUFDO0NBQUEsQUFSRCxDQUlrQyxXQUFXLEdBSTVDO1NBSlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdrYXRhbmFDdXJyZW5jeSdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVBpcGUgZXh0ZW5kcyBEZWNpbWFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBkaWdpdHM/OiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgcmV0dXJuIGAke3N1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgJzEuMCcpfSBWTsSQYDtcclxuICB9XHJcbn1cclxuIl19