/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FileResponse } from '../file/file.model';
import { ModalService } from '../modals/modal.service';
import { TemplateViewModel } from '../modals/modal.model';
import { GalleryComponent } from './gallery/gallery.component';
import { DataService } from '../services/data.service';
import { of } from 'rxjs';
import { AuthenticationService } from '../../auth/auth.service';
export class ViewerComponent {
    /**
     * @param {?} _modalService
     * @param {?} _dataService
     * @param {?} authenticationService
     */
    constructor(_modalService, _dataService, authenticationService) {
        this._modalService = _modalService;
        this._dataService = _dataService;
        this.authenticationService = authenticationService;
        this.isLoading = false;
        this.images = [];
        this.useLibrary = true;
        this.headers = ['#', 'Tên', 'Kích thước', 'Ngày tạo'];
        this.componentTitle = 'Thêm ảnh';
        this.uploadDialogTitle = 'Chỉnh sửa ảnh';
        this.uploadDialogIcon = 'fa fa-twitter';
        this.uploadTitle = 'Tải lên';
        this.uploadIcon = 'fa fa-exchange';
        this.openGalleryTitle = 'Chọn từ thư viện';
        this.openGalleryIcon = 'fa fa-google-wallet';
        this.model = [];
        this.zoomPrimaryImage = true;
        this.editable = true;
        this.cutRatio = 1 / 1;
        this.emitNullOnDestroy = false;
        this.modelChange = new EventEmitter();
        this.onOpenUserMediaGallery = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.emitNullOnDestroy === true)
            this.modelChange.emit([]);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    addImage(file) {
        this.images = this.model;
        if (!this.images)
            this.images = [];
        this.images.push({
            src: file.src,
            name: file.name,
            size: file.size,
            createdDate: new Date(),
            lastModifiedDate: new Date(),
            createdBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null,
            lastModifiedBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null
        });
        this.modelChange.emit(this.images);
    }
    /**
     * @param {?} loading
     * @return {?}
     */
    setLoading(loading) {
        this.isLoading = loading;
    }
    /**
     * @return {?}
     */
    openUserMediaGallery() {
        this.onOpenUserMediaGallery.emit();
        /** @type {?} */
        var items = (/** @type {?} */ (this._dataService.cloneItems(this.images)));
        if (!items)
            items = [];
        this._modalService.showTemplateDialog(new TemplateViewModel({
            template: GalleryComponent,
            title: this.openGalleryTitle,
            icon: this.openGalleryIcon,
            customSize: 'modal-lg',
            data: {
                headers: this.headers,
                items: !this.useLibrary ? (/**
                 * @return {?}
                 */
                () => {
                    return of(new FileResponse({
                        code: '200',
                        status: true,
                        totalRecords: 0,
                        items: []
                    }));
                }) : (/**
                 * @return {?}
                 */
                () => {
                    if (!this.galleryItems) {
                        return of(new FileResponse({
                            code: '200',
                            status: true,
                            totalRecords: items.length,
                            items: items
                        }));
                    }
                    else {
                        return this.galleryItems;
                    }
                })
            },
            acceptCallback: (/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                response.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
                    this.images.push(item);
                }));
                this.modelChange.emit(this.images);
            })
        }));
    }
}
ViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'c-viewer',
                template: "<label *ngIf=\"title\" class=\"title-gallery\">{{title}}</label>\r\n<div class=\"form-group image-gallery-wrapper\">\r\n  <div *ngIf=\"!model || model.length === 0; else main\" class=\"d-flex\">\r\n    <div class=\"add-image-wrapper\">\r\n      <button class=\"btn btn-add-image\">\r\n        <i class=\"plus fa fa-plus\"></i>\r\n        <h6 class=\"mt-1\">{{componentTitle}}</h6>\r\n        <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin loading-icon fa-fw\"></i>\r\n        <ul class=\"add-image-menu\">\r\n          <li>\r\n            <c-file-uploader [icon]=\"uploadDialogIcon\" [title]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n              (checkedLoading)=\"setLoading($event)\" [maintainAspectRatio]=\"maintainAspectRatio\"\r\n              [resizeToWidth]=\"resizeToWidth\" class=\"c-upload\" [cropImage]=\"true\" (fileUploaded)=\"addImage($event)\"\r\n              [fileType]=\"'image'\" [cutRatio]=\"cutRatio\">\r\n              <i class=\"{{uploadIcon}}\"></i>\r\n              {{uploadTitle}}\r\n            </c-file-uploader>\r\n          </li>\r\n          <li *ngIf=\"useLibrary\">\r\n            <a href=\"javascript:;\" (click)=\"openUserMediaGallery()\">\r\n              <i class=\"{{openGalleryIcon}}\" aria-hidden=\"true\"></i>\r\n              {{openGalleryTitle}}\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <c-file-uploader [icon]=\"uploadDialogIcon\" [title]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n          (checkedLoading)=\"setLoading($event)\" [resizeToWidth]=\"resizeToWidth\"\r\n          [maintainAspectRatio]=\"maintainAspectRatio\" class=\"c-upload\" [cropImage]=\"true\"\r\n          (fileUploaded)=\"addImage($event)\" [cutRatio]=\"cutRatio\">\r\n          <span class=\"upload-shadow\"></span>\r\n        </c-file-uploader>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #main>\r\n    <div class=\"d-flex\">\r\n      <div ngxDroppable=\"imagesDropZone\" [model]=\"model\" class=\"ngx-dnd-container d-flex\"\r\n        [ngClass]=\"{'big-image': zoomPrimaryImage}\">\r\n        <div class=\"ngx-dnd-item mr-2\" [model]=\"image\" *ngFor=\"let image of model; let i = index\"\r\n          ngxDraggable=\"imagesDropZone\">\r\n          <c-image-viewer [uploadIcon]=\"uploadDialogIcon\" [uploadTitle]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n            [cutRatio]=\"cutRatio\" [resizeToWidth]=\"resizeToWidth\" [maintainAspectRatio]=\"maintainAspectRatio\"\r\n            *ngIf=\"i === 0\" [size]=\"zoomPrimaryImage ? 'medium' : 'small'\" [model]=\"image\"\r\n            (imageRemoved)=\"model.splice(i, 1)\" [editable]=\"editable\"></c-image-viewer>\r\n          <c-image-viewer [uploadIcon]=\"uploadDialogIcon\" [uploadTitle]=\"uploadDialogTitle\" [multiple]=\"multiple\" [resizeToWidth]=\"resizeToWidth\"\r\n            [cutRatio]=\"cutRatio\" [maintainAspectRatio]=\"maintainAspectRatio\" *ngIf=\"i > 0\" size=\"small\" [model]=\"image\"\r\n            (imageRemoved)=\"model.splice(i, 1)\" [editable]=\"editable\"></c-image-viewer>\r\n        </div>\r\n      </div>\r\n      <div class=\"add-image-wrapper\">\r\n        <button class=\"btn btn-add-image\">\r\n          <i class=\"plus fa fa-plus\"></i>\r\n          <h6 class=\"mt-1\">{{componentTitle}}</h6>\r\n          <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin loading-icon fa-fw\"></i>\r\n          <ul class=\"add-image-menu\">\r\n            <li>\r\n              <c-file-uploader [icon]=\"uploadDialogIcon\" [title]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n                (checkedLoading)=\"setLoading($event)\" [resizeToWidth]=\"resizeToWidth\"\r\n                [maintainAspectRatio]=\"maintainAspectRatio\" class=\"c-upload\" [cropImage]=\"true\"\r\n                (fileUploaded)=\"addImage($event)\" [cutRatio]=\"cutRatio\">\r\n                <i class=\"{{uploadIcon}}\"></i>\r\n                {{uploadTitle}}\r\n              </c-file-uploader>\r\n            </li>\r\n            <li *ngIf=\"useLibrary\">\r\n              <a href=\"javascript:;\" (click)=\"openUserMediaGallery()\">\r\n                <i class=\"{{openGalleryIcon}}\" aria-hidden=\"true\"></i>\r\n                {{openGalleryTitle}}\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <c-file-uploader [icon]=\"uploadDialogIcon\" [title]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n            (checkedLoading)=\"setLoading($event)\" [resizeToWidth]=\"resizeToWidth\"\r\n            [maintainAspectRatio]=\"maintainAspectRatio\" class=\"c-upload \" [cropImage]=\"true\"\r\n            (fileUploaded)=\"addImage($event)\" [cutRatio]=\"cutRatio\">\r\n            <span class=\"upload-shadow\"></span>\r\n          </c-file-uploader>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  <div [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\">\r\n  </div>\r\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
