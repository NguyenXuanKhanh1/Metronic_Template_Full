/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { of } from 'rxjs';
import { TableOption, TableColumnType } from '../../table/table.model';
import { TableComponent } from '../../table/table.component';
export class GalleryComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initTable();
    }
    /**
     * @return {?}
     */
    isValid() {
        return this.tableRef.selectedItems.length > 0;
    }
    /**
     * @return {?}
     */
    callback() {
        return of(this.tableRef.selectedItems);
    }
    /**
     * @private
     * @return {?}
     */
    initTable() {
        this.option = new TableOption({
            serviceProvider: {
                searchAsync: (/**
                 * @param {?} request
                 * @return {?}
                 */
                (request) => {
                    return this.items(request);
                })
            },
            searchFields: ["name", "createdBy", "createdDate", "lastModifiedDate", "lastModifiedBy"],
            inlineEdit: true,
            mainColumns: [
                {
                    title: (/**
                     * @return {?}
                     */
                    () => this.headers[0]),
                    valueRef: (/**
                     * @return {?}
                     */
                    () => 'src'),
                    type: TableColumnType.Custom,
                    customTemplate: (/**
                     * @return {?}
                     */
                    () => this.imageTemplate)
                },
                {
                    title: (/**
                     * @return {?}
                     */
                    () => this.headers[1]),
                    valueRef: (/**
                     * @return {?}
                     */
                    () => 'name'),
                    type: TableColumnType.Custom,
                    customTemplate: (/**
                     * @return {?}
                     */
                    () => this.nameTemplate),
                    allowSort: true
                },
                {
                    title: (/**
                     * @return {?}
                     */
                    () => this.headers[2]),
                    valueRef: (/**
                     * @return {?}
                     */
                    () => 'size'),
                    type: TableColumnType.Custom,
                    customTemplate: (/**
                     * @return {?}
                     */
                    () => this.sizeTemplate)
                },
                {
                    title: (/**
                     * @return {?}
                     */
                    () => this.headers[3]),
                    valueRef: (/**
                     * @return {?}
                     */
                    () => 'createdDate'),
                    type: TableColumnType.Date,
                    allowSort: true
                }
            ]
        });
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC92aWV3ZXIvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBUTdELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFTM0IsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRU0sT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRU0sUUFBUTtRQUNiLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM1QixlQUFlLEVBQUU7Z0JBQ2YsV0FBVzs7OztnQkFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFO29CQUN2QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQTthQUNGO1lBQ0QsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUM7WUFDeEYsVUFBVSxFQUFFLElBQUk7WUFDaEIsV0FBVyxFQUFFO2dCQUNYO29CQUNFLEtBQUs7OztvQkFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUM1QixRQUFROzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFBO29CQUNyQixJQUFJLEVBQUUsZUFBZSxDQUFDLE1BQU07b0JBQzVCLGNBQWM7OztvQkFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFBO2lCQUN6QztnQkFDRDtvQkFDRSxLQUFLOzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDNUIsUUFBUTs7O29CQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQTtvQkFDdEIsSUFBSSxFQUFFLGVBQWUsQ0FBQyxNQUFNO29CQUM1QixjQUFjOzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQTtvQkFDdkMsU0FBUyxFQUFFLElBQUk7aUJBQ2hCO2dCQUNEO29CQUNFLEtBQUs7OztvQkFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUM1QixRQUFROzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFBO29CQUN0QixJQUFJLEVBQUUsZUFBZSxDQUFDLE1BQU07b0JBQzVCLGNBQWM7OztvQkFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFBO2lCQUN4QztnQkFDRDtvQkFDRSxLQUFLOzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDNUIsUUFBUTs7O29CQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQTtvQkFDN0IsSUFBSSxFQUFFLGVBQWUsQ0FBQyxJQUFJO29CQUMxQixTQUFTLEVBQUUsSUFBSTtpQkFDaEI7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHNjQUF1Qzs7YUFFeEM7OztvQkFHRSxLQUFLO3NCQUNMLEtBQUs7NEJBQ0wsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBQzNDLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUMxQyxTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt1QkFDMUMsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFMdkMsaUNBQTBFOztJQUMxRSxtQ0FBa0M7O0lBQ2xDLHlDQUFxRjs7SUFDckYsd0NBQW1GOztJQUNuRix3Q0FBbUY7O0lBQ25GLG9DQUF5RTs7SUFDekUsa0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRhYmxlT3B0aW9uLCBUYWJsZUNvbHVtblR5cGUgfSBmcm9tICcuLi8uLi90YWJsZS90YWJsZS5tb2RlbCc7XHJcbmltcG9ydCB7IEZpbGVSZXNwb25zZSwgRmlsZVJlcXVlc3QsIEZpbGVWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi9maWxlL2ZpbGUubW9kZWwnO1xyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2MtZ2FsbGVyeScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dhbGxlcnkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dhbGxlcnkuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpdGVtczogKHJlcXVlc3Q6IEZpbGVSZXF1ZXN0KSA9PiBPYnNlcnZhYmxlPEZpbGVSZXNwb25zZT47XHJcbiAgQElucHV0KCkgcHVibGljIGhlYWRlcnM6IHN0cmluZ1tdO1xyXG4gIEBWaWV3Q2hpbGQoJ2ltYWdlVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgaW1hZ2VUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAVmlld0NoaWxkKCdzaXplVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgc2l6ZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBWaWV3Q2hpbGQoJ25hbWVUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBuYW1lVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQFZpZXdDaGlsZCgndGFibGVSZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgdGFibGVSZWY6IFRhYmxlQ29tcG9uZW50O1xyXG4gIHB1YmxpYyBvcHRpb246IFRhYmxlT3B0aW9uO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdFRhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnRhYmxlUmVmLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYWxsYmFjaygpOiBPYnNlcnZhYmxlPEZpbGVWaWV3TW9kZWxbXT4ge1xyXG4gICAgcmV0dXJuIG9mKHRoaXMudGFibGVSZWYuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRUYWJsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMub3B0aW9uID0gbmV3IFRhYmxlT3B0aW9uKHtcclxuICAgICAgc2VydmljZVByb3ZpZGVyOiB7XHJcbiAgICAgICAgc2VhcmNoQXN5bmM6IChyZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtcyhyZXF1ZXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNlYXJjaEZpZWxkczogW1wibmFtZVwiLCBcImNyZWF0ZWRCeVwiLCBcImNyZWF0ZWREYXRlXCIsIFwibGFzdE1vZGlmaWVkRGF0ZVwiLCBcImxhc3RNb2RpZmllZEJ5XCJdLFxyXG4gICAgICBpbmxpbmVFZGl0OiB0cnVlLFxyXG4gICAgICBtYWluQ29sdW1uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAoKSA9PiB0aGlzLmhlYWRlcnNbMF0sXHJcbiAgICAgICAgICB2YWx1ZVJlZjogKCkgPT4gJ3NyYycsXHJcbiAgICAgICAgICB0eXBlOiBUYWJsZUNvbHVtblR5cGUuQ3VzdG9tLFxyXG4gICAgICAgICAgY3VzdG9tVGVtcGxhdGU6ICgpID0+IHRoaXMuaW1hZ2VUZW1wbGF0ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICgpID0+IHRoaXMuaGVhZGVyc1sxXSxcclxuICAgICAgICAgIHZhbHVlUmVmOiAoKSA9PiAnbmFtZScsXHJcbiAgICAgICAgICB0eXBlOiBUYWJsZUNvbHVtblR5cGUuQ3VzdG9tLFxyXG4gICAgICAgICAgY3VzdG9tVGVtcGxhdGU6ICgpID0+IHRoaXMubmFtZVRlbXBsYXRlLFxyXG4gICAgICAgICAgYWxsb3dTb3J0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogKCkgPT4gdGhpcy5oZWFkZXJzWzJdLFxyXG4gICAgICAgICAgdmFsdWVSZWY6ICgpID0+ICdzaXplJyxcclxuICAgICAgICAgIHR5cGU6IFRhYmxlQ29sdW1uVHlwZS5DdXN0b20sXHJcbiAgICAgICAgICBjdXN0b21UZW1wbGF0ZTogKCkgPT4gdGhpcy5zaXplVGVtcGxhdGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAoKSA9PiB0aGlzLmhlYWRlcnNbM10sXHJcbiAgICAgICAgICB2YWx1ZVJlZjogKCkgPT4gJ2NyZWF0ZWREYXRlJyxcclxuICAgICAgICAgIHR5cGU6IFRhYmxlQ29sdW1uVHlwZS5EYXRlLFxyXG4gICAgICAgICAgYWxsb3dTb3J0OiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19