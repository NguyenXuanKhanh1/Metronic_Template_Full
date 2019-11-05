/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Output, EventEmitter, Input } from "@angular/core";
import { AggregatorService } from '../shared/services/aggregator.service';
import { KeyConst } from '../shared/constants/key.const';
import { ActionService } from '../shared/services/action.service';
export class DefaultBreadcrumbsComponent {
    /**
     * @param {?} aggregatorService
     * @param {?} actionService
     */
    constructor(aggregatorService, actionService) {
        this.aggregatorService = aggregatorService;
        this.actionService = actionService;
        this.change = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.aggregatorService.subscribe(KeyConst.MenuChanged, (/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            this.items = items;
        }));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectItem(item) {
        if (!this.items || this.items.length == 0)
            return;
        /** @type {?} */
        var index = this.items.findIndex((/**
         * @param {?} s
         * @return {?}
         */
        s => s.label == item.label));
        if (index == -1)
            return;
        /** @type {?} */
        var data = [];
        for (let i = 0; i < this.items.length; i++) {
            data.push(this.items[i]);
            if (this.items[i].label == item.label)
                break;
        }
        /** @type {?} */
        var child = this.actionService.retrieveChild(item.state, this.menuTabs);
        if (child) {
            data.push(child);
        }
        this.items = data;
        this.aggregatorService.publish(KeyConst.MenuChanged, this.items);
    }
}
DefaultBreadcrumbsComponent.decorators = [
    { type: Component, args: [{
                selector: 'default-breadcrumbs',
                template: "<ol class=\"breadcrumb\">\r\n    <li *ngFor=\"let breadcrumb of items; let i = index\" class=\"breadcrumb-item\">\r\n        <a *ngIf=\"i < items.length - 1\" (click)=\"selectItem(breadcrumb)\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label}}</a>\r\n        <a style=\"pointer-events: none;\" *ngIf=\"i == items.length - 1\">{{breadcrumb.label}}</a>\r\n    </li>\r\n</ol>",
                encapsulation: ViewEncapsulation.None,
                styles: ["@charset \"UTF-8\";.breadcrumb{display:flex;flex-wrap:wrap;padding:.15rem 0;list-style:none;margin-bottom:0}.breadcrumb-item a,.breadcrumb-item span{font-size:12px!important}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;padding-left:.5rem;color:#87837b;content:\"\uF105\";font:14px/1 FontAwesome}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#87837b}"]
            }] }
];
/** @nocollapse */
DefaultBreadcrumbsComponent.ctorParameters = () => [
    { type: AggregatorService },
    { type: ActionService }
];
DefaultBreadcrumbsComponent.propDecorators = {
    items: [{ type: Input }],
    menuTabs: [{ type: Input }],
    change: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DefaultBreadcrumbsComponent.prototype.items;
    /** @type {?} */
    DefaultBreadcrumbsComponent.prototype.menuTabs;
    /** @type {?} */
    DefaultBreadcrumbsComponent.prototype.change;
    /**
     * @type {?}
     * @protected
     */
    DefaultBreadcrumbsComponent.prototype.aggregatorService;
    /**
     * @type {?}
     * @protected
     */
    DefaultBreadcrumbsComponent.prototype.actionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9sYXlvdXQvYnJlYWRjcnVtYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFTbEUsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7SUFLcEMsWUFDYyxpQkFBb0MsRUFDcEMsYUFBNEI7UUFENUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUpoQyxXQUFNLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7SUFLOUQsQ0FBQzs7OztJQUVMLFFBQVE7UUFDSixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXOzs7O1FBQUUsQ0FBQyxLQUFtQixFQUFFLEVBQUU7WUFDM0UsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUVNLFVBQVUsQ0FBQyxJQUFnQjtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTzs7WUFDOUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFDO1FBQzVELElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztZQUFFLE9BQU87O1lBRXBCLElBQUksR0FBRyxFQUFFO1FBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUs7Z0JBQUUsTUFBTTtTQUNoRDs7WUFDRyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZFLElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7O1lBdkNKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixtWUFBMkM7Z0JBRTNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN4Qzs7OztZQVRRLGlCQUFpQjtZQUVqQixhQUFhOzs7b0JBVWpCLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxNQUFNOzs7O0lBRlAsNENBQW9DOztJQUNwQywrQ0FBb0M7O0lBQ3BDLDZDQUFrRTs7Ozs7SUFHOUQsd0RBQThDOzs7OztJQUM5QyxvREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJyZWFkY3J1bWIsIE1lbnVUYWIgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzL2Jhc2UubW9kZWwnO1xyXG5pbXBvcnQgeyBBZ2dyZWdhdG9yU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hZ2dyZWdhdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBLZXlDb25zdCB9IGZyb20gJy4uL3NoYXJlZC9jb25zdGFudHMva2V5LmNvbnN0JztcclxuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hY3Rpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGVmYXVsdC1icmVhZGNydW1icycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0QnJlYWRjcnVtYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgcHVibGljIGl0ZW1zOiBCcmVhZGNydW1iW107XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbWVudVRhYnM6IE1lbnVUYWJbXTtcclxuICAgIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxCcmVhZGNydW1iW10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RlY3RlZCBhZ2dyZWdhdG9yU2VydmljZTogQWdncmVnYXRvclNlcnZpY2UsXHJcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvblNlcnZpY2U6IEFjdGlvblNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hZ2dyZWdhdG9yU2VydmljZS5zdWJzY3JpYmUoS2V5Q29uc3QuTWVudUNoYW5nZWQsIChpdGVtczogQnJlYWRjcnVtYltdKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0SXRlbShpdGVtOiBCcmVhZGNydW1iKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLml0ZW1zIHx8IHRoaXMuaXRlbXMubGVuZ3RoID09IDApIHJldHVybjtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLml0ZW1zLmZpbmRJbmRleChzID0+IHMubGFiZWwgPT0gaXRlbS5sYWJlbCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKSByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRhdGEucHVzaCh0aGlzLml0ZW1zW2ldKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbaV0ubGFiZWwgPT0gaXRlbS5sYWJlbCkgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjaGlsZCA9IHRoaXMuYWN0aW9uU2VydmljZS5yZXRyaWV2ZUNoaWxkKGl0ZW0uc3RhdGUsIHRoaXMubWVudVRhYnMpO1xyXG4gICAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgICAgICBkYXRhLnB1c2goY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLml0ZW1zID0gZGF0YTtcclxuICAgICAgICB0aGlzLmFnZ3JlZ2F0b3JTZXJ2aWNlLnB1Ymxpc2goS2V5Q29uc3QuTWVudUNoYW5nZWQsIHRoaXMuaXRlbXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==