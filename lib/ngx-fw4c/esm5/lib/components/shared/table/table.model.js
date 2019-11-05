/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function TableEditInline() { }
if (false) {
    /** @type {?|undefined} */
    TableEditInline.prototype.enabled;
    /** @type {?|undefined} */
    TableEditInline.prototype.autoCommit;
    /** @type {?|undefined} */
    TableEditInline.prototype.createAsync;
    /** @type {?|undefined} */
    TableEditInline.prototype.updateAsync;
}
/**
 * @record
 */
export function TableCell() { }
if (false) {
    /** @type {?|undefined} */
    TableCell.prototype.item;
    /** @type {?|undefined} */
    TableCell.prototype.column;
}
var TableColumn = /** @class */ (function () {
    function TableColumn(init) {
        Object.assign(this, init);
    }
    return TableColumn;
}());
export { TableColumn };
if (false) {
    /** @type {?} */
    TableColumn.prototype.title;
    /** @type {?} */
    TableColumn.prototype.valueRef;
    /** @type {?} */
    TableColumn.prototype.direction;
    /** @type {?} */
    TableColumn.prototype.allowSort;
    /** @type {?} */
    TableColumn.prototype.allowFilter;
    /** @type {?} */
    TableColumn.prototype.order;
    /** @type {?} */
    TableColumn.prototype.customClass;
    /** @type {?} */
    TableColumn.prototype.defaultSorter;
    /** @type {?} */
    TableColumn.prototype.width;
    /** @type {?} */
    TableColumn.prototype.textAlign;
    /** @type {?} */
    TableColumn.prototype.type;
    /** @type {?} */
    TableColumn.prototype.showTooltip;
    /** @type {?} */
    TableColumn.prototype.editInline;
    /** @type {?} */
    TableColumn.prototype.callback;
    /** @type {?} */
    TableColumn.prototype.customTemplate;
    /** @type {?} */
    TableColumn.prototype.hide;
    /** @type {?} */
    TableColumn.prototype.dropdownConfiguration;
    /** @type {?} */
    TableColumn.prototype.id;
    /** @type {?} */
    TableColumn.prototype.filterTemplate;
}
var TableSorter = /** @class */ (function () {
    function TableSorter() {
    }
    return TableSorter;
}());
export { TableSorter };
if (false) {
    /** @type {?} */
    TableSorter.prototype.direction;
    /** @type {?} */
    TableSorter.prototype.orderBy;
    /** @type {?} */
    TableSorter.prototype.order;
}
var TableAction = /** @class */ (function () {
    function TableAction(init) {
        this.type = TableConstant.ActionType.Inline;
        Object.assign(this, init);
    }
    return TableAction;
}());
export { TableAction };
if (false) {
    /** @type {?} */
    TableAction.prototype.id;
    /** @type {?} */
    TableAction.prototype.title;
    /** @type {?} */
    TableAction.prototype.tooltip;
    /** @type {?} */
    TableAction.prototype.icon;
    /** @type {?} */
    TableAction.prototype.type;
    /** @type {?} */
    TableAction.prototype.customClass;
    /** @type {?} */
    TableAction.prototype.executeAsync;
    /** @type {?} */
    TableAction.prototype.disabled;
    /** @type {?} */
    TableAction.prototype.hide;
    /** @type {?} */
    TableAction.prototype.lazyload;
}
/**
 * @record
 */
