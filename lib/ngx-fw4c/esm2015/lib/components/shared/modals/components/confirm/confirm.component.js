/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalRef } from 'ngx-bootstrap';
export class ConfirmComponent {
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
        if (this.data.acceptCallback) {
            this.data.acceptCallback((/**
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
}
ConfirmComponent.decorators = [
    { type: Component, args: [{
                selector: 'c-confirm',
                template: "<div class=\"modal-header \">\r\n  <h4 class=\"modal-title\"><span class=\"fa fa-question-circle-o\" style=\"font-size: 30px;\"></span> <span\r\n      style=\"position: absolute;margin: 4px 0px 0px 10px;\">{{data?.title ? data?.title : 'Confirm'}}</span></h4>\r\n</div>\r\n<div class=\"modal-body justify-content-center\">\r\n  <p class=\"text-center text-font-14  text-muted\" [innerHTML]=\"data?.message\"></p>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"cancel()\" class=\"btn btn-link\">{{data?.btnCancelTitle ? data?.btnCancelTitle : 'Cancel'}}</button>\r\n  <button (click)=\"accept()\" class=\"btn btn-primary\">{{data?.btnAcceptTitle ? data?.btnAcceptTitle : 'Accept'}}</button>\r\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".modal-title{font-size:16px;text-transform:uppercase}.modal-content{border:none!important}"]
            }] }
];
/** @nocollapse */
ConfirmComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: BsModalRef }
];
if (false) {
    /** @type {?} */
    ConfirmComponent.prototype.data;
    /**
     * @type {?}
     * @private
     */
    ConfirmComponent.prototype._sanitizationService;
    /** @type {?} */
    ConfirmComponent.prototype._modalRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9tb2RhbHMvY29tcG9uZW50cy9jb25maXJtL2NvbmZpcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVTNDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBRXpCLFlBQ1ksb0JBQWtDLEVBQ25DLFNBQXFCO1FBRHBCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBYztRQUNuQyxjQUFTLEdBQVQsU0FBUyxDQUFZO0lBQ2hDLENBQUM7Ozs7O0lBRU0sdUJBQXVCLENBQUMsSUFBWTtRQUN2QyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7O0lBRU0sTUFBTTtRQUNULElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsQ0FBQyxFQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxFQUFFO1lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7SUFDTCxDQUFDOzs7O0lBRU0sTUFBTTtRQUNULElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsQ0FBQyxFQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxFQUFFO1lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7SUFDTCxDQUFDOzs7WUExQ0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxXQUFXO2dCQUNyQix5dEJBQXVDO2dCQUV2QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDeEM7Ozs7WUFUUSxZQUFZO1lBQ1osVUFBVTs7OztJQVdmLGdDQUE4Qjs7Ozs7SUFFMUIsZ0RBQTBDOztJQUMxQyxxQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQnNNb2RhbFJlZiB9IGZyb20gJ25neC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBDb25maXJtVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kYWwubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2MtY29uZmlybScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29uZmlybS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jb25maXJtLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlybUNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgZGF0YTogQ29uZmlybVZpZXdNb2RlbDtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3Nhbml0aXphdGlvblNlcnZpY2U6IERvbVNhbml0aXplcixcclxuICAgICAgICBwdWJsaWMgX21vZGFsUmVmOiBCc01vZGFsUmVmKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWw6IHN0cmluZyk6IFNhZmVIdG1sIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2FuaXRpemF0aW9uU2VydmljZS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuY2VsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuY2FuY2VsQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmNhbmNlbENhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vZGFsUmVmLmhpZGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kYWxSZWYuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXRhLmF1dG9DbG9zZSAhPSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RhbFJlZi5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5hY2NlcHRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuYWNjZXB0Q2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kYWxSZWYuaGlkZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RhbFJlZi5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuYXV0b0Nsb3NlICE9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGFsUmVmLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19