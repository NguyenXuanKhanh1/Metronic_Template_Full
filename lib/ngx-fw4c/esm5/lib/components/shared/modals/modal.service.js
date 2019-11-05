/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { NotificationComponent } from './components/notification/notification.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { TemplateComponent } from './components/template/template.component';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "ng4-loading-spinner";
var ModalService = /** @class */ (function () {
    function ModalService(_bsModalService, Ng4LoadingSpinnerService) {
        this._bsModalService = _bsModalService;
        this.Ng4LoadingSpinnerService = Ng4LoadingSpinnerService;
    }
    /**
     * @return {?}
     */
    ModalService.prototype.showLoading = /**
     * @return {?}
     */
    function () {
        this.Ng4LoadingSpinnerService.show();
    };
    /**
     * @return {?}
     */
    ModalService.prototype.hideLoading = /**
     * @return {?}
     */
    function () {
        this.Ng4LoadingSpinnerService.hide();
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ModalService.prototype.showNotificationDialog = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var customCss = data.customSize + (data.center ? ' modal-dialog-centered modal-xlg' : '');
        this._modalInstance = this._bsModalService.show(NotificationComponent, {
            backdrop: 'static',
            class: customCss,
            keyboard: false,
            ignoreBackdropClick: data.ignoreBackdropClick,
            animated: true
        });
        this._modalInstance.content.data = data;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ModalService.prototype.showConfirmDialog = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var customCss = data.customSize + (data.center ? ' modal-dialog-centered modal-xlg' : '');
        this._modalInstance = this._bsModalService.show(ConfirmComponent, {
            backdrop: 'static',
            class: customCss,
            keyboard: false,
            ignoreBackdropClick: data.ignoreBackdropClick,
            animated: true
        });
        this._modalInstance.content.data = data;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ModalService.prototype.showTemplateDialog = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var customCss = data.customSize + (data.center ? ' modal-dialog-centered modal-xlg' : '');
        this._modalInstance = this._bsModalService.show(TemplateComponent, {
            backdrop: 'static',
            class: customCss,
            keyboard: false,
            ignoreBackdropClick: data.ignoreBackdropClick,
            animated: true
        });
        this._modalInstance.content.data = data;
    };
    ModalService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ModalService.ctorParameters = function () { return [
        { type: BsModalService },
        { type: Ng4LoadingSpinnerService }
    ]; };
    /** @nocollapse */ ModalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.ɵɵinject(i1.BsModalService), i0.ɵɵinject(i2.Ng4LoadingSpinnerService)); }, token: ModalService, providedIn: "root" });
    return ModalService;
}());
export { ModalService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype._modalInstance;
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype._bsModalService;
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.Ng4LoadingSpinnerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL21vZGFscy9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFFM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFFL0Q7SUFHRSxzQkFDVSxlQUErQixFQUMvQix3QkFBa0Q7UUFEbEQsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7SUFDeEQsQ0FBQzs7OztJQUVFLGtDQUFXOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVNLGtDQUFXOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFTSw2Q0FBc0I7Ozs7SUFBN0IsVUFBOEIsSUFBMkI7O1lBQ25ELFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN6RixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQ3JFLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtZQUM3QyxRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFTSx3Q0FBaUI7Ozs7SUFBeEIsVUFBeUIsSUFBc0I7O1lBQ3pDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN6RixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ2hFLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtZQUM3QyxRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFTSx5Q0FBa0I7Ozs7SUFBekIsVUFBMEIsSUFBdUI7O1lBQzNDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN6RixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ2pFLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtZQUM3QyxRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDMUMsQ0FBQzs7Z0JBbERGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBUHpCLGNBQWM7Z0JBS2Qsd0JBQXdCOzs7dUJBTmpDO0NBMkRDLEFBbkRELElBbURDO1NBbERZLFlBQVk7Ozs7OztJQUN2QixzQ0FBbUM7Ozs7O0lBRWpDLHVDQUF1Qzs7Ozs7SUFDdkMsZ0RBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCc01vZGFsU2VydmljZSwgQnNNb2RhbFJlZiB9IGZyb20gJ25neC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25WaWV3TW9kZWwsIFRlbXBsYXRlVmlld01vZGVsLCBDb25maXJtVmlld01vZGVsIH0gZnJvbSAnLi9tb2RhbC5tb2RlbCc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmZpcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29uZmlybS9jb25maXJtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbXBsYXRlL3RlbXBsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nNExvYWRpbmdTcGlubmVyU2VydmljZSB9IGZyb20gJ25nNC1sb2FkaW5nLXNwaW5uZXInO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfbW9kYWxJbnN0YW5jZTogQnNNb2RhbFJlZjtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2JzTW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZSxcclxuICAgIHByaXZhdGUgTmc0TG9hZGluZ1NwaW5uZXJTZXJ2aWNlOiBOZzRMb2FkaW5nU3Bpbm5lclNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBwdWJsaWMgc2hvd0xvYWRpbmcoKTogdm9pZCB7XHJcbiAgICB0aGlzLk5nNExvYWRpbmdTcGlubmVyU2VydmljZS5zaG93KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGlkZUxvYWRpbmcoKTogdm9pZCB7XHJcbiAgICB0aGlzLk5nNExvYWRpbmdTcGlubmVyU2VydmljZS5oaWRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvd05vdGlmaWNhdGlvbkRpYWxvZyhkYXRhOiBOb3RpZmljYXRpb25WaWV3TW9kZWwpOiB2b2lkIHtcclxuICAgIHZhciBjdXN0b21Dc3MgPSBkYXRhLmN1c3RvbVNpemUgKyAoZGF0YS5jZW50ZXIgPyAnIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCBtb2RhbC14bGcnIDogJycpO1xyXG4gICAgdGhpcy5fbW9kYWxJbnN0YW5jZSA9IHRoaXMuX2JzTW9kYWxTZXJ2aWNlLnNob3coTm90aWZpY2F0aW9uQ29tcG9uZW50LCB7XHJcbiAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgY2xhc3M6IGN1c3RvbUNzcyxcclxuICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG4gICAgICBpZ25vcmVCYWNrZHJvcENsaWNrOiBkYXRhLmlnbm9yZUJhY2tkcm9wQ2xpY2ssXHJcbiAgICAgIGFuaW1hdGVkOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuX21vZGFsSW5zdGFuY2UuY29udGVudC5kYXRhID0gZGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93Q29uZmlybURpYWxvZyhkYXRhOiBDb25maXJtVmlld01vZGVsKTogdm9pZCB7XHJcbiAgICB2YXIgY3VzdG9tQ3NzID0gZGF0YS5jdXN0b21TaXplICsgKGRhdGEuY2VudGVyID8gJyBtb2RhbC1kaWFsb2ctY2VudGVyZWQgbW9kYWwteGxnJyA6ICcnKTtcclxuICAgIHRoaXMuX21vZGFsSW5zdGFuY2UgPSB0aGlzLl9ic01vZGFsU2VydmljZS5zaG93KENvbmZpcm1Db21wb25lbnQsIHtcclxuICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICBjbGFzczogY3VzdG9tQ3NzLFxyXG4gICAgICBrZXlib2FyZDogZmFsc2UsXHJcbiAgICAgIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IGRhdGEuaWdub3JlQmFja2Ryb3BDbGljayxcclxuICAgICAgYW5pbWF0ZWQ6IHRydWVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fbW9kYWxJbnN0YW5jZS5jb250ZW50LmRhdGEgPSBkYXRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3dUZW1wbGF0ZURpYWxvZyhkYXRhOiBUZW1wbGF0ZVZpZXdNb2RlbCk6IHZvaWQge1xyXG4gICAgdmFyIGN1c3RvbUNzcyA9IGRhdGEuY3VzdG9tU2l6ZSArIChkYXRhLmNlbnRlciA/ICcgbW9kYWwtZGlhbG9nLWNlbnRlcmVkIG1vZGFsLXhsZycgOiAnJyk7XHJcbiAgICB0aGlzLl9tb2RhbEluc3RhbmNlID0gdGhpcy5fYnNNb2RhbFNlcnZpY2Uuc2hvdyhUZW1wbGF0ZUNvbXBvbmVudCwge1xyXG4gICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgIGNsYXNzOiBjdXN0b21Dc3MsXHJcbiAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuICAgICAgaWdub3JlQmFja2Ryb3BDbGljazogZGF0YS5pZ25vcmVCYWNrZHJvcENsaWNrLFxyXG4gICAgICBhbmltYXRlZDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9tb2RhbEluc3RhbmNlLmNvbnRlbnQuZGF0YSA9IGRhdGE7XHJcbiAgfVxyXG59XHJcbiJdfQ==