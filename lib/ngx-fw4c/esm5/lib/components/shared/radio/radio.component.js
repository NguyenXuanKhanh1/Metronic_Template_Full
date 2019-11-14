/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ContentChildren, QueryList, Input, Output, EventEmitter, Directive } from '@angular/core';
import { RadioItemComponent } from './radio-item/radio-item.component';
var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        this.modelChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    RadioComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.items.forEach((/**
         * @param {?} s
         * @param {?} index
         * @return {?}
         */
        function (s, index) {
            s.groupIndex = index;
            if (_this.model !== null && _this.model !== undefined && _this.model === s.value) {
                s.checked = true;
            }
            s.registerSelectedCallback((/**
             * @param {?} componentRef
             * @return {?}
             */
            function (componentRef) {
                _this.items.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    item.checked = false;
                }));
                /** @type {?} */
                var selectedItem = _this.items.find((/**
                 * @param {?} y
                 * @return {?}
                 */
                function (y) { return y.groupIndex === componentRef.groupIndex; }));
                selectedItem.checked = true;
                _this.model = componentRef.value;
                _this.modelChange.emit(componentRef.value);
            }));
        }));
    };
    /**
     * @return {?}
     */
    RadioComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.modelChange.emit(null);
    };
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
    return RadioComponent;
}());
export { RadioComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvcmFkaW8vcmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLGVBQWUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hJLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXZFO0lBQUE7UUFNcUIsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQTRCekUsQ0FBQzs7OztJQXJCRywyQ0FBa0I7OztJQUFsQjtRQUFBLGlCQWdCQztRQWZHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7Ozs7UUFBQyxVQUFDLENBQUMsRUFBRSxLQUFLO1lBQ3hCLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksS0FBSSxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUMzRSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNwQjtZQUNELENBQUMsQ0FBQyx3QkFBd0I7Ozs7WUFBQyxVQUFDLFlBQWdDO2dCQUN4RCxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQSxJQUFJO29CQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDekIsQ0FBQyxFQUFDLENBQUM7O29CQUNDLFlBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7Ozs7Z0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsVUFBVSxLQUFLLFlBQVksQ0FBQyxVQUFVLEVBQXhDLENBQXdDLEVBQUM7Z0JBQ2pGLFlBQVksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixLQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QyxDQUFDLEVBQUMsQ0FBQztRQUNQLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQWpDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtpQkFDakM7Ozt3QkFHSSxlQUFlLFNBQUMsa0JBQWtCOzhCQUNsQyxNQUFNO3dCQUNOLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO2tDQUNMLEtBQUs7aUNBQ0wsS0FBSzs7SUF1QlYscUJBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQTlCWSxjQUFjOzs7SUFDdkIsK0JBQWlGOztJQUNqRixxQ0FBcUU7O0lBQ3JFLCtCQUEyQjs7SUFDM0IsK0JBQThCOztJQUM5QixrQ0FBa0M7O0lBQ2xDLHlDQUF3Qzs7SUFDeEMsd0NBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmFkaW9JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9yYWRpby1pdGVtL3JhZGlvLWl0ZW0uY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdrYXRhbmEtcmFkaW8taXRlbXMnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgQENvbnRlbnRDaGlsZHJlbihSYWRpb0l0ZW1Db21wb25lbnQpIHB1YmxpYyBpdGVtczogUXVlcnlMaXN0PFJhZGlvSXRlbUNvbXBvbmVudD47XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBtb2RlbDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdmFsaWRhdGlvbk5hbWU6IHN0cmluZztcclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKChzLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBzLmdyb3VwSW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwgIT09IG51bGwgJiYgdGhpcy5tb2RlbCAhPT0gdW5kZWZpbmVkICYmIHRoaXMubW9kZWwgPT09IHMudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHMuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcy5yZWdpc3RlclNlbGVjdGVkQ2FsbGJhY2soKGNvbXBvbmVudFJlZjogUmFkaW9JdGVtQ29tcG9uZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEl0ZW0gPSB0aGlzLml0ZW1zLmZpbmQoeSA9PiB5Lmdyb3VwSW5kZXggPT09IGNvbXBvbmVudFJlZi5ncm91cEluZGV4KTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwgPSBjb21wb25lbnRSZWYudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQoY29tcG9uZW50UmVmLnZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KG51bGwpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==