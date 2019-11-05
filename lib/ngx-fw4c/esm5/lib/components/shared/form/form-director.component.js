/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { FormDirectorExtraItemDirective } from './form-director-extra-item.directive';
var FormDirectorComponent = /** @class */ (function () {
    function FormDirectorComponent() {
        this.direction = 'vertical';
        this.alignVertical = true;
    }
    FormDirectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c-form-director',
                    template: "<div class=\"form-group\" [ngClass]=\"{'d-md-flex align-items-center': direction === 'horizontal'}\">\r\n  <div *ngIf=\"title\" [ngClass]=\"{'col-sm-4 p-0': direction === 'horizontal' && alignVertical}\">\r\n    <label [ngClass]=\"{'m-b-0' : direction === 'horizontal'}\">{{title}}\r\n      <span *ngIf=\"description\" class=\"c-tooltip\">\r\n        <span class=\"tooltiptext tooltip-top\">{{description}}</span>\r\n        <i class=\"icofont icofont-question-circle text-muted\"></i>\r\n      </span>\r\n    </label>\r\n    <label class=\"pull-right\" *ngIf=\"extraLabelItem\">\r\n      <ng-container [ngTemplateOutlet]=\"extraLabelItem.template\"></ng-container>\r\n    </label>\r\n  </div>\r\n  <div class=\"ml-auto\" [ngClass]=\"{'col-sm-8': direction === 'horizontal' && alignVertical}\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>",
                    styles: ["span{white-space:pre-wrap;word-break:break-word}.c-tooltip{position:relative;overflow:unset;display:inline-block}.c-tooltip span{white-space:pre-wrap;word-break:break-word}.c-tooltip.primary .tooltiptext{background-color:#368ee0;color:#fff}.c-tooltip.primary .tooltip-top{box-shadow:none}.c-tooltip.primary .tooltip-top:after{border-color:#368ee0 transparent transparent}.c-tooltip.info .tooltiptext{background-color:#1d9ce7;color:#fff}.c-tooltip.info .tooltip-top{box-shadow:none}.c-tooltip.info .tooltip-top:after{border-color:#1d9ce7 transparent transparent}.c-tooltip.dark .tooltiptext{background-color:#052d3e;color:#fff}.c-tooltip.dark .tooltip-top{box-shadow:none}.c-tooltip.dark .tooltip-top:after{border-color:#052d3e transparent transparent}.c-tooltip .tooltiptext{word-break:break-word;max-width:180px;min-width:120px;line-height:2;word-break:break-word;visibility:hidden;position:absolute;white-space:normal;background-color:#fff;color:#052d3e;text-align:center;padding:5px;border-radius:5px;z-index:1;opacity:0;transition:.3s;font-size:12px;font-weight:500;transform:translateY(20px)}.c-tooltip .tooltip-top{white-space:pre-wrap;word-break:break-word;box-shadow:1px 3px 9px rgba(0,0,0,.18);bottom:120%;left:50%;margin-left:-60px}.c-tooltip .tooltip-top:after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#fff transparent transparent}.c-tooltip:hover .tooltiptext{visibility:visible;opacity:1;transform:translateY(0)}"]
                }] }
    ];
    FormDirectorComponent.propDecorators = {
        direction: [{ type: Input }],
        alignVertical: [{ type: Input }],
        title: [{ type: Input }],
        description: [{ type: Input }],
        extraLabelItem: [{ type: Input }]
    };
    return FormDirectorComponent;
}());
export { FormDirectorComponent };
if (false) {
    /** @type {?} */
    FormDirectorComponent.prototype.direction;
    /** @type {?} */
    FormDirectorComponent.prototype.alignVertical;
    /** @type {?} */
    FormDirectorComponent.prototype.title;
    /** @type {?} */
    FormDirectorComponent.prototype.description;
    /** @type {?} */
    FormDirectorComponent.prototype.extraLabelItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1kaXJlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9mb3JtL2Zvcm0tZGlyZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUV0RjtJQUFBO1FBT29CLGNBQVMsR0FBOEIsVUFBVSxDQUFDO1FBQ2xELGtCQUFhLEdBQVksSUFBSSxDQUFDO0lBSWxELENBQUM7O2dCQVpBLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiw2MUJBQTZDOztpQkFFaEQ7Ozs0QkFHSSxLQUFLO2dDQUNMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLO2lDQUNMLEtBQUs7O0lBQ1YsNEJBQUM7Q0FBQSxBQVpELElBWUM7U0FOWSxxQkFBcUI7OztJQUM5QiwwQ0FBa0U7O0lBQ2xFLDhDQUE4Qzs7SUFDOUMsc0NBQThCOztJQUM5Qiw0Q0FBb0M7O0lBQ3BDLCtDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtRGlyZWN0b3JFeHRyYUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm0tZGlyZWN0b3ItZXh0cmEtaXRlbS5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2MtZm9ybS1kaXJlY3RvcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZm9ybS1kaXJlY3Rvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9mb3JtLWRpcmVjdG9yLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybURpcmVjdG9yQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXJlY3Rpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAndmVydGljYWwnO1xyXG4gICAgQElucHV0KCkgcHVibGljIGFsaWduVmVydGljYWw6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGV4dHJhTGFiZWxJdGVtOiBGb3JtRGlyZWN0b3JFeHRyYUl0ZW1EaXJlY3RpdmU7XHJcbn0iXX0=