/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input } from '@angular/core';
import { trigger, state, style, AUTO_STYLE, transition, animate } from '@angular/animations';
import { PanelHeaderDirective } from './panel-header.directive';
var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
        this.includeBorder = true;
        this.expand = true;
    }
    /**
     * @return {?}
     */
    PanelComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.expand = !this.expand;
    };
    PanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-panel',
                    template: "<div class=\"katana-container-panel\" [ngClass]=\"{'katana-panel-container' : includeBorder}\">\r\n  <div class=\"katana-panel-wrapper\" *ngIf=\"title\" [ngClass]=\"{'mb-3':includeBorder === false}\">\r\n    <div class=\"d-flex katana-panel-header align-items-center\" [class.active]=\"expand\" (click)=\"toggle()\">\r\n      <div>\r\n        <i [ngClass]=\"icon\"></i>\r\n        <a href='javascript:;'>{{title}}</a>\r\n      </div>\r\n      <i class=\"m-l-5 icofont icofont-simple-down icon-expand\" [class.change]=\"expand\"></i>\r\n    </div>\r\n    <div class=\"right-place vertical\" *ngIf=\"panelHeader\">\r\n      <div class=\"d-none d-lg-block d-md-block\">\r\n        <ng-template *ngIf=\"panelHeader\" [ngTemplateOutlet]=\"panelHeader.template\"></ng-template>\r\n      </div>\r\n      <div class=\"btn-more-action d-md-none d-sm-block\">\r\n        <a href=\"#\"> <i class=\"icofont icofont-settings\"></i>L\u1EF1a ch\u1ECDn</a>\r\n        <div class=\"menu-action\">\r\n          <ng-template *ngIf=\"panelHeader\" [ngTemplateOutlet]=\"panelHeader.template\"></ng-template>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row panel-content no-gutters\" [@expand]=\"expand\">\r\n    <div class=\"col-sm-12\" [ngClass]=\"{'px-2 py-2': includeBorder}\">\r\n      <fieldset [disabled]=\"disabled\">\r\n        <ng-content></ng-content>\r\n      </fieldset>\r\n    </div>\r\n  </div>\r\n</div>",
                    animations: [
                        trigger('expand', [
                            state('false', style({
                                overflow: 'hidden',
                                height: '0px',
                            })),
                            state('true', style({
                                height: AUTO_STYLE,
                            })),
                            transition('0 <=> 1', [
                                animate('300ms ease-in-out')
                            ])
                        ]),
                    ],
                    styles: [".katana-form-container{padding-top:20px}.katana-panel-container{margin-bottom:10px}.none-space{padding-top:10px!important;margin-left:0!important;margin-right:0!important}.form-space{padding-top:10px!important;margin-left:-8px!important;margin-right:-8px!important}.panel-space{padding-top:0!important;margin-left:-8px!important;margin-right:-8px!important}.space-margin-none{margin:0!important}.katana-panel-wrapper{width:100%;position:relative}.katana-panel-wrapper .right-place{position:absolute;right:25px;top:-1px;z-index:1}.katana-panel-wrapper .right-place .btn-more-action{position:relative;display:inline-block}.katana-panel-wrapper .right-place .btn-more-action:hover .menu-action{display:block}.katana-panel-wrapper .right-place .btn-more-action a{text-transform:unset}.katana-panel-wrapper .right-place .btn-more-action .menu-action{position:absolute;display:none;z-index:99;right:0}.katana-panel-wrapper .right-place .btn-more-action .menu-action button{min-width:125px;text-align:left}.katana-panel-wrapper .katana-panel-header{cursor:pointer;padding:0 .5rem;height:40px;color:#212529;background:#fff;position:relative}.katana-panel-wrapper .katana-panel-header a{color:#338bf8;font-weight:500;text-decoration:none;text-transform:uppercase}.katana-panel-wrapper .katana-panel-header .icon-expand{position:absolute;right:5px;margin:0;font-size:1rem;display:block;transition:.3s;color:#6c757d;z-index:1}.katana-panel-wrapper .katana-panel-header .icon-expand.change{transform:rotate(180deg)}.katana-container-panel{margin-bottom:2.5rem}.katana-container-panel .panel-content{background-color:#fff}"]
                }] }
    ];
    PanelComponent.propDecorators = {
        panelHeader: [{ type: ContentChild, args: [PanelHeaderDirective, { static: true },] }],
        title: [{ type: Input }],
        icon: [{ type: Input }],
        includeBorder: [{ type: Input }],
        expand: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return PanelComponent;
}());
export { PanelComponent };
if (false) {
    /** @type {?} */
    PanelComponent.prototype.panelHeader;
    /** @type {?} */
    PanelComponent.prototype.title;
    /** @type {?} */
    PanelComponent.prototype.icon;
    /** @type {?} */
    PanelComponent.prototype.includeBorder;
    /** @type {?} */
    PanelComponent.prototype.expand;
    /** @type {?} */
    PanelComponent.prototype.disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvcGFuZWwvcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEU7SUFBQTtRQTRCa0Isa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsV0FBTSxHQUFZLElBQUksQ0FBQztJQU16QyxDQUFDOzs7O0lBSFEsK0JBQU07OztJQUFiO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQzs7Z0JBbENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsbTZDQUFxQztvQkFFckMsVUFBVSxFQUFFO3dCQUNWLE9BQU8sQ0FBQyxRQUFRLEVBQUU7NEJBQ2hCLEtBQUssQ0FBQyxPQUFPLEVBQ1gsS0FBSyxDQUFDO2dDQUNKLFFBQVEsRUFBRSxRQUFRO2dDQUNsQixNQUFNLEVBQUUsS0FBSzs2QkFDZCxDQUFDLENBQ0g7NEJBQ0QsS0FBSyxDQUFDLE1BQU0sRUFDVixLQUFLLENBQUM7Z0NBQ0osTUFBTSxFQUFFLFVBQVU7NkJBQ25CLENBQUMsQ0FDSDs0QkFDRCxVQUFVLENBQUMsU0FBUyxFQUFFO2dDQUNwQixPQUFPLENBQUMsbUJBQW1CLENBQUM7NkJBQzdCLENBQUM7eUJBQ0gsQ0FBQztxQkFDSDs7aUJBQ0Y7Ozs4QkFHRSxZQUFZLFNBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3dCQUNuRCxLQUFLO3VCQUNMLEtBQUs7Z0NBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7O0lBS1IscUJBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQVhZLGNBQWM7OztJQUN6QixxQ0FBK0Y7O0lBQy9GLCtCQUE4Qjs7SUFDOUIsOEJBQTZCOztJQUM3Qix1Q0FBOEM7O0lBQzlDLGdDQUF1Qzs7SUFDdkMsa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgQVVUT19TVFlMRSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBQYW5lbEhlYWRlckRpcmVjdGl2ZSB9IGZyb20gJy4vcGFuZWwtaGVhZGVyLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2thdGFuYS1wYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wYW5lbC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ2V4cGFuZCcsIFtcclxuICAgICAgc3RhdGUoJ2ZhbHNlJyxcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICBoZWlnaHQ6ICcwcHgnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICksXHJcbiAgICAgIHN0YXRlKCd0cnVlJyxcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICBoZWlnaHQ6IEFVVE9fU1RZTEUsXHJcbiAgICAgICAgfSlcclxuICAgICAgKSxcclxuICAgICAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcclxuICAgICAgICBhbmltYXRlKCczMDBtcyBlYXNlLWluLW91dCcpXHJcbiAgICAgIF0pXHJcbiAgICBdKSxcclxuICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGFuZWxDb21wb25lbnQge1xyXG4gIEBDb250ZW50Q2hpbGQoUGFuZWxIZWFkZXJEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBwYW5lbEhlYWRlcjogUGFuZWxIZWFkZXJEaXJlY3RpdmU7XHJcbiAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIGljb246IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgaW5jbHVkZUJvcmRlcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgcHVibGljIGV4cGFuZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgdG9nZ2xlKCkge1xyXG4gICAgdGhpcy5leHBhbmQgPSAhdGhpcy5leHBhbmQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==