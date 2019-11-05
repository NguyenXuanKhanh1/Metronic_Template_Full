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
export class ModalService {
    /**
     * @param {?} _bsModalService
     * @param {?} Ng4LoadingSpinnerService
     */
    constructor(_bsModalService, Ng4LoadingSpinnerService) {
        this._bsModalService = _bsModalService;
        this.Ng4LoadingSpinnerService = Ng4LoadingSpinnerService;
    }
    /**
     * @return {?}
     */
    showLoading() {
        this.Ng4LoadingSpinnerService.show();
    }
    /**
     * @return {?}
     */
    hideLoading() {
        this.Ng4LoadingSpinnerService.hide();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    showNotificationDialog(data) {
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
    }
    /**
     * @param {?} data
     * @return {?}
     */
    showConfirmDialog(data) {
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
    }
    /**
     * @param {?} data
     * @return {?}
     */
    showTemplateDialog(data) {
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
    }
}
ModalService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ModalService.ctorParameters = () => [
    { type: BsModalService },
    { type: Ng4LoadingSpinnerService }
];
/** @nocollapse */ ModalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.ɵɵinject(i1.BsModalService), i0.ɵɵinject(i2.Ng4LoadingSpinnerService)); }, token: ModalService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL21vZGFscy9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFFM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFHL0QsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBRXZCLFlBQ1UsZUFBK0IsRUFDL0Isd0JBQWtEO1FBRGxELG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQ3hELENBQUM7Ozs7SUFFRSxXQUFXO1FBQ2hCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFTSxzQkFBc0IsQ0FBQyxJQUEyQjs7WUFDbkQsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDckUsUUFBUSxFQUFFLFFBQVE7WUFDbEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFFLEtBQUs7WUFDZixtQkFBbUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CO1lBQzdDLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVNLGlCQUFpQixDQUFDLElBQXNCOztZQUN6QyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDekYsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNoRSxRQUFRLEVBQUUsUUFBUTtZQUNsQixLQUFLLEVBQUUsU0FBUztZQUNoQixRQUFRLEVBQUUsS0FBSztZQUNmLG1CQUFtQixFQUFFLElBQUksQ0FBQyxtQkFBbUI7WUFDN0MsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRU0sa0JBQWtCLENBQUMsSUFBdUI7O1lBQzNDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN6RixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ2pFLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtZQUM3QyxRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDMUMsQ0FBQzs7O1lBbERGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFQekIsY0FBYztZQUtkLHdCQUF3Qjs7Ozs7Ozs7SUFJL0Isc0NBQW1DOzs7OztJQUVqQyx1Q0FBdUM7Ozs7O0lBQ3ZDLGdEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnNNb2RhbFNlcnZpY2UsIEJzTW9kYWxSZWYgfSBmcm9tICduZ3gtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uVmlld01vZGVsLCBUZW1wbGF0ZVZpZXdNb2RlbCwgQ29uZmlybVZpZXdNb2RlbCB9IGZyb20gJy4vbW9kYWwubW9kZWwnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25maXJtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZzRMb2FkaW5nU3Bpbm5lclNlcnZpY2UgfSBmcm9tICduZzQtbG9hZGluZy1zcGlubmVyJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX21vZGFsSW5zdGFuY2U6IEJzTW9kYWxSZWY7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9ic01vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIE5nNExvYWRpbmdTcGlubmVyU2VydmljZTogTmc0TG9hZGluZ1NwaW5uZXJTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgcHVibGljIHNob3dMb2FkaW5nKCk6IHZvaWQge1xyXG4gICAgdGhpcy5OZzRMb2FkaW5nU3Bpbm5lclNlcnZpY2Uuc2hvdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZGVMb2FkaW5nKCk6IHZvaWQge1xyXG4gICAgdGhpcy5OZzRMb2FkaW5nU3Bpbm5lclNlcnZpY2UuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3dOb3RpZmljYXRpb25EaWFsb2coZGF0YTogTm90aWZpY2F0aW9uVmlld01vZGVsKTogdm9pZCB7XHJcbiAgICB2YXIgY3VzdG9tQ3NzID0gZGF0YS5jdXN0b21TaXplICsgKGRhdGEuY2VudGVyID8gJyBtb2RhbC1kaWFsb2ctY2VudGVyZWQgbW9kYWwteGxnJyA6ICcnKTtcclxuICAgIHRoaXMuX21vZGFsSW5zdGFuY2UgPSB0aGlzLl9ic01vZGFsU2VydmljZS5zaG93KE5vdGlmaWNhdGlvbkNvbXBvbmVudCwge1xyXG4gICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgIGNsYXNzOiBjdXN0b21Dc3MsXHJcbiAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuICAgICAgaWdub3JlQmFja2Ryb3BDbGljazogZGF0YS5pZ25vcmVCYWNrZHJvcENsaWNrLFxyXG4gICAgICBhbmltYXRlZDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9tb2RhbEluc3RhbmNlLmNvbnRlbnQuZGF0YSA9IGRhdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvd0NvbmZpcm1EaWFsb2coZGF0YTogQ29uZmlybVZpZXdNb2RlbCk6IHZvaWQge1xyXG4gICAgdmFyIGN1c3RvbUNzcyA9IGRhdGEuY3VzdG9tU2l6ZSArIChkYXRhLmNlbnRlciA/ICcgbW9kYWwtZGlhbG9nLWNlbnRlcmVkIG1vZGFsLXhsZycgOiAnJyk7XHJcbiAgICB0aGlzLl9tb2RhbEluc3RhbmNlID0gdGhpcy5fYnNNb2RhbFNlcnZpY2Uuc2hvdyhDb25maXJtQ29tcG9uZW50LCB7XHJcbiAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgY2xhc3M6IGN1c3RvbUNzcyxcclxuICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG4gICAgICBpZ25vcmVCYWNrZHJvcENsaWNrOiBkYXRhLmlnbm9yZUJhY2tkcm9wQ2xpY2ssXHJcbiAgICAgIGFuaW1hdGVkOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuX21vZGFsSW5zdGFuY2UuY29udGVudC5kYXRhID0gZGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93VGVtcGxhdGVEaWFsb2coZGF0YTogVGVtcGxhdGVWaWV3TW9kZWwpOiB2b2lkIHtcclxuICAgIHZhciBjdXN0b21Dc3MgPSBkYXRhLmN1c3RvbVNpemUgKyAoZGF0YS5jZW50ZXIgPyAnIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCBtb2RhbC14bGcnIDogJycpO1xyXG4gICAgdGhpcy5fbW9kYWxJbnN0YW5jZSA9IHRoaXMuX2JzTW9kYWxTZXJ2aWNlLnNob3coVGVtcGxhdGVDb21wb25lbnQsIHtcclxuICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICBjbGFzczogY3VzdG9tQ3NzLFxyXG4gICAgICBrZXlib2FyZDogZmFsc2UsXHJcbiAgICAgIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IGRhdGEuaWdub3JlQmFja2Ryb3BDbGljayxcclxuICAgICAgYW5pbWF0ZWQ6IHRydWVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fbW9kYWxJbnN0YW5jZS5jb250ZW50LmRhdGEgPSBkYXRhO1xyXG4gIH1cclxufVxyXG4iXX0=