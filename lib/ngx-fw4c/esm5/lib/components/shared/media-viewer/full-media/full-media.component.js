/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaItem } from '../../models/base.model';
var FullMediaComponent = /** @class */ (function () {
    function FullMediaComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    FullMediaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.videoPlayerHtml = this.generateHtml();
    };
    /**
     * @private
     * @return {?}
     */
    FullMediaComponent.prototype.generateHtml = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isExternal = /(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/.test(this.model.fullSrc);
        /** @type {?} */
        var videoTag = '';
        if (isExternal) {
            /** @type {?} */
            var match = /(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/.exec(this.model.fullSrc);
            /** @type {?} */
            var videoId = match[1];
            videoTag = "<iframe  style=\"width:100%; min-height: 500px;\"  src=\"https://www.youtube.com/embed/" + videoId + "\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>";
        }
        else {
            videoTag = "<video controls style=\"width:100%\"><source src=\"" + this.model.fullSrc + "\" type=\"video/mp4\"></video>";
        }
        return this.sanitizer.bypassSecurityTrustHtml(videoTag);
    };
    FullMediaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-full-media',
                    template: "<div [innerHTML]=\"videoPlayerHtml\"></div>\r\n"
                }] }
    ];
    /** @nocollapse */
    FullMediaComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    FullMediaComponent.propDecorators = {
        model: [{ type: Input }]
    };
    return FullMediaComponent;
}());
export { FullMediaComponent };
if (false) {
    /** @type {?} */
    FullMediaComponent.prototype.model;
    /** @type {?} */
    FullMediaComponent.prototype.videoPlayerHtml;
    /**
     * @type {?}
     * @private
     */
    FullMediaComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1tZWRpYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9tZWRpYS12aWV3ZXIvZnVsbC1tZWRpYS9mdWxsLW1lZGlhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVwRDtJQVdFLDRCQUNVLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDN0IsQ0FBQzs7OztJQUVMLHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRU8seUNBQVk7Ozs7SUFBcEI7O1lBQ1EsVUFBVSxHQUFHLHlDQUF5QyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7WUFFakYsUUFBUSxHQUFHLEVBQUU7UUFDakIsSUFBSSxVQUFVLEVBQUU7O2dCQUNSLEtBQUssR0FBRyx5Q0FBeUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7O2dCQUMxRSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN4QixRQUFRLEdBQUcsNEZBQXVGLE9BQU8sdUZBQStFLENBQUM7U0FDMUw7YUFBTTtZQUNMLFFBQVEsR0FBRyx3REFBbUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLG1DQUE2QixDQUFDO1NBQy9HO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFELENBQUM7O2dCQWhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsMkRBQTBDO2lCQUUzQzs7OztnQkFQUSxZQUFZOzs7d0JBVWxCLEtBQUs7O0lBMEJSLHlCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0EzQlksa0JBQWtCOzs7SUFDN0IsbUNBQTBCOztJQUUxQiw2Q0FBMEI7Ozs7O0lBR3hCLHVDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IE1lZGlhSXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2F0YW5hLWZ1bGwtbWVkaWEnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mdWxsLW1lZGlhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRnVsbE1lZGlhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBtb2RlbDogTWVkaWFJdGVtO1xyXG5cclxuICB2aWRlb1BsYXllckh0bWw6IFNhZmVIdG1sO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudmlkZW9QbGF5ZXJIdG1sID0gdGhpcy5nZW5lcmF0ZUh0bWwoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuZXJhdGVIdG1sKCk6IFNhZmVIdG1sIHtcclxuICAgIGNvbnN0IGlzRXh0ZXJuYWwgPSAvKD86bVxcLik/eW91dHViZVxcLmNvbVxcL3dhdGNoXFw/dj0oW1xcdy1dKykvLnRlc3QodGhpcy5tb2RlbC5mdWxsU3JjKTtcclxuXHJcbiAgICBsZXQgdmlkZW9UYWcgPSAnJztcclxuICAgIGlmIChpc0V4dGVybmFsKSB7XHJcbiAgICAgIGNvbnN0IG1hdGNoID0gLyg/Om1cXC4pP3lvdXR1YmVcXC5jb21cXC93YXRjaFxcP3Y9KFtcXHctXSspLy5leGVjKHRoaXMubW9kZWwuZnVsbFNyYyk7XHJcbiAgICAgIGNvbnN0IHZpZGVvSWQgPSBtYXRjaFsxXTtcclxuICAgICAgdmlkZW9UYWcgPSBgPGlmcmFtZSAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBtaW4taGVpZ2h0OiA1MDBweDtcIiAgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lkfVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmlkZW9UYWcgPSBgPHZpZGVvIGNvbnRyb2xzIHN0eWxlPVwid2lkdGg6MTAwJVwiPjxzb3VyY2Ugc3JjPVwiJHt0aGlzLm1vZGVsLmZ1bGxTcmN9XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvdmlkZW8+YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodmlkZW9UYWcpO1xyXG4gIH1cclxufVxyXG4iXX0=