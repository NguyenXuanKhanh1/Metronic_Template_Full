/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef, ContentChild, RendererFactory2 } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TableOption, TableMode, TableConstant, TableText, TableMessage, TableColumnType } from './table.model';
import { TableRowDetailDirective } from './table-row-detail.directive';
import { of, BehaviorSubject, Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { delay } from "rxjs/operators";
var TableComponent = /** @class */ (function () {
    function TableComponent(thisElement, rendererFactory, dataService) {
        this.thisElement = thisElement;
        this.rendererFactory = rendererFactory;
        this.dataService = dataService;
        this.items = [];
        this.totalRecords = 0;
        this.selectedItems = [];
        this.totalPages = [];
        this.currentPage = 0;
        this.filter = {};
        this.maxPage = 5;
        this.selectedAll = false;
        this.filterColumns = [];
        this.toolbarActions = [];
        this.inlineActions = [];
        this.filterSectionToggle = false;
        this.textSearched = "";
        this.showReset = false;
        this.defaultPageSize = 5;
        this.changePage$ = new BehaviorSubject(0);
        this.request = {};
        this.previousRequest = {};
        this.recursiveCounter = 0;
        this.subscriptions = new Subscription();
        this.edittedFields = [];
        this._render = rendererFactory.createRenderer(null, null);
    }
    /**
     * @return {?}
     */
    TableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.init();
        /** @type {?} */
        var changePageSubscription = this.changePage$.pipe(distinctUntilChanged()).subscribe((/**
         * @param {?} pageIndex
         * @return {?}
         */
        function (pageIndex) {
            if (pageIndex < 0 || pageIndex >= _this.totalPages.length)
                return;
            _this.currentPage = pageIndex;
            if (!_this.option.request) {
                _this.option.request = {};
            }
            _this.option.request.pageIndex = _this.currentPage;
            _this.searchAsync(null, null, true).subscribe();
        }));
        this.subscriptions.add(changePageSubscription);
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.registerEvents();
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.unsubscribe();
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.option.selectedItems && this.option.selectedItems.length > 0) {
            if (!this.selectedItems)
                this.selectedItems = [];
            this.option.selectedItems.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                _this.selectedItems.push(item);
            }));
        }
        if (!this.option.mode)
            this.option.mode = TableMode.full;
        if (!this.option.actions)
            this.option.actions = [];
        if (!this.option.key)
            this.option.key = TableConstant.Key;
        if (!this.option.totalToolbarItem)
            this.option.totalToolbarItem = 5;
        if (this.option.maxPage)
            this.maxPage = this.option.maxPage;
        if (!this.option.defaultOrderBy)
            this.option.defaultOrderBy = 'CreatedDate';
        if (!this.option.defautOrderDirection)
            this.option.defautOrderDirection = TableConstant.Direction.DESC;
        if (!this.option.componentClass) {
            this.option.componentClass = TableConstant.ComponentClass;
            this.thisElement.nativeElement.classList.add(this.option.componentClass);
        }
        if (this.option.maxLenghtext === undefined || this.option.maxLenghtext === null) {
            this.option.maxLenghtext = 150;
        }
        this.initTableTableTexts();
        this.initTableTableMessages();
        this.initMainColumns();
        if (this.option.actions) {
            this.option.actions.forEach((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                if (!action.type)
                    action.type = TableConstant.ActionType.Inline;
            }));
        }
        this.toolbarActions = this.option.actions.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return [TableConstant.ActionType.Both, TableConstant.ActionType.Toolbar].indexOf(x.type) >= 0; }));
        this.inlineActions = this.option.actions.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return [TableConstant.ActionType.Both, TableConstant.ActionType.Inline].indexOf(x.type) >= 0; }));
        /** @type {?} */
        var inFullMode = this.option.mode === TableMode.full;
        this.filterColumns = this.option.mainColumns.filter((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return column.allowFilter; }))
            .sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a.order > b.order ? 1 : a.order === b.order ? 0 : -1; }));
        this.hasFilterSection = inFullMode;
        if (this.option.paging === undefined) {
            this.option.paging = inFullMode;
        }
        if (inFullMode) {
            if (!this.option.pageSizes)
                this.option.pageSizes = TableConstant.PageSizes;
            if (!this.option.defaultPageSize)
                this.option.defaultPageSize = TableConstant.PageSizes[0];
            if (this.option.defaultPageSize)
                this.defaultPageSize = this.option.defaultPageSize;
        }
        /** @type {?} */
        var hasToolbarActions = this.option.actions && this.option.actions.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return [TableConstant.ActionType.Toolbar, TableConstant.ActionType.Both].indexOf(x.type) >= 0; })).length > 0;
        /** @type {?} */
        var hasTopButtons = this.option.topButtons && this.option.topButtons.length > 0;
        this.hasToolbarSection = inFullMode || hasToolbarActions || hasTopButtons;
        this.hasFooterSection = inFullMode || this.option.paging;
        this.hasPageSizeChooser = this.option.paging;
        if (this.option.hideCheckboxColumn === undefined) {
            this.option.hideCheckboxColumn = !hasToolbarActions;
        }
        if (!this.option.request) {
            this.option.request = {
                pageIndex: 0,
                pageSize: this.defaultPageSize
            };
            if (this.option.defaultPageSize) {
                this.option.request.pageSize = this.option.defaultPageSize;
                this.pageSize = this.option.request.pageSize;
            }
            this.searchAsync().subscribe();
        }
        else {
            if (!this.option.request.pageSize) {
                this.pageSize = this.option.request.pageSize;
            }
            else {
                this.pageSize = this.defaultPageSize;
            }
            this.searchAsync().subscribe();
        }
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.callback = /**
     * @return {?}
     */
    function () {
        return of(this.selectedItems);
    };
    /**
     * @param {?} item
     * @param {?=} refresh
     * @param {?=} execute
     * @param {?=} callback
     * @return {?}
     */
    TableComponent.prototype.copy = /**
     * @param {?} item
     * @param {?=} refresh
     * @param {?=} execute
     * @param {?=} callback
     * @return {?}
     */
    function (item, refresh, execute, callback) {
        if (refresh === void 0) { refresh = true; }
        if (!this.items)
            this.items = [];
        /** @type {?} */
        var copyItem = this.dataService.cloneItem(item);
        if (copyItem.id)
            copyItem.id = this.dataService.newGuid();
        if (execute) {
            execute(copyItem);
        }
        if (this.option.localData) {
            this.localData.push(copyItem);
        }
        this.items.push(copyItem);
        if (callback)
            callback(copyItem);
        if (refresh == true) {
            this.searchAsync(true).subscribe();
        }
    };
    /**
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    TableComponent.prototype.acceptInlineEdit = /**
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    function (field, index) {
        this.closeInlineEdit(field, index);
    };
    /**
     * @param {?} item
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    TableComponent.prototype.cancelInlineEdit = /**
     * @param {?} item
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    function (item, field, index) {
        /** @type {?} */
        var currentItem = this.retrieveInlineEdit(field, index);
        if (!currentItem)
            return;
        item[field] = currentItem.item[field];
        this.closeInlineEdit(field, index);
    };
    /**
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    TableComponent.prototype.closeInlineEdit = /**
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    function (field, index) {
        /** @type {?} */
        var itemIndex = this.edittedFields.findIndex((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.field == field && s.index == index; }));
        if (itemIndex > -1)
            this.edittedFields.splice(itemIndex, 1);
    };
    /**
     * @param {?} item
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    TableComponent.prototype.editInline = /**
     * @param {?} item
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    function (item, field, index) {
        if (!item)
            return;
        /** @type {?} */
        var currentItem = this.retrieveInlineEdit(field, index);
        if (!currentItem) {
            this.edittedFields.push({
                item: this.dataService.cloneItem(item),
                index: index,
                field: field
            });
        }
        else {
            currentItem.item = this.dataService.cloneItem(item);
        }
    };
    /**
     * @param {?} item
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    TableComponent.prototype.hasInlineEdit = /**
     * @param {?} item
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    function (item, field, index) {
        if (!this.option || this.option.inlineEdit != true)
            return false;
        if (!item || !this.edittedFields || this.edittedFields.length == 0)
            return false;
        return ((/** @type {?} */ (this.edittedFields))).findIndex((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.field == field && s.index == index; })) > -1;
    };
    /**
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    TableComponent.prototype.retrieveInlineEdit = /**
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    function (field, index) {
        if (!this.edittedFields || this.edittedFields.length == 0)
            return null;
        return ((/** @type {?} */ (this.edittedFields))).find((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.field == field && s.index == index; }));
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.resetFilters = /**
     * @return {?}
     */
    function () {
        this.filter = {};
        this.selectedItems = [];
        this.selectedAll = false;
        this.filterSectionToggle = false;
        this.totalPages = [];
        this.option.request.pageIndex = 0;
        this.currentPage = 0;
        if (!this.option.request.pageSize) {
            this.pageSize = this.option.request.pageSize;
        }
        else {
            this.pageSize = this.defaultPageSize;
        }
        this.option.request.pageSize = this.pageSize;
        this.searchAsync().subscribe();
        this.showReset = false;
        this.request = {};
    };
    /**
     * @param {?} standard
     * @return {?}
     */
    TableComponent.prototype.getToolbarActions = /**
     * @param {?} standard
     * @return {?}
     */
    function (standard) {
        var _this = this;
        /** @type {?} */
        var actions = [];
        if (this.toolbarActions) {
            this.toolbarActions.forEach((/**
             * @param {?} action
             * @param {?} index
             * @return {?}
             */
            function (action, index) {
                if (!standard) {
                    if (index >= _this.option.totalToolbarItem) {
                        actions.push(action);
                    }
                }
                else {
                    if (index < _this.option.totalToolbarItem) {
                        actions.push(action);
                    }
                }
            }));
        }
        return actions;
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.changePageSize = /**
     * @return {?}
     */
    function () {
        this.option.request.pageSize = this.pageSize;
        this.option.request.pageIndex = 0;
        this.searchAsync().subscribe();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TableComponent.prototype.handkeKeypress = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event && $event.which == 13) {
            this.searchAsync().subscribe();
        }
    };
    /**
     * @param {?} $event
     * @param {?=} blur
     * @return {?}
     */
    TableComponent.prototype.goto = /**
     * @param {?} $event
     * @param {?=} blur
     * @return {?}
     */
    function ($event, blur) {
        if ($event.which == 13 || blur == true) {
            this.currentPage = $event.target.value - 1;
            if (this.currentPage < 0)
                this.currentPage = 0;
            if (this.currentPage >= this.totalPages.length) {
                this.currentPage = this.totalPages.length - 1;
            }
            $event.target.value = this.currentPage + 1;
            this.changePage$.next(this.currentPage);
        }
        else {
            if ($event.which < 48 || $event.which > 57)
                $event.preventDefault();
        }
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.toggleFilterSection = /**
     * @return {?}
     */
    function () {
        this.filterSectionToggle = !this.filterSectionToggle;
    };
    /**
     * @param {?} column
     * @param {?} direction
     * @return {?}
     */
    TableComponent.prototype.showSorter = /**
     * @param {?} column
     * @param {?} direction
     * @return {?}
     */
    function (column, direction) {
        return column.direction === direction;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    TableComponent.prototype.toggleRowDetail = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        item.toggle = !item.toggle;
    };
    /**
     * @param {?} column
     * @return {?}
     */
    TableComponent.prototype.sortAsync = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        if (!column.valueRef)
            return;
        this.resetSortAsync(column);
        if (column && column.allowSort != false) {
            if (!column.direction) {
                column.direction = TableConstant.Direction.ASC;
            }
            else {
                column.direction = column.direction == TableConstant.Direction.ASC ? TableConstant.Direction.DESC : TableConstant.Direction.ASC;
            }
        }
        this.orderBy = this.dataService.toPascalCase(column.valueRef());
        this.direction = column.direction;
        this.searchAsync(null, null, false).subscribe();
    };
    /**
     * @param {?} selected
     * @return {?}
     */
    TableComponent.prototype.selectAll = /**
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        this.selectedItems = selected ? tslib_1.__spread(this.items) : [];
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.clearAll = /**
     * @return {?}
     */
    function () {
        this.selectedItems = [];
        this.selectedAll = false;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    TableComponent.prototype.selectItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var selectedIds = this.selectedItems.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id; }));
        /** @type {?} */
        var existingItemIndex = selectedIds.indexOf(item.id);
        if (existingItemIndex >= 0) {
            this.selectedItems.splice(existingItemIndex, 1);
        }
        else {
            this.selectedItems.push(item);
        }
        if (!this.option.multiple) {
            /** @type {?} */
            var currentItem = this.selectedItems.find((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return s.id == item.id; }));
            if (currentItem) {
                this.selectedItems = [currentItem];
            }
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    TableComponent.prototype.isRowSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var selectedIds = this.selectedItems.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id; }));
        return selectedIds.indexOf(item.id) >= 0;
    };
    /**
     * @param {?=} item
     * @return {?}
     */
    TableComponent.prototype.hasAnyAction = /**
     * @param {?=} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var aliveActions = this.inlineActions.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return !x.hide || !x.hide(item); }));
        return aliveActions.length > 0;
    };
    /**
     * @param {?} action
     * @param {?=} item
     * @param {?=} $event
     * @param {?=} index
     * @param {?=} loadedCallback
     * @return {?}
     */
    TableComponent.prototype.executeActionAsync = /**
     * @param {?} action
     * @param {?=} item
     * @param {?=} $event
     * @param {?=} index
     * @param {?=} loadedCallback
     * @return {?}
     */
    function (action, item, $event, index, loadedCallback) {
        if (action) {
            /** @type {?} */
            var target = $event ? $event.target : null;
            action.executeAsync(item, target, this, index, loadedCallback);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    TableComponent.prototype.isActive = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.selectedItems.length === 0)
            return false;
        /** @type {?} */
        var currentItem = this.selectedItems.find((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.id === item.id; }));
        return currentItem && currentItem.checkedRow;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TableComponent.prototype.getCurrentIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.option.request) {
            return this.option.request.pageIndex * this.option.request.pageSize + index + 1;
        }
        return -1;
    };
    /**
     * @param {?} column
     * @param {?} item
     * @return {?}
     */
    TableComponent.prototype.getDropdownDisplayText = /**
     * @param {?} column
     * @param {?} item
     * @return {?}
     */
    function (column, item) {
        /** @type {?} */
        var values = item[column.valueRef()];
        if (!values)
            return '';
        if (values instanceof Array) {
            /** @type {?} */
            var result = (/** @type {?} */ (values.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x; })).map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x[column.dropdownConfiguration.bindLabel]; }))));
            return result.join(', ');
        }
        return values[column.dropdownConfiguration.bindLabel];
    };
    /**
     * @param {?} n
     * @return {?}
     */
    TableComponent.prototype.getPages = /**
     * @param {?} n
     * @return {?}
     */
    function (n) {
        /** @type {?} */
        var pages = [];
        if (this.totalPages.length < n) {
            for (var i = this.totalPages.length - 1; i >= 0; i--) {
                pages.push(i);
            }
            return pages;
        }
        if (this.currentPage < n) {
            for (var i = n - 1; i >= 0; i--) {
                pages.push(i);
            }
        }
        else {
            /** @type {?} */
            var count = Math.floor(n / 2);
            /** @type {?} */
            var max = this.currentPage + count >= this.totalPages.length ? this.totalPages.length - 1 : this.currentPage + count;
            for (var i = max; i >= this.currentPage - count; i--) {
                pages.push(i);
            }
        }
        return pages;
    };
    /**
     * @param {?=} keepSelectedItems
     * @return {?}
     */
    TableComponent.prototype.reload = /**
     * @param {?=} keepSelectedItems
     * @return {?}
     */
    function (keepSelectedItems) {
        if (keepSelectedItems === void 0) { keepSelectedItems = false; }
        return this.searchAsync(null, null, keepSelectedItems);
    };
    /**
     * @param {?=} advancedFilter
     * @return {?}
     */
    TableComponent.prototype.search = /**
     * @param {?=} advancedFilter
     * @return {?}
     */
    function (advancedFilter) {
        this.searchAsync(advancedFilter).subscribe();
    };
    /**
     * @param {?} record
     * @return {?}
     */
    TableComponent.prototype.trackRecords = /**
     * @param {?} record
     * @return {?}
     */
    function (record) {
        return record ? record.id : undefined;
    };
    /**
     * @param {?=} advancedFilter
     * @param {?=} currentPage
     * @param {?=} keepSelectedItems
     * @return {?}
     */
    TableComponent.prototype.searchAsync = /**
     * @param {?=} advancedFilter
     * @param {?=} currentPage
     * @param {?=} keepSelectedItems
     * @return {?}
     */
    function (advancedFilter, currentPage, keepSelectedItems) {
        var _this = this;
        if (keepSelectedItems === void 0) { keepSelectedItems = true; }
        this.loading = true;
        /** @type {?} */
        var request = this.buildRequest(currentPage, advancedFilter);
        if (this.option.localData) {
            this.localData = this.option.localData();
            this.searchLocalItems(request).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                _this.bindResultData(response, keepSelectedItems);
            }));
        }
        else {
            if (!this.option.serviceProvider || !this.option.serviceProvider.searchAsync)
                throw new Error('!this.option.serviceProvider.searchAsync');
            this.option.serviceProvider.searchAsync(request).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                _this.bindResultData(response, keepSelectedItems);
            }));
        }
        return of(true);
    };
    /**
     * @private
     * @return {?}
     */
    TableComponent.prototype.checkedAllPageItems = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.selectedItems || !this.items || this.items.length == 0) {
            return false;
        }
        /** @type {?} */
        var check = true;
        this.items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var currentItem = _this.selectedItems.find((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return s.id === item.id; }));
            if (!currentItem) {
                check = false;
                return check;
            }
        }));
        return check;
    };
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    TableComponent.prototype.setDefaultOrder = /**
     * @private
     * @param {?} request
     * @return {?}
     */
    function (request) {
        if (this.option.defaultOrderBy)
            this.orderBy = this.option.defaultOrderBy;
        if (this.option.defautOrderDirection)
            this.direction = this.option.defautOrderDirection;
        request.orderBy = this.orderBy;
        request.direction = this.direction;
        if (!this.orderBy) {
            this.orderBy = "Id";
            this.direction = TableConstant.Direction.ASC;
        }
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    TableComponent.prototype.setFilter = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.request[key] = value;
        this.currentPage = 0;
        this.filter[key] = value;
        if (this.option && this.option.request)
            this.option.request.pageIndex = 0;
    };
    /**
     * @private
     * @param {?} advancedFilter
     * @param {?} request
     * @return {?}
     */
    TableComponent.prototype.retrieveAdvancedFilters = /**
     * @private
     * @param {?} advancedFilter
     * @param {?} request
     * @return {?}
     */
    function (advancedFilter, request) {
        var _this = this;
        this.filterColumns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            /** @type {?} */
            var value = _this.filter[column.valueRef()];
            if (value == undefined || value == 'undefined') {
                value = '';
            }
            if (advancedFilter == true) {
                if (column.type && (column.type.toLowerCase() == 'date' || column.type.toLowerCase() == 'datetime' || column.type.toLowerCase() == 'time')) {
                    if (value && value != '') {
                        /** @type {?} */
                        var datetimeValues = (/** @type {?} */ (value));
                        if (datetimeValues.length == 1) {
                            request[column.valueRef() + 'From'] = _this.convertDatetime(datetimeValues[0], 'From');
                        }
                        else if (datetimeValues.length == 2) {
                            request[column.valueRef() + 'From'] = _this.convertDatetime(datetimeValues[0], 'From');
                            request[column.valueRef() + 'To'] = _this.convertDatetime(datetimeValues[1], 'To');
                        }
                    }
                }
                else {
                    request[column.valueRef()] = value;
                }
            }
            else {
                request[column.valueRef()] = value;
            }
        }));
    };
    /**
     * @private
     * @param {?=} currentPage
     * @param {?=} advancedFilter
     * @return {?}
     */
    TableComponent.prototype.buildRequest = /**
     * @private
     * @param {?=} currentPage
     * @param {?=} advancedFilter
     * @return {?}
     */
    function (currentPage, advancedFilter) {
        this.previousRequest = Object.assign({}, this.request);
        /** @type {?} */
        var searchText = this.filter.searchText;
        this.textSearched = this.filter.searchText;
        if (searchText == undefined || searchText == 'undefined') {
            searchText = '';
        }
        this.request.pageSize = this.option.request.pageSize;
        if (!this.option.paging) {
            this.request.pageSize = 999999;
            this.pageSize = 999999;
        }
        this.request.searchText = searchText;
        this.request.direction = this.direction;
        this.request.orderBy = this.orderBy;
        if (!this.orderBy)
            this.setDefaultOrder(this.request);
        this.retrieveAdvancedFilters(advancedFilter, this.request);
        this.request.pageIndex = this.option.request.pageIndex;
        if (currentPage) {
            this.request.pageIndex = currentPage;
            this.currentPage = currentPage;
        }
        /** @type {?} */
        var changes = this.dataService.compareObjects(this.previousRequest, this.request);
        /** @type {?} */
        var isChanged = changes.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return ['pageIndex', 'pageSize'].indexOf(x.propertyName) < 0; })).length > 0;
        if (isChanged) {
            this.option.request.pageIndex = 0;
            this.request.pageIndex = 0;
            this.currentPage = 0;
        }
        return this.request;
    };
    /**
     * @private
     * @param {?} dt
     * @param {?} type
     * @return {?}
     */
    TableComponent.prototype.convertDatetime = /**
     * @private
     * @param {?} dt
     * @param {?} type
     * @return {?}
     */
    function (dt, type) {
        if (!dt)
            return '';
        /** @type {?} */
        var convertedDatetime = new Date(dt);
        /** @type {?} */
        var days = convertedDatetime.getDate().toString();
        if (days.length < 2)
            days = '0' + days;
        /** @type {?} */
        var months = (convertedDatetime.getMonth() + 1).toString();
        if (months.length < 2)
            months = '0' + months;
        /** @type {?} */
        var hours = convertedDatetime.getHours().toString();
        if (hours.length < 2)
            hours = '0' + hours;
        /** @type {?} */
        var minutes = convertedDatetime.getMinutes().toString();
        if (minutes.length < 2)
            minutes = '0' + minutes;
        /** @type {?} */
        var year = convertedDatetime.getFullYear();
        switch (this.option.datetimeFormat.format) {
            case 'dd/MM/yyyy':
                return days + '/' + months + '/' + year + (type == 'From' ? ' 00:00' : ' 23:59');
            case 'dd/MM/yyyy HH:mm':
                return days + '/' + months + '/' + year + ' ' + hours + ':' + minutes;
            case 'MM/dd/yyyy':
                return months + '/' + days + '/' + year + (type == 'From' ? ' 00:00' : ' 23:59');
            case 'MM/dd/yyyy HH:mm':
                return months + '/' + days + '/' + year + ' ' + hours + ':' + minutes;
        }
    };
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    TableComponent.prototype.searchLocalItems = /**
     * @private
     * @param {?} request
     * @return {?}
     */
    function (request) {
        var _this = this;
        /** @type {?} */
        var result = this.localData;
        /** @type {?} */
        var orderBy = this.dataService.getField(request.orderBy, true);
        if (request.direction == TableConstant.Direction.ASC) {
            if (!this.option.sort) {
                result = result.sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                function (a, b) { return a[orderBy] > b[orderBy] ? 1 : a[orderBy] === b[orderBy] ? 0 : -1; }));
            }
            else {
                result = result.sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                function (a, b) { return _this.option.sort(a, b, orderBy); }));
            }
        }
        else {
            if (!this.option.sort) {
                result = result.sort((/**
                 * @param {?} b
                 * @param {?} a
                 * @return {?}
                 */
                function (b, a) { return a[orderBy] > b[orderBy] ? 1 : a[orderBy] === b[orderBy] ? 0 : -1; }));
            }
            else {
                result = result.sort((/**
                 * @param {?} b
                 * @param {?} a
                 * @return {?}
                 */
                function (b, a) { return _this.option.sort(a, b, orderBy); }));
            }
        }
        /** @type {?} */
        var items = [];
        if (request.pageIndex >= 0 && request.pageSize > 0) {
            /** @type {?} */
            var localResult_1 = [];
            if (request.searchText && this.option.searchFields && this.option.searchFields.length > 0) {
                this.option.searchFields.forEach((/**
                 * @param {?} field
                 * @return {?}
                 */
                function (field) {
                    /** @type {?} */
                    var response = result.filter((/**
                     * @param {?} s
                     * @return {?}
                     */
                    function (s) { return _this.fuzzysearch(request.searchText, s[field]); }));
                    if (response) {
                        response.forEach((/**
                         * @param {?} item
                         * @return {?}
                         */
                        function (item) {
                            if (localResult_1.findIndex((/**
                             * @param {?} s
                             * @return {?}
                             */
                            function (s) { return s.id == item.id; })) == -1) {
                                localResult_1.push(item);
                            }
                        }));
                    }
                }));
                result = localResult_1;
            }
            /** @type {?} */
            var filter = {};
            this.retrieveAdvancedFilters(true, filter);
            if (this.filterColumns) {
                this.filterColumns.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    /** @type {?} */
                    var value = filter[column.valueRef()];
                    if (value) {
                        result = result.filter((/**
                         * @param {?} s
                         * @return {?}
                         */
                        function (s) { return _this.fuzzysearch(value, s[column.valueRef()]); }));
                    }
                }));
            }
            items = result.filter((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return (result.indexOf(s) >= request.pageIndex * request.pageSize) && (result.indexOf(s) < (request.pageIndex + 1) * request.pageSize); }));
        }
        /** @type {?} */
        var response = {
            items: items,
            totalRecords: result.length
        };
        return of(response).pipe(delay(250));
    };
    /**
     * @private
     * @param {?} c
     * @return {?}
     */
    TableComponent.prototype.convertUCode = /**
     * @private
     * @param {?} c
     * @return {?}
     */
    function (c) {
        if ('aãạàáảăăẵặằẳâẫậầấẩ'.indexOf(c) > -1)
            return 'a';
        if ('dđ'.indexOf(c) > -1)
            return 'd';
        if ('oõọòóỏôỗộồốơỡợờớở'.indexOf(c) > -1)
            return 'o';
        if ('uũụùúủưữựừứửưữựừứử'.indexOf(c) > -1)
            return 'u';
        if ('iĩịìíỉ'.indexOf(c) > -1)
            return 'i';
        if ('yỹỵỳýỷ'.indexOf(c) > -1)
            return 'y';
        if ('eẽẹèéẽêễệềêể'.indexOf(c) > -1)
            return 'e';
        return c;
    };
    /**
     * @private
     * @param {?} needle
     * @param {?} haystack
     * @return {?}
     */
    TableComponent.prototype.fuzzysearch = /**
     * @private
     * @param {?} needle
     * @param {?} haystack
     * @return {?}
     */
    function (needle, haystack) {
        if (!needle || !haystack)
            return false;
        /** @type {?} */
        var haystackLC = this.removeAllSpaces(haystack.toString().toLowerCase());
        /** @type {?} */
        var needleLC = this.removeAllSpaces(needle.toString().toLowerCase());
        /** @type {?} */
        var hlen = haystack.toString().length;
        /** @type {?} */
        var nlen = needleLC.toString().length;
        if (nlen > hlen) {
            return false;
        }
        if (nlen === hlen) {
            return needleLC === haystackLC;
        }
        outer: for (var i = 0, j = 0; i < nlen; i++) {
            /** @type {?} */
            var nch = this.convertUCode(needleLC[i]);
            while (j < hlen) {
                if (this.convertUCode(haystackLC[j++]) === nch) {
                    continue outer;
                }
            }
            return false;
        }
        return true;
    };
    /**
     * @private
     * @param {?=} str
     * @return {?}
     */
    TableComponent.prototype.removeAllSpaces = /**
     * @private
     * @param {?=} str
     * @return {?}
     */
    function (str) {
        if (!str)
            return '';
        return str.replace(/\s/g, '');
    };
    /**
     * @private
     * @param {?} response
     * @param {?=} keepSelectedItems
     * @return {?}
     */
    TableComponent.prototype.bindResultData = /**
     * @private
     * @param {?} response
     * @param {?=} keepSelectedItems
     * @return {?}
     */
    function (response, keepSelectedItems) {
        if (keepSelectedItems === void 0) { keepSelectedItems = true; }
        this.items = response.items;
        this.totalRecords = response.totalRecords;
        this.calculatePages();
        if (!keepSelectedItems) {
            this.selectedItems = [];
        }
        this.selectedAll = this.checkedAllPageItems();
        if (this.currentPage > this.totalPages.length - 1) {
            this.recursiveCounter++;
            if (this.recursiveCounter < 3) {
                this.searchAsync(null, this.totalPages.length - 1).subscribe();
            }
        }
        this.loading = false;
    };
    /**
     * @private
     * @return {?}
     */
    TableComponent.prototype.calculatePages = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pages = Math.floor(this.totalRecords / this.pageSize);
        if (pages <= 0) {
            pages = 1;
        }
        if (this.totalRecords % this.pageSize > 0) {
            pages += 1;
        }
        if (this.totalRecords < this.pageSize) {
            pages = 1;
        }
        this.totalPages = [];
        for (var i = 0; i < pages; i++) {
            this.totalPages.push(i);
        }
    };
    /**
     * @private
     * @param {?} currentColumn
     * @return {?}
     */
    TableComponent.prototype.resetSortAsync = /**
     * @private
     * @param {?} currentColumn
     * @return {?}
     */
    function (currentColumn) {
        this.option.mainColumns = this.option.mainColumns.map((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            if (column.id !== currentColumn.id)
                column.direction = undefined;
            return column;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    TableComponent.prototype.initTableTableTexts = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.option.displayText) {
            this.option.displayText = new TableText();
        }
        else {
            if (!this.option.displayText)
                this.option.displayText.placeholderSearch = TableConstant.DisplayText.PlaceholderSearch;
            if (!this.option.displayText.btnSearch)
                this.option.displayText.btnSearch = TableConstant.DisplayText.BtnSearch;
            if (!this.option.displayText.btnReset)
                this.option.displayText.btnReset = TableConstant.DisplayText.BtnReset;
            if (!this.option.displayText.action)
                this.option.displayText.action = TableConstant.DisplayText.Action;
            if (!this.option.displayText.selectPageSize)
                this.option.displayText.selectPageSize = TableConstant.DisplayText.SelectPageSize;
            if (!this.option.displayText.deleteTitle)
                this.option.displayText.deleteTitle = TableConstant.DisplayText.DeleteTitle;
            if (!this.option.displayText.btnAcceptTitle)
                this.option.displayText.btnAcceptTitle = TableConstant.DisplayText.BtnAcceptTitle;
            if (!this.option.displayText.btnCancelTitle)
                this.option.displayText.btnCancelTitle = TableConstant.DisplayText.BtnCancelTitle;
            if (!this.option.displayText.filterTitle)
                this.option.displayText.filterTitle = TableConstant.DisplayText.FilterTitle;
            if (!this.option.displayText.applyFilter)
                this.option.displayText.applyFilter = TableConstant.DisplayText.ApplyFilter;
            if (!this.option.displayText.detailTitle)
                this.option.displayText.detailTitle = TableConstant.DisplayText.DetailTitle;
            if (!this.option.displayText.pageTitle)
                this.option.displayText.pageTitle = TableConstant.DisplayText.PageTitle;
            if (!this.option.displayText.advancedSearchTitle)
                this.option.displayText.advancedSearchTitle = TableConstant.DisplayText.AdvancedSearchTitle;
            if (!this.option.displayText.advancedBtnTitle)
                this.option.displayText.advancedBtnTitle = TableConstant.DisplayText.AdvancedBtnTitle;
            if (!this.option.displayText.advancedBtnCancelTitle)
                this.option.displayText.advancedBtnCancelTitle = TableConstant.DisplayText.AdvancedBtnCancelTitle;
            if (!this.option.displayText.allTitle)
                this.option.displayText.allTitle = TableConstant.DisplayText.AllTitle;
        }
    };
    /**
     * @private
     * @return {?}
     */
    TableComponent.prototype.initTableTableMessages = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.option.message) {
            this.option.message = new TableMessage();
        }
        else {
            if (!this.option.message.notFoundMessage)
                this.option.message.notFoundMessage = TableConstant.Message.NotFoundMessage;
            if (!this.option.message.foundMessage)
                this.option.message.foundMessage = TableConstant.Message.FoundMessage;
            if (!this.option.message.invalidFormatMessage)
                this.option.message.invalidFormatMessage = TableConstant.Message.InvalidFormatMessage;
            if (!this.option.message.selectedItemsMessage)
                this.option.message.selectedItemsMessage = TableConstant.Message.SelectedItemsMessage;
            if (!this.option.message.confirmSelectAllRecordsMessage)
                this.option.message.confirmSelectAllRecordsMessage = TableConstant.Message.ConfirmSelectAllRecordsMessage;
            if (!this.option.message.confirmClearAllRecordsMessage)
                this.option.message.confirmClearAllRecordsMessage = TableConstant.Message.ConfirmClearAllRecordsMessage;
            if (!this.option.message.deleteMessage)
                this.option.message.deleteMessage = TableConstant.Message.DeleteMessage;
            if (!this.option.message.loadingMessage)
                this.option.message.loadingMessage = TableConstant.Message.LoadingMessage;
            if (!this.option.message.refMessage)
                this.option.message.refMessage = TableConstant.Message.RefMessage;
        }
    };
    /**
     * @private
     * @return {?}
     */
    TableComponent.prototype.initMainColumns = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.option.mainColumns) {
            this.option.mainColumns = [];
        }
        this.option.mainColumns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            if (!column.textAlign)
                column.textAlign = TableConstant.TextAlign.Left;
            if (column && !column.id) {
                column.id = _this.dataService.newGuid();
            }
            if (column.allowFilter) {
                if (column.type === TableColumnType.Dropdown) {
                    if (!column.dropdownConfiguration)
                        throw new Error('!column.dropdownConfiguration');
                }
                _this.filterColumns.push(column);
                _this.filter[column.valueRef()] = null;
            }
        }));
        this.option.mainColumns = this.option.mainColumns.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a.order > b.order ? 1 : a.order === b.order ? 0 : -1; }));
    };
    /**
     * @private
     * @return {?}
     */
    TableComponent.prototype.registerEvents = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.gotoRef) {
            this._render.listen(this.gotoRef.nativeElement, 'keydown', (/**
             * @param {?} $event
             * @return {?}
             */
            function ($event) {
                /** @type {?} */
                var value = $event.which;
                /** @type {?} */
                var max = '9999999';
                if (_this.gotoRef.nativeElement.attributes['max']) {
                    max = _this.gotoRef.nativeElement.attributes['max'].value;
                }
                if ((value >= 48 && value <= 57) || (value >= 96 && value <= 105) || value == 8 || value == 13) {
                    if (value >= 48 && value <= 57) {
                        if (parseInt(max) < parseInt($event.target.value + (parseInt(value) - 48))) {
                            $event.preventDefault();
                            $event.target.value = max;
                        }
                    }
                    else if (value >= 96 && value <= 105) {
                        if (parseInt(max) < parseInt($event.target.value + (parseInt(value) - 96))) {
                            $event.preventDefault();
                            $event.target.value = max;
                        }
                    }
                    else
                        return;
                }
                else {
                    $event.preventDefault();
                }
            }));
        }
    };
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c-table',
                    template: "<label *ngIf=\"option.title\">{{option.title}}</label>\r\n<ng-container *ngIf=\"hasFilterSection then filterSection\"></ng-container>\r\n<ng-container *ngIf=\"hasToolbarSection then toolbarSection\"></ng-container>\r\n<div class=\"c-table--wrapper mb-3\">\r\n  <div class=\"loading-indicator\" [class.show]=\"loading\">\r\n    <div class=\"spinner\">\r\n      <div class=\"bounce1\"></div>\r\n      <div class=\"bounce2\"></div>\r\n      <div class=\"bounce3\"></div>\r\n    </div>\r\n    <p class=\"text-center text-muted text-bold\">{{option?.message?.loadingMessage}}</p>\r\n  </div>\r\n  <div [class.loading-cover]=\"loading\">\r\n    <div class=\"c-main-table\">\r\n      <table #tableRef class=\"c-component\" [ngClass]=\"option.componentClass\">\r\n        <ng-container [ngTemplateOutlet]=\"tableHeader\"></ng-container>\r\n        <ng-container *ngIf=\"items.length > 0 then tableBody; else noResult\"></ng-container>\r\n      </table>\r\n      <ng-container *ngIf=\"hasFooterSection then footerSection\"></ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\"></div>\r\n\r\n<ng-template #tableHeader>\r\n  <thead>\r\n    <tr>\r\n      <th *ngIf=\"rowDetailTemplate\" style=\"width: 40px;\"></th>\r\n      <th *ngIf=\"!option.hideSequenceColumn\" class=\"\" style=\"width: 40px; text-align: center;\">#</th>\r\n      <th *ngIf=\"!option.hideCheckboxColumn\" style=\"width: 40px;\" class=\"center\">\r\n        <div class=\"checkbox-fade fade-in-primary\">\r\n          <label class=\"m-0\">\r\n            <input [(ngModel)]=\"selectedAll\" (ngModelChange)=\"selectAll($event)\" type=\"checkbox\">\r\n            <span class=\"cr m-0\" style=\"border:solid 2px white\">\r\n              <i class=\"cr-icon fa fa-check txt-primary\"></i>\r\n            </span>\r\n            <span></span>\r\n          </label>\r\n        </div>\r\n      </th>\r\n      <ng-container *ngFor=\"let column of option.mainColumns\">\r\n        <th [ngStyle]=\"{'width.px': column.width}\" [ngClass]=\"{'sortable': column.allowSort}\"\r\n          (click)=\"sortAsync(column)\" *ngIf=\"!column.hide || !column.hide()\">\r\n          <span class=\"wrap-text\">{{column.title()}}</span>\r\n          <span *ngIf=\"showSorter(column, 'desc')\" class=\"fa fa-sort-alpha-desc text-desc pull-right sort-icon\"></span>\r\n          <span *ngIf=\"showSorter(column, 'asc')\" class=\"fa fa-sort-alpha-asc text-asc pull-right sort-icon\"></span>\r\n        </th>\r\n      </ng-container>\r\n      <th style=\"width: 120px;\" *ngIf=\"hasAnyAction()\">{{option.displayText.action}}</th>\r\n    </tr>\r\n  </thead>\r\n</ng-template>\r\n\r\n<ng-template #tableBody>\r\n  <tbody *ngFor=\"let item of items; let i = index; let even = event; let odd = odd;\">\r\n    <tr #row class=\"c-tr {{ isRowSelected(item) ? 'selected' : ''}}\" [ngClass]=\"{odd: odd, even: even}\">\r\n      <td [attr.data-content]=\"'Xem chi ti\u1EBFt'\" *ngIf=\"rowDetailTemplate\" class=\"c-td detail\">\r\n        <span *ngIf=\"!item.toggle\" (click)=\"toggleRowDetail(item)\" style=\"color: #eb5d13;\" class=\"fa fa-plus\"></span>\r\n        <span *ngIf=\"item.toggle\" (click)=\"toggleRowDetail(item)\" style=\"color: #eb5d13;\" class=\"fa fa-minus\"></span>\r\n      </td>\r\n      <td *ngIf=\"!option.hideSequenceColumn\" [attr.data-content]=\"'#'\" class=\"c-td detail\">{{getCurrentIndex(i)}}</td>\r\n      <td *ngIf=\"!option.hideCheckboxColumn\" class=\"center\">\r\n        <div class=\"checkbox-fade fade-in-primary m-0\">\r\n          <label class=\"m-0\">\r\n            <input type=\"checkbox\" (click)=\"selectItem(item)\" [checked]=\"isRowSelected(item)\">\r\n            <span class=\"cr m-0\">\r\n              <i class=\"cr-icon fa fa-check txt-primary\"></i>\r\n            </span>\r\n            <span></span>\r\n          </label>\r\n        </div>\r\n      </td>\r\n      <ng-container *ngFor=\"let column of option.mainColumns\">\r\n        <td *ngIf=\"!column.hide || !column.hide()\" [ngClass]=\"{'link': column.click}\"\r\n          class=\"wrap-text c-td {{column.textAlign}}\" attr.data-content=\"{{column.title()}}\">\r\n          <div class=\"d-inline-block custom-input\">\r\n            <div class=\"d-inline-block custom-td\">\r\n              <ng-container [ngTemplateOutlet]=\"column.customTemplate ? column.customTemplate() : fieldControlTemplate\"\r\n                [ngTemplateOutletContext]=\"{item: item, index: i, column: column, readonly: true, hasFormLabel: false}\">\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <td #inlineActionArea *ngIf=\"hasAnyAction(item)\" class=\"text-center action-column-wrapper\">\r\n        <div class=\"c-tooltip\" *ngFor=\"let action of inlineActions\">\r\n          <span *ngIf=\"action.tooltip\" class=\"tooltiptext tooltip-top\">{{action.tooltip()}}</span>\r\n          <c-button class=\"mr-1\" *ngIf=\"!action.hide || !action.hide(item)\" [lazyload]=\"action.lazyload\"\r\n            [customClass]=\"action.customClass\" title=\"{{action.title ? action.title() : ''}}\" [icon]=\"action.icon\"\r\n            (execute)=\"executeActionAsync(action,item,null, i, $event)\" [disabled]=\"action.disabled\"></c-button>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n    <tr #rowDetail [@cAnimation] *ngIf=\"item.toggle\" class=\"row-detail-wrapper\">\r\n      <td colspan=\"20\" (click)=\"selectItem(item)\">\r\n        <div *ngIf=\"false\" class=\"d-flex detail-title\">\r\n          <span><i class=\"fa fa-info\" aria-hidden=\"true\"></i> {{option?.displayText?.detailTitle}}</span>\r\n        </div>\r\n        <ng-container *ngIf=\"rowDetailTemplate\" [ngTemplateOutlet]=\"rowDetailTemplate.template\"\r\n          [ngTemplateOutletContext]=\"{item: item}\">\r\n        </ng-container>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</ng-template>\r\n\r\n<ng-template #noResult>\r\n  <tbody>\r\n    <tr>\r\n      <td colspan=\"20\" class=\"center no-result\">\r\n        <i class=\"fa fa-search\"></i>\r\n        {{option?.message?.notFoundMessage}} <span *ngIf=\"textSearched\"> {{option?.message?.refMessage}} <span\r\n            class=\"text-bold text-primary\">\"{{textSearched}}\"</span>\r\n        </span>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</ng-template>\r\n\r\n<ng-template #footerSection>\r\n  <div class=\"table-footer\">\r\n    <div class=\"paging d-flex align-items-center\">\r\n      <div *ngIf=\"totalRecords > 0\">\r\n        <span class=\"result-search-text\"\r\n          [innerHTML]=\"option.message.foundMessage.replace('[0]',totalRecords.toString()).replace('[1]',totalPages.length.toString())\"></span>\r\n      </div>\r\n      <div class=\"ml-auto \" *ngIf=\"totalPages.length > 1 && option.paging\">\r\n        <div class=\"d-flex align-items-center page-navigator\">\r\n          <div class=\"mr-5\">\r\n            <span class=\"mr-1 text-muted\">{{option?.displayText?.pageTitle}}</span>\r\n            <input #gotoRef (keypress)=\"goto($event,false)\" (blur)=\"goto($event,true)\" class=\"goto mr-1\"\r\n              value=\"{{currentPage + 1}}\" type=\"text\" max=\"{{totalPages.length}}\" />\r\n            <span>/<span class=\"text-muted ml-1\">{{totalPages.length}}</span></span>\r\n          </div>\r\n          <ul class=\"m-0\">\r\n            <li (click)=\"changePage$.next(totalPages.length - 1)\" class=\"page\"\r\n              *ngIf=\"currentPage < totalPages.length - 1\"\r\n              [ngClass]=\"{'disabled': currentPage >= totalPages.length - 1}\"><span\r\n                class=\"fa fa-angle-double-right f-17\"></span></li>\r\n            <li class=\"page \" (click)=\"changePage$.next(currentPage + 1)\" *ngIf=\"currentPage < totalPages.length - 1\"\r\n              [ngClass]=\"{'disabled': currentPage >= totalPages.length - 1}\"><span\r\n                class=\"fa fa-angle-right  f-15\"></span></li>\r\n            <li [ngClass]=\"{'active': currentPage == page}\" *ngFor=\"let page of getPages(maxPage)\"\r\n              (click)=\"changePage$.next(page)\" class=\"page\">\r\n              <a>{{page + 1}}</a>\r\n            </li>\r\n            <li class=\"page \" (click)=\"changePage$.next(currentPage - 1)\" *ngIf=\"currentPage > 0\"><span\r\n                class=\"fa fa-angle-left  f-15\"></span></li>\r\n            <li class=\"page \" (click)=\"changePage$.next(0)\" *ngIf=\"currentPage > 0\"><span\r\n                class=\"fa fa-angle-double-left f-17\"></span></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #filterSection>\r\n  <div class=\"row form search-bar form-inline\">\r\n    <div class=\"col col-md-12 col-xs-12\">\r\n      <div class=\"flex-custom\">\r\n        <div class=\"form-group search-input-wrapper\">\r\n          <span class=\"search-icon\">\r\n            <i class=\"fa fa-search\" (click)=\"search()\"></i>\r\n          </span>\r\n          <input spellcheck=\"false\" [(ngModel)]=\"filter.searchText\" type=\"text\" class=\"form-control search-input\"\r\n            (keypress)=\"handkeKeypress($event)\" [placeholder]=\"option.displayText.placeholderSearch\">\r\n          <span class=\"search-reset\" *ngIf=\"filter.searchText\">\r\n            <i *ngIf=\"loading\" class=\"fa fa-spinner rotate-refresh\"></i>\r\n            <i *ngIf=\"!loading\" class=\"fa fa-times-circle\" (click)=\"filter.searchText = ''\"></i>\r\n          </span>\r\n        </div>\r\n        <button *ngIf=\"filterColumns.length\" class=\"btn btn-link-default\"\r\n          [ngClass]=\"{'btn-link-default' : !filterSectionToggle, 'btn-link': filterSectionToggle}\" type=\"button\"\r\n          aria-hidden=\"true\" (click)=\"toggleFilterSection()\">\r\n          <i class=\"fa fa-sliders m-0\"></i> {{option.displayText.advancedSearchTitle}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div [@cAnimation] *ngIf=\"filterSectionToggle\" class=\"row filter align-items-center\">\r\n    <span class=\"col-xs-12 col-md-12  filter-title\">{{option.displayText.filterTitle}}</span>\r\n    <div class=\"col-md-3 col-xs-12 pull-left filter-element \" *ngFor=\"let column of filterColumns; let i = index\">\r\n      <ng-container [ngTemplateOutlet]=\"column.filterTemplate ? column.filterTemplate() : fieldControlTemplate\"\r\n        [ngTemplateOutletContext]=\"{index: i, item: filter, column: column, readonly: false, hasFormLabel: true}\">\r\n      </ng-container>\r\n    </div>\r\n\r\n    <div class=\"col-sm-12 \">\r\n      <button class=\"btn btn-primary\" type=\"button\" aria-hidden=\"true\" (click)=\"searchAsync(true)\">\r\n        <i *ngIf=\"loading\" class=\"fa fa-spinner rotate-refresh\"></i>\r\n        <i *ngIf=\"!loading\" class=\"fa fa-search\"></i>\r\n        {{option.displayText.advancedBtnTitle}}\r\n      </button>\r\n      <button class=\"btn btn-default m-l-5\" type=\"button\" aria-hidden=\"true\" (click)=\"resetFilters()\">\r\n        {{option.displayText.advancedBtnCancelTitle}}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #fieldControlTemplate let-column=\"column\" let-item=\"item\" let-index=\"index\" let-readonly=\"readonly\"\r\n  let-hasFormLabel=\"hasFormLabel\">\r\n  <div [ngSwitch]=\"column.type\">\r\n    <ng-container *ngSwitchDefault>\r\n      <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div (dblclick)=\"editInline(item, column.valueRef(), index)\">{{item[column.valueRef()]}}</div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div class=\"col-xs-12\">\r\n          <c-textbox [focus]=\"true\" [item]=\"item\" [title]=\"hasFormLabel ? column.title() : null\"\r\n            [(model)]=\"item[column.valueRef()]\">\r\n          </c-textbox>\r\n          <div style=\"text-align: right;\">\r\n            <c-button (execute)=\"acceptInlineEdit(column.valueRef(), index)\" [icon]=\"'fa fa-check'\"></c-button>\r\n            <c-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\"></c-button>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!readonly\">\r\n        <c-textbox [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\">\r\n        </c-textbox>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'custom'\">\r\n      <ng-container [ngTemplateOutlet]=\"column.customTemplate()\" [ngTemplateOutlet]=\"{item: item}\">\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'description'\">\r\n      <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div (dblclick)=\"editInline(item, column.valueRef(), index)\" class=\"c-tooltip\">\r\n          <span *ngIf=\"item[column.valueRef()] && column.showTooltip\" class=\"tooltiptext tooltip-top\">\r\n            {{item[column.valueRef()]}}\r\n          </span>\r\n          <span>\r\n            {{item[column.valueRef()] | shorten: option.maxLenghtext : '...'}}\r\n          </span>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div class=\"col-xs-12\" style=\"max-width: 250px;\">\r\n          <c-editor [focus]=\"true\" [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"item[column.valueRef()]\">\r\n          </c-editor>\r\n          <div style=\"text-align: right;\">\r\n            <c-button [customClass]=\"'text-success'\" (execute)=\"acceptInlineEdit(column.valueRef(), index)\"\r\n              [icon]=\"'fa fa-check'\"></c-button>\r\n            <c-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\"></c-button>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!readonly\">\r\n        <c-textbox [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\">\r\n        </c-textbox>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'number'\">\r\n      <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div (dblclick)=\"editInline(item, column.valueRef(), index)\">{{item[column.valueRef()]}}</div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div class=\"col-xs-12\">\r\n          <c-textbox type=\"number\" [focus]=\"true\" [item]=\"item\" [title]=\"hasFormLabel ? column.title() : null\"\r\n            [(model)]=\"item[column.valueRef()]\">\r\n          </c-textbox>\r\n          <div style=\"text-align: right;\">\r\n            <c-button (execute)=\"acceptInlineEdit(column.valueRef(), index)\" [icon]=\"'fa fa-check'\"></c-button>\r\n            <c-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\"></c-button>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!readonly\">\r\n        <c-textbox [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\" type=\"number\">\r\n        </c-textbox>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'currency'\">\r\n      <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div (dblclick)=\"editInline(item, column.valueRef(), index)\">{{item[column.valueRef()] | cCurrency}}</div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div class=\"col-xs-12\">\r\n          <c-textbox [focus]=\"true\" [item]=\"item\" [title]=\"hasFormLabel ? column.title() : null\"\r\n            [(model)]=\"item[column.valueRef()]\" type=\"currency\">\r\n          </c-textbox>\r\n          <div style=\"text-align: right;\">\r\n            <c-button (execute)=\"acceptInlineEdit(column.valueRef(), index)\" [icon]=\"'fa fa-check'\"></c-button>\r\n            <c-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\"></c-button>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!readonly\">\r\n        <c-textbox [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\" type=\"currency\">\r\n        </c-textbox>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'boolean'\">\r\n      <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div (dblclick)=\"editInline(item, column.valueRef(), index)\">\r\n          <span *ngIf=\"item[column.valueRef()]\" class=\"fa fa-check text-success\"></span>\r\n          <span *ngIf=\"!item[column.valueRef()]\" class=\"fa fa-remove text-danger\"></span>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div class=\"col-xs-12\">\r\n          <c-checkbox [(model)]=\"item[column.valueRef()]\"></c-checkbox>\r\n          <div style=\"text-align: right;\">\r\n            <c-button (execute)=\"acceptInlineEdit(column.valueRef(), index)\" [icon]=\"'fa fa-check'\"></c-button>\r\n            <c-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\"></c-button>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!readonly\">\r\n        <c-checkbox [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\"></c-checkbox>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'date'\">\r\n      <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div (dblclick)=\"editInline(item, column.valueRef(), index)\">{{item[column.valueRef()] | cDate}}</div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div class=\"col-xs-12\">\r\n          <c-daterange-picker [selectMode]=\"'single'\" [title]=\"hasFormLabel ? column.title() : null\"\r\n            [(model)]=\"item[column.valueRef()]\" pickerType=\"calendar\"></c-daterange-picker>\r\n          <div style=\"text-align: right;\">\r\n            <c-button (execute)=\"acceptInlineEdit(column.valueRef(), index)\" [icon]=\"'fa fa-check'\"></c-button>\r\n            <c-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\"></c-button>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!readonly\">\r\n        <c-daterange-picker [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\"\r\n          pickerType=\"calendar\"></c-daterange-picker>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'datetime'\">\r\n      <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div (dblclick)=\"editInline(item, column.valueRef(), index)\">{{item[column.valueRef()] | cDateTime}}</div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div class=\"col-xs-12\">\r\n          <c-daterange-picker [selectMode]=\"'single'\" [title]=\"hasFormLabel ? column.title() : null\"\r\n            [(model)]=\"item[column.valueRef()]\" pickerType=\"both\"></c-daterange-picker>\r\n          <div style=\"text-align: right;\">\r\n            <c-button (execute)=\"acceptInlineEdit(column.valueRef(), index)\" [icon]=\"'fa fa-check'\"></c-button>\r\n            <c-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\"></c-button>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!readonly\">\r\n        <c-daterange-picker [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\"\r\n          pickerType=\"both\"></c-daterange-picker>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'time'\">\r\n      <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div (dblclick)=\"editInline(item, column.valueRef(), index)\">{{item[column.valueRef()] | cTime}}</div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div class=\"col-xs-12\">\r\n          <c-daterange-picker [selectMode]=\"'single'\" [title]=\"hasFormLabel ? column.title() : null\"\r\n            [(model)]=\"item[column.valueRef()]\" pickerType=\"timer\"></c-daterange-picker>\r\n          <div style=\"text-align: right;\">\r\n            <c-button (execute)=\"acceptInlineEdit(column.valueRef(), index)\" [icon]=\"'fa fa-check'\"></c-button>\r\n            <c-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\"></c-button>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!readonly\">\r\n        <c-datetime-picker [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\"\r\n          pickerType=\"timer\"></c-datetime-picker>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'dropdown'\">\r\n      <ng-container *ngIf=\"readonly\"> {{getDropdownDisplayText(column, item)}}</ng-container>\r\n      <ng-container *ngIf=\"!readonly\">\r\n        <c-dropdown [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"item[column.valueRef()]\"\r\n          [searchFunction]=\"column.dropdownConfiguration.searchFunction\"\r\n          [multiple]=\"column.dropdownConfiguration.multiple\" [bindLabel]=\"column.dropdownConfiguration.bindLabel\"\r\n          [bindValue]=\"column.dropdownConfiguration.bindValue\"></c-dropdown>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #toolbarSection>\r\n  <div class=\"row no-gutters toolbar\">\r\n    <div *ngIf=\"hasPageSizeChooser\" class=\"d-flex align-items-center mr-2 m-l-2 select-page-wrapper\">\r\n      <span>{{option.displayText.selectPageSize}}</span>\r\n      <div class=\"p-0 \">\r\n        <select [(ngModel)]=\"pageSize\" (change)=\"changePageSize()\" class=\"form-control col-xs-12 col-md-12\">\r\n          <option *ngFor=\"let opt of option.pageSizes\" value=\"{{opt}}\">{{opt}}</option>\r\n          <option value=\"999999\">{{option.displayText.allTitle}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div [@cAnimationFadeRight] class=\"table-action\" *ngIf=\"selectedItems.length > 0\">\r\n      <div class=\"d-flex align-items-center\">\r\n        <div class=\"col-xs-12 custom-toolbar  mr-2\">\r\n          <div class=\"btn-group \" role=\"group\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\"\r\n            data-original-title=\".btn-xlg\">\r\n            <ng-container *ngFor=\"let action of getToolbarActions(true)\">\r\n              <div *ngIf=\"!action.hide || !action.hide()\" class=\"c-tooltip\">\r\n                <span *ngIf=\"action.tooltip\" class=\"tooltiptext tooltip-top\">{{action.tooltip()}}</span>\r\n                <c-button *ngIf=\"action.type !== 'inline'\" class=\"mr-1\" [customClass]=\"action.customClass\"\r\n                  [lazyload]=\"action.lazyload\" title=\"{{action.title ? action.title() : ''}}\" [icon]=\"action.icon\"\r\n                  (execute)=\"executeActionAsync(action,null,null, null, $event)\">\r\n                </c-button>\r\n              </div>\r\n            </ng-container>\r\n            <c-dropdown-buttons *ngIf=\"toolbarActions.length > option.totalToolbarItem\" title=\"T\u00F9y ch\u1ECDn\">\r\n              <ng-container *ngFor=\"let action of getToolbarActions(false)\">\r\n                <c-dropdown-button *ngIf=\"!action.hide || !action.hide()\" title=\"{{action.title ? action.title() : ''}}\"\r\n                  (execute)=\"executeActionAsync(action,null,null, null, $event)\" [disabled]=\"action.disabled\">\r\n                </c-dropdown-button>\r\n              </ng-container>\r\n            </c-dropdown-buttons>\r\n          </div>\r\n        </div>\r\n        <div class=\"table-summary\">\r\n          <span\r\n            [innerHTML]=\"option.message.selectedItemsMessage.replace('[0]', selectedItems.length.toString())\"></span>&nbsp;\r\n          <a href=\"javascript:;\" (click)=\"clearAll()\" [innerHTML]=\"option.message.confirmClearAllRecordsMessage\"></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"d-flex ml-auto\">\r\n      <div class=\"c-tooltip\" *ngFor=\"let action of this.option.topButtons; last as isLast\">\r\n        <span *ngIf=\"action.tooltip\" class=\"tooltiptext tooltip-top\">{{action.tooltip()}}</span>\r\n        <c-button *ngIf=\"!action.hide || !action.hide()\" [lazyload]=\"action.lazyload\" [customClass]=\"action.customClass\"\r\n          title=\"{{action.title ? action.title() : ''}}\" [icon]=\"action.icon\"\r\n          (execute)=\"executeActionAsync(action,null,null, null, $event)\" [class.mr-2]=\"!isLast\"\r\n          [disabled]=\"action.disabled\"></c-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                    animations: [
                        trigger('cAnimation', [
                            state('void', style({})),
                            state('*', style({})),
                            transition(':enter', [
                                style({ transform: 'translateY(-30px)', opacity: 0 }),
                                animate('300ms ease-in-out', style({ transform: 'translateY(0)', opacity: 1 }))
                            ]),
                            transition(':leave', [
                                style({ transform: 'translateY(0)', opacity: 1 }),
                                animate('300ms ease-in-out', style({ transform: 'translateY(-30px)', opacity: 0 }))
                            ])
                        ]),
                        trigger('cAnimationFadeRight', [
                            state('void', style({})),
                            state('*', style({})),
                            transition(':enter', [
                                style({ transform: 'translateX(30px)', opacity: 0 }),
                                animate('300ms ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
                            ]),
                            transition(':leave', [
                                style({ transform: 'translateX(0)', opacity: 1 }),
                                animate('300ms ease-in-out', style({ transform: 'translateX(30px)', opacity: 0 }))
                            ])
                        ])
                    ],
                    styles: [".c-switch{position:relative;display:inline-block;width:47px;height:25px}.c-switch input{display:none}.c-switch input:checked+.c-slider{background-color:#6fbb35}.c-switch input:focus+.c-slider{box-shadow:0 0 1px #6fbb35}.c-switch input:checked+.c-slider:before{transform:translateX(26px)}.c-switch .c-slider{box-shadow:1px 1px 1px rgba(0,0,0,.145);position:absolute;cursor:pointer;top:6px;left:6px;right:0;bottom:0;background-color:#b7b0ac;transition:.2s;border-radius:34px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0;width:2.5rem;height:.9375rem}.c-switch .c-slider:before{position:absolute;content:\"\";left:-.3125rem;top:-.17rem;box-shadow:1px 1px 1px 1px rgba(0,0,0,.245);background-color:#f4f3f0;transition:.2s;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:1.3125rem;height:1.3125rem}.c-tooltip{position:relative;overflow:unset;display:inline-block}.c-tooltip.primary .tooltiptext{background-color:#368ee0;color:#fff}.c-tooltip.primary .tooltip-top{box-shadow:none}.c-tooltip.primary .tooltip-top:after{border-color:#368ee0 transparent transparent}.c-tooltip.info .tooltiptext{background-color:#1d9ce7;color:#fff}.c-tooltip.info .tooltip-top{box-shadow:none}.c-tooltip.info .tooltip-top:after{border-color:#1d9ce7 transparent transparent}.c-tooltip.dark .tooltiptext{background-color:#052d3e;color:#fff}.c-tooltip.dark .tooltip-top{box-shadow:none}.c-tooltip.dark .tooltip-top:after{border-color:#052d3e transparent transparent}.c-tooltip .tooltiptext{max-width:180px;min-width:120px;line-height:2;word-break:break-word;visibility:hidden;position:absolute;white-space:normal;background-color:#fff;color:#052d3e;text-align:center;padding:5px;border-radius:5px;z-index:1;opacity:0;transition:.3s;font-size:12px;font-weight:500;transform:translateY(20px)}.c-tooltip .tooltip-top{box-shadow:1px 3px 9px rgba(0,0,0,.18);bottom:120%;left:50%;margin-left:-60px}.c-tooltip .tooltip-top:after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#fff transparent transparent}.c-tooltip:hover .tooltiptext{visibility:visible;opacity:1;transform:translateY(0)}.search-bar .search-input-wrapper{position:relative}.search-bar .search-input-wrapper .search-icon{position:absolute;z-index:9;right:10px;font-size:16px;line-height:32px;color:#87837b;cursor:pointer}.search-bar .search-input-wrapper .search-icon:hover{color:#368ee0}.search-bar .search-input-wrapper .search-input{width:420px;padding-left:10px;border-radius:3px;padding-right:56px}@media (max-width:480px){.search-bar .search-input-wrapper .search-input{width:100%}}.search-bar .search-input-wrapper .search-reset{position:absolute;z-index:9;right:36px;font-size:18px;line-height:32px;color:#b7b0ac;cursor:pointer}.search-bar .search-input-wrapper .search-reset:hover{color:#87837b}.c-table--wrapper{border:1px solid #f4f3f0}.c-table--wrapper .loading-indicator{display:none}.c-table--wrapper .loading-indicator.show{display:block;top:50%;position:absolute;right:47%}.c-table--wrapper .loading-indicator.show .spinner{text-align:center}.c-table--wrapper .loading-indicator.show .spinner>div{width:18px;height:18px;background-color:#368ee0;border-radius:100%;display:inline-block;-webkit-animation:1s ease-in-out infinite both sk-bouncedelay;animation:1s ease-in-out infinite both sk-bouncedelay}.c-table--wrapper .loading-indicator.show .spinner .bounce1{-webkit-animation-delay:-.32s;animation-delay:-.32s}.c-table--wrapper .loading-indicator.show .spinner .bounce2{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes sk-bouncedelay{0%,100%,80%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}@keyframes sk-bouncedelay{0%,100%,80%{transform:scale(0)}40%{transform:scale(1)}}.c-table--wrapper .loading-cover{-webkit-filter:blur(2px);filter:blur(2px);opacity:.3;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.toolbar{width:100%;padding:10px 0;margin:0}.toolbar .select-page-wrapper span{font-size:12px;color:#87837b;margin-right:6px}.toolbar .select-page-wrapper select{padding:3px 5px;border:1px solid #e8e8e8;background:#fafafa}.toolbar .table-action .table-summary{background:#fff5e6;padding:5px 16px;border-radius:5px}.toolbar .confirm-highlight,.toolbar .highlight{color:#368ee0;font-weight:500}.toolbar .custom-toolbar .dropdown{position:relative;display:inline-block}.toolbar .custom-toolbar .dropdown .dropdown-content{display:none;position:absolute;background-color:#f1f1f1;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1;top:30px}.toolbar .custom-toolbar .dropdown .dropdown-content a{padding:6px 12px;line-height:16px;font-size:11px;text-decoration:none;display:block}.toolbar .custom-toolbar .dropdown .dropdown-content a:hover{background-color:#ddd}.toolbar .custom-toolbar .dropdown:hover .dropdown-content{display:block}.toolbar .custom-toolbar .dropdown .custom-btn{border-left:none}.hidden{display:none}.paging{border-top:1px solid #f4f3f0;padding:15px 10px;position:relative}.paging .page{width:30px;height:30px;line-height:30px;border-right:none;float:right;text-align:center;cursor:pointer}.paging .page:hover{background-color:#368ee0;color:#fff;font-weight:500}.paging .page:hover.active{background-color:#f4f9fd;color:#368ee0;font-weight:500}.paging .active{background-color:#f4f9fd;color:#368ee0;font-weight:500}.paging .confirm-highlight,.paging .highlight{color:#368ee0;font-weight:500}.paging .result-search-text{color:#87837b}.paging .page-navigator .goto{padding:3px 5px;border:1px solid #e8e8e8;font-weight:500;background:#fafafa;color:#368ee0;width:45px;text-align:center}.disabled{opacity:.65}.filter{margin:.5rem 0 0;background:#fafafa;padding:1rem;position:relative}.filter .filter-title{font-weight:500;text-transform:uppercase;color:#4b4542}.filter .filter-element{margin-top:5px;margin-bottom:5px}.filter .filter-element .dt-relative{position:relative}.filter .filter-element .dt-relative:hover{color:#5757e7}.filter .filter-element .date-icon{position:absolute;top:0;right:0;font-size:16px;margin-top:7px;margin-right:10px;cursor:pointer}.c-main-table{width:100%}.c-component{padding:0;margin:0;width:100%;border-collapse:collapse}@media (max-width:1024px){.c-component{width:100%}}.c-component.scroll-mode{min-width:1200px}.c-component .no-result{padding:3rem;background:#fafafa;font-weight:400;color:#584d4d;font-size:1rem}.c-component td,.c-component th{padding:6px;text-align:left;cursor:pointer;vertical-align:middle}.c-component thead{border-bottom:1px solid #f2f1ee}.c-component thead th{background:#fff;padding:10px 5px;font-weight:500;text-transform:inherit;vertical-align:middle;border-right:1px solid #f2f1ee}.c-component thead th.sortable .sort-icon{line-height:19px}.c-component thead th.sortable:hover{background:#ededed}.c-component thead th:last-of-type{border-right:0 solid #f4f3f0}.c-component tbody:nth-child(odd) .c-tr{background-color:#fafafa}.c-component tbody .c-tr:hover{background-color:#ecf7fd}.c-component tbody .c-tr:hover .action-column-wrapper .btn-link{-webkit-filter:grayscale(0);filter:grayscale(0);opacity:1}.c-component tbody .c-tr.active{background-color:#d5edfb;border-top:1px solid #a7d9f6;border-bottom:1px solid #a7d9f6}.c-component tbody .c-tr.active:hover{background-color:#d5edfb;border-top:1px solid #79c4f1;border-bottom:1px solid #79c4f1}.c-component tbody .c-tr.active:hover .action-column-wrapper .btn-link{-webkit-filter:grayscale(0);filter:grayscale(0);opacity:1}.c-component tbody .c-tr.link{color:#6767dd}.c-component tbody .c-tr.link:hover{color:#151583}.c-component tbody .c-tr .c-td .dt-relative{position:relative}.c-component tbody .c-tr .c-td .dt-relative:hover{color:#5757e7}.c-component tbody .c-tr .c-td .date-icon{position:absolute;top:0;right:0;font-size:16px;margin-top:7px;margin-right:80px;cursor:pointer}.c-component tbody .c-tr .action-column-wrapper .btn-link{-webkit-filter:grayscale(100%);filter:grayscale(100%);opacity:.3}.c-component tbody .row-detail-wrapper{border-bottom:1px solid #e8e8e8;border-top:1px solid #f4f3f0}.c-component tbody .row-detail-wrapper .detail-title{background:#fafafa;padding:6px 14px;margin:7px;font-weight:500;color:#052d3e}.c-component .wrap-text{white-space:normal;word-wrap:break-word;word-break:break-word}.c-component .center,.c-component .detail{text-align:center}.c-component .right{text-align:right}.c-component.dark>thead>tr>th{background:#052d3e;color:#fff}.c-component.dark>thead>tr>th.sortable:hover{background:#031c26}.c-component.primary>thead>tr>th{background:#f7f7f7;color:#4b4542}.c-component.primary>thead>tr>th.sortable:hover{background:#ededed}.c-component.info>thead>tr>th{background:#1d9ce7;color:#fff}.c-component.info>thead>tr>th.sortable:hover{background:#178ed4}.c-component.list-mode table,.c-component.list-mode tbody,.c-component.list-mode td,.c-component.list-mode th,.c-component.list-mode thead,.c-component.list-mode tr{display:block}.c-component.list-mode thead tr{position:absolute;top:-9999px;left:-9999px}.c-component.list-mode tr{border-bottom:0}.c-component.list-mode tr:last-child{border-bottom:1px solid #ddd}.c-component.list-mode td.c-td{border:none;position:relative;padding-left:50%}.c-component.list-mode td:before{position:absolute;top:6px;left:6px;width:45%;padding-right:10px;white-space:nowrap;font-weight:700;content:attr(data-content)}.c-component.list-mode .center,.c-component.list-mode .detail,.c-component.list-mode .right{text-align:left}.c-component.list-mode .table-action{margin-top:5px}@media only screen and (max-width:760px),(min-device-width:768px) and (max-device-width:1024px){.c-component table,.c-component tbody,.c-component td,.c-component th,.c-component thead,.c-component tr{display:block}.c-component thead tr{position:absolute;top:-9999px;left:-9999px}.c-component tr{border-bottom:0}.c-component tr:last-child{border-bottom:1px solid #ddd}.c-component td.c-td{border:none;position:relative;padding-left:50%}.c-component td:before{position:absolute;top:6px;left:6px;width:45%;padding-right:10px;white-space:nowrap;font-weight:700;content:attr(data-content)}.c-component .center,.c-component .detail,.c-component .right{text-align:left}.c-component .table-action{margin-top:5px}}.custom-input{position:relative}.custom-input .custom-td *{margin:0}.custom-input .has-error:not(:focus)+.validation-error{font-size:12px;position:absolute}.custom-input .has-error:not(:focus)+.validation-error:after{font-family:IcoFont!important;position:absolute;top:-30px!important;height:16px;border-radius:50px;right:0;background:#fff;font-size:16px;color:#d61e00}.custom-input .has-error:not(:focus)+.validation-error .mini-pop{position:absolute;top:-35px!important;padding:5px 10px;border-radius:5px;right:26px;z-index:1;background:#fff;box-shadow:0 2px 3px rgba(0,0,0,.12);max-width:212px}.custom-input .has-error:not(:focus)+.validation-error .mini-pop:after{content:\"\";display:block;position:absolute;right:-10px;bottom:7px;width:0;height:0;border:5px solid transparent;border-left-color:#fff}.custom-input .has-error:not(:focus)+.validation-error .mini-pop:before{content:\"\";display:block;position:absolute;right:-12px;bottom:5px;width:0;height:0;border:6px solid transparent;border-left-color:#bfbfbf}.flex-custom{display:flex}.selected{background-color:#d4eaf8!important}@media (max-width:480px){.flex-custom{display:unset}}.loader{-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}@-webkit-keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"]
                }] }
    ];
    /** @nocollapse */
    TableComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: RendererFactory2 },
        { type: DataService }
    ]; };
    TableComponent.propDecorators = {
        validationName: [{ type: Input }],
        validationScope: [{ type: Input }],
        option: [{ type: Input }],
        searchRef: [{ type: ViewChild, args: ['searchRef', { static: true },] }],
        gotoRef: [{ type: ViewChild, args: ['gotoRef', { static: true },] }],
        tableRef: [{ type: ViewChild, args: ['tableRef', { static: true },] }],
        rowDetailTemplate: [{ type: ContentChild, args: [TableRowDetailDirective, { static: true },] }]
    };
    return TableComponent;
}());
export { TableComponent };
if (false) {
    /** @type {?} */
    TableComponent.prototype.validationName;
    /** @type {?} */
    TableComponent.prototype.validationScope;
    /** @type {?} */
    TableComponent.prototype.option;
    /** @type {?} */
    TableComponent.prototype.searchRef;
    /** @type {?} */
    TableComponent.prototype.gotoRef;
    /** @type {?} */
    TableComponent.prototype.tableRef;
    /** @type {?} */
    TableComponent.prototype.rowDetailTemplate;
    /** @type {?} */
    TableComponent.prototype.items;
    /** @type {?} */
    TableComponent.prototype.totalRecords;
    /** @type {?} */
    TableComponent.prototype.loading;
    /** @type {?} */
    TableComponent.prototype.selectedItems;
    /** @type {?} */
    TableComponent.prototype.pageSize;
    /** @type {?} */
    TableComponent.prototype.orderBy;
    /** @type {?} */
    TableComponent.prototype.direction;
    /** @type {?} */
    TableComponent.prototype.totalPages;
    /** @type {?} */
    TableComponent.prototype.currentPage;
    /** @type {?} */
    TableComponent.prototype.filter;
    /** @type {?} */
    TableComponent.prototype.maxPage;
    /** @type {?} */
    TableComponent.prototype.selectedAll;
    /** @type {?} */
    TableComponent.prototype.filterColumns;
    /** @type {?} */
    TableComponent.prototype.toolbarActions;
    /** @type {?} */
    TableComponent.prototype.inlineActions;
    /** @type {?} */
    TableComponent.prototype.filterSectionToggle;
    /** @type {?} */
    TableComponent.prototype.textSearched;
    /** @type {?} */
    TableComponent.prototype.showReset;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.defaultPageSize;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.localData;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype._render;
    /** @type {?} */
    TableComponent.prototype.hasFilterSection;
    /** @type {?} */
    TableComponent.prototype.hasToolbarSection;
    /** @type {?} */
    TableComponent.prototype.hasFooterSection;
    /** @type {?} */
    TableComponent.prototype.hasDetailTemplate;
    /** @type {?} */
    TableComponent.prototype.hasPageSizeChooser;
    /** @type {?} */
    TableComponent.prototype.changePage$;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.request;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.previousRequest;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.recursiveCounter;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @protected
     */
    TableComponent.prototype.edittedFields;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.thisElement;
    /**
     * @type {?}
     * @protected
     */
    TableComponent.prototype.rendererFactory;
    /**
     * @type {?}
     * @protected
     */
    TableComponent.prototype.dataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQWEsZ0JBQWdCLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ3JKLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLFdBQVcsRUFBNEIsU0FBUyxFQUFFLGFBQWEsRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZLLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBYyxFQUFFLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3ZDO0lBeUVFLHdCQUNVLFdBQXVCLEVBQ3JCLGVBQWlDLEVBQ2pDLFdBQXdCO1FBRjFCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3JCLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUNqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQXBDN0IsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUNsQixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUV6QixrQkFBYSxHQUFVLEVBQUUsQ0FBQztRQUkxQixlQUFVLEdBQWEsRUFBRSxDQUFDO1FBQzFCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDakIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFDbEMsbUJBQWMsR0FBa0IsRUFBRSxDQUFDO1FBQ25DLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUNsQyx3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFDckMsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMxQixvQkFBZSxHQUFXLENBQUMsQ0FBQztRQVE3QixnQkFBVyxHQUE0QixJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLG9CQUFlLEdBQVEsRUFBRSxDQUFDO1FBQzFCLHFCQUFnQixHQUFXLENBQUMsQ0FBQztRQUM3QixrQkFBYSxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQU8zQyxJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7WUFDTixzQkFBc0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsU0FBUztZQUM5RixJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksU0FBUyxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTTtnQkFBRSxPQUFPO1lBQ2pFLEtBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO2FBQzFCO1lBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7WUFDakQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pELENBQUMsRUFBQztRQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELHdDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsb0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRU0sNkJBQUk7OztJQUFYO1FBQUEsaUJBOEVDO1FBN0VDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWE7Z0JBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7WUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsSUFBSTtnQkFDckMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDcEUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWM7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFDNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUN2RyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQztZQUMxRCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDMUU7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDL0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsTUFBTTtnQkFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO29CQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDbEUsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUF0RixDQUFzRixFQUFDLENBQUM7UUFDOUksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQXJGLENBQXFGLEVBQUMsQ0FBQzs7WUFFdEksVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxJQUFJO1FBQ3RELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLFdBQVcsRUFBbEIsQ0FBa0IsRUFBQzthQUM5RSxJQUFJOzs7OztRQUFDLFVBQUMsQ0FBYyxFQUFFLENBQWMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXBELENBQW9ELEVBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDO1FBRW5DLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztTQUNqQztRQUVELElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUztnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDO1lBQzVFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZTtnQkFBRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO1NBQ3JGOztZQUVLLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBdEYsQ0FBc0YsRUFBQyxDQUFDLE1BQU0sR0FBRyxDQUFDOztZQUM3SyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUM7UUFFakYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsSUFBSSxpQkFBaUIsSUFBSSxhQUFhLENBQUM7UUFDMUUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN6RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0MsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixLQUFLLFNBQVMsRUFBRTtZQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixHQUFHLENBQUMsaUJBQWlCLENBQUM7U0FDckQ7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUc7Z0JBQ3BCLFNBQVMsRUFBRSxDQUFDO2dCQUNaLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZTthQUMvQixDQUFDO1lBQ0YsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO2dCQUMzRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQzthQUM5QztZQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNoQzthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtnQkFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7YUFDOUM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO2FBQ3RDO1lBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7OztJQUVNLGlDQUFROzs7SUFBZjtRQUNFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7OztJQUVNLDZCQUFJOzs7Ozs7O0lBQVgsVUFBWSxJQUFTLEVBQUUsT0FBdUIsRUFBRSxPQUE2QixFQUFFLFFBQWtDO1FBQTFGLHdCQUFBLEVBQUEsY0FBdUI7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7O1lBQzdCLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDL0MsSUFBSSxRQUFRLENBQUMsRUFBRTtZQUFFLFFBQVEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxRCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuQjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQixJQUFJLFFBQVE7WUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakMsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7Ozs7SUFFTSx5Q0FBZ0I7Ozs7O0lBQXZCLFVBQXdCLEtBQWEsRUFBRSxLQUFhO1FBQ2xELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7Ozs7SUFFTSx5Q0FBZ0I7Ozs7OztJQUF2QixVQUF3QixJQUFTLEVBQUUsS0FBYSxFQUFFLEtBQWE7O1lBQ3pELFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUN2RCxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU87UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRU0sd0NBQWU7Ozs7O0lBQXRCLFVBQXVCLEtBQWEsRUFBRSxLQUFhOztZQUM3QyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBcEMsQ0FBb0MsRUFBQztRQUN2RixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7OztJQUVNLG1DQUFVOzs7Ozs7SUFBakIsVUFBa0IsSUFBUyxFQUFFLEtBQWEsRUFBRSxLQUFhO1FBQ3ZELElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTzs7WUFDZCxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7UUFDdkQsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztnQkFDdEIsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztnQkFDdEMsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osS0FBSyxFQUFFLEtBQUs7YUFDYixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7Ozs7Ozs7SUFFTSxzQ0FBYTs7Ozs7O0lBQXBCLFVBQXFCLElBQVMsRUFBRSxLQUFhLEVBQUUsS0FBYTtRQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ2pGLE9BQU8sQ0FBQyxtQkFBZ0IsSUFBSSxDQUFDLGFBQWEsRUFBQSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLEVBQXBDLENBQW9DLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4RyxDQUFDOzs7Ozs7SUFFTSwyQ0FBa0I7Ozs7O0lBQXpCLFVBQTBCLEtBQWEsRUFBRSxLQUFhO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUN2RSxPQUFPLENBQUMsbUJBQWdCLElBQUksQ0FBQyxhQUFhLEVBQUEsQ0FBQyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxFQUFwQyxDQUFvQyxFQUFDLENBQUM7SUFDOUYsQ0FBQzs7OztJQUVNLHFDQUFZOzs7SUFBbkI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztTQUM5QzthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRU0sMENBQWlCOzs7O0lBQXhCLFVBQXlCLFFBQWlCO1FBQTFDLGlCQWdCQzs7WUFmSyxPQUFPLEdBQWtCLEVBQUU7UUFDL0IsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTzs7Ozs7WUFBQyxVQUFDLE1BQU0sRUFBRSxLQUFLO2dCQUN4QyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNiLElBQUksS0FBSyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7d0JBQ3pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ3RCO2lCQUNGO3FCQUFNO29CQUNMLElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7d0JBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ3RCO2lCQUNGO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFTSx1Q0FBYzs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFTSx1Q0FBYzs7OztJQUFyQixVQUFzQixNQUFNO1FBQzFCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNoQztJQUNILENBQUM7Ozs7OztJQUVNLDZCQUFJOzs7OztJQUFYLFVBQVksTUFBVyxFQUFFLElBQWM7UUFDckMsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDO2dCQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQy9DLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtnQkFDOUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDL0M7WUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNMLElBQUksTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFO2dCQUFFLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUNyRTtJQUNILENBQUM7Ozs7SUFFTSw0Q0FBbUI7OztJQUExQjtRQUNFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7SUFFTSxtQ0FBVTs7Ozs7SUFBakIsVUFBa0IsTUFBbUIsRUFBRSxTQUFpQjtRQUN0RCxPQUFPLE1BQU0sQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRU0sd0NBQWU7Ozs7SUFBdEIsVUFBdUIsSUFBUztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDOzs7OztJQUVNLGtDQUFTOzs7O0lBQWhCLFVBQWlCLE1BQW1CO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxJQUFJLEtBQUssRUFBRTtZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtnQkFDckIsTUFBTSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQzthQUNoRDtpQkFBTTtnQkFDTCxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQzthQUNqSTtTQUNGO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRU0sa0NBQVM7Ozs7SUFBaEIsVUFBaUIsUUFBaUI7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsQ0FBQyxrQkFBSyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVNLGlDQUFROzs7SUFBZjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRU0sbUNBQVU7Ozs7SUFBakIsVUFBa0IsSUFBUzs7WUFDbkIsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsRUFBSixDQUFJLEVBQUM7O1lBQy9DLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUN0RCxJQUFJLGlCQUFpQixJQUFJLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7O2dCQUNuQixXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQWYsQ0FBZSxFQUFDO1lBQ2pFLElBQUksV0FBVyxFQUFFO2dCQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNwQztTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxzQ0FBYTs7OztJQUFwQixVQUFxQixJQUFTOztZQUN0QixXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxFQUFKLENBQUksRUFBQztRQUNyRCxPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVNLHFDQUFZOzs7O0lBQW5CLFVBQW9CLElBQVU7O1lBQ3RCLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQXhCLENBQXdCLEVBQUM7UUFDN0UsT0FBTyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7Ozs7SUFFTSwyQ0FBa0I7Ozs7Ozs7O0lBQXpCLFVBQTBCLE1BQW1CLEVBQUUsSUFBVSxFQUFFLE1BQVksRUFBRSxLQUFjLEVBQUUsY0FBeUI7UUFDaEgsSUFBSSxNQUFNLEVBQUU7O2dCQUNKLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDNUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDaEU7SUFDSCxDQUFDOzs7OztJQUVNLGlDQUFROzs7O0lBQWYsVUFBZ0IsSUFBUztRQUN2QixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQzs7WUFFNUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFoQixDQUFnQixFQUFDO1FBQ2xFLE9BQU8sV0FBVyxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFTSx3Q0FBZTs7OztJQUF0QixVQUF1QixLQUFhO1FBQ2xDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDdkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDakY7UUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ1osQ0FBQzs7Ozs7O0lBRU0sK0NBQXNCOzs7OztJQUE3QixVQUE4QixNQUFtQixFQUFFLElBQVM7O1lBQ3BELE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFFdkIsSUFBSSxNQUFNLFlBQVksS0FBSyxFQUFFOztnQkFDckIsTUFBTSxHQUFHLG1CQUFVLE1BQU0sQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEVBQUQsQ0FBQyxFQUFDLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsRUFBekMsQ0FBeUMsRUFBQyxFQUFBO1lBQ2xHLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjtRQUNELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUVNLGlDQUFROzs7O0lBQWYsVUFBZ0IsQ0FBUzs7WUFDbkIsS0FBSyxHQUFHLEVBQUU7UUFDZCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNwRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2Y7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBRTtZQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDL0IsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNmO1NBQ0Y7YUFBTTs7Z0JBQ0MsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Z0JBQ3pCLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUs7WUFDdEgsS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNwRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2Y7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFTSwrQkFBTTs7OztJQUFiLFVBQWMsaUJBQWtDO1FBQWxDLGtDQUFBLEVBQUEseUJBQWtDO1FBQzlDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFTSwrQkFBTTs7OztJQUFiLFVBQWMsY0FBd0I7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVNLHFDQUFZOzs7O0lBQW5CLFVBQW9CLE1BQVc7UUFDN0IsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7O0lBRU0sb0NBQVc7Ozs7OztJQUFsQixVQUFtQixjQUF3QixFQUFFLFdBQW9CLEVBQUUsaUJBQWlDO1FBQXBHLGlCQWVDO1FBZmtFLGtDQUFBLEVBQUEsd0JBQWlDO1FBQ2xHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOztZQUNkLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUM7UUFDOUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFDLFFBQVE7Z0JBQ2hELEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLGlCQUFpQixDQUFDLENBQUM7WUFDbkQsQ0FBQyxFQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsV0FBVztnQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7WUFDMUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFDLFFBQVE7Z0JBQ2xFLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLGlCQUFpQixDQUFDLENBQUM7WUFDbkQsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRU8sNENBQW1COzs7O0lBQTNCO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2hFLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O1lBQ0csS0FBSyxHQUFHLElBQUk7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxJQUFJOztnQkFDaEIsV0FBVyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSTs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFoQixDQUFnQixFQUFDO1lBQ2xFLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hCLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ2QsT0FBTyxLQUFLLENBQUM7YUFDZDtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFFTyx3Q0FBZTs7Ozs7SUFBdkIsVUFBd0IsT0FBWTtRQUNsQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYztZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDMUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQjtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztRQUN4RixPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDL0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7U0FDOUM7SUFDSCxDQUFDOzs7Ozs7SUFFTSxrQ0FBUzs7Ozs7SUFBaEIsVUFBaUIsR0FBVyxFQUFFLEtBQVU7UUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7OztJQUVPLGdEQUF1Qjs7Ozs7O0lBQS9CLFVBQWdDLGNBQXVCLEVBQUUsT0FBWTtRQUFyRSxpQkF3QkM7UUF2QkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxNQUFtQjs7Z0JBQ3pDLEtBQUssR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMxQyxJQUFJLEtBQUssSUFBSSxTQUFTLElBQUksS0FBSyxJQUFJLFdBQVcsRUFBRTtnQkFDOUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUNaO1lBQ0QsSUFBSSxjQUFjLElBQUksSUFBSSxFQUFFO2dCQUMxQixJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLFVBQVUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLE1BQU0sQ0FBQyxFQUFFO29CQUMxSSxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksRUFBRSxFQUFFOzs0QkFDbEIsY0FBYyxHQUFHLG1CQUFRLEtBQUssRUFBQTt3QkFDcEMsSUFBSSxjQUFjLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTs0QkFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQzt5QkFDdkY7NkJBQU0sSUFBSSxjQUFjLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTs0QkFDckMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQzs0QkFDdEYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzt5QkFDbkY7cUJBQ0Y7aUJBQ0Y7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztpQkFDcEM7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQ3BDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBRU8scUNBQVk7Ozs7OztJQUFwQixVQUFxQixXQUFvQixFQUFFLGNBQXdCO1FBQ2pFLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztZQUNuRCxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDM0MsSUFBSSxVQUFVLElBQUksU0FBUyxJQUFJLFVBQVUsSUFBSSxXQUFXLEVBQUU7WUFDeEQsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUNqQjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsdUJBQXVCLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDdkQsSUFBSSxXQUFXLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7WUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7U0FDaEM7O1lBRUssT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7WUFDN0UsU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBckQsQ0FBcUQsRUFBQyxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ3ZHLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7U0FDdEI7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Ozs7OztJQUVPLHdDQUFlOzs7Ozs7SUFBdkIsVUFBd0IsRUFBUSxFQUFFLElBQVk7UUFDNUMsSUFBSSxDQUFDLEVBQUU7WUFBRSxPQUFPLEVBQUUsQ0FBQzs7WUFDZixpQkFBaUIsR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7O1lBQ2hDLElBQUksR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDakQsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQzs7WUFDbkMsTUFBTSxHQUFHLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO1FBQzFELElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7O1lBQ3pDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDbkQsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQzs7WUFDdEMsT0FBTyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRTtRQUN2RCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUFFLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDOztZQUMxQyxJQUFJLEdBQUcsaUJBQWlCLENBQUMsV0FBVyxFQUFFO1FBRTVDLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO1lBQ3pDLEtBQUssWUFBWTtnQkFDZixPQUFPLElBQUksR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25GLEtBQUssa0JBQWtCO2dCQUNyQixPQUFPLElBQUksR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO1lBQ3hFLEtBQUssWUFBWTtnQkFDZixPQUFPLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25GLEtBQUssa0JBQWtCO2dCQUNyQixPQUFPLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO1NBQ3pFO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8seUNBQWdCOzs7OztJQUF4QixVQUF5QixPQUFZO1FBQXJDLGlCQW1EQzs7WUFsREssTUFBTSxHQUFVLElBQUksQ0FBQyxTQUFTOztZQUM1QixPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7UUFDaEUsSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDckIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJOzs7OztnQkFBQyxVQUFDLENBQU0sRUFBRSxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQWhFLENBQWdFLEVBQUMsQ0FBQzthQUM1RztpQkFBTTtnQkFDTCxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUk7Ozs7O2dCQUFDLFVBQUMsQ0FBTSxFQUFFLENBQU0sSUFBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLEVBQS9CLENBQStCLEVBQUMsQ0FBQzthQUMzRTtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ3JCLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSTs7Ozs7Z0JBQUMsVUFBQyxDQUFNLEVBQUUsQ0FBTSxJQUFLLE9BQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFoRSxDQUFnRSxFQUFDLENBQUM7YUFDNUc7aUJBQU07Z0JBQ0wsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJOzs7OztnQkFBQyxVQUFDLENBQU0sRUFBRSxDQUFNLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxFQUEvQixDQUErQixFQUFDLENBQUM7YUFDM0U7U0FDRjs7WUFFRyxLQUFLLEdBQVUsRUFBRTtRQUNyQixJQUFJLE9BQU8sQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFOztnQkFDNUMsYUFBVyxHQUFHLEVBQUU7WUFDdEIsSUFBSSxPQUFPLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3pGLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQSxLQUFLOzt3QkFDOUIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNOzs7O29CQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUE5QyxDQUE4QyxFQUFDO29CQUNuRixJQUFJLFFBQVEsRUFBRTt3QkFDWixRQUFRLENBQUMsT0FBTzs7Ozt3QkFBQyxVQUFDLElBQUk7NEJBQ3BCLElBQUksYUFBVyxDQUFDLFNBQVM7Ozs7NEJBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQWYsQ0FBZSxFQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0NBQ3JELGFBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7NkJBQ3hCO3dCQUNILENBQUMsRUFBQyxDQUFDO3FCQUNKO2dCQUNILENBQUMsRUFBQyxDQUFDO2dCQUNILE1BQU0sR0FBRyxhQUFXLENBQUM7YUFDdEI7O2dCQUVHLE1BQU0sR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMzQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTzs7OztnQkFBQyxVQUFDLE1BQU07O3dCQUM1QixLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDckMsSUFBSSxLQUFLLEVBQUU7d0JBQ1QsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNOzs7O3dCQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQTdDLENBQTZDLEVBQUMsQ0FBQztxQkFDNUU7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7YUFDSjtZQUNELEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTTs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUEvSCxDQUErSCxFQUFDLENBQUM7U0FDN0o7O1lBQ0ssUUFBUSxHQUF1QjtZQUNuQyxLQUFLLEVBQUUsS0FBSztZQUNaLFlBQVksRUFBRSxNQUFNLENBQUMsTUFBTTtTQUM1QjtRQUNELE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFFTyxxQ0FBWTs7Ozs7SUFBcEIsVUFBcUIsQ0FBUztRQUM1QixJQUFJLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBRSxPQUFPLEdBQUcsQ0FBQztRQUNyRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQUUsT0FBTyxHQUFHLENBQUM7UUFDckMsSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQUUsT0FBTyxHQUFHLENBQUM7UUFDcEQsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQUUsT0FBTyxHQUFHLENBQUM7UUFDckQsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFFLE9BQU8sR0FBRyxDQUFDO1FBQ3pDLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBRSxPQUFPLEdBQUcsQ0FBQztRQUN6QyxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQUUsT0FBTyxHQUFHLENBQUM7UUFDL0MsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDOzs7Ozs7O0lBRU8sb0NBQVc7Ozs7OztJQUFuQixVQUFvQixNQUFXLEVBQUUsUUFBYTtRQUM1QyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU8sS0FBSyxDQUFDOztZQUNqQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7O1lBQ3BFLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7WUFDaEUsSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNOztZQUNqQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU07UUFDdkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFO1lBQ2YsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtZQUNqQixPQUFPLFFBQVEsS0FBSyxVQUFVLENBQUM7U0FDaEM7UUFDRCxLQUFLLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDckMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRTtnQkFDZixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7b0JBQzlDLFNBQVMsS0FBSyxDQUFDO2lCQUNoQjthQUNGO1lBQ0QsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRU8sd0NBQWU7Ozs7O0lBQXZCLFVBQXdCLEdBQVk7UUFDbEMsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUNwQixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7Ozs7SUFFTyx1Q0FBYzs7Ozs7O0lBQXRCLFVBQXVCLFFBQTRCLEVBQUUsaUJBQWlDO1FBQWpDLGtDQUFBLEVBQUEsd0JBQWlDO1FBQ3BGLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDMUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFOUMsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNqRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ2hFO1NBQ0Y7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7OztJQUVPLHVDQUFjOzs7O0lBQXRCOztZQUNNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6RCxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDZCxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDekMsS0FBSyxJQUFJLENBQUMsQ0FBQztTQUNaO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDckMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNYO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7OztJQUVPLHVDQUFjOzs7OztJQUF0QixVQUF1QixhQUEwQjtRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxNQUFNO1lBQzFELElBQUksTUFBTSxDQUFDLEVBQUUsS0FBSyxhQUFhLENBQUMsRUFBRTtnQkFBRSxNQUFNLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUNqRSxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sNENBQW1COzs7O0lBQTNCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7U0FDM0M7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVc7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztZQUN0SCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUztnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7WUFDaEgsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVE7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1lBQzdHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUN2RyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYztnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7WUFDL0gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVc7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO1lBQ3RILElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztZQUMvSCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYztnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUE7WUFDOUgsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVc7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO1lBQ3RILElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztZQUN0SCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVztnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7WUFDdEgsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVM7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO1lBQ2hILElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUI7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztZQUM5SSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7WUFDckksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLHNCQUFzQjtnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDO1lBQ3ZKLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztTQUM5RztJQUNILENBQUM7Ozs7O0lBRU8sK0NBQXNCOzs7O0lBQTlCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7U0FDMUM7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztZQUN0SCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWTtnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDN0csSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLG9CQUFvQjtnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDO1lBQ3JJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0I7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQztZQUNySSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsOEJBQThCO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLDhCQUE4QixHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7WUFDbkssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLDZCQUE2QjtnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLDZCQUE2QixDQUFDO1lBQ2hLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUNoSCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYztnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7WUFDbkgsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQ3hHO0lBQ0gsQ0FBQzs7Ozs7SUFFTyx3Q0FBZTs7OztJQUF2QjtRQUFBLGlCQWtCQztRQWpCQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsTUFBTTtZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7Z0JBQUUsTUFBTSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztZQUN2RSxJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN4QztZQUNELElBQUksTUFBTSxDQUFDLFdBQVcsRUFBRTtnQkFDdEIsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQyxRQUFRLEVBQUU7b0JBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCO3dCQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztpQkFDckY7Z0JBQ0QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQ3ZDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJOzs7OztRQUFDLFVBQUMsQ0FBYyxFQUFFLENBQWMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXBELENBQW9ELEVBQUMsQ0FBQztJQUNuSixDQUFDOzs7OztJQUdPLHVDQUFjOzs7O0lBQXRCO1FBQUEsaUJBMEJDO1FBekJDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxTQUFTOzs7O1lBQUUsVUFBQyxNQUFNOztvQkFDMUQsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLOztvQkFDdEIsR0FBRyxHQUFHLFNBQVM7Z0JBQ25CLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNoRCxHQUFHLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDMUQ7Z0JBQ0QsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsSUFBSSxLQUFLLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRSxFQUFFO29CQUM5RixJQUFJLEtBQUssSUFBSSxFQUFFLElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRTt3QkFDOUIsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUU7NEJBQzFFLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQzs0QkFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO3lCQUMzQjtxQkFDRjt5QkFBTSxJQUFJLEtBQUssSUFBSSxFQUFFLElBQUksS0FBSyxJQUFJLEdBQUcsRUFBRTt3QkFDdEMsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUU7NEJBQzFFLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQzs0QkFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO3lCQUMzQjtxQkFDRjs7d0JBQ0ksT0FBTztpQkFDYjtxQkFBTTtvQkFDTCxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7aUJBQ3pCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dCQXp4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixpK3hCQUFxQztvQkFFckMsVUFBVSxFQUFFO3dCQUNWLE9BQU8sQ0FBQyxZQUFZLEVBQUU7NEJBQ3BCLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUN4QixLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQzs0QkFDckIsVUFBVSxDQUFDLFFBQVEsRUFBRTtnQ0FDbkIsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQ0FDckQsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NkJBQ2hGLENBQUM7NEJBQ0YsVUFBVSxDQUFDLFFBQVEsRUFBRTtnQ0FDbkIsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0NBQ2pELE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NkJBQ3BGLENBQUM7eUJBQ0gsQ0FBQzt3QkFDRixPQUFPLENBQUMscUJBQXFCLEVBQUU7NEJBQzdCLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUN4QixLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQzs0QkFDckIsVUFBVSxDQUFDLFFBQVEsRUFBRTtnQ0FDbkIsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQ0FDcEQsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NkJBQ2hGLENBQUM7NEJBQ0YsVUFBVSxDQUFDLFFBQVEsRUFBRTtnQ0FDbkIsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0NBQ2pELE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NkJBQ25GLENBQUM7eUJBQ0gsQ0FBQztxQkFDSDs7aUJBQ0Y7Ozs7Z0JBeEM2QyxVQUFVO2dCQUEyQixnQkFBZ0I7Z0JBTTFGLFdBQVc7OztpQ0FxQ2pCLEtBQUs7a0NBQ0wsS0FBSzt5QkFDTCxLQUFLOzRCQUNMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzBCQUN2QyxTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFDckMsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7b0NBQ3RDLFlBQVksU0FBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBbXZCekQscUJBQUM7Q0FBQSxBQTF4QkQsSUEweEJDO1NBMXZCWSxjQUFjOzs7SUFDekIsd0NBQWdDOztJQUNoQyx5Q0FBaUM7O0lBQ2pDLGdDQUFvQzs7SUFDcEMsbUNBQXVFOztJQUN2RSxpQ0FBbUU7O0lBQ25FLGtDQUFxRTs7SUFDckUsMkNBQTJHOztJQUMzRywrQkFBeUI7O0lBQ3pCLHNDQUFnQzs7SUFDaEMsaUNBQXdCOztJQUN4Qix1Q0FBaUM7O0lBQ2pDLGtDQUF3Qjs7SUFDeEIsaUNBQXVCOztJQUN2QixtQ0FBeUI7O0lBQ3pCLG9DQUFpQzs7SUFDakMscUNBQStCOztJQUMvQixnQ0FBd0I7O0lBQ3hCLGlDQUEyQjs7SUFDM0IscUNBQW9DOztJQUNwQyx1Q0FBeUM7O0lBQ3pDLHdDQUEwQzs7SUFDMUMsdUNBQXlDOztJQUN6Qyw2Q0FBNEM7O0lBQzVDLHNDQUFpQzs7SUFDakMsbUNBQWtDOzs7OztJQUNsQyx5Q0FBb0M7Ozs7O0lBQ3BDLG1DQUEwQjs7Ozs7SUFDMUIsaUNBQTJCOztJQUMzQiwwQ0FBaUM7O0lBQ2pDLDJDQUFrQzs7SUFDbEMsMENBQWlDOztJQUNqQywyQ0FBa0M7O0lBQ2xDLDRDQUFtQzs7SUFDbkMscUNBQXFFOzs7OztJQUNyRSxpQ0FBMEI7Ozs7O0lBQzFCLHlDQUFrQzs7Ozs7SUFDbEMsMENBQXFDOzs7OztJQUNyQyx1Q0FBeUQ7Ozs7O0lBQ3pELHVDQUE2Qzs7Ozs7SUFHM0MscUNBQStCOzs7OztJQUMvQix5Q0FBMkM7Ozs7O0lBQzNDLHFDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDb250ZW50Q2hpbGQsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBUYWJsZU9wdGlvbiwgVGFibGVDb2x1bW4sIFRhYmxlQWN0aW9uLCBUYWJsZU1vZGUsIFRhYmxlQ29uc3RhbnQsIFRhYmxlUmVzcG9uc2UsIFRhYmxlVGV4dCwgVGFibGVNZXNzYWdlLCBUYWJsZUNvbHVtblR5cGUsIEVkaXR0ZWRGaWVsZCB9IGZyb20gJy4vdGFibGUubW9kZWwnO1xyXG5pbXBvcnQgeyBUYWJsZVJvd0RldGFpbERpcmVjdGl2ZSB9IGZyb20gJy4vdGFibGUtcm93LWRldGFpbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZGVsYXkgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYy10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ2NBbmltYXRpb24nLCBbXHJcbiAgICAgIHN0YXRlKCd2b2lkJywgc3R5bGUoe30pKSxcclxuICAgICAgc3RhdGUoJyonLCBzdHlsZSh7fSkpLFxyXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXHJcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0zMHB4KScsIG9wYWNpdHk6IDAgfSksXHJcbiAgICAgICAgYW5pbWF0ZSgnMzAwbXMgZWFzZS1pbi1vdXQnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknLCBvcGFjaXR5OiAxIH0pKVxyXG4gICAgICBdKSxcclxuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xyXG4gICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsIG9wYWNpdHk6IDEgfSksXHJcbiAgICAgICAgYW5pbWF0ZSgnMzAwbXMgZWFzZS1pbi1vdXQnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTMwcHgpJywgb3BhY2l0eTogMCB9KSlcclxuICAgICAgXSlcclxuICAgIF0pLFxyXG4gICAgdHJpZ2dlcignY0FuaW1hdGlvbkZhZGVSaWdodCcsIFtcclxuICAgICAgc3RhdGUoJ3ZvaWQnLCBzdHlsZSh7fSkpLFxyXG4gICAgICBzdGF0ZSgnKicsIHN0eWxlKHt9KSksXHJcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMzBweCknLCBvcGFjaXR5OiAwIH0pLFxyXG4gICAgICAgIGFuaW1hdGUoJzMwMG1zIGVhc2UtaW4tb3V0Jywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb3BhY2l0eTogMSB9KSlcclxuICAgICAgXSksXHJcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcclxuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLCBvcGFjaXR5OiAxIH0pLFxyXG4gICAgICAgIGFuaW1hdGUoJzMwMG1zIGVhc2UtaW4tb3V0Jywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDMwcHgpJywgb3BhY2l0eTogMCB9KSlcclxuICAgICAgXSlcclxuICAgIF0pXHJcbiAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIHZhbGlkYXRpb25OYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmFsaWRhdGlvblNjb3BlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIG9wdGlvbjogVGFibGVPcHRpb247XHJcbiAgQFZpZXdDaGlsZCgnc2VhcmNoUmVmJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIHNlYXJjaFJlZjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdnb3RvUmVmJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIGdvdG9SZWY6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgndGFibGVSZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgdGFibGVSZWY6IEVsZW1lbnRSZWY7XHJcbiAgQENvbnRlbnRDaGlsZChUYWJsZVJvd0RldGFpbERpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIHJvd0RldGFpbFRlbXBsYXRlOiBUYWJsZVJvd0RldGFpbERpcmVjdGl2ZTtcclxuICBwdWJsaWMgaXRlbXM6IGFueVtdID0gW107XHJcbiAgcHVibGljIHRvdGFsUmVjb3JkczogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbjtcclxuICBwdWJsaWMgc2VsZWN0ZWRJdGVtczogYW55W10gPSBbXTtcclxuICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcclxuICBwdWJsaWMgb3JkZXJCeTogc3RyaW5nO1xyXG4gIHB1YmxpYyBkaXJlY3Rpb246IHN0cmluZztcclxuICBwdWJsaWMgdG90YWxQYWdlczogbnVtYmVyW10gPSBbXTtcclxuICBwdWJsaWMgY3VycmVudFBhZ2U6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGZpbHRlcjogYW55ID0ge307XHJcbiAgcHVibGljIG1heFBhZ2U6IG51bWJlciA9IDU7XHJcbiAgcHVibGljIHNlbGVjdGVkQWxsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGZpbHRlckNvbHVtbnM6IFRhYmxlQ29sdW1uW10gPSBbXTtcclxuICBwdWJsaWMgdG9vbGJhckFjdGlvbnM6IFRhYmxlQWN0aW9uW10gPSBbXTtcclxuICBwdWJsaWMgaW5saW5lQWN0aW9uczogVGFibGVBY3Rpb25bXSA9IFtdO1xyXG4gIHB1YmxpYyBmaWx0ZXJTZWN0aW9uVG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIHRleHRTZWFyY2hlZDogc3RyaW5nID0gYGA7XHJcbiAgcHVibGljIHNob3dSZXNldDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZGVmYXVsdFBhZ2VTaXplOiBudW1iZXIgPSA1O1xyXG4gIHByaXZhdGUgbG9jYWxEYXRhPzogYW55W107XHJcbiAgcHJpdmF0ZSBfcmVuZGVyOiBSZW5kZXJlcjI7XHJcbiAgcHVibGljIGhhc0ZpbHRlclNlY3Rpb246IGJvb2xlYW47XHJcbiAgcHVibGljIGhhc1Rvb2xiYXJTZWN0aW9uOiBib29sZWFuO1xyXG4gIHB1YmxpYyBoYXNGb290ZXJTZWN0aW9uOiBib29sZWFuO1xyXG4gIHB1YmxpYyBoYXNEZXRhaWxUZW1wbGF0ZTogYm9vbGVhbjtcclxuICBwdWJsaWMgaGFzUGFnZVNpemVDaG9vc2VyOiBib29sZWFuO1xyXG4gIHB1YmxpYyBjaGFuZ2VQYWdlJDogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xyXG4gIHByaXZhdGUgcmVxdWVzdDogYW55ID0ge307XHJcbiAgcHJpdmF0ZSBwcmV2aW91c1JlcXVlc3Q6IGFueSA9IHt9O1xyXG4gIHByaXZhdGUgcmVjdXJzaXZlQ291bnRlcjogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuICBwcm90ZWN0ZWQgZWRpdHRlZEZpZWxkczogRWRpdHRlZEZpZWxkW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHRoaXNFbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcclxuICAgIHByb3RlY3RlZCBkYXRhU2VydmljZTogRGF0YVNlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMuX3JlbmRlciA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgICBjb25zdCBjaGFuZ2VQYWdlU3Vic2NyaXB0aW9uID0gdGhpcy5jaGFuZ2VQYWdlJC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLnN1YnNjcmliZShwYWdlSW5kZXggPT4ge1xyXG4gICAgICBpZiAocGFnZUluZGV4IDwgMCB8fCBwYWdlSW5kZXggPj0gdGhpcy50b3RhbFBhZ2VzLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZUluZGV4O1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLnJlcXVlc3QpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbi5yZXF1ZXN0ID0ge307XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vcHRpb24ucmVxdWVzdC5wYWdlSW5kZXggPSB0aGlzLmN1cnJlbnRQYWdlO1xyXG4gICAgICB0aGlzLnNlYXJjaEFzeW5jKG51bGwsIG51bGwsIHRydWUpLnN1YnNjcmliZSgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKGNoYW5nZVBhZ2VTdWJzY3JpcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3B0aW9uLnNlbGVjdGVkSXRlbXMgJiYgdGhpcy5vcHRpb24uc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGlmICghdGhpcy5zZWxlY3RlZEl0ZW1zKSB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcclxuICAgICAgdGhpcy5vcHRpb24uc2VsZWN0ZWRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5vcHRpb24ubW9kZSkgdGhpcy5vcHRpb24ubW9kZSA9IFRhYmxlTW9kZS5mdWxsO1xyXG4gICAgaWYgKCF0aGlzLm9wdGlvbi5hY3Rpb25zKSB0aGlzLm9wdGlvbi5hY3Rpb25zID0gW107XHJcbiAgICBpZiAoIXRoaXMub3B0aW9uLmtleSkgdGhpcy5vcHRpb24ua2V5ID0gVGFibGVDb25zdGFudC5LZXk7XHJcbiAgICBpZiAoIXRoaXMub3B0aW9uLnRvdGFsVG9vbGJhckl0ZW0pIHRoaXMub3B0aW9uLnRvdGFsVG9vbGJhckl0ZW0gPSA1O1xyXG4gICAgaWYgKHRoaXMub3B0aW9uLm1heFBhZ2UpIHRoaXMubWF4UGFnZSA9IHRoaXMub3B0aW9uLm1heFBhZ2U7XHJcbiAgICBpZiAoIXRoaXMub3B0aW9uLmRlZmF1bHRPcmRlckJ5KSB0aGlzLm9wdGlvbi5kZWZhdWx0T3JkZXJCeSA9ICdDcmVhdGVkRGF0ZSc7XHJcbiAgICBpZiAoIXRoaXMub3B0aW9uLmRlZmF1dE9yZGVyRGlyZWN0aW9uKSB0aGlzLm9wdGlvbi5kZWZhdXRPcmRlckRpcmVjdGlvbiA9IFRhYmxlQ29uc3RhbnQuRGlyZWN0aW9uLkRFU0M7XHJcbiAgICBpZiAoIXRoaXMub3B0aW9uLmNvbXBvbmVudENsYXNzKSB7XHJcbiAgICAgIHRoaXMub3B0aW9uLmNvbXBvbmVudENsYXNzID0gVGFibGVDb25zdGFudC5Db21wb25lbnRDbGFzcztcclxuICAgICAgdGhpcy50aGlzRWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb24uY29tcG9uZW50Q2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbi5tYXhMZW5naHRleHQgPT09IHVuZGVmaW5lZCB8fCB0aGlzLm9wdGlvbi5tYXhMZW5naHRleHQgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5vcHRpb24ubWF4TGVuZ2h0ZXh0ID0gMTUwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5pdFRhYmxlVGFibGVUZXh0cygpO1xyXG4gICAgdGhpcy5pbml0VGFibGVUYWJsZU1lc3NhZ2VzKCk7XHJcbiAgICB0aGlzLmluaXRNYWluQ29sdW1ucygpO1xyXG4gICAgaWYgKHRoaXMub3B0aW9uLmFjdGlvbnMpIHtcclxuICAgICAgdGhpcy5vcHRpb24uYWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IHtcclxuICAgICAgICBpZiAoIWFjdGlvbi50eXBlKSBhY3Rpb24udHlwZSA9IFRhYmxlQ29uc3RhbnQuQWN0aW9uVHlwZS5JbmxpbmU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy50b29sYmFyQWN0aW9ucyA9IHRoaXMub3B0aW9uLmFjdGlvbnMuZmlsdGVyKHggPT4gW1RhYmxlQ29uc3RhbnQuQWN0aW9uVHlwZS5Cb3RoLCBUYWJsZUNvbnN0YW50LkFjdGlvblR5cGUuVG9vbGJhcl0uaW5kZXhPZih4LnR5cGUpID49IDApO1xyXG4gICAgdGhpcy5pbmxpbmVBY3Rpb25zID0gdGhpcy5vcHRpb24uYWN0aW9ucy5maWx0ZXIoeCA9PiBbVGFibGVDb25zdGFudC5BY3Rpb25UeXBlLkJvdGgsIFRhYmxlQ29uc3RhbnQuQWN0aW9uVHlwZS5JbmxpbmVdLmluZGV4T2YoeC50eXBlKSA+PSAwKTtcclxuXHJcbiAgICBjb25zdCBpbkZ1bGxNb2RlID0gdGhpcy5vcHRpb24ubW9kZSA9PT0gVGFibGVNb2RlLmZ1bGw7XHJcbiAgICB0aGlzLmZpbHRlckNvbHVtbnMgPSB0aGlzLm9wdGlvbi5tYWluQ29sdW1ucy5maWx0ZXIoY29sdW1uID0+IGNvbHVtbi5hbGxvd0ZpbHRlcilcclxuICAgICAgLnNvcnQoKGE6IFRhYmxlQ29sdW1uLCBiOiBUYWJsZUNvbHVtbikgPT4gYS5vcmRlciA+IGIub3JkZXIgPyAxIDogYS5vcmRlciA9PT0gYi5vcmRlciA/IDAgOiAtMSk7XHJcbiAgICB0aGlzLmhhc0ZpbHRlclNlY3Rpb24gPSBpbkZ1bGxNb2RlO1xyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbi5wYWdpbmcgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLm9wdGlvbi5wYWdpbmcgPSBpbkZ1bGxNb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbkZ1bGxNb2RlKSB7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24ucGFnZVNpemVzKSB0aGlzLm9wdGlvbi5wYWdlU2l6ZXMgPSBUYWJsZUNvbnN0YW50LlBhZ2VTaXplcztcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5kZWZhdWx0UGFnZVNpemUpIHRoaXMub3B0aW9uLmRlZmF1bHRQYWdlU2l6ZSA9IFRhYmxlQ29uc3RhbnQuUGFnZVNpemVzWzBdO1xyXG4gICAgICBpZiAodGhpcy5vcHRpb24uZGVmYXVsdFBhZ2VTaXplKSB0aGlzLmRlZmF1bHRQYWdlU2l6ZSA9IHRoaXMub3B0aW9uLmRlZmF1bHRQYWdlU2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYXNUb29sYmFyQWN0aW9ucyA9IHRoaXMub3B0aW9uLmFjdGlvbnMgJiYgdGhpcy5vcHRpb24uYWN0aW9ucy5maWx0ZXIoeCA9PiBbVGFibGVDb25zdGFudC5BY3Rpb25UeXBlLlRvb2xiYXIsIFRhYmxlQ29uc3RhbnQuQWN0aW9uVHlwZS5Cb3RoXS5pbmRleE9mKHgudHlwZSkgPj0gMCkubGVuZ3RoID4gMDtcclxuICAgIGNvbnN0IGhhc1RvcEJ1dHRvbnMgPSB0aGlzLm9wdGlvbi50b3BCdXR0b25zICYmIHRoaXMub3B0aW9uLnRvcEJ1dHRvbnMubGVuZ3RoID4gMDtcclxuXHJcbiAgICB0aGlzLmhhc1Rvb2xiYXJTZWN0aW9uID0gaW5GdWxsTW9kZSB8fCBoYXNUb29sYmFyQWN0aW9ucyB8fCBoYXNUb3BCdXR0b25zO1xyXG4gICAgdGhpcy5oYXNGb290ZXJTZWN0aW9uID0gaW5GdWxsTW9kZSB8fCB0aGlzLm9wdGlvbi5wYWdpbmc7XHJcbiAgICB0aGlzLmhhc1BhZ2VTaXplQ2hvb3NlciA9IHRoaXMub3B0aW9uLnBhZ2luZztcclxuICAgIGlmICh0aGlzLm9wdGlvbi5oaWRlQ2hlY2tib3hDb2x1bW4gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLm9wdGlvbi5oaWRlQ2hlY2tib3hDb2x1bW4gPSAhaGFzVG9vbGJhckFjdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLm9wdGlvbi5yZXF1ZXN0KSB7XHJcbiAgICAgIHRoaXMub3B0aW9uLnJlcXVlc3QgPSB7XHJcbiAgICAgICAgcGFnZUluZGV4OiAwLFxyXG4gICAgICAgIHBhZ2VTaXplOiB0aGlzLmRlZmF1bHRQYWdlU2l6ZVxyXG4gICAgICB9O1xyXG4gICAgICBpZiAodGhpcy5vcHRpb24uZGVmYXVsdFBhZ2VTaXplKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb24ucmVxdWVzdC5wYWdlU2l6ZSA9IHRoaXMub3B0aW9uLmRlZmF1bHRQYWdlU2l6ZTtcclxuICAgICAgICB0aGlzLnBhZ2VTaXplID0gdGhpcy5vcHRpb24ucmVxdWVzdC5wYWdlU2l6ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlYXJjaEFzeW5jKCkuc3Vic2NyaWJlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLnJlcXVlc3QucGFnZVNpemUpIHtcclxuICAgICAgICB0aGlzLnBhZ2VTaXplID0gdGhpcy5vcHRpb24ucmVxdWVzdC5wYWdlU2l6ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnBhZ2VTaXplID0gdGhpcy5kZWZhdWx0UGFnZVNpemU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWFyY2hBc3luYygpLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNhbGxiYWNrKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gb2YodGhpcy5zZWxlY3RlZEl0ZW1zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb3B5KGl0ZW06IGFueSwgcmVmcmVzaDogYm9vbGVhbiA9IHRydWUsIGV4ZWN1dGU/OiAoaXRlbTogYW55KSA9PiB2b2lkLCBjYWxsYmFjaz86IChjb3B5SXRlbTogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXRlbXMpIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgIHZhciBjb3B5SXRlbSA9IHRoaXMuZGF0YVNlcnZpY2UuY2xvbmVJdGVtKGl0ZW0pO1xyXG4gICAgaWYgKGNvcHlJdGVtLmlkKSBjb3B5SXRlbS5pZCA9IHRoaXMuZGF0YVNlcnZpY2UubmV3R3VpZCgpO1xyXG4gICAgaWYgKGV4ZWN1dGUpIHtcclxuICAgICAgZXhlY3V0ZShjb3B5SXRlbSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vcHRpb24ubG9jYWxEYXRhKSB7XHJcbiAgICAgIHRoaXMubG9jYWxEYXRhLnB1c2goY29weUl0ZW0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pdGVtcy5wdXNoKGNvcHlJdGVtKTtcclxuICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soY29weUl0ZW0pO1xyXG4gICAgaWYgKHJlZnJlc2ggPT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLnNlYXJjaEFzeW5jKHRydWUpLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFjY2VwdElubGluZUVkaXQoZmllbGQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5jbG9zZUlubGluZUVkaXQoZmllbGQsIGluZGV4KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYW5jZWxJbmxpbmVFZGl0KGl0ZW06IGFueSwgZmllbGQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdmFyIGN1cnJlbnRJdGVtID0gdGhpcy5yZXRyaWV2ZUlubGluZUVkaXQoZmllbGQsIGluZGV4KTtcclxuICAgIGlmICghY3VycmVudEl0ZW0pIHJldHVybjtcclxuICAgIGl0ZW1bZmllbGRdID0gY3VycmVudEl0ZW0uaXRlbVtmaWVsZF07XHJcbiAgICB0aGlzLmNsb3NlSW5saW5lRWRpdChmaWVsZCwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlSW5saW5lRWRpdChmaWVsZDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB2YXIgaXRlbUluZGV4ID0gdGhpcy5lZGl0dGVkRmllbGRzLmZpbmRJbmRleChzID0+IHMuZmllbGQgPT0gZmllbGQgJiYgcy5pbmRleCA9PSBpbmRleCk7XHJcbiAgICBpZiAoaXRlbUluZGV4ID4gLTEpIHRoaXMuZWRpdHRlZEZpZWxkcy5zcGxpY2UoaXRlbUluZGV4LCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBlZGl0SW5saW5lKGl0ZW06IGFueSwgZmllbGQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKCFpdGVtKSByZXR1cm47XHJcbiAgICB2YXIgY3VycmVudEl0ZW0gPSB0aGlzLnJldHJpZXZlSW5saW5lRWRpdChmaWVsZCwgaW5kZXgpO1xyXG4gICAgaWYgKCFjdXJyZW50SXRlbSkge1xyXG4gICAgICB0aGlzLmVkaXR0ZWRGaWVsZHMucHVzaCh7XHJcbiAgICAgICAgaXRlbTogdGhpcy5kYXRhU2VydmljZS5jbG9uZUl0ZW0oaXRlbSksXHJcbiAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgIGZpZWxkOiBmaWVsZFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN1cnJlbnRJdGVtLml0ZW0gPSB0aGlzLmRhdGFTZXJ2aWNlLmNsb25lSXRlbShpdGVtKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXNJbmxpbmVFZGl0KGl0ZW06IGFueSwgZmllbGQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLm9wdGlvbiB8fCB0aGlzLm9wdGlvbi5pbmxpbmVFZGl0ICE9IHRydWUpIHJldHVybiBmYWxzZTtcclxuICAgIGlmICghaXRlbSB8fCAhdGhpcy5lZGl0dGVkRmllbGRzIHx8IHRoaXMuZWRpdHRlZEZpZWxkcy5sZW5ndGggPT0gMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuICg8RWRpdHRlZEZpZWxkW10+dGhpcy5lZGl0dGVkRmllbGRzKS5maW5kSW5kZXgocyA9PiBzLmZpZWxkID09IGZpZWxkICYmIHMuaW5kZXggPT0gaW5kZXgpID4gLTE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmV0cmlldmVJbmxpbmVFZGl0KGZpZWxkOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBFZGl0dGVkRmllbGQge1xyXG4gICAgaWYgKCF0aGlzLmVkaXR0ZWRGaWVsZHMgfHwgdGhpcy5lZGl0dGVkRmllbGRzLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiAoPEVkaXR0ZWRGaWVsZFtdPnRoaXMuZWRpdHRlZEZpZWxkcykuZmluZChzID0+IHMuZmllbGQgPT0gZmllbGQgJiYgcy5pbmRleCA9PSBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzZXRGaWx0ZXJzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5maWx0ZXIgPSB7fTtcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG4gICAgdGhpcy5zZWxlY3RlZEFsbCA9IGZhbHNlO1xyXG4gICAgdGhpcy5maWx0ZXJTZWN0aW9uVG9nZ2xlID0gZmFsc2U7XHJcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSBbXTtcclxuICAgIHRoaXMub3B0aW9uLnJlcXVlc3QucGFnZUluZGV4ID0gMDtcclxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSAwO1xyXG4gICAgaWYgKCF0aGlzLm9wdGlvbi5yZXF1ZXN0LnBhZ2VTaXplKSB7XHJcbiAgICAgIHRoaXMucGFnZVNpemUgPSB0aGlzLm9wdGlvbi5yZXF1ZXN0LnBhZ2VTaXplO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wYWdlU2l6ZSA9IHRoaXMuZGVmYXVsdFBhZ2VTaXplO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcHRpb24ucmVxdWVzdC5wYWdlU2l6ZSA9IHRoaXMucGFnZVNpemU7XHJcbiAgICB0aGlzLnNlYXJjaEFzeW5jKCkuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLnNob3dSZXNldCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yZXF1ZXN0ID0ge307XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VG9vbGJhckFjdGlvbnMoc3RhbmRhcmQ6IGJvb2xlYW4pOiBUYWJsZUFjdGlvbltdIHtcclxuICAgIGxldCBhY3Rpb25zOiBUYWJsZUFjdGlvbltdID0gW107XHJcbiAgICBpZiAodGhpcy50b29sYmFyQWN0aW9ucykge1xyXG4gICAgICB0aGlzLnRvb2xiYXJBY3Rpb25zLmZvckVhY2goKGFjdGlvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoIXN0YW5kYXJkKSB7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPj0gdGhpcy5vcHRpb24udG90YWxUb29sYmFySXRlbSkge1xyXG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGluZGV4IDwgdGhpcy5vcHRpb24udG90YWxUb29sYmFySXRlbSkge1xyXG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFjdGlvbnM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlUGFnZVNpemUoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wdGlvbi5yZXF1ZXN0LnBhZ2VTaXplID0gdGhpcy5wYWdlU2l6ZTtcclxuICAgIHRoaXMub3B0aW9uLnJlcXVlc3QucGFnZUluZGV4ID0gMDtcclxuICAgIHRoaXMuc2VhcmNoQXN5bmMoKS5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5ka2VLZXlwcmVzcygkZXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICgkZXZlbnQgJiYgJGV2ZW50LndoaWNoID09IDEzKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoQXN5bmMoKS5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnb3RvKCRldmVudDogYW55LCBibHVyPzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCRldmVudC53aGljaCA9PSAxMyB8fCBibHVyID09IHRydWUpIHtcclxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9ICRldmVudC50YXJnZXQudmFsdWUgLSAxO1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA8IDApIHRoaXMuY3VycmVudFBhZ2UgPSAwO1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA+PSB0aGlzLnRvdGFsUGFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMudG90YWxQYWdlcy5sZW5ndGggLSAxO1xyXG4gICAgICB9XHJcbiAgICAgICRldmVudC50YXJnZXQudmFsdWUgPSB0aGlzLmN1cnJlbnRQYWdlICsgMTtcclxuICAgICAgdGhpcy5jaGFuZ2VQYWdlJC5uZXh0KHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCRldmVudC53aGljaCA8IDQ4IHx8ICRldmVudC53aGljaCA+IDU3KSAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVGaWx0ZXJTZWN0aW9uKCkge1xyXG4gICAgdGhpcy5maWx0ZXJTZWN0aW9uVG9nZ2xlID0gIXRoaXMuZmlsdGVyU2VjdGlvblRvZ2dsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93U29ydGVyKGNvbHVtbjogVGFibGVDb2x1bW4sIGRpcmVjdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY29sdW1uLmRpcmVjdGlvbiA9PT0gZGlyZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZVJvd0RldGFpbChpdGVtOiBhbnkpIHtcclxuICAgIGl0ZW0udG9nZ2xlID0gIWl0ZW0udG9nZ2xlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNvcnRBc3luYyhjb2x1bW46IFRhYmxlQ29sdW1uKTogdm9pZCB7XHJcbiAgICBpZiAoIWNvbHVtbi52YWx1ZVJlZikgcmV0dXJuO1xyXG4gICAgdGhpcy5yZXNldFNvcnRBc3luYyhjb2x1bW4pO1xyXG4gICAgaWYgKGNvbHVtbiAmJiBjb2x1bW4uYWxsb3dTb3J0ICE9IGZhbHNlKSB7XHJcbiAgICAgIGlmICghY29sdW1uLmRpcmVjdGlvbikge1xyXG4gICAgICAgIGNvbHVtbi5kaXJlY3Rpb24gPSBUYWJsZUNvbnN0YW50LkRpcmVjdGlvbi5BU0M7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29sdW1uLmRpcmVjdGlvbiA9IGNvbHVtbi5kaXJlY3Rpb24gPT0gVGFibGVDb25zdGFudC5EaXJlY3Rpb24uQVNDID8gVGFibGVDb25zdGFudC5EaXJlY3Rpb24uREVTQyA6IFRhYmxlQ29uc3RhbnQuRGlyZWN0aW9uLkFTQztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5vcmRlckJ5ID0gdGhpcy5kYXRhU2VydmljZS50b1Bhc2NhbENhc2UoY29sdW1uLnZhbHVlUmVmKCkpO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBjb2x1bW4uZGlyZWN0aW9uO1xyXG4gICAgdGhpcy5zZWFyY2hBc3luYyhudWxsLCBudWxsLCBmYWxzZSkuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VsZWN0QWxsKHNlbGVjdGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBzZWxlY3RlZCA/IFsuLi50aGlzLml0ZW1zXSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyQWxsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XHJcbiAgICB0aGlzLnNlbGVjdGVkQWxsID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VsZWN0SXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkSWRzID0gdGhpcy5zZWxlY3RlZEl0ZW1zLm1hcCh4ID0+IHguaWQpO1xyXG4gICAgY29uc3QgZXhpc3RpbmdJdGVtSW5kZXggPSBzZWxlY3RlZElkcy5pbmRleE9mKGl0ZW0uaWQpO1xyXG4gICAgaWYgKGV4aXN0aW5nSXRlbUluZGV4ID49IDApIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNwbGljZShleGlzdGluZ0l0ZW1JbmRleCwgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5vcHRpb24ubXVsdGlwbGUpIHtcclxuICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbXMuZmluZChzID0+IHMuaWQgPT0gaXRlbS5pZCk7XHJcbiAgICAgIGlmIChjdXJyZW50SXRlbSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtjdXJyZW50SXRlbV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1Jvd1NlbGVjdGVkKGl0ZW06IGFueSkge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRJZHMgPSB0aGlzLnNlbGVjdGVkSXRlbXMubWFwKHggPT4geC5pZCk7XHJcbiAgICByZXR1cm4gc2VsZWN0ZWRJZHMuaW5kZXhPZihpdGVtLmlkKSA+PSAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhc0FueUFjdGlvbihpdGVtPzogYW55KTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBhbGl2ZUFjdGlvbnMgPSB0aGlzLmlubGluZUFjdGlvbnMuZmlsdGVyKHggPT4gIXguaGlkZSB8fCAheC5oaWRlKGl0ZW0pKTtcclxuICAgIHJldHVybiBhbGl2ZUFjdGlvbnMubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBleGVjdXRlQWN0aW9uQXN5bmMoYWN0aW9uOiBUYWJsZUFjdGlvbiwgaXRlbT86IGFueSwgJGV2ZW50PzogYW55LCBpbmRleD86IG51bWJlciwgbG9hZGVkQ2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgaWYgKGFjdGlvbikge1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSAkZXZlbnQgPyAkZXZlbnQudGFyZ2V0IDogbnVsbDtcclxuICAgICAgYWN0aW9uLmV4ZWN1dGVBc3luYyhpdGVtLCB0YXJnZXQsIHRoaXMsIGluZGV4LCBsb2FkZWRDYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNBY3RpdmUoaXRlbTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmZpbmQocyA9PiBzLmlkID09PSBpdGVtLmlkKTtcclxuICAgIHJldHVybiBjdXJyZW50SXRlbSAmJiBjdXJyZW50SXRlbS5jaGVja2VkUm93O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEN1cnJlbnRJbmRleChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbi5yZXF1ZXN0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbi5yZXF1ZXN0LnBhZ2VJbmRleCAqIHRoaXMub3B0aW9uLnJlcXVlc3QucGFnZVNpemUgKyBpbmRleCArIDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RHJvcGRvd25EaXNwbGF5VGV4dChjb2x1bW46IFRhYmxlQ29sdW1uLCBpdGVtOiBhbnkpIHtcclxuICAgIGNvbnN0IHZhbHVlcyA9IGl0ZW1bY29sdW1uLnZhbHVlUmVmKCldO1xyXG4gICAgaWYgKCF2YWx1ZXMpIHJldHVybiAnJztcclxuXHJcbiAgICBpZiAodmFsdWVzIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gPHN0cmluZ1tdPnZhbHVlcy5maWx0ZXIoeCA9PiB4KS5tYXAoeCA9PiB4W2NvbHVtbi5kcm9wZG93bkNvbmZpZ3VyYXRpb24uYmluZExhYmVsXSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQuam9pbignLCAnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZXNbY29sdW1uLmRyb3Bkb3duQ29uZmlndXJhdGlvbi5iaW5kTGFiZWxdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFBhZ2VzKG46IG51bWJlcik6IG51bWJlcltdIHtcclxuICAgIGxldCBwYWdlcyA9IFtdO1xyXG4gICAgaWYgKHRoaXMudG90YWxQYWdlcy5sZW5ndGggPCBuKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLnRvdGFsUGFnZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBwYWdlcy5wdXNoKGkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwYWdlcztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlIDwgbikge1xyXG4gICAgICBmb3IgKGxldCBpID0gbiAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgcGFnZXMucHVzaChpKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgY291bnQgPSBNYXRoLmZsb29yKG4gLyAyKTtcclxuICAgICAgY29uc3QgbWF4ID0gdGhpcy5jdXJyZW50UGFnZSArIGNvdW50ID49IHRoaXMudG90YWxQYWdlcy5sZW5ndGggPyB0aGlzLnRvdGFsUGFnZXMubGVuZ3RoIC0gMSA6IHRoaXMuY3VycmVudFBhZ2UgKyBjb3VudDtcclxuICAgICAgZm9yIChsZXQgaSA9IG1heDsgaSA+PSB0aGlzLmN1cnJlbnRQYWdlIC0gY291bnQ7IGktLSkge1xyXG4gICAgICAgIHBhZ2VzLnB1c2goaSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwYWdlcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWxvYWQoa2VlcFNlbGVjdGVkSXRlbXM6IGJvb2xlYW4gPSBmYWxzZSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoQXN5bmMobnVsbCwgbnVsbCwga2VlcFNlbGVjdGVkSXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlYXJjaChhZHZhbmNlZEZpbHRlcj86IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuc2VhcmNoQXN5bmMoYWR2YW5jZWRGaWx0ZXIpLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRyYWNrUmVjb3JkcyhyZWNvcmQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHJlY29yZCA/IHJlY29yZC5pZCA6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWFyY2hBc3luYyhhZHZhbmNlZEZpbHRlcj86IGJvb2xlYW4sIGN1cnJlbnRQYWdlPzogbnVtYmVyLCBrZWVwU2VsZWN0ZWRJdGVtczogYm9vbGVhbiA9IHRydWUpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5idWlsZFJlcXVlc3QoY3VycmVudFBhZ2UsIGFkdmFuY2VkRmlsdGVyKTtcclxuICAgIGlmICh0aGlzLm9wdGlvbi5sb2NhbERhdGEpIHtcclxuICAgICAgdGhpcy5sb2NhbERhdGEgPSB0aGlzLm9wdGlvbi5sb2NhbERhdGEoKTtcclxuICAgICAgdGhpcy5zZWFyY2hMb2NhbEl0ZW1zKHJlcXVlc3QpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICB0aGlzLmJpbmRSZXN1bHREYXRhKHJlc3BvbnNlLCBrZWVwU2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5zZXJ2aWNlUHJvdmlkZXIgfHwgIXRoaXMub3B0aW9uLnNlcnZpY2VQcm92aWRlci5zZWFyY2hBc3luYykgdGhyb3cgbmV3IEVycm9yKCchdGhpcy5vcHRpb24uc2VydmljZVByb3ZpZGVyLnNlYXJjaEFzeW5jJyk7XHJcbiAgICAgIHRoaXMub3B0aW9uLnNlcnZpY2VQcm92aWRlci5zZWFyY2hBc3luYyhyZXF1ZXN0KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5iaW5kUmVzdWx0RGF0YShyZXNwb25zZSwga2VlcFNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBvZih0cnVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tlZEFsbFBhZ2VJdGVtcygpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5zZWxlY3RlZEl0ZW1zIHx8ICF0aGlzLml0ZW1zIHx8IHRoaXMuaXRlbXMubGVuZ3RoID09IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50SXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5maW5kKHMgPT4gcy5pZCA9PT0gaXRlbS5pZCk7XHJcbiAgICAgIGlmICghY3VycmVudEl0ZW0pIHtcclxuICAgICAgICBjaGVjayA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY2hlY2s7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldERlZmF1bHRPcmRlcihyZXF1ZXN0OiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbi5kZWZhdWx0T3JkZXJCeSkgdGhpcy5vcmRlckJ5ID0gdGhpcy5vcHRpb24uZGVmYXVsdE9yZGVyQnk7XHJcbiAgICBpZiAodGhpcy5vcHRpb24uZGVmYXV0T3JkZXJEaXJlY3Rpb24pIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5vcHRpb24uZGVmYXV0T3JkZXJEaXJlY3Rpb247XHJcbiAgICByZXF1ZXN0Lm9yZGVyQnkgPSB0aGlzLm9yZGVyQnk7XHJcbiAgICByZXF1ZXN0LmRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgaWYgKCF0aGlzLm9yZGVyQnkpIHtcclxuICAgICAgdGhpcy5vcmRlckJ5ID0gXCJJZFwiO1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IFRhYmxlQ29uc3RhbnQuRGlyZWN0aW9uLkFTQztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGaWx0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMucmVxdWVzdFtrZXldID0gdmFsdWU7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gMDtcclxuICAgIHRoaXMuZmlsdGVyW2tleV0gPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLm9wdGlvbiAmJiB0aGlzLm9wdGlvbi5yZXF1ZXN0KSB0aGlzLm9wdGlvbi5yZXF1ZXN0LnBhZ2VJbmRleCA9IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJldHJpZXZlQWR2YW5jZWRGaWx0ZXJzKGFkdmFuY2VkRmlsdGVyOiBib29sZWFuLCByZXF1ZXN0OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuZmlsdGVyQ29sdW1ucy5mb3JFYWNoKChjb2x1bW46IFRhYmxlQ29sdW1uKSA9PiB7XHJcbiAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZmlsdGVyW2NvbHVtbi52YWx1ZVJlZigpXTtcclxuICAgICAgaWYgKHZhbHVlID09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHZhbHVlID0gJyc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGFkdmFuY2VkRmlsdGVyID09IHRydWUpIHtcclxuICAgICAgICBpZiAoY29sdW1uLnR5cGUgJiYgKGNvbHVtbi50eXBlLnRvTG93ZXJDYXNlKCkgPT0gJ2RhdGUnIHx8IGNvbHVtbi50eXBlLnRvTG93ZXJDYXNlKCkgPT0gJ2RhdGV0aW1lJyB8fCBjb2x1bW4udHlwZS50b0xvd2VyQ2FzZSgpID09ICd0aW1lJykpIHtcclxuICAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSAhPSAnJykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRldGltZVZhbHVlcyA9IDxEYXRlW10+dmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChkYXRldGltZVZhbHVlcy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgIHJlcXVlc3RbY29sdW1uLnZhbHVlUmVmKCkgKyAnRnJvbSddID0gdGhpcy5jb252ZXJ0RGF0ZXRpbWUoZGF0ZXRpbWVWYWx1ZXNbMF0sICdGcm9tJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZXRpbWVWYWx1ZXMubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgICByZXF1ZXN0W2NvbHVtbi52YWx1ZVJlZigpICsgJ0Zyb20nXSA9IHRoaXMuY29udmVydERhdGV0aW1lKGRhdGV0aW1lVmFsdWVzWzBdLCAnRnJvbScpO1xyXG4gICAgICAgICAgICAgIHJlcXVlc3RbY29sdW1uLnZhbHVlUmVmKCkgKyAnVG8nXSA9IHRoaXMuY29udmVydERhdGV0aW1lKGRhdGV0aW1lVmFsdWVzWzFdLCAnVG8nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXF1ZXN0W2NvbHVtbi52YWx1ZVJlZigpXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXF1ZXN0W2NvbHVtbi52YWx1ZVJlZigpXSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYnVpbGRSZXF1ZXN0KGN1cnJlbnRQYWdlPzogbnVtYmVyLCBhZHZhbmNlZEZpbHRlcj86IGJvb2xlYW4pOiBhbnkge1xyXG4gICAgdGhpcy5wcmV2aW91c1JlcXVlc3QgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnJlcXVlc3QpO1xyXG4gICAgbGV0IHNlYXJjaFRleHQgPSB0aGlzLmZpbHRlci5zZWFyY2hUZXh0O1xyXG4gICAgdGhpcy50ZXh0U2VhcmNoZWQgPSB0aGlzLmZpbHRlci5zZWFyY2hUZXh0O1xyXG4gICAgaWYgKHNlYXJjaFRleHQgPT0gdW5kZWZpbmVkIHx8IHNlYXJjaFRleHQgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgc2VhcmNoVGV4dCA9ICcnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZXF1ZXN0LnBhZ2VTaXplID0gdGhpcy5vcHRpb24ucmVxdWVzdC5wYWdlU2l6ZTtcclxuICAgIGlmICghdGhpcy5vcHRpb24ucGFnaW5nKSB7XHJcbiAgICAgIHRoaXMucmVxdWVzdC5wYWdlU2l6ZSA9IDk5OTk5OTtcclxuICAgICAgdGhpcy5wYWdlU2l6ZSA9IDk5OTk5OTtcclxuICAgIH1cclxuICAgIHRoaXMucmVxdWVzdC5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcclxuICAgIHRoaXMucmVxdWVzdC5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcclxuICAgIHRoaXMucmVxdWVzdC5vcmRlckJ5ID0gdGhpcy5vcmRlckJ5O1xyXG4gICAgaWYgKCF0aGlzLm9yZGVyQnkpIHRoaXMuc2V0RGVmYXVsdE9yZGVyKHRoaXMucmVxdWVzdCk7XHJcbiAgICB0aGlzLnJldHJpZXZlQWR2YW5jZWRGaWx0ZXJzKGFkdmFuY2VkRmlsdGVyLCB0aGlzLnJlcXVlc3QpO1xyXG4gICAgdGhpcy5yZXF1ZXN0LnBhZ2VJbmRleCA9IHRoaXMub3B0aW9uLnJlcXVlc3QucGFnZUluZGV4O1xyXG4gICAgaWYgKGN1cnJlbnRQYWdlKSB7XHJcbiAgICAgIHRoaXMucmVxdWVzdC5wYWdlSW5kZXggPSBjdXJyZW50UGFnZTtcclxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLmRhdGFTZXJ2aWNlLmNvbXBhcmVPYmplY3RzKHRoaXMucHJldmlvdXNSZXF1ZXN0LCB0aGlzLnJlcXVlc3QpO1xyXG4gICAgY29uc3QgaXNDaGFuZ2VkID0gY2hhbmdlcy5maWx0ZXIoeCA9PiBbJ3BhZ2VJbmRleCcsICdwYWdlU2l6ZSddLmluZGV4T2YoeC5wcm9wZXJ0eU5hbWUpIDwgMCkubGVuZ3RoID4gMDtcclxuICAgIGlmIChpc0NoYW5nZWQpIHtcclxuICAgICAgdGhpcy5vcHRpb24ucmVxdWVzdC5wYWdlSW5kZXggPSAwO1xyXG4gICAgICB0aGlzLnJlcXVlc3QucGFnZUluZGV4ID0gMDtcclxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb252ZXJ0RGF0ZXRpbWUoZHQ6IERhdGUsIHR5cGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIWR0KSByZXR1cm4gJyc7XHJcbiAgICBsZXQgY29udmVydGVkRGF0ZXRpbWUgPSBuZXcgRGF0ZShkdCk7XHJcbiAgICBsZXQgZGF5cyA9IGNvbnZlcnRlZERhdGV0aW1lLmdldERhdGUoKS50b1N0cmluZygpO1xyXG4gICAgaWYgKGRheXMubGVuZ3RoIDwgMikgZGF5cyA9ICcwJyArIGRheXM7XHJcbiAgICBsZXQgbW9udGhzID0gKGNvbnZlcnRlZERhdGV0aW1lLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpO1xyXG4gICAgaWYgKG1vbnRocy5sZW5ndGggPCAyKSBtb250aHMgPSAnMCcgKyBtb250aHM7XHJcbiAgICBsZXQgaG91cnMgPSBjb252ZXJ0ZWREYXRldGltZS5nZXRIb3VycygpLnRvU3RyaW5nKCk7XHJcbiAgICBpZiAoaG91cnMubGVuZ3RoIDwgMikgaG91cnMgPSAnMCcgKyBob3VycztcclxuICAgIGxldCBtaW51dGVzID0gY29udmVydGVkRGF0ZXRpbWUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCk7XHJcbiAgICBpZiAobWludXRlcy5sZW5ndGggPCAyKSBtaW51dGVzID0gJzAnICsgbWludXRlcztcclxuICAgIGNvbnN0IHllYXIgPSBjb252ZXJ0ZWREYXRldGltZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgIHN3aXRjaCAodGhpcy5vcHRpb24uZGF0ZXRpbWVGb3JtYXQuZm9ybWF0KSB7XHJcbiAgICAgIGNhc2UgJ2RkL01NL3l5eXknOlxyXG4gICAgICAgIHJldHVybiBkYXlzICsgJy8nICsgbW9udGhzICsgJy8nICsgeWVhciArICh0eXBlID09ICdGcm9tJyA/ICcgMDA6MDAnIDogJyAyMzo1OScpO1xyXG4gICAgICBjYXNlICdkZC9NTS95eXl5IEhIOm1tJzpcclxuICAgICAgICByZXR1cm4gZGF5cyArICcvJyArIG1vbnRocyArICcvJyArIHllYXIgKyAnICcgKyBob3VycyArICc6JyArIG1pbnV0ZXM7XHJcbiAgICAgIGNhc2UgJ01NL2RkL3l5eXknOlxyXG4gICAgICAgIHJldHVybiBtb250aHMgKyAnLycgKyBkYXlzICsgJy8nICsgeWVhciArICh0eXBlID09ICdGcm9tJyA/ICcgMDA6MDAnIDogJyAyMzo1OScpO1xyXG4gICAgICBjYXNlICdNTS9kZC95eXl5IEhIOm1tJzpcclxuICAgICAgICByZXR1cm4gbW9udGhzICsgJy8nICsgZGF5cyArICcvJyArIHllYXIgKyAnICcgKyBob3VycyArICc6JyArIG1pbnV0ZXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlYXJjaExvY2FsSXRlbXMocmVxdWVzdDogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGxldCByZXN1bHQ6IGFueVtdID0gdGhpcy5sb2NhbERhdGE7XHJcbiAgICBjb25zdCBvcmRlckJ5ID0gdGhpcy5kYXRhU2VydmljZS5nZXRGaWVsZChyZXF1ZXN0Lm9yZGVyQnksIHRydWUpO1xyXG4gICAgaWYgKHJlcXVlc3QuZGlyZWN0aW9uID09IFRhYmxlQ29uc3RhbnQuRGlyZWN0aW9uLkFTQykge1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLnNvcnQpIHtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHQuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IGFbb3JkZXJCeV0gPiBiW29yZGVyQnldID8gMSA6IGFbb3JkZXJCeV0gPT09IGJbb3JkZXJCeV0gPyAwIDogLTEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4gdGhpcy5vcHRpb24uc29ydChhLCBiLCBvcmRlckJ5KSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24uc29ydCkge1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zb3J0KChiOiBhbnksIGE6IGFueSkgPT4gYVtvcmRlckJ5XSA+IGJbb3JkZXJCeV0gPyAxIDogYVtvcmRlckJ5XSA9PT0gYltvcmRlckJ5XSA/IDAgOiAtMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNvcnQoKGI6IGFueSwgYTogYW55KSA9PiB0aGlzLm9wdGlvbi5zb3J0KGEsIGIsIG9yZGVyQnkpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBpdGVtczogYW55W10gPSBbXTtcclxuICAgIGlmIChyZXF1ZXN0LnBhZ2VJbmRleCA+PSAwICYmIHJlcXVlc3QucGFnZVNpemUgPiAwKSB7XHJcbiAgICAgIGNvbnN0IGxvY2FsUmVzdWx0ID0gW107XHJcbiAgICAgIGlmIChyZXF1ZXN0LnNlYXJjaFRleHQgJiYgdGhpcy5vcHRpb24uc2VhcmNoRmllbGRzICYmIHRoaXMub3B0aW9uLnNlYXJjaEZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb24uc2VhcmNoRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXN1bHQuZmlsdGVyKHMgPT4gdGhpcy5mdXp6eXNlYXJjaChyZXF1ZXN0LnNlYXJjaFRleHQsIHNbZmllbGRdKSk7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChsb2NhbFJlc3VsdC5maW5kSW5kZXgocyA9PiBzLmlkID09IGl0ZW0uaWQpID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFJlc3VsdC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzdWx0ID0gbG9jYWxSZXN1bHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBmaWx0ZXIgPSB7fTtcclxuICAgICAgdGhpcy5yZXRyaWV2ZUFkdmFuY2VkRmlsdGVycyh0cnVlLCBmaWx0ZXIpO1xyXG4gICAgICBpZiAodGhpcy5maWx0ZXJDb2x1bW5zKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJDb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xyXG4gICAgICAgICAgdmFyIHZhbHVlID0gZmlsdGVyW2NvbHVtbi52YWx1ZVJlZigpXTtcclxuICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKHMgPT4gdGhpcy5mdXp6eXNlYXJjaCh2YWx1ZSwgc1tjb2x1bW4udmFsdWVSZWYoKV0pKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpdGVtcyA9IHJlc3VsdC5maWx0ZXIocyA9PiAocmVzdWx0LmluZGV4T2YocykgPj0gcmVxdWVzdC5wYWdlSW5kZXggKiByZXF1ZXN0LnBhZ2VTaXplKSAmJiAocmVzdWx0LmluZGV4T2YocykgPCAocmVxdWVzdC5wYWdlSW5kZXggKyAxKSAqIHJlcXVlc3QucGFnZVNpemUpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3BvbnNlOiBUYWJsZVJlc3BvbnNlPGFueT4gPSB7XHJcbiAgICAgIGl0ZW1zOiBpdGVtcyxcclxuICAgICAgdG90YWxSZWNvcmRzOiByZXN1bHQubGVuZ3RoXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG9mKHJlc3BvbnNlKS5waXBlKGRlbGF5KDI1MCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb252ZXJ0VUNvZGUoYzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICgnYcOj4bqhw6DDoeG6o8SDxIPhurXhurfhurHhurPDouG6q+G6reG6p+G6peG6qScuaW5kZXhPZihjKSA+IC0xKSByZXR1cm4gJ2EnO1xyXG4gICAgaWYgKCdkxJEnLmluZGV4T2YoYykgPiAtMSkgcmV0dXJuICdkJztcclxuICAgIGlmICgnb8O14buNw7LDs+G7j8O04buX4buZ4buT4buRxqHhu6Hhu6Phu53hu5vhu58nLmluZGV4T2YoYykgPiAtMSkgcmV0dXJuICdvJztcclxuICAgIGlmICgndcWp4bulw7nDuuG7p8aw4buv4bux4bur4bup4butxrDhu6/hu7Hhu6vhu6nhu60nLmluZGV4T2YoYykgPiAtMSkgcmV0dXJuICd1JztcclxuICAgIGlmICgnacSp4buLw6zDreG7iScuaW5kZXhPZihjKSA+IC0xKSByZXR1cm4gJ2knO1xyXG4gICAgaWYgKCd54bu54bu14buzw73hu7cnLmluZGV4T2YoYykgPiAtMSkgcmV0dXJuICd5JztcclxuICAgIGlmICgnZeG6veG6ucOow6nhur3DquG7heG7h+G7gcOq4buDJy5pbmRleE9mKGMpID4gLTEpIHJldHVybiAnZSc7XHJcbiAgICByZXR1cm4gYztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZnV6enlzZWFyY2gobmVlZGxlOiBhbnksIGhheXN0YWNrOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICghbmVlZGxlIHx8ICFoYXlzdGFjaykgcmV0dXJuIGZhbHNlO1xyXG4gICAgY29uc3QgaGF5c3RhY2tMQyA9IHRoaXMucmVtb3ZlQWxsU3BhY2VzKGhheXN0YWNrLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICBjb25zdCBuZWVkbGVMQyA9IHRoaXMucmVtb3ZlQWxsU3BhY2VzKG5lZWRsZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgY29uc3QgaGxlbiA9IGhheXN0YWNrLnRvU3RyaW5nKCkubGVuZ3RoO1xyXG4gICAgY29uc3QgbmxlbiA9IG5lZWRsZUxDLnRvU3RyaW5nKCkubGVuZ3RoO1xyXG4gICAgaWYgKG5sZW4gPiBobGVuKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChubGVuID09PSBobGVuKSB7XHJcbiAgICAgIHJldHVybiBuZWVkbGVMQyA9PT0gaGF5c3RhY2tMQztcclxuICAgIH1cclxuICAgIG91dGVyOiBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCBubGVuOyBpKyspIHtcclxuICAgICAgY29uc3QgbmNoID0gdGhpcy5jb252ZXJ0VUNvZGUobmVlZGxlTENbaV0pO1xyXG4gICAgICB3aGlsZSAoaiA8IGhsZW4pIHtcclxuICAgICAgICBpZiAodGhpcy5jb252ZXJ0VUNvZGUoaGF5c3RhY2tMQ1tqKytdKSA9PT0gbmNoKSB7XHJcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUFsbFNwYWNlcyhzdHI/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFzdHIpIHJldHVybiAnJztcclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzL2csICcnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYmluZFJlc3VsdERhdGEocmVzcG9uc2U6IFRhYmxlUmVzcG9uc2U8YW55Piwga2VlcFNlbGVjdGVkSXRlbXM6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICB0aGlzLml0ZW1zID0gcmVzcG9uc2UuaXRlbXM7XHJcbiAgICB0aGlzLnRvdGFsUmVjb3JkcyA9IHJlc3BvbnNlLnRvdGFsUmVjb3JkcztcclxuICAgIHRoaXMuY2FsY3VsYXRlUGFnZXMoKTtcclxuXHJcbiAgICBpZiAoIWtlZXBTZWxlY3RlZEl0ZW1zKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWRBbGwgPSB0aGlzLmNoZWNrZWRBbGxQYWdlSXRlbXMoKTtcclxuXHJcbiAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA+IHRoaXMudG90YWxQYWdlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHRoaXMucmVjdXJzaXZlQ291bnRlcisrO1xyXG4gICAgICBpZiAodGhpcy5yZWN1cnNpdmVDb3VudGVyIDwgMykge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoQXN5bmMobnVsbCwgdGhpcy50b3RhbFBhZ2VzLmxlbmd0aCAtIDEpLnN1YnNjcmliZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlUGFnZXMoKTogdm9pZCB7XHJcbiAgICBsZXQgcGFnZXMgPSBNYXRoLmZsb29yKHRoaXMudG90YWxSZWNvcmRzIC8gdGhpcy5wYWdlU2l6ZSk7XHJcbiAgICBpZiAocGFnZXMgPD0gMCkge1xyXG4gICAgICBwYWdlcyA9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50b3RhbFJlY29yZHMgJSB0aGlzLnBhZ2VTaXplID4gMCkge1xyXG4gICAgICBwYWdlcyArPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudG90YWxSZWNvcmRzIDwgdGhpcy5wYWdlU2l6ZSkge1xyXG4gICAgICBwYWdlcyA9IDE7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZXM7IGkrKykge1xyXG4gICAgICB0aGlzLnRvdGFsUGFnZXMucHVzaChpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXRTb3J0QXN5bmMoY3VycmVudENvbHVtbjogVGFibGVDb2x1bW4pOiB2b2lkIHtcclxuICAgIHRoaXMub3B0aW9uLm1haW5Db2x1bW5zID0gdGhpcy5vcHRpb24ubWFpbkNvbHVtbnMubWFwKGNvbHVtbiA9PiB7XHJcbiAgICAgIGlmIChjb2x1bW4uaWQgIT09IGN1cnJlbnRDb2x1bW4uaWQpIGNvbHVtbi5kaXJlY3Rpb24gPSB1bmRlZmluZWQ7XHJcbiAgICAgIHJldHVybiBjb2x1bW47XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFRhYmxlVGFibGVUZXh0cygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5vcHRpb24uZGlzcGxheVRleHQpIHtcclxuICAgICAgdGhpcy5vcHRpb24uZGlzcGxheVRleHQgPSBuZXcgVGFibGVUZXh0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLmRpc3BsYXlUZXh0KSB0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5wbGFjZWhvbGRlclNlYXJjaCA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuUGxhY2Vob2xkZXJTZWFyY2g7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24uZGlzcGxheVRleHQuYnRuU2VhcmNoKSB0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5idG5TZWFyY2ggPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkJ0blNlYXJjaDtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5idG5SZXNldCkgdGhpcy5vcHRpb24uZGlzcGxheVRleHQuYnRuUmVzZXQgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkJ0blJlc2V0O1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmFjdGlvbikgdGhpcy5vcHRpb24uZGlzcGxheVRleHQuYWN0aW9uID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5BY3Rpb247XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24uZGlzcGxheVRleHQuc2VsZWN0UGFnZVNpemUpIHRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LnNlbGVjdFBhZ2VTaXplID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5TZWxlY3RQYWdlU2l6ZTtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5kZWxldGVUaXRsZSkgdGhpcy5vcHRpb24uZGlzcGxheVRleHQuZGVsZXRlVGl0bGUgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkRlbGV0ZVRpdGxlO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmJ0bkFjY2VwdFRpdGxlKSB0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5idG5BY2NlcHRUaXRsZSA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQnRuQWNjZXB0VGl0bGU7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24uZGlzcGxheVRleHQuYnRuQ2FuY2VsVGl0bGUpIHRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmJ0bkNhbmNlbFRpdGxlID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5CdG5DYW5jZWxUaXRsZVxyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmZpbHRlclRpdGxlKSB0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5maWx0ZXJUaXRsZSA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuRmlsdGVyVGl0bGU7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24uZGlzcGxheVRleHQuYXBwbHlGaWx0ZXIpIHRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmFwcGx5RmlsdGVyID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5BcHBseUZpbHRlcjtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5kZXRhaWxUaXRsZSkgdGhpcy5vcHRpb24uZGlzcGxheVRleHQuZGV0YWlsVGl0bGUgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkRldGFpbFRpdGxlO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LnBhZ2VUaXRsZSkgdGhpcy5vcHRpb24uZGlzcGxheVRleHQucGFnZVRpdGxlID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5QYWdlVGl0bGU7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24uZGlzcGxheVRleHQuYWR2YW5jZWRTZWFyY2hUaXRsZSkgdGhpcy5vcHRpb24uZGlzcGxheVRleHQuYWR2YW5jZWRTZWFyY2hUaXRsZSA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQWR2YW5jZWRTZWFyY2hUaXRsZTtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5hZHZhbmNlZEJ0blRpdGxlKSB0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5hZHZhbmNlZEJ0blRpdGxlID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5BZHZhbmNlZEJ0blRpdGxlO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmFkdmFuY2VkQnRuQ2FuY2VsVGl0bGUpIHRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmFkdmFuY2VkQnRuQ2FuY2VsVGl0bGUgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkFkdmFuY2VkQnRuQ2FuY2VsVGl0bGU7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24uZGlzcGxheVRleHQuYWxsVGl0bGUpIHRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmFsbFRpdGxlID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5BbGxUaXRsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFRhYmxlVGFibGVNZXNzYWdlcygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5vcHRpb24ubWVzc2FnZSkge1xyXG4gICAgICB0aGlzLm9wdGlvbi5tZXNzYWdlID0gbmV3IFRhYmxlTWVzc2FnZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5tZXNzYWdlLm5vdEZvdW5kTWVzc2FnZSkgdGhpcy5vcHRpb24ubWVzc2FnZS5ub3RGb3VuZE1lc3NhZ2UgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuTm90Rm91bmRNZXNzYWdlO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLm1lc3NhZ2UuZm91bmRNZXNzYWdlKSB0aGlzLm9wdGlvbi5tZXNzYWdlLmZvdW5kTWVzc2FnZSA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5Gb3VuZE1lc3NhZ2U7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24ubWVzc2FnZS5pbnZhbGlkRm9ybWF0TWVzc2FnZSkgdGhpcy5vcHRpb24ubWVzc2FnZS5pbnZhbGlkRm9ybWF0TWVzc2FnZSA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5JbnZhbGlkRm9ybWF0TWVzc2FnZTtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5tZXNzYWdlLnNlbGVjdGVkSXRlbXNNZXNzYWdlKSB0aGlzLm9wdGlvbi5tZXNzYWdlLnNlbGVjdGVkSXRlbXNNZXNzYWdlID0gVGFibGVDb25zdGFudC5NZXNzYWdlLlNlbGVjdGVkSXRlbXNNZXNzYWdlO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLm1lc3NhZ2UuY29uZmlybVNlbGVjdEFsbFJlY29yZHNNZXNzYWdlKSB0aGlzLm9wdGlvbi5tZXNzYWdlLmNvbmZpcm1TZWxlY3RBbGxSZWNvcmRzTWVzc2FnZSA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5Db25maXJtU2VsZWN0QWxsUmVjb3Jkc01lc3NhZ2U7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24ubWVzc2FnZS5jb25maXJtQ2xlYXJBbGxSZWNvcmRzTWVzc2FnZSkgdGhpcy5vcHRpb24ubWVzc2FnZS5jb25maXJtQ2xlYXJBbGxSZWNvcmRzTWVzc2FnZSA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5Db25maXJtQ2xlYXJBbGxSZWNvcmRzTWVzc2FnZTtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5tZXNzYWdlLmRlbGV0ZU1lc3NhZ2UpIHRoaXMub3B0aW9uLm1lc3NhZ2UuZGVsZXRlTWVzc2FnZSA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5EZWxldGVNZXNzYWdlO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLm1lc3NhZ2UubG9hZGluZ01lc3NhZ2UpIHRoaXMub3B0aW9uLm1lc3NhZ2UubG9hZGluZ01lc3NhZ2UgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuTG9hZGluZ01lc3NhZ2U7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24ubWVzc2FnZS5yZWZNZXNzYWdlKSB0aGlzLm9wdGlvbi5tZXNzYWdlLnJlZk1lc3NhZ2UgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuUmVmTWVzc2FnZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdE1haW5Db2x1bW5zKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm9wdGlvbi5tYWluQ29sdW1ucykge1xyXG4gICAgICB0aGlzLm9wdGlvbi5tYWluQ29sdW1ucyA9IFtdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcHRpb24ubWFpbkNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XHJcbiAgICAgIGlmICghY29sdW1uLnRleHRBbGlnbikgY29sdW1uLnRleHRBbGlnbiA9IFRhYmxlQ29uc3RhbnQuVGV4dEFsaWduLkxlZnQ7XHJcbiAgICAgIGlmIChjb2x1bW4gJiYgIWNvbHVtbi5pZCkge1xyXG4gICAgICAgIGNvbHVtbi5pZCA9IHRoaXMuZGF0YVNlcnZpY2UubmV3R3VpZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2x1bW4uYWxsb3dGaWx0ZXIpIHtcclxuICAgICAgICBpZiAoY29sdW1uLnR5cGUgPT09IFRhYmxlQ29sdW1uVHlwZS5Ecm9wZG93bikge1xyXG4gICAgICAgICAgaWYgKCFjb2x1bW4uZHJvcGRvd25Db25maWd1cmF0aW9uKSB0aHJvdyBuZXcgRXJyb3IoJyFjb2x1bW4uZHJvcGRvd25Db25maWd1cmF0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmlsdGVyQ29sdW1ucy5wdXNoKGNvbHVtbik7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJbY29sdW1uLnZhbHVlUmVmKCldID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9wdGlvbi5tYWluQ29sdW1ucyA9IHRoaXMub3B0aW9uLm1haW5Db2x1bW5zLnNvcnQoKGE6IFRhYmxlQ29sdW1uLCBiOiBUYWJsZUNvbHVtbikgPT4gYS5vcmRlciA+IGIub3JkZXIgPyAxIDogYS5vcmRlciA9PT0gYi5vcmRlciA/IDAgOiAtMSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlckV2ZW50cygpIHtcclxuICAgIGlmICh0aGlzLmdvdG9SZWYpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyLmxpc3Rlbih0aGlzLmdvdG9SZWYubmF0aXZlRWxlbWVudCwgJ2tleWRvd24nLCAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSAkZXZlbnQud2hpY2g7XHJcbiAgICAgICAgbGV0IG1heCA9ICc5OTk5OTk5JztcclxuICAgICAgICBpZiAodGhpcy5nb3RvUmVmLm5hdGl2ZUVsZW1lbnQuYXR0cmlidXRlc1snbWF4J10pIHtcclxuICAgICAgICAgIG1heCA9IHRoaXMuZ290b1JlZi5uYXRpdmVFbGVtZW50LmF0dHJpYnV0ZXNbJ21heCddLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHZhbHVlID49IDQ4ICYmIHZhbHVlIDw9IDU3KSB8fCAodmFsdWUgPj0gOTYgJiYgdmFsdWUgPD0gMTA1KSB8fCB2YWx1ZSA9PSA4IHx8IHZhbHVlID09IDEzKSB7XHJcbiAgICAgICAgICBpZiAodmFsdWUgPj0gNDggJiYgdmFsdWUgPD0gNTcpIHtcclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KG1heCkgPCBwYXJzZUludCgkZXZlbnQudGFyZ2V0LnZhbHVlICsgKHBhcnNlSW50KHZhbHVlKSAtIDQ4KSkpIHtcclxuICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlID0gbWF4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID49IDk2ICYmIHZhbHVlIDw9IDEwNSkge1xyXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQobWF4KSA8IHBhcnNlSW50KCRldmVudC50YXJnZXQudmFsdWUgKyAocGFyc2VJbnQodmFsdWUpIC0gOTYpKSkge1xyXG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWUgPSBtYXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=