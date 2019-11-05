/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CacheService } from './cache.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./cache.service";
export class SettingService {
    /**
     * @param {?} httpClient
     * @param {?} _cacheService
     */
    constructor(httpClient, _cacheService) {
        this.httpClient = httpClient;
        this._cacheService = _cacheService;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    search(request) {
        return this.httpClient.get(`v1/settings/search`, { params: (/** @type {?} */ (request)) });
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    useMock(value) {
        if (value == true || value == false) {
            this._cacheService.set('mock', value);
            return value;
        }
        /** @type {?} */
        var currentValue = (/** @type {?} */ (this._cacheService.get('mock')));
        if (!currentValue)
            return false;
        return currentValue;
    }
}
SettingService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
SettingService.ctorParameters = () => [
    { type: HttpClient },
    { type: CacheService }
];
/** @nocollapse */ SettingService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SettingService_Factory() { return new SettingService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.CacheService)); }, token: SettingService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SettingService.prototype.httpClient;
    /**
     * @type {?}
     * @private
     */
    SettingService.prototype._cacheService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvc2V0dGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFHL0MsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBQ3ZCLFlBQ2MsVUFBc0IsRUFDeEIsYUFBMkI7UUFEekIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUNuQyxDQUFDOzs7OztJQUVFLE1BQU0sQ0FBQyxPQUEwQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUF3QixvQkFBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxtQkFBQSxPQUFPLEVBQU8sRUFBRSxDQUFDLENBQUM7SUFDeEcsQ0FBQzs7Ozs7SUFFTSxPQUFPLENBQUMsS0FBZTtRQUMxQixJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssRUFBRTtZQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdEMsT0FBTyxLQUFLLENBQUM7U0FDaEI7O1lBQ0csWUFBWSxHQUFHLG1CQUFTLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFBO1FBQzFELElBQUksQ0FBQyxZQUFZO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDaEMsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQzs7O1lBbkJKLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFKekIsVUFBVTtZQUVWLFlBQVk7Ozs7Ozs7O0lBS2Isb0NBQWdDOzs7OztJQUNoQyx1Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU2V0dGluZ1NlYXJjaFJlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgU2VhcmNoQmFzZVJlcXVlc3QgfSBmcm9tICcuLi9tb2RlbHMvYmFzZS5tb2RlbCc7XHJcbmltcG9ydCB7IENhY2hlU2VydmljZSB9IGZyb20gJy4vY2FjaGUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBfY2FjaGVTZXJ2aWNlOiBDYWNoZVNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgcHVibGljIHNlYXJjaChyZXF1ZXN0OiBTZWFyY2hCYXNlUmVxdWVzdCk6IE9ic2VydmFibGU8U2V0dGluZ1NlYXJjaFJlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8U2V0dGluZ1NlYXJjaFJlc3BvbnNlPihgdjEvc2V0dGluZ3Mvc2VhcmNoYCwgeyBwYXJhbXM6IHJlcXVlc3QgYXMgYW55IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1c2VNb2NrKHZhbHVlPzogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlIHx8IHZhbHVlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlU2VydmljZS5zZXQoJ21vY2snLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IDxib29sZWFuPnRoaXMuX2NhY2hlU2VydmljZS5nZXQoJ21vY2snKTtcclxuICAgICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50VmFsdWU7XHJcbiAgICB9XHJcbn1cclxuIl19