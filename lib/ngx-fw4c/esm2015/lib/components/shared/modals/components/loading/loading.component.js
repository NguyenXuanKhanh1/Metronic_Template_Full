/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { LoadingViewModel } from '../../modal.model';
export class LoadingComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.option)
            this.option = new LoadingViewModel();
    }
}
LoadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'c-loading',
                template: "<ng-container *ngIf=\"option?.template then custom; else default\"></ng-container>\r\n\r\n<ng-template #custom>\r\n  <ng4-loading-spinner [threshold]=\"option?.threshold\" [timeout]=\"option?.timeout\" [template]=\"option?.template\"\r\n    [loadingText]=\"option?.loadingText\" [zIndex]=\"9999\">\r\n  </ng4-loading-spinner>\r\n</ng-template>\r\n\r\n<ng-template #default>\r\n  <ng4-loading-spinner [threshold]=\"option?.threshold\" [timeout]=\"option?.timeout\"\r\n    [loadingText]=\"option?.loadingText\" [zIndex]=\"9999\"></ng4-loading-spinner>\r\n</ng-template>",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
LoadingComponent.propDecorators = {
    option: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LoadingComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9tb2RhbHMvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVNyRCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBR3pCLFFBQVE7UUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztJQUMzRCxDQUFDOzs7WUFaSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLG1rQkFBdUM7Z0JBRXZDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN4Qzs7O3FCQUdJLEtBQUs7Ozs7SUFBTixrQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvYWRpbmdWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi9tb2RhbC5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYy1sb2FkaW5nJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2xvYWRpbmcuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBvcHRpb246IExvYWRpbmdWaWV3TW9kZWw7XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbikgdGhpcy5vcHRpb24gPSBuZXcgTG9hZGluZ1ZpZXdNb2RlbCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==