/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FileService } from './file.service';
import { ModalService } from '../modals';
import { FileConst } from './file.const';
import { AuthenticationService } from '../../auth/auth.service';
import { ActionService } from '../services/action.service';
import * as i0 from "@angular/core";
import * as i1 from "./file.service";
import * as i2 from "../modals/modal.service";
import * as i3 from "../services/action.service";
import * as i4 from "../../auth/auth.service";
var FileProvider = /** @class */ (function () {
    function FileProvider(_fileService, _modalService, _actionService, _authenticationService) {
        this._fileService = _fileService;
        this._modalService = _modalService;
        this._actionService = _actionService;
        this._authenticationService = _authenticationService;
    }
    /**
     * @param {?} files
     * @param {?} attachments
     * @param {?} fileRef
     * @param {?=} callback
     * @return {?}
     */
    FileProvider.prototype.uploadAsync = /**
     * @param {?} files
     * @param {?} attachments
     * @param {?} fileRef
     * @param {?=} callback
     * @return {?}
     */
    function (files, attachments, fileRef, callback) {
        var _this = this;
        /** @type {?} */
        var request = this.buildRequest(files, attachments);
        this._actionService.executeAsync((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var totalAttachmentSize = _this.calculateTotalBytes(attachments, request.items);
            if (totalAttachmentSize > FileConst.MaxSize * 1024 * 1024) {
                _this._modalService.showNotificationDialog({
                    autoClose: true,
                    title: 'Thông báo',
                    message: 'Dung lượng không được vượt quá <span class="text-bold text-primary">' + FileConst.MaxSize + '</span> MB.',
                    btnTitle: 'Đóng'
                });
                if (callback) {
                    callback();
                }
            }
            else {
                if (request.others.length == 0) {
                    _this.uploadFileAsync(request, fileRef, callback);
                }
                else {
                    /** @type {?} */
                    var otherTypes_1 = '';
                    request.others.forEach((/**
                     * @param {?} file
                     * @return {?}
                     */
                    function (file) {
                        if (file) {
                            if (otherTypes_1.indexOf(file.type) == -1) {
                                otherTypes_1 += file.type + '|';
                            }
                        }
                    }));
                    if (otherTypes_1)
                        otherTypes_1 = otherTypes_1.substring(0, otherTypes_1.length - 1);
                    if (request.items.length == 0) {
                        _this._modalService.showNotificationDialog({
                            autoClose: true,
                            title: 'Thông báo',
                            message: 'Định dạng tệp tin không hợp lệ <span class="text-bold text-primary">' + otherTypes_1 + '</span>.',
                            btnTitle: 'Đóng'
                        });
                        if (callback) {
                            callback();
                        }
                    }
                    else {
                        _this._modalService.showConfirmDialog({
                            autoClose: true,
                            title: 'Thông báo',
                            message: 'Có <span class="text-bold text-primary">' + request.others.length + '</span> định dạng tệp tin không hợp lệ <span class="text-bold text-primary">' + otherTypes_1 + '</span>.<br/> Bạn có muốn tiếp tục tải tệp tin khác không?',
                            btnAcceptTitle: 'Tiếp tục',
                            btnCancelTitle: 'Hủy',
                            acceptCallback: (/**
                             * @return {?}
                             */
                            function () {
                                _this.uploadFileAsync(request, fileRef, callback);
                            })
                        });
                        if (callback) {
                            callback();
                        }
                    }
                }
            }
        }));
    };
    /**
     * @private
     * @param {?} request
     * @param {?} fileRef
     * @param {?=} callback
     * @return {?}
     */
    FileProvider.prototype.uploadFileAsync = /**
     * @private
     * @param {?} request
     * @param {?} fileRef
     * @param {?=} callback
     * @return {?}
     */
    function (request, fileRef, callback) {
        this._fileService.uploadFiles(request).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (fileRef && fileRef.value) {
                fileRef.value = '';
            }
            if (response && response.items) {
                if (callback) {
                    callback();
                }
                response.items.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    /** @type {?} */
                    var currentAttachment = request.items.find((/**
                     * @param {?} s
                     * @return {?}
                     */
                    function (s) { return s.src == item.src && s.name == item.name; }));
                    if (!currentAttachment) {
                        request.items.push(item);
                    }
                }));
            }
        }));
    };
    /**
     * @private
     * @param {?} attachments
     * @param {?=} items
     * @return {?}
     */
    FileProvider.prototype.calculateTotalBytes = /**
     * @private
     * @param {?} attachments
     * @param {?=} items
     * @return {?}
     */
    function (attachments, items) {
        /** @type {?} */
        var totalAmount = 0;
        if (attachments) {
            if (attachments) {
                attachments.forEach((/**
                 * @param {?} attachment
                 * @return {?}
                 */
                function (attachment) {
                    totalAmount += attachment.size;
                }));
            }
            if (items) {
                items.forEach((/**
                 * @param {?} attachment
                 * @return {?}
                 */
                function (attachment) {
                    totalAmount += attachment.size;
                }));
            }
        }
        return totalAmount;
    };
    /**
     * @private
     * @param {?} files
     * @param {?} attachments
     * @return {?}
     */
    FileProvider.prototype.buildRequest = /**
     * @private
     * @param {?} files
     * @param {?} attachments
     * @return {?}
     */
    function (files, attachments) {
        /** @type {?} */
        var request = {
            createdBy: this._authenticationService.currentUser.id,
            items: []
        };
        /** @type {?} */
        var otherFiles = [];
        var _loop_1 = function (i) {
            if (files[i]) {
                /** @type {?} */
                var reader_1 = new FileReader();
                reader_1.readAsDataURL(files[i]);
                reader_1.onloadend = (/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var base64String = (/** @type {?} */ (reader_1.result));
                    if (files[i].type && FileConst.AcceptedFiles.indexOf(files[i].type) > -1) {
                        request.items.push({
                            size: files[i].size,
                            type: files[i].type,
                            src: base64String,
                            name: files[i].name
                        });
                    }
                    else {
                        otherFiles.push({
                            size: files[i].size,
                            type: files[i].type,
                            src: base64String,
                            name: files[i].name
                        });
                    }
                });
            }
        };
        for (var i = 0; i < files.length; i++) {
            _loop_1(i);
        }
        if (attachments) {
            attachments.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var currentAttachment = request.items.find((/**
                 * @param {?} s
                 * @return {?}
                 */
                function (s) { return s.src == item.src && s.name == item.name; }));
                if (!currentAttachment) {
                    request.items.push(item);
                }
            }));
        }
        request.others = otherFiles;
        return request;
    };
    FileProvider.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    FileProvider.ctorParameters = function () { return [
        { type: FileService },
        { type: ModalService },
        { type: ActionService },
        { type: AuthenticationService }
    ]; };
    /** @nocollapse */ FileProvider.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FileProvider_Factory() { return new FileProvider(i0.ɵɵinject(i1.FileService), i0.ɵɵinject(i2.ModalService), i0.ɵɵinject(i3.ActionService), i0.ɵɵinject(i4.AuthenticationService)); }, token: FileProvider, providedIn: "root" });
    return FileProvider;
}());
export { FileProvider };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FileProvider.prototype._fileService;
    /**
     * @type {?}
     * @private
     */
    FileProvider.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    FileProvider.prototype._actionService;
    /**
     * @type {?}
     * @private
     */
    FileProvider.prototype._authenticationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2ZpbGUvZmlsZS5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7O0FBRTNEO0lBRUksc0JBQ1ksWUFBeUIsRUFDekIsYUFBMkIsRUFDM0IsY0FBNkIsRUFDN0Isc0JBQTZDO1FBSDdDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBdUI7SUFDckQsQ0FBQzs7Ozs7Ozs7SUFFRSxrQ0FBVzs7Ozs7OztJQUFsQixVQUFtQixLQUFhLEVBQUUsV0FBNEIsRUFBRSxPQUFZLEVBQUUsUUFBb0I7UUFBbEcsaUJBdURDOztZQXRETyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDO1FBQ25ELElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWTs7O1FBQUM7O2dCQUN2QixtQkFBbUIsR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDaEYsSUFBSSxtQkFBbUIsR0FBRyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksR0FB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QkFBaUIsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUk7Ozs7Z0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUF4QyxDQUF3QyxFQUFDO2dCQUMzRixJQUFJLENBQUMsaUJBQWlCLEVBQUU7b0JBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM1QjtZQUNMLENBQUMsRUFBQyxDQUFDO1NBQ047UUFFRCxPQUFPLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztRQUM1QixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDOztnQkF2SkosVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFQekIsV0FBVztnQkFDWCxZQUFZO2dCQUlaLGFBQWE7Z0JBRGIscUJBQXFCOzs7dUJBTDlCO0NBZ0tDLEFBeEpELElBd0pDO1NBdkpZLFlBQVk7Ozs7OztJQUVqQixvQ0FBaUM7Ozs7O0lBQ2pDLHFDQUFtQzs7Ozs7SUFDbkMsc0NBQXFDOzs7OztJQUNyQyw4Q0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9maWxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi9tb2RhbHMnO1xyXG5pbXBvcnQgeyBGaWxlVmlld01vZGVsLCBGaWxlUmVxdWVzdCB9IGZyb20gJy4vZmlsZS5tb2RlbCc7XHJcbmltcG9ydCB7IEZpbGVDb25zdCB9IGZyb20gJy4vZmlsZS5jb25zdCc7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FjdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlUHJvdmlkZXIge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfZmlsZVNlcnZpY2U6IEZpbGVTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2FjdGlvblNlcnZpY2U6IEFjdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgcHVibGljIHVwbG9hZEFzeW5jKGZpbGVzOiBGaWxlW10sIGF0dGFjaG1lbnRzOiBGaWxlVmlld01vZGVsW10sIGZpbGVSZWY6IGFueSwgY2FsbGJhY2s/OiAoKSA9PiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuYnVpbGRSZXF1ZXN0KGZpbGVzLCBhdHRhY2htZW50cyk7XHJcbiAgICAgICAgdGhpcy5fYWN0aW9uU2VydmljZS5leGVjdXRlQXN5bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbEF0dGFjaG1lbnRTaXplID0gdGhpcy5jYWxjdWxhdGVUb3RhbEJ5dGVzKGF0dGFjaG1lbnRzLCByZXF1ZXN0Lml0ZW1zKTtcclxuICAgICAgICAgICAgaWYgKHRvdGFsQXR0YWNobWVudFNpemUgPiBGaWxlQ29uc3QuTWF4U2l6ZSAqIDEwMjQgKiAxMDI0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uuc2hvd05vdGlmaWNhdGlvbkRpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnVGjDtG5nIGLDoW8nLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdEdW5nIGzGsOG7o25nIGtow7RuZyDEkcaw4bujYyB2xrDhu6N0IHF1w6EgPHNwYW4gY2xhc3M9XCJ0ZXh0LWJvbGQgdGV4dC1wcmltYXJ5XCI+JyArIEZpbGVDb25zdC5NYXhTaXplICsgJzwvc3Bhbj4gTUIuJyxcclxuICAgICAgICAgICAgICAgICAgICBidG5UaXRsZTogJ8SQw7NuZydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0Lm90aGVycy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkRmlsZUFzeW5jKHJlcXVlc3QsIGZpbGVSZWYsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG90aGVyVHlwZXMgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0Lm90aGVycy5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG90aGVyVHlwZXMuaW5kZXhPZihmaWxlLnR5cGUpID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJUeXBlcyArPSBmaWxlLnR5cGUgKyAnfCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3RoZXJUeXBlcykgb3RoZXJUeXBlcyA9IG90aGVyVHlwZXMuc3Vic3RyaW5nKDAsIG90aGVyVHlwZXMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QuaXRlbXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLnNob3dOb3RpZmljYXRpb25EaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdUaMO0bmcgYsOhbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnxJDhu4tuaCBk4bqhbmcgdOG7h3AgdGluIGtow7RuZyBo4bujcCBs4buHIDxzcGFuIGNsYXNzPVwidGV4dC1ib2xkIHRleHQtcHJpbWFyeVwiPicgKyBvdGhlclR5cGVzICsgJzwvc3Bhbj4uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0blRpdGxlOiAnxJDDs25nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLnNob3dDb25maXJtRGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnVGjDtG5nIGLDoW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0PDsyA8c3BhbiBjbGFzcz1cInRleHQtYm9sZCB0ZXh0LXByaW1hcnlcIj4nICsgcmVxdWVzdC5vdGhlcnMubGVuZ3RoICsgJzwvc3Bhbj4gxJHhu4tuaCBk4bqhbmcgdOG7h3AgdGluIGtow7RuZyBo4bujcCBs4buHIDxzcGFuIGNsYXNzPVwidGV4dC1ib2xkIHRleHQtcHJpbWFyeVwiPicgKyBvdGhlclR5cGVzICsgJzwvc3Bhbj4uPGJyLz4gQuG6oW4gY8OzIG114buRbiB0aeG6v3AgdOG7pWMgdOG6o2kgdOG7h3AgdGluIGtow6FjIGtow7RuZz8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuQWNjZXB0VGl0bGU6ICdUaeG6v3AgdOG7pWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuQ2FuY2VsVGl0bGU6ICdI4buneScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHRDYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkRmlsZUFzeW5jKHJlcXVlc3QsIGZpbGVSZWYsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBsb2FkRmlsZUFzeW5jKHJlcXVlc3Q6IEZpbGVSZXF1ZXN0LCBmaWxlUmVmOiBhbnksIGNhbGxiYWNrPzogKCkgPT4gYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZmlsZVNlcnZpY2UudXBsb2FkRmlsZXMocmVxdWVzdCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKGZpbGVSZWYgJiYgZmlsZVJlZi52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZmlsZVJlZi52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRBdHRhY2htZW50ID0gcmVxdWVzdC5pdGVtcy5maW5kKHMgPT4gcy5zcmMgPT0gaXRlbS5zcmMgJiYgcy5uYW1lID09IGl0ZW0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50QXR0YWNobWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0Lml0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGN1bGF0ZVRvdGFsQnl0ZXMoYXR0YWNobWVudHM6IEZpbGVWaWV3TW9kZWxbXSwgaXRlbXM/OiBGaWxlVmlld01vZGVsW10pOiBudW1iZXIge1xyXG4gICAgICAgIGxldCB0b3RhbEFtb3VudCA9IDA7XHJcbiAgICAgICAgaWYgKGF0dGFjaG1lbnRzKSB7XHJcbiAgICAgICAgICAgIGlmIChhdHRhY2htZW50cykge1xyXG4gICAgICAgICAgICAgICAgYXR0YWNobWVudHMuZm9yRWFjaCgoYXR0YWNobWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQW1vdW50ICs9IGF0dGFjaG1lbnQuc2l6ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGF0dGFjaG1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbEFtb3VudCArPSBhdHRhY2htZW50LnNpemU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG90YWxBbW91bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZFJlcXVlc3QoZmlsZXM6IEZpbGVbXSwgYXR0YWNobWVudHM6IEZpbGVWaWV3TW9kZWxbXSk6IEZpbGVSZXF1ZXN0IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0OiBGaWxlUmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgY3JlYXRlZEJ5OiB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIuaWQsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb3RoZXJGaWxlczogRmlsZVZpZXdNb2RlbFtdID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGZpbGVzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNlNjRTdHJpbmcgPSA8c3RyaW5nPnJlYWRlci5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGVzW2ldLnR5cGUgJiYgRmlsZUNvbnN0LkFjY2VwdGVkRmlsZXMuaW5kZXhPZihmaWxlc1tpXS50eXBlKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuaXRlbXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBmaWxlc1tpXS5zaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGZpbGVzW2ldLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBiYXNlNjRTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZmlsZXNbaV0ubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJGaWxlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IGZpbGVzW2ldLnNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZmlsZXNbaV0udHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGJhc2U2NFN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWxlc1tpXS5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhdHRhY2htZW50cykge1xyXG4gICAgICAgICAgICBhdHRhY2htZW50cy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QXR0YWNobWVudCA9IHJlcXVlc3QuaXRlbXMuZmluZChzID0+IHMuc3JjID09IGl0ZW0uc3JjICYmIHMubmFtZSA9PSBpdGVtLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50QXR0YWNobWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuaXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXF1ZXN0Lm90aGVycyA9IG90aGVyRmlsZXM7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgICB9XHJcbn1cclxuIl19