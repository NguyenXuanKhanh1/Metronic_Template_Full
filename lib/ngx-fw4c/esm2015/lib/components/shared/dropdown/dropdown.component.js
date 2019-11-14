/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, TemplateRef, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap, map, concat, skip } from 'rxjs/operators';
import { FormDirectorExtraItemDirective } from '../form/form-director-extra-item.directive';
export class DropdownComponent {
    /**
     * @param {?} changeDetectorRef
     */
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.change = new EventEmitter();
        this.direction = 'vertical';
        this.alignVertical = true;
        this.multiple = false;
        this.closeOnSelect = true;
        this.dropdownPosition = 'auto';
        this.loadingText = 'Đang tải...';
        this.notFoundText = 'Không tìm thấy';
        this.placeholder = 'Chọn thông tin';
        this.pageSize = 10;
        this.readonly = false;
        this.disabled = false;
        this.typeToSearchText = 'Gõ để tìm kiếm';
        this.searchable = true;
        this.lazyload = false;
        this.emitNullOnDestroy = false;
        this.totalItems = 0;
        this.searchItems = [];
        this.searchText$ = new BehaviorSubject(null);
        this.subscriptions = new Subscription();
        this.currentPage = 0;
        this.numberOfItemsFromEndBeforeFetchingMore = 3;
        this.fetchMore$ = new BehaviorSubject(0);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const search$ = this.searchText$
            .pipe(debounceTime(200), distinctUntilChanged(), tap((/**
         * @return {?}
         */
        () => this.loading = true)), switchMap((/**
         * @param {?} text
         * @return {?}
         */
        (text) => {
            this.currentPage = 0;
            return this.searchFunction(text, 0, this.currentPage, this.lazyload ? this.pageSize : null);
        })), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => this.rebind(response))), tap((/**
         * @return {?}
         */
        () => this.loading = false)));
        /** @type {?} */
        const fetchMore$ = this.fetchMore$
            .pipe(tap((/**
         * @return {?}
         */
        () => this.loading = true)), switchMap((/**
         * @param {?} pageIndex
         * @return {?}
         */
        (pageIndex) => {
            return this.searchFunction(this.searchText$.getValue(), 0, pageIndex, this.lazyload ? this.pageSize : null);
        })), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => this.append(response))), tap((/**
         * @return {?}
         */
        () => this.loading = false)));
        this.subscriptions.add(fetchMore$.subscribe());
        if (this.beforeSearch) {
            this.subscriptions.add(this.beforeSearch.pipe(concat(search$)).subscribe());
        }
        else {
            this.subscriptions.add(search$.subscribe());
        }
        if (this.afterSearch) {
            /** @type {?} */
            const afterSearchSubscription = this.afterSearch.pipe(skip(1)).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            response => this.rebind(response)));
            this.subscriptions.add(afterSearchSubscription);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        if (this.emitNullOnDestroy === true)
            this.change.emit(null);
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.searchText$.next(null);
    }
    /**
     * @param {?} lastIndex
     * @return {?}
     */
    scroll(lastIndex) {
        if (this.loading) {
            return;
        }
        if (lastIndex + this.numberOfItemsFromEndBeforeFetchingMore >= this.searchItems.length) {
            this.fetchMore();
        }
    }
    /**
     * @return {?}
     */
    fetchMore() {
        this.currentPage++;
        this.fetchMore$.next(this.currentPage);
    }
    /**
     * @return {?}
     */
    clear() {
        if (this.lazyload) {
            this.currentPage = 0;
            this.fetchMore$.next(this.currentPage);
        }
    }
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    rebind(response) {
        this.searchItems = response.items;
        this.totalItems = response.totalRecords;
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    append(response) {
        this.searchItems = this.searchItems.concat(response.items);
        this.totalItems = response.totalRecords;
        this.changeDetectorRef.markForCheck();
    }
}
DropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-dropdown',
                template: "<katana-form-director [title]=\"title\" [direction]=\"direction\" [alignVertical]=\"alignVertical\" [description]=\"description\"\r\n  [extraLabelItem]=\"extraLabelItem\">\r\n  <ng-container *ngIf=\"readonly\">\r\n    {{model.name}}\r\n  </ng-container>\r\n  <ng-container *ngIf=\"!readonly\">\r\n    <ng-container>\r\n      <ng-select [attr.name]=\"controlName\" [attr.validation-name]=\"validationName\"\r\n        [attr.scope]=\"validationScope ? validationScope : null\" [multiple]=\"multiple\" [bindLabel]=\"bindLabel\"\r\n        [bindValue]=\"bindValue\" [typeToSearchText]=\"typeToSearchText\" [closeOnSelect]=\"closeOnSelect\"\r\n        [loadingText]=\"loadingText\" [notFoundText]=\"notFoundText\" [placeholder]=\"placeholder\"\r\n        [dropdownPosition]=\"dropdownPosition\" [ngModel]=\"model\" (ngModelChange)=\"change.emit($event)\"\r\n        [items]=\"searchItems\" [loading]=\"loading\" [markFirst]=\"markFirst\" [searchable]=\"searchable\"\r\n        [typeahead]=\"searchText$\" [groupBy]=\"groupBy\" [disabled]=\"disabled\" (clear)=\"clear()\" (blur)=\"onBlur()\"\r\n        [virtualScroll]=\"lazyload\" (scroll)=\"lazyload ? scroll($event) : 0\" (scrollToEnd)=\"lazyload ? fetchMore() : 0\">\r\n        <ng-template ng-multi-label-tmp let-items=\"items\" let-clear=\"clear\">\r\n          <div class=\"ng-value-inside\">\r\n            <div class=\"ng-value\" style=\"float:left\" *ngFor=\"let item of items\">\r\n              <span class=\"ng-value-label\"> {{item.name}}</span>\r\n              <span class=\"ng-value-icon right\" (click)=\"clear(item)\" aria-hidden=\"true\">\u00D7</span>\r\n            </div>\r\n          </div>\r\n          <span class=\"icon-show-more\" *ngIf=\"items.length > 1\">...</span>\r\n        </ng-template>\r\n        <ng-template ng-header-tmp>\r\n          <small class=\"form-text text-muted\">Hi\u1EC3n th\u1ECB {{searchItems.length}} / {{totalItems}}</small>\r\n        </ng-template>\r\n        <ng-template ng-footer-tmp>\r\n          <i *ngIf=\"loading\" class=\"fa fa-spin fa-spinner\"></i>\r\n          <ng-template *ngIf=\"footerTemplate\" [ngTemplateOutlet]=\"footerTemplate\"></ng-template>\r\n        </ng-template>\r\n        <ng-template ng-option-tmp let-index=\"index\" let-item=\"item\">\r\n          <span [title]=\"item.name\" class=\"ng-option-label\">{{item.name}}</span>\r\n        </ng-template>\r\n        <ng-template ng-optgroup-tmp let-dropdownItem=\"item\" let-index=\"index\" *ngIf=\"groupTemplate\">\r\n          <ng-template [ngTemplateOutlet]=\"groupTemplate\" [ngTemplateOutletContext]=\"{item: dropdownItem}\">\r\n          </ng-template>\r\n        </ng-template>\r\n      </ng-select>\r\n    </ng-container>\r\n  </ng-container>\r\n</katana-form-director>",
                styles: [".ng-select{border:0;min-height:0;border-radius:0}.ng-select .ng-dropdown-panel{z-index:10}.ng-select.ng-select-opened>.ng-select-container{min-height:36px;border-radius:0;background:#fafafa;border:1px solid #dee2e6;box-shadow:0 3px 8px rgba(10,3,0,.055)}.ng-select.ng-select-opened>.ng-select-container .ng-arrow{border-color:#338bf8 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-top-color:transparent transparent #338bf8}.ng-select.ng-select-opened>.ng-select-container+.ng-dropdown-panel{opacity:1}.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{box-shadow:0 3px 8px rgba(10,3,0,.075);background:#fafafa}.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}.ng-select .ng-has-value .ng-placeholder{display:none}.ng-select .ng-select-container{background-color:#fff;border:1px solid #e6e6e6;border-radius:1px!important;min-height:33px!important;height:33px!important;align-items:center;transition:.2s ease-in-out;overflow:unset!important}.ng-select .ng-select-container:focus{border:1px solid #338bf8}.ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#aaa}.ng-select.ng-select-single .ng-select-container{height:36px}.ng-select.ng-select-single .ng-select-container .ng-value-container .hover-value{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0;padding-left:10px;padding-right:50px;top:5px;cursor:pointer}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{color:#555;font-size:13px;font-weight:500}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #dd8f64}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.ng-select.ng-select-multiple .ng-select-container,.ng-select.ng-select-multiple .ng-select-container:hover{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container:hover .hover-value{visibility:visible;transform:translateY(0);opacity:1}.ng-select.ng-select-multiple .ng-select-container .icon-show-more{margin-top:15px}.ng-select.ng-select-multiple .ng-select-container .hover-value{position:absolute;bottom:105%;left:0;z-index:9;transition:.4s ease-in-out;visibility:hidden;min-width:100px;white-space:normal;background:0 0;opacity:0;transform:translateY(20px)}.ng-select.ng-select-multiple .ng-select-container .hover-value .hover-value-inside{box-shadow:0 3px 8px rgba(10,3,0,.075);background-color:#fff;border:1px solid #dedede;padding:5px 5px 0}.ng-select.ng-select-multiple .ng-select-container .hover-value .hover-value-inside .ng-value{display:inline-block;margin-bottom:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:unset!important;padding-left:7px;width:80%}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value-inside{overflow:hidden;min-width:0;max-width:70%;display:flex}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:5px;background-color:#fafafa;border-radius:0;font-size:12px;font-weight:500;color:#555;border:1px solid #e1e1e1!important;display:inline-block}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9;border:1px solid #dd8f64}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:3px 3px 3px 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:0 7px;line-height:23px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{color:#262626;background-color:#e9e9e9}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #e1e1e1}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding-left:3px;cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}.ng-select .ng-clear-wrapper{color:#999;font-weight:700}.ng-select .ng-clear-wrapper .ng-clear:hover{color:#338bf8}.ng-select .ng-spinner-zone{padding-right:5px;padding-top:5px}.ng-select .ng-arrow-wrapper{padding-right:5px;width:25px}.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-select .ng-arrow-wrapper .ng-arrow:hover{border-top-color:#666}.ng-dropdown-panel{background-color:#fff;transition:.2s ease-in-out;opacity:0}.ng-dropdown-panel.ng-select-bottom{box-shadow:0 3px 8px rgba(0,0,0,.1);top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:0}.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-top{box-shadow:0 -3px 8px rgba(0,0,0,.09);bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:0}.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel .ng-dropdown-footer,.ng-dropdown-panel .ng-dropdown-header{padding:5px 7px}.ng-dropdown-panel .ng-dropdown-panel-items{margin-bottom:1px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;padding:8px 10px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-select-disabled{color:rgba(0,0,0,.54)}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#ebf5ff;color:#333}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected{color:#333;background-color:#f5faff;font-weight:500}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;padding:6px 8px;font-size:12px;color:#464646}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected{color:#333;background-color:#fafafa}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected:before{content:\"\\f00c\";font:14px/1 FontAwesome;color:#338bf8;margin-right:8px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label{font-weight:500}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#fafafa}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked:before{color:#338bf8}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#6c757d}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-right:5px;font-size:80%;font-weight:400}.ng-dropdown-panel .ng-dropdown-panel-items::-webkit-scrollbar{width:6px}.ng-dropdown-panel .ng-dropdown-panel-items::-webkit-scrollbar-track{background:rgba(115,115,115,.1)}.ng-dropdown-panel .ng-dropdown-panel-items::-webkit-scrollbar-thumb{background:rgba(120,120,120,.7);border-radius:20px}.ng-dropdown-panel .ng-dropdown-panel-items::-webkit-scrollbar-thumb:hover{background:#555}.katana-tooltip{position:relative;overflow:unset;display:inline-block}.katana-tooltip span{white-space:pre-wrap;word-break:break-word}.katana-tooltip.primary .tooltiptext{background-color:#338bf8;color:#fff}.katana-tooltip.primary .tooltip-top{box-shadow:none}.katana-tooltip.primary .tooltip-top:after{border-color:#338bf8 transparent transparent}.katana-tooltip.info .tooltiptext{background-color:#1d9ce7;color:#fff}.katana-tooltip.info .tooltip-top{box-shadow:none}.katana-tooltip.info .tooltip-top:after{border-color:#1d9ce7 transparent transparent}.katana-tooltip.dark .tooltiptext{background-color:#052d3e;color:#fff}.katana-tooltip.dark .tooltip-top{box-shadow:none}.katana-tooltip.dark .tooltip-top:after{border-color:#052d3e transparent transparent}.katana-tooltip .tooltiptext{word-break:break-word;max-width:180px;min-width:120px;line-height:2;word-break:break-word;visibility:hidden;position:absolute;white-space:normal;background-color:#fff;color:#052d3e;text-align:center;padding:5px;border-radius:5px;z-index:1;opacity:0;transition:.3s;font-size:12px;font-weight:500;transform:translateY(20px)}.katana-tooltip .tooltip-top{white-space:pre-wrap;word-break:break-word;box-shadow:1px 3px 9px rgba(0,0,0,.18);bottom:120%;left:50%;margin-left:-60px}.katana-tooltip .tooltip-top:after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#fff transparent transparent}.katana-tooltip:hover .tooltiptext{visibility:visible;opacity:1;transform:translateY(0)}"]
            }] }
];
/** @nocollapse */
DropdownComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
DropdownComponent.propDecorators = {
    itemTemplate: [{ type: ContentChild, args: ['itemTemplate', { static: true },] }],
    groupTemplate: [{ type: ContentChild, args: ['groupTemplate', { static: true },] }],
    footerTemplate: [{ type: ContentChild, args: ['footerTemplate', { static: true },] }],
    extraLabelItem: [{ type: ContentChild, args: [FormDirectorExtraItemDirective, { static: true },] }],
    change: [{ type: Output }],
    title: [{ type: Input }],
    description: [{ type: Input }],
    direction: [{ type: Input }],
    alignVertical: [{ type: Input }],
    multiple: [{ type: Input }],
    bindLabel: [{ type: Input }],
    bindValue: [{ type: Input }],
    model: [{ type: Input }],
    closeOnSelect: [{ type: Input }],
    dropdownPosition: [{ type: Input }],
    loading: [{ type: Input }],
    loadingText: [{ type: Input }],
    markFirst: [{ type: Input }],
    notFoundText: [{ type: Input }],
    placeholder: [{ type: Input }],
    pageSize: [{ type: Input }],
    groupBy: [{ type: Input }],
    readonly: [{ type: Input }],
    disabled: [{ type: Input }],
    typeToSearchText: [{ type: Input }],
    searchable: [{ type: Input }],
    searchFunction: [{ type: Input }],
    lazyload: [{ type: Input }],
    beforeSearch: [{ type: Input }],
    afterSearch: [{ type: Input }],
    validationName: [{ type: Input }],
    validationScope: [{ type: Input }],
    controlName: [{ type: Input }],
    emitNullOnDestroy: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DropdownComponent.prototype.itemTemplate;
    /** @type {?} */
    DropdownComponent.prototype.groupTemplate;
    /** @type {?} */
    DropdownComponent.prototype.footerTemplate;
    /** @type {?} */
    DropdownComponent.prototype.extraLabelItem;
    /** @type {?} */
    DropdownComponent.prototype.change;
    /** @type {?} */
    DropdownComponent.prototype.title;
    /** @type {?} */
    DropdownComponent.prototype.description;
    /** @type {?} */
    DropdownComponent.prototype.direction;
    /** @type {?} */
    DropdownComponent.prototype.alignVertical;
    /** @type {?} */
    DropdownComponent.prototype.multiple;
    /** @type {?} */
    DropdownComponent.prototype.bindLabel;
    /** @type {?} */
    DropdownComponent.prototype.bindValue;
    /** @type {?} */
    DropdownComponent.prototype.model;
    /** @type {?} */
    DropdownComponent.prototype.closeOnSelect;
    /** @type {?} */
    DropdownComponent.prototype.dropdownPosition;
    /** @type {?} */
    DropdownComponent.prototype.loading;
    /** @type {?} */
    DropdownComponent.prototype.loadingText;
    /** @type {?} */
    DropdownComponent.prototype.markFirst;
    /** @type {?} */
    DropdownComponent.prototype.notFoundText;
    /** @type {?} */
    DropdownComponent.prototype.placeholder;
    /** @type {?} */
    DropdownComponent.prototype.pageSize;
    /** @type {?} */
    DropdownComponent.prototype.groupBy;
    /** @type {?} */
    DropdownComponent.prototype.readonly;
    /** @type {?} */
    DropdownComponent.prototype.disabled;
    /** @type {?} */
    DropdownComponent.prototype.typeToSearchText;
    /** @type {?} */
    DropdownComponent.prototype.searchable;
    /** @type {?} */
    DropdownComponent.prototype.searchFunction;
    /** @type {?} */
    DropdownComponent.prototype.lazyload;
    /** @type {?} */
    DropdownComponent.prototype.beforeSearch;
    /** @type {?} */
    DropdownComponent.prototype.afterSearch;
    /** @type {?} */
    DropdownComponent.prototype.validationName;
    /** @type {?} */
    DropdownComponent.prototype.validationScope;
    /** @type {?} */
    DropdownComponent.prototype.controlName;
    /** @type {?} */
    DropdownComponent.prototype.emitNullOnDestroy;
    /** @type {?} */
    DropdownComponent.prototype.totalItems;
    /** @type {?} */
    DropdownComponent.prototype.searchItems;
    /** @type {?} */
    DropdownComponent.prototype.searchText$;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype.currentPage;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype.numberOfItemsFromEndBeforeFetchingMore;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype.fetchMore$;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hJLE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQVE1RixNQUFNLE9BQU8saUJBQWlCOzs7O0lBMkMxQixZQUNZLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBdkMvQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUdsQyxjQUFTLEdBQThCLFVBQVUsQ0FBQztRQUNsRCxrQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBSTFCLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLHFCQUFnQixHQUFXLE1BQU0sQ0FBQztRQUVsQyxnQkFBVyxHQUFXLGFBQWEsQ0FBQztRQUVwQyxpQkFBWSxHQUFXLGdCQUFnQixDQUFDO1FBQ3hDLGdCQUFXLEdBQVcsZ0JBQWdCLENBQUM7UUFDdkMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUV0QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIscUJBQWdCLEdBQVcsZ0JBQWdCLENBQUM7UUFDNUMsZUFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBTWpDLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUNyQyxlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVUsRUFBRSxDQUFDO1FBQ3hCLGdCQUFXLEdBQUcsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLENBQUM7UUFDL0Msa0JBQWEsR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRCxnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QiwyQ0FBc0MsR0FBVyxDQUFDLENBQUM7UUFDbkQsZUFBVSxHQUE0QixJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUlqRSxDQUFDOzs7O0lBRUwsUUFBUTs7Y0FDRSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVc7YUFDM0IsSUFBSSxDQUNELFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsb0JBQW9CLEVBQUUsRUFDdEIsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUMsRUFDOUIsU0FBUzs7OztRQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDckIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRyxDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUMsRUFDN0MsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUMsQ0FDbEM7O2NBRUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVO2FBQzdCLElBQUksQ0FDRCxHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksRUFBQyxFQUM5QixTQUFTOzs7O1FBQUMsQ0FBQyxTQUFpQixFQUFFLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoSCxDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUMsRUFDN0MsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUMsQ0FDbEM7UUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUUvQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUMvRTthQUFNO1lBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDL0M7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7O2tCQUNaLHVCQUF1QixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUM7WUFDM0csSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUNuRDtJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxJQUFJO1lBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFTSxNQUFNO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsU0FBaUI7UUFDM0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsT0FBTztTQUNWO1FBRUQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLHNDQUFzQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3BGLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQjtJQUNMLENBQUM7Ozs7SUFFTSxTQUFTO1FBQ1osSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBRU0sS0FBSztRQUNSLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMxQztJQUNMLENBQUM7Ozs7OztJQUVPLE1BQU0sQ0FBQyxRQUFhO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDeEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFDLENBQUM7Ozs7OztJQUVPLE1BQU0sQ0FBQyxRQUFhO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUN4QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7O1lBcElKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiw0c0ZBQXdDOzthQUUzQzs7OztZQVQ4RixpQkFBaUI7OzsyQkFZM0csWUFBWSxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NEJBQzdDLFlBQVksU0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzZCQUM5QyxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzZCQUMvQyxZQUFZLFNBQUMsOEJBQThCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3FCQUM3RCxNQUFNO29CQUNOLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7b0JBQ0wsS0FBSzs0QkFDTCxLQUFLOytCQUNMLEtBQUs7c0JBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7K0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzBCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs7OztJQWpDTix5Q0FBc0Y7O0lBQ3RGLDBDQUF3Rjs7SUFDeEYsMkNBQTBGOztJQUMxRiwyQ0FBK0c7O0lBQy9HLG1DQUFrRDs7SUFDbEQsa0NBQThCOztJQUM5Qix3Q0FBb0M7O0lBQ3BDLHNDQUFrRTs7SUFDbEUsMENBQThDOztJQUM5QyxxQ0FBMEM7O0lBQzFDLHNDQUFrQzs7SUFDbEMsc0NBQWtDOztJQUNsQyxrQ0FBMkI7O0lBQzNCLDBDQUE4Qzs7SUFDOUMsNkNBQWtEOztJQUNsRCxvQ0FBaUM7O0lBQ2pDLHdDQUFvRDs7SUFDcEQsc0NBQW1DOztJQUNuQyx5Q0FBd0Q7O0lBQ3hELHdDQUF1RDs7SUFDdkQscUNBQXNDOztJQUN0QyxvQ0FBZ0M7O0lBQ2hDLHFDQUEwQzs7SUFDMUMscUNBQTBDOztJQUMxQyw2Q0FBNEQ7O0lBQzVELHVDQUEyQzs7SUFDM0MsMkNBQTZKOztJQUM3SixxQ0FBMEM7O0lBQzFDLHlDQUE4Qzs7SUFDOUMsd0NBQTZDOztJQUM3QywyQ0FBdUM7O0lBQ3ZDLDRDQUF3Qzs7SUFDeEMsd0NBQW9DOztJQUNwQyw4Q0FBNEM7O0lBQzVDLHVDQUE4Qjs7SUFDOUIsd0NBQStCOztJQUMvQix3Q0FBdUQ7Ozs7O0lBQ3ZELDBDQUF5RDs7Ozs7SUFDekQsd0NBQWdDOzs7OztJQUNoQyxtRUFBMkQ7Ozs7O0lBQzNELHVDQUFxRTs7Ozs7SUFHakUsOENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgQ29udGVudENoaWxkLCBUZW1wbGF0ZVJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YXAsIHN3aXRjaE1hcCwgbWFwLCBjb25jYXQsIHNraXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEZvcm1EaXJlY3RvckV4dHJhSXRlbURpcmVjdGl2ZSB9IGZyb20gJy4uL2Zvcm0vZm9ybS1kaXJlY3Rvci1leHRyYS1pdGVtLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAna2F0YW5hLWRyb3Bkb3duJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9kcm9wZG93bi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBAQ29udGVudENoaWxkKCdpdGVtVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgQENvbnRlbnRDaGlsZCgnZ3JvdXBUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBncm91cFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgQENvbnRlbnRDaGlsZCgnZm9vdGVyVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBAQ29udGVudENoaWxkKEZvcm1EaXJlY3RvckV4dHJhSXRlbURpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgZXh0cmFMYWJlbEl0ZW06IEZvcm1EaXJlY3RvckV4dHJhSXRlbURpcmVjdGl2ZTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcHVibGljIGRpcmVjdGlvbjogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICd2ZXJ0aWNhbCc7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgYWxpZ25WZXJ0aWNhbDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBiaW5kTGFiZWw6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBiaW5kVmFsdWU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBtb2RlbDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCkgcHVibGljIGRyb3Bkb3duUG9zaXRpb246IHN0cmluZyA9ICdhdXRvJztcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgcHVibGljIGxvYWRpbmdUZXh0OiBzdHJpbmcgPSAnxJBhbmcgdOG6o2kuLi4nO1xyXG4gICAgQElucHV0KCkgcHVibGljIG1hcmtGaXJzdDogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBub3RGb3VuZFRleHQ6IHN0cmluZyA9ICdLaMO0bmcgdMOsbSB0aOG6pXknO1xyXG4gICAgQElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnQ2jhu41uIHRow7RuZyB0aW4nO1xyXG4gICAgQElucHV0KCkgcHVibGljIHBhZ2VTaXplOiBudW1iZXIgPSAxMDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cEJ5OiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcHVibGljIHR5cGVUb1NlYXJjaFRleHQ6IHN0cmluZyA9ICdHw7UgxJHhu4MgdMOsbSBraeG6v20nO1xyXG4gICAgQElucHV0KCkgcHVibGljIHNlYXJjaGFibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCkgcHVibGljIHNlYXJjaEZ1bmN0aW9uOiAoc2VhcmNoVGV4dDogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBwYWdlSW5kZXg6IG51bWJlciwgcGFnZVNpemU6IG51bWJlcikgPT4gT2JzZXJ2YWJsZTx7IGl0ZW1zOiBhbnlbXSwgdG90YWxJdGVtczogbnVtYmVyIH0+O1xyXG4gICAgQElucHV0KCkgcHVibGljIGxhenlsb2FkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgYmVmb3JlU2VhcmNoOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgYWZ0ZXJTZWFyY2g6IE9ic2VydmFibGU8YW55PjtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWxpZGF0aW9uTmFtZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcHVibGljIHZhbGlkYXRpb25TY29wZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcHVibGljIGNvbnRyb2xOYW1lOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBlbWl0TnVsbE9uRGVzdHJveTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIHRvdGFsSXRlbXM6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc2VhcmNoSXRlbXM6IGFueVtdID0gW107XHJcbiAgICBwdWJsaWMgc2VhcmNoVGV4dCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuICAgIHByaXZhdGUgY3VycmVudFBhZ2U6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIG51bWJlck9mSXRlbXNGcm9tRW5kQmVmb3JlRmV0Y2hpbmdNb3JlOiBudW1iZXIgPSAzO1xyXG4gICAgcHJpdmF0ZSBmZXRjaE1vcmUkOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoMCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoJCA9IHRoaXMuc2VhcmNoVGV4dCRcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBkZWJvdW5jZVRpbWUoMjAwKSxcclxuICAgICAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgICAgICAgICB0YXAoKCkgPT4gdGhpcy5sb2FkaW5nID0gdHJ1ZSksXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoKHRleHQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlYXJjaEZ1bmN0aW9uKHRleHQsIDAsIHRoaXMuY3VycmVudFBhZ2UsIHRoaXMubGF6eWxvYWQgPyB0aGlzLnBhZ2VTaXplIDogbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIG1hcCgocmVzcG9uc2U6IGFueSkgPT4gdGhpcy5yZWJpbmQocmVzcG9uc2UpKSxcclxuICAgICAgICAgICAgICAgIHRhcCgoKSA9PiB0aGlzLmxvYWRpbmcgPSBmYWxzZSksXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZldGNoTW9yZSQgPSB0aGlzLmZldGNoTW9yZSRcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICB0YXAoKCkgPT4gdGhpcy5sb2FkaW5nID0gdHJ1ZSksXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoKHBhZ2VJbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoRnVuY3Rpb24odGhpcy5zZWFyY2hUZXh0JC5nZXRWYWx1ZSgpLCAwLCBwYWdlSW5kZXgsIHRoaXMubGF6eWxvYWQgPyB0aGlzLnBhZ2VTaXplIDogbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIG1hcCgocmVzcG9uc2U6IGFueSkgPT4gdGhpcy5hcHBlbmQocmVzcG9uc2UpKSxcclxuICAgICAgICAgICAgICAgIHRhcCgoKSA9PiB0aGlzLmxvYWRpbmcgPSBmYWxzZSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChmZXRjaE1vcmUkLnN1YnNjcmliZSgpKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYmVmb3JlU2VhcmNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5iZWZvcmVTZWFyY2gucGlwZShjb25jYXQoc2VhcmNoJCkpLnN1YnNjcmliZSgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKHNlYXJjaCQuc3Vic2NyaWJlKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWZ0ZXJTZWFyY2gpIHtcclxuICAgICAgICAgICAgY29uc3QgYWZ0ZXJTZWFyY2hTdWJzY3JpcHRpb24gPSB0aGlzLmFmdGVyU2VhcmNoLnBpcGUoc2tpcCgxKSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHRoaXMucmViaW5kKHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoYWZ0ZXJTZWFyY2hTdWJzY3JpcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICBpZiAodGhpcy5lbWl0TnVsbE9uRGVzdHJveSA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdChudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25CbHVyKCkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoVGV4dCQubmV4dChudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2Nyb2xsKGxhc3RJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGFzdEluZGV4ICsgdGhpcy5udW1iZXJPZkl0ZW1zRnJvbUVuZEJlZm9yZUZldGNoaW5nTW9yZSA+PSB0aGlzLnNlYXJjaEl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmZldGNoTW9yZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmV0Y2hNb3JlKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UrKztcclxuICAgICAgICB0aGlzLmZldGNoTW9yZSQubmV4dCh0aGlzLmN1cnJlbnRQYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGF6eWxvYWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hNb3JlJC5uZXh0KHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYmluZChyZXNwb25zZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hJdGVtcyA9IHJlc3BvbnNlLml0ZW1zO1xyXG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IHJlc3BvbnNlLnRvdGFsUmVjb3JkcztcclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXBwZW5kKHJlc3BvbnNlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaEl0ZW1zID0gdGhpcy5zZWFyY2hJdGVtcy5jb25jYXQocmVzcG9uc2UuaXRlbXMpO1xyXG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IHJlc3BvbnNlLnRvdGFsUmVjb3JkcztcclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==