/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CacheService } from '../shared/services/cache.service';
import { AuthConst } from './auth.const';
import { Router } from '@angular/router';
import { MockService } from '../shared/services/mock.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../shared/services/cache.service";
import * as i3 from "@angular/router";
export class AuthenticationService extends MockService {
    /**
     * @param {?} httpClient
     * @param {?} _cacheService
     * @param {?} _router
     */
    constructor(httpClient, _cacheService, _router) {
        super();
        this.httpClient = httpClient;
        this._cacheService = _cacheService;
        this._router = _router;
        this.api = 'v1/authentications/search';
        /** @type {?} */
        var user = (/** @type {?} */ (this._cacheService.get(AuthConst.User)));
        this._cacheService.set(AuthConst.User, user);
        this.currentUser = user;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    search(request) {
        return this.verify(this.httpClient.get(`${this.api}/search`, { params: (/** @type {?} */ (request)) }), request.mockData);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    retrieve(request) {
        return this.verify(this.httpClient.get(`${this.api}/${request.payload.userName}`), request.mockData);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    login(request) {
        return this.verify(this.httpClient.post(`${this.api}/login`, request), request.mockData);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    create(request) {
        return this.verify(this.httpClient.post(`${this.api}/`, request), request.mockData);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    update(request) {
        return this.verify(this.httpClient.put(`${this.api}/`, request), request.mockData);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    delete(request) {
        return this.verify(this.httpClient.delete(`${this.api}?ids=${request.ids}`), request.mockData);
    }
    /**
     * @param {?=} path
     * @param {?=} refresh
     * @return {?}
     */
    logout(path = '/', refresh = false) {
        this._cacheService.remove(AuthConst.User);
        this._router.navigate([path]);
        if (refresh)
            window.location.href = window.location.href;
    }
}
AuthenticationService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
AuthenticationService.ctorParameters = () => [
    { type: HttpClient },
    { type: CacheService },
    { type: Router }
];
/** @nocollapse */ AuthenticationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthenticationService_Factory() { return new AuthenticationService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.CacheService), i0.ɵɵinject(i3.Router)); }, token: AuthenticationService, providedIn: "root" });
if (false) {
    /** @type {?} */
    AuthenticationService.prototype.currentUser;
    /**
     * @type {?}
     * @protected
     */
    AuthenticationService.prototype.api;
    /**
     * @type {?}
     * @protected
     */
    AuthenticationService.prototype.httpClient;
    /**
     * @type {?}
     * @private
     */
    AuthenticationService.prototype._cacheService;
    /**
     * @type {?}
     * @private
     */
    AuthenticationService.prototype._router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFpQmxELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7O0FBRzlELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxXQUFXOzs7Ozs7SUFHcEQsWUFDWSxVQUFzQixFQUN4QixhQUEyQixFQUMzQixPQUFlO1FBRXZCLEtBQUssRUFBRSxDQUFDO1FBSkUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBSmYsUUFBRyxHQUFXLDJCQUEyQixDQUFDOztZQU85QyxJQUFJLEdBQUcsbUJBQWUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFBO1FBQ2hFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsT0FBb0M7UUFDaEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUErQixHQUFHLElBQUksQ0FBQyxHQUFHLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxtQkFBQSxPQUFPLEVBQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzNJLENBQUM7Ozs7O0lBRU0sUUFBUSxDQUFDLE9BQXNDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBaUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkksQ0FBQzs7Ozs7SUFFTSxLQUFLLENBQUMsT0FBbUM7UUFDOUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUE4QixHQUFHLElBQUksQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEgsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsT0FBb0M7UUFDaEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUErQixHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEgsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsT0FBb0M7UUFDaEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUErQixHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkgsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsT0FBb0M7UUFDaEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUErQixHQUFHLElBQUksQ0FBQyxHQUFHLFFBQVEsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9ILENBQUM7Ozs7OztJQUVNLE1BQU0sQ0FBQyxPQUFlLEdBQUcsRUFBRSxVQUFtQixLQUFLO1FBQ3hELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxPQUFPO1lBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDM0QsQ0FBQzs7O1lBM0NGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUF0QnpCLFVBQVU7WUFpQlYsWUFBWTtZQUVaLE1BQU07Ozs7O0lBS2IsNENBQWtDOzs7OztJQUNsQyxvQ0FBb0Q7Ozs7O0lBRWxELDJDQUFnQzs7Ozs7SUFDaEMsOENBQW1DOzs7OztJQUNuQyx3Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtcclxuICBBdXRoZW50aWNhdGlvbkxvZ2luUmVxdWVzdCxcclxuICBBdXRoZW50aWNhdGlvbkxvZ2luUmVzcG9uc2UsXHJcbiAgVXNlclZpZXdNb2RlbCxcclxuICBBdXRoZW50aWNhdGlvblNlYXJjaFJlcXVlc3QsXHJcbiAgQXV0aGVudGljYXRpb25TZWFyY2hSZXNwb25zZSxcclxuICBBdXRoZW50aWNhdGlvblJldHJpZXZlUmVxdWVzdCxcclxuICBBdXRoZW50aWNhdGlvblJldHJpZXZlUmVzcG9uc2UsXHJcbiAgQXV0aGVudGljYXRpb25DcmVhdGVSZXF1ZXN0LFxyXG4gIEF1dGhlbnRpY2F0aW9uQ3JlYXRlUmVzcG9uc2UsXHJcbiAgQXV0aGVudGljYXRpb25VcGRhdGVSZXF1ZXN0LFxyXG4gIEF1dGhlbnRpY2F0aW9uVXBkYXRlUmVzcG9uc2UsXHJcbiAgQXV0aGVudGljYXRpb25EZWxldGVSZXF1ZXN0LFxyXG4gIEF1dGhlbnRpY2F0aW9uRGVsZXRlUmVzcG9uc2VcclxufSBmcm9tICcuL2F1dGgubW9kZWwnO1xyXG5pbXBvcnQgeyBDYWNoZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvY2FjaGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhDb25zdCB9IGZyb20gJy4vYXV0aC5jb25zdCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1vY2tTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL21vY2suc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIGV4dGVuZHMgTW9ja1NlcnZpY2Uge1xyXG4gIHB1YmxpYyBjdXJyZW50VXNlcjogVXNlclZpZXdNb2RlbDtcclxuICBwcm90ZWN0ZWQgYXBpOiBzdHJpbmcgPSAndjEvYXV0aGVudGljYXRpb25zL3NlYXJjaCc7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgX2NhY2hlU2VydmljZTogQ2FjaGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB2YXIgdXNlciA9IDxVc2VyVmlld01vZGVsPnRoaXMuX2NhY2hlU2VydmljZS5nZXQoQXV0aENvbnN0LlVzZXIpO1xyXG4gICAgdGhpcy5fY2FjaGVTZXJ2aWNlLnNldChBdXRoQ29uc3QuVXNlciwgdXNlcik7XHJcbiAgICB0aGlzLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWFyY2gocmVxdWVzdDogQXV0aGVudGljYXRpb25TZWFyY2hSZXF1ZXN0KTogT2JzZXJ2YWJsZTxBdXRoZW50aWNhdGlvblNlYXJjaFJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm4gdGhpcy52ZXJpZnkodGhpcy5odHRwQ2xpZW50LmdldDxBdXRoZW50aWNhdGlvblNlYXJjaFJlc3BvbnNlPihgJHt0aGlzLmFwaX0vc2VhcmNoYCwgeyBwYXJhbXM6IHJlcXVlc3QgYXMgYW55IH0pLCByZXF1ZXN0Lm1vY2tEYXRhKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJldHJpZXZlKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUmV0cmlldmVSZXF1ZXN0KTogT2JzZXJ2YWJsZTxBdXRoZW50aWNhdGlvblJldHJpZXZlUmVzcG9uc2U+IHtcclxuICAgIHJldHVybiB0aGlzLnZlcmlmeSh0aGlzLmh0dHBDbGllbnQuZ2V0PEF1dGhlbnRpY2F0aW9uUmV0cmlldmVSZXNwb25zZT4oYCR7dGhpcy5hcGl9LyR7cmVxdWVzdC5wYXlsb2FkLnVzZXJOYW1lfWApLCByZXF1ZXN0Lm1vY2tEYXRhKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2dpbihyZXF1ZXN0OiBBdXRoZW50aWNhdGlvbkxvZ2luUmVxdWVzdCk6IE9ic2VydmFibGU8QXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm4gdGhpcy52ZXJpZnkodGhpcy5odHRwQ2xpZW50LnBvc3Q8QXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlPihgJHt0aGlzLmFwaX0vbG9naW5gLCByZXF1ZXN0KSwgcmVxdWVzdC5tb2NrRGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uQ3JlYXRlUmVxdWVzdCk6IE9ic2VydmFibGU8QXV0aGVudGljYXRpb25DcmVhdGVSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmVyaWZ5KHRoaXMuaHR0cENsaWVudC5wb3N0PEF1dGhlbnRpY2F0aW9uQ3JlYXRlUmVzcG9uc2U+KGAke3RoaXMuYXBpfS9gLCByZXF1ZXN0KSwgcmVxdWVzdC5tb2NrRGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uVXBkYXRlUmVxdWVzdCk6IE9ic2VydmFibGU8QXV0aGVudGljYXRpb25VcGRhdGVSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmVyaWZ5KHRoaXMuaHR0cENsaWVudC5wdXQ8QXV0aGVudGljYXRpb25VcGRhdGVSZXNwb25zZT4oYCR7dGhpcy5hcGl9L2AsIHJlcXVlc3QpLCByZXF1ZXN0Lm1vY2tEYXRhKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZWxldGUocmVxdWVzdDogQXV0aGVudGljYXRpb25EZWxldGVSZXF1ZXN0KTogT2JzZXJ2YWJsZTxBdXRoZW50aWNhdGlvbkRlbGV0ZVJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm4gdGhpcy52ZXJpZnkodGhpcy5odHRwQ2xpZW50LmRlbGV0ZTxBdXRoZW50aWNhdGlvbkRlbGV0ZVJlc3BvbnNlPihgJHt0aGlzLmFwaX0/aWRzPSR7cmVxdWVzdC5pZHN9YCksIHJlcXVlc3QubW9ja0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvZ291dChwYXRoOiBzdHJpbmcgPSAnLycsIHJlZnJlc2g6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2FjaGVTZXJ2aWNlLnJlbW92ZShBdXRoQ29uc3QuVXNlcik7XHJcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW3BhdGhdKTtcclxuICAgIGlmIChyZWZyZXNoKSB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gIH1cclxufSJdfQ==