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
        this.loading = false;
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
            fullName: 'Nguyễn Trung Hiếu - CMC Global SA',
            userName: 'nthieu4',
            image: new FileViewModel({
                src: 'https://img.icons8.com/cotton/64/000000/user-female--v3.png'
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
                template: "<nav class=\"navbar header-navbar pcoded-header header-workspace\"\r\n  [attr.pcoded-header-position]=\"layoutService.pcodedHeaderPosition\" [attr.header-theme]=\"layoutService.headerTheme\">\r\n  <div class=\"navbar-wrapper\">\r\n    <div class=\"navbar-container-right\">\r\n      <a class=\"btn-show-hide-menu ml-1\" (click)=\"toggleMenu()\" href=\"javascript:;\"><i class=\"fa fa-bars\"\r\n          aria-hidden=\"true\"></i>\r\n      </a>\r\n    </div>\r\n    <div class=\"navbar-logo\" [attr.logo-theme]=\"layoutService.logoTheme\">\r\n      <a class=\"logo--wrapper\" [routerLink]=\"['/']\">\r\n        <ng-container *ngIf=\"logo\">\r\n          <img class=\"text-logo\" [src]=\"logo\" alt=\"\" [title]=\"title\">\r\n        </ng-container>\r\n      </a>\r\n    </div>\r\n    <ng-container *ngIf=\"!isMobile; else mobileActions\">\r\n      <div class=\"navbar-container ml-auto\">\r\n        <ul class=\"nav-left\">\r\n        </ul>\r\n        <ul class=\"nav-right\" [ngClass]=\"layoutService.isCollapsedMobile\">\r\n          <li>\r\n            <div class=\"row form search-bar form-inline\">\r\n              <div class=\"flex-custom\">\r\n                <div class=\"form-group search-input-wrapper\">\r\n                  <span class=\"search-icon\">\r\n                    <i class=\"fa fa-search\"></i>\r\n                  </span>\r\n                  <input spellcheck=\"false\" [(ngModel)]=\"filter\" type=\"text\" class=\"form-control search-input\"\r\n                    [placeholder]=\"'T\u00ECm ki\u1EBFm...'\">\r\n                  <span class=\"search-reset\" *ngIf=\"filter\">\r\n                    <i *ngIf=\"loading\" class=\"fa fa-spinner rotate-refresh\"></i>\r\n                    <i *ngIf=\"!loading\" class=\"fa fa-times-circle\" (click)=\"filter= ''\"></i>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"header-notification\">\r\n            <a href=\"javascript:;\">\r\n              <i class=\"fa fa-bell bell icon-noti\"></i>\r\n              <span class=\"badge\">1</span>\r\n            </a>\r\n            <div class=\"notify--wrapper\">\r\n              <h6 class=\"m-b-0 text-font-13\">\r\n                <a href=\"javascript:;\" class=\"text-primary text-font-13\">1 Th\u00F4ng\r\n                  b\u00E1o ch\u01B0a \u0111\u1ECDc</a>\r\n              </h6>\r\n              <ul class=\"list-unstyled\">\r\n                <li class=\"w-100\" *ngFor=\"let notification of notifications\">\r\n                  <a href=\"javascript:;\">\r\n                    <p class=\"text-bold mb-1\">FW4C \u0111\u00E3 \u0111\u01B0\u1EE3c kh\u1EDFi t\u1EA1o</p>\r\n                    <p class=\"time m-0\">\r\n                      <i class=\"icofont icofont-clock-time\"></i>25/10/2019\r\n                    </p>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n              <h6 class=\"text-center p-2 view-all-noti m-0\">\r\n                <a href=\"javascript:;\" class=\"text-primary text-font-13 link-view-more\">\r\n                  Xem t\u1EA5t c\u1EA3\r\n                </a>\r\n              </h6>\r\n            </div>\r\n          </li>\r\n          <li class=\"user-profile header-notification\" *ngIf=\"user\">\r\n            <a [routerLink]=\"['/']\">\r\n              <img [hidden]=\"!user?.image?.src\" [src]=\"user?.image?.src\" alt=\"\" srcset=\"\"\r\n                style=\"border: 2px solid #ffffff; background: #f8f8f8; width: auto; height: 25px; width: 25px; border-radius: 50%;\">\r\n              <span [hidden]=\"user?.image?.src\" class=\"ava\"\r\n                [attr.data-letters]=\"(user.lastName | slice:0:1) + (user.firstName | slice:0:1)\"></span>\r\n              <span style=\"font-weight: normal;\">{{user.fullName}}</span>\r\n              <i class=\"ti-angle-down\"></i>\r\n            </a>\r\n            <div style=\"margin-top: 2px;\" class=\"user-list-option--wrapper\">\r\n              <ul class=\"show-notification profile-notification\">\r\n                <li class=\"p-0\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"logout()\">\r\n                    <i></i>T\u00E0i kho\u1EA3n</a>\r\n                </li>\r\n                <li class=\"p-0\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"logout()\">\r\n                    <i></i>Tho\u00E1t</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</nav>\r\n<ng-template #mobileActions>\r\n  <div class=\"navbar-container-mobile ml-auto \">\r\n    <div class=\"header-notification d-flex align-items-center\">\r\n      <img [hidden]=\"!user?.image?.src \" [src]=\"user?.image?.src\" alt=\"\" srcset=\"\"\r\n        style=\" width:32px ;   border: 2px solid #ffffff;  border-radius: 50%; background: #f8f8f8;\">\r\n      <span [hidden]=\"user?.image?.src\" class=\"ava\"\r\n        [attr.data-letters]=\"(user.lastName | slice:0:1) + (user.firstName | slice:0:1)\"></span>\r\n      <i class=\"text-white ti-angle-down\"></i>\r\n      <div class=\"user-list-option--wrapper\">\r\n        <ul class=\"show-notification profile-notification m-0\">\r\n          <li><a class=\"p-0\" [routerLink]=\"['/user-profile']\">H\u1ED3 s\u01A1 c\u00E1 nh\u00E2n</a></li>\r\n          <li><a href=\"javascript:void(0)\" (click)=\"logout()\"><i class=\"ti-layout-sidebar-left\"></i>Tho\u00E1t</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                styles: ["a{text-decoration:none}.header-notification .text-white{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;white-space:normal}.header-notification .text-white.ti-angle-down{padding:0 8px;line-height:40px}span.ava[data-letters]:before{content:attr(data-letters);display:inline-block;font-size:1em;width:35px;height:35px;line-height:35px;text-align:center;border-radius:50%;background:#f8f8f8;vertical-align:middle;margin-right:.3em;color:#a9a9a9}.navbar-wrapper{height:57px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWxFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFRMUQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7Ozs7O0lBUy9CLFlBQ1csYUFBbUMsRUFDaEMsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLGFBQTRCLEVBQzVCLGlCQUFvQyxFQUNwQyxxQkFBNEM7UUFML0Msa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFkMUMsa0JBQWEsR0FBeUIsRUFBRSxDQUFDO1FBR2xELFlBQU8sR0FBWSxLQUFLLENBQUM7SUFZNUIsQ0FBQzs7OztJQUVMLFFBQVE7UUFDSixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxhQUFhLENBQUM7WUFDMUIsUUFBUSxFQUFFLG1DQUFtQztZQUM3QyxRQUFRLEVBQUUsU0FBUztZQUNuQixLQUFLLEVBQUUsSUFBSSxhQUFhLENBQUM7Z0JBQ3JCLEdBQUcsRUFBRSw2REFBNkQ7YUFDckUsQ0FBQztTQUNMLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2IsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsSUFBSSxTQUFTLEVBQUU7WUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO1NBQ2hEO2FBQU07WUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7U0FDakQ7SUFDTCxDQUFDOzs7O0lBRU0sTUFBTTtRQUNULElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7WUFsREosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGc5S0FBc0M7O2FBRXpDOzs7O1lBYlEsb0JBQW9CO1lBQ3BCLE1BQU07WUFBRSxjQUFjO1lBQ3RCLGFBQWE7WUFHYixpQkFBaUI7WUFDakIscUJBQXFCOzs7NEJBVXpCLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLOzs7O0lBRk4sK0NBQXlEOztJQUN6RCxzQ0FBNkI7O0lBQzdCLHVDQUE4Qjs7SUFDOUIseUNBQWdDOztJQUNoQyx3Q0FBc0I7O0lBQ3RCLHNDQUEyQjs7SUFDM0IsMENBQXlCOztJQUdyQiwrQ0FBMEM7Ozs7O0lBQzFDLHdDQUF3Qjs7Ozs7SUFDeEIsdUNBQStCOzs7OztJQUMvQiwrQ0FBc0M7Ozs7O0lBQ3RDLG1EQUE4Qzs7Ozs7SUFDOUMsdURBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERlZmF1bHRMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9sYXlvdXQuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2FjdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uRGV0YWlsIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy9ub3RpZmljYXRpb24ubW9kZWwnO1xyXG5pbXBvcnQgeyBVc2VyVmlld01vZGVsIH0gZnJvbSAnLi4vYXV0aC9hdXRoLm1vZGVsJztcclxuaW1wb3J0IHsgQWdncmVnYXRvclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYWdncmVnYXRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGaWxlVmlld01vZGVsIH0gZnJvbSAnLi4vc2hhcmVkL2ZpbGUvZmlsZS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGVmYXVsdC1oZWFkZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERlZmF1bHRIZWFkZXJDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgcHVibGljIG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbkRldGFpbFtdID0gW107XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbG9nbzogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGZpbHRlcjogc3RyaW5nO1xyXG4gICAgcHVibGljIHVzZXI6IFVzZXJWaWV3TW9kZWw7XHJcbiAgICBwdWJsaWMgaXNNb2JpbGU6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGxheW91dFNlcnZpY2U6IERlZmF1bHRMYXlvdXRTZXJ2aWNlLFxyXG4gICAgICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcm90ZWN0ZWQgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25TZXJ2aWNlOiBBY3Rpb25TZXJ2aWNlLFxyXG4gICAgICAgIHByb3RlY3RlZCBhZ2dyZWdhdG9yU2VydmljZTogQWdncmVnYXRvclNlcnZpY2UsXHJcbiAgICAgICAgcHJvdGVjdGVkIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNNb2JpbGUgPSB0aGlzLmFjdGlvblNlcnZpY2UuaXNNb2JpbGUoKTtcclxuICAgICAgICBpZiAodGhpcy5pc01vYmlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZU1lbnUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyO1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyVmlld01vZGVsKHtcclxuICAgICAgICAgICAgZnVsbE5hbWU6ICdOZ3V54buFbiBUcnVuZyBIaeG6v3UgLSBDTUMgR2xvYmFsIFNBJyxcclxuICAgICAgICAgICAgdXNlck5hbWU6ICdudGhpZXU0JyxcclxuICAgICAgICAgICAgaW1hZ2U6IG5ldyBGaWxlVmlld01vZGVsKHtcclxuICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vaW1nLmljb25zOC5jb20vY290dG9uLzY0LzAwMDAwMC91c2VyLWZlbWFsZS0tdjMucG5nJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVNZW51KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxheW91dFNlcnZpY2UudmVydGljYWxFZmZlY3QgPT0gJ292ZXJsYXknKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF5b3V0U2VydmljZS52ZXJ0aWNhbEVmZmVjdCA9ICdzaHJpbmsnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF5b3V0U2VydmljZS52ZXJ0aWNhbEVmZmVjdCA9ICdvdmVybGF5JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ291dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dvdXQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=