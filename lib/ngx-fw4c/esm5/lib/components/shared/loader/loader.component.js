/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Type, ComponentFactoryResolver, ViewContainerRef, Input, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { ActionService } from '../services';
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(_componentFactoryResolver, _actionService, _viewContainerRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._actionService = _actionService;
        this._viewContainerRef = _viewContainerRef;
    }
    /**
     * @return {?}
     */
    LoaderComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.createComponent();
    };
    /**
     * @private
     * @return {?}
     */
    LoaderComponent.prototype.createComponent = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._viewContainerRef.clear();
        this._actionService.executeAsync((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var factory = _this._componentFactoryResolver.resolveComponentFactory(_this.template);
            _this.componentRef = _this._viewContainerRef.createComponent(factory);
            if (_this.data) {
                /** @type {?} */
                var fields = Object.keys(_this.data);
                if (fields) {
                    fields.forEach((/**
                     * @param {?} field
                     * @return {?}
                     */
                    function (field) {
                        _this.componentRef.instance[field] = _this.data[field];
                    }));
                }
            }
            if (_this.componentRef.instance.init) {
                _this.componentRef.instance.init();
            }
            /** @type {?} */
            var element = (/** @type {?} */ (((/** @type {?} */ (_this.componentRef.hostView))).rootNodes[0]));
            _this.containerRef.nativeElement.appendChild(element);
        }));
    };
    LoaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c-loader',
                    template: "<div #containerRef>\r\n</div>",
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    LoaderComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ActionService },
        { type: ViewContainerRef }
    ]; };
    LoaderComponent.propDecorators = {
        template: [{ type: Input }],
        data: [{ type: Input }],
        containerRef: [{ type: ViewChild, args: ['containerRef', { static: true },] }]
    };
    return LoaderComponent;
}());
export { LoaderComponent };
if (false) {
    /** @type {?} */
    LoaderComponent.prototype.template;
    /** @type {?} */
    LoaderComponent.prototype.data;
    /** @type {?} */
    LoaderComponent.prototype.containerRef;
    /** @type {?} */
    LoaderComponent.prototype.componentRef;
    /**
     * @type {?}
     * @private
     */
    LoaderComponent.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    LoaderComponent.prototype._actionService;
    /**
     * @type {?}
     * @private
     */
    LoaderComponent.prototype._viewContainerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULElBQUksRUFDSix3QkFBd0IsRUFDeEIsZ0JBQWdCLEVBQ2hCLEtBQUssRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDO0lBWUUseUJBQ1UseUJBQW1ELEVBQ25ELGNBQTZCLEVBQzdCLGlCQUFtQztRQUZuQyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFDN0MsQ0FBQzs7OztJQUVNLHlDQUFlOzs7SUFBdEI7UUFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFTyx5Q0FBZTs7OztJQUF2QjtRQUFBLGlCQW1CQztRQWxCQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZOzs7UUFBQzs7Z0JBQ3pCLE9BQU8sR0FBRyxLQUFJLENBQUMseUJBQXlCLENBQUMsdUJBQXVCLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQztZQUNyRixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEUsSUFBSSxLQUFJLENBQUMsSUFBSSxFQUFFOztvQkFDUCxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNyQyxJQUFJLE1BQU0sRUFBRTtvQkFDVixNQUFNLENBQUMsT0FBTzs7OztvQkFBQyxVQUFDLEtBQUs7d0JBQ25CLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZELENBQUMsRUFBQyxDQUFDO2lCQUNKO2FBQ0Y7WUFDRCxJQUFJLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDbkMsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbkM7O2dCQUNLLE9BQU8sR0FBRyxtQkFBQSxDQUFDLG1CQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUF3QixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFlO1lBQ2hHLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLHlDQUFvQztvQkFDcEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQWRDLHdCQUF3QjtnQkFRakIsYUFBYTtnQkFQcEIsZ0JBQWdCOzs7MkJBZ0JmLEtBQUs7dUJBQ0wsS0FBSzsrQkFDTCxTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFpQzdDLHNCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0FwQ1ksZUFBZTs7O0lBQzFCLG1DQUFvQzs7SUFDcEMsK0JBQTBCOztJQUMxQix1Q0FBNkU7O0lBQzdFLHVDQUF5Qjs7Ozs7SUFHdkIsb0RBQTJEOzs7OztJQUMzRCx5Q0FBcUM7Ozs7O0lBQ3JDLDRDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgVHlwZSxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBJbnB1dCxcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYy1sb2FkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgcHVibGljIHRlbXBsYXRlOiBUeXBlPGFueT47XHJcbiAgQElucHV0KCkgcHVibGljIGRhdGE6IGFueTtcclxuICBAVmlld0NoaWxkKCdjb250YWluZXJSZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgY29udGFpbmVyUmVmOiBFbGVtZW50UmVmO1xyXG4gIHB1YmxpYyBjb21wb25lbnRSZWY6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgX2FjdGlvblNlcnZpY2U6IEFjdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQ29tcG9uZW50KCkge1xyXG4gICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xyXG4gICAgdGhpcy5fYWN0aW9uU2VydmljZS5leGVjdXRlQXN5bmMoKCkgPT4ge1xyXG4gICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMudGVtcGxhdGUpO1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xyXG4gICAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgICAgY29uc3QgZmllbGRzID0gT2JqZWN0LmtleXModGhpcy5kYXRhKTtcclxuICAgICAgICBpZiAoZmllbGRzKSB7XHJcbiAgICAgICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2VbZmllbGRdID0gdGhpcy5kYXRhW2ZpZWxkXTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuaW5pdCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmluaXQoKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBlbGVtZW50ID0gKHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iXX0=