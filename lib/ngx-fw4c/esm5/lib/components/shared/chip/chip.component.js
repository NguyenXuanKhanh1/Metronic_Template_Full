/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ChipComponent = /** @class */ (function () {
    function ChipComponent() {
        this.placeholder = 'Nhập thông tin';
        this.emitNullOnDestroy = false;
        this.modelChange = new EventEmitter();
        this.onAdd = new EventEmitter();
        this.onRemove = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ChipComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.emitNullOnDestroy === true)
            this.modelChange.emit([]);
    };
    ChipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-chips',
                    template: "<div class=\"form-group\">\r\n  <label *ngIf=\"title\">{{title}}</label>\r\n  <div [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\">\r\n    <tag-input [disable]=\"disabled\" [ngModel]=\"model\" (ngModelChange)=\"modelChange.emit($event)\" [modelAsStrings]=\"true\"\r\n               ngClass=\"tag-select\" theme=\"minimal\" [maxItems]=\"maxItems\" [placeholder]=\"placeholder\"\r\n               [secondaryPlaceholder]=\"placeholder\" (onAdd)=\"onAdd.emit($event)\" (onRemove)=\"onRemove.emit($event)\"\r\n               [addOnBlur]=\"true\">\r\n    </tag-input>\r\n  </div>\r\n</div>",
                    styles: [":host /deep/ tag-input{overflow:hidden}:host /deep/ tag-input .tag-wrapper div{text-overflow:initial}:host /deep/ tag-input .tag-select{border:1px solid #e6e6e6}:host /deep/ tag-input tag-input-form input{width:300%}"]
                }] }
    ];
    ChipComponent.propDecorators = {
        title: [{ type: Input }],
        model: [{ type: Input }],
        placeholder: [{ type: Input }],
        maxItems: [{ type: Input }],
        disabled: [{ type: Input }],
        validationName: [{ type: Input }],
        validationScope: [{ type: Input }],
        emitNullOnDestroy: [{ type: Input }],
        modelChange: [{ type: Output }],
        onAdd: [{ type: Output }],
        onRemove: [{ type: Output }]
    };
    return ChipComponent;
}());
export { ChipComponent };
if (false) {
    /** @type {?} */
    ChipComponent.prototype.title;
    /** @type {?} */
    ChipComponent.prototype.model;
    /** @type {?} */
    ChipComponent.prototype.placeholder;
    /** @type {?} */
    ChipComponent.prototype.maxItems;
    /** @type {?} */
    ChipComponent.prototype.disabled;
    /** @type {?} */
    ChipComponent.prototype.validationName;
    /** @type {?} */
    ChipComponent.prototype.validationScope;
    /** @type {?} */
    ChipComponent.prototype.emitNullOnDestroy;
    /** @type {?} */
    ChipComponent.prototype.modelChange;
    /** @type {?} */
    ChipComponent.prototype.onAdd;
    /** @type {?} */
    ChipComponent.prototype.onRemove;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9jaGlwL2NoaXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxGO0lBQUE7UUFTa0IsZ0JBQVcsR0FBVyxnQkFBZ0IsQ0FBQztRQUs5QyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFDM0IsZ0JBQVcsR0FBMkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6RCxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUMsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBTXBFLENBQUM7Ozs7SUFKQyxtQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxJQUFJO1lBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQXRCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLHVvQkFBb0M7O2lCQUVyQzs7O3dCQUdFLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSztpQ0FDTCxLQUFLO2tDQUNMLEtBQUs7b0NBQ0wsS0FBSzs4QkFDTCxNQUFNO3dCQUNOLE1BQU07MkJBQ04sTUFBTTs7SUFNVCxvQkFBQztDQUFBLEFBdkJELElBdUJDO1NBakJZLGFBQWE7OztJQUN4Qiw4QkFBOEI7O0lBQzlCLDhCQUFnQzs7SUFDaEMsb0NBQXVEOztJQUN2RCxpQ0FBaUM7O0lBQ2pDLGlDQUFrQzs7SUFDbEMsdUNBQXVDOztJQUN2Qyx3Q0FBd0M7O0lBQ3hDLDBDQUE0Qzs7SUFDNUMsb0NBQTBFOztJQUMxRSw4QkFBK0Q7O0lBQy9ELGlDQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2F0YW5hLWNoaXBzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hpcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2hpcC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2hpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIG1vZGVsOiBzdHJpbmdbXTtcclxuICBASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdOaOG6rXAgdGjDtG5nIHRpbic7XHJcbiAgQElucHV0KCkgcHVibGljIG1heEl0ZW1zOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWxpZGF0aW9uTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWxpZGF0aW9uU2NvcGU6IHN0cmluZztcclxuICBASW5wdXQoKSBlbWl0TnVsbE9uRGVzdHJveTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgbW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkFkZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvblJlbW92ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZW1pdE51bGxPbkRlc3Ryb3kgPT09IHRydWUpXHJcbiAgICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdChbXSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==