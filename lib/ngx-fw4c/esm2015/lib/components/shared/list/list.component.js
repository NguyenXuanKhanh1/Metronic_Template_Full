/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListItemDirective } from './list-item.directive';
import { finalize, take } from 'rxjs/operators';
export class ListComponent {
    constructor() {
        this.eventSelect = true;
        this.direction = 'vertical';
        this.emptyListMessage = 'Không có giá trị nào trong danh sách';
        this.pageSize = 10;
        this.itemSelected = new EventEmitter();
        this.numberOfItemsFromEndBeforeFetchingMore = 3;
        this.searchItems = [];
        this.searchText$ = new BehaviorSubject(null);
        this.subscriptions = [];
        this.currentPage = 0;
        this.selectedItems = [];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    isSelected(item) {
        if (this.eventSelect) {
            return this.selectedItems.indexOf(item) >= 0;
        }
    }
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    selectItem(item, index) {
        if (this.eventSelect) {
            this.model.forEach((/**
             * @param {?} s
             * @return {?}
             */
            s => {
                s.selected = false;
            }));
            /** @type {?} */
            const indexObj = this.model.find((/**
             * @param {?} s
             * @return {?}
             */
            s => s.id === item.id));
            indexObj.selected = true;
        }
        this.itemSelected.emit(item);
    }
    /**
     * @return {?}
     */
    getSelectedItems() {
        return this.selectedItems;
    }
    /**
     * @param {?} lastIndex
     * @return {?}
     */
    scroll(lastIndex) {
        if (this.loading) {
            return;
        }
        if (lastIndex + this.numberOfItemsFromEndBeforeFetchingMore >= this.model.length) {
            this.fetchMore();
        }
    }
    /**
     * @return {?}
     */
    fetchMore() {
        this.currentPage++;
        this.loading = true;
        /** @type {?} */
        const fetchMoreSubsription = this.searchFunction(this.searchText$.getValue(), 0, this.currentPage, this.pageSize)
            .pipe(take(1), finalize((/**
         * @return {?}
         */
        () => this.loading = false)))
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.model = this.model.concat(response.items);
            this.loading = false;
        }));
        this.subscriptions.push(fetchMoreSubsription);
    }
}
ListComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-list',
                template: "<ng-container *ngIf=\"model && model.length > 0; else emptyList\">\r\n  <ul>\r\n    <li *ngFor=\"let item of model; let index = index\" class=\"p-2\"\r\n        [ngClass]=\"{'horizontal-list': direction === 'horizontal', 'selected': item.selected}\"\r\n        (click)=\"selectItem(item, index)\">\r\n      <ng-container [ngTemplateOutlet]=\"listItemTemplate.template\"\r\n                    [ngTemplateOutletContext]=\"{item: item, index: index}\"></ng-container>\r\n    </li>\r\n  </ul>\r\n</ng-container>\r\n<ng-template #emptyList>\r\n  <label>{{emptyListMessage}}</label>\r\n</ng-template>\r\n\r\n<div [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\">\r\n</div>",
                styles: ["ul{margin-bottom:0}ul li{cursor:auto;transition:.4s ease-in-out}ul li.selected{background-color:#ecf7fd}"]
            }] }
];
ListComponent.propDecorators = {
    listItemTemplate: [{ type: ContentChild, args: [ListItemDirective, { static: true },] }],
    eventSelect: [{ type: Input }],
    model: [{ type: Input }],
    direction: [{ type: Input }],
    emptyListMessage: [{ type: Input }],
    validationName: [{ type: Input }],
    validationScope: [{ type: Input }],
    pageSize: [{ type: Input }],
    searchFunction: [{ type: Input }],
    itemSelected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ListComponent.prototype.listItemTemplate;
    /** @type {?} */
    ListComponent.prototype.eventSelect;
    /** @type {?} */
    ListComponent.prototype.model;
    /** @type {?} */
    ListComponent.prototype.direction;
    /** @type {?} */
    ListComponent.prototype.emptyListMessage;
    /** @type {?} */
    ListComponent.prototype.validationName;
    /** @type {?} */
    ListComponent.prototype.validationScope;
    /** @type {?} */
    ListComponent.prototype.pageSize;
    /** @type {?} */
    ListComponent.prototype.searchFunction;
    /** @type {?} */
    ListComponent.prototype.itemSelected;
    /** @type {?} */
    ListComponent.prototype.loading;
    /** @type {?} */
    ListComponent.prototype.numberOfItemsFromEndBeforeFetchingMore;
    /** @type {?} */
    ListComponent.prototype.searchItems;
    /** @type {?} */
    ListComponent.prototype.searchText$;
    /**
     * @type {?}
     * @private
     */
    ListComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    ListComponent.prototype.currentPage;
    /**
     * @type {?}
     * @private
     */
    ListComponent.prototype.selectedItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9saXN0L2xpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQUUsZUFBZSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUWhELE1BQU0sT0FBTyxhQUFhO0lBTjFCO1FBUWtCLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGNBQVMsR0FBOEIsVUFBVSxDQUFDO1FBQ2xELHFCQUFnQixHQUFXLHNDQUFzQyxDQUFDO1FBR2xFLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFFckIsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvRCwyQ0FBc0MsR0FBVyxDQUFDLENBQUM7UUFDbkQsZ0JBQVcsR0FBVSxFQUFFLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUMvQyxrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFDbkMsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsa0JBQWEsR0FBVSxFQUFFLENBQUM7SUEyQ3BDLENBQUM7Ozs7O0lBekNRLFVBQVUsQ0FBQyxJQUFTO1FBQ3pCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7Ozs7OztJQUVNLFVBQVUsQ0FBQyxJQUFTLEVBQUUsS0FBVTtRQUNyQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JCLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLENBQUMsRUFBQyxDQUFDOztrQkFDRyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLEVBQUM7WUFDdkQsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRU0sZ0JBQWdCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxTQUFpQjtRQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLHNDQUFzQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2hGLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7SUFFTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOztjQUNkLG9CQUFvQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzlHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUMsQ0FBQzthQUNuRCxTQUFTOzs7O1FBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLEVBQUM7UUFDSixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQWpFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLDB0QkFBb0M7O2FBRXJDOzs7K0JBR0UsWUFBWSxTQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTswQkFDaEQsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7K0JBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzJCQUNMLE1BQU07Ozs7SUFUUCx5Q0FBOEY7O0lBQzlGLG9DQUE0Qzs7SUFDNUMsOEJBQTZCOztJQUM3QixrQ0FBa0U7O0lBQ2xFLHlDQUFrRjs7SUFDbEYsdUNBQWdDOztJQUNoQyx3Q0FBaUM7O0lBQ2pDLGlDQUFzQzs7SUFDdEMsdUNBQXlDOztJQUN6QyxxQ0FBc0U7O0lBQ3RFLGdDQUF3Qjs7SUFDeEIsK0RBQTBEOztJQUMxRCxvQ0FBK0I7O0lBQy9CLG9DQUF1RDs7Ozs7SUFDdkQsc0NBQTJDOzs7OztJQUMzQyxvQ0FBZ0M7Ozs7O0lBQ2hDLHNDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTGlzdEl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL2xpc3QtaXRlbS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2F0YW5hLWxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9saXN0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IHtcclxuICBAQ29udGVudENoaWxkKExpc3RJdGVtRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgbGlzdEl0ZW1UZW1wbGF0ZTogTGlzdEl0ZW1EaXJlY3RpdmU7XHJcbiAgQElucHV0KCkgcHVibGljIGV2ZW50U2VsZWN0OiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgbW9kZWw6IGFueVtdO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkaXJlY3Rpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAndmVydGljYWwnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBlbXB0eUxpc3RNZXNzYWdlOiBzdHJpbmcgPSAnS2jDtG5nIGPDsyBnacOhIHRy4buLIG7DoG8gdHJvbmcgZGFuaCBzw6FjaCc7XHJcbiAgQElucHV0KCkgdmFsaWRhdGlvbk5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSB2YWxpZGF0aW9uU2NvcGU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgcGFnZVNpemU6IG51bWJlciA9IDEwO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzZWFyY2hGdW5jdGlvbjogRnVuY3Rpb247XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBpdGVtU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuO1xyXG4gIHB1YmxpYyBudW1iZXJPZkl0ZW1zRnJvbUVuZEJlZm9yZUZldGNoaW5nTW9yZTogbnVtYmVyID0gMztcclxuICBwdWJsaWMgc2VhcmNoSXRlbXM6IGFueVtdID0gW107XHJcbiAgcHVibGljIHNlYXJjaFRleHQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuICBwcml2YXRlIGN1cnJlbnRQYWdlOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgc2VsZWN0ZWRJdGVtczogYW55W10gPSBbXTtcclxuXHJcbiAgcHVibGljIGlzU2VsZWN0ZWQoaXRlbTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5ldmVudFNlbGVjdCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoaXRlbSkgPj0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWxlY3RJdGVtKGl0ZW06IGFueSwgaW5kZXg6IGFueSkge1xyXG4gICAgaWYgKHRoaXMuZXZlbnRTZWxlY3QpIHtcclxuICAgICAgdGhpcy5tb2RlbC5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgIHMuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGluZGV4T2JqID0gdGhpcy5tb2RlbC5maW5kKHMgPT4gcy5pZCA9PT0gaXRlbS5pZCk7XHJcbiAgICAgIGluZGV4T2JqLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuaXRlbVNlbGVjdGVkLmVtaXQoaXRlbSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U2VsZWN0ZWRJdGVtcygpIHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2Nyb2xsKGxhc3RJbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5sb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChsYXN0SW5kZXggKyB0aGlzLm51bWJlck9mSXRlbXNGcm9tRW5kQmVmb3JlRmV0Y2hpbmdNb3JlID49IHRoaXMubW9kZWwubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuZmV0Y2hNb3JlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmV0Y2hNb3JlKCkge1xyXG4gICAgdGhpcy5jdXJyZW50UGFnZSsrO1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIGNvbnN0IGZldGNoTW9yZVN1YnNyaXB0aW9uID0gdGhpcy5zZWFyY2hGdW5jdGlvbih0aGlzLnNlYXJjaFRleHQkLmdldFZhbHVlKCksIDAsIHRoaXMuY3VycmVudFBhZ2UsIHRoaXMucGFnZVNpemUpXHJcbiAgICAgIC5waXBlKHRha2UoMSksIGZpbmFsaXplKCgpID0+IHRoaXMubG9hZGluZyA9IGZhbHNlKSlcclxuICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSB0aGlzLm1vZGVsLmNvbmNhdChyZXNwb25zZS5pdGVtcyk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goZmV0Y2hNb3JlU3Vic3JpcHRpb24pO1xyXG4gIH1cclxufVxyXG4iXX0=