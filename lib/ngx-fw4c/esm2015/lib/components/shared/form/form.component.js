/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, Input } from '@angular/core';
import { FormItemDirective } from './form-item.directive';
export class FormComponent {
    constructor() {
        this.column = 4;
        this.smallWidth = 12;
        this.mediumWidth = 4;
        this.largeWidth = 3;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.column && changes.column.firstChange) {
            /** @type {?} */
            const column = changes.column.currentValue;
            switch (column) {
                case 1: {
                    this.smallWidth = 12;
                    this.mediumWidth = 12;
                    this.largeWidth = 12;
                    break;
                }
                case 2: {
                    this.smallWidth = 12;
                    this.mediumWidth = 12;
                    this.largeWidth = 6;
                    break;
                }
                case 3: {
                    this.smallWidth = 12;
                    this.mediumWidth = 6;
                    this.largeWidth = 4;
                    break;
                }
                case 4: {
                    this.smallWidth = 12;
                    this.mediumWidth = 4;
                    this.largeWidth = 3;
                    break;
                }
            }
        }
    }
}
FormComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-form',
                template: "<div class=\"row panel-space\">\r\n  <div class=\"col-sm-{{smallWidth}} col-md-{{mediumWidth}} col-lg-{{largeWidth}} px-2\" *ngFor=\"let i of formItems\">\r\n    <ng-template [ngTemplateOutlet]=\"i.template\"></ng-template>\r\n  </div>\r\n</div>",
                styles: [""]
            }] }
];
FormComponent.propDecorators = {
    formItems: [{ type: ContentChildren, args: [FormItemDirective,] }],
    column: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FormComponent.prototype.formItems;
    /** @type {?} */
    FormComponent.prototype.column;
    /** @type {?} */
    FormComponent.prototype.smallWidth;
    /** @type {?} */
    FormComponent.prototype.mediumWidth;
    /** @type {?} */
    FormComponent.prototype.largeWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9mb3JtL2Zvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGVBQWUsRUFBRSxTQUFTLEVBQWUsS0FBSyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVExRCxNQUFNLE9BQU8sYUFBYTtJQU4xQjtRQVFvQixXQUFNLEdBQWtCLENBQUMsQ0FBQztRQUNuQyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGVBQVUsR0FBVyxDQUFDLENBQUM7SUFvQ2xDLENBQUM7Ozs7SUFsQ0csUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTs7a0JBQ3hDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVk7WUFDMUMsUUFBUSxNQUFNLEVBQUU7Z0JBQ1osS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDSixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNyQixNQUFNO2lCQUNUO2dCQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ0osSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO29CQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsTUFBTTtpQkFDVDtnQkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztvQkFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07aUJBQ1Q7Z0JBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDSixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUNwQixNQUFNO2lCQUNUO2FBQ0o7U0FDSjtJQUNMLENBQUM7OztZQTlDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLGlRQUFvQzs7YUFFdkM7Ozt3QkFHSSxlQUFlLFNBQUMsaUJBQWlCO3FCQUNqQyxLQUFLOzs7O0lBRE4sa0NBQWtGOztJQUNsRiwrQkFBMEM7O0lBQzFDLG1DQUErQjs7SUFDL0Isb0NBQStCOztJQUMvQixtQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmLCBJbnB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtSXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vZm9ybS1pdGVtLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAna2F0YW5hLWZvcm0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vZm9ybS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBAQ29udGVudENoaWxkcmVuKEZvcm1JdGVtRGlyZWN0aXZlKSBwdWJsaWMgZm9ybUl0ZW1zOiBRdWVyeUxpc3Q8VGVtcGxhdGVSZWY8YW55Pj47XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY29sdW1uOiAxIHwgMiB8IDMgfCA0ID0gNDtcclxuICAgIHB1YmxpYyBzbWFsbFdpZHRoOiBudW1iZXIgPSAxMjtcclxuICAgIHB1YmxpYyBtZWRpdW1XaWR0aDogbnVtYmVyID0gNDtcclxuICAgIHB1YmxpYyBsYXJnZVdpZHRoOiBudW1iZXIgPSAzO1xyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2hhbmdlcy5jb2x1bW4gJiYgY2hhbmdlcy5jb2x1bW4uZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gY2hhbmdlcy5jb2x1bW4uY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGNvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbWFsbFdpZHRoID0gMTI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZWRpdW1XaWR0aCA9IDEyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFyZ2VXaWR0aCA9IDEyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbWFsbFdpZHRoID0gMTI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZWRpdW1XaWR0aCA9IDEyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFyZ2VXaWR0aCA9IDY7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNtYWxsV2lkdGggPSAxMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lZGl1bVdpZHRoID0gNjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhcmdlV2lkdGggPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbWFsbFdpZHRoID0gMTI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZWRpdW1XaWR0aCA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXJnZVdpZHRoID0gMztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=