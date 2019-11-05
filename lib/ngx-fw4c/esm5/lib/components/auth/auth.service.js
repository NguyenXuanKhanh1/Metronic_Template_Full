/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var AuthenticationService = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationService, _super);
    function AuthenticationService(httpClient, _cacheService, _router) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this._cacheService = _cacheService;
        _this._router = _router;
        _this.api = 'v1/authentications/search';
        /** @type {?} */
        var user = (/** @type {?} */ (_this._cacheService.get(AuthConst.User)));
        _this._cacheService.set(AuthConst.User, user);
        _this.currentUser = user;
        return _this;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    AuthenticationService.prototype.search = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.verify(this.httpClient.get(this.api + "/search", { params: (/** @type {?} */ (request)) }), request.mockData);
    };
    /**
     * @param {?} request
     * @return {?}
     */
    AuthenticationService.prototype.retrieve = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.verify(this.httpClient.get(this.api + "/" + request.payload.userName), request.mockData);
    };
    /**
     * @param {?} request
     * @return {?}
     */
    AuthenticationService.prototype.login = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.verify(this.httpClient.post(this.api + "/login", request), request.mockData);
    };
    /**
     * @param {?} request
     * @return {?}
     */
    AuthenticationService.prototype.create = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.verify(this.httpClient.post(this.api + "/", request), request.mockData);
    };
    /**
     * @param {?} request
     * @return {?}
     */
    AuthenticationService.prototype.update = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.verify(this.httpClient.put(this.api + "/", request), request.mockData);
    };
    /**
     * @param {?} request
     * @return {?}
     */
    AuthenticationService.prototype.delete = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.verify(this.httpClient.delete(this.api + "?ids=" + request.ids), request.mockData);
    };
    /**
     * @param {?=} path
     * @param {?=} refresh
     * @return {?}
     */
    AuthenticationService.prototype.logout = /**
     * @param {?=} path
     * @param {?=} refresh
     * @return {?}
     */
    function (path, refresh) {
        if (path === void 0) { path = '/'; }
        if (refresh === void 0) { refresh = false; }
        this._cacheService.remove(AuthConst.User);
        this._router.navigate([path]);
        if (refresh)
            window.location.href = window.location.href;
    };
    AuthenticationService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    AuthenticationService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: CacheService },
        { type: Router }
    ]; };
    /** @nocollapse */ AuthenticationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthenticationService_Factory() { return new AuthenticationService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.CacheService), i0.ɵɵinject(i3.Router)); }, token: AuthenticationService, providedIn: "root" });
    return AuthenticationService;
}(MockService));
export { AuthenticationService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBaUJsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7OztBQUU5RDtJQUMyQyxpREFBVztJQUdwRCwrQkFDWSxVQUFzQixFQUN4QixhQUEyQixFQUMzQixPQUFlO1FBSHpCLFlBS0UsaUJBQU8sU0FJUjtRQVJXLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3hCLG1CQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLGFBQU8sR0FBUCxPQUFPLENBQVE7UUFKZixTQUFHLEdBQVcsMkJBQTJCLENBQUM7O1lBTzlDLElBQUksR0FBRyxtQkFBZSxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUE7UUFDaEUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs7SUFDMUIsQ0FBQzs7Ozs7SUFFTSxzQ0FBTTs7OztJQUFiLFVBQWMsT0FBb0M7UUFDaEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFrQyxJQUFJLENBQUMsR0FBRyxZQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsbUJBQUEsT0FBTyxFQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUMzSSxDQUFDOzs7OztJQUVNLHdDQUFROzs7O0lBQWYsVUFBZ0IsT0FBc0M7UUFDcEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFvQyxJQUFJLENBQUMsR0FBRyxTQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBVSxDQUFDLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZJLENBQUM7Ozs7O0lBRU0scUNBQUs7Ozs7SUFBWixVQUFhLE9BQW1DO1FBQzlDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBaUMsSUFBSSxDQUFDLEdBQUcsV0FBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4SCxDQUFDOzs7OztJQUVNLHNDQUFNOzs7O0lBQWIsVUFBYyxPQUFvQztRQUNoRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQWtDLElBQUksQ0FBQyxHQUFHLE1BQUcsRUFBRSxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEgsQ0FBQzs7Ozs7SUFFTSxzQ0FBTTs7OztJQUFiLFVBQWMsT0FBb0M7UUFDaEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFrQyxJQUFJLENBQUMsR0FBRyxNQUFHLEVBQUUsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25ILENBQUM7Ozs7O0lBRU0sc0NBQU07Ozs7SUFBYixVQUFjLE9BQW9DO1FBQ2hELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBa0MsSUFBSSxDQUFDLEdBQUcsYUFBUSxPQUFPLENBQUMsR0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9ILENBQUM7Ozs7OztJQUVNLHNDQUFNOzs7OztJQUFiLFVBQWMsSUFBa0IsRUFBRSxPQUF3QjtRQUE1QyxxQkFBQSxFQUFBLFVBQWtCO1FBQUUsd0JBQUEsRUFBQSxlQUF3QjtRQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksT0FBTztZQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzNELENBQUM7O2dCQTNDRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQXRCekIsVUFBVTtnQkFpQlYsWUFBWTtnQkFFWixNQUFNOzs7Z0NBcEJmO0NBbUVDLEFBNUNELENBQzJDLFdBQVcsR0EyQ3JEO1NBM0NZLHFCQUFxQjs7O0lBQ2hDLDRDQUFrQzs7Ozs7SUFDbEMsb0NBQW9EOzs7OztJQUVsRCwyQ0FBZ0M7Ozs7O0lBQ2hDLDhDQUFtQzs7Ozs7SUFDbkMsd0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgQXV0aGVudGljYXRpb25Mb2dpblJlcXVlc3QsXHJcbiAgQXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlLFxyXG4gIFVzZXJWaWV3TW9kZWwsXHJcbiAgQXV0aGVudGljYXRpb25TZWFyY2hSZXF1ZXN0LFxyXG4gIEF1dGhlbnRpY2F0aW9uU2VhcmNoUmVzcG9uc2UsXHJcbiAgQXV0aGVudGljYXRpb25SZXRyaWV2ZVJlcXVlc3QsXHJcbiAgQXV0aGVudGljYXRpb25SZXRyaWV2ZVJlc3BvbnNlLFxyXG4gIEF1dGhlbnRpY2F0aW9uQ3JlYXRlUmVxdWVzdCxcclxuICBBdXRoZW50aWNhdGlvbkNyZWF0ZVJlc3BvbnNlLFxyXG4gIEF1dGhlbnRpY2F0aW9uVXBkYXRlUmVxdWVzdCxcclxuICBBdXRoZW50aWNhdGlvblVwZGF0ZVJlc3BvbnNlLFxyXG4gIEF1dGhlbnRpY2F0aW9uRGVsZXRlUmVxdWVzdCxcclxuICBBdXRoZW50aWNhdGlvbkRlbGV0ZVJlc3BvbnNlXHJcbn0gZnJvbSAnLi9hdXRoLm1vZGVsJztcclxuaW1wb3J0IHsgQ2FjaGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2NhY2hlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoQ29uc3QgfSBmcm9tICcuL2F1dGguY29uc3QnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNb2NrU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9tb2NrLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSBleHRlbmRzIE1vY2tTZXJ2aWNlIHtcclxuICBwdWJsaWMgY3VycmVudFVzZXI6IFVzZXJWaWV3TW9kZWw7XHJcbiAgcHJvdGVjdGVkIGFwaTogc3RyaW5nID0gJ3YxL2F1dGhlbnRpY2F0aW9ucy9zZWFyY2gnO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIF9jYWNoZVNlcnZpY2U6IENhY2hlU2VydmljZSxcclxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdmFyIHVzZXIgPSA8VXNlclZpZXdNb2RlbD50aGlzLl9jYWNoZVNlcnZpY2UuZ2V0KEF1dGhDb25zdC5Vc2VyKTtcclxuICAgIHRoaXMuX2NhY2hlU2VydmljZS5zZXQoQXV0aENvbnN0LlVzZXIsIHVzZXIpO1xyXG4gICAgdGhpcy5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VhcmNoKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uU2VhcmNoUmVxdWVzdCk6IE9ic2VydmFibGU8QXV0aGVudGljYXRpb25TZWFyY2hSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmVyaWZ5KHRoaXMuaHR0cENsaWVudC5nZXQ8QXV0aGVudGljYXRpb25TZWFyY2hSZXNwb25zZT4oYCR7dGhpcy5hcGl9L3NlYXJjaGAsIHsgcGFyYW1zOiByZXF1ZXN0IGFzIGFueSB9KSwgcmVxdWVzdC5tb2NrRGF0YSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXRyaWV2ZShyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblJldHJpZXZlUmVxdWVzdCk6IE9ic2VydmFibGU8QXV0aGVudGljYXRpb25SZXRyaWV2ZVJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm4gdGhpcy52ZXJpZnkodGhpcy5odHRwQ2xpZW50LmdldDxBdXRoZW50aWNhdGlvblJldHJpZXZlUmVzcG9uc2U+KGAke3RoaXMuYXBpfS8ke3JlcXVlc3QucGF5bG9hZC51c2VyTmFtZX1gKSwgcmVxdWVzdC5tb2NrRGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9naW4ocmVxdWVzdDogQXV0aGVudGljYXRpb25Mb2dpblJlcXVlc3QpOiBPYnNlcnZhYmxlPEF1dGhlbnRpY2F0aW9uTG9naW5SZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmVyaWZ5KHRoaXMuaHR0cENsaWVudC5wb3N0PEF1dGhlbnRpY2F0aW9uTG9naW5SZXNwb25zZT4oYCR7dGhpcy5hcGl9L2xvZ2luYCwgcmVxdWVzdCksIHJlcXVlc3QubW9ja0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZShyZXF1ZXN0OiBBdXRoZW50aWNhdGlvbkNyZWF0ZVJlcXVlc3QpOiBPYnNlcnZhYmxlPEF1dGhlbnRpY2F0aW9uQ3JlYXRlUmVzcG9uc2U+IHtcclxuICAgIHJldHVybiB0aGlzLnZlcmlmeSh0aGlzLmh0dHBDbGllbnQucG9zdDxBdXRoZW50aWNhdGlvbkNyZWF0ZVJlc3BvbnNlPihgJHt0aGlzLmFwaX0vYCwgcmVxdWVzdCksIHJlcXVlc3QubW9ja0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZShyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblVwZGF0ZVJlcXVlc3QpOiBPYnNlcnZhYmxlPEF1dGhlbnRpY2F0aW9uVXBkYXRlUmVzcG9uc2U+IHtcclxuICAgIHJldHVybiB0aGlzLnZlcmlmeSh0aGlzLmh0dHBDbGllbnQucHV0PEF1dGhlbnRpY2F0aW9uVXBkYXRlUmVzcG9uc2U+KGAke3RoaXMuYXBpfS9gLCByZXF1ZXN0KSwgcmVxdWVzdC5tb2NrRGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVsZXRlKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uRGVsZXRlUmVxdWVzdCk6IE9ic2VydmFibGU8QXV0aGVudGljYXRpb25EZWxldGVSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmVyaWZ5KHRoaXMuaHR0cENsaWVudC5kZWxldGU8QXV0aGVudGljYXRpb25EZWxldGVSZXNwb25zZT4oYCR7dGhpcy5hcGl9P2lkcz0ke3JlcXVlc3QuaWRzfWApLCByZXF1ZXN0Lm1vY2tEYXRhKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2dvdXQocGF0aDogc3RyaW5nID0gJy8nLCByZWZyZXNoOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NhY2hlU2VydmljZS5yZW1vdmUoQXV0aENvbnN0LlVzZXIpO1xyXG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtwYXRoXSk7XHJcbiAgICBpZiAocmVmcmVzaCkgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICB9XHJcbn0iXX0=