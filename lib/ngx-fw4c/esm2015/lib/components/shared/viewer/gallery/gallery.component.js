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
                selector: 'katana-gallery',
                template: "<katana-table #tableRef [option]=\"option\">\r\n  <ng-template let-item=\"item\" #imageTemplate>\r\n    <img class=\"small\" [src]=\"item.src\" />\r\n  </ng-template>\r\n  <ng-template let-item=\"item\" #nameTemplate>\r\n    <span>{{item.name}}</span>\r\n  </ng-template>\r\n  <ng-template let-item=\"item\" #sizeTemplate>\r\n    <span class=\"text-primary\" style=\"font-weight: 600;\">{{item.size | katanaKb}}</span>\r\n  </ng-template>\r\n</katana-table>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC92aWV3ZXIvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBUTdELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFTM0IsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRU0sT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRU0sUUFBUTtRQUNiLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM1QixlQUFlLEVBQUU7Z0JBQ2YsV0FBVzs7OztnQkFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFO29CQUN2QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQTthQUNGO1lBQ0QsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUM7WUFDeEYsVUFBVSxFQUFFLElBQUk7WUFDaEIsV0FBVyxFQUFFO2dCQUNYO29CQUNFLEtBQUs7OztvQkFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUM1QixRQUFROzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFBO29CQUNyQixJQUFJLEVBQUUsZUFBZSxDQUFDLE1BQU07b0JBQzVCLGNBQWM7OztvQkFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFBO2lCQUN6QztnQkFDRDtvQkFDRSxLQUFLOzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDNUIsUUFBUTs7O29CQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQTtvQkFDdEIsSUFBSSxFQUFFLGVBQWUsQ0FBQyxNQUFNO29CQUM1QixjQUFjOzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQTtvQkFDdkMsU0FBUyxFQUFFLElBQUk7aUJBQ2hCO2dCQUNEO29CQUNFLEtBQUs7OztvQkFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUM1QixRQUFROzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFBO29CQUN0QixJQUFJLEVBQUUsZUFBZSxDQUFDLE1BQU07b0JBQzVCLGNBQWM7OztvQkFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFBO2lCQUN4QztnQkFDRDtvQkFDRSxLQUFLOzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDNUIsUUFBUTs7O29CQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQTtvQkFDN0IsSUFBSSxFQUFFLGVBQWUsQ0FBQyxJQUFJO29CQUMxQixTQUFTLEVBQUUsSUFBSTtpQkFDaEI7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIscWRBQXVDOzthQUV4Qzs7O29CQUdFLEtBQUs7c0JBQ0wsS0FBSzs0QkFDTCxTQUFTLFNBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFDM0MsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBQzFDLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3VCQUMxQyxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQUx2QyxpQ0FBMEU7O0lBQzFFLG1DQUFrQzs7SUFDbEMseUNBQXFGOztJQUNyRix3Q0FBbUY7O0lBQ25GLHdDQUFtRjs7SUFDbkYsb0NBQXlFOztJQUN6RSxrQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVGFibGVPcHRpb24sIFRhYmxlQ29sdW1uVHlwZSB9IGZyb20gJy4uLy4uL3RhYmxlL3RhYmxlLm1vZGVsJztcclxuaW1wb3J0IHsgRmlsZVJlc3BvbnNlLCBGaWxlUmVxdWVzdCwgRmlsZVZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL2ZpbGUvZmlsZS5tb2RlbCc7XHJcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdGFibGUvdGFibGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2F0YW5hLWdhbGxlcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nYWxsZXJ5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBwdWJsaWMgaXRlbXM6IChyZXF1ZXN0OiBGaWxlUmVxdWVzdCkgPT4gT2JzZXJ2YWJsZTxGaWxlUmVzcG9uc2U+O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJzOiBzdHJpbmdbXTtcclxuICBAVmlld0NoaWxkKCdpbWFnZVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIGltYWdlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQFZpZXdDaGlsZCgnc2l6ZVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIHNpemVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAVmlld0NoaWxkKCduYW1lVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgbmFtZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBWaWV3Q2hpbGQoJ3RhYmxlUmVmJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIHRhYmxlUmVmOiBUYWJsZUNvbXBvbmVudDtcclxuICBwdWJsaWMgb3B0aW9uOiBUYWJsZU9wdGlvbjtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRUYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzVmFsaWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy50YWJsZVJlZi5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FsbGJhY2soKTogT2JzZXJ2YWJsZTxGaWxlVmlld01vZGVsW10+IHtcclxuICAgIHJldHVybiBvZih0aGlzLnRhYmxlUmVmLnNlbGVjdGVkSXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0VGFibGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wdGlvbiA9IG5ldyBUYWJsZU9wdGlvbih7XHJcbiAgICAgIHNlcnZpY2VQcm92aWRlcjoge1xyXG4gICAgICAgIHNlYXJjaEFzeW5jOiAocmVxdWVzdCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMocmVxdWVzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBzZWFyY2hGaWVsZHM6IFtcIm5hbWVcIiwgXCJjcmVhdGVkQnlcIiwgXCJjcmVhdGVkRGF0ZVwiLCBcImxhc3RNb2RpZmllZERhdGVcIiwgXCJsYXN0TW9kaWZpZWRCeVwiXSxcclxuICAgICAgaW5saW5lRWRpdDogdHJ1ZSxcclxuICAgICAgbWFpbkNvbHVtbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogKCkgPT4gdGhpcy5oZWFkZXJzWzBdLFxyXG4gICAgICAgICAgdmFsdWVSZWY6ICgpID0+ICdzcmMnLFxyXG4gICAgICAgICAgdHlwZTogVGFibGVDb2x1bW5UeXBlLkN1c3RvbSxcclxuICAgICAgICAgIGN1c3RvbVRlbXBsYXRlOiAoKSA9PiB0aGlzLmltYWdlVGVtcGxhdGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAoKSA9PiB0aGlzLmhlYWRlcnNbMV0sXHJcbiAgICAgICAgICB2YWx1ZVJlZjogKCkgPT4gJ25hbWUnLFxyXG4gICAgICAgICAgdHlwZTogVGFibGVDb2x1bW5UeXBlLkN1c3RvbSxcclxuICAgICAgICAgIGN1c3RvbVRlbXBsYXRlOiAoKSA9PiB0aGlzLm5hbWVUZW1wbGF0ZSxcclxuICAgICAgICAgIGFsbG93U29ydDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICgpID0+IHRoaXMuaGVhZGVyc1syXSxcclxuICAgICAgICAgIHZhbHVlUmVmOiAoKSA9PiAnc2l6ZScsXHJcbiAgICAgICAgICB0eXBlOiBUYWJsZUNvbHVtblR5cGUuQ3VzdG9tLFxyXG4gICAgICAgICAgY3VzdG9tVGVtcGxhdGU6ICgpID0+IHRoaXMuc2l6ZVRlbXBsYXRlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogKCkgPT4gdGhpcy5oZWFkZXJzWzNdLFxyXG4gICAgICAgICAgdmFsdWVSZWY6ICgpID0+ICdjcmVhdGVkRGF0ZScsXHJcbiAgICAgICAgICB0eXBlOiBUYWJsZUNvbHVtblR5cGUuRGF0ZSxcclxuICAgICAgICAgIGFsbG93U29ydDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==