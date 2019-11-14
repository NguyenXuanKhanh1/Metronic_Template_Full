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
                    selector: 'katana-loader',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULElBQUksRUFDSix3QkFBd0IsRUFDeEIsZ0JBQWdCLEVBQ2hCLEtBQUssRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDO0lBWUUseUJBQ1UseUJBQW1ELEVBQ25ELGNBQTZCLEVBQzdCLGlCQUFtQztRQUZuQyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFDN0MsQ0FBQzs7OztJQUVNLHlDQUFlOzs7SUFBdEI7UUFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFTyx5Q0FBZTs7OztJQUF2QjtRQUFBLGlCQW1CQztRQWxCQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZOzs7UUFBQzs7Z0JBQ3pCLE9BQU8sR0FBRyxLQUFJLENBQUMseUJBQXlCLENBQUMsdUJBQXVCLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQztZQUNyRixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEUsSUFBSSxLQUFJLENBQUMsSUFBSSxFQUFFOztvQkFDUCxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNyQyxJQUFJLE1BQU0sRUFBRTtvQkFDVixNQUFNLENBQUMsT0FBTzs7OztvQkFBQyxVQUFDLEtBQUs7d0JBQ25CLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZELENBQUMsRUFBQyxDQUFDO2lCQUNKO2FBQ0Y7WUFDRCxJQUFJLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDbkMsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbkM7O2dCQUNLLE9BQU8sR0FBRyxtQkFBQSxDQUFDLG1CQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUF3QixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFlO1lBQ2hHLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLHlDQUFvQztvQkFDcEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQWRDLHdCQUF3QjtnQkFRakIsYUFBYTtnQkFQcEIsZ0JBQWdCOzs7MkJBZ0JmLEtBQUs7dUJBQ0wsS0FBSzsrQkFDTCxTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFpQzdDLHNCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0FwQ1ksZUFBZTs7O0lBQzFCLG1DQUFvQzs7SUFDcEMsK0JBQTBCOztJQUMxQix1Q0FBNkU7O0lBQzdFLHVDQUF5Qjs7Ozs7SUFHdkIsb0RBQTJEOzs7OztJQUMzRCx5Q0FBcUM7Ozs7O0lBQ3JDLDRDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgVHlwZSxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBJbnB1dCxcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2F0YW5hLWxvYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICdsb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBwdWJsaWMgdGVtcGxhdGU6IFR5cGU8YW55PjtcclxuICBASW5wdXQoKSBwdWJsaWMgZGF0YTogYW55O1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lclJlZicsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBjb250YWluZXJSZWY6IEVsZW1lbnRSZWY7XHJcbiAgcHVibGljIGNvbXBvbmVudFJlZjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBfYWN0aW9uU2VydmljZTogQWN0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDb21wb25lbnQoKSB7XHJcbiAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XHJcbiAgICB0aGlzLl9hY3Rpb25TZXJ2aWNlLmV4ZWN1dGVBc3luYygoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy50ZW1wbGF0ZSk7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgICBjb25zdCBmaWVsZHMgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGEpO1xyXG4gICAgICAgIGlmIChmaWVsZHMpIHtcclxuICAgICAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZVtmaWVsZF0gPSB0aGlzLmRhdGFbZmllbGRdO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5pbml0KSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuaW5pdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSAodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgdGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxufSJdfQ==