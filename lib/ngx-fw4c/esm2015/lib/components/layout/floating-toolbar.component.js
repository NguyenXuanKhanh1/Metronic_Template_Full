/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
export class FloatingToolbarComponent {
    constructor() {
        this.show = false;
        this.widthProcess = 100;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    clickHide() {
        this.show = false;
    }
}
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
FloatingToolbarComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    FloatingToolbarComponent.prototype.show;
    /** @type {?} */
    FloatingToolbarComponent.prototype.widthProcess;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXRpbmctdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xheW91dC9mbG9hdGluZy10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBeUJqRixNQUFNLE9BQU8sd0JBQXdCO0lBR25DO1FBRk8sU0FBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixpQkFBWSxHQUFXLEdBQUcsQ0FBQztJQUNsQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7O0lBQ0QsU0FBUztRQUNQLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7OztZQWhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsMGtDQUFnRDtnQkFFaEQsVUFBVSxFQUFFO29CQUNWLE9BQU8sQ0FBQyxNQUFNLEVBQUU7d0JBQ2QsS0FBSyxDQUFDLE1BQU0sRUFDVixLQUFLLENBQUM7NEJBQ0osTUFBTSxFQUFFLE1BQU07eUJBQ2YsQ0FBQyxDQUNIO3dCQUNELEtBQUssQ0FBQyxPQUFPLEVBQ1gsS0FBSyxDQUFDOzRCQUNKLE1BQU0sRUFBRSxPQUFPO3lCQUNoQixDQUFDLENBQ0g7d0JBQ0QsVUFBVSxDQUFDLFNBQVMsRUFBRTs0QkFDcEIsT0FBTyxDQUFDLG1CQUFtQixDQUFDO3lCQUM3QixDQUFDO3FCQUNILENBQUM7aUJBQ0g7O2FBQ0Y7Ozs7OztJQUdDLHdDQUE2Qjs7SUFDN0IsZ0RBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Zsb2F0aW5nLXRvb2xiYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mbG9hdGluZy10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9mbG9hdGluZy10b29sYmFyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgdHJpZ2dlcignc2hvdycsIFtcclxuICAgICAgc3RhdGUoJ3RydWUnLFxyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIGJvdHRvbTogJzE1cHgnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICksXHJcbiAgICAgIHN0YXRlKCdmYWxzZScsXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgYm90dG9tOiAnLTEwMCUnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICksXHJcbiAgICAgIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXHJcbiAgICAgICAgYW5pbWF0ZSgnNDAwbXMgZWFzZS1pbi1vdXQnKVxyXG4gICAgICBdKVxyXG4gICAgXSksXHJcbiAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZsb2F0aW5nVG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIHNob3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgd2lkdGhQcm9jZXNzOiBudW1iZXIgPSAxMDA7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG4gIGNsaWNrSGlkZSgpIHtcclxuICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=