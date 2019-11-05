/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var WorkingComponent = /** @class */ (function () {
    function WorkingComponent(_router) {
        this._router = _router;
    }
    /**
     * @return {?}
     */
    WorkingComponent.prototype.gotoHome = /**
     * @return {?}
     */
    function () {
        this._router.navigate(['/']);
    };
    WorkingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'working',
                    template: "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>Kh\u00F4ng t\u00ECm th\u1EA5y trang</title>\r\n    <style>\r\n        body {\r\n            margin: 0;\r\n            background: #f4f3f0;\r\n            color: #666666;\r\n            font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", 'Open Sans', \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n        }\r\n\r\n        h1,\r\n        h2,\r\n        h3,\r\n        h4,\r\n        h5,\r\n        h6 {\r\n            font-weight: 500;\r\n            margin-bottom: 0;\r\n        }\r\n\r\n        .content-wrapper {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n        }\r\n\r\n        .main-content {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            flex-direction: column;\r\n            width: 862px;\r\n            height: 400px;\r\n            padding: 1rem;\r\n        }\r\n\r\n        .text-muted {\r\n            color: #73717a;\r\n        }\r\n\r\n        .text-primary {\r\n            color: #EB5D13;\r\n        }\r\n\r\n        .home-btn {\r\n            cursor: pointer;\r\n            font-family: inherit;\r\n            background: #EB5D13;\r\n            color: white;\r\n            font-weight: 500;\r\n            text-align: center;\r\n            white-space: nowrap;\r\n            vertical-align: middle;\r\n            user-select: none;\r\n            border: 1px solid transparent;\r\n            padding: 0.375rem 0.75rem;\r\n            font-size: 14px;\r\n            line-height: 1.5;\r\n            border-radius: 1px;\r\n            transition: all 0.15s ease-in-out;\r\n            outline: none;\r\n        }\r\n\r\n        .home-btn:hover {\r\n            background: rgb(211, 84, 16);\r\n        }\r\n\r\n        .image {\r\n            position: relative;\r\n        }\r\n\r\n        #cog1,\r\n        #cog2,\r\n        #cog3 {\r\n            animation: spin 4s linear infinite;\r\n            transform-origin: center;\r\n            transform-box: fill-box;\r\n            animation-delay: 0.6s;\r\n        }\r\n\r\n        #cog1 {\r\n            fill: darkgray;\r\n        }\r\n\r\n        #cog2 {\r\n            animation: spinback 4s linear infinite;\r\n            animation-delay: 0.6s;\r\n            fill: darkgray;\r\n        }\r\n\r\n        #cog3 {\r\n            fill: darkgray;\r\n        }\r\n\r\n        @-webkit-keyframes pop {\r\n            0% {\r\n                transform: scale(0);\r\n            }\r\n\r\n            90% {\r\n                transform: scale(1.1);\r\n            }\r\n\r\n            100% {\r\n                transform: scale(1);\r\n            }\r\n        }\r\n\r\n        @-webkit-keyframes spin {\r\n            100% {\r\n                transform: rotate(360deg);\r\n            }\r\n        }\r\n\r\n        @-webkit-keyframes spinback {\r\n            100% {\r\n                transform: rotate(-360deg);\r\n            }\r\n        }\r\n\r\n        .image-404 {\r\n            max-width: 100px;\r\n            width: 100%;\r\n        }\r\n\r\n        .logo {\r\n            padding-bottom: 2rem;\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n    <div class=\"content-wrapper\">\r\n        <div class=\"main-content\">\r\n            <h3 class=\" text-primary logo\">400</h3>\r\n            <div class=\"image\">\r\n                <div class=\"icon\">\r\n                    <svg id=\"cogs\" class=\"image-404\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                        xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 225 184\" xml:space=\"preserve\">\r\n                        <path id=\"cog3\" d=\"M163.1,48.3c-3.4,0.9-6.7,2.1-9.8,3.4c2.6,12-7.6,15.9-14.8,10.8c-2.8,1.9-4.8,4.6-5.7,8.3\r\n                              c7.6,5.1,3.8,18.7-6.5,17.5c0,3.9,0,7.8,0,11.7c11-1.1,13.4,12.5,6.5,18.4c1.9,2.8,2.8,6.7,6.5,7.6c6.5-5.5,16.5-0.5,13.9,10.8\r\n                              c3.1,1.2,6.4,2.5,9.8,3.4c1.4-9.5,15.7-9.5,17.2,0c3.4-0.9,6.7-2.1,9.8-3.4c-2.6-12,7.6-15.9,14.8-10.8c2.8-1.9,4.8-4.6,5.7-8.3\r\n                              c-7.6-5.1-3.8-18.7,6.5-17.5c0-3.9,0-7.8,0-11.7c-11,0.9-13.4-12.5-6.5-18.4c-1.9-2.8-2.6-6.7-6.5-7.4c-6.5,5.5-16.5,0.5-13.9-10.8\r\n                              c-3.1-1.2-6.4-2.5-9.8-3.4C177.9,58.2,165.5,58.2,163.1,48.3z M188.7,94.2c0,9.5-7.6,17.3-17,17.3c-9.5,0-17-7.8-17-17.3\r\n                              c0-9.5,7.6-17.3,17-17.3C181.1,76.7,188.7,84.5,188.7,94.2z\" />\r\n                        <path id=\"cog2\" d=\"M85.1,7.3c-3.4,0.9-6.7,2.1-9.8,3.4c2.6,12-7.6,15.9-14.8,10.8c-2.8,1.9-4.8,4.6-5.7,8.3\r\n                              c7.6,5.1,3.8,18.7-6.5,17.5c0,3.9,0,7.8,0,11.7c11-1.1,13.4,12.5,6.5,18.4c1.9,2.8,2.8,6.7,6.5,7.6c6.5-5.5,16.5-0.5,13.9,10.8\r\n                              c3.1,1.2,6.4,2.5,9.8,3.4c1.4-9.5,15.7-9.5,17.2,0c3.4-0.9,6.7-2.1,9.8-3.4c-2.6-12,7.6-15.9,14.8-10.8c2.8-1.9,4.8-4.6,5.7-8.3\r\n                              c-7.6-5.1-3.8-18.7,6.5-17.5c0-3.9,0-7.8,0-11.7c-11,0.9-13.4-12.5-6.5-18.4c-1.9-2.8-2.6-6.7-6.5-7.4c-6.5,5.5-16.5,0.5-13.9-10.8\r\n                              c-3.1-1.2-6.4-2.5-9.8-3.4C99.9,17.2,87.5,17.2,85.1,7.3z M110.7,53.2c0,9.5-7.6,17.3-17,17.3c-9.5,0-17-7.8-17-17.3\r\n                              s7.6-17.3,17-17.3C103.1,35.7,110.7,43.5,110.7,53.2z\" />\r\n                        <path id=\"cog1\" d=\"M46.1,86.3c-3.4,0.9-6.7,2.1-9.8,3.4c2.6,12-7.6,15.9-14.8,10.8c-2.8,1.9-4.8,4.6-5.7,8.3\r\n                              c7.6,5.1,3.8,18.7-6.5,17.5c0,3.9,0,7.8,0,11.7c11-1.1,13.4,12.5,6.5,18.4c1.9,2.8,2.8,6.7,6.5,7.6c6.5-5.5,16.5-0.5,13.9,10.8\r\n                              c3.1,1.2,6.4,2.5,9.8,3.4c1.4-9.5,15.7-9.5,17.2,0c3.4-0.9,6.7-2.1,9.8-3.4c-2.6-12,7.6-15.9,14.8-10.8c2.8-1.9,4.8-4.6,5.7-8.3\r\n                              c-7.6-5.1-3.8-18.7,6.5-17.5c0-3.9,0-7.8,0-11.7c-11,0.9-13.4-12.5-6.5-18.4c-1.9-2.8-2.6-6.7-6.5-7.4c-6.5,5.5-16.5,0.5-13.9-10.8\r\n                              c-3.1-1.2-6.4-2.5-9.8-3.4C60.9,96.2,48.5,96.2,46.1,86.3z M71.7,132.2c0,9.5-7.6,17.3-17,17.3c-9.5,0-17-7.8-17-17.3\r\n                              s7.6-17.3,17-17.3C64.1,114.7,71.7,122.5,71.7,132.2z\" />\r\n                    </svg>\r\n                </div>\r\n            </div>\r\n            <h3>Ch\u1EE9c n\u0103ng \u0111ang x\u00E2y d\u1EF1ng.</h3>\r\n            <p class=\"text-muted\">Vui l\u00F2ng tr\u1EDF l\u1EA1i sau !</p>\r\n            <button (click)=\"gotoHome()\" class=\"home-btn mt-2\">\r\n                V\u1EC0 TRANG CH\u1EE6\r\n            </button>\r\n        </div>\r\n    </div>\r\n</body>\r\n\r\n</html>"
                }] }
    ];
    /** @nocollapse */
    WorkingComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    return WorkingComponent;
}());
export { WorkingComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    WorkingComponent.prototype._router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDAwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3BhZ2VzLzQwMC80MDAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QztJQU1FLDBCQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUFJLENBQUM7Ozs7SUFFakMsbUNBQVE7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7O2dCQVZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsd3ZOQUFtQztpQkFDcEM7Ozs7Z0JBTFEsTUFBTTs7SUFhZix1QkFBQztDQUFBLEFBWEQsSUFXQztTQU5ZLGdCQUFnQjs7Ozs7O0lBQ2YsbUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3dvcmtpbmcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi80MDAuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV29ya2luZ0NvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICBwdWJsaWMgZ290b0hvbWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xyXG4gIH1cclxufVxyXG5cclxuIl19