/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalRef } from 'ngx-bootstrap';
import { LoaderComponent } from '../../../loader';
export class TemplateComponent {
    /**
     * @param {?} _sanitizationService
     * @param {?} _modalRef
     */
    constructor(_sanitizationService, _modalRef) {
        this._sanitizationService = _sanitizationService;
        this._modalRef = _modalRef;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    bypassSecurityTrustHtml(html) {
        return this._sanitizationService.bypassSecurityTrustHtml(html);
    }
    /**
     * @return {?}
     */
    cancel() {
        if (this.data.cancelCallback) {
            this.data.cancelCallback((/**
             * @return {?}
             */
            () => {
                this._modalRef.hide();
            }));
        }
        else {
            this._modalRef.hide();
        }
        if (this.data.autoClose != false) {
            this._modalRef.hide();
        }
    }
    /**
     * @return {?}
     */
    accept() {
        if (this.isValid()) {
            if (this.data.acceptCallback) {
                this.loader.componentRef.instance.callback(this.data.mode).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                (response) => {
                    this.data.acceptCallback(response, this.loader.componentRef.instance);
                    this._modalRef.hide();
                }));
            }
            else {
                this._modalRef.hide();
            }
            if (this.data.autoClose != false) {
                this._modalRef.hide();
            }
        }
    }
    /**
     * @return {?}
     */
    show() {
        if (this.loader && this.loader.componentRef && this.loader.componentRef.instance) {
            return this.loader.componentRef.instance.show();
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    isValid() {
        if (this.loader && this.loader.componentRef && this.loader.componentRef.instance) {
            return this.loader.componentRef.instance.isValid();
        }
        else {
            return false;
        }
    }
}
TemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'c-template',
                template: "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\"><span class=\"{{data?.icon ? data?.icon : 'fa fa-twitter'}}\" style=\"font-size: 30px;\"></span>\r\n    <span style=\"position: absolute;margin: 4px 0px 0px 10px;\">{{data?.title ? data?.title : 'Template'}}</span></h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <c-loader #loader [data]=\"data?.data\" [template]=\"data?.template\"></c-loader>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"cancel()\" class=\"btn btn-default\">{{data?.btnCancelTitle ? data?.btnCancelTitle : 'Cancel'}}</button>\r\n  <button [disabled]=\"!isValid()\" (click)=\"accept()\"\r\n    class=\"btn btn-primary\">{{data?.btnAcceptTitle ? data?.btnAcceptTitle : 'Accept'}}</button>\r\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".modal-title{font-size:16px;text-transform:uppercase}.modal-content{border:none!important}"]
            }] }
];
/** @nocollapse */
TemplateComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: BsModalRef }
];
TemplateComponent.propDecorators = {
    loader: [{ type: ViewChild, args: ['loader', { static: true },] }]
};
if (false) {
    /** @type {?} */
    TemplateComponent.prototype.loader;
    /** @type {?} */
    TemplateComponent.prototype.data;
    /**
     * @type {?}
     * @private
     */
    TemplateComponent.prototype._sanitizationService;
    /** @type {?} */
    TemplateComponent.prototype._modalRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvbW9kYWxzL2NvbXBvbmVudHMvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTbEQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFHMUIsWUFDWSxvQkFBa0MsRUFDbkMsU0FBcUI7UUFEcEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFjO1FBQ25DLGNBQVMsR0FBVCxTQUFTLENBQVk7SUFDaEMsQ0FBQzs7Ozs7SUFFTSx1QkFBdUIsQ0FBQyxJQUFZO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFTSxNQUFNO1FBQ1QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWM7OztZQUFDLEdBQUcsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMxQixDQUFDLEVBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7Ozs7SUFFTSxNQUFNO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDaEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVM7Ozs7Z0JBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtvQkFDOUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMxQixDQUFDLEVBQUMsQ0FBQzthQUVOO2lCQUFNO2dCQUNILElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDekI7WUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN6QjtTQUNKO0lBQ0wsQ0FBQzs7OztJQUVNLElBQUk7UUFDUCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQzlFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25EO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7Ozs7SUFFTSxPQUFPO1FBQ1YsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtZQUM5RSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN0RDthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFDTCxDQUFDOzs7WUEvREosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxZQUFZO2dCQUN0Qix1dkJBQXdDO2dCQUV4QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDeEM7Ozs7WUFWUSxZQUFZO1lBQ1osVUFBVTs7O3FCQVlkLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBQXJDLG1DQUFzRTs7SUFDdEUsaUNBQStCOzs7OztJQUUzQixpREFBMEM7O0lBQzFDLHNDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEJzTW9kYWxSZWYgfSBmcm9tICduZ3gtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgVGVtcGxhdGVWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi9tb2RhbC5tb2RlbCc7XHJcbmltcG9ydCB7IExvYWRlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2xvYWRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYy10ZW1wbGF0ZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGVtcGxhdGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdGVtcGxhdGUuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUNvbXBvbmVudCB7XHJcbiAgICBAVmlld0NoaWxkKCdsb2FkZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgbG9hZGVyOiBMb2FkZXJDb21wb25lbnQ7XHJcbiAgICBwdWJsaWMgZGF0YTogVGVtcGxhdGVWaWV3TW9kZWw7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9zYW5pdGl6YXRpb25TZXJ2aWNlOiBEb21TYW5pdGl6ZXIsXHJcbiAgICAgICAgcHVibGljIF9tb2RhbFJlZjogQnNNb2RhbFJlZikge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sOiBzdHJpbmcpOiBTYWZlSHRtbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nhbml0aXphdGlvblNlcnZpY2UuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbmNlbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLmNhbmNlbENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5jYW5jZWxDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RhbFJlZi5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGFsUmVmLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5hdXRvQ2xvc2UgIT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kYWxSZWYuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmFjY2VwdENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5jb21wb25lbnRSZWYuaW5zdGFuY2UuY2FsbGJhY2sodGhpcy5kYXRhLm1vZGUpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuYWNjZXB0Q2FsbGJhY2socmVzcG9uc2UsIHRoaXMubG9hZGVyLmNvbXBvbmVudFJlZi5pbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9kYWxSZWYuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kYWxSZWYuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuYXV0b0Nsb3NlICE9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RhbFJlZi5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3coKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9hZGVyICYmIHRoaXMubG9hZGVyLmNvbXBvbmVudFJlZiAmJiB0aGlzLmxvYWRlci5jb21wb25lbnRSZWYuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZGVyLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5sb2FkZXIgJiYgdGhpcy5sb2FkZXIuY29tcG9uZW50UmVmICYmIHRoaXMubG9hZGVyLmNvbXBvbmVudFJlZi5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkZXIuY29tcG9uZW50UmVmLmluc3RhbmNlLmlzVmFsaWQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==