/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalRef } from 'ngx-bootstrap';
import { LoaderComponent } from '../../../loader';
var TemplateComponent = /** @class */ (function () {
    function TemplateComponent(_sanitizationService, _modalRef) {
        this._sanitizationService = _sanitizationService;
        this._modalRef = _modalRef;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    TemplateComponent.prototype.bypassSecurityTrustHtml = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        return this._sanitizationService.bypassSecurityTrustHtml(html);
    };
    /**
     * @return {?}
     */
    TemplateComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.data.cancelCallback) {
            this.data.cancelCallback((/**
             * @return {?}
             */
            function () {
                _this._modalRef.hide();
            }));
        }
        else {
            this._modalRef.hide();
        }
        if (this.data.autoClose != false) {
            this._modalRef.hide();
        }
    };
    /**
     * @return {?}
     */
    TemplateComponent.prototype.accept = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isValid()) {
            if (this.data.acceptCallback) {
                this.loader.componentRef.instance.callback(this.data.mode).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    _this.data.acceptCallback(response, _this.loader.componentRef.instance);
                    _this._modalRef.hide();
                }));
            }
            else {
                this._modalRef.hide();
            }
            if (this.data.autoClose != false) {
                this._modalRef.hide();
            }
        }
    };
    /**
     * @return {?}
     */
    TemplateComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        if (this.loader && this.loader.componentRef && this.loader.componentRef.instance) {
            return this.loader.componentRef.instance.show();
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    TemplateComponent.prototype.isValid = /**
     * @return {?}
     */
    function () {
        if (this.loader && this.loader.componentRef && this.loader.componentRef.instance && this.loader.componentRef.instance.isValid) {
            return this.loader.componentRef.instance.isValid();
        }
        else {
            return false;
        }
    };
    TemplateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-template',
                    template: "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\"><span class=\"{{data?.icon ? data?.icon : 'fa fa-twitter'}}\" style=\"font-size: 30px;\"></span>\r\n    <span style=\"position: absolute;margin: 4px 0px 0px 10px;\">{{data?.title ? data?.title : 'Template'}}</span></h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <katana-loader #loader [data]=\"data?.data\" [template]=\"data?.template\"></katana-loader>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"cancel()\" class=\"btn btn-default\">{{data?.btnCancelTitle ? data?.btnCancelTitle : 'Cancel'}}</button>\r\n  <button [disabled]=\"!isValid()\" (click)=\"accept()\"\r\n    class=\"btn btn-primary\">{{data?.btnAcceptTitle ? data?.btnAcceptTitle : 'Accept'}}</button>\r\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".modal-title{font-size:16px;text-transform:uppercase}.modal-content{border:none!important}"]
                }] }
    ];
    /** @nocollapse */
    TemplateComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: BsModalRef }
    ]; };
    TemplateComponent.propDecorators = {
        loader: [{ type: ViewChild, args: ['loader', { static: true },] }]
    };
    return TemplateComponent;
}());
export { TemplateComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvbW9kYWxzL2NvbXBvbmVudHMvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbEQ7SUFVSSwyQkFDWSxvQkFBa0MsRUFDbkMsU0FBcUI7UUFEcEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFjO1FBQ25DLGNBQVMsR0FBVCxTQUFTLENBQVk7SUFDaEMsQ0FBQzs7Ozs7SUFFTSxtREFBdUI7Ozs7SUFBOUIsVUFBK0IsSUFBWTtRQUN2QyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7O0lBRU0sa0NBQU07OztJQUFiO1FBQUEsaUJBV0M7UUFWRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYzs7O1lBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsQ0FBQyxFQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxFQUFFO1lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7SUFDTCxDQUFDOzs7O0lBRU0sa0NBQU07OztJQUFiO1FBQUEsaUJBZUM7UUFkRyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNoQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxVQUFDLFFBQVE7b0JBQzFFLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdEUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQyxFQUFDLENBQUM7YUFFTjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3pCO1lBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDekI7U0FDSjtJQUNMLENBQUM7Ozs7SUFFTSxnQ0FBSTs7O0lBQVg7UUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQzlFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25EO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7Ozs7SUFFTSxtQ0FBTzs7O0lBQWQ7UUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDM0gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdEQ7YUFBTTtZQUNILE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQzs7Z0JBL0RKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixpd0JBQXdDO29CQUV4QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3hDOzs7O2dCQVZRLFlBQVk7Z0JBQ1osVUFBVTs7O3lCQVlkLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQXdEekMsd0JBQUM7Q0FBQSxBQWhFRCxJQWdFQztTQXpEWSxpQkFBaUI7OztJQUMxQixtQ0FBc0U7O0lBQ3RFLGlDQUErQjs7Ozs7SUFFM0IsaURBQTBDOztJQUMxQyxzQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gZnJvbSAnbmd4LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kYWwubW9kZWwnO1xyXG5pbXBvcnQgeyBMb2FkZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9sb2FkZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2thdGFuYS10ZW1wbGF0ZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGVtcGxhdGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdGVtcGxhdGUuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUNvbXBvbmVudCB7XHJcbiAgICBAVmlld0NoaWxkKCdsb2FkZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgbG9hZGVyOiBMb2FkZXJDb21wb25lbnQ7XHJcbiAgICBwdWJsaWMgZGF0YTogVGVtcGxhdGVWaWV3TW9kZWw7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9zYW5pdGl6YXRpb25TZXJ2aWNlOiBEb21TYW5pdGl6ZXIsXHJcbiAgICAgICAgcHVibGljIF9tb2RhbFJlZjogQnNNb2RhbFJlZikge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sOiBzdHJpbmcpOiBTYWZlSHRtbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nhbml0aXphdGlvblNlcnZpY2UuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbmNlbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLmNhbmNlbENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5jYW5jZWxDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RhbFJlZi5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGFsUmVmLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5hdXRvQ2xvc2UgIT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kYWxSZWYuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmFjY2VwdENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5jb21wb25lbnRSZWYuaW5zdGFuY2UuY2FsbGJhY2sodGhpcy5kYXRhLm1vZGUpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuYWNjZXB0Q2FsbGJhY2socmVzcG9uc2UsIHRoaXMubG9hZGVyLmNvbXBvbmVudFJlZi5pbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9kYWxSZWYuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kYWxSZWYuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuYXV0b0Nsb3NlICE9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RhbFJlZi5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3coKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9hZGVyICYmIHRoaXMubG9hZGVyLmNvbXBvbmVudFJlZiAmJiB0aGlzLmxvYWRlci5jb21wb25lbnRSZWYuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZGVyLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5sb2FkZXIgJiYgdGhpcy5sb2FkZXIuY29tcG9uZW50UmVmICYmIHRoaXMubG9hZGVyLmNvbXBvbmVudFJlZi5pbnN0YW5jZSAmJiB0aGlzLmxvYWRlci5jb21wb25lbnRSZWYuaW5zdGFuY2UuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkZXIuY29tcG9uZW50UmVmLmluc3RhbmNlLmlzVmFsaWQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==