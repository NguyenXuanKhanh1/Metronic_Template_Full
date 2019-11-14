/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalRef } from 'ngx-bootstrap';
var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(_sanitizationService, _modalRef) {
        this._sanitizationService = _sanitizationService;
        this._modalRef = _modalRef;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    NotificationComponent.prototype.bypassSecurityTrustHtml = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        return this._sanitizationService.bypassSecurityTrustHtml(html);
    };
    /**
     * @return {?}
     */
    NotificationComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.data.callback) {
            this.data.callback((/**
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
    NotificationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-notification',
                    template: "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\"><span class=\"fa fa-bell-o\" style=\"font-size: 30px;\"></span> <span\r\n      style=\"position: absolute;margin: 4px 0px 0px 10px;\">{{data?.title ? data?.title : 'Notification'}}</span></h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <p class=\"text-center text-font-14  text-muted\" [innerHTML]=\"data?.message\"></p>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"cancel()\" class=\"btn btn-info\">{{data?.btnTitle ? data?.btnTitle : 'Cancel'}}</button>\r\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".modal-title{font-size:16px;text-transform:uppercase}.modal-content{border:none!important}"]
                }] }
    ];
    /** @nocollapse */
    NotificationComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: BsModalRef }
    ]; };
    return NotificationComponent;
}());
export { NotificationComponent };
if (false) {
    /** @type {?} */
    NotificationComponent.prototype.data;
    /**
     * @type {?}
     * @private
     */
    NotificationComponent.prototype._sanitizationService;
    /** @type {?} */
    NotificationComponent.prototype._modalRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL21vZGFscy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDO0lBU0ksK0JBQ1ksb0JBQWtDLEVBQ25DLFNBQXFCO1FBRHBCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBYztRQUNuQyxjQUFTLEdBQVQsU0FBUyxDQUFZO0lBQ2hDLENBQUM7Ozs7O0lBRU0sdURBQXVCOzs7O0lBQTlCLFVBQStCLElBQVk7UUFDdkMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7OztJQUVNLHNDQUFNOzs7SUFBYjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7OztZQUFDO2dCQUNmLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsQ0FBQyxFQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxFQUFFO1lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7SUFDTCxDQUFDOztnQkE3QkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLCtpQkFBNEM7b0JBRTVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDeEM7Ozs7Z0JBVFEsWUFBWTtnQkFDWixVQUFVOztJQWlDbkIsNEJBQUM7Q0FBQSxBQTlCRCxJQThCQztTQXZCWSxxQkFBcUI7OztJQUM5QixxQ0FBbUM7Ozs7O0lBRS9CLHFEQUEwQzs7SUFDMUMsMENBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEJzTW9kYWxSZWYgfSBmcm9tICduZ3gtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kYWwubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2thdGFuYS1ub3RpZmljYXRpb24nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL25vdGlmaWNhdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25Db21wb25lbnQge1xyXG4gICAgcHVibGljIGRhdGE6IE5vdGlmaWNhdGlvblZpZXdNb2RlbDtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3Nhbml0aXphdGlvblNlcnZpY2U6IERvbVNhbml0aXplcixcclxuICAgICAgICBwdWJsaWMgX21vZGFsUmVmOiBCc01vZGFsUmVmKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWw6IHN0cmluZyk6IFNhZmVIdG1sIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2FuaXRpemF0aW9uU2VydmljZS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuY2VsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vZGFsUmVmLmhpZGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kYWxSZWYuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXRhLmF1dG9DbG9zZSAhPSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RhbFJlZi5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==