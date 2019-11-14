/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ButtonDefinition } from '../shared/models/base.model';
import { ToolbarAction } from '../shared/enums/base.enum';
import { AggregatorService } from '../shared/services/aggregator.service';
import { KeyConst } from '../shared/constants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../shared/services/aggregator.service";
export class DefaultLayoutService {
    /**
     * @param {?} router
     * @param {?} _aggregatorService
     */
    constructor(router, _aggregatorService) {
        this.router = router;
        this._aggregatorService = _aggregatorService;
        this.subscriptions = new Subscription();
        this.toolbarItems = [];
        this.navType = 'st5';
        this.themeLayout = 'vertical';
        this.vNavigationView = 'view1';
        this.verticalPlacement = 'left';
        this.verticalLayout = 'wide';
        this.deviceType = 'desktop';
        this.verticalNavType = 'offcanvas';
        this.verticalEffect = 'shrink';
        this.pcodedHeaderPosition = 'fixed';
        this.pcodedSidebarPosition = 'fixed';
        this.headerTheme = 'theme1';
        this.logoTheme = 'theme1';
        this.toggleOn = true;
        this.headerFixedMargin = '57px';
        this.navBarTheme = 'themelight1';
        this.activeItemTheme = 'theme4';
        this.isCollapsedMobile = 'no-block';
        this.chatToggle = 'out';
        this.chatToggleInverse = 'in';
        this.chatInnerToggle = 'off';
        this.chatInnerToggleInverse = 'on';
        this.menuTitleTheme = 'theme5';
        this.itemBorder = true;
        this.itemBorderStyle = 'none';
        this.subItemBorder = true;
        this.subItemIcon = 'style6';
        this.dropDownIcon = 'style1';
        this.isSidebarChecked = true;
        this.isHeaderChecked = true;
        /** @type {?} */
        const scrollHeight = window.screen.height - 150;
        this.innerHeight = scrollHeight + 'px';
        this.windowWidth = window.innerWidth;
        this.setMenuAttributes(this.windowWidth);
        /** @type {?} */
        const navigationSubscription = this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event instanceof NavigationEnd))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.toolbarItems = [];
        }));
        this.subscriptions.add(navigationSubscription);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.innerHeight = event.target.innerHeight + 'px';
        this.windowWidth = event.target.innerWidth;
        /** @type {?} */
        let reSizeFlag = true;
        if (this.deviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
            reSizeFlag = false;
        }
        else if (this.deviceType === 'mobile' && this.windowWidth < 768) {
            reSizeFlag = false;
        }
        if (reSizeFlag) {
            this.setMenuAttributes(this.windowWidth);
        }
    }
    /**
     * @param {?} windowWidth
     * @return {?}
     */
    setMenuAttributes(windowWidth) {
        if (windowWidth >= 768 && windowWidth <= 1024) {
            this.deviceType = 'tablet';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'push';
        }
        else if (windowWidth < 768) {
            this.deviceType = 'mobile';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
        }
        else {
            this.deviceType = 'desktop';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'shrink';
        }
    }
    /**
     * @return {?}
     */
    toggleOpened() {
        if (this.windowWidth < 768) {
            this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
        }
        this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClickedOutside(e) {
        if (this.windowWidth < 768 && this.toggleOn && this.verticalNavType !== 'offcanvas') {
            this.toggleOn = true;
            this.verticalNavType = 'offcanvas';
        }
    }
    /**
     * @return {?}
     */
    onMobileMenu() {
        this.isCollapsedMobile = this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
    }
    /**
     * @return {?}
     */
    toggleChat() {
        this.chatToggle = this.chatToggle === 'out' ? 'in' : 'out';
        this.chatToggleInverse = this.chatToggleInverse === 'out' ? 'in' : 'out';
        this.chatInnerToggle = 'off';
        this.chatInnerToggleInverse = 'off';
    }
    /**
     * @return {?}
     */
    toggleChatInner() {
        this.chatInnerToggle = this.chatInnerToggle === 'off' ? 'on' : 'off';
        this.chatInnerToggleInverse = this.chatInnerToggleInverse === 'off' ? 'on' : 'off';
    }
    /**
     * @return {?}
     */
    setSidebarPosition() {
        this.isSidebarChecked = !this.isSidebarChecked;
        this.pcodedSidebarPosition = this.isSidebarChecked === true ? 'fixed' : 'absolute';
    }
    /**
     * @return {?}
     */
    setHeaderPosition() {
        this.isHeaderChecked = !this.isHeaderChecked;
        this.pcodedHeaderPosition = this.isHeaderChecked === true ? 'fixed' : 'relative';
        this.headerFixedMargin = this.isHeaderChecked === true ? '50px' : '';
    }
    /**
     * @param {?} pattern
     * @return {?}
     */
    setBackgroundPattern(pattern) {
        document.querySelector('body').setAttribute('themebg-pattern', pattern);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    setLayoutType(type) {
        this.layoutType = type;
        if (type === 'dark') {
            this.headerTheme = 'theme6';
            this.navBarTheme = 'theme1';
            this.logoTheme = 'theme6';
            document.querySelector('body').classList.add('dark');
        }
        else {
            this.headerTheme = 'theme1';
            this.navBarTheme = 'themelight1';
            this.logoTheme = 'theme1';
            document.querySelector('body').classList.remove('dark');
        }
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    setNavBarTheme(theme) {
        if (theme === 'themelight1') {
            this.navBarTheme = 'themelight1';
        }
        else {
            this.navBarTheme = 'theme1';
        }
    }
    /**
     * @param {?} actions
     * @return {?}
     */
    initToolbarItems(actions) {
        this.toolbarItems = actions.map((/**
         * @param {?} action
         * @return {?}
         */
        action => {
            switch (action) {
                case ToolbarAction.Save:
                    return new ButtonDefinition({ action: action, title: 'Lưu', style: 'primary', lazyload: true });
                case ToolbarAction.SaveAll:
                    return new ButtonDefinition({ action: action, title: 'Lưu tất cả', lazyload: true });
                case ToolbarAction.Cancel:
                    return new ButtonDefinition({ action: action, title: 'Hủy lưu' });
                case ToolbarAction.Back:
                    return new ButtonDefinition({ action: action, title: 'Quay lại' });
                case ToolbarAction.EditColumnOptions:
                    return new ButtonDefinition({ action: action, title: 'Quản lý cột' });
                case ToolbarAction.SaveAndNew:
                    return new ButtonDefinition({ action: action, title: 'Lưu và tạo mới', lazyload: true });
                case ToolbarAction.Reset:
                    return new ButtonDefinition({ action: action, title: 'Làm mới' });
            }
        }));
    }
    /**
     * @return {?}
     */
    getToolbarItems() {
        return this.toolbarItems;
    }
    /**
     * @return {?}
     */
    hasToolbarItems() {
        if (!this.toolbarItems)
            return false;
        return this.toolbarItems.length > 0;
    }
    /**
     * @param {?} image
     * @return {?}
     */
    showImage(image) {
        this._aggregatorService.publish(KeyConst.ViewImage, image);
    }
}
DefaultLayoutService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
DefaultLayoutService.ctorParameters = () => [
    { type: Router },
    { type: AggregatorService }
];
/** @nocollapse */ DefaultLayoutService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DefaultLayoutService_Factory() { return new DefaultLayoutService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.AggregatorService)); }, token: DefaultLayoutService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DefaultLayoutService.prototype.navType;
    /** @type {?} */
    DefaultLayoutService.prototype.themeLayout;
    /** @type {?} */
    DefaultLayoutService.prototype.layoutType;
    /** @type {?} */
    DefaultLayoutService.prototype.verticalPlacement;
    /** @type {?} */
    DefaultLayoutService.prototype.verticalLayout;
    /** @type {?} */
    DefaultLayoutService.prototype.deviceType;
    /** @type {?} */
    DefaultLayoutService.prototype.imgSrc;
    /** @type {?} */
    DefaultLayoutService.prototype.imgTitle;
    /** @type {?} */
    DefaultLayoutService.prototype.verticalNavType;
    /** @type {?} */
    DefaultLayoutService.prototype.verticalEffect;
    /** @type {?} */
    DefaultLayoutService.prototype.vNavigationView;
    /** @type {?} */
    DefaultLayoutService.prototype.pcodedHeaderPosition;
    /** @type {?} */
    DefaultLayoutService.prototype.pcodedSidebarPosition;
    /** @type {?} */
    DefaultLayoutService.prototype.headerTheme;
    /** @type {?} */
    DefaultLayoutService.prototype.logoTheme;
    /** @type {?} */
    DefaultLayoutService.prototype.innerHeight;
    /** @type {?} */
    DefaultLayoutService.prototype.windowWidth;
    /** @type {?} */
    DefaultLayoutService.prototype.toggleOn;
    /** @type {?} */
    DefaultLayoutService.prototype.headerFixedMargin;
    /** @type {?} */
    DefaultLayoutService.prototype.navBarTheme;
    /** @type {?} */
    DefaultLayoutService.prototype.activeItemTheme;
    /** @type {?} */
    DefaultLayoutService.prototype.isCollapsedMobile;
    /** @type {?} */
    DefaultLayoutService.prototype.chatToggle;
    /** @type {?} */
    DefaultLayoutService.prototype.chatToggleInverse;
    /** @type {?} */
    DefaultLayoutService.prototype.chatInnerToggle;
    /** @type {?} */
    DefaultLayoutService.prototype.chatInnerToggleInverse;
    /** @type {?} */
    DefaultLayoutService.prototype.menuTitleTheme;
    /** @type {?} */
    DefaultLayoutService.prototype.itemBorder;
    /** @type {?} */
    DefaultLayoutService.prototype.itemBorderStyle;
    /** @type {?} */
    DefaultLayoutService.prototype.subItemBorder;
    /** @type {?} */
    DefaultLayoutService.prototype.subItemIcon;
    /** @type {?} */
    DefaultLayoutService.prototype.dropDownIcon;
    /** @type {?} */
    DefaultLayoutService.prototype.isSidebarChecked;
    /** @type {?} */
    DefaultLayoutService.prototype.isHeaderChecked;
    /**
     * @type {?}
     * @private
     */
    DefaultLayoutService.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    DefaultLayoutService.prototype.toolbarItems;
    /**
     * @type {?}
     * @private
     */
    DefaultLayoutService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DefaultLayoutService.prototype._aggregatorService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFHL0MsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFzQzdCLFlBQ1ksTUFBYyxFQUNkLGtCQUFxQztRQURyQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUx6QyxrQkFBYSxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pELGlCQUFZLEdBQXVCLEVBQUUsQ0FBQztRQU0xQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxD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LCtDQUErQjs7SUFDL0IsaURBQWlDOztJQUNqQywwQ0FBMEI7O0lBQzFCLGlEQUFpQzs7SUFDakMsK0NBQStCOztJQUMvQixzREFBc0M7O0lBQ3RDLDhDQUE4Qjs7SUFDOUIsMENBQTJCOztJQUMzQiwrQ0FBK0I7O0lBQy9CLDZDQUE4Qjs7SUFDOUIsMkNBQTJCOztJQUMzQiw0Q0FBNEI7O0lBQzVCLGdEQUFpQzs7SUFDakMsK0NBQWdDOzs7OztJQUNoQyw2Q0FBeUQ7Ozs7O0lBQ3pELDRDQUE4Qzs7Ozs7SUFHMUMsc0NBQXNCOzs7OztJQUN0QixrREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEJ1dHRvbkRlZmluaXRpb24gfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzL2Jhc2UubW9kZWwnO1xyXG5pbXBvcnQgeyBUb29sYmFyQWN0aW9uIH0gZnJvbSAnLi4vc2hhcmVkL2VudW1zL2Jhc2UuZW51bSc7XHJcbmltcG9ydCB7IEFnZ3JlZ2F0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2FnZ3JlZ2F0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEtleUNvbnN0IH0gZnJvbSAnLi4vc2hhcmVkL2NvbnN0YW50cyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdExheW91dFNlcnZpY2Uge1xyXG4gICAgcHVibGljIG5hdlR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyB0aGVtZUxheW91dDogc3RyaW5nO1xyXG4gICAgcHVibGljIGxheW91dFR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyB2ZXJ0aWNhbFBsYWNlbWVudDogc3RyaW5nO1xyXG4gICAgcHVibGljIHZlcnRpY2FsTGF5b3V0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGV2aWNlVHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGltZ1NyYzogc3RyaW5nO1xyXG4gICAgcHVibGljIGltZ1RpdGxlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdmVydGljYWxOYXZUeXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdmVydGljYWxFZmZlY3Q6IHN0cmluZztcclxuICAgIHB1YmxpYyB2TmF2aWdhdGlvblZpZXc6IHN0cmluZztcclxuICAgIHB1YmxpYyBwY29kZWRIZWFkZXJQb3NpdGlvbjogc3RyaW5nO1xyXG4gICAgcHVibGljIHBjb2RlZFNpZGViYXJQb3NpdGlvbjogc3RyaW5nO1xyXG4gICAgcHVibGljIGhlYWRlclRoZW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbG9nb1RoZW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaW5uZXJIZWlnaHQ6IHN0cmluZztcclxuICAgIHB1YmxpYyB3aW5kb3dXaWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIHRvZ2dsZU9uOiBib29sZWFuO1xyXG4gICAgcHVibGljIGhlYWRlckZpeGVkTWFyZ2luOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbmF2QmFyVGhlbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBhY3RpdmVJdGVtVGhlbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBpc0NvbGxhcHNlZE1vYmlsZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGNoYXRUb2dnbGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBjaGF0VG9nZ2xlSW52ZXJzZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGNoYXRJbm5lclRvZ2dsZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGNoYXRJbm5lclRvZ2dsZUludmVyc2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBtZW51VGl0bGVUaGVtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGl0ZW1Cb3JkZXI6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXRlbUJvcmRlclN0eWxlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3ViSXRlbUJvcmRlcjogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBzdWJJdGVtSWNvbjogc3RyaW5nO1xyXG4gICAgcHVibGljIGRyb3BEb3duSWNvbjogc3RyaW5nO1xyXG4gICAgcHVibGljIGlzU2lkZWJhckNoZWNrZWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNIZWFkZXJDaGVja2VkOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcbiAgICBwcml2YXRlIHRvb2xiYXJJdGVtczogQnV0dG9uRGVmaW5pdGlvbltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIF9hZ2dyZWdhdG9yU2VydmljZTogQWdncmVnYXRvclNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMubmF2VHlwZSA9ICdzdDUnO1xyXG4gICAgICAgIHRoaXMudGhlbWVMYXlvdXQgPSAndmVydGljYWwnO1xyXG4gICAgICAgIHRoaXMudk5hdmlnYXRpb25WaWV3ID0gJ3ZpZXcxJztcclxuICAgICAgICB0aGlzLnZlcnRpY2FsUGxhY2VtZW50ID0gJ2xlZnQnO1xyXG4gICAgICAgIHRoaXMudmVydGljYWxMYXlvdXQgPSAnd2lkZSc7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VUeXBlID0gJ2Rlc2t0b3AnO1xyXG4gICAgICAgIHRoaXMudmVydGljYWxOYXZUeXBlID0gJ29mZmNhbnZhcyc7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEVmZmVjdCA9ICdzaHJpbmsnO1xyXG4gICAgICAgIHRoaXMucGNvZGVkSGVhZGVyUG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgIHRoaXMucGNvZGVkU2lkZWJhclBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICB0aGlzLmhlYWRlclRoZW1lID0gJ3RoZW1lMSc7XHJcbiAgICAgICAgdGhpcy5sb2dvVGhlbWUgPSAndGhlbWUxJztcclxuICAgICAgICB0aGlzLnRvZ2dsZU9uID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmhlYWRlckZpeGVkTWFyZ2luID0gJzU3cHgnO1xyXG4gICAgICAgIHRoaXMubmF2QmFyVGhlbWUgPSAndGhlbWVsaWdodDEnO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbVRoZW1lID0gJ3RoZW1lNCc7XHJcbiAgICAgICAgdGhpcy5pc0NvbGxhcHNlZE1vYmlsZSA9ICduby1ibG9jayc7XHJcbiAgICAgICAgdGhpcy5jaGF0VG9nZ2xlID0gJ291dCc7XHJcbiAgICAgICAgdGhpcy5jaGF0VG9nZ2xlSW52ZXJzZSA9ICdpbic7XHJcbiAgICAgICAgdGhpcy5jaGF0SW5uZXJUb2dnbGUgPSAnb2ZmJztcclxuICAgICAgICB0aGlzLmNoYXRJbm5lclRvZ2dsZUludmVyc2UgPSAnb24nO1xyXG4gICAgICAgIHRoaXMubWVudVRpdGxlVGhlbWUgPSAndGhlbWU1JztcclxuICAgICAgICB0aGlzLml0ZW1Cb3JkZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXRlbUJvcmRlclN0eWxlID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMuc3ViSXRlbUJvcmRlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdWJJdGVtSWNvbiA9ICdzdHlsZTYnO1xyXG4gICAgICAgIHRoaXMuZHJvcERvd25JY29uID0gJ3N0eWxlMSc7XHJcbiAgICAgICAgdGhpcy5pc1NpZGViYXJDaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzSGVhZGVyQ2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gd2luZG93LnNjcmVlbi5oZWlnaHQgLSAxNTA7XHJcbiAgICAgICAgdGhpcy5pbm5lckhlaWdodCA9IHNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgICAgICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuc2V0TWVudUF0dHJpYnV0ZXModGhpcy53aW5kb3dXaWR0aCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25TdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlci5ldmVudHMucGlwZShmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy50b29sYmFySXRlbXMgPSBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKG5hdmlnYXRpb25TdWJzY3JpcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblJlc2l6ZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuaW5uZXJIZWlnaHQgPSBldmVudC50YXJnZXQuaW5uZXJIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIHRoaXMud2luZG93V2lkdGggPSBldmVudC50YXJnZXQuaW5uZXJXaWR0aDtcclxuICAgICAgICBsZXQgcmVTaXplRmxhZyA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZGV2aWNlVHlwZSA9PT0gJ3RhYmxldCcgJiYgdGhpcy53aW5kb3dXaWR0aCA+PSA3NjggJiYgdGhpcy53aW5kb3dXaWR0aCA8PSAxMDI0KSB7XHJcbiAgICAgICAgICAgIHJlU2l6ZUZsYWcgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGV2aWNlVHlwZSA9PT0gJ21vYmlsZScgJiYgdGhpcy53aW5kb3dXaWR0aCA8IDc2OCkge1xyXG4gICAgICAgICAgICByZVNpemVGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZVNpemVGbGFnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TWVudUF0dHJpYnV0ZXModGhpcy53aW5kb3dXaWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRNZW51QXR0cmlidXRlcyh3aW5kb3dXaWR0aCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dXaWR0aCA+PSA3NjggJiYgd2luZG93V2lkdGggPD0gMTAyNCkge1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZVR5cGUgPSAndGFibGV0JztcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbE5hdlR5cGUgPSAnb2ZmY2FudmFzJztcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbEVmZmVjdCA9ICdwdXNoJztcclxuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvd1dpZHRoIDwgNzY4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlVHlwZSA9ICdtb2JpbGUnO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsTmF2VHlwZSA9ICdvZmZjYW52YXMnO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsRWZmZWN0ID0gJ292ZXJsYXknO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlVHlwZSA9ICdkZXNrdG9wJztcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbE5hdlR5cGUgPSAnb2ZmY2FudmFzJztcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbEVmZmVjdCA9ICdzaHJpbmsnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlT3BlbmVkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLndpbmRvd1dpZHRoIDwgNzY4KSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlT24gPSB0aGlzLnZlcnRpY2FsTmF2VHlwZSA9PT0gJ29mZmNhbnZhcycgPyB0cnVlIDogdGhpcy50b2dnbGVPbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbE5hdlR5cGUgPSB0aGlzLnZlcnRpY2FsTmF2VHlwZSA9PT0gJ2V4cGFuZGVkJyA/ICdvZmZjYW52YXMnIDogJ2V4cGFuZGVkJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DbGlja2VkT3V0c2lkZShlOiBFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLndpbmRvd1dpZHRoIDwgNzY4ICYmIHRoaXMudG9nZ2xlT24gJiYgdGhpcy52ZXJ0aWNhbE5hdlR5cGUgIT09ICdvZmZjYW52YXMnKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlT24gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsTmF2VHlwZSA9ICdvZmZjYW52YXMnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Nb2JpbGVNZW51KCkge1xyXG4gICAgICAgIHRoaXMuaXNDb2xsYXBzZWRNb2JpbGUgPSB0aGlzLmlzQ29sbGFwc2VkTW9iaWxlID09PSAneWVzLWJsb2NrJyA/ICduby1ibG9jaycgOiAneWVzLWJsb2NrJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlQ2hhdCgpIHtcclxuICAgICAgICB0aGlzLmNoYXRUb2dnbGUgPSB0aGlzLmNoYXRUb2dnbGUgPT09ICdvdXQnID8gJ2luJyA6ICdvdXQnO1xyXG4gICAgICAgIHRoaXMuY2hhdFRvZ2dsZUludmVyc2UgPSB0aGlzLmNoYXRUb2dnbGVJbnZlcnNlID09PSAnb3V0JyA/ICdpbicgOiAnb3V0JztcclxuICAgICAgICB0aGlzLmNoYXRJbm5lclRvZ2dsZSA9ICdvZmYnO1xyXG4gICAgICAgIHRoaXMuY2hhdElubmVyVG9nZ2xlSW52ZXJzZSA9ICdvZmYnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVDaGF0SW5uZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jaGF0SW5uZXJUb2dnbGUgPSB0aGlzLmNoYXRJbm5lclRvZ2dsZSA9PT0gJ29mZicgPyAnb24nIDogJ29mZic7XHJcbiAgICAgICAgdGhpcy5jaGF0SW5uZXJUb2dnbGVJbnZlcnNlID0gdGhpcy5jaGF0SW5uZXJUb2dnbGVJbnZlcnNlID09PSAnb2ZmJyA/ICdvbicgOiAnb2ZmJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U2lkZWJhclBvc2l0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuaXNTaWRlYmFyQ2hlY2tlZCA9ICF0aGlzLmlzU2lkZWJhckNoZWNrZWQ7XHJcbiAgICAgICAgdGhpcy5wY29kZWRTaWRlYmFyUG9zaXRpb24gPSB0aGlzLmlzU2lkZWJhckNoZWNrZWQgPT09IHRydWUgPyAnZml4ZWQnIDogJ2Fic29sdXRlJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SGVhZGVyUG9zaXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5pc0hlYWRlckNoZWNrZWQgPSAhdGhpcy5pc0hlYWRlckNoZWNrZWQ7XHJcbiAgICAgICAgdGhpcy5wY29kZWRIZWFkZXJQb3NpdGlvbiA9IHRoaXMuaXNIZWFkZXJDaGVja2VkID09PSB0cnVlID8gJ2ZpeGVkJyA6ICdyZWxhdGl2ZSc7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJGaXhlZE1hcmdpbiA9IHRoaXMuaXNIZWFkZXJDaGVja2VkID09PSB0cnVlID8gJzUwcHgnIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEJhY2tncm91bmRQYXR0ZXJuKHBhdHRlcm4pIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc2V0QXR0cmlidXRlKCd0aGVtZWJnLXBhdHRlcm4nLCBwYXR0ZXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TGF5b3V0VHlwZSh0eXBlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmxheW91dFR5cGUgPSB0eXBlO1xyXG4gICAgICAgIGlmICh0eXBlID09PSAnZGFyaycpIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXJUaGVtZSA9ICd0aGVtZTYnO1xyXG4gICAgICAgICAgICB0aGlzLm5hdkJhclRoZW1lID0gJ3RoZW1lMSc7XHJcbiAgICAgICAgICAgIHRoaXMubG9nb1RoZW1lID0gJ3RoZW1lNic7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXJUaGVtZSA9ICd0aGVtZTEnO1xyXG4gICAgICAgICAgICB0aGlzLm5hdkJhclRoZW1lID0gJ3RoZW1lbGlnaHQxJztcclxuICAgICAgICAgICAgdGhpcy5sb2dvVGhlbWUgPSAndGhlbWUxJztcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE5hdkJhclRoZW1lKHRoZW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhlbWUgPT09ICd0aGVtZWxpZ2h0MScpIHtcclxuICAgICAgICAgICAgdGhpcy5uYXZCYXJUaGVtZSA9ICd0aGVtZWxpZ2h0MSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5uYXZCYXJUaGVtZSA9ICd0aGVtZTEnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdFRvb2xiYXJJdGVtcyhhY3Rpb25zOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHRoaXMudG9vbGJhckl0ZW1zID0gYWN0aW9ucy5tYXAoYWN0aW9uID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9vbGJhckFjdGlvbi5TYXZlOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uRGVmaW5pdGlvbih7IGFjdGlvbjogYWN0aW9uLCB0aXRsZTogJ0zGsHUnLCBzdHlsZTogJ3ByaW1hcnknLCBsYXp5bG9hZDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9vbGJhckFjdGlvbi5TYXZlQWxsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uRGVmaW5pdGlvbih7IGFjdGlvbjogYWN0aW9uLCB0aXRsZTogJ0zGsHUgdOG6pXQgY+G6oycsIGxhenlsb2FkOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUb29sYmFyQWN0aW9uLkNhbmNlbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkRlZmluaXRpb24oeyBhY3Rpb246IGFjdGlvbiwgdGl0bGU6ICdI4buneSBsxrB1JyB9KTtcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9vbGJhckFjdGlvbi5CYWNrOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uRGVmaW5pdGlvbih7IGFjdGlvbjogYWN0aW9uLCB0aXRsZTogJ1F1YXkgbOG6oWknIH0pO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUb29sYmFyQWN0aW9uLkVkaXRDb2x1bW5PcHRpb25zOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uRGVmaW5pdGlvbih7IGFjdGlvbjogYWN0aW9uLCB0aXRsZTogJ1F14bqjbiBsw70gY+G7mXQnIH0pO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUb29sYmFyQWN0aW9uLlNhdmVBbmROZXc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25EZWZpbml0aW9uKHsgYWN0aW9uOiBhY3Rpb24sIHRpdGxlOiAnTMawdSB2w6AgdOG6oW8gbeG7m2knLCBsYXp5bG9hZDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9vbGJhckFjdGlvbi5SZXNldDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkRlZmluaXRpb24oeyBhY3Rpb246IGFjdGlvbiwgdGl0bGU6ICdMw6BtIG3hu5tpJyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUb29sYmFySXRlbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9vbGJhckl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXNUb29sYmFySXRlbXMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRvb2xiYXJJdGVtcykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvb2xiYXJJdGVtcy5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93SW1hZ2UoaW1hZ2U6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX2FnZ3JlZ2F0b3JTZXJ2aWNlLnB1Ymxpc2goS2V5Q29uc3QuVmlld0ltYWdlLCBpbWFnZSk7XHJcbiAgICB9XHJcbn1cclxuIl19