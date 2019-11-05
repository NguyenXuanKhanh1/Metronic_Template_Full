/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MockService } from '../services';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var FileService = /** @class */ (function (_super) {
    tslib_1.__extends(FileService, _super);
    function FileService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        return _this;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    FileService.prototype.uploadFiles = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.verify(this.httpClient.post('v1/Files/', request), request.mockData);
    };
    FileService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    FileService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ FileService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FileService_Factory() { return new FileService(i0.ɵɵinject(i1.HttpClient)); }, token: FileService, providedIn: "root" });
    return FileService;
}(MockService));
export { FileService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FileService.prototype.httpClient;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvZmlsZS9maWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7QUFFMUM7SUFDaUMsdUNBQVc7SUFDeEMscUJBQ1ksVUFBc0I7UUFEbEMsWUFHSSxpQkFBTyxTQUNWO1FBSFcsZ0JBQVUsR0FBVixVQUFVLENBQVk7O0lBR2xDLENBQUM7Ozs7O0lBRU0saUNBQVc7Ozs7SUFBbEIsVUFBbUIsT0FBb0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFlLFdBQVcsRUFBRSxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkcsQ0FBQzs7Z0JBVkosVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFMekIsVUFBVTs7O3NCQURuQjtDQWlCQyxBQVhELENBQ2lDLFdBQVcsR0FVM0M7U0FWWSxXQUFXOzs7Ozs7SUFFaEIsaUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEZpbGVSZXF1ZXN0LCBGaWxlUmVzcG9uc2UgfSBmcm9tICcuL2ZpbGUubW9kZWwnO1xyXG5pbXBvcnQgeyBNb2NrU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlU2VydmljZSBleHRlbmRzIE1vY2tTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudFxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBsb2FkRmlsZXMocmVxdWVzdDogRmlsZVJlcXVlc3QpOiBPYnNlcnZhYmxlPEZpbGVSZXNwb25zZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZlcmlmeSh0aGlzLmh0dHBDbGllbnQucG9zdDxGaWxlUmVzcG9uc2U+KCd2MS9GaWxlcy8nLCByZXF1ZXN0KSwgcmVxdWVzdC5tb2NrRGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==