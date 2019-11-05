/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from '@angular/core';
import { AggregatorViewModel } from '../models/base.model';
import * as i0 from "@angular/core";
var AggregatorService = /** @class */ (function () {
    function AggregatorService() {
        this.emitters = [];
    }
    /**
     * @template T
     * @param {?} key
     * @param {?=} value
     * @return {?}
     */
    AggregatorService.prototype.publish = /**
     * @template T
     * @param {?} key
     * @param {?=} value
     * @return {?}
     */
    function (key, value) {
        if (!key)
            return;
        /** @type {?} */
        var currentEmitter = (/** @type {?} */ (this.emitters.find((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.key == key; }))));
        if (!currentEmitter) {
            currentEmitter = new AggregatorViewModel({
                value: this.register(key)
            });
        }
        currentEmitter.value.emit(value);
    };
    /**
     * @template T
     * @param {?} key
     * @param {?} callback
     * @return {?}
     */
    AggregatorService.prototype.subscribe = /**
     * @template T
     * @param {?} key
     * @param {?} callback
     * @return {?}
     */
    function (key, callback) {
        if (!key)
            return;
        /** @type {?} */
        var currentEmitter = (/** @type {?} */ (this.emitters.find((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.key == key; }))));
        if (!currentEmitter) {
            currentEmitter = new AggregatorViewModel({
                value: this.register(key)
            });
        }
        currentEmitter.value.subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            callback(response);
        }));
    };
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    AggregatorService.prototype.register = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var emitter = new AggregatorViewModel({
            key: key,
            value: new EventEmitter()
        });
        this.emitters.push(emitter);
        return emitter.value;
    };
    AggregatorService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ AggregatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AggregatorService_Factory() { return new AggregatorService(); }, token: AggregatorService, providedIn: "root" });
    return AggregatorService;
}());
export { AggregatorService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AggregatorService.prototype.emitters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYWdncmVnYXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFM0Q7SUFBQTtRQUVjLGFBQVEsR0FBMEIsRUFBRSxDQUFDO0tBbUNsRDs7Ozs7OztJQWpDVSxtQ0FBTzs7Ozs7O0lBQWQsVUFBa0IsR0FBVyxFQUFFLEtBQVM7UUFDcEMsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPOztZQUNiLGNBQWMsR0FBRyxtQkFBcUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBWixDQUFZLEVBQUMsRUFBQTtRQUMvRSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ2pCLGNBQWMsR0FBRyxJQUFJLG1CQUFtQixDQUFDO2dCQUNyQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7YUFDNUIsQ0FBQyxDQUFDO1NBQ047UUFDRCxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7O0lBRU0scUNBQVM7Ozs7OztJQUFoQixVQUFvQixHQUFXLEVBQUUsUUFBK0I7UUFDNUQsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPOztZQUNiLGNBQWMsR0FBRyxtQkFBcUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBWixDQUFZLEVBQUMsRUFBQTtRQUMvRSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ2pCLGNBQWMsR0FBRyxJQUFJLG1CQUFtQixDQUFDO2dCQUNyQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7YUFDNUIsQ0FBQyxDQUFDO1NBQ047UUFFRCxjQUFjLENBQUMsS0FBSyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLFFBQVc7WUFDdkMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7O0lBRU8sb0NBQVE7Ozs7O0lBQWhCLFVBQWlCLEdBQVc7O1lBQ3BCLE9BQU8sR0FBRyxJQUFJLG1CQUFtQixDQUFDO1lBQ2xDLEdBQUcsRUFBRSxHQUFHO1lBQ1IsS0FBSyxFQUFFLElBQUksWUFBWSxFQUFPO1NBQ2pDLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7Z0JBcENKLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs0QkFIbEM7Q0F3Q0MsQUFyQ0QsSUFxQ0M7U0FwQ1ksaUJBQWlCOzs7Ozs7SUFDMUIscUNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFnZ3JlZ2F0b3JWaWV3TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvYmFzZS5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgQWdncmVnYXRvclNlcnZpY2Uge1xyXG4gICAgcHJvdGVjdGVkIGVtaXR0ZXJzOiBBZ2dyZWdhdG9yVmlld01vZGVsW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgcHVibGlzaDxUPihrZXk6IHN0cmluZywgdmFsdWU/OiBUKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFrZXkpIHJldHVybjtcclxuICAgICAgICBsZXQgY3VycmVudEVtaXR0ZXIgPSA8QWdncmVnYXRvclZpZXdNb2RlbD50aGlzLmVtaXR0ZXJzLmZpbmQocyA9PiBzLmtleSA9PSBrZXkpO1xyXG4gICAgICAgIGlmICghY3VycmVudEVtaXR0ZXIpIHtcclxuICAgICAgICAgICAgY3VycmVudEVtaXR0ZXIgPSBuZXcgQWdncmVnYXRvclZpZXdNb2RlbCh7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5yZWdpc3RlcihrZXkpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50RW1pdHRlci52YWx1ZS5lbWl0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3Vic2NyaWJlPFQ+KGtleTogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBUKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFrZXkpIHJldHVybjtcclxuICAgICAgICBsZXQgY3VycmVudEVtaXR0ZXIgPSA8QWdncmVnYXRvclZpZXdNb2RlbD50aGlzLmVtaXR0ZXJzLmZpbmQocyA9PiBzLmtleSA9PSBrZXkpO1xyXG4gICAgICAgIGlmICghY3VycmVudEVtaXR0ZXIpIHtcclxuICAgICAgICAgICAgY3VycmVudEVtaXR0ZXIgPSBuZXcgQWdncmVnYXRvclZpZXdNb2RlbCh7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5yZWdpc3RlcihrZXkpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3VycmVudEVtaXR0ZXIudmFsdWUuc3Vic2NyaWJlKChyZXNwb25zZTogVCkgPT4ge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlcihrZXk6IHN0cmluZyk6IEV2ZW50RW1pdHRlcjxhbnk+IHtcclxuICAgICAgICB2YXIgZW1pdHRlciA9IG5ldyBBZ2dyZWdhdG9yVmlld01vZGVsKHtcclxuICAgICAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgICAgIHZhbHVlOiBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZW1pdHRlcnMucHVzaChlbWl0dGVyKTtcclxuICAgICAgICByZXR1cm4gZW1pdHRlci52YWx1ZTtcclxuICAgIH1cclxufVxyXG4iXX0=