/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MockService } from '../services';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class FileService extends MockService {
    /**
     * @param {?} httpClient
     */
    constructor(httpClient) {
        super();
        this.httpClient = httpClient;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    uploadFiles(request) {
        return this.verify(this.httpClient.post('v1/Files/', request), request.mockData);
    }
}
FileService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
FileService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ FileService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FileService_Factory() { return new FileService(i0.ɵɵinject(i1.HttpClient)); }, token: FileService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    FileService.prototype.httpClient;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvZmlsZS9maWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7OztBQUcxQyxNQUFNLE9BQU8sV0FBWSxTQUFRLFdBQVc7Ozs7SUFDeEMsWUFDWSxVQUFzQjtRQUU5QixLQUFLLEVBQUUsQ0FBQztRQUZBLGVBQVUsR0FBVixVQUFVLENBQVk7SUFHbEMsQ0FBQzs7Ozs7SUFFTSxXQUFXLENBQUMsT0FBb0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFlLFdBQVcsRUFBRSxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkcsQ0FBQzs7O1lBVkosVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQUx6QixVQUFVOzs7Ozs7OztJQVFYLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBGaWxlUmVxdWVzdCwgRmlsZVJlc3BvbnNlIH0gZnJvbSAnLi9maWxlLm1vZGVsJztcclxuaW1wb3J0IHsgTW9ja1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgRmlsZVNlcnZpY2UgZXh0ZW5kcyBNb2NrU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnRcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwbG9hZEZpbGVzKHJlcXVlc3Q6IEZpbGVSZXF1ZXN0KTogT2JzZXJ2YWJsZTxGaWxlUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52ZXJpZnkodGhpcy5odHRwQ2xpZW50LnBvc3Q8RmlsZVJlc3BvbnNlPigndjEvRmlsZXMvJywgcmVxdWVzdCksIHJlcXVlc3QubW9ja0RhdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=