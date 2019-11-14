/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ContentChild, ViewChild, ElementRef } from '@angular/core';
import { FormDirectorExtraItemDirective } from '../form';
import { ActionService } from '../services/action.service';
var TextboxComponent = /** @class */ (function () {
    function TextboxComponent(_actionService) {
        this._actionService = _actionService;
        this.type = 'text';
        this.placeholder = 'Điền thông tin';
        this.readonly = false;
        this.disabled = false;
        this.maxCharacters = 100;
        this.direction = 'vertical';
        this.alignVertical = true;
        this.emitNullOnDestroy = false;
        this.modelChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    TextboxComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.focus) {
            this._actionService.executeAsync((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var elements = document.getElementsByTagName('input');
                if (elements) {
                    for (var i = 0; i < elements.length; i++) {
                        if (elements[i].id == _this.item.id) {
                            elements[i].focus();
                            break;
                        }
                    }
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    TextboxComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.emitNullOnDestroy === true) {
            this.modelChange.emit(null);
        }
    };
    /**
     * @param {?} newValue
     * @return {?}
     */
    TextboxComponent.prototype.submitNumeric = /**
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        if (this.minNumber && newValue < this.minNumber) {
            this.modelChange.emit(this.minNumber);
            event.preventDefault();
            return;
        }
        if (this.maxNumber && newValue > this.maxNumber) {
            this.modelChange.emit(this.maxNumber);
            event.preventDefault();
            return;
        }
        this.modelChange.emit(newValue);
    };
    TextboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-textbox',
                    template: "<katana-form-director [title]=\"title\" [direction]=\"direction\" [alignVertical]=\"alignVertical\" [description]=\"description\"\r\n  [extraLabelItem]=\"extraLabelItem\">\r\n  <ng-container *ngIf=\"!readonly; else textLabel\">\r\n    <div [ngClass]=\"suffix ? 'input-group' : null\">\r\n      <ng-container [ngSwitch]=\"type\">\r\n        <input *ngSwitchCase=\"'text'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\" type=\"text\"\r\n          [placeholder]=\"placeholder\" [(ngModel)]=\"model\" (ngModelChange)=\"modelChange.emit($event)\"\r\n          [attr.maxlength]=\"maxCharacters\" [attr.validation-name]=\"validationName ? validationName : title\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n\r\n        <input *ngSwitchCase=\"'password'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"password\" [placeholder]=\"placeholder\"\r\n          [(ngModel)]=\"model\" (ngModelChange)=\"modelChange.emit($event)\" [attr.maxlength]=\"maxCharacters\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n\r\n        <input *ngSwitchCase=\"'number'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"number\" [placeholder]=\"placeholder\"\r\n          [(ngModel)]=\"model\" (ngModelChange)=\"modelChange.emit($event)\"\r\n          (focusout)=\"submitNumeric($event.target.value)\" [attr.name]=\"controlName\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n\r\n        <input *ngSwitchCase=\"'currency'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"text\" [placeholder]=\"placeholder\"\r\n          [(ngModel)]=\"model\" (ngModelChange)=\"submitNumeric($event)\" currencyMask [attr.maxlength]=\"maxCharacters\"\r\n          [attr.min]=\"minNumber\" [attr.max]=\"maxNumber\" [attr.name]=\"controlName\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n\r\n        <input *ngSwitchCase=\"'phone'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"text\" [(ngModel)]=\"model\"\r\n          (ngModelChange)=\"modelChange.emit($event)\" [attr.maxlength]=\"maxCharacters\" [attr.name]=\"controlName\"\r\n          mask=\"0000000000\" [attr.scope]=\"validationScope ? validationScope : null\" placeholder=\"V\u00ED d\u1EE5 097123456\" />\r\n\r\n        <input *ngSwitchCase=\"'email'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"email\" [placeholder]=\"placeholder\"\r\n          [(ngModel)]=\"model\" (ngModelChange)=\"modelChange.emit($event)\"\r\n          pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" [attr.maxlength]=\"maxCharacters\" [attr.name]=\"controlName\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n      </ng-container>\r\n      <ng-container *ngIf=\"suffix\">\r\n        <span class=\"input-group-addon custom-suffix\">{{suffix}}</span>\r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n  <ng-template #textLabel>\r\n    <ng-container [ngSwitch]=\"type\">\r\n      <label *ngSwitchCase=\"'text'\">{{model}}</label>\r\n      <label *ngSwitchCase=\"'currency'\">{{model | number: '1.0'}}</label>\r\n    </ng-container>\r\n  </ng-template>\r\n</katana-form-director>",
                    styles: [".custom-suffix{background-color:#e2e2e2;color:#545454;font-weight:500;line-height:32px;padding:0 8px;letter-spacing:1px;border-radius:0 3px 3px 0}"]
                }] }
    ];
    /** @nocollapse */
    TextboxComponent.ctorParameters = function () { return [
        { type: ActionService }
    ]; };
    TextboxComponent.propDecorators = {
        title: [{ type: Input }],
        model: [{ type: Input }],
        type: [{ type: Input }],
        name: [{ type: Input }],
        placeholder: [{ type: Input }],
        readonly: [{ type: Input }],
        disabled: [{ type: Input }],
        maxCharacters: [{ type: Input }],
        minNumber: [{ type: Input }],
        maxNumber: [{ type: Input }],
        validationName: [{ type: Input }],
        validationScope: [{ type: Input }],
        direction: [{ type: Input }],
        alignVertical: [{ type: Input }],
        controlName: [{ type: Input }],
        description: [{ type: Input }],
        emitNullOnDestroy: [{ type: Input }],
        suffix: [{ type: Input }],
        item: [{ type: Input }],
        focus: [{ type: Input }],
        modelChange: [{ type: Output }],
        extraLabelItem: [{ type: ContentChild, args: [FormDirectorExtraItemDirective, { static: true },] }],
        itemRef: [{ type: ViewChild, args: ['itemRef', { static: true },] }]
    };
    return TextboxComponent;
}());
export { TextboxComponent };
if (false) {
    /** @type {?} */
    TextboxComponent.prototype.title;
    /** @type {?} */
    TextboxComponent.prototype.model;
    /** @type {?} */
    TextboxComponent.prototype.type;
    /** @type {?} */
    TextboxComponent.prototype.name;
    /** @type {?} */
    TextboxComponent.prototype.placeholder;
    /** @type {?} */
    TextboxComponent.prototype.readonly;
    /** @type {?} */
    TextboxComponent.prototype.disabled;
    /** @type {?} */
    TextboxComponent.prototype.maxCharacters;
    /** @type {?} */
    TextboxComponent.prototype.minNumber;
    /** @type {?} */
    TextboxComponent.prototype.maxNumber;
    /** @type {?} */
    TextboxComponent.prototype.validationName;
    /** @type {?} */
    TextboxComponent.prototype.validationScope;
    /** @type {?} */
    TextboxComponent.prototype.direction;
    /** @type {?} */
    TextboxComponent.prototype.alignVertical;
    /** @type {?} */
    TextboxComponent.prototype.controlName;
    /** @type {?} */
    TextboxComponent.prototype.description;
    /** @type {?} */
    TextboxComponent.prototype.emitNullOnDestroy;
    /** @type {?} */
    TextboxComponent.prototype.suffix;
    /** @type {?} */
    TextboxComponent.prototype.item;
    /** @type {?} */
    TextboxComponent.prototype.focus;
    /** @type {?} */
    TextboxComponent.prototype.modelChange;
    /** @type {?} */
    TextboxComponent.prototype.extraLabelItem;
    /** @type {?} */
    TextboxComponent.prototype.itemRef;
    /**
     * @type {?}
     * @private
     */
    TextboxComponent.prototype._actionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC90ZXh0Ym94L3RleHRib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLFlBQVksRUFBK0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTNEO0lBK0JFLDBCQUNVLGNBQTZCO1FBQTdCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBdkJ2QixTQUFJLEdBQW9FLE1BQU0sQ0FBQztRQUUvRSxnQkFBVyxHQUFXLGdCQUFnQixDQUFDO1FBQ3ZDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixrQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUs1QixjQUFTLEdBQThCLFVBQVUsQ0FBQztRQUNsRCxrQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFJbEMsZ0JBQVcsR0FBa0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU03RSxDQUFDOzs7O0lBRUwsMENBQWU7OztJQUFmO1FBQUEsaUJBY0M7UUFiQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVk7OztZQUFDOztvQkFDM0IsUUFBUSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7Z0JBQ3JELElBQUksUUFBUSxFQUFFO29CQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUN4QyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7NEJBQ2xDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDcEIsTUFBTTt5QkFDUDtxQkFDRjtpQkFDRjtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsc0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssSUFBSSxFQUFFO1lBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7SUFFTSx3Q0FBYTs7OztJQUFwQixVQUFxQixRQUFnQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkFyRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDZ2SEFBdUM7O2lCQUV4Qzs7OztnQkFOUSxhQUFhOzs7d0JBU25CLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7OEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7aUNBQ0wsS0FBSztrQ0FDTCxLQUFLOzRCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7b0NBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxNQUFNO2lDQUNOLFlBQVksU0FBQyw4QkFBOEIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MEJBQzdELFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQXlDeEMsdUJBQUM7Q0FBQSxBQXRFRCxJQXNFQztTQWhFWSxnQkFBZ0I7OztJQUMzQixpQ0FBOEI7O0lBQzlCLGlDQUF1Qzs7SUFDdkMsZ0NBQStGOztJQUMvRixnQ0FBNkI7O0lBQzdCLHVDQUF1RDs7SUFDdkQsb0NBQTBDOztJQUMxQyxvQ0FBMEM7O0lBQzFDLHlDQUE0Qzs7SUFDNUMscUNBQWtDOztJQUNsQyxxQ0FBa0M7O0lBQ2xDLDBDQUF1Qzs7SUFDdkMsMkNBQXdDOztJQUN4QyxxQ0FBa0U7O0lBQ2xFLHlDQUE4Qzs7SUFDOUMsdUNBQW9DOztJQUNwQyx1Q0FBb0M7O0lBQ3BDLDZDQUFtRDs7SUFDbkQsa0NBQStCOztJQUMvQixnQ0FBMEI7O0lBQzFCLGlDQUErQjs7SUFDL0IsdUNBQWlGOztJQUNqRiwwQ0FBK0c7O0lBQy9HLG1DQUFtRTs7Ozs7SUFHakUsMENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgQ29udGVudENoaWxkLCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGRyZW4sIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtRGlyZWN0b3JFeHRyYUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuLi9mb3JtJztcclxuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FjdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2F0YW5hLXRleHRib3gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0Ym94LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90ZXh0Ym94LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0Ym94Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgbW9kZWw6IHN0cmluZyB8IG51bWJlcjtcclxuICBASW5wdXQoKSBwdWJsaWMgdHlwZTogJ3RleHQnIHwgJ2N1cnJlbmN5JyB8ICdwaG9uZScgfCAnZW1haWwnIHwgJ251bWJlcicgfCAncGFzc3dvcmQnID0gJ3RleHQnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnxJBp4buBbiB0aMO0bmcgdGluJztcclxuICBASW5wdXQoKSBwdWJsaWMgcmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBwdWJsaWMgbWF4Q2hhcmFjdGVyczogbnVtYmVyID0gMTAwO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtaW5OdW1iZXI6IG51bWJlcjtcclxuICBASW5wdXQoKSBwdWJsaWMgbWF4TnVtYmVyOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcHVibGljIHZhbGlkYXRpb25OYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIHZhbGlkYXRpb25TY29wZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkaXJlY3Rpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAndmVydGljYWwnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBhbGlnblZlcnRpY2FsOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgY29udHJvbE5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgZW1pdE51bGxPbkRlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBwdWJsaWMgc3VmZml4OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIGl0ZW06IGFueTtcclxuICBASW5wdXQoKSBwdWJsaWMgZm9jdXM6IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBtb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQENvbnRlbnRDaGlsZChGb3JtRGlyZWN0b3JFeHRyYUl0ZW1EaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIGV4dHJhTGFiZWxJdGVtOiBGb3JtRGlyZWN0b3JFeHRyYUl0ZW1EaXJlY3RpdmU7XHJcbiAgQFZpZXdDaGlsZCgnaXRlbVJlZicsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBpdGVtUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2FjdGlvblNlcnZpY2U6IEFjdGlvblNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5mb2N1cykge1xyXG4gICAgICB0aGlzLl9hY3Rpb25TZXJ2aWNlLmV4ZWN1dGVBc3luYygoKSA9PiB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRzKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50c1tpXS5pZCA9PSB0aGlzLml0ZW0uaWQpIHtcclxuICAgICAgICAgICAgICBlbGVtZW50c1tpXS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuZW1pdE51bGxPbkRlc3Ryb3kgPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN1Ym1pdE51bWVyaWMobmV3VmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMubWluTnVtYmVyICYmIG5ld1ZhbHVlIDwgdGhpcy5taW5OdW1iZXIpIHtcclxuICAgICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KHRoaXMubWluTnVtYmVyKTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubWF4TnVtYmVyICYmIG5ld1ZhbHVlID4gdGhpcy5tYXhOdW1iZXIpIHtcclxuICAgICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KHRoaXMubWF4TnVtYmVyKTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KG5ld1ZhbHVlKTtcclxuICB9XHJcbn1cclxuIl19