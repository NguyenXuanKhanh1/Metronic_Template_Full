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
                selector: 'c-dropdown',
                template: "<c-form-director [title]=\"title\" [direction]=\"direction\" [alignVertical]=\"alignVertical\" [description]=\"description\"\r\n  [extraLabelItem]=\"extraLabelItem\">\r\n  <ng-container *ngIf=\"readonly\">\r\n    {{model.name}}\r\n  </ng-container>\r\n  <ng-container *ngIf=\"!readonly\">\r\n    <ng-container>\r\n      <ng-select [attr.name]=\"controlName\" [attr.validation-name]=\"validationName\"\r\n        [attr.scope]=\"validationScope ? validationScope : null\" [multiple]=\"multiple\" [bindLabel]=\"bindLabel\"\r\n        [bindValue]=\"bindValue\" [typeToSearchText]=\"typeToSearchText\" [closeOnSelect]=\"closeOnSelect\"\r\n        [loadingText]=\"loadingText\" [notFoundText]=\"notFoundText\" [placeholder]=\"placeholder\"\r\n        [dropdownPosition]=\"dropdownPosition\" [ngModel]=\"model\" (ngModelChange)=\"change.emit($event)\"\r\n        [items]=\"searchItems\" [loading]=\"loading\" [markFirst]=\"markFirst\" [searchable]=\"searchable\"\r\n        [typeahead]=\"searchText$\" [groupBy]=\"groupBy\" [disabled]=\"disabled\" (clear)=\"clear()\" (blur)=\"onBlur()\"\r\n        [virtualScroll]=\"lazyload\" (scroll)=\"lazyload ? scroll($event) : 0\" (scrollToEnd)=\"lazyload ? fetchMore() : 0\">\r\n        <ng-template ng-multi-label-tmp let-items=\"items\" let-clear=\"clear\">\r\n          <div class=\"ng-value-inside\">\r\n            <div class=\"ng-value\" style=\"float:left\" *ngFor=\"let item of items\">\r\n              <span class=\"ng-value-label\"> {{item.name}}</span>\r\n              <span class=\"ng-value-icon right\" (click)=\"clear(item)\" aria-hidden=\"true\">\u00D7</span>\r\n            </div>\r\n          </div>\r\n          <span class=\"icon-show-more\" *ngIf=\"items.length > 1\">...</span>\r\n        </ng-template>\r\n        <ng-template ng-header-tmp>\r\n          <small class=\"form-text text-muted\">Hi\u1EC3n th\u1ECB {{searchItems.length}} / {{totalItems}}</small>\r\n        </ng-template>\r\n        <ng-template ng-footer-tmp>\r\n          <i *ngIf=\"loading\" class=\"fa fa-spin fa-spinner\"></i>\r\n          <ng-template *ngIf=\"footerTemplate\" [ngTemplateOutlet]=\"footerTemplate\"></ng-template>\r\n        </ng-template>\r\n        <ng-template ng-option-tmp let-index=\"index\" let-item=\"item\">\r\n          <span [title]=\"item.name\" class=\"ng-option-label\">{{item.name}}</span>\r\n        </ng-template>\r\n        <ng-template ng-optgroup-tmp let-dropdownItem=\"item\" let-index=\"index\" *ngIf=\"groupTemplate\">\r\n          <ng-template [ngTemplateOutlet]=\"groupTemplate\" [ngTemplateOutletContext]=\"{item: dropdownItem}\">\r\n          </ng-template>\r\n        </ng-template>\r\n      </ng-select>\r\n    </ng-container>\r\n  </ng-container>\r\n</c-form-director>",
                styles: ["@charset \"UTF-8\";.ng-select{border:0;min-height:0;border-radius:0}.ng-select .ng-dropdown-panel{z-index:10}.ng-select.ng-select-opened>.ng-select-container{min-height:36px;border-radius:0;background:#fafafa;border:1px solid #dee2e6;box-shadow:0 3px 8px rgba(10,3,0,.055)}.ng-select.ng-select-opened>.ng-select-container .ng-arrow{border-color:#368ee0 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-top-color:transparent transparent #368ee0}.ng-select.ng-select-opened>.ng-select-container+.ng-dropdown-panel{opacity:1}.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{box-shadow:0 3px 8px rgba(10,3,0,.075);background:#fafafa}.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}.ng-select .ng-has-value .ng-placeholder{display:none}.ng-select .ng-select-container{background-color:#fff;border:1px solid #e6e6e6;border-radius:1px!important;min-height:33px!important;height:33px!important;align-items:center;transition:.2s ease-in-out;overflow:unset!important}.ng-select .ng-select-container:focus{border:1px solid #368ee0}.ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#aaa}.ng-select.ng-select-single .ng-select-container{height:36px}.ng-select.ng-select-single .ng-select-container .ng-value-container .hover-value{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0;padding-left:10px;padding-right:50px;top:5px;cursor:pointer}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{color:#555;font-size:13px;font-weight:500}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #dd8f64}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.ng-select.ng-select-multiple .ng-select-container,.ng-select.ng-select-multiple .ng-select-container:hover{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container:hover .hover-value{visibility:visible;transform:translateY(0);opacity:1}.ng-select.ng-select-multiple .ng-select-container .icon-show-more{margin-top:15px}.ng-select.ng-select-multiple .ng-select-container .hover-value{position:absolute;bottom:105%;left:0;z-index:9;transition:.4s ease-in-out;visibility:hidden;min-width:100px;white-space:normal;background:0 0;opacity:0;transform:translateY(20px)}.ng-select.ng-select-multiple .ng-select-container .hover-value .hover-value-inside{box-shadow:0 3px 8px rgba(10,3,0,.075);background-color:#fff;border:1px solid #dedede;padding:5px 5px 0}.ng-select.ng-select-multiple .ng-select-container .hover-value .hover-value-inside .ng-value{display:inline-block;margin-bottom:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:unset!important;padding-left:7px;width:80%}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value-inside{overflow:hidden;min-width:0;max-width:70%;display:flex}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:5px;background-color:#fafafa;border-radius:0;font-size:12px;font-weight:500;color:#555;border:1px solid #e1e1e1!important;display:inline-block}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9;border:1px solid #dd8f64}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:3px 3px 3px 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:0 7px;line-height:23px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{color:#262626;background-color:#e9e9e9}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #e1e1e1}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding-left:3px;cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}.ng-select .ng-clear-wrapper{color:#999;font-weight:700}.ng-select .ng-clear-wrapper .ng-clear:hover{color:#368ee0}.ng-select .ng-spinner-zone{padding-right:5px;padding-top:5px}.ng-select .ng-arrow-wrapper{padding-right:5px;width:25px}.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-select .ng-arrow-wrapper .ng-arrow:hover{border-top-color:#666}.ng-dropdown-panel{background-color:#fff;transition:.2s ease-in-out;opacity:0}.ng-dropdown-panel.ng-select-bottom{box-shadow:0 3px 8px rgba(0,0,0,.1);top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:0}.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-top{box-shadow:0 -3px 8px rgba(0,0,0,.09);bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:0}.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel .ng-dropdown-footer,.ng-dropdown-panel .ng-dropdown-header{padding:5px 7px}.ng-dropdown-panel .ng-dropdown-panel-items{margin-bottom:1px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;padding:8px 10px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-select-disabled{color:rgba(0,0,0,.54)}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#ebf5ff;color:#333}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected{color:#333;background-color:#f5faff;font-weight:500}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;padding:6px 8px;font-size:12px;color:#464646}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected{color:#333;background-color:#fafafa}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected:before{content:\"\uF00C\";font:14px/1 FontAwesome;color:#368ee0;margin-right:8px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label{font-weight:500}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#fafafa}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked:before{color:#368ee0}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#6c757d}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-right:5px;font-size:80%;font-weight:400}.ng-dropdown-panel .ng-dropdown-panel-items::-webkit-scrollbar{width:6px}.ng-dropdown-panel .ng-dropdown-panel-items::-webkit-scrollbar-track{background:rgba(115,115,115,.1)}.ng-dropdown-panel .ng-dropdown-panel-items::-webkit-scrollbar-thumb{background:rgba(120,120,120,.7);border-radius:20px}.ng-dropdown-panel .ng-dropdown-panel-items::-webkit-scrollbar-thumb:hover{background:#555}.c-tooltip{position:relative;overflow:unset;display:inline-block}.c-tooltip span{white-space:pre-wrap;word-break:break-word}.c-tooltip.primary .tooltiptext{background-color:#368ee0;color:#fff}.c-tooltip.primary .tooltip-top{box-shadow:none}.c-tooltip.primary .tooltip-top:after{border-color:#368ee0 transparent transparent}.c-tooltip.info .tooltiptext{background-color:#1d9ce7;color:#fff}.c-tooltip.info .tooltip-top{box-shadow:none}.c-tooltip.info .tooltip-top:after{border-color:#1d9ce7 transparent transparent}.c-tooltip.dark .tooltiptext{background-color:#052d3e;color:#fff}.c-tooltip.dark .tooltip-top{box-shadow:none}.c-tooltip.dark .tooltip-top:after{border-color:#052d3e transparent transparent}.c-tooltip .tooltiptext{word-break:break-word;max-width:180px;min-width:120px;line-height:2;word-break:break-word;visibility:hidden;position:absolute;white-space:normal;background-color:#fff;color:#052d3e;text-align:center;padding:5px;border-radius:5px;z-index:1;opacity:0;transition:.3s;font-size:12px;font-weight:500;transform:translateY(20px)}.c-tooltip .tooltip-top{white-space:pre-wrap;word-break:break-word;box-shadow:1px 3px 9px rgba(0,0,0,.18);bottom:120%;left:50%;margin-left:-60px}.c-tooltip .tooltip-top:after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#fff transparent transparent}.c-tooltip:hover .tooltiptext{visibility:visible;opacity:1;transform:translateY(0)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hJLE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQVE1RixNQUFNLE9BQU8saUJBQWlCOzs7O0lBMkMxQixZQUNZLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBdkMvQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUdsQyxjQUFTLEdBQThCLFVBQVUsQ0FBQztRQUNsRCxrQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBSTFCLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLHFCQUFnQixHQUFXLE1BQU0sQ0FBQztRQUVsQyxnQkFBVyxHQUFXLGFBQWEsQ0FBQztRQUVwQyxpQkFBWSxHQUFXLGdCQUFnQixDQUFDO1FBQ3hDLGdCQUFXLEdBQVcsZ0JBQWdCLENBQUM7UUFDdkMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUV0QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIs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Q04seUNBQXNGOztJQUN0RiwwQ0FBd0Y7O0lBQ3hGLDJDQUEwRjs7SUFDMUYsMkNBQStHOztJQUMvRyxtQ0FBa0Q7O0lBQ2xELGtDQUE4Qjs7SUFDOUIsd0NBQW9DOztJQUNwQyxzQ0FBa0U7O0lBQ2xFLDBDQUE4Qzs7SUFDOUMscUNBQTBDOztJQUMxQyxzQ0FBa0M7O0lBQ2xDLHNDQUFrQzs7SUFDbEMsa0NBQTJCOztJQUMzQiwwQ0FBOEM7O0lBQzlDLDZDQUFrRDs7SUFDbEQsb0NBQWlDOztJQUNqQyx3Q0FBb0Q7O0lBQ3BELHNDQUFtQzs7SUFDbkMseUNBQXdEOztJQUN4RCx3Q0FBdUQ7O0lBQ3ZELHFDQUFzQzs7SUFDdEMsb0NBQWdDOztJQUNoQyxxQ0FBMEM7O0lBQzFDLHFDQUEwQzs7SUFDMUMsNkNBQTREOztJQUM1RCx1Q0FBMkM7O0lBQzNDLDJDQUE2Sjs7SUFDN0oscUNBQTBDOztJQUMxQyx5Q0FBOEM7O0lBQzlDLHdDQUE2Qzs7SUFDN0MsMkNBQXVDOztJQUN2Qyw0Q0FBd0M7O0lBQ3hDLHdDQUFvQzs7SUFDcEMsOENBQTRDOztJQUM1Qyx1Q0FBOEI7O0lBQzlCLHdDQUErQjs7SUFDL0Isd0NBQXVEOzs7OztJQUN2RCwwQ0FBeUQ7Ozs7O0lBQ3pELHdDQUFnQzs7Ozs7SUFDaEMsbUVBQTJEOzs7OztJQUMzRCx1Q0FBcUU7Ozs7O0lBR2pFLDhDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRlbnRDaGlsZCwgVGVtcGxhdGVSZWYsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFwLCBzd2l0Y2hNYXAsIG1hcCwgY29uY2F0LCBza2lwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBGb3JtRGlyZWN0b3JFeHRyYUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuLi9mb3JtL2Zvcm0tZGlyZWN0b3ItZXh0cmEtaXRlbS5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2MtZHJvcGRvd24nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIEBDb250ZW50Q2hpbGQoJ2l0ZW1UZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBpdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBAQ29udGVudENoaWxkKCdncm91cFRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIGdyb3VwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBAQ29udGVudENoaWxkKCdmb290ZXJUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBmb290ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIEBDb250ZW50Q2hpbGQoRm9ybURpcmVjdG9yRXh0cmFJdGVtRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBleHRyYUxhYmVsSXRlbTogRm9ybURpcmVjdG9yRXh0cmFJdGVtRGlyZWN0aXZlO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ3ZlcnRpY2FsJztcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBhbGlnblZlcnRpY2FsOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBtdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcHVibGljIGJpbmRMYWJlbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcHVibGljIGJpbmRWYWx1ZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcHVibGljIG1vZGVsOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY2xvc2VPblNlbGVjdDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZHJvcGRvd25Qb3NpdGlvbjogc3RyaW5nID0gJ2F1dG8nO1xyXG4gICAgQElucHV0KCkgcHVibGljIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZ1RleHQ6IHN0cmluZyA9ICfEkGFuZyB04bqjaS4uLic7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbWFya0ZpcnN0OiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgcHVibGljIG5vdEZvdW5kVGV4dDogc3RyaW5nID0gJ0tow7RuZyB0w6xtIHRo4bqleSc7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdDaOG7jW4gdGjDtG5nIHRpbic7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcGFnZVNpemU6IG51bWJlciA9IDEwO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwQnk6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdHlwZVRvU2VhcmNoVGV4dDogc3RyaW5nID0gJ0fDtSDEkeG7gyB0w6xtIGtp4bq/bSc7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc2VhcmNoYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc2VhcmNoRnVuY3Rpb246IChzZWFyY2hUZXh0OiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIHBhZ2VJbmRleDogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyKSA9PiBPYnNlcnZhYmxlPHsgaXRlbXM6IGFueVtdLCB0b3RhbEl0ZW1zOiBudW1iZXIgfT47XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbGF6eWxvYWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBiZWZvcmVTZWFyY2g6IE9ic2VydmFibGU8YW55PjtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBhZnRlclNlYXJjaDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgQElucHV0KCkgcHVibGljIHZhbGlkYXRpb25OYW1lOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdmFsaWRhdGlvblNjb3BlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY29udHJvbE5hbWU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGVtaXROdWxsT25EZXN0cm95OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgdG90YWxJdGVtczogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBzZWFyY2hJdGVtczogYW55W10gPSBbXTtcclxuICAgIHB1YmxpYyBzZWFyY2hUZXh0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcclxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UGFnZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgbnVtYmVyT2ZJdGVtc0Zyb21FbmRCZWZvcmVGZXRjaGluZ01vcmU6IG51bWJlciA9IDM7XHJcbiAgICBwcml2YXRlIGZldGNoTW9yZSQ6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgwKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzZWFyY2gkID0gdGhpcy5zZWFyY2hUZXh0JFxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIGRlYm91bmNlVGltZSgyMDApLFxyXG4gICAgICAgICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICAgICAgICAgIHRhcCgoKSA9PiB0aGlzLmxvYWRpbmcgPSB0cnVlKSxcclxuICAgICAgICAgICAgICAgIHN3aXRjaE1hcCgodGV4dDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoRnVuY3Rpb24odGV4dCwgMCwgdGhpcy5jdXJyZW50UGFnZSwgdGhpcy5sYXp5bG9hZCA/IHRoaXMucGFnZVNpemUgOiBudWxsKTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiB0aGlzLnJlYmluZChyZXNwb25zZSkpLFxyXG4gICAgICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMubG9hZGluZyA9IGZhbHNlKSxcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgZmV0Y2hNb3JlJCA9IHRoaXMuZmV0Y2hNb3JlJFxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIHRhcCgoKSA9PiB0aGlzLmxvYWRpbmcgPSB0cnVlKSxcclxuICAgICAgICAgICAgICAgIHN3aXRjaE1hcCgocGFnZUluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hGdW5jdGlvbih0aGlzLnNlYXJjaFRleHQkLmdldFZhbHVlKCksIDAsIHBhZ2VJbmRleCwgdGhpcy5sYXp5bG9hZCA/IHRoaXMucGFnZVNpemUgOiBudWxsKTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiB0aGlzLmFwcGVuZChyZXNwb25zZSkpLFxyXG4gICAgICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMubG9hZGluZyA9IGZhbHNlKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKGZldGNoTW9yZSQuc3Vic2NyaWJlKCkpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5iZWZvcmVTZWFyY2gpIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmJlZm9yZVNlYXJjaC5waXBlKGNvbmNhdChzZWFyY2gkKSkuc3Vic2NyaWJlKCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoc2VhcmNoJC5zdWJzY3JpYmUoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5hZnRlclNlYXJjaCkge1xyXG4gICAgICAgICAgICBjb25zdCBhZnRlclNlYXJjaFN1YnNjcmlwdGlvbiA9IHRoaXMuYWZ0ZXJTZWFyY2gucGlwZShza2lwKDEpKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4gdGhpcy5yZWJpbmQocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChhZnRlclNlYXJjaFN1YnNjcmlwdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmVtaXROdWxsT25EZXN0cm95ID09PSB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkJsdXIoKSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hUZXh0JC5uZXh0KG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzY3JvbGwobGFzdEluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsYXN0SW5kZXggKyB0aGlzLm51bWJlck9mSXRlbXNGcm9tRW5kQmVmb3JlRmV0Y2hpbmdNb3JlID49IHRoaXMuc2VhcmNoSXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hNb3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmZXRjaE1vcmUoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSsrO1xyXG4gICAgICAgIHRoaXMuZmV0Y2hNb3JlJC5uZXh0KHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpIHtcclxuICAgICAgICBpZiAodGhpcy5sYXp5bG9hZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5mZXRjaE1vcmUkLm5leHQodGhpcy5jdXJyZW50UGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmViaW5kKHJlc3BvbnNlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaEl0ZW1zID0gcmVzcG9uc2UuaXRlbXM7XHJcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gcmVzcG9uc2UudG90YWxSZWNvcmRzO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhcHBlbmQocmVzcG9uc2U6IGFueSkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoSXRlbXMgPSB0aGlzLnNlYXJjaEl0ZW1zLmNvbmNhdChyZXNwb25zZS5pdGVtcyk7XHJcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gcmVzcG9uc2UudG90YWxSZWNvcmRzO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbn1cclxuIl19