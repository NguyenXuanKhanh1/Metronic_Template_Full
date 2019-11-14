/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
export class AccessDeniedComponent {
    /**
     * @param {?} _router
     * @param {?} _location
     */
    constructor(_router, _location) {
        this._router = _router;
        this._location = _location;
    }
    /**
     * @return {?}
     */
    gotoHome() {
        this._router.navigate(['/']);
    }
    /**
     * @return {?}
     */
    back() {
        this._location.back();
    }
}
AccessDeniedComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-forbidden',
                template: "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>Kh\u00F4ng t\u00ECm th\u1EA5y trang</title>\r\n    <style>\r\n        body {\r\n            margin: 0;\r\n            background: #f4f3f0;\r\n            color: #666666;\r\n            font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", 'Open Sans', \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n        }\r\n\r\n        h1,\r\n        h2,\r\n        h3,\r\n        h4,\r\n        h5,\r\n        h6 {\r\n            font-weight: 500;\r\n            margin-bottom: 0;\r\n        }\r\n\r\n        a {\r\n            color: #EB5D13;\r\n            text-decoration: none;\r\n        }\r\n\r\n        a:hover {\r\n            text-decoration: underline;\r\n        }\r\n\r\n        .content-wrapper {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n        }\r\n\r\n        .main-content {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            flex-direction: column;\r\n            width: 862px;\r\n            height: 400px;\r\n            padding: 1rem;\r\n        }\r\n\r\n        .text-muted {\r\n            color: #73717a;\r\n        }\r\n\r\n        .text-primary {\r\n            color: #EB5D13;\r\n        }\r\n\r\n        .home-btn {\r\n            cursor: pointer;\r\n            font-family: inherit;\r\n            background: #EB5D13;\r\n            color: white;\r\n            font-weight: 500;\r\n            text-align: center;\r\n            white-space: nowrap;\r\n            vertical-align: middle;\r\n            user-select: none;\r\n            border: 1px solid transparent;\r\n            padding: 0.375rem 0.75rem;\r\n            font-size: 14px;\r\n            line-height: 1.5;\r\n            border-radius: 1px;\r\n            transition: all 0.15s ease-in-out;\r\n            outline: none;\r\n        }\r\n\r\n        .home-btn:hover {\r\n            background: rgb(211, 84, 16);\r\n        }\r\n\r\n\r\n        .image {\r\n            position: relative;\r\n        }\r\n\r\n        .image-404 {\r\n            max-width: 70px;\r\n            width: 100%;\r\n        }\r\n\r\n        .logo {\r\n            padding-bottom: 2rem;\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n    <div class=\"content-wrapper\">\r\n        <div class=\"main-content\">\r\n            <h3 class=\" text-primary logo\">403</h3>\r\n            <div class=\"image\">\r\n                <div class=\"icon\">\r\n                    <svg class=\"image-404\" viewBox=\"0 0 512 512\">\r\n                        <path fill=\"orange\"\r\n                            d=\"M507.494 426.066L282.864 53.537a31.372 31.372 0 0 0-53.73 0L4.506 426.066a31.37 31.37 0 0 0 26.864 47.569h449.259a31.372 31.372 0 0 0 26.865-47.569zM256.167 167.227c12.901 0 23.817 7.278 23.817 20.178 0 39.363-4.631 95.929-4.631 135.292 0 10.255-11.247 14.554-19.186 14.554-10.584 0-19.516-4.3-19.516-14.554 0-39.363-4.63-95.929-4.63-135.292 0-12.9 10.584-20.178 24.146-20.178zm.331 243.791c-14.554 0-25.471-11.908-25.471-25.47 0-13.893 10.916-25.47 25.471-25.47 13.562 0 25.14 11.577 25.14 25.47 0 13.562-11.578 25.47-25.14 25.47z\" />\r\n                    </svg>\r\n                </div>\r\n            </div>\r\n            <h3>R\u1EA5t ti\u1EBFc, b\u1EA1n ch\u01B0a \u0111\u1EE7 quy\u1EC1n truy c\u1EADp trang n\u00E0y.</h3>\r\n            <p class=\"text-muted\">B\u1EA1n c\u00F3 th\u1EC3 <a href=\"javascript:;\" (click)=\"back()\">tr\u1EDF l\u1EA1i trang tr\u01B0\u1EDBc</a> ho\u1EB7c v\u1EC1 <a\r\n                    href=\"javascript::\" (click)=\"gotoHome()\"> trang ch\u1EE7</a> !</p>\r\n        </div>\r\n    </div>\r\n</body>\r\n\r\n</html>"
            }] }
];
/** @nocollapse */
AccessDeniedComponent.ctorParameters = () => [
    { type: Router },
    { type: Location }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDAzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3BhZ2VzLzQwMy80MDMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPM0MsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFDaEMsWUFDVSxPQUFlLEVBQ2YsU0FBbUI7UUFEbkIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGNBQVMsR0FBVCxTQUFTLENBQVU7SUFBSSxDQUFDOzs7O0lBRTNCLFFBQVE7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVNLElBQUk7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsNDVIQUFtQzthQUNwQzs7OztZQU5RLE1BQU07WUFDTixRQUFROzs7Ozs7O0lBU2Isd0NBQXVCOzs7OztJQUN2QiwwQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrYXRhbmEtZm9yYmlkZGVuJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vNDAzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjY2Vzc0RlbmllZENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgX2xvY2F0aW9uOiBMb2NhdGlvbikgeyB9XHJcblxyXG4gIHB1YmxpYyBnb3RvSG9tZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYmFjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuX2xvY2F0aW9uLmJhY2soKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==