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
                    selector: '[katanaAccordionLink]'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9ubGluay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9hY2NvcmRpb24vYWNjb3JkaW9ubGluay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTNEO0lBd0JFLGdDQUF3QyxHQUF1QjtRQUM3RCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBcEJELHNCQUdJLHdDQUFJOzs7O1FBSFI7WUFJRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7Ozs7UUFFRCxVQUFTLEtBQWM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNsRixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoQztRQUNILENBQUM7OztPQVJBOzs7O0lBaUJNLHlDQUFROzs7SUFBZjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFTSw0Q0FBVzs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVNLHVDQUFNOzs7SUFBYjtRQUNFLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2lCQUNsQzs7OztnQkFKUSxrQkFBa0IsdUJBMEJaLE1BQU0sU0FBQyxrQkFBa0I7Ozt3QkFuQnJDLEtBQUs7dUJBQ0wsV0FBVyxTQUFDLHNCQUFzQixjQUNsQyxLQUFLOztJQWlDUiw2QkFBQztDQUFBLEFBeENELElBd0NDO1NBcENZLHNCQUFzQjs7O0lBQ2pDLHVDQUEyQjs7Ozs7SUFnQjNCLHVDQUF5Qjs7Ozs7SUFDekIscUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5qZWN0LCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9hY2NvcmRpb24uZGlyZWN0aXZlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2thdGFuYUFjY29yZGlvbkxpbmtdJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkxpbmtEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgcHVibGljIGdyb3VwOiBhbnk7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wY29kZWQtdHJpZ2dlcicpXHJcbiAgQElucHV0KClcclxuXHJcbiAgZ2V0IG9wZW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3BlbjtcclxuICB9XHJcblxyXG4gIHNldCBvcGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9vcGVuID0gdmFsdWU7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGNvZGVkLWlubmVyLW5hdmJhcicpLmNsYXNzTGlzdC50b2dnbGUoJ3Njcm9sbC1zaWRlYmFyJyk7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5uYXYuY2xvc2VPdGhlckxpbmtzKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIF9vcGVuOiBib29sZWFuO1xyXG4gIHByb3RlY3RlZCBuYXY6IEFjY29yZGlvbkRpcmVjdGl2ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChBY2NvcmRpb25EaXJlY3RpdmUpIG5hdjogQWNjb3JkaW9uRGlyZWN0aXZlKSB7XHJcbiAgICB0aGlzLm5hdiA9IG5hdjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiBhbnkge1xyXG4gICAgdGhpcy5uYXYuYWRkTGluayh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiBhbnkge1xyXG4gICAgdGhpcy5uYXYucmVtb3ZlR3JvdXAodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlKCk6IGFueSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGNvZGVkLWlubmVyLW5hdmJhcicpLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1zaWRlYmFyJyk7XHJcbiAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xyXG4gIH1cclxufVxyXG4iXX0=