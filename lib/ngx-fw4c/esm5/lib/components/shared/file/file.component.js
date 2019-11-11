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
                    selector: 'c-file-uploader',
                    template: "<div>\r\n  <a (click)=\"file.click()\">\r\n    <ng-content></ng-content>\r\n  </a>\r\n  <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin loading-icon fa-fw\"></i>\r\n  <input [attr.validation-name]=\"validationName\" type=\"file\" #file (click)=\"file.value = null\"\r\n    (change)=\"onFileUploaded($event.target.files, $event)\" style=\"visibility:hidden; width: 0; height: 0;\" />\r\n</div>",
                    styles: [".tiny{width:50px}.small{width:90px}.medium{width:200px}.large{width:400px}.full{width:100%}.image-radious{border-radius:50%;overflow:hidden}.image-gallery-wrapper .title-gallery{font-weight:500;text-transform:uppercase;color:#6c757d}.image-gallery-wrapper .ngx-dnd-container{display:flex;flex-wrap:wrap;position:relative}.image-gallery-wrapper .ngx-dnd-container.big-image{padding-left:212px;min-height:205px}.image-gallery-wrapper .ngx-dnd-container.big-image .ngx-dnd-item:first-child{position:absolute;left:0;top:0;width:200px}.cover-tool{display:none}.selected-file .deletable-image .selected-icon,.selected-file .deletable-image::before{opacity:1}.deletable-image{display:inline-block;position:relative}.deletable-image::before{content:\"\";position:absolute;width:100%;height:100%;background-color:rgba(255,255,255,.3);opacity:0;z-index:1;transition:.4s ease-in-out}.deletable-image .selected-icon{color:#0f0;opacity:0;transition:.4s ease-in-out;font-size:30px;position:absolute;bottom:0;right:0;z-index:2;display:unset!important}.deletable-image .cover-tool{display:block;position:absolute;background:rgba(255,255,255,.3);transition:.4s ease-in-out;width:100%;height:100%;top:0;visibility:hidden;opacity:0;transform:translateY(0);z-index:3}.deletable-image .cover-tool a{text-decoration:none;text-align:center;width:25px;line-height:25px;height:25px;background:rgba(255,255,255,.5);transition:.1s}.deletable-image .cover-tool a.edit{color:#052d3e}.deletable-image .cover-tool a.remove{color:#d61e00}.deletable-image .cover-tool a:hover{background:#fff}.deletable-image .cover-tool c-file-uploader{display:block;text-decoration:none;text-align:center;width:25px;line-height:25px;height:25px;background:rgba(255,255,255,.5);transition:.1s}.deletable-image .cover-tool c-file-uploader a{position:relative;top:0;display:block;color:#052d3e}.deletable-image:hover .selected-icon,.deletable-image:hover::before{opacity:0}.deletable-image:hover .cover-tool{display:block;transform:translateY(0);visibility:visible;opacity:1}.selected-icon{display:none}.img-ratio-4-3{position:relative;width:100%;height:0;overflow:hidden;padding-bottom:75%}.img-ratio-4-3 img{position:absolute;top:50%;left:50%;transform:translate3D(-50%,-50%,0);width:100%;height:auto}.img-ratio-4-3 img .img-width{width:100%;height:auto}.img-ratio-4-3 img.img-height{height:100%;width:auto}.img-ratio-4-3 .iframe--wrapper{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%}.img-ratio-4-3 iframe{left:0;top:0;height:100%;width:100%;position:absolute}.img-ratio-1-1{position:relative;width:100%;height:0;overflow:hidden;padding-bottom:100%}.img-ratio-1-1 img{position:absolute;top:50%;left:50%;transform:translate3D(-50%,-50%,0);width:100%;height:auto}.img-ratio-1-1 img.img-width{width:100%;height:auto}.img-ratio-1-1 img.img-height{height:100%;width:auto}.img-ratio-16-9{padding-bottom:56.25%;height:0;width:100%;position:relative;overflow:hidden}.img-ratio-16-9 img{position:absolute;top:50%;left:50%;transform:translate3D(-50%,-50%,0);height:100%}.img-ratio-16-9 img.full-width,.img-ratio-16-9 img.img-width{width:100%;height:auto}.img-ratio-16-9 .iframe--wrapper,.img-ratio-16-9 .videocall__wrapper{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%}a{text-decoration:none}.loading-image{background:rgba(255,255,255,.3);transition:.4s ease-in-out;width:100%;height:100%;top:0;right:0;text-align:center;align-items:center}.loading-image i{color:#eb5d13}.progress-bar-striped.active{-webkit-animation:.4s linear infinite progress-bar-stripes;animation:.4s linear infinite progress-bar-stripes}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9maWxlL2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZEO0lBeUJFLDJCQUNZLFlBQTBCLEVBQzFCLFdBQXdCLEVBQ3hCLHFCQUE0QztRQUY1QyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBckJ4QyxTQUFJLEdBQVcsZUFBZSxDQUFDO1FBQy9CLFVBQUssR0FBVyxlQUFlLENBQUM7UUFDaEMsYUFBUSxHQUFZLElBQUksQ0FBQztRQUd6QixZQUFPLEdBQVcsRUFBRSxHQUFHLElBQUks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QUN0RixxQ0FBaUM7O0lBQ2pDLDBDQUFzQzs7SUFDdEMsZ0RBQTZDOztJQUM3QywwQ0FBc0U7O0lBQ3RFLDJDQUF1RTs7SUFDdkUseUNBQWdGOztJQUNoRixvQ0FBd0I7O0lBQ3hCLHFDQUE0Qjs7Ozs7SUFDNUIseUNBQTRCOzs7OztJQUM1QiwwQ0FBeUQ7Ozs7O0lBR3ZELHlDQUFvQzs7Ozs7SUFDcEMsd0NBQWtDOzs7OztJQUNsQyxrREFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdGFrZSwgZmluYWxpemUsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSHR0cEV2ZW50VHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEZpbGVWaWV3TW9kZWwsIEZpbGVSZXF1ZXN0LCBGaWxlUmVzcG9uc2UgfSBmcm9tICcuL2ZpbGUubW9kZWwnO1xyXG5pbXBvcnQgeyBDcm9wcGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY3JvcHBlci9jcm9wcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9maWxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25WaWV3TW9kZWwgfSBmcm9tICcuLi9tb2RhbHMvbW9kYWwubW9kZWwnO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uL21vZGFscy9tb2RhbC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYy1maWxlLXVwbG9hZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVXBsb2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgcHVibGljIGljb246IHN0cmluZyA9ICdmYSBmYS10d2l0dGVyJztcclxuICBASW5wdXQoKSBwdWJsaWMgdGl0bGU6IHN0cmluZyA9ICdDaOG7iW5oIHPhu61hIOG6o25oJztcclxuICBASW5wdXQoKSBwdWJsaWMgbXVsdGlwbGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjcm9wSW1hZ2U6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcHVibGljIHZhbGlkYXRpb25OYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIG1heFNpemU6IG51bWJlciA9IDEwICogMTAyNCAqIDEwMjQ7XHJcbiAgQElucHV0KCkgcHVibGljIGZpbGVUeXBlOiAnZG9jJyB8ICdpbWFnZScgfCAnYXVkaW8nIHwgJ3ZpZGVvJyB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBwdWJsaWMgY3V0UmF0aW86IG51bWJlcjtcclxuICBASW5wdXQoKSBwdWJsaWMgcmVzaXplVG9XaWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtYWludGFpbkFzcGVjdFJhdGlvOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoJ2NoZWNrZWRMb2FkaW5nJykgY2hhbmdlTG9hZGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCdjaGVja2VkUHJvZ3Jlc3MnKSBjaGFuZ2VQcm9ncmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgZmlsZVVwbG9hZGVkOiBFdmVudEVtaXR0ZXI8RmlsZVZpZXdNb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgcHVibGljIHByb2dyZXNzOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgY3VycmVudFR5cGVzOiBhbnlbXTtcclxuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcbiAgICBwcm90ZWN0ZWQgZmlsZVNlcnZpY2U6IEZpbGVTZXJ2aWNlLFxyXG4gICAgcHJvdGVjdGVkIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uRmlsZVVwbG9hZGVkKGZpbGVzOiBGaWxlW10sIGV2ZW50OiBhbnkpIHtcclxuICAgIGlmICghZmlsZXMgfHwgZmlsZXMubGVuZ3RoID09IDApIHJldHVybjtcclxuICAgIHRoaXMuZXhlY3V0ZShmaWxlcywgZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleGVjdXRlKGZpbGVzOiBGaWxlW10sIGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChmaWxlcy5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgdmFyIGZpbGUgPSBmaWxlc1swXTtcclxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSB0aGlzLmluaXRWYWxpZGF0aW9uKGZpbGUpO1xyXG4gICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LmlzVmFsaWQpIHtcclxuICAgICAgdmFsaWRhdGlvblJlc3VsdC5lcnJvcnMuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHgpIHtcclxuICAgICAgICAgIGNhc2UgJ1NpemUnOlxyXG4gICAgICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93Tm90aWZpY2F0aW9uRGlhbG9nKG5ldyBOb3RpZmljYXRpb25WaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGBLw61jaCB0aMaw4bubYyBmaWxlIHBo4bqjaSBuaOG7jyBoxqFuICR7dGhpcy5tYXhTaXplIC8gKDEwMjQgKiAxMDI0KX0gbWJgXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdUeXBlJzpcclxuICAgICAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd05vdGlmaWNhdGlvbkRpYWxvZyhuZXcgTm90aWZpY2F0aW9uVmlld01vZGVsKHtcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBgTG/huqFpIGZpbGUga2jDtG5nIHBow7kgaOG7o3BgXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY3JvcEltYWdlKSB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKGxvYWRFdmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgRmlsZVZpZXdNb2RlbCh7XHJcbiAgICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgIGxhc3RNb2RpZmllZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICBjcmVhdGVkQnk6IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyID8gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIuaWQgOiBudWxsLFxyXG4gICAgICAgICAgbGFzdE1vZGlmaWVkQnk6IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyID8gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIuaWQgOiBudWxsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gbG9hZEV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd1RlbXBsYXRlRGlhbG9nKHtcclxuICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgY3VzdG9tU2l6ZTogJ21vZGFsLWxnJyxcclxuICAgICAgICAgIG1vZGU6ICdDdXN0b20nLFxyXG4gICAgICAgICAgYXV0b0Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgaWNvbjogdGhpcy5pY29uLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpbWFnZUVsZW1lbnQ6IGltYWdlLFxyXG4gICAgICAgICAgICBldmVudEZpbGU6IGV2ZW50LFxyXG4gICAgICAgICAgICBjdXRSYXRpbzogdGhpcy5jdXRSYXRpbyxcclxuICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdGhpcy5tYWludGFpbkFzcGVjdFJhdGlvLFxyXG4gICAgICAgICAgICByZXNpemVUb1dpZHRoOiB0aGlzLnJlc2l6ZVRvV2lkdGhcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0ZW1wbGF0ZTogQ3JvcHBlckNvbXBvbmVudCxcclxuICAgICAgICAgIGFjY2VwdENhbGxiYWNrOiAoYmFzZTY0U3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2U2NEZpbGVQYXJ0cyA9IGJhc2U2NFN0cmluZy5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICBpZiAoYmFzZTY0RmlsZVBhcnRzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYmFzZTY0RmlsZURhdGEgPSBiYXNlNjRGaWxlUGFydHNbMV07XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTG9hZGluZy5lbWl0KHRoaXMubG9hZGluZyk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZVNlcnZpY2UudXBsb2FkRmlsZXMobmV3IEZpbGVSZXF1ZXN0KHtcclxuICAgICAgICAgICAgICBjcmVhdGVkQnk6IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyID8gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIuaWQgOiBudWxsLFxyXG4gICAgICAgICAgICAgIGl0ZW1zOiBbbmV3IEZpbGVWaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICAgICAgc3JjOiBiYXNlNjRGaWxlRGF0YSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IGZpbGUudHlwZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgbGFzdE1vZGlmaWVkRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRCeTogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWRCeTogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCA6IG51bGxcclxuICAgICAgICAgICAgICB9KV0sXHJcbiAgICAgICAgICAgICAgbW9ja0RhdGE6IG5ldyBGaWxlUmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgICAgbmV3IEZpbGVWaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogYmFzZTY0U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE1vZGlmaWVkRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQnk6IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyID8gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIuaWQgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZEJ5OiB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlciA/IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyLmlkIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pKS5waXBlKHRha2UoMSksIGZpbmFsaXplKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZUxvYWRpbmcuZW1pdCh0aGlzLmxvYWRpbmcpO1xyXG4gICAgICAgICAgICB9KSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBsb2FkZWRGaWxlUGF0aCA9IHJlc3BvbnNlLml0ZW1zWzBdLnNyYztcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZVVwbG9hZGVkLmVtaXQobmV3IEZpbGVWaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICAgICAgICBzcmM6IHVwbG9hZGVkRmlsZVBhdGgsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBmaWxlLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICBjcmVhdGVkQnk6IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyID8gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIuaWQgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWRCeTogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCA6IG51bGxcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNoYW5nZUxvYWRpbmcuZW1pdCh0aGlzLmxvYWRpbmcpO1xyXG4gICAgICBjb25zdCB1cGxvYWRGaWxlU3Vic2NyaXB0aW9uID0gdGhpcy5maWxlU2VydmljZS51cGxvYWRQcm9ncmVzcyhmaWxlKS5waXBlKFxyXG4gICAgICAgIHRhcCgoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IE1hdGgucm91bmQoKDEwMCAqIGV2ZW50LmxvYWRlZCkgLyBldmVudC50b3RhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUHJvZ3Jlc3MuZW1pdCh0aGlzLnByb2dyZXNzKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gSHR0cEV2ZW50VHlwZS5SZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGV2ZW50LmJvZHk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQcm9ncmVzcy5lbWl0KHRoaXMucHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUxvYWRpbmcuZW1pdCh0aGlzLmxvYWRpbmcpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVVcGxvYWRlZC5lbWl0KG5ldyBGaWxlVmlld01vZGVsKHtcclxuICAgICAgICAgICAgICBzcmM6IHJlc3BvbnNlLml0ZW1zICYmIHJlc3BvbnNlLml0ZW1zLmxlbmd0aCA+IDAgPyByZXNwb25zZS5pdGVtc1swXS5zcmMgOiBudWxsLFxyXG4gICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKSkuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQodXBsb2FkRmlsZVN1YnNjcmlwdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRWYWxpZGF0aW9uKGZpbGU6IEZpbGUpOiB7IGlzVmFsaWQ6IEJvb2xlYW47IGVycm9yczogYW55W10gfSB7XHJcbiAgICBsZXQgaXNWYWxpZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBsZXQgZXJyb3JzID0gW107XHJcbiAgICBpZiAodGhpcy5maWxlVHlwZSkge1xyXG4gICAgICB0aGlzLmluaXRFeHRlbnRpb25GaWxlKHRoaXMuZmlsZVR5cGUpO1xyXG4gICAgICBjb25zdCB0eXBlcyA9IGZpbGUubmFtZS5zcGxpdCgnLicpO1xyXG4gICAgICBjb25zdCBleHRlbnNpb24gPSB0eXBlc1t0eXBlcy5sZW5ndGggLSAxXTtcclxuICAgICAgaXNWYWxpZCA9IHRoaXMuY3VycmVudFR5cGVzLmluZGV4T2YoZXh0ZW5zaW9uKSA+PSAwO1xyXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICBlcnJvcnMucHVzaCgnVHlwZScpO1xyXG4gICAgICAgIHJldHVybiB7IGlzVmFsaWQ6IGlzVmFsaWQsIGVycm9yczogZXJyb3JzIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5tYXhTaXplICYmIHRoaXMubWF4U2l6ZSAhPT0gMCkge1xyXG4gICAgICBpc1ZhbGlkID0gK2ZpbGUuc2l6ZSA8ICt0aGlzLm1heFNpemU7XHJcbiAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgIGVycm9ycy5wdXNoKCdTaXplJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgaXNWYWxpZDogaXNWYWxpZCwgZXJyb3JzOiBlcnJvcnMgfTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IGlzVmFsaWQ6IGlzVmFsaWQsIGVycm9yczogZXJyb3JzIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRFeHRlbnRpb25GaWxlKGZpbGVUeXBlOiBzdHJpbmcpIHtcclxuICAgIHN3aXRjaCAoZmlsZVR5cGUpIHtcclxuICAgICAgY2FzZSAnZG9jJzpcclxuICAgICAgICB0aGlzLmN1cnJlbnRUeXBlcyA9IFsnY3N2JywgJ2RvYycsICdkb2N4JywgJ2xvZycsICdtc2cnLCAncnRmJywgJ3R4dCcsICd3cGYnLCAncGRmJywgJ2NzdicsICdwcHQnLCAncHBzJywgJ3ZjZicsICd4bHInLCAneGxzJywgJ3hsc3gnXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgIHRoaXMuY3VycmVudFR5cGVzID0gWydibXAnLCAnZGRzJywgJ2dpZicsICdoZWljJywgJ2pwZycsICdwbmcnLCAncHNkJywgJ3RobScsICd0aWYnLCAnanBlJywgJ2pwZWcnXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYXVkaW8nOlxyXG4gICAgICAgIHRoaXMuY3VycmVudFR5cGVzID0gWydhaWYnLCAnaWZmJywgJ20zdScsICdtNGEnLCAnbWlkJywgJ21wMycsICdtcGEnLCAnd2F2JywgJ3dtYSddO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd2aWRlbyc6XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VHlwZXMgPSBbJzNnMicsICczZ3AnLCAnYXZpJywgJ2ZsdicsICdtNHYnLCAnbW92JywgJ21wNCcsICdtcGcnLCAnd212J107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxyXG4gICAgICAgIHRoaXMuY3VycmVudFR5cGVzID0gWydjc3YnLCAnZG9jJywgJ2RvY3gnLCAnbG9nJywgJ21zZycsICdydGYnLCAndHh0JywgJ3dwZicsICdwZGYnLCAnY3N2JywgJ3BwdCcsICdwcHMnLCAndmNmJywgJ3hscicsICd4bHMnLCAneGxzeCcsXHJcbiAgICAgICAgICAnYm1wJywgJ2RkcycsICdnaWYnLCAnaGVpYycsICdqcGcnLCAncG5nJywgJ3BzZCcsICd0aG0nLCAndGlmJywgJ2pwZScsICdqcGVnJyxcclxuICAgICAgICAgICdhaWYnLCAnaWZmJywgJ20zdScsICdtNGEnLCAnbWlkJywgJ21wMycsICdtcGEnLCAnd2F2JywgJ3dtYScsXHJcbiAgICAgICAgICAnM2cyJywgJzNncCcsICdhdmknLCAnZmx2JywgJ200dicsICdtb3YnLCAnbXA0JywgJ21wZycsICd3bXYnXHJcbiAgICAgICAgXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDogcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=