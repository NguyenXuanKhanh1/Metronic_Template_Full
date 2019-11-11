/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { FileResponse, FileViewModel } from './file.model';
import { MockService } from '../services';
import { AuthenticationService } from '../../auth/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../auth/auth.service";
export class FileService extends MockService {
    /**
     * @param {?} httpClient
     * @param {?} authenticationService
     */
    constructor(httpClient, authenticationService) {
        super();
        this.httpClient = httpClient;
        this.authenticationService = authenticationService;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    uploadFiles(request) {
        return this.verify(this.httpClient.post('v1/Files/', request), request.mockData);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    uploadProgress(file) {
        /** @type {?} */
        const response = new HttpResponse({
            body: new FileResponse({
                items: [new FileViewModel({
                        src: 'https://znews-photo.zadn.vn/w660/Uploaded/xbhunku/2017_06_02/338006.jpg',
                        createdDate: new Date(),
                        lastModifiedDate: new Date(),
                        createdBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null,
                        lastModifiedBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null
                    })]
            })
        });
        return of(response);
    }
}
FileService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
FileService.ctorParameters = () => [
    { type: HttpClient },
    { type: AuthenticationService }
];
/** @nocollapse */ FileService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FileService_Factory() { return new FileService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.AuthenticationService)); }, token: FileService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FileService.prototype.httpClient;
    /**
     * @type {?}
     * @protected
     */
    FileService.prototype.authenticationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvZmlsZS9maWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBYSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBZSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFHaEUsTUFBTSxPQUFPLFdBQVksU0FBUSxXQUFXOzs7OztJQUN4QyxZQUNjLFVBQXNCLEVBQ3RCLHFCQUE0QztRQUV0RCxLQUFLLEVBQUUsQ0FBQztRQUhFLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUcxRCxDQUFDOzs7OztJQUVNLFdBQVcsQ0FBQyxPQUFvQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQWUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRyxDQUFDOzs7OztJQUVNLGNBQWMsQ0FBQyxJQUFVOztjQUN0QixRQUFRLEdBQUcsSUFBSSxZQUFZLENBQWU7WUFDNUMsSUFBSSxFQUFFLElBQUksWUFBWSxDQUFDO2dCQUNuQixLQUFLLEVBQUUsQ0FBQyxJQUFJLGFBQWEsQ0FBQzt3QkFDdEIsR0FBRyxFQUFFLHlFQUF5RTt3QkFDOUUsV0FBVyxFQUFFLElBQUksSUFBSSxFQUFFO3dCQUN2QixnQkFBZ0IsRUFBRSxJQUFJLElBQUksRUFBRTt3QkFDNUIsU0FBUyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJO3dCQUNwRyxjQUFjLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7cUJBQzVHLENBQUMsQ0FBQzthQUNOLENBQUM7U0FDTCxDQUFDO1FBQ0YsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7O1lBMUJKLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFOekIsVUFBVTtZQUlWLHFCQUFxQjs7Ozs7Ozs7SUFLdEIsaUNBQWdDOzs7OztJQUNoQyw0Q0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFdmVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBGaWxlUmVxdWVzdCwgRmlsZVJlc3BvbnNlLCBGaWxlVmlld01vZGVsIH0gZnJvbSAnLi9maWxlLm1vZGVsJztcclxuaW1wb3J0IHsgTW9ja1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlU2VydmljZSBleHRlbmRzIE1vY2tTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHByb3RlY3RlZCBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBsb2FkRmlsZXMocmVxdWVzdDogRmlsZVJlcXVlc3QpOiBPYnNlcnZhYmxlPEZpbGVSZXNwb25zZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZlcmlmeSh0aGlzLmh0dHBDbGllbnQucG9zdDxGaWxlUmVzcG9uc2U+KCd2MS9GaWxlcy8nLCByZXF1ZXN0KSwgcmVxdWVzdC5tb2NrRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwbG9hZFByb2dyZXNzKGZpbGU6IEZpbGUpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxGaWxlUmVzcG9uc2U+PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBuZXcgSHR0cFJlc3BvbnNlPEZpbGVSZXNwb25zZT4oe1xyXG4gICAgICAgICAgICBib2R5OiBuZXcgRmlsZVJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbbmV3IEZpbGVWaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vem5ld3MtcGhvdG8uemFkbi52bi93NjYwL1VwbG9hZGVkL3hiaHVua3UvMjAxN18wNl8wMi8zMzgwMDYuanBnJyxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRCeTogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE1vZGlmaWVkQnk6IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyID8gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIuaWQgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9KV1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gb2YocmVzcG9uc2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=