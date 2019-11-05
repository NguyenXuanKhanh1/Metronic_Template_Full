/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Inject, Input } from '@angular/core';
import { AccordionDirective } from './accordion.directive';
export class AccordionLinkDirective {
    /**
     * @param {?} nav
     */
    constructor(nav) {
        this.nav = nav;
    }
    /**
     * @return {?}
     */
    get open() {
        return this._open;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set open(value) {
        this._open = value;
        document.querySelector('.pcoded-inner-navbar').classList.toggle('scroll-sidebar');
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nav.addLink(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    /**
     * @return {?}
     */
    toggle() {
        document.querySelector('.pcoded-inner-navbar').classList.add('scroll-sidebar');
        this.open = !this.open;
    }
}
AccordionLinkDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cAccordionLink]'
            },] }
];
/** @nocollapse */
AccordionLinkDirective.ctorParameters = () => [
    { type: AccordionDirective, decorators: [{ type: Inject, args: [AccordionDirective,] }] }
];
AccordionLinkDirective.propDecorators = {
    group: [{ type: Input }],
    open: [{ type: HostBinding, args: ['class.pcoded-trigger',] }, { type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9ubGluay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9hY2NvcmRpb24vYWNjb3JkaW9ubGluay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBTTNELE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFvQmpDLFlBQXdDLEdBQXVCO1FBQzdELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFwQkQsSUFHSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsSUFBSSxJQUFJLENBQUMsS0FBYztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixRQUFRLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xGLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs7O0lBU00sUUFBUTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFTSxNQUFNO1FBQ1gsUUFBUSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7Ozs7WUFKUSxrQkFBa0IsdUJBMEJaLE1BQU0sU0FBQyxrQkFBa0I7OztvQkFuQnJDLEtBQUs7bUJBQ0wsV0FBVyxTQUFDLHNCQUFzQixjQUNsQyxLQUFLOzs7O0lBRk4sdUNBQTJCOzs7OztJQWdCM0IsdUNBQXlCOzs7OztJQUN6QixxQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbmplY3QsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2FjY29yZGlvbi5kaXJlY3RpdmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbY0FjY29yZGlvbkxpbmtdJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkxpbmtEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgcHVibGljIGdyb3VwOiBhbnk7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wY29kZWQtdHJpZ2dlcicpXHJcbiAgQElucHV0KClcclxuXHJcbiAgZ2V0IG9wZW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3BlbjtcclxuICB9XHJcblxyXG4gIHNldCBvcGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9vcGVuID0gdmFsdWU7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGNvZGVkLWlubmVyLW5hdmJhcicpLmNsYXNzTGlzdC50b2dnbGUoJ3Njcm9sbC1zaWRlYmFyJyk7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5uYXYuY2xvc2VPdGhlckxpbmtzKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIF9vcGVuOiBib29sZWFuO1xyXG4gIHByb3RlY3RlZCBuYXY6IEFjY29yZGlvbkRpcmVjdGl2ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChBY2NvcmRpb25EaXJlY3RpdmUpIG5hdjogQWNjb3JkaW9uRGlyZWN0aXZlKSB7XHJcbiAgICB0aGlzLm5hdiA9IG5hdjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiBhbnkge1xyXG4gICAgdGhpcy5uYXYuYWRkTGluayh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiBhbnkge1xyXG4gICAgdGhpcy5uYXYucmVtb3ZlR3JvdXAodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlKCk6IGFueSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGNvZGVkLWlubmVyLW5hdmJhcicpLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1zaWRlYmFyJyk7XHJcbiAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xyXG4gIH1cclxufVxyXG4iXX0=