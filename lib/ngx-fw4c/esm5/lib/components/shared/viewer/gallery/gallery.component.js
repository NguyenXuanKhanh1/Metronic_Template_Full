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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC92aWV3ZXIvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTdEO0lBQUE7SUFpRUEsQ0FBQzs7OztJQWxEQyxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVNLGtDQUFPOzs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRU0sbUNBQVE7OztJQUFmO1FBQ0UsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVPLG9DQUFTOzs7O0lBQWpCO1FBQUEsaUJBcUNDO1FBcENDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDNUIsZUFBZSxFQUFFO2dCQUNmLFdBQVc7Ozs7Z0JBQUUsVUFBQyxPQUFPO29CQUNuQixPQUFPLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQTthQUNGO1lBQ0QsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUM7WUFDeEYsVUFBVSxFQUFFLElBQUk7WUFDaEIsV0FBVyxFQUFFO2dCQUNYO29CQUNFLEtBQUs7OztvQkFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBZixDQUFlLENBQUE7b0JBQzVCLFFBQVE7OztvQkFBRSxjQUFNLE9BQUEsS0FBSyxFQUFMLENBQUssQ0FBQTtvQkFDckIsSUFBSSxFQUFFLGVBQWUsQ0FBQyxNQUFNO29CQUM1QixjQUFjOzs7b0JBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQWxCLENBQWtCLENBQUE7aUJBQ3pDO2dCQUNEO29CQUNFLEtBQUs7OztvQkFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBZixDQUFlLENBQUE7b0JBQzVCLFFBQVE7OztvQkFBRSxjQUFNLE9BQUEsTUFBTSxFQUFOLENBQU0sQ0FBQTtvQkFDdEIsSUFBSSxFQUFFLGVBQWUsQ0FBQyxNQUFNO29CQUM1QixjQUFjOzs7b0JBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLEVBQWpCLENBQWlCLENBQUE7b0JBQ3ZDLFNBQVMsRUFBRSxJQUFJO2lCQUNoQjtnQkFDRDtvQkFDRSxLQUFLOzs7b0JBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQWYsQ0FBZSxDQUFBO29CQUM1QixRQUFROzs7b0JBQUUsY0FBTSxPQUFBLE1BQU0sRUFBTixDQUFNLENBQUE7b0JBQ3RCLElBQUksRUFBRSxlQUFlLENBQUMsTUFBTTtvQkFDNUIsY0FBYzs7O29CQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxFQUFqQixDQUFpQixDQUFBO2lCQUN4QztnQkFDRDtvQkFDRSxLQUFLOzs7b0JBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQWYsQ0FBZSxDQUFBO29CQUM1QixRQUFROzs7b0JBQUUsY0FBTSxPQUFBLGFBQWEsRUFBYixDQUFhLENBQUE7b0JBQzdCLElBQUksRUFBRSxlQUFlLENBQUMsSUFBSTtvQkFDMUIsU0FBUyxFQUFFLElBQUk7aUJBQ2hCO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFoRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLHFkQUF1Qzs7aUJBRXhDOzs7d0JBR0UsS0FBSzswQkFDTCxLQUFLO2dDQUNMLFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOytCQUMzQyxTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFDMUMsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBQzFDLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQXFEekMsdUJBQUM7Q0FBQSxBQWpFRCxJQWlFQztTQTNEWSxnQkFBZ0I7OztJQUMzQixpQ0FBMEU7O0lBQzFFLG1DQUFrQzs7SUFDbEMseUNBQXFGOztJQUNyRix3Q0FBbUY7O0lBQ25GLHdDQUFtRjs7SUFDbkYsb0NBQXlFOztJQUN6RSxrQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVGFibGVPcHRpb24sIFRhYmxlQ29sdW1uVHlwZSB9IGZyb20gJy4uLy4uL3RhYmxlL3RhYmxlLm1vZGVsJztcclxuaW1wb3J0IHsgRmlsZVJlc3BvbnNlLCBGaWxlUmVxdWVzdCwgRmlsZVZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL2ZpbGUvZmlsZS5tb2RlbCc7XHJcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdGFibGUvdGFibGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2F0YW5hLWdhbGxlcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nYWxsZXJ5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBwdWJsaWMgaXRlbXM6IChyZXF1ZXN0OiBGaWxlUmVxdWVzdCkgPT4gT2JzZXJ2YWJsZTxGaWxlUmVzcG9uc2U+O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJzOiBzdHJpbmdbXTtcclxuICBAVmlld0NoaWxkKCdpbWFnZVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIGltYWdlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQFZpZXdDaGlsZCgnc2l6ZVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIHNpemVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAVmlld0NoaWxkKCduYW1lVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgbmFtZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBWaWV3Q2hpbGQoJ3RhYmxlUmVmJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIHRhYmxlUmVmOiBUYWJsZUNvbXBvbmVudDtcclxuICBwdWJsaWMgb3B0aW9uOiBUYWJsZU9wdGlvbjtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRUYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzVmFsaWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy50YWJsZVJlZi5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FsbGJhY2soKTogT2JzZXJ2YWJsZTxGaWxlVmlld01vZGVsW10+IHtcclxuICAgIHJldHVybiBvZih0aGlzLnRhYmxlUmVmLnNlbGVjdGVkSXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0VGFibGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wdGlvbiA9IG5ldyBUYWJsZU9wdGlvbih7XHJcbiAgICAgIHNlcnZpY2VQcm92aWRlcjoge1xyXG4gICAgICAgIHNlYXJjaEFzeW5jOiAocmVxdWVzdCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMocmVxdWVzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBzZWFyY2hGaWVsZHM6IFtcIm5hbWVcIiwgXCJjcmVhdGVkQnlcIiwgXCJjcmVhdGVkRGF0ZVwiLCBcImxhc3RNb2RpZmllZERhdGVcIiwgXCJsYXN0TW9kaWZpZWRCeVwiXSxcclxuICAgICAgaW5saW5lRWRpdDogdHJ1ZSxcclxuICAgICAgbWFpbkNvbHVtbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogKCkgPT4gdGhpcy5oZWFkZXJzWzBdLFxyXG4gICAgICAgICAgdmFsdWVSZWY6ICgpID0+ICdzcmMnLFxyXG4gICAgICAgICAgdHlwZTogVGFibGVDb2x1bW5UeXBlLkN1c3RvbSxcclxuICAgICAgICAgIGN1c3RvbVRlbXBsYXRlOiAoKSA9PiB0aGlzLmltYWdlVGVtcGxhdGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAoKSA9PiB0aGlzLmhlYWRlcnNbMV0sXHJcbiAgICAgICAgICB2YWx1ZVJlZjogKCkgPT4gJ25hbWUnLFxyXG4gICAgICAgICAgdHlwZTogVGFibGVDb2x1bW5UeXBlLkN1c3RvbSxcclxuICAgICAgICAgIGN1c3RvbVRlbXBsYXRlOiAoKSA9PiB0aGlzLm5hbWVUZW1wbGF0ZSxcclxuICAgICAgICAgIGFsbG93U29ydDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICgpID0+IHRoaXMuaGVhZGVyc1syXSxcclxuICAgICAgICAgIHZhbHVlUmVmOiAoKSA9PiAnc2l6ZScsXHJcbiAgICAgICAgICB0eXBlOiBUYWJsZUNvbHVtblR5cGUuQ3VzdG9tLFxyXG4gICAgICAgICAgY3VzdG9tVGVtcGxhdGU6ICgpID0+IHRoaXMuc2l6ZVRlbXBsYXRlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogKCkgPT4gdGhpcy5oZWFkZXJzWzNdLFxyXG4gICAgICAgICAgdmFsdWVSZWY6ICgpID0+ICdjcmVhdGVkRGF0ZScsXHJcbiAgICAgICAgICB0eXBlOiBUYWJsZUNvbHVtblR5cGUuRGF0ZSxcclxuICAgICAgICAgIGFsbG93U29ydDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==