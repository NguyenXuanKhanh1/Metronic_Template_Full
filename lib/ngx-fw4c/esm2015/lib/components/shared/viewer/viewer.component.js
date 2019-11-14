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
                selector: 'katana-viewer',
                template: "<label *ngIf=\"title\" class=\"title-gallery\">{{title}}</label>\r\n<div class=\"form-group image-gallery-wrapper\">\r\n  <div *ngIf=\"!model || model.length === 0; else main\" class=\"d-flex\">\r\n    <div class=\"add-image-wrapper\">\r\n      <button class=\"btn btn-add-image\">\r\n        <i class=\"plus fa fa-plus\"></i>\r\n        <h6 class=\"mt-1\">{{componentTitle}}</h6>\r\n        <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin loading-icon fa-fw\"></i>\r\n        <ul class=\"add-image-menu\">\r\n          <li>\r\n            <katana-file-uploader [icon]=\"uploadDialogIcon\" [title]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n              (checkedLoading)=\"setLoading($event)\" [maintainAspectRatio]=\"maintainAspectRatio\"\r\n              [resizeToWidth]=\"resizeToWidth\" class=\"katana-upload\" [cropImage]=\"true\" (fileUploaded)=\"addImage($event)\"\r\n              [fileType]=\"'image'\" [cutRatio]=\"cutRatio\">\r\n              <i class=\"{{uploadIcon}}\"></i>\r\n              {{uploadTitle}}\r\n            </katana-file-uploader>\r\n          </li>\r\n          <li *ngIf=\"useLibrary\">\r\n            <a href=\"javascript:;\" (click)=\"openUserMediaGallery()\">\r\n              <i class=\"{{openGalleryIcon}}\" aria-hidden=\"true\"></i>\r\n              {{openGalleryTitle}}\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <katana-file-uploader [icon]=\"uploadDialogIcon\" [title]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n          (checkedLoading)=\"setLoading($event)\" [resizeToWidth]=\"resizeToWidth\"\r\n          [maintainAspectRatio]=\"maintainAspectRatio\" class=\"katana-upload\" [cropImage]=\"true\"\r\n          (fileUploaded)=\"addImage($event)\" [cutRatio]=\"cutRatio\">\r\n          <span class=\"upload-shadow\"></span>\r\n        </katana-file-uploader>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #main>\r\n    <div class=\"d-flex\">\r\n      <div ngxDroppable=\"imagesDropZone\" [model]=\"model\" class=\"ngx-dnd-container d-flex\"\r\n        [ngClass]=\"{'big-image': zoomPrimaryImage}\">\r\n        <div class=\"ngx-dnd-item mr-2\" [model]=\"image\" *ngFor=\"let image of model; let i = index\"\r\n          ngxDraggable=\"imagesDropZone\">\r\n          <katana-image-viewer [uploadIcon]=\"uploadDialogIcon\" [uploadTitle]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n            [cutRatio]=\"cutRatio\" [resizeToWidth]=\"resizeToWidth\" [maintainAspectRatio]=\"maintainAspectRatio\"\r\n            *ngIf=\"i === 0\" [size]=\"zoomPrimaryImage ? 'medium' : 'small'\" [model]=\"image\"\r\n            (imageRemoved)=\"model.splice(i, 1)\" [editable]=\"editable\"></katana-image-viewer>\r\n          <katana-image-viewer [uploadIcon]=\"uploadDialogIcon\" [uploadTitle]=\"uploadDialogTitle\" [multiple]=\"multiple\" [resizeToWidth]=\"resizeToWidth\"\r\n            [cutRatio]=\"cutRatio\" [maintainAspectRatio]=\"maintainAspectRatio\" *ngIf=\"i > 0\" size=\"small\" [model]=\"image\"\r\n            (imageRemoved)=\"model.splice(i, 1)\" [editable]=\"editable\"></katana-image-viewer>\r\n        </div>\r\n      </div>\r\n      <div class=\"add-image-wrapper\">\r\n        <button class=\"btn btn-add-image\">\r\n          <i class=\"plus fa fa-plus\"></i>\r\n          <h6 class=\"mt-1\">{{componentTitle}}</h6>\r\n          <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin loading-icon fa-fw\"></i>\r\n          <ul class=\"add-image-menu\">\r\n            <li>\r\n              <katana-file-uploader [icon]=\"uploadDialogIcon\" [title]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n                (checkedLoading)=\"setLoading($event)\" [resizeToWidth]=\"resizeToWidth\"\r\n                [maintainAspectRatio]=\"maintainAspectRatio\" class=\"katana-upload\" [cropImage]=\"true\"\r\n                (fileUploaded)=\"addImage($event)\" [cutRatio]=\"cutRatio\">\r\n                <i class=\"{{uploadIcon}}\"></i>\r\n                {{uploadTitle}}\r\n              </katana-file-uploader>\r\n            </li>\r\n            <li *ngIf=\"useLibrary\">\r\n              <a href=\"javascript:;\" (click)=\"openUserMediaGallery()\">\r\n                <i class=\"{{openGalleryIcon}}\" aria-hidden=\"true\"></i>\r\n                {{openGalleryTitle}}\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <katana-file-uploader [icon]=\"uploadDialogIcon\" [title]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n            (checkedLoading)=\"setLoading($event)\" [resizeToWidth]=\"resizeToWidth\"\r\n            [maintainAspectRatio]=\"maintainAspectRatio\" class=\"katana-upload \" [cropImage]=\"true\"\r\n            (fileUploaded)=\"addImage($event)\" [cutRatio]=\"cutRatio\">\r\n            <span class=\"upload-shadow\"></span>\r\n          </katana-file-uploader>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  <div [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\">\r\n  </div>\r\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3ZpZXdlci92aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBaUIsWUFBWSxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsRUFBRSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBUWhFLE1BQU0sT0FBTyxlQUFlOzs7Ozs7SUEyQjFCLFlBQ1UsYUFBMkIsRUFDM0IsWUFBeUIsRUFDdkIscUJBQTRDO1FBRjlDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3ZCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUE3QmpELGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsV0FBTSxHQUFvQixFQUFFLENBQUM7UUFDN0IsZUFBVSxHQUFZLElBQUksQ0FBQztRQUNsQixZQUFPLEdBQWEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUczRCxtQkFBYyxHQUFXLFVBQVUsQ0FBQztRQUNwQyxzQkFBaUIsR0FBVyxlQUFlLENBQUM7UUFDNUMs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TTs7OztJQXhCUCxvQ0FBa0M7O0lBQ2xDLGlDQUFvQzs7SUFDcEMscUNBQWtDOztJQUNsQyxrQ0FBMkU7O0lBQzNFLG1DQUFrQzs7SUFDbEMsdUNBQWlGOztJQUNqRix5Q0FBb0Q7O0lBQ3BELDRDQUE0RDs7SUFDNUQsMkNBQTJEOztJQUMzRCxzQ0FBZ0Q7O0lBQ2hELHFDQUFzRDs7SUFDdEQsMkNBQThEOztJQUM5RCwwQ0FBZ0U7O0lBQ2hFLGdDQUE4Qjs7SUFDOUIsZ0NBQWtDOztJQUNsQywyQ0FBaUQ7O0lBQ2pELG1DQUF5Qzs7SUFDekMsbUNBQXlDOztJQUN6Qyx3Q0FBc0M7O0lBQ3RDLDhDQUE2Qzs7SUFDN0MseUNBQWdDOztJQUNoQywwQ0FBaUM7O0lBQ2pDLDRDQUE0Qzs7SUFDNUMsc0NBQXVFOztJQUN2RSxpREFBaUY7Ozs7O0lBRy9FLHdDQUFtQzs7Ozs7SUFDbkMsdUNBQWlDOzs7OztJQUNqQyxnREFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVWaWV3TW9kZWwsIEZpbGVSZXNwb25zZSwgRmlsZVJlcXVlc3QgfSBmcm9tICcuLi9maWxlL2ZpbGUubW9kZWwnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi9tb2RhbHMvbW9kYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVmlld01vZGVsIH0gZnJvbSAnLi4vbW9kYWxzL21vZGFsLm1vZGVsJztcclxuaW1wb3J0IHsgR2FsbGVyeUNvbXBvbmVudCB9IGZyb20gJy4vZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrYXRhbmEtdmlld2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdmlld2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi92aWV3ZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpbWFnZXM6IEZpbGVWaWV3TW9kZWxbXSA9IFtdO1xyXG4gIHB1YmxpYyB1c2VMaWJyYXJ5OiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyczogc3RyaW5nW10gPSBbJyMnLCAnVMOqbicsICdLw61jaCB0aMaw4bubYycsICdOZ8OgeSB04bqhbyddO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtdWx0aXBsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwdWJsaWMgZ2FsbGVyeUl0ZW1zOiAocmVxdWVzdDogRmlsZVJlcXVlc3QpID0+IE9ic2VydmFibGU8RmlsZVJlc3BvbnNlPjtcclxuICBASW5wdXQoKSBwdWJsaWMgY29tcG9uZW50VGl0bGU6IHN0cmluZyA9ICdUaMOqbSDhuqNuaCc7XHJcbiAgQElucHV0KCkgcHVibGljIHVwbG9hZERpYWxvZ1RpdGxlOiBzdHJpbmcgPSAnQ2jhu4luaCBz4butYSDhuqNuaCc7XHJcbiAgQElucHV0KCkgcHVibGljIHVwbG9hZERpYWxvZ0ljb246IHN0cmluZyA9ICdmYSBmYS10d2l0dGVyJztcclxuICBASW5wdXQoKSBwdWJsaWMgdXBsb2FkVGl0bGU6IHN0cmluZyA9ICdU4bqjaSBsw6puJztcclxuICBASW5wdXQoKSBwdWJsaWMgdXBsb2FkSWNvbjogc3RyaW5nID0gJ2ZhIGZhLWV4Y2hhbmdlJztcclxuICBASW5wdXQoKSBwdWJsaWMgb3BlbkdhbGxlcnlUaXRsZTogc3RyaW5nID0gJ0No4buNbiB04burIHRoxrAgdmnhu4duJztcclxuICBASW5wdXQoKSBwdWJsaWMgb3BlbkdhbGxlcnlJY29uOiBzdHJpbmcgPSAnZmEgZmEtZ29vZ2xlLXdhbGxldCc7XHJcbiAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIG1vZGVsOiBhbnlbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB6b29tUHJpbWFyeUltYWdlOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgZWRpdGFibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjdXRSYXRpbzogbnVtYmVyID0gMSAvIDE7XHJcbiAgQElucHV0KCkgcHVibGljIHJlc2l6ZVRvV2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBwdWJsaWMgbWFpbnRhaW5Bc3BlY3RSYXRpbzogYm9vbGVhbjtcclxuICBASW5wdXQoKSB2YWxpZGF0aW9uTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHZhbGlkYXRpb25TY29wZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGVtaXROdWxsT25EZXN0cm95OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBtb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uT3BlblVzZXJNZWRpYUdhbGxlcnk6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuICAgIHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcclxuICAgIHByb3RlY3RlZCBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZW1pdE51bGxPbkRlc3Ryb3kgPT09IHRydWUpXHJcbiAgICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdChbXSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkSW1hZ2UoZmlsZTogRmlsZVZpZXdNb2RlbCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbWFnZXMgPSB0aGlzLm1vZGVsO1xyXG4gICAgaWYgKCF0aGlzLmltYWdlcykgdGhpcy5pbWFnZXMgPSBbXTtcclxuICAgIHRoaXMuaW1hZ2VzLnB1c2goe1xyXG4gICAgICBzcmM6IGZpbGUuc3JjLFxyXG4gICAgICBuYW1lOiBmaWxlLm5hbWUsXHJcbiAgICAgIHNpemU6IGZpbGUuc2l6ZSxcclxuICAgICAgY3JlYXRlZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgIGxhc3RNb2RpZmllZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgIGNyZWF0ZWRCeTogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCA6IG51bGwsXHJcbiAgICAgIGxhc3RNb2RpZmllZEJ5OiB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlciA/IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyLmlkIDogbnVsbFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQodGhpcy5pbWFnZXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldExvYWRpbmcobG9hZGluZzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSBsb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9wZW5Vc2VyTWVkaWFHYWxsZXJ5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbk9wZW5Vc2VyTWVkaWFHYWxsZXJ5LmVtaXQoKTtcclxuICAgIHZhciBpdGVtcyA9IDxhbnlbXT50aGlzLl9kYXRhU2VydmljZS5jbG9uZUl0ZW1zKHRoaXMuaW1hZ2VzKTtcclxuICAgIGlmICghaXRlbXMpIGl0ZW1zID0gW107XHJcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uuc2hvd1RlbXBsYXRlRGlhbG9nKG5ldyBUZW1wbGF0ZVZpZXdNb2RlbCh7XHJcbiAgICAgIHRlbXBsYXRlOiBHYWxsZXJ5Q29tcG9uZW50LFxyXG4gICAgICB0aXRsZTogdGhpcy5vcGVuR2FsbGVyeVRpdGxlLFxyXG4gICAgICBpY29uOiB0aGlzLm9wZW5HYWxsZXJ5SWNvbixcclxuICAgICAgY3VzdG9tU2l6ZTogJ21vZGFsLWxnJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcclxuICAgICAgICBpdGVtczogIXRoaXMudXNlTGlicmFyeSA/ICgpID0+IHtcclxuICAgICAgICAgIHJldHVybiBvZihuZXcgRmlsZVJlc3BvbnNlKHtcclxuICAgICAgICAgICAgY29kZTogJzIwMCcsXHJcbiAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgICAgICAgICAgdG90YWxSZWNvcmRzOiAwLFxyXG4gICAgICAgICAgICBpdGVtczogW11cclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICB9IDogKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmdhbGxlcnlJdGVtcykge1xyXG4gICAgICAgICAgICByZXR1cm4gb2YobmV3IEZpbGVSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgY29kZTogJzIwMCcsXHJcbiAgICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHRvdGFsUmVjb3JkczogaXRlbXMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIGl0ZW1zOiBpdGVtc1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nYWxsZXJ5SXRlbXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBhY2NlcHRDYWxsYmFjazogKHJlc3BvbnNlOiBGaWxlVmlld01vZGVsW10pID0+IHtcclxuICAgICAgICByZXNwb25zZS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbWFnZXMucHVzaChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQodGhpcy5pbWFnZXMpO1xyXG4gICAgICB9XHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==