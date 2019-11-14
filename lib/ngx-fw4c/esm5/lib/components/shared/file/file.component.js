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
var UploaderComponent = /** @class */ (function () {
    function UploaderComponent(modalService, fileService, authenticationService) {
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
    UploaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UploaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.unsubscribe();
    };
    /**
     * @param {?} files
     * @param {?} event
     * @return {?}
     */
    UploaderComponent.prototype.onFileUploaded = /**
     * @param {?} files
     * @param {?} event
     * @return {?}
     */
    function (files, event) {
        if (!files || files.length == 0)
            return;
        this.execute(files, event);
    };
    /**
     * @private
     * @param {?} files
     * @param {?} event
     * @return {?}
     */
    UploaderComponent.prototype.execute = /**
     * @private
     * @param {?} files
     * @param {?} event
     * @return {?}
     */
    function (files, event) {
        var _this = this;
        if (files.length == 0)
            return;
        /** @type {?} */
        var file = files[0];
        /** @type {?} */
        var validationResult = this.initValidation(file);
        if (!validationResult.isValid) {
            validationResult.errors.forEach((/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                switch (x) {
                    case 'Size':
                        _this.modalService.showNotificationDialog(new NotificationViewModel({
                            message: "K\u00EDch th\u01B0\u1EDBc file ph\u1EA3i nh\u1ECF h\u01A1n " + _this.maxSize / (1024 * 1024) + " mb"
                        }));
                        break;
                    case 'Type':
                        _this.modalService.showNotificationDialog(new NotificationViewModel({
                            message: "Lo\u1EA1i file kh\u00F4ng ph\u00F9 h\u1EE3p"
                        }));
                        break;
                }
            }));
            return;
        }
        if (this.cropImage) {
            /** @type {?} */
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = (/**
             * @param {?} loadEvent
             * @return {?}
             */
            function (loadEvent) {
                /** @type {?} */
                var image = new FileViewModel({
                    createdDate: new Date(),
                    lastModifiedDate: new Date(),
                    createdBy: _this.authenticationService.currentUser ? _this.authenticationService.currentUser.id : null,
                    lastModifiedBy: _this.authenticationService.currentUser ? _this.authenticationService.currentUser.id : null
                });
                image.src = loadEvent.target.result;
                _this.modalService.showTemplateDialog({
                    title: _this.title,
                    customSize: 'modal-lg',
                    mode: 'Custom',
                    autoClose: true,
                    icon: _this.icon,
                    data: {
                        imageElement: image,
                        eventFile: event,
                        cutRatio: _this.cutRatio,
                        maintainAspectRatio: _this.maintainAspectRatio,
                        resizeToWidth: _this.resizeToWidth
                    },
                    template: CropperComponent,
                    acceptCallback: (/**
                     * @param {?} base64String
                     * @return {?}
                     */
                    function (base64String) {
                        /** @type {?} */
                        var base64FileParts = base64String.split(',');
                        if (base64FileParts.length < 2) {
                            return;
                        }
                        /** @type {?} */
                        var base64FileData = base64FileParts[1];
                        _this.loading = true;
                        _this.changeLoading.emit(_this.loading);
                        _this.fileService.uploadFiles(new FileRequest({
                            createdBy: _this.authenticationService.currentUser ? _this.authenticationService.currentUser.id : null,
                            items: [new FileViewModel({
                                    src: base64FileData,
                                    name: file.name,
                                    size: file.size,
                                    type: file.type,
                                    createdDate: new Date(),
                                    lastModifiedDate: new Date(),
                                    createdBy: _this.authenticationService.currentUser ? _this.authenticationService.currentUser.id : null,
                                    lastModifiedBy: _this.authenticationService.currentUser ? _this.authenticationService.currentUser.id : null
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
                                        createdBy: _this.authenticationService.currentUser ? _this.authenticationService.currentUser.id : null,
                                        lastModifiedBy: _this.authenticationService.currentUser ? _this.authenticationService.currentUser.id : null
                                    })
                                ]
                            })
                        })).pipe(take(1), finalize((/**
                         * @return {?}
                         */
                        function () {
                            _this.loading = false;
                            _this.changeLoading.emit(_this.loading);
                        }))).subscribe((/**
                         * @param {?} response
                         * @return {?}
                         */
                        function (response) {
                            if (response.items.length > 0) {
                                /** @type {?} */
                                var uploadedFilePath = response.items[0].src;
                                _this.fileUploaded.emit(new FileViewModel({
                                    src: uploadedFilePath,
                                    name: file.name,
                                    size: file.size,
                                    type: file.type,
                                    createdDate: new Date(),
                                    lastModifiedDate: new Date(),
                                    createdBy: _this.authenticationService.currentUser ? _this.authenticationService.currentUser.id : null,
                                    lastModifiedBy: _this.authenticationService.currentUser ? _this.authenticationService.currentUser.id : null
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
            var uploadFileSubscription = this.fileService.uploadProgress(file).pipe(tap(((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (event.type === HttpEventType.UploadProgress) {
                    _this.progress = Math.round((100 * event.loaded) / event.total);
                    _this.changeProgress.emit(_this.progress);
                }
                else if (event.type === HttpEventType.Response) {
                    /** @type {?} */
                    var response = event.body;
                    _this.progress = 0;
                    _this.loading = false;
                    _this.changeProgress.emit(_this.progress);
                    _this.changeLoading.emit(_this.loading);
                    _this.fileUploaded.emit(new FileViewModel({
                        src: response.items && response.items.length > 0 ? response.items[0].src : null,
                        name: file.name
                    }));
                }
            })), (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                console.log(err);
            }))).subscribe();
            this.subscriptions.add(uploadFileSubscription);
        }
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    UploaderComponent.prototype.initValidation = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var isValid = true;
        /** @type {?} */
        var errors = [];
        if (this.fileType) {
            this.initExtentionFile(this.fileType);
            /** @type {?} */
            var types = file.name.split('.');
            /** @type {?} */
            var extension = types[types.length - 1];
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
    };
    /**
     * @private
     * @param {?} fileType
     * @return {?}
     */
    UploaderComponent.prototype.initExtentionFile = /**
     * @private
     * @param {?} fileType
     * @return {?}
     */
    function (fileType) {
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
    };
    UploaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-file-uploader',
                    template: "<div>\r\n  <a (click)=\"file.click()\">\r\n    <ng-content></ng-content>\r\n  </a>\r\n  <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin loading-icon fa-fw\"></i>\r\n  <input [attr.validation-name]=\"validationName\" type=\"file\" #file (click)=\"file.value = null\"\r\n    (change)=\"onFileUploaded($event.target.files, $event)\" style=\"visibility:hidden; width: 0; height: 0;\" />\r\n</div>",
                    styles: [".tiny{width:50px}.small{width:90px}.medium{width:200px}.large{width:400px}.full{width:100%}.image-radious{border-radius:50%;overflow:hidden}.image-gallery-wrapper .title-gallery{font-weight:500;text-transform:uppercase;color:#6c757d}.image-gallery-wrapper .ngx-dnd-container{display:flex;flex-wrap:wrap;position:relative}.image-gallery-wrapper .ngx-dnd-container.big-image{padding-left:212px;min-height:205px}.image-gallery-wrapper .ngx-dnd-container.big-image .ngx-dnd-item:first-child{position:absolute;left:0;top:0;width:200px}.cover-tool{display:none}.selected-file .deletable-image .selected-icon,.selected-file .deletable-image::before{opacity:1}.deletable-image{display:inline-block;position:relative}.deletable-image::before{content:\"\";position:absolute;width:100%;height:100%;background-color:rgba(255,255,255,.3);opacity:0;z-index:1;transition:.4s ease-in-out}.deletable-image .selected-icon{color:#0f0;opacity:0;transition:.4s ease-in-out;font-size:30px;position:absolute;bottom:0;right:0;z-index:2;display:unset!important}.deletable-image .cover-tool{display:block;position:absolute;background:rgba(255,255,255,.3);transition:.4s ease-in-out;width:100%;height:100%;top:0;visibility:hidden;opacity:0;transform:translateY(0);z-index:3}.deletable-image .cover-tool a{text-decoration:none;text-align:center;width:25px;line-height:25px;height:25px;background:rgba(255,255,255,.5);transition:.1s}.deletable-image .cover-tool a.edit{color:#052d3e}.deletable-image .cover-tool a.remove{color:#d61e00}.deletable-image .cover-tool a:hover{background:#fff}.deletable-image .cover-tool katana-file-uploader{display:block;text-decoration:none;text-align:center;width:25px;line-height:25px;height:25px;background:rgba(255,255,255,.5);transition:.1s}.deletable-image .cover-tool katana-file-uploader a{position:relative;top:0;display:block;color:#052d3e}.deletable-image:hover .selected-icon,.deletable-image:hover::before{opacity:0}.deletable-image:hover .cover-tool{display:block;transform:translateY(0);visibility:visible;opacity:1}.selected-icon{display:none}.img-ratio-4-3{position:relative;width:100%;height:0;overflow:hidden;padding-bottom:75%}.img-ratio-4-3 img{position:absolute;top:50%;left:50%;transform:translate3D(-50%,-50%,0);width:100%;height:auto}.img-ratio-4-3 img .img-width{width:100%;height:auto}.img-ratio-4-3 img.img-height{height:100%;width:auto}.img-ratio-4-3 .iframe--wrapper{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%}.img-ratio-4-3 iframe{left:0;top:0;height:100%;width:100%;position:absolute}.img-ratio-1-1{position:relative;width:100%;height:0;overflow:hidden;padding-bottom:100%}.img-ratio-1-1 img{position:absolute;top:50%;left:50%;transform:translate3D(-50%,-50%,0);width:100%;height:auto}.img-ratio-1-1 img.img-width{width:100%;height:auto}.img-ratio-1-1 img.img-height{height:100%;width:auto}.img-ratio-16-9{padding-bottom:56.25%;height:0;width:100%;position:relative;overflow:hidden}.img-ratio-16-9 img{position:absolute;top:50%;left:50%;transform:translate3D(-50%,-50%,0);height:100%}.img-ratio-16-9 img.full-width,.img-ratio-16-9 img.img-width{width:100%;height:auto}.img-ratio-16-9 .iframe--wrapper,.img-ratio-16-9 .videocall__wrapper{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%}a{text-decoration:none}.loading-image{background:rgba(255,255,255,.3);transition:.4s ease-in-out;width:100%;height:100%;top:0;right:0;text-align:center;align-items:center}.loading-image i{color:#eb5d13}.progress-bar-striped.active{-webkit-animation:.4s linear infinite progress-bar-stripes;animation:.4s linear infinite progress-bar-stripes}"]
                }] }
    ];
    /** @nocollapse */
    UploaderComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: FileService },
        { type: AuthenticationService }
    ]; };
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
    return UploaderComponent;
}());
export { UploaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9maWxlL2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZEO0lBeUJFLDJCQUNZLFlBQTBCLEVBQzFCLFdBQXdCLEVBQ3hCLHFCQUE0QztRQUY1QyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBckJ4QyxTQUFJLEdBQVcsZUFBZSxDQUFDO1FBQy9CLFVBQUssR0FBVyxlQUFlLENBQUM7UUFDaEMsYUFBUSxHQUFZLElBQUksQ0FBQztRQUd6QixZQUFPLEdBQVcsRUFBRSxHQUFHLElBQUks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QUN0RixxQ0FBaUM7O0lBQ2pDLDBDQUFzQzs7SUFDdEMsZ0RBQTZDOztJQUM3QywwQ0FBc0U7O0lBQ3RFLDJDQUF1RTs7SUFDdkUseUNBQWdGOztJQUNoRixvQ0FBd0I7O0lBQ3hCLHFDQUE0Qjs7Ozs7SUFDNUIseUNBQTRCOzs7OztJQUM1QiwwQ0FBeUQ7Ozs7O0lBR3ZELHlDQUFvQzs7Ozs7SUFDcEMsd0NBQWtDOzs7OztJQUNsQyxrREFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdGFrZSwgZmluYWxpemUsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSHR0cEV2ZW50VHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEZpbGVWaWV3TW9kZWwsIEZpbGVSZXF1ZXN0LCBGaWxlUmVzcG9uc2UgfSBmcm9tICcuL2ZpbGUubW9kZWwnO1xyXG5pbXBvcnQgeyBDcm9wcGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY3JvcHBlci9jcm9wcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9maWxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25WaWV3TW9kZWwgfSBmcm9tICcuLi9tb2RhbHMvbW9kYWwubW9kZWwnO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uL21vZGFscy9tb2RhbC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2F0YW5hLWZpbGUtdXBsb2FkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9maWxlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVcGxvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBwdWJsaWMgaWNvbjogc3RyaW5nID0gJ2ZhIGZhLXR3aXR0ZXInO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gJ0No4buJbmggc+G7rWEg4bqjbmgnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtdWx0aXBsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgcHVibGljIGNyb3BJbWFnZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwdWJsaWMgdmFsaWRhdGlvbk5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgbWF4U2l6ZTogbnVtYmVyID0gMTAgKiAxMDI0ICogMTAyNDtcclxuICBASW5wdXQoKSBwdWJsaWMgZmlsZVR5cGU6ICdkb2MnIHwgJ2ltYWdlJyB8ICdhdWRpbycgfCAndmlkZW8nIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjdXRSYXRpbzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyByZXNpemVUb1dpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcHVibGljIG1haW50YWluQXNwZWN0UmF0aW86IGJvb2xlYW47XHJcbiAgQE91dHB1dCgnY2hlY2tlZExvYWRpbmcnKSBjaGFuZ2VMb2FkaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoJ2NoZWNrZWRQcm9ncmVzcycpIGNoYW5nZVByb2dyZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBmaWxlVXBsb2FkZWQ6IEV2ZW50RW1pdHRlcjxGaWxlVmlld01vZGVsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbjtcclxuICBwdWJsaWMgcHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBjdXJyZW50VHlwZXM6IGFueVtdO1xyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuICAgIHByb3RlY3RlZCBmaWxlU2VydmljZTogRmlsZVNlcnZpY2UsXHJcbiAgICBwcm90ZWN0ZWQgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25GaWxlVXBsb2FkZWQoZmlsZXM6IEZpbGVbXSwgZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKCFmaWxlcyB8fCBmaWxlcy5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgdGhpcy5leGVjdXRlKGZpbGVzLCBldmVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4ZWN1dGUoZmlsZXM6IEZpbGVbXSwgZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGZpbGVzLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcbiAgICB2YXIgZmlsZSA9IGZpbGVzWzBdO1xyXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IHRoaXMuaW5pdFZhbGlkYXRpb24oZmlsZSk7XHJcbiAgICBpZiAoIXZhbGlkYXRpb25SZXN1bHQuaXNWYWxpZCkge1xyXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LmVycm9ycy5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoeCkge1xyXG4gICAgICAgICAgY2FzZSAnU2l6ZSc6XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dOb3RpZmljYXRpb25EaWFsb2cobmV3IE5vdGlmaWNhdGlvblZpZXdNb2RlbCh7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogYEvDrWNoIHRoxrDhu5tjIGZpbGUgcGjhuqNpIG5o4buPIGjGoW4gJHt0aGlzLm1heFNpemUgLyAoMTAyNCAqIDEwMjQpfSBtYmBcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ1R5cGUnOlxyXG4gICAgICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93Tm90aWZpY2F0aW9uRGlhbG9nKG5ldyBOb3RpZmljYXRpb25WaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGBMb+G6oWkgZmlsZSBraMO0bmcgcGjDuSBo4bujcGBcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jcm9wSW1hZ2UpIHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAobG9hZEV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBGaWxlVmlld01vZGVsKHtcclxuICAgICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgbGFzdE1vZGlmaWVkRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgIGNyZWF0ZWRCeTogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCA6IG51bGwsXHJcbiAgICAgICAgICBsYXN0TW9kaWZpZWRCeTogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCA6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpbWFnZS5zcmMgPSBsb2FkRXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93VGVtcGxhdGVEaWFsb2coe1xyXG4gICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXHJcbiAgICAgICAgICBjdXN0b21TaXplOiAnbW9kYWwtbGcnLFxyXG4gICAgICAgICAgbW9kZTogJ0N1c3RvbScsXHJcbiAgICAgICAgICBhdXRvQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgICBpY29uOiB0aGlzLmljb24sXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGltYWdlRWxlbWVudDogaW1hZ2UsXHJcbiAgICAgICAgICAgIGV2ZW50RmlsZTogZXZlbnQsXHJcbiAgICAgICAgICAgIGN1dFJhdGlvOiB0aGlzLmN1dFJhdGlvLFxyXG4gICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiB0aGlzLm1haW50YWluQXNwZWN0UmF0aW8sXHJcbiAgICAgICAgICAgIHJlc2l6ZVRvV2lkdGg6IHRoaXMucmVzaXplVG9XaWR0aFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRlbXBsYXRlOiBDcm9wcGVyQ29tcG9uZW50LFxyXG4gICAgICAgICAgYWNjZXB0Q2FsbGJhY2s6IChiYXNlNjRTdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYmFzZTY0RmlsZVBhcnRzID0gYmFzZTY0U3RyaW5nLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgIGlmIChiYXNlNjRGaWxlUGFydHMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBiYXNlNjRGaWxlRGF0YSA9IGJhc2U2NEZpbGVQYXJ0c1sxXTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VMb2FkaW5nLmVtaXQodGhpcy5sb2FkaW5nKTtcclxuICAgICAgICAgICAgdGhpcy5maWxlU2VydmljZS51cGxvYWRGaWxlcyhuZXcgRmlsZVJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgIGNyZWF0ZWRCeTogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgaXRlbXM6IFtuZXcgRmlsZVZpZXdNb2RlbCh7XHJcbiAgICAgICAgICAgICAgICBzcmM6IGJhc2U2NEZpbGVEYXRhLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogZmlsZS50eXBlLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEJ5OiB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlciA/IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyLmlkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZEJ5OiB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlciA/IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyLmlkIDogbnVsbFxyXG4gICAgICAgICAgICAgIH0pXSxcclxuICAgICAgICAgICAgICBtb2NrRGF0YTogbmV3IEZpbGVSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgICBuZXcgRmlsZVZpZXdNb2RlbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBiYXNlNjRTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRCeTogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE1vZGlmaWVkQnk6IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyID8gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIuaWQgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSkpLnBpcGUodGFrZSgxKSwgZmluYWxpemUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlTG9hZGluZy5lbWl0KHRoaXMubG9hZGluZyk7XHJcbiAgICAgICAgICAgIH0pKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5pdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGxvYWRlZEZpbGVQYXRoID0gcmVzcG9uc2UuaXRlbXNbMF0uc3JjO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlVXBsb2FkZWQuZW1pdChuZXcgRmlsZVZpZXdNb2RlbCh7XHJcbiAgICAgICAgICAgICAgICAgIHNyYzogdXBsb2FkZWRGaWxlUGF0aCxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICBzaXplOiBmaWxlLnNpemUsXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IGZpbGUudHlwZSxcclxuICAgICAgICAgICAgICAgICAgY3JlYXRlZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZWRCeTogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZEJ5OiB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlciA/IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyLmlkIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2hhbmdlTG9hZGluZy5lbWl0KHRoaXMubG9hZGluZyk7XHJcbiAgICAgIGNvbnN0IHVwbG9hZEZpbGVTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGVTZXJ2aWNlLnVwbG9hZFByb2dyZXNzKGZpbGUpLnBpcGUoXHJcbiAgICAgICAgdGFwKChldmVudCA9PiB7XHJcbiAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5yb3VuZCgoMTAwICogZXZlbnQubG9hZGVkKSAvIGV2ZW50LnRvdGFsKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQcm9ncmVzcy5lbWl0KHRoaXMucHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSBIdHRwRXZlbnRUeXBlLlJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gZXZlbnQuYm9keTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVByb2dyZXNzLmVtaXQodGhpcy5wcm9ncmVzcyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTG9hZGluZy5lbWl0KHRoaXMubG9hZGluZyk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZVVwbG9hZGVkLmVtaXQobmV3IEZpbGVWaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICAgIHNyYzogcmVzcG9uc2UuaXRlbXMgJiYgcmVzcG9uc2UuaXRlbXMubGVuZ3RoID4gMCA/IHJlc3BvbnNlLml0ZW1zWzBdLnNyYyA6IG51bGwsXHJcbiAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApKS5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZCh1cGxvYWRGaWxlU3Vic2NyaXB0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFZhbGlkYXRpb24oZmlsZTogRmlsZSk6IHsgaXNWYWxpZDogQm9vbGVhbjsgZXJyb3JzOiBhbnlbXSB9IHtcclxuICAgIGxldCBpc1ZhbGlkOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGxldCBlcnJvcnMgPSBbXTtcclxuICAgIGlmICh0aGlzLmZpbGVUeXBlKSB7XHJcbiAgICAgIHRoaXMuaW5pdEV4dGVudGlvbkZpbGUodGhpcy5maWxlVHlwZSk7XHJcbiAgICAgIGNvbnN0IHR5cGVzID0gZmlsZS5uYW1lLnNwbGl0KCcuJyk7XHJcbiAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHR5cGVzW3R5cGVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBpc1ZhbGlkID0gdGhpcy5jdXJyZW50VHlwZXMuaW5kZXhPZihleHRlbnNpb24pID49IDA7XHJcbiAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgIGVycm9ycy5wdXNoKCdUeXBlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgaXNWYWxpZDogaXNWYWxpZCwgZXJyb3JzOiBlcnJvcnMgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm1heFNpemUgJiYgdGhpcy5tYXhTaXplICE9PSAwKSB7XHJcbiAgICAgIGlzVmFsaWQgPSArZmlsZS5zaXplIDwgK3RoaXMubWF4U2l6ZTtcclxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgZXJyb3JzLnB1c2goJ1NpemUnKTtcclxuICAgICAgICByZXR1cm4geyBpc1ZhbGlkOiBpc1ZhbGlkLCBlcnJvcnM6IGVycm9ycyB9O1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgaXNWYWxpZDogaXNWYWxpZCwgZXJyb3JzOiBlcnJvcnMgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdEV4dGVudGlvbkZpbGUoZmlsZVR5cGU6IHN0cmluZykge1xyXG4gICAgc3dpdGNoIChmaWxlVHlwZSkge1xyXG4gICAgICBjYXNlICdkb2MnOlxyXG4gICAgICAgIHRoaXMuY3VycmVudFR5cGVzID0gWydjc3YnLCAnZG9jJywgJ2RvY3gnLCAnbG9nJywgJ21zZycsICdydGYnLCAndHh0JywgJ3dwZicsICdwZGYnLCAnY3N2JywgJ3BwdCcsICdwcHMnLCAndmNmJywgJ3hscicsICd4bHMnLCAneGxzeCddO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VHlwZXMgPSBbJ2JtcCcsICdkZHMnLCAnZ2lmJywgJ2hlaWMnLCAnanBnJywgJ3BuZycsICdwc2QnLCAndGhtJywgJ3RpZicsICdqcGUnLCAnanBlZyddO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdhdWRpbyc6XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VHlwZXMgPSBbJ2FpZicsICdpZmYnLCAnbTN1JywgJ200YScsICdtaWQnLCAnbXAzJywgJ21wYScsICd3YXYnLCAnd21hJ107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3ZpZGVvJzpcclxuICAgICAgICB0aGlzLmN1cnJlbnRUeXBlcyA9IFsnM2cyJywgJzNncCcsICdhdmknLCAnZmx2JywgJ200dicsICdtb3YnLCAnbXA0JywgJ21wZycsICd3bXYnXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZGVmYXVsdCc6XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VHlwZXMgPSBbJ2NzdicsICdkb2MnLCAnZG9jeCcsICdsb2cnLCAnbXNnJywgJ3J0ZicsICd0eHQnLCAnd3BmJywgJ3BkZicsICdjc3YnLCAncHB0JywgJ3BwcycsICd2Y2YnLCAneGxyJywgJ3hscycsICd4bHN4JyxcclxuICAgICAgICAgICdibXAnLCAnZGRzJywgJ2dpZicsICdoZWljJywgJ2pwZycsICdwbmcnLCAncHNkJywgJ3RobScsICd0aWYnLCAnanBlJywgJ2pwZWcnLFxyXG4gICAgICAgICAgJ2FpZicsICdpZmYnLCAnbTN1JywgJ200YScsICdtaWQnLCAnbXAzJywgJ21wYScsICd3YXYnLCAnd21hJyxcclxuICAgICAgICAgICczZzInLCAnM2dwJywgJ2F2aScsICdmbHYnLCAnbTR2JywgJ21vdicsICdtcDQnLCAnbXBnJywgJ3dtdidcclxuICAgICAgICBdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OiByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==