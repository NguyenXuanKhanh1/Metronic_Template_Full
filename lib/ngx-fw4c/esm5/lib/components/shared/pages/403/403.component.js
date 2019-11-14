/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
var AccessDeniedComponent = /** @class */ (function () {
    function AccessDeniedComponent(_router, _location) {
        this._router = _router;
        this._location = _location;
    }
    /**
     * @return {?}
     */
    AccessDeniedComponent.prototype.gotoHome = /**
     * @return {?}
     */
    function () {
        this._router.navigate(['/']);
    };
    /**
     * @return {?}
     */
    AccessDeniedComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this._location.back();
    };
    AccessDeniedComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-forbidden',
                    template: "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>Kh\u00F4ng t\u00ECm th\u1EA5y trang</title>\r\n    <style>\r\n        body {\r\n            margin: 0;\r\n            background: #f4f3f0;\r\n            color: #666666;\r\n            font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", 'Open Sans', \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n        }\r\n\r\n        h1,\r\n        h2,\r\n        h3,\r\n        h4,\r\n        h5,\r\n        h6 {\r\n            font-weight: 500;\r\n            margin-bottom: 0;\r\n        }\r\n\r\n        a {\r\n            color: #EB5D13;\r\n            text-decoration: none;\r\n        }\r\n\r\n        a:hover {\r\n            text-decoration: underline;\r\n        }\r\n\r\n        .content-wrapper {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n        }\r\n\r\n        .main-content {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            flex-direction: column;\r\n            width: 862px;\r\n            height: 400px;\r\n            padding: 1rem;\r\n        }\r\n\r\n        .text-muted {\r\n            color: #73717a;\r\n        }\r\n\r\n        .text-primary {\r\n            color: #EB5D13;\r\n        }\r\n\r\n        .home-btn {\r\n            cursor: pointer;\r\n            font-family: inherit;\r\n            background: #EB5D13;\r\n            color: white;\r\n            font-weight: 500;\r\n            text-align: center;\r\n            white-space: nowrap;\r\n            vertical-align: middle;\r\n            user-select: none;\r\n            border: 1px solid transparent;\r\n            padding: 0.375rem 0.75rem;\r\n            font-size: 14px;\r\n            line-height: 1.5;\r\n            border-radius: 1px;\r\n            transition: all 0.15s ease-in-out;\r\n            outline: none;\r\n        }\r\n\r\n        .home-btn:hover {\r\n            background: rgb(211, 84, 16);\r\n        }\r\n\r\n\r\n        .image {\r\n            position: relative;\r\n        }\r\n\r\n        .image-404 {\r\n            max-width: 70px;\r\n            width: 100%;\r\n        }\r\n\r\n        .logo {\r\n            padding-bottom: 2rem;\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n    <div class=\"content-wrapper\">\r\n        <div class=\"main-content\">\r\n            <h3 class=\" text-primary logo\">403</h3>\r\n            <div class=\"image\">\r\n                <div class=\"icon\">\r\n                    <svg class=\"image-404\" viewBox=\"0 0 512 512\">\r\n                        <path fill=\"orange\"\r\n                            d=\"M507.494 426.066L282.864 53.537a31.372 31.372 0 0 0-53.73 0L4.506 426.066a31.37 31.37 0 0 0 26.864 47.569h449.259a31.372 31.372 0 0 0 26.865-47.569zM256.167 167.227c12.901 0 23.817 7.278 23.817 20.178 0 39.363-4.631 95.929-4.631 135.292 0 10.255-11.247 14.554-19.186 14.554-10.584 0-19.516-4.3-19.516-14.554 0-39.363-4.63-95.929-4.63-135.292 0-12.9 10.584-20.178 24.146-20.178zm.331 243.791c-14.554 0-25.471-11.908-25.471-25.47 0-13.893 10.916-25.47 25.471-25.47 13.562 0 25.14 11.577 25.14 25.47 0 13.562-11.578 25.47-25.14 25.47z\" />\r\n                    </svg>\r\n                </div>\r\n            </div>\r\n            <h3>R\u1EA5t ti\u1EBFc, b\u1EA1n ch\u01B0a \u0111\u1EE7 quy\u1EC1n truy c\u1EADp trang n\u00E0y.</h3>\r\n            <p class=\"text-muted\">B\u1EA1n c\u00F3 th\u1EC3 <a href=\"javascript:;\" (click)=\"back()\">tr\u1EDF l\u1EA1i trang tr\u01B0\u1EDBc</a> ho\u1EB7c v\u1EC1 <a\r\n                    href=\"javascript::\" (click)=\"gotoHome()\"> trang ch\u1EE7</a> !</p>\r\n        </div>\r\n    </div>\r\n</body>\r\n\r\n</html>"
                }] }
    ];
    /** @nocollapse */
    AccessDeniedComponent.ctorParameters = function () { return [
        { type: Router },
        { type: Location }
    ]; };
    return AccessDeniedComponent;
}());
export { AccessDeniedComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AccessDeniedComponent.prototype._router;
    /**
     * @type {?}
     * @private
     */
    AccessDeniedComponent.prototype._location;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDAzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3BhZ2VzLzQwMy80MDMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0M7SUFNRSwrQkFDVSxPQUFlLEVBQ2YsU0FBbUI7UUFEbkIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGNBQVMsR0FBVCxTQUFTLENBQVU7SUFBSSxDQUFDOzs7O0lBRTNCLHdDQUFROzs7SUFBZjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRU0sb0NBQUk7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDQ1SEFBbUM7aUJBQ3BDOzs7O2dCQU5RLE1BQU07Z0JBQ04sUUFBUTs7SUFtQmpCLDRCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FaWSxxQkFBcUI7Ozs7OztJQUU5Qix3Q0FBdUI7Ozs7O0lBQ3ZCLDBDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2thdGFuYS1mb3JiaWRkZW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi80MDMuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWNjZXNzRGVuaWVkQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBfbG9jYXRpb246IExvY2F0aW9uKSB7IH1cclxuXHJcbiAgcHVibGljIGdvdG9Ib21lKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBiYWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fbG9jYXRpb24uYmFjaygpO1xyXG4gIH1cclxufVxyXG5cclxuIl19