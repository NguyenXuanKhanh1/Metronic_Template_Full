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
                selector: 'c-file-uploader',
                template: "<div>\r\n  <a (click)=\"file.click()\">\r\n    <ng-content></ng-content>\r\n  </a>\r\n  <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin loading-icon fa-fw\"></i>\r\n  <input [attr.validation-name]=\"validationName\" type=\"file\" #file (click)=\"file.value = null\"\r\n    (change)=\"onFileUploaded($event.target.files, $event)\" style=\"visibility:hidden; width: 0; height: 0;\" />\r\n</div>",
                styles: [".tiny{width:50px}.small{width:90px}.medium{width:200px}.large{width:400px}.full{width:100%}.image-radious{border-radius:50%;overflow:hidden}.image-gallery-wrapper .title-gallery{font-weight:500;text-transform:uppercase;color:#6c757d}.image-gallery-wrapper .ngx-dnd-container{display:flex;flex-wrap:wrap;position:relative}.image-gallery-wrapper .ngx-dnd-container.big-image{padding-left:212px;min-height:205px}.image-gallery-wrapper .ngx-dnd-container.big-image .ngx-dnd-item:first-child{position:absolute;left:0;top:0;width:200px}.cover-tool{display:none}.selected-file .deletable-image .selected-icon,.selected-file .deletable-image::before{opacity:1}.deletable-image{display:inline-block;position:relative}.deletable-image::before{content:\"\";position:absolute;width:100%;height:100%;background-color:rgba(255,255,255,.3);opacity:0;z-index:1;transition:.4s ease-in-out}.deletable-image .selected-icon{color:#0f0;opacity:0;transition:.4s ease-in-out;font-size:30px;position:absolute;bottom:0;right:0;z-index:2;display:unset!important}.deletable-image .cover-tool{display:block;position:absolute;background:rgba(255,255,255,.3);transition:.4s ease-in-out;width:100%;height:100%;top:0;visibility:hidden;opacity:0;transform:translateY(0);z-index:3}.deletable-image .cover-tool a{text-decoration:none;text-align:center;width:25px;line-height:25px;height:25px;background:rgba(255,255,255,.5);transition:.1s}.deletable-image .cover-tool a.edit{color:#052d3e}.deletable-image .cover-tool a.remove{color:#d61e00}.deletable-image .cover-tool a:hover{background:#fff}.deletable-image .cover-tool c-file-uploader{display:block;text-decoration:none;text-align:center;width:25px;line-height:25px;height:25px;background:rgba(255,255,255,.5);transition:.1s}.deletable-image .cover-tool c-file-uploader a{position:relative;top:0;display:block;color:#052d3e}.deletable-image:hover .selected-icon,.deletable-image:hover::before{opacity:0}.deletable-image:hover .cover-tool{display:block;transform:translateY(0);visibility:visible;opacity:1}.selected-icon{display:none}.img-ratio-4-3{position:relative;width:100%;height:0;overflow:hidden;padding-bottom:75%}.img-ratio-4-3 img{position:absolute;top:50%;left:50%;transform:translate3D(-50%,-50%,0);width:100%;height:auto}.img-ratio-4-3 img .img-width{width:100%;height:auto}.img-ratio-4-3 img.img-height{height:100%;width:auto}.img-ratio-4-3 .iframe--wrapper{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%}.img-ratio-4-3 iframe{left:0;top:0;height:100%;width:100%;position:absolute}.img-ratio-1-1{position:relative;width:100%;height:0;overflow:hidden;padding-bottom:100%}.img-ratio-1-1 img{position:absolute;top:50%;left:50%;transform:translate3D(-50%,-50%,0);width:100%;height:auto}.img-ratio-1-1 img.img-width{width:100%;height:auto}.img-ratio-1-1 img.img-height{height:100%;width:auto}.img-ratio-16-9{padding-bottom:56.25%;height:0;width:100%;position:relative;overflow:hidden}.img-ratio-16-9 img{position:absolute;top:50%;left:50%;transform:translate3D(-50%,-50%,0);height:100%}.img-ratio-16-9 img.full-width,.img-ratio-16-9 img.img-width{width:100%;height:auto}.img-ratio-16-9 .iframe--wrapper,.img-ratio-16-9 .videocall__wrapper{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%}a{text-decoration:none}.loading-image{background:rgba(255,255,255,.3);transition:.4s ease-in-out;width:100%;height:100%;top:0;right:0;text-align:center;align-items:center}.loading-image i{color:#eb5d13}.progress-bar-striped.active{-webkit-animation:.4s linear infinite progress-bar-stripes;animation:.4s linear infinite progress-bar-stripes}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9maWxlL2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBUXZELE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQW1CNUIsWUFDWSxZQUEwQixFQUMxQixXQUF3QixFQUN4QixxQkFBNEM7UUFGNUMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQXJCeEMsU0FBSSxHQUFXLGVBQWUsQ0FBQztRQUMvQixVQUFLLEdBQVcsZUFBZSxDQUFDO1FBQ2hDLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsWUFBTyxHQUFXLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ25DLGFBQVEsR0FBb0QsU0FBUyxDQUFDO1FBSTVELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUMzQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDdEQsaUJBQVksR0FBZ0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV6RSxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLGtCQUFhLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7SUFNckQsQ0FBQzs7OztJQUVMLFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBRU0sY0FBYyxDQUFDLEtBQWEsRUFBRSxLQUFVO1FBQzdDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTztRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7Ozs7O0lBRU8sT0FBTyxDQUFDLEtBQWEsRUFBRSxLQUFVO1FBQ3ZDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTzs7WUFDMUIsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7O2NBQ2IsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7UUFDbEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUM3QixnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNsQyxRQUFRLENBQUMsRUFBRTtvQkFDVCxLQUFLLE1BQU07d0JBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLHFCQUFxQixDQUFDOzRCQUNqRSxPQUFPLEVBQUUsZ0NBQWdDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUs7eUJBQzNFLENBQUMsQ0FBQyxDQUFDO3dCQUNKLE1BQU07b0JBQ1IsS0FBSyxNQUFNO3dCQUNULElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsSUFBSSxxQkFBcUIsQ0FBQzs0QkFDakUsT0FBTyxFQUFFLHlCQUF5Qjt5QkFDbkMsQ0FBQyxDQUFDLENBQUM7d0JBQ0osTUFBTTtpQkFDVDtZQUNILENBQUMsRUFBQyxDQUFDO1lBQ0gsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztrQkFDWixNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7WUFDL0IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsU0FBUzs7OztZQUFHLENBQUMsU0FBYyxFQUFFLEVBQUU7O3NCQUM5QixLQUFLLEdBQUcsSUFBSSxhQUFhLENBQUM7b0JBQzlCLFdBQVcsRUFBRSxJQUFJLElBQUksRUFBRTtvQkFDdkIsZ0JBQWdCLEVBQUUsSUFBSSxJQUFJLEVBQUU7b0JBQzVCLFNBQVMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSTtvQkFDcEcsY0FBYyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJO2lCQUMxRyxDQUFDO2dCQUNGLEtBQUssQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUM7b0JBQ25DLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDakIsVUFBVSxFQUFFLFVBQVU7b0JBQ3RCLElBQUksRUFBRSxRQUFRO29CQUNkLFNBQVMsRUFBRSxJQUFJO29CQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDZixJQUFJLEVBQUU7d0JBQ0osWUFBWSxFQUFFLEtBQUs7d0JBQ25CLFNBQVMsRUFBRSxLQUFLO3dCQUNoQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7d0JBQ3ZCLG1CQUFtQixFQUFFLElBQUksQ0FBQyxtQkFBbUI7d0JBQzdDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtxQkFDbEM7b0JBQ0QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsY0FBYzs7OztvQkFBRSxDQUFDLFlBQVksRUFBRSxFQUFFOzs4QkFDekIsZUFBZSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO3dCQUMvQyxJQUFJLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzRCQUM5QixPQUFPO3lCQUNSOzs4QkFDSyxjQUFjLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQzt3QkFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxXQUFXLENBQUM7NEJBQzNDLFNBQVMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSTs0QkFDcEcsS0FBSyxFQUFFLENBQUMsSUFBSSxhQUFhLENBQUM7b0NBQ3hCLEdBQUcsRUFBRSxjQUFjO29DQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7b0NBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO29DQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtvQ0FDZixXQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUU7b0NBQ3ZCLGdCQUFnQixFQUFFLElBQUksSUFBSSxFQUFFO29DQUM1QixTQUFTLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7b0NBQ3BHLGNBQWMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSTtpQ0FDMUcsQ0FBQyxDQUFDOzRCQUNILFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQztnQ0FDekIsTUFBTSxFQUFFLElBQUk7Z0NBQ1osS0FBSyxFQUFFO29DQUNMLElBQUksYUFBYSxDQUFDO3dDQUNoQixHQUFHLEVBQUUsWUFBWTt3Q0FDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO3dDQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTt3Q0FDZixXQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUU7d0NBQ3ZCLGdCQUFnQixFQUFFLElBQUksSUFBSSxFQUFFO3dDQUM1QixTQUFTLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7d0NBQ3BHLGNBQWMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSTtxQ0FDMUcsQ0FBQztpQ0FDSDs2QkFDRixDQUFDO3lCQUNILENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUTs7O3dCQUFDLEdBQUcsRUFBRTs0QkFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7NEJBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDeEMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTOzs7O3dCQUFDLFFBQVEsQ0FBQyxFQUFFOzRCQUN2QixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7c0NBQ3ZCLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRztnQ0FDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxhQUFhLENBQUM7b0NBQ3ZDLEdBQUcsRUFBRSxnQkFBZ0I7b0NBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtvQ0FDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7b0NBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO29DQUNmLFdBQVcsRUFBRSxJQUFJLElBQUksRUFBRTtvQ0FDdkIsZ0JBQWdCLEVBQUUsSUFBSSxJQUFJLEVBQUU7b0NBQzVCLFNBQVMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSTtvQ0FDcEcsY0FBYyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJO2lDQUMxRyxDQUFDLENBQUMsQ0FBQzs2QkFDTDt3QkFDSCxDQUFDLEVBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUE7aUJBQ0YsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFBLENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztrQkFDaEMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUN2RSxHQUFHLENBQUM7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRTtnQkFDWCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLGNBQWMsRUFBRTtvQkFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQy9ELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDekM7cUJBQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxRQUFRLEVBQUU7OzBCQUMxQyxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUk7b0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO29CQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksYUFBYSxDQUFDO3dCQUN2QyxHQUFHLEVBQUUsUUFBUSxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJO3dCQUMvRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7cUJBQ2hCLENBQUMsQ0FBQyxDQUFDO2lCQUNMO1lBQ0gsQ0FBQyxFQUFDOzs7O1lBQ0EsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLENBQUMsRUFDRixDQUFDLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsSUFBVTs7WUFDM0IsT0FBTyxHQUFZLElBQUk7O1lBQ3ZCLE1BQU0sR0FBRyxFQUFFO1FBQ2YsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7O2tCQUNoQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztrQkFDNUIsU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUN6QyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQzdDO1NBQ0Y7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDdEMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDWixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDN0M7WUFBQSxDQUFDO1NBQ0g7UUFDRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBRU8saUJBQWlCLENBQUMsUUFBZ0I7UUFDeEMsUUFBUSxRQUFRLEVBQUU7WUFDaEIsS0FBSyxLQUFLO2dCQUNSLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDdkksTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNwRyxNQUFNO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNwRixNQUFNO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNwRixNQUFNO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNO29CQUNuSSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTTtvQkFDN0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO29CQUM3RCxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7aUJBQzlELENBQUM7Z0JBQ0YsTUFBTTtZQUNSLE9BQU8sQ0FBQyxDQUFDLE9BQU87U0FDakI7SUFDSCxDQUFDOzs7WUEzTkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHVaQUFvQzs7YUFFckM7Ozs7WUFOUSxZQUFZO1lBSFosV0FBVztZQUVYLHFCQUFxQjs7O21CQVUzQixLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzZCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSztrQ0FDTCxLQUFLOzRCQUNMLE1BQU0sU0FBQyxnQkFBZ0I7NkJBQ3ZCLE1BQU0sU0FBQyxpQkFBaUI7MkJBQ3hCLE1BQU07Ozs7SUFaUCxpQ0FBK0M7O0lBQy9DLGtDQUFnRDs7SUFDaEQscUNBQXlDOztJQUN6QyxzQ0FBbUM7O0lBQ25DLDJDQUF1Qzs7SUFDdkMsb0NBQW1EOztJQUNuRCxxQ0FBc0Y7O0lBQ3RGLHFDQUFpQzs7SUFDakMsMENBQXNDOztJQUN0QyxnREFBNkM7O0lBQzdDLDBDQUFzRTs7SUFDdEUsMkNBQXVFOztJQUN2RSx5Q0FBZ0Y7O0lBQ2hGLG9DQUF3Qjs7SUFDeEIscUNBQTRCOzs7OztJQUM1Qix5Q0FBNEI7Ozs7O0lBQzVCLDBDQUF5RDs7Ozs7SUFHdkQseUNBQW9DOzs7OztJQUNwQyx3Q0FBa0M7Ozs7O0lBQ2xDLGtEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0YWtlLCBmaW5hbGl6ZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBIdHRwRXZlbnRUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRmlsZVZpZXdNb2RlbCwgRmlsZVJlcXVlc3QsIEZpbGVSZXNwb25zZSB9IGZyb20gJy4vZmlsZS5tb2RlbCc7XHJcbmltcG9ydCB7IENyb3BwZXJDb21wb25lbnQgfSBmcm9tICcuLi9jcm9wcGVyL2Nyb3BwZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmlsZVNlcnZpY2UgfSBmcm9tICcuL2ZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblZpZXdNb2RlbCB9IGZyb20gJy4uL21vZGFscy9tb2RhbC5tb2RlbCc7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kYWxzL21vZGFsLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjLWZpbGUtdXBsb2FkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9maWxlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVcGxvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBwdWJsaWMgaWNvbjogc3RyaW5nID0gJ2ZhIGZhLXR3aXR0ZXInO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gJ0No4buJbmggc+G7rWEg4bqjbmgnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtdWx0aXBsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgcHVibGljIGNyb3BJbWFnZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwdWJsaWMgdmFsaWRhdGlvbk5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgbWF4U2l6ZTogbnVtYmVyID0gMTAgKiAxMDI0ICogMTAyNDtcclxuICBASW5wdXQoKSBwdWJsaWMgZmlsZVR5cGU6ICdkb2MnIHwgJ2ltYWdlJyB8ICdhdWRpbycgfCAndmlkZW8nIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjdXRSYXRpbzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyByZXNpemVUb1dpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcHVibGljIG1haW50YWluQXNwZWN0UmF0aW86IGJvb2xlYW47XHJcbiAgQE91dHB1dCgnY2hlY2tlZExvYWRpbmcnKSBjaGFuZ2VMb2FkaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoJ2NoZWNrZWRQcm9ncmVzcycpIGNoYW5nZVByb2dyZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBmaWxlVXBsb2FkZWQ6IEV2ZW50RW1pdHRlcjxGaWxlVmlld01vZGVsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbjtcclxuICBwdWJsaWMgcHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBjdXJyZW50VHlwZXM6IGFueVtdO1xyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuICAgIHByb3RlY3RlZCBmaWxlU2VydmljZTogRmlsZVNlcnZpY2UsXHJcbiAgICBwcm90ZWN0ZWQgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25GaWxlVXBsb2FkZWQoZmlsZXM6IEZpbGVbXSwgZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKCFmaWxlcyB8fCBmaWxlcy5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgdGhpcy5leGVjdXRlKGZpbGVzLCBldmVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4ZWN1dGUoZmlsZXM6IEZpbGVbXSwgZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGZpbGVzLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcbiAgICB2YXIgZmlsZSA9IGZpbGVzWzBdO1xyXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IHRoaXMuaW5pdFZhbGlkYXRpb24oZmlsZSk7XHJcbiAgICBpZiAoIXZhbGlkYXRpb25SZXN1bHQuaXNWYWxpZCkge1xyXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LmVycm9ycy5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoeCkge1xyXG4gICAgICAgICAgY2FzZSAnU2l6ZSc6XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dOb3RpZmljYXRpb25EaWFsb2cobmV3IE5vdGlmaWNhdGlvblZpZXdNb2RlbCh7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogYEvDrWNoIHRoxrDhu5tjIGZpbGUgcGjhuqNpIG5o4buPIGjGoW4gJHt0aGlzLm1heFNpemUgLyAoMTAyNCAqIDEwMjQpfSBtYmBcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ1R5cGUnOlxyXG4gICAgICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93Tm90aWZpY2F0aW9uRGlhbG9nKG5ldyBOb3RpZmljYXRpb25WaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGBMb+G6oWkgZmlsZSBraMO0bmcgcGjDuSBo4bujcGBcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jcm9wSW1hZ2UpIHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAobG9hZEV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBGaWxlVmlld01vZGVsKHtcclxuICAgICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgbGFzdE1vZGlmaWVkRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgIGNyZWF0ZWRCeTogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCA6IG51bGwsXHJcbiAgICAgICAgICBsYXN0TW9kaWZpZWRCeTogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCA6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpbWFnZS5zcmMgPSBsb2FkRXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93VGVtcGxhdGVEaWFsb2coe1xyXG4gICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXHJcbiAgICAgICAgICBjdXN0b21TaXplOiAnbW9kYWwtbGcnLFxyXG4gICAgICAgICAgbW9kZTogJ0N1c3RvbScsXHJcbiAgICAgICAgICBhdXRvQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgICBpY29uOiB0aGlzLmljb24sXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGltYWdlRWxlbWVudDogaW1hZ2UsXHJcbiAgICAgICAgICAgIGV2ZW50RmlsZTogZXZlbnQsXHJcbiAgICAgICAgICAgIGN1dFJhdGlvOiB0aGlzLmN1dFJhdGlvLFxyXG4gICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiB0aGlzLm1haW50YWluQXNwZWN0UmF0aW8sXHJcbiAgICAgICAgICAgIHJlc2l6ZVRvV2lkdGg6IHRoaXMucmVzaXplVG9XaWR0aFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRlbXBsYXRlOiBDcm9wcGVyQ29tcG9uZW50LFxyXG4gICAgICAgICAgYWNjZXB0Q2FsbGJhY2s6IChiYXNlNjRTdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYmFzZTY0RmlsZVBhcnRzID0gYmFzZTY0U3RyaW5nLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgIGlmIChiYXNlNjRGaWxlUGFydHMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBiYXNlNjRGaWxlRGF0YSA9IGJhc2U2NEZpbGVQYXJ0c1sxXTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VMb2FkaW5nLmVtaXQodGhpcy5sb2FkaW5nKTtcclxuICAgICAgICAgICAgdGhpcy5maWxlU2VydmljZS51cGxvYWRGaWxlcyhuZXcgRmlsZVJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgIGNyZWF0ZWRCeTogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgaXRlbXM6IFtuZXcgRmlsZVZpZXdNb2RlbCh7XHJcbiAgICAgICAgICAgICAgICBzcmM6IGJhc2U2NEZpbGVEYXRhLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogZmlsZS50eXBlLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEJ5OiB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlciA/IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyLmlkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZEJ5OiB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlciA/IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyLmlkIDogbnVsbFxyXG4gICAgICAgICAgICAgIH0pXSxcclxuICAgICAgICAgICAgICBtb2NrRGF0YTogbmV3IEZpbGVSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgICBuZXcgRmlsZVZpZXdNb2RlbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBiYXNlNjRTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRCeTogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE1vZGlmaWVkQnk6IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyID8gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIuaWQgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSkpLnBpcGUodGFrZSgxKSwgZmluYWxpemUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlTG9hZGluZy5lbWl0KHRoaXMubG9hZGluZyk7XHJcbiAgICAgICAgICAgIH0pKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5pdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGxvYWRlZEZpbGVQYXRoID0gcmVzcG9uc2UuaXRlbXNbMF0uc3JjO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlVXBsb2FkZWQuZW1pdChuZXcgRmlsZVZpZXdNb2RlbCh7XHJcbiAgICAgICAgICAgICAgICAgIHNyYzogdXBsb2FkZWRGaWxlUGF0aCxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICBzaXplOiBmaWxlLnNpemUsXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IGZpbGUudHlwZSxcclxuICAgICAgICAgICAgICAgICAgY3JlYXRlZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZWRCeTogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZEJ5OiB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlciA/IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyLmlkIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2hhbmdlTG9hZGluZy5lbWl0KHRoaXMubG9hZGluZyk7XHJcbiAgICAgIGNvbnN0IHVwbG9hZEZpbGVTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGVTZXJ2aWNlLnVwbG9hZFByb2dyZXNzKGZpbGUpLnBpcGUoXHJcbiAgICAgICAgdGFwKChldmVudCA9PiB7XHJcbiAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5yb3VuZCgoMTAwICogZXZlbnQubG9hZGVkKSAvIGV2ZW50LnRvdGFsKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQcm9ncmVzcy5lbWl0KHRoaXMucHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSBIdHRwRXZlbnRUeXBlLlJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gZXZlbnQuYm9keTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVByb2dyZXNzLmVtaXQodGhpcy5wcm9ncmVzcyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTG9hZGluZy5lbWl0KHRoaXMubG9hZGluZyk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZVVwbG9hZGVkLmVtaXQobmV3IEZpbGVWaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICAgIHNyYzogcmVzcG9uc2UuaXRlbXMgJiYgcmVzcG9uc2UuaXRlbXMubGVuZ3RoID4gMCA/IHJlc3BvbnNlLml0ZW1zWzBdLnNyYyA6IG51bGwsXHJcbiAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApKS5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZCh1cGxvYWRGaWxlU3Vic2NyaXB0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFZhbGlkYXRpb24oZmlsZTogRmlsZSk6IHsgaXNWYWxpZDogQm9vbGVhbjsgZXJyb3JzOiBhbnlbXSB9IHtcclxuICAgIGxldCBpc1ZhbGlkOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGxldCBlcnJvcnMgPSBbXTtcclxuICAgIGlmICh0aGlzLmZpbGVUeXBlKSB7XHJcbiAgICAgIHRoaXMuaW5pdEV4dGVudGlvbkZpbGUodGhpcy5maWxlVHlwZSk7XHJcbiAgICAgIGNvbnN0IHR5cGVzID0gZmlsZS5uYW1lLnNwbGl0KCcuJyk7XHJcbiAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHR5cGVzW3R5cGVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBpc1ZhbGlkID0gdGhpcy5jdXJyZW50VHlwZXMuaW5kZXhPZihleHRlbnNpb24pID49IDA7XHJcbiAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgIGVycm9ycy5wdXNoKCdUeXBlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgaXNWYWxpZDogaXNWYWxpZCwgZXJyb3JzOiBlcnJvcnMgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm1heFNpemUgJiYgdGhpcy5tYXhTaXplICE9PSAwKSB7XHJcbiAgICAgIGlzVmFsaWQgPSArZmlsZS5zaXplIDwgK3RoaXMubWF4U2l6ZTtcclxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgZXJyb3JzLnB1c2goJ1NpemUnKTtcclxuICAgICAgICByZXR1cm4geyBpc1ZhbGlkOiBpc1ZhbGlkLCBlcnJvcnM6IGVycm9ycyB9O1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgaXNWYWxpZDogaXNWYWxpZCwgZXJyb3JzOiBlcnJvcnMgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdEV4dGVudGlvbkZpbGUoZmlsZVR5cGU6IHN0cmluZykge1xyXG4gICAgc3dpdGNoIChmaWxlVHlwZSkge1xyXG4gICAgICBjYXNlICdkb2MnOlxyXG4gICAgICAgIHRoaXMuY3VycmVudFR5cGVzID0gWydjc3YnLCAnZG9jJywgJ2RvY3gnLCAnbG9nJywgJ21zZycsICdydGYnLCAndHh0JywgJ3dwZicsICdwZGYnLCAnY3N2JywgJ3BwdCcsICdwcHMnLCAndmNmJywgJ3hscicsICd4bHMnLCAneGxzeCddO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VHlwZXMgPSBbJ2JtcCcsICdkZHMnLCAnZ2lmJywgJ2hlaWMnLCAnanBnJywgJ3BuZycsICdwc2QnLCAndGhtJywgJ3RpZicsICdqcGUnLCAnanBlZyddO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdhdWRpbyc6XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VHlwZXMgPSBbJ2FpZicsICdpZmYnLCAnbTN1JywgJ200YScsICdtaWQnLCAnbXAzJywgJ21wYScsICd3YXYnLCAnd21hJ107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3ZpZGVvJzpcclxuICAgICAgICB0aGlzLmN1cnJlbnRUeXBlcyA9IFsnM2cyJywgJzNncCcsICdhdmknLCAnZmx2JywgJ200dicsICdtb3YnLCAnbXA0JywgJ21wZycsICd3bXYnXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZGVmYXVsdCc6XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VHlwZXMgPSBbJ2NzdicsICdkb2MnLCAnZG9jeCcsICdsb2cnLCAnbXNnJywgJ3J0ZicsICd0eHQnLCAnd3BmJywgJ3BkZicsICdjc3YnLCAncHB0JywgJ3BwcycsICd2Y2YnLCAneGxyJywgJ3hscycsICd4bHN4JyxcclxuICAgICAgICAgICdibXAnLCAnZGRzJywgJ2dpZicsICdoZWljJywgJ2pwZycsICdwbmcnLCAncHNkJywgJ3RobScsICd0aWYnLCAnanBlJywgJ2pwZWcnLFxyXG4gICAgICAgICAgJ2FpZicsICdpZmYnLCAnbTN1JywgJ200YScsICdtaWQnLCAnbXAzJywgJ21wYScsICd3YXYnLCAnd21hJyxcclxuICAgICAgICAgICczZzInLCAnM2dwJywgJ2F2aScsICdmbHYnLCAnbTR2JywgJ21vdicsICdtcDQnLCAnbXBnJywgJ3dtdidcclxuICAgICAgICBdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OiByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==