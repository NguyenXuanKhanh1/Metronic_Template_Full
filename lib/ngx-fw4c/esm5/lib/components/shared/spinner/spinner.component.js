/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Subscription } from 'rxjs';
var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(router) {
        var _this = this;
        this.router = router;
        this.isSpinnerVisible = true;
        this.subscriptions = new Subscription();
        /** @type {?} */
        var routerSubscription = this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof NavigationStart) {
                _this.isSpinnerVisible = true;
            }
            else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
                _this.isSpinnerVisible = false;
            }
        }), (/**
         * @return {?}
         */
        function () {
            _this.isSpinnerVisible = false;
        }));
        this.subscriptions.add(routerSubscription);
    }
    /**
     * @return {?}
     */
    SpinnerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isSpinnerVisible = false;
        this.subscriptions.unsubscribe();
    };
    SpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-spinner',
                    template: "<div class=\"loading-indicator\" [class.show]=\"isSpinnerVisible\">\r\n  <div class=\"spinner\">\r\n    <div class=\"bounce1\"></div>\r\n    <div class=\"bounce2\"></div>\r\n    <div class=\"bounce3\"></div>\r\n  </div>"
                }] }
    ];
    /** @nocollapse */
    SpinnerComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    return SpinnerComponent;
}());
export { SpinnerComponent };
if (false) {
    /** @type {?} */
    SpinnerComponent.prototype.isSpinnerVisible;
    /**
     * @type {?}
     * @private
     */
    SpinnerComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    SpinnerComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBDO0lBU0UsMEJBQW9CLE1BQWM7UUFBbEMsaUJBV0M7UUFYbUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUgzQixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDdkIsa0JBQWEsR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7WUFHakQsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsS0FBSztZQUM1RCxJQUFJLEtBQUssWUFBWSxlQUFlLEVBQUU7Z0JBQ3BDLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7YUFDOUI7aUJBQU0sSUFBSSxLQUFLLFlBQVksYUFBYSxJQUFJLEtBQUssWUFBWSxnQkFBZ0IsSUFBSSxLQUFLLFlBQVksZUFBZSxFQUFFO2dCQUNsSCxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO2FBQy9CO1FBQ0gsQ0FBQzs7O1FBQUU7WUFDRCxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUMsRUFBQztRQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVNLHNDQUFXOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Z0JBekJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQix1T0FBdUM7aUJBQ3hDOzs7O2dCQU5RLE1BQU07O0lBNkJmLHVCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FyQlksZ0JBQWdCOzs7SUFDM0IsNENBQStCOzs7OztJQUMvQix5Q0FBeUQ7Ozs7O0lBRTdDLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0LCBOYXZpZ2F0aW9uRW5kLCBOYXZpZ2F0aW9uQ2FuY2VsLCBOYXZpZ2F0aW9uRXJyb3IgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2F0YW5hLXNwaW5uZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zcGlubmVyLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBwdWJsaWMgaXNTcGlubmVyVmlzaWJsZSA9IHRydWU7XHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIGNvbnN0IHJvdXRlclN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xyXG4gICAgICAgIHRoaXMuaXNTcGlubmVyVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kIHx8IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkNhbmNlbCB8fCBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvcikge1xyXG4gICAgICAgIHRoaXMuaXNTcGlubmVyVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaXNTcGlubmVyVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKHJvdXRlclN1YnNjcmlwdGlvbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzU3Bpbm5lclZpc2libGUgPSBmYWxzZTtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=