ViewerComponent.ctorParameters = () => [
    { type: ModalService },
    { type: DataService },
    { type: AuthenticationService }
];
ViewerComponent.propDecorators = {
    headers: [{ type: Input }],
    multiple: [{ type: Input }],
    galleryItems: [{ type: Input }],
    componentTitle: [{ type: Input }],
    uploadDialogTitle: [{ type: Input }],
    uploadDialogIcon: [{ type: Input }],
    uploadTitle: [{ type: Input }],
    uploadIcon: [{ type: Input }],
    openGalleryTitle: [{ type: Input }],
    openGalleryIcon: [{ type: Input }],
    title: [{ type: Input }],
    model: [{ type: Input }],
    zoomPrimaryImage: [{ type: Input }],
    editable: [{ type: Input }],
    cutRatio: [{ type: Input }],
    resizeToWidth: [{ type: Input }],
    maintainAspectRatio: [{ type: Input }],
    validationName: [{ type: Input }],
    validationScope: [{ type: Input }],
    emitNullOnDestroy: [{ type: Input }],
    modelChange: [{ type: Output }],
    onOpenUserMediaGallery: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ViewerComponent.prototype.isLoading;
    /** @type {?} */
    ViewerComponent.prototype.images;
    /** @type {?} */
    ViewerComponent.prototype.useLibrary;
    /** @type {?} */
    ViewerComponent.prototype.headers;
    /** @type {?} */
    ViewerComponent.prototype.multiple;
    /** @type {?} */
    ViewerComponent.prototype.galleryItems;
    /** @type {?} */
    ViewerComponent.prototype.componentTitle;
    /** @type {?} */
    ViewerComponent.prototype.uploadDialogTitle;
    /** @type {?} */
    ViewerComponent.prototype.uploadDialogIcon;
    /** @type {?} */
    ViewerComponent.prototype.uploadTitle;
    /** @type {?} */
    ViewerComponent.prototype.uploadIcon;
    /** @type {?} */
    ViewerComponent.prototype.openGalleryTitle;
    /** @type {?} */
    ViewerComponent.prototype.openGalleryIcon;
    /** @type {?} */
    ViewerComponent.prototype.title;
    /** @type {?} */
    ViewerComponent.prototype.model;
    /** @type {?} */
    ViewerComponent.prototype.zoomPrimaryImage;
    /** @type {?} */
    ViewerComponent.prototype.editable;
    /** @type {?} */
    ViewerComponent.prototype.cutRatio;
    /** @type {?} */
    ViewerComponent.prototype.resizeToWidth;
    /** @type {?} */
    ViewerComponent.prototype.maintainAspectRatio;
    /** @type {?} */
    ViewerComponent.prototype.validationName;
    /** @type {?} */
    ViewerComponent.prototype.validationScope;
    /** @type {?} */
    ViewerComponent.prototype.emitNullOnDestroy;
    /** @type {?} */
    ViewerComponent.prototype.modelChange;
    /** @type {?} */
    ViewerComponent.prototype.onOpenUserMediaGallery;
    /**
     * @type {?}
     * @private
     */
    ViewerComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    ViewerComponent.prototype._dataService;
    /**
     * @type {?}
     * @protected
     */
    ViewerComponent.prototype.authenticationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3ZpZXdlci92aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBaUIsWUFBWSxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsRUFBRSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBUWhFLE1BQU0sT0FBTyxlQUFlOzs7Ozs7SUEyQjFCLFlBQ1UsYUFBMkIsRUFDM0IsWUFBeUIsRUFDdkIscUJBQTRDO1FBRjlDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3ZCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUE3QmpELGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsV0FBTSxHQUFvQixFQUFFLENBQUM7UUFDN0IsZUFBVSxHQUFZLElBQUksQ0FBQztRQUNsQixZQUFPLEdBQWEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUczRCxtQkFBYyxHQUFXLFVBQVUsQ0FBQztRQUNwQyxzQkFBaUIsR0FBVyxlQUFlLENBQUM7UUFDNUMs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TTs7OztJQXhCUCxvQ0FBa0M7O0lBQ2xDLGlDQUFvQzs7SUFDcEMscUNBQWtDOztJQUNsQyxrQ0FBMkU7O0lBQzNFLG1DQUFrQzs7SUFDbEMsdUNBQWlGOztJQUNqRix5Q0FBb0Q7O0lBQ3BELDRDQUE0RDs7SUFDNUQsMkNBQTJEOztJQUMzRCxzQ0FBZ0Q7O0lBQ2hELHFDQUFzRDs7SUFDdEQsMkNBQThEOztJQUM5RCwwQ0FBZ0U7O0lBQ2hFLGdDQUE4Qjs7SUFDOUIsZ0NBQWtDOztJQUNsQywyQ0FBaUQ7O0lBQ2pELG1DQUF5Qzs7SUFDekMsbUNBQXlDOztJQUN6Qyx3Q0FBc0M7O0lBQ3RDLDhDQUE2Qzs7SUFDN0MseUNBQWdDOztJQUNoQywwQ0FBaUM7O0lBQ2pDLDRDQUE0Qzs7SUFDNUMsc0NBQXVFOztJQUN2RSxpREFBaUY7Ozs7O0lBRy9FLHdDQUFtQzs7Ozs7SUFDbkMsdUNBQWlDOzs7OztJQUNqQyxnREFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVWaWV3TW9kZWwsIEZpbGVSZXNwb25zZSwgRmlsZVJlcXVlc3QgfSBmcm9tICcuLi9maWxlL2ZpbGUubW9kZWwnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi9tb2RhbHMvbW9kYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVmlld01vZGVsIH0gZnJvbSAnLi4vbW9kYWxzL21vZGFsLm1vZGVsJztcclxuaW1wb3J0IHsgR2FsbGVyeUNvbXBvbmVudCB9IGZyb20gJy4vZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjLXZpZXdlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdmlld2VyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgaW1hZ2VzOiBGaWxlVmlld01vZGVsW10gPSBbXTtcclxuICBwdWJsaWMgdXNlTGlicmFyeTogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgcHVibGljIGhlYWRlcnM6IHN0cmluZ1tdID0gWycjJywgJ1TDqm4nLCAnS8OtY2ggdGjGsOG7m2MnLCAnTmfDoHkgdOG6oW8nXTtcclxuICBASW5wdXQoKSBwdWJsaWMgbXVsdGlwbGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcHVibGljIGdhbGxlcnlJdGVtczogKHJlcXVlc3Q6IEZpbGVSZXF1ZXN0KSA9PiBPYnNlcnZhYmxlPEZpbGVSZXNwb25zZT47XHJcbiAgQElucHV0KCkgcHVibGljIGNvbXBvbmVudFRpdGxlOiBzdHJpbmcgPSAnVGjDqm0g4bqjbmgnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB1cGxvYWREaWFsb2dUaXRsZTogc3RyaW5nID0gJ0No4buJbmggc+G7rWEg4bqjbmgnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB1cGxvYWREaWFsb2dJY29uOiBzdHJpbmcgPSAnZmEgZmEtdHdpdHRlcic7XHJcbiAgQElucHV0KCkgcHVibGljIHVwbG9hZFRpdGxlOiBzdHJpbmcgPSAnVOG6o2kgbMOqbic7XHJcbiAgQElucHV0KCkgcHVibGljIHVwbG9hZEljb246IHN0cmluZyA9ICdmYSBmYS1leGNoYW5nZSc7XHJcbiAgQElucHV0KCkgcHVibGljIG9wZW5HYWxsZXJ5VGl0bGU6IHN0cmluZyA9ICdDaOG7jW4gdOG7qyB0aMawIHZp4buHbic7XHJcbiAgQElucHV0KCkgcHVibGljIG9wZW5HYWxsZXJ5SWNvbjogc3RyaW5nID0gJ2ZhIGZhLWdvb2dsZS13YWxsZXQnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtb2RlbDogYW55W10gPSBbXTtcclxuICBASW5wdXQoKSBwdWJsaWMgem9vbVByaW1hcnlJbWFnZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgcHVibGljIGVkaXRhYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgY3V0UmF0aW86IG51bWJlciA9IDEgLyAxO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyByZXNpemVUb1dpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcHVibGljIG1haW50YWluQXNwZWN0UmF0aW86IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdmFsaWRhdGlvbk5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSB2YWxpZGF0aW9uU2NvcGU6IHN0cmluZztcclxuICBASW5wdXQoKSBlbWl0TnVsbE9uRGVzdHJveTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgbW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnlbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbk9wZW5Vc2VyTWVkaWFHYWxsZXJ5OiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXHJcbiAgICBwcm90ZWN0ZWQgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVtaXROdWxsT25EZXN0cm95ID09PSB0cnVlKVxyXG4gICAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQoW10pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZEltYWdlKGZpbGU6IEZpbGVWaWV3TW9kZWwpOiB2b2lkIHtcclxuICAgIHRoaXMuaW1hZ2VzID0gdGhpcy5tb2RlbDtcclxuICAgIGlmICghdGhpcy5pbWFnZXMpIHRoaXMuaW1hZ2VzID0gW107XHJcbiAgICB0aGlzLmltYWdlcy5wdXNoKHtcclxuICAgICAgc3JjOiBmaWxlLnNyYyxcclxuICAgICAgbmFtZTogZmlsZS5uYW1lLFxyXG4gICAgICBzaXplOiBmaWxlLnNpemUsXHJcbiAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICBsYXN0TW9kaWZpZWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICBjcmVhdGVkQnk6IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyID8gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIuaWQgOiBudWxsLFxyXG4gICAgICBsYXN0TW9kaWZpZWRCeTogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCA6IG51bGxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KHRoaXMuaW1hZ2VzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRMb2FkaW5nKGxvYWRpbmc6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gbG9hZGluZztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuVXNlck1lZGlhR2FsbGVyeSgpOiB2b2lkIHtcclxuICAgIHRoaXMub25PcGVuVXNlck1lZGlhR2FsbGVyeS5lbWl0KCk7XHJcbiAgICB2YXIgaXRlbXMgPSA8YW55W10+dGhpcy5fZGF0YVNlcnZpY2UuY2xvbmVJdGVtcyh0aGlzLmltYWdlcyk7XHJcbiAgICBpZiAoIWl0ZW1zKSBpdGVtcyA9IFtdO1xyXG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLnNob3dUZW1wbGF0ZURpYWxvZyhuZXcgVGVtcGxhdGVWaWV3TW9kZWwoe1xyXG4gICAgICB0ZW1wbGF0ZTogR2FsbGVyeUNvbXBvbmVudCxcclxuICAgICAgdGl0bGU6IHRoaXMub3BlbkdhbGxlcnlUaXRsZSxcclxuICAgICAgaWNvbjogdGhpcy5vcGVuR2FsbGVyeUljb24sXHJcbiAgICAgIGN1c3RvbVNpemU6ICdtb2RhbC1sZycsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXHJcbiAgICAgICAgaXRlbXM6ICF0aGlzLnVzZUxpYnJhcnkgPyAoKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gb2YobmV3IEZpbGVSZXNwb25zZSh7XHJcbiAgICAgICAgICAgIGNvZGU6ICcyMDAnLFxyXG4gICAgICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgICAgIHRvdGFsUmVjb3JkczogMCxcclxuICAgICAgICAgICAgaXRlbXM6IFtdXHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSA6ICgpID0+IHtcclxuICAgICAgICAgIGlmICghdGhpcy5nYWxsZXJ5SXRlbXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9mKG5ldyBGaWxlUmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgIGNvZGU6ICcyMDAnLFxyXG4gICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgICAgICAgICAgICB0b3RhbFJlY29yZHM6IGl0ZW1zLmxlbmd0aCxcclxuICAgICAgICAgICAgICBpdGVtczogaXRlbXNcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2FsbGVyeUl0ZW1zO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYWNjZXB0Q2FsbGJhY2s6IChyZXNwb25zZTogRmlsZVZpZXdNb2RlbFtdKSA9PiB7XHJcbiAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KHRoaXMuaW1hZ2VzKTtcclxuICAgICAgfVxyXG4gICAgfSkpO1xyXG4gIH1cclxufVxyXG4iXX0=