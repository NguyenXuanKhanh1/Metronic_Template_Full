/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { MenuItem } from '../models/base.model';
import * as i0 from "@angular/core";
var MenuService = /** @class */ (function () {
    function MenuService() {
        this.tabs = [];
    }
    /**
     * @param {?} menuTabs
     * @param {?} callback
     * @param {?} set
     * @return {?}
     */
    MenuService.prototype.init = /**
     * @param {?} menuTabs
     * @param {?} callback
     * @param {?} set
     * @return {?}
     */
    function (menuTabs, callback, set) {
        /** @type {?} */
        var menuTabbedItems = menuTabs;
        this.tabs = menuTabbedItems.reduce((/**
         * @param {?} result
         * @param {?} current
         * @return {?}
         */
        function (result, current) {
            /** @type {?} */
            var item = set
                ? set(current.role)
                : new MenuItem({
                    menu: current.role,
                    items: current.items,
                    subName: current.role,
                    name: current.role
                });
            if (item.name) {
                result.push(item);
            }
            return result;
        }), []);
        if (!this.tabs || !this.tabs[0]) {
            this.tabs = [];
        }
        if (callback)
            callback();
    };
    /**
     * @param {?=} menu
     * @return {?}
     */
    MenuService.prototype.loadMenuItems = /**
     * @param {?=} menu
     * @return {?}
     */
    function (menu) {
        if (!menu) {
            return this.tabs.reduce((/**
             * @param {?} result
             * @param {?} current
             * @return {?}
             */
            function (result, current) {
                result.push.apply(result, tslib_1.__spread(current.items));
                return result;
            }), []);
        }
        /** @type {?} */
        var tab = this.tabs.find((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.menu === menu; }));
        if (!tab) {
            return;
        }
        return tab.items;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    MenuService.prototype.loadFirstTabItems = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var currentMenu = this.tabs.find((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.menu.toLowerCase() == key.toLowerCase(); }));
        if (!currentMenu) {
            return [];
        }
        return currentMenu.items;
    };
    /**
     * @return {?}
     */
    MenuService.prototype.loadFirstTab = /**
     * @return {?}
     */
    function () {
        return this.tabs[0];
    };
    /**
     * @return {?}
     */
    MenuService.prototype.getTabs = /**
     * @return {?}
     */
    function () {
        return this.tabs;
    };
    MenuService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MenuService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MenuService_Factory() { return new MenuService(); }, token: MenuService, providedIn: "root" });
    return MenuService;
}());
export { MenuService };
if (false) {
    /** @type {?} */
    MenuService.prototype.tabs;
    /** @type {?} */
    MenuService.prototype.currentSupporterId;
    /** @type {?} */
    MenuService.prototype.currentSelectedSupplierName;
    /** @type {?} */
    MenuService.prototype.currentSelectedSupplierId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQWtDLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUVoRjtJQUFBO1FBRVcsU0FBSSxHQUFzRixFQUFFLENBQUM7S0F3RHZHOzs7Ozs7O0lBbkRVLDBCQUFJOzs7Ozs7SUFBWCxVQUFZLFFBQW1CLEVBQUUsUUFBbUIsRUFBRSxHQUErQjs7WUFDN0UsZUFBZSxHQUFHLFFBQVE7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUMsTUFBTTs7Ozs7UUFBQyxVQUFDLE1BQU0sRUFBRSxPQUFPOztnQkFDM0MsSUFBSSxHQUFHLEdBQUc7Z0JBQ1YsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNuQixDQUFDLENBQUMsSUFBSSxRQUFRLENBQUM7b0JBQ1gsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO29CQUNsQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7b0JBQ3BCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtvQkFDckIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO2lCQUNyQixDQUFDO1lBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckI7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDbEI7UUFDRCxJQUFJLFFBQVE7WUFBRSxRQUFRLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVNLG1DQUFhOzs7O0lBQXBCLFVBQXFCLElBQWE7UUFDOUIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNOzs7OztZQUFDLFVBQUMsTUFBTSxFQUFFLE9BQU87Z0JBQ3BDLE1BQU0sQ0FBQyxJQUFJLE9BQVgsTUFBTSxtQkFBUyxPQUFPLENBQUMsS0FBSyxHQUFFO2dCQUM5QixPQUFPLE1BQU0sQ0FBQztZQUNsQixDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7U0FDVjs7WUFDSyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksRUFBZixDQUFlLEVBQUM7UUFDaEQsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNOLE9BQU87U0FDVjtRQUNELE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7OztJQUVNLHVDQUFpQjs7OztJQUF4QixVQUF5QixHQUFXOztZQUM1QixXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBekMsQ0FBeUMsRUFBQztRQUNoRixJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2QsT0FBTyxFQUFFLENBQUM7U0FDYjtRQUNELE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7O0lBRU0sa0NBQVk7OztJQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7O0lBRU0sNkJBQU87OztJQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7O2dCQXpESixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7c0JBSmxDO0NBOERDLEFBMURELElBMERDO1NBekRZLFdBQVc7OztJQUNwQiwyQkFBb0c7O0lBQ3BHLHlDQUFrQzs7SUFDbEMsa0RBQTJDOztJQUMzQyxnREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNZW51S2V5IH0gZnJvbSAnLi4vY29uc3RhbnRzL21lbnUuY29uc3QnO1xyXG5pbXBvcnQgeyBNZW51VGFiLCBFeHRlbmRlZE1haW5NZW51R3JvdXAsIE1lbnVJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL2Jhc2UubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIE1lbnVTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyB0YWJzOiB7IG5hbWU6IHN0cmluZywgbWVudTogc3RyaW5nLCBzdWJOYW1lOiBzdHJpbmcsIGl0ZW1zOiBFeHRlbmRlZE1haW5NZW51R3JvdXBbXSB9W10gPSBbXTtcclxuICAgIHB1YmxpYyBjdXJyZW50U3VwcG9ydGVySWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBjdXJyZW50U2VsZWN0ZWRTdXBwbGllck5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBjdXJyZW50U2VsZWN0ZWRTdXBwbGllcklkOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGluaXQobWVudVRhYnM6IE1lbnVUYWJbXSwgY2FsbGJhY2s6ICgpID0+IGFueSwgc2V0OiAocm9sZTogc3RyaW5nKSA9PiBNZW51SXRlbSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtZW51VGFiYmVkSXRlbXMgPSBtZW51VGFicztcclxuICAgICAgICB0aGlzLnRhYnMgPSBtZW51VGFiYmVkSXRlbXMucmVkdWNlKChyZXN1bHQsIGN1cnJlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBzZXRcclxuICAgICAgICAgICAgICAgID8gc2V0KGN1cnJlbnQucm9sZSlcclxuICAgICAgICAgICAgICAgIDogbmV3IE1lbnVJdGVtKHtcclxuICAgICAgICAgICAgICAgICAgICBtZW51OiBjdXJyZW50LnJvbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IGN1cnJlbnQuaXRlbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViTmFtZTogY3VycmVudC5yb2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGN1cnJlbnQucm9sZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSwgW10pO1xyXG4gICAgICAgIGlmICghdGhpcy50YWJzIHx8ICF0aGlzLnRhYnNbMF0pIHtcclxuICAgICAgICAgICAgdGhpcy50YWJzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZE1lbnVJdGVtcyhtZW51Pzogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFtZW51KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhYnMucmVkdWNlKChyZXN1bHQsIGN1cnJlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKC4uLmN1cnJlbnQuaXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfSwgW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0YWIgPSB0aGlzLnRhYnMuZmluZCh4ID0+IHgubWVudSA9PT0gbWVudSk7XHJcbiAgICAgICAgaWYgKCF0YWIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFiLml0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkRmlyc3RUYWJJdGVtcyhrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBjdXJyZW50TWVudSA9IHRoaXMudGFicy5maW5kKHMgPT4gcy5tZW51LnRvTG93ZXJDYXNlKCkgPT0ga2V5LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIGlmICghY3VycmVudE1lbnUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3VycmVudE1lbnUuaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRGaXJzdFRhYigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YWJzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUYWJzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhYnM7XHJcbiAgICB9XHJcbn0iXX0=