/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListItemDirective } from './list-item.directive';
import { finalize, take } from 'rxjs/operators';
var ListComponent = /** @class */ (function () {
    function ListComponent() {
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
    ListComponent.prototype.isSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.eventSelect) {
            return this.selectedItems.indexOf(item) >= 0;
        }
    };
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    ListComponent.prototype.selectItem = /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    function (item, index) {
        if (this.eventSelect) {
            this.model.forEach((/**
             * @param {?} s
             * @return {?}
             */
            function (s) {
                s.selected = false;
            }));
            /** @type {?} */
            var indexObj = this.model.find((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return s.id === item.id; }));
            indexObj.selected = true;
        }
        this.itemSelected.emit(item);
    };
    /**
     * @return {?}
     */
    ListComponent.prototype.getSelectedItems = /**
     * @return {?}
     */
    function () {
        return this.selectedItems;
    };
    /**
     * @param {?} lastIndex
     * @return {?}
     */
    ListComponent.prototype.scroll = /**
     * @param {?} lastIndex
     * @return {?}
     */
    function (lastIndex) {
        if (this.loading) {
            return;
        }
        if (lastIndex + this.numberOfItemsFromEndBeforeFetchingMore >= this.model.length) {
            this.fetchMore();
        }
    };
    /**
     * @return {?}
     */
    ListComponent.prototype.fetchMore = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.currentPage++;
        this.loading = true;
        /** @type {?} */
        var fetchMoreSubsription = this.searchFunction(this.searchText$.getValue(), 0, this.currentPage, this.pageSize)
            .pipe(take(1), finalize((/**
         * @return {?}
         */
        function () { return _this.loading = false; })))
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.model = _this.model.concat(response.items);
            _this.loading = false;
        }));
        this.subscriptions.push(fetchMoreSubsription);
    };
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
    return ListComponent;
}());
export { ListComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9saXN0L2xpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQUUsZUFBZSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhEO0lBQUE7UUFRa0IsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsY0FBUyxHQUE4QixVQUFVLENBQUM7UUFDbEQscUJBQWdCLEdBQVcsc0NBQXNDLENBQUM7UUFHbEUsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUVyQixpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9ELDJDQUFzQyxHQUFXLENBQUMsQ0FBQztRQUNuRCxnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUN4QixnQkFBVyxHQUFHLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQy9DLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUNuQyxnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixrQkFBYSxHQUFVLEVBQUUsQ0FBQztJQTJDcEMsQ0FBQzs7Ozs7SUF6Q1Esa0NBQVU7Ozs7SUFBakIsVUFBa0IsSUFBUztRQUN6QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOzs7Ozs7SUFFTSxrQ0FBVTs7Ozs7SUFBakIsVUFBa0IsSUFBUyxFQUFFLEtBQVU7UUFDckMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDckIsQ0FBQyxFQUFDLENBQUM7O2dCQUNHLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFBaEIsQ0FBZ0IsRUFBQztZQUN2RCxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFTSx3Q0FBZ0I7OztJQUF2QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVNLDhCQUFNOzs7O0lBQWIsVUFBYyxTQUFpQjtRQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLHNDQUFzQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2hGLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7SUFFTSxpQ0FBUzs7O0lBQWhCO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7O1lBQ2Qsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDOUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFROzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQXBCLENBQW9CLEVBQUMsQ0FBQzthQUNuRCxTQUFTOzs7O1FBQUMsVUFBQyxRQUFhO1lBQ3ZCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9DLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsRUFBQztRQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBakVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsMHRCQUFvQzs7aUJBRXJDOzs7bUNBR0UsWUFBWSxTQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs4QkFDaEQsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7bUNBQ0wsS0FBSztpQ0FDTCxLQUFLO2tDQUNMLEtBQUs7MkJBQ0wsS0FBSztpQ0FDTCxLQUFLOytCQUNMLE1BQU07O0lBa0RULG9CQUFDO0NBQUEsQUFsRUQsSUFrRUM7U0E1RFksYUFBYTs7O0lBQ3hCLHlDQUE4Rjs7SUFDOUYsb0NBQTRDOztJQUM1Qyw4QkFBNkI7O0lBQzdCLGtDQUFrRTs7SUFDbEUseUNBQWtGOztJQUNsRix1Q0FBZ0M7O0lBQ2hDLHdDQUFpQzs7SUFDakMsaUNBQXNDOztJQUN0Qyx1Q0FBeUM7O0lBQ3pDLHFDQUFzRTs7SUFDdEUsZ0NBQXdCOztJQUN4QiwrREFBMEQ7O0lBQzFELG9DQUErQjs7SUFDL0Isb0NBQXVEOzs7OztJQUN2RCxzQ0FBMkM7Ozs7O0lBQzNDLG9DQUFnQzs7Ozs7SUFDaEMsc0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vbGlzdC1pdGVtLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGZpbmFsaXplLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrYXRhbmEtbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xpc3QuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQge1xyXG4gIEBDb250ZW50Q2hpbGQoTGlzdEl0ZW1EaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBsaXN0SXRlbVRlbXBsYXRlOiBMaXN0SXRlbURpcmVjdGl2ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgZXZlbnRTZWxlY3Q6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtb2RlbDogYW55W107XHJcbiAgQElucHV0KCkgcHVibGljIGRpcmVjdGlvbjogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICd2ZXJ0aWNhbCc7XHJcbiAgQElucHV0KCkgcHVibGljIGVtcHR5TGlzdE1lc3NhZ2U6IHN0cmluZyA9ICdLaMO0bmcgY8OzIGdpw6EgdHLhu4sgbsOgbyB0cm9uZyBkYW5oIHPDoWNoJztcclxuICBASW5wdXQoKSB2YWxpZGF0aW9uTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHZhbGlkYXRpb25TY29wZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyID0gMTA7XHJcbiAgQElucHV0KCkgcHVibGljIHNlYXJjaEZ1bmN0aW9uOiBGdW5jdGlvbjtcclxuICBAT3V0cHV0KCkgcHVibGljIGl0ZW1TZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgcHVibGljIG51bWJlck9mSXRlbXNGcm9tRW5kQmVmb3JlRmV0Y2hpbmdNb3JlOiBudW1iZXIgPSAzO1xyXG4gIHB1YmxpYyBzZWFyY2hJdGVtczogYW55W10gPSBbXTtcclxuICBwdWJsaWMgc2VhcmNoVGV4dCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG4gIHByaXZhdGUgY3VycmVudFBhZ2U6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZEl0ZW1zOiBhbnlbXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgaXNTZWxlY3RlZChpdGVtOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmV2ZW50U2VsZWN0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihpdGVtKSA+PSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlbGVjdEl0ZW0oaXRlbTogYW55LCBpbmRleDogYW55KSB7XHJcbiAgICBpZiAodGhpcy5ldmVudFNlbGVjdCkge1xyXG4gICAgICB0aGlzLm1vZGVsLmZvckVhY2gocyA9PiB7XHJcbiAgICAgICAgcy5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgaW5kZXhPYmogPSB0aGlzLm1vZGVsLmZpbmQocyA9PiBzLmlkID09PSBpdGVtLmlkKTtcclxuICAgICAgaW5kZXhPYmouc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pdGVtU2VsZWN0ZWQuZW1pdChpdGVtKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTZWxlY3RlZEl0ZW1zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzY3JvbGwobGFzdEluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGxhc3RJbmRleCArIHRoaXMubnVtYmVyT2ZJdGVtc0Zyb21FbmRCZWZvcmVGZXRjaGluZ01vcmUgPj0gdGhpcy5tb2RlbC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5mZXRjaE1vcmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBmZXRjaE1vcmUoKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlKys7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgY29uc3QgZmV0Y2hNb3JlU3Vic3JpcHRpb24gPSB0aGlzLnNlYXJjaEZ1bmN0aW9uKHRoaXMuc2VhcmNoVGV4dCQuZ2V0VmFsdWUoKSwgMCwgdGhpcy5jdXJyZW50UGFnZSwgdGhpcy5wYWdlU2l6ZSlcclxuICAgICAgLnBpcGUodGFrZSgxKSwgZmluYWxpemUoKCkgPT4gdGhpcy5sb2FkaW5nID0gZmFsc2UpKVxyXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IHRoaXMubW9kZWwuY29uY2F0KHJlc3BvbnNlLml0ZW1zKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChmZXRjaE1vcmVTdWJzcmlwdGlvbik7XHJcbiAgfVxyXG59XHJcbiJdfQ==