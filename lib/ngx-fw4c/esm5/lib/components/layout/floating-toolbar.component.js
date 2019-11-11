/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
var FloatingToolbarComponent = /** @class */ (function () {
    function FloatingToolbarComponent() {
        this.show = false;
        this.widthProcess = 100;
    }
    /**
     * @return {?}
     */
    FloatingToolbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FloatingToolbarComponent.prototype.clickHide = /**
     * @return {?}
     */
    function () {
        this.show = false;
    };
    FloatingToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'floating-toolbar',
                    template: "<div class=\"show-progress-loading\" [class.active]=\"show\">\r\n  <i class=\"fa fa-close icon-top-close\" (click)=\"clickHide()\"></i>\r\n  <div class=\"list-file-loading\">\r\n    <div class=\"file-item\">\r\n      <div class=\"progress\">\r\n        <div class=\"progress-bar progress-bar-warning progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"60\"\r\n          aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width.%]=\"widthProcess\">\r\n          100%\r\n        </div>\r\n      </div>\r\n      <div class=\"file-name\">13775992_268327703538306_4149251120615904572_n.jpg</div>\r\n    </div>\r\n    <div class=\"file-item\">\r\n      <div class=\"progress\">\r\n        <div class=\"progress-bar progress-bar-warning progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"60\"\r\n          aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width.%]=\"widthProcess\">\r\n          100%\r\n        </div>\r\n      </div>\r\n      <div class=\"file-name\">13775992_268327703538306_4149251120615904572_n.jpg</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    animations: [
                        trigger('show', [
                            state('true', style({
                                bottom: '15px',
                            })),
                            state('false', style({
                                bottom: '-100%',
                            })),
                            transition('0 <=> 1', [
                                animate('400ms ease-in-out')
                            ])
                        ]),
                    ],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FloatingToolbarComponent.ctorParameters = function () { return []; };
    return FloatingToolbarComponent;
}());
export { FloatingToolbarComponent };
if (false) {
    /** @type {?} */
    FloatingToolbarComponent.prototype.show;
    /** @type {?} */
    FloatingToolbarComponent.prototype.widthProcess;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXRpbmctdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xheW91dC9mbG9hdGluZy10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpGO0lBMEJFO1FBRk8sU0FBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixpQkFBWSxHQUFXLEdBQUcsQ0FBQztJQUNsQixDQUFDOzs7O0lBRWpCLDJDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFDRCw0Q0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOztnQkFoQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDBrQ0FBZ0Q7b0JBRWhELFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsTUFBTSxFQUFFOzRCQUNkLEtBQUssQ0FBQyxNQUFNLEVBQ1YsS0FBSyxDQUFDO2dDQUNKLE1BQU0sRUFBRSxNQUFNOzZCQUNmLENBQUMsQ0FDSDs0QkFDRCxLQUFLLENBQUMsT0FBTyxFQUNYLEtBQUssQ0FBQztnQ0FDSixNQUFNLEVBQUUsT0FBTzs2QkFDaEIsQ0FBQyxDQUNIOzRCQUNELFVBQVUsQ0FBQyxTQUFTLEVBQUU7Z0NBQ3BCLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQzs2QkFDN0IsQ0FBQzt5QkFDSCxDQUFDO3FCQUNIOztpQkFDRjs7OztJQVlELCtCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0FWWSx3QkFBd0I7OztJQUNuQyx3Q0FBNkI7O0lBQzdCLGdEQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmbG9hdGluZy10b29sYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmxvYXRpbmctdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmxvYXRpbmctdG9vbGJhci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ3Nob3cnLCBbXHJcbiAgICAgIHN0YXRlKCd0cnVlJyxcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICBib3R0b206ICcxNXB4JyxcclxuICAgICAgICB9KVxyXG4gICAgICApLFxyXG4gICAgICBzdGF0ZSgnZmFsc2UnLFxyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIGJvdHRvbTogJy0xMDAlJyxcclxuICAgICAgICB9KVxyXG4gICAgICApLFxyXG4gICAgICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xyXG4gICAgICAgIGFuaW1hdGUoJzQwMG1zIGVhc2UtaW4tb3V0JylcclxuICAgICAgXSlcclxuICAgIF0pLFxyXG4gIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGbG9hdGluZ1Rvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBzaG93OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIHdpZHRoUHJvY2VzczogbnVtYmVyID0gMTAwO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuICBjbGlja0hpZGUoKSB7XHJcbiAgICB0aGlzLnNob3cgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19