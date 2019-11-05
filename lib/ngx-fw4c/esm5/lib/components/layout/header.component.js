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
            fullName: 'Hiếu Nguyễn',
            userName: 'nthieu4',
            image: new FileViewModel({
                src: 'https://cdn.dribbble.com/users/413617/screenshots/1581513/totoro-01.png'
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
                    template: "<nav class=\"navbar header-navbar pcoded-header header-workspace\"\r\n  [attr.pcoded-header-position]=\"layoutService.pcodedHeaderPosition\" [attr.header-theme]=\"layoutService.headerTheme\">\r\n  <div class=\"navbar-wrapper\">\r\n    <div class=\"navbar-container-right\">\r\n      <a class=\"btn-show-hide-menu ml-1\" (click)=\"toggleMenu()\" href=\"javascript:;\"><i class=\"fa fa-bars\"\r\n          aria-hidden=\"true\"></i>\r\n      </a>\r\n    </div>\r\n    <div class=\"navbar-logo\" [attr.logo-theme]=\"layoutService.logoTheme\">\r\n      <a class=\"logo--wrapper\" [routerLink]=\"['/']\">\r\n        <ng-container *ngIf=\"logo\">\r\n          <img class=\"text-logo\" [src]=\"logo\" alt=\"\" [title]=\"title\">\r\n        </ng-container>\r\n      </a>\r\n    </div>\r\n    <ng-container *ngIf=\"!isMobile; else mobileActions\">\r\n      <div class=\"navbar-container ml-auto\">\r\n        <ul class=\"nav-left\">\r\n          <li>\r\n            <a class=\"d-flex flex-column align-items-center\" href=\"javascript:;\">\r\n              <div class=\"icon mr-2\" style=\"max-width: 16px; display: inline-block; width: 20px; padding-top: 3px;\">\r\n                <svg viewBox=\"0 0 611.998 606.327\" style=\"fill: white;\">\r\n                  <g class=\"ng-tns-c3-0\" data-name=\"search-delivery-service-tool (1)\">\r\n                    <path class=\"ng-tns-c3-0\"\r\n                      d=\"M598.007 106.234l-73.663-92.419A36.677 36.677 0 0 0 495.665 0H169.943a36.672 36.672 0 0 0-28.678 13.815L67.6 106.234c-7.7 9.655-13.992 27.656-13.992 40v152.6c28.321-47.217 79.863-78.988 138.814-78.988 89.294 0 161.934 72.641 161.934 161.926 0 52.824-25.536 99.674-64.787 129.25h276.586A45.842 45.842 0 0 0 612 465.186v-318.95c0-12.346-6.3-30.347-13.993-40.002zm-506.332-.783l24.4-30.6h120.6l16.425-27H137.6l18.011-22.6a18.241 18.241 0 0 1 14.339-6.908h325.716a18.245 18.245 0 0 1 14.34 6.908l18.011 22.6H409.643l9.169 27h130.729l24.394 30.6zm100.754 141.913A134.334 134.334 0 0 0 87.495 465.676L8.52 551.926a32.475 32.475 0 0 0 47.9 43.86l82.892-90.522a134.422 134.422 0 1 0 53.117-257.9zm0 222.942a88.519 88.519 0 1 1 88.519-88.518 88.518 88.518 0 0 1-88.519 88.513z\"\r\n                      data-name=\"Path 1\"></path>\r\n                  </g>\r\n                </svg>\r\n              </div>\r\n              <span class=\"text-uppercase\">T\u00ECm ki\u1EBFm</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"nav-right\" [ngClass]=\"layoutService.isCollapsedMobile\">\r\n          <li class=\"header-notification\">\r\n            <a href=\"javascript:;\">\r\n              <i class=\"fa fa-bell bell icon-noti\"></i>\r\n              <span class=\"badge\">1</span>\r\n            </a>\r\n            <div class=\"notify--wrapper\">\r\n              <h6 class=\"m-b-0 text-font-13\">\r\n                <a href=\"javascript:;\" class=\"text-primary text-font-13\">1 Th\u00F4ng\r\n                  b\u00E1o ch\u01B0a \u0111\u1ECDc</a>\r\n              </h6>\r\n              <ul class=\"list-unstyled\">\r\n                <li class=\"w-100\" *ngFor=\"let notification of notifications\">\r\n                  <a href=\"javascript:;\">\r\n                    <p class=\"text-bold mb-1\">FW4C \u0111\u00E3 \u0111\u01B0\u1EE3c kh\u1EDFi t\u1EA1o</p>\r\n                    <p class=\"time m-0\">\r\n                      <i class=\"icofont icofont-clock-time\"></i>25/10/2019\r\n                    </p>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n              <h6 class=\"text-center p-2 view-all-noti m-0\">\r\n                <a href=\"javascript:;\" class=\"text-primary text-font-13 link-view-more\">\r\n                  Xem t\u1EA5t c\u1EA3\r\n                </a>\r\n              </h6>\r\n            </div>\r\n          </li>\r\n          <li class=\"user-profile header-notification\" *ngIf=\"user\">\r\n            <a [routerLink]=\"['/']\">\r\n              <img [hidden]=\"!user?.image?.src \" [src]=\"user?.image?.src\" alt=\"\" srcset=\"\"\r\n                style=\"    border: 2px solid #ffffff; background: #f8f8f8;     width: auto;   max-height: 38px;\">\r\n              <span [hidden]=\"user?.image?.src\" class=\"ava\"\r\n                [attr.data-letters]=\"(user.lastName | slice:0:1) + (user.firstName | slice:0:1)\"></span>\r\n              <span>{{user.fullName}}</span>\r\n              <i class=\"ti-angle-down\"></i>\r\n            </a>\r\n            <div class=\"user-list-option--wrapper\">\r\n              <ul class=\"show-notification profile-notification\">\r\n                <li><a class=\"p-0\" href=\"javascript:void(0)\"><i class=\"ti-user\"></i> T\u00E0i\r\n                    kho\u1EA3n c\u1EE7a t\u00F4i</a></li>\r\n                <li class=\"p-0\"><a href=\"javascript:void(0)\" (click)=\"logout()\"><i class=\"ti-layout-sidebar-left\"></i>\r\n                    \u0110\u0103ng xu\u1EA5t</a></li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</nav>\r\n<ng-template #mobileActions>\r\n  <div class=\"navbar-container-mobile ml-auto \">\r\n    <div class=\"header-notification d-flex align-items-center\">\r\n      <img [hidden]=\"!user?.image?.src \" [src]=\"user?.image?.src\" alt=\"\" srcset=\"\"\r\n        style=\" width:32px ;   border: 2px solid #ffffff;  border-radius: 50%; background: #f8f8f8;\">\r\n      <span [hidden]=\"user?.image?.src\" class=\"ava\"\r\n        [attr.data-letters]=\"(user.lastName | slice:0:1) + (user.firstName | slice:0:1)\"></span>\r\n      <i class=\"text-white ti-angle-down\"></i>\r\n      <div class=\"user-list-option--wrapper\">\r\n        <ul class=\"show-notification profile-notification m-0\">\r\n          <li><a class=\"p-0\" [routerLink]=\"['/user-profile']\">H\u1ED3 s\u01A1 c\u00E1 nh\u00E2n</a></li>\r\n          <li><a href=\"javascript:void(0)\" (click)=\"logout()\"><i class=\"ti-layout-sidebar-left\"></i>Tho\u00E1t</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                    styles: ["a{text-decoration:none}.header-notification .text-white{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;white-space:normal}.header-notification .text-white.ti-angle-down{padding:0 8px;line-height:40px}span.ava[data-letters]:before{content:attr(data-letters);display:inline-block;font-size:1em;width:35px;height:35px;line-height:35px;text-align:center;border-radius:50%;background:#f8f8f8;vertical-align:middle;margin-right:.3em;color:#a9a9a9}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWxFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQ7SUFhSSxnQ0FDVyxhQUFtQyxFQUNoQyxNQUFjLEVBQ2QsS0FBcUIsRUFDckIsYUFBNEIsRUFDNUIsaUJBQW9DLEVBQ3BDLHFCQUE0QztRQUwvQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQVoxQyxrQkFBYSxHQUF5QixFQUFFLENBQUM7SUFhckQsQ0FBQzs7OztJQUVMLHlDQUFROzs7SUFBUjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDckI7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGFBQWEsQ0FBQztZQUMxQixRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsU0FBUztZQUNuQixLQUFLLEVBQUUsSUFBSSxhQUFhLENBQUM7Z0JBQ3JCLEdBQUcsRUFBRSx5RUFBeUU7YUFDakYsQ0FBQztTQUNMLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFTSwyQ0FBVTs7O0lBQWpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsSUFBSSxTQUFTLEVBQUU7WUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO1NBQ2hEO2FBQU07WUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7U0FDakQ7SUFDTCxDQUFDOzs7O0lBRU0sdUNBQU07OztJQUFiO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3hDLENBQUM7O2dCQWhESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsNDhMQUFzQzs7aUJBRXpDOzs7O2dCQWJRLG9CQUFvQjtnQkFDcEIsTUFBTTtnQkFBRSxjQUFjO2dCQUN0QixhQUFhO2dCQUdiLGlCQUFpQjtnQkFDakIscUJBQXFCOzs7Z0NBVXpCLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOztJQXdDViw2QkFBQztDQUFBLEFBakRELElBaURDO1NBM0NZLHNCQUFzQjs7O0lBQy9CLCtDQUF5RDs7SUFDekQsc0NBQTZCOztJQUM3Qix1Q0FBOEI7O0lBQzlCLHNDQUEyQjs7SUFDM0IsMENBQXlCOztJQUdyQiwrQ0FBMEM7Ozs7O0lBQzFDLHdDQUF3Qjs7Ozs7SUFDeEIsdUNBQStCOzs7OztJQUMvQiwrQ0FBc0M7Ozs7O0lBQ3RDLG1EQUE4Qzs7Ozs7SUFDOUMsdURBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERlZmF1bHRMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9sYXlvdXQuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2FjdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uRGV0YWlsIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy9ub3RpZmljYXRpb24ubW9kZWwnO1xyXG5pbXBvcnQgeyBVc2VyVmlld01vZGVsIH0gZnJvbSAnLi4vYXV0aC9hdXRoLm1vZGVsJztcclxuaW1wb3J0IHsgQWdncmVnYXRvclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYWdncmVnYXRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGaWxlVmlld01vZGVsIH0gZnJvbSAnLi4vc2hhcmVkL2ZpbGUvZmlsZS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGVmYXVsdC1oZWFkZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERlZmF1bHRIZWFkZXJDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgcHVibGljIG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbkRldGFpbFtdID0gW107XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbG9nbzogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdXNlcjogVXNlclZpZXdNb2RlbDtcclxuICAgIHB1YmxpYyBpc01vYmlsZTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgbGF5b3V0U2VydmljZTogRGVmYXVsdExheW91dFNlcnZpY2UsXHJcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByb3RlY3RlZCByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvblNlcnZpY2U6IEFjdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJvdGVjdGVkIGFnZ3JlZ2F0b3JTZXJ2aWNlOiBBZ2dyZWdhdG9yU2VydmljZSxcclxuICAgICAgICBwcm90ZWN0ZWQgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc01vYmlsZSA9IHRoaXMuYWN0aW9uU2VydmljZS5pc01vYmlsZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXI7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXJWaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICBmdWxsTmFtZTogJ0hp4bq/dSBOZ3V54buFbicsXHJcbiAgICAgICAgICAgIHVzZXJOYW1lOiAnbnRoaWV1NCcsXHJcbiAgICAgICAgICAgIGltYWdlOiBuZXcgRmlsZVZpZXdNb2RlbCh7XHJcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL2Nkbi5kcmliYmJsZS5jb20vdXNlcnMvNDEzNjE3L3NjcmVlbnNob3RzLzE1ODE1MTMvdG90b3JvLTAxLnBuZydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlTWVudSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5sYXlvdXRTZXJ2aWNlLnZlcnRpY2FsRWZmZWN0ID09ICdvdmVybGF5Jykge1xyXG4gICAgICAgICAgICB0aGlzLmxheW91dFNlcnZpY2UudmVydGljYWxFZmZlY3QgPSAnc2hyaW5rJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxheW91dFNlcnZpY2UudmVydGljYWxFZmZlY3QgPSAnb3ZlcmxheSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dvdXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19