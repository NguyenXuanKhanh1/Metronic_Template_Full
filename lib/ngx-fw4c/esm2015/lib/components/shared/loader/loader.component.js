/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Type, ComponentFactoryResolver, ViewContainerRef, Input, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { ActionService } from '../services';
export class LoaderComponent {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _actionService
     * @param {?} _viewContainerRef
     */
    constructor(_componentFactoryResolver, _actionService, _viewContainerRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._actionService = _actionService;
        this._viewContainerRef = _viewContainerRef;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.createComponent();
    }
    /**
     * @private
     * @return {?}
     */
    createComponent() {
        this._viewContainerRef.clear();
        this._actionService.executeAsync((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const factory = this._componentFactoryResolver.resolveComponentFactory(this.template);
            this.componentRef = this._viewContainerRef.createComponent(factory);
            if (this.data) {
                /** @type {?} */
                const fields = Object.keys(this.data);
                if (fields) {
                    fields.forEach((/**
                     * @param {?} field
                     * @return {?}
                     */
                    (field) => {
                        this.componentRef.instance[field] = this.data[field];
                    }));
                }
            }
            if (this.componentRef.instance.init) {
                this.componentRef.instance.init();
            }
            /** @type {?} */
            const element = (/** @type {?} */ (((/** @type {?} */ (this.componentRef.hostView))).rootNodes[0]));
            this.containerRef.nativeElement.appendChild(element);
        }));
    }
}
LoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'c-loader',
                template: "<div #containerRef>\r\n</div>",
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
LoaderComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ActionService },
    { type: ViewContainerRef }
];
LoaderComponent.propDecorators = {
    template: [{ type: Input }],
    data: [{ type: Input }],
    containerRef: [{ type: ViewChild, args: ['containerRef', { static: true },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULElBQUksRUFDSix3QkFBd0IsRUFDeEIsZ0JBQWdCLEVBQ2hCLEtBQUssRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBUTVDLE1BQU0sT0FBTyxlQUFlOzs7Ozs7SUFNMUIsWUFDVSx5QkFBbUQsRUFDbkQsY0FBNkIsRUFDN0IsaUJBQW1DO1FBRm5DLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMEI7UUFDbkQsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtJQUM3QyxDQUFDOzs7O0lBRU0sZUFBZTtRQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFTyxlQUFlO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVk7OztRQUFDLEdBQUcsRUFBRTs7a0JBQzlCLE9BQU8sR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNyRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFOztzQkFDUCxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNyQyxJQUFJLE1BQU0sRUFBRTtvQkFDVixNQUFNLENBQUMsT0FBTzs7OztvQkFBQyxDQUFDLEtBQUssRUFBRSxFQUFFO3dCQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2RCxDQUFDLEVBQUMsQ0FBQztpQkFDSjthQUNGO1lBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ25DOztrQkFDSyxPQUFPLEdBQUcsbUJBQUEsQ0FBQyxtQkFBQSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBd0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBZTtZQUNoRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQix5Q0FBb0M7Z0JBQ3BDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBZEMsd0JBQXdCO1lBUWpCLGFBQWE7WUFQcEIsZ0JBQWdCOzs7dUJBZ0JmLEtBQUs7bUJBQ0wsS0FBSzsyQkFDTCxTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQUYzQyxtQ0FBb0M7O0lBQ3BDLCtCQUEwQjs7SUFDMUIsdUNBQTZFOztJQUM3RSx1Q0FBeUI7Ozs7O0lBR3ZCLG9EQUEyRDs7Ozs7SUFDM0QseUNBQXFDOzs7OztJQUNyQyw0Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFR5cGUsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgSW5wdXQsXHJcbiAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2MtbG9hZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJ2xvYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0ZW1wbGF0ZTogVHlwZTxhbnk+O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBhbnk7XHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyUmVmJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIGNvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcclxuICBwdWJsaWMgY29tcG9uZW50UmVmOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIF9hY3Rpb25TZXJ2aWNlOiBBY3Rpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUNvbXBvbmVudCgpIHtcclxuICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcclxuICAgIHRoaXMuX2FjdGlvblNlcnZpY2UuZXhlY3V0ZUFzeW5jKCgpID0+IHtcclxuICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLnRlbXBsYXRlKTtcclxuICAgICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcclxuICAgICAgaWYgKHRoaXMuZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YSk7XHJcbiAgICAgICAgaWYgKGZpZWxkcykge1xyXG4gICAgICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlW2ZpZWxkXSA9IHRoaXMuZGF0YVtmaWVsZF07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmluaXQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5pbml0KCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZWxlbWVudCA9ICh0aGlzLmNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59Il19