export function TableRequest() { }
if (false) {
    /** @type {?|undefined} */
    TableRequest.prototype.searchText;
    /** @type {?|undefined} */
    TableRequest.prototype.pageSize;
    /** @type {?|undefined} */
    TableRequest.prototype.pageIndex;
    /** @type {?|undefined} */
    TableRequest.prototype.sorters;
    /** @type {?|undefined} */
    TableRequest.prototype.data;
}
var TableText = /** @class */ (function () {
    function TableText() {
        this.placeholderSearch = TableConstant.DisplayText.PlaceholderSearch;
        this.btnSearch = TableConstant.DisplayText.BtnSearch;
        this.btnReset = TableConstant.DisplayText.BtnReset;
        this.action = TableConstant.DisplayText.Action;
        this.selectPageSize = TableConstant.DisplayText.SelectPageSize;
        this.deleteTitle = TableConstant.DisplayText.DeleteTitle;
        this.btnAcceptTitle = TableConstant.DisplayText.BtnAcceptTitle;
        this.btnCancelTitle = TableConstant.DisplayText.BtnCancelTitle;
        this.filterTitle = TableConstant.DisplayText.FilterTitle;
        this.applyFilter = TableConstant.DisplayText.ApplyFilter;
        this.detailTitle = TableConstant.DisplayText.DetailTitle;
        this.pageTitle = TableConstant.DisplayText.PageTitle;
        this.advancedSearchTitle = TableConstant.DisplayText.AdvancedSearchTitle;
        this.advancedBtnTitle = TableConstant.DisplayText.AdvancedBtnTitle;
        this.advancedBtnCancelTitle = TableConstant.DisplayText.AdvancedBtnCancelTitle;
        this.allTitle = TableConstant.DisplayText.AllTitle;
    }
    return TableText;
}());
export { TableText };
if (false) {
    /** @type {?} */
    TableText.prototype.placeholderSearch;
    /** @type {?} */
    TableText.prototype.btnSearch;
    /** @type {?} */
    TableText.prototype.btnReset;
    /** @type {?} */
    TableText.prototype.action;
    /** @type {?} */
    TableText.prototype.selectPageSize;
    /** @type {?} */
    TableText.prototype.deleteTitle;
    /** @type {?} */
    TableText.prototype.btnAcceptTitle;
    /** @type {?} */
    TableText.prototype.btnCancelTitle;
    /** @type {?} */
    TableText.prototype.filterTitle;
    /** @type {?} */
    TableText.prototype.applyFilter;
    /** @type {?} */
    TableText.prototype.detailTitle;
    /** @type {?} */
    TableText.prototype.pageTitle;
    /** @type {?} */
    TableText.prototype.advancedSearchTitle;
    /** @type {?} */
    TableText.prototype.advancedBtnTitle;
    /** @type {?} */
    TableText.prototype.advancedBtnCancelTitle;
    /** @type {?} */
    TableText.prototype.allTitle;
}
var TableMessage = /** @class */ (function () {
    function TableMessage() {
        this.notFoundMessage = TableConstant.Message.NotFoundMessage;
        this.foundMessage = TableConstant.Message.FoundMessage;
        this.invalidFormatMessage = TableConstant.Message.InvalidFormatMessage;
        this.selectedItemsMessage = TableConstant.Message.SelectedItemsMessage;
        this.confirmSelectAllRecordsMessage = TableConstant.Message.ConfirmSelectAllRecordsMessage;
        this.confirmClearAllRecordsMessage = TableConstant.Message.ConfirmClearAllRecordsMessage;
        this.deleteMessage = TableConstant.Message.DeleteMessage;
        this.loadingMessage = TableConstant.Message.LoadingMessage;
        this.refMessage = TableConstant.Message.RefMessage;
    }
    return TableMessage;
}());
export { TableMessage };
if (false) {
    /** @type {?} */
    TableMessage.prototype.notFoundMessage;
    /** @type {?} */
    TableMessage.prototype.foundMessage;
    /** @type {?} */
    TableMessage.prototype.invalidFormatMessage;
    /** @type {?} */
    TableMessage.prototype.selectedItemsMessage;
    /** @type {?} */
    TableMessage.prototype.confirmSelectAllRecordsMessage;
    /** @type {?} */
    TableMessage.prototype.confirmClearAllRecordsMessage;
    /** @type {?} */
    TableMessage.prototype.deleteMessage;
    /** @type {?} */
    TableMessage.prototype.loadingMessage;
    /** @type {?} */
    TableMessage.prototype.refMessage;
}
/**
 * @record
 * @template T
 */
export function TableResponse() { }
if (false) {
    /** @type {?|undefined} */
    TableResponse.prototype.totalRecords;
    /** @type {?|undefined} */
    TableResponse.prototype.items;
}
/**
 * @record
 */
