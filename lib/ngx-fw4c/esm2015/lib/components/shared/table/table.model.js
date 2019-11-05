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
export class TableColumn {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
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
export class TableSorter {
}
if (false) {
    /** @type {?} */
    TableSorter.prototype.direction;
    /** @type {?} */
    TableSorter.prototype.orderBy;
    /** @type {?} */
    TableSorter.prototype.order;
}
export class TableAction {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.type = TableConstant.ActionType.Inline;
        Object.assign(this, init);
    }
}
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
export class TableText {
    constructor() {
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
}
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
export class TableMessage {
    constructor() {
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
}
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
export class TableDatetimeFormat {
    /**
     * @param {?} init
     */
    constructor(init) {
        this.format = 'MM/dd/yyyy';
        this.full = true;
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    TableDatetimeFormat.prototype.format;
    /** @type {?} */
    TableDatetimeFormat.prototype.full;
}
export class EdittedField {
    /**
     * @param {?} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    EdittedField.prototype.item;
    /** @type {?} */
    EdittedField.prototype.field;
    /** @type {?} */
    EdittedField.prototype.index;
}
export class TableOption {
    /**
     * @param {?} init
     */
    constructor(init) {
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
}
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
const TableMode = {
    compact: 'compact',
    full: 'full',
};
export { TableMode };
export class TableConstant {
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
const TableColumnType = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC90YWJsZS90YWJsZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEscUNBS0M7OztJQUpDLGtDQUFrQjs7SUFDbEIscUNBQXFCOztJQUNyQixzQ0FBNkM7O0lBQzdDLHNDQUFtRTs7Ozs7QUFHckUsK0JBR0M7OztJQUZDLHlCQUFXOztJQUNYLDJCQUFxQjs7QUFHdkIsTUFBTSxPQUFPLFdBQVc7Ozs7SUEwQnRCLFlBQVksSUFBMkI7UUFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGOzs7SUE1QkMsNEJBQXFCOztJQUNyQiwrQkFBcUI7O0lBQ3JCLGdDQUFtQjs7SUFDbkIsZ0NBQW9COztJQUNwQixrQ0FBc0I7O0lBQ3RCLDRCQUFlOztJQUNmLGtDQUFxQjs7SUFDckIsb0NBQXdCOztJQUN4Qiw0QkFBZTs7SUFDZixnQ0FBbUI7O0lBQ25CLDJCQUF1Qjs7SUFDdkIsa0NBQXNCOztJQUN0QixpQ0FBcUI7O0lBQ3JCLCtCQUFrRjs7SUFDbEYscUNBQXdDOztJQUN4QywyQkFBcUI7O0lBQ3JCLDRDQUtFOztJQUNGLHlCQUFZOztJQUNaLHFDQUF3Qzs7QUFPMUMsTUFBTSxPQUFPLFdBQVc7Q0FJdkI7OztJQUhDLGdDQUFtQjs7SUFDbkIsOEJBQWlCOztJQUNqQiw0QkFBZTs7QUFHakIsTUFBTSxPQUFPLFdBQVc7Ozs7SUFXdEIsWUFBWSxJQUEyQjtRQU52QyxTQUFJLEdBQVksYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFPOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGOzs7SUFiQyx5QkFBWTs7SUFDWiw0QkFBcUI7O0lBQ3JCLDhCQUF1Qjs7SUFD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SUFDYixVQUFXLFVBQVU7SUFDckIsV0FBWSxXQUFXO0lBQ3ZCLGVBQWdCLGVBQWU7SUFDL0IsTUFBTyxNQUFNO0lBQ2IsV0FBWSxXQUFXO0lBQ3ZCLFNBQVUsU0FBUztJQUNuQixhQUFjLGFBQWE7SUFDM0IsVUFBVyxVQUFVO0lBQ3JCLFVBQVcsVUFBVTtJQUNyQixRQUFTLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVJlZiwgRWxlbWVudFJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZUVkaXRJbmxpbmUge1xyXG4gIGVuYWJsZWQ/OiBib29sZWFuO1xyXG4gIGF1dG9Db21taXQ/OiBib29sZWFuO1xyXG4gIGNyZWF0ZUFzeW5jPzogKGl0ZW06IGFueSkgPT4gT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIHVwZGF0ZUFzeW5jPzogKGl0ZW06IGFueSwgY29sdW1uPzogVGFibGVDb2x1bW4pID0+IE9ic2VydmFibGU8YW55PjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZUNlbGwge1xyXG4gIGl0ZW0/OiBhbnk7XHJcbiAgY29sdW1uPzogVGFibGVDb2x1bW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbHVtbiB7XHJcbiAgdGl0bGU/OiAoKSA9PiBzdHJpbmc7XHJcbiAgdmFsdWVSZWY/OiAoKSA9PiBhbnk7XHJcbiAgZGlyZWN0aW9uPzogc3RyaW5nO1xyXG4gIGFsbG93U29ydD86IGJvb2xlYW47XHJcbiAgYWxsb3dGaWx0ZXI/OiBib29sZWFuO1xyXG4gIG9yZGVyPzogbnVtYmVyO1xyXG4gIGN1c3RvbUNsYXNzPzogc3RyaW5nO1xyXG4gIGRlZmF1bHRTb3J0ZXI/OiBib29sZWFuO1xyXG4gIHdpZHRoPzogbnVtYmVyO1xyXG4gIHRleHRBbGlnbj86IHN0cmluZztcclxuICB0eXBlPzogVGFibGVDb2x1bW5UeXBlO1xyXG4gIHNob3dUb29sdGlwPzogYm9vbGVhbjtcclxuICBlZGl0SW5saW5lPzogYm9vbGVhbjtcclxuICBjYWxsYmFjaz86IChwcm92aWRlcj86IFRhYmxlQ29tcG9uZW50LCBlbGVtZW50PzogRWxlbWVudFJlZiwgJGV2ZW50PzogYW55KSA9PiBhbnk7XHJcbiAgY3VzdG9tVGVtcGxhdGU/OiAoKSA9PiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIGhpZGU/OiAoKSA9PiBib29sZWFuO1xyXG4gIGRyb3Bkb3duQ29uZmlndXJhdGlvbj86IHtcclxuICAgIHNlYXJjaEZ1bmN0aW9uOiAodGV4dDogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBjdXJyZW50UGFnZTogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyKSA9PiBPYnNlcnZhYmxlPHsgaXRlbXM6IGFueVtdLCB0b3RhbFJlY29yZHM6IG51bWJlciB9PixcclxuICAgIG11bHRpcGxlPzogYm9vbGVhbixcclxuICAgIGJpbmRMYWJlbDogc3RyaW5nLFxyXG4gICAgYmluZFZhbHVlOiBzdHJpbmcsXHJcbiAgfTtcclxuICBpZD86IHN0cmluZztcclxuICBmaWx0ZXJUZW1wbGF0ZT86ICgpID0+IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFRhYmxlQ29sdW1uPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZVNvcnRlciB7XHJcbiAgZGlyZWN0aW9uPzogc3RyaW5nO1xyXG4gIG9yZGVyQnk/OiBzdHJpbmc7XHJcbiAgb3JkZXI/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUFjdGlvbiB7XHJcbiAgaWQ/OiBzdHJpbmc7XHJcbiAgdGl0bGU/OiAoKSA9PiBzdHJpbmc7XHJcbiAgdG9vbHRpcD86ICgpID0+IHN0cmluZztcclxuICBpY29uPzogc3RyaW5nO1xyXG4gIHR5cGU/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkFjdGlvblR5cGUuSW5saW5lO1xyXG4gIGN1c3RvbUNsYXNzPzogc3RyaW5nO1xyXG4gIGV4ZWN1dGVBc3luYz86IChpdGVtPzogYW55LCBlbGVtZW50PzogRWxlbWVudFJlZiwgcHJvdmlkZXI/OiBhbnksIGluZGV4PzogbnVtYmVyLCBsb2FkZWRDYWxsYmFjaz86IEZ1bmN0aW9uKSA9PiBhbnk7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIGhpZGU/OiAoaXRlbT86IGFueSkgPT4gYm9vbGVhbjtcclxuICBsYXp5bG9hZD86IGJvb2xlYW47XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8VGFibGVBY3Rpb24+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZVJlcXVlc3Qge1xyXG4gIHNlYXJjaFRleHQ/OiBzdHJpbmc7XHJcbiAgcGFnZVNpemU/OiBudW1iZXI7XHJcbiAgcGFnZUluZGV4PzogbnVtYmVyO1xyXG4gIHNvcnRlcnM/OiBUYWJsZVNvcnRlcltdO1xyXG4gIGRhdGE/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZVRleHQge1xyXG4gIHBsYWNlaG9sZGVyU2VhcmNoPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5QbGFjZWhvbGRlclNlYXJjaDtcclxuICBidG5TZWFyY2g/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkJ0blNlYXJjaDtcclxuICBidG5SZXNldD86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQnRuUmVzZXQ7XHJcbiAgYWN0aW9uPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5BY3Rpb247XHJcbiAgc2VsZWN0UGFnZVNpemU/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LlNlbGVjdFBhZ2VTaXplO1xyXG4gIGRlbGV0ZVRpdGxlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5EZWxldGVUaXRsZTtcclxuICBidG5BY2NlcHRUaXRsZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQnRuQWNjZXB0VGl0bGU7XHJcbiAgYnRuQ2FuY2VsVGl0bGU/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkJ0bkNhbmNlbFRpdGxlXHJcbiAgZmlsdGVyVGl0bGU/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkZpbHRlclRpdGxlO1xyXG4gIGFwcGx5RmlsdGVyPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5BcHBseUZpbHRlcjtcclxuICBkZXRhaWxUaXRsZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuRGV0YWlsVGl0bGU7XHJcbiAgcGFnZVRpdGxlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5QYWdlVGl0bGU7XHJcbiAgYWR2YW5jZWRTZWFyY2hUaXRsZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQWR2YW5jZWRTZWFyY2hUaXRsZTtcclxuICBhZHZhbmNlZEJ0blRpdGxlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5BZHZhbmNlZEJ0blRpdGxlO1xyXG4gIGFkdmFuY2VkQnRuQ2FuY2VsVGl0bGU/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkFkdmFuY2VkQnRuQ2FuY2VsVGl0bGU7XHJcbiAgYWxsVGl0bGU/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkFsbFRpdGxlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVNZXNzYWdlIHtcclxuICBub3RGb3VuZE1lc3NhZ2U/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuTm90Rm91bmRNZXNzYWdlO1xyXG4gIGZvdW5kTWVzc2FnZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5Gb3VuZE1lc3NhZ2U7XHJcbiAgaW52YWxpZEZvcm1hdE1lc3NhZ2U/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuSW52YWxpZEZvcm1hdE1lc3NhZ2U7XHJcbiAgc2VsZWN0ZWRJdGVtc01lc3NhZ2U/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuU2VsZWN0ZWRJdGVtc01lc3NhZ2U7XHJcbiAgY29uZmlybVNlbGVjdEFsbFJlY29yZHNNZXNzYWdlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5NZXNzYWdlLkNvbmZpcm1TZWxlY3RBbGxSZWNvcmRzTWVzc2FnZTtcclxuICBjb25maXJtQ2xlYXJBbGxSZWNvcmRzTWVzc2FnZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5Db25maXJtQ2xlYXJBbGxSZWNvcmRzTWVzc2FnZTtcclxuICBkZWxldGVNZXNzYWdlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5NZXNzYWdlLkRlbGV0ZU1lc3NhZ2U7XHJcbiAgbG9hZGluZ01lc3NhZ2U/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuTG9hZGluZ01lc3NhZ2U7XHJcbiAgcmVmTWVzc2FnZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5SZWZNZXNzYWdlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlUmVzcG9uc2U8VD4ge1xyXG4gIHRvdGFsUmVjb3Jkcz86IG51bWJlcjtcclxuICBpdGVtcz86IFRbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZVNlcnZpY2VQcm92aWRlciB7XHJcbiAgc2VhcmNoQXN5bmM/OiAocmVxdWVzdD86IGFueSkgPT4gT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIGNyZWF0ZUFzeW5jPzogKGl0ZW06IGFueSkgPT4gT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIHVwZGF0ZUFzeW5jPzogKGl0ZW06IGFueSkgPT4gT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIGRlbGV0ZUFzeW5jPzogKGlkczogc3RyaW5nLCBhbGw/OiBib29sZWFuKSA9PiBPYnNlcnZhYmxlPGFueT47XHJcbiAgZXhwb3J0QXN5bmM/OiAocmVxdWVzdD86IGFueSkgPT4gT2JzZXJ2YWJsZTxhbnk+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVEYXRldGltZUZvcm1hdCB7XHJcbiAgZm9ybWF0OiBzdHJpbmcgPSAnTU0vZGQveXl5eSc7XHJcbiAgZnVsbDogYm9vbGVhbiA9IHRydWU7XHJcbiAgY29uc3RydWN0b3IoaW5pdDogUGFydGlhbDxUYWJsZURhdGV0aW1lRm9ybWF0Pikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0dGVkRmllbGQge1xyXG4gIGl0ZW06IGFueTtcclxuICBmaWVsZD86IHN0cmluZztcclxuICBpbmRleD86IG51bWJlcjtcclxuICBjb25zdHJ1Y3Rvcihpbml0OiBQYXJ0aWFsPEVkaXR0ZWRGaWVsZD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVPcHRpb24ge1xyXG4gIHNvcnQ/OiAoYTogYW55LCBiOiBhbnksIG9yZGVyQnk6IHN0cmluZykgPT4gbnVtYmVyO1xyXG4gIG11bHRpcGxlPzogYm9vbGVhbiA9IHRydWU7XHJcbiAgZGF0ZXRpbWVGb3JtYXQ/OiBUYWJsZURhdGV0aW1lRm9ybWF0ID0gbmV3IFRhYmxlRGF0ZXRpbWVGb3JtYXQoe30pO1xyXG4gIHBhZ2luZz86IGJvb2xlYW47XHJcbiAgc2VsZWN0ZWRJdGVtcz86IGFueVtdO1xyXG4gIHNlcnZpY2VQcm92aWRlcj86IFRhYmxlU2VydmljZVByb3ZpZGVyO1xyXG4gIGxvY2FsRGF0YT86ICgpID0+IGFueVtdO1xyXG4gIHJlcXVlc3Q/OiBUYWJsZVJlcXVlc3Q7XHJcbiAgbWFpbkNvbHVtbnM6IFRhYmxlQ29sdW1uW10gPSBbXTtcclxuICBkaXNwbGF5VGV4dD86IFRhYmxlVGV4dDtcclxuICBtZXNzYWdlPzogVGFibGVNZXNzYWdlO1xyXG4gIGNvbXBvbmVudENsYXNzPzogc3RyaW5nO1xyXG4gIGFjdGlvbnM/OiBUYWJsZUFjdGlvbltdID0gW107XHJcbiAgdG9wQnV0dG9ucz86IFRhYmxlQWN0aW9uW10gPSBbXTtcclxuICByb3dEZXRhaWxUZW1wbGF0ZT86IFR5cGU8YW55PjtcclxuICBleHBhbmRGaWx0ZXJBcmVhPzogYm9vbGVhbjtcclxuICBwYWdlU2l6ZXM/OiBudW1iZXJbXTtcclxuICBkZWZhdWx0UGFnZVNpemU/OiBudW1iZXIgPSA1O1xyXG4gIHRvdGFsVG9vbGJhckl0ZW0/OiBudW1iZXIgPSA1O1xyXG4gIG1heFBhZ2U/OiBudW1iZXI7XHJcbiAga2V5Pzogc3RyaW5nO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIG1heExlbmdodGV4dD86IG51bWJlcjtcclxuICBtb2RlOiBUYWJsZU1vZGUgPSBUYWJsZU1vZGUuZnVsbDtcclxuICBoaWRlU2VxdWVuY2VDb2x1bW4/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgaGlkZUNoZWNrYm94Q29sdW1uPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGRpc3BsYXlNb2RlPzogJ2xpc3QnIHwgJ2Z1bGwnO1xyXG4gIGRlZmF1bHRPcmRlckJ5Pzogc3RyaW5nO1xyXG4gIGRlZmF1dE9yZGVyRGlyZWN0aW9uPzogc3RyaW5nO1xyXG4gIGlubGluZUVkaXQ/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgc2VhcmNoRmllbGRzPzogc3RyaW5nW107XHJcbiAgY29uc3RydWN0b3IoaW5pdDogUGFydGlhbDxUYWJsZU9wdGlvbj4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUYWJsZU1vZGUge1xyXG4gIGNvbXBhY3QgPSAnY29tcGFjdCcsXHJcbiAgZnVsbCA9ICdmdWxsJ1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29uc3RhbnQge1xyXG4gIHB1YmxpYyBzdGF0aWMgQ29tcG9uZW50Q2xhc3M6IHN0cmluZyA9ICdwcmltYXJ5JztcclxuICBwdWJsaWMgc3RhdGljIEtleTogc3RyaW5nID0gJ25hbWUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgRGF0ZXRpbWVMb2NhdGU6IHN0cmluZyA9ICd2aS1WTic7XHJcbiAgcHVibGljIHN0YXRpYyBQYWdlU2l6ZXM6IG51bWJlcltdID0gWzUsIDEwLCAxNSwgMjAsIDUwXTtcclxuICBwdWJsaWMgc3RhdGljIE1lc3NhZ2UgPSB7XHJcbiAgICBOb3RGb3VuZE1lc3NhZ2U6ICdDaMawYSBjw7MgdGjDtG5nIHRpbicsXHJcbiAgICBJbnZhbGlkRm9ybWF0TWVzc2FnZTogJ2tow7RuZyBo4bujcCBs4buHLicsXHJcbiAgICBGb3VuZE1lc3NhZ2U6ICdUw6xtIHRo4bqleSA8c3BhbiBjbGFzcz1cImNvbmZpcm0taGlnaGxpZ2h0XCI+WzBdPC9zcGFuPiBr4bq/dCBxdeG6oy4nLFxyXG4gICAgU2VsZWN0ZWRJdGVtc01lc3NhZ2U6ICfEkMOjIGNo4buNbiA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPlswXTwvc3Bhbj4gYuG6o24gZ2hpLicsXHJcbiAgICBDb25maXJtU2VsZWN0QWxsUmVjb3Jkc01lc3NhZ2U6ICc8c3BhbiBjbGFzcz1cImNvbmZpcm0taGlnaGxpZ2h0XCI+Q2jhu41uIHThuqV0IGPhuqMga+G6v3QgcXXhuqM/PC9zcGFuPicsXHJcbiAgICBDb25maXJtQ2xlYXJBbGxSZWNvcmRzTWVzc2FnZTogJzxzcGFuIGNsYXNzPVwiY29uZmlybS1oaWdobGlnaHQgdGV4dC1kYW5nZXJcIj5C4buPIGNo4buNbiB04bqldCBj4bqjIDwvc3Bhbj4/JyxcclxuICAgIERlbGV0ZU1lc3NhZ2U6ICdC4bqhbiBjw7MgY2jhuq9jIGNo4bqvbiBtdeG7kW4geMOzYSA8c3BhbiBjbGFzcz1cImNvbmZpcm0taGlnaGxpZ2h0IHRleHQtZGFuZ2VyXCI+WzBdPC9zcGFuPiBraMO0bmc/JyxcclxuICAgIExvYWRpbmdNZXNzYWdlOiAnxJBhbmcgdOG6o2kgZOG7ryBsaeG7h3UuLi4nLFxyXG4gICAgUmVmTWVzc2FnZTogJ2xpw6puIHF1YW4gdOG7m2knXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBEaXNwbGF5VGV4dCA9IHtcclxuICAgIFBsYWNlaG9sZGVyU2VhcmNoOiAnTmjhuq1wIHThu6sga2jDs2EgdMOsbSBraeG6v20uLi4nLFxyXG4gICAgQnRuUmVzZXQ6ICdLaMO0aSBwaOG7pWMnLFxyXG4gICAgQnRuU2VhcmNoOiAnVMOsbSBraeG6v20nLFxyXG4gICAgQWN0aW9uOiAnSMOgbmggxJHhu5luZycsXHJcbiAgICBTZWxlY3RQYWdlU2l6ZTogJ0hp4buDbiB0aOG7iycsXHJcbiAgICBEZWxldGVUaXRsZTogJ1jDs2EnLFxyXG4gICAgQnRuQWNjZXB0VGl0bGU6ICfEkOG7k25nIMO9JyxcclxuICAgIEJ0bkNhbmNlbFRpdGxlOiAnxJDDs25nJyxcclxuICAgIEZpbHRlclRpdGxlOiAnVMOsbSBraeG6v20gdGhlbycsXHJcbiAgICBBcHBseUZpbHRlcjogJ8OBcCBk4bulbmcgbOG7jWMnLFxyXG4gICAgRGV0YWlsVGl0bGU6ICdUaMO0bmcgdGluIGNoaSB0aeG6v3QnLFxyXG4gICAgUGFnZVRpdGxlOiAnVHJhbmcnLFxyXG4gICAgQWR2YW5jZWRTZWFyY2hUaXRsZTogJ1TDrG0ga2nhur9tIG7Dom5nIGNhbycsXHJcbiAgICBBZHZhbmNlZEJ0blRpdGxlOiAnVMOsbSBraeG6v20nLFxyXG4gICAgQWR2YW5jZWRCdG5DYW5jZWxUaXRsZTogJ0jhu6d5IGLhu48nLFxyXG4gICAgQWxsVGl0bGU6ICdU4bqldCBj4bqjJ1xyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgRGlyZWN0aW9uID0ge1xyXG4gICAgQVNDOiAnYXNjJyxcclxuICAgIERFU0M6ICdkZXNjJ1xyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgVGV4dEFsaWduID0ge1xyXG4gICAgTGVmdDogJ2xlZnQnLFxyXG4gICAgUmlnaHQ6ICdyaWdodCcsXHJcbiAgICBDZW50ZXI6ICdjZW50ZXInXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBBY3Rpb24gPSB7XHJcbiAgICBFZGl0OiAnZWRpdCcsXHJcbiAgICBEZWxldGU6ICdkZWxldGUnLFxyXG4gICAgQ3VzdG9tOiAnQ3VzdG9tJ1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIEFjdGlvblR5cGUgPSB7XHJcbiAgICBCb3RoOiAnYm90aCcsXHJcbiAgICBUb29sYmFyOiAndG9vbGJhcicsXHJcbiAgICBJbmxpbmU6ICdpbmxpbmUnXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGVudW0gVGFibGVDb2x1bW5UeXBlIHtcclxuICBOdW1iZXIgPSAnbnVtYmVyJyxcclxuICBTdHJpbmcgPSAnc3RyaW5nJyxcclxuICBEYXRlID0gJ2RhdGUnLFxyXG4gIERhdGVUaW1lID0gJ2RhdGV0aW1lJyxcclxuICBEYXRlUmFuZ2UgPSAnZGF0ZXJhbmdlJyxcclxuICBEYXRlVGltZVJhbmdlID0gJ2RhdGV0aW1lcmFuZ2UnLFxyXG4gIFRpbWUgPSAndGltZScsXHJcbiAgVGltZVJhbmdlID0gJ3RpbWVyYW5nZScsXHJcbiAgQm9vbGVhbiA9ICdib29sZWFuJyxcclxuICBEZXNjcmlwdGlvbiA9ICdkZXNjcmlwdGlvbicsXHJcbiAgQ3VycmVuY3kgPSAnY3VycmVuY3knLFxyXG4gIERyb3Bkb3duID0gJ2Ryb3Bkb3duJyxcclxuICBDdXN0b20gPSAnY3VzdG9tJyxcclxufSJdfQ==