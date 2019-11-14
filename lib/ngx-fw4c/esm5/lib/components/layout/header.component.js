/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { DefaultLayoutService } from './layout.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ActionService } from '../shared/services/action.service';
import { UserViewModel } from '../auth/auth.model';
import { AggregatorService } from '../shared/services/aggregator.service';
import { AuthenticationService } from '../auth/auth.service';
import { FileViewModel } from '../shared/file/file.model';
var DefaultHeaderComponent = /** @class */ (function () {
    function DefaultHeaderComponent(layoutService, router, route, actionService, aggregatorService, authenticationService) {
        this.layoutService = layoutService;
        this.router = router;
        this.route = route;
        this.actionService = actionService;
        this.aggregatorService = aggregatorService;
        this.authenticationService = authenticationService;
        this.notifications = [];
        this.loading = false;
    }
    /**
     * @return {?}
     */
    DefaultHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isMobile = this.actionService.isMobile();
        if (this.isMobile) {
            this.toggleMenu();
        }
        this.user = this.authenticationService.currentUser;
        this.user = new UserViewModel({
            fullName: 'Nguyễn Trung Hiếu - CMC Global SA',
            userName: 'nthieu4',
            image: new FileViewModel({
                src: 'https://img.icons8.com/cotton/64/000000/user-female--v3.png'
            })
        });
    };
    /**
     * @return {?}
     */
    DefaultHeaderComponent.prototype.toggleMenu = /**
     * @return {?}
     */
    function () {
        if (this.layoutService.verticalEffect == 'overlay') {
            this.layoutService.verticalEffect = 'shrink';
        }
        else {
            this.layoutService.verticalEffect = 'overlay';
        }
    };
    /**
     * @return {?}
     */
    DefaultHeaderComponent.prototype.logout = /**
     * @return {?}
     */
    function () {
        this.authenticationService.logout();
    };
    DefaultHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'default-header',
                    template: "<nav class=\"navbar header-navbar pcoded-header header-workspace\"\r\n  [attr.pcoded-header-position]=\"layoutService.pcodedHeaderPosition\" [attr.header-theme]=\"layoutService.headerTheme\">\r\n  <div class=\"navbar-wrapper\">\r\n    <div class=\"navbar-container-right\">\r\n      <a class=\"btn-show-hide-menu ml-1\" (click)=\"toggleMenu()\" href=\"javascript:;\"><i class=\"fa fa-bars\"\r\n          aria-hidden=\"true\"></i>\r\n      </a>\r\n    </div>\r\n    <div class=\"navbar-logo\" [attr.logo-theme]=\"layoutService.logoTheme\">\r\n      <a class=\"logo--wrapper\" [routerLink]=\"['/']\">\r\n        <ng-container *ngIf=\"logo\">\r\n          <img class=\"text-logo\" [src]=\"logo\" alt=\"\" [title]=\"title\">\r\n        </ng-container>\r\n      </a>\r\n    </div>\r\n    <ng-container *ngIf=\"!isMobile; else mobileActions\">\r\n      <div class=\"navbar-container ml-auto\">\r\n        <ul class=\"nav-left\">\r\n        </ul>\r\n        <ul class=\"nav-right\" [ngClass]=\"layoutService.isCollapsedMobile\">\r\n          <li>\r\n            <div class=\"row form search-bar form-inline\">\r\n              <div class=\"flex-custom\">\r\n                <div class=\"form-group search-input-wrapper\">\r\n                  <span class=\"search-icon\">\r\n                    <i class=\"fa fa-search\"></i>\r\n                  </span>\r\n                  <input spellcheck=\"false\" [(ngModel)]=\"filter\" type=\"text\" class=\"form-control search-input\"\r\n                    [placeholder]=\"'T\u00ECm ki\u1EBFm...'\">\r\n                  <span class=\"search-reset\" *ngIf=\"filter\">\r\n                    <i *ngIf=\"loading\" class=\"fa fa-spinner rotate-refresh\"></i>\r\n                    <i *ngIf=\"!loading\" class=\"fa fa-times-circle\" (click)=\"filter= ''\"></i>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"header-notification\">\r\n            <a href=\"javascript:;\">\r\n              <i class=\"fa fa-bell bell icon-noti\"></i>\r\n              <span class=\"badge\">1</span>\r\n            </a>\r\n            <div class=\"notify--wrapper\">\r\n              <h6 class=\"m-b-0 text-font-13\">\r\n                <a href=\"javascript:;\" class=\"text-primary text-font-13\">1 Th\u00F4ng\r\n                  b\u00E1o ch\u01B0a \u0111\u1ECDc</a>\r\n              </h6>\r\n              <ul class=\"list-unstyled\">\r\n                <li class=\"w-100\" *ngFor=\"let notification of notifications\">\r\n                  <a href=\"javascript:;\">\r\n                    <p class=\"text-bold mb-1\">FW4C \u0111\u00E3 \u0111\u01B0\u1EE3c kh\u1EDFi t\u1EA1o</p>\r\n                    <p class=\"time m-0\">\r\n                      <i class=\"icofont icofont-clock-time\"></i>25/10/2019\r\n                    </p>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n              <h6 class=\"text-center p-2 view-all-noti m-0\">\r\n                <a href=\"javascript:;\" class=\"text-primary text-font-13 link-view-more\">\r\n                  Xem t\u1EA5t c\u1EA3\r\n                </a>\r\n              </h6>\r\n            </div>\r\n          </li>\r\n          <li class=\"user-profile header-notification\" *ngIf=\"user\">\r\n            <a [routerLink]=\"['/']\">\r\n              <img [hidden]=\"!user?.image?.src\" [src]=\"user?.image?.src\" alt=\"\" srcset=\"\"\r\n                style=\"border: 2px solid #ffffff; background: #f8f8f8; width: auto; height: 25px; width: 25px; border-radius: 50%;\">\r\n              <span [hidden]=\"user?.image?.src\" class=\"ava\"\r\n                [attr.data-letters]=\"(user.lastName | slice:0:1) + (user.firstName | slice:0:1)\"></span>\r\n              <span style=\"font-weight: normal;\">{{user.fullName}}</span>\r\n              <i class=\"ti-angle-down\"></i>\r\n            </a>\r\n            <div style=\"margin-top: 2px;\" class=\"user-list-option--wrapper\">\r\n              <ul class=\"show-notification profile-notification\">\r\n                <li class=\"p-0\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"logout()\">\r\n                    <i></i>T\u00E0i kho\u1EA3n</a>\r\n                </li>\r\n                <li class=\"p-0\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"logout()\">\r\n                    <i></i>Tho\u00E1t</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</nav>\r\n<ng-template #mobileActions>\r\n  <div class=\"navbar-container-mobile ml-auto \">\r\n    <div class=\"header-notification d-flex align-items-center\">\r\n      <img [hidden]=\"!user?.image?.src \" [src]=\"user?.image?.src\" alt=\"\" srcset=\"\"\r\n        style=\" width:32px ;   border: 2px solid #ffffff;  border-radius: 50%; background: #f8f8f8;\">\r\n      <span [hidden]=\"user?.image?.src\" class=\"ava\"\r\n        [attr.data-letters]=\"(user.lastName | slice:0:1) + (user.firstName | slice:0:1)\"></span>\r\n      <i class=\"text-white ti-angle-down\"></i>\r\n      <div class=\"user-list-option--wrapper\">\r\n        <ul class=\"show-notification profile-notification m-0\">\r\n          <li><a class=\"p-0\" [routerLink]=\"['/user-profile']\">H\u1ED3 s\u01A1 c\u00E1 nh\u00E2n</a></li>\r\n          <li><a href=\"javascript:void(0)\" (click)=\"logout()\"><i class=\"ti-layout-sidebar-left\"></i>Tho\u00E1t</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                    styles: ["a{text-decoration:none}.header-notification .text-white{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;white-space:normal}.header-notification .text-white.ti-angle-down{padding:0 8px;line-height:40px}span.ava[data-letters]:before{content:attr(data-letters);display:inline-block;font-size:1em;width:35px;height:35px;line-height:35px;text-align:center;border-radius:50%;background:#f8f8f8;vertical-align:middle;margin-right:.3em;color:#a9a9a9}.navbar-wrapper{height:57px}"]
                }] }
    ];
    /** @nocollapse */
    DefaultHeaderComponent.ctorParameters = function () { return [
        { type: DefaultLayoutService },
        { type: Router },
        { type: ActivatedRoute },
        { type: ActionService },
        { type: AggregatorService },
        { type: AuthenticationService }
    ]; };
    DefaultHeaderComponent.propDecorators = {
        notifications: [{ type: Input }],
        logo: [{ type: Input }],
        title: [{ type: Input }]
    };
    return DefaultHeaderComponent;
}());
export { DefaultHeaderComponent };
if (false) {
    /** @type {?} */
    DefaultHeaderComponent.prototype.notifications;
    /** @type {?} */
    DefaultHeaderComponent.prototype.logo;
    /** @type {?} */
    DefaultHeaderComponent.prototype.title;
    /** @type {?} */
    DefaultHeaderComponent.prototype.loading;
    /** @type {?} */
    DefaultHeaderComponent.prototype.filter;
    /** @type {?} */
    DefaultHeaderComponent.prototype.user;
    /** @type {?} */
    DefaultHeaderComponent.prototype.isMobile;
    /** @type {?} */
    DefaultHeaderComponent.prototype.layoutService;
    /**
     * @type {?}
     * @protected
     */
    DefaultHeaderComponent.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    DefaultHeaderComponent.prototype.route;
    /**
     * @type {?}
     * @protected
     */
    DefaultHeaderComponent.prototype.actionService;
    /**
     * @type {?}
     * @protected
     */
    DefaultHeaderComponent.prototype.aggregatorService;
    /**
     * @type {?}
     * @protected
     */
    DefaultHeaderComponent.prototype.authenticationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWxFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQ7SUFlSSxnQ0FDVyxhQUFtQyxFQUNoQyxNQUFjLEVBQ2QsS0FBcUIsRUFDckIsYUFBNEIsRUFDNUIsaUJBQW9DLEVBQ3BDLHFCQUE0QztRQUwvQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQWQxQyxrQkFBYSxHQUF5QixFQUFFLENBQUM7UUFHbEQsWUFBTyxHQUFZLEtBQUssQ0FBQztJQVk1QixDQUFDOzs7O0lBRUwseUNBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQjtRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksYUFBYSxDQUFDO1lBQzFCLFFBQVEsRUFBRSxtQ0FBbUM7WUFDN0MsUUFBUSxFQUFFLFNBQVM7WUFDbkIsS0FBSyxFQUFFLElBQUksYUFBYSxDQUFDO2dCQUNyQixHQUFHLEVBQUUsNkRBQTZEO2FBQ3JFLENBQUM7U0FDTCxDQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRU0sMkNBQVU7OztJQUFqQjtRQUNJLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLElBQUksU0FBUyxFQUFFO1lBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztTQUNoRDthQUFNO1lBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1NBQ2pEO0lBQ0wsQ0FBQzs7OztJQUVNLHVDQUFNOzs7SUFBYjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN4QyxDQUFDOztnQkFsREosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLGc5S0FBc0M7O2lCQUV6Qzs7OztnQkFiUSxvQkFBb0I7Z0JBQ3BCLE1BQU07Z0JBQUUsY0FBYztnQkFDdEIsYUFBYTtnQkFHYixpQkFBaUI7Z0JBQ2pCLHFCQUFxQjs7O2dDQVV6QixLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzs7SUEwQ1YsNkJBQUM7Q0FBQSxBQW5ERCxJQW1EQztTQTdDWSxzQkFBc0I7OztJQUMvQiwrQ0FBeUQ7O0lBQ3pELHNDQUE2Qjs7SUFDN0IsdUNBQThCOztJQUM5Qix5Q0FBZ0M7O0lBQ2hDLHdDQUFzQjs7SUFDdEIsc0NBQTJCOztJQUMzQiwwQ0FBeUI7O0lBR3JCLCtDQUEwQzs7Ozs7SUFDMUMsd0NBQXdCOzs7OztJQUN4Qix1Q0FBK0I7Ozs7O0lBQy9CLCtDQUFzQzs7Ozs7SUFDdEMsbURBQThDOzs7OztJQUM5Qyx1REFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRGVmYXVsdExheW91dFNlcnZpY2UgfSBmcm9tICcuL2xheW91dC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYWN0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25EZXRhaWwgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzL25vdGlmaWNhdGlvbi5tb2RlbCc7XHJcbmltcG9ydCB7IFVzZXJWaWV3TW9kZWwgfSBmcm9tICcuLi9hdXRoL2F1dGgubW9kZWwnO1xyXG5pbXBvcnQgeyBBZ2dyZWdhdG9yU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hZ2dyZWdhdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEZpbGVWaWV3TW9kZWwgfSBmcm9tICcuLi9zaGFyZWQvZmlsZS9maWxlLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkZWZhdWx0LWhlYWRlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdEhlYWRlckNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbm90aWZpY2F0aW9uczogTm90aWZpY2F0aW9uRGV0YWlsW10gPSBbXTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBsb2dvOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZmlsdGVyOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdXNlcjogVXNlclZpZXdNb2RlbDtcclxuICAgIHB1YmxpYyBpc01vYmlsZTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgbGF5b3V0U2VydmljZTogRGVmYXVsdExheW91dFNlcnZpY2UsXHJcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByb3RlY3RlZCByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvblNlcnZpY2U6IEFjdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJvdGVjdGVkIGFnZ3JlZ2F0b3JTZXJ2aWNlOiBBZ2dyZWdhdG9yU2VydmljZSxcclxuICAgICAgICBwcm90ZWN0ZWQgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc01vYmlsZSA9IHRoaXMuYWN0aW9uU2VydmljZS5pc01vYmlsZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXI7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXJWaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICBmdWxsTmFtZTogJ05ndXnhu4VuIFRydW5nIEhp4bq/dSAtIENNQyBHbG9iYWwgU0EnLFxyXG4gICAgICAgICAgICB1c2VyTmFtZTogJ250aGlldTQnLFxyXG4gICAgICAgICAgICBpbWFnZTogbmV3IEZpbGVWaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb3R0b24vNjQvMDAwMDAwL3VzZXItZmVtYWxlLS12My5wbmcnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZU1lbnUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0U2VydmljZS52ZXJ0aWNhbEVmZmVjdCA9PSAnb3ZlcmxheScpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXlvdXRTZXJ2aWNlLnZlcnRpY2FsRWZmZWN0ID0gJ3Nocmluayc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXlvdXRTZXJ2aWNlLnZlcnRpY2FsRWZmZWN0ID0gJ292ZXJsYXknO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nb3V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==