export function TableServiceProvider() { }
if (false) {
    /** @type {?|undefined} */
    TableServiceProvider.prototype.searchAsync;
    /** @type {?|undefined} */
    TableServiceProvider.prototype.createAsync;
    /** @type {?|undefined} */
    TableServiceProvider.prototype.updateAsync;
    /** @type {?|undefined} */
    TableServiceProvider.prototype.deleteAsync;
    /** @type {?|undefined} */
    TableServiceProvider.prototype.exportAsync;
}
var TableDatetimeFormat = /** @class */ (function () {
    function TableDatetimeFormat(init) {
        this.format = 'MM/dd/yyyy';
        this.full = true;
        Object.assign(this, init);
    }
    return TableDatetimeFormat;
}());
export { TableDatetimeFormat };
if (false) {
    /** @type {?} */
    TableDatetimeFormat.prototype.format;
    /** @type {?} */
    TableDatetimeFormat.prototype.full;
}
var EdittedField = /** @class */ (function () {
    function EdittedField(init) {
        Object.assign(this, init);
    }
    return EdittedField;
}());
export { EdittedField };
if (false) {
    /** @type {?} */
    EdittedField.prototype.item;
    /** @type {?} */
    EdittedField.prototype.field;
    /** @type {?} */
    EdittedField.prototype.index;
}
var TableOption = /** @class */ (function () {
    function TableOption(init) {
        this.multiple = true;
        this.datetimeFormat = new TableDatetimeFormat({});
        this.mainColumns = [];
        this.actions = [];
        this.topButtons = [];
        this.defaultPageSize = 5;
        this.totalToolbarItem = 5;
        this.mode = TableMode.full;
        this.hideSequenceColumn = false;
        this.hideCheckboxColumn = false;
        this.inlineEdit = false;
        Object.assign(this, init);
    }
    return TableOption;
}());
export { TableOption };
if (false) {
    /** @type {?} */
    TableOption.prototype.sort;
    /** @type {?} */
    TableOption.prototype.multiple;
    /** @type {?} */
    TableOption.prototype.datetimeFormat;
    /** @type {?} */
    TableOption.prototype.paging;
    /** @type {?} */
    TableOption.prototype.selectedItems;
    /** @type {?} */
    TableOption.prototype.serviceProvider;
    /** @type {?} */
    TableOption.prototype.localData;
    /** @type {?} */
    TableOption.prototype.request;
    /** @type {?} */
    TableOption.prototype.mainColumns;
    /** @type {?} */
    TableOption.prototype.displayText;
    /** @type {?} */
    TableOption.prototype.message;
    /** @type {?} */
    TableOption.prototype.componentClass;
    /** @type {?} */
    TableOption.prototype.actions;
    /** @type {?} */
    TableOption.prototype.topButtons;
    /** @type {?} */
    TableOption.prototype.rowDetailTemplate;
    /** @type {?} */
    TableOption.prototype.expandFilterArea;
    /** @type {?} */
    TableOption.prototype.pageSizes;
    /** @type {?} */
    TableOption.prototype.defaultPageSize;
    /** @type {?} */
    TableOption.prototype.totalToolbarItem;
    /** @type {?} */
    TableOption.prototype.maxPage;
    /** @type {?} */
    TableOption.prototype.key;
    /** @type {?} */
    TableOption.prototype.title;
    /** @type {?} */
    TableOption.prototype.maxLenghtext;
    /** @type {?} */
    TableOption.prototype.mode;
    /** @type {?} */
    TableOption.prototype.hideSequenceColumn;
    /** @type {?} */
    TableOption.prototype.hideCheckboxColumn;
    /** @type {?} */
    TableOption.prototype.displayMode;
    /** @type {?} */
    TableOption.prototype.defaultOrderBy;
    /** @type {?} */
    TableOption.prototype.defautOrderDirection;
    /** @type {?} */
    TableOption.prototype.inlineEdit;
    /** @type {?} */
    TableOption.prototype.searchFields;
}
/** @enum {string} */
var TableMode = {
    compact: 'compact',
    full: 'full',
};
export { TableMode };
var TableConstant = /** @class */ (function () {
    function TableConstant() {
    }
    TableConstant.ComponentClass = 'primary';
    TableConstant.Key = 'name';
    TableConstant.DatetimeLocate = 'vi-VN';
    TableConstant.PageSizes = [5, 10, 15, 20, 50];
    TableConstant.Message = {
        NotFoundMessage: 'Chưa có thông tin',
        InvalidFormatMessage: 'không hợp lệ.',
        FoundMessage: 'Tìm thấy <span class="confirm-highlight">[0]</span> kết quả.',
        SelectedItemsMessage: 'Đã chọn <span class="highlight">[0]</span> bản ghi.',
        ConfirmSelectAllRecordsMessage: '<span class="confirm-highlight">Chọn tất cả kết quả?</span>',
        ConfirmClearAllRecordsMessage: '<span class="confirm-highlight text-danger">Bỏ chọn tất cả </span>?',
        DeleteMessage: 'Bạn có chắc chắn muốn xóa <span class="confirm-highlight text-danger">[0]</span> không?',
        LoadingMessage: 'Đang tải dữ liệu...',
        RefMessage: 'liên quan tới'
    };
    TableConstant.DisplayText = {
        PlaceholderSearch: 'Nhập từ khóa tìm kiếm...',
        BtnReset: 'Khôi phục',
        BtnSearch: 'Tìm kiếm',
        Action: 'Hành động',
        SelectPageSize: 'Hiển thị',
        DeleteTitle: 'Xóa',
        BtnAcceptTitle: 'Đồng ý',
        BtnCancelTitle: 'Đóng',
        FilterTitle: 'Tìm kiếm theo',
        ApplyFilter: 'Áp dụng lọc',
        DetailTitle: 'Thông tin chi tiết',
        PageTitle: 'Trang',
        AdvancedSearchTitle: 'Tìm kiếm nâng cao',
        AdvancedBtnTitle: 'Tìm kiếm',
        AdvancedBtnCancelTitle: 'Hủy bỏ',
        AllTitle: 'Tất cả'
    };
    TableConstant.Direction = {
        ASC: 'asc',
        DESC: 'desc'
    };
    TableConstant.TextAlign = {
        Left: 'left',
        Right: 'right',
        Center: 'center'
    };
    TableConstant.Action = {
        Edit: 'edit',
        Delete: 'delete',
        Custom: 'Custom'
    };
    TableConstant.ActionType = {
        Both: 'both',
        Toolbar: 'toolbar',
        Inline: 'inline'
    };
    return TableConstant;
}());
export { TableConstant };
if (false) {
    /** @type {?} */
    TableConstant.ComponentClass;
    /** @type {?} */
    TableConstant.Key;
    /** @type {?} */
    TableConstant.DatetimeLocate;
    /** @type {?} */
    TableConstant.PageSizes;
    /** @type {?} */
    TableConstant.Message;
    /** @type {?} */
    TableConstant.DisplayText;
    /** @type {?} */
    TableConstant.Direction;
    /** @type {?} */
    TableConstant.TextAlign;
    /** @type {?} */
    TableConstant.Action;
    /** @type {?} */
    TableConstant.ActionType;
}
;
/** @enum {string} */
var TableColumnType = {
    Number: 'number',
    String: 'string',
    Date: 'date',
    DateTime: 'datetime',
    DateRange: 'daterange',
    DateTimeRange: 'datetimerange',
    Time: 'time',
    TimeRange: 'timerange',
    Boolean: 'boolean',
    Description: 'description',
    Currency: 'currency',
    Dropdown: 'dropdown',
    Custom: 'custom',
};
export { TableColumnType };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC90YWJsZS90YWJsZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEscUNBS0M7OztJQUpDLGtDQUFrQjs7SUFDbEIscUNBQXFCOztJQUNyQixzQ0FBNkM7O0lBQzdDLHNDQUFtRTs7Ozs7QUFHckUsK0JBR0M7OztJQUZDLHlCQUFXOztJQUNYLDJCQUFxQjs7QUFHdkI7SUEwQkUscUJBQVksSUFBMkI7UUFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQzs7OztJQTVCQyw0QkFBcUI7O0lBQ3JCLCtCQUFxQjs7SUFDckIsZ0NBQW1COztJQUNuQixnQ0FBb0I7O0lBQ3BCLGtDQUFzQjs7SUFDdEIsNEJBQWU7O0lBQ2Ysa0NBQXFCOztJQUNyQixvQ0FBd0I7O0lBQ3hCLDRCQUFlOztJQUNmLGdDQUFtQjs7SUFDbkIsMkJBQXVCOztJQUN2QixrQ0FBc0I7O0lBQ3RCLGlDQUFxQjs7SUFDckIsK0JBQWtGOztJQUNsRixxQ0FBd0M7O0lBQ3hDLDJCQUFxQjs7SUFDckIsNENBS0U7O0lBQ0YseUJBQVk7O0lBQ1oscUNBQXdDOztBQU8xQztJQUFBO0lBSUEsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7SUFIQyxnQ0FBbUI7O0lBQ25CLDhCQUFpQjs7SUFDakIsNEJBQWU7O0FBR2pCO0lBV0UscUJBQVksSUFBMkI7UUFOdkMsU0FBSSxHQUFZLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBTzlDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFkRCxJQWND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d0Q7O0lBQ3hELHNCQVVFOztJQUVGLDBCQWlCRTs7SUFFRix3QkFHRTs7SUFFRix3QkFJRTs7SUFFRixxQkFJQzs7SUFDRCx5QkFJQzs7QUFDRixDQUFDOzs7SUFHQSxRQUFTLFFBQVE7SUFDakIsUUFBUyxRQUFRO0lBQ2pCLE1BQU8sTUFBTTtJQUNiLFVBQVcsVUFBVTtJQUNyQixXQUFZLFdBQVc7SUFDdkIsZUFBZ0IsZUFBZTtJQUMvQixNQUFPLE1BQU07SUFDYixXQUFZLFdBQVc7SUFDdkIsU0FBVSxTQUFTO0lBQ25CLGFBQWMsYUFBYTtJQUMzQixVQUFXLFVBQVU7SUFDckIsVUFBVyxVQUFVO0lBQ3JCLFFBQVMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRlbXBsYXRlUmVmLCBFbGVtZW50UmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlRWRpdElubGluZSB7XHJcbiAgZW5hYmxlZD86IGJvb2xlYW47XHJcbiAgYXV0b0NvbW1pdD86IGJvb2xlYW47XHJcbiAgY3JlYXRlQXN5bmM/OiAoaXRlbTogYW55KSA9PiBPYnNlcnZhYmxlPGFueT47XHJcbiAgdXBkYXRlQXN5bmM/OiAoaXRlbTogYW55LCBjb2x1bW4/OiBUYWJsZUNvbHVtbikgPT4gT2JzZXJ2YWJsZTxhbnk+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlQ2VsbCB7XHJcbiAgaXRlbT86IGFueTtcclxuICBjb2x1bW4/OiBUYWJsZUNvbHVtbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29sdW1uIHtcclxuICB0aXRsZT86ICgpID0+IHN0cmluZztcclxuICB2YWx1ZVJlZj86ICgpID0+IGFueTtcclxuICBkaXJlY3Rpb24/OiBzdHJpbmc7XHJcbiAgYWxsb3dTb3J0PzogYm9vbGVhbjtcclxuICBhbGxvd0ZpbHRlcj86IGJvb2xlYW47XHJcbiAgb3JkZXI/OiBudW1iZXI7XHJcbiAgY3VzdG9tQ2xhc3M/OiBzdHJpbmc7XHJcbiAgZGVmYXVsdFNvcnRlcj86IGJvb2xlYW47XHJcbiAgd2lkdGg/OiBudW1iZXI7XHJcbiAgdGV4dEFsaWduPzogc3RyaW5nO1xyXG4gIHR5cGU/OiBUYWJsZUNvbHVtblR5cGU7XHJcbiAgc2hvd1Rvb2x0aXA/OiBib29sZWFuO1xyXG4gIGVkaXRJbmxpbmU/OiBib29sZWFuO1xyXG4gIGNhbGxiYWNrPzogKHByb3ZpZGVyPzogVGFibGVDb21wb25lbnQsIGVsZW1lbnQ/OiBFbGVtZW50UmVmLCAkZXZlbnQ/OiBhbnkpID0+IGFueTtcclxuICBjdXN0b21UZW1wbGF0ZT86ICgpID0+IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgaGlkZT86ICgpID0+IGJvb2xlYW47XHJcbiAgZHJvcGRvd25Db25maWd1cmF0aW9uPzoge1xyXG4gICAgc2VhcmNoRnVuY3Rpb246ICh0ZXh0OiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGN1cnJlbnRQYWdlOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIpID0+IE9ic2VydmFibGU8eyBpdGVtczogYW55W10sIHRvdGFsUmVjb3JkczogbnVtYmVyIH0+LFxyXG4gICAgbXVsdGlwbGU/OiBib29sZWFuLFxyXG4gICAgYmluZExhYmVsOiBzdHJpbmcsXHJcbiAgICBiaW5kVmFsdWU6IHN0cmluZyxcclxuICB9O1xyXG4gIGlkPzogc3RyaW5nO1xyXG4gIGZpbHRlclRlbXBsYXRlPzogKCkgPT4gVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8VGFibGVDb2x1bW4+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlU29ydGVyIHtcclxuICBkaXJlY3Rpb24/OiBzdHJpbmc7XHJcbiAgb3JkZXJCeT86IHN0cmluZztcclxuICBvcmRlcj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlQWN0aW9uIHtcclxuICBpZD86IHN0cmluZztcclxuICB0aXRsZT86ICgpID0+IHN0cmluZztcclxuICB0b29sdGlwPzogKCkgPT4gc3RyaW5nO1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgdHlwZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuQWN0aW9uVHlwZS5JbmxpbmU7XHJcbiAgY3VzdG9tQ2xhc3M/OiBzdHJpbmc7XHJcbiAgZXhlY3V0ZUFzeW5jPzogKGl0ZW0/OiBhbnksIGVsZW1lbnQ/OiBFbGVtZW50UmVmLCBwcm92aWRlcj86IGFueSwgaW5kZXg/OiBudW1iZXIsIGxvYWRlZENhbGxiYWNrPzogRnVuY3Rpb24pID0+IGFueTtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgaGlkZT86IChpdGVtPzogYW55KSA9PiBib29sZWFuO1xyXG4gIGxhenlsb2FkPzogYm9vbGVhbjtcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxUYWJsZUFjdGlvbj4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlUmVxdWVzdCB7XHJcbiAgc2VhcmNoVGV4dD86IHN0cmluZztcclxuICBwYWdlU2l6ZT86IG51bWJlcjtcclxuICBwYWdlSW5kZXg/OiBudW1iZXI7XHJcbiAgc29ydGVycz86IFRhYmxlU29ydGVyW107XHJcbiAgZGF0YT86IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlVGV4dCB7XHJcbiAgcGxhY2Vob2xkZXJTZWFyY2g/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LlBsYWNlaG9sZGVyU2VhcmNoO1xyXG4gIGJ0blNlYXJjaD86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQnRuU2VhcmNoO1xyXG4gIGJ0blJlc2V0Pzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5CdG5SZXNldDtcclxuICBhY3Rpb24/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkFjdGlvbjtcclxuICBzZWxlY3RQYWdlU2l6ZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuU2VsZWN0UGFnZVNpemU7XHJcbiAgZGVsZXRlVGl0bGU/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkRlbGV0ZVRpdGxlO1xyXG4gIGJ0bkFjY2VwdFRpdGxlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5CdG5BY2NlcHRUaXRsZTtcclxuICBidG5DYW5jZWxUaXRsZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQnRuQ2FuY2VsVGl0bGVcclxuICBmaWx0ZXJUaXRsZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuRmlsdGVyVGl0bGU7XHJcbiAgYXBwbHlGaWx0ZXI/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkFwcGx5RmlsdGVyO1xyXG4gIGRldGFpbFRpdGxlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5EZXRhaWxUaXRsZTtcclxuICBwYWdlVGl0bGU/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LlBhZ2VUaXRsZTtcclxuICBhZHZhbmNlZFNlYXJjaFRpdGxlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5BZHZhbmNlZFNlYXJjaFRpdGxlO1xyXG4gIGFkdmFuY2VkQnRuVGl0bGU/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkFkdmFuY2VkQnRuVGl0bGU7XHJcbiAgYWR2YW5jZWRCdG5DYW5jZWxUaXRsZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQWR2YW5jZWRCdG5DYW5jZWxUaXRsZTtcclxuICBhbGxUaXRsZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQWxsVGl0bGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZU1lc3NhZ2Uge1xyXG4gIG5vdEZvdW5kTWVzc2FnZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5Ob3RGb3VuZE1lc3NhZ2U7XHJcbiAgZm91bmRNZXNzYWdlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5NZXNzYWdlLkZvdW5kTWVzc2FnZTtcclxuICBpbnZhbGlkRm9ybWF0TWVzc2FnZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5JbnZhbGlkRm9ybWF0TWVzc2FnZTtcclxuICBzZWxlY3RlZEl0ZW1zTWVzc2FnZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5TZWxlY3RlZEl0ZW1zTWVzc2FnZTtcclxuICBjb25maXJtU2VsZWN0QWxsUmVjb3Jkc01lc3NhZ2U/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuQ29uZmlybVNlbGVjdEFsbFJlY29yZHNNZXNzYWdlO1xyXG4gIGNvbmZpcm1DbGVhckFsbFJlY29yZHNNZXNzYWdlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5NZXNzYWdlLkNvbmZpcm1DbGVhckFsbFJlY29yZHNNZXNzYWdlO1xyXG4gIGRlbGV0ZU1lc3NhZ2U/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuRGVsZXRlTWVzc2FnZTtcclxuICBsb2FkaW5nTWVzc2FnZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5Mb2FkaW5nTWVzc2FnZTtcclxuICByZWZNZXNzYWdlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5NZXNzYWdlLlJlZk1lc3NhZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVSZXNwb25zZTxUPiB7XHJcbiAgdG90YWxSZWNvcmRzPzogbnVtYmVyO1xyXG4gIGl0ZW1zPzogVFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlU2VydmljZVByb3ZpZGVyIHtcclxuICBzZWFyY2hBc3luYz86IChyZXF1ZXN0PzogYW55KSA9PiBPYnNlcnZhYmxlPGFueT47XHJcbiAgY3JlYXRlQXN5bmM/OiAoaXRlbTogYW55KSA9PiBPYnNlcnZhYmxlPGFueT47XHJcbiAgdXBkYXRlQXN5bmM/OiAoaXRlbTogYW55KSA9PiBPYnNlcnZhYmxlPGFueT47XHJcbiAgZGVsZXRlQXN5bmM/OiAoaWRzOiBzdHJpbmcsIGFsbD86IGJvb2xlYW4pID0+IE9ic2VydmFibGU8YW55PjtcclxuICBleHBvcnRBc3luYz86IChyZXF1ZXN0PzogYW55KSA9PiBPYnNlcnZhYmxlPGFueT47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZURhdGV0aW1lRm9ybWF0IHtcclxuICBmb3JtYXQ6IHN0cmluZyA9ICdNTS9kZC95eXl5JztcclxuICBmdWxsOiBib29sZWFuID0gdHJ1ZTtcclxuICBjb25zdHJ1Y3Rvcihpbml0OiBQYXJ0aWFsPFRhYmxlRGF0ZXRpbWVGb3JtYXQ+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXR0ZWRGaWVsZCB7XHJcbiAgaXRlbTogYW55O1xyXG4gIGZpZWxkPzogc3RyaW5nO1xyXG4gIGluZGV4PzogbnVtYmVyO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ6IFBhcnRpYWw8RWRpdHRlZEZpZWxkPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZU9wdGlvbiB7XHJcbiAgc29ydD86IChhOiBhbnksIGI6IGFueSwgb3JkZXJCeTogc3RyaW5nKSA9PiBudW1iZXI7XHJcbiAgbXVsdGlwbGU/OiBib29sZWFuID0gdHJ1ZTtcclxuICBkYXRldGltZUZvcm1hdD86IFRhYmxlRGF0ZXRpbWVGb3JtYXQgPSBuZXcgVGFibGVEYXRldGltZUZvcm1hdCh7fSk7XHJcbiAgcGFnaW5nPzogYm9vbGVhbjtcclxuICBzZWxlY3RlZEl0ZW1zPzogYW55W107XHJcbiAgc2VydmljZVByb3ZpZGVyPzogVGFibGVTZXJ2aWNlUHJvdmlkZXI7XHJcbiAgbG9jYWxEYXRhPzogKCkgPT4gYW55W107XHJcbiAgcmVxdWVzdD86IFRhYmxlUmVxdWVzdDtcclxuICBtYWluQ29sdW1uczogVGFibGVDb2x1bW5bXSA9IFtdO1xyXG4gIGRpc3BsYXlUZXh0PzogVGFibGVUZXh0O1xyXG4gIG1lc3NhZ2U/OiBUYWJsZU1lc3NhZ2U7XHJcbiAgY29tcG9uZW50Q2xhc3M/OiBzdHJpbmc7XHJcbiAgYWN0aW9ucz86IFRhYmxlQWN0aW9uW10gPSBbXTtcclxuICB0b3BCdXR0b25zPzogVGFibGVBY3Rpb25bXSA9IFtdO1xyXG4gIHJvd0RldGFpbFRlbXBsYXRlPzogVHlwZTxhbnk+O1xyXG4gIGV4cGFuZEZpbHRlckFyZWE/OiBib29sZWFuO1xyXG4gIHBhZ2VTaXplcz86IG51bWJlcltdO1xyXG4gIGRlZmF1bHRQYWdlU2l6ZT86IG51bWJlciA9IDU7XHJcbiAgdG90YWxUb29sYmFySXRlbT86IG51bWJlciA9IDU7XHJcbiAgbWF4UGFnZT86IG51bWJlcjtcclxuICBrZXk/OiBzdHJpbmc7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgbWF4TGVuZ2h0ZXh0PzogbnVtYmVyO1xyXG4gIG1vZGU6IFRhYmxlTW9kZSA9IFRhYmxlTW9kZS5mdWxsO1xyXG4gIGhpZGVTZXF1ZW5jZUNvbHVtbj86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBoaWRlQ2hlY2tib3hDb2x1bW4/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgZGlzcGxheU1vZGU/OiAnbGlzdCcgfCAnZnVsbCc7XHJcbiAgZGVmYXVsdE9yZGVyQnk/OiBzdHJpbmc7XHJcbiAgZGVmYXV0T3JkZXJEaXJlY3Rpb24/OiBzdHJpbmc7XHJcbiAgaW5saW5lRWRpdD86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzZWFyY2hGaWVsZHM/OiBzdHJpbmdbXTtcclxuICBjb25zdHJ1Y3Rvcihpbml0OiBQYXJ0aWFsPFRhYmxlT3B0aW9uPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRhYmxlTW9kZSB7XHJcbiAgY29tcGFjdCA9ICdjb21wYWN0JyxcclxuICBmdWxsID0gJ2Z1bGwnXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVDb25zdGFudCB7XHJcbiAgcHVibGljIHN0YXRpYyBDb21wb25lbnRDbGFzczogc3RyaW5nID0gJ3ByaW1hcnknO1xyXG4gIHB1YmxpYyBzdGF0aWMgS2V5OiBzdHJpbmcgPSAnbmFtZSc7XHJcbiAgcHVibGljIHN0YXRpYyBEYXRldGltZUxvY2F0ZTogc3RyaW5nID0gJ3ZpLVZOJztcclxuICBwdWJsaWMgc3RhdGljIFBhZ2VTaXplczogbnVtYmVyW10gPSBbNSwgMTAsIDE1LCAyMCwgNTBdO1xyXG4gIHB1YmxpYyBzdGF0aWMgTWVzc2FnZSA9IHtcclxuICAgIE5vdEZvdW5kTWVzc2FnZTogJ0NoxrBhIGPDsyB0aMO0bmcgdGluJyxcclxuICAgIEludmFsaWRGb3JtYXRNZXNzYWdlOiAna2jDtG5nIGjhu6NwIGzhu4cuJyxcclxuICAgIEZvdW5kTWVzc2FnZTogJ1TDrG0gdGjhuqV5IDxzcGFuIGNsYXNzPVwiY29uZmlybS1oaWdobGlnaHRcIj5bMF08L3NwYW4+IGvhur90IHF14bqjLicsXHJcbiAgICBTZWxlY3RlZEl0ZW1zTWVzc2FnZTogJ8SQw6MgY2jhu41uIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+WzBdPC9zcGFuPiBi4bqjbiBnaGkuJyxcclxuICAgIENvbmZpcm1TZWxlY3RBbGxSZWNvcmRzTWVzc2FnZTogJzxzcGFuIGNsYXNzPVwiY29uZmlybS1oaWdobGlnaHRcIj5DaOG7jW4gdOG6pXQgY+G6oyBr4bq/dCBxdeG6oz88L3NwYW4+JyxcclxuICAgIENvbmZpcm1DbGVhckFsbFJlY29yZHNNZXNzYWdlOiAnPHNwYW4gY2xhc3M9XCJjb25maXJtLWhpZ2hsaWdodCB0ZXh0LWRhbmdlclwiPkLhu48gY2jhu41uIHThuqV0IGPhuqMgPC9zcGFuPj8nLFxyXG4gICAgRGVsZXRlTWVzc2FnZTogJ0LhuqFuIGPDsyBjaOG6r2MgY2jhuq9uIG114buRbiB4w7NhIDxzcGFuIGNsYXNzPVwiY29uZmlybS1oaWdobGlnaHQgdGV4dC1kYW5nZXJcIj5bMF08L3NwYW4+IGtow7RuZz8nLFxyXG4gICAgTG9hZGluZ01lc3NhZ2U6ICfEkGFuZyB04bqjaSBk4buvIGxp4buHdS4uLicsXHJcbiAgICBSZWZNZXNzYWdlOiAnbGnDqm4gcXVhbiB04bubaSdcclxuICB9O1xyXG5cclxuICBwdWJsaWMgc3RhdGljIERpc3BsYXlUZXh0ID0ge1xyXG4gICAgUGxhY2Vob2xkZXJTZWFyY2g6ICdOaOG6rXAgdOG7qyBraMOzYSB0w6xtIGtp4bq/bS4uLicsXHJcbiAgICBCdG5SZXNldDogJ0tow7RpIHBo4bulYycsXHJcbiAgICBCdG5TZWFyY2g6ICdUw6xtIGtp4bq/bScsXHJcbiAgICBBY3Rpb246ICdIw6BuaCDEkeG7mW5nJyxcclxuICAgIFNlbGVjdFBhZ2VTaXplOiAnSGnhu4NuIHRo4buLJyxcclxuICAgIERlbGV0ZVRpdGxlOiAnWMOzYScsXHJcbiAgICBCdG5BY2NlcHRUaXRsZTogJ8SQ4buTbmcgw70nLFxyXG4gICAgQnRuQ2FuY2VsVGl0bGU6ICfEkMOzbmcnLFxyXG4gICAgRmlsdGVyVGl0bGU6ICdUw6xtIGtp4bq/bSB0aGVvJyxcclxuICAgIEFwcGx5RmlsdGVyOiAnw4FwIGThu6VuZyBs4buNYycsXHJcbiAgICBEZXRhaWxUaXRsZTogJ1Row7RuZyB0aW4gY2hpIHRp4bq/dCcsXHJcbiAgICBQYWdlVGl0bGU6ICdUcmFuZycsXHJcbiAgICBBZHZhbmNlZFNlYXJjaFRpdGxlOiAnVMOsbSBraeG6v20gbsOibmcgY2FvJyxcclxuICAgIEFkdmFuY2VkQnRuVGl0bGU6ICdUw6xtIGtp4bq/bScsXHJcbiAgICBBZHZhbmNlZEJ0bkNhbmNlbFRpdGxlOiAnSOG7p3kgYuG7jycsXHJcbiAgICBBbGxUaXRsZTogJ1ThuqV0IGPhuqMnXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBEaXJlY3Rpb24gPSB7XHJcbiAgICBBU0M6ICdhc2MnLFxyXG4gICAgREVTQzogJ2Rlc2MnXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBUZXh0QWxpZ24gPSB7XHJcbiAgICBMZWZ0OiAnbGVmdCcsXHJcbiAgICBSaWdodDogJ3JpZ2h0JyxcclxuICAgIENlbnRlcjogJ2NlbnRlcidcclxuICB9O1xyXG5cclxuICBwdWJsaWMgc3RhdGljIEFjdGlvbiA9IHtcclxuICAgIEVkaXQ6ICdlZGl0JyxcclxuICAgIERlbGV0ZTogJ2RlbGV0ZScsXHJcbiAgICBDdXN0b206ICdDdXN0b20nXHJcbiAgfVxyXG4gIHB1YmxpYyBzdGF0aWMgQWN0aW9uVHlwZSA9IHtcclxuICAgIEJvdGg6ICdib3RoJyxcclxuICAgIFRvb2xiYXI6ICd0b29sYmFyJyxcclxuICAgIElubGluZTogJ2lubGluZSdcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZW51bSBUYWJsZUNvbHVtblR5cGUge1xyXG4gIE51bWJlciA9ICdudW1iZXInLFxyXG4gIFN0cmluZyA9ICdzdHJpbmcnLFxyXG4gIERhdGUgPSAnZGF0ZScsXHJcbiAgRGF0ZVRpbWUgPSAnZGF0ZXRpbWUnLFxyXG4gIERhdGVSYW5nZSA9ICdkYXRlcmFuZ2UnLFxyXG4gIERhdGVUaW1lUmFuZ2UgPSAnZGF0ZXRpbWVyYW5nZScsXHJcbiAgVGltZSA9ICd0aW1lJyxcclxuICBUaW1lUmFuZ2UgPSAndGltZXJhbmdlJyxcclxuICBCb29sZWFuID0gJ2Jvb2xlYW4nLFxyXG4gIERlc2NyaXB0aW9uID0gJ2Rlc2NyaXB0aW9uJyxcclxuICBDdXJyZW5jeSA9ICdjdXJyZW5jeScsXHJcbiAgRHJvcGRvd24gPSAnZHJvcGRvd24nLFxyXG4gIEN1c3RvbSA9ICdjdXN0b20nLFxyXG59Il19