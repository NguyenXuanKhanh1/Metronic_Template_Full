/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DecimalPipe } from '@angular/common';
export class FilePipe extends DecimalPipe {
    /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    transform(value, digits, locale) {
        if (!value)
            return '';
        /** @type {?} */
        var name = value.toString();
        /** @type {?} */
        var data = name.split('.');
        if (data.length == 1)
            return `${data[0]}`;
        /** @type {?} */
        var index = name.indexOf(data[data.length - 1]);
        return `${name.substring(0, index - 1)} ${data[data.length - 1]}`;
    }
}
FilePipe.decorators = [
    { type: Pipe, args: [{
                name: 'katanaFile'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvZm9ybWF0dGVyL2ZpbGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTTlDLE1BQU0sT0FBTyxRQUFTLFNBQVEsV0FBVzs7Ozs7OztJQUN2QyxTQUFTLENBQUMsS0FBYSxFQUFFLE1BQWUsRUFBRSxNQUFlO1FBQ3ZELElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTyxFQUFFLENBQUM7O1lBQ2xCLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFOztZQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7O1lBQ3RDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNwRSxDQUFDOzs7WUFaRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFlBQVk7YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlY2ltYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAna2F0YW5hRmlsZSdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlUGlwZSBleHRlbmRzIERlY2ltYWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGRpZ2l0cz86IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gJyc7XHJcbiAgICB2YXIgbmFtZSA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICB2YXIgZGF0YSA9IG5hbWUuc3BsaXQoJy4nKTtcclxuICAgIGlmIChkYXRhLmxlbmd0aCA9PSAxKSByZXR1cm4gYCR7ZGF0YVswXX1gO1xyXG4gICAgdmFyIGluZGV4ID0gbmFtZS5pbmRleE9mKGRhdGFbZGF0YS5sZW5ndGggLSAxXSk7XHJcbiAgICByZXR1cm4gYCR7bmFtZS5zdWJzdHJpbmcoMCwgaW5kZXggLSAxKX0gJHtkYXRhW2RhdGEubGVuZ3RoIC0gMV19YDtcclxuICB9XHJcbn1cclxuIl19