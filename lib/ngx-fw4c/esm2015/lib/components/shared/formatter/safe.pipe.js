/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class SafePipe {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}
SafePipe.decorators = [
    { type: Pipe, args: [{
                name: 'katanaSafe'
            },] }
];
/** @nocollapse */
SafePipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SafePipe.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvZm9ybWF0dGVyL3NhZmUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBTXpELE1BQU0sT0FBTyxRQUFROzs7O0lBQ2pCLFlBQ1ksU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUMvQixDQUFDOzs7OztJQUVMLFNBQVMsQ0FBQyxLQUFVO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUFYSixJQUFJLFNBQUM7Z0JBQ0YsSUFBSSxFQUFFLFlBQVk7YUFDckI7Ozs7WUFKUSxZQUFZOzs7Ozs7O0lBUWIsNkJBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdrYXRhbmFTYWZlJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhZmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iXX0=