/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.customModelChange = new EventEmitter();
        this.direction = 'horizontal';
        this.emitNullOnDestroy = false;
        this.modelChange = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.customModel) {
            /** @type {?} */
            var value = changes.customModel.currentValue;
            this.model = this.customModelTransformation(value);
            this.customModelChange.emit(value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CheckboxComponent.prototype.onModelChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.customModelTransformation) {
            /** @type {?} */
            var newValue = this.customModelTransformation(value);
            this.customModelChange.emit(newValue);
        }
        else {
            this.modelChange.emit(value);
        }
    };
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.emitNullOnDestroy === true)
            this.modelChange.emit(null);
    };
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c-checkbox',
                    template: "<div *ngIf=\"direction === 'horizontal'\" class=\"horizontal-site\">\r\n  <div class=\"form-group\">\r\n    <div class=\"checkbox-fade vertical\">\r\n      <label>\r\n        <input type=\"checkbox\" [ngModel]=\"model\" (ngModelChange)=\"onModelChange($event)\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\">\r\n        <span class=\"cr\" [ngClass]=\"{'disabled': disabled}\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n        <span class=\"text-checkbox\" *ngIf=\"title\">{{title}}</span>\r\n      </label>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"direction === 'vertical'\" class=\"vertical-site\">\r\n  <div class=\"form-group\">\r\n    <label *ngIf=\"title\">{{title}}</label>\r\n    <div class=\"switch vertical\">\r\n      <label class=\"f-bold\">\r\n        <input type=\"checkbox\" [ngModel]=\"model\" (ngModelChange)=\"onModelChange($event)\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\" />\r\n        <span class=\"lever\"></span>\r\n      </label>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: ["@charset \"UTF-8\";.border-checkbox-section .border-checkbox-group{display:inline-block}.border-checkbox-section .border-checkbox-group .border-checkbox:checked+.border-checkbox-label:after{-webkit-animation:.5s linear check;animation:.5s linear check;opacity:1;border-color:#368ee0}.border-checkbox-section .border-checkbox-group .border-checkbox:checked+.border-checkbox-label:after .border-checkbox-label:before{border-color:#eee}.border-checkbox-section .border-checkbox-group .border-checkbox-label{position:relative;display:inline-block;cursor:pointer;height:20px;line-height:20px;padding-left:30px;margin-right:15px}.border-checkbox-section .border-checkbox-group .border-checkbox-label:after{content:\"\";display:block;width:6px;height:12px;opacity:.9;border-right:2px solid #eee;border-top:2px solid #eee;position:absolute;left:4px;top:11px;transform:scaleX(-1) rotate(135deg);transform-origin:left top}.border-checkbox-section .border-checkbox-group .border-checkbox-label:before{content:\"\";display:block;border:2px solid #368ee0;width:20px;height:20px;position:absolute;left:0}.border-checkbox-section .border-checkbox{display:none}.border-checkbox-section .border-checkbox:disabled~.border-checkbox-label{cursor:no-drop;color:#ccc}@-webkit-keyframes check{0%{height:0;width:0}25%{height:0;width:6px}50%{height:12px;width:6px}}@keyframes check{0%{height:0;width:0}25%{height:0;width:6px}50%{height:12px;width:6px}}.border-checkbox-section .border-checkbox-group-primary .border-checkbox-label:before{border:1px solid #368ee0}.border-checkbox-section .border-checkbox-group-primary .border-checkbox:checked+.border-checkbox-label:after{border-color:#368ee0}.border-checkbox-section .border-checkbox-group-warning .border-checkbox-label:before{border:1px solid #ff9800}.border-checkbox-section .border-checkbox-group-warning .border-checkbox:checked+.border-checkbox-label:after{border-color:#ff9800}.border-checkbox-section .border-checkbox-group-default .border-checkbox-label:before{border:1px solid #f2f2f2}.border-checkbox-section .border-checkbox-group-default .border-checkbox:checked+.border-checkbox-label:after{border-color:#f2f2f2}.border-checkbox-section .border-checkbox-group-danger .border-checkbox-label:before{border:1px solid #d61e00}.border-checkbox-section .border-checkbox-group-danger .border-checkbox:checked+.border-checkbox-label:after{border-color:#d61e00}.border-checkbox-section .border-checkbox-group-success .border-checkbox-label:before{border:1px solid #6fbb35}.border-checkbox-section .border-checkbox-group-success .border-checkbox:checked+.border-checkbox-label:after{border-color:#6fbb35}.border-checkbox-section .border-checkbox-group-inverse .border-checkbox-label:before{border:1px solid #052d3e}.border-checkbox-section .border-checkbox-group-inverse .border-checkbox:checked+.border-checkbox-label:after{border-color:#052d3e}.border-checkbox-section .border-checkbox-group-info .border-checkbox-label:before{border:1px solid #1d9ce7}.border-checkbox-section .border-checkbox-group-info .border-checkbox:checked+.border-checkbox-label:after{border-color:#1d9ce7}.checkbox-fade,.checkbox-zoom{display:inline-block}.checkbox-fade label input[type=checkbox]:checked+.cr>.cr-icon,.checkbox-fade label input[type=radio]:checked+.cr>.cr-icon,.checkbox-zoom label input[type=checkbox]:checked+.cr>.cr-icon,.checkbox-zoom label input[type=radio]:checked+.cr>.cr-icon{transform:scale(1) rotateZ(0);opacity:1}.checkbox-fade label input[type=checkbox]+.cr>.cr-icon,.checkbox-fade label input[type=radio]+.cr>.cr-icon,.checkbox-zoom label input[type=checkbox]+.cr>.cr-icon,.checkbox-zoom label input[type=radio]+.cr>.cr-icon{transform:scale(3) rotateZ(-20deg);opacity:0;transition:.3s ease-in}.checkbox-fade label:after,.checkbox-zoom label:after{content:\"\";display:table;clear:both}.checkbox-fade.fade-in-disable .cr,.checkbox-fade.fade-in-disable label,.checkbox-zoom.fade-in-disable .cr,.checkbox-zoom.fade-in-disable label{color:#ccc;cursor:no-drop}.checkbox-fade .cr,.checkbox-zoom .cr{border-radius:0;border:1px solid #87837b!important;box-shadow:1px 1px 1px rgba(0,0,0,.14);cursor:pointer;display:inline-block;float:left;height:16px;margin-right:.5em;position:relative;width:16px}.checkbox-fade .cr .cr-icon,.checkbox-zoom .cr .cr-icon{color:#368ee0;font-size:.8em;left:0;line-height:0;position:absolute;right:0;text-align:center;top:50%}.checkbox-fade .cr.disabled,.checkbox-zoom .cr.disabled{opacity:.65;background-color:#eee;cursor:not-allowed}.checkbox-fade label{line-height:18px;font-weight:500}.checkbox-fade label input[type=checkbox],.checkbox-fade label input[type=radio]{display:none}.checkbox-fade label input[type=checkbox]:checked+.cr>.cr-icon,.checkbox-fade label input[type=radio]:checked+.cr>.cr-icon{transform:scale(1) rotateZ(0);opacity:1}.checkbox-fade label input[type=checkbox]+.cr>.cr-icon,.checkbox-fade label input[type=radio]+.cr>.cr-icon{transform:scale(3) rotateZ(-20deg);opacity:0;transition:.3s ease-in}.checkbox-zoom label{line-height:20px}.checkbox-zoom label input[type=checkbox],.checkbox-zoom label input[type=radio]{display:none}.checkbox-zoom label input[type=checkbox]:checked+.cr>.cr-icon,.checkbox-zoom label input[type=radio]:checked+.cr>.cr-icon{transform:scale3d(1,1,1) translate3d(0,0,0);opacity:1}.checkbox-zoom label input[type=checkbox]+.cr>.cr-icon,.checkbox-zoom label input[type=radio]+.cr>.cr-icon{transform:scale3d(.2,.2,.1) translate3d(0,0,0);opacity:0;transition:.3s ease-in}.checkbox-fade.fade-in-primary .cr,.checkbox-fade.zoom-primary .cr,.checkbox-zoom.fade-in-primary .cr,.checkbox-zoom.zoom-primary .cr{border:1px solid #368ee0}.checkbox-fade.fade-in-primary .cr .cr-icon,.checkbox-fade.zoom-primary .cr .cr-icon,.checkbox-zoom.fade-in-primary .cr .cr-icon,.checkbox-zoom.zoom-primary .cr .cr-icon{color:#368ee0}.checkbox-fade.fade-in-warning .cr,.checkbox-fade.zoom-warning .cr,.checkbox-zoom.fade-in-warning .cr,.checkbox-zoom.zoom-warning .cr{border:1px solid #ff9800}.checkbox-fade.fade-in-warning .cr .cr-icon,.checkbox-fade.zoom-warning .cr .cr-icon,.checkbox-zoom.fade-in-warning .cr .cr-icon,.checkbox-zoom.zoom-warning .cr .cr-icon{color:#ff9800}.checkbox-fade.fade-in-default .cr,.checkbox-fade.zoom-default .cr,.checkbox-zoom.fade-in-default .cr,.checkbox-zoom.zoom-default .cr{border:1px solid #f2f2f2}.checkbox-fade.fade-in-default .cr .cr-icon,.checkbox-fade.zoom-default .cr .cr-icon,.checkbox-zoom.fade-in-default .cr .cr-icon,.checkbox-zoom.zoom-default .cr .cr-icon{color:#f2f2f2}.checkbox-fade.fade-in-danger .cr,.checkbox-fade.zoom-danger .cr,.checkbox-zoom.fade-in-danger .cr,.checkbox-zoom.zoom-danger .cr{border:1px solid #d61e00}.checkbox-fade.fade-in-danger .cr .cr-icon,.checkbox-fade.zoom-danger .cr .cr-icon,.checkbox-zoom.fade-in-danger .cr .cr-icon,.checkbox-zoom.zoom-danger .cr .cr-icon{color:#d61e00}.checkbox-fade.fade-in-success .cr,.checkbox-fade.zoom-success .cr,.checkbox-zoom.fade-in-success .cr,.checkbox-zoom.zoom-success .cr{border:1px solid #6fbb35}.checkbox-fade.fade-in-success .cr .cr-icon,.checkbox-fade.zoom-success .cr .cr-icon,.checkbox-zoom.fade-in-success .cr .cr-icon,.checkbox-zoom.zoom-success .cr .cr-icon{color:#6fbb35}.checkbox-fade.fade-in-inverse .cr,.checkbox-fade.zoom-inverse .cr,.checkbox-zoom.fade-in-inverse .cr,.checkbox-zoom.zoom-inverse .cr{border:1px solid #052d3e}.checkbox-fade.fade-in-inverse .cr .cr-icon,.checkbox-fade.zoom-inverse .cr .cr-icon,.checkbox-zoom.fade-in-inverse .cr .cr-icon,.checkbox-zoom.zoom-inverse .cr .cr-icon{color:#052d3e}.checkbox-fade.fade-in-info .cr,.checkbox-fade.zoom-info .cr,.checkbox-zoom.fade-in-info .cr,.checkbox-zoom.zoom-info .cr{border:1px solid #1d9ce7}.checkbox-fade.fade-in-info .cr .cr-icon,.checkbox-fade.zoom-info .cr .cr-icon,.checkbox-zoom.fade-in-info .cr .cr-icon,.checkbox-zoom.zoom-info .cr .cr-icon{color:#1d9ce7}.checkbox-color{display:inline-block;margin-right:20px;cursor:pointer}.checkbox-color label{display:inline-block;position:relative;padding-left:10px;line-height:20px}.checkbox-color label::before{content:\"\";display:inline-block;position:absolute;top:0;width:20px;height:20px;left:0;right:0;text-align:center;margin-left:-20px;border:1px solid #ccc;border-radius:0;background-color:#fff;transition:border .15s ease-in-out,color .15s ease-in-out}.checkbox-color label::after{display:inline-block;position:absolute;width:16px;height:16px;left:-1px;top:0;margin-left:-17px;padding-left:3px;padding-top:1px;font-size:11px;color:#fff}.checkbox-color input[type=checkbox]{opacity:0}.checkbox-color input[type=checkbox]:focus+label::before{outline:dotted thin;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}.checkbox-color input[type=checkbox]:checked+label::after{font-family:FontAwesome;content:\"\uF00C\"}.checkbox-color input[type=checkbox]:disabled+label{opacity:.65}.checkbox-color input[type=checkbox]:disabled+label::before{background-color:#eee;cursor:not-allowed}.checkbox-color.checkbox-circle label::before{border-radius:50%}.checkbox-color.checkbox-inline{margin-top:0}.checkbox-danger input[type=checkbox]:checked+label::after,.checkbox-info input[type=checkbox]:checked+label::after,.checkbox-primary input[type=checkbox]:checked+label::after,.checkbox-success input[type=checkbox]:checked+label::after,.checkbox-warning input[type=checkbox]:checked+label::after{color:#fff}.checkbox-primary input[type=checkbox]:checked+label::before{border-color:#2196f3;background-color:#368ee0}.checkbox-warning input[type=checkbox]:checked+label::before{background-color:#ff9800}.checkbox-default input[type=checkbox]:checked+label::before{background-color:#f2f2f2}.checkbox-danger input[type=checkbox]:checked+label::before{background-color:#d61e00}.checkbox-success input[type=checkbox]:checked+label::before{background-color:#6fbb35}.checkbox-inverse input[type=checkbox]:checked+label::before{background-color:#052d3e}.checkbox-info input[type=checkbox]:checked+label::before{background-color:#1d9ce7}"]
                }] }
    ];
    CheckboxComponent.propDecorators = {
        model: [{ type: Input }],
        title: [{ type: Input }],
        customModel: [{ type: Input }],
        customModelChange: [{ type: Output }],
        customModelTransformation: [{ type: Input }],
        disabled: [{ type: Input }],
        direction: [{ type: Input }],
        validationName: [{ type: Input }],
        validationScope: [{ type: Input }],
        emitNullOnDestroy: [{ type: Input }],
        modelChange: [{ type: Output }]
    };
    return CheckboxComponent;
}());
export { CheckboxComponent };
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype.model;
    /** @type {?} */
    CheckboxComponent.prototype.title;
    /** @type {?} */
    CheckboxComponent.prototype.customModel;
    /** @type {?} */
    CheckboxComponent.prototype.customModelChange;
    /** @type {?} */
    CheckboxComponent.prototype.customModelTransformation;
    /** @type {?} */
    CheckboxComponent.prototype.disabled;
    /** @type {?} */
    CheckboxComponent.prototype.direction;
    /** @type {?} */
    CheckboxComponent.prototype.validationName;
    /** @type {?} */
    CheckboxComponent.prototype.validationScope;
    /** @type {?} */
    CheckboxComponent.prototype.emitNullOnDestroy;
    /** @type {?} */
    CheckboxComponent.prototype.modelChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUVqRztJQUFBO1FBVXFCLHNCQUFpQixHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzNELGNBQVMsR0FBOEIsWUFBWSxDQUFDO1FBRzNELHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUMzQixnQkFBVyxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBdUI3RSxDQUFDOzs7OztJQXJCRyx1Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDOUIsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFOztnQkFDZixLQUFLLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZO1lBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEM7SUFDTCxDQUFDOzs7OztJQUVNLHlDQUFhOzs7O0lBQXBCLFVBQXFCLEtBQWM7UUFDL0IsSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7O2dCQUMxQixRQUFRLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQztZQUN0RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztJQUNMLENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDSSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxJQUFJO1lBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O2dCQXZDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLGlzQ0FBd0M7O2lCQUUzQzs7O3dCQUdJLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLO29DQUNMLE1BQU07NENBQ04sS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7aUNBQ0wsS0FBSztrQ0FDTCxLQUFLO29DQUNMLEtBQUs7OEJBQ0wsTUFBTTs7SUF1Qlgsd0JBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQWxDWSxpQkFBaUI7OztJQUMxQixrQ0FBK0I7O0lBQy9CLGtDQUE4Qjs7SUFDOUIsd0NBQWlDOztJQUNqQyw4Q0FBMkU7O0lBQzNFLHNEQUErRDs7SUFDL0QscUNBQWtDOztJQUNsQyxzQ0FBb0U7O0lBQ3BFLDJDQUFnQzs7SUFDaEMsNENBQWlDOztJQUNqQyw4Q0FBNEM7O0lBQzVDLHdDQUF5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBTaW1wbGVDaGFuZ2VzLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjLWNoZWNrYm94JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jaGVja2JveC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gICAgQElucHV0KCkgcHVibGljIG1vZGVsOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY3VzdG9tTW9kZWw6IGFueTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY3VzdG9tTW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQElucHV0KCkgcHVibGljIGN1c3RvbU1vZGVsVHJhbnNmb3JtYXRpb246ICh2YWx1ZTogYW55KSA9PiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGlyZWN0aW9uOiAndmVydGljYWwnIHwgJ2hvcml6b250YWwnID0gJ2hvcml6b250YWwnO1xyXG4gICAgQElucHV0KCkgdmFsaWRhdGlvbk5hbWU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHZhbGlkYXRpb25TY29wZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgZW1pdE51bGxPbkRlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgbW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuY3VzdG9tTW9kZWwpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjaGFuZ2VzLmN1c3RvbU1vZGVsLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuY3VzdG9tTW9kZWxUcmFuc2Zvcm1hdGlvbih2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tTW9kZWxDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbk1vZGVsQ2hhbmdlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tTW9kZWxUcmFuc2Zvcm1hdGlvbikge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuY3VzdG9tTW9kZWxUcmFuc2Zvcm1hdGlvbih2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tTW9kZWxDaGFuZ2UuZW1pdChuZXdWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW1pdE51bGxPbkRlc3Ryb3kgPT09IHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdChudWxsKTtcclxuICAgIH1cclxufVxyXG4iXX0=