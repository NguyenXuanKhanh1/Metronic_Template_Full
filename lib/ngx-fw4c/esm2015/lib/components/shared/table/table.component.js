/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, ContentChild, RendererFactory2 } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TableOption, TableMode, TableConstant, TableText, TableMessage, TableColumnType } from './table.model';
import { TableRowDetailDirective } from './table-row-detail.directive';
import { of, BehaviorSubject, Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { delay } from "rxjs/operators";
export class TableComponent {
    /**
     * @param {?} thisElement
     * @param {?} rendererFactory
     * @param {?} dataService
     */
    constructor(thisElement, rendererFactory, dataService) {
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
        this.textSearched = ``;
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
    ngOnInit() {
        this.init();
        /** @type {?} */
        const changePageSubscription = this.changePage$.pipe(distinctUntilChanged()).subscribe((/**
         * @param {?} pageIndex
         * @return {?}
         */
        pageIndex => {
            if (pageIndex < 0 || pageIndex >= this.totalPages.length)
                return;
            this.currentPage = pageIndex;
            if (!this.option.request) {
                this.option.request = {};
            }
            this.option.request.pageIndex = this.currentPage;
            this.searchAsync(null, null, true).subscribe();
        }));
        this.subscriptions.add(changePageSubscription);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.registerEvents();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    /**
     * @return {?}
     */
    init() {
        if (this.option.selectedItems && this.option.selectedItems.length > 0) {
            if (!this.selectedItems)
                this.selectedItems = [];
            this.option.selectedItems.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                this.selectedItems.push(item);
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
            (action) => {
                if (!action.type)
                    action.type = TableConstant.ActionType.Inline;
            }));
        }
        this.toolbarActions = this.option.actions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => [TableConstant.ActionType.Both, TableConstant.ActionType.Toolbar].indexOf(x.type) >= 0));
        this.inlineActions = this.option.actions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => [TableConstant.ActionType.Both, TableConstant.ActionType.Inline].indexOf(x.type) >= 0));
        /** @type {?} */
        const inFullMode = this.option.mode === TableMode.full;
        this.filterColumns = this.option.mainColumns.filter((/**
         * @param {?} column
         * @return {?}
         */
        column => column.allowFilter))
            .sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a.order > b.order ? 1 : a.order === b.order ? 0 : -1));
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
        const hasToolbarActions = this.option.actions && this.option.actions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => [TableConstant.ActionType.Toolbar, TableConstant.ActionType.Both].indexOf(x.type) >= 0)).length > 0;
        /** @type {?} */
        const hasTopButtons = this.option.topButtons && this.option.topButtons.length > 0;
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
    }
    /**
     * @return {?}
     */
    callback() {
        return of(this.selectedItems);
    }
    /**
     * @param {?} item
     * @param {?=} refresh
     * @param {?=} execute
     * @param {?=} callback
     * @return {?}
     */
    copy(item, refresh = true, execute, callback) {
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
    }
    /**
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    acceptInlineEdit(field, index) {
        this.closeInlineEdit(field, index);
    }
    /**
     * @param {?} item
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    cancelInlineEdit(item, field, index) {
        /** @type {?} */
        var currentItem = this.retrieveInlineEdit(field, index);
        if (!currentItem)
            return;
        item[field] = currentItem.item[field];
        this.closeInlineEdit(field, index);
    }
    /**
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    closeInlineEdit(field, index) {
        /** @type {?} */
        var itemIndex = this.edittedFields.findIndex((/**
         * @param {?} s
         * @return {?}
         */
        s => s.field == field && s.index == index));
        if (itemIndex > -1)
            this.edittedFields.splice(itemIndex, 1);
    }
    /**
     * @param {?} item
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    editInline(item, field, index) {
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
    }
    /**
     * @param {?} item
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    hasInlineEdit(item, field, index) {
        if (!this.option || this.option.inlineEdit != true)
            return false;
        if (!item || !this.edittedFields || this.edittedFields.length == 0)
            return false;
        return ((/** @type {?} */ (this.edittedFields))).findIndex((/**
         * @param {?} s
         * @return {?}
         */
        s => s.field == field && s.index == index)) > -1;
    }
    /**
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    retrieveInlineEdit(field, index) {
        if (!this.edittedFields || this.edittedFields.length == 0)
            return null;
        return ((/** @type {?} */ (this.edittedFields))).find((/**
         * @param {?} s
         * @return {?}
         */
        s => s.field == field && s.index == index));
    }
    /**
     * @return {?}
     */
    resetFilters() {
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
    }
    /**
     * @param {?} standard
     * @return {?}
     */
    getToolbarActions(standard) {
        /** @type {?} */
        let actions = [];
        if (this.toolbarActions) {
            this.toolbarActions.forEach((/**
             * @param {?} action
             * @param {?} index
             * @return {?}
             */
            (action, index) => {
                if (!standard) {
                    if (index >= this.option.totalToolbarItem) {
                        actions.push(action);
                    }
                }
                else {
                    if (index < this.option.totalToolbarItem) {
                        actions.push(action);
                    }
                }
            }));
        }
        return actions;
    }
    /**
     * @return {?}
     */
    changePageSize() {
        this.option.request.pageSize = this.pageSize;
        this.option.request.pageIndex = 0;
        this.searchAsync().subscribe();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handkeKeypress($event) {
        if ($event && $event.which == 13) {
            this.searchAsync().subscribe();
        }
    }
    /**
     * @param {?} $event
     * @param {?=} blur
     * @return {?}
     */
    goto($event, blur) {
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
    }
    /**
     * @return {?}
     */
    toggleFilterSection() {
        this.filterSectionToggle = !this.filterSectionToggle;
    }
    /**
     * @param {?} column
     * @param {?} direction
     * @return {?}
     */
    showSorter(column, direction) {
        return column.direction === direction;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    toggleRowDetail(item) {
        item.toggle = !item.toggle;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    sortAsync(column) {
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
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    selectAll(selected) {
        this.selectedItems = selected ? [...this.items] : [];
    }
    /**
     * @return {?}
     */
    clearAll() {
        this.selectedItems = [];
        this.selectedAll = false;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectItem(item) {
        /** @type {?} */
        const selectedIds = this.selectedItems.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id));
        /** @type {?} */
        const existingItemIndex = selectedIds.indexOf(item.id);
        if (existingItemIndex >= 0) {
            this.selectedItems.splice(existingItemIndex, 1);
        }
        else {
            this.selectedItems.push(item);
        }
        if (!this.option.multiple) {
            /** @type {?} */
            const currentItem = this.selectedItems.find((/**
             * @param {?} s
             * @return {?}
             */
            s => s.id == item.id));
            if (currentItem) {
                this.selectedItems = [currentItem];
            }
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    isRowSelected(item) {
        /** @type {?} */
        const selectedIds = this.selectedItems.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id));
        return selectedIds.indexOf(item.id) >= 0;
    }
    /**
     * @param {?=} item
     * @return {?}
     */
    hasAnyAction(item) {
        /** @type {?} */
        const aliveActions = this.inlineActions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !x.hide || !x.hide(item)));
        return aliveActions.length > 0;
    }
    /**
     * @param {?} action
     * @param {?=} item
     * @param {?=} $event
     * @param {?=} index
     * @param {?=} loadedCallback
     * @return {?}
     */
    executeActionAsync(action, item, $event, index, loadedCallback) {
        if (action) {
            /** @type {?} */
            const target = $event ? $event.target : null;
            action.executeAsync(item, target, this, index, loadedCallback);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    isActive(item) {
        if (this.selectedItems.length === 0)
            return false;
        /** @type {?} */
        const currentItem = this.selectedItems.find((/**
         * @param {?} s
         * @return {?}
         */
        s => s.id === item.id));
        return currentItem && currentItem.checkedRow;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getCurrentIndex(index) {
        if (this.option.request) {
            return this.option.request.pageIndex * this.option.request.pageSize + index + 1;
        }
        return -1;
    }
    /**
     * @param {?} column
     * @param {?} item
     * @return {?}
     */
    getDropdownDisplayText(column, item) {
        /** @type {?} */
        const values = item[column.valueRef()];
        if (!values)
            return '';
        if (values instanceof Array) {
            /** @type {?} */
            const result = (/** @type {?} */ (values.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x)).map((/**
             * @param {?} x
             * @return {?}
             */
            x => x[column.dropdownConfiguration.bindLabel]))));
            return result.join(', ');
        }
        return values[column.dropdownConfiguration.bindLabel];
    }
    /**
     * @param {?} n
     * @return {?}
     */
    getPages(n) {
        /** @type {?} */
        let pages = [];
        if (this.totalPages.length < n) {
            for (let i = this.totalPages.length - 1; i >= 0; i--) {
                pages.push(i);
            }
            return pages;
        }
        if (this.currentPage < n) {
            for (let i = n - 1; i >= 0; i--) {
                pages.push(i);
            }
        }
        else {
            /** @type {?} */
            const count = Math.floor(n / 2);
            /** @type {?} */
            const max = this.currentPage + count >= this.totalPages.length ? this.totalPages.length - 1 : this.currentPage + count;
            for (let i = max; i >= this.currentPage - count; i--) {
                pages.push(i);
            }
        }
        return pages;
    }
    /**
     * @param {?=} keepSelectedItems
     * @return {?}
     */
    reload(keepSelectedItems = false) {
        return this.searchAsync(null, null, keepSelectedItems);
    }
    /**
     * @param {?=} advancedFilter
     * @return {?}
     */
    search(advancedFilter) {
        this.searchAsync(advancedFilter).subscribe();
    }
    /**
     * @param {?} record
     * @return {?}
     */
    trackRecords(record) {
        return record ? record.id : undefined;
    }
    /**
     * @param {?=} advancedFilter
     * @param {?=} currentPage
     * @param {?=} keepSelectedItems
     * @return {?}
     */
    searchAsync(advancedFilter, currentPage, keepSelectedItems = true) {
        this.loading = true;
        /** @type {?} */
        const request = this.buildRequest(currentPage, advancedFilter);
        if (this.option.localData) {
            this.localData = this.option.localData();
            this.searchLocalItems(request).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                this.bindResultData(response, keepSelectedItems);
            }));
        }
        else {
            if (!this.option.serviceProvider || !this.option.serviceProvider.searchAsync)
                throw new Error('!this.option.serviceProvider.searchAsync');
            this.option.serviceProvider.searchAsync(request).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                this.bindResultData(response, keepSelectedItems);
            }));
        }
        return of(true);
    }
    /**
     * @private
     * @return {?}
     */
    checkedAllPageItems() {
        if (!this.selectedItems || !this.items || this.items.length == 0) {
            return false;
        }
        /** @type {?} */
        let check = true;
        this.items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            /** @type {?} */
            const currentItem = this.selectedItems.find((/**
             * @param {?} s
             * @return {?}
             */
            s => s.id === item.id));
            if (!currentItem) {
                check = false;
                return check;
            }
        }));
        return check;
    }
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    setDefaultOrder(request) {
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
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setFilter(key, value) {
        this.request[key] = value;
        this.currentPage = 0;
        this.filter[key] = value;
        if (this.option && this.option.request)
            this.option.request.pageIndex = 0;
    }
    /**
     * @private
     * @param {?} advancedFilter
     * @param {?} request
     * @return {?}
     */
    retrieveAdvancedFilters(advancedFilter, request) {
        this.filterColumns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            /** @type {?} */
            let value = this.filter[column.valueRef()];
            if (value == undefined || value == 'undefined') {
                value = '';
            }
            if (advancedFilter == true) {
                if (column.type && (column.type.toLowerCase() == 'date' || column.type.toLowerCase() == 'datetime' || column.type.toLowerCase() == 'time')) {
                    if (value && value != '') {
                        /** @type {?} */
                        const datetimeValues = (/** @type {?} */ (value));
                        if (datetimeValues.length == 1) {
                            request[column.valueRef() + 'From'] = this.convertDatetime(datetimeValues[0], 'From');
                        }
                        else if (datetimeValues.length == 2) {
                            request[column.valueRef() + 'From'] = this.convertDatetime(datetimeValues[0], 'From');
                            request[column.valueRef() + 'To'] = this.convertDatetime(datetimeValues[1], 'To');
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
    }
    /**
     * @private
     * @param {?=} currentPage
     * @param {?=} advancedFilter
     * @return {?}
     */
    buildRequest(currentPage, advancedFilter) {
        this.previousRequest = Object.assign({}, this.request);
        /** @type {?} */
        let searchText = this.filter.searchText;
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
        const changes = this.dataService.compareObjects(this.previousRequest, this.request);
        /** @type {?} */
        const isChanged = changes.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => ['pageIndex', 'pageSize'].indexOf(x.propertyName) < 0)).length > 0;
        if (isChanged) {
            this.option.request.pageIndex = 0;
            this.request.pageIndex = 0;
            this.currentPage = 0;
        }
        return this.request;
    }
    /**
     * @private
     * @param {?} dt
     * @param {?} type
     * @return {?}
     */
    convertDatetime(dt, type) {
        if (!dt)
            return '';
        /** @type {?} */
        let convertedDatetime = new Date(dt);
        /** @type {?} */
        let days = convertedDatetime.getDate().toString();
        if (days.length < 2)
            days = '0' + days;
        /** @type {?} */
        let months = (convertedDatetime.getMonth() + 1).toString();
        if (months.length < 2)
            months = '0' + months;
        /** @type {?} */
        let hours = convertedDatetime.getHours().toString();
        if (hours.length < 2)
            hours = '0' + hours;
        /** @type {?} */
        let minutes = convertedDatetime.getMinutes().toString();
        if (minutes.length < 2)
            minutes = '0' + minutes;
        /** @type {?} */
        const year = convertedDatetime.getFullYear();
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
    }
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    searchLocalItems(request) {
        /** @type {?} */
        let result = this.localData;
        /** @type {?} */
        const orderBy = this.dataService.getField(request.orderBy, true);
        if (request.direction == TableConstant.Direction.ASC) {
            if (!this.option.sort) {
                result = result.sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                (a, b) => a[orderBy] > b[orderBy] ? 1 : a[orderBy] === b[orderBy] ? 0 : -1));
            }
            else {
                result = result.sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                (a, b) => this.option.sort(a, b, orderBy)));
            }
        }
        else {
            if (!this.option.sort) {
                result = result.sort((/**
                 * @param {?} b
                 * @param {?} a
                 * @return {?}
                 */
                (b, a) => a[orderBy] > b[orderBy] ? 1 : a[orderBy] === b[orderBy] ? 0 : -1));
            }
            else {
                result = result.sort((/**
                 * @param {?} b
                 * @param {?} a
                 * @return {?}
                 */
                (b, a) => this.option.sort(a, b, orderBy)));
            }
        }
        /** @type {?} */
        let items = [];
        if (request.pageIndex >= 0 && request.pageSize > 0) {
            /** @type {?} */
            const localResult = [];
            if (request.searchText && this.option.searchFields && this.option.searchFields.length > 0) {
                this.option.searchFields.forEach((/**
                 * @param {?} field
                 * @return {?}
                 */
                field => {
                    /** @type {?} */
                    const response = result.filter((/**
                     * @param {?} s
                     * @return {?}
                     */
                    s => this.fuzzysearch(request.searchText, s[field])));
                    if (response) {
                        response.forEach((/**
                         * @param {?} item
                         * @return {?}
                         */
                        (item) => {
                            if (localResult.findIndex((/**
                             * @param {?} s
                             * @return {?}
                             */
                            s => s.id == item.id)) == -1) {
                                localResult.push(item);
                            }
                        }));
                    }
                }));
                result = localResult;
            }
            /** @type {?} */
            var filter = {};
            this.retrieveAdvancedFilters(true, filter);
            if (this.filterColumns) {
                this.filterColumns.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                (column) => {
                    /** @type {?} */
                    var value = filter[column.valueRef()];
                    if (value) {
                        result = result.filter((/**
                         * @param {?} s
                         * @return {?}
                         */
                        s => this.fuzzysearch(value, s[column.valueRef()])));
                    }
                }));
            }
            items = result.filter((/**
             * @param {?} s
             * @return {?}
             */
            s => (result.indexOf(s) >= request.pageIndex * request.pageSize) && (result.indexOf(s) < (request.pageIndex + 1) * request.pageSize)));
        }
        /** @type {?} */
        const response = {
            items: items,
            totalRecords: result.length
        };
        return of(response).pipe(delay(250));
    }
    /**
     * @private
     * @param {?} c
     * @return {?}
     */
    convertUCode(c) {
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
    }
    /**
     * @private
     * @param {?} needle
     * @param {?} haystack
     * @return {?}
     */
    fuzzysearch(needle, haystack) {
        if (!needle || !haystack)
            return false;
        /** @type {?} */
        const haystackLC = this.removeAllSpaces(haystack.toString().toLowerCase());
        /** @type {?} */
        const needleLC = this.removeAllSpaces(needle.toString().toLowerCase());
        /** @type {?} */
        const hlen = haystack.toString().length;
        /** @type {?} */
        const nlen = needleLC.toString().length;
        if (nlen > hlen) {
            return false;
        }
        if (nlen === hlen) {
            return needleLC === haystackLC;
        }
        outer: for (let i = 0, j = 0; i < nlen; i++) {
            /** @type {?} */
            const nch = this.convertUCode(needleLC[i]);
            while (j < hlen) {
                if (this.convertUCode(haystackLC[j++]) === nch) {
                    continue outer;
                }
            }
            return false;
        }
        return true;
    }
    /**
     * @private
     * @param {?=} str
     * @return {?}
     */
    removeAllSpaces(str) {
        if (!str)
            return '';
        return str.replace(/\s/g, '');
    }
    /**
     * @private
     * @param {?} response
     * @param {?=} keepSelectedItems
     * @return {?}
     */
    bindResultData(response, keepSelectedItems = true) {
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
    }
    /**
     * @private
     * @return {?}
     */
    calculatePages() {
        /** @type {?} */
        let pages = Math.floor(this.totalRecords / this.pageSize);
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
        for (let i = 0; i < pages; i++) {
            this.totalPages.push(i);
        }
    }
    /**
     * @private
     * @param {?} currentColumn
     * @return {?}
     */
    resetSortAsync(currentColumn) {
        this.option.mainColumns = this.option.mainColumns.map((/**
         * @param {?} column
         * @return {?}
         */
        column => {
            if (column.id !== currentColumn.id)
                column.direction = undefined;
            return column;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    initTableTableTexts() {
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
    }
    /**
     * @private
     * @return {?}
     */
    initTableTableMessages() {
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
    }
    /**
     * @private
     * @return {?}
     */
    initMainColumns() {
        if (!this.option.mainColumns) {
            this.option.mainColumns = [];
        }
        this.option.mainColumns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            if (!column.textAlign)
                column.textAlign = TableConstant.TextAlign.Left;
            if (column && !column.id) {
                column.id = this.dataService.newGuid();
            }
            if (column.allowFilter) {
                if (column.type === TableColumnType.Dropdown) {
                    if (!column.dropdownConfiguration)
                        throw new Error('!column.dropdownConfiguration');
                }
                this.filterColumns.push(column);
                this.filter[column.valueRef()] = null;
            }
        }));
        this.option.mainColumns = this.option.mainColumns.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a.order > b.order ? 1 : a.order === b.order ? 0 : -1));
    }
    /**
     * @private
     * @return {?}
     */
    registerEvents() {
        if (this.gotoRef) {
            this._render.listen(this.gotoRef.nativeElement, 'keydown', (/**
             * @param {?} $event
             * @return {?}
             */
            ($event) => {
                /** @type {?} */
                const value = $event.which;
                /** @type {?} */
                let max = '9999999';
                if (this.gotoRef.nativeElement.attributes['max']) {
                    max = this.gotoRef.nativeElement.attributes['max'].value;
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
    }
}
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
TableComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: RendererFactory2 },
    { type: DataService }
];
TableComponent.propDecorators = {
    validationName: [{ type: Input }],
    validationScope: [{ type: Input }],
    option: [{ type: Input }],
    searchRef: [{ type: ViewChild, args: ['searchRef', { static: true },] }],
    gotoRef: [{ type: ViewChild, args: ['gotoRef', { static: true },] }],
    tableRef: [{ type: ViewChild, args: ['tableRef', { static: true },] }],
    rowDetailTemplate: [{ type: ContentChild, args: [TableRowDetailDirective, { static: true },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBYSxnQkFBZ0IsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDckosT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsV0FBVyxFQUE0QixTQUFTLEVBQUUsYUFBYSxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDdkssT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFjLEVBQUUsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFtQ3ZDLE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUF5Q3pCLFlBQ1UsV0FBdUIsRUFDckIsZUFBaUMsRUFDakMsV0FBd0I7UUFGMUIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDckIsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ2pDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBcEM3QixVQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ2xCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FB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Q2pDLG1DQUFrQzs7Ozs7SUFDbEMseUNBQW9DOzs7OztJQUNwQyxtQ0FBMEI7Ozs7O0lBQzFCLGlDQUEyQjs7SUFDM0IsMENBQWlDOztJQUNqQywyQ0FBa0M7O0lBQ2xDLDBDQUFpQzs7SUFDakMsMkNBQWtDOztJQUNsQyw0Q0FBbUM7O0lBQ25DLHFDQUFxRTs7Ozs7SUFDckUsaUNBQTBCOzs7OztJQUMxQix5Q0FBa0M7Ozs7O0lBQ2xDLDBDQUFxQzs7Ozs7SUFDckMsdUNBQXlEOzs7OztJQUN6RCx1Q0FBNkM7Ozs7O0lBRzNDLHFDQUErQjs7Ozs7SUFDL0IseUNBQTJDOzs7OztJQUMzQyxxQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ29udGVudENoaWxkLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgVGFibGVPcHRpb24sIFRhYmxlQ29sdW1uLCBUYWJsZUFjdGlvbiwgVGFibGVNb2RlLCBUYWJsZUNvbnN0YW50LCBUYWJsZVJlc3BvbnNlLCBUYWJsZVRleHQsIFRhYmxlTWVzc2FnZSwgVGFibGVDb2x1bW5UeXBlLCBFZGl0dGVkRmllbGQgfSBmcm9tICcuL3RhYmxlLm1vZGVsJztcclxuaW1wb3J0IHsgVGFibGVSb3dEZXRhaWxEaXJlY3RpdmUgfSBmcm9tICcuL3RhYmxlLXJvdy1kZXRhaWwuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2MtdGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LnNjc3MnXSxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCdjQW5pbWF0aW9uJywgW1xyXG4gICAgICBzdGF0ZSgndm9pZCcsIHN0eWxlKHt9KSksXHJcbiAgICAgIHN0YXRlKCcqJywgc3R5bGUoe30pKSxcclxuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xyXG4gICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMzBweCknLCBvcGFjaXR5OiAwIH0pLFxyXG4gICAgICAgIGFuaW1hdGUoJzMwMG1zIGVhc2UtaW4tb3V0Jywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJywgb3BhY2l0eTogMSB9KSlcclxuICAgICAgXSksXHJcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcclxuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknLCBvcGFjaXR5OiAxIH0pLFxyXG4gICAgICAgIGFuaW1hdGUoJzMwMG1zIGVhc2UtaW4tb3V0Jywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0zMHB4KScsIG9wYWNpdHk6IDAgfSkpXHJcbiAgICAgIF0pXHJcbiAgICBdKSxcclxuICAgIHRyaWdnZXIoJ2NBbmltYXRpb25GYWRlUmlnaHQnLCBbXHJcbiAgICAgIHN0YXRlKCd2b2lkJywgc3R5bGUoe30pKSxcclxuICAgICAgc3RhdGUoJyonLCBzdHlsZSh7fSkpLFxyXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXHJcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDMwcHgpJywgb3BhY2l0eTogMCB9KSxcclxuICAgICAgICBhbmltYXRlKCczMDBtcyBlYXNlLWluLW91dCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsIG9wYWNpdHk6IDEgfSkpXHJcbiAgICAgIF0pLFxyXG4gICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXHJcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb3BhY2l0eTogMSB9KSxcclxuICAgICAgICBhbmltYXRlKCczMDBtcyBlYXNlLWluLW91dCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgzMHB4KScsIG9wYWNpdHk6IDAgfSkpXHJcbiAgICAgIF0pXHJcbiAgICBdKVxyXG4gIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSB2YWxpZGF0aW9uTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHZhbGlkYXRpb25TY29wZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBvcHRpb246IFRhYmxlT3B0aW9uO1xyXG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaFJlZicsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBzZWFyY2hSZWY6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZ290b1JlZicsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBnb3RvUmVmOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3RhYmxlUmVmJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIHRhYmxlUmVmOiBFbGVtZW50UmVmO1xyXG4gIEBDb250ZW50Q2hpbGQoVGFibGVSb3dEZXRhaWxEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyByb3dEZXRhaWxUZW1wbGF0ZTogVGFibGVSb3dEZXRhaWxEaXJlY3RpdmU7XHJcbiAgcHVibGljIGl0ZW1zOiBhbnlbXSA9IFtdO1xyXG4gIHB1YmxpYyB0b3RhbFJlY29yZHM6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgcHVibGljIHNlbGVjdGVkSXRlbXM6IGFueVtdID0gW107XHJcbiAgcHVibGljIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgcHVibGljIG9yZGVyQnk6IHN0cmluZztcclxuICBwdWJsaWMgZGlyZWN0aW9uOiBzdHJpbmc7XHJcbiAgcHVibGljIHRvdGFsUGFnZXM6IG51bWJlcltdID0gW107XHJcbiAgcHVibGljIGN1cnJlbnRQYWdlOiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBmaWx0ZXI6IGFueSA9IHt9O1xyXG4gIHB1YmxpYyBtYXhQYWdlOiBudW1iZXIgPSA1O1xyXG4gIHB1YmxpYyBzZWxlY3RlZEFsbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBmaWx0ZXJDb2x1bW5zOiBUYWJsZUNvbHVtbltdID0gW107XHJcbiAgcHVibGljIHRvb2xiYXJBY3Rpb25zOiBUYWJsZUFjdGlvbltdID0gW107XHJcbiAgcHVibGljIGlubGluZUFjdGlvbnM6IFRhYmxlQWN0aW9uW10gPSBbXTtcclxuICBwdWJsaWMgZmlsdGVyU2VjdGlvblRvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyB0ZXh0U2VhcmNoZWQ6IHN0cmluZyA9IGBgO1xyXG4gIHB1YmxpYyBzaG93UmVzZXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIGRlZmF1bHRQYWdlU2l6ZTogbnVtYmVyID0gNTtcclxuICBwcml2YXRlIGxvY2FsRGF0YT86IGFueVtdO1xyXG4gIHByaXZhdGUgX3JlbmRlcjogUmVuZGVyZXIyO1xyXG4gIHB1YmxpYyBoYXNGaWx0ZXJTZWN0aW9uOiBib29sZWFuO1xyXG4gIHB1YmxpYyBoYXNUb29sYmFyU2VjdGlvbjogYm9vbGVhbjtcclxuICBwdWJsaWMgaGFzRm9vdGVyU2VjdGlvbjogYm9vbGVhbjtcclxuICBwdWJsaWMgaGFzRGV0YWlsVGVtcGxhdGU6IGJvb2xlYW47XHJcbiAgcHVibGljIGhhc1BhZ2VTaXplQ2hvb3NlcjogYm9vbGVhbjtcclxuICBwdWJsaWMgY2hhbmdlUGFnZSQ6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgwKTtcclxuICBwcml2YXRlIHJlcXVlc3Q6IGFueSA9IHt9O1xyXG4gIHByaXZhdGUgcHJldmlvdXNSZXF1ZXN0OiBhbnkgPSB7fTtcclxuICBwcml2YXRlIHJlY3Vyc2l2ZUNvdW50ZXI6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcbiAgcHJvdGVjdGVkIGVkaXR0ZWRGaWVsZHM6IEVkaXR0ZWRGaWVsZFtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB0aGlzRWxlbWVudDogRWxlbWVudFJlZixcclxuICAgIHByb3RlY3RlZCByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXHJcbiAgICBwcm90ZWN0ZWQgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9yZW5kZXIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgY29uc3QgY2hhbmdlUGFnZVN1YnNjcmlwdGlvbiA9IHRoaXMuY2hhbmdlUGFnZSQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKS5zdWJzY3JpYmUocGFnZUluZGV4ID0+IHtcclxuICAgICAgaWYgKHBhZ2VJbmRleCA8IDAgfHwgcGFnZUluZGV4ID49IHRoaXMudG90YWxQYWdlcy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2VJbmRleDtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5yZXF1ZXN0KSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb24ucmVxdWVzdCA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub3B0aW9uLnJlcXVlc3QucGFnZUluZGV4ID0gdGhpcy5jdXJyZW50UGFnZTtcclxuICAgICAgdGhpcy5zZWFyY2hBc3luYyhudWxsLCBudWxsLCB0cnVlKS5zdWJzY3JpYmUoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChjaGFuZ2VQYWdlU3Vic2NyaXB0aW9uKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbi5zZWxlY3RlZEl0ZW1zICYmIHRoaXMub3B0aW9uLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRJdGVtcykgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XHJcbiAgICAgIHRoaXMub3B0aW9uLnNlbGVjdGVkSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMub3B0aW9uLm1vZGUpIHRoaXMub3B0aW9uLm1vZGUgPSBUYWJsZU1vZGUuZnVsbDtcclxuICAgIGlmICghdGhpcy5vcHRpb24uYWN0aW9ucykgdGhpcy5vcHRpb24uYWN0aW9ucyA9IFtdO1xyXG4gICAgaWYgKCF0aGlzLm9wdGlvbi5rZXkpIHRoaXMub3B0aW9uLmtleSA9IFRhYmxlQ29uc3RhbnQuS2V5O1xyXG4gICAgaWYgKCF0aGlzLm9wdGlvbi50b3RhbFRvb2xiYXJJdGVtKSB0aGlzLm9wdGlvbi50b3RhbFRvb2xiYXJJdGVtID0gNTtcclxuICAgIGlmICh0aGlzLm9wdGlvbi5tYXhQYWdlKSB0aGlzLm1heFBhZ2UgPSB0aGlzLm9wdGlvbi5tYXhQYWdlO1xyXG4gICAgaWYgKCF0aGlzLm9wdGlvbi5kZWZhdWx0T3JkZXJCeSkgdGhpcy5vcHRpb24uZGVmYXVsdE9yZGVyQnkgPSAnQ3JlYXRlZERhdGUnO1xyXG4gICAgaWYgKCF0aGlzLm9wdGlvbi5kZWZhdXRPcmRlckRpcmVjdGlvbikgdGhpcy5vcHRpb24uZGVmYXV0T3JkZXJEaXJlY3Rpb24gPSBUYWJsZUNvbnN0YW50LkRpcmVjdGlvbi5ERVNDO1xyXG4gICAgaWYgKCF0aGlzLm9wdGlvbi5jb21wb25lbnRDbGFzcykge1xyXG4gICAgICB0aGlzLm9wdGlvbi5jb21wb25lbnRDbGFzcyA9IFRhYmxlQ29uc3RhbnQuQ29tcG9uZW50Q2xhc3M7XHJcbiAgICAgIHRoaXMudGhpc0VsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9uLmNvbXBvbmVudENsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb24ubWF4TGVuZ2h0ZXh0ID09PSB1bmRlZmluZWQgfHwgdGhpcy5vcHRpb24ubWF4TGVuZ2h0ZXh0ID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMub3B0aW9uLm1heExlbmdodGV4dCA9IDE1MDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluaXRUYWJsZVRhYmxlVGV4dHMoKTtcclxuICAgIHRoaXMuaW5pdFRhYmxlVGFibGVNZXNzYWdlcygpO1xyXG4gICAgdGhpcy5pbml0TWFpbkNvbHVtbnMoKTtcclxuICAgIGlmICh0aGlzLm9wdGlvbi5hY3Rpb25zKSB7XHJcbiAgICAgIHRoaXMub3B0aW9uLmFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKCFhY3Rpb24udHlwZSkgYWN0aW9uLnR5cGUgPSBUYWJsZUNvbnN0YW50LkFjdGlvblR5cGUuSW5saW5lO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMudG9vbGJhckFjdGlvbnMgPSB0aGlzLm9wdGlvbi5hY3Rpb25zLmZpbHRlcih4ID0+IFtUYWJsZUNvbnN0YW50LkFjdGlvblR5cGUuQm90aCwgVGFibGVDb25zdGFudC5BY3Rpb25UeXBlLlRvb2xiYXJdLmluZGV4T2YoeC50eXBlKSA+PSAwKTtcclxuICAgIHRoaXMuaW5saW5lQWN0aW9ucyA9IHRoaXMub3B0aW9uLmFjdGlvbnMuZmlsdGVyKHggPT4gW1RhYmxlQ29uc3RhbnQuQWN0aW9uVHlwZS5Cb3RoLCBUYWJsZUNvbnN0YW50LkFjdGlvblR5cGUuSW5saW5lXS5pbmRleE9mKHgudHlwZSkgPj0gMCk7XHJcblxyXG4gICAgY29uc3QgaW5GdWxsTW9kZSA9IHRoaXMub3B0aW9uLm1vZGUgPT09IFRhYmxlTW9kZS5mdWxsO1xyXG4gICAgdGhpcy5maWx0ZXJDb2x1bW5zID0gdGhpcy5vcHRpb24ubWFpbkNvbHVtbnMuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4uYWxsb3dGaWx0ZXIpXHJcbiAgICAgIC5zb3J0KChhOiBUYWJsZUNvbHVtbiwgYjogVGFibGVDb2x1bW4pID0+IGEub3JkZXIgPiBiLm9yZGVyID8gMSA6IGEub3JkZXIgPT09IGIub3JkZXIgPyAwIDogLTEpO1xyXG4gICAgdGhpcy5oYXNGaWx0ZXJTZWN0aW9uID0gaW5GdWxsTW9kZTtcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb24ucGFnaW5nID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5vcHRpb24ucGFnaW5nID0gaW5GdWxsTW9kZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW5GdWxsTW9kZSkge1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLnBhZ2VTaXplcykgdGhpcy5vcHRpb24ucGFnZVNpemVzID0gVGFibGVDb25zdGFudC5QYWdlU2l6ZXM7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24uZGVmYXVsdFBhZ2VTaXplKSB0aGlzLm9wdGlvbi5kZWZhdWx0UGFnZVNpemUgPSBUYWJsZUNvbnN0YW50LlBhZ2VTaXplc1swXTtcclxuICAgICAgaWYgKHRoaXMub3B0aW9uLmRlZmF1bHRQYWdlU2l6ZSkgdGhpcy5kZWZhdWx0UGFnZVNpemUgPSB0aGlzLm9wdGlvbi5kZWZhdWx0UGFnZVNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFzVG9vbGJhckFjdGlvbnMgPSB0aGlzLm9wdGlvbi5hY3Rpb25zICYmIHRoaXMub3B0aW9uLmFjdGlvbnMuZmlsdGVyKHggPT4gW1RhYmxlQ29uc3RhbnQuQWN0aW9uVHlwZS5Ub29sYmFyLCBUYWJsZUNvbnN0YW50LkFjdGlvblR5cGUuQm90aF0uaW5kZXhPZih4LnR5cGUpID49IDApLmxlbmd0aCA+IDA7XHJcbiAgICBjb25zdCBoYXNUb3BCdXR0b25zID0gdGhpcy5vcHRpb24udG9wQnV0dG9ucyAmJiB0aGlzLm9wdGlvbi50b3BCdXR0b25zLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgdGhpcy5oYXNUb29sYmFyU2VjdGlvbiA9IGluRnVsbE1vZGUgfHwgaGFzVG9vbGJhckFjdGlvbnMgfHwgaGFzVG9wQnV0dG9ucztcclxuICAgIHRoaXMuaGFzRm9vdGVyU2VjdGlvbiA9IGluRnVsbE1vZGUgfHwgdGhpcy5vcHRpb24ucGFnaW5nO1xyXG4gICAgdGhpcy5oYXNQYWdlU2l6ZUNob29zZXIgPSB0aGlzLm9wdGlvbi5wYWdpbmc7XHJcbiAgICBpZiAodGhpcy5vcHRpb24uaGlkZUNoZWNrYm94Q29sdW1uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5vcHRpb24uaGlkZUNoZWNrYm94Q29sdW1uID0gIWhhc1Rvb2xiYXJBY3Rpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5vcHRpb24ucmVxdWVzdCkge1xyXG4gICAgICB0aGlzLm9wdGlvbi5yZXF1ZXN0ID0ge1xyXG4gICAgICAgIHBhZ2VJbmRleDogMCxcclxuICAgICAgICBwYWdlU2l6ZTogdGhpcy5kZWZhdWx0UGFnZVNpemVcclxuICAgICAgfTtcclxuICAgICAgaWYgKHRoaXMub3B0aW9uLmRlZmF1bHRQYWdlU2l6ZSkge1xyXG4gICAgICAgIHRoaXMub3B0aW9uLnJlcXVlc3QucGFnZVNpemUgPSB0aGlzLm9wdGlvbi5kZWZhdWx0UGFnZVNpemU7XHJcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHRoaXMub3B0aW9uLnJlcXVlc3QucGFnZVNpemU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWFyY2hBc3luYygpLnN1YnNjcmliZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5yZXF1ZXN0LnBhZ2VTaXplKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHRoaXMub3B0aW9uLnJlcXVlc3QucGFnZVNpemU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHRoaXMuZGVmYXVsdFBhZ2VTaXplO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2VhcmNoQXN5bmMoKS5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYWxsYmFjaygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIG9mKHRoaXMuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29weShpdGVtOiBhbnksIHJlZnJlc2g6IGJvb2xlYW4gPSB0cnVlLCBleGVjdXRlPzogKGl0ZW06IGFueSkgPT4gdm9pZCwgY2FsbGJhY2s/OiAoY29weUl0ZW06IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLml0ZW1zKSB0aGlzLml0ZW1zID0gW107XHJcbiAgICB2YXIgY29weUl0ZW0gPSB0aGlzLmRhdGFTZXJ2aWNlLmNsb25lSXRlbShpdGVtKTtcclxuICAgIGlmIChjb3B5SXRlbS5pZCkgY29weUl0ZW0uaWQgPSB0aGlzLmRhdGFTZXJ2aWNlLm5ld0d1aWQoKTtcclxuICAgIGlmIChleGVjdXRlKSB7XHJcbiAgICAgIGV4ZWN1dGUoY29weUl0ZW0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3B0aW9uLmxvY2FsRGF0YSkge1xyXG4gICAgICB0aGlzLmxvY2FsRGF0YS5wdXNoKGNvcHlJdGVtKTtcclxuICAgIH1cclxuICAgIHRoaXMuaXRlbXMucHVzaChjb3B5SXRlbSk7XHJcbiAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGNvcHlJdGVtKTtcclxuICAgIGlmIChyZWZyZXNoID09IHRydWUpIHtcclxuICAgICAgdGhpcy5zZWFyY2hBc3luYyh0cnVlKS5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhY2NlcHRJbmxpbmVFZGl0KGZpZWxkOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xvc2VJbmxpbmVFZGl0KGZpZWxkLCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FuY2VsSW5saW5lRWRpdChpdGVtOiBhbnksIGZpZWxkOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHZhciBjdXJyZW50SXRlbSA9IHRoaXMucmV0cmlldmVJbmxpbmVFZGl0KGZpZWxkLCBpbmRleCk7XHJcbiAgICBpZiAoIWN1cnJlbnRJdGVtKSByZXR1cm47XHJcbiAgICBpdGVtW2ZpZWxkXSA9IGN1cnJlbnRJdGVtLml0ZW1bZmllbGRdO1xyXG4gICAgdGhpcy5jbG9zZUlubGluZUVkaXQoZmllbGQsIGluZGV4KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZUlubGluZUVkaXQoZmllbGQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdmFyIGl0ZW1JbmRleCA9IHRoaXMuZWRpdHRlZEZpZWxkcy5maW5kSW5kZXgocyA9PiBzLmZpZWxkID09IGZpZWxkICYmIHMuaW5kZXggPT0gaW5kZXgpO1xyXG4gICAgaWYgKGl0ZW1JbmRleCA+IC0xKSB0aGlzLmVkaXR0ZWRGaWVsZHMuc3BsaWNlKGl0ZW1JbmRleCwgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZWRpdElubGluZShpdGVtOiBhbnksIGZpZWxkOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICghaXRlbSkgcmV0dXJuO1xyXG4gICAgdmFyIGN1cnJlbnRJdGVtID0gdGhpcy5yZXRyaWV2ZUlubGluZUVkaXQoZmllbGQsIGluZGV4KTtcclxuICAgIGlmICghY3VycmVudEl0ZW0pIHtcclxuICAgICAgdGhpcy5lZGl0dGVkRmllbGRzLnB1c2goe1xyXG4gICAgICAgIGl0ZW06IHRoaXMuZGF0YVNlcnZpY2UuY2xvbmVJdGVtKGl0ZW0pLFxyXG4gICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICBmaWVsZDogZmllbGRcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdXJyZW50SXRlbS5pdGVtID0gdGhpcy5kYXRhU2VydmljZS5jbG9uZUl0ZW0oaXRlbSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFzSW5saW5lRWRpdChpdGVtOiBhbnksIGZpZWxkOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5vcHRpb24gfHwgdGhpcy5vcHRpb24uaW5saW5lRWRpdCAhPSB0cnVlKSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoIWl0ZW0gfHwgIXRoaXMuZWRpdHRlZEZpZWxkcyB8fCB0aGlzLmVkaXR0ZWRGaWVsZHMubGVuZ3RoID09IDApIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiAoPEVkaXR0ZWRGaWVsZFtdPnRoaXMuZWRpdHRlZEZpZWxkcykuZmluZEluZGV4KHMgPT4gcy5maWVsZCA9PSBmaWVsZCAmJiBzLmluZGV4ID09IGluZGV4KSA+IC0xO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJldHJpZXZlSW5saW5lRWRpdChmaWVsZDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogRWRpdHRlZEZpZWxkIHtcclxuICAgIGlmICghdGhpcy5lZGl0dGVkRmllbGRzIHx8IHRoaXMuZWRpdHRlZEZpZWxkcy5sZW5ndGggPT0gMCkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gKDxFZGl0dGVkRmllbGRbXT50aGlzLmVkaXR0ZWRGaWVsZHMpLmZpbmQocyA9PiBzLmZpZWxkID09IGZpZWxkICYmIHMuaW5kZXggPT0gaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc2V0RmlsdGVycygpOiB2b2lkIHtcclxuICAgIHRoaXMuZmlsdGVyID0ge307XHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcclxuICAgIHRoaXMuc2VsZWN0ZWRBbGwgPSBmYWxzZTtcclxuICAgIHRoaXMuZmlsdGVyU2VjdGlvblRvZ2dsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy50b3RhbFBhZ2VzID0gW107XHJcbiAgICB0aGlzLm9wdGlvbi5yZXF1ZXN0LnBhZ2VJbmRleCA9IDA7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gMDtcclxuICAgIGlmICghdGhpcy5vcHRpb24ucmVxdWVzdC5wYWdlU2l6ZSkge1xyXG4gICAgICB0aGlzLnBhZ2VTaXplID0gdGhpcy5vcHRpb24ucmVxdWVzdC5wYWdlU2l6ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucGFnZVNpemUgPSB0aGlzLmRlZmF1bHRQYWdlU2l6ZTtcclxuICAgIH1cclxuICAgIHRoaXMub3B0aW9uLnJlcXVlc3QucGFnZVNpemUgPSB0aGlzLnBhZ2VTaXplO1xyXG4gICAgdGhpcy5zZWFyY2hBc3luYygpLnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5zaG93UmVzZXQgPSBmYWxzZTtcclxuICAgIHRoaXMucmVxdWVzdCA9IHt9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFRvb2xiYXJBY3Rpb25zKHN0YW5kYXJkOiBib29sZWFuKTogVGFibGVBY3Rpb25bXSB7XHJcbiAgICBsZXQgYWN0aW9uczogVGFibGVBY3Rpb25bXSA9IFtdO1xyXG4gICAgaWYgKHRoaXMudG9vbGJhckFjdGlvbnMpIHtcclxuICAgICAgdGhpcy50b29sYmFyQWN0aW9ucy5mb3JFYWNoKChhY3Rpb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKCFzdGFuZGFyZCkge1xyXG4gICAgICAgICAgaWYgKGluZGV4ID49IHRoaXMub3B0aW9uLnRvdGFsVG9vbGJhckl0ZW0pIHtcclxuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChpbmRleCA8IHRoaXMub3B0aW9uLnRvdGFsVG9vbGJhckl0ZW0pIHtcclxuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBhY3Rpb25zO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoYW5nZVBhZ2VTaXplKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vcHRpb24ucmVxdWVzdC5wYWdlU2l6ZSA9IHRoaXMucGFnZVNpemU7XHJcbiAgICB0aGlzLm9wdGlvbi5yZXF1ZXN0LnBhZ2VJbmRleCA9IDA7XHJcbiAgICB0aGlzLnNlYXJjaEFzeW5jKCkuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGtlS2V5cHJlc3MoJGV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoJGV2ZW50ICYmICRldmVudC53aGljaCA9PSAxMykge1xyXG4gICAgICB0aGlzLnNlYXJjaEFzeW5jKCkuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ290bygkZXZlbnQ6IGFueSwgYmx1cj86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICgkZXZlbnQud2hpY2ggPT0gMTMgfHwgYmx1ciA9PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAkZXZlbnQudGFyZ2V0LnZhbHVlIC0gMTtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPCAwKSB0aGlzLmN1cnJlbnRQYWdlID0gMDtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPj0gdGhpcy50b3RhbFBhZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLnRvdGFsUGFnZXMubGVuZ3RoIC0gMTtcclxuICAgICAgfVxyXG4gICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlID0gdGhpcy5jdXJyZW50UGFnZSArIDE7XHJcbiAgICAgIHRoaXMuY2hhbmdlUGFnZSQubmV4dCh0aGlzLmN1cnJlbnRQYWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICgkZXZlbnQud2hpY2ggPCA0OCB8fCAkZXZlbnQud2hpY2ggPiA1NykgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlRmlsdGVyU2VjdGlvbigpIHtcclxuICAgIHRoaXMuZmlsdGVyU2VjdGlvblRvZ2dsZSA9ICF0aGlzLmZpbHRlclNlY3Rpb25Ub2dnbGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvd1NvcnRlcihjb2x1bW46IFRhYmxlQ29sdW1uLCBkaXJlY3Rpb246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNvbHVtbi5kaXJlY3Rpb24gPT09IGRpcmVjdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVSb3dEZXRhaWwoaXRlbTogYW55KSB7XHJcbiAgICBpdGVtLnRvZ2dsZSA9ICFpdGVtLnRvZ2dsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzb3J0QXN5bmMoY29sdW1uOiBUYWJsZUNvbHVtbik6IHZvaWQge1xyXG4gICAgaWYgKCFjb2x1bW4udmFsdWVSZWYpIHJldHVybjtcclxuICAgIHRoaXMucmVzZXRTb3J0QXN5bmMoY29sdW1uKTtcclxuICAgIGlmIChjb2x1bW4gJiYgY29sdW1uLmFsbG93U29ydCAhPSBmYWxzZSkge1xyXG4gICAgICBpZiAoIWNvbHVtbi5kaXJlY3Rpb24pIHtcclxuICAgICAgICBjb2x1bW4uZGlyZWN0aW9uID0gVGFibGVDb25zdGFudC5EaXJlY3Rpb24uQVNDO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbHVtbi5kaXJlY3Rpb24gPSBjb2x1bW4uZGlyZWN0aW9uID09IFRhYmxlQ29uc3RhbnQuRGlyZWN0aW9uLkFTQyA/IFRhYmxlQ29uc3RhbnQuRGlyZWN0aW9uLkRFU0MgOiBUYWJsZUNvbnN0YW50LkRpcmVjdGlvbi5BU0M7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMub3JkZXJCeSA9IHRoaXMuZGF0YVNlcnZpY2UudG9QYXNjYWxDYXNlKGNvbHVtbi52YWx1ZVJlZigpKTtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gY29sdW1uLmRpcmVjdGlvbjtcclxuICAgIHRoaXMuc2VhcmNoQXN5bmMobnVsbCwgbnVsbCwgZmFsc2UpLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlbGVjdEFsbChzZWxlY3RlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gc2VsZWN0ZWQgPyBbLi4udGhpcy5pdGVtc10gOiBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhckFsbCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG4gICAgdGhpcy5zZWxlY3RlZEFsbCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlbGVjdEl0ZW0oaXRlbTogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCBzZWxlY3RlZElkcyA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5tYXAoeCA9PiB4LmlkKTtcclxuICAgIGNvbnN0IGV4aXN0aW5nSXRlbUluZGV4ID0gc2VsZWN0ZWRJZHMuaW5kZXhPZihpdGVtLmlkKTtcclxuICAgIGlmIChleGlzdGluZ0l0ZW1JbmRleCA+PSAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5zcGxpY2UoZXhpc3RpbmdJdGVtSW5kZXgsIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMub3B0aW9uLm11bHRpcGxlKSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmZpbmQocyA9PiBzLmlkID09IGl0ZW0uaWQpO1xyXG4gICAgICBpZiAoY3VycmVudEl0ZW0pIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbY3VycmVudEl0ZW1dO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNSb3dTZWxlY3RlZChpdGVtOiBhbnkpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkSWRzID0gdGhpcy5zZWxlY3RlZEl0ZW1zLm1hcCh4ID0+IHguaWQpO1xyXG4gICAgcmV0dXJuIHNlbGVjdGVkSWRzLmluZGV4T2YoaXRlbS5pZCkgPj0gMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXNBbnlBY3Rpb24oaXRlbT86IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgYWxpdmVBY3Rpb25zID0gdGhpcy5pbmxpbmVBY3Rpb25zLmZpbHRlcih4ID0+ICF4LmhpZGUgfHwgIXguaGlkZShpdGVtKSk7XHJcbiAgICByZXR1cm4gYWxpdmVBY3Rpb25zLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXhlY3V0ZUFjdGlvbkFzeW5jKGFjdGlvbjogVGFibGVBY3Rpb24sIGl0ZW0/OiBhbnksICRldmVudD86IGFueSwgaW5kZXg/OiBudW1iZXIsIGxvYWRlZENhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gJGV2ZW50ID8gJGV2ZW50LnRhcmdldCA6IG51bGw7XHJcbiAgICAgIGFjdGlvbi5leGVjdXRlQXN5bmMoaXRlbSwgdGFyZ2V0LCB0aGlzLCBpbmRleCwgbG9hZGVkQ2FsbGJhY2spO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzQWN0aXZlKGl0ZW06IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50SXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5maW5kKHMgPT4gcy5pZCA9PT0gaXRlbS5pZCk7XHJcbiAgICByZXR1cm4gY3VycmVudEl0ZW0gJiYgY3VycmVudEl0ZW0uY2hlY2tlZFJvdztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDdXJyZW50SW5kZXgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5vcHRpb24ucmVxdWVzdCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5vcHRpb24ucmVxdWVzdC5wYWdlSW5kZXggKiB0aGlzLm9wdGlvbi5yZXF1ZXN0LnBhZ2VTaXplICsgaW5kZXggKyAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERyb3Bkb3duRGlzcGxheVRleHQoY29sdW1uOiBUYWJsZUNvbHVtbiwgaXRlbTogYW55KSB7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBpdGVtW2NvbHVtbi52YWx1ZVJlZigpXTtcclxuICAgIGlmICghdmFsdWVzKSByZXR1cm4gJyc7XHJcblxyXG4gICAgaWYgKHZhbHVlcyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IDxzdHJpbmdbXT52YWx1ZXMuZmlsdGVyKHggPT4geCkubWFwKHggPT4geFtjb2x1bW4uZHJvcGRvd25Db25maWd1cmF0aW9uLmJpbmRMYWJlbF0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJywgJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWVzW2NvbHVtbi5kcm9wZG93bkNvbmZpZ3VyYXRpb24uYmluZExhYmVsXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQYWdlcyhuOiBudW1iZXIpOiBudW1iZXJbXSB7XHJcbiAgICBsZXQgcGFnZXMgPSBbXTtcclxuICAgIGlmICh0aGlzLnRvdGFsUGFnZXMubGVuZ3RoIDwgbikge1xyXG4gICAgICBmb3IgKGxldCBpID0gdGhpcy50b3RhbFBhZ2VzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgcGFnZXMucHVzaChpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcGFnZXM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA8IG4pIHtcclxuICAgICAgZm9yIChsZXQgaSA9IG4gLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIHBhZ2VzLnB1c2goaSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5mbG9vcihuIC8gMik7XHJcbiAgICAgIGNvbnN0IG1heCA9IHRoaXMuY3VycmVudFBhZ2UgKyBjb3VudCA+PSB0aGlzLnRvdGFsUGFnZXMubGVuZ3RoID8gdGhpcy50b3RhbFBhZ2VzLmxlbmd0aCAtIDEgOiB0aGlzLmN1cnJlbnRQYWdlICsgY291bnQ7XHJcbiAgICAgIGZvciAobGV0IGkgPSBtYXg7IGkgPj0gdGhpcy5jdXJyZW50UGFnZSAtIGNvdW50OyBpLS0pIHtcclxuICAgICAgICBwYWdlcy5wdXNoKGkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFnZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVsb2FkKGtlZXBTZWxlY3RlZEl0ZW1zOiBib29sZWFuID0gZmFsc2UpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLnNlYXJjaEFzeW5jKG51bGwsIG51bGwsIGtlZXBTZWxlY3RlZEl0ZW1zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWFyY2goYWR2YW5jZWRGaWx0ZXI/OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnNlYXJjaEFzeW5jKGFkdmFuY2VkRmlsdGVyKS5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0cmFja1JlY29yZHMocmVjb3JkOiBhbnkpIHtcclxuICAgIHJldHVybiByZWNvcmQgPyByZWNvcmQuaWQgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VhcmNoQXN5bmMoYWR2YW5jZWRGaWx0ZXI/OiBib29sZWFuLCBjdXJyZW50UGFnZT86IG51bWJlciwga2VlcFNlbGVjdGVkSXRlbXM6IGJvb2xlYW4gPSB0cnVlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuYnVpbGRSZXF1ZXN0KGN1cnJlbnRQYWdlLCBhZHZhbmNlZEZpbHRlcik7XHJcbiAgICBpZiAodGhpcy5vcHRpb24ubG9jYWxEYXRhKSB7XHJcbiAgICAgIHRoaXMubG9jYWxEYXRhID0gdGhpcy5vcHRpb24ubG9jYWxEYXRhKCk7XHJcbiAgICAgIHRoaXMuc2VhcmNoTG9jYWxJdGVtcyhyZXF1ZXN0KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5iaW5kUmVzdWx0RGF0YShyZXNwb25zZSwga2VlcFNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24uc2VydmljZVByb3ZpZGVyIHx8ICF0aGlzLm9wdGlvbi5zZXJ2aWNlUHJvdmlkZXIuc2VhcmNoQXN5bmMpIHRocm93IG5ldyBFcnJvcignIXRoaXMub3B0aW9uLnNlcnZpY2VQcm92aWRlci5zZWFyY2hBc3luYycpO1xyXG4gICAgICB0aGlzLm9wdGlvbi5zZXJ2aWNlUHJvdmlkZXIuc2VhcmNoQXN5bmMocmVxdWVzdCkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuYmluZFJlc3VsdERhdGEocmVzcG9uc2UsIGtlZXBTZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2YodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrZWRBbGxQYWdlSXRlbXMoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWRJdGVtcyB8fCAhdGhpcy5pdGVtcyB8fCB0aGlzLml0ZW1zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBjaGVjayA9IHRydWU7XHJcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbXMuZmluZChzID0+IHMuaWQgPT09IGl0ZW0uaWQpO1xyXG4gICAgICBpZiAoIWN1cnJlbnRJdGVtKSB7XHJcbiAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNoZWNrO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXREZWZhdWx0T3JkZXIocmVxdWVzdDogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vcHRpb24uZGVmYXVsdE9yZGVyQnkpIHRoaXMub3JkZXJCeSA9IHRoaXMub3B0aW9uLmRlZmF1bHRPcmRlckJ5O1xyXG4gICAgaWYgKHRoaXMub3B0aW9uLmRlZmF1dE9yZGVyRGlyZWN0aW9uKSB0aGlzLmRpcmVjdGlvbiA9IHRoaXMub3B0aW9uLmRlZmF1dE9yZGVyRGlyZWN0aW9uO1xyXG4gICAgcmVxdWVzdC5vcmRlckJ5ID0gdGhpcy5vcmRlckJ5O1xyXG4gICAgcmVxdWVzdC5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcclxuICAgIGlmICghdGhpcy5vcmRlckJ5KSB7XHJcbiAgICAgIHRoaXMub3JkZXJCeSA9IFwiSWRcIjtcclxuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBUYWJsZUNvbnN0YW50LkRpcmVjdGlvbi5BU0M7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RmlsdGVyKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLnJlcXVlc3Rba2V5XSA9IHZhbHVlO1xyXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDA7XHJcbiAgICB0aGlzLmZpbHRlcltrZXldID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5vcHRpb24gJiYgdGhpcy5vcHRpb24ucmVxdWVzdCkgdGhpcy5vcHRpb24ucmVxdWVzdC5wYWdlSW5kZXggPSAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXRyaWV2ZUFkdmFuY2VkRmlsdGVycyhhZHZhbmNlZEZpbHRlcjogYm9vbGVhbiwgcmVxdWVzdDogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmZpbHRlckNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBUYWJsZUNvbHVtbikgPT4ge1xyXG4gICAgICBsZXQgdmFsdWUgPSB0aGlzLmZpbHRlcltjb2x1bW4udmFsdWVSZWYoKV07XHJcbiAgICAgIGlmICh2YWx1ZSA9PSB1bmRlZmluZWQgfHwgdmFsdWUgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB2YWx1ZSA9ICcnO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChhZHZhbmNlZEZpbHRlciA9PSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKGNvbHVtbi50eXBlICYmIChjb2x1bW4udHlwZS50b0xvd2VyQ2FzZSgpID09ICdkYXRlJyB8fCBjb2x1bW4udHlwZS50b0xvd2VyQ2FzZSgpID09ICdkYXRldGltZScgfHwgY29sdW1uLnR5cGUudG9Mb3dlckNhc2UoKSA9PSAndGltZScpKSB7XHJcbiAgICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUgIT0gJycpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZXRpbWVWYWx1ZXMgPSA8RGF0ZVtdPnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoZGF0ZXRpbWVWYWx1ZXMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgICByZXF1ZXN0W2NvbHVtbi52YWx1ZVJlZigpICsgJ0Zyb20nXSA9IHRoaXMuY29udmVydERhdGV0aW1lKGRhdGV0aW1lVmFsdWVzWzBdLCAnRnJvbScpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGV0aW1lVmFsdWVzLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgcmVxdWVzdFtjb2x1bW4udmFsdWVSZWYoKSArICdGcm9tJ10gPSB0aGlzLmNvbnZlcnREYXRldGltZShkYXRldGltZVZhbHVlc1swXSwgJ0Zyb20nKTtcclxuICAgICAgICAgICAgICByZXF1ZXN0W2NvbHVtbi52YWx1ZVJlZigpICsgJ1RvJ10gPSB0aGlzLmNvbnZlcnREYXRldGltZShkYXRldGltZVZhbHVlc1sxXSwgJ1RvJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVxdWVzdFtjb2x1bW4udmFsdWVSZWYoKV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVxdWVzdFtjb2x1bW4udmFsdWVSZWYoKV0gPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJ1aWxkUmVxdWVzdChjdXJyZW50UGFnZT86IG51bWJlciwgYWR2YW5jZWRGaWx0ZXI/OiBib29sZWFuKTogYW55IHtcclxuICAgIHRoaXMucHJldmlvdXNSZXF1ZXN0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5yZXF1ZXN0KTtcclxuICAgIGxldCBzZWFyY2hUZXh0ID0gdGhpcy5maWx0ZXIuc2VhcmNoVGV4dDtcclxuICAgIHRoaXMudGV4dFNlYXJjaGVkID0gdGhpcy5maWx0ZXIuc2VhcmNoVGV4dDtcclxuICAgIGlmIChzZWFyY2hUZXh0ID09IHVuZGVmaW5lZCB8fCBzZWFyY2hUZXh0ID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHNlYXJjaFRleHQgPSAnJztcclxuICAgIH1cclxuICAgIHRoaXMucmVxdWVzdC5wYWdlU2l6ZSA9IHRoaXMub3B0aW9uLnJlcXVlc3QucGFnZVNpemU7XHJcbiAgICBpZiAoIXRoaXMub3B0aW9uLnBhZ2luZykge1xyXG4gICAgICB0aGlzLnJlcXVlc3QucGFnZVNpemUgPSA5OTk5OTk7XHJcbiAgICAgIHRoaXMucGFnZVNpemUgPSA5OTk5OTk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlcXVlc3Quc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XHJcbiAgICB0aGlzLnJlcXVlc3QuZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb247XHJcbiAgICB0aGlzLnJlcXVlc3Qub3JkZXJCeSA9IHRoaXMub3JkZXJCeTtcclxuICAgIGlmICghdGhpcy5vcmRlckJ5KSB0aGlzLnNldERlZmF1bHRPcmRlcih0aGlzLnJlcXVlc3QpO1xyXG4gICAgdGhpcy5yZXRyaWV2ZUFkdmFuY2VkRmlsdGVycyhhZHZhbmNlZEZpbHRlciwgdGhpcy5yZXF1ZXN0KTtcclxuICAgIHRoaXMucmVxdWVzdC5wYWdlSW5kZXggPSB0aGlzLm9wdGlvbi5yZXF1ZXN0LnBhZ2VJbmRleDtcclxuICAgIGlmIChjdXJyZW50UGFnZSkge1xyXG4gICAgICB0aGlzLnJlcXVlc3QucGFnZUluZGV4ID0gY3VycmVudFBhZ2U7XHJcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBjdXJyZW50UGFnZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VzID0gdGhpcy5kYXRhU2VydmljZS5jb21wYXJlT2JqZWN0cyh0aGlzLnByZXZpb3VzUmVxdWVzdCwgdGhpcy5yZXF1ZXN0KTtcclxuICAgIGNvbnN0IGlzQ2hhbmdlZCA9IGNoYW5nZXMuZmlsdGVyKHggPT4gWydwYWdlSW5kZXgnLCAncGFnZVNpemUnXS5pbmRleE9mKHgucHJvcGVydHlOYW1lKSA8IDApLmxlbmd0aCA+IDA7XHJcbiAgICBpZiAoaXNDaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMub3B0aW9uLnJlcXVlc3QucGFnZUluZGV4ID0gMDtcclxuICAgICAgdGhpcy5yZXF1ZXN0LnBhZ2VJbmRleCA9IDA7XHJcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udmVydERhdGV0aW1lKGR0OiBEYXRlLCB0eXBlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFkdCkgcmV0dXJuICcnO1xyXG4gICAgbGV0IGNvbnZlcnRlZERhdGV0aW1lID0gbmV3IERhdGUoZHQpO1xyXG4gICAgbGV0IGRheXMgPSBjb252ZXJ0ZWREYXRldGltZS5nZXREYXRlKCkudG9TdHJpbmcoKTtcclxuICAgIGlmIChkYXlzLmxlbmd0aCA8IDIpIGRheXMgPSAnMCcgKyBkYXlzO1xyXG4gICAgbGV0IG1vbnRocyA9IChjb252ZXJ0ZWREYXRldGltZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKTtcclxuICAgIGlmIChtb250aHMubGVuZ3RoIDwgMikgbW9udGhzID0gJzAnICsgbW9udGhzO1xyXG4gICAgbGV0IGhvdXJzID0gY29udmVydGVkRGF0ZXRpbWUuZ2V0SG91cnMoKS50b1N0cmluZygpO1xyXG4gICAgaWYgKGhvdXJzLmxlbmd0aCA8IDIpIGhvdXJzID0gJzAnICsgaG91cnM7XHJcbiAgICBsZXQgbWludXRlcyA9IGNvbnZlcnRlZERhdGV0aW1lLmdldE1pbnV0ZXMoKS50b1N0cmluZygpO1xyXG4gICAgaWYgKG1pbnV0ZXMubGVuZ3RoIDwgMikgbWludXRlcyA9ICcwJyArIG1pbnV0ZXM7XHJcbiAgICBjb25zdCB5ZWFyID0gY29udmVydGVkRGF0ZXRpbWUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICBzd2l0Y2ggKHRoaXMub3B0aW9uLmRhdGV0aW1lRm9ybWF0LmZvcm1hdCkge1xyXG4gICAgICBjYXNlICdkZC9NTS95eXl5JzpcclxuICAgICAgICByZXR1cm4gZGF5cyArICcvJyArIG1vbnRocyArICcvJyArIHllYXIgKyAodHlwZSA9PSAnRnJvbScgPyAnIDAwOjAwJyA6ICcgMjM6NTknKTtcclxuICAgICAgY2FzZSAnZGQvTU0veXl5eSBISDptbSc6XHJcbiAgICAgICAgcmV0dXJuIGRheXMgKyAnLycgKyBtb250aHMgKyAnLycgKyB5ZWFyICsgJyAnICsgaG91cnMgKyAnOicgKyBtaW51dGVzO1xyXG4gICAgICBjYXNlICdNTS9kZC95eXl5JzpcclxuICAgICAgICByZXR1cm4gbW9udGhzICsgJy8nICsgZGF5cyArICcvJyArIHllYXIgKyAodHlwZSA9PSAnRnJvbScgPyAnIDAwOjAwJyA6ICcgMjM6NTknKTtcclxuICAgICAgY2FzZSAnTU0vZGQveXl5eSBISDptbSc6XHJcbiAgICAgICAgcmV0dXJuIG1vbnRocyArICcvJyArIGRheXMgKyAnLycgKyB5ZWFyICsgJyAnICsgaG91cnMgKyAnOicgKyBtaW51dGVzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZWFyY2hMb2NhbEl0ZW1zKHJlcXVlc3Q6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBsZXQgcmVzdWx0OiBhbnlbXSA9IHRoaXMubG9jYWxEYXRhO1xyXG4gICAgY29uc3Qgb3JkZXJCeSA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0RmllbGQocmVxdWVzdC5vcmRlckJ5LCB0cnVlKTtcclxuICAgIGlmIChyZXF1ZXN0LmRpcmVjdGlvbiA9PSBUYWJsZUNvbnN0YW50LkRpcmVjdGlvbi5BU0MpIHtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5zb3J0KSB7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiBhW29yZGVyQnldID4gYltvcmRlckJ5XSA/IDEgOiBhW29yZGVyQnldID09PSBiW29yZGVyQnldID8gMCA6IC0xKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHQuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHRoaXMub3B0aW9uLnNvcnQoYSwgYiwgb3JkZXJCeSkpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLnNvcnQpIHtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHQuc29ydCgoYjogYW55LCBhOiBhbnkpID0+IGFbb3JkZXJCeV0gPiBiW29yZGVyQnldID8gMSA6IGFbb3JkZXJCeV0gPT09IGJbb3JkZXJCeV0gPyAwIDogLTEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zb3J0KChiOiBhbnksIGE6IGFueSkgPT4gdGhpcy5vcHRpb24uc29ydChhLCBiLCBvcmRlckJ5KSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgaXRlbXM6IGFueVtdID0gW107XHJcbiAgICBpZiAocmVxdWVzdC5wYWdlSW5kZXggPj0gMCAmJiByZXF1ZXN0LnBhZ2VTaXplID4gMCkge1xyXG4gICAgICBjb25zdCBsb2NhbFJlc3VsdCA9IFtdO1xyXG4gICAgICBpZiAocmVxdWVzdC5zZWFyY2hUZXh0ICYmIHRoaXMub3B0aW9uLnNlYXJjaEZpZWxkcyAmJiB0aGlzLm9wdGlvbi5zZWFyY2hGaWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9uLnNlYXJjaEZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzdWx0LmZpbHRlcihzID0+IHRoaXMuZnV6enlzZWFyY2gocmVxdWVzdC5zZWFyY2hUZXh0LCBzW2ZpZWxkXSkpO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBpZiAobG9jYWxSZXN1bHQuZmluZEluZGV4KHMgPT4gcy5pZCA9PSBpdGVtLmlkKSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxSZXN1bHQucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdCA9IGxvY2FsUmVzdWx0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgZmlsdGVyID0ge307XHJcbiAgICAgIHRoaXMucmV0cmlldmVBZHZhbmNlZEZpbHRlcnModHJ1ZSwgZmlsdGVyKTtcclxuICAgICAgaWYgKHRoaXMuZmlsdGVyQ29sdW1ucykge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyQ29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcclxuICAgICAgICAgIHZhciB2YWx1ZSA9IGZpbHRlcltjb2x1bW4udmFsdWVSZWYoKV07XHJcbiAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihzID0+IHRoaXMuZnV6enlzZWFyY2godmFsdWUsIHNbY29sdW1uLnZhbHVlUmVmKCldKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaXRlbXMgPSByZXN1bHQuZmlsdGVyKHMgPT4gKHJlc3VsdC5pbmRleE9mKHMpID49IHJlcXVlc3QucGFnZUluZGV4ICogcmVxdWVzdC5wYWdlU2l6ZSkgJiYgKHJlc3VsdC5pbmRleE9mKHMpIDwgKHJlcXVlc3QucGFnZUluZGV4ICsgMSkgKiByZXF1ZXN0LnBhZ2VTaXplKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXNwb25zZTogVGFibGVSZXNwb25zZTxhbnk+ID0ge1xyXG4gICAgICBpdGVtczogaXRlbXMsXHJcbiAgICAgIHRvdGFsUmVjb3JkczogcmVzdWx0Lmxlbmd0aFxyXG4gICAgfTtcclxuICAgIHJldHVybiBvZihyZXNwb25zZSkucGlwZShkZWxheSgyNTApKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udmVydFVDb2RlKGM6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoJ2HDo+G6ocOgw6HhuqPEg8SD4bq14bq34bqx4bqzw6Lhuqvhuq3huqfhuqXhuqknLmluZGV4T2YoYykgPiAtMSkgcmV0dXJuICdhJztcclxuICAgIGlmICgnZMSRJy5pbmRleE9mKGMpID4gLTEpIHJldHVybiAnZCc7XHJcbiAgICBpZiAoJ2/DteG7jcOyw7Phu4/DtOG7l+G7meG7k+G7kcah4buh4buj4bud4bub4bufJy5pbmRleE9mKGMpID4gLTEpIHJldHVybiAnbyc7XHJcbiAgICBpZiAoJ3XFqeG7pcO5w7rhu6fGsOG7r+G7seG7q+G7qeG7rcaw4buv4bux4bur4bup4butJy5pbmRleE9mKGMpID4gLTEpIHJldHVybiAndSc7XHJcbiAgICBpZiAoJ2nEqeG7i8Osw63hu4knLmluZGV4T2YoYykgPiAtMSkgcmV0dXJuICdpJztcclxuICAgIGlmICgneeG7ueG7teG7s8O94bu3Jy5pbmRleE9mKGMpID4gLTEpIHJldHVybiAneSc7XHJcbiAgICBpZiAoJ2Xhur3hurnDqMOp4bq9w6rhu4Xhu4fhu4HDquG7gycuaW5kZXhPZihjKSA+IC0xKSByZXR1cm4gJ2UnO1xyXG4gICAgcmV0dXJuIGM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZ1enp5c2VhcmNoKG5lZWRsZTogYW55LCBoYXlzdGFjazogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIW5lZWRsZSB8fCAhaGF5c3RhY2spIHJldHVybiBmYWxzZTtcclxuICAgIGNvbnN0IGhheXN0YWNrTEMgPSB0aGlzLnJlbW92ZUFsbFNwYWNlcyhoYXlzdGFjay50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgY29uc3QgbmVlZGxlTEMgPSB0aGlzLnJlbW92ZUFsbFNwYWNlcyhuZWVkbGUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIGNvbnN0IGhsZW4gPSBoYXlzdGFjay50b1N0cmluZygpLmxlbmd0aDtcclxuICAgIGNvbnN0IG5sZW4gPSBuZWVkbGVMQy50b1N0cmluZygpLmxlbmd0aDtcclxuICAgIGlmIChubGVuID4gaGxlbikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAobmxlbiA9PT0gaGxlbikge1xyXG4gICAgICByZXR1cm4gbmVlZGxlTEMgPT09IGhheXN0YWNrTEM7XHJcbiAgICB9XHJcbiAgICBvdXRlcjogZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgbmxlbjsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG5jaCA9IHRoaXMuY29udmVydFVDb2RlKG5lZWRsZUxDW2ldKTtcclxuICAgICAgd2hpbGUgKGogPCBobGVuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udmVydFVDb2RlKGhheXN0YWNrTENbaisrXSkgPT09IG5jaCkge1xyXG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVBbGxTcGFjZXMoc3RyPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICghc3RyKSByZXR1cm4gJyc7XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCAnJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJpbmRSZXN1bHREYXRhKHJlc3BvbnNlOiBUYWJsZVJlc3BvbnNlPGFueT4sIGtlZXBTZWxlY3RlZEl0ZW1zOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5pdGVtcyA9IHJlc3BvbnNlLml0ZW1zO1xyXG4gICAgdGhpcy50b3RhbFJlY29yZHMgPSByZXNwb25zZS50b3RhbFJlY29yZHM7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZVBhZ2VzKCk7XHJcblxyXG4gICAgaWYgKCFrZWVwU2VsZWN0ZWRJdGVtcykge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkQWxsID0gdGhpcy5jaGVja2VkQWxsUGFnZUl0ZW1zKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPiB0aGlzLnRvdGFsUGFnZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICB0aGlzLnJlY3Vyc2l2ZUNvdW50ZXIrKztcclxuICAgICAgaWYgKHRoaXMucmVjdXJzaXZlQ291bnRlciA8IDMpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaEFzeW5jKG51bGwsIHRoaXMudG90YWxQYWdlcy5sZW5ndGggLSAxKS5zdWJzY3JpYmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVBhZ2VzKCk6IHZvaWQge1xyXG4gICAgbGV0IHBhZ2VzID0gTWF0aC5mbG9vcih0aGlzLnRvdGFsUmVjb3JkcyAvIHRoaXMucGFnZVNpemUpO1xyXG4gICAgaWYgKHBhZ2VzIDw9IDApIHtcclxuICAgICAgcGFnZXMgPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudG90YWxSZWNvcmRzICUgdGhpcy5wYWdlU2l6ZSA+IDApIHtcclxuICAgICAgcGFnZXMgKz0gMTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRvdGFsUmVjb3JkcyA8IHRoaXMucGFnZVNpemUpIHtcclxuICAgICAgcGFnZXMgPSAxO1xyXG4gICAgfVxyXG4gICAgdGhpcy50b3RhbFBhZ2VzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VzOyBpKyspIHtcclxuICAgICAgdGhpcy50b3RhbFBhZ2VzLnB1c2goaSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0U29ydEFzeW5jKGN1cnJlbnRDb2x1bW46IFRhYmxlQ29sdW1uKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wdGlvbi5tYWluQ29sdW1ucyA9IHRoaXMub3B0aW9uLm1haW5Db2x1bW5zLm1hcChjb2x1bW4gPT4ge1xyXG4gICAgICBpZiAoY29sdW1uLmlkICE9PSBjdXJyZW50Q29sdW1uLmlkKSBjb2x1bW4uZGlyZWN0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICByZXR1cm4gY29sdW1uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRUYWJsZVRhYmxlVGV4dHMoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMub3B0aW9uLmRpc3BsYXlUZXh0KSB7XHJcbiAgICAgIHRoaXMub3B0aW9uLmRpc3BsYXlUZXh0ID0gbmV3IFRhYmxlVGV4dCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dCkgdGhpcy5vcHRpb24uZGlzcGxheVRleHQucGxhY2Vob2xkZXJTZWFyY2ggPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LlBsYWNlaG9sZGVyU2VhcmNoO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmJ0blNlYXJjaCkgdGhpcy5vcHRpb24uZGlzcGxheVRleHQuYnRuU2VhcmNoID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5CdG5TZWFyY2g7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24uZGlzcGxheVRleHQuYnRuUmVzZXQpIHRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmJ0blJlc2V0ID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5CdG5SZXNldDtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5hY3Rpb24pIHRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmFjdGlvbiA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQWN0aW9uO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LnNlbGVjdFBhZ2VTaXplKSB0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5zZWxlY3RQYWdlU2l6ZSA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuU2VsZWN0UGFnZVNpemU7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24uZGlzcGxheVRleHQuZGVsZXRlVGl0bGUpIHRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmRlbGV0ZVRpdGxlID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5EZWxldGVUaXRsZTtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5idG5BY2NlcHRUaXRsZSkgdGhpcy5vcHRpb24uZGlzcGxheVRleHQuYnRuQWNjZXB0VGl0bGUgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkJ0bkFjY2VwdFRpdGxlO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmJ0bkNhbmNlbFRpdGxlKSB0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5idG5DYW5jZWxUaXRsZSA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQnRuQ2FuY2VsVGl0bGVcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5maWx0ZXJUaXRsZSkgdGhpcy5vcHRpb24uZGlzcGxheVRleHQuZmlsdGVyVGl0bGUgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkZpbHRlclRpdGxlO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmFwcGx5RmlsdGVyKSB0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5hcHBseUZpbHRlciA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQXBwbHlGaWx0ZXI7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24uZGlzcGxheVRleHQuZGV0YWlsVGl0bGUpIHRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmRldGFpbFRpdGxlID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5EZXRhaWxUaXRsZTtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5wYWdlVGl0bGUpIHRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LnBhZ2VUaXRsZSA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuUGFnZVRpdGxlO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmFkdmFuY2VkU2VhcmNoVGl0bGUpIHRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmFkdmFuY2VkU2VhcmNoVGl0bGUgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkFkdmFuY2VkU2VhcmNoVGl0bGU7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24uZGlzcGxheVRleHQuYWR2YW5jZWRCdG5UaXRsZSkgdGhpcy5vcHRpb24uZGlzcGxheVRleHQuYWR2YW5jZWRCdG5UaXRsZSA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQWR2YW5jZWRCdG5UaXRsZTtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5hZHZhbmNlZEJ0bkNhbmNlbFRpdGxlKSB0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5hZHZhbmNlZEJ0bkNhbmNlbFRpdGxlID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5BZHZhbmNlZEJ0bkNhbmNlbFRpdGxlO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmFsbFRpdGxlKSB0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5hbGxUaXRsZSA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQWxsVGl0bGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRUYWJsZVRhYmxlTWVzc2FnZXMoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMub3B0aW9uLm1lc3NhZ2UpIHtcclxuICAgICAgdGhpcy5vcHRpb24ubWVzc2FnZSA9IG5ldyBUYWJsZU1lc3NhZ2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24ubWVzc2FnZS5ub3RGb3VuZE1lc3NhZ2UpIHRoaXMub3B0aW9uLm1lc3NhZ2Uubm90Rm91bmRNZXNzYWdlID0gVGFibGVDb25zdGFudC5NZXNzYWdlLk5vdEZvdW5kTWVzc2FnZTtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5tZXNzYWdlLmZvdW5kTWVzc2FnZSkgdGhpcy5vcHRpb24ubWVzc2FnZS5mb3VuZE1lc3NhZ2UgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuRm91bmRNZXNzYWdlO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLm1lc3NhZ2UuaW52YWxpZEZvcm1hdE1lc3NhZ2UpIHRoaXMub3B0aW9uLm1lc3NhZ2UuaW52YWxpZEZvcm1hdE1lc3NhZ2UgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuSW52YWxpZEZvcm1hdE1lc3NhZ2U7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24ubWVzc2FnZS5zZWxlY3RlZEl0ZW1zTWVzc2FnZSkgdGhpcy5vcHRpb24ubWVzc2FnZS5zZWxlY3RlZEl0ZW1zTWVzc2FnZSA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5TZWxlY3RlZEl0ZW1zTWVzc2FnZTtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5tZXNzYWdlLmNvbmZpcm1TZWxlY3RBbGxSZWNvcmRzTWVzc2FnZSkgdGhpcy5vcHRpb24ubWVzc2FnZS5jb25maXJtU2VsZWN0QWxsUmVjb3Jkc01lc3NhZ2UgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuQ29uZmlybVNlbGVjdEFsbFJlY29yZHNNZXNzYWdlO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLm1lc3NhZ2UuY29uZmlybUNsZWFyQWxsUmVjb3Jkc01lc3NhZ2UpIHRoaXMub3B0aW9uLm1lc3NhZ2UuY29uZmlybUNsZWFyQWxsUmVjb3Jkc01lc3NhZ2UgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuQ29uZmlybUNsZWFyQWxsUmVjb3Jkc01lc3NhZ2U7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24ubWVzc2FnZS5kZWxldGVNZXNzYWdlKSB0aGlzLm9wdGlvbi5tZXNzYWdlLmRlbGV0ZU1lc3NhZ2UgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuRGVsZXRlTWVzc2FnZTtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5tZXNzYWdlLmxvYWRpbmdNZXNzYWdlKSB0aGlzLm9wdGlvbi5tZXNzYWdlLmxvYWRpbmdNZXNzYWdlID0gVGFibGVDb25zdGFudC5NZXNzYWdlLkxvYWRpbmdNZXNzYWdlO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLm1lc3NhZ2UucmVmTWVzc2FnZSkgdGhpcy5vcHRpb24ubWVzc2FnZS5yZWZNZXNzYWdlID0gVGFibGVDb25zdGFudC5NZXNzYWdlLlJlZk1lc3NhZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRNYWluQ29sdW1ucygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5vcHRpb24ubWFpbkNvbHVtbnMpIHtcclxuICAgICAgdGhpcy5vcHRpb24ubWFpbkNvbHVtbnMgPSBbXTtcclxuICAgIH1cclxuICAgIHRoaXMub3B0aW9uLm1haW5Db2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xyXG4gICAgICBpZiAoIWNvbHVtbi50ZXh0QWxpZ24pIGNvbHVtbi50ZXh0QWxpZ24gPSBUYWJsZUNvbnN0YW50LlRleHRBbGlnbi5MZWZ0O1xyXG4gICAgICBpZiAoY29sdW1uICYmICFjb2x1bW4uaWQpIHtcclxuICAgICAgICBjb2x1bW4uaWQgPSB0aGlzLmRhdGFTZXJ2aWNlLm5ld0d1aWQoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sdW1uLmFsbG93RmlsdGVyKSB7XHJcbiAgICAgICAgaWYgKGNvbHVtbi50eXBlID09PSBUYWJsZUNvbHVtblR5cGUuRHJvcGRvd24pIHtcclxuICAgICAgICAgIGlmICghY29sdW1uLmRyb3Bkb3duQ29uZmlndXJhdGlvbikgdGhyb3cgbmV3IEVycm9yKCchY29sdW1uLmRyb3Bkb3duQ29uZmlndXJhdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbHRlckNvbHVtbnMucHVzaChjb2x1bW4pO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyW2NvbHVtbi52YWx1ZVJlZigpXSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5vcHRpb24ubWFpbkNvbHVtbnMgPSB0aGlzLm9wdGlvbi5tYWluQ29sdW1ucy5zb3J0KChhOiBUYWJsZUNvbHVtbiwgYjogVGFibGVDb2x1bW4pID0+IGEub3JkZXIgPiBiLm9yZGVyID8gMSA6IGEub3JkZXIgPT09IGIub3JkZXIgPyAwIDogLTEpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJFdmVudHMoKSB7XHJcbiAgICBpZiAodGhpcy5nb3RvUmVmKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlci5saXN0ZW4odGhpcy5nb3RvUmVmLm5hdGl2ZUVsZW1lbnQsICdrZXlkb3duJywgKCRldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gJGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGxldCBtYXggPSAnOTk5OTk5OSc7XHJcbiAgICAgICAgaWYgKHRoaXMuZ290b1JlZi5uYXRpdmVFbGVtZW50LmF0dHJpYnV0ZXNbJ21heCddKSB7XHJcbiAgICAgICAgICBtYXggPSB0aGlzLmdvdG9SZWYubmF0aXZlRWxlbWVudC5hdHRyaWJ1dGVzWydtYXgnXS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCh2YWx1ZSA+PSA0OCAmJiB2YWx1ZSA8PSA1NykgfHwgKHZhbHVlID49IDk2ICYmIHZhbHVlIDw9IDEwNSkgfHwgdmFsdWUgPT0gOCB8fCB2YWx1ZSA9PSAxMykge1xyXG4gICAgICAgICAgaWYgKHZhbHVlID49IDQ4ICYmIHZhbHVlIDw9IDU3KSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJzZUludChtYXgpIDwgcGFyc2VJbnQoJGV2ZW50LnRhcmdldC52YWx1ZSArIChwYXJzZUludCh2YWx1ZSkgLSA0OCkpKSB7XHJcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZSA9IG1heDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+PSA5NiAmJiB2YWx1ZSA8PSAxMDUpIHtcclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KG1heCkgPCBwYXJzZUludCgkZXZlbnQudGFyZ2V0LnZhbHVlICsgKHBhcnNlSW50KHZhbHVlKSAtIDk2KSkpIHtcclxuICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlID0gbWF4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19