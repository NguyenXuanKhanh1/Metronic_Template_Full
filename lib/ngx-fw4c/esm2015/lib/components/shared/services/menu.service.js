/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { MenuItem } from '../models/base.model';
import * as i0 from "@angular/core";
export class MenuService {
    constructor() {
        this.tabs = [];
    }
    /**
     * @param {?} menuTabs
     * @param {?} callback
     * @param {?} set
     * @return {?}
     */
    init(menuTabs, callback, set) {
        /** @type {?} */
        let menuTabbedItems = menuTabs;
        this.tabs = menuTabbedItems.reduce((/**
         * @param {?} result
         * @param {?} current
         * @return {?}
         */
        (result, current) => {
            /** @type {?} */
            let item = set
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
    }
    /**
     * @param {?=} menu
     * @return {?}
     */
    loadMenuItems(menu) {
        if (!menu) {
            return this.tabs.reduce((/**
             * @param {?} result
             * @param {?} current
             * @return {?}
             */
            (result, current) => {
                result.push(...current.items);
                return result;
            }), []);
        }
        /** @type {?} */
        const tab = this.tabs.find((/**
         * @param {?} x
         * @return {?}
         */
        x => x.menu === menu));
        if (!tab) {
            return;
        }
        return tab.items;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    loadFirstTabItems(key) {
        /** @type {?} */
        let currentMenu = this.tabs.find((/**
         * @param {?} s
         * @return {?}
         */
        s => s.menu.toLowerCase() == key.toLowerCase()));
        if (!currentMenu) {
            return [];
        }
        return currentMenu.items;
    }
    /**
     * @return {?}
     */
    loadFirstTab() {
        return this.tabs[0];
    }
    /**
     * @return {?}
     */
    getTabs() {
        return this.tabs;
    }
}
MenuService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ MenuService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MenuService_Factory() { return new MenuService(); }, token: MenuService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBa0MsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBR2hGLE1BQU0sT0FBTyxXQUFXO0lBRHhCO1FBRVcsU0FBSSxHQUFzRixFQUFFLENBQUM7S0F3RHZHOzs7Ozs7O0lBbkRVLElBQUksQ0FBQyxRQUFtQixFQUFFLFFBQW1CLEVBQUUsR0FBK0I7O1lBQzdFLGVBQWUsR0FBRyxRQUFRO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7O2dCQUMvQyxJQUFJLEdBQUcsR0FBRztnQkFDVixDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQztvQkFDWCxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7b0JBQ2xCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztvQkFDcEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO29CQUNyQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7aUJBQ3JCLENBQUM7WUFDTixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyQjtZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUNsQjtRQUNELElBQUksUUFBUTtZQUFFLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRU0sYUFBYSxDQUFDLElBQWE7UUFDOUIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNOzs7OztZQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFO2dCQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixPQUFPLE1BQU0sQ0FBQztZQUNsQixDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7U0FDVjs7Y0FDSyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksRUFBQztRQUNoRCxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ04sT0FBTztTQUNWO1FBQ0QsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRU0saUJBQWlCLENBQUMsR0FBVzs7WUFDNUIsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUM7UUFDaEYsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNkLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFDRCxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVNLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7O1lBekRKLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7O0lBRTlCLDJCQUFvRzs7SUFDcEcseUNBQWtDOztJQUNsQyxrREFBMkM7O0lBQzNDLGdEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1lbnVLZXkgfSBmcm9tICcuLi9jb25zdGFudHMvbWVudS5jb25zdCc7XHJcbmltcG9ydCB7IE1lbnVUYWIsIEV4dGVuZGVkTWFpbk1lbnVHcm91cCwgTWVudUl0ZW0gfSBmcm9tICcuLi9tb2RlbHMvYmFzZS5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgTWVudVNlcnZpY2Uge1xyXG4gICAgcHVibGljIHRhYnM6IHsgbmFtZTogc3RyaW5nLCBtZW51OiBzdHJpbmcsIHN1Yk5hbWU6IHN0cmluZywgaXRlbXM6IEV4dGVuZGVkTWFpbk1lbnVHcm91cFtdIH1bXSA9IFtdO1xyXG4gICAgcHVibGljIGN1cnJlbnRTdXBwb3J0ZXJJZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGN1cnJlbnRTZWxlY3RlZFN1cHBsaWVyTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGN1cnJlbnRTZWxlY3RlZFN1cHBsaWVySWQ6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgaW5pdChtZW51VGFiczogTWVudVRhYltdLCBjYWxsYmFjazogKCkgPT4gYW55LCBzZXQ6IChyb2xlOiBzdHJpbmcpID0+IE1lbnVJdGVtKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1lbnVUYWJiZWRJdGVtcyA9IG1lbnVUYWJzO1xyXG4gICAgICAgIHRoaXMudGFicyA9IG1lbnVUYWJiZWRJdGVtcy5yZWR1Y2UoKHJlc3VsdCwgY3VycmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHNldFxyXG4gICAgICAgICAgICAgICAgPyBzZXQoY3VycmVudC5yb2xlKVxyXG4gICAgICAgICAgICAgICAgOiBuZXcgTWVudUl0ZW0oe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbnU6IGN1cnJlbnQucm9sZSxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczogY3VycmVudC5pdGVtcyxcclxuICAgICAgICAgICAgICAgICAgICBzdWJOYW1lOiBjdXJyZW50LnJvbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogY3VycmVudC5yb2xlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9LCBbXSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRhYnMgfHwgIXRoaXMudGFic1swXSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYnMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkTWVudUl0ZW1zKG1lbnU/OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIW1lbnUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFicy5yZWR1Y2UoKHJlc3VsdCwgY3VycmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goLi4uY3VycmVudC5pdGVtcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9LCBbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRhYiA9IHRoaXMudGFicy5maW5kKHggPT4geC5tZW51ID09PSBtZW51KTtcclxuICAgICAgICBpZiAoIXRhYikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YWIuaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRGaXJzdFRhYkl0ZW1zKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRNZW51ID0gdGhpcy50YWJzLmZpbmQocyA9PiBzLm1lbnUudG9Mb3dlckNhc2UoKSA9PSBrZXkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50TWVudSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjdXJyZW50TWVudS5pdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZEZpcnN0VGFiKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhYnNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRhYnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFicztcclxuICAgIH1cclxufSJdfQ==