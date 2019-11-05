/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { DefaultLayoutService } from './layout.service';
export class DefaultCustomizerComponent {
    /**
     * @param {?} workspaceLayoutService
     */
    constructor(workspaceLayoutService) {
        this.workspaceLayoutService = workspaceLayoutService;
    }
    /**
     * @return {?}
     */
    toggleRightbar() {
        this.configOpenRightBar = this.configOpenRightBar === 'open' ? '' : 'open';
    }
}
DefaultCustomizerComponent.decorators = [
    { type: Component, args: [{
                selector: 'default-customizer',
                template: "<div id=\"styleSelector\" class=\"{{configOpenRightBar}}\">\r\n    <div class=\"selector-toggle\">\r\n        <a href=\"javascript:\" (click)=\"toggleRightbar()\"></a>\r\n    </div>\r\n    <ul>\r\n        <li>\r\n            <p class=\"selector-title main-title st-main-title\">Guru able Customizer</p>\r\n            <span class=\"text-muted\">Live customizer with tons of options</span>\r\n        </li>\r\n        <li>\r\n            <p class=\"selector-title\">Main layouts</p>\r\n        </li>\r\n        <li>\r\n            <div class=\"theme-color\">\r\n                <a href=\"javascript:\" (click)=\"workspaceLayoutService.setNavBarTheme('themelight1')\" navbar-theme=\"themelight1\">\r\n                    <span class=\"head\"></span>\r\n                    <span class=\"cont\"></span>\r\n                </a>\r\n                <a href=\"javascript:\" (click)=\"workspaceLayoutService.setNavBarTheme('theme1')\" navbar-theme=\"theme1\">\r\n                    <span class=\"head\"></span>\r\n                    <span class=\"cont\"></span>\r\n                </a>\r\n                <a href=\"javascript:\" (click)=\"workspaceLayoutService.setLayoutType('light')\" layout-type=\"light\">\r\n                    <span class=\"head\"></span>\r\n                    <span class=\"cont\"></span>\r\n                </a>\r\n                <a href=\"javascript:\" (click)=\"workspaceLayoutService.setLayoutType('dark')\" layout-type=\"dark\">\r\n                    <span class=\"head\"></span>\r\n                    <span class=\"cont\"></span>\r\n                </a>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>",
                animations: [
                    trigger('fadeInOutTranslate', [
                        transition(':enter', [
                            style({ opacity: 0 }),
                            animate('400ms ease-in-out', style({ opacity: 1 }))
                        ]),
                        transition(':leave', [
                            style({ transform: 'translate(0)' }),
                            animate('400ms ease-in-out', style({ opacity: 0 }))
                        ])
                    ])
                ]
            }] }
];
/** @nocollapse */
DefaultCustomizerComponent.ctorParameters = () => [
    { type: DefaultLayoutService }
];
if (false) {
    /** @type {?} */
    DefaultCustomizerComponent.prototype.configOpenRightBar;
    /** @type {?} */
    DefaultCustomizerComponent.prototype.workspaceLayoutService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9taXplci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xheW91dC9jdXN0b21pemVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFvQnhELE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFHbkMsWUFDVyxzQkFBNEM7UUFBNUMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFzQjtJQUNuRCxDQUFDOzs7O0lBRUUsY0FBYztRQUNqQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDL0UsQ0FBQzs7O1lBM0JKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qix1bkRBQXdDO2dCQUV4QyxVQUFVLEVBQUU7b0JBQ1IsT0FBTyxDQUFDLG9CQUFvQixFQUFFO3dCQUMxQixVQUFVLENBQUMsUUFBUSxFQUFFOzRCQUNqQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7NEJBQ3JCLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt5QkFDdEQsQ0FBQzt3QkFDRixVQUFVLENBQUMsUUFBUSxFQUFFOzRCQUNqQixLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLENBQUM7NEJBQ3BDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt5QkFDdEQsQ0FBQztxQkFDTCxDQUFDO2lCQUNMO2FBQ0o7Ozs7WUFsQlEsb0JBQW9COzs7O0lBcUJ6Qix3REFBa0M7O0lBRzlCLDREQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBEZWZhdWx0TGF5b3V0U2VydmljZSB9IGZyb20gJy4vbGF5b3V0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2RlZmF1bHQtY3VzdG9taXplcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2N1c3RvbWl6ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbXSxcclxuICAgIGFuaW1hdGlvbnM6IFtcclxuICAgICAgICB0cmlnZ2VyKCdmYWRlSW5PdXRUcmFuc2xhdGUnLCBbXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCB9KSxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzQwMG1zIGVhc2UtaW4tb3V0Jywgc3R5bGUoeyBvcGFjaXR5OiAxIH0pKVxyXG4gICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xyXG4gICAgICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCknIH0pLFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnNDAwbXMgZWFzZS1pbi1vdXQnLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgXSlcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q3VzdG9taXplckNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgY29uZmlnT3BlblJpZ2h0QmFyOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHdvcmtzcGFjZUxheW91dFNlcnZpY2U6IERlZmF1bHRMYXlvdXRTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVSaWdodGJhcigpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ09wZW5SaWdodEJhciA9IHRoaXMuY29uZmlnT3BlblJpZ2h0QmFyID09PSAnb3BlbicgPyAnJyA6ICdvcGVuJztcclxuICAgIH1cclxufVxyXG4iXX0=