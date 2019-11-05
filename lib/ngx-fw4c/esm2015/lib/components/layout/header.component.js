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
export class DefaultHeaderComponent {
    /**
     * @param {?} layoutService
     * @param {?} router
     * @param {?} route
     * @param {?} actionService
     * @param {?} aggregatorService
     * @param {?} authenticationService
     */
    constructor(layoutService, router, route, actionService, aggregatorService, authenticationService) {
        this.layoutService = layoutService;
        this.router = router;
        this.route = route;
        this.actionService = actionService;
        this.aggregatorService = aggregatorService;
        this.authenticationService = authenticationService;
        this.notifications = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isMobile = this.actionService.isMobile();
        if (this.isMobile) {
            this.toggleMenu();
        }
        this.user = this.authenticationService.currentUser;
        this.user = new UserViewModel({
            fullName: 'Hiếu Nguyễn',
            userName: 'nthieu4',
            image: new FileViewModel({
                src: 'https://cdn.dribbble.com/users/413617/screenshots/1581513/totoro-01.png'
            })
        });
    }
    /**
     * @return {?}
     */
    toggleMenu() {
        if (this.layoutService.verticalEffect == 'overlay') {
            this.layoutService.verticalEffect = 'shrink';
        }
        else {
            this.layoutService.verticalEffect = 'overlay';
        }
    }
    /**
     * @return {?}
     */
    logout() {
        this.authenticationService.logout();
    }
}
DefaultHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'default-header',
                template: "<nav class=\"navbar header-navbar pcoded-header header-workspace\"\r\n  [attr.pcoded-header-position]=\"layoutService.pcodedHeaderPosition\" [attr.header-theme]=\"layoutService.headerTheme\">\r\n  <div class=\"navbar-wrapper\">\r\n    <div class=\"navbar-container-right\">\r\n      <a class=\"btn-show-hide-menu ml-1\" (click)=\"toggleMenu()\" href=\"javascript:;\"><i class=\"fa fa-bars\"\r\n          aria-hidden=\"true\"></i>\r\n      </a>\r\n    </div>\r\n    <div class=\"navbar-logo\" [attr.logo-theme]=\"layoutService.logoTheme\">\r\n      <a class=\"logo--wrapper\" [routerLink]=\"['/']\">\r\n        <ng-container *ngIf=\"logo\">\r\n          <img class=\"text-logo\" [src]=\"logo\" alt=\"\" [title]=\"title\">\r\n        </ng-container>\r\n      </a>\r\n    </div>\r\n    <ng-container *ngIf=\"!isMobile; else mobileActions\">\r\n      <div class=\"navbar-container ml-auto\">\r\n        <ul class=\"nav-left\">\r\n          <li>\r\n            <a class=\"d-flex flex-column align-items-center\" href=\"javascript:;\">\r\n              <div class=\"icon mr-2\" style=\"max-width: 16px; display: inline-block; width: 20px; padding-top: 3px;\">\r\n                <svg viewBox=\"0 0 611.998 606.327\" style=\"fill: white;\">\r\n                  <g class=\"ng-tns-c3-0\" data-name=\"search-delivery-service-tool (1)\">\r\n                    <path class=\"ng-tns-c3-0\"\r\n                      d=\"M598.007 106.234l-73.663-92.419A36.677 36.677 0 0 0 495.665 0H169.943a36.672 36.672 0 0 0-28.678 13.815L67.6 106.234c-7.7 9.655-13.992 27.656-13.992 40v152.6c28.321-47.217 79.863-78.988 138.814-78.988 89.294 0 161.934 72.641 161.934 161.926 0 52.824-25.536 99.674-64.787 129.25h276.586A45.842 45.842 0 0 0 612 465.186v-318.95c0-12.346-6.3-30.347-13.993-40.002zm-506.332-.783l24.4-30.6h120.6l16.425-27H137.6l18.011-22.6a18.241 18.241 0 0 1 14.339-6.908h325.716a18.245 18.245 0 0 1 14.34 6.908l18.011 22.6H409.643l9.169 27h130.729l24.394 30.6zm100.754 141.913A134.334 134.334 0 0 0 87.495 465.676L8.52 551.926a32.475 32.475 0 0 0 47.9 43.86l82.892-90.522a134.422 134.422 0 1 0 53.117-257.9zm0 222.942a88.519 88.519 0 1 1 88.519-88.518 88.518 88.518 0 0 1-88.519 88.513z\"\r\n                      data-name=\"Path 1\"></path>\r\n                  </g>\r\n                </svg>\r\n              </div>\r\n              <span class=\"text-uppercase\">T\u00ECm ki\u1EBFm</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"nav-right\" [ngClass]=\"layoutService.isCollapsedMobile\">\r\n          <li class=\"header-notification\">\r\n            <a href=\"javascript:;\">\r\n              <i class=\"fa fa-bell bell icon-noti\"></i>\r\n              <span class=\"badge\">1</span>\r\n            </a>\r\n            <div class=\"notify--wrapper\">\r\n              <h6 class=\"m-b-0 text-font-13\">\r\n                <a href=\"javascript:;\" class=\"text-primary text-font-13\">1 Th\u00F4ng\r\n                  b\u00E1o ch\u01B0a \u0111\u1ECDc</a>\r\n              </h6>\r\n              <ul class=\"list-unstyled\">\r\n                <li class=\"w-100\" *ngFor=\"let notification of notifications\">\r\n                  <a href=\"javascript:;\">\r\n                    <p class=\"text-bold mb-1\">FW4C \u0111\u00E3 \u0111\u01B0\u1EE3c kh\u1EDFi t\u1EA1o</p>\r\n                    <p class=\"time m-0\">\r\n                      <i class=\"icofont icofont-clock-time\"></i>25/10/2019\r\n                    </p>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n              <h6 class=\"text-center p-2 view-all-noti m-0\">\r\n                <a href=\"javascript:;\" class=\"text-primary text-font-13 link-view-more\">\r\n                  Xem t\u1EA5t c\u1EA3\r\n                </a>\r\n              </h6>\r\n            </div>\r\n          </li>\r\n          <li class=\"user-profile header-notification\" *ngIf=\"user\">\r\n            <a [routerLink]=\"['/']\">\r\n              <img [hidden]=\"!user?.image?.src \" [src]=\"user?.image?.src\" alt=\"\" srcset=\"\"\r\n                style=\"    border: 2px solid #ffffff; background: #f8f8f8;     width: auto;   max-height: 38px;\">\r\n              <span [hidden]=\"user?.image?.src\" class=\"ava\"\r\n                [attr.data-letters]=\"(user.lastName | slice:0:1) + (user.firstName | slice:0:1)\"></span>\r\n              <span>{{user.fullName}}</span>\r\n              <i class=\"ti-angle-down\"></i>\r\n            </a>\r\n            <div class=\"user-list-option--wrapper\">\r\n              <ul class=\"show-notification profile-notification\">\r\n                <li><a class=\"p-0\" href=\"javascript:void(0)\"><i class=\"ti-user\"></i> T\u00E0i\r\n                    kho\u1EA3n c\u1EE7a t\u00F4i</a></li>\r\n                <li class=\"p-0\"><a href=\"javascript:void(0)\" (click)=\"logout()\"><i class=\"ti-layout-sidebar-left\"></i>\r\n                    \u0110\u0103ng xu\u1EA5t</a></li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</nav>\r\n<ng-template #mobileActions>\r\n  <div class=\"navbar-container-mobile ml-auto \">\r\n    <div class=\"header-notification d-flex align-items-center\">\r\n      <img [hidden]=\"!user?.image?.src \" [src]=\"user?.image?.src\" alt=\"\" srcset=\"\"\r\n        style=\" width:32px ;   border: 2px solid #ffffff;  border-radius: 50%; background: #f8f8f8;\">\r\n      <span [hidden]=\"user?.image?.src\" class=\"ava\"\r\n        [attr.data-letters]=\"(user.lastName | slice:0:1) + (user.firstName | slice:0:1)\"></span>\r\n      <i class=\"text-white ti-angle-down\"></i>\r\n      <div class=\"user-list-option--wrapper\">\r\n        <ul class=\"show-notification profile-notification m-0\">\r\n          <li><a class=\"p-0\" [routerLink]=\"['/user-profile']\">H\u1ED3 s\u01A1 c\u00E1 nh\u00E2n</a></li>\r\n          <li><a href=\"javascript:void(0)\" (click)=\"logout()\"><i class=\"ti-layout-sidebar-left\"></i>Tho\u00E1t</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                styles: ["a{text-decoration:none}.header-notification .text-white{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;white-space:normal}.header-notification .text-white.ti-angle-down{padding:0 8px;line-height:40px}span.ava[data-letters]:before{content:attr(data-letters);display:inline-block;font-size:1em;width:35px;height:35px;line-height:35px;text-align:center;border-radius:50%;background:#f8f8f8;vertical-align:middle;margin-right:.3em;color:#a9a9a9}"]
            }] }
];
/** @nocollapse */
DefaultHeaderComponent.ctorParameters = () => [
    { type: DefaultLayoutService },
    { type: Router },
    { type: ActivatedRoute },
    { type: ActionService },
    { type: AggregatorService },
    { type: AuthenticationService }
];
DefaultHeaderComponent.propDecorators = {
    notifications: [{ type: Input }],
    logo: [{ type: Input }],
    title: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DefaultHeaderComponent.prototype.notifications;
    /** @type {?} */
    DefaultHeaderComponent.prototype.logo;
    /** @type {?} */
    DefaultHeaderComponent.prototype.title;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWxFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFRMUQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7Ozs7O0lBTy9CLFlBQ1csYUFBbUMsRUFDaEMsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLGFBQTRCLEVBQzVCLGlCQUFvQyxFQUNwQyxxQkFBNEM7UUFML0Msa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFaMUMsa0JBQWEsR0FBeUIsRUFBRSxDQUFDO0lBYXJELENBQUM7Ozs7SUFFTCxRQUFRO1FBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQjtRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksYUFBYSxDQUFDO1lBQzFCLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLEtBQUssRUFBRSxJQUFJLGFBQWEsQ0FBQztnQkFDckIsR0FBRyxFQUFFLHlFQUF5RTthQUNqRixDQUFDO1NBQ0wsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVNLFVBQVU7UUFDYixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxJQUFJLFNBQVMsRUFBRTtZQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7U0FDaEQ7YUFBTTtZQUNILElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztTQUNqRDtJQUNMLENBQUM7Ozs7SUFFTSxNQUFNO1FBQ1QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3hDLENBQUM7OztZQWhESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsNDhMQUFzQzs7YUFFekM7Ozs7WUFiUSxvQkFBb0I7WUFDcEIsTUFBTTtZQUFFLGNBQWM7WUFDdEIsYUFBYTtZQUdiLGlCQUFpQjtZQUNqQixxQkFBcUI7Ozs0QkFVekIsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7Ozs7SUFGTiwrQ0FBeUQ7O0lBQ3pELHNDQUE2Qjs7SUFDN0IsdUNBQThCOztJQUM5QixzQ0FBMkI7O0lBQzNCLDBDQUF5Qjs7SUFHckIsK0NBQTBDOzs7OztJQUMxQyx3Q0FBd0I7Ozs7O0lBQ3hCLHVDQUErQjs7Ozs7SUFDL0IsK0NBQXNDOzs7OztJQUN0QyxtREFBOEM7Ozs7O0lBQzlDLHVEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEZWZhdWx0TGF5b3V0U2VydmljZSB9IGZyb20gJy4vbGF5b3V0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hY3Rpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkRldGFpbCB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbHMvbm90aWZpY2F0aW9uLm1vZGVsJztcclxuaW1wb3J0IHsgVXNlclZpZXdNb2RlbCB9IGZyb20gJy4uL2F1dGgvYXV0aC5tb2RlbCc7XHJcbmltcG9ydCB7IEFnZ3JlZ2F0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2FnZ3JlZ2F0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRmlsZVZpZXdNb2RlbCB9IGZyb20gJy4uL3NoYXJlZC9maWxlL2ZpbGUubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2RlZmF1bHQtaGVhZGVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0SGVhZGVyQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBub3RpZmljYXRpb25zOiBOb3RpZmljYXRpb25EZXRhaWxbXSA9IFtdO1xyXG4gICAgQElucHV0KCkgcHVibGljIGxvZ286IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHVzZXI6IFVzZXJWaWV3TW9kZWw7XHJcbiAgICBwdWJsaWMgaXNNb2JpbGU6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGxheW91dFNlcnZpY2U6IERlZmF1bHRMYXlvdXRTZXJ2aWNlLFxyXG4gICAgICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcm90ZWN0ZWQgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25TZXJ2aWNlOiBBY3Rpb25TZXJ2aWNlLFxyXG4gICAgICAgIHByb3RlY3RlZCBhZ2dyZWdhdG9yU2VydmljZTogQWdncmVnYXRvclNlcnZpY2UsXHJcbiAgICAgICAgcHJvdGVjdGVkIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNNb2JpbGUgPSB0aGlzLmFjdGlvblNlcnZpY2UuaXNNb2JpbGUoKTtcclxuICAgICAgICBpZiAodGhpcy5pc01vYmlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZU1lbnUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyO1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyVmlld01vZGVsKHtcclxuICAgICAgICAgICAgZnVsbE5hbWU6ICdIaeG6v3UgTmd1eeG7hW4nLFxyXG4gICAgICAgICAgICB1c2VyTmFtZTogJ250aGlldTQnLFxyXG4gICAgICAgICAgICBpbWFnZTogbmV3IEZpbGVWaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9jZG4uZHJpYmJibGUuY29tL3VzZXJzLzQxMzYxNy9zY3JlZW5zaG90cy8xNTgxNTEzL3RvdG9yby0wMS5wbmcnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZU1lbnUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0U2VydmljZS52ZXJ0aWNhbEVmZmVjdCA9PSAnb3ZlcmxheScpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXlvdXRTZXJ2aWNlLnZlcnRpY2FsRWZmZWN0ID0gJ3Nocmluayc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXlvdXRTZXJ2aWNlLnZlcnRpY2FsRWZmZWN0ID0gJ292ZXJsYXknO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nb3V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==