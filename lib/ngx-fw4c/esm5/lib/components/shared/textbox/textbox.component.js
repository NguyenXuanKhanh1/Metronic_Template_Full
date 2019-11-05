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
                    selector: 'c-textbox',
                    template: "<c-form-director [title]=\"title\" [direction]=\"direction\" [alignVertical]=\"alignVertical\" [description]=\"description\"\r\n  [extraLabelItem]=\"extraLabelItem\">\r\n  <ng-container *ngIf=\"!readonly; else textLabel\">\r\n    <div [ngClass]=\"suffix ? 'input-group' : null\">\r\n      <ng-container [ngSwitch]=\"type\">\r\n        <input *ngSwitchCase=\"'text'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\" type=\"text\"\r\n          [placeholder]=\"placeholder\" [(ngModel)]=\"model\" (ngModelChange)=\"modelChange.emit($event)\"\r\n          [attr.maxlength]=\"maxCharacters\" [attr.validation-name]=\"validationName ? validationName : title\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n\r\n        <input *ngSwitchCase=\"'password'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"password\" [placeholder]=\"placeholder\"\r\n          [(ngModel)]=\"model\" (ngModelChange)=\"modelChange.emit($event)\" [attr.maxlength]=\"maxCharacters\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n\r\n        <input *ngSwitchCase=\"'number'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"number\" [placeholder]=\"placeholder\"\r\n          [(ngModel)]=\"model\" (ngModelChange)=\"modelChange.emit($event)\"\r\n          (focusout)=\"submitNumeric($event.target.value)\" [attr.name]=\"controlName\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n\r\n        <input *ngSwitchCase=\"'currency'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"text\" [placeholder]=\"placeholder\"\r\n          [(ngModel)]=\"model\" (ngModelChange)=\"submitNumeric($event)\" currencyMask [attr.maxlength]=\"maxCharacters\"\r\n          [attr.min]=\"minNumber\" [attr.max]=\"maxNumber\" [attr.name]=\"controlName\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n\r\n        <input *ngSwitchCase=\"'phone'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"text\" [(ngModel)]=\"model\"\r\n          (ngModelChange)=\"modelChange.emit($event)\" [attr.maxlength]=\"maxCharacters\" [attr.name]=\"controlName\"\r\n          mask=\"0000000000\" [attr.scope]=\"validationScope ? validationScope : null\" placeholder=\"V\u00ED d\u1EE5 097123456\" />\r\n\r\n        <input *ngSwitchCase=\"'email'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"email\" [placeholder]=\"placeholder\"\r\n          [(ngModel)]=\"model\" (ngModelChange)=\"modelChange.emit($event)\"\r\n          pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" [attr.maxlength]=\"maxCharacters\" [attr.name]=\"controlName\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n      </ng-container>\r\n      <ng-container *ngIf=\"suffix\">\r\n        <span class=\"input-group-addon custom-suffix\">{{suffix}}</span>\r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n  <ng-template #textLabel>\r\n    <ng-container [ngSwitch]=\"type\">\r\n      <label *ngSwitchCase=\"'text'\">{{model}}</label>\r\n      <label *ngSwitchCase=\"'currency'\">{{model | number: '1.0'}}</label>\r\n    </ng-container>\r\n  </ng-template>\r\n</c-form-director>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC90ZXh0Ym94L3RleHRib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLFlBQVksRUFBK0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTNEO0lBK0JFLDBCQUNVLGNBQTZCO1FBQTdCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBdkJ2QixTQUFJLEdBQW9FLE1BQU0sQ0FBQztRQUUvRSxnQkFBVyxHQUFXLGdCQUFnQixDQUFDO1FBQ3ZDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixrQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUs1QixjQUFTLEdBQThCLFVBQVUsQ0FBQztRQUNsRCxrQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFJbEMsZ0JBQVcsR0FBa0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU03RSxDQUFDOzs7O0lBRUwsMENBQWU7OztJQUFmO1FBQUEsaUJBY0M7UUFiQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVk7OztZQUFDOztvQkFDM0IsUUFBUSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7Z0JBQ3JELElBQUksUUFBUSxFQUFFO29CQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUN4QyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7NEJBQ2xDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDcEIsTUFBTTt5QkFDUDtxQkFDRjtpQkFDRjtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsc0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssSUFBSSxFQUFFO1lBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7SUFFTSx3Q0FBYTs7OztJQUFwQixVQUFxQixRQUFnQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkFyRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixtdkhBQXVDOztpQkFFeEM7Ozs7Z0JBTlEsYUFBYTs7O3dCQVNuQixLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzhCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLO2lDQUNMLEtBQUs7a0NBQ0wsS0FBSzs0QkFDTCxLQUFLO2dDQUNMLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLO29DQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsTUFBTTtpQ0FDTixZQUFZLFNBQUMsOEJBQThCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzBCQUM3RCxTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUF5Q3hDLHVCQUFDO0NBQUEsQUF0RUQsSUFzRUM7U0FoRVksZ0JBQWdCOzs7SUFDM0IsaUNBQThCOztJQUM5QixpQ0FBdUM7O0lBQ3ZDLGdDQUErRjs7SUFDL0YsZ0NBQTZCOztJQUM3Qix1Q0FBdUQ7O0lBQ3ZELG9DQUEwQzs7SUFDMUMsb0NBQTBDOztJQUMxQyx5Q0FBNEM7O0lBQzVDLHFDQUFrQzs7SUFDbEMscUNBQWtDOztJQUNsQywwQ0FBdUM7O0lBQ3ZDLDJDQUF3Qzs7SUFDeEMscUNBQWtFOztJQUNsRSx5Q0FBOEM7O0lBQzlDLHVDQUFvQzs7SUFDcEMsdUNBQW9DOztJQUNwQyw2Q0FBbUQ7O0lBQ25ELGtDQUErQjs7SUFDL0IsZ0NBQTBCOztJQUMxQixpQ0FBK0I7O0lBQy9CLHVDQUFpRjs7SUFDakYsMENBQStHOztJQUMvRyxtQ0FBbUU7Ozs7O0lBR2pFLDBDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIENvbnRlbnRDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkcmVuLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybURpcmVjdG9yRXh0cmFJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi4vZm9ybSc7XHJcbmltcG9ydCB7IEFjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hY3Rpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2MtdGV4dGJveCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHRib3guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RleHRib3guY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtb2RlbDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0eXBlOiAndGV4dCcgfCAnY3VycmVuY3knIHwgJ3Bob25lJyB8ICdlbWFpbCcgfCAnbnVtYmVyJyB8ICdwYXNzd29yZCcgPSAndGV4dCc7XHJcbiAgQElucHV0KCkgcHVibGljIG5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICfEkGnhu4FuIHRow7RuZyB0aW4nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyByZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtYXhDaGFyYWN0ZXJzOiBudW1iZXIgPSAxMDA7XHJcbiAgQElucHV0KCkgcHVibGljIG1pbk51bWJlcjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtYXhOdW1iZXI6IG51bWJlcjtcclxuICBASW5wdXQoKSBwdWJsaWMgdmFsaWRhdGlvbk5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgdmFsaWRhdGlvblNjb3BlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIGRpcmVjdGlvbjogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICd2ZXJ0aWNhbCc7XHJcbiAgQElucHV0KCkgcHVibGljIGFsaWduVmVydGljYWw6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjb250cm9sTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBlbWl0TnVsbE9uRGVzdHJveTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzdWZmaXg6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgaXRlbTogYW55O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBmb2N1czogYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgcHVibGljIG1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAQ29udGVudENoaWxkKEZvcm1EaXJlY3RvckV4dHJhSXRlbURpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgZXh0cmFMYWJlbEl0ZW06IEZvcm1EaXJlY3RvckV4dHJhSXRlbURpcmVjdGl2ZTtcclxuICBAVmlld0NoaWxkKCdpdGVtUmVmJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIGl0ZW1SZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfYWN0aW9uU2VydmljZTogQWN0aW9uU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmZvY3VzKSB7XHJcbiAgICAgIHRoaXMuX2FjdGlvblNlcnZpY2UuZXhlY3V0ZUFzeW5jKCgpID0+IHtcclxuICAgICAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcclxuICAgICAgICBpZiAoZWxlbWVudHMpIHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRzW2ldLmlkID09IHRoaXMuaXRlbS5pZCkge1xyXG4gICAgICAgICAgICAgIGVsZW1lbnRzW2ldLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5lbWl0TnVsbE9uRGVzdHJveSA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQobnVsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3VibWl0TnVtZXJpYyhuZXdWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5taW5OdW1iZXIgJiYgbmV3VmFsdWUgPCB0aGlzLm1pbk51bWJlcikge1xyXG4gICAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQodGhpcy5taW5OdW1iZXIpO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5tYXhOdW1iZXIgJiYgbmV3VmFsdWUgPiB0aGlzLm1heE51bWJlcikge1xyXG4gICAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQodGhpcy5tYXhOdW1iZXIpO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQobmV3VmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=