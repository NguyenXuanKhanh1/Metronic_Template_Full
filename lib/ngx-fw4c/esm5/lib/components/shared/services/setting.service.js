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
var SettingService = /** @class */ (function () {
    function SettingService(httpClient, _cacheService) {
        this.httpClient = httpClient;
        this._cacheService = _cacheService;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    SettingService.prototype.search = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.httpClient.get("v1/settings/search", { params: (/** @type {?} */ (request)) });
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    SettingService.prototype.useMock = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value == true || value == false) {
            this._cacheService.set('mock', value);
            return value;
        }
        /** @type {?} */
        var currentValue = (/** @type {?} */ (this._cacheService.get('mock')));
        if (!currentValue)
            return false;
        return currentValue;
    };
    SettingService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    SettingService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: CacheService }
    ]; };
    /** @nocollapse */ SettingService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SettingService_Factory() { return new SettingService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.CacheService)); }, token: SettingService, providedIn: "root" });
    return SettingService;
}());
export { SettingService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvc2V0dGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFFL0M7SUFFSSx3QkFDYyxVQUFzQixFQUN4QixhQUEyQjtRQUR6QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQ25DLENBQUM7Ozs7O0lBRUUsK0JBQU07Ozs7SUFBYixVQUFjLE9BQTBCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQXdCLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLG1CQUFBLE9BQU8sRUFBTyxFQUFFLENBQUMsQ0FBQztJQUN4RyxDQUFDOzs7OztJQUVNLGdDQUFPOzs7O0lBQWQsVUFBZSxLQUFlO1FBQzFCLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0QyxPQUFPLEtBQUssQ0FBQztTQUNoQjs7WUFDRyxZQUFZLEdBQUcsbUJBQVMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUE7UUFDMUQsSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNoQyxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDOztnQkFuQkosVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFKekIsVUFBVTtnQkFFVixZQUFZOzs7eUJBTHJCO0NBMkJDLEFBcEJELElBb0JDO1NBbkJZLGNBQWM7Ozs7OztJQUVuQixvQ0FBZ0M7Ozs7O0lBQ2hDLHVDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBTZXR0aW5nU2VhcmNoUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXNlUmVxdWVzdCB9IGZyb20gJy4uL21vZGVscy9iYXNlLm1vZGVsJztcclxuaW1wb3J0IHsgQ2FjaGVTZXJ2aWNlIH0gZnJvbSAnLi9jYWNoZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudCxcclxuICAgICAgICBwcml2YXRlIF9jYWNoZVNlcnZpY2U6IENhY2hlU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgc2VhcmNoKHJlcXVlc3Q6IFNlYXJjaEJhc2VSZXF1ZXN0KTogT2JzZXJ2YWJsZTxTZXR0aW5nU2VhcmNoUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDxTZXR0aW5nU2VhcmNoUmVzcG9uc2U+KGB2MS9zZXR0aW5ncy9zZWFyY2hgLCB7IHBhcmFtczogcmVxdWVzdCBhcyBhbnkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVzZU1vY2sodmFsdWU/OiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IHRydWUgfHwgdmFsdWUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FjaGVTZXJ2aWNlLnNldCgnbW9jaycsIHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3VycmVudFZhbHVlID0gPGJvb2xlYW4+dGhpcy5fY2FjaGVTZXJ2aWNlLmdldCgnbW9jaycpO1xyXG4gICAgICAgIGlmICghY3VycmVudFZhbHVlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRWYWx1ZTtcclxuICAgIH1cclxufVxyXG4iXX0=