/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { SettingService } from './setting.service';
import { Breadcrumb } from '../models/base.model';
import * as i0 from "@angular/core";
import * as i1 from "./setting.service";
var ActionService = /** @class */ (function () {
    function ActionService(_settingService) {
        this._settingService = _settingService;
    }
    /**
     * @param {?} callback
     * @param {?=} timeout
     * @return {?}
     */
    ActionService.prototype.executeAsync = /**
     * @param {?} callback
     * @param {?=} timeout
     * @return {?}
     */
    function (callback, timeout) {
        if (timeout === void 0) { timeout = 50; }
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (callback)
                callback();
        }), timeout);
    };
    /**
     * @return {?}
     */
    ActionService.prototype.scrollTop = /**
     * @return {?}
     */
    function () {
        window.scrollTo(0, 0);
    };
    /**
     * @return {?}
     */
    ActionService.prototype.isMobile = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var userAgent = navigator.userAgent;
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(userAgent));
    };
    /**
     * @template T
     * @param {?} callback
     * @return {?}
     */
    ActionService.prototype.verify = /**
     * @template T
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        /** @type {?} */
        var mock = this._settingService.useMock();
        if (mock)
            return of((/** @type {?} */ ({})));
        return callback;
    };
    /**
     * @param {?} item
     * @param {?} menuTabs
     * @param {?=} callback
     * @return {?}
     */
    ActionService.prototype.changeItem = /**
     * @param {?} item
     * @param {?} menuTabs
     * @param {?=} callback
     * @return {?}
     */
    function (item, menuTabs, callback) {
        /** @type {?} */
        var items = [];
        /** @type {?} */
        var parent = (/** @type {?} */ (this.retrieveParent(item.state, menuTabs)));
        if (parent != null) {
            items.push(parent);
        }
        if (!items.find((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.label == item.name; }))) {
            items.push(new Breadcrumb({
                label: item.name,
                url: item.mainState ? "/" + item.mainState + "/" + item.state : "" + item.state
            }));
        }
        if (callback)
            callback(items);
        return items;
    };
    /**
     * @param {?} state
     * @param {?} menuTabs
     * @return {?}
     */
    ActionService.prototype.retrieveParent = /**
     * @param {?} state
     * @param {?} menuTabs
     * @return {?}
     */
    function (state, menuTabs) {
        if (!menuTabs || menuTabs.length == 0)
            return;
        for (var i = 0; i < menuTabs.length; i++) {
            /** @type {?} */
            var items = menuTabs[i].items;
            if (!items || items.length == 0)
                continue;
            for (var j = 0; j < items.length; j++) {
                /** @type {?} */
                var children = items[j].children;
                if (!children || children.length == 0)
                    return;
                for (var k = 0; k < children.length; k++) {
                    if (children[k].state == state)
                        return new Breadcrumb({
                            label: items[j].label,
                            state: children[k].mainState,
                            url: children[k].mainState ? "/" + children[k].mainState + "/" + children[0].state : "" + children[0].state
                        });
                }
            }
        }
        return null;
    };
    /**
     * @param {?} state
     * @param {?} menuTabs
     * @return {?}
     */
    ActionService.prototype.retrieveChild = /**
     * @param {?} state
     * @param {?} menuTabs
     * @return {?}
     */
    function (state, menuTabs) {
        if (!menuTabs || menuTabs.length == 0)
            return;
        for (var i = 0; i < menuTabs.length; i++) {
            /** @type {?} */
            var items = menuTabs[i].items;
            if (!items || items.length == 0)
                continue;
            for (var j = 0; j < items.length; j++) {
                /** @type {?} */
                var children = items[j].children;
                if (!children || children.length == 0)
                    return;
                for (var k = 0; k < children.length; k++) {
                    if (children[k].mainState == state) {
                        return new Breadcrumb({
                            state: children[k].mainState,
                            label: children[k].name,
                            url: "/" + children[k].mainState + "/" + children[0].state
                        });
                    }
                }
            }
        }
        return null;
    };
    /**
     * @param {?} state
     * @param {?} menuTabs
     * @return {?}
     */
    ActionService.prototype.retrieveStateName = /**
     * @param {?} state
     * @param {?} menuTabs
     * @return {?}
     */
    function (state, menuTabs) {
        if (!menuTabs || menuTabs.length == 0)
            return;
        for (var i = 0; i < menuTabs.length; i++) {
            /** @type {?} */
            var items = menuTabs[i].items;
            if (!items || items.length == 0)
                continue;
            for (var j = 0; j < items.length; j++) {
                /** @type {?} */
                var children = items[j].children;
                if (!children || children.length == 0)
                    return;
                for (var k = 0; k < children.length; k++) {
                    if (children[k].state == state)
                        return children[k].name;
                }
            }
        }
        return null;
    };
    ActionService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ActionService.ctorParameters = function () { return [
        { type: SettingService }
    ]; };
    /** @nocollapse */ ActionService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ActionService_Factory() { return new ActionService(i0.ɵɵinject(i1.SettingService)); }, token: ActionService, providedIn: "root" });
    return ActionService;
}());
export { ActionService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActionService.prototype._settingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9zZXJ2aWNlcy9hY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFXLE1BQU0sc0JBQXNCLENBQUM7OztBQUUzRDtJQUVJLHVCQUNZLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUN2QyxDQUFDOzs7Ozs7SUFFRSxvQ0FBWTs7Ozs7SUFBbkIsVUFBb0IsUUFBbUIsRUFBRSxPQUFvQjtRQUFwQix3QkFBQSxFQUFBLFlBQW9CO1FBQ3pELFVBQVU7OztRQUFDO1lBQ1AsSUFBSSxRQUFRO2dCQUFFLFFBQVEsRUFBRSxDQUFDO1FBQzdCLENBQUMsR0FBRSxPQUFPLENBQUMsQ0FBQztJQUNoQixDQUFDOzs7O0lBRU0saUNBQVM7OztJQUFoQjtRQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFTSxnQ0FBUTs7O0lBQWY7O1lBQ1UsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTO1FBQ3JDLE9BQU8sQ0FBQyxvRkFBb0YsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNsSCxDQUFDOzs7Ozs7SUFFTSw4QkFBTTs7Ozs7SUFBYixVQUFpQixRQUF1Qjs7WUFDaEMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFO1FBQ3pDLElBQUksSUFBSTtZQUFFLE9BQU8sRUFBRSxDQUFDLG1CQUFBLEVBQUUsRUFBSyxD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T0FBTztRQUM5QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBQ2xDLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUM3QixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQztnQkFBRSxTQUFTO1lBQzFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztvQkFDL0IsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO2dCQUNoQyxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQztvQkFBRSxPQUFPO2dCQUM5QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDdEMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUs7d0JBQUUsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2lCQUMzRDthQUNKO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOztnQkFuR0osVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFIekIsY0FBYzs7O3dCQUZ2QjtDQXlHQyxBQXBHRCxJQW9HQztTQW5HWSxhQUFhOzs7Ozs7SUFFbEIsd0NBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBTZXR0aW5nU2VydmljZSB9IGZyb20gJy4vc2V0dGluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQnJlYWRjcnVtYiwgTWVudVRhYiB9IGZyb20gJy4uL21vZGVscy9iYXNlLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb25TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3NldHRpbmdTZXJ2aWNlOiBTZXR0aW5nU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZXhlY3V0ZUFzeW5jKGNhbGxiYWNrOiAoKSA9PiBhbnksIHRpbWVvdXQ6IG51bWJlciA9IDUwKTogdm9pZCB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcclxuICAgICAgICB9LCB0aW1lb3V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2Nyb2xsVG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNNb2JpbGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgICAgICByZXR1cm4gKC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pfE1vYmlsZXxtb2JpbGV8Q3JpT1MvaS50ZXN0KHVzZXJBZ2VudCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2ZXJpZnk8VD4oY2FsbGJhY2s6IE9ic2VydmFibGU8VD4pOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgICAgICB2YXIgbW9jayA9IHRoaXMuX3NldHRpbmdTZXJ2aWNlLnVzZU1vY2soKTtcclxuICAgICAgICBpZiAobW9jaykgcmV0dXJuIG9mKHt9IGFzIFQpO1xyXG4gICAgICAgIHJldHVybiBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlSXRlbShpdGVtOiBhbnksIG1lbnVUYWJzOiBNZW51VGFiW10sIGNhbGxiYWNrPzogKGJyZWFkQ3J1bWJzOiBCcmVhZGNydW1iW10pID0+IGFueSk6IEJyZWFkY3J1bWJbXSB7XHJcbiAgICAgICAgdmFyIGl0ZW1zOiBCcmVhZGNydW1iW10gPSBbXTtcclxuICAgICAgICB2YXIgcGFyZW50ID0gPEJyZWFkY3J1bWI+dGhpcy5yZXRyaWV2ZVBhcmVudChpdGVtLnN0YXRlLCBtZW51VGFicyk7XHJcbiAgICAgICAgaWYgKHBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2gocGFyZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpdGVtcy5maW5kKHMgPT4gcy5sYWJlbCA9PSBpdGVtLm5hbWUpKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2gobmV3IEJyZWFkY3J1bWIoe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW0ubmFtZSxcclxuICAgICAgICAgICAgICAgIHVybDogaXRlbS5tYWluU3RhdGUgPyBgLyR7aXRlbS5tYWluU3RhdGV9LyR7aXRlbS5zdGF0ZX1gIDogYCR7aXRlbS5zdGF0ZX1gXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhpdGVtcyk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXRyaWV2ZVBhcmVudChzdGF0ZTogc3RyaW5nLCBtZW51VGFiczogTWVudVRhYltdKTogQnJlYWRjcnVtYiB7XHJcbiAgICAgICAgaWYgKCFtZW51VGFicyB8fCBtZW51VGFicy5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudVRhYnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gbWVudVRhYnNbaV0uaXRlbXM7XHJcbiAgICAgICAgICAgIGlmICghaXRlbXMgfHwgaXRlbXMubGVuZ3RoID09IDApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZW1zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBpdGVtc1tqXS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgICAgIGlmICghY2hpbGRyZW4gfHwgY2hpbGRyZW4ubGVuZ3RoID09IDApIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgY2hpbGRyZW4ubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW5ba10uc3RhdGUgPT0gc3RhdGUpIHJldHVybiBuZXcgQnJlYWRjcnVtYih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBpdGVtc1tqXS5sYWJlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGNoaWxkcmVuW2tdLm1haW5TdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjaGlsZHJlbltrXS5tYWluU3RhdGUgPyBgLyR7Y2hpbGRyZW5ba10ubWFpblN0YXRlfS8ke2NoaWxkcmVuWzBdLnN0YXRlfWAgOiBgJHtjaGlsZHJlblswXS5zdGF0ZX1gXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJldHJpZXZlQ2hpbGQoc3RhdGU6IHN0cmluZywgbWVudVRhYnM6IE1lbnVUYWJbXSk6IEJyZWFkY3J1bWIge1xyXG4gICAgICAgIGlmICghbWVudVRhYnMgfHwgbWVudVRhYnMubGVuZ3RoID09IDApIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVUYWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IG1lbnVUYWJzW2ldLml0ZW1zO1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA9PSAwKSBjb250aW51ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gaXRlbXNbal0uY2hpbGRyZW47XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkcmVuIHx8IGNoaWxkcmVuLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGNoaWxkcmVuLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuW2tdLm1haW5TdGF0ZSA9PSBzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJyZWFkY3J1bWIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGNoaWxkcmVuW2tdLm1haW5TdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBjaGlsZHJlbltrXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgLyR7Y2hpbGRyZW5ba10ubWFpblN0YXRlfS8ke2NoaWxkcmVuWzBdLnN0YXRlfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXRyaWV2ZVN0YXRlTmFtZShzdGF0ZTogc3RyaW5nLCBtZW51VGFiczogTWVudVRhYltdKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIW1lbnVUYWJzIHx8IG1lbnVUYWJzLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51VGFicy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBtZW51VGFic1tpXS5pdGVtcztcclxuICAgICAgICAgICAgaWYgKCFpdGVtcyB8fCBpdGVtcy5sZW5ndGggPT0gMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaXRlbXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IGl0ZW1zW2pdLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbiB8fCBjaGlsZHJlbi5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBjaGlsZHJlbi5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbltrXS5zdGF0ZSA9PSBzdGF0ZSkgcmV0dXJuIGNoaWxkcmVuW2tdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuIl19