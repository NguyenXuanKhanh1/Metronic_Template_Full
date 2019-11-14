/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, TemplateRef, Input } from '@angular/core';
export class RadioItemComponent {
    constructor() {
        this.disabled = false;
        this.checked = false;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    changeItem($event) {
        $event.stopPropagation();
        if (this.selectedCallBack) {
            this.selectedCallBack(this);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    select($event) {
        $event.stopPropagation();
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    registerSelectedCallback(callback) {
        this.selectedCallBack = callback;
    }
}
RadioItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-radio-item',
                template: "<div class=\"form-radio d-inline-block\">\r\n    <div class=\"radio radio-inline\">\r\n        <label class=\"form-check-label\" [ngClass]=\"{'radio-disable': disabled}\">\r\n            <input class=\"form-check-input\" type=\"radio\" [attr.value]=\"value\" [disabled]=\"disabled\" [checked]=\"checked\"\r\n                   (change)=\"changeItem($event)\" (click)=\"select($event)\">\r\n            <i class=\"helper\"></i> {{label}}\r\n        </label>\r\n    </div>\r\n</div>",
                styles: [".form-radio{position:relative}.form-radio .form-help{position:absolute;width:100%}.form-radio label{position:relative;padding-left:1.5rem;text-align:left;color:#333;display:block;line-height:1.8;cursor:pointer}.form-radio input{width:auto;opacity:.00000001;position:absolute;left:0}.radio .helper{position:absolute;top:-.15rem;left:-.25rem;cursor:pointer;display:block;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#999}.radio .helper::after{transform:scale(0);background-color:#338bf8}.radio .helper::after,.radio .helper::before{content:\"\";position:absolute;left:0;top:3px;margin:.25rem;width:1rem;height:1rem;transition:transform .28s;border-radius:50%;border:.125rem solid #338bf8}.radio label:hover .helper{color:#338bf8}.radio input:checked~.helper::after{transform:scale(.5)}.radio input:checked~.helper::before{color:#338bf8}.radio.radiofill input:checked~.helper::after{transform:scale(1)}.radio.radiofill .helper::after{background-color:#338bf8}.radio.radio-outline input:checked~.helper::after{transform:scale(.6)}.radio.radio-outline .helper::after{background-color:#fff;border:.225rem solid #338bf8}.radio.radio-matrial input~.helper::after{background-color:#fff}.radio.radio-matrial input:checked~.helper::after{transform:scale(.5);box-shadow:0 1px 7px -1px rgba(0,0,0,.72)}.radio.radio-matrial input:checked~.helper::before{background-color:#338bf8}.radio.radio-disable{opacity:.7}.radio.radio-disable label{cursor:not-allowed}.radio-inline{display:inline-block;margin-right:20px}.radio.radiofill.radio-primary .helper::after{background-color:#338bf8;border-color:#338bf8}.radio.radiofill.radio-primary .helper::before{border-color:#338bf8}.radio.radio-outline.radio-primary .helper::after{background-color:#fff;border:.225rem solid #338bf8}.radio.radio-outline.radio-primary .helper::before{border-color:#338bf8}.radio.radio-matrial.radio-primary input~.helper::after{background-color:#fff;border-color:#fff}.radio.radio-matrial.radio-primary input~.helper::before{background-color:#338bf8;border-color:#338bf8}.radio.radiofill.radio-warning .helper::after{background-color:#ff9800;border-color:#ff9800}.radio.radiofill.radio-warning .helper::before{border-color:#ff9800}.radio.radio-outline.radio-warning .helper::after{background-color:#fff;border:.225rem solid #ff9800}.radio.radio-outline.radio-warning .helper::before{border-color:#ff9800}.radio.radio-matrial.radio-warning input~.helper::after{background-color:#fff;border-color:#fff}.radio.radio-matrial.radio-warning input~.helper::before{background-color:#ff9800;border-color:#ff9800}.radio.radiofill.radio-default .helper::after{background-color:#f2f2f2;border-color:#f2f2f2}.radio.radiofill.radio-default .helper::before{border-color:#f2f2f2}.radio.radio-outline.radio-default .helper::after{background-color:#fff;border:.225rem solid #f2f2f2}.radio.radio-outline.radio-default .helper::before{border-color:#f2f2f2}.radio.radio-matrial.radio-default input~.helper::after{background-color:#fff;border-color:#fff}.radio.radio-matrial.radio-default input~.helper::before{background-color:#f2f2f2;border-color:#f2f2f2}.radio.radiofill.radio-danger .helper::after{background-color:#d61e00;border-color:#d61e00}.radio.radiofill.radio-danger .helper::before{border-color:#d61e00}.radio.radio-outline.radio-danger .helper::after{background-color:#fff;border:.225rem solid #d61e00}.radio.radio-outline.radio-danger .helper::before{border-color:#d61e00}.radio.radio-matrial.radio-danger input~.helper::after{background-color:#fff;border-color:#fff}.radio.radio-matrial.radio-danger input~.helper::before{background-color:#d61e00;border-color:#d61e00}.radio.radiofill.radio-success .helper::after{background-color:#6fbb35;border-color:#6fbb35}.radio.radiofill.radio-success .helper::before{border-color:#6fbb35}.radio.radio-outline.radio-success .helper::after{background-color:#fff;border:.225rem solid #6fbb35}.radio.radio-outline.radio-success .helper::before{border-color:#6fbb35}.radio.radio-matrial.radio-success input~.helper::after{background-color:#fff;border-color:#fff}.radio.radio-matrial.radio-success input~.helper::before{background-color:#6fbb35;border-color:#6fbb35}.radio.radiofill.radio-inverse .helper::after{background-color:#052d3e;border-color:#052d3e}.radio.radiofill.radio-inverse .helper::before{border-color:#052d3e}.radio.radio-outline.radio-inverse .helper::after{background-color:#fff;border:.225rem solid #052d3e}.radio.radio-outline.radio-inverse .helper::before{border-color:#052d3e}.radio.radio-matrial.radio-inverse input~.helper::after{background-color:#fff;border-color:#fff}.radio.radio-matrial.radio-inverse input~.helper::before{background-color:#052d3e;border-color:#052d3e}.radio.radiofill.radio-info .helper::after{background-color:#1d9ce7;border-color:#1d9ce7}.radio.radiofill.radio-info .helper::before{border-color:#1d9ce7}.radio.radio-outline.radio-info .helper::after{background-color:#fff;border:.225rem solid #1d9ce7}.radio.radio-outline.radio-info .helper::before{border-color:#1d9ce7}.radio.radio-matrial.radio-info input~.helper::after{background-color:#fff;border-color:#fff}.radio.radio-matrial.radio-info input~.helper::before{background-color:#1d9ce7;border-color:#1d9ce7}"]
            }] }
];
RadioItemComponent.propDecorators = {
    template: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
    value: [{ type: Input }],
    label: [{ type: Input }],
    disabled: [{ type: Input }],
    checked: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RadioItemComponent.prototype.template;
    /** @type {?} */
    RadioItemComponent.prototype.value;
    /** @type {?} */
    RadioItemComponent.prototype.label;
    /** @type {?} */
    RadioItemComponent.prototype.disabled;
    /** @type {?} */
    RadioItemComponent.prototype.checked;
    /** @type {?} */
    RadioItemComponent.prototype.groupIndex;
    /**
     * @type {?}
     * @private
     */
    RadioItemComponent.prototype.selectedCallBack;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8taXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9yYWRpby9yYWRpby1pdGVtL3JhZGlvLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXpFLE1BQU0sT0FBTyxrQkFBa0I7SUFOL0I7UUFVa0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixZQUFPLEdBQVksS0FBSyxDQUFDO0lBa0IzQyxDQUFDOzs7OztJQWRRLFVBQVUsQ0FBQyxNQUFhO1FBQzdCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxNQUFNO1FBQ2xCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVNLHdCQUF3QixDQUFDLFFBQWtCO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7SUFDbkMsQ0FBQzs7O1lBNUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qiw0ZUFBMEM7O2FBRTNDOzs7dUJBR0UsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7b0JBQ3ZDLEtBQUs7b0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLEtBQUs7Ozs7SUFKTixzQ0FBNEU7O0lBQzVFLG1DQUEyQjs7SUFDM0IsbUNBQThCOztJQUM5QixzQ0FBMEM7O0lBQzFDLHFDQUF5Qzs7SUFDekMsd0NBQTBCOzs7OztJQUMxQiw4Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2thdGFuYS1yYWRpby1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmFkaW8taXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcmFkaW8taXRlbS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmFkaW9JdGVtQ29tcG9uZW50IHtcclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KCkgcHVibGljIHZhbHVlOiBhbnk7XHJcbiAgQElucHV0KCkgcHVibGljIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcHVibGljIGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgZ3JvdXBJbmRleDogbnVtYmVyO1xyXG4gIHByaXZhdGUgc2VsZWN0ZWRDYWxsQmFjazogRnVuY3Rpb247XHJcblxyXG4gIHB1YmxpYyBjaGFuZ2VJdGVtKCRldmVudDogRXZlbnQpIHtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkQ2FsbEJhY2spIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZENhbGxCYWNrKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlbGVjdCgkZXZlbnQpIHtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWdpc3RlclNlbGVjdGVkQ2FsbGJhY2soY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ2FsbEJhY2sgPSBjYWxsYmFjaztcclxuICB9XHJcbn1cclxuIl19