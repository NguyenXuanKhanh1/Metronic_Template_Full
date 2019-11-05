/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ContentChild, ViewChild, ElementRef } from '@angular/core';
import { FormDirectorExtraItemDirective } from '../form';
import { ActionService } from '../services/action.service';
export class TextboxComponent {
    /**
     * @param {?} _actionService
     */
    constructor(_actionService) {
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
    ngAfterViewInit() {
        if (this.focus) {
            this._actionService.executeAsync((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                var elements = document.getElementsByTagName('input');
                if (elements) {
                    for (let i = 0; i < elements.length; i++) {
                        if (elements[i].id == this.item.id) {
                            elements[i].focus();
                            break;
                        }
                    }
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.emitNullOnDestroy === true) {
            this.modelChange.emit(null);
        }
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    submitNumeric(newValue) {
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
    }
}
TextboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'c-textbox',
                template: "<c-form-director [title]=\"title\" [direction]=\"direction\" [alignVertical]=\"alignVertical\" [description]=\"description\"\r\n  [extraLabelItem]=\"extraLabelItem\">\r\n  <ng-container *ngIf=\"!readonly; else textLabel\">\r\n    <div [ngClass]=\"suffix ? 'input-group' : null\">\r\n      <ng-container [ngSwitch]=\"type\">\r\n        <input *ngSwitchCase=\"'text'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\" type=\"text\"\r\n          [placeholder]=\"placeholder\" [(ngModel)]=\"model\" (ngModelChange)=\"modelChange.emit($event)\"\r\n          [attr.maxlength]=\"maxCharacters\" [attr.validation-name]=\"validationName ? validationName : title\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n\r\n        <input *ngSwitchCase=\"'password'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"password\" [placeholder]=\"placeholder\"\r\n          [(ngModel)]=\"model\" (ngModelChange)=\"modelChange.emit($event)\" [attr.maxlength]=\"maxCharacters\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n\r\n        <input *ngSwitchCase=\"'number'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"number\" [placeholder]=\"placeholder\"\r\n          [(ngModel)]=\"model\" (ngModelChange)=\"modelChange.emit($event)\"\r\n          (focusout)=\"submitNumeric($event.target.value)\" [attr.name]=\"controlName\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n\r\n        <input *ngSwitchCase=\"'currency'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"text\" [placeholder]=\"placeholder\"\r\n          [(ngModel)]=\"model\" (ngModelChange)=\"submitNumeric($event)\" currencyMask [attr.maxlength]=\"maxCharacters\"\r\n          [attr.min]=\"minNumber\" [attr.max]=\"maxNumber\" [attr.name]=\"controlName\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n\r\n        <input *ngSwitchCase=\"'phone'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"text\" [(ngModel)]=\"model\"\r\n          (ngModelChange)=\"modelChange.emit($event)\" [attr.maxlength]=\"maxCharacters\" [attr.name]=\"controlName\"\r\n          mask=\"0000000000\" [attr.scope]=\"validationScope ? validationScope : null\" placeholder=\"V\u00ED d\u1EE5 097123456\" />\r\n\r\n        <input *ngSwitchCase=\"'email'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"email\" [placeholder]=\"placeholder\"\r\n          [(ngModel)]=\"model\" (ngModelChange)=\"modelChange.emit($event)\"\r\n          pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" [attr.maxlength]=\"maxCharacters\" [attr.name]=\"controlName\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n      </ng-container>\r\n      <ng-container *ngIf=\"suffix\">\r\n        <span class=\"input-group-addon custom-suffix\">{{suffix}}</span>\r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n  <ng-template #textLabel>\r\n    <ng-container [ngSwitch]=\"type\">\r\n      <label *ngSwitchCase=\"'text'\">{{model}}</label>\r\n      <label *ngSwitchCase=\"'currency'\">{{model | number: '1.0'}}</label>\r\n    </ng-container>\r\n  </ng-template>\r\n</c-form-director>",
                styles: [".custom-suffix{background-color:#e2e2e2;color:#545454;font-weight:500;line-height:32px;padding:0 8px;letter-spacing:1px;border-radius:0 3px 3px 0}"]
            }] }
];
/** @nocollapse */
TextboxComponent.ctorParameters = () => [
    { type: ActionService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC90ZXh0Ym94L3RleHRib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLFlBQVksRUFBK0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBUTNELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUF5QjNCLFlBQ1UsY0FBNkI7UUFBN0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUF2QnZCLFNBQUksR0FBb0UsTUFBTSxDQUFDO1FBRS9FLGdCQUFXLEdBQVcsZ0JBQWdCLENBQUM7UUFDdkMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGtCQUFhLEdBQVcsR0FBRyxDQUFDO1FBSzVCLGNBQVMsR0FBOEIsVUFBVSxDQUFDO1FBQ2xELGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBRzlCLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUlsQyxnQkFBVyxHQUFrQyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTTdFLENBQUM7Ozs7SUFFTCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZOzs7WUFBQyxHQUFHLEVBQUU7O29CQUNoQyxRQUFRLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztnQkFDckQsSUFBSSxRQUFRLEVBQUU7b0JBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ3hDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTs0QkFDbEMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUNwQixNQUFNO3lCQUNQO3FCQUNGO2lCQUNGO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssSUFBSSxFQUFFO1lBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxhQUFhLENBQUMsUUFBZ0I7UUFDbkMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN0QyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN0QyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBckVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsbXZIQUF1Qzs7YUFFeEM7Ozs7WUFOUSxhQUFhOzs7b0JBU25CLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7Z0NBQ0wsS0FBSztxQkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSzswQkFDTCxNQUFNOzZCQUNOLFlBQVksU0FBQyw4QkFBOEIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7c0JBQzdELFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBdEJ0QyxpQ0FBOEI7O0lBQzlCLGlDQUF1Qzs7SUFDdkMsZ0NBQStGOztJQUMvRixnQ0FBNkI7O0lBQzdCLHVDQUF1RDs7SUFDdkQsb0NBQTBDOztJQUMxQyxvQ0FBMEM7O0lBQzFDLHlDQUE0Qzs7SUFDNUMscUNBQWtDOztJQUNsQyxxQ0FBa0M7O0lBQ2xDLDBDQUF1Qzs7SUFDdkMsMkNBQXdDOztJQUN4QyxxQ0FBa0U7O0lBQ2xFLHlDQUE4Qzs7SUFDOUMsdUNBQW9DOztJQUNwQyx1Q0FBb0M7O0lBQ3BDLDZDQUFtRDs7SUFDbkQsa0NBQStCOztJQUMvQixnQ0FBMEI7O0lBQzFCLGlDQUErQjs7SUFDL0IsdUNBQWlGOztJQUNqRiwwQ0FBK0c7O0lBQy9HLG1DQUFtRTs7Ozs7SUFHakUsMENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgQ29udGVudENoaWxkLCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGRyZW4sIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtRGlyZWN0b3JFeHRyYUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuLi9mb3JtJztcclxuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FjdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYy10ZXh0Ym94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dGJveC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dGJveC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dGJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIG1vZGVsOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KCkgcHVibGljIHR5cGU6ICd0ZXh0JyB8ICdjdXJyZW5jeScgfCAncGhvbmUnIHwgJ2VtYWlsJyB8ICdudW1iZXInIHwgJ3Bhc3N3b3JkJyA9ICd0ZXh0JztcclxuICBASW5wdXQoKSBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nID0gJ8SQaeG7gW4gdGjDtG5nIHRpbic7XHJcbiAgQElucHV0KCkgcHVibGljIHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcHVibGljIG1heENoYXJhY3RlcnM6IG51bWJlciA9IDEwMDtcclxuICBASW5wdXQoKSBwdWJsaWMgbWluTnVtYmVyOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcHVibGljIG1heE51bWJlcjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWxpZGF0aW9uTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWxpZGF0aW9uU2NvcGU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ3ZlcnRpY2FsJztcclxuICBASW5wdXQoKSBwdWJsaWMgYWxpZ25WZXJ0aWNhbDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgcHVibGljIGNvbnRyb2xOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIGVtaXROdWxsT25EZXN0cm95OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcHVibGljIHN1ZmZpeDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpdGVtOiBhbnk7XHJcbiAgQElucHV0KCkgcHVibGljIGZvY3VzOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgbW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBDb250ZW50Q2hpbGQoRm9ybURpcmVjdG9yRXh0cmFJdGVtRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBleHRyYUxhYmVsSXRlbTogRm9ybURpcmVjdG9yRXh0cmFJdGVtRGlyZWN0aXZlO1xyXG4gIEBWaWV3Q2hpbGQoJ2l0ZW1SZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgaXRlbVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9hY3Rpb25TZXJ2aWNlOiBBY3Rpb25TZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZm9jdXMpIHtcclxuICAgICAgdGhpcy5fYWN0aW9uU2VydmljZS5leGVjdXRlQXN5bmMoKCkgPT4ge1xyXG4gICAgICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xyXG4gICAgICAgIGlmIChlbGVtZW50cykge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudHNbaV0uaWQgPT0gdGhpcy5pdGVtLmlkKSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudHNbaV0uZm9jdXMoKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmVtaXROdWxsT25EZXN0cm95ID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdChudWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdWJtaXROdW1lcmljKG5ld1ZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLm1pbk51bWJlciAmJiBuZXdWYWx1ZSA8IHRoaXMubWluTnVtYmVyKSB7XHJcbiAgICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdCh0aGlzLm1pbk51bWJlcik7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1heE51bWJlciAmJiBuZXdWYWx1ZSA+IHRoaXMubWF4TnVtYmVyKSB7XHJcbiAgICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdCh0aGlzLm1heE51bWJlcik7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdChuZXdWYWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==