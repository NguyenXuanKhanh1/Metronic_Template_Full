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
                selector: '[katanaAccordionLink]'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9ubGluay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9hY2NvcmRpb24vYWNjb3JkaW9ubGluay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBTTNELE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFvQmpDLFlBQXdDLEdBQXVCO1FBQzdELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFwQkQsSUFHSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsSUFBSSxJQUFJLENBQUMsS0FBYztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixRQUFRLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xGLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs7O0lBU00sUUFBUTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFTSxNQUFNO1FBQ1gsUUFBUSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7YUFDbEM7Ozs7WUFKUSxrQkFBa0IsdUJBMEJaLE1BQU0sU0FBQyxrQkFBa0I7OztvQkFuQnJDLEtBQUs7bUJBQ0wsV0FBVyxTQUFDLHNCQUFzQixjQUNsQyxLQUFLOzs7O0lBRk4sdUNBQTJCOzs7OztJQWdCM0IsdUNBQXlCOzs7OztJQUN6QixxQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbmplY3QsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2FjY29yZGlvbi5kaXJlY3RpdmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdba2F0YW5hQWNjb3JkaW9uTGlua10nXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uTGlua0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBwdWJsaWMgZ3JvdXA6IGFueTtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnBjb2RlZC10cmlnZ2VyJylcclxuICBASW5wdXQoKVxyXG5cclxuICBnZXQgb3BlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9vcGVuO1xyXG4gIH1cclxuXHJcbiAgc2V0IG9wZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX29wZW4gPSB2YWx1ZTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wY29kZWQtaW5uZXItbmF2YmFyJykuY2xhc3NMaXN0LnRvZ2dsZSgnc2Nyb2xsLXNpZGViYXInKTtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLm5hdi5jbG9zZU90aGVyTGlua3ModGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgX29wZW46IGJvb2xlYW47XHJcbiAgcHJvdGVjdGVkIG5hdjogQWNjb3JkaW9uRGlyZWN0aXZlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEFjY29yZGlvbkRpcmVjdGl2ZSkgbmF2OiBBY2NvcmRpb25EaXJlY3RpdmUpIHtcclxuICAgIHRoaXMubmF2ID0gbmF2O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IGFueSB7XHJcbiAgICB0aGlzLm5hdi5hZGRMaW5rKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6IGFueSB7XHJcbiAgICB0aGlzLm5hdi5yZW1vdmVHcm91cCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGUoKTogYW55IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wY29kZWQtaW5uZXItbmF2YmFyJykuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLXNpZGViYXInKTtcclxuICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XHJcbiAgfVxyXG59XHJcbiJdfQ==