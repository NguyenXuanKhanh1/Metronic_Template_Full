/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { take, finalize, tap } from 'rxjs/operators';
import { HttpEventType } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { FileViewModel, FileRequest, FileResponse } from './file.model';
import { CropperComponent } from '../cropper/cropper.component';
import { FileService } from './file.service';
import { NotificationViewModel } from '../modals/modal.model';
import { AuthenticationService } from '../../auth/auth.service';
import { ModalService } from '../modals/modal.service';
export class UploaderComponent {
    /**
     * @param {?} modalService
     * @param {?} fileService
     * @param {?} authenticationService
     */
    constructor(modalService, fileService, authenticationService) {
        this.modalService = modalService;
        this.fileService = fileService;
        this.authenticationService = authenticationService;
        this.icon = 'fa fa-twitter';
        this.title = 'Chỉnh sửa ảnh';
        this.multiple = true;
        this.maxSize = 10 * 1024 * 1024;
        this.fileType = 'default';
        this.changeLoading = new EventEmitter();
        this.changeProgress = new EventEmitter();
        this.fileUploaded = new EventEmitter();
        this.progress = 0;
        this.subscriptions = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    /**
     * @param {?} files
     * @param {?} event
     * @return {?}
     */
    onFileUploaded(files, event) {
        if (!files || files.length == 0)
            return;
        this.execute(files, event);
    }
    /**
     * @private
     * @param {?} files
     * @param {?} event
     * @return {?}
     */
    execute(files, event) {
        if (files.length == 0)
            return;
        /** @type {?} */
        var file = files[0];
        /** @type {?} */
        const validationResult = this.initValidation(file);
        if (!validationResult.isValid) {
            validationResult.errors.forEach((/**
             * @param {?} x
             * @return {?}
             */
            x => {
                switch (x) {
                    case 'Size':
                        this.modalService.showNotificationDialog(new NotificationViewModel({
                            message: `Kích thước file phải nhỏ hơn ${this.maxSize / (1024 * 1024)} mb`
                        }));
                        break;
                    case 'Type':
                        this.modalService.showNotificationDialog(new NotificationViewModel({
                            message: `Loại file không phù hợp`
                        }));
                        break;
                }
            }));
            return;
        }
        if (this.cropImage) {
            /** @type {?} */
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = (/**
             * @param {?} loadEvent
             * @return {?}
             */
            (loadEvent) => {
                /** @type {?} */
                const image = new FileViewModel({
                    createdDate: new Date(),
                    lastModifiedDate: new Date(),
                    createdBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null,
                    lastModifiedBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null
                });
                image.src = loadEvent.target.result;
                this.modalService.showTemplateDialog({
                    title: this.title,
                    customSize: 'modal-lg',
                    mode: 'Custom',
                    autoClose: true,
                    icon: this.icon,
                    data: {
                        imageElement: image,
                        eventFile: event,
                        cutRatio: this.cutRatio,
                        maintainAspectRatio: this.maintainAspectRatio,
                        resizeToWidth: this.resizeToWidth
                    },
                    template: CropperComponent,
                    acceptCallback: (/**
                     * @param {?} base64String
                     * @return {?}
                     */
                    (base64String) => {
                        /** @type {?} */
                        const base64FileParts = base64String.split(',');
                        if (base64FileParts.length < 2) {
                            return;
                        }
                        /** @type {?} */
                        const base64FileData = base64FileParts[1];
                        this.loading = true;
                        this.changeLoading.emit(this.loading);
                        this.fileService.uploadFiles(new FileRequest({
                            createdBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null,
                            items: [new FileViewModel({
                                    src: base64FileData,
                                    name: file.name,
                                    size: file.size,
                                    type: file.type,
                                    createdDate: new Date(),
                                    lastModifiedDate: new Date(),
                                    createdBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null,
                                    lastModifiedBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null
                                })],
                            mockData: new FileResponse({
                                status: true,
                                items: [
                                    new FileViewModel({
                                        src: base64String,
                                        size: file.size,
                                        name: file.name,
                                        createdDate: new Date(),
                                        lastModifiedDate: new Date(),
                                        createdBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null,
                                        lastModifiedBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null
                                    })
                                ]
                            })
                        })).pipe(take(1), finalize((/**
                         * @return {?}
                         */
                        () => {
                            this.loading = false;
                            this.changeLoading.emit(this.loading);
                        }))).subscribe((/**
                         * @param {?} response
                         * @return {?}
                         */
                        response => {
                            if (response.items.length > 0) {
                                /** @type {?} */
                                const uploadedFilePath = response.items[0].src;
                                this.fileUploaded.emit(new FileViewModel({
                                    src: uploadedFilePath,
                                    name: file.name,
                                    size: file.size,
                                    type: file.type,
                                    createdDate: new Date(),
                                    lastModifiedDate: new Date(),
                                    createdBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null,
                                    lastModifiedBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null
                                }));
                            }
                        }));
                    })
                });
            });
        }
        else {
            this.loading = true;
            this.changeLoading.emit(this.loading);
            /** @type {?} */
            const uploadFileSubscription = this.fileService.uploadProgress(file).pipe(tap(((/**
             * @param {?} event
             * @return {?}
             */
            event => {
                if (event.type === HttpEventType.UploadProgress) {
                    this.progress = Math.round((100 * event.loaded) / event.total);
                    this.changeProgress.emit(this.progress);
                }
                else if (event.type === HttpEventType.Response) {
                    /** @type {?} */
                    const response = event.body;
                    this.progress = 0;
                    this.loading = false;
                    this.changeProgress.emit(this.progress);
                    this.changeLoading.emit(this.loading);
                    this.fileUploaded.emit(new FileViewModel({
                        src: response.items && response.items.length > 0 ? response.items[0].src : null,
                        name: file.name
                    }));
                }
            })), (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                console.log(err);
            }))).subscribe();
            this.subscriptions.add(uploadFileSubscription);
        }
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    initValidation(file) {
        /** @type {?} */
        let isValid = true;
        /** @type {?} */
        let errors = [];
        if (this.fileType) {
            this.initExtentionFile(this.fileType);
            /** @type {?} */
            const types = file.name.split('.');
            /** @type {?} */
            const extension = types[types.length - 1];
            isValid = this.currentTypes.indexOf(extension) >= 0;
            if (!isValid) {
                errors.push('Type');
                return { isValid: isValid, errors: errors };
            }
        }
        if (this.maxSize && this.maxSize !== 0) {
            isValid = +file.size < +this.maxSize;
            if (!isValid) {
                errors.push('Size');
                return { isValid: isValid, errors: errors };
            }
            ;
        }
        return { isValid: isValid, errors: errors };
    }
    /**
     * @private
     * @param {?} fileType
     * @return {?}
     */
    initExtentionFile(fileType) {
        switch (fileType) {
            case 'doc':
                this.currentTypes = ['csv', 'doc', 'docx', 'log', 'msg', 'rtf', 'txt', 'wpf', 'pdf', 'csv', 'ppt', 'pps', 'vcf', 'xlr', 'xls', 'xlsx'];
                break;
            case 'image':
                this.currentTypes = ['bmp', 'dds', 'gif', 'heic', 'jpg', 'png', 'psd', 'thm', 'tif', 'jpe', 'jpeg'];
                break;
            case 'audio':
                this.currentTypes = ['aif', 'iff', 'm3u', 'm4a', 'mid', 'mp3', 'mpa', 'wav', 'wma'];
                break;
            case 'video':
                this.currentTypes = ['3g2', '3gp', 'avi', 'flv', 'm4v', 'mov', 'mp4', 'mpg', 'wmv'];
                break;
            case 'default':
                this.currentTypes = ['csv', 'doc', 'docx', 'log', 'msg', 'rtf', 'txt', 'wpf', 'pdf', 'csv', 'ppt', 'pps', 'vcf', 'xlr', 'xls', 'xlsx',
                    'bmp', 'dds', 'gif', 'heic', 'jpg', 'png', 'psd', 'thm', 'tif', 'jpe', 'jpeg',
                    'aif', 'iff', 'm3u', 'm4a', 'mid', 'mp3', 'mpa', 'wav', 'wma',
                    '3g2', '3gp', 'avi', 'flv', 'm4v', 'mov', 'mp4', 'mpg', 'wmv'
                ];
                break;
            default: return;
        }
    }
}
UploaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-file-uploader',
                template: "<div>\r\n  <a (click)=\"file.click()\">\r\n    <ng-content></ng-content>\r\n  </a>\r\n  <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin loading-icon fa-fw\"></i>\r\n  <input [attr.validation-name]=\"validationName\" type=\"file\" #file (click)=\"file.value = null\"\r\n    (change)=\"onFileUploaded($event.target.files, $event)\" style=\"visibility:hidden; width: 0; height: 0;\" />\r\n</div>",
                styles: [".tiny{width:50px}.small{width:90px}.medium{width:200px}.large{width:400px}.full{width:100%}.image-radious{border-radius:50%;overflow:hidden}.image-gallery-wrapper .title-gallery{font-weight:500;text-transform:uppercase;color:#6c757d}.image-gallery-wrapper .ngx-dnd-container{display:flex;flex-wrap:wrap;position:relative}.image-gallery-wrapper .ngx-dnd-container.big-image{padding-left:212px;min-height:205px}.image-gallery-wrapper .ngx-dnd-container.big-image .ngx-dnd-item:first-child{position:absolute;left:0;top:0;width:200px}.cover-tool{display:none}.selected-file .deletable-image .selected-icon,.selected-file .deletable-image::before{opacity:1}.deletable-image{display:inline-block;position:relative}.deletable-image::before{content:\"\";position:absolute;width:100%;height:100%;background-color:rgba(255,255,255,.3);opacity:0;z-index:1;transition:.4s ease-in-out}.deletable-image .selected-icon{color:#0f0;opacity:0;transition:.4s ease-in-out;font-size:30px;position:absolute;bottom:0;right:0;z-index:2;display:unset!important}.deletable-image .cover-tool{display:block;position:absolute;background:rgba(255,255,255,.3);transition:.4s ease-in-out;width:100%;height:100%;top:0;visibility:hidden;opacity:0;transform:translateY(0);z-index:3}.deletable-image .cover-tool a{text-decoration:none;text-align:center;width:25px;line-height:25px;height:25px;background:rgba(255,255,255,.5);transition:.1s}.deletable-image .cover-tool a.edit{color:#052d3e}.deletable-image .cover-tool a.remove{color:#d61e00}.deletable-image .cover-tool a:hover{background:#fff}.deletable-image .cover-tool katana-file-uploader{display:block;text-decoration:none;text-align:center;width:25px;line-height:25px;height:25px;background:rgba(255,255,255,.5);transition:.1s}.deletable-image .cover-tool katana-file-uploader a{position:relative;top:0;display:block;color:#052d3e}.deletable-image:hover .selected-icon,.deletable-image:hover::before{opacity:0}.deletable-image:hover .cover-tool{display:block;transform:translateY(0);visibility:visible;opacity:1}.selected-icon{display:none}.img-ratio-4-3{position:relative;width:100%;height:0;overflow:hidden;padding-bottom:75%}.img-ratio-4-3 img{position:absolute;top:50%;left:50%;transform:translate3D(-50%,-50%,0);width:100%;height:auto}.img-ratio-4-3 img .img-width{width:100%;height:auto}.img-ratio-4-3 img.img-height{height:100%;width:auto}.img-ratio-4-3 .iframe--wrapper{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%}.img-ratio-4-3 iframe{left:0;top:0;height:100%;width:100%;position:absolute}.img-ratio-1-1{position:relative;width:100%;height:0;overflow:hidden;padding-bottom:100%}.img-ratio-1-1 img{position:absolute;top:50%;left:50%;transform:translate3D(-50%,-50%,0);width:100%;height:auto}.img-ratio-1-1 img.img-width{width:100%;height:auto}.img-ratio-1-1 img.img-height{height:100%;width:auto}.img-ratio-16-9{padding-bottom:56.25%;height:0;width:100%;position:relative;overflow:hidden}.img-ratio-16-9 img{position:absolute;top:50%;left:50%;transform:translate3D(-50%,-50%,0);height:100%}.img-ratio-16-9 img.full-width,.img-ratio-16-9 img.img-width{width:100%;height:auto}.img-ratio-16-9 .iframe--wrapper,.img-ratio-16-9 .videocall__wrapper{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%}a{text-decoration:none}.loading-image{background:rgba(255,255,255,.3);transition:.4s ease-in-out;width:100%;height:100%;top:0;right:0;text-align:center;align-items:center}.loading-image i{color:#eb5d13}.progress-bar-striped.active{-webkit-animation:.4s linear infinite progress-bar-stripes;animation:.4s linear infinite progress-bar-stripes}"]
            }] }
];
/** @nocollapse */
UploaderComponent.ctorParameters = () => [
    { type: ModalService },
    { type: FileService },
    { type: AuthenticationService }
];
UploaderComponent.propDecorators = {
    icon: [{ type: Input }],
    title: [{ type: Input }],
    multiple: [{ type: Input }],
    cropImage: [{ type: Input }],
    validationName: [{ type: Input }],
    maxSize: [{ type: Input }],
    fileType: [{ type: Input }],
    cutRatio: [{ type: Input }],
    resizeToWidth: [{ type: Input }],
    maintainAspectRatio: [{ type: Input }],
    changeLoading: [{ type: Output, args: ['checkedLoading',] }],
    changeProgress: [{ type: Output, args: ['checkedProgress',] }],
    fileUploaded: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UploaderComponent.prototype.icon;
    /** @type {?} */
    UploaderComponent.prototype.title;
    /** @type {?} */
    UploaderComponent.prototype.multiple;
    /** @type {?} */
    UploaderComponent.prototype.cropImage;
    /** @type {?} */
    UploaderComponent.prototype.validationName;
    /** @type {?} */
    UploaderComponent.prototype.maxSize;
    /** @type {?} */
    UploaderComponent.prototype.fileType;
    /** @type {?} */
    UploaderComponent.prototype.cutRatio;
    /** @type {?} */
    UploaderComponent.prototype.resizeToWidth;
    /** @type {?} */
    UploaderComponent.prototype.maintainAspectRatio;
    /** @type {?} */
    UploaderComponent.prototype.changeLoading;
    /** @type {?} */
    UploaderComponent.prototype.changeProgress;
    /** @type {?} */
    UploaderComponent.prototype.fileUploaded;
    /** @type {?} */
    UploaderComponent.prototype.loading;
    /** @type {?} */
    UploaderComponent.prototype.progress;
    /**
     * @type {?}
     * @private
     */
    UploaderComponent.prototype.currentTypes;
    /**
     * @type {?}
     * @private
     */
    UploaderComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @protected
     */
    UploaderComponent.prototype.modalService;
    /**
     * @type {?}
     * @protected
     */
    UploaderComponent.prototype.fileService;
    /**
     * @type {?}
     * @protected
     */
    UploaderComponent.prototype.authenticationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9maWxlL2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBUXZELE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQW1CNUIsWUFDWSxZQUEwQixFQUMxQixXQUF3QixFQUN4QixxQkFBNEM7UUFGNUMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQXJCeEMsU0FBSSxHQUFXLGVBQWUsQ0FBQztRQUMvQixVQUFLLEdBQVcsZUFBZSxDQUFDO1FBQ2hDLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsWUFB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LDBDQUFzRTs7SUFDdEUsMkNBQXVFOztJQUN2RSx5Q0FBZ0Y7O0lBQ2hGLG9DQUF3Qjs7SUFDeEIscUNBQTRCOzs7OztJQUM1Qix5Q0FBNEI7Ozs7O0lBQzVCLDBDQUF5RDs7Ozs7SUFHdkQseUNBQW9DOzs7OztJQUNwQyx3Q0FBa0M7Ozs7O0lBQ2xDLGtEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0YWtlLCBmaW5hbGl6ZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBIdHRwRXZlbnRUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRmlsZVZpZXdNb2RlbCwgRmlsZVJlcXVlc3QsIEZpbGVSZXNwb25zZSB9IGZyb20gJy4vZmlsZS5tb2RlbCc7XHJcbmltcG9ydCB7IENyb3BwZXJDb21wb25lbnQgfSBmcm9tICcuLi9jcm9wcGVyL2Nyb3BwZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmlsZVNlcnZpY2UgfSBmcm9tICcuL2ZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblZpZXdNb2RlbCB9IGZyb20gJy4uL21vZGFscy9tb2RhbC5tb2RlbCc7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kYWxzL21vZGFsLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrYXRhbmEtZmlsZS11cGxvYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZpbGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwbG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpY29uOiBzdHJpbmcgPSAnZmEgZmEtdHdpdHRlcic7XHJcbiAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmcgPSAnQ2jhu4luaCBz4butYSDhuqNuaCc7XHJcbiAgQElucHV0KCkgcHVibGljIG11bHRpcGxlOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgY3JvcEltYWdlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWxpZGF0aW9uTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtYXhTaXplOiBudW1iZXIgPSAxMCAqIDEwMjQgKiAxMDI0O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBmaWxlVHlwZTogJ2RvYycgfCAnaW1hZ2UnIHwgJ2F1ZGlvJyB8ICd2aWRlbycgfCAnZGVmYXVsdCcgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgcHVibGljIGN1dFJhdGlvOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcHVibGljIHJlc2l6ZVRvV2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBwdWJsaWMgbWFpbnRhaW5Bc3BlY3RSYXRpbzogYm9vbGVhbjtcclxuICBAT3V0cHV0KCdjaGVja2VkTG9hZGluZycpIGNoYW5nZUxvYWRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgnY2hlY2tlZFByb2dyZXNzJykgY2hhbmdlUHJvZ3Jlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgcHVibGljIGZpbGVVcGxvYWRlZDogRXZlbnRFbWl0dGVyPEZpbGVWaWV3TW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuO1xyXG4gIHB1YmxpYyBwcm9ncmVzczogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIGN1cnJlbnRUeXBlczogYW55W107XHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxyXG4gICAgcHJvdGVjdGVkIGZpbGVTZXJ2aWNlOiBGaWxlU2VydmljZSxcclxuICAgIHByb3RlY3RlZCBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkZpbGVVcGxvYWRlZChmaWxlczogRmlsZVtdLCBldmVudDogYW55KSB7XHJcbiAgICBpZiAoIWZpbGVzIHx8IGZpbGVzLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcbiAgICB0aGlzLmV4ZWN1dGUoZmlsZXMsIGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhlY3V0ZShmaWxlczogRmlsZVtdLCBldmVudDogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoZmlsZXMubGVuZ3RoID09IDApIHJldHVybjtcclxuICAgIHZhciBmaWxlID0gZmlsZXNbMF07XHJcbiAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gdGhpcy5pbml0VmFsaWRhdGlvbihmaWxlKTtcclxuICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5pc1ZhbGlkKSB7XHJcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuZXJyb3JzLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgc3dpdGNoICh4KSB7XHJcbiAgICAgICAgICBjYXNlICdTaXplJzpcclxuICAgICAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd05vdGlmaWNhdGlvbkRpYWxvZyhuZXcgTm90aWZpY2F0aW9uVmlld01vZGVsKHtcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBgS8OtY2ggdGjGsOG7m2MgZmlsZSBwaOG6o2kgbmjhu48gaMahbiAke3RoaXMubWF4U2l6ZSAvICgxMDI0ICogMTAyNCl9IG1iYFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnVHlwZSc6XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dOb3RpZmljYXRpb25EaWFsb2cobmV3IE5vdGlmaWNhdGlvblZpZXdNb2RlbCh7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogYExv4bqhaSBmaWxlIGtow7RuZyBwaMO5IGjhu6NwYFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNyb3BJbWFnZSkge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IChsb2FkRXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEZpbGVWaWV3TW9kZWwoe1xyXG4gICAgICAgICAgY3JlYXRlZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICBsYXN0TW9kaWZpZWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgY3JlYXRlZEJ5OiB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlciA/IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyLmlkIDogbnVsbCxcclxuICAgICAgICAgIGxhc3RNb2RpZmllZEJ5OiB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlciA/IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyLmlkIDogbnVsbFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IGxvYWRFdmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dUZW1wbGF0ZURpYWxvZyh7XHJcbiAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcclxuICAgICAgICAgIGN1c3RvbVNpemU6ICdtb2RhbC1sZycsXHJcbiAgICAgICAgICBtb2RlOiAnQ3VzdG9tJyxcclxuICAgICAgICAgIGF1dG9DbG9zZTogdHJ1ZSxcclxuICAgICAgICAgIGljb246IHRoaXMuaWNvbixcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgaW1hZ2VFbGVtZW50OiBpbWFnZSxcclxuICAgICAgICAgICAgZXZlbnRGaWxlOiBldmVudCxcclxuICAgICAgICAgICAgY3V0UmF0aW86IHRoaXMuY3V0UmF0aW8sXHJcbiAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IHRoaXMubWFpbnRhaW5Bc3BlY3RSYXRpbyxcclxuICAgICAgICAgICAgcmVzaXplVG9XaWR0aDogdGhpcy5yZXNpemVUb1dpZHRoXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGVtcGxhdGU6IENyb3BwZXJDb21wb25lbnQsXHJcbiAgICAgICAgICBhY2NlcHRDYWxsYmFjazogKGJhc2U2NFN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlNjRGaWxlUGFydHMgPSBiYXNlNjRTdHJpbmcuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgaWYgKGJhc2U2NEZpbGVQYXJ0cy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2U2NEZpbGVEYXRhID0gYmFzZTY0RmlsZVBhcnRzWzFdO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUxvYWRpbmcuZW1pdCh0aGlzLmxvYWRpbmcpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVTZXJ2aWNlLnVwbG9hZEZpbGVzKG5ldyBGaWxlUmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgY3JlYXRlZEJ5OiB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlciA/IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyLmlkIDogbnVsbCxcclxuICAgICAgICAgICAgICBpdGVtczogW25ldyBGaWxlVmlld01vZGVsKHtcclxuICAgICAgICAgICAgICAgIHNyYzogYmFzZTY0RmlsZURhdGEsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBzaXplOiBmaWxlLnNpemUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBmaWxlLnR5cGUsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQnk6IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyID8gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIuaWQgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbGFzdE1vZGlmaWVkQnk6IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyID8gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIuaWQgOiBudWxsXHJcbiAgICAgICAgICAgICAgfSldLFxyXG4gICAgICAgICAgICAgIG1vY2tEYXRhOiBuZXcgRmlsZVJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBGaWxlVmlld01vZGVsKHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IGJhc2U2NFN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiBmaWxlLnNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEJ5OiB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlciA/IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyLmlkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWRCeTogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KSkucGlwZSh0YWtlKDEpLCBmaW5hbGl6ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VMb2FkaW5nLmVtaXQodGhpcy5sb2FkaW5nKTtcclxuICAgICAgICAgICAgfSkpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLml0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwbG9hZGVkRmlsZVBhdGggPSByZXNwb25zZS5pdGVtc1swXS5zcmM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVVcGxvYWRlZC5lbWl0KG5ldyBGaWxlVmlld01vZGVsKHtcclxuICAgICAgICAgICAgICAgICAgc3JjOiB1cGxvYWRlZEZpbGVQYXRoLFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgdHlwZTogZmlsZS50eXBlLFxyXG4gICAgICAgICAgICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgbGFzdE1vZGlmaWVkRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgY3JlYXRlZEJ5OiB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlciA/IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyLmlkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgbGFzdE1vZGlmaWVkQnk6IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyID8gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIuaWQgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jaGFuZ2VMb2FkaW5nLmVtaXQodGhpcy5sb2FkaW5nKTtcclxuICAgICAgY29uc3QgdXBsb2FkRmlsZVN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsZVNlcnZpY2UudXBsb2FkUHJvZ3Jlc3MoZmlsZSkucGlwZShcclxuICAgICAgICB0YXAoKGV2ZW50ID0+IHtcclxuICAgICAgICAgIGlmIChldmVudC50eXBlID09PSBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKCgxMDAgKiBldmVudC5sb2FkZWQpIC8gZXZlbnQudG90YWwpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVByb2dyZXNzLmVtaXQodGhpcy5wcm9ncmVzcyk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09IEh0dHBFdmVudFR5cGUuUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBldmVudC5ib2R5O1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUHJvZ3Jlc3MuZW1pdCh0aGlzLnByb2dyZXNzKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VMb2FkaW5nLmVtaXQodGhpcy5sb2FkaW5nKTtcclxuICAgICAgICAgICAgdGhpcy5maWxlVXBsb2FkZWQuZW1pdChuZXcgRmlsZVZpZXdNb2RlbCh7XHJcbiAgICAgICAgICAgICAgc3JjOiByZXNwb25zZS5pdGVtcyAmJiByZXNwb25zZS5pdGVtcy5sZW5ndGggPiAwID8gcmVzcG9uc2UuaXRlbXNbMF0uc3JjIDogbnVsbCxcclxuICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWVcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICkpLnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKHVwbG9hZEZpbGVTdWJzY3JpcHRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0VmFsaWRhdGlvbihmaWxlOiBGaWxlKTogeyBpc1ZhbGlkOiBCb29sZWFuOyBlcnJvcnM6IGFueVtdIH0ge1xyXG4gICAgbGV0IGlzVmFsaWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgbGV0IGVycm9ycyA9IFtdO1xyXG4gICAgaWYgKHRoaXMuZmlsZVR5cGUpIHtcclxuICAgICAgdGhpcy5pbml0RXh0ZW50aW9uRmlsZSh0aGlzLmZpbGVUeXBlKTtcclxuICAgICAgY29uc3QgdHlwZXMgPSBmaWxlLm5hbWUuc3BsaXQoJy4nKTtcclxuICAgICAgY29uc3QgZXh0ZW5zaW9uID0gdHlwZXNbdHlwZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgIGlzVmFsaWQgPSB0aGlzLmN1cnJlbnRUeXBlcy5pbmRleE9mKGV4dGVuc2lvbikgPj0gMDtcclxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgZXJyb3JzLnB1c2goJ1R5cGUnKTtcclxuICAgICAgICByZXR1cm4geyBpc1ZhbGlkOiBpc1ZhbGlkLCBlcnJvcnM6IGVycm9ycyB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubWF4U2l6ZSAmJiB0aGlzLm1heFNpemUgIT09IDApIHtcclxuICAgICAgaXNWYWxpZCA9ICtmaWxlLnNpemUgPCArdGhpcy5tYXhTaXplO1xyXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICBlcnJvcnMucHVzaCgnU2l6ZScpO1xyXG4gICAgICAgIHJldHVybiB7IGlzVmFsaWQ6IGlzVmFsaWQsIGVycm9yczogZXJyb3JzIH07XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBpc1ZhbGlkOiBpc1ZhbGlkLCBlcnJvcnM6IGVycm9ycyB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0RXh0ZW50aW9uRmlsZShmaWxlVHlwZTogc3RyaW5nKSB7XHJcbiAgICBzd2l0Y2ggKGZpbGVUeXBlKSB7XHJcbiAgICAgIGNhc2UgJ2RvYyc6XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VHlwZXMgPSBbJ2NzdicsICdkb2MnLCAnZG9jeCcsICdsb2cnLCAnbXNnJywgJ3J0ZicsICd0eHQnLCAnd3BmJywgJ3BkZicsICdjc3YnLCAncHB0JywgJ3BwcycsICd2Y2YnLCAneGxyJywgJ3hscycsICd4bHN4J107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICB0aGlzLmN1cnJlbnRUeXBlcyA9IFsnYm1wJywgJ2RkcycsICdnaWYnLCAnaGVpYycsICdqcGcnLCAncG5nJywgJ3BzZCcsICd0aG0nLCAndGlmJywgJ2pwZScsICdqcGVnJ107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2F1ZGlvJzpcclxuICAgICAgICB0aGlzLmN1cnJlbnRUeXBlcyA9IFsnYWlmJywgJ2lmZicsICdtM3UnLCAnbTRhJywgJ21pZCcsICdtcDMnLCAnbXBhJywgJ3dhdicsICd3bWEnXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAndmlkZW8nOlxyXG4gICAgICAgIHRoaXMuY3VycmVudFR5cGVzID0gWyczZzInLCAnM2dwJywgJ2F2aScsICdmbHYnLCAnbTR2JywgJ21vdicsICdtcDQnLCAnbXBnJywgJ3dtdiddO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdkZWZhdWx0JzpcclxuICAgICAgICB0aGlzLmN1cnJlbnRUeXBlcyA9IFsnY3N2JywgJ2RvYycsICdkb2N4JywgJ2xvZycsICdtc2cnLCAncnRmJywgJ3R4dCcsICd3cGYnLCAncGRmJywgJ2NzdicsICdwcHQnLCAncHBzJywgJ3ZjZicsICd4bHInLCAneGxzJywgJ3hsc3gnLFxyXG4gICAgICAgICAgJ2JtcCcsICdkZHMnLCAnZ2lmJywgJ2hlaWMnLCAnanBnJywgJ3BuZycsICdwc2QnLCAndGhtJywgJ3RpZicsICdqcGUnLCAnanBlZycsXHJcbiAgICAgICAgICAnYWlmJywgJ2lmZicsICdtM3UnLCAnbTRhJywgJ21pZCcsICdtcDMnLCAnbXBhJywgJ3dhdicsICd3bWEnLFxyXG4gICAgICAgICAgJzNnMicsICczZ3AnLCAnYXZpJywgJ2ZsdicsICdtNHYnLCAnbW92JywgJ21wNCcsICdtcGcnLCAnd212J1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6IHJldHVybjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19