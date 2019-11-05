/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Inject, Input } from '@angular/core';
import { AccordionDirective } from './accordion.directive';
var AccordionLinkDirective = /** @class */ (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "open", {
        get: /**
         * @return {?}
         */
        function () {
            return this._open;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._open = value;
            document.querySelector('.pcoded-inner-navbar').classList.toggle('scroll-sidebar');
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AccordionLinkDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.nav.addLink(this);
    };
    /**
     * @return {?}
     */
    AccordionLinkDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.nav.removeGroup(this);
    };
    /**
     * @return {?}
     */
    AccordionLinkDirective.prototype.toggle = /**
     * @return {?}
     */
    function () {
        document.querySelector('.pcoded-inner-navbar').classList.add('scroll-sidebar');
        this.open = !this.open;
    };
    AccordionLinkDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cAccordionLink]'
                },] }
    ];
    /** @nocollapse */
    AccordionLinkDirective.ctorParameters = function () { return [
        { type: AccordionDirective, decorators: [{ type: Inject, args: [AccordionDirective,] }] }
    ]; };
    AccordionLinkDirective.propDecorators = {
        group: [{ type: Input }],
        open: [{ type: HostBinding, args: ['class.pcoded-trigger',] }, { type: Input }]
    };
    return AccordionLinkDirective;
}());
export { AccordionLinkDirective };
if (false) {
    /** @type {?} */
    AccordionLinkDirective.prototype.group;
    /**
     * @type {?}
     * @protected
     */
    AccordionLinkDirective.prototype._open;
    /**
     * @type {?}
     * @protected
     */
    AccordionLinkDirective.prototype.nav;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9ubGluay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9hY2NvcmRpb24vYWNjb3JkaW9ubGluay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTNEO0lBd0JFLGdDQUF3QyxHQUF1QjtRQUM3RCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBcEJELHNCQUdJLHdDQUFJOzs7O1FBSFI7WUFJRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7Ozs7UUFFRCxVQUFTLEtBQWM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNsRixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoQztRQUNILENBQUM7OztPQVJBOzs7O0lBaUJNLHlDQUFROzs7SUFBZjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFTSw0Q0FBVzs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVNLHVDQUFNOzs7SUFBYjtRQUNFLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7OztnQkFKUSxrQkFBa0IsdUJBMEJaLE1BQU0sU0FBQyxrQkFBa0I7Ozt3QkFuQnJDLEtBQUs7dUJBQ0wsV0FBVyxTQUFDLHNCQUFzQixjQUNsQyxLQUFLOztJQWlDUiw2QkFBQztDQUFBLEFBeENELElBd0NDO1NBcENZLHNCQUFzQjs7O0lBQ2pDLHVDQUEyQjs7Ozs7SUFnQjNCLHVDQUF5Qjs7Ozs7SUFDekIscUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5qZWN0LCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9hY2NvcmRpb24uZGlyZWN0aXZlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2NBY2NvcmRpb25MaW5rXSdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25MaW5rRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBncm91cDogYW55O1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MucGNvZGVkLXRyaWdnZXInKVxyXG4gIEBJbnB1dCgpXHJcblxyXG4gIGdldCBvcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX29wZW47XHJcbiAgfVxyXG5cclxuICBzZXQgb3Blbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fb3BlbiA9IHZhbHVlO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBjb2RlZC1pbm5lci1uYXZiYXInKS5jbGFzc0xpc3QudG9nZ2xlKCdzY3JvbGwtc2lkZWJhcicpO1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMubmF2LmNsb3NlT3RoZXJMaW5rcyh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfb3BlbjogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgbmF2OiBBY2NvcmRpb25EaXJlY3RpdmU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQWNjb3JkaW9uRGlyZWN0aXZlKSBuYXY6IEFjY29yZGlvbkRpcmVjdGl2ZSkge1xyXG4gICAgdGhpcy5uYXYgPSBuYXY7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogYW55IHtcclxuICAgIHRoaXMubmF2LmFkZExpbmsodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogYW55IHtcclxuICAgIHRoaXMubmF2LnJlbW92ZUdyb3VwKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZSgpOiBhbnkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBjb2RlZC1pbm5lci1uYXZiYXInKS5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtc2lkZWJhcicpO1xyXG4gICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcclxuICB9XHJcbn1cclxuIl19