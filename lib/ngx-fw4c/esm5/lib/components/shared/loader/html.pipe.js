/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
var HtmlPipe = /** @class */ (function () {
    function HtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    HtmlPipe.prototype.transform = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    HtmlPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'html'
                },] }
    ];
    /** @nocollapse */
    HtmlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return HtmlPipe;
}());
export { HtmlPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HtmlPipe.prototype._sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvbG9hZGVyL2h0bWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBRW5FO0lBSUUsa0JBQW9CLFVBQXdCO1FBQXhCLGVBQVUsR0FBVixVQUFVLENBQWM7SUFDNUMsQ0FBQzs7Ozs7SUFFTSw0QkFBUzs7OztJQUFoQixVQUFpQixDQUFTO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDOztnQkFURixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLE1BQU07aUJBQ2I7Ozs7Z0JBSlEsWUFBWTs7SUFZckIsZUFBQztDQUFBLEFBVkQsSUFVQztTQVBZLFFBQVE7Ozs7OztJQUNQLDhCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2h0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIdG1sUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdHJhbnNmb3JtKHY6IHN0cmluZyk6IFNhZmVIdG1sIHtcclxuICAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodik7XHJcbiAgfVxyXG59Il19