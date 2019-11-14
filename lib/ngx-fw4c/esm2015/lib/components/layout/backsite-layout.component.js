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
export class AdminLayoutComponent {
    /**
     * @param {?} workspaceLayoutService
     * @param {?} route
     * @param {?} router
     * @param {?} actionService
     * @param {?} aggregatorService
     */
    constructor(workspaceLayoutService, route, router, actionService, aggregatorService) {
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
    ngOnInit() {
        this.aggregatorService.subscribe(KeyConst.ViewImage, (/**
         * @param {?} image
         * @return {?}
         */
        (image) => {
            this.isModalShow = true;
            this.modalImageSrc = image.src;
            this.imageAltText = image.altText;
        }));
        this.route.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data) {
                this.menuTabs = (/** @type {?} */ (data.menuTabs));
                if (data.logo)
                    this.logo = (/** @type {?} */ (data.logo));
                if (data.title)
                    (/** @type {?} */ (data.title));
                if (data.url)
                    this.url = (/** @type {?} */ (data.url));
                if (data.breadcrumb) {
                    this.breadcrumb = (/** @type {?} */ (data.breadcrumb));
                }
                if (this.router.url == '/') {
                    this.router.navigate([this.url]);
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (event instanceof NavigationStart) {
                if (this.router.url == '/') {
                    this.router.navigate([this.url]);
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    closeImage() {
        this.isModalShow = false;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    changeMenu(items) {
        this.breadcrumbs = items;
        this.breadcrumbs.splice(0, 0, this.breadcrumb);
        this.aggregatorService.publish(KeyConst.MenuChanged, this.breadcrumbs);
    }
}
AdminLayoutComponent.decorators = [
    { type: Component, args: [{
                template: "<div class=\"pcoded\" [attr.nav-type]=\"workspaceLayoutService.navType\"\r\n  [attr.theme-layout]=\"workspaceLayoutService.themeLayout\" [attr.layout-type]=\"workspaceLayoutService.layoutType\"\r\n  [attr.vertical-placement]=\"workspaceLayoutService.verticalPlacement\"\r\n  [attr.vertical-layout]=\"workspaceLayoutService.verticalLayout\"\r\n  [attr.pcoded-device-type]=\"workspaceLayoutService.deviceType\"\r\n  [attr.vertical-nav-type]=\"workspaceLayoutService.verticalNavType\"\r\n  [attr.vertical-effect]=\"workspaceLayoutService.verticalEffect\"\r\n  [attr.vnavigation-view]=\"workspaceLayoutService.vNavigationView\"\r\n  (window:resize)=\"workspaceLayoutService.onResize($event)\">\r\n  <div class=\"pcoded-overlay-box\"></div>\r\n  <div class=\"img-viewer-container\">\r\n    <div (click)=\"closeImage()\" [class.show-now]=\"isModalShow\" class=\"modal\">\r\n      <div class=\"view-wrapper modal-content\">\r\n        <div class=\"adv-popup\">\r\n          <img *ngIf=\"modalImageSrc\" [src]=\"modalImageSrc\">\r\n          <button class=\"btn-close-image\"><i class=\"fa fa-close-line\"></i></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"pcoded-container navbar-wrapper\">\r\n    <default-header [notifications]=\"notifications\" [logo]=\"logo\" [title]=\"title\"></default-header>\r\n    <div class=\"pcoded-main-container\" [style.margin-top]=\"workspaceLayoutService.headerFixedMargin\">\r\n      <div class=\"pcoded-wrapper\">\r\n        <default-sidebar *ngIf=\"menuTabs\" (change)=\"changeMenu($event)\" [menuTabs]=\"menuTabs\"></default-sidebar>\r\n        <div class=\"pcoded-content\">\r\n          <div class=\"pcoded-inner-content\">\r\n            <default-navbar [url]=\"url\" [breadcrumb]=\"breadcrumb\" [menuTabs]=\"menuTabs\" [items]=\"breadcrumbs\"></default-navbar>\r\n            <div class=\"main-body\">\r\n              <div class=\"page-wrapper\">\r\n                <div class=\"page-body\">\r\n                  <katana-card>\r\n                    <router-outlet>\r\n                      <katana-spinner></katana-spinner>\r\n                    </router-outlet>\r\n                  </katana-card>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <default-toolbar></default-toolbar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"
            }] }
];
/** @nocollapse */
AdminLayoutComponent.ctorParameters = () => [
    { type: DefaultLayoutService },
    { type: ActivatedRoute },
    { type: Router },
    { type: ActionService },
    { type: AggregatorService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja3NpdGUtbGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbGF5b3V0L2JhY2tzaXRlLWxheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV6RCxPQUFPLEVBQVcsVUFBVSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBTWxFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7O0lBWTdCLFlBQ1csc0JBQTRDLEVBQzVDLEtBQXFCLEVBQ2xCLE1BQWMsRUFDZCxhQUE0QixFQUM1QixpQkFBb0M7UUFKdkMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFzQjtRQUM1QyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQWhCM0Msa0JBQWEsR0FBeUIsRUFBRSxDQUFDO1FBQ3pDLFNBQUksR0FBVyxnRUFBZ0UsQ0FBQztRQUNoRixVQUFLLEdBQVcsa0RBQWtELENBQUM7UUFFbkUsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0Isa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsaUJBQVksR0FBVyxFQUFFLENBQUM7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QUFvQzs7SUFDcEMsNkNBQWtDOztJQUNsQyw0Q0FBaUM7O0lBQ2pDLDJDQUFzQzs7SUFDdEMsMENBQThCOztJQUM5QixtQ0FBa0M7O0lBRzlCLHNEQUFtRDs7SUFDbkQscUNBQTRCOzs7OztJQUM1QixzQ0FBd0I7Ozs7O0lBQ3hCLDZDQUFzQzs7Ozs7SUFDdEMsaURBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERlZmF1bHRMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9sYXlvdXQuc2VydmljZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIE5hdmlnYXRpb25TdGFydCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFnZ3JlZ2F0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2FnZ3JlZ2F0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEtleUNvbnN0IH0gZnJvbSAnLi4vc2hhcmVkL2NvbnN0YW50cy9rZXkuY29uc3QnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25EZXRhaWwgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzL25vdGlmaWNhdGlvbi5tb2RlbCc7XHJcbmltcG9ydCB7IE1lbnVUYWIsIEJyZWFkY3J1bWIgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzL2Jhc2UubW9kZWwnO1xyXG5pbXBvcnQgeyBBY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2FjdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2JhY2tzaXRlLWxheW91dC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWRtaW5MYXlvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gICAgcHVibGljIG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbkRldGFpbFtdID0gW107XHJcbiAgICBwdWJsaWMgbG9nbzogc3RyaW5nID0gJ2h0dHBzOi8vY21jZ2xvYmFsLmNvbS52bi9jc3MvaW1hZ2UtY29tbW9uL0NvbWJpbmVkJTIwU2hhcGUuc3ZnJztcclxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gJ0NNQyBHbG9iYWwgLSBBc3BpcmUgdG8gaW5zcGlyZSB0aGUgRGlnaXRhbCBXb3JsZCc7O1xyXG4gICAgcHVibGljIG1lbnVUYWJzOiBNZW51VGFiW107XHJcbiAgICBwdWJsaWMgaXNNb2RhbFNob3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBtb2RhbEltYWdlU3JjOiBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBpbWFnZUFsdFRleHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIGJyZWFkY3J1bWJzOiBCcmVhZGNydW1iW10gPSBbXTtcclxuICAgIHB1YmxpYyBicmVhZGNydW1iOiBCcmVhZGNydW1iO1xyXG4gICAgcHVibGljIHVybDogc3RyaW5nID0gJy9kYXNoYm9hcmQnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB3b3Jrc3BhY2VMYXlvdXRTZXJ2aWNlOiBEZWZhdWx0TGF5b3V0U2VydmljZSxcclxuICAgICAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcm90ZWN0ZWQgYWN0aW9uU2VydmljZTogQWN0aW9uU2VydmljZSxcclxuICAgICAgICBwcm90ZWN0ZWQgYWdncmVnYXRvclNlcnZpY2U6IEFnZ3JlZ2F0b3JTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmJyZWFkY3J1bWIgPSBuZXcgQnJlYWRjcnVtYih7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnSG9tZScsXHJcbiAgICAgICAgICAgIHVybDogdGhpcy51cmxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFnZ3JlZ2F0b3JTZXJ2aWNlLnN1YnNjcmliZShLZXlDb25zdC5WaWV3SW1hZ2UsIChpbWFnZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNb2RhbFNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsSW1hZ2VTcmMgPSBpbWFnZS5zcmM7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VBbHRUZXh0ID0gaW1hZ2UuYWx0VGV4dDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZS5kYXRhLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudVRhYnMgPSA8TWVudVRhYltdPmRhdGEubWVudVRhYnM7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sb2dvKSB0aGlzLmxvZ28gPSA8c3RyaW5nPmRhdGEubG9nbztcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnRpdGxlKTxzdHJpbmc+ZGF0YS50aXRsZTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnVybCkgdGhpcy51cmwgPSA8c3RyaW5nPmRhdGEudXJsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYnJlYWRjcnVtYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnJlYWRjcnVtYiA9IDxCcmVhZGNydW1iPmRhdGEuYnJlYWRjcnVtYjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvdXRlci51cmwgPT0gJy8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMudXJsXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yb3V0ZXIudXJsID09ICcvJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnVybF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlSW1hZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc01vZGFsU2hvdyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VNZW51KGl0ZW1zOiBCcmVhZGNydW1iW10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJyZWFkY3J1bWJzID0gaXRlbXM7XHJcbiAgICAgICAgdGhpcy5icmVhZGNydW1icy5zcGxpY2UoMCwgMCwgdGhpcy5icmVhZGNydW1iKTtcclxuICAgICAgICB0aGlzLmFnZ3JlZ2F0b3JTZXJ2aWNlLnB1Ymxpc2goS2V5Q29uc3QuTWVudUNoYW5nZWQsIHRoaXMuYnJlYWRjcnVtYnMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==