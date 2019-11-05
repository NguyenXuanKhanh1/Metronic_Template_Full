/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { DefaultLayoutService } from './layout.service';
var DefaultCustomizerComponent = /** @class */ (function () {
    function DefaultCustomizerComponent(workspaceLayoutService) {
        this.workspaceLayoutService = workspaceLayoutService;
    }
    /**
     * @return {?}
     */
    DefaultCustomizerComponent.prototype.toggleRightbar = /**
     * @return {?}
     */
    function () {
        this.configOpenRightBar = this.configOpenRightBar === 'open' ? '' : 'open';
    };
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
    DefaultCustomizerComponent.ctorParameters = function () { return [
        { type: DefaultLayoutService }
    ]; };
    return DefaultCustomizerComponent;
}());
export { DefaultCustomizerComponent };
if (false) {
    /** @type {?} */
    DefaultCustomizerComponent.prototype.configOpenRightBar;
    /** @type {?} */
    DefaultCustomizerComponent.prototype.workspaceLayoutService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9taXplci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xheW91dC9jdXN0b21pemVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFeEQ7SUFxQkksb0NBQ1csc0JBQTRDO1FBQTVDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBc0I7SUFDbkQsQ0FBQzs7OztJQUVFLG1EQUFjOzs7SUFBckI7UUFDSSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDL0UsQ0FBQzs7Z0JBM0JKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5Qix1bkRBQXdDO29CQUV4QyxVQUFVLEVBQUU7d0JBQ1IsT0FBTyxDQUFDLG9CQUFvQixFQUFFOzRCQUMxQixVQUFVLENBQUMsUUFBUSxFQUFFO2dDQUNqQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0NBQ3JCLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs2QkFDdEQsQ0FBQzs0QkFDRixVQUFVLENBQUMsUUFBUSxFQUFFO2dDQUNqQixLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLENBQUM7Z0NBQ3BDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs2QkFDdEQsQ0FBQzt5QkFDTCxDQUFDO3FCQUNMO2lCQUNKOzs7O2dCQWxCUSxvQkFBb0I7O0lBOEI3QixpQ0FBQztDQUFBLEFBNUJELElBNEJDO1NBVlksMEJBQTBCOzs7SUFDbkMsd0RBQWtDOztJQUc5Qiw0REFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgRGVmYXVsdExheW91dFNlcnZpY2UgfSBmcm9tICcuL2xheW91dC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkZWZhdWx0LWN1c3RvbWl6ZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdjdXN0b21pemVyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogW10sXHJcbiAgICBhbmltYXRpb25zOiBbXHJcbiAgICAgICAgdHJpZ2dlcignZmFkZUluT3V0VHJhbnNsYXRlJywgW1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKCc0MDBtcyBlYXNlLWluLW91dCcsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSlcclxuICAgICAgICAgICAgXSksXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcclxuICAgICAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDApJyB9KSxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzQwMG1zIGVhc2UtaW4tb3V0Jywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgIF0pXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdEN1c3RvbWl6ZXJDb21wb25lbnQge1xyXG4gICAgcHVibGljIGNvbmZpZ09wZW5SaWdodEJhcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB3b3Jrc3BhY2VMYXlvdXRTZXJ2aWNlOiBEZWZhdWx0TGF5b3V0U2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlUmlnaHRiYXIoKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdPcGVuUmlnaHRCYXIgPSB0aGlzLmNvbmZpZ09wZW5SaWdodEJhciA9PT0gJ29wZW4nID8gJycgOiAnb3Blbic7XHJcbiAgICB9XHJcbn1cclxuIl19