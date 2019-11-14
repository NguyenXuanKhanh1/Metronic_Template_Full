/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DecimalPipe } from '@angular/common';
var FilePipe = /** @class */ (function (_super) {
    tslib_1.__extends(FilePipe, _super);
    function FilePipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    FilePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    function (value, digits, locale) {
        if (!value)
            return '';
        /** @type {?} */
        var name = value.toString();
        /** @type {?} */
        var data = name.split('.');
        if (data.length == 1)
            return "" + data[0];
        /** @type {?} */
        var index = name.indexOf(data[data.length - 1]);
        return name.substring(0, index - 1) + " " + data[data.length - 1];
    };
    FilePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'katanaFile'
                },] }
    ];
    return FilePipe;
}(DecimalPipe));
export { FilePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvZm9ybWF0dGVyL2ZpbGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU5QztJQUk4QixvQ0FBVztJQUp6Qzs7SUFhQSxDQUFDOzs7Ozs7O0lBUkMsNEJBQVM7Ozs7OztJQUFULFVBQVUsS0FBYSxFQUFFLE1BQWUsRUFBRSxNQUFlO1FBQ3ZELElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTyxFQUFFLENBQUM7O1lBQ2xCLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFOztZQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPLEtBQUcsSUFBSSxDQUFDLENBQUMsQ0FBRyxDQUFDOztZQUN0QyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQyxPQUFVLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsU0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUcsQ0FBQztJQUNwRSxDQUFDOztnQkFaRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFlBQVk7aUJBQ25COztJQVdELGVBQUM7Q0FBQSxBQWJELENBSThCLFdBQVcsR0FTeEM7U0FUWSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEZWNpbWFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2thdGFuYUZpbGUnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVBpcGUgZXh0ZW5kcyBEZWNpbWFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBkaWdpdHM/OiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnO1xyXG4gICAgdmFyIG5hbWUgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgdmFyIGRhdGEgPSBuYW1lLnNwbGl0KCcuJyk7XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPT0gMSkgcmV0dXJuIGAke2RhdGFbMF19YDtcclxuICAgIHZhciBpbmRleCA9IG5hbWUuaW5kZXhPZihkYXRhW2RhdGEubGVuZ3RoIC0gMV0pO1xyXG4gICAgcmV0dXJuIGAke25hbWUuc3Vic3RyaW5nKDAsIGluZGV4IC0gMSl9ICR7ZGF0YVtkYXRhLmxlbmd0aCAtIDFdfWA7XHJcbiAgfVxyXG59XHJcbiJdfQ==