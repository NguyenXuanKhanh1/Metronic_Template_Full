/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { of } from 'rxjs';
import { TableOption, TableColumnType } from '../../table/table.model';
import { TableComponent } from '../../table/table.component';
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    /**
     * @return {?}
     */
    GalleryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initTable();
    };
    /**
     * @return {?}
     */
    GalleryComponent.prototype.isValid = /**
     * @return {?}
     */
    function () {
        return this.tableRef.selectedItems.length > 0;
    };
    /**
     * @return {?}
     */
    GalleryComponent.prototype.callback = /**
     * @return {?}
     */
    function () {
        return of(this.tableRef.selectedItems);
    };
    /**
     * @private
     * @return {?}
     */
    GalleryComponent.prototype.initTable = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.option = new TableOption({
            serviceProvider: {
                searchAsync: (/**
                 * @param {?} request
                 * @return {?}
                 */
                function (request) {
                    return _this.items(request);
                })
            },
            searchFields: ["name", "createdBy", "createdDate", "lastModifiedDate", "lastModifiedBy"],
            inlineEdit: true,
            mainColumns: [
                {
                    title: (/**
                     * @return {?}
                     */
                    function () { return _this.headers[0]; }),
                    valueRef: (/**
                     * @return {?}
                     */
                    function () { return 'src'; }),
                    type: TableColumnType.Custom,
                    customTemplate: (/**
                     * @return {?}
                     */
                    function () { return _this.imageTemplate; })
                },
                {
                    title: (/**
                     * @return {?}
                     */
                    function () { return _this.headers[1]; }),
                    valueRef: (/**
                     * @return {?}
                     */
                    function () { return 'name'; }),
                    type: TableColumnType.Custom,
                    customTemplate: (/**
                     * @return {?}
                     */
                    function () { return _this.nameTemplate; }),
                    allowSort: true
                },
                {
                    title: (/**
                     * @return {?}
                     */
                    function () { return _this.headers[2]; }),
                    valueRef: (/**
                     * @return {?}
                     */
                    function () { return 'size'; }),
                    type: TableColumnType.Custom,
                    customTemplate: (/**
                     * @return {?}
                     */
                    function () { return _this.sizeTemplate; })
                },
                {
                    title: (/**
                     * @return {?}
                     */
                    function () { return _this.headers[3]; }),
                    valueRef: (/**
                     * @return {?}
                     */
                    function () { return 'createdDate'; }),
                    type: TableColumnType.Date,
                    allowSort: true
                }
            ]
        });
    };
    GalleryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c-gallery',
                    template: "<c-table #tableRef [option]=\"option\">\r\n  <ng-template let-item=\"item\" #imageTemplate>\r\n    <img class=\"small\" [src]=\"item.src\" />\r\n  </ng-template>\r\n  <ng-template let-item=\"item\" #nameTemplate>\r\n    <span>{{item.name}}</span>\r\n  </ng-template>\r\n  <ng-template let-item=\"item\" #sizeTemplate>\r\n    <span class=\"text-primary\" style=\"font-weight: 600;\">{{item.size | cKb}}</span>\r\n  </ng-template>\r\n</c-table>",
                    styles: [""]
                }] }
    ];
    GalleryComponent.propDecorators = {
        items: [{ type: Input }],
        headers: [{ type: Input }],
        imageTemplate: [{ type: ViewChild, args: ['imageTemplate', { static: true },] }],
        sizeTemplate: [{ type: ViewChild, args: ['sizeTemplate', { static: true },] }],
        nameTemplate: [{ type: ViewChild, args: ['nameTemplate', { static: true },] }],
        tableRef: [{ type: ViewChild, args: ['tableRef', { static: true },] }]
    };
    return GalleryComponent;
}());
export { GalleryComponent };
if (false) {
    /** @type {?} */
    GalleryComponent.prototype.items;
    /** @type {?} */
    GalleryComponent.prototype.headers;
    /** @type {?} */
    GalleryComponent.prototype.imageTemplate;
    /** @type {?} */
    GalleryComponent.prototype.sizeTemplate;
    /** @type {?} */
    GalleryComponent.prototype.nameTemplate;
    /** @type {?} */
    GalleryComponent.prototype.tableRef;
    /** @type {?} */
    GalleryComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC92aWV3ZXIvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTdEO0lBQUE7SUFpRUEsQ0FBQzs7OztJQWxEQyxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVNLGtDQUFPOzs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRU0sbUNBQVE7OztJQUFmO1FBQ0UsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVPLG9DQUFTOzs7O0lBQWpCO1FBQUEsaUJBcUNDO1FBcENDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDNUIsZUFBZSxFQUFFO2dCQUNmLFdBQVc7Ozs7Z0JBQUUsVUFBQyxPQUFPO29CQUNuQixPQUFPLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQTthQUNGO1lBQ0QsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUM7WUFDeEYsVUFBVSxFQUFFLElBQUk7WUFDaEIsV0FBVyxFQUFFO2dCQUNYO29CQUNFLEtBQUs7OztvQkFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBZixDQUFlLENBQUE7b0JBQzVCLFFBQVE7OztvQkFBRSxjQUFNLE9BQUEsS0FBSyxFQUFMLENBQUssQ0FBQTtvQkFDckIsSUFBSSxFQUFFLGVBQWUsQ0FBQyxNQUFNO29CQUM1QixjQUFjOzs7b0JBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQWxCLENBQWtCLENBQUE7aUJBQ3pDO2dCQUNEO29CQUNFLEtBQUs7OztvQkFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBZixDQUFlLENBQUE7b0JBQzVCLFFBQVE7OztvQkFBRSxjQUFNLE9BQUEsTUFBTSxFQUFOLENBQU0sQ0FBQTtvQkFDdEIsSUFBSSxFQUFFLGVBQWUsQ0FBQyxNQUFNO29CQUM1QixjQUFjOzs7b0JBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLEVBQWpCLENBQWlCLENBQUE7b0JBQ3ZDLFNBQVMsRUFBRSxJQUFJO2lCQUNoQjtnQkFDRDtvQkFDRSxLQUFLOzs7b0JBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQWYsQ0FBZSxDQUFBO29CQUM1QixRQUFROzs7b0JBQUUsY0FBTSxPQUFBLE1BQU0sRUFBTixDQUFNLENBQUE7b0JBQ3RCLElBQUksRUFBRSxlQUFlLENBQUMsTUFBTTtvQkFDNUIsY0FBYzs7O29CQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxFQUFqQixDQUFpQixDQUFBO2lCQUN4QztnQkFDRDtvQkFDRSxLQUFLOzs7b0JBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQWYsQ0FBZSxDQUFBO29CQUM1QixRQUFROzs7b0JBQUUsY0FBTSxPQUFBLGFBQWEsRUFBYixDQUFhLENBQUE7b0JBQzdCLElBQUksRUFBRSxlQUFlLENBQUMsSUFBSTtvQkFDMUIsU0FBUyxFQUFFLElBQUk7aUJBQ2hCO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFoRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixzY0FBdUM7O2lCQUV4Qzs7O3dCQUdFLEtBQUs7MEJBQ0wsS0FBSztnQ0FDTCxTQUFTLFNBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFDM0MsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7K0JBQzFDLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUMxQyxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFxRHpDLHVCQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0EzRFksZ0JBQWdCOzs7SUFDM0IsaUNBQTBFOztJQUMxRSxtQ0FBa0M7O0lBQ2xDLHlDQUFxRjs7SUFDckYsd0NBQW1GOztJQUNuRix3Q0FBbUY7O0lBQ25GLG9DQUF5RTs7SUFDekUsa0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRhYmxlT3B0aW9uLCBUYWJsZUNvbHVtblR5cGUgfSBmcm9tICcuLi8uLi90YWJsZS90YWJsZS5tb2RlbCc7XHJcbmltcG9ydCB7IEZpbGVSZXNwb25zZSwgRmlsZVJlcXVlc3QsIEZpbGVWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi9maWxlL2ZpbGUubW9kZWwnO1xyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2MtZ2FsbGVyeScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dhbGxlcnkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dhbGxlcnkuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpdGVtczogKHJlcXVlc3Q6IEZpbGVSZXF1ZXN0KSA9PiBPYnNlcnZhYmxlPEZpbGVSZXNwb25zZT47XHJcbiAgQElucHV0KCkgcHVibGljIGhlYWRlcnM6IHN0cmluZ1tdO1xyXG4gIEBWaWV3Q2hpbGQoJ2ltYWdlVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgaW1hZ2VUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAVmlld0NoaWxkKCdzaXplVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgc2l6ZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBWaWV3Q2hpbGQoJ25hbWVUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBuYW1lVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQFZpZXdDaGlsZCgndGFibGVSZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgdGFibGVSZWY6IFRhYmxlQ29tcG9uZW50O1xyXG4gIHB1YmxpYyBvcHRpb246IFRhYmxlT3B0aW9uO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdFRhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnRhYmxlUmVmLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYWxsYmFjaygpOiBPYnNlcnZhYmxlPEZpbGVWaWV3TW9kZWxbXT4ge1xyXG4gICAgcmV0dXJuIG9mKHRoaXMudGFibGVSZWYuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRUYWJsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMub3B0aW9uID0gbmV3IFRhYmxlT3B0aW9uKHtcclxuICAgICAgc2VydmljZVByb3ZpZGVyOiB7XHJcbiAgICAgICAgc2VhcmNoQXN5bmM6IChyZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtcyhyZXF1ZXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNlYXJjaEZpZWxkczogW1wibmFtZVwiLCBcImNyZWF0ZWRCeVwiLCBcImNyZWF0ZWREYXRlXCIsIFwibGFzdE1vZGlmaWVkRGF0ZVwiLCBcImxhc3RNb2RpZmllZEJ5XCJdLFxyXG4gICAgICBpbmxpbmVFZGl0OiB0cnVlLFxyXG4gICAgICBtYWluQ29sdW1uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAoKSA9PiB0aGlzLmhlYWRlcnNbMF0sXHJcbiAgICAgICAgICB2YWx1ZVJlZjogKCkgPT4gJ3NyYycsXHJcbiAgICAgICAgICB0eXBlOiBUYWJsZUNvbHVtblR5cGUuQ3VzdG9tLFxyXG4gICAgICAgICAgY3VzdG9tVGVtcGxhdGU6ICgpID0+IHRoaXMuaW1hZ2VUZW1wbGF0ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICgpID0+IHRoaXMuaGVhZGVyc1sxXSxcclxuICAgICAgICAgIHZhbHVlUmVmOiAoKSA9PiAnbmFtZScsXHJcbiAgICAgICAgICB0eXBlOiBUYWJsZUNvbHVtblR5cGUuQ3VzdG9tLFxyXG4gICAgICAgICAgY3VzdG9tVGVtcGxhdGU6ICgpID0+IHRoaXMubmFtZVRlbXBsYXRlLFxyXG4gICAgICAgICAgYWxsb3dTb3J0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogKCkgPT4gdGhpcy5oZWFkZXJzWzJdLFxyXG4gICAgICAgICAgdmFsdWVSZWY6ICgpID0+ICdzaXplJyxcclxuICAgICAgICAgIHR5cGU6IFRhYmxlQ29sdW1uVHlwZS5DdXN0b20sXHJcbiAgICAgICAgICBjdXN0b21UZW1wbGF0ZTogKCkgPT4gdGhpcy5zaXplVGVtcGxhdGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAoKSA9PiB0aGlzLmhlYWRlcnNbM10sXHJcbiAgICAgICAgICB2YWx1ZVJlZjogKCkgPT4gJ2NyZWF0ZWREYXRlJyxcclxuICAgICAgICAgIHR5cGU6IFRhYmxlQ29sdW1uVHlwZS5EYXRlLFxyXG4gICAgICAgICAgYWxsb3dTb3J0OiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19