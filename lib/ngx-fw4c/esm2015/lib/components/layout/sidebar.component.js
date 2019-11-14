/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { DefaultLayoutService } from './layout.service';
import { MenuService } from '../shared/services/menu.service';
import { ActionService } from '../shared/services/action.service';
export class DefaultSidebarComponent {
    /**
     * @param {?} workspaceLayoutService
     * @param {?} route
     * @param {?} router
     * @param {?} menuService
     * @param {?} actionService
     */
    constructor(workspaceLayoutService, route, router, menuService, actionService) {
        this.workspaceLayoutService = workspaceLayoutService;
        this.route = route;
        this.router = router;
        this.menuService = menuService;
        this.actionService = actionService;
        this.menuTabs = [];
        this.change = new EventEmitter();
        this.menuItems = [];
        this.collapsedItems = [];
        this.isSupplier = false;
        this.tabs = [];
        this.isPageLoad = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.actionService.executeAsync((/**
         * @return {?}
         */
        () => {
            this.menuService.init(this.menuTabs, (/**
             * @return {?}
             */
            () => {
                this.tabs = this.menuService.getTabs();
                this.currentUrl = this.tabs[0].menu;
                this.menuItems = this.menuService.loadFirstTabItems(this.currentUrl);
                this.actionService.executeAsync((/**
                 * @return {?}
                 */
                () => {
                    this.isCollapsedSideBar = 'no-block';
                }));
            }), this.set);
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.navigateTo) {
            this.navigateTo = (/**
             * @param {?} menu
             * @param {?} router
             * @return {?}
             */
            (menu, router) => {
                router.navigate(['/', menu, 'dashboard']);
            });
        }
        this.isMobile = this.actionService.isMobile();
        if (this.isMobile) {
            if (this.workspaceLayoutService.verticalEffect == 'overlay') {
                this.workspaceLayoutService.verticalEffect = 'shrink';
            }
            else {
                this.workspaceLayoutService.verticalEffect = 'overlay';
            }
        }
    }
    /**
     * @return {?}
     */
    toggleMenu() {
        if (this.isMobile) {
            if (this.workspaceLayoutService.verticalEffect == 'overlay') {
                this.workspaceLayoutService.verticalEffect = 'shrink';
            }
            else {
                this.workspaceLayoutService.verticalEffect = 'overlay';
            }
        }
    }
    /**
     * @return {?}
     */
    removeActiveStateNavigationMenu() {
        /** @type {?} */
        let navigationLevelArr = document.querySelectorAll(".pcoded-left-item--wrapper .pcoded-navigatio-lavel");
        for (let i = 0; i < navigationLevelArr.length; i++) {
            navigationLevelArr[i].classList.remove("active");
        }
        /** @type {?} */
        let subMenuLevelArr = document.querySelectorAll(".pcoded-left-item--wrapper .pcoded-left-item");
        for (let i = 0; i < subMenuLevelArr.length; i++) {
            subMenuLevelArr[i].classList.remove("active");
        }
        /** @type {?} */
        let mainContentWrapper = document.querySelector(".pcoded-main-container .pcoded-content");
        mainContentWrapper.classList.remove("active");
    }
    /**
     * @param {?} group
     * @param {?} $event
     * @return {?}
     */
    toggleGroup(group, $event) {
        if (event != null || event != undefined) {
            /** @type {?} */
            let target = $event.target || $event.srcElement || $event.currentTarget;
            /** @type {?} */
            let curNavigationLevel = target.closest(".pcoded-navigatio-lavel");
            if (curNavigationLevel.classList.contains("active")) {
                this.removeActiveStateNavigationMenu();
            }
            else {
                this.removeActiveStateNavigationMenu();
                /** @type {?} */
                let listChildrenItemInTarget = target.closest(".pcoded-left-item--wrapper").children;
                for (let i = 0; i < listChildrenItemInTarget.length; i++) {
                    if (listChildrenItemInTarget[i].classList.contains("pcoded-left-item")) {
                        listChildrenItemInTarget[i].classList.add("active");
                    }
                }
                target.closest(".pcoded-navigatio-lavel").classList.toggle("active");
                /** @type {?} */
                let mainContentWrapper = document.querySelector(".pcoded-main-container .pcoded-content");
                mainContentWrapper.classList.add("active");
            }
        }
        /** @type {?} */
        const index = this.collapsedItems.indexOf(group);
        if (index >= 0) {
            this.collapsedItems.splice(index, 1);
        }
        else {
            this.collapsedItems.push(group);
        }
    }
    /**
     * @param {?} group
     * @return {?}
     */
    isGroupCollapsed(group) {
        return this.collapsedItems.indexOf(group) >= 0;
    }
    /**
     * @return {?}
     */
    toggleOpenedSidebar() {
        this.isCollapsedSideBar = this.isCollapsedSideBar === 'yes-block' ? 'no-block' : 'yes-block';
    }
    /**
     * @param {?} menu
     * @return {?}
     */
    loadMenu(menu) {
        this.menuItems = this.menuService.loadMenuItems(menu);
        this.currentUrl = menu.toLocaleLowerCase();
        this.navigateTo(this.currentUrl, this.router);
    }
    /**
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    selectItem($event, item) {
        /** @type {?} */
        let naviLevelAll = document.querySelectorAll(".pcoded-navigatio-lavel");
        for (let i = 0; i < naviLevelAll.length; i++) {
            naviLevelAll[i].classList.remove("active");
        }
        /** @type {?} */
        let target = $event.target || $event.srcElement || $event.currentTarget;
        target.closest(".pcoded-left-item--wrapper").classList.add("active");
        /** @type {?} */
        let listChildrenItemInTarget = target.closest(".pcoded-left-item--wrapper").children;
        for (let i = 0; i < listChildrenItemInTarget.length; i++) {
            if (listChildrenItemInTarget[i].classList.contains("pcoded-navigatio-lavel")) {
                listChildrenItemInTarget[i].classList.add("active");
            }
        }
        this.changeItem(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    changeItem(item) {
        this.actionService.changeItem(item, this.menuTabs, (/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            this.change.emit(items);
        }));
    }
}
DefaultSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'default-sidebar',
                template: "<nav id=\"main_navbar\" class=\"pcoded-navbar workspace-side-bar\"\r\n    (clickOutside)=\"workspaceLayoutService.onClickedOutside($event)\" [exclude]=\"'#mobile-collapse'\"\r\n    [attr.pcoded-header-position]=\"workspaceLayoutService.pcodedHeaderPosition\"\r\n    [attr.navbar-theme]=\"workspaceLayoutService.navBarTheme\"\r\n    [attr.active-item-theme]=\"workspaceLayoutService.activeItemTheme\" sub-item-theme=\"theme2\" active-item-style=\"style0\"\r\n    [attr.pcoded-navbar-position]=\"workspaceLayoutService.pcodedSidebarPosition\">\r\n    <div class=\"pcoded-inner-navbar main-menu o-hidden pcoded-inner-navbar-workspace\" cAccordion>\r\n        <div width=\"100%\" height=\"calc(100% - 40px)\" size=\"4px\" color=\"#fff\" opacity=\"0.3\" allowPageScroll=\"false\">\r\n            <ul class=\"nav\">\r\n                <li class=\"nav-item\" *ngFor=\"let item of tabs; index as i\"\r\n                    [ngClass]=\"this.currentUrl.toLowerCase() === item.menu.toLowerCase() ? 'active-menu':''\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0);\" (click)=\"loadMenu(item.menu)\">\r\n                        <span>{{item.subName}}</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <div (mouseover)=\"clicked = false\" *ngFor=\"let asideItems of menuItems ; index as i\"\r\n                [ngStyle]=\"{'margin-top': i == 0 ? '1rem': '0'}\" class=\"d-color pcoded-left-item--wrapper\">\r\n                <a class=\"pcoded-navigatio-lavel d-flex align-items-center\" menu-title-theme=\"theme5\"\r\n                    href=\"javascript:void(0)\"\r\n                    routerLink=\"/{{asideItems?.children[0]?.mainState}}/{{asideItems?.children[0]?.state}}\"\r\n                    (click)=\"selectItem($event, asideItems?.children[0])\"\r\n                    *ngIf=\"asideItems.label || menuItems.length > 0\">\r\n                    <span class=\"pcoded-micon\" title=\"{{asideItems.label}}\">\r\n                        <i class=\"{{ asideItems.icon }}\"></i>\r\n                    </span>\r\n                    <span>{{asideItems.label}}</span>\r\n                    <i [hidden]=\"asideItems.children.length == 1\" class=\"show-sub icofont-thin-right icofont\"></i>\r\n                </a>\r\n                <ul *ngIf=\"asideItems.children.length > 1\" (mouseup)=\"clicked = true\" [hidden]=\"clicked\"\r\n                    class=\"pcoded-item pcoded-left-item\" item-border=\"true\" item-border-style=\"none\"\r\n                    subitem-border=\"true\" katanaAccordionLink>\r\n                    <ng-template ngFor let-asideItem [ngForOf]=\"asideItems.children\">\r\n                        <li [routerLinkActive]=\"['active']\" *ngIf=\"asideItem.type === 'link'\" katanaAccordionLink\r\n                            group=\"{{asideItem.state}}\" class=\"pcoded-left-item-child\" (click)=\"toggleMenu()\">\r\n                            <a routerLink=\"/{{asideItem.mainState}}/{{asideItem.state}}\"\r\n                                target=\"{{asideItem.target ? '_blank' : '_self'}}\" katanaAccordionToggle\r\n                                *ngIf=\"asideItem.mainState; else mainContent\"\r\n                                (click)=\"selectItem($event, asideItem)\">\r\n                                <span class=\"pcoded-micon\">\r\n                                    <i class=\"{{ asideItem.icon }}\"></i>\r\n                                    <b>{{ asideItem.shortLabel }}</b>\r\n                                </span>\r\n                                <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\r\n                            </a>\r\n                            <ng-template #mainContent>\r\n                                <a [routerLink]=\"[asideItem.state]\" target=\"{{asideItem.target ? '_blank' : '_self'}}\"\r\n                                    cAccordionToggle>\r\n                                    <span class=\"pcoded-micon\">\r\n                                        <i class=\"{{ asideItem.icon }}\"></i>\r\n                                        <b>{{ asideItem.shortLabel }}</b>\r\n                                    </span>\r\n                                    <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\r\n                                    <span *ngFor=\"let asideBadge of asideItem.badge\"\r\n                                        class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\r\n                                    <span class=\"pcoded-mcaret\"></span>\r\n                                </a>\r\n                            </ng-template>\r\n                        </li>\r\n                    </ng-template>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<div class=\"back-drop\" (click)=\"toggleMenu()\"></div>",
                styles: [".back-drop{display:none}@media (max-width:1024px){.back-drop{background:#000;opacity:.2;position:fixed;width:100%;height:100%;z-index:9}}"]
            }] }
];
/** @nocollapse */
DefaultSidebarComponent.ctorParameters = () => [
    { type: DefaultLayoutService },
    { type: ActivatedRoute },
    { type: Router },
    { type: MenuService },
    { type: ActionService }
];
DefaultSidebarComponent.propDecorators = {
    menuTabs: [{ type: Input }],
    navigateTo: [{ type: Input }],
    set: [{ type: Input }],
    change: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DefaultSidebarComponent.prototype.menuTabs;
    /** @type {?} */
    DefaultSidebarComponent.prototype.navigateTo;
    /** @type {?} */
    DefaultSidebarComponent.prototype.set;
    /** @type {?} */
    DefaultSidebarComponent.prototype.change;
    /** @type {?} */
    DefaultSidebarComponent.prototype.menuItems;
    /** @type {?} */
    DefaultSidebarComponent.prototype.isCollapsedSideBar;
    /** @type {?} */
    DefaultSidebarComponent.prototype.currentUrl;
    /** @type {?} */
    DefaultSidebarComponent.prototype.collapsedItems;
    /** @type {?} */
    DefaultSidebarComponent.prototype.isSupplier;
    /** @type {?} */
    DefaultSidebarComponent.prototype.tabs;
    /** @type {?} */
    DefaultSidebarComponent.prototype.carouselTile;
    /** @type {?} */
    DefaultSidebarComponent.prototype.isPageLoad;
    /** @type {?} */
    DefaultSidebarComponent.prototype.isMobile;
    /** @type {?} */
    DefaultSidebarComponent.prototype.clicked;
    /** @type {?} */
    DefaultSidebarComponent.prototype.workspaceLayoutService;
    /**
     * @type {?}
     * @protected
     */
    DefaultSidebarComponent.prototype.route;
    /**
     * @type {?}
     * @protected
     */
    DefaultSidebarComponent.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    DefaultSidebarComponent.prototype.menuService;
    /**
     * @type {?}
     * @protected
     */
    DefaultSidebarComponent.prototype.actionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xheW91dC9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXlCLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBUWxFLE1BQU0sT0FBTyx1QkFBdUI7Ozs7Ozs7O0lBZ0JsQyxZQUNTLHNCQUE0QyxFQUN6QyxLQUFxQixFQUNyQixNQUFjLEVBQ2QsV0FBd0IsRUFDeEIsYUFBNEI7UUFKL0IsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFzQjtRQUN6QyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFwQnhCLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFHeEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO1FBQ3BELGNBQVMsR0FBNEIsRUFBRSxDQUFDO1FBR3hDLG1CQUFjLEdBQTRCLEVBQUUsQ0FBQztRQUM3QyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFNBQUksR0FBc0QsRUFBRSxDQUFDO1FBRTdELGVBQVUsR0FBWSxLQUFLLENBQUM7SUFVL0IsQ0FBQzs7OztJQUVMLGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVk7OztR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b0U7O0lBQ3BFLCtDQUF5Qjs7SUFDekIsNkNBQW1DOztJQUNuQywyQ0FBeUI7O0lBQ3pCLDBDQUF3Qjs7SUFHdEIseURBQW1EOzs7OztJQUNuRCx3Q0FBK0I7Ozs7O0lBQy9CLHlDQUF3Qjs7Ozs7SUFDeEIsOENBQWtDOzs7OztJQUNsQyxnREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdJbml0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IERlZmF1bHRMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9sYXlvdXQuc2VydmljZSc7XHJcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL21lbnUuc2VydmljZSc7XHJcbmltcG9ydCB7IEV4dGVuZGVkTWFpbk1lbnVHcm91cCwgTWVudVRhYiwgTWVudUl0ZW0sIEJyZWFkY3J1bWIgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzL2Jhc2UubW9kZWwnO1xyXG5pbXBvcnQgeyBBY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2FjdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZGVmYXVsdC1zaWRlYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZWJhci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtZW51VGFiczogTWVudVRhYltdID0gW107XHJcbiAgQElucHV0KCkgcHVibGljIG5hdmlnYXRlVG86IChtZW51OiBzdHJpbmcsIHJvdXRlcjogUm91dGVyKSA9PiB2b2lkO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQ6IChyb2xlOiBzdHJpbmcpID0+IE1lbnVJdGVtO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxCcmVhZGNydW1iW10+KCk7XHJcbiAgcHVibGljIG1lbnVJdGVtczogRXh0ZW5kZWRNYWluTWVudUdyb3VwW10gPSBbXTtcclxuICBwdWJsaWMgaXNDb2xsYXBzZWRTaWRlQmFyOiBzdHJpbmc7XHJcbiAgcHVibGljIGN1cnJlbnRVcmw6IHN0cmluZztcclxuICBwdWJsaWMgY29sbGFwc2VkSXRlbXM6IEV4dGVuZGVkTWFpbk1lbnVHcm91cFtdID0gW107XHJcbiAgcHVibGljIGlzU3VwcGxpZXIgPSBmYWxzZTtcclxuICBwdWJsaWMgdGFiczogeyBuYW1lOiBzdHJpbmcsIG1lbnU6IHN0cmluZywgc3ViTmFtZTogc3RyaW5nIH1bXSA9IFtdO1xyXG4gIHB1YmxpYyBjYXJvdXNlbFRpbGU6IGFueTtcclxuICBwdWJsaWMgaXNQYWdlTG9hZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpc01vYmlsZTogYm9vbGVhbjtcclxuICBwdWJsaWMgY2xpY2tlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgd29ya3NwYWNlTGF5b3V0U2VydmljZTogRGVmYXVsdExheW91dFNlcnZpY2UsXHJcbiAgICBwcm90ZWN0ZWQgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJvdGVjdGVkIG1lbnVTZXJ2aWNlOiBNZW51U2VydmljZSxcclxuICAgIHByb3RlY3RlZCBhY3Rpb25TZXJ2aWNlOiBBY3Rpb25TZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3Rpb25TZXJ2aWNlLmV4ZWN1dGVBc3luYygoKSA9PiB7XHJcbiAgICAgIHRoaXMubWVudVNlcnZpY2UuaW5pdCh0aGlzLm1lbnVUYWJzLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50YWJzID0gdGhpcy5tZW51U2VydmljZS5nZXRUYWJzKCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXJsID0gdGhpcy50YWJzWzBdLm1lbnU7XHJcbiAgICAgICAgdGhpcy5tZW51SXRlbXMgPSB0aGlzLm1lbnVTZXJ2aWNlLmxvYWRGaXJzdFRhYkl0ZW1zKHRoaXMuY3VycmVudFVybCk7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25TZXJ2aWNlLmV4ZWN1dGVBc3luYygoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlzQ29sbGFwc2VkU2lkZUJhciA9ICduby1ibG9jayc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIHRoaXMuc2V0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubmF2aWdhdGVUbykge1xyXG4gICAgICB0aGlzLm5hdmlnYXRlVG8gPSAobWVudTogc3RyaW5nLCByb3V0ZXI6IFJvdXRlcikgPT4ge1xyXG4gICAgICAgIHJvdXRlci5uYXZpZ2F0ZShbJy8nLCBtZW51LCAnZGFzaGJvYXJkJ10pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzTW9iaWxlID0gdGhpcy5hY3Rpb25TZXJ2aWNlLmlzTW9iaWxlKCk7XHJcbiAgICBpZiAodGhpcy5pc01vYmlsZSkge1xyXG4gICAgICBpZiAodGhpcy53b3Jrc3BhY2VMYXlvdXRTZXJ2aWNlLnZlcnRpY2FsRWZmZWN0ID09ICdvdmVybGF5Jykge1xyXG4gICAgICAgIHRoaXMud29ya3NwYWNlTGF5b3V0U2VydmljZS52ZXJ0aWNhbEVmZmVjdCA9ICdzaHJpbmsnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMud29ya3NwYWNlTGF5b3V0U2VydmljZS52ZXJ0aWNhbEVmZmVjdCA9ICdvdmVybGF5JztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZU1lbnUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc01vYmlsZSkge1xyXG4gICAgICBpZiAodGhpcy53b3Jrc3BhY2VMYXlvdXRTZXJ2aWNlLnZlcnRpY2FsRWZmZWN0ID09ICdvdmVybGF5Jykge1xyXG4gICAgICAgIHRoaXMud29ya3NwYWNlTGF5b3V0U2VydmljZS52ZXJ0aWNhbEVmZmVjdCA9ICdzaHJpbmsnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMud29ya3NwYWNlTGF5b3V0U2VydmljZS52ZXJ0aWNhbEVmZmVjdCA9ICdvdmVybGF5JztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUFjdGl2ZVN0YXRlTmF2aWdhdGlvbk1lbnUoKTogdm9pZCB7XHJcbiAgICBsZXQgbmF2aWdhdGlvbkxldmVsQXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wY29kZWQtbGVmdC1pdGVtLS13cmFwcGVyIC5wY29kZWQtbmF2aWdhdGlvLWxhdmVsXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZpZ2F0aW9uTGV2ZWxBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbmF2aWdhdGlvbkxldmVsQXJyW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgICBsZXQgc3ViTWVudUxldmVsQXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wY29kZWQtbGVmdC1pdGVtLS13cmFwcGVyIC5wY29kZWQtbGVmdC1pdGVtXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJNZW51TGV2ZWxBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgc3ViTWVudUxldmVsQXJyW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgICBsZXQgbWFpbkNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wY29kZWQtbWFpbi1jb250YWluZXIgLnBjb2RlZC1jb250ZW50XCIpO1xyXG4gICAgbWFpbkNvbnRlbnRXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlR3JvdXAoZ3JvdXA6IEV4dGVuZGVkTWFpbk1lbnVHcm91cCwgJGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChldmVudCAhPSBudWxsIHx8IGV2ZW50ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gJGV2ZW50LnRhcmdldCB8fCAkZXZlbnQuc3JjRWxlbWVudCB8fCAkZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgbGV0IGN1ck5hdmlnYXRpb25MZXZlbCA9IHRhcmdldC5jbG9zZXN0KFwiLnBjb2RlZC1uYXZpZ2F0aW8tbGF2ZWxcIik7XHJcbiAgICAgIGlmIChjdXJOYXZpZ2F0aW9uTGV2ZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBY3RpdmVTdGF0ZU5hdmlnYXRpb25NZW51KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBY3RpdmVTdGF0ZU5hdmlnYXRpb25NZW51KCk7XHJcbiAgICAgICAgbGV0IGxpc3RDaGlsZHJlbkl0ZW1JblRhcmdldCA9IHRhcmdldC5jbG9zZXN0KFwiLnBjb2RlZC1sZWZ0LWl0ZW0tLXdyYXBwZXJcIikuY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Q2hpbGRyZW5JdGVtSW5UYXJnZXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChsaXN0Q2hpbGRyZW5JdGVtSW5UYXJnZXRbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwicGNvZGVkLWxlZnQtaXRlbVwiKSkge1xyXG4gICAgICAgICAgICBsaXN0Q2hpbGRyZW5JdGVtSW5UYXJnZXRbaV0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGFyZ2V0LmNsb3Nlc3QoXCIucGNvZGVkLW5hdmlnYXRpby1sYXZlbFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGxldCBtYWluQ29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBjb2RlZC1tYWluLWNvbnRhaW5lciAucGNvZGVkLWNvbnRlbnRcIik7XHJcbiAgICAgICAgbWFpbkNvbnRlbnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jb2xsYXBzZWRJdGVtcy5pbmRleE9mKGdyb3VwKTtcclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgIHRoaXMuY29sbGFwc2VkSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY29sbGFwc2VkSXRlbXMucHVzaChncm91cCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNHcm91cENvbGxhcHNlZChncm91cDogRXh0ZW5kZWRNYWluTWVudUdyb3VwKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2xsYXBzZWRJdGVtcy5pbmRleE9mKGdyb3VwKSA+PSAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZU9wZW5lZFNpZGViYXIoKSB7XHJcbiAgICB0aGlzLmlzQ29sbGFwc2VkU2lkZUJhciA9IHRoaXMuaXNDb2xsYXBzZWRTaWRlQmFyID09PSAneWVzLWJsb2NrJyA/ICduby1ibG9jaycgOiAneWVzLWJsb2NrJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkTWVudShtZW51OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubWVudUl0ZW1zID0gdGhpcy5tZW51U2VydmljZS5sb2FkTWVudUl0ZW1zKG1lbnUpO1xyXG4gICAgdGhpcy5jdXJyZW50VXJsID0gbWVudS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy5uYXZpZ2F0ZVRvKHRoaXMuY3VycmVudFVybCwgdGhpcy5yb3V0ZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlbGVjdEl0ZW0oJGV2ZW50OiBhbnksIGl0ZW06IGFueSk6IHZvaWQge1xyXG4gICAgbGV0IG5hdmlMZXZlbEFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGNvZGVkLW5hdmlnYXRpby1sYXZlbFwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2aUxldmVsQWxsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG5hdmlMZXZlbEFsbFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0YXJnZXQgPSAkZXZlbnQudGFyZ2V0IHx8ICRldmVudC5zcmNFbGVtZW50IHx8ICRldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgdGFyZ2V0LmNsb3Nlc3QoXCIucGNvZGVkLWxlZnQtaXRlbS0td3JhcHBlclwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgbGV0IGxpc3RDaGlsZHJlbkl0ZW1JblRhcmdldCA9IHRhcmdldC5jbG9zZXN0KFwiLnBjb2RlZC1sZWZ0LWl0ZW0tLXdyYXBwZXJcIikuY2hpbGRyZW47XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Q2hpbGRyZW5JdGVtSW5UYXJnZXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGxpc3RDaGlsZHJlbkl0ZW1JblRhcmdldFtpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJwY29kZWQtbmF2aWdhdGlvLWxhdmVsXCIpKSB7XHJcbiAgICAgICAgbGlzdENoaWxkcmVuSXRlbUluVGFyZ2V0W2ldLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoYW5nZUl0ZW0oaXRlbSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlSXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aW9uU2VydmljZS5jaGFuZ2VJdGVtKGl0ZW0sIHRoaXMubWVudVRhYnMsIChpdGVtczogQnJlYWRjcnVtYltdKSA9PiB7XHJcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoaXRlbXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==