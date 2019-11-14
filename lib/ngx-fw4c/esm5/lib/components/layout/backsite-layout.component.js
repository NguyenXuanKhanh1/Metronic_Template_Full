/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { DefaultLayoutService } from './layout.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { AggregatorService } from '../shared/services/aggregator.service';
import { KeyConst } from '../shared/constants/key.const';
import { Breadcrumb } from '../shared/models/base.model';
import { ActionService } from '../shared/services/action.service';
var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(workspaceLayoutService, route, router, actionService, aggregatorService) {
        this.workspaceLayoutService = workspaceLayoutService;
        this.route = route;
        this.router = router;
        this.actionService = actionService;
        this.aggregatorService = aggregatorService;
        this.notifications = [];
        this.logo = 'https://cmcglobal.com.vn/css/image-common/Combined%20Shape.svg';
        this.title = 'CMC Global - Aspire to inspire the Digital World';
        this.isModalShow = false;
        this.modalImageSrc = '';
        this.imageAltText = '';
        this.breadcrumbs = [];
        this.url = '/dashboard';
        this.breadcrumb = new Breadcrumb({
            label: 'Home',
            url: this.url
        });
    }
    ;
    /**
     * @return {?}
     */
    AdminLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.aggregatorService.subscribe(KeyConst.ViewImage, (/**
         * @param {?} image
         * @return {?}
         */
        function (image) {
            _this.isModalShow = true;
            _this.modalImageSrc = image.src;
            _this.imageAltText = image.altText;
        }));
        this.route.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data) {
                _this.menuTabs = (/** @type {?} */ (data.menuTabs));
                if (data.logo)
                    _this.logo = (/** @type {?} */ (data.logo));
                if (data.title)
                    (/** @type {?} */ (data.title));
                if (data.url)
                    _this.url = (/** @type {?} */ (data.url));
                if (data.breadcrumb) {
                    _this.breadcrumb = (/** @type {?} */ (data.breadcrumb));
                }
                if (_this.router.url == '/') {
                    _this.router.navigate([_this.url]);
                }
            }
        }));
    };
    /**
     * @return {?}
     */
    AdminLayoutComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof NavigationStart) {
                if (_this.router.url == '/') {
                    _this.router.navigate([_this.url]);
                }
            }
        }));
    };
    /**
     * @return {?}
     */
    AdminLayoutComponent.prototype.closeImage = /**
     * @return {?}
     */
    function () {
        this.isModalShow = false;
    };
    /**
     * @param {?} items
     * @return {?}
     */
    AdminLayoutComponent.prototype.changeMenu = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this.breadcrumbs = items;
        this.breadcrumbs.splice(0, 0, this.breadcrumb);
        this.aggregatorService.publish(KeyConst.MenuChanged, this.breadcrumbs);
    };
    AdminLayoutComponent.decorators = [
        { type: Component, args: [{
                    template: "<div class=\"pcoded\" [attr.nav-type]=\"workspaceLayoutService.navType\"\r\n  [attr.theme-layout]=\"workspaceLayoutService.themeLayout\" [attr.layout-type]=\"workspaceLayoutService.layoutType\"\r\n  [attr.vertical-placement]=\"workspaceLayoutService.verticalPlacement\"\r\n  [attr.vertical-layout]=\"workspaceLayoutService.verticalLayout\"\r\n  [attr.pcoded-device-type]=\"workspaceLayoutService.deviceType\"\r\n  [attr.vertical-nav-type]=\"workspaceLayoutService.verticalNavType\"\r\n  [attr.vertical-effect]=\"workspaceLayoutService.verticalEffect\"\r\n  [attr.vnavigation-view]=\"workspaceLayoutService.vNavigationView\"\r\n  (window:resize)=\"workspaceLayoutService.onResize($event)\">\r\n  <div class=\"pcoded-overlay-box\"></div>\r\n  <div class=\"img-viewer-container\">\r\n    <div (click)=\"closeImage()\" [class.show-now]=\"isModalShow\" class=\"modal\">\r\n      <div class=\"view-wrapper modal-content\">\r\n        <div class=\"adv-popup\">\r\n          <img *ngIf=\"modalImageSrc\" [src]=\"modalImageSrc\">\r\n          <button class=\"btn-close-image\"><i class=\"fa fa-close-line\"></i></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"pcoded-container navbar-wrapper\">\r\n    <default-header [notifications]=\"notifications\" [logo]=\"logo\" [title]=\"title\"></default-header>\r\n    <div class=\"pcoded-main-container\" [style.margin-top]=\"workspaceLayoutService.headerFixedMargin\">\r\n      <div class=\"pcoded-wrapper\">\r\n        <default-sidebar *ngIf=\"menuTabs\" (change)=\"changeMenu($event)\" [menuTabs]=\"menuTabs\"></default-sidebar>\r\n        <div class=\"pcoded-content\">\r\n          <div class=\"pcoded-inner-content\">\r\n            <default-navbar [url]=\"url\" [breadcrumb]=\"breadcrumb\" [menuTabs]=\"menuTabs\" [items]=\"breadcrumbs\"></default-navbar>\r\n            <div class=\"main-body\">\r\n              <div class=\"page-wrapper\">\r\n                <div class=\"page-body\">\r\n                  <katana-card>\r\n                    <router-outlet>\r\n                      <katana-spinner></katana-spinner>\r\n                    </router-outlet>\r\n                  </katana-card>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <default-toolbar></default-toolbar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: DefaultLayoutService },
        { type: ActivatedRoute },
        { type: Router },
        { type: ActionService },
        { type: AggregatorService }
    ]; };
    return AdminLayoutComponent;
}());
export { AdminLayoutComponent };
if (false) {
    /** @type {?} */
    AdminLayoutComponent.prototype.notifications;
    /** @type {?} */
    AdminLayoutComponent.prototype.logo;
    /** @type {?} */
    AdminLayoutComponent.prototype.title;
    /** @type {?} */
    AdminLayoutComponent.prototype.menuTabs;
    /** @type {?} */
    AdminLayoutComponent.prototype.isModalShow;
    /** @type {?} */
    AdminLayoutComponent.prototype.modalImageSrc;
    /** @type {?} */
    AdminLayoutComponent.prototype.imageAltText;
    /** @type {?} */
    AdminLayoutComponent.prototype.breadcrumbs;
    /** @type {?} */
    AdminLayoutComponent.prototype.breadcrumb;
    /** @type {?} */
    AdminLayoutComponent.prototype.url;
    /** @type {?} */
    AdminLayoutComponent.prototype.workspaceLayoutService;
    /** @type {?} */
    AdminLayoutComponent.prototype.route;
    /**
     * @type {?}
     * @protected
     */
    AdminLayoutComponent.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    AdminLayoutComponent.prototype.actionService;
    /**
     * @type {?}
     * @protected
     */
    AdminLayoutComponent.prototype.aggregatorService;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja3NpdGUtbGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbGF5b3V0L2JhY2tzaXRlLWxheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV6RCxPQUFPLEVBQVcsVUFBVSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWxFO0lBZ0JJLDhCQUNXLHNCQUE0QyxFQUM1QyxLQUFxQixFQUNsQixNQUFjLEVBQ2QsYUFBNEIsRUFDNUIsaUJBQW9DO1FBSnZDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBc0I7UUFDNUMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFoQjNDLGtCQUFhLEdBQXlCLEVBQUUsQ0FBQztRQUN6QyxTQUFJLEdBQVcsZ0VBQWdFLENBQUM7UUFDaEYsVUFBSyxHQUFXLGtEQUFrRCxDQUFDO1FBRW5FLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGdCQUFXLEdBQWlCLEVBQUUs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N0IsNkNBQWdEOztJQUNoRCxvQ0FBdUY7O0lBQ3ZGLHFDQUEwRTs7SUFDMUUsd0NBQTJCOztJQUMzQiwyQ0FBb0M7O0lBQ3BDLDZDQUFrQzs7SUFDbEMsNENBQWlDOztJQUNqQywyQ0FBc0M7O0lBQ3RDLDBDQUE4Qjs7SUFDOUIsbUNBQWtDOztJQUc5QixzREFBbUQ7O0lBQ25ELHFDQUE0Qjs7Ozs7SUFDNUIsc0NBQXdCOzs7OztJQUN4Qiw2Q0FBc0M7Ozs7O0lBQ3RDLGlEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEZWZhdWx0TGF5b3V0U2VydmljZSB9IGZyb20gJy4vbGF5b3V0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBZ2dyZWdhdG9yU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hZ2dyZWdhdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBLZXlDb25zdCB9IGZyb20gJy4uL3NoYXJlZC9jb25zdGFudHMva2V5LmNvbnN0JztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uRGV0YWlsIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy9ub3RpZmljYXRpb24ubW9kZWwnO1xyXG5pbXBvcnQgeyBNZW51VGFiLCBCcmVhZGNydW1iIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy9iYXNlLm1vZGVsJztcclxuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hY3Rpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9iYWNrc2l0ZS1sYXlvdXQuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkbWluTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICAgIHB1YmxpYyBub3RpZmljYXRpb25zOiBOb3RpZmljYXRpb25EZXRhaWxbXSA9IFtdO1xyXG4gICAgcHVibGljIGxvZ286IHN0cmluZyA9ICdodHRwczovL2NtY2dsb2JhbC5jb20udm4vY3NzL2ltYWdlLWNvbW1vbi9Db21iaW5lZCUyMFNoYXBlLnN2Zyc7XHJcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyA9ICdDTUMgR2xvYmFsIC0gQXNwaXJlIHRvIGluc3BpcmUgdGhlIERpZ2l0YWwgV29ybGQnOztcclxuICAgIHB1YmxpYyBtZW51VGFiczogTWVudVRhYltdO1xyXG4gICAgcHVibGljIGlzTW9kYWxTaG93OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgbW9kYWxJbWFnZVNyYzogc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgaW1hZ2VBbHRUZXh0OiBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBicmVhZGNydW1iczogQnJlYWRjcnVtYltdID0gW107XHJcbiAgICBwdWJsaWMgYnJlYWRjcnVtYjogQnJlYWRjcnVtYjtcclxuICAgIHB1YmxpYyB1cmw6IHN0cmluZyA9ICcvZGFzaGJvYXJkJztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgd29ya3NwYWNlTGF5b3V0U2VydmljZTogRGVmYXVsdExheW91dFNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvblNlcnZpY2U6IEFjdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJvdGVjdGVkIGFnZ3JlZ2F0b3JTZXJ2aWNlOiBBZ2dyZWdhdG9yU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5icmVhZGNydW1iID0gbmV3IEJyZWFkY3J1bWIoe1xyXG4gICAgICAgICAgICBsYWJlbDogJ0hvbWUnLFxyXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hZ2dyZWdhdG9yU2VydmljZS5zdWJzY3JpYmUoS2V5Q29uc3QuVmlld0ltYWdlLCAoaW1hZ2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzTW9kYWxTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbEltYWdlU3JjID0gaW1hZ2Uuc3JjO1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlQWx0VGV4dCA9IGltYWdlLmFsdFRleHQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGUuZGF0YS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnVUYWJzID0gPE1lbnVUYWJbXT5kYXRhLm1lbnVUYWJzO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubG9nbykgdGhpcy5sb2dvID0gPHN0cmluZz5kYXRhLmxvZ287XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50aXRsZSk8c3RyaW5nPmRhdGEudGl0bGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS51cmwpIHRoaXMudXJsID0gPHN0cmluZz5kYXRhLnVybDtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmJyZWFkY3J1bWIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyZWFkY3J1bWIgPSA8QnJlYWRjcnVtYj5kYXRhLmJyZWFkY3J1bWI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yb3V0ZXIudXJsID09ICcvJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnVybF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm91dGVyLnVybCA9PSAnLycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy51cmxdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZUltYWdlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNNb2RhbFNob3cgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlTWVudShpdGVtczogQnJlYWRjcnVtYltdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5icmVhZGNydW1icyA9IGl0ZW1zO1xyXG4gICAgICAgIHRoaXMuYnJlYWRjcnVtYnMuc3BsaWNlKDAsIDAsIHRoaXMuYnJlYWRjcnVtYik7XHJcbiAgICAgICAgdGhpcy5hZ2dyZWdhdG9yU2VydmljZS5wdWJsaXNoKEtleUNvbnN0Lk1lbnVDaGFuZ2VkLCB0aGlzLmJyZWFkY3J1bWJzKTtcclxuICAgIH1cclxufVxyXG4iXX0=