/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ContentChildren, QueryList, Input, Output, EventEmitter, Directive } from '@angular/core';
import { RadioItemComponent } from './radio-item/radio-item.component';
export class RadioComponent {
    constructor() {
        this.modelChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.items.forEach((/**
         * @param {?} s
         * @param {?} index
         * @return {?}
         */
        (s, index) => {
            s.groupIndex = index;
            if (this.model !== null && this.model !== undefined && this.model === s.value) {
                s.checked = true;
            }
            s.registerSelectedCallback((/**
             * @param {?} componentRef
             * @return {?}
             */
            (componentRef) => {
                this.items.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
                    item.checked = false;
                }));
                /** @type {?} */
                let selectedItem = this.items.find((/**
                 * @param {?} y
                 * @return {?}
                 */
                y => y.groupIndex === componentRef.groupIndex));
                selectedItem.checked = true;
                this.model = componentRef.value;
                this.modelChange.emit(componentRef.value);
            }));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.modelChange.emit(null);
    }
}
RadioComponent.decorators = [
    { type: Directive, args: [{
                selector: 'katana-radio-items'
            },] }
];
RadioComponent.propDecorators = {
    items: [{ type: ContentChildren, args: [RadioItemComponent,] }],
    modelChange: [{ type: Output }],
    model: [{ type: Input }],
    label: [{ type: Input }],
    disabled: [{ type: Input }],
    formControlName: [{ type: Input }],
    validationName: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RadioComponent.prototype.items;
    /** @type {?} */
    RadioComponent.prototype.modelChange;
    /** @type {?} */
    RadioComponent.prototype.model;
    /** @type {?} */
    RadioComponent.prototype.label;
    /** @type {?} */
    RadioComponent.prototype.disabled;
    /** @type {?} */
    RadioComponent.prototype.formControlName;
    /** @type {?} */
    RadioComponent.prototype.validationName;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvcmFkaW8vcmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLGVBQWUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hJLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBTXZFLE1BQU0sT0FBTyxjQUFjO0lBSjNCO1FBTXFCLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUE0QnpFLENBQUM7Ozs7SUFyQkcsa0JBQWtCO1FBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzVCLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUMzRSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNwQjtZQUNELENBQUMsQ0FBQyx3QkFBd0I7Ozs7WUFBQyxDQUFDLFlBQWdDLEVBQUUsRUFBRTtnQkFDNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O2dCQUFDLElBQUksQ0FBQyxFQUFFO29CQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDekIsQ0FBQyxFQUFDLENBQUM7O29CQUNDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxLQUFLLFlBQVksQ0FBQyxVQUFVLEVBQUM7Z0JBQ2pGLFlBQVksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QyxDQUFDLEVBQUMsQ0FBQztRQUNQLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUFqQ0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7YUFDakM7OztvQkFHSSxlQUFlLFNBQUMsa0JBQWtCOzBCQUNsQyxNQUFNO29CQUNOLEtBQUs7b0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzs7OztJQU5OLCtCQUFpRjs7SUFDakYscUNBQXFFOztJQUNyRSwrQkFBMkI7O0lBQzNCLCtCQUE4Qjs7SUFDOUIsa0NBQWtDOztJQUNsQyx5Q0FBd0M7O0lBQ3hDLHdDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJhZGlvSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vcmFkaW8taXRlbS9yYWRpby1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAna2F0YW5hLXJhZGlvLWl0ZW1zJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJhZGlvQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuICAgIEBDb250ZW50Q2hpbGRyZW4oUmFkaW9JdGVtQ29tcG9uZW50KSBwdWJsaWMgaXRlbXM6IFF1ZXJ5TGlzdDxSYWRpb0l0ZW1Db21wb25lbnQ+O1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBtb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbW9kZWw6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgcHVibGljIGZvcm1Db250cm9sTmFtZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcHVibGljIHZhbGlkYXRpb25OYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgocywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcy5ncm91cEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsICE9PSBudWxsICYmIHRoaXMubW9kZWwgIT09IHVuZGVmaW5lZCAmJiB0aGlzLm1vZGVsID09PSBzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBzLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHMucmVnaXN0ZXJTZWxlY3RlZENhbGxiYWNrKChjb21wb25lbnRSZWY6IFJhZGlvSXRlbUNvbXBvbmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gdGhpcy5pdGVtcy5maW5kKHkgPT4geS5ncm91cEluZGV4ID09PSBjb21wb25lbnRSZWYuZ3JvdXBJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsID0gY29tcG9uZW50UmVmLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KGNvbXBvbmVudFJlZi52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdChudWxsKTtcclxuICAgIH1cclxufVxyXG4iXX0=