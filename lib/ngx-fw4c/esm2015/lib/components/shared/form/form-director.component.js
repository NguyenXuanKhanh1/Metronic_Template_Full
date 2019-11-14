/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { FormDirectorExtraItemDirective } from './form-director-extra-item.directive';
export class FormDirectorComponent {
    constructor() {
        this.direction = 'vertical';
        this.alignVertical = true;
    }
}
FormDirectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-form-director',
                template: "<div class=\"form-group\" [ngClass]=\"{'d-md-flex align-items-center': direction === 'horizontal'}\">\r\n  <div *ngIf=\"title\" [ngClass]=\"{'col-sm-4 p-0': direction === 'horizontal' && alignVertical}\">\r\n    <label [ngClass]=\"{'m-b-0' : direction === 'horizontal'}\">{{title}}\r\n      <span *ngIf=\"description\" class=\"katana-tooltip\">\r\n        <span class=\"tooltiptext tooltip-top\">{{description}}</span>\r\n        <i class=\"fa fa-question-circle text-muted\"></i>\r\n      </span>\r\n    </label>\r\n    <label class=\"pull-right\" *ngIf=\"extraLabelItem\">\r\n      <ng-container [ngTemplateOutlet]=\"extraLabelItem.template\"></ng-container>\r\n    </label>\r\n  </div>\r\n  <div class=\"ml-auto\" [ngClass]=\"{'col-sm-8': direction === 'horizontal' && alignVertical}\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>",
                styles: ["span{white-space:pre-wrap;word-break:break-word}.katana-tooltip{position:relative;overflow:unset;display:inline-block}.katana-tooltip span{white-space:pre-wrap;word-break:break-word}.katana-tooltip.primary .tooltiptext{background-color:#338bf8;color:#fff}.katana-tooltip.primary .tooltip-top{box-shadow:none}.katana-tooltip.primary .tooltip-top:after{border-color:#338bf8 transparent transparent}.katana-tooltip.info .tooltiptext{background-color:#1d9ce7;color:#fff}.katana-tooltip.info .tooltip-top{box-shadow:none}.katana-tooltip.info .tooltip-top:after{border-color:#1d9ce7 transparent transparent}.katana-tooltip.dark .tooltiptext{background-color:#052d3e;color:#fff}.katana-tooltip.dark .tooltip-top{box-shadow:none}.katana-tooltip.dark .tooltip-top:after{border-color:#052d3e transparent transparent}.katana-tooltip .tooltiptext{word-break:break-word;max-width:180px;min-width:120px;line-height:2;word-break:break-word;visibility:hidden;position:absolute;white-space:normal;background-color:#fff;color:#052d3e;text-align:center;padding:5px;border-radius:5px;z-index:1;opacity:0;transition:.3s;font-size:12px;font-weight:500;transform:translateY(20px)}.katana-tooltip .tooltip-top{white-space:pre-wrap;word-break:break-word;box-shadow:1px 3px 9px rgba(0,0,0,.18);bottom:120%;left:50%;margin-left:-60px}.katana-tooltip .tooltip-top:after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#fff transparent transparent}.katana-tooltip:hover .tooltiptext{visibility:visible;opacity:1;transform:translateY(0)}"]
            }] }
];
FormDirectorComponent.propDecorators = {
    direction: [{ type: Input }],
    alignVertical: [{ type: Input }],
    title: [{ type: Input }],
    description: [{ type: Input }],
    extraLabelItem: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1kaXJlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9mb3JtL2Zvcm0tZGlyZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQVF0RixNQUFNLE9BQU8scUJBQXFCO0lBTmxDO1FBT29CLGNBQVMsR0FBOEIsVUFBVSxDQUFDO1FBQ2xELGtCQUFhLEdBQVksSUFBSSxDQUFDO0lBSWxELENBQUM7OztZQVpBLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyx3MUJBQTZDOzthQUVoRDs7O3dCQUdJLEtBQUs7NEJBQ0wsS0FBSztvQkFDTCxLQUFLOzBCQUNMLEtBQUs7NkJBQ0wsS0FBSzs7OztJQUpOLDBDQUFrRTs7SUFDbEUsOENBQThDOztJQUM5QyxzQ0FBOEI7O0lBQzlCLDRDQUFvQzs7SUFDcEMsK0NBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1EaXJlY3RvckV4dHJhSXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vZm9ybS1kaXJlY3Rvci1leHRyYS1pdGVtLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAna2F0YW5hLWZvcm0tZGlyZWN0b3InLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0tZGlyZWN0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vZm9ybS1kaXJlY3Rvci5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1EaXJlY3RvckNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ3ZlcnRpY2FsJztcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBhbGlnblZlcnRpY2FsOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBleHRyYUxhYmVsSXRlbTogRm9ybURpcmVjdG9yRXh0cmFJdGVtRGlyZWN0aXZlO1xyXG59Il19