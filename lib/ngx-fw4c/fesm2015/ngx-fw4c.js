import { Injectable, ɵɵdefineInjectable, ɵɵinject, EventEmitter, RendererFactory2, Output, NgModule, Component, ViewEncapsulation, Pipe, ComponentFactoryResolver, ViewContainerRef, Input, ViewChild, TemplateRef, Directive, ContentChildren, ChangeDetectorRef, ContentChild, Inject, HostBinding, HostListener, ElementRef } from '@angular/core';
import { HttpClient, HttpResponse, HttpEventType, HttpClientModule } from '@angular/common/http';
import { Subject, of, Subscription, forkJoin, merge, BehaviorSubject } from 'rxjs';
import { debounceTime, map, take, defaultIfEmpty, finalize, tap, distinctUntilChanged, switchMap, concat, skip, filter, delay } from 'rxjs/operators';
import { isEqual } from 'lodash';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { BsModalRef, BsModalService, ComponentLoaderFactory, PositioningService, ModalModule, BsDropdownModule } from 'ngx-bootstrap';
import { CommonModule, Location, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerService, Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { BsModalService as BsModalService$1 } from 'ngx-bootstrap/modal';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, ActivatedRoute, RouterModule } from '@angular/router';
import { trigger, transition, style, animate, state, AUTO_STYLE } from '@angular/animations';
import { ImageCropperModule } from 'ngx-image-cropper';
import * as Editor from '@ckeditor/ckeditor5-build-classic';
import { NgSelectModule } from '@ng-select/ng-select';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';
import { NgStringPipesModule } from 'ngx-pipes';
import { OWL_DATE_TIME_LOCALE, OwlDateTimeIntl, OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClickOutsideModule } from 'ng-click-outside';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IValidation() { }
if (false) {
    /**
     * @return {?}
     */
    IValidation.prototype.callback = function () { };
    /**
     * @return {?}
     */
    IValidation.prototype.getErrors = function () { };
}
class SummaryError {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    SummaryError.prototype.element;
    /** @type {?} */
    SummaryError.prototype.messages;
}
class ValidationRuleResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    ValidationRuleResponse.prototype.status;
    /** @type {?} */
    ValidationRuleResponse.prototype.message;
}
/**
 * @abstract
 */
class ValidationRule {
    /**
     * @param {?=} overridenErrorMessage
     */
    constructor(overridenErrorMessage) {
        this.errorMessage = overridenErrorMessage;
    }
}
if (false) {
    /** @type {?} */
    ValidationRule.prototype.key;
    /** @type {?} */
    ValidationRule.prototype.execute;
    /** @type {?} */
    ValidationRule.prototype.errorMessage;
    /** @type {?} */
    ValidationRule.prototype.id;
    /** @type {?} */
    ValidationRule.prototype.isValid;
    /** @type {?} */
    ValidationRule.prototype.required;
}
class RequiredValidationRule extends ValidationRule {
    /**
     * @param {?=} overridenErrorMessage
     */
    constructor(overridenErrorMessage) {
        super(overridenErrorMessage);
        this.key = ValidationConstant.Required;
    }
}
class EmailValidationRule extends ValidationRule {
    /**
     * @param {?=} overridenErrorMessage
     */
    constructor(overridenErrorMessage) {
        super(overridenErrorMessage);
        this.key = ValidationConstant.Email;
    }
}
class PhoneValidationRule extends ValidationRule {
    /**
     * @param {?=} overridenErrorMessage
     */
    constructor(overridenErrorMessage) {
        super(overridenErrorMessage);
        this.key = ValidationConstant.Phone;
    }
}
class CustomValidationRule extends ValidationRule {
    /**
     * @param {?} execute
     * @param {?=} overridenErrorMessage
     */
    constructor(execute, overridenErrorMessage) {
        super(overridenErrorMessage);
        this.execute = execute;
        this.key = ValidationConstant.Custom;
    }
}
class ValidationOption {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.rules = [];
        this.dirtyCheck = true;
        this.errorMessageClass = ValidationConstant.ErrorMessageClass;
        this.errorElementClass = ValidationConstant.ErrorElementClass;
        this.successElementClass = ValidationConstant.SuccessElementClass;
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    ValidationOption.prototype.validationName;
    /** @type {?} */
    ValidationOption.prototype.rules;
    /** @type {?} */
    ValidationOption.prototype.valueResolver;
    /** @type {?} */
    ValidationOption.prototype.displayText;
    /** @type {?} */
    ValidationOption.prototype.validationId;
    /** @type {?} */
    ValidationOption.prototype.payloadRef;
    /** @type {?} */
    ValidationOption.prototype.relevantFields;
    /** @type {?} */
    ValidationOption.prototype.dynamic;
    /** @type {?} */
    ValidationOption.prototype.dirtyCheck;
    /** @type {?} */
    ValidationOption.prototype.scope;
    /** @type {?} */
    ValidationOption.prototype.errorTargetId;
    /** @type {?} */
    ValidationOption.prototype.errorMessageClass;
    /** @type {?} */
    ValidationOption.prototype.errorElementClass;
    /** @type {?} */
    ValidationOption.prototype.successElementClass;
}
class ClientValidator {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.options = [];
        this.relatedValidationProviders = [];
        this.requiredMessage = ValidationConstant.requiredMessage;
        this.invalidMessage = ValidationConstant.invalidMessage;
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    ClientValidator.prototype.formRef;
    /** @type {?} */
    ClientValidator.prototype.options;
    /** @type {?} */
    ClientValidator.prototype.payloadRef;
    /** @type {?} */
    ClientValidator.prototype.scope;
    /** @type {?} */
    ClientValidator.prototype.relatedValidationProviders;
    /** @type {?} */
    ClientValidator.prototype.requiredMessage;
    /** @type {?} */
    ClientValidator.prototype.invalidMessage;
}
class ChangedItem {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.change = false;
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    ChangedItem.prototype.id;
    /** @type {?} */
    ChangedItem.prototype.oldValue;
    /** @type {?} */
    ChangedItem.prototype.value;
    /** @type {?} */
    ChangedItem.prototype.field;
    /** @type {?} */
    ChangedItem.prototype.change;
}
class ValidationConstant {
}
ValidationConstant.Required = 'Required';
ValidationConstant.Email = 'Email';
ValidationConstant.Phone = 'Phone';
ValidationConstant.Custom = 'Custom';
ValidationConstant.ErrorMessage = 'Không hợp lệ vui lòng thử lại.';
ValidationConstant.ErrorElementClass = 'ng-invalid';
ValidationConstant.SuccessElementClass = 'ng-valid';
ValidationConstant.ErrorMessageClass = 'text-danger';
ValidationConstant.DefaultErrorStyles = 'padding:0;list-style:none;font-weight:400;font-size:13px; width: 100%';
ValidationConstant.DefaultErrorClass = 'validation-error';
ValidationConstant.AttributeName = 'validation-name';
ValidationConstant.AttributeOptionName = 'dynamic-option';
ValidationConstant.AttributeDynamicName = 'dynamic-validation';
ValidationConstant.ErrorTargetId = 'error-target-id';
ValidationConstant.DynamicErrorAttribute = 'dynamic-error-attribute';
ValidationConstant.ERROR_ELEMENT_ID = 'error-element-id';
ValidationConstant.ERROR_ITEM_ELEMENT_ID = 'error-item-element-id';
ValidationConstant.VALIDATION_ID = 'validation-id';
ValidationConstant.ARRAY_SEQUENCE_ID = 'array-sequence-id';
ValidationConstant.requiredMessage = 'là bắt buộc';
ValidationConstant.invalidMessage = 'không hợp lệ';
if (false) {
    /** @type {?} */
    ValidationConstant.Required;
    /** @type {?} */
    ValidationConstant.Email;
    /** @type {?} */
    ValidationConstant.Phone;
    /** @type {?} */
    ValidationConstant.Custom;
    /** @type {?} */
    ValidationConstant.ErrorMessage;
    /** @type {?} */
    ValidationConstant.ErrorElementClass;
    /** @type {?} */
    ValidationConstant.SuccessElementClass;
    /** @type {?} */
    ValidationConstant.ErrorMessageClass;
    /** @type {?} */
    ValidationConstant.DefaultErrorStyles;
    /** @type {?} */
    ValidationConstant.DefaultErrorClass;
    /** @type {?} */
    ValidationConstant.AttributeName;
    /** @type {?} */
    ValidationConstant.AttributeOptionName;
    /** @type {?} */
    ValidationConstant.AttributeDynamicName;
    /** @type {?} */
    ValidationConstant.ErrorTargetId;
    /** @type {?} */
    ValidationConstant.DynamicErrorAttribute;
    /** @type {?} */
    ValidationConstant.ERROR_ELEMENT_ID;
    /** @type {?} */
    ValidationConstant.ERROR_ITEM_ELEMENT_ID;
    /** @type {?} */
    ValidationConstant.VALIDATION_ID;
    /** @type {?} */
    ValidationConstant.ARRAY_SEQUENCE_ID;
    /** @type {?} */
    ValidationConstant.requiredMessage;
    /** @type {?} */
    ValidationConstant.invalidMessage;
}
;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CacheService {
    /**
     * @param {?} key
     * @param {?} data
     * @return {?}
     */
    set(key, data) {
        window.localStorage.setItem(key, JSON.stringify(data));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return JSON.parse(window.localStorage.getItem(key));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        window.localStorage.removeItem(key);
    }
}
CacheService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ CacheService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CacheService_Factory() { return new CacheService(); }, token: CacheService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SettingService {
    /**
     * @param {?} httpClient
     * @param {?} _cacheService
     */
    constructor(httpClient, _cacheService) {
        this.httpClient = httpClient;
        this._cacheService = _cacheService;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    search(request) {
        return this.httpClient.get(`v1/settings/search`, { params: (/** @type {?} */ (request)) });
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    useMock(value) {
        if (value == true || value == false) {
            this._cacheService.set('mock', value);
            return value;
        }
        /** @type {?} */
        var currentValue = (/** @type {?} */ (this._cacheService.get('mock')));
        if (!currentValue)
            return false;
        return currentValue;
    }
}
SettingService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
SettingService.ctorParameters = () => [
    { type: HttpClient },
    { type: CacheService }
];
/** @nocollapse */ SettingService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SettingService_Factory() { return new SettingService(ɵɵinject(HttpClient), ɵɵinject(CacheService)); }, token: SettingService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SettingService.prototype.httpClient;
    /**
     * @type {?}
     * @private
     */
    SettingService.prototype._cacheService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ToolbarAction = {
    Save: 'Save',
    Cancel: 'Cancel',
    Back: 'Back',
    SaveAll: 'SaveAll',
    EditColumnOptions: 'EditColumnOptions',
    SaveAndNew: 'SaveAndNew',
    Reset: 'Reset',
};
/** @enum {number} */
const ChangeType = {
    Update: 0,
    Add: 1,
    Delete: 2,
};
ChangeType[ChangeType.Update] = 'Update';
ChangeType[ChangeType.Add] = 'Add';
ChangeType[ChangeType.Delete] = 'Delete';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class MockData {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
    ;
}
if (false) {
    /** @type {?} */
    MockData.prototype.mockData;
    /* Skipping unhandled member: ;*/
}
/**
 * @template T
 */
class BaseRequest extends MockData {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
    ;
}
if (false) {
    /** @type {?} */
    BaseRequest.prototype.payload;
    /* Skipping unhandled member: ;*/
}
/**
 * @template T
 */
class BaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
    ;
}
if (false) {
    /** @type {?} */
    BaseResponse.prototype.data;
    /** @type {?} */
    BaseResponse.prototype.success;
    /** @type {?} */
    BaseResponse.prototype.code;
    /** @type {?} */
    BaseResponse.prototype.message;
    /* Skipping unhandled member: ;*/
}
class SearchBaseRequest extends MockData {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
    ;
}
if (false) {
    /** @type {?} */
    SearchBaseRequest.prototype.searchText;
    /** @type {?} */
    SearchBaseRequest.prototype.pageIndex;
    /** @type {?} */
    SearchBaseRequest.prototype.pageSize;
    /** @type {?} */
    SearchBaseRequest.prototype.direction;
    /** @type {?} */
    SearchBaseRequest.prototype.orderBy;
    /** @type {?} */
    SearchBaseRequest.prototype.all;
    /* Skipping unhandled member: ;*/
}
/**
 * @template T
 */
class SearchBaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
    ;
}
if (false) {
    /** @type {?} */
    SearchBaseResponse.prototype.items;
    /** @type {?} */
    SearchBaseResponse.prototype.success;
    /** @type {?} */
    SearchBaseResponse.prototype.code;
    /** @type {?} */
    SearchBaseResponse.prototype.message;
    /* Skipping unhandled member: ;*/
}
class BaseTemplate {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
    ;
}
if (false) {
    /** @type {?} */
    BaseTemplate.prototype.data;
    /** @type {?} */
    BaseTemplate.prototype.template;
    /* Skipping unhandled member: ;*/
}
class AggregatorViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
    ;
}
if (false) {
    /** @type {?} */
    AggregatorViewModel.prototype.value;
    /** @type {?} */
    AggregatorViewModel.prototype.key;
    /** @type {?} */
    AggregatorViewModel.prototype.currentEmitter;
    /* Skipping unhandled member: ;*/
}
class ButtonDefinition {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.style = 'default';
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    ButtonDefinition.prototype.action;
    /** @type {?} */
    ButtonDefinition.prototype.title;
    /** @type {?} */
    ButtonDefinition.prototype.icon;
    /** @type {?} */
    ButtonDefinition.prototype.hide;
    /** @type {?} */
    ButtonDefinition.prototype.disabled;
    /** @type {?} */
    ButtonDefinition.prototype.lazyload;
    /** @type {?} */
    ButtonDefinition.prototype.style;
}
class ToolbarActionPayload {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    ToolbarActionPayload.prototype.loadedCallback;
    /** @type {?} */
    ToolbarActionPayload.prototype.action;
    /** @type {?} */
    ToolbarActionPayload.prototype.callback;
}
class ObjectChange {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    ObjectChange.prototype.propertyName;
    /** @type {?} */
    ObjectChange.prototype.oldValue;
    /** @type {?} */
    ObjectChange.prototype.newValue;
    /** @type {?} */
    ObjectChange.prototype.changeType;
}
class LookupItem {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    LookupItem.prototype.name;
    /** @type {?} */
    LookupItem.prototype.key;
}
class ExtendedMainMenuGroup {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    ExtendedMainMenuGroup.prototype.label;
    /** @type {?} */
    ExtendedMainMenuGroup.prototype.children;
    /** @type {?} */
    ExtendedMainMenuGroup.prototype.icon;
}
class KeyValueItem {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    KeyValueItem.prototype.key;
    /** @type {?} */
    KeyValueItem.prototype.value;
}
class BreadCrumbItem {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    BreadCrumbItem.prototype.label;
    /** @type {?} */
    BreadCrumbItem.prototype.url;
}
class ControlType {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
ControlType.Textbox = 'Textbox';
ControlType.Dropdown = 'Dropdown';
ControlType.Button = 'Button';
if (false) {
    /** @type {?} */
    ControlType.Textbox;
    /** @type {?} */
    ControlType.Dropdown;
    /** @type {?} */
    ControlType.Button;
}
class MenuTab {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    MenuTab.prototype.role;
    /** @type {?} */
    MenuTab.prototype.items;
}
class MenuItem {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    MenuItem.prototype.menu;
    /** @type {?} */
    MenuItem.prototype.items;
    /** @type {?} */
    MenuItem.prototype.subName;
    /** @type {?} */
    MenuItem.prototype.name;
}
class Breadcrumb {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    Breadcrumb.prototype.label;
    /** @type {?} */
    Breadcrumb.prototype.url;
    /** @type {?} */
    Breadcrumb.prototype.state;
}
class MediaItem {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    MediaItem.prototype.src;
    /** @type {?} */
    MediaItem.prototype.name;
    /** @type {?} */
    MediaItem.prototype.fullSrc;
}
class Audit {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    Audit.prototype.createdDate;
    /** @type {?} */
    Audit.prototype.createdBy;
    /** @type {?} */
    Audit.prototype.lastModifiedDate;
    /** @type {?} */
    Audit.prototype.lastModifiedBy;
}
class TrackingGroup {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    TrackingGroup.prototype.date;
    /** @type {?} */
    TrackingGroup.prototype.details;
}
class TrackingDetail {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    TrackingDetail.prototype.description;
    /** @type {?} */
    TrackingDetail.prototype.time;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataService {
    /**
     * @param {?} _sanitizer
     */
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    cloneItem(item) {
        if (!item)
            return null;
        /** @type {?} */
        const response = {};
        /** @type {?} */
        const fields = Object.keys(item);
        if (fields) {
            fields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            (field) => {
                response[field] = item[field];
            }));
        }
        return response;
    }
    /**
     * @param {?} items
     * @param {?=} id
     * @return {?}
     */
    cloneItems(items, id = true) {
        if (!items || items.length == 0)
            return null;
        /** @type {?} */
        const response = [];
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            /** @type {?} */
            var newItem = this.cloneItem(item);
            if (id)
                newItem.id = this.newGuid();
            response.push(newItem);
        }));
        return response;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    transformToSafeHtml(input) {
        return this._sanitizer.bypassSecurityTrustHtml(input);
    }
    /**
     * @param {?=} time
     * @return {?}
     */
    initDebounceTime(time = 500) {
        /** @type {?} */
        const delegator = new Subject();
        delegator.pipe(debounceTime(time)).subscribe((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            if (action) {
                action();
            }
        }));
        return delegator;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    removeHTML(str) {
        if (!str)
            return str;
        return str.replace(/<\/?[^>]+>/gi, '').replace(/&nbsp;/g, '');
    }
    /**
     * @param {?=} str
     * @return {?}
     */
    removeAllSpaces(str) {
        if (!str)
            return '';
        return str.replace(/\s/g, '');
    }
    /**
     * @param {?} s
     * @param {?} n
     * @param {?} t
     * @return {?}
     */
    replaceAt(s, n, t) {
        return s.substring(0, n) + t + s.substring(n + 1);
    }
    /**
     * @param {?} email
     * @return {?}
     */
    isValidEmail(email) {
        if (!email)
            return true;
        /** @type {?} */
        const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    /**
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
     * @param {?} needle
     * @param {?} haystack
     * @return {?}
     */
    fuzzysearch(needle, haystack) {
        /** @type {?} */
        const haystackLC = this.removeAllSpaces(haystack.toLowerCase());
        /** @type {?} */
        const needleLC = this.removeAllSpaces(needle.toLowerCase());
        /** @type {?} */
        const hlen = haystack.length;
        /** @type {?} */
        const nlen = needleLC.length;
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
     * @return {?}
     */
    newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (/**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            /** @type {?} */
            var r = Math.random() * 16 | 0;
            /** @type {?} */
            var v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }));
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    isNullOrEmpty(obj) {
        return obj == null || obj === undefined || obj == '';
    }
    /**
     * @param {?} text
     * @param {?=} lowerCase
     * @return {?}
     */
    toPascalCase(text, lowerCase) {
        if (!text)
            return '';
        if (!lowerCase) {
            return text[0].toString().toUpperCase() + text.substring(1, text.length);
        }
        else {
            return text[0].toString().toLowerCase() + text.substring(1, text.length);
        }
    }
    /**
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    compareObjects(source, target) {
        /** @type {?} */
        let changes = [];
        /** @type {?} */
        const sourceProperties = Object.getOwnPropertyNames(source);
        /** @type {?} */
        const targetProperties = Object.getOwnPropertyNames(target);
        /** @type {?} */
        const addedProperties = targetProperties.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => sourceProperties.indexOf(x) < 0));
        /** @type {?} */
        const removedProperties = sourceProperties.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => targetProperties.indexOf(x) < 0));
        /** @type {?} */
        const modifiedProperties = sourceProperties.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => removedProperties.indexOf(x) < 0));
        for (let property of modifiedProperties) {
            if (!isEqual(source[property], target[property])) {
                changes.push(new ObjectChange({
                    propertyName: property,
                    changeType: ChangeType.Update,
                    oldValue: source[property],
                    newValue: target[property]
                }));
            }
        }
        changes.push(...addedProperties.map((/**
         * @param {?} x
         * @return {?}
         */
        x => new ObjectChange({
            propertyName: x,
            changeType: ChangeType.Add,
            oldValue: target[x],
            newValue: target[x]
        }))));
        changes.push(...removedProperties.map((/**
         * @param {?} x
         * @return {?}
         */
        x => new ObjectChange({
            propertyName: x,
            changeType: ChangeType.Delete,
            oldValue: source[x],
            newValue: source[x]
        }))));
        return changes;
    }
    /**
     * @param {?} valueRef
     * @param {?=} lowerCase
     * @return {?}
     */
    getField(valueRef, lowerCase) {
        if (!valueRef)
            return '';
        if (!lowerCase) {
            return valueRef[0].toString().toUpperCase() + valueRef.substring(1, valueRef.length);
        }
        else {
            return valueRef[0].toString().toLowerCase() + valueRef.substring(1, valueRef.length);
        }
    }
    /**
     * @param {?} input
     * @return {?}
     */
    isNumber(input) {
        /** @type {?} */
        var regex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
        return regex.test(input);
    }
    /**
     * @param {?} input
     * @return {?}
     */
    isDigit(input) {
        return /^[0-9]$/.test(input);
    }
}
DataService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
DataService.ctorParameters = () => [
    { type: DomSanitizer }
];
/** @nocollapse */ DataService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(ɵɵinject(DomSanitizer)); }, token: DataService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataService.prototype._sanitizer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ActionService {
    /**
     * @param {?} _settingService
     */
    constructor(_settingService) {
        this._settingService = _settingService;
    }
    /**
     * @param {?} callback
     * @param {?=} timeout
     * @return {?}
     */
    executeAsync(callback, timeout = 50) {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (callback)
                callback();
        }), timeout);
    }
    /**
     * @return {?}
     */
    scrollTop() {
        window.scrollTo(0, 0);
    }
    /**
     * @return {?}
     */
    isMobile() {
        /** @type {?} */
        const userAgent = navigator.userAgent;
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(userAgent));
    }
    /**
     * @template T
     * @param {?} callback
     * @return {?}
     */
    verify(callback) {
        /** @type {?} */
        var mock = this._settingService.useMock();
        if (mock)
            return of((/** @type {?} */ ({})));
        return callback;
    }
    /**
     * @param {?} item
     * @param {?} menuTabs
     * @param {?=} callback
     * @return {?}
     */
    changeItem(item, menuTabs, callback) {
        /** @type {?} */
        var items = [];
        /** @type {?} */
        var parent = (/** @type {?} */ (this.retrieveParent(item.state, menuTabs)));
        if (parent != null) {
            items.push(parent);
        }
        if (!items.find((/**
         * @param {?} s
         * @return {?}
         */
        s => s.label == item.name))) {
            items.push(new Breadcrumb({
                label: item.name,
                url: item.mainState ? `/${item.mainState}/${item.state}` : `${item.state}`
            }));
        }
        if (callback)
            callback(items);
        return items;
    }
    /**
     * @param {?} state
     * @param {?} menuTabs
     * @return {?}
     */
    retrieveParent(state, menuTabs) {
        if (!menuTabs || menuTabs.length == 0)
            return;
        for (let i = 0; i < menuTabs.length; i++) {
            /** @type {?} */
            var items = menuTabs[i].items;
            if (!items || items.length == 0)
                continue;
            for (let j = 0; j < items.length; j++) {
                /** @type {?} */
                var children = items[j].children;
                if (!children || children.length == 0)
                    return;
                for (let k = 0; k < children.length; k++) {
                    if (children[k].state == state)
                        return new Breadcrumb({
                            label: items[j].label,
                            state: children[k].mainState,
                            url: children[k].mainState ? `/${children[k].mainState}/${children[0].state}` : `${children[0].state}`
                        });
                }
            }
        }
        return null;
    }
    /**
     * @param {?} state
     * @param {?} menuTabs
     * @return {?}
     */
    retrieveChild(state, menuTabs) {
        if (!menuTabs || menuTabs.length == 0)
            return;
        for (let i = 0; i < menuTabs.length; i++) {
            /** @type {?} */
            var items = menuTabs[i].items;
            if (!items || items.length == 0)
                continue;
            for (let j = 0; j < items.length; j++) {
                /** @type {?} */
                var children = items[j].children;
                if (!children || children.length == 0)
                    return;
                for (let k = 0; k < children.length; k++) {
                    if (children[k].mainState == state) {
                        return new Breadcrumb({
                            state: children[k].mainState,
                            label: children[k].name,
                            url: `/${children[k].mainState}/${children[0].state}`
                        });
                    }
                }
            }
        }
        return null;
    }
    /**
     * @param {?} state
     * @param {?} menuTabs
     * @return {?}
     */
    retrieveStateName(state, menuTabs) {
        if (!menuTabs || menuTabs.length == 0)
            return;
        for (let i = 0; i < menuTabs.length; i++) {
            /** @type {?} */
            var items = menuTabs[i].items;
            if (!items || items.length == 0)
                continue;
            for (let j = 0; j < items.length; j++) {
                /** @type {?} */
                var children = items[j].children;
                if (!children || children.length == 0)
                    return;
                for (let k = 0; k < children.length; k++) {
                    if (children[k].state == state)
                        return children[k].name;
                }
            }
        }
        return null;
    }
}
ActionService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ActionService.ctorParameters = () => [
    { type: SettingService }
];
/** @nocollapse */ ActionService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ActionService_Factory() { return new ActionService(ɵɵinject(SettingService)); }, token: ActionService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActionService.prototype._settingService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AggregatorService {
    constructor() {
        this.emitters = [];
    }
    /**
     * @template T
     * @param {?} key
     * @param {?=} value
     * @return {?}
     */
    publish(key, value) {
        if (!key)
            return;
        /** @type {?} */
        let currentEmitter = (/** @type {?} */ (this.emitters.find((/**
         * @param {?} s
         * @return {?}
         */
        s => s.key == key))));
        if (!currentEmitter) {
            currentEmitter = new AggregatorViewModel({
                value: this.register(key)
            });
        }
        currentEmitter.value.emit(value);
    }
    /**
     * @template T
     * @param {?} key
     * @param {?} callback
     * @return {?}
     */
    subscribe(key, callback) {
        if (!key)
            return;
        /** @type {?} */
        let currentEmitter = (/** @type {?} */ (this.emitters.find((/**
         * @param {?} s
         * @return {?}
         */
        s => s.key == key))));
        if (!currentEmitter) {
            currentEmitter = new AggregatorViewModel({
                value: this.register(key)
            });
        }
        currentEmitter.value.subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            callback(response);
        }));
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    register(key) {
        /** @type {?} */
        var emitter = new AggregatorViewModel({
            key: key,
            value: new EventEmitter()
        });
        this.emitters.push(emitter);
        return emitter.value;
    }
}
AggregatorService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ AggregatorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AggregatorService_Factory() { return new AggregatorService(); }, token: AggregatorService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AggregatorService.prototype.emitters;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockService {
    /**
     * @template T
     * @param {?} callback
     * @param {?=} response
     * @return {?}
     */
    verify(callback, response) {
        /** @type {?} */
        var mock = this.useMock();
        if (mock)
            return of(response ? response : (/** @type {?} */ ({})));
        return callback;
    }
    /**
     * @private
     * @return {?}
     */
    useMock() {
        /** @type {?} */
        var currentValue = JSON.parse(window.localStorage.getItem('mock'));
        if (!currentValue)
            return false;
        return currentValue;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MenuService {
    constructor() {
        this.tabs = [];
    }
    /**
     * @param {?} menuTabs
     * @param {?} callback
     * @param {?} set
     * @return {?}
     */
    init(menuTabs, callback, set) {
        /** @type {?} */
        let menuTabbedItems = menuTabs;
        this.tabs = menuTabbedItems.reduce((/**
         * @param {?} result
         * @param {?} current
         * @return {?}
         */
        (result, current) => {
            /** @type {?} */
            let item = set
                ? set(current.role)
                : new MenuItem({
                    menu: current.role,
                    items: current.items,
                    subName: current.role,
                    name: current.role
                });
            if (item.name) {
                result.push(item);
            }
            return result;
        }), []);
        if (!this.tabs || !this.tabs[0]) {
            this.tabs = [];
        }
        if (callback)
            callback();
    }
    /**
     * @param {?=} menu
     * @return {?}
     */
    loadMenuItems(menu) {
        if (!menu) {
            return this.tabs.reduce((/**
             * @param {?} result
             * @param {?} current
             * @return {?}
             */
            (result, current) => {
                result.push(...current.items);
                return result;
            }), []);
        }
        /** @type {?} */
        const tab = this.tabs.find((/**
         * @param {?} x
         * @return {?}
         */
        x => x.menu === menu));
        if (!tab) {
            return;
        }
        return tab.items;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    loadFirstTabItems(key) {
        /** @type {?} */
        let currentMenu = this.tabs.find((/**
         * @param {?} s
         * @return {?}
         */
        s => s.menu.toLowerCase() == key.toLowerCase()));
        if (!currentMenu) {
            return [];
        }
        return currentMenu.items;
    }
    /**
     * @return {?}
     */
    loadFirstTab() {
        return this.tabs[0];
    }
    /**
     * @return {?}
     */
    getTabs() {
        return this.tabs;
    }
}
MenuService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ MenuService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MenuService_Factory() { return new MenuService(); }, token: MenuService, providedIn: "root" });
if (false) {
    /** @type {?} */
    MenuService.prototype.tabs;
    /** @type {?} */
    MenuService.prototype.currentSupporterId;
    /** @type {?} */
    MenuService.prototype.currentSelectedSupplierName;
    /** @type {?} */
    MenuService.prototype.currentSelectedSupplierId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UtilityService {
    /**
     * @param {?} valueRef
     * @param {?=} lowerCase
     * @return {?}
     */
    getField(valueRef, lowerCase) {
        if (!valueRef) {
            return '';
        }
        if (!lowerCase) {
            return valueRef[0].toString().toUpperCase() + valueRef.substring(1, valueRef.length);
        }
        else {
            return valueRef[0].toString().toLowerCase() + valueRef.substring(1, valueRef.length);
        }
    }
    /**
     * @param {?} text
     * @param {?=} lowerCase
     * @return {?}
     */
    toPascalCase(text, lowerCase) {
        if (!text) {
            return '';
        }
        if (!lowerCase) {
            return text[0].toString().toUpperCase() + text.substring(1, text.length);
        }
        else {
            return text[0].toString().toLowerCase() + text.substring(1, text.length);
        }
    }
    /**
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    compareObjects(source, target) {
        /** @type {?} */
        let changes = [];
        /** @type {?} */
        const sourceProperties = Object.getOwnPropertyNames(source);
        /** @type {?} */
        const targetProperties = Object.getOwnPropertyNames(target);
        /** @type {?} */
        const addedProperties = targetProperties.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => sourceProperties.indexOf(x) < 0));
        /** @type {?} */
        const removedProperties = sourceProperties.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => targetProperties.indexOf(x) < 0));
        /** @type {?} */
        const modifiedProperties = sourceProperties.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => removedProperties.indexOf(x) < 0));
        for (let property of modifiedProperties) {
            if (!isEqual(source[property], target[property])) {
                changes.push(new ObjectChange({
                    propertyName: property,
                    changeType: ChangeType.Update,
                    oldValue: source[property],
                    newValue: target[property]
                }));
            }
        }
        changes.push(...addedProperties.map((/**
         * @param {?} x
         * @return {?}
         */
        x => new ObjectChange({
            propertyName: x,
            changeType: ChangeType.Add,
            oldValue: target[x],
            newValue: target[x]
        }))));
        changes.push(...removedProperties.map((/**
         * @param {?} x
         * @return {?}
         */
        x => new ObjectChange({
            propertyName: x,
            changeType: ChangeType.Delete,
            oldValue: source[x],
            newValue: source[x]
        }))));
        return changes;
    }
}
UtilityService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ UtilityService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(); }, token: UtilityService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class BaseNotificationService {
}
BaseNotificationService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @abstract
     * @param {?} message
     * @param {?=} title
     * @return {?}
     */
    BaseNotificationService.prototype.success = function (message, title) { };
    /**
     * @abstract
     * @param {?} message
     * @param {?=} title
     * @return {?}
     */
    BaseNotificationService.prototype.error = function (message, title) { };
    /**
     * @abstract
     * @param {?} message
     * @param {?=} title
     * @return {?}
     */
    BaseNotificationService.prototype.info = function (message, title) { };
    /**
     * @abstract
     * @param {?} message
     * @param {?=} title
     * @return {?}
     */
    BaseNotificationService.prototype.warning = function (message, title) { };
    /**
     * @abstract
     * @param {?} request
     * @return {?}
     */
    BaseNotificationService.prototype.send = function (request) { };
    /**
     * @abstract
     * @param {?} request
     * @return {?}
     */
    BaseNotificationService.prototype.retrieveNotificationThread = function (request) { };
    /**
     * @abstract
     * @param {?} request
     * @return {?}
     */
    BaseNotificationService.prototype.searchNotificationDetails = function (request) { };
    /**
     * @abstract
     * @param {?} request
     * @return {?}
     */
    BaseNotificationService.prototype.removeNotificationDetail = function (request) { };
    /**
     * @abstract
     * @param {?} request
     * @return {?}
     */
    BaseNotificationService.prototype.retrieveNotificationDetail = function (request) { };
    /**
     * @abstract
     * @param {?} request
     * @return {?}
     */
    BaseNotificationService.prototype.markAllRead = function (request) { };
    /**
     * @abstract
     * @return {?}
     */
    BaseNotificationService.prototype.registerConnection = function () { };
    /**
     * @abstract
     * @param {?} detail
     * @return {?}
     */
    BaseNotificationService.prototype.redirect = function (detail) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValidationProvider {
    constructor() {
        this.required = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            return of(this.isRequired(value));
        });
        this.email = (/**
         * @param {?} email
         * @return {?}
         */
        (email) => {
            if (!email)
                return of(true);
            return of(this.isValidEmail(email));
        });
        this.phone = (/**
         * @param {?} phone
         * @return {?}
         */
        (phone) => {
            if (!phone)
                return of(true);
            return of(this.isValidPhone(phone));
        });
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isRequired(value) {
        if (typeof (value) === 'string') {
            /** @type {?} */
            const trimmedValue = (/** @type {?} */ (value.trim()));
            return trimmedValue != '' && trimmedValue != undefined && trimmedValue != null;
        }
        if (Array.isArray(value)) {
            return value.length > 0;
        }
        if (value)
            return true;
        return false;
    }
    /**
     * @private
     * @param {?} email
     * @return {?}
     */
    isValidEmail(email) {
        if (!email)
            return true;
        /** @type {?} */
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    /**
     * @private
     * @param {?} phone
     * @return {?}
     */
    isValidPhone(phone) {
        if (!phone)
            return true;
        return phone.length === 10;
    }
}
ValidationProvider.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ValidationProvider.ctorParameters = () => [];
/** @nocollapse */ ValidationProvider.ngInjectableDef = ɵɵdefineInjectable({ factory: function ValidationProvider_Factory() { return new ValidationProvider(); }, token: ValidationProvider, providedIn: "root" });
if (false) {
    /** @type {?} */
    ValidationProvider.prototype.required;
    /** @type {?} */
    ValidationProvider.prototype.email;
    /** @type {?} */
    ValidationProvider.prototype.phone;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValidationService {
    /**
     * @param {?} rendererFactory
     * @param {?} validationProvider
     * @param {?} _dataService
     * @param {?} _actionService
     */
    constructor(rendererFactory, validationProvider, _dataService, _actionService) {
        this.rendererFactory = rendererFactory;
        this.validationProvider = validationProvider;
        this._dataService = _dataService;
        this._actionService = _actionService;
        this.onDestroy = new EventEmitter();
        this.elements = [];
        this.errClass = ValidationConstant.DefaultErrorClass;
        this.styles = ValidationConstant.DefaultErrorStyles;
        this.attributeName = ValidationConstant.AttributeName;
        this.relatedProviders = [];
        this.subscriptions = new Subscription();
        this.virtualValidationOptions = [];
        this.changedItems = [];
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.onDestroy.emit();
    }
    /**
     * @param {?} model
     * @return {?}
     */
    init(model) {
        this.validator = model.validator;
        if (!this.validator.payloadRef)
            this.validator.payloadRef = (/**
             * @return {?}
             */
            () => { return {}; });
        if (this.validator.relatedValidationProviders) {
            this.addRelatedProviders(this.validator.relatedValidationProviders);
        }
        this.validator.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            if (!option.displayText)
                option.displayText = option.validationName;
            if (!option.payloadRef)
                option.payloadRef = this.validator.payloadRef;
            option.rules.forEach((/**
             * @param {?} action
             * @return {?}
             */
            action => {
                if (!action.id)
                    action.id = this._dataService.newGuid();
                if (!action.errorMessage) {
                    switch (action.key) {
                        case ValidationConstant.Required: {
                            action.errorMessage = (/**
                             * @param {?} element
                             * @param {?} rowIndex
                             * @return {?}
                             */
                            (element, rowIndex) => {
                                /** @type {?} */
                                const displayingRowIndex = (+rowIndex + 1).toString();
                                return `${option.displayText}${option.dynamic ? ' [' + displayingRowIndex + ']' : ''} ${this.validator.requiredMessage}`;
                            });
                            break;
                        }
                        default: {
                            action.errorMessage = (/**
                             * @return {?}
                             */
                            () => `${option.displayText} ${this.validator.invalidMessage}`);
                            break;
                        }
                    }
                }
            }));
        }));
        this.virtualValidationOptions = this.validator.options.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.dynamic));
        this.updateAsync();
    }
    /**
     * @param {?=} relatedProvidersToRegister
     * @return {?}
     */
    updateAsync(relatedProvidersToRegister) {
        this._actionService.executeAsync((/**
         * @return {?}
         */
        () => {
            if (relatedProvidersToRegister && relatedProvidersToRegister.length) {
                this.addRelatedProviders(relatedProvidersToRegister);
            }
            this.registerElements();
            this.registerEvents();
        }));
    }
    /**
     * @param {?} validCallback
     * @param {?=} invalidCallback
     * @return {?}
     */
    executeAsync(validCallback, invalidCallback) {
        this.retrieveSummaryErrors().subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (!response || response.length == 0) {
                if (validCallback)
                    validCallback(response);
                return of(true);
            }
            else {
                if (invalidCallback)
                    invalidCallback(response);
            }
        }));
        return of(true);
    }
    /**
     * @param {?=} show
     * @param {?=} focus
     * @return {?}
     */
    isValid(show = true, focus = true) {
        if (show) {
            this.retrieveSummaryErrors().subscribe((/**
             * @param {?} errors
             * @return {?}
             */
            (errors) => {
                if (focus) {
                    if (errors && errors.length > 0) {
                        /** @type {?} */
                        var focusElement = errors[0];
                        /** @type {?} */
                        var el = (/** @type {?} */ (focusElement.element));
                        if (el) {
                            this._actionService.executeAsync((/**
                             * @return {?}
                             */
                            () => {
                                el.focus();
                            }));
                        }
                    }
                }
            }));
        }
        /** @type {?} */
        let valid = true;
        if (this.validator.options) {
            this.validator.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            (option) => {
                if (option.rules) {
                    option.rules.forEach((/**
                     * @param {?} action
                     * @return {?}
                     */
                    (action) => {
                        if (!action.isValid) {
                            valid = false;
                        }
                    }));
                }
            }));
        }
        return valid;
    }
    /**
     * @param {?=} callback
     * @return {?}
     */
    handleErrors(callback) {
        this.retrieveSummaryErrors().subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (callback)
                callback(res);
        }));
    }
    /**
     * @param {?=} callback
     * @return {?}
     */
    commit(callback) {
        return this.retrieveSummaryErrors().pipe(map((/**
         * @param {?} errors
         * @return {?}
         */
        errors => {
            if (callback)
                callback(errors);
            if (errors.length == 0)
                return true;
            return false;
        })), take(1));
    }
    /**
     * @param {?} element
     * @param {?} action
     * @param {?} option
     * @return {?}
     */
    setElementError(element, action, option) {
        if (!element)
            return;
        this.renderer.removeClass(element, ValidationConstant.SuccessElementClass);
        this.renderer.addClass(element, option.errorElementClass);
        /** @type {?} */
        let errorElement = this.findErrorElement(element);
        if (!errorElement) {
            errorElement = this.renderer.createElement('ul');
            this.renderer.setAttribute(errorElement, ValidationConstant.ERROR_ELEMENT_ID, `${this._dataService.newGuid()}`);
            this.renderer.setAttribute(errorElement, 'style', this.styles);
            this.renderer.addClass(errorElement, this.errClass);
            this.renderer.addClass(errorElement, option.errorMessageClass);
            /** @type {?} */
            const parentElement = this.renderer.parentNode(element);
            this.renderer.appendChild(parentElement, errorElement);
        }
        /** @type {?} */
        const errorItemElementKey = `${action.id}`;
        /** @type {?} */
        let errorItemElement = this.findErrorItemElement(errorElement, errorItemElementKey);
        /** @type {?} */
        const dynamicSequenceId = this.findDynamicSequenceId(element);
        /** @type {?} */
        const errorMessage = action.errorMessage(element, dynamicSequenceId);
        if (!errorItemElement) {
            errorItemElement = this.renderer.createElement('li');
            this.renderer.setAttribute(errorItemElement, ValidationConstant.ERROR_ITEM_ELEMENT_ID, errorItemElementKey);
            this.renderer.appendChild(errorItemElement, this.renderer.createText(errorMessage));
            this.renderer.appendChild(errorElement, errorItemElement);
        }
        return errorMessage;
    }
    /**
     * @param {?} element
     * @param {?} action
     * @return {?}
     */
    clearErrorItemElement(element, action) {
        /** @type {?} */
        let errorElement = this.findErrorElement(element);
        if (!errorElement)
            return;
        /** @type {?} */
        const errorItemElementKey = `${action.id}`;
        /** @type {?} */
        let errorItemElement = this.findErrorItemElement(errorElement, errorItemElementKey);
        if (!errorItemElement)
            return;
        this.renderer.removeChild(errorElement, errorItemElement);
    }
    /**
     * @param {?=} callback
     * @return {?}
     */
    isDirty(callback) {
        if (!this.changedItems || this.changedItems.length == 0)
            return false;
        /** @type {?} */
        var response = this.changedItems.filter((/**
         * @param {?} s
         * @return {?}
         */
        s => s.change));
        if (callback)
            callback(response);
        return response.length > 0;
    }
    /**
     * @param {?} element
     * @param {?} option
     * @return {?}
     */
    validateElement(element, option) {
        /** @type {?} */
        const payload = this.validator.payloadRef();
        /** @type {?} */
        const fieldValue = option.valueResolver ? option.valueResolver(payload) : null;
        /** @type {?} */
        const validatedActions$ = option.rules.map((/**
         * @param {?} action
         * @return {?}
         */
        action => {
            switch (action.key) {
                case ValidationConstant.Required: {
                    return this.validationProvider.required(fieldValue).pipe(map((/**
                     * @param {?} isValid
                     * @return {?}
                     */
                    isValid => {
                        action.isValid = isValid;
                        return action;
                    })));
                }
                case ValidationConstant.Email: {
                    return this.validationProvider.email(fieldValue).pipe(map((/**
                     * @param {?} isValid
                     * @return {?}
                     */
                    isValid => {
                        action.isValid = isValid;
                        return action;
                    })));
                }
                case ValidationConstant.Phone: {
                    return this.validationProvider.phone(fieldValue).pipe(map((/**
                     * @param {?} isValid
                     * @return {?}
                     */
                    isValid => {
                        action.isValid = isValid;
                        return action;
                    })));
                }
                case ValidationConstant.Custom: {
                    if (!action.execute)
                        throw new Error('!action.execute');
                    if (!fieldValue) {
                        action.isValid = true;
                        return of(action);
                    }
                    else {
                        /** @type {?} */
                        var requiredRule = option.rules.find((/**
                         * @param {?} s
                         * @return {?}
                         */
                        s => s.key == ValidationConstant.Required));
                        if (requiredRule) {
                            requiredRule.isValid = true;
                        }
                    }
                    /** @type {?} */
                    const sequenceId = this.findDynamicSequenceId(element);
                    return action.execute(fieldValue, payload, +sequenceId)
                        .pipe(map((/**
                     * @param {?} response
                     * @return {?}
                     */
                    response => {
                        if (response) {
                            action.isValid = response.status;
                            if (response.message)
                                action.errorMessage = (/**
                                 * @return {?}
                                 */
                                () => { return response.message; });
                        }
                        return action;
                    })));
                }
                default: throw new Error(`Unhandled action: ${action.key}`);
            }
        }));
        return forkJoin(validatedActions$).pipe(take(1), map((/**
         * @param {?} validatedActions
         * @return {?}
         */
        validatedActions => {
            if (option.relevantFields)
                this.validateRelevantFields(option.relevantFields(payload));
            option.rules = validatedActions;
            return option;
        })));
    }
    /**
     * @private
     * @param {?=} relevantFields
     * @return {?}
     */
    validateRelevantFields(relevantFields) {
        if (!relevantFields || relevantFields.length == 0)
            return;
        if (relevantFields && relevantFields.length > 0) {
            relevantFields.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                for (let i = 0; i < this.elements.length; i++) {
                    /** @type {?} */
                    var attributes = this.elements[i].attributes;
                    if (attributes && attributes.length > 0) {
                        if (attributes[this.attributeName].value == item) {
                            /** @type {?} */
                            var option = this.findElementOption(this.elements[i]);
                            if (option) {
                                this.validateElement(this.elements[i], option).pipe(map((/**
                                 * @param {?} newOption
                                 * @return {?}
                                 */
                                newOption => option = newOption)), map((/**
                                 * @param {?} option
                                 * @return {?}
                                 */
                                option => this.syncErrorMessages(this.elements[i], option)))).subscribe();
                            }
                            break;
                        }
                    }
                }
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    retrieveSummaryErrors() {
        /** @type {?} */
        const errors$ = this.elements.map((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            /** @type {?} */
            let validationOption = this.findElementOption(element);
            if (!validationOption)
                return;
            return this.validateElement(element, validationOption).pipe(map((/**
             * @param {?} newOption
             * @return {?}
             */
            newOption => validationOption = newOption)), map((/**
             * @param {?} option
             * @return {?}
             */
            option => this.syncErrorMessages(element, option))));
        }));
        /** @type {?} */
        const errorBatch = forkJoin(errors$);
        /** @type {?} */
        const relatedErrors = (/** @type {?} */ (this.relatedProviders.reduce((/**
         * @param {?} previous
         * @param {?} provider
         * @return {?}
         */
        (previous, provider) => {
            /** @type {?} */
            const subErrors$ = provider.retrieveSummaryErrors();
            return merge(previous, subErrors$);
        }), of([]))));
        return forkJoin(errorBatch, relatedErrors).pipe(defaultIfEmpty([[], []]), map((/**
         * @param {?} value
         * @return {?}
         */
        value => [...value[0], ...value[1]])), map((/**
         * @param {?} result
         * @return {?}
         */
        result => [].concat(result.filter((/**
         * @param {?} error
         * @return {?}
         */
        error => error))))));
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    findElementOption(element) {
        /** @type {?} */
        const validationIdAttribute = element.attributes[ValidationConstant.VALIDATION_ID];
        if (!validationIdAttribute)
            return null;
        /** @type {?} */
        const validationId = validationIdAttribute.value;
        if (!validationId)
            return null;
        return this.validator.options.find((/**
         * @param {?} option
         * @return {?}
         */
        option => option.validationId === validationId));
    }
    /**
     * @private
     * @param {?} errorElement
     * @param {?} key
     * @return {?}
     */
    findErrorItemElement(errorElement, key) {
        /** @type {?} */
        const children = (/** @type {?} */ (Array.from(errorElement.children)));
        return children
            .filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.attributes[ValidationConstant.ERROR_ITEM_ELEMENT_ID]))
            .find((/**
         * @param {?} x
         * @return {?}
         */
        x => x.attributes[ValidationConstant.ERROR_ITEM_ELEMENT_ID].value === key));
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    findDynamicSequenceId(element) {
        /** @type {?} */
        const sequenceIdAttribute = element.attributes[ValidationConstant.ARRAY_SEQUENCE_ID];
        if (!sequenceIdAttribute)
            return null;
        /** @type {?} */
        const sequenceId = sequenceIdAttribute.value;
        if (!sequenceId)
            return null;
        return sequenceId;
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    findErrorElement(element) {
        if (element.parentElement && element.parentElement.children) {
            /** @type {?} */
            const slibings = (/** @type {?} */ (Array.from(element.parentElement.children)));
            /** @type {?} */
            let result = slibings.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.attributes)).find((/**
             * @param {?} x
             * @return {?}
             */
            x => x.attributes[ValidationConstant.ERROR_ELEMENT_ID]));
            return result;
        }
        return null;
    }
    /**
     * @private
     * @return {?}
     */
    registerElements() {
        /** @type {?} */
        const nonDynamicOptions = this.validator.options.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !x.dynamic));
        /** @type {?} */
        const nonDynamicElements = nonDynamicOptions.reduce((/**
         * @param {?} previous
         * @param {?} current
         * @return {?}
         */
        (previous, current) => {
            /** @type {?} */
            let query = `*[${this.attributeName}="${current.validationName}"]`;
            if (this.validator.scope) {
                query += `[scope="${this.validator.scope}"]`;
            }
            /** @type {?} */
            const elements = (/** @type {?} */ (Array.from(this.validator.formRef.nativeElement.querySelectorAll(query))));
            elements.forEach((/**
             * @param {?} element
             * @return {?}
             */
            element => {
                /** @type {?} */
                const validationId = this._dataService.newGuid();
                this.renderer.setAttribute(element, ValidationConstant.VALIDATION_ID, validationId);
                current.validationId = validationId;
            }));
            return previous.concat(elements);
        }), []);
        /** @type {?} */
        let generatedDynamicOptions = [];
        /** @type {?} */
        let dynamicElements = [];
        this.validator.options = this.validator.options.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !x.dynamic));
        this.virtualValidationOptions.forEach((/**
         * @param {?} current
         * @return {?}
         */
        (current) => {
            /** @type {?} */
            let query = `*[${this.attributeName}="${current.validationName}"]`;
            if (this.validator.scope) {
                query += `[scope="${this.validator.scope}"]`;
            }
            /** @type {?} */
            const elements = Array.from(this.validator.formRef.nativeElement.querySelectorAll(query));
            /** @type {?} */
            const clonedOptions = elements.map((/**
             * @param {?} element
             * @param {?} index
             * @return {?}
             */
            (element, index) => {
                /** @type {?} */
                const validationId = this._dataService.newGuid();
                this.renderer.setAttribute(element, ValidationConstant.VALIDATION_ID, validationId);
                this.renderer.setAttribute(element, ValidationConstant.ARRAY_SEQUENCE_ID, index.toString());
                return Object.assign({}, current, { validationId: validationId, valueResolver: current.valueResolver
                        ? (/**
                         * @param {?} payload
                         * @return {?}
                         */
                        (payload) => current.valueResolver(payload, index))
                        : (/**
                         * @return {?}
                         */
                        () => { return ((/** @type {?} */ (element))).value; }) });
            }));
            dynamicElements.push(...elements);
            generatedDynamicOptions.push(...clonedOptions);
        }));
        this.validator.options = nonDynamicOptions.concat(generatedDynamicOptions);
        this.elements = nonDynamicElements.concat(dynamicElements);
        if (this.elements) {
            this.changedItems = [];
            this.elements.forEach((/**
             * @param {?} element
             * @return {?}
             */
            (element) => {
                /** @type {?} */
                const payload = this.validator.payloadRef();
                /** @type {?} */
                let elementOption = this.findElementOption(element);
                this.changedItems.push(new ChangedItem({
                    id: elementOption.validationId,
                    field: elementOption.validationName,
                    oldValue: elementOption.valueResolver ? elementOption.valueResolver(payload) : null
                }));
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    registerEvents() {
        this.elements.filter((/**
         * @param {?} element
         * @return {?}
         */
        element => element.attributes[this.attributeName])).forEach((/**
         * @param {?} element
         * @return {?}
         */
        (element) => {
            if (!element.focusoutListener) {
                element.focusoutListener = this.renderer.listen(element, 'focusout', (/**
                 * @return {?}
                 */
                () => {
                    this.handleBlurEvent(element);
                }));
                element.focusoutListener = this.renderer.listen(element, 'change', (/**
                 * @param {?} $event
                 * @return {?}
                 */
                ($event) => {
                    /** @type {?} */
                    const payload = this.validator.payloadRef();
                    /** @type {?} */
                    let elementOption = this.findElementOption(element);
                    /** @type {?} */
                    var value = elementOption.valueResolver ? elementOption.valueResolver(payload) : null;
                    if (elementOption && elementOption.dirtyCheck) {
                        /** @type {?} */
                        var currentItem = this.changedItems.find((/**
                         * @param {?} s
                         * @return {?}
                         */
                        s => s.id == elementOption.validationId));
                        if (!currentItem) {
                            this.changedItems.push(new ChangedItem({
                                id: elementOption.validationId,
                                field: elementOption.validationName,
                                value: value,
                                change: true
                            }));
                        }
                        else {
                            currentItem.value = value;
                            if (currentItem.oldValue == undefined || currentItem.oldValue == '') {
                                if (value == undefined || value == '') {
                                    currentItem.change = false;
                                }
                                else {
                                    currentItem.change = true;
                                }
                            }
                            else {
                                if (value == undefined || value == '') {
                                    currentItem.change = true;
                                }
                                else {
                                    if (currentItem.oldValue.toString() != currentItem.value.toString()) {
                                        currentItem.change = true;
                                    }
                                    else {
                                        currentItem.change = false;
                                    }
                                }
                            }
                        }
                    }
                }));
            }
        }));
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    handleBlurEvent(element) {
        /** @type {?} */
        let elementOption = this.findElementOption(element);
        if (!elementOption)
            throw new Error('!elementOption');
        this.validateElement(element, elementOption).pipe(take(1)).subscribe((/**
         * @param {?} newOption
         * @return {?}
         */
        newOption => {
            elementOption = newOption;
            this.syncErrorMessages(element, elementOption);
        }));
    }
    /**
     * @private
     * @param {?} element
     * @param {?} option
     * @return {?}
     */
    syncErrorMessages(element, option) {
        /** @type {?} */
        let errorMessages = [];
        option.rules.forEach((/**
         * @param {?} action
         * @return {?}
         */
        action => {
            if (action.isValid) {
                this.clearErrorItemElement(element, action);
            }
            else {
                /** @type {?} */
                const errorMessage = this.setElementError(element, action, option);
                errorMessages.push(errorMessage);
            }
        }));
        /** @type {?} */
        const invalidActions = option.rules.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !x.isValid));
        if (invalidActions.length === 0) {
            this.renderer.removeClass(element, option.errorElementClass);
            this.renderer.removeClass(element, option.successElementClass);
            return null;
        }
        return {
            element: element,
            messages: errorMessages
        };
    }
    /**
     * @private
     * @param {?} providers
     * @return {?}
     */
    addRelatedProviders(providers) {
        /** @type {?} */
        let newProviders = providers.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => this.relatedProviders.indexOf(x) < 0));
        newProviders.forEach((/**
         * @param {?} provider
         * @return {?}
         */
        provider => provider.onDestroy.subscribe((/**
         * @return {?}
         */
        () => {
            this.relatedProviders = this.relatedProviders.filter((/**
             * @return {?}
             */
            () => this.relatedProviders.indexOf(provider) < 0));
        }))));
        this.relatedProviders.push(...newProviders);
    }
}
ValidationService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ValidationService.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: ValidationProvider },
    { type: DataService },
    { type: ActionService }
];
ValidationService.propDecorators = {
    onDestroy: [{ type: Output }]
};
/** @nocollapse */ ValidationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ValidationService_Factory() { return new ValidationService(ɵɵinject(RendererFactory2), ɵɵinject(ValidationProvider), ɵɵinject(DataService), ɵɵinject(ActionService)); }, token: ValidationService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ValidationService.prototype.onDestroy;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.elements;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.validator;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.errClass;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.styles;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.attributeName;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.relatedProviders;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.virtualValidationOptions;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.changedItems;
    /**
     * @type {?}
     * @protected
     */
    ValidationService.prototype.rendererFactory;
    /**
     * @type {?}
     * @protected
     */
    ValidationService.prototype.validationProvider;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype._dataService;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype._actionService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValidationModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ValidationModule,
            providers: [
                ValidationService,
                ValidationProvider
            ]
        };
    }
}
ValidationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SettingItemViewModel {
}
if (false) {
    /** @type {?} */
    SettingItemViewModel.prototype.key;
    /** @type {?} */
    SettingItemViewModel.prototype.value;
}
class SettingSearchRequest extends SearchBaseRequest {
}
class SettingSearchResponse extends BaseResponse {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function BaseSearchRequest() { }
if (false) {
    /** @type {?} */
    BaseSearchRequest.prototype.searchText;
    /** @type {?} */
    BaseSearchRequest.prototype.orderBy;
    /** @type {?} */
    BaseSearchRequest.prototype.direction;
    /** @type {?} */
    BaseSearchRequest.prototype.createdBy;
    /** @type {?} */
    BaseSearchRequest.prototype.pageIndex;
    /** @type {?} */
    BaseSearchRequest.prototype.pageSize;
}
/**
 * @record
 * @template T
 */
function BaseSearchResponse() { }
if (false) {
    /** @type {?} */
    BaseSearchResponse.prototype.items;
    /** @type {?} */
    BaseSearchResponse.prototype.totalRecords;
}
class GetLookupItemsRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    GetLookupItemsRequest.prototype.params;
}
class GetLookupItemsResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    GetLookupItemsResponse.prototype.message;
    /** @type {?} */
    GetLookupItemsResponse.prototype.success;
    /** @type {?} */
    GetLookupItemsResponse.prototype.id;
    /** @type {?} */
    GetLookupItemsResponse.prototype.item;
}
class SendNotificationRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.notificationTypes = [];
        this.payloadItems = [];
        this.recipients = [];
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    SendNotificationRequest.prototype.notificationTypes;
    /** @type {?} */
    SendNotificationRequest.prototype.payloadItems;
    /** @type {?} */
    SendNotificationRequest.prototype.templateCode;
    /** @type {?} */
    SendNotificationRequest.prototype.recipients;
    /** @type {?} */
    SendNotificationRequest.prototype.fromAbiding;
}
class SendNotificationResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    SendNotificationResponse.prototype.message;
    /** @type {?} */
    SendNotificationResponse.prototype.success;
    /** @type {?} */
    SendNotificationResponse.prototype.id;
}
class NotificationType {
}
NotificationType.Email = 'Email';
NotificationType.Sms = 'Sms';
NotificationType.Local = 'Local';
if (false) {
    /** @type {?} */
    NotificationType.Email;
    /** @type {?} */
    NotificationType.Sms;
    /** @type {?} */
    NotificationType.Local;
}
class EditNotificationThreadViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.detailGroups = [];
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    EditNotificationThreadViewModel.prototype.id;
    /** @type {?} */
    EditNotificationThreadViewModel.prototype.hasRead;
    /** @type {?} */
    EditNotificationThreadViewModel.prototype.detailGroups;
}
class NotificationDetailGroup {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.details = [];
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    NotificationDetailGroup.prototype.details;
    /** @type {?} */
    NotificationDetailGroup.prototype.date;
}
class NotificationDetail {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    NotificationDetail.prototype.description;
    /** @type {?} */
    NotificationDetail.prototype.title;
    /** @type {?} */
    NotificationDetail.prototype.time;
    /** @type {?} */
    NotificationDetail.prototype.code;
    /** @type {?} */
    NotificationDetail.prototype.id;
    /** @type {?} */
    NotificationDetail.prototype.hasRead;
    /** @type {?} */
    NotificationDetail.prototype.payload;
}
class RetrieveNotificationThreadRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    RetrieveNotificationThreadRequest.prototype.id;
    /** @type {?} */
    RetrieveNotificationThreadRequest.prototype.pageIndex;
    /** @type {?} */
    RetrieveNotificationThreadRequest.prototype.pageSize;
}
class RetrieveNotificationThreadResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    RetrieveNotificationThreadResponse.prototype.message;
    /** @type {?} */
    RetrieveNotificationThreadResponse.prototype.item;
    /** @type {?} */
    RetrieveNotificationThreadResponse.prototype.success;
    /** @type {?} */
    RetrieveNotificationThreadResponse.prototype.id;
}
class NotificationTemplateVariable {
}
NotificationTemplateVariable.OrderIdentifier = 'OrderIdentifier';
NotificationTemplateVariable.PendingApprovalProductsCount = 'PendingApprovalProductsCount';
NotificationTemplateVariable.SuppliersCount = 'SuppliersCount';
NotificationTemplateVariable.PendingInquiriesCount = 'PendingInquiriesCount';
NotificationTemplateVariable.BuyerName = 'BuyerName';
NotificationTemplateVariable.ProductName = 'ProductName';
if (false) {
    /** @type {?} */
    NotificationTemplateVariable.OrderIdentifier;
    /** @type {?} */
    NotificationTemplateVariable.PendingApprovalProductsCount;
    /** @type {?} */
    NotificationTemplateVariable.SuppliersCount;
    /** @type {?} */
    NotificationTemplateVariable.PendingInquiriesCount;
    /** @type {?} */
    NotificationTemplateVariable.BuyerName;
    /** @type {?} */
    NotificationTemplateVariable.ProductName;
}
class RegisterChannelRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
class RegisterChannelResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    RegisterChannelResponse.prototype.message;
    /** @type {?} */
    RegisterChannelResponse.prototype.id;
    /** @type {?} */
    RegisterChannelResponse.prototype.success;
}
class SendLiveNotificationRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.recipients = [];
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    SendLiveNotificationRequest.prototype.message;
    /** @type {?} */
    SendLiveNotificationRequest.prototype.recipients;
}
class RemoveNotificationDetailRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    RemoveNotificationDetailRequest.prototype.id;
    /** @type {?} */
    RemoveNotificationDetailRequest.prototype.groupType;
    /** @type {?} */
    RemoveNotificationDetailRequest.prototype.dateGroup;
    /** @type {?} */
    RemoveNotificationDetailRequest.prototype.details;
}
class RemoveNotificationDetailResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    RemoveNotificationDetailResponse.prototype.message;
    /** @type {?} */
    RemoveNotificationDetailResponse.prototype.success;
    /** @type {?} */
    RemoveNotificationDetailResponse.prototype.id;
}
class RemoveNotificationDetailGroupType {
}
RemoveNotificationDetailGroupType.All = 'All';
RemoveNotificationDetailGroupType.GroupByDate = 'GroupByDate';
RemoveNotificationDetailGroupType.Single = 'Single';
if (false) {
    /** @type {?} */
    RemoveNotificationDetailGroupType.All;
    /** @type {?} */
    RemoveNotificationDetailGroupType.GroupByDate;
    /** @type {?} */
    RemoveNotificationDetailGroupType.Single;
}
class RetrieveNotificationDetailRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    RetrieveNotificationDetailRequest.prototype.id;
    /** @type {?} */
    RetrieveNotificationDetailRequest.prototype.userId;
}
class RetrieveNotificationDetailResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    RetrieveNotificationDetailResponse.prototype.message;
    /** @type {?} */
    RetrieveNotificationDetailResponse.prototype.item;
    /** @type {?} */
    RetrieveNotificationDetailResponse.prototype.success;
    /** @type {?} */
    RetrieveNotificationDetailResponse.prototype.id;
}
class SearchInboxNotificationsRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    SearchInboxNotificationsRequest.prototype.pageIndex;
    /** @type {?} */
    SearchInboxNotificationsRequest.prototype.pageSize;
    /** @type {?} */
    SearchInboxNotificationsRequest.prototype.searchText;
    /** @type {?} */
    SearchInboxNotificationsRequest.prototype.orderBy;
    /** @type {?} */
    SearchInboxNotificationsRequest.prototype.direction;
    /** @type {?} */
    SearchInboxNotificationsRequest.prototype.createdBy;
    /** @type {?} */
    SearchInboxNotificationsRequest.prototype.userId;
    /** @type {?} */
    SearchInboxNotificationsRequest.prototype.fromAbiding;
}
class SearchInboxNotificationsResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    SearchInboxNotificationsResponse.prototype.message;
    /** @type {?} */
    SearchInboxNotificationsResponse.prototype.items;
    /** @type {?} */
    SearchInboxNotificationsResponse.prototype.totalPendingRecords;
    /** @type {?} */
    SearchInboxNotificationsResponse.prototype.totalRecords;
    /** @type {?} */
    SearchInboxNotificationsResponse.prototype.success;
    /** @type {?} */
    SearchInboxNotificationsResponse.prototype.id;
}
class MarkAllNotificationsReadRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    MarkAllNotificationsReadRequest.prototype.id;
}
class MarkAllNotificationsReadResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    MarkAllNotificationsReadResponse.prototype.message;
    /** @type {?} */
    MarkAllNotificationsReadResponse.prototype.success;
    /** @type {?} */
    MarkAllNotificationsReadResponse.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.threshold = 250;
        this.timeout = 999999;
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    LoadingViewModel.prototype.threshold;
    /** @type {?} */
    LoadingViewModel.prototype.timeout;
    /** @type {?} */
    LoadingViewModel.prototype.template;
    /** @type {?} */
    LoadingViewModel.prototype.loadingText;
}
class NotificationViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    NotificationViewModel.prototype.center;
    /** @type {?} */
    NotificationViewModel.prototype.title;
    /** @type {?} */
    NotificationViewModel.prototype.customSize;
    /** @type {?} */
    NotificationViewModel.prototype.ignoreBackdropClick;
    /** @type {?} */
    NotificationViewModel.prototype.message;
    /** @type {?} */
    NotificationViewModel.prototype.btnTitle;
    /** @type {?} */
    NotificationViewModel.prototype.callback;
    /** @type {?} */
    NotificationViewModel.prototype.autoClose;
}
class ConfirmViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    ConfirmViewModel.prototype.center;
    /** @type {?} */
    ConfirmViewModel.prototype.title;
    /** @type {?} */
    ConfirmViewModel.prototype.icon;
    /** @type {?} */
    ConfirmViewModel.prototype.customSize;
    /** @type {?} */
    ConfirmViewModel.prototype.ignoreBackdropClick;
    /** @type {?} */
    ConfirmViewModel.prototype.message;
    /** @type {?} */
    ConfirmViewModel.prototype.isDeleted;
    /** @type {?} */
    ConfirmViewModel.prototype.btnAcceptTitle;
    /** @type {?} */
    ConfirmViewModel.prototype.btnCancelTitle;
    /** @type {?} */
    ConfirmViewModel.prototype.autoClose;
    /** @type {?} */
    ConfirmViewModel.prototype.acceptCallback;
    /** @type {?} */
    ConfirmViewModel.prototype.cancelCallback;
}
class TemplateViewModel extends BaseTemplate {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    TemplateViewModel.prototype.center;
    /** @type {?} */
    TemplateViewModel.prototype.title;
    /** @type {?} */
    TemplateViewModel.prototype.mode;
    /** @type {?} */
    TemplateViewModel.prototype.customSize;
    /** @type {?} */
    TemplateViewModel.prototype.ignoreBackdropClick;
    /** @type {?} */
    TemplateViewModel.prototype.request;
    /** @type {?} */
    TemplateViewModel.prototype.icon;
    /** @type {?} */
    TemplateViewModel.prototype.btnAcceptTitle;
    /** @type {?} */
    TemplateViewModel.prototype.btnCancelTitle;
    /** @type {?} */
    TemplateViewModel.prototype.autoClose;
    /** @type {?} */
    TemplateViewModel.prototype.acceptCallback;
    /** @type {?} */
    TemplateViewModel.prototype.cancelCallback;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalServiceConstant {
}
ModalServiceConstant.Mode = {
    Create: 'Create',
    Update: 'Update',
    Picker: 'Picker',
    Delete: 'Delete',
    Custom: 'Custom'
};
if (false) {
    /** @type {?} */
    ModalServiceConstant.Mode;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotificationComponent {
    /**
     * @param {?} _sanitizationService
     * @param {?} _modalRef
     */
    constructor(_sanitizationService, _modalRef) {
        this._sanitizationService = _sanitizationService;
        this._modalRef = _modalRef;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    bypassSecurityTrustHtml(html) {
        return this._sanitizationService.bypassSecurityTrustHtml(html);
    }
    /**
     * @return {?}
     */
    cancel() {
        if (this.data.callback) {
            this.data.callback((/**
             * @return {?}
             */
            () => {
                this._modalRef.hide();
            }));
        }
        else {
            this._modalRef.hide();
        }
        if (this.data.autoClose != false) {
            this._modalRef.hide();
        }
    }
}
NotificationComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-notification',
                template: "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\"><span class=\"fa fa-bell-o\" style=\"font-size: 30px;\"></span> <span\r\n      style=\"position: absolute;margin: 4px 0px 0px 10px;\">{{data?.title ? data?.title : 'Notification'}}</span></h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <p class=\"text-center text-font-14  text-muted\" [innerHTML]=\"data?.message\"></p>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"cancel()\" class=\"btn btn-info\">{{data?.btnTitle ? data?.btnTitle : 'Cancel'}}</button>\r\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".modal-title{font-size:16px;text-transform:uppercase}.modal-content{border:none!important}"]
            }] }
];
/** @nocollapse */
NotificationComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: BsModalRef }
];
if (false) {
    /** @type {?} */
    NotificationComponent.prototype.data;
    /**
     * @type {?}
     * @private
     */
    NotificationComponent.prototype._sanitizationService;
    /** @type {?} */
    NotificationComponent.prototype._modalRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfirmComponent {
    /**
     * @param {?} _sanitizationService
     * @param {?} _modalRef
     */
    constructor(_sanitizationService, _modalRef) {
        this._sanitizationService = _sanitizationService;
        this._modalRef = _modalRef;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    bypassSecurityTrustHtml(html) {
        return this._sanitizationService.bypassSecurityTrustHtml(html);
    }
    /**
     * @return {?}
     */
    cancel() {
        if (this.data.cancelCallback) {
            this.data.cancelCallback((/**
             * @return {?}
             */
            () => {
                this._modalRef.hide();
            }));
        }
        else {
            this._modalRef.hide();
        }
        if (this.data.autoClose != false) {
            this._modalRef.hide();
        }
    }
    /**
     * @return {?}
     */
    accept() {
        if (this.data.acceptCallback) {
            this.data.acceptCallback((/**
             * @return {?}
             */
            () => {
                this._modalRef.hide();
            }));
        }
        else {
            this._modalRef.hide();
        }
        if (this.data.autoClose != false) {
            this._modalRef.hide();
        }
    }
}
ConfirmComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-confirm',
                template: "<div class=\"modal-header \">\r\n  <h4 class=\"modal-title\"><span class=\"fa fa-question-circle-o\" style=\"font-size: 30px;\"></span> <span\r\n      style=\"position: absolute;margin: 4px 0px 0px 10px;\">{{data?.title ? data?.title : 'Confirm'}}</span></h4>\r\n</div>\r\n<div class=\"modal-body justify-content-center\">\r\n  <p class=\"text-center text-font-14  text-muted\" [innerHTML]=\"data?.message\"></p>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"cancel()\" class=\"btn btn-link\">{{data?.btnCancelTitle ? data?.btnCancelTitle : 'Cancel'}}</button>\r\n  <button (click)=\"accept()\" class=\"btn btn-primary\">{{data?.btnAcceptTitle ? data?.btnAcceptTitle : 'Accept'}}</button>\r\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".modal-title{font-size:16px;text-transform:uppercase}.modal-content{border:none!important}"]
            }] }
];
/** @nocollapse */
ConfirmComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: BsModalRef }
];
if (false) {
    /** @type {?} */
    ConfirmComponent.prototype.data;
    /**
     * @type {?}
     * @private
     */
    ConfirmComponent.prototype._sanitizationService;
    /** @type {?} */
    ConfirmComponent.prototype._modalRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HtmlPipe {
    /**
     * @param {?} _sanitizer
     */
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    transform(v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    }
}
HtmlPipe.decorators = [
    { type: Pipe, args: [{
                name: 'html'
            },] }
];
/** @nocollapse */
HtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    HtmlPipe.prototype._sanitizer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoaderComponent {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _actionService
     * @param {?} _viewContainerRef
     */
    constructor(_componentFactoryResolver, _actionService, _viewContainerRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._actionService = _actionService;
        this._viewContainerRef = _viewContainerRef;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.createComponent();
    }
    /**
     * @private
     * @return {?}
     */
    createComponent() {
        this._viewContainerRef.clear();
        this._actionService.executeAsync((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const factory = this._componentFactoryResolver.resolveComponentFactory(this.template);
            this.componentRef = this._viewContainerRef.createComponent(factory);
            if (this.data) {
                /** @type {?} */
                const fields = Object.keys(this.data);
                if (fields) {
                    fields.forEach((/**
                     * @param {?} field
                     * @return {?}
                     */
                    (field) => {
                        this.componentRef.instance[field] = this.data[field];
                    }));
                }
            }
            if (this.componentRef.instance.init) {
                this.componentRef.instance.init();
            }
            /** @type {?} */
            const element = (/** @type {?} */ (((/** @type {?} */ (this.componentRef.hostView))).rootNodes[0]));
            this.containerRef.nativeElement.appendChild(element);
        }));
    }
}
LoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-loader',
                template: "<div #containerRef>\r\n</div>",
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
LoaderComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ActionService },
    { type: ViewContainerRef }
];
LoaderComponent.propDecorators = {
    template: [{ type: Input }],
    data: [{ type: Input }],
    containerRef: [{ type: ViewChild, args: ['containerRef', { static: true },] }]
};
if (false) {
    /** @type {?} */
    LoaderComponent.prototype.template;
    /** @type {?} */
    LoaderComponent.prototype.data;
    /** @type {?} */
    LoaderComponent.prototype.containerRef;
    /** @type {?} */
    LoaderComponent.prototype.componentRef;
    /**
     * @type {?}
     * @private
     */
    LoaderComponent.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    LoaderComponent.prototype._actionService;
    /**
     * @type {?}
     * @private
     */
    LoaderComponent.prototype._viewContainerRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoaderProvider {
}
LoaderProvider.propDecorators = {
    item: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LoaderProvider.prototype.item;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations = [
    LoaderComponent
];
class LoaderModule {
}
LoaderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [declarations, ...[HtmlPipe]],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule
                ],
                entryComponents: declarations,
                exports: declarations,
                providers: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TemplateComponent {
    /**
     * @param {?} _sanitizationService
     * @param {?} _modalRef
     */
    constructor(_sanitizationService, _modalRef) {
        this._sanitizationService = _sanitizationService;
        this._modalRef = _modalRef;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    bypassSecurityTrustHtml(html) {
        return this._sanitizationService.bypassSecurityTrustHtml(html);
    }
    /**
     * @return {?}
     */
    cancel() {
        if (this.data.cancelCallback) {
            this.data.cancelCallback((/**
             * @return {?}
             */
            () => {
                this._modalRef.hide();
            }));
        }
        else {
            this._modalRef.hide();
        }
        if (this.data.autoClose != false) {
            this._modalRef.hide();
        }
    }
    /**
     * @return {?}
     */
    accept() {
        if (this.isValid()) {
            if (this.data.acceptCallback) {
                this.loader.componentRef.instance.callback(this.data.mode).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                (response) => {
                    this.data.acceptCallback(response, this.loader.componentRef.instance);
                    this._modalRef.hide();
                }));
            }
            else {
                this._modalRef.hide();
            }
            if (this.data.autoClose != false) {
                this._modalRef.hide();
            }
        }
    }
    /**
     * @return {?}
     */
    show() {
        if (this.loader && this.loader.componentRef && this.loader.componentRef.instance) {
            return this.loader.componentRef.instance.show();
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    isValid() {
        if (this.loader && this.loader.componentRef && this.loader.componentRef.instance && this.loader.componentRef.instance.isValid) {
            return this.loader.componentRef.instance.isValid();
        }
        else {
            return false;
        }
    }
}
TemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-template',
                template: "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\"><span class=\"{{data?.icon ? data?.icon : 'fa fa-twitter'}}\" style=\"font-size: 30px;\"></span>\r\n    <span style=\"position: absolute;margin: 4px 0px 0px 10px;\">{{data?.title ? data?.title : 'Template'}}</span></h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <katana-loader #loader [data]=\"data?.data\" [template]=\"data?.template\"></katana-loader>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"cancel()\" class=\"btn btn-default\">{{data?.btnCancelTitle ? data?.btnCancelTitle : 'Cancel'}}</button>\r\n  <button [disabled]=\"!isValid()\" (click)=\"accept()\"\r\n    class=\"btn btn-primary\">{{data?.btnAcceptTitle ? data?.btnAcceptTitle : 'Accept'}}</button>\r\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".modal-title{font-size:16px;text-transform:uppercase}.modal-content{border:none!important}"]
            }] }
];
/** @nocollapse */
TemplateComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: BsModalRef }
];
TemplateComponent.propDecorators = {
    loader: [{ type: ViewChild, args: ['loader', { static: true },] }]
};
if (false) {
    /** @type {?} */
    TemplateComponent.prototype.loader;
    /** @type {?} */
    TemplateComponent.prototype.data;
    /**
     * @type {?}
     * @private
     */
    TemplateComponent.prototype._sanitizationService;
    /** @type {?} */
    TemplateComponent.prototype._modalRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalService {
    /**
     * @param {?} _bsModalService
     * @param {?} Ng4LoadingSpinnerService
     */
    constructor(_bsModalService, Ng4LoadingSpinnerService) {
        this._bsModalService = _bsModalService;
        this.Ng4LoadingSpinnerService = Ng4LoadingSpinnerService;
    }
    /**
     * @return {?}
     */
    showLoading() {
        this.Ng4LoadingSpinnerService.show();
    }
    /**
     * @return {?}
     */
    hideLoading() {
        this.Ng4LoadingSpinnerService.hide();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    showNotificationDialog(data) {
        /** @type {?} */
        var customCss = data.customSize + (data.center ? ' modal-dialog-centered modal-xlg' : '');
        this._modalInstance = this._bsModalService.show(NotificationComponent, {
            backdrop: 'static',
            class: customCss,
            keyboard: false,
            ignoreBackdropClick: data.ignoreBackdropClick,
            animated: true
        });
        this._modalInstance.content.data = data;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    showConfirmDialog(data) {
        /** @type {?} */
        var customCss = data.customSize + (data.center ? ' modal-dialog-centered modal-xlg' : '');
        this._modalInstance = this._bsModalService.show(ConfirmComponent, {
            backdrop: 'static',
            class: customCss,
            keyboard: false,
            ignoreBackdropClick: data.ignoreBackdropClick,
            animated: true
        });
        this._modalInstance.content.data = data;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    showTemplateDialog(data) {
        /** @type {?} */
        var customCss = data.customSize + (data.center ? ' modal-dialog-centered modal-xlg' : '');
        this._modalInstance = this._bsModalService.show(TemplateComponent, {
            backdrop: 'static',
            class: customCss,
            keyboard: false,
            ignoreBackdropClick: data.ignoreBackdropClick,
            animated: true
        });
        this._modalInstance.content.data = data;
    }
}
ModalService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ModalService.ctorParameters = () => [
    { type: BsModalService },
    { type: Ng4LoadingSpinnerService }
];
/** @nocollapse */ ModalService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(ɵɵinject(BsModalService$1), ɵɵinject(Ng4LoadingSpinnerService)); }, token: ModalService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype._modalInstance;
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype._bsModalService;
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.Ng4LoadingSpinnerService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.option)
            this.option = new LoadingViewModel();
    }
}
LoadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-loading',
                template: "<ng-container *ngIf=\"option?.template then custom; else default\"></ng-container>\r\n\r\n<ng-template #custom>\r\n  <ng4-loading-spinner [threshold]=\"option?.threshold\" [timeout]=\"option?.timeout\" [template]=\"option?.template\"\r\n    [loadingText]=\"option?.loadingText\" [zIndex]=\"9999\">\r\n  </ng4-loading-spinner>\r\n</ng-template>\r\n\r\n<ng-template #default>\r\n  <ng4-loading-spinner [threshold]=\"option?.threshold\" [timeout]=\"option?.timeout\"\r\n    [loadingText]=\"option?.loadingText\" [zIndex]=\"9999\"></ng4-loading-spinner>\r\n</ng-template>",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
LoadingComponent.propDecorators = {
    option: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LoadingComponent.prototype.option;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations$1 = [
    NotificationComponent,
    ConfirmComponent,
    TemplateComponent,
    LoadingComponent
];
class CModalModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CModalModule,
            providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsModalService,
                ModalService,
                Ng4LoadingSpinnerService
            ]
        };
    }
}
CModalModule.decorators = [
    { type: NgModule, args: [{
                declarations: declarations$1,
                imports: [
                    CommonModule,
                    LoaderModule,
                    ModalModule.forRoot(),
                    Ng4LoadingSpinnerModule.forRoot()
                ],
                entryComponents: declarations$1,
                exports: declarations$1,
                providers: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    UserViewModel.prototype.id;
    /** @type {?} */
    UserViewModel.prototype.fullName;
    /** @type {?} */
    UserViewModel.prototype.firstName;
    /** @type {?} */
    UserViewModel.prototype.lastName;
    /** @type {?} */
    UserViewModel.prototype.userName;
    /** @type {?} */
    UserViewModel.prototype.email;
    /** @type {?} */
    UserViewModel.prototype.image;
    /** @type {?} */
    UserViewModel.prototype.phone;
    /** @type {?} */
    UserViewModel.prototype.dateOfBirth;
    /** @type {?} */
    UserViewModel.prototype.externalInfo;
}
class AuthenticationViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    AuthenticationViewModel.prototype.userName;
    /** @type {?} */
    AuthenticationViewModel.prototype.password;
}
class AuthenticationLoginRequest extends BaseRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        this.payload = new AuthenticationViewModel();
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    AuthenticationLoginRequest.prototype.token;
    /** @type {?} */
    AuthenticationLoginRequest.prototype.payload;
}
class AuthenticationLoginResponse extends BaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    AuthenticationLoginResponse.prototype.user;
    /** @type {?} */
    AuthenticationLoginResponse.prototype.token;
}
class AuthenticationCreateRequest extends BaseRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
class AuthenticationCreateResponse extends BaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
class AuthenticationUpdateRequest extends BaseRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
class AuthenticationUpdateResponse extends BaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
class AuthenticationRetrieveRequest extends BaseRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
class AuthenticationRetrieveResponse extends BaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
class AuthenticationDeleteRequest extends BaseRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    AuthenticationDeleteRequest.prototype.ids;
}
class AuthenticationDeleteResponse extends BaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
class AuthenticationSearchRequest extends SearchBaseRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
class AuthenticationSearchResponse extends SearchBaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthConst {
}
AuthConst.Token = 'Token';
AuthConst.User = 'User';
if (false) {
    /** @type {?} */
    AuthConst.Token;
    /** @type {?} */
    AuthConst.User;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthenticationService extends MockService {
    /**
     * @param {?} httpClient
     * @param {?} _cacheService
     * @param {?} _router
     */
    constructor(httpClient, _cacheService, _router) {
        super();
        this.httpClient = httpClient;
        this._cacheService = _cacheService;
        this._router = _router;
        this.api = 'v1/authentications/search';
        /** @type {?} */
        var user = (/** @type {?} */ (this._cacheService.get(AuthConst.User)));
        this._cacheService.set(AuthConst.User, user);
        this.currentUser = user;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    search(request) {
        return this.verify(this.httpClient.get(`${this.api}/search`, { params: (/** @type {?} */ (request)) }), request.mockData);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    retrieve(request) {
        return this.verify(this.httpClient.get(`${this.api}/${request.payload.userName}`), request.mockData);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    login(request) {
        return this.verify(this.httpClient.post(`${this.api}/login`, request), request.mockData);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    create(request) {
        return this.verify(this.httpClient.post(`${this.api}/`, request), request.mockData);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    update(request) {
        return this.verify(this.httpClient.put(`${this.api}/`, request), request.mockData);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    delete(request) {
        return this.verify(this.httpClient.delete(`${this.api}?ids=${request.ids}`), request.mockData);
    }
    /**
     * @param {?=} path
     * @param {?=} refresh
     * @return {?}
     */
    logout(path = '/', refresh = false) {
        this._cacheService.remove(AuthConst.User);
        this._router.navigate([path]);
        if (refresh)
            window.location.href = window.location.href;
    }
}
AuthenticationService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
AuthenticationService.ctorParameters = () => [
    { type: HttpClient },
    { type: CacheService },
    { type: Router }
];
/** @nocollapse */ AuthenticationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthenticationService_Factory() { return new AuthenticationService(ɵɵinject(HttpClient), ɵɵinject(CacheService), ɵɵinject(Router)); }, token: AuthenticationService, providedIn: "root" });
if (false) {
    /** @type {?} */
    AuthenticationService.prototype.currentUser;
    /**
     * @type {?}
     * @protected
     */
    AuthenticationService.prototype.api;
    /**
     * @type {?}
     * @protected
     */
    AuthenticationService.prototype.httpClient;
    /**
     * @type {?}
     * @private
     */
    AuthenticationService.prototype._cacheService;
    /**
     * @type {?}
     * @private
     */
    AuthenticationService.prototype._router;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in-out', style({ opacity: 1 }))
    ]),
    transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms ease-in-out', style({ opacity: 0 }))
    ])
]);
/** @type {?} */
const fadeDownInOut = trigger('fadeDownInOut', [
    transition(':enter', [
        style({ transform: 'translateY(30px)', opacity: 0 }),
        animate('300ms ease-in-out', style({ transform: 'translateY(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('300ms ease-in-out', style({ transform: 'translateY(30px)', opacity: 0 }))
    ])
]);
/** @type {?} */
const fadeRightInOut = trigger('fadeRightInOut', [
    transition(':enter', [
        style({ transform: 'translateX(30px)', opacity: 0 }),
        animate('300ms ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('300ms ease-in-out', style({ transform: 'translateX(30px)', opacity: 0 }))
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotFoundComponent {
    /**
     * @param {?} _router
     */
    constructor(_router) {
        this._router = _router;
    }
    /**
     * @return {?}
     */
    gotoHome() {
        this._router.navigate(['/']);
    }
}
NotFoundComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-no-content',
                template: "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>Kh\u00F4ng t\u00ECm th\u1EA5y trang</title>\r\n    <style>\r\n        body {\r\n            margin: 0;\r\n            background: #f4f3f0;\r\n            color: #666666;\r\n            font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", 'Open Sans', \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n        }\r\n\r\n        h1,\r\n        h2,\r\n        h3,\r\n        h4,\r\n        h5,\r\n        h6 {\r\n            font-weight: 500;\r\n            margin-bottom: 0;\r\n        }\r\n\r\n        .content-wrapper {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n        }\r\n\r\n        .main-content {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            flex-direction: column;\r\n            width: 862px;\r\n            height: 400px;\r\n            padding: 1rem;\r\n        }\r\n\r\n        .text-muted {\r\n            color: #73717a;\r\n        }\r\n\r\n        .text-primary {\r\n            color: #EB5D13;\r\n        }\r\n\r\n        .home-btn {\r\n            cursor: pointer;\r\n            font-family: inherit;\r\n            background: #EB5D13;\r\n            color: white;\r\n            font-weight: 500;\r\n            text-align: center;\r\n            white-space: nowrap;\r\n            vertical-align: middle;\r\n            user-select: none;\r\n            border: 1px solid transparent;\r\n            padding: 0.375rem 0.75rem;\r\n            font-size: 14px;\r\n            line-height: 1.5;\r\n            border-radius: 1px;\r\n            transition: all 0.15s ease-in-out;\r\n            outline: none;\r\n        }\r\n\r\n        .home-btn:hover {\r\n            background: rgb(211, 84, 16);\r\n        }\r\n\r\n        .image {\r\n            position: relative;\r\n        }\r\n\r\n        .cls-1 {\r\n            fill: #b0b0b0;\r\n        }\r\n\r\n        .cls-2 {\r\n            fill: #cdcdcd;\r\n        }\r\n\r\n        .cls-3 {\r\n            fill: gray;\r\n        }\r\n\r\n        .cls-4 {\r\n            fill: #fafafa;\r\n        }\r\n\r\n        .cls-5 {\r\n            fill: #9c9b9b;\r\n        }\r\n\r\n        .cls-6 {\r\n            fill: #9c9b9b;\r\n        }\r\n\r\n        .cls-7 {\r\n            fill: #a9a9a9;\r\n        }\r\n\r\n        .cls-8 {\r\n            fill: #9c9b9b;\r\n        }\r\n\r\n        .cls-9 {\r\n            fill: #e1e1e1;\r\n        }\r\n\r\n        .cls-10 {\r\n            fill: #565656;\r\n        }\r\n\r\n        .cls-11 {\r\n            fill: #fff;\r\n        }\r\n\r\n        .cls-12 {\r\n            fill: #e8e8e8;\r\n        }\r\n\r\n        .image-404 {\r\n            max-width: 150px;\r\n            width: 100%;\r\n        }\r\n\r\n        .logo {\r\n            padding-bottom: 2rem;\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n    <div class=\"content-wrapper\">\r\n        <div class=\"main-content\">\r\n            <h3 class=\" text-primary logo\">404</h3>\r\n            <div class=\"image\">\r\n                <div class=\"icon\">\r\n                    <svg class=\"image-404\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 429.4 301.63\">\r\n                        <path\r\n                            d=\"M353.1 7c-60.4-21.62-127.4 8.47-149.65 67.22-15.42 40.74-5.28 84.56 22.53 114.8a114.63 114.63 0 0 0 15.17 13.8c9.74 10.83-17.63 23-28.06 26.84a1 1 0 0 0 .22 1.96c68.73 7.63 114.1-2.8 137.62-11.1l.98-.36.56-.2q5.14-1.8 10.07-4.08a80.2 80.2 0 0 0 7.25-3.65 113.82 113.82 0 0 0 52.34-59.66C444.42 93.82 413.5 28.65 353.1 7z\"\r\n                            class=\"cls-1\" />\r\n                        <path\r\n                            d=\"M348.8 7a113.38 113.38 0 0 0-108.87 195.83c9.47 10.82-17.16 22.98-27.3 26.83a1.02 1.02 0 0 0 .27 1.96c66.85 7.63 110.98-2.8 133.86-11.1l.95-.36.6-.2q5-1.8 9.8-4.08a77.23 77.23 0 0 0 7.05-3.65A113.33 113.33 0 0 0 348.8 7z\"\r\n                            class=\"cls-2\" />\r\n                        <path\r\n                            d=\"M31.9 278.16a4.96 4.96 0 0 1-4.6-4.92v-99.46a4.7 4.7 0 0 1 4.6-4.62h130.67a4.82 4.82 0 0 1 4.74 4.62v99.46a5.1 5.1 0 0 1-4.7 4.92z\"\r\n                            class=\"cls-3\" />\r\n                        <path\r\n                            d=\"M162.57 170.16a3.72 3.72 0 0 1 3.74 3.62v99.46a3.98 3.98 0 0 1-3.7 3.92H31.9a3.85 3.85 0 0 1-3.6-3.92v-99.46a3.6 3.6 0 0 1 3.6-3.62h130.4m.27-2H31.9a5.8 5.8 0 0 0-5.6 5.62v100.46c0 2.96 2.64 4.92 5.6 4.92h130.67c2.96 0 5.74-1.96 5.74-4.92V173.78a5.92 5.92 0 0 0-5.7-5.62z\"\r\n                            class=\"cls-2\" />\r\n                        <path\r\n                            d=\"M164.3 260.4v10.5c0 1.96-1.95 3.26-3.9 3.26H34.07a3.5 3.5 0 0 1-3.75-3.26v-97.2a3.73 3.73 0 0 1 3.76-3.54H160.4a3.86 3.86 0 0 1 3.9 3.53v86.7z\"\r\n                            class=\"cls-4\" />\r\n                        <path d=\"M32.37 170.16H162a2.3 2.3 0 0 1 2.3 2.3v15.7h-134v-15.94a2.06 2.06 0 0 1 2.07-2.06z\"\r\n                            class=\"cls-4\" />\r\n                        <path d=\"M28.3 188.16h138v2h-138z\" class=\"cls-5\" />\r\n                        <circle cx=\"39.18\" cy=\"179.11\" r=\"2.52\" class=\"cls-6\" />\r\n                        <circle cx=\"47\" cy=\"179.11\" r=\"2.52\" class=\"cls-6\" />\r\n                        <circle cx=\"54.82\" cy=\"179.11\" r=\"2.52\" class=\"cls-6\" />\r\n                        <path\r\n                            d=\"M109.65 254.16a3.94 3.94 0 0 0 3.6-5.02 17.14 17.14 0 0 0-33 .06 3.9 3.9 0 0 0 3.6 4.96z\"\r\n                            class=\"cls-7\" />\r\n                        <path\r\n                            d=\"M109.65 254.16a3.94 3.94 0 0 0 3.6-5.02 17.14 17.14 0 0 0-33 .06 3.9 3.9 0 0 0 3.6 4.96z\"\r\n                            class=\"cls-7\" />\r\n                        <path\r\n                            d=\"M106.83 254.16a3.08 3.08 0 0 0 2.83-3.92 13.4 13.4 0 0 0-25.8.04 3.04 3.04 0 0 0 2.82 3.88z\"\r\n                            class=\"cls-8\" />\r\n                        <circle cx=\"64.42\" cy=\"235.5\" r=\"5.15\" class=\"cls-9\" />\r\n                        <circle cx=\"130.05\" cy=\"235.5\" r=\"5.15\" class=\"cls-9\" />\r\n                        <circle cx=\"123.99\" cy=\"217.4\" r=\"4.68\" class=\"cls-10\" />\r\n                        <circle cx=\"127.08\" cy=\"215.92\" r=\"1.48\" class=\"cls-11\" />\r\n                        <circle cx=\"70.49\" cy=\"217.4\" r=\"4.68\" class=\"cls-10\" />\r\n                        <circle cx=\"73.58\" cy=\"215.92\" r=\"1.48\" class=\"cls-11\" />\r\n                        <ellipse cx=\"96.55\" cy=\"297.08\" class=\"cls-12\" rx=\"85.78\" ry=\"4.55\" />\r\n                        <path\r\n                            d=\"M55.7 195.16H35.4a1 1 0 0 1 0-2h20.3a1 1 0 0 1 0 2zm104.34 79h-8.1c-.47 0-.86-.02-.86-.5s.4-.5.87-.5h8.1a2.58 2.58 0 0 0 2.26-2.53v-7.17a1 1 0 0 1 2 0v7.17c0 2.16-2.1 3.53-4.22 3.53z\"\r\n                            class=\"cls-11\" />\r\n                        <path\r\n                            d=\"M18.56 160.9a1.73 1.73 0 0 1-1.18-.45l-16.05-14.8a1.74 1.74 0 0 1 2.35-2.55l16.06 14.8a1.74 1.74 0 0 1-1.18 3zm5.8-6.6a1.74 1.74 0 0 1-1.7-1.4l-2.28-11.7a1.74 1.74 0 1 1 3.4-.67l2.3 11.7a1.74 1.74 0 0 1-1.4 2.05 1.7 1.7 0 0 1-.32.03zM1.74 170a1.74 1.74 0 0 1-.16-3.47l14.55-1.37a1.74 1.74 0 0 1 .32 3.47L1.9 170h-.16z\"\r\n                            class=\"cls-5\" />\r\n                        <path\r\n                            d=\"M272.3 87.16v39h9v3h-9v14h-3v-14h-28v-3.23l27.54-38.77zm-3 4h-.63l-24.2 35h24.84zm39.52 53.24a17.6 17.6 0 0 1-10.06-2.65 19.65 19.65 0 0 1-6.25-6.87 29.74 29.74 0 0 1-3.2-9.4 59.02 59.02 0 0 1 0-20.53 29.75 29.75 0 0 1 3.25-9.4 19.66 19.66 0 0 1 6.26-6.87 20.36 20.36 0 0 1 20.1 0 19.68 19.68 0 0 1 6.27 6.87 29.8 29.8 0 0 1 3.23 9.4 58.97 58.97 0 0 1 0 20.53 29.78 29.78 0 0 1-3.25 9.4 19.67 19.67 0 0 1-6.25 6.87 17.6 17.6 0 0 1-10.05 2.65zm0-2.7a13.98 13.98 0 0 0 8.67-2.53 17.75 17.75 0 0 0 5.22-6.46 30.1 30.1 0 0 0 2.66-8.53 54.35 54.35 0 0 0 0-17.83 30.1 30.1 0 0 0-2.66-8.57 17.75 17.75 0 0 0-5.27-6.46 16.1 16.1 0 0 0-17.35 0 17.7 17.7 0 0 0-5.27 6.46 30.02 30.02 0 0 0-2.66 8.58 54.35 54.35 0 0 0 0 17.84 30.03 30.03 0 0 0 2.65 8.58 17.7 17.7 0 0 0 5.27 6.47 13.98 13.98 0 0 0 8.66 2.53zm57.48-54.54v39h9v3h-9v14h-3v-14h-28v-3.23l27.73-38.77zm-3 4h-.43l-24.2 35h24.64z\"\r\n                            class=\"cls-11\" />\r\n                    </svg>\r\n                </div>\r\n            </div>\r\n            <h2>Oops! Kh\u00F4ng t\u00ECm th\u1EA5y trang n\u00E0y.</h2>\r\n            <p class=\"text-muted\">Trang b\u1EA1n m\u1EDF c\u00F3 th\u1EC3 \u0111\u00E3 b\u1ECB x\u00F3a, \u0111\u1ED5i t\u00EAn ho\u1EB7c kh\u00F4ng t\u1ED3n t\u1EA1i tr\u00EAn h\u1EC7 th\u1ED1ng\r\n                !</p>\r\n            <button (click)=\"gotoHome()\" class=\"home-btn mt-2\">\r\n                V\u1EC0 TRANG CH\u1EE6\r\n            </button>\r\n        </div>\r\n    </div>\r\n</body>\r\n\r\n</html>"
            }] }
];
/** @nocollapse */
NotFoundComponent.ctorParameters = () => [
    { type: Router }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NotFoundComponent.prototype._router;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccessDeniedComponent {
    /**
     * @param {?} _router
     * @param {?} _location
     */
    constructor(_router, _location) {
        this._router = _router;
        this._location = _location;
    }
    /**
     * @return {?}
     */
    gotoHome() {
        this._router.navigate(['/']);
    }
    /**
     * @return {?}
     */
    back() {
        this._location.back();
    }
}
AccessDeniedComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-forbidden',
                template: "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>Kh\u00F4ng t\u00ECm th\u1EA5y trang</title>\r\n    <style>\r\n        body {\r\n            margin: 0;\r\n            background: #f4f3f0;\r\n            color: #666666;\r\n            font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", 'Open Sans', \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n        }\r\n\r\n        h1,\r\n        h2,\r\n        h3,\r\n        h4,\r\n        h5,\r\n        h6 {\r\n            font-weight: 500;\r\n            margin-bottom: 0;\r\n        }\r\n\r\n        a {\r\n            color: #EB5D13;\r\n            text-decoration: none;\r\n        }\r\n\r\n        a:hover {\r\n            text-decoration: underline;\r\n        }\r\n\r\n        .content-wrapper {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n        }\r\n\r\n        .main-content {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            flex-direction: column;\r\n            width: 862px;\r\n            height: 400px;\r\n            padding: 1rem;\r\n        }\r\n\r\n        .text-muted {\r\n            color: #73717a;\r\n        }\r\n\r\n        .text-primary {\r\n            color: #EB5D13;\r\n        }\r\n\r\n        .home-btn {\r\n            cursor: pointer;\r\n            font-family: inherit;\r\n            background: #EB5D13;\r\n            color: white;\r\n            font-weight: 500;\r\n            text-align: center;\r\n            white-space: nowrap;\r\n            vertical-align: middle;\r\n            user-select: none;\r\n            border: 1px solid transparent;\r\n            padding: 0.375rem 0.75rem;\r\n            font-size: 14px;\r\n            line-height: 1.5;\r\n            border-radius: 1px;\r\n            transition: all 0.15s ease-in-out;\r\n            outline: none;\r\n        }\r\n\r\n        .home-btn:hover {\r\n            background: rgb(211, 84, 16);\r\n        }\r\n\r\n\r\n        .image {\r\n            position: relative;\r\n        }\r\n\r\n        .image-404 {\r\n            max-width: 70px;\r\n            width: 100%;\r\n        }\r\n\r\n        .logo {\r\n            padding-bottom: 2rem;\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n    <div class=\"content-wrapper\">\r\n        <div class=\"main-content\">\r\n            <h3 class=\" text-primary logo\">403</h3>\r\n            <div class=\"image\">\r\n                <div class=\"icon\">\r\n                    <svg class=\"image-404\" viewBox=\"0 0 512 512\">\r\n                        <path fill=\"orange\"\r\n                            d=\"M507.494 426.066L282.864 53.537a31.372 31.372 0 0 0-53.73 0L4.506 426.066a31.37 31.37 0 0 0 26.864 47.569h449.259a31.372 31.372 0 0 0 26.865-47.569zM256.167 167.227c12.901 0 23.817 7.278 23.817 20.178 0 39.363-4.631 95.929-4.631 135.292 0 10.255-11.247 14.554-19.186 14.554-10.584 0-19.516-4.3-19.516-14.554 0-39.363-4.63-95.929-4.63-135.292 0-12.9 10.584-20.178 24.146-20.178zm.331 243.791c-14.554 0-25.471-11.908-25.471-25.47 0-13.893 10.916-25.47 25.471-25.47 13.562 0 25.14 11.577 25.14 25.47 0 13.562-11.578 25.47-25.14 25.47z\" />\r\n                    </svg>\r\n                </div>\r\n            </div>\r\n            <h3>R\u1EA5t ti\u1EBFc, b\u1EA1n ch\u01B0a \u0111\u1EE7 quy\u1EC1n truy c\u1EADp trang n\u00E0y.</h3>\r\n            <p class=\"text-muted\">B\u1EA1n c\u00F3 th\u1EC3 <a href=\"javascript:;\" (click)=\"back()\">tr\u1EDF l\u1EA1i trang tr\u01B0\u1EDBc</a> ho\u1EB7c v\u1EC1 <a\r\n                    href=\"javascript::\" (click)=\"gotoHome()\"> trang ch\u1EE7</a> !</p>\r\n        </div>\r\n    </div>\r\n</body>\r\n\r\n</html>"
            }] }
];
/** @nocollapse */
AccessDeniedComponent.ctorParameters = () => [
    { type: Router },
    { type: Location }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AccessDeniedComponent.prototype._router;
    /**
     * @type {?}
     * @private
     */
    AccessDeniedComponent.prototype._location;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WorkingComponent {
    /**
     * @param {?} _router
     */
    constructor(_router) {
        this._router = _router;
    }
    /**
     * @return {?}
     */
    gotoHome() {
        this._router.navigate(['/']);
    }
}
WorkingComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-working',
                template: "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>Kh\u00F4ng t\u00ECm th\u1EA5y trang</title>\r\n    <style>\r\n        body {\r\n            margin: 0;\r\n            background: #f4f3f0;\r\n            color: #666666;\r\n            font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", 'Open Sans', \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n        }\r\n\r\n        h1,\r\n        h2,\r\n        h3,\r\n        h4,\r\n        h5,\r\n        h6 {\r\n            font-weight: 500;\r\n            margin-bottom: 0;\r\n        }\r\n\r\n        .content-wrapper {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n        }\r\n\r\n        .main-content {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            flex-direction: column;\r\n            width: 862px;\r\n            height: 400px;\r\n            padding: 1rem;\r\n        }\r\n\r\n        .text-muted {\r\n            color: #73717a;\r\n        }\r\n\r\n        .text-primary {\r\n            color: #EB5D13;\r\n        }\r\n\r\n        .home-btn {\r\n            cursor: pointer;\r\n            font-family: inherit;\r\n            background: #EB5D13;\r\n            color: white;\r\n            font-weight: 500;\r\n            text-align: center;\r\n            white-space: nowrap;\r\n            vertical-align: middle;\r\n            user-select: none;\r\n            border: 1px solid transparent;\r\n            padding: 0.375rem 0.75rem;\r\n            font-size: 14px;\r\n            line-height: 1.5;\r\n            border-radius: 1px;\r\n            transition: all 0.15s ease-in-out;\r\n            outline: none;\r\n        }\r\n\r\n        .home-btn:hover {\r\n            background: rgb(211, 84, 16);\r\n        }\r\n\r\n        .image {\r\n            position: relative;\r\n        }\r\n\r\n        #cog1,\r\n        #cog2,\r\n        #cog3 {\r\n            animation: spin 4s linear infinite;\r\n            transform-origin: center;\r\n            transform-box: fill-box;\r\n            animation-delay: 0.6s;\r\n        }\r\n\r\n        #cog1 {\r\n            fill: darkgray;\r\n        }\r\n\r\n        #cog2 {\r\n            animation: spinback 4s linear infinite;\r\n            animation-delay: 0.6s;\r\n            fill: darkgray;\r\n        }\r\n\r\n        #cog3 {\r\n            fill: darkgray;\r\n        }\r\n\r\n        @-webkit-keyframes pop {\r\n            0% {\r\n                transform: scale(0);\r\n            }\r\n\r\n            90% {\r\n                transform: scale(1.1);\r\n            }\r\n\r\n            100% {\r\n                transform: scale(1);\r\n            }\r\n        }\r\n\r\n        @-webkit-keyframes spin {\r\n            100% {\r\n                transform: rotate(360deg);\r\n            }\r\n        }\r\n\r\n        @-webkit-keyframes spinback {\r\n            100% {\r\n                transform: rotate(-360deg);\r\n            }\r\n        }\r\n\r\n        .image-404 {\r\n            max-width: 100px;\r\n            width: 100%;\r\n        }\r\n\r\n        .logo {\r\n            padding-bottom: 2rem;\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n    <div class=\"content-wrapper\">\r\n        <div class=\"main-content\">\r\n            <h3 class=\" text-primary logo\">400</h3>\r\n            <div class=\"image\">\r\n                <div class=\"icon\">\r\n                    <svg id=\"cogs\" class=\"image-404\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                        xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 225 184\" xml:space=\"preserve\">\r\n                        <path id=\"cog3\" d=\"M163.1,48.3c-3.4,0.9-6.7,2.1-9.8,3.4c2.6,12-7.6,15.9-14.8,10.8c-2.8,1.9-4.8,4.6-5.7,8.3\r\n                              c7.6,5.1,3.8,18.7-6.5,17.5c0,3.9,0,7.8,0,11.7c11-1.1,13.4,12.5,6.5,18.4c1.9,2.8,2.8,6.7,6.5,7.6c6.5-5.5,16.5-0.5,13.9,10.8\r\n                              c3.1,1.2,6.4,2.5,9.8,3.4c1.4-9.5,15.7-9.5,17.2,0c3.4-0.9,6.7-2.1,9.8-3.4c-2.6-12,7.6-15.9,14.8-10.8c2.8-1.9,4.8-4.6,5.7-8.3\r\n                              c-7.6-5.1-3.8-18.7,6.5-17.5c0-3.9,0-7.8,0-11.7c-11,0.9-13.4-12.5-6.5-18.4c-1.9-2.8-2.6-6.7-6.5-7.4c-6.5,5.5-16.5,0.5-13.9-10.8\r\n                              c-3.1-1.2-6.4-2.5-9.8-3.4C177.9,58.2,165.5,58.2,163.1,48.3z M188.7,94.2c0,9.5-7.6,17.3-17,17.3c-9.5,0-17-7.8-17-17.3\r\n                              c0-9.5,7.6-17.3,17-17.3C181.1,76.7,188.7,84.5,188.7,94.2z\" />\r\n                        <path id=\"cog2\" d=\"M85.1,7.3c-3.4,0.9-6.7,2.1-9.8,3.4c2.6,12-7.6,15.9-14.8,10.8c-2.8,1.9-4.8,4.6-5.7,8.3\r\n                              c7.6,5.1,3.8,18.7-6.5,17.5c0,3.9,0,7.8,0,11.7c11-1.1,13.4,12.5,6.5,18.4c1.9,2.8,2.8,6.7,6.5,7.6c6.5-5.5,16.5-0.5,13.9,10.8\r\n                              c3.1,1.2,6.4,2.5,9.8,3.4c1.4-9.5,15.7-9.5,17.2,0c3.4-0.9,6.7-2.1,9.8-3.4c-2.6-12,7.6-15.9,14.8-10.8c2.8-1.9,4.8-4.6,5.7-8.3\r\n                              c-7.6-5.1-3.8-18.7,6.5-17.5c0-3.9,0-7.8,0-11.7c-11,0.9-13.4-12.5-6.5-18.4c-1.9-2.8-2.6-6.7-6.5-7.4c-6.5,5.5-16.5,0.5-13.9-10.8\r\n                              c-3.1-1.2-6.4-2.5-9.8-3.4C99.9,17.2,87.5,17.2,85.1,7.3z M110.7,53.2c0,9.5-7.6,17.3-17,17.3c-9.5,0-17-7.8-17-17.3\r\n                              s7.6-17.3,17-17.3C103.1,35.7,110.7,43.5,110.7,53.2z\" />\r\n                        <path id=\"cog1\" d=\"M46.1,86.3c-3.4,0.9-6.7,2.1-9.8,3.4c2.6,12-7.6,15.9-14.8,10.8c-2.8,1.9-4.8,4.6-5.7,8.3\r\n                              c7.6,5.1,3.8,18.7-6.5,17.5c0,3.9,0,7.8,0,11.7c11-1.1,13.4,12.5,6.5,18.4c1.9,2.8,2.8,6.7,6.5,7.6c6.5-5.5,16.5-0.5,13.9,10.8\r\n                              c3.1,1.2,6.4,2.5,9.8,3.4c1.4-9.5,15.7-9.5,17.2,0c3.4-0.9,6.7-2.1,9.8-3.4c-2.6-12,7.6-15.9,14.8-10.8c2.8-1.9,4.8-4.6,5.7-8.3\r\n                              c-7.6-5.1-3.8-18.7,6.5-17.5c0-3.9,0-7.8,0-11.7c-11,0.9-13.4-12.5-6.5-18.4c-1.9-2.8-2.6-6.7-6.5-7.4c-6.5,5.5-16.5,0.5-13.9-10.8\r\n                              c-3.1-1.2-6.4-2.5-9.8-3.4C60.9,96.2,48.5,96.2,46.1,86.3z M71.7,132.2c0,9.5-7.6,17.3-17,17.3c-9.5,0-17-7.8-17-17.3\r\n                              s7.6-17.3,17-17.3C64.1,114.7,71.7,122.5,71.7,132.2z\" />\r\n                    </svg>\r\n                </div>\r\n            </div>\r\n            <h3>Ch\u1EE9c n\u0103ng \u0111ang x\u00E2y d\u1EF1ng.</h3>\r\n            <p class=\"text-muted\">Vui l\u00F2ng tr\u1EDF l\u1EA1i sau !</p>\r\n            <button (click)=\"gotoHome()\" class=\"home-btn mt-2\">\r\n                V\u1EC0 TRANG CH\u1EE6\r\n            </button>\r\n        </div>\r\n    </div>\r\n</body>\r\n\r\n</html>"
            }] }
];
/** @nocollapse */
WorkingComponent.ctorParameters = () => [
    { type: Router }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    WorkingComponent.prototype._router;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations$2 = [
    NotFoundComponent,
    AccessDeniedComponent,
    WorkingComponent
];
class PageModule {
}
PageModule.decorators = [
    { type: NgModule, args: [{
                declarations: declarations$2,
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule
                ],
                entryComponents: declarations$2,
                exports: declarations$2,
                providers: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileViewModel extends Audit {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    FileViewModel.prototype.id;
    /** @type {?} */
    FileViewModel.prototype.name;
    /** @type {?} */
    FileViewModel.prototype.src;
    /** @type {?} */
    FileViewModel.prototype.type;
    /** @type {?} */
    FileViewModel.prototype.size;
}
class FileRequest extends MockData {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    FileRequest.prototype.items;
    /** @type {?} */
    FileRequest.prototype.others;
    /** @type {?} */
    FileRequest.prototype.createdBy;
}
class FileResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.items = [];
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    FileResponse.prototype.code;
    /** @type {?} */
    FileResponse.prototype.status;
    /** @type {?} */
    FileResponse.prototype.message;
    /** @type {?} */
    FileResponse.prototype.totalRecords;
    /** @type {?} */
    FileResponse.prototype.items;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileService extends MockService {
    /**
     * @param {?} httpClient
     * @param {?} authenticationService
     */
    constructor(httpClient, authenticationService) {
        super();
        this.httpClient = httpClient;
        this.authenticationService = authenticationService;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    uploadFiles(request) {
        return this.verify(this.httpClient.post('v1/Files/', request), request.mockData);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    uploadProgress(file) {
        /** @type {?} */
        const response = new HttpResponse({
            body: new FileResponse({
                items: [new FileViewModel({
                        src: 'https://znews-photo.zadn.vn/w660/Uploaded/xbhunku/2017_06_02/338006.jpg',
                        createdDate: new Date(),
                        lastModifiedDate: new Date(),
                        createdBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null,
                        lastModifiedBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null
                    })]
            })
        });
        return of(response);
    }
}
FileService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
FileService.ctorParameters = () => [
    { type: HttpClient },
    { type: AuthenticationService }
];
/** @nocollapse */ FileService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FileService_Factory() { return new FileService(ɵɵinject(HttpClient), ɵɵinject(AuthenticationService)); }, token: FileService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FileService.prototype.httpClient;
    /**
     * @type {?}
     * @protected
     */
    FileService.prototype.authenticationService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileConst {
}
FileConst.AcceptedFiles = 'txt|doc|docx|image/jpg|image/jpeg|image/png';
FileConst.MaxSize = 5; //MB
if (false) {
    /** @type {?} */
    FileConst.AcceptedFiles;
    /** @type {?} */
    FileConst.MaxSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileProvider {
    /**
     * @param {?} _fileService
     * @param {?} _modalService
     * @param {?} _actionService
     * @param {?} _authenticationService
     */
    constructor(_fileService, _modalService, _actionService, _authenticationService) {
        this._fileService = _fileService;
        this._modalService = _modalService;
        this._actionService = _actionService;
        this._authenticationService = _authenticationService;
    }
    /**
     * @param {?} files
     * @param {?} attachments
     * @param {?} fileRef
     * @param {?=} callback
     * @return {?}
     */
    uploadAsync(files, attachments, fileRef, callback) {
        /** @type {?} */
        var request = this.buildRequest(files, attachments);
        this._actionService.executeAsync((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const totalAttachmentSize = this.calculateTotalBytes(attachments, request.items);
            if (totalAttachmentSize > FileConst.MaxSize * 1024 * 1024) {
                this._modalService.showNotificationDialog({
                    autoClose: true,
                    title: 'Thông báo',
                    message: 'Dung lượng không được vượt quá <span class="text-bold text-primary">' + FileConst.MaxSize + '</span> MB.',
                    btnTitle: 'Đóng'
                });
                if (callback) {
                    callback();
                }
            }
            else {
                if (request.others.length == 0) {
                    this.uploadFileAsync(request, fileRef, callback);
                }
                else {
                    /** @type {?} */
                    let otherTypes = '';
                    request.others.forEach((/**
                     * @param {?} file
                     * @return {?}
                     */
                    file => {
                        if (file) {
                            if (otherTypes.indexOf(file.type) == -1) {
                                otherTypes += file.type + '|';
                            }
                        }
                    }));
                    if (otherTypes)
                        otherTypes = otherTypes.substring(0, otherTypes.length - 1);
                    if (request.items.length == 0) {
                        this._modalService.showNotificationDialog({
                            autoClose: true,
                            title: 'Thông báo',
                            message: 'Định dạng tệp tin không hợp lệ <span class="text-bold text-primary">' + otherTypes + '</span>.',
                            btnTitle: 'Đóng'
                        });
                        if (callback) {
                            callback();
                        }
                    }
                    else {
                        this._modalService.showConfirmDialog({
                            autoClose: true,
                            title: 'Thông báo',
                            message: 'Có <span class="text-bold text-primary">' + request.others.length + '</span> định dạng tệp tin không hợp lệ <span class="text-bold text-primary">' + otherTypes + '</span>.<br/> Bạn có muốn tiếp tục tải tệp tin khác không?',
                            btnAcceptTitle: 'Tiếp tục',
                            btnCancelTitle: 'Hủy',
                            acceptCallback: (/**
                             * @return {?}
                             */
                            () => {
                                this.uploadFileAsync(request, fileRef, callback);
                            })
                        });
                        if (callback) {
                            callback();
                        }
                    }
                }
            }
        }));
    }
    /**
     * @private
     * @param {?} request
     * @param {?} fileRef
     * @param {?=} callback
     * @return {?}
     */
    uploadFileAsync(request, fileRef, callback) {
        this._fileService.uploadFiles(request).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            if (fileRef && fileRef.value) {
                fileRef.value = '';
            }
            if (response && response.items) {
                if (callback) {
                    callback();
                }
                response.items.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    /** @type {?} */
                    const currentAttachment = request.items.find((/**
                     * @param {?} s
                     * @return {?}
                     */
                    s => s.src == item.src && s.name == item.name));
                    if (!currentAttachment) {
                        request.items.push(item);
                    }
                }));
            }
        }));
    }
    /**
     * @private
     * @param {?} attachments
     * @param {?=} items
     * @return {?}
     */
    calculateTotalBytes(attachments, items) {
        /** @type {?} */
        let totalAmount = 0;
        if (attachments) {
            if (attachments) {
                attachments.forEach((/**
                 * @param {?} attachment
                 * @return {?}
                 */
                (attachment) => {
                    totalAmount += attachment.size;
                }));
            }
            if (items) {
                items.forEach((/**
                 * @param {?} attachment
                 * @return {?}
                 */
                (attachment) => {
                    totalAmount += attachment.size;
                }));
            }
        }
        return totalAmount;
    }
    /**
     * @private
     * @param {?} files
     * @param {?} attachments
     * @return {?}
     */
    buildRequest(files, attachments) {
        /** @type {?} */
        const request = {
            createdBy: this._authenticationService.currentUser.id,
            items: []
        };
        /** @type {?} */
        const otherFiles = [];
        for (let i = 0; i < files.length; i++) {
            if (files[i]) {
                /** @type {?} */
                const reader = new FileReader();
                reader.readAsDataURL(files[i]);
                reader.onloadend = (/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const base64String = (/** @type {?} */ (reader.result));
                    if (files[i].type && FileConst.AcceptedFiles.indexOf(files[i].type) > -1) {
                        request.items.push({
                            size: files[i].size,
                            type: files[i].type,
                            src: base64String,
                            name: files[i].name
                        });
                    }
                    else {
                        otherFiles.push({
                            size: files[i].size,
                            type: files[i].type,
                            src: base64String,
                            name: files[i].name
                        });
                    }
                });
            }
        }
        if (attachments) {
            attachments.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                /** @type {?} */
                const currentAttachment = request.items.find((/**
                 * @param {?} s
                 * @return {?}
                 */
                s => s.src == item.src && s.name == item.name));
                if (!currentAttachment) {
                    request.items.push(item);
                }
            }));
        }
        request.others = otherFiles;
        return request;
    }
}
FileProvider.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
FileProvider.ctorParameters = () => [
    { type: FileService },
    { type: ModalService },
    { type: ActionService },
    { type: AuthenticationService }
];
/** @nocollapse */ FileProvider.ngInjectableDef = ɵɵdefineInjectable({ factory: function FileProvider_Factory() { return new FileProvider(ɵɵinject(FileService), ɵɵinject(ModalService), ɵɵinject(ActionService), ɵɵinject(AuthenticationService)); }, token: FileProvider, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    FileProvider.prototype._fileService;
    /**
     * @type {?}
     * @private
     */
    FileProvider.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    FileProvider.prototype._actionService;
    /**
     * @type {?}
     * @private
     */
    FileProvider.prototype._authenticationService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CropperComponent {
    /**
     * @param {?} _actionService
     */
    constructor(_actionService) {
        this._actionService = _actionService;
        this.cutRatio = 1 / 1;
        this.resizeToWidth = 800;
        this.maintainAspectRatio = true;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.showCropper = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.init();
    }
    /**
     * @param {?} image
     * @return {?}
     */
    setImage(image) {
        this.imageChangedEvent = this.eventFile;
    }
    /**
     * @return {?}
     */
    imageLoaded() {
        this.showCropper = true;
        console.log('Image loaded');
    }
    /**
     * @return {?}
     */
    cropperReady() {
        console.log('Cropper ready');
    }
    /**
     * @return {?}
     */
    loadImageFailed() {
        console.log('Load failed');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
    /**
     * @return {?}
     */
    isValid() {
        return true;
    }
    /**
     * @return {?}
     */
    callback() {
        return of(this.croppedImage);
    }
    /**
     * @return {?}
     */
    getErrors() {
        return of([]);
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        this._actionService.executeAsync((/**
         * @return {?}
         */
        () => {
            this.imageChangedEvent = this.eventFile;
        }));
    }
}
CropperComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-cropper',
                template: "<image-cropper #cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"maintainAspectRatio\" [aspectRatio]=\"cutRatio\"\r\n               [resizeToWidth]=\"resizeToWidth\" [onlyScaleDown]=\"true\" format=\"png\" (imageCropped)=\"imageCropped($event)\"\r\n               (imageLoaded)=\"imageLoaded()\" (loadImageFailed)=\"loadImageFailed()\"></image-cropper>",
                styles: [""]
            }] }
];
/** @nocollapse */
CropperComponent.ctorParameters = () => [
    { type: ActionService }
];
CropperComponent.propDecorators = {
    cropper: [{ type: ViewChild, args: ['cropper', { static: true },] }],
    imageElement: [{ type: Input }],
    eventFile: [{ type: Input }],
    cutRatio: [{ type: Input }],
    resizeToWidth: [{ type: Input }],
    maintainAspectRatio: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CropperComponent.prototype.cropper;
    /** @type {?} */
    CropperComponent.prototype.imageElement;
    /** @type {?} */
    CropperComponent.prototype.eventFile;
    /** @type {?} */
    CropperComponent.prototype.cutRatio;
    /** @type {?} */
    CropperComponent.prototype.resizeToWidth;
    /** @type {?} */
    CropperComponent.prototype.maintainAspectRatio;
    /** @type {?} */
    CropperComponent.prototype.imageChangedEvent;
    /** @type {?} */
    CropperComponent.prototype.croppedImage;
    /** @type {?} */
    CropperComponent.prototype.showCropper;
    /**
     * @type {?}
     * @private
     */
    CropperComponent.prototype._actionService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UploaderComponent {
    /**
     * @param {?} modalService
     * @param {?} fileService
     * @param {?} authenticationService
     */
    constructor(modalService, fileService, authenticationService) {
        this.modalService = modalService;
        this.fileService = fileService;
        this.authenticationService = authenticationService;
        this.icon = 'fa fa-twitter';
        this.title = 'Chỉnh sửa ảnh';
        this.multiple = true;
        this.maxSize = 10 * 1024 * 1024;
        this.fileType = 'default';
        this.changeLoading = new EventEmitter();
        this.changeProgress = new EventEmitter();
        this.fileUploaded = new EventEmitter();
        this.progress = 0;
        this.subscriptions = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    /**
     * @param {?} files
     * @param {?} event
     * @return {?}
     */
    onFileUploaded(files, event) {
        if (!files || files.length == 0)
            return;
        this.execute(files, event);
    }
    /**
     * @private
     * @param {?} files
     * @param {?} event
     * @return {?}
     */
    execute(files, event) {
        if (files.length == 0)
            return;
        /** @type {?} */
        var file = files[0];
        /** @type {?} */
        const validationResult = this.initValidation(file);
        if (!validationResult.isValid) {
            validationResult.errors.forEach((/**
             * @param {?} x
             * @return {?}
             */
            x => {
                switch (x) {
                    case 'Size':
                        this.modalService.showNotificationDialog(new NotificationViewModel({
                            message: `Kích thước file phải nhỏ hơn ${this.maxSize / (1024 * 1024)} mb`
                        }));
                        break;
                    case 'Type':
                        this.modalService.showNotificationDialog(new NotificationViewModel({
                            message: `Loại file không phù hợp`
                        }));
                        break;
                }
            }));
            return;
        }
        if (this.cropImage) {
            /** @type {?} */
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = (/**
             * @param {?} loadEvent
             * @return {?}
             */
            (loadEvent) => {
                /** @type {?} */
                const image = new FileViewModel({
                    createdDate: new Date(),
                    lastModifiedDate: new Date(),
                    createdBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null,
                    lastModifiedBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null
                });
                image.src = loadEvent.target.result;
                this.modalService.showTemplateDialog({
                    title: this.title,
                    customSize: 'modal-lg',
                    mode: 'Custom',
                    autoClose: true,
                    icon: this.icon,
                    data: {
                        imageElement: image,
                        eventFile: event,
                        cutRatio: this.cutRatio,
                        maintainAspectRatio: this.maintainAspectRatio,
                        resizeToWidth: this.resizeToWidth
                    },
                    template: CropperComponent,
                    acceptCallback: (/**
                     * @param {?} base64String
                     * @return {?}
                     */
                    (base64String) => {
                        /** @type {?} */
                        const base64FileParts = base64String.split(',');
                        if (base64FileParts.length < 2) {
                            return;
                        }
                        /** @type {?} */
                        const base64FileData = base64FileParts[1];
                        this.loading = true;
                        this.changeLoading.emit(this.loading);
                        this.fileService.uploadFiles(new FileRequest({
                            createdBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null,
                            items: [new FileViewModel({
                                    src: base64FileData,
                                    name: file.name,
                                    size: file.size,
                                    type: file.type,
                                    createdDate: new Date(),
                                    lastModifiedDate: new Date(),
                                    createdBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null,
                                    lastModifiedBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null
                                })],
                            mockData: new FileResponse({
                                status: true,
                                items: [
                                    new FileViewModel({
                                        src: base64String,
                                        size: file.size,
                                        name: file.name,
                                        createdDate: new Date(),
                                        lastModifiedDate: new Date(),
                                        createdBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null,
                                        lastModifiedBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null
                                    })
                                ]
                            })
                        })).pipe(take(1), finalize((/**
                         * @return {?}
                         */
                        () => {
                            this.loading = false;
                            this.changeLoading.emit(this.loading);
                        }))).subscribe((/**
                         * @param {?} response
                         * @return {?}
                         */
                        response => {
                            if (response.items.length > 0) {
                                /** @type {?} */
                                const uploadedFilePath = response.items[0].src;
                                this.fileUploaded.emit(new FileViewModel({
                                    src: uploadedFilePath,
                                    name: file.name,
                                    size: file.size,
                                    type: file.type,
                                    createdDate: new Date(),
                                    lastModifiedDate: new Date(),
                                    createdBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null,
                                    lastModifiedBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null
                                }));
                            }
                        }));
                    })
                });
            });
        }
        else {
            this.loading = true;
            this.changeLoading.emit(this.loading);
            /** @type {?} */
            const uploadFileSubscription = this.fileService.uploadProgress(file).pipe(tap(((/**
             * @param {?} event
             * @return {?}
             */
            event => {
                if (event.type === HttpEventType.UploadProgress) {
                    this.progress = Math.round((100 * event.loaded) / event.total);
                    this.changeProgress.emit(this.progress);
                }
                else if (event.type === HttpEventType.Response) {
                    /** @type {?} */
                    const response = event.body;
                    this.progress = 0;
                    this.loading = false;
                    this.changeProgress.emit(this.progress);
                    this.changeLoading.emit(this.loading);
                    this.fileUploaded.emit(new FileViewModel({
                        src: response.items && response.items.length > 0 ? response.items[0].src : null,
                        name: file.name
                    }));
                }
            })), (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                console.log(err);
            }))).subscribe();
            this.subscriptions.add(uploadFileSubscription);
        }
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    initValidation(file) {
        /** @type {?} */
        let isValid = true;
        /** @type {?} */
        let errors = [];
        if (this.fileType) {
            this.initExtentionFile(this.fileType);
            /** @type {?} */
            const types = file.name.split('.');
            /** @type {?} */
            const extension = types[types.length - 1];
            isValid = this.currentTypes.indexOf(extension) >= 0;
            if (!isValid) {
                errors.push('Type');
                return { isValid: isValid, errors: errors };
            }
        }
        if (this.maxSize && this.maxSize !== 0) {
            isValid = +file.size < +this.maxSize;
            if (!isValid) {
                errors.push('Size');
                return { isValid: isValid, errors: errors };
            }
            ;
        }
        return { isValid: isValid, errors: errors };
    }
    /**
     * @private
     * @param {?} fileType
     * @return {?}
     */
    initExtentionFile(fileType) {
        switch (fileType) {
            case 'doc':
                this.currentTypes = ['csv', 'doc', 'docx', 'log', 'msg', 'rtf', 'txt', 'wpf', 'pdf', 'csv', 'ppt', 'pps', 'vcf', 'xlr', 'xls', 'xlsx'];
                break;
            case 'image':
                this.currentTypes = ['bmp', 'dds', 'gif', 'heic', 'jpg', 'png', 'psd', 'thm', 'tif', 'jpe', 'jpeg'];
                break;
            case 'audio':
                this.currentTypes = ['aif', 'iff', 'm3u', 'm4a', 'mid', 'mp3', 'mpa', 'wav', 'wma'];
                break;
            case 'video':
                this.currentTypes = ['3g2', '3gp', 'avi', 'flv', 'm4v', 'mov', 'mp4', 'mpg', 'wmv'];
                break;
            case 'default':
                this.currentTypes = ['csv', 'doc', 'docx', 'log', 'msg', 'rtf', 'txt', 'wpf', 'pdf', 'csv', 'ppt', 'pps', 'vcf', 'xlr', 'xls', 'xlsx',
                    'bmp', 'dds', 'gif', 'heic', 'jpg', 'png', 'psd', 'thm', 'tif', 'jpe', 'jpeg',
                    'aif', 'iff', 'm3u', 'm4a', 'mid', 'mp3', 'mpa', 'wav', 'wma',
                    '3g2', '3gp', 'avi', 'flv', 'm4v', 'mov', 'mp4', 'mpg', 'wmv'
                ];
                break;
            default: return;
        }
    }
}
UploaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-file-uploader',
                template: "<div>\r\n  <a (click)=\"file.click()\">\r\n    <ng-content></ng-content>\r\n  </a>\r\n  <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin loading-icon fa-fw\"></i>\r\n  <input [attr.validation-name]=\"validationName\" type=\"file\" #file (click)=\"file.value = null\"\r\n    (change)=\"onFileUploaded($event.target.files, $event)\" style=\"visibility:hidden; width: 0; height: 0;\" />\r\n</div>",
                styles: [".tiny{width:50px}.small{width:90px}.medium{width:200px}.large{width:400px}.full{width:100%}.image-radious{border-radius:50%;overflow:hidden}.image-gallery-wrapper .title-gallery{font-weight:500;text-transform:uppercase;color:#6c757d}.image-gallery-wrapper .ngx-dnd-container{display:flex;flex-wrap:wrap;position:relative}.image-gallery-wrapper .ngx-dnd-container.big-image{padding-left:212px;min-height:205px}.image-gallery-wrapper .ngx-dnd-container.big-image .ngx-dnd-item:first-child{position:absolute;left:0;top:0;width:200px}.cover-tool{display:none}.selected-file .deletable-image .selected-icon,.selected-file .deletable-image::before{opacity:1}.deletable-image{display:inline-block;position:relative}.deletable-image::before{content:\"\";position:absolute;width:100%;height:100%;background-color:rgba(255,255,255,.3);opacity:0;z-index:1;transition:.4s ease-in-out}.deletable-image .selected-icon{color:#0f0;opacity:0;transition:.4s ease-in-out;font-size:30px;position:absolute;bottom:0;right:0;z-index:2;display:unset!important}.deletable-image .cover-tool{display:block;position:absolute;background:rgba(255,255,255,.3);transition:.4s ease-in-out;width:100%;height:100%;top:0;visibility:hidden;opacity:0;transform:translateY(0);z-index:3}.deletable-image .cover-tool a{text-decoration:none;text-align:center;width:25px;line-height:25px;height:25px;background:rgba(255,255,255,.5);transition:.1s}.deletable-image .cover-tool a.edit{color:#052d3e}.deletable-image .cover-tool a.remove{color:#d61e00}.deletable-image .cover-tool a:hover{background:#fff}.deletable-image .cover-tool katana-file-uploader{display:block;text-decoration:none;text-align:center;width:25px;line-height:25px;height:25px;background:rgba(255,255,255,.5);transition:.1s}.deletable-image .cover-tool katana-file-uploader a{position:relative;top:0;display:block;color:#052d3e}.deletable-image:hover .selected-icon,.deletable-image:hover::before{opacity:0}.deletable-image:hover .cover-tool{display:block;transform:translateY(0);visibility:visible;opacity:1}.selected-icon{display:none}.img-ratio-4-3{position:relative;width:100%;height:0;overflow:hidden;padding-bottom:75%}.img-ratio-4-3 img{position:absolute;top:50%;left:50%;transform:translate3D(-50%,-50%,0);width:100%;height:auto}.img-ratio-4-3 img .img-width{width:100%;height:auto}.img-ratio-4-3 img.img-height{height:100%;width:auto}.img-ratio-4-3 .iframe--wrapper{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%}.img-ratio-4-3 iframe{left:0;top:0;height:100%;width:100%;position:absolute}.img-ratio-1-1{position:relative;width:100%;height:0;overflow:hidden;padding-bottom:100%}.img-ratio-1-1 img{position:absolute;top:50%;left:50%;transform:translate3D(-50%,-50%,0);width:100%;height:auto}.img-ratio-1-1 img.img-width{width:100%;height:auto}.img-ratio-1-1 img.img-height{height:100%;width:auto}.img-ratio-16-9{padding-bottom:56.25%;height:0;width:100%;position:relative;overflow:hidden}.img-ratio-16-9 img{position:absolute;top:50%;left:50%;transform:translate3D(-50%,-50%,0);height:100%}.img-ratio-16-9 img.full-width,.img-ratio-16-9 img.img-width{width:100%;height:auto}.img-ratio-16-9 .iframe--wrapper,.img-ratio-16-9 .videocall__wrapper{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%}a{text-decoration:none}.loading-image{background:rgba(255,255,255,.3);transition:.4s ease-in-out;width:100%;height:100%;top:0;right:0;text-align:center;align-items:center}.loading-image i{color:#eb5d13}.progress-bar-striped.active{-webkit-animation:.4s linear infinite progress-bar-stripes;animation:.4s linear infinite progress-bar-stripes}"]
            }] }
];
/** @nocollapse */
UploaderComponent.ctorParameters = () => [
    { type: ModalService },
    { type: FileService },
    { type: AuthenticationService }
];
UploaderComponent.propDecorators = {
    icon: [{ type: Input }],
    title: [{ type: Input }],
    multiple: [{ type: Input }],
    cropImage: [{ type: Input }],
    validationName: [{ type: Input }],
    maxSize: [{ type: Input }],
    fileType: [{ type: Input }],
    cutRatio: [{ type: Input }],
    resizeToWidth: [{ type: Input }],
    maintainAspectRatio: [{ type: Input }],
    changeLoading: [{ type: Output, args: ['checkedLoading',] }],
    changeProgress: [{ type: Output, args: ['checkedProgress',] }],
    fileUploaded: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UploaderComponent.prototype.icon;
    /** @type {?} */
    UploaderComponent.prototype.title;
    /** @type {?} */
    UploaderComponent.prototype.multiple;
    /** @type {?} */
    UploaderComponent.prototype.cropImage;
    /** @type {?} */
    UploaderComponent.prototype.validationName;
    /** @type {?} */
    UploaderComponent.prototype.maxSize;
    /** @type {?} */
    UploaderComponent.prototype.fileType;
    /** @type {?} */
    UploaderComponent.prototype.cutRatio;
    /** @type {?} */
    UploaderComponent.prototype.resizeToWidth;
    /** @type {?} */
    UploaderComponent.prototype.maintainAspectRatio;
    /** @type {?} */
    UploaderComponent.prototype.changeLoading;
    /** @type {?} */
    UploaderComponent.prototype.changeProgress;
    /** @type {?} */
    UploaderComponent.prototype.fileUploaded;
    /** @type {?} */
    UploaderComponent.prototype.loading;
    /** @type {?} */
    UploaderComponent.prototype.progress;
    /**
     * @type {?}
     * @private
     */
    UploaderComponent.prototype.currentTypes;
    /**
     * @type {?}
     * @private
     */
    UploaderComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @protected
     */
    UploaderComponent.prototype.modalService;
    /**
     * @type {?}
     * @protected
     */
    UploaderComponent.prototype.fileService;
    /**
     * @type {?}
     * @protected
     */
    UploaderComponent.prototype.authenticationService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CropperModule {
}
CropperModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CropperComponent],
                imports: [
                    CommonModule,
                    ImageCropperModule
                ],
                exports: [CropperComponent],
                entryComponents: [CropperComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileModule {
}
FileModule.decorators = [
    { type: NgModule, args: [{
                declarations: [UploaderComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    CropperModule
                ],
                exports: [UploaderComponent],
                entryComponents: [UploaderComponent],
                providers: [
                    FileService,
                    FileProvider
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabItemComponent {
}
TabItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-tab',
                template: '<ng-template><ng-content></ng-content></ng-template>'
            }] }
];
TabItemComponent.propDecorators = {
    template: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
    name: [{ type: Input }],
    icon: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TabItemComponent.prototype.template;
    /** @type {?} */
    TabItemComponent.prototype.name;
    /** @type {?} */
    TabItemComponent.prototype.icon;
    /** @type {?} */
    TabItemComponent.prototype.index;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EditorAdapter {
    /**
     * @param {?} loader
     * @param {?} fileService
     * @param {?} authenticationService
     */
    constructor(loader, fileService, authenticationService) {
        this.loader = loader;
        this.fileService = fileService;
        this.authenticationService = authenticationService;
    }
    /**
     * @return {?}
     */
    upload() {
        return this.loader.file.then((/**
         * @param {?} file
         * @return {?}
         */
        file => new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            /** @type {?} */
            var reader = new FileReader();
            reader.onloadend = (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const base64Data = reader.result.toString().split(',');
                if (base64Data.length < 2) {
                    return;
                }
                /** @type {?} */
                const base64FileData = base64Data[1];
                this.fileService.uploadFiles(new FileRequest({
                    items: [
                        new FileViewModel({
                            name: file.name,
                            src: base64FileData
                        })
                    ],
                    mockData: new FileResponse({
                        items: [new FileViewModel({
                                src: (/** @type {?} */ (reader.result)),
                                name: file.name
                            })]
                    })
                })).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                response => {
                    /** @type {?} */
                    var src = '';
                    if (response.items && response.items.length > 0) {
                        src = response.items[0].src;
                    }
                    resolve({ default: src });
                }), (/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => {
                    console.log(err);
                }));
            });
            reader.readAsDataURL(file);
        }))));
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    EditorAdapter.prototype.loader;
    /**
     * @type {?}
     * @protected
     */
    EditorAdapter.prototype.fileService;
    /**
     * @type {?}
     * @protected
     */
    EditorAdapter.prototype.authenticationService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EditorComponent {
    /**
     * @param {?} fileService
     * @param {?} authenticationService
     * @param {?} _actionService
     */
    constructor(fileService, authenticationService, _actionService) {
        this.fileService = fileService;
        this.authenticationService = authenticationService;
        this._actionService = _actionService;
        this.model = '';
        this.disabled = false;
        this.emitNullOnDestroy = false;
        this.modelChange = new EventEmitter();
        this.plainTextChange = new EventEmitter();
        this.editor = Editor;
        this.config = {
            height: '600px'
        };
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.emitNullOnDestroy === true)
            this.modelChange.emit(null);
    }
    /**
     * @param {?} html
     * @return {?}
     */
    change(html) {
        /** @type {?} */
        const plainText = this.nativeEditor.elementRef.nativeElement.textContent;
        this.plainTextChange.emit(plainText);
        this.modelChange.emit(html);
    }
    /**
     * @param {?} event
     * @param {?} fileService
     * @param {?} authenticationService
     * @return {?}
     */
    ready(event, fileService, authenticationService) {
        event.plugins.get('FileRepository').createUploadAdapter = (/**
         * @param {?} loader
         * @return {?}
         */
        function (loader) {
            return new EditorAdapter(loader, fileService, authenticationService);
        });
        if (this.focus) {
            this._actionService.executeAsync((/**
             * @return {?}
             */
            () => {
                event.ui.getEditableElement().focus();
            }));
        }
    }
}
EditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-editor',
                template: "<div class=\"form-group\">\r\n  <label *ngIf=\"title\">{{title}}</label>\r\n  <ckeditor #nativeEditor [class.disabled]=\"disabled\" [config]=\"config\" [attr.validation-name]=\"validationName\"\r\n    [disabled]=\"disabled\" [editor]=\"editor\" [ngModel]=\"model\" (ngModelChange)=\"change($event)\"\r\n    [attr.scope]=\"validationScope ? validationScope : null\" (ready)=\"ready($event, fileService, authenticationService)\">\r\n  </ckeditor>\r\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
EditorComponent.ctorParameters = () => [
    { type: FileService },
    { type: AuthenticationService },
    { type: ActionService }
];
EditorComponent.propDecorators = {
    nativeEditor: [{ type: ViewChild, args: ['nativeEditor', { static: true },] }],
    model: [{ type: Input }],
    plainText: [{ type: Input }],
    title: [{ type: Input }],
    disabled: [{ type: Input }],
    validationName: [{ type: Input }],
    validationScope: [{ type: Input }],
    emitNullOnDestroy: [{ type: Input }],
    modelChange: [{ type: Output }],
    focus: [{ type: Input }],
    plainTextChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    EditorComponent.prototype.nativeEditor;
    /** @type {?} */
    EditorComponent.prototype.model;
    /** @type {?} */
    EditorComponent.prototype.plainText;
    /** @type {?} */
    EditorComponent.prototype.title;
    /** @type {?} */
    EditorComponent.prototype.disabled;
    /** @type {?} */
    EditorComponent.prototype.validationName;
    /** @type {?} */
    EditorComponent.prototype.validationScope;
    /** @type {?} */
    EditorComponent.prototype.emitNullOnDestroy;
    /** @type {?} */
    EditorComponent.prototype.modelChange;
    /** @type {?} */
    EditorComponent.prototype.focus;
    /** @type {?} */
    EditorComponent.prototype.plainTextChange;
    /** @type {?} */
    EditorComponent.prototype.editor;
    /** @type {?} */
    EditorComponent.prototype.config;
    /** @type {?} */
    EditorComponent.prototype.fileService;
    /** @type {?} */
    EditorComponent.prototype.authenticationService;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype._actionService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormDirectorExtraItemDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
FormDirectorExtraItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[katanaLabelExtraItem]'
            },] }
];
/** @nocollapse */
FormDirectorExtraItemDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    FormDirectorExtraItemDirective.prototype.template;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormDirectorComponent {
    constructor() {
        this.direction = 'vertical';
        this.alignVertical = true;
    }
}
FormDirectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-form-director',
                template: "<div class=\"form-group\" [ngClass]=\"{'d-md-flex align-items-center': direction === 'horizontal'}\">\r\n  <div *ngIf=\"title\" [ngClass]=\"{'col-sm-4 p-0': direction === 'horizontal' && alignVertical}\">\r\n    <label [ngClass]=\"{'m-b-0' : direction === 'horizontal'}\">{{title}}\r\n      <span *ngIf=\"description\" class=\"katana-tooltip\">\r\n        <span class=\"tooltiptext tooltip-top\">{{description}}</span>\r\n        <i class=\"fa fa-question-circle text-muted\"></i>\r\n      </span>\r\n    </label>\r\n    <label class=\"pull-right\" *ngIf=\"extraLabelItem\">\r\n      <ng-container [ngTemplateOutlet]=\"extraLabelItem.template\"></ng-container>\r\n    </label>\r\n  </div>\r\n  <div class=\"ml-auto\" [ngClass]=\"{'col-sm-8': direction === 'horizontal' && alignVertical}\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>",
                styles: ["span{white-space:pre-wrap;word-break:break-word}.katana-tooltip{position:relative;overflow:unset;display:inline-block}.katana-tooltip span{white-space:pre-wrap;word-break:break-word}.katana-tooltip.primary .tooltiptext{background-color:#338bf8;color:#fff}.katana-tooltip.primary .tooltip-top{box-shadow:none}.katana-tooltip.primary .tooltip-top:after{border-color:#338bf8 transparent transparent}.katana-tooltip.info .tooltiptext{background-color:#1d9ce7;color:#fff}.katana-tooltip.info .tooltip-top{box-shadow:none}.katana-tooltip.info .tooltip-top:after{border-color:#1d9ce7 transparent transparent}.katana-tooltip.dark .tooltiptext{background-color:#052d3e;color:#fff}.katana-tooltip.dark .tooltip-top{box-shadow:none}.katana-tooltip.dark .tooltip-top:after{border-color:#052d3e transparent transparent}.katana-tooltip .tooltiptext{word-break:break-word;max-width:180px;min-width:120px;line-height:2;word-break:break-word;visibility:hidden;position:absolute;white-space:normal;background-color:#fff;color:#052d3e;text-align:center;padding:5px;border-radius:5px;z-index:1;opacity:0;transition:.3s;font-size:12px;font-weight:500;transform:translateY(20px)}.katana-tooltip .tooltip-top{white-space:pre-wrap;word-break:break-word;box-shadow:1px 3px 9px rgba(0,0,0,.18);bottom:120%;left:50%;margin-left:-60px}.katana-tooltip .tooltip-top:after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#fff transparent transparent}.katana-tooltip:hover .tooltiptext{visibility:visible;opacity:1;transform:translateY(0)}"]
            }] }
];
FormDirectorComponent.propDecorators = {
    direction: [{ type: Input }],
    alignVertical: [{ type: Input }],
    title: [{ type: Input }],
    description: [{ type: Input }],
    extraLabelItem: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FormDirectorComponent.prototype.direction;
    /** @type {?} */
    FormDirectorComponent.prototype.alignVertical;
    /** @type {?} */
    FormDirectorComponent.prototype.title;
    /** @type {?} */
    FormDirectorComponent.prototype.description;
    /** @type {?} */
    FormDirectorComponent.prototype.extraLabelItem;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormItemDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
FormItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[katana-item]'
            },] }
];
/** @nocollapse */
FormItemDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    FormItemDirective.prototype.template;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormComponent {
    constructor() {
        this.column = 4;
        this.smallWidth = 12;
        this.mediumWidth = 4;
        this.largeWidth = 3;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.column && changes.column.firstChange) {
            /** @type {?} */
            const column = changes.column.currentValue;
            switch (column) {
                case 1: {
                    this.smallWidth = 12;
                    this.mediumWidth = 12;
                    this.largeWidth = 12;
                    break;
                }
                case 2: {
                    this.smallWidth = 12;
                    this.mediumWidth = 12;
                    this.largeWidth = 6;
                    break;
                }
                case 3: {
                    this.smallWidth = 12;
                    this.mediumWidth = 6;
                    this.largeWidth = 4;
                    break;
                }
                case 4: {
                    this.smallWidth = 12;
                    this.mediumWidth = 4;
                    this.largeWidth = 3;
                    break;
                }
            }
        }
    }
}
FormComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-form',
                template: "<div class=\"row panel-space\">\r\n  <div class=\"col-sm-{{smallWidth}} col-md-{{mediumWidth}} col-lg-{{largeWidth}} px-2\" *ngFor=\"let i of formItems\">\r\n    <ng-template [ngTemplateOutlet]=\"i.template\"></ng-template>\r\n  </div>\r\n</div>",
                styles: [""]
            }] }
];
FormComponent.propDecorators = {
    formItems: [{ type: ContentChildren, args: [FormItemDirective,] }],
    column: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FormComponent.prototype.formItems;
    /** @type {?} */
    FormComponent.prototype.column;
    /** @type {?} */
    FormComponent.prototype.smallWidth;
    /** @type {?} */
    FormComponent.prototype.mediumWidth;
    /** @type {?} */
    FormComponent.prototype.largeWidth;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations$3 = [FormComponent, FormDirectorComponent, FormItemDirective, FormDirectorExtraItemDirective];
class FormModule {
}
FormModule.decorators = [
    { type: NgModule, args: [{
                declarations: declarations$3,
                imports: [
                    CommonModule,
                    FormsModule
                ],
                exports: declarations$3
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownModule {
}
DropdownModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DropdownComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    ValidationModule,
                    NgSelectModule,
                    FormModule
                ],
                exports: [DropdownComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SpinnerComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.isSpinnerVisible = true;
        this.subscriptions = new Subscription();
        /** @type {?} */
        const routerSubscription = this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (event instanceof NavigationStart) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
                this.isSpinnerVisible = false;
            }
        }), (/**
         * @return {?}
         */
        () => {
            this.isSpinnerVisible = false;
        }));
        this.subscriptions.add(routerSubscription);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isSpinnerVisible = false;
        this.subscriptions.unsubscribe();
    }
}
SpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-spinner',
                template: "<div class=\"loading-indicator\" [class.show]=\"isSpinnerVisible\">\r\n  <div class=\"spinner\">\r\n    <div class=\"bounce1\"></div>\r\n    <div class=\"bounce2\"></div>\r\n    <div class=\"bounce3\"></div>\r\n  </div>"
            }] }
];
/** @nocollapse */
SpinnerComponent.ctorParameters = () => [
    { type: Router }
];
if (false) {
    /** @type {?} */
    SpinnerComponent.prototype.isSpinnerVisible;
    /**
     * @type {?}
     * @private
     */
    SpinnerComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    SpinnerComponent.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SpinnerModule {
}
SpinnerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SpinnerComponent],
                imports: [
                    CommonModule
                ],
                exports: [SpinnerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardComponent {
    constructor() {
        this.classHeader = false;
        this.cardToggle = 'expanded';
        this.cardClose = 'open';
        this.loadCard = false;
        this.isCardToggled = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleCard(event) {
        this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    closeCard(event) {
        this.cardClose = this.cardClose === 'closed' ? 'open' : 'closed';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    fullScreen(event) {
        this.fullCard = this.fullCard === 'full-card' ? '' : 'full-card';
        this.fullCardIcon = this.fullCardIcon === 'icofont-resize' ? '' : 'icofont-resize';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    cardRefresh(event) {
        this.loadCard = true;
        this.cardLoad = 'card-load';
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.cardLoad = '';
            this.loadCard = false;
        }), 3000);
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-card',
                template: "<div class=\"card {{ fullCard }} {{ cardLoad }}\" [@cardClose]=\"cardClose\" [ngClass]=\"cardClass\">\r\n  <div class=\"card-header\" *ngIf=\"title\">\r\n    <h5>{{ title }}</h5>\r\n    <span *ngIf=\"!classHeader\">{{ headerContent }}</span>\r\n    <span *ngIf=\"classHeader\">\r\n      <ng-content select=\".code-header\"></ng-content>\r\n    </span>\r\n    <div class=\"card-header-right\">\r\n      <ul class=\"list-unstyled card-option\">\r\n        <li *ngIf=\"!isCardToggled\" (click)=\"this.isCardToggled = !this.isCardToggled\"><i class=\"icofont icofont-simple-left\"></i></li>\r\n        <li *ngIf=\"isCardToggled\" (click)=\"this.isCardToggled = !this.isCardToggled\"><i class=\"icofont icofont-simple-right\"></i></li>\r\n        <li *ngIf=\"isCardToggled\"><i class=\"icofont icofont-maximize {{ fullCardIcon }} full-card\" (click)=\"fullScreen($event)\"></i></li>\r\n        <li *ngIf=\"isCardToggled\"><i class=\"icofont icofont-minus minimize-card\" cardToggleEvent (click)=\"toggleCard($event)\"></i></li>\r\n        <li *ngIf=\"isCardToggled\"><i class=\"icofont icofont-refresh reload-card\" (click)=\"cardRefresh($event)\" ></i></li>\r\n        <li *ngIf=\"isCardToggled\"><i class=\"icofont icofont-error close-card\" (click)=\"closeCard($event)\"></i></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div [@cardToggle]=\"cardToggle\">\r\n    <div class=\"card-body\" [ngClass]=\"blockClass\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-loader\" *ngIf=\"loadCard\"><i class=\"icofont icofont-refresh rotate-refresh\"></i></div>\r\n</div>\r\n",
                animations: [trigger('cardToggle', [
                        state('collapsed, void', style({
                            overflow: 'hidden',
                            height: '0px',
                        })),
                        state('expanded', style({
                            height: AUTO_STYLE,
                        })),
                        transition('collapsed <=> expanded', [
                            animate('400ms ease-in-out')
                        ])
                    ]), trigger('cardClose', [
                        state('open', style({
                            opacity: 1
                        })),
                        state('closed', style({
                            opacity: 0,
                            display: 'none'
                        })),
                        transition('open <=> closed', animate('400ms')),
                    ])],
                styles: [".card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box}.card>hr{margin-right:0;margin-left:0}.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-body{flex:1 1 auto;padding:1rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1rem}.card-header{padding:.75rem 1rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:.75rem 1rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.5rem;margin-bottom:-.75rem;margin-left:-.5rem;border-bottom:0}.card-header-pills{margin-right:-.5rem;margin-left:-.5rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img{width:100%;border-radius:calc(.25rem - 1px)}.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img-bottom{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck{display:flex;flex-direction:column}.card-deck .card{margin-bottom:7.5px}@media (min-width:576px){.card-deck{flex-flow:row wrap;margin-right:-7.5px;margin-left:-7.5px}.card-deck .card{display:flex;flex:1 0 0%;flex-direction:column;margin-right:7.5px;margin-bottom:0;margin-left:7.5px}}.card-group{display:flex;flex-direction:column}.card-group>.card{margin-bottom:7.5px}@media (min-width:576px){.card-group{flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:first-child .card-header,.card-group>.card:first-child .card-img-top{border-top-right-radius:0}.card-group>.card:first-child .card-footer,.card-group>.card:first-child .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:last-child .card-header,.card-group>.card:last-child .card-img-top{border-top-left-radius:0}.card-group>.card:last-child .card-footer,.card-group>.card:last-child .card-img-bottom{border-bottom-left-radius:0}.card-group>.card:only-child{border-radius:.25rem}.card-group>.card:only-child .card-header,.card-group>.card:only-child .card-img-top{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-group>.card:only-child .card-footer,.card-group>.card:only-child .card-img-bottom{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-group>.card:not(:first-child):not(:last-child):not(:only-child),.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-footer,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-header,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-top{border-radius:0}.card-columns{-moz-column-count:3;column-count:3;-moz-column-gap:1.25rem;column-gap:1.25rem}.card-columns .card{display:inline-block;width:100%}}.card-columns .card{margin-bottom:.75rem}"]
            }] }
];
CardComponent.propDecorators = {
    headerContent: [{ type: Input }],
    title: [{ type: Input }],
    blockClass: [{ type: Input }],
    cardClass: [{ type: Input }],
    classHeader: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CardComponent.prototype.headerContent;
    /** @type {?} */
    CardComponent.prototype.title;
    /** @type {?} */
    CardComponent.prototype.blockClass;
    /** @type {?} */
    CardComponent.prototype.cardClass;
    /** @type {?} */
    CardComponent.prototype.classHeader;
    /** @type {?} */
    CardComponent.prototype.cardToggle;
    /** @type {?} */
    CardComponent.prototype.cardClose;
    /** @type {?} */
    CardComponent.prototype.fullCard;
    /** @type {?} */
    CardComponent.prototype.fullCardIcon;
    /** @type {?} */
    CardComponent.prototype.loadCard;
    /** @type {?} */
    CardComponent.prototype.isCardToggled;
    /** @type {?} */
    CardComponent.prototype.cardLoad;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardModule {
}
CardModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CardComponent],
                imports: [
                    CommonModule
                ],
                exports: [CardComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccordionDirective {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.navlinks = [];
        this.countState = 1;
    }
    /**
     * @param {?} openLink
     * @return {?}
     */
    closeOtherLinks(openLink) {
        this.countState++;
        if ((openLink.group !== 'sub-toggled' || openLink.group !== 'main-toggled') && this.countState === 1) {
            if (window.innerWidth < 768 || (window.innerWidth >= 768 && window.innerWidth <= 1024)) {
                /** @type {?} */
                const toggledElement = (/** @type {?} */ (document.querySelector('#mobile-collapse')));
                toggledElement.click();
            }
        }
        this.navlinks.forEach((/**
         * @param {?} link
         * @return {?}
         */
        (link) => {
            if (link !== openLink && (link.group === 'sub-toggled' || openLink.group !== 'sub-toggled')) {
                link.open = false;
            }
        }));
    }
    /**
     * @param {?} link
     * @return {?}
     */
    addLink(link) {
        this.navlinks.push(link);
    }
    /**
     * @param {?} link
     * @return {?}
     */
    removeGroup(link) {
        /** @type {?} */
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    /**
     * @return {?}
     */
    getUrl() {
        return this.router.url;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._router = this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event instanceof NavigationEnd))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.countState = 0;
            this.navlinks.forEach((/**
             * @param {?} link
             * @return {?}
             */
            (link) => {
                if (link.group) {
                    /** @type {?} */
                    const routeUrl = this.getUrl();
                    /** @type {?} */
                    const currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        this.closeOtherLinks(link);
                    }
                }
            }));
        }));
    }
}
AccordionDirective.decorators = [
    { type: Directive, args: [{
                selector: '[katanaAccordion]',
            },] }
];
/** @nocollapse */
AccordionDirective.ctorParameters = () => [
    { type: Router }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AccordionDirective.prototype.navlinks;
    /**
     * @type {?}
     * @private
     */
    AccordionDirective.prototype.countState;
    /**
     * @type {?}
     * @private
     */
    AccordionDirective.prototype._router;
    /**
     * @type {?}
     * @private
     */
    AccordionDirective.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccordionLinkDirective {
    /**
     * @param {?} nav
     */
    constructor(nav) {
        this.nav = nav;
    }
    /**
     * @return {?}
     */
    get open() {
        return this._open;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set open(value) {
        this._open = value;
        document.querySelector('.pcoded-inner-navbar').classList.toggle('scroll-sidebar');
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nav.addLink(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    /**
     * @return {?}
     */
    toggle() {
        document.querySelector('.pcoded-inner-navbar').classList.add('scroll-sidebar');
        this.open = !this.open;
    }
}
AccordionLinkDirective.decorators = [
    { type: Directive, args: [{
                selector: '[katanaAccordionLink]'
            },] }
];
/** @nocollapse */
AccordionLinkDirective.ctorParameters = () => [
    { type: AccordionDirective, decorators: [{ type: Inject, args: [AccordionDirective,] }] }
];
AccordionLinkDirective.propDecorators = {
    group: [{ type: Input }],
    open: [{ type: HostBinding, args: ['class.pcoded-trigger',] }, { type: Input }]
};
if (false) {
    /** @type {?} */
    AccordionLinkDirective.prototype.group;
    /**
     * @type {?}
     * @protected
     */
    AccordionLinkDirective.prototype._open;
    /**
     * @type {?}
     * @protected
     */
    AccordionLinkDirective.prototype.nav;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccordionAnchorDirective {
    /**
     * @param {?} navlink
     */
    constructor(navlink) {
        this.navlink = navlink;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        this.navlink.toggle();
    }
}
AccordionAnchorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[katanaAccordionToggle]'
            },] }
];
/** @nocollapse */
AccordionAnchorDirective.ctorParameters = () => [
    { type: AccordionLinkDirective, decorators: [{ type: Inject, args: [AccordionLinkDirective,] }] }
];
AccordionAnchorDirective.propDecorators = {
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AccordionAnchorDirective.prototype.navlink;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccordionModule {
}
AccordionModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AccordionAnchorDirective, AccordionDirective, AccordionLinkDirective],
                imports: [
                    CommonModule
                ],
                exports: [AccordionAnchorDirective, AccordionDirective, AccordionLinkDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BadgePipe {
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        return null;
    }
}
BadgePipe.decorators = [
    { type: Pipe, args: [{
                name: 'katanaBadge'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CurrencyPipe extends DecimalPipe {
    /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    transform(value, digits, locale) {
        return `${super.transform(value, '1.0')} VNĐ`;
    }
}
CurrencyPipe.decorators = [
    { type: Pipe, args: [{
                name: 'katanaCurrency'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CDatePipe extends DatePipe {
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        return super.transform(value, 'dd/MM/yyyy');
    }
}
CDatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'katanaDate'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CDatetimePipe extends DatePipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return super.transform(value, 'dd/MM/yyyy HH:mm');
    }
}
CDatetimePipe.decorators = [
    { type: Pipe, args: [{
                name: 'katanaDateTime'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimePipe extends DatePipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return super.transform(value, 'hh:mm');
    }
}
TimePipe.decorators = [
    { type: Pipe, args: [{
                name: 'katanaTime'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberPipe extends DecimalPipe {
    /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    transform(value, digits, locale) {
        return super.transform(value, '1.0');
    }
}
NumberPipe.decorators = [
    { type: Pipe, args: [{
                name: 'katanaNumber'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SafePipe {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}
SafePipe.decorators = [
    { type: Pipe, args: [{
                name: 'katanaSafe'
            },] }
];
/** @nocollapse */
SafePipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SafePipe.prototype.sanitizer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CembedVideoPipe {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    transform(text) {
        /** @type {?} */
        let result = text;
        /** @type {?} */
        const extractOembedTagPattern = new RegExp('<\s*oembed[^>]*>.*?<\s*\/\s*oembed>', 'gm');
        /** @type {?} */
        let extractOembedTagsResult = extractOembedTagPattern.exec(text);
        if (extractOembedTagsResult && extractOembedTagsResult.length) {
            /** @type {?} */
            const oembedTags = [...extractOembedTagsResult];
            while (extractOembedTagsResult) {
                extractOembedTagsResult = extractOembedTagPattern.exec(text);
                if (extractOembedTagsResult && extractOembedTagsResult.length) {
                    oembedTags.push(...extractOembedTagsResult);
                }
            }
            /** @type {?} */
            const videoTags = oembedTags.map((/**
             * @param {?} tag
             * @return {?}
             */
            tag => {
                /** @type {?} */
                const match = /(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/.exec(tag);
                /** @type {?} */
                const videoLink = match[1];
                /** @type {?} */
                const videoTag = `<iframe src="https://www.youtube.com/embed/${videoLink}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
                return videoTag;
            }));
            videoTags.forEach((/**
             * @param {?} tag
             * @return {?}
             */
            tag => {
                result = text.replace(extractOembedTagPattern, tag);
            }));
        }
        return this.sanitizer.bypassSecurityTrustHtml(result);
    }
}
CembedVideoPipe.decorators = [
    { type: Pipe, args: [{
                name: 'katanaEmbedVideo'
            },] }
];
/** @nocollapse */
CembedVideoPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CembedVideoPipe.prototype.sanitizer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class KbPipe extends DecimalPipe {
    /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    transform(value, digits, locale) {
        return `${super.transform(Math.round(value / 1024), '1.0')} KB`;
    }
}
KbPipe.decorators = [
    { type: Pipe, args: [{
                name: 'katanaKb'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FilePipe extends DecimalPipe {
    /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    transform(value, digits, locale) {
        if (!value)
            return '';
        /** @type {?} */
        var name = value.toString();
        /** @type {?} */
        var data = name.split('.');
        if (data.length == 1)
            return `${data[0]}`;
        /** @type {?} */
        var index = name.indexOf(data[data.length - 1]);
        return `${name.substring(0, index - 1)} ${data[data.length - 1]}`;
    }
}
FilePipe.decorators = [
    { type: Pipe, args: [{
                name: 'katanaFile'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const pipes = [
    CurrencyPipe,
    CDatePipe,
    CDatetimePipe,
    TimePipe,
    NumberPipe,
    BadgePipe,
    SafePipe,
    CembedVideoPipe,
    KbPipe,
    FilePipe
];
class FormatterModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FormatterModule,
            providers: []
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: FormatterModule,
            providers: pipes
        };
    }
}
FormatterModule.decorators = [
    { type: NgModule, args: [{
                declarations: pipes,
                imports: [
                    CommonModule
                ],
                exports: pipes
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class KeyConst {
}
KeyConst.ViewImage = 'VIEW_IMAGE';
KeyConst.PageChanged = 'PAGE_CHANGED';
KeyConst.NewNotifications = 'NEW_NOTIFICATIONS';
KeyConst.MenuChanged = 'MENU_CHANGED';
if (false) {
    /** @type {?} */
    KeyConst.ViewImage;
    /** @type {?} */
    KeyConst.PageChanged;
    /** @type {?} */
    KeyConst.NewNotifications;
    /** @type {?} */
    KeyConst.MenuChanged;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MenuKey {
}
MenuKey.Admin = 'Admin';
MenuKey.Admin2 = 'Admin2';
if (false) {
    /** @type {?} */
    MenuKey.Admin;
    /** @type {?} */
    MenuKey.Admin2;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxComponent {
    constructor() {
        this.customModelChange = new EventEmitter();
        this.direction = 'horizontal';
        this.emitNullOnDestroy = false;
        this.modelChange = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.customModel) {
            /** @type {?} */
            const value = changes.customModel.currentValue;
            this.model = this.customModelTransformation(value);
            this.customModelChange.emit(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onModelChange(value) {
        if (this.customModelTransformation) {
            /** @type {?} */
            const newValue = this.customModelTransformation(value);
            this.customModelChange.emit(newValue);
        }
        else {
            this.modelChange.emit(value);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.emitNullOnDestroy === true)
            this.modelChange.emit(null);
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-checkbox',
                template: "<div *ngIf=\"direction === 'horizontal'\" class=\"horizontal-site\">\r\n  <div class=\"form-group\">\r\n    <div class=\"checkbox-fade vertical\">\r\n      <label>\r\n        <input type=\"checkbox\" [ngModel]=\"model\" (ngModelChange)=\"onModelChange($event)\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\">\r\n        <span class=\"cr\" [ngClass]=\"{'disabled': disabled}\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n        <span class=\"text-checkbox\" *ngIf=\"title\">{{title}}</span>\r\n      </label>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"direction === 'vertical'\" class=\"vertical-site\">\r\n  <div class=\"form-group\">\r\n    <label *ngIf=\"title\">{{title}}</label>\r\n    <div class=\"switch vertical\">\r\n      <label class=\"f-bold\">\r\n        <input type=\"checkbox\" [ngModel]=\"model\" (ngModelChange)=\"onModelChange($event)\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\" />\r\n        <span class=\"lever\"></span>\r\n      </label>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [".border-checkbox-section .border-checkbox-group{display:inline-block}.border-checkbox-section .border-checkbox-group .border-checkbox:checked+.border-checkbox-label:after{-webkit-animation:.5s linear check;animation:.5s linear check;opacity:1;border-color:#338bf8}.border-checkbox-section .border-checkbox-group .border-checkbox:checked+.border-checkbox-label:after .border-checkbox-label:before{border-color:#eee}.border-checkbox-section .border-checkbox-group .border-checkbox-label{position:relative;display:inline-block;cursor:pointer;height:20px;line-height:20px;padding-left:30px;margin-right:15px}.border-checkbox-section .border-checkbox-group .border-checkbox-label:after{content:\"\";display:block;width:6px;height:12px;opacity:.9;border-right:2px solid #eee;border-top:2px solid #eee;position:absolute;left:4px;top:11px;transform:scaleX(-1) rotate(135deg);transform-origin:left top}.border-checkbox-section .border-checkbox-group .border-checkbox-label:before{content:\"\";display:block;border:2px solid #338bf8;width:20px;height:20px;position:absolute;left:0}.border-checkbox-section .border-checkbox{display:none}.border-checkbox-section .border-checkbox:disabled~.border-checkbox-label{cursor:no-drop;color:#ccc}@-webkit-keyframes check{0%{height:0;width:0}25%{height:0;width:6px}50%{height:12px;width:6px}}@keyframes check{0%{height:0;width:0}25%{height:0;width:6px}50%{height:12px;width:6px}}.border-checkbox-section .border-checkbox-group-primary .border-checkbox-label:before{border:1px solid #338bf8}.border-checkbox-section .border-checkbox-group-primary .border-checkbox:checked+.border-checkbox-label:after{border-color:#338bf8}.border-checkbox-section .border-checkbox-group-warning .border-checkbox-label:before{border:1px solid #ff9800}.border-checkbox-section .border-checkbox-group-warning .border-checkbox:checked+.border-checkbox-label:after{border-color:#ff9800}.border-checkbox-section .border-checkbox-group-default .border-checkbox-label:before{border:1px solid #f2f2f2}.border-checkbox-section .border-checkbox-group-default .border-checkbox:checked+.border-checkbox-label:after{border-color:#f2f2f2}.border-checkbox-section .border-checkbox-group-danger .border-checkbox-label:before{border:1px solid #d61e00}.border-checkbox-section .border-checkbox-group-danger .border-checkbox:checked+.border-checkbox-label:after{border-color:#d61e00}.border-checkbox-section .border-checkbox-group-success .border-checkbox-label:before{border:1px solid #6fbb35}.border-checkbox-section .border-checkbox-group-success .border-checkbox:checked+.border-checkbox-label:after{border-color:#6fbb35}.border-checkbox-section .border-checkbox-group-inverse .border-checkbox-label:before{border:1px solid #052d3e}.border-checkbox-section .border-checkbox-group-inverse .border-checkbox:checked+.border-checkbox-label:after{border-color:#052d3e}.border-checkbox-section .border-checkbox-group-info .border-checkbox-label:before{border:1px solid #1d9ce7}.border-checkbox-section .border-checkbox-group-info .border-checkbox:checked+.border-checkbox-label:after{border-color:#1d9ce7}.checkbox-fade,.checkbox-zoom{display:inline-block}.checkbox-fade label input[type=checkbox]:checked+.cr>.cr-icon,.checkbox-fade label input[type=radio]:checked+.cr>.cr-icon,.checkbox-zoom label input[type=checkbox]:checked+.cr>.cr-icon,.checkbox-zoom label input[type=radio]:checked+.cr>.cr-icon{transform:scale(1) rotateZ(0);opacity:1}.checkbox-fade label input[type=checkbox]+.cr>.cr-icon,.checkbox-fade label input[type=radio]+.cr>.cr-icon,.checkbox-zoom label input[type=checkbox]+.cr>.cr-icon,.checkbox-zoom label input[type=radio]+.cr>.cr-icon{transform:scale(3) rotateZ(-20deg);opacity:0;transition:.3s ease-in}.checkbox-fade label:after,.checkbox-zoom label:after{content:\"\";display:table;clear:both}.checkbox-fade.fade-in-disable .cr,.checkbox-fade.fade-in-disable label,.checkbox-zoom.fade-in-disable .cr,.checkbox-zoom.fade-in-disable label{color:#ccc;cursor:no-drop}.checkbox-fade .cr,.checkbox-zoom .cr{border-radius:0;border:1px solid #87837b!important;box-shadow:1px 1px 1px rgba(0,0,0,.14);cursor:pointer;display:inline-block;float:left;height:16px;margin-right:.5em;position:relative;width:16px}.checkbox-fade .cr .cr-icon,.checkbox-zoom .cr .cr-icon{color:#338bf8;font-size:.8em;left:0;line-height:0;position:absolute;right:0;text-align:center;top:50%}.checkbox-fade .cr.disabled,.checkbox-zoom .cr.disabled{opacity:.65;background-color:#eee;cursor:not-allowed}.checkbox-fade label{line-height:18px;font-weight:500}.checkbox-fade label input[type=checkbox],.checkbox-fade label input[type=radio]{display:none}.checkbox-fade label input[type=checkbox]:checked+.cr>.cr-icon,.checkbox-fade label input[type=radio]:checked+.cr>.cr-icon{transform:scale(1) rotateZ(0);opacity:1}.checkbox-fade label input[type=checkbox]+.cr>.cr-icon,.checkbox-fade label input[type=radio]+.cr>.cr-icon{transform:scale(3) rotateZ(-20deg);opacity:0;transition:.3s ease-in}.checkbox-zoom label{line-height:20px}.checkbox-zoom label input[type=checkbox],.checkbox-zoom label input[type=radio]{display:none}.checkbox-zoom label input[type=checkbox]:checked+.cr>.cr-icon,.checkbox-zoom label input[type=radio]:checked+.cr>.cr-icon{transform:scale3d(1,1,1) translate3d(0,0,0);opacity:1}.checkbox-zoom label input[type=checkbox]+.cr>.cr-icon,.checkbox-zoom label input[type=radio]+.cr>.cr-icon{transform:scale3d(.2,.2,.1) translate3d(0,0,0);opacity:0;transition:.3s ease-in}.checkbox-fade.fade-in-primary .cr,.checkbox-fade.zoom-primary .cr,.checkbox-zoom.fade-in-primary .cr,.checkbox-zoom.zoom-primary .cr{border:1px solid #338bf8}.checkbox-fade.fade-in-primary .cr .cr-icon,.checkbox-fade.zoom-primary .cr .cr-icon,.checkbox-zoom.fade-in-primary .cr .cr-icon,.checkbox-zoom.zoom-primary .cr .cr-icon{color:#338bf8}.checkbox-fade.fade-in-warning .cr,.checkbox-fade.zoom-warning .cr,.checkbox-zoom.fade-in-warning .cr,.checkbox-zoom.zoom-warning .cr{border:1px solid #ff9800}.checkbox-fade.fade-in-warning .cr .cr-icon,.checkbox-fade.zoom-warning .cr .cr-icon,.checkbox-zoom.fade-in-warning .cr .cr-icon,.checkbox-zoom.zoom-warning .cr .cr-icon{color:#ff9800}.checkbox-fade.fade-in-default .cr,.checkbox-fade.zoom-default .cr,.checkbox-zoom.fade-in-default .cr,.checkbox-zoom.zoom-default .cr{border:1px solid #f2f2f2}.checkbox-fade.fade-in-default .cr .cr-icon,.checkbox-fade.zoom-default .cr .cr-icon,.checkbox-zoom.fade-in-default .cr .cr-icon,.checkbox-zoom.zoom-default .cr .cr-icon{color:#f2f2f2}.checkbox-fade.fade-in-danger .cr,.checkbox-fade.zoom-danger .cr,.checkbox-zoom.fade-in-danger .cr,.checkbox-zoom.zoom-danger .cr{border:1px solid #d61e00}.checkbox-fade.fade-in-danger .cr .cr-icon,.checkbox-fade.zoom-danger .cr .cr-icon,.checkbox-zoom.fade-in-danger .cr .cr-icon,.checkbox-zoom.zoom-danger .cr .cr-icon{color:#d61e00}.checkbox-fade.fade-in-success .cr,.checkbox-fade.zoom-success .cr,.checkbox-zoom.fade-in-success .cr,.checkbox-zoom.zoom-success .cr{border:1px solid #6fbb35}.checkbox-fade.fade-in-success .cr .cr-icon,.checkbox-fade.zoom-success .cr .cr-icon,.checkbox-zoom.fade-in-success .cr .cr-icon,.checkbox-zoom.zoom-success .cr .cr-icon{color:#6fbb35}.checkbox-fade.fade-in-inverse .cr,.checkbox-fade.zoom-inverse .cr,.checkbox-zoom.fade-in-inverse .cr,.checkbox-zoom.zoom-inverse .cr{border:1px solid #052d3e}.checkbox-fade.fade-in-inverse .cr .cr-icon,.checkbox-fade.zoom-inverse .cr .cr-icon,.checkbox-zoom.fade-in-inverse .cr .cr-icon,.checkbox-zoom.zoom-inverse .cr .cr-icon{color:#052d3e}.checkbox-fade.fade-in-info .cr,.checkbox-fade.zoom-info .cr,.checkbox-zoom.fade-in-info .cr,.checkbox-zoom.zoom-info .cr{border:1px solid #1d9ce7}.checkbox-fade.fade-in-info .cr .cr-icon,.checkbox-fade.zoom-info .cr .cr-icon,.checkbox-zoom.fade-in-info .cr .cr-icon,.checkbox-zoom.zoom-info .cr .cr-icon{color:#1d9ce7}.checkbox-color{display:inline-block;margin-right:20px;cursor:pointer}.checkbox-color label{display:inline-block;position:relative;padding-left:10px;line-height:20px}.checkbox-color label::before{content:\"\";display:inline-block;position:absolute;top:0;width:20px;height:20px;left:0;right:0;text-align:center;margin-left:-20px;border:1px solid #ccc;border-radius:0;background-color:#fff;transition:border .15s ease-in-out,color .15s ease-in-out}.checkbox-color label::after{display:inline-block;position:absolute;width:16px;height:16px;left:-1px;top:0;margin-left:-17px;padding-left:3px;padding-top:1px;font-size:11px;color:#fff}.checkbox-color input[type=checkbox]{opacity:0}.checkbox-color input[type=checkbox]:focus+label::before{outline:dotted thin;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}.checkbox-color input[type=checkbox]:checked+label::after{font-family:FontAwesome;content:\"\\f00c\"}.checkbox-color input[type=checkbox]:disabled+label{opacity:.65}.checkbox-color input[type=checkbox]:disabled+label::before{background-color:#eee;cursor:not-allowed}.checkbox-color.checkbox-circle label::before{border-radius:50%}.checkbox-color.checkbox-inline{margin-top:0}.checkbox-danger input[type=checkbox]:checked+label::after,.checkbox-info input[type=checkbox]:checked+label::after,.checkbox-primary input[type=checkbox]:checked+label::after,.checkbox-success input[type=checkbox]:checked+label::after,.checkbox-warning input[type=checkbox]:checked+label::after{color:#fff}.checkbox-primary input[type=checkbox]:checked+label::before{border-color:#2196f3;background-color:#338bf8}.checkbox-warning input[type=checkbox]:checked+label::before{background-color:#ff9800}.checkbox-default input[type=checkbox]:checked+label::before{background-color:#f2f2f2}.checkbox-danger input[type=checkbox]:checked+label::before{background-color:#d61e00}.checkbox-success input[type=checkbox]:checked+label::before{background-color:#6fbb35}.checkbox-inverse input[type=checkbox]:checked+label::before{background-color:#052d3e}.checkbox-info input[type=checkbox]:checked+label::before{background-color:#1d9ce7}"]
            }] }
];
CheckboxComponent.propDecorators = {
    model: [{ type: Input }],
    title: [{ type: Input }],
    customModel: [{ type: Input }],
    customModelChange: [{ type: Output }],
    customModelTransformation: [{ type: Input }],
    disabled: [{ type: Input }],
    direction: [{ type: Input }],
    validationName: [{ type: Input }],
    validationScope: [{ type: Input }],
    emitNullOnDestroy: [{ type: Input }],
    modelChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype.model;
    /** @type {?} */
    CheckboxComponent.prototype.title;
    /** @type {?} */
    CheckboxComponent.prototype.customModel;
    /** @type {?} */
    CheckboxComponent.prototype.customModelChange;
    /** @type {?} */
    CheckboxComponent.prototype.customModelTransformation;
    /** @type {?} */
    CheckboxComponent.prototype.disabled;
    /** @type {?} */
    CheckboxComponent.prototype.direction;
    /** @type {?} */
    CheckboxComponent.prototype.validationName;
    /** @type {?} */
    CheckboxComponent.prototype.validationScope;
    /** @type {?} */
    CheckboxComponent.prototype.emitNullOnDestroy;
    /** @type {?} */
    CheckboxComponent.prototype.modelChange;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxModule {
}
CheckboxModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CheckboxComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    ValidationModule
                ],
                exports: [CheckboxComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextboxComponent {
    /**
     * @param {?} _actionService
     */
    constructor(_actionService) {
        this._actionService = _actionService;
        this.type = 'text';
        this.placeholder = 'Điền thông tin';
        this.readonly = false;
        this.disabled = false;
        this.maxCharacters = 100;
        this.direction = 'vertical';
        this.alignVertical = true;
        this.emitNullOnDestroy = false;
        this.modelChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.focus) {
            this._actionService.executeAsync((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                var elements = document.getElementsByTagName('input');
                if (elements) {
                    for (let i = 0; i < elements.length; i++) {
                        if (elements[i].id == this.item.id) {
                            elements[i].focus();
                            break;
                        }
                    }
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.emitNullOnDestroy === true) {
            this.modelChange.emit(null);
        }
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    submitNumeric(newValue) {
        if (this.minNumber && newValue < this.minNumber) {
            this.modelChange.emit(this.minNumber);
            event.preventDefault();
            return;
        }
        if (this.maxNumber && newValue > this.maxNumber) {
            this.modelChange.emit(this.maxNumber);
            event.preventDefault();
            return;
        }
        this.modelChange.emit(newValue);
    }
}
TextboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-textbox',
                template: "<katana-form-director [title]=\"title\" [direction]=\"direction\" [alignVertical]=\"alignVertical\" [description]=\"description\"\r\n  [extraLabelItem]=\"extraLabelItem\">\r\n  <ng-container *ngIf=\"!readonly; else textLabel\">\r\n    <div [ngClass]=\"suffix ? 'input-group' : null\">\r\n      <ng-container [ngSwitch]=\"type\">\r\n        <input *ngSwitchCase=\"'text'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\" type=\"text\"\r\n          [placeholder]=\"placeholder\" [(ngModel)]=\"model\" (ngModelChange)=\"modelChange.emit($event)\"\r\n          [attr.maxlength]=\"maxCharacters\" [attr.validation-name]=\"validationName ? validationName : title\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n\r\n        <input *ngSwitchCase=\"'password'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"password\" [placeholder]=\"placeholder\"\r\n          [(ngModel)]=\"model\" (ngModelChange)=\"modelChange.emit($event)\" [attr.maxlength]=\"maxCharacters\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n\r\n        <input *ngSwitchCase=\"'number'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"number\" [placeholder]=\"placeholder\"\r\n          [(ngModel)]=\"model\" (ngModelChange)=\"modelChange.emit($event)\"\r\n          (focusout)=\"submitNumeric($event.target.value)\" [attr.name]=\"controlName\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n\r\n        <input *ngSwitchCase=\"'currency'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"text\" [placeholder]=\"placeholder\"\r\n          [(ngModel)]=\"model\" (ngModelChange)=\"submitNumeric($event)\" currencyMask [attr.maxlength]=\"maxCharacters\"\r\n          [attr.min]=\"minNumber\" [attr.max]=\"maxNumber\" [attr.name]=\"controlName\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n\r\n        <input *ngSwitchCase=\"'phone'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"text\" [(ngModel)]=\"model\"\r\n          (ngModelChange)=\"modelChange.emit($event)\" [attr.maxlength]=\"maxCharacters\" [attr.name]=\"controlName\"\r\n          mask=\"0000000000\" [attr.scope]=\"validationScope ? validationScope : null\" placeholder=\"V\u00ED d\u1EE5 097123456\" />\r\n\r\n        <input *ngSwitchCase=\"'email'\" id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"email\" [placeholder]=\"placeholder\"\r\n          [(ngModel)]=\"model\" (ngModelChange)=\"modelChange.emit($event)\"\r\n          pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" [attr.maxlength]=\"maxCharacters\" [attr.name]=\"controlName\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n      </ng-container>\r\n      <ng-container *ngIf=\"suffix\">\r\n        <span class=\"input-group-addon custom-suffix\">{{suffix}}</span>\r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n  <ng-template #textLabel>\r\n    <ng-container [ngSwitch]=\"type\">\r\n      <label *ngSwitchCase=\"'text'\">{{model}}</label>\r\n      <label *ngSwitchCase=\"'currency'\">{{model | number: '1.0'}}</label>\r\n    </ng-container>\r\n  </ng-template>\r\n</katana-form-director>",
                styles: [".custom-suffix{background-color:#e2e2e2;color:#545454;font-weight:500;line-height:32px;padding:0 8px;letter-spacing:1px;border-radius:0 3px 3px 0}"]
            }] }
];
/** @nocollapse */
TextboxComponent.ctorParameters = () => [
    { type: ActionService }
];
TextboxComponent.propDecorators = {
    title: [{ type: Input }],
    model: [{ type: Input }],
    type: [{ type: Input }],
    name: [{ type: Input }],
    placeholder: [{ type: Input }],
    readonly: [{ type: Input }],
    disabled: [{ type: Input }],
    maxCharacters: [{ type: Input }],
    minNumber: [{ type: Input }],
    maxNumber: [{ type: Input }],
    validationName: [{ type: Input }],
    validationScope: [{ type: Input }],
    direction: [{ type: Input }],
    alignVertical: [{ type: Input }],
    controlName: [{ type: Input }],
    description: [{ type: Input }],
    emitNullOnDestroy: [{ type: Input }],
    suffix: [{ type: Input }],
    item: [{ type: Input }],
    focus: [{ type: Input }],
    modelChange: [{ type: Output }],
    extraLabelItem: [{ type: ContentChild, args: [FormDirectorExtraItemDirective, { static: true },] }],
    itemRef: [{ type: ViewChild, args: ['itemRef', { static: true },] }]
};
if (false) {
    /** @type {?} */
    TextboxComponent.prototype.title;
    /** @type {?} */
    TextboxComponent.prototype.model;
    /** @type {?} */
    TextboxComponent.prototype.type;
    /** @type {?} */
    TextboxComponent.prototype.name;
    /** @type {?} */
    TextboxComponent.prototype.placeholder;
    /** @type {?} */
    TextboxComponent.prototype.readonly;
    /** @type {?} */
    TextboxComponent.prototype.disabled;
    /** @type {?} */
    TextboxComponent.prototype.maxCharacters;
    /** @type {?} */
    TextboxComponent.prototype.minNumber;
    /** @type {?} */
    TextboxComponent.prototype.maxNumber;
    /** @type {?} */
    TextboxComponent.prototype.validationName;
    /** @type {?} */
    TextboxComponent.prototype.validationScope;
    /** @type {?} */
    TextboxComponent.prototype.direction;
    /** @type {?} */
    TextboxComponent.prototype.alignVertical;
    /** @type {?} */
    TextboxComponent.prototype.controlName;
    /** @type {?} */
    TextboxComponent.prototype.description;
    /** @type {?} */
    TextboxComponent.prototype.emitNullOnDestroy;
    /** @type {?} */
    TextboxComponent.prototype.suffix;
    /** @type {?} */
    TextboxComponent.prototype.item;
    /** @type {?} */
    TextboxComponent.prototype.focus;
    /** @type {?} */
    TextboxComponent.prototype.modelChange;
    /** @type {?} */
    TextboxComponent.prototype.extraLabelItem;
    /** @type {?} */
    TextboxComponent.prototype.itemRef;
    /**
     * @type {?}
     * @private
     */
    TextboxComponent.prototype._actionService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CustomCurrencyMaskConfig = {
    align: 'left',
    allowNegative: false,
    decimal: '.',
    precision: 0,
    prefix: '',
    suffix: ' VNĐ',
    thousands: ','
};
class TextboxModule {
}
TextboxModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TextboxComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    FormModule,
                    CurrencyMaskModule
                ],
                exports: [TextboxComponent],
                providers: [
                    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableRowDetailDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
TableRowDetailDirective.decorators = [
    { type: Directive, args: [{
                selector: '[katana-row-detail]'
            },] }
];
/** @nocollapse */
TableRowDetailDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    TableRowDetailDirective.prototype.template;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TableEditInline() { }
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
function TableCell() { }
if (false) {
    /** @type {?|undefined} */
    TableCell.prototype.item;
    /** @type {?|undefined} */
    TableCell.prototype.column;
}
class TableColumn {
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
class TableSorter {
}
if (false) {
    /** @type {?} */
    TableSorter.prototype.direction;
    /** @type {?} */
    TableSorter.prototype.orderBy;
    /** @type {?} */
    TableSorter.prototype.order;
}
class TableAction {
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
function TableRequest() { }
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
class TableText {
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
class TableMessage {
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
function TableResponse() { }
if (false) {
    /** @type {?|undefined} */
    TableResponse.prototype.totalRecords;
    /** @type {?|undefined} */
    TableResponse.prototype.items;
}
/**
 * @record
 */
function TableServiceProvider() { }
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
class TableDatetimeFormat {
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
class EdittedField {
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
class TableOption {
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
class TableConstant {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableComponent {
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
                selector: 'katana-table',
                template: "<label *ngIf=\"option.title\">{{option.title}}</label>\r\n<ng-container *ngIf=\"hasFilterSection then filterSection\"></ng-container>\r\n<ng-container *ngIf=\"hasToolbarSection then toolbarSection\"></ng-container>\r\n<div class=\"katana-table--wrapper mb-3\">\r\n  <div class=\"loading-indicator\" [class.show]=\"loading\">\r\n    <div class=\"spinner\">\r\n      <div class=\"bounce1\"></div>\r\n      <div class=\"bounce2\"></div>\r\n      <div class=\"bounce3\"></div>\r\n    </div>\r\n    <p class=\"text-center text-muted text-bold\">{{option?.message?.loadingMessage}}</p>\r\n  </div>\r\n  <div [class.loading-cover]=\"loading\">\r\n    <div class=\"katana-main-table\">\r\n      <table #tableRef class=\"katana-component\" [ngClass]=\"option.componentClass\">\r\n        <ng-container [ngTemplateOutlet]=\"tableHeader\"></ng-container>\r\n        <ng-container *ngIf=\"items.length > 0 then tableBody; else noResult\"></ng-container>\r\n      </table>\r\n      <ng-container *ngIf=\"hasFooterSection then footerSection\"></ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\"></div>\r\n\r\n<ng-template #tableHeader>\r\n  <thead>\r\n    <tr>\r\n      <th *ngIf=\"rowDetailTemplate\" style=\"width: 40px;\"></th>\r\n      <th *ngIf=\"!option.hideSequenceColumn\" class=\"\" style=\"width: 40px; text-align: center;\">#</th>\r\n      <th *ngIf=\"!option.hideCheckboxColumn\" style=\"width: 40px;\" class=\"center\">\r\n        <div class=\"checkbox-fade fade-in-primary\">\r\n          <label class=\"m-0\">\r\n            <input [(ngModel)]=\"selectedAll\" (ngModelChange)=\"selectAll($event)\" type=\"checkbox\">\r\n            <span class=\"cr m-0\" style=\"border:solid 2px white\">\r\n              <i class=\"cr-icon fa fa-check txt-primary\"></i>\r\n            </span>\r\n            <span></span>\r\n          </label>\r\n        </div>\r\n      </th>\r\n      <ng-container *ngFor=\"let column of option.mainColumns\">\r\n        <th [ngStyle]=\"{'width.px': column.width}\" [ngClass]=\"{'sortable': column.allowSort}\"\r\n          (click)=\"sortAsync(column)\" *ngIf=\"!column.hide || !column.hide()\">\r\n          <span class=\"wrap-text\">{{column.title()}}</span>\r\n          <span *ngIf=\"showSorter(column, 'desc')\" class=\"fa fa-sort-alpha-desc text-desc pull-right sort-icon\"></span>\r\n          <span *ngIf=\"showSorter(column, 'asc')\" class=\"fa fa-sort-alpha-asc text-asc pull-right sort-icon\"></span>\r\n        </th>\r\n      </ng-container>\r\n      <th style=\"width: 120px;\" *ngIf=\"hasAnyAction()\">{{option.displayText.action}}</th>\r\n    </tr>\r\n  </thead>\r\n</ng-template>\r\n\r\n<ng-template #tableBody>\r\n  <tbody *ngFor=\"let item of items; let i = index; let even = event; let odd = odd;\">\r\n    <tr #row class=\"katana-tr {{ isRowSelected(item) ? 'selected' : ''}}\" [ngClass]=\"{odd: odd, even: even}\">\r\n      <td [attr.data-content]=\"'Xem chi ti\u1EBFt'\" *ngIf=\"rowDetailTemplate\" class=\"katana-td detail\">\r\n        <span *ngIf=\"!item.toggle\" (click)=\"toggleRowDetail(item)\" style=\"color: #eb5d13;\" class=\"fa fa-plus\"></span>\r\n        <span *ngIf=\"item.toggle\" (click)=\"toggleRowDetail(item)\" style=\"color: #eb5d13;\" class=\"fa fa-minus\"></span>\r\n      </td>\r\n      <td *ngIf=\"!option.hideSequenceColumn\" [attr.data-content]=\"'#'\" class=\"katana-td detail\">{{getCurrentIndex(i)}}</td>\r\n      <td *ngIf=\"!option.hideCheckboxColumn\" class=\"center\">\r\n        <div class=\"checkbox-fade fade-in-primary m-0\">\r\n          <label class=\"m-0\">\r\n            <input type=\"checkbox\" (click)=\"selectItem(item)\" [checked]=\"isRowSelected(item)\">\r\n            <span class=\"cr m-0\">\r\n              <i class=\"cr-icon fa fa-check txt-primary\"></i>\r\n            </span>\r\n            <span></span>\r\n          </label>\r\n        </div>\r\n      </td>\r\n      <ng-container *ngFor=\"let column of option.mainColumns\">\r\n        <td *ngIf=\"!column.hide || !column.hide()\" [ngClass]=\"{'link': column.click}\"\r\n          class=\"wrap-text katana-td {{column.textAlign}}\" attr.data-content=\"{{column.title()}}\">\r\n          <div class=\"d-inline-block custom-input\">\r\n            <div class=\"d-inline-block custom-td\">\r\n              <ng-container [ngTemplateOutlet]=\"column.customTemplate ? column.customTemplate() : fieldControlTemplate\"\r\n                [ngTemplateOutletContext]=\"{item: item, index: i, column: column, readonly: true, hasFormLabel: false}\">\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <td #inlineActionArea *ngIf=\"hasAnyAction(item)\" class=\"text-center action-column-wrapper\">\r\n        <div class=\"katana-tooltip\" *ngFor=\"let action of inlineActions\">\r\n          <span *ngIf=\"action.tooltip\" class=\"tooltiptext tooltip-top\">{{action.tooltip()}}</span>\r\n          <katana-button class=\"mr-1\" *ngIf=\"!action.hide || !action.hide(item)\" [lazyload]=\"action.lazyload\"\r\n            [customClass]=\"action.customClass\" title=\"{{action.title ? action.title() : ''}}\" [icon]=\"action.icon\"\r\n            (execute)=\"executeActionAsync(action,item,null, i, $event)\" [disabled]=\"action.disabled\"></katana-button>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n    <tr #rowDetail [@cAnimation] *ngIf=\"item.toggle\" class=\"row-detail-wrapper\">\r\n      <td colspan=\"20\" (click)=\"selectItem(item)\">\r\n        <div *ngIf=\"false\" class=\"d-flex detail-title\">\r\n          <span><i class=\"fa fa-info\" aria-hidden=\"true\"></i> {{option?.displayText?.detailTitle}}</span>\r\n        </div>\r\n        <ng-container *ngIf=\"rowDetailTemplate\" [ngTemplateOutlet]=\"rowDetailTemplate.template\"\r\n          [ngTemplateOutletContext]=\"{item: item}\">\r\n        </ng-container>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</ng-template>\r\n\r\n<ng-template #noResult>\r\n  <tbody>\r\n    <tr>\r\n      <td colspan=\"20\" class=\"center no-result\">\r\n        <i class=\"fa fa-search\"></i>\r\n        {{option?.message?.notFoundMessage}} <span *ngIf=\"textSearched\"> {{option?.message?.refMessage}} <span\r\n            class=\"text-bold text-primary\">\"{{textSearched}}\"</span>\r\n        </span>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</ng-template>\r\n\r\n<ng-template #footerSection>\r\n  <div class=\"table-footer\">\r\n    <div class=\"paging d-flex align-items-center\">\r\n      <div *ngIf=\"totalRecords > 0\">\r\n        <span class=\"result-search-text\"\r\n          [innerHTML]=\"option.message.foundMessage.replace('[0]',totalRecords.toString()).replace('[1]',totalPages.length.toString())\"></span>\r\n      </div>\r\n      <div class=\"ml-auto \" *ngIf=\"totalPages.length > 1 && option.paging\">\r\n        <div class=\"d-flex align-items-center page-navigator\">\r\n          <div class=\"mr-5\">\r\n            <span class=\"mr-1 text-muted\">{{option?.displayText?.pageTitle}}</span>\r\n            <input #gotoRef (keypress)=\"goto($event,false)\" (blur)=\"goto($event,true)\" class=\"goto mr-1\"\r\n              value=\"{{currentPage + 1}}\" type=\"text\" max=\"{{totalPages.length}}\" />\r\n            <span>/<span class=\"text-muted ml-1\">{{totalPages.length}}</span></span>\r\n          </div>\r\n          <ul class=\"m-0\">\r\n            <li (click)=\"changePage$.next(totalPages.length - 1)\" class=\"page\"\r\n              *ngIf=\"currentPage < totalPages.length - 1\"\r\n              [ngClass]=\"{'disabled': currentPage >= totalPages.length - 1}\"><span\r\n                class=\"fa fa-angle-double-right f-17\"></span></li>\r\n            <li class=\"page \" (click)=\"changePage$.next(currentPage + 1)\" *ngIf=\"currentPage < totalPages.length - 1\"\r\n              [ngClass]=\"{'disabled': currentPage >= totalPages.length - 1}\"><span\r\n                class=\"fa fa-angle-right  f-15\"></span></li>\r\n            <li [ngClass]=\"{'active': currentPage == page}\" *ngFor=\"let page of getPages(maxPage)\"\r\n              (click)=\"changePage$.next(page)\" class=\"page\">\r\n              <a>{{page + 1}}</a>\r\n            </li>\r\n            <li class=\"page \" (click)=\"changePage$.next(currentPage - 1)\" *ngIf=\"currentPage > 0\"><span\r\n                class=\"fa fa-angle-left  f-15\"></span></li>\r\n            <li class=\"page \" (click)=\"changePage$.next(0)\" *ngIf=\"currentPage > 0\"><span\r\n                class=\"fa fa-angle-double-left f-17\"></span></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #filterSection>\r\n  <div class=\"row form search-bar form-inline\">\r\n    <div class=\"col col-md-12 col-xs-12\">\r\n      <div class=\"flex-custom\">\r\n        <div class=\"form-group search-input-wrapper\">\r\n          <span class=\"search-icon\">\r\n            <i class=\"fa fa-search\" (click)=\"search()\"></i>\r\n          </span>\r\n          <input spellcheck=\"false\" [(ngModel)]=\"filter.searchText\" type=\"text\" class=\"form-control search-input\"\r\n            (keypress)=\"handkeKeypress($event)\" [placeholder]=\"option.displayText.placeholderSearch\">\r\n          <span class=\"search-reset\" *ngIf=\"filter.searchText\">\r\n            <i *ngIf=\"loading\" class=\"fa fa-spinner rotate-refresh\"></i>\r\n            <i *ngIf=\"!loading\" class=\"fa fa-times-circle\" (click)=\"filter.searchText = ''\"></i>\r\n          </span>\r\n        </div>\r\n        <button *ngIf=\"filterColumns.length\" class=\"btn btn-link-default\"\r\n          [ngClass]=\"{'btn-link-default' : !filterSectionToggle, 'btn-link': filterSectionToggle}\" type=\"button\"\r\n          aria-hidden=\"true\" (click)=\"toggleFilterSection()\">\r\n          <i class=\"fa fa-sliders m-0\"></i> {{option.displayText.advancedSearchTitle}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div [@cAnimation] *ngIf=\"filterSectionToggle\" class=\"row filter align-items-center\">\r\n    <span class=\"col-xs-12 col-md-12  filter-title\">{{option.displayText.filterTitle}}</span>\r\n    <div class=\"col-md-3 col-xs-12 pull-left filter-element \" *ngFor=\"let column of filterColumns; let i = index\">\r\n      <ng-container [ngTemplateOutlet]=\"column.filterTemplate ? column.filterTemplate() : fieldControlTemplate\"\r\n        [ngTemplateOutletContext]=\"{index: i, item: filter, column: column, readonly: false, hasFormLabel: true}\">\r\n      </ng-container>\r\n    </div>\r\n\r\n    <div class=\"col-sm-12 \">\r\n      <button class=\"btn btn-primary\" type=\"button\" aria-hidden=\"true\" (click)=\"searchAsync(true)\">\r\n        <i *ngIf=\"loading\" class=\"fa fa-spinner rotate-refresh\"></i>\r\n        <i *ngIf=\"!loading\" class=\"fa fa-search\"></i>\r\n        {{option.displayText.advancedBtnTitle}}\r\n      </button>\r\n      <button class=\"btn btn-default m-l-5\" type=\"button\" aria-hidden=\"true\" (click)=\"resetFilters()\">\r\n        {{option.displayText.advancedBtnCancelTitle}}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #fieldControlTemplate let-column=\"column\" let-item=\"item\" let-index=\"index\" let-readonly=\"readonly\"\r\n  let-hasFormLabel=\"hasFormLabel\">\r\n  <div [ngSwitch]=\"column.type\">\r\n    <ng-container *ngSwitchDefault>\r\n      <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div (dblclick)=\"editInline(item, column.valueRef(), index)\">{{item[column.valueRef()]}}</div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div class=\"col-xs-12\">\r\n          <katana-textbox [focus]=\"true\" [item]=\"item\" [title]=\"hasFormLabel ? column.title() : null\"\r\n            [(model)]=\"item[column.valueRef()]\">\r\n          </katana-textbox>\r\n          <div style=\"text-align: right;\">\r\n            <katana-button (execute)=\"acceptInlineEdit(column.valueRef(), index)\" [icon]=\"'fa fa-check'\"></katana-button>\r\n            <katana-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\"></katana-button>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!readonly\">\r\n        <katana-textbox [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\">\r\n        </katana-textbox>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'custom'\">\r\n      <ng-container [ngTemplateOutlet]=\"column.customTemplate()\" [ngTemplateOutlet]=\"{item: item}\">\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'description'\">\r\n      <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div (dblclick)=\"editInline(item, column.valueRef(), index)\" class=\"katana-tooltip\">\r\n          <span *ngIf=\"item[column.valueRef()] && column.showTooltip\" class=\"tooltiptext tooltip-top\">\r\n            {{item[column.valueRef()]}}\r\n          </span>\r\n          <span>\r\n            {{item[column.valueRef()] | shorten: option.maxLenghtext : '...'}}\r\n          </span>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div class=\"col-xs-12\" style=\"max-width: 250px;\">\r\n          <katana-editor [focus]=\"true\" [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"item[column.valueRef()]\">\r\n          </katana-editor>\r\n          <div style=\"text-align: right;\">\r\n            <katana-button [customClass]=\"'text-success'\" (execute)=\"acceptInlineEdit(column.valueRef(), index)\"\r\n              [icon]=\"'fa fa-check'\"></katana-button>\r\n            <katana-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\"></katana-button>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!readonly\">\r\n        <katana-textbox [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\">\r\n        </katana-textbox>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'number'\">\r\n      <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div (dblclick)=\"editInline(item, column.valueRef(), index)\">{{item[column.valueRef()]}}</div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div class=\"col-xs-12\">\r\n          <katana-textbox type=\"number\" [focus]=\"true\" [item]=\"item\" [title]=\"hasFormLabel ? column.title() : null\"\r\n            [(model)]=\"item[column.valueRef()]\">\r\n          </katana-textbox>\r\n          <div style=\"text-align: right;\">\r\n            <katana-button (execute)=\"acceptInlineEdit(column.valueRef(), index)\" [icon]=\"'fa fa-check'\"></katana-button>\r\n            <katana-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\"></katana-button>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!readonly\">\r\n        <katana-textbox [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\" type=\"number\">\r\n        </katana-textbox>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'currency'\">\r\n      <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div (dblclick)=\"editInline(item, column.valueRef(), index)\">{{item[column.valueRef()] | katanaCurrency}}</div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div class=\"col-xs-12\">\r\n          <katana-textbox [focus]=\"true\" [item]=\"item\" [title]=\"hasFormLabel ? column.title() : null\"\r\n            [(model)]=\"item[column.valueRef()]\" type=\"currency\">\r\n          </katana-textbox>\r\n          <div style=\"text-align: right;\">\r\n            <katana-button (execute)=\"acceptInlineEdit(column.valueRef(), index)\" [icon]=\"'fa fa-check'\"></katana-button>\r\n            <katana-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\"></katana-button>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!readonly\">\r\n        <katana-textbox [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\" type=\"currency\">\r\n        </katana-textbox>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'boolean'\">\r\n      <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div (dblclick)=\"editInline(item, column.valueRef(), index)\">\r\n          <span *ngIf=\"item[column.valueRef()]\" class=\"fa fa-check text-success\"></span>\r\n          <span *ngIf=\"!item[column.valueRef()]\" class=\"fa fa-remove text-danger\"></span>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div class=\"col-xs-12\">\r\n          <katana-checkbox [(model)]=\"item[column.valueRef()]\"></katana-checkbox>\r\n          <div style=\"text-align: right;\">\r\n            <katana-button (execute)=\"acceptInlineEdit(column.valueRef(), index)\" [icon]=\"'fa fa-check'\"></katana-button>\r\n            <katana-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\"></katana-button>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!readonly\">\r\n        <katana-checkbox [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\"></katana-checkbox>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'date'\">\r\n      <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div (dblclick)=\"editInline(item, column.valueRef(), index)\">{{item[column.valueRef()] | katanaDate}}</div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div class=\"col-xs-12\">\r\n          <katana-daterange-picker [selectMode]=\"'single'\" [title]=\"hasFormLabel ? column.title() : null\"\r\n            [(model)]=\"item[column.valueRef()]\" pickerType=\"calendar\"></katana-daterange-picker>\r\n          <div style=\"text-align: right;\">\r\n            <katana-button (execute)=\"acceptInlineEdit(column.valueRef(), index)\" [icon]=\"'fa fa-check'\"></katana-button>\r\n            <katana-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\"></katana-button>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!readonly\">\r\n        <katana-daterange-picker [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\"\r\n          pickerType=\"calendar\"></katana-daterange-picker>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'datetime'\">\r\n      <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div (dblclick)=\"editInline(item, column.valueRef(), index)\">{{item[column.valueRef()] | katanaDateTime}}</div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div class=\"col-xs-12\">\r\n          <katana-daterange-picker [selectMode]=\"'single'\" [title]=\"hasFormLabel ? column.title() : null\"\r\n            [(model)]=\"item[column.valueRef()]\" pickerType=\"both\"></katana-daterange-picker>\r\n          <div style=\"text-align: right;\">\r\n            <katana-button (execute)=\"acceptInlineEdit(column.valueRef(), index)\" [icon]=\"'fa fa-check'\"></katana-button>\r\n            <katana-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\"></katana-button>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!readonly\">\r\n        <katana-daterange-picker [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\"\r\n          pickerType=\"both\"></katana-daterange-picker>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'time'\">\r\n      <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div (dblclick)=\"editInline(item, column.valueRef(), index)\">{{item[column.valueRef()] | katanaTime}}</div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n        <div class=\"col-xs-12\">\r\n          <katana-daterange-picker [selectMode]=\"'single'\" [title]=\"hasFormLabel ? column.title() : null\"\r\n            [(model)]=\"item[column.valueRef()]\" pickerType=\"timer\"></katana-daterange-picker>\r\n          <div style=\"text-align: right;\">\r\n            <katana-button (execute)=\"acceptInlineEdit(column.valueRef(), index)\" [icon]=\"'fa fa-check'\"></katana-button>\r\n            <katana-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\"></katana-button>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!readonly\">\r\n        <katana-datetime-picker [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\"\r\n          pickerType=\"timer\"></katana-datetime-picker>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'dropdown'\">\r\n      <ng-container *ngIf=\"readonly\"> {{getDropdownDisplayText(column, item)}}</ng-container>\r\n      <ng-container *ngIf=\"!readonly\">\r\n        <katana-dropdown [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"item[column.valueRef()]\"\r\n          [searchFunction]=\"column.dropdownConfiguration.searchFunction\"\r\n          [multiple]=\"column.dropdownConfiguration.multiple\" [bindLabel]=\"column.dropdownConfiguration.bindLabel\"\r\n          [bindValue]=\"column.dropdownConfiguration.bindValue\"></katana-dropdown>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #toolbarSection>\r\n  <div class=\"row no-gutters toolbar\">\r\n    <div *ngIf=\"hasPageSizeChooser\" class=\"d-flex align-items-center mr-2 m-l-2 select-page-wrapper\">\r\n      <span>{{option.displayText.selectPageSize}}</span>\r\n      <div class=\"p-0 \">\r\n        <select [(ngModel)]=\"pageSize\" (change)=\"changePageSize()\" class=\"form-control col-xs-12 col-md-12\">\r\n          <option *ngFor=\"let opt of option.pageSizes\" value=\"{{opt}}\">{{opt}}</option>\r\n          <option value=\"999999\">{{option.displayText.allTitle}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div [@cAnimationFadeRight] class=\"table-action\" *ngIf=\"selectedItems.length > 0\">\r\n      <div class=\"d-flex align-items-center\">\r\n        <div class=\"col-xs-12 custom-toolbar  mr-2\">\r\n          <div class=\"btn-group \" role=\"group\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\"\r\n            data-original-title=\".btn-xlg\">\r\n            <ng-container *ngFor=\"let action of getToolbarActions(true)\">\r\n              <div *ngIf=\"!action.hide || !action.hide()\" class=\"katana-tooltip\">\r\n                <span *ngIf=\"action.tooltip\" class=\"tooltiptext tooltip-top\">{{action.tooltip()}}</span>\r\n                <katana-button *ngIf=\"action.type !== 'inline'\" class=\"mr-1\" [customClass]=\"action.customClass\"\r\n                  [lazyload]=\"action.lazyload\" title=\"{{action.title ? action.title() : ''}}\" [icon]=\"action.icon\"\r\n                  (execute)=\"executeActionAsync(action,null,null, null, $event)\">\r\n                </katana-button>\r\n              </div>\r\n            </ng-container>\r\n            <katana-dropdown-buttons *ngIf=\"toolbarActions.length > option.totalToolbarItem\" title=\"T\u00F9y ch\u1ECDn\">\r\n              <ng-container *ngFor=\"let action of getToolbarActions(false)\">\r\n                <katana-dropdown-button *ngIf=\"!action.hide || !action.hide()\" title=\"{{action.title ? action.title() : ''}}\"\r\n                  (execute)=\"executeActionAsync(action,null,null, null, $event)\" [disabled]=\"action.disabled\">\r\n                </katana-dropdown-button>\r\n              </ng-container>\r\n            </katana-dropdown-buttons>\r\n          </div>\r\n        </div>\r\n        <div class=\"table-summary\">\r\n          <span\r\n            [innerHTML]=\"option.message.selectedItemsMessage.replace('[0]', selectedItems.length.toString())\"></span>&nbsp;\r\n          <a href=\"javascript:;\" (click)=\"clearAll()\" [innerHTML]=\"option.message.confirmClearAllRecordsMessage\"></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"d-flex ml-auto\">\r\n      <div class=\"katana-tooltip\" *ngFor=\"let action of this.option.topButtons; last as isLast\">\r\n        <span *ngIf=\"action.tooltip\" class=\"tooltiptext tooltip-top\">{{action.tooltip()}}</span>\r\n        <katana-button *ngIf=\"!action.hide || !action.hide()\" [lazyload]=\"action.lazyload\" [customClass]=\"action.customClass\"\r\n          title=\"{{action.title ? action.title() : ''}}\" [icon]=\"action.icon\"\r\n          (execute)=\"executeActionAsync(action,null,null, null, $event)\" [class.mr-2]=\"!isLast\"\r\n          [disabled]=\"action.disabled\"></katana-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
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
                styles: [".katana-switch{position:relative;display:inline-block;width:47px;height:25px}.katana-switch input{display:none}.katana-switch input:checked+.katana-slider{background-color:#6fbb35}.katana-switch input:focus+.katana-slider{box-shadow:0 0 1px #6fbb35}.katana-switch input:checked+.katana-slider:before{transform:translateX(26px)}.katana-switch .katana-slider{box-shadow:1px 1px 1px rgba(0,0,0,.145);position:absolute;cursor:pointer;top:6px;left:6px;right:0;bottom:0;background-color:#b7b0ac;transition:.2s;border-radius:34px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0;width:2.5rem;height:.9375rem}.katana-switch .katana-slider:before{position:absolute;content:\"\";left:-.3125rem;top:-.17rem;box-shadow:1px 1px 1px 1px rgba(0,0,0,.245);background-color:#f4f3f0;transition:.2s;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:1.3125rem;height:1.3125rem}.katana-tooltip{position:relative;overflow:unset;display:inline-block}.katana-tooltip.primary .tooltiptext{background-color:#338bf8;color:#fff}.katana-tooltip.primary .tooltip-top{box-shadow:none}.katana-tooltip.primary .tooltip-top:after{border-color:#338bf8 transparent transparent}.katana-tooltip.info .tooltiptext{background-color:#1d9ce7;color:#fff}.katana-tooltip.info .tooltip-top{box-shadow:none}.katana-tooltip.info .tooltip-top:after{border-color:#1d9ce7 transparent transparent}.katana-tooltip.dark .tooltiptext{background-color:#052d3e;color:#fff}.katana-tooltip.dark .tooltip-top{box-shadow:none}.katana-tooltip.dark .tooltip-top:after{border-color:#052d3e transparent transparent}.katana-tooltip .tooltiptext{max-width:180px;min-width:120px;line-height:2;word-break:break-word;visibility:hidden;position:absolute;white-space:normal;background-color:#fff;color:#052d3e;text-align:center;padding:5px;border-radius:5px;z-index:1;opacity:0;transition:.3s;font-size:12px;font-weight:500;transform:translateY(20px)}.katana-tooltip .tooltip-top{box-shadow:1px 3px 9px rgba(0,0,0,.18);bottom:120%;left:50%;margin-left:-60px}.katana-tooltip .tooltip-top:after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#fff transparent transparent}.katana-tooltip:hover .tooltiptext{visibility:visible;opacity:1;transform:translateY(0)}.search-bar .search-input-wrapper{position:relative}.search-bar .search-input-wrapper .search-icon{position:absolute;z-index:9;right:10px;font-size:16px;line-height:32px;color:#87837b;cursor:pointer}.search-bar .search-input-wrapper .search-icon:hover{color:#338bf8}.search-bar .search-input-wrapper .search-input{width:420px;padding-left:10px;border-radius:3px;padding-right:56px}@media (max-width:480px){.search-bar .search-input-wrapper .search-input{width:100%}}.search-bar .search-input-wrapper .search-reset{position:absolute;z-index:9;right:36px;font-size:18px;line-height:32px;color:#b7b0ac;cursor:pointer}.search-bar .search-input-wrapper .search-reset:hover{color:#87837b}.katana-table--wrapper{border:1px solid #f4f3f0}.katana-table--wrapper .loading-indicator{display:none}.katana-table--wrapper .loading-indicator.show{display:block;top:50%;position:absolute;right:47%}.katana-table--wrapper .loading-indicator.show .spinner{text-align:center}.katana-table--wrapper .loading-indicator.show .spinner>div{width:18px;height:18px;background-color:#338bf8;border-radius:100%;display:inline-block;-webkit-animation:1s ease-in-out infinite both sk-bouncedelay;animation:1s ease-in-out infinite both sk-bouncedelay}.katana-table--wrapper .loading-indicator.show .spinner .bounce1{-webkit-animation-delay:-.32s;animation-delay:-.32s}.katana-table--wrapper .loading-indicator.show .spinner .bounce2{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes sk-bouncedelay{0%,100%,80%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}@keyframes sk-bouncedelay{0%,100%,80%{transform:scale(0)}40%{transform:scale(1)}}.katana-table--wrapper .loading-cover{-webkit-filter:blur(2px);filter:blur(2px);opacity:.3;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.toolbar{width:100%;padding:10px 0;margin:0}.toolbar .select-page-wrapper span{font-size:12px;color:#87837b;margin-right:6px}.toolbar .select-page-wrapper select{padding:3px 5px;border:1px solid #e8e8e8;background:#fafafa}.toolbar .table-action .table-summary{background:#fff5e6;padding:5px 16px;border-radius:5px}.toolbar .confirm-highlight,.toolbar .highlight{color:#338bf8;font-weight:500}.toolbar .custom-toolbar .dropdown{position:relative;display:inline-block}.toolbar .custom-toolbar .dropdown .dropdown-content{display:none;position:absolute;background-color:#f1f1f1;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1;top:30px}.toolbar .custom-toolbar .dropdown .dropdown-content a{padding:6px 12px;line-height:16px;font-size:11px;text-decoration:none;display:block}.toolbar .custom-toolbar .dropdown .dropdown-content a:hover{background-color:#ddd}.toolbar .custom-toolbar .dropdown:hover .dropdown-content{display:block}.toolbar .custom-toolbar .dropdown .custom-btn{border-left:none}.hidden{display:none}.paging{border-top:1px solid #f4f3f0;padding:15px 10px;position:relative}.paging .page{width:30px;height:30px;line-height:30px;border-right:none;float:right;text-align:center;cursor:pointer}.paging .page:hover{background-color:#338bf8;color:#fff;font-weight:500}.paging .page:hover.active{background-color:#fff;color:#338bf8;font-weight:500}.paging .active{background-color:#fff;color:#338bf8;font-weight:500}.paging .confirm-highlight,.paging .highlight{color:#338bf8;font-weight:500}.paging .result-search-text{color:#87837b}.paging .page-navigator .goto{padding:3px 5px;border:1px solid #e8e8e8;font-weight:500;background:#fafafa;color:#338bf8;width:45px;text-align:center}.disabled{opacity:.65}.filter{margin:.5rem 0 0;background:#fafafa;padding:1rem;position:relative}.filter .filter-title{font-weight:500;text-transform:uppercase;color:#4b4542}.filter .filter-element{margin-top:5px;margin-bottom:5px}.filter .filter-element .dt-relative{position:relative}.filter .filter-element .dt-relative:hover{color:#5757e7}.filter .filter-element .date-icon{position:absolute;top:0;right:0;font-size:16px;margin-top:7px;margin-right:10px;cursor:pointer}.katana-main-table{width:100%}.katana-component{padding:0;margin:0;width:100%;border-collapse:collapse}@media (max-width:1024px){.katana-component{width:100%}}.katana-component.scroll-mode{min-width:1200px}.katana-component .no-result{padding:3rem;background:#fafafa;font-weight:400;color:#584d4d;font-size:1rem}.katana-component td,.katana-component th{padding:6px;text-align:left;cursor:pointer;vertical-align:middle}.katana-component thead{border-bottom:1px solid #f2f1ee}.katana-component thead th{background:#fff;padding:10px 5px;font-weight:500;text-transform:inherit;vertical-align:middle;border-right:1px solid #f2f1ee}.katana-component thead th.sortable .sort-icon{line-height:19px}.katana-component thead th.sortable:hover{background:#ededed}.katana-component thead th:last-of-type{border-right:0 solid #f4f3f0}.katana-component tbody:nth-child(odd) .katana-tr{background-color:#fafafa}.katana-component tbody .katana-tr:hover{background-color:#ecf7fd}.katana-component tbody .katana-tr:hover .action-column-wrapper .btn-link{-webkit-filter:grayscale(0);filter:grayscale(0);opacity:1}.katana-component tbody .katana-tr.active{background-color:#d5edfb;border-top:1px solid #a7d9f6;border-bottom:1px solid #a7d9f6}.katana-component tbody .katana-tr.active:hover{background-color:#d5edfb;border-top:1px solid #79c4f1;border-bottom:1px solid #79c4f1}.katana-component tbody .katana-tr.active:hover .action-column-wrapper .btn-link{-webkit-filter:grayscale(0);filter:grayscale(0);opacity:1}.katana-component tbody .katana-tr.link{color:#6767dd}.katana-component tbody .katana-tr.link:hover{color:#151583}.katana-component tbody .katana-tr .katana-td .dt-relative{position:relative}.katana-component tbody .katana-tr .katana-td .dt-relative:hover{color:#5757e7}.katana-component tbody .katana-tr .katana-td .date-icon{position:absolute;top:0;right:0;font-size:16px;margin-top:7px;margin-right:80px;cursor:pointer}.katana-component tbody .katana-tr .action-column-wrapper .btn-link{-webkit-filter:grayscale(100%);filter:grayscale(100%);opacity:.3}.katana-component tbody .row-detail-wrapper{border-bottom:1px solid #e8e8e8;border-top:1px solid #f4f3f0}.katana-component tbody .row-detail-wrapper .detail-title{background:#fafafa;padding:6px 14px;margin:7px;font-weight:500;color:#052d3e}.katana-component .wrap-text{white-space:normal;word-wrap:break-word;word-break:break-word}.katana-component .center,.katana-component .detail{text-align:center}.katana-component .right{text-align:right}.katana-component.dark>thead>tr>th{background:#052d3e;color:#fff}.katana-component.dark>thead>tr>th.sortable:hover{background:#031c26}.katana-component.primary>thead>tr>th{background:#f7f7f7;color:#4b4542}.katana-component.primary>thead>tr>th.sortable:hover{background:#ededed}.katana-component.info>thead>tr>th{background:#1d9ce7;color:#fff}.katana-component.info>thead>tr>th.sortable:hover{background:#178ed4}.katana-component.list-mode table,.katana-component.list-mode tbody,.katana-component.list-mode td,.katana-component.list-mode th,.katana-component.list-mode thead,.katana-component.list-mode tr{display:block}.katana-component.list-mode thead tr{position:absolute;top:-9999px;left:-9999px}.katana-component.list-mode tr{border-bottom:0}.katana-component.list-mode tr:last-child{border-bottom:1px solid #ddd}.katana-component.list-mode td.katana-td{border:none;position:relative;padding-left:50%}.katana-component.list-mode td:before{position:absolute;top:6px;left:6px;width:45%;padding-right:10px;white-space:nowrap;font-weight:700;content:attr(data-content)}.katana-component.list-mode .center,.katana-component.list-mode .detail,.katana-component.list-mode .right{text-align:left}.katana-component.list-mode .table-action{margin-top:5px}@media only screen and (max-width:760px),(min-device-width:768px) and (max-device-width:1024px){.katana-component table,.katana-component tbody,.katana-component td,.katana-component th,.katana-component thead,.katana-component tr{display:block}.katana-component thead tr{position:absolute;top:-9999px;left:-9999px}.katana-component tr{border-bottom:0}.katana-component tr:last-child{border-bottom:1px solid #ddd}.katana-component td.katana-td{border:none;position:relative;padding-left:50%}.katana-component td:before{position:absolute;top:6px;left:6px;width:45%;padding-right:10px;white-space:nowrap;font-weight:700;content:attr(data-content)}.katana-component .center,.katana-component .detail,.katana-component .right{text-align:left}.katana-component .table-action{margin-top:5px}}.custom-input{position:relative}.custom-input .custom-td *{margin:0}.custom-input .has-error:not(:focus)+.validation-error{font-size:12px;position:absolute}.custom-input .has-error:not(:focus)+.validation-error:after{font-family:IcoFont!important;position:absolute;top:-30px!important;height:16px;border-radius:50px;right:0;background:#fff;font-size:16px;color:#d61e00}.custom-input .has-error:not(:focus)+.validation-error .mini-pop{position:absolute;top:-35px!important;padding:5px 10px;border-radius:5px;right:26px;z-index:1;background:#fff;box-shadow:0 2px 3px rgba(0,0,0,.12);max-width:212px}.custom-input .has-error:not(:focus)+.validation-error .mini-pop:after{content:\"\";display:block;position:absolute;right:-10px;bottom:7px;width:0;height:0;border:5px solid transparent;border-left-color:#fff}.custom-input .has-error:not(:focus)+.validation-error .mini-pop:before{content:\"\";display:block;position:absolute;right:-12px;bottom:5px;width:0;height:0;border:6px solid transparent;border-left-color:#bfbfbf}.flex-custom{display:flex}.selected{background-color:#d4eaf8!important}@media (max-width:480px){.flex-custom{display:unset}}.loader{-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}@-webkit-keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"]
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
    constructor() {
        this.customClass = 'default';
        this.disabled = false;
        this.loadingIcon = 'fa fa-spinner icon-loader';
        this.lazyload = false;
        this.execute = new EventEmitter();
        this.loading = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleAction($event) {
        if (this.loading) {
            $event.preventdefault();
            return;
        }
        ;
        if (this.lazyload) {
            this.loading = true;
            this.execute.emit((/**
             * @return {?}
             */
            () => { this.loading = false; }));
        }
        else {
            this.execute.emit();
        }
    }
    /**
     * @return {?}
     */
    retrieveButtonClass() {
        if (this.customClass)
            return `btn-${this.customClass}`;
        return 'btn-default';
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-button',
                template: "<button type=\"button\" class=\"btn\" [ngClass]=\"retrieveButtonClass()\" [disabled]=\"disabled || loading\"\r\n  data-toggle=\"tooltip\" [attr.title]=\"tooltip\" (click)=\"handleAction($event)\">\r\n  <span>\r\n    <i style=\"margin-right: 3px;\" [ngClass]=\"loading ? loadingIcon : icon\" aria-hidden=\"true\"></i>\r\n    <span>{{title}}</span>\r\n  </span>\r\n</button>",
                styles: [".btn{display:inline-block;border-radius:1px;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:7px 10px;font-size:13px;line-height:19.5px;border:none;cursor:pointer;overflow:hidden;position:relative;font-weight:500;letter-spacing:.3px}.btn:focus{outline:0}.btn .spinner{-webkit-animation:1s linear infinite anim-rotate;animation:1s linear infinite anim-rotate;color:inherit;text-shadow:0 0 .25em rgba(255,255,255,.3)}.btn-action-icon{padding-left:20px;padding-right:20px}.btn-action-icon span i:before{background:rgba(0,0,0,.05);position:absolute;height:100%;left:0;top:0;line-height:2.2;font-size:112%;width:34px}.btn-show-icon-right{overflow:hidden;padding-left:5px;padding-right:27px}.btn-show-icon-right span i:before{position:absolute;height:100%;font-size:100%;line-height:2.5;transition:.3s;left:130%;top:0}.btn-show-icon-right:hover span i:before{left:80%}.btn-show-icon-left{overflow:hidden;padding-left:7px;padding-right:25px}.btn-show-icon-left span i:before{position:absolute;height:100%;font-size:100%;line-height:2.5;transition:.3s;left:-50%;top:0}.btn-show-icon-left:hover span i:before{left:10%}.btn-show-icon-right-in{overflow:hidden;padding-left:5px;padding-right:27px}.btn-show-icon-right-in span i:before{position:absolute;height:100%;font-size:100%;line-height:2.5;transition:.3s;left:70%;opacity:0;top:0}.btn-show-icon-right-in:hover span i:before{left:80%;opacity:1}.btn-show-icon-left-in{overflow:hidden;padding-left:7px;padding-right:25px}.btn-show-icon-left-in span i:before{position:absolute;height:100%;font-size:100%;line-height:2.5;transition:.3s;left:20%;opacity:0;top:0}.btn-show-icon-left-in:hover span i:before{left:10%;opacity:1}.btn-hide-icon-up{overflow:hidden;padding-left:0;padding-right:28px}.btn-hide-icon-up span i{width:12px}.btn-hide-icon-up span i:before{position:absolute;height:100%;width:100%;line-height:2;font-size:130%;transition:.3s;left:0;top:-100%}.btn-hide-icon-up span span{display:inline-block;width:100%;height:100%;-webkit-transition:.3s;-webkit-backface-visibility:hidden;-moz-transition:.3s;-moz-backface-visibility:hidden;transition:.3s;backface-visibility:hidden}.btn-hide-icon-up:hover span i:before{top:0}.btn-hide-icon-up:hover span span{transform:translateY(300%)}.btn-hide-icon-right{overflow:hidden;padding-left:0;padding-right:28px}.btn-hide-icon-right span i{width:12px}.btn-hide-icon-right span i:before{position:absolute;height:100%;width:100%;line-height:2;font-size:130%;transition:.3s;left:-100%;top:0}.btn-hide-icon-right span span{display:inline-block;width:100%;height:100%;-webkit-transition:.3s;-webkit-backface-visibility:hidden;-moz-transition:.3s;-moz-backface-visibility:hidden;transition:.3s;backface-visibility:hidden}.btn-hide-icon-right:hover span i:before{left:0}.btn-hide-icon-right:hover span span{transform:translateX(200%)}@-webkit-keyframes anim-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes anim-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.close{cursor:pointer}.button-page .card-block{margin-bottom:-20px}.button-page .card-block ul{margin-bottom:0;display:inline-block}.button-page .card-block a{margin-bottom:20px}.button-page .card-block ul li{display:inline-block;margin-right:20px;float:left}.button-page .btn{margin-bottom:20px;margin-right:10px}.btn.btn-round{border-radius:2rem}.btn.btn-square{border-radius:0}.btn.btn-skew{transform:skew(-15deg)}.btn i{margin-right:0;font-size:14px;width:16px}.btn.btn-icon{border-radius:50%;width:40px;line-height:30px;height:40px;padding:3px;text-align:center}.btn.btn-out{outline:#fff solid 1px;outline-offset:-5px}.btn.btn-out-dashed{outline:#fff dashed 1px;outline-offset:-5px}.btn.btn-out-dotted{outline:#fff dotted 1px;outline-offset:-5px}.btn-group,.btn-group-vertical{display:inline-block}.btn-group .btn{float:left}.icon-btn i{margin-right:0!important}.button-page .btn-group{margin-right:10px}.show>.dropdown-menu{overflow:hidden}.dropdown-danger,.dropdown-default,.dropdown-disabled,.dropdown-info,.dropdown-inverse,.dropdown-primary,.dropdown-success,.dropdown-warning{display:inline-block;vertical-align:center;position:relative}.btn-group [class*=btn-],.dropdown-split [class*=btn-]{margin-right:0}.list-group-item.active{background-color:#5ca3ef;border-color:#5ca3ef}.show>.btn-primary.dropdown-toggle{background-color:#2483f7!important;border-color:#2483f7;box-shadow:none;color:#fff;top:1px}#Note-list li:hover .Note-delete{opacity:1;transform:translateX(0)}#Note-list li:hover .Note-delete:hover{background:rgba(0,0,0,.8)}.button-list .btn{margin-bottom:10px;margin-right:30px}.Note-delete{margin-bottom:0;opacity:0;background:rgba(0,0,0,.6);border:none;position:absolute;right:20px;color:#fff;transition:.3s ease-in;border-radius:2px;cursor:pointer;transform:translateX(10px)}.popover-body .color-code{margin-bottom:10px}.popover-body .display-color{width:75px;height:2.5rem;border-radius:.25rem;margin-right:30px;opacity:.5!important}.popover-body span.block{display:block;width:100%;text-align:center;font-size:14px}.popover-title{text-align:center}.btn.btn-disabled,.dropdown-disabled,.dropdown-split-disabled{cursor:not-allowed}.nav-pills .nav-link.active,.nav-pills .nav-link.active.active,.nav-pills .nav-link.active.active:focus,.nav-pills .nav-link.active.active:hover,.nav-pills .nav-link.active:focus,.nav-pills .nav-link.active:hover{background:0 0;color:#0275d8;text-align:center;border-bottom:1px solid #0275d8}.btn-primary{background-color:#338bf8;border-color:#338bf8;color:#fff;cursor:pointer;transition:.1s ease-in-out}.btn-primary:before{content:\"\";width:200%;height:200%;background:rgba(255,255,255,.2);transform:rotate(-45deg);position:absolute;top:-10%;left:-202%;transition:.2s ease-in-out}.btn-primary:hover:enabled{background-color:#4c99f9;border-color:#4c99f9}.btn-primary:hover:enabled:before{left:60%}.btn-primary:active:enabled{background-color:#2483f7!important;border-color:#2483f7;box-shadow:none;color:#fff;top:1px}.btn-primary:focus{box-shadow:none;color:#fff;background-color:#4c99f9}.btn-primary.disabled,.btn-primary:disabled{opacity:.5!important}.btn-default{background-color:#f2f2f2;border-color:#f2f2f2;color:#06374c;cursor:pointer;transition:.1s ease-in-out}.btn-default:hover{background-color:#f7f7f7;border-color:#f7f7f7;color:#5ca3ef}.btn-default:active{background-color:#eaeaea!important;border-color:#eaeaea;box-shadow:none;color:#5ca3ef;top:1px}.btn-default:focus{box-shadow:none;color:#052d3e;background-color:#f7f7f7}.btn-default.disabled,.btn-default:disabled{opacity:.5!important}.btn-warning{background-color:#ff9800;border-color:#ff9800;color:#fff;cursor:pointer;transition:.1s ease-in-out}.btn-warning:hover{background-color:#ffa21a;border-color:#ffa21a;color:#fff}.btn-warning:active{background-color:#f08f00!important;border-color:#f08f00;box-shadow:none;color:#fff;top:1px}.btn-warning:focus{box-shadow:none;color:#fff;background-color:#ffa21a}.btn-warning.disabled,.btn-warning:disabled{opacity:.5!important}.btn-danger{background-color:#d61e00;border-color:#d61e00;color:#fff;cursor:pointer;transition:.1s ease-in-out}.btn-danger:hover{background-color:#f02200;border-color:#f02200}.btn-danger:active{background-color:#c71c00!important;border-color:#c71c00;box-shadow:none;color:#fff;top:1px}.btn-danger:focus{box-shadow:none;color:#fff;background-color:#f02200}.btn-danger.disabled,.btn-danger:disabled{opacity:.5!important}.btn-success{background-color:#6fbb35;border-color:#6fbb35;color:#fff;cursor:pointer;transition:.1s ease-in-out}.btn-success:hover{background-color:#7cc940;border-color:#7cc940}.btn-success:active{background-color:#68af32!important;border-color:#68af32;box-shadow:none;color:#fff;top:1px}.btn-success:focus{box-shadow:none;color:#fff;background-color:#7cc940}.btn-success.disabled,.btn-success:disabled{opacity:.5!important}.btn-inverse{background-color:#052d3e;border-color:#052d3e;color:#fff;cursor:pointer;transition:.1s ease-in-out}.btn-inverse:hover{background-color:#073e56;border-color:#073e56}.btn-inverse:active{background-color:#042330!important;border-color:#042330;box-shadow:none;color:#fff;top:1px}.btn-inverse:focus{box-shadow:none;color:#fff;background-color:#073e56}.btn-inverse.disabled,.btn-inverse:disabled{opacity:.5!important}.btn-info{background-color:#1d9ce7;border-color:#1d9ce7;color:#fff;cursor:pointer;transition:.1s ease-in-out}.btn-info:hover{background-color:#34a6e9;border-color:#34a6e9}.btn-info:active{background-color:#1794dd!important;border-color:#1794dd;box-shadow:none;color:#fff;top:1px}.btn-info:focus{box-shadow:none;color:#fff;background-color:#34a6e9}.btn-info.disabled,.btn-info:disabled{opacity:.5!important}.btn-link{background-color:transparent;border-color:transparent;color:#338bf8;cursor:pointer;transition:.1s ease-in-out;box-shadow:none}.btn-link:hover{background-color:transparent;border-color:#f2f2f2}.btn-link:active{background-color:transparent!important;border-color:transparent;box-shadow:none;color:#338bf8;top:1px}.btn-link:focus{box-shadow:none;color:#338bf8;background-color:transparent}.btn-link.disabled,.btn-link:disabled{opacity:.5!important}.btn-link-default{background-color:#fff;border-color:transparent;color:#052d3e;cursor:pointer;transition:.1s ease-in-out;box-shadow:none}.btn-link-default:hover{background-color:#f2f2f2;border-color:#f2f2f2}.btn-link-default:active{background-color:transparent!important;border-color:transparent;box-shadow:none;color:#052d3e;top:1px}.btn-link-default:focus{box-shadow:none;color:#052d3e;background-color:#f2f2f2}.btn-link-default.disabled,.btn-link-default:disabled{opacity:.5!important}.btn-disabled{background-color:rgba(70,128,254,.5);border-color:rgba(70,128,254,.5);color:#fff;cursor:pointer;transition:.1s ease-in-out}.btn-outline-primary{color:#338bf8;box-shadow:inset 0 0 0 1px #338bf8;background-color:transparent;transition:.3s}.btn-outline-primary:hover{background-color:#338bf8;border-color:#338bf8;color:#fff}.btn-outline-primary:active{background-color:#2483f7!important;border-color:#2483f7;box-shadow:none;color:#fff;top:1px}.btn-outline-danger{color:#d61e00;box-shadow:inset 0 0 0 1px #d61e00;background-color:transparent}.btn-outline-success{color:#6fbb35;box-shadow:inset 0 0 0 1px #6fbb35;background-color:transparent}.btn-outline-inverse{color:#052d3e;box-shadow:inset 0 0 0 1px #052d3e;background-color:transparent}.btn-outline-inverse:hover{background-color:#052d3e;border-color:#052d3e;color:#fff}.btn-outline-inverse:active{background-color:#042330!important;border-color:#042330;box-shadow:none;color:#fff;top:1px}.btn-outline-warning{color:#ff9800;box-shadow:inset 0 0 0 1px #ff9800;background-color:transparent}.btn-outline-info{color:#1d9ce7;box-shadow:inset 0 0 0 1px #1d9ce7;background-color:transparent}.btn-outline-disabled{color:#4680fe;box-shadow:inset 0 0 0 1px #4680fe;background-color:#4680fe}.btn-grd-danger,.btn-grd-disabled,.btn-grd-info,.btn-grd-inverse,.btn-grd-primary,.btn-grd-success,.btn-grd-warning{background-size:200% auto;transition:.5s ease-in-out;color:#fff}.btn-grd-danger:hover,.btn-grd-disabled:hover,.btn-grd-info:hover,.btn-grd-inverse:hover,.btn-grd-primary:hover,.btn-grd-success:hover,.btn-grd-warning:hover{background-position:right center}.btn-grd-danger.hor-grd,.btn-grd-disabled.hor-grd,.btn-grd-info.hor-grd,.btn-grd-inverse.hor-grd,.btn-grd-primary.hor-grd,.btn-grd-success.hor-grd,.btn-grd-warning.hor-grd{background-size:auto 200%}.btn-grd-danger.hor-grd:hover,.btn-grd-disabled.hor-grd:hover,.btn-grd-info.hor-grd:hover,.btn-grd-inverse.hor-grd:hover,.btn-grd-primary.hor-grd:hover,.btn-grd-success.hor-grd:hover,.btn-grd-warning.hor-grd:hover{background-position:bottom center}.btn-grd-primary{background-image:linear-gradient(to right,#4c99f9 0,#2483f7 51%,#4c99f9 100%)}.btn-grd-primary.hor-grd{background-image:linear-gradient(to top,#4c99f9 0,#2483f7 51%,#4c99f9 100%)}.btn-grd-warning{background-image:linear-gradient(to right,#ffa21a 0,#f08f00 51%,#ffa21a 100%)}.btn-grd-warning.hor-grd{background-image:linear-gradient(to top,#ffa21a 0,#f08f00 51%,#ffa21a 100%)}.btn-grd-danger{background-image:linear-gradient(to right,#f02200 0,#c71c00 51%,#f02200 100%)}.btn-grd-danger.hor-grd{background-image:linear-gradient(to top,#f02200 0,#c71c00 51%,#f02200 100%)}.btn-grd-success{background-image:linear-gradient(to right,#7cc940 0,#68af32 51%,#7cc940 100%)}.btn-grd-success.hor-grd{background-image:linear-gradient(to top,#7cc940 0,#68af32 51%,#7cc940 100%)}.btn-grd-inverse{background-image:linear-gradient(to right,#073e56 0,#042330 51%,#073e56 100%)}.btn-grd-inverse.hor-grd{background-image:linear-gradient(to top,#073e56 0,#042330 51%,#073e56 100%)}.btn-grd-info{background-image:linear-gradient(to right,#34a6e9 0,#1794dd 51%,#34a6e9 100%)}.btn-grd-info.hor-grd{background-image:linear-gradient(to top,#34a6e9 0,#1794dd 51%,#34a6e9 100%)}.btn-grd-disabled{background-image:linear-gradient(to right,#5f91fe 0,#3776fe 51%,#5f91fe 100%)}.btn-grd-disabled.hor-grd{background-image:linear-gradient(to top,#5f91fe 0,#3776fe 51%,#5f91fe 100%)}.btn.btn-mat{position:relative;border-radius:0;border:none}.btn.btn-mat:before{content:\"\";position:absolute;bottom:0;left:50%;right:50%;height:3px;transition:.3s ease-in-out}.btn.btn-mat:hover{border:none}.btn.btn-mat:hover:before{left:0;right:0}.btn-primary.btn-mat{background-color:#338bf8}.btn-primary.btn-mat:before{background-color:#2483f7}.btn-warning.btn-mat{background-color:#ff9800}.btn-warning.btn-mat:before{background-color:#f08f00}.btn-danger.btn-mat{background-color:#d61e00}.btn-danger.btn-mat:before{background-color:#c71c00}.btn-success.btn-mat{background-color:#6fbb35}.btn-success.btn-mat:before{background-color:#68af32}.btn-inverse.btn-mat{background-color:#052d3e}.btn-inverse.btn-mat:before{background-color:#042330}.btn-info.btn-mat{background-color:#1d9ce7}.btn-info.btn-mat:before{background-color:#1794dd}.btn-outline-disabled:before{background-color:#3776fe}.btn-primary .badge{color:#338bf8;background-color:#fff}.btn-success .badge{color:#6fbb35;background-color:#fff}.btn-info .badge{color:#1d9ce7;background-color:#fff}.btn-warning .badge{color:#ff9800;background-color:#fff}.btn-danger .badge{color:#d61e00;background-color:#fff}.btn-dribbble,.btn-dropbox,.btn-facebook,.btn-flickr,.btn-github,.btn-google-plus,.btn-instagram,.btn-linkedin,.btn-pinterest,.btn-skype,.btn-tumblr,.btn-twitter,.btn-youtube{color:#fff}.btn-dribbble:focus,.btn-dribbble:hover,.btn-dropbox:focus,.btn-dropbox:hover,.btn-facebook:focus,.btn-facebook:hover,.btn-flickr:focus,.btn-flickr:hover,.btn-github:focus,.btn-github:hover,.btn-google-plus:focus,.btn-google-plus:hover,.btn-instagram:focus,.btn-instagram:hover,.btn-linkedin:focus,.btn-linkedin:hover,.btn-pinterest:focus,.btn-pinterest:hover,.btn-skype:focus,.btn-skype:hover,.btn-tumblr:focus,.btn-tumblr:hover,.btn-twitter:focus,.btn-twitter:hover,.btn-youtube:focus,.btn-youtube:hover{color:#fff;box-shadow:none}.btn-facebook{background-color:#3b5998}.btn-twitter{background-color:#00aced}.btn-linkedin{background-color:#007bb6}.btn-dribbble{background-color:#ea4c89}.btn-google-plus{background-color:#dd4b39}.btn-instagram{background-color:#517fa4}.btn-pinterest{background-color:#cb2027}.btn-dropbox{background-color:#32506d}.btn-tumblr{background-color:#00aced}.dropdown-primary .dropdown-menu a:hover,.dropdown-split-primary .dropdown-menu a:hover{background-color:#338bf8;color:#fff}.dropdown-split-success .dropdown-menu a:hover,.dropdown-success .dropdown-menu a:hover{background-color:#6fbb35;color:#fff}.dropdown-info .dropdown-menu a:hover,.dropdown-split-info .dropdown-menu a:hover{background-color:#1d9ce7;color:#fff}.dropdown-split-warning .dropdown-menu a:hover,.dropdown-warning .dropdown-menu a:hover{background-color:#ff9800;color:#fff}.dropdown-danger .dropdown-menu a:hover,.dropdown-split-danger .dropdown-menu a:hover{background-color:#d61e00;color:#fff}.dropdown-inverse .dropdown-item,.dropdown-split-inverse .dropdown-item{transition:.3s ease-in}.dropdown-inverse .dropdown-item:hover,.dropdown-split-inverse .dropdown-item:hover{background-color:#052d3e;color:#fff}.btn-xlg{padding:14px 20px;font-size:21px;line-height:40px}.btn-lg{padding:10px 20px;font-size:15px;line-height:22.5px}.btn-md{padding:8px 16px;font-size:13px;line-height:19.5px}.btn-sm{padding:6px 12px;line-height:18px;font-size:11px}.btn-mini{padding:5px 10px;line-height:14px;font-size:10px}.card-header-right{z-index:999}.add-image-wrapper{position:relative}.add-image-wrapper .btn-add-image{position:relative;display:inline-block;width:90px;border:1px dashed #5ca3ef;height:90px;background:#fafafa;text-align:center;transition:.1s;border-radius:3px;overflow:initial;margin-bottom:15px}.add-image-wrapper .btn-add-image .katana-upload .upload-shadow{display:block;width:90px;height:90px;z-index:999999;top:0;left:0;background:red;position:absolute;opacity:0}.add-image-wrapper .btn-add-image .plus{width:100%;font-size:26px;color:#5ca3ef}.add-image-wrapper .btn-add-image h6{color:#5ca3ef;margin:0}.add-image-wrapper .btn-add-image:hover{background:#fff}.add-image-wrapper .btn-add-image:hover .add-image-menu{opacity:1;visibility:visible;display:block;transform:translateX(0)}.add-image-wrapper .btn-add-image:active{background:#fff}.add-image-wrapper .btn-add-image .add-image-menu{opacity:0;visibility:hidden;transition:.3s ease-in-out;transform:translateX(30px);z-index:10;position:absolute;background:#fff;top:0;left:90px;box-shadow:0 3px 9px rgba(0,0,0,.12);width:200px}.add-image-wrapper .btn-add-image .add-image-menu li:hover{background:#5ca3ef}.add-image-wrapper .btn-add-image .add-image-menu li:hover a{color:#fff}.add-image-wrapper .btn-add-image .add-image-menu li a{text-decoration:none;color:#052d3e;font-weight:500;display:inline-block;width:100%;text-align:left;padding:8px}.icon-loader{-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}@-webkit-keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"]
            }] }
];
ButtonComponent.propDecorators = {
    title: [{ type: Input }],
    customClass: [{ type: Input }],
    disabled: [{ type: Input }],
    icon: [{ type: Input }],
    loadingIcon: [{ type: Input }],
    lazyload: [{ type: Input }],
    tooltip: [{ type: Input }],
    execute: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.title;
    /** @type {?} */
    ButtonComponent.prototype.customClass;
    /** @type {?} */
    ButtonComponent.prototype.disabled;
    /** @type {?} */
    ButtonComponent.prototype.icon;
    /** @type {?} */
    ButtonComponent.prototype.loadingIcon;
    /** @type {?} */
    ButtonComponent.prototype.lazyload;
    /** @type {?} */
    ButtonComponent.prototype.tooltip;
    /** @type {?} */
    ButtonComponent.prototype.execute;
    /** @type {?} */
    ButtonComponent.prototype.loading;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownButtonComponent {
    constructor() {
        this.lazyload = false;
        this.loadingIcon = 'fa fa-spinner icon-loader';
        this.execute = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleAction($event) {
        if (this.loading) {
            $event.preventdefault();
            return;
        }
        ;
        if (this.lazyload) {
            this.loading = true;
            this.execute.emit((/**
             * @return {?}
             */
            () => { this.loading = false; }));
        }
        else {
            this.execute.emit();
        }
    }
}
DropdownButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-dropdown-button',
                template: "<ng-template>\r\n  <li role=\"menuitem\" [ngClass]=\"{'disabled': disabled}\" (click)=\"handleAction($event)\">\r\n    <a class=\"dropdown-item\" href=\"javascript:;\"> <span><i [ngClass]=\"loading ? loadingIcon : icon\"\r\n          aria-hidden=\"true\"></i></span>\r\n      {{title}} <span class=\"caret\"></span></a>\r\n  </li>\r\n</ng-template>",
                styles: [".btn{display:inline-block;border-radius:1px;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:7px 10px;font-size:13px;line-height:19.5px;border:none;cursor:pointer;overflow:hidden;position:relative;font-weight:500;letter-spacing:.3px}.btn:focus{outline:0}.btn .spinner{-webkit-animation:1s linear infinite anim-rotate;animation:1s linear infinite anim-rotate;color:inherit;text-shadow:0 0 .25em rgba(255,255,255,.3)}.btn-action-icon{padding-left:20px;padding-right:20px}.btn-action-icon span i:before{background:rgba(0,0,0,.05);position:absolute;height:100%;left:0;top:0;line-height:2.2;font-size:112%;width:34px}.btn-show-icon-right{overflow:hidden;padding-left:5px;padding-right:27px}.btn-show-icon-right span i:before{position:absolute;height:100%;font-size:100%;line-height:2.5;transition:.3s;left:130%;top:0}.btn-show-icon-right:hover span i:before{left:80%}.btn-show-icon-left{overflow:hidden;padding-left:7px;padding-right:25px}.btn-show-icon-left span i:before{position:absolute;height:100%;font-size:100%;line-height:2.5;transition:.3s;left:-50%;top:0}.btn-show-icon-left:hover span i:before{left:10%}.btn-show-icon-right-in{overflow:hidden;padding-left:5px;padding-right:27px}.btn-show-icon-right-in span i:before{position:absolute;height:100%;font-size:100%;line-height:2.5;transition:.3s;left:70%;opacity:0;top:0}.btn-show-icon-right-in:hover span i:before{left:80%;opacity:1}.btn-show-icon-left-in{overflow:hidden;padding-left:7px;padding-right:25px}.btn-show-icon-left-in span i:before{position:absolute;height:100%;font-size:100%;line-height:2.5;transition:.3s;left:20%;opacity:0;top:0}.btn-show-icon-left-in:hover span i:before{left:10%;opacity:1}.btn-hide-icon-up{overflow:hidden;padding-left:0;padding-right:28px}.btn-hide-icon-up span i{width:12px}.btn-hide-icon-up span i:before{position:absolute;height:100%;width:100%;line-height:2;font-size:130%;transition:.3s;left:0;top:-100%}.btn-hide-icon-up span span{display:inline-block;width:100%;height:100%;-webkit-transition:.3s;-webkit-backface-visibility:hidden;-moz-transition:.3s;-moz-backface-visibility:hidden;transition:.3s;backface-visibility:hidden}.btn-hide-icon-up:hover span i:before{top:0}.btn-hide-icon-up:hover span span{transform:translateY(300%)}.btn-hide-icon-right{overflow:hidden;padding-left:0;padding-right:28px}.btn-hide-icon-right span i{width:12px}.btn-hide-icon-right span i:before{position:absolute;height:100%;width:100%;line-height:2;font-size:130%;transition:.3s;left:-100%;top:0}.btn-hide-icon-right span span{display:inline-block;width:100%;height:100%;-webkit-transition:.3s;-webkit-backface-visibility:hidden;-moz-transition:.3s;-moz-backface-visibility:hidden;transition:.3s;backface-visibility:hidden}.btn-hide-icon-right:hover span i:before{left:0}.btn-hide-icon-right:hover span span{transform:translateX(200%)}@-webkit-keyframes anim-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes anim-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.close{cursor:pointer}.button-page .card-block{margin-bottom:-20px}.button-page .card-block ul{margin-bottom:0;display:inline-block}.button-page .card-block a{margin-bottom:20px}.button-page .card-block ul li{display:inline-block;margin-right:20px;float:left}.button-page .btn{margin-bottom:20px;margin-right:10px}.btn.btn-round{border-radius:2rem}.btn.btn-square{border-radius:0}.btn.btn-skew{transform:skew(-15deg)}.btn i{margin-right:0;font-size:14px;width:16px}.btn.btn-icon{border-radius:50%;width:40px;line-height:30px;height:40px;padding:3px;text-align:center}.btn.btn-out{outline:#fff solid 1px;outline-offset:-5px}.btn.btn-out-dashed{outline:#fff dashed 1px;outline-offset:-5px}.btn.btn-out-dotted{outline:#fff dotted 1px;outline-offset:-5px}.btn-group,.btn-group-vertical{display:inline-block}.btn-group .btn{float:left}.icon-btn i{margin-right:0!important}.button-page .btn-group{margin-right:10px}.show>.dropdown-menu{overflow:hidden}.dropdown-danger,.dropdown-default,.dropdown-disabled,.dropdown-info,.dropdown-inverse,.dropdown-primary,.dropdown-success,.dropdown-warning{display:inline-block;vertical-align:center;position:relative}.btn-group [class*=btn-],.dropdown-split [class*=btn-]{margin-right:0}.list-group-item.active{background-color:#5ca3ef;border-color:#5ca3ef}.show>.btn-primary.dropdown-toggle{background-color:#2483f7!important;border-color:#2483f7;box-shadow:none;color:#fff;top:1px}#Note-list li:hover .Note-delete{opacity:1;transform:translateX(0)}#Note-list li:hover .Note-delete:hover{background:rgba(0,0,0,.8)}.button-list .btn{margin-bottom:10px;margin-right:30px}.Note-delete{margin-bottom:0;opacity:0;background:rgba(0,0,0,.6);border:none;position:absolute;right:20px;color:#fff;transition:.3s ease-in;border-radius:2px;cursor:pointer;transform:translateX(10px)}.popover-body .color-code{margin-bottom:10px}.popover-body .display-color{width:75px;height:2.5rem;border-radius:.25rem;margin-right:30px;opacity:.5!important}.popover-body span.block{display:block;width:100%;text-align:center;font-size:14px}.popover-title{text-align:center}.btn.btn-disabled,.dropdown-disabled,.dropdown-split-disabled{cursor:not-allowed}.nav-pills .nav-link.active,.nav-pills .nav-link.active.active,.nav-pills .nav-link.active.active:focus,.nav-pills .nav-link.active.active:hover,.nav-pills .nav-link.active:focus,.nav-pills .nav-link.active:hover{background:0 0;color:#0275d8;text-align:center;border-bottom:1px solid #0275d8}.btn-primary{background-color:#338bf8;border-color:#338bf8;color:#fff;cursor:pointer;transition:.1s ease-in-out}.btn-primary:before{content:\"\";width:200%;height:200%;background:rgba(255,255,255,.2);transform:rotate(-45deg);position:absolute;top:-10%;left:-202%;transition:.2s ease-in-out}.btn-primary:hover:enabled{background-color:#4c99f9;border-color:#4c99f9}.btn-primary:hover:enabled:before{left:60%}.btn-primary:active:enabled{background-color:#2483f7!important;border-color:#2483f7;box-shadow:none;color:#fff;top:1px}.btn-primary:focus{box-shadow:none;color:#fff;background-color:#4c99f9}.btn-primary.disabled,.btn-primary:disabled{opacity:.5!important}.btn-default{background-color:#f2f2f2;border-color:#f2f2f2;color:#06374c;cursor:pointer;transition:.1s ease-in-out}.btn-default:hover{background-color:#f7f7f7;border-color:#f7f7f7;color:#5ca3ef}.btn-default:active{background-color:#eaeaea!important;border-color:#eaeaea;box-shadow:none;color:#5ca3ef;top:1px}.btn-default:focus{box-shadow:none;color:#052d3e;background-color:#f7f7f7}.btn-default.disabled,.btn-default:disabled{opacity:.5!important}.btn-warning{background-color:#ff9800;border-color:#ff9800;color:#fff;cursor:pointer;transition:.1s ease-in-out}.btn-warning:hover{background-color:#ffa21a;border-color:#ffa21a;color:#fff}.btn-warning:active{background-color:#f08f00!important;border-color:#f08f00;box-shadow:none;color:#fff;top:1px}.btn-warning:focus{box-shadow:none;color:#fff;background-color:#ffa21a}.btn-warning.disabled,.btn-warning:disabled{opacity:.5!important}.btn-danger{background-color:#d61e00;border-color:#d61e00;color:#fff;cursor:pointer;transition:.1s ease-in-out}.btn-danger:hover{background-color:#f02200;border-color:#f02200}.btn-danger:active{background-color:#c71c00!important;border-color:#c71c00;box-shadow:none;color:#fff;top:1px}.btn-danger:focus{box-shadow:none;color:#fff;background-color:#f02200}.btn-danger.disabled,.btn-danger:disabled{opacity:.5!important}.btn-success{background-color:#6fbb35;border-color:#6fbb35;color:#fff;cursor:pointer;transition:.1s ease-in-out}.btn-success:hover{background-color:#7cc940;border-color:#7cc940}.btn-success:active{background-color:#68af32!important;border-color:#68af32;box-shadow:none;color:#fff;top:1px}.btn-success:focus{box-shadow:none;color:#fff;background-color:#7cc940}.btn-success.disabled,.btn-success:disabled{opacity:.5!important}.btn-inverse{background-color:#052d3e;border-color:#052d3e;color:#fff;cursor:pointer;transition:.1s ease-in-out}.btn-inverse:hover{background-color:#073e56;border-color:#073e56}.btn-inverse:active{background-color:#042330!important;border-color:#042330;box-shadow:none;color:#fff;top:1px}.btn-inverse:focus{box-shadow:none;color:#fff;background-color:#073e56}.btn-inverse.disabled,.btn-inverse:disabled{opacity:.5!important}.btn-info{background-color:#1d9ce7;border-color:#1d9ce7;color:#fff;cursor:pointer;transition:.1s ease-in-out}.btn-info:hover{background-color:#34a6e9;border-color:#34a6e9}.btn-info:active{background-color:#1794dd!important;border-color:#1794dd;box-shadow:none;color:#fff;top:1px}.btn-info:focus{box-shadow:none;color:#fff;background-color:#34a6e9}.btn-info.disabled,.btn-info:disabled{opacity:.5!important}.btn-link{background-color:transparent;border-color:transparent;color:#338bf8;cursor:pointer;transition:.1s ease-in-out;box-shadow:none}.btn-link:hover{background-color:transparent;border-color:#f2f2f2}.btn-link:active{background-color:transparent!important;border-color:transparent;box-shadow:none;color:#338bf8;top:1px}.btn-link:focus{box-shadow:none;color:#338bf8;background-color:transparent}.btn-link.disabled,.btn-link:disabled{opacity:.5!important}.btn-link-default{background-color:#fff;border-color:transparent;color:#052d3e;cursor:pointer;transition:.1s ease-in-out;box-shadow:none}.btn-link-default:hover{background-color:#f2f2f2;border-color:#f2f2f2}.btn-link-default:active{background-color:transparent!important;border-color:transparent;box-shadow:none;color:#052d3e;top:1px}.btn-link-default:focus{box-shadow:none;color:#052d3e;background-color:#f2f2f2}.btn-link-default.disabled,.btn-link-default:disabled{opacity:.5!important}.btn-disabled{background-color:rgba(70,128,254,.5);border-color:rgba(70,128,254,.5);color:#fff;cursor:pointer;transition:.1s ease-in-out}.btn-outline-primary{color:#338bf8;box-shadow:inset 0 0 0 1px #338bf8;background-color:transparent;transition:.3s}.btn-outline-primary:hover{background-color:#338bf8;border-color:#338bf8;color:#fff}.btn-outline-primary:active{background-color:#2483f7!important;border-color:#2483f7;box-shadow:none;color:#fff;top:1px}.btn-outline-danger{color:#d61e00;box-shadow:inset 0 0 0 1px #d61e00;background-color:transparent}.btn-outline-success{color:#6fbb35;box-shadow:inset 0 0 0 1px #6fbb35;background-color:transparent}.btn-outline-inverse{color:#052d3e;box-shadow:inset 0 0 0 1px #052d3e;background-color:transparent}.btn-outline-inverse:hover{background-color:#052d3e;border-color:#052d3e;color:#fff}.btn-outline-inverse:active{background-color:#042330!important;border-color:#042330;box-shadow:none;color:#fff;top:1px}.btn-outline-warning{color:#ff9800;box-shadow:inset 0 0 0 1px #ff9800;background-color:transparent}.btn-outline-info{color:#1d9ce7;box-shadow:inset 0 0 0 1px #1d9ce7;background-color:transparent}.btn-outline-disabled{color:#4680fe;box-shadow:inset 0 0 0 1px #4680fe;background-color:#4680fe}.btn-grd-danger,.btn-grd-disabled,.btn-grd-info,.btn-grd-inverse,.btn-grd-primary,.btn-grd-success,.btn-grd-warning{background-size:200% auto;transition:.5s ease-in-out;color:#fff}.btn-grd-danger:hover,.btn-grd-disabled:hover,.btn-grd-info:hover,.btn-grd-inverse:hover,.btn-grd-primary:hover,.btn-grd-success:hover,.btn-grd-warning:hover{background-position:right center}.btn-grd-danger.hor-grd,.btn-grd-disabled.hor-grd,.btn-grd-info.hor-grd,.btn-grd-inverse.hor-grd,.btn-grd-primary.hor-grd,.btn-grd-success.hor-grd,.btn-grd-warning.hor-grd{background-size:auto 200%}.btn-grd-danger.hor-grd:hover,.btn-grd-disabled.hor-grd:hover,.btn-grd-info.hor-grd:hover,.btn-grd-inverse.hor-grd:hover,.btn-grd-primary.hor-grd:hover,.btn-grd-success.hor-grd:hover,.btn-grd-warning.hor-grd:hover{background-position:bottom center}.btn-grd-primary{background-image:linear-gradient(to right,#4c99f9 0,#2483f7 51%,#4c99f9 100%)}.btn-grd-primary.hor-grd{background-image:linear-gradient(to top,#4c99f9 0,#2483f7 51%,#4c99f9 100%)}.btn-grd-warning{background-image:linear-gradient(to right,#ffa21a 0,#f08f00 51%,#ffa21a 100%)}.btn-grd-warning.hor-grd{background-image:linear-gradient(to top,#ffa21a 0,#f08f00 51%,#ffa21a 100%)}.btn-grd-danger{background-image:linear-gradient(to right,#f02200 0,#c71c00 51%,#f02200 100%)}.btn-grd-danger.hor-grd{background-image:linear-gradient(to top,#f02200 0,#c71c00 51%,#f02200 100%)}.btn-grd-success{background-image:linear-gradient(to right,#7cc940 0,#68af32 51%,#7cc940 100%)}.btn-grd-success.hor-grd{background-image:linear-gradient(to top,#7cc940 0,#68af32 51%,#7cc940 100%)}.btn-grd-inverse{background-image:linear-gradient(to right,#073e56 0,#042330 51%,#073e56 100%)}.btn-grd-inverse.hor-grd{background-image:linear-gradient(to top,#073e56 0,#042330 51%,#073e56 100%)}.btn-grd-info{background-image:linear-gradient(to right,#34a6e9 0,#1794dd 51%,#34a6e9 100%)}.btn-grd-info.hor-grd{background-image:linear-gradient(to top,#34a6e9 0,#1794dd 51%,#34a6e9 100%)}.btn-grd-disabled{background-image:linear-gradient(to right,#5f91fe 0,#3776fe 51%,#5f91fe 100%)}.btn-grd-disabled.hor-grd{background-image:linear-gradient(to top,#5f91fe 0,#3776fe 51%,#5f91fe 100%)}.btn.btn-mat{position:relative;border-radius:0;border:none}.btn.btn-mat:before{content:\"\";position:absolute;bottom:0;left:50%;right:50%;height:3px;transition:.3s ease-in-out}.btn.btn-mat:hover{border:none}.btn.btn-mat:hover:before{left:0;right:0}.btn-primary.btn-mat{background-color:#338bf8}.btn-primary.btn-mat:before{background-color:#2483f7}.btn-warning.btn-mat{background-color:#ff9800}.btn-warning.btn-mat:before{background-color:#f08f00}.btn-danger.btn-mat{background-color:#d61e00}.btn-danger.btn-mat:before{background-color:#c71c00}.btn-success.btn-mat{background-color:#6fbb35}.btn-success.btn-mat:before{background-color:#68af32}.btn-inverse.btn-mat{background-color:#052d3e}.btn-inverse.btn-mat:before{background-color:#042330}.btn-info.btn-mat{background-color:#1d9ce7}.btn-info.btn-mat:before{background-color:#1794dd}.btn-outline-disabled:before{background-color:#3776fe}.btn-primary .badge{color:#338bf8;background-color:#fff}.btn-success .badge{color:#6fbb35;background-color:#fff}.btn-info .badge{color:#1d9ce7;background-color:#fff}.btn-warning .badge{color:#ff9800;background-color:#fff}.btn-danger .badge{color:#d61e00;background-color:#fff}.btn-dribbble,.btn-dropbox,.btn-facebook,.btn-flickr,.btn-github,.btn-google-plus,.btn-instagram,.btn-linkedin,.btn-pinterest,.btn-skype,.btn-tumblr,.btn-twitter,.btn-youtube{color:#fff}.btn-dribbble:focus,.btn-dribbble:hover,.btn-dropbox:focus,.btn-dropbox:hover,.btn-facebook:focus,.btn-facebook:hover,.btn-flickr:focus,.btn-flickr:hover,.btn-github:focus,.btn-github:hover,.btn-google-plus:focus,.btn-google-plus:hover,.btn-instagram:focus,.btn-instagram:hover,.btn-linkedin:focus,.btn-linkedin:hover,.btn-pinterest:focus,.btn-pinterest:hover,.btn-skype:focus,.btn-skype:hover,.btn-tumblr:focus,.btn-tumblr:hover,.btn-twitter:focus,.btn-twitter:hover,.btn-youtube:focus,.btn-youtube:hover{color:#fff;box-shadow:none}.btn-facebook{background-color:#3b5998}.btn-twitter{background-color:#00aced}.btn-linkedin{background-color:#007bb6}.btn-dribbble{background-color:#ea4c89}.btn-google-plus{background-color:#dd4b39}.btn-instagram{background-color:#517fa4}.btn-pinterest{background-color:#cb2027}.btn-dropbox{background-color:#32506d}.btn-tumblr{background-color:#00aced}.dropdown-primary .dropdown-menu a:hover,.dropdown-split-primary .dropdown-menu a:hover{background-color:#338bf8;color:#fff}.dropdown-split-success .dropdown-menu a:hover,.dropdown-success .dropdown-menu a:hover{background-color:#6fbb35;color:#fff}.dropdown-info .dropdown-menu a:hover,.dropdown-split-info .dropdown-menu a:hover{background-color:#1d9ce7;color:#fff}.dropdown-split-warning .dropdown-menu a:hover,.dropdown-warning .dropdown-menu a:hover{background-color:#ff9800;color:#fff}.dropdown-danger .dropdown-menu a:hover,.dropdown-split-danger .dropdown-menu a:hover{background-color:#d61e00;color:#fff}.dropdown-inverse .dropdown-item,.dropdown-split-inverse .dropdown-item{transition:.3s ease-in}.dropdown-inverse .dropdown-item:hover,.dropdown-split-inverse .dropdown-item:hover{background-color:#052d3e;color:#fff}.btn-xlg{padding:14px 20px;font-size:21px;line-height:40px}.btn-lg{padding:10px 20px;font-size:15px;line-height:22.5px}.btn-md{padding:8px 16px;font-size:13px;line-height:19.5px}.btn-sm{padding:6px 12px;line-height:18px;font-size:11px}.btn-mini{padding:5px 10px;line-height:14px;font-size:10px}.card-header-right{z-index:999}.add-image-wrapper{position:relative}.add-image-wrapper .btn-add-image{position:relative;display:inline-block;width:90px;border:1px dashed #5ca3ef;height:90px;background:#fafafa;text-align:center;transition:.1s;border-radius:3px;overflow:initial;margin-bottom:15px}.add-image-wrapper .btn-add-image .katana-upload .upload-shadow{display:block;width:90px;height:90px;z-index:999999;top:0;left:0;background:red;position:absolute;opacity:0}.add-image-wrapper .btn-add-image .plus{width:100%;font-size:26px;color:#5ca3ef}.add-image-wrapper .btn-add-image h6{color:#5ca3ef;margin:0}.add-image-wrapper .btn-add-image:hover{background:#fff}.add-image-wrapper .btn-add-image:hover .add-image-menu{opacity:1;visibility:visible;display:block;transform:translateX(0)}.add-image-wrapper .btn-add-image:active{background:#fff}.add-image-wrapper .btn-add-image .add-image-menu{opacity:0;visibility:hidden;transition:.3s ease-in-out;transform:translateX(30px);z-index:10;position:absolute;background:#fff;top:0;left:90px;box-shadow:0 3px 9px rgba(0,0,0,.12);width:200px}.add-image-wrapper .btn-add-image .add-image-menu li:hover{background:#5ca3ef}.add-image-wrapper .btn-add-image .add-image-menu li:hover a{color:#fff}.add-image-wrapper .btn-add-image .add-image-menu li a{text-decoration:none;color:#052d3e;font-weight:500;display:inline-block;width:100%;text-align:left;padding:8px}.katana-dropdown-btn{box-shadow:0 8px 16px 0 rgba(0,0,0,.2);border:none;list-style:none;padding:0;min-width:unset}@media (max-width:479px){.katana-dropdown-btn{width:250px}}.katana-dropdown-btn li{transition:.4s ease-in-out;cursor:pointer}.katana-dropdown-btn li:hover{background:#f2f2f2}.katana-dropdown-btn li:hover .dropdown-item{color:#eb5d13}.katana-dropdown-btn li a{transition:.4s ease-in-out;background-color:unset;white-space:unset!important;word-break:break-word;padding:7px 10px;text-align:left}li{transition:.4s ease-in-out;cursor:pointer}li:hover{background:#f2f2f2}li:hover .dropdown-item{color:#eb5d13}li a{transition:.4s ease-in-out;background-color:unset;white-space:unset!important;word-break:break-word;padding:7px 10px;text-align:left}.dropdown-item{font-size:14px}.icon-loader{-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}@-webkit-keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"]
            }] }
];
DropdownButtonComponent.propDecorators = {
    template: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
    title: [{ type: Input }],
    disabled: [{ type: Input }],
    lazyload: [{ type: Input }],
    customClass: [{ type: Input }],
    icon: [{ type: Input }],
    loadingIcon: [{ type: Input }],
    execute: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DropdownButtonComponent.prototype.template;
    /** @type {?} */
    DropdownButtonComponent.prototype.title;
    /** @type {?} */
    DropdownButtonComponent.prototype.disabled;
    /** @type {?} */
    DropdownButtonComponent.prototype.lazyload;
    /** @type {?} */
    DropdownButtonComponent.prototype.customClass;
    /** @type {?} */
    DropdownButtonComponent.prototype.icon;
    /** @type {?} */
    DropdownButtonComponent.prototype.loadingIcon;
    /** @type {?} */
    DropdownButtonComponent.prototype.execute;
    /** @type {?} */
    DropdownButtonComponent.prototype.loading;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownButtonsComponent {
    constructor() {
        this.disabled = false;
        this.lazyload = false;
        this.loadingIcon = 'fa fa-spinner icon-loader';
        this.execute = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleAction($event) {
        if (this.loading) {
            $event.preventdefault();
            return;
        }
        ;
        if (this.lazyload) {
            this.loading = true;
            this.execute.emit((/**
             * @return {?}
             */
            () => { this.loading = false; }));
        }
        else {
            this.execute.emit();
        }
    }
}
DropdownButtonsComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-dropdown-buttons',
                template: "<div class=\"btn-group\" dropdown>\r\n  <button type=\"button\" (click)=\"handleAction($event)\" dropdownToggle class=\"btn dropdown-toggle\">\r\n    <span><i [ngClass]=\"loading ? loadingIcon : icon\" aria-hidden=\"true\"></i></span>\r\n    {{title}} <span class=\"caret\"></span>\r\n  </button>\r\n  <ul *dropdownMenu class=\"dropdown-menu katana-dropdown-btn\" role=\"menu\">\r\n    <ng-container *ngFor=\"let item of items\">\r\n      <ng-container *ngTemplateOutlet=\"item.template\">\r\n      </ng-container>\r\n    </ng-container>\r\n  </ul>\r\n</div>",
                styles: [".btn{display:inline-block;border-radius:1px;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:7px 10px;font-size:13px;line-height:19.5px;border:none;cursor:pointer;overflow:hidden;position:relative;font-weight:500;letter-spacing:.3px}.btn:focus{outline:0}.btn .spinner{-webkit-animation:1s linear infinite anim-rotate;animation:1s linear infinite anim-rotate;color:inherit;text-shadow:0 0 .25em rgba(255,255,255,.3)}.btn-action-icon{padding-left:20px;padding-right:20px}.btn-action-icon span i:before{background:rgba(0,0,0,.05);position:absolute;height:100%;left:0;top:0;line-height:2.2;font-size:112%;width:34px}.btn-show-icon-right{overflow:hidden;padding-left:5px;padding-right:27px}.btn-show-icon-right span i:before{position:absolute;height:100%;font-size:100%;line-height:2.5;transition:.3s;left:130%;top:0}.btn-show-icon-right:hover span i:before{left:80%}.btn-show-icon-left{overflow:hidden;padding-left:7px;padding-right:25px}.btn-show-icon-left span i:before{position:absolute;height:100%;font-size:100%;line-height:2.5;transition:.3s;left:-50%;top:0}.btn-show-icon-left:hover span i:before{left:10%}.btn-show-icon-right-in{overflow:hidden;padding-left:5px;padding-right:27px}.btn-show-icon-right-in span i:before{position:absolute;height:100%;font-size:100%;line-height:2.5;transition:.3s;left:70%;opacity:0;top:0}.btn-show-icon-right-in:hover span i:before{left:80%;opacity:1}.btn-show-icon-left-in{overflow:hidden;padding-left:7px;padding-right:25px}.btn-show-icon-left-in span i:before{position:absolute;height:100%;font-size:100%;line-height:2.5;transition:.3s;left:20%;opacity:0;top:0}.btn-show-icon-left-in:hover span i:before{left:10%;opacity:1}.btn-hide-icon-up{overflow:hidden;padding-left:0;padding-right:28px}.btn-hide-icon-up span i{width:12px}.btn-hide-icon-up span i:before{position:absolute;height:100%;width:100%;line-height:2;font-size:130%;transition:.3s;left:0;top:-100%}.btn-hide-icon-up span span{display:inline-block;width:100%;height:100%;-webkit-transition:.3s;-webkit-backface-visibility:hidden;-moz-transition:.3s;-moz-backface-visibility:hidden;transition:.3s;backface-visibility:hidden}.btn-hide-icon-up:hover span i:before{top:0}.btn-hide-icon-up:hover span span{transform:translateY(300%)}.btn-hide-icon-right{overflow:hidden;padding-left:0;padding-right:28px}.btn-hide-icon-right span i{width:12px}.btn-hide-icon-right span i:before{position:absolute;height:100%;width:100%;line-height:2;font-size:130%;transition:.3s;left:-100%;top:0}.btn-hide-icon-right span span{display:inline-block;width:100%;height:100%;-webkit-transition:.3s;-webkit-backface-visibility:hidden;-moz-transition:.3s;-moz-backface-visibility:hidden;transition:.3s;backface-visibility:hidden}.btn-hide-icon-right:hover span i:before{left:0}.btn-hide-icon-right:hover span span{transform:translateX(200%)}@-webkit-keyframes anim-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes anim-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.close{cursor:pointer}.button-page .card-block{margin-bottom:-20px}.button-page .card-block ul{margin-bottom:0;display:inline-block}.button-page .card-block a{margin-bottom:20px}.button-page .card-block ul li{display:inline-block;margin-right:20px;float:left}.button-page .btn{margin-bottom:20px;margin-right:10px}.btn.btn-round{border-radius:2rem}.btn.btn-square{border-radius:0}.btn.btn-skew{transform:skew(-15deg)}.btn i{margin-right:0;font-size:14px;width:16px}.btn.btn-icon{border-radius:50%;width:40px;line-height:30px;height:40px;padding:3px;text-align:center}.btn.btn-out{outline:#fff solid 1px;outline-offset:-5px}.btn.btn-out-dashed{outline:#fff dashed 1px;outline-offset:-5px}.btn.btn-out-dotted{outline:#fff dotted 1px;outline-offset:-5px}.btn-group,.btn-group-vertical{display:inline-block}.btn-group .btn{float:left}.icon-btn i{margin-right:0!important}.button-page .btn-group{margin-right:10px}.show>.dropdown-menu{overflow:hidden}.dropdown-danger,.dropdown-default,.dropdown-disabled,.dropdown-info,.dropdown-inverse,.dropdown-primary,.dropdown-success,.dropdown-warning{display:inline-block;vertical-align:center;position:relative}.btn-group [class*=btn-],.dropdown-split [class*=btn-]{margin-right:0}.list-group-item.active{background-color:#5ca3ef;border-color:#5ca3ef}.show>.btn-primary.dropdown-toggle{background-color:#2483f7!important;border-color:#2483f7;box-shadow:none;color:#fff;top:1px}#Note-list li:hover .Note-delete{opacity:1;transform:translateX(0)}#Note-list li:hover .Note-delete:hover{background:rgba(0,0,0,.8)}.button-list .btn{margin-bottom:10px;margin-right:30px}.Note-delete{margin-bottom:0;opacity:0;background:rgba(0,0,0,.6);border:none;position:absolute;right:20px;color:#fff;transition:.3s ease-in;border-radius:2px;cursor:pointer;transform:translateX(10px)}.popover-body .color-code{margin-bottom:10px}.popover-body .display-color{width:75px;height:2.5rem;border-radius:.25rem;margin-right:30px;opacity:.5!important}.popover-body span.block{display:block;width:100%;text-align:center;font-size:14px}.popover-title{text-align:center}.btn.btn-disabled,.dropdown-disabled,.dropdown-split-disabled{cursor:not-allowed}.nav-pills .nav-link.active,.nav-pills .nav-link.active.active,.nav-pills .nav-link.active.active:focus,.nav-pills .nav-link.active.active:hover,.nav-pills .nav-link.active:focus,.nav-pills .nav-link.active:hover{background:0 0;color:#0275d8;text-align:center;border-bottom:1px solid #0275d8}.btn-primary{background-color:#338bf8;border-color:#338bf8;color:#fff;cursor:pointer;transition:.1s ease-in-out}.btn-primary:before{content:\"\";width:200%;height:200%;background:rgba(255,255,255,.2);transform:rotate(-45deg);position:absolute;top:-10%;left:-202%;transition:.2s ease-in-out}.btn-primary:hover:enabled{background-color:#4c99f9;border-color:#4c99f9}.btn-primary:hover:enabled:before{left:60%}.btn-primary:active:enabled{background-color:#2483f7!important;border-color:#2483f7;box-shadow:none;color:#fff;top:1px}.btn-primary:focus{box-shadow:none;color:#fff;background-color:#4c99f9}.btn-primary.disabled,.btn-primary:disabled{opacity:.5!important}.btn-default{background-color:#f2f2f2;border-color:#f2f2f2;color:#06374c;cursor:pointer;transition:.1s ease-in-out}.btn-default:hover{background-color:#f7f7f7;border-color:#f7f7f7;color:#5ca3ef}.btn-default:active{background-color:#eaeaea!important;border-color:#eaeaea;box-shadow:none;color:#5ca3ef;top:1px}.btn-default:focus{box-shadow:none;color:#052d3e;background-color:#f7f7f7}.btn-default.disabled,.btn-default:disabled{opacity:.5!important}.btn-warning{background-color:#ff9800;border-color:#ff9800;color:#fff;cursor:pointer;transition:.1s ease-in-out}.btn-warning:hover{background-color:#ffa21a;border-color:#ffa21a;color:#fff}.btn-warning:active{background-color:#f08f00!important;border-color:#f08f00;box-shadow:none;color:#fff;top:1px}.btn-warning:focus{box-shadow:none;color:#fff;background-color:#ffa21a}.btn-warning.disabled,.btn-warning:disabled{opacity:.5!important}.btn-danger{background-color:#d61e00;border-color:#d61e00;color:#fff;cursor:pointer;transition:.1s ease-in-out}.btn-danger:hover{background-color:#f02200;border-color:#f02200}.btn-danger:active{background-color:#c71c00!important;border-color:#c71c00;box-shadow:none;color:#fff;top:1px}.btn-danger:focus{box-shadow:none;color:#fff;background-color:#f02200}.btn-danger.disabled,.btn-danger:disabled{opacity:.5!important}.btn-success{background-color:#6fbb35;border-color:#6fbb35;color:#fff;cursor:pointer;transition:.1s ease-in-out}.btn-success:hover{background-color:#7cc940;border-color:#7cc940}.btn-success:active{background-color:#68af32!important;border-color:#68af32;box-shadow:none;color:#fff;top:1px}.btn-success:focus{box-shadow:none;color:#fff;background-color:#7cc940}.btn-success.disabled,.btn-success:disabled{opacity:.5!important}.btn-inverse{background-color:#052d3e;border-color:#052d3e;color:#fff;cursor:pointer;transition:.1s ease-in-out}.btn-inverse:hover{background-color:#073e56;border-color:#073e56}.btn-inverse:active{background-color:#042330!important;border-color:#042330;box-shadow:none;color:#fff;top:1px}.btn-inverse:focus{box-shadow:none;color:#fff;background-color:#073e56}.btn-inverse.disabled,.btn-inverse:disabled{opacity:.5!important}.btn-info{background-color:#1d9ce7;border-color:#1d9ce7;color:#fff;cursor:pointer;transition:.1s ease-in-out}.btn-info:hover{background-color:#34a6e9;border-color:#34a6e9}.btn-info:active{background-color:#1794dd!important;border-color:#1794dd;box-shadow:none;color:#fff;top:1px}.btn-info:focus{box-shadow:none;color:#fff;background-color:#34a6e9}.btn-info.disabled,.btn-info:disabled{opacity:.5!important}.btn-link{background-color:transparent;border-color:transparent;color:#338bf8;cursor:pointer;transition:.1s ease-in-out;box-shadow:none}.btn-link:hover{background-color:transparent;border-color:#f2f2f2}.btn-link:active{background-color:transparent!important;border-color:transparent;box-shadow:none;color:#338bf8;top:1px}.btn-link:focus{box-shadow:none;color:#338bf8;background-color:transparent}.btn-link.disabled,.btn-link:disabled{opacity:.5!important}.btn-link-default{background-color:#fff;border-color:transparent;color:#052d3e;cursor:pointer;transition:.1s ease-in-out;box-shadow:none}.btn-link-default:hover{background-color:#f2f2f2;border-color:#f2f2f2}.btn-link-default:active{background-color:transparent!important;border-color:transparent;box-shadow:none;color:#052d3e;top:1px}.btn-link-default:focus{box-shadow:none;color:#052d3e;background-color:#f2f2f2}.btn-link-default.disabled,.btn-link-default:disabled{opacity:.5!important}.btn-disabled{background-color:rgba(70,128,254,.5);border-color:rgba(70,128,254,.5);color:#fff;cursor:pointer;transition:.1s ease-in-out}.btn-outline-primary{color:#338bf8;box-shadow:inset 0 0 0 1px #338bf8;background-color:transparent;transition:.3s}.btn-outline-primary:hover{background-color:#338bf8;border-color:#338bf8;color:#fff}.btn-outline-primary:active{background-color:#2483f7!important;border-color:#2483f7;box-shadow:none;color:#fff;top:1px}.btn-outline-danger{color:#d61e00;box-shadow:inset 0 0 0 1px #d61e00;background-color:transparent}.btn-outline-success{color:#6fbb35;box-shadow:inset 0 0 0 1px #6fbb35;background-color:transparent}.btn-outline-inverse{color:#052d3e;box-shadow:inset 0 0 0 1px #052d3e;background-color:transparent}.btn-outline-inverse:hover{background-color:#052d3e;border-color:#052d3e;color:#fff}.btn-outline-inverse:active{background-color:#042330!important;border-color:#042330;box-shadow:none;color:#fff;top:1px}.btn-outline-warning{color:#ff9800;box-shadow:inset 0 0 0 1px #ff9800;background-color:transparent}.btn-outline-info{color:#1d9ce7;box-shadow:inset 0 0 0 1px #1d9ce7;background-color:transparent}.btn-outline-disabled{color:#4680fe;box-shadow:inset 0 0 0 1px #4680fe;background-color:#4680fe}.btn-grd-danger,.btn-grd-disabled,.btn-grd-info,.btn-grd-inverse,.btn-grd-primary,.btn-grd-success,.btn-grd-warning{background-size:200% auto;transition:.5s ease-in-out;color:#fff}.btn-grd-danger:hover,.btn-grd-disabled:hover,.btn-grd-info:hover,.btn-grd-inverse:hover,.btn-grd-primary:hover,.btn-grd-success:hover,.btn-grd-warning:hover{background-position:right center}.btn-grd-danger.hor-grd,.btn-grd-disabled.hor-grd,.btn-grd-info.hor-grd,.btn-grd-inverse.hor-grd,.btn-grd-primary.hor-grd,.btn-grd-success.hor-grd,.btn-grd-warning.hor-grd{background-size:auto 200%}.btn-grd-danger.hor-grd:hover,.btn-grd-disabled.hor-grd:hover,.btn-grd-info.hor-grd:hover,.btn-grd-inverse.hor-grd:hover,.btn-grd-primary.hor-grd:hover,.btn-grd-success.hor-grd:hover,.btn-grd-warning.hor-grd:hover{background-position:bottom center}.btn-grd-primary{background-image:linear-gradient(to right,#4c99f9 0,#2483f7 51%,#4c99f9 100%)}.btn-grd-primary.hor-grd{background-image:linear-gradient(to top,#4c99f9 0,#2483f7 51%,#4c99f9 100%)}.btn-grd-warning{background-image:linear-gradient(to right,#ffa21a 0,#f08f00 51%,#ffa21a 100%)}.btn-grd-warning.hor-grd{background-image:linear-gradient(to top,#ffa21a 0,#f08f00 51%,#ffa21a 100%)}.btn-grd-danger{background-image:linear-gradient(to right,#f02200 0,#c71c00 51%,#f02200 100%)}.btn-grd-danger.hor-grd{background-image:linear-gradient(to top,#f02200 0,#c71c00 51%,#f02200 100%)}.btn-grd-success{background-image:linear-gradient(to right,#7cc940 0,#68af32 51%,#7cc940 100%)}.btn-grd-success.hor-grd{background-image:linear-gradient(to top,#7cc940 0,#68af32 51%,#7cc940 100%)}.btn-grd-inverse{background-image:linear-gradient(to right,#073e56 0,#042330 51%,#073e56 100%)}.btn-grd-inverse.hor-grd{background-image:linear-gradient(to top,#073e56 0,#042330 51%,#073e56 100%)}.btn-grd-info{background-image:linear-gradient(to right,#34a6e9 0,#1794dd 51%,#34a6e9 100%)}.btn-grd-info.hor-grd{background-image:linear-gradient(to top,#34a6e9 0,#1794dd 51%,#34a6e9 100%)}.btn-grd-disabled{background-image:linear-gradient(to right,#5f91fe 0,#3776fe 51%,#5f91fe 100%)}.btn-grd-disabled.hor-grd{background-image:linear-gradient(to top,#5f91fe 0,#3776fe 51%,#5f91fe 100%)}.btn.btn-mat{position:relative;border-radius:0;border:none}.btn.btn-mat:before{content:\"\";position:absolute;bottom:0;left:50%;right:50%;height:3px;transition:.3s ease-in-out}.btn.btn-mat:hover{border:none}.btn.btn-mat:hover:before{left:0;right:0}.btn-primary.btn-mat{background-color:#338bf8}.btn-primary.btn-mat:before{background-color:#2483f7}.btn-warning.btn-mat{background-color:#ff9800}.btn-warning.btn-mat:before{background-color:#f08f00}.btn-danger.btn-mat{background-color:#d61e00}.btn-danger.btn-mat:before{background-color:#c71c00}.btn-success.btn-mat{background-color:#6fbb35}.btn-success.btn-mat:before{background-color:#68af32}.btn-inverse.btn-mat{background-color:#052d3e}.btn-inverse.btn-mat:before{background-color:#042330}.btn-info.btn-mat{background-color:#1d9ce7}.btn-info.btn-mat:before{background-color:#1794dd}.btn-outline-disabled:before{background-color:#3776fe}.btn-primary .badge{color:#338bf8;background-color:#fff}.btn-success .badge{color:#6fbb35;background-color:#fff}.btn-info .badge{color:#1d9ce7;background-color:#fff}.btn-warning .badge{color:#ff9800;background-color:#fff}.btn-danger .badge{color:#d61e00;background-color:#fff}.btn-dribbble,.btn-dropbox,.btn-facebook,.btn-flickr,.btn-github,.btn-google-plus,.btn-instagram,.btn-linkedin,.btn-pinterest,.btn-skype,.btn-tumblr,.btn-twitter,.btn-youtube{color:#fff}.btn-dribbble:focus,.btn-dribbble:hover,.btn-dropbox:focus,.btn-dropbox:hover,.btn-facebook:focus,.btn-facebook:hover,.btn-flickr:focus,.btn-flickr:hover,.btn-github:focus,.btn-github:hover,.btn-google-plus:focus,.btn-google-plus:hover,.btn-instagram:focus,.btn-instagram:hover,.btn-linkedin:focus,.btn-linkedin:hover,.btn-pinterest:focus,.btn-pinterest:hover,.btn-skype:focus,.btn-skype:hover,.btn-tumblr:focus,.btn-tumblr:hover,.btn-twitter:focus,.btn-twitter:hover,.btn-youtube:focus,.btn-youtube:hover{color:#fff;box-shadow:none}.btn-facebook{background-color:#3b5998}.btn-twitter{background-color:#00aced}.btn-linkedin{background-color:#007bb6}.btn-dribbble{background-color:#ea4c89}.btn-google-plus{background-color:#dd4b39}.btn-instagram{background-color:#517fa4}.btn-pinterest{background-color:#cb2027}.btn-dropbox{background-color:#32506d}.btn-tumblr{background-color:#00aced}.dropdown-primary .dropdown-menu a:hover,.dropdown-split-primary .dropdown-menu a:hover{background-color:#338bf8;color:#fff}.dropdown-split-success .dropdown-menu a:hover,.dropdown-success .dropdown-menu a:hover{background-color:#6fbb35;color:#fff}.dropdown-info .dropdown-menu a:hover,.dropdown-split-info .dropdown-menu a:hover{background-color:#1d9ce7;color:#fff}.dropdown-split-warning .dropdown-menu a:hover,.dropdown-warning .dropdown-menu a:hover{background-color:#ff9800;color:#fff}.dropdown-danger .dropdown-menu a:hover,.dropdown-split-danger .dropdown-menu a:hover{background-color:#d61e00;color:#fff}.dropdown-inverse .dropdown-item,.dropdown-split-inverse .dropdown-item{transition:.3s ease-in}.dropdown-inverse .dropdown-item:hover,.dropdown-split-inverse .dropdown-item:hover{background-color:#052d3e;color:#fff}.btn-xlg{padding:14px 20px;font-size:21px;line-height:40px}.btn-lg{padding:10px 20px;font-size:15px;line-height:22.5px}.btn-md{padding:8px 16px;font-size:13px;line-height:19.5px}.btn-sm{padding:6px 12px;line-height:18px;font-size:11px}.btn-mini{padding:5px 10px;line-height:14px;font-size:10px}.card-header-right{z-index:999}.add-image-wrapper{position:relative}.add-image-wrapper .btn-add-image{position:relative;display:inline-block;width:90px;border:1px dashed #5ca3ef;height:90px;background:#fafafa;text-align:center;transition:.1s;border-radius:3px;overflow:initial;margin-bottom:15px}.add-image-wrapper .btn-add-image .katana-upload .upload-shadow{display:block;width:90px;height:90px;z-index:999999;top:0;left:0;background:red;position:absolute;opacity:0}.add-image-wrapper .btn-add-image .plus{width:100%;font-size:26px;color:#5ca3ef}.add-image-wrapper .btn-add-image h6{color:#5ca3ef;margin:0}.add-image-wrapper .btn-add-image:hover{background:#fff}.add-image-wrapper .btn-add-image:hover .add-image-menu{opacity:1;visibility:visible;display:block;transform:translateX(0)}.add-image-wrapper .btn-add-image:active{background:#fff}.add-image-wrapper .btn-add-image .add-image-menu{opacity:0;visibility:hidden;transition:.3s ease-in-out;transform:translateX(30px);z-index:10;position:absolute;background:#fff;top:0;left:90px;box-shadow:0 3px 9px rgba(0,0,0,.12);width:200px}.add-image-wrapper .btn-add-image .add-image-menu li:hover{background:#5ca3ef}.add-image-wrapper .btn-add-image .add-image-menu li:hover a{color:#fff}.add-image-wrapper .btn-add-image .add-image-menu li a{text-decoration:none;color:#052d3e;font-weight:500;display:inline-block;width:100%;text-align:left;padding:8px}.katana-dropdown-btn{box-shadow:0 8px 16px 0 rgba(0,0,0,.2);border:none;list-style:none;padding:0;min-width:unset}@media (max-width:479px){.katana-dropdown-btn{width:250px}}.katana-dropdown-btn li{transition:.4s ease-in-out;cursor:pointer}.katana-dropdown-btn li:hover{background:#f2f2f2}.katana-dropdown-btn li:hover .dropdown-item{color:#eb5d13}.katana-dropdown-btn li a{transition:.4s ease-in-out;background-color:unset;white-space:unset!important;word-break:break-word;padding:7px 10px;text-align:left}li{transition:.4s ease-in-out;cursor:pointer}li:hover{background:#f2f2f2}li:hover .dropdown-item{color:#eb5d13}li a{transition:.4s ease-in-out;background-color:unset;white-space:unset!important;word-break:break-word;padding:7px 10px;text-align:left}.icon-loader{-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}@-webkit-keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"]
            }] }
];
DropdownButtonsComponent.propDecorators = {
    title: [{ type: Input }],
    customClass: [{ type: Input }],
    disabled: [{ type: Input }],
    icon: [{ type: Input }],
    lazyload: [{ type: Input }],
    loadingIcon: [{ type: Input }],
    execute: [{ type: Output }],
    items: [{ type: ContentChildren, args: [DropdownButtonComponent,] }]
};
if (false) {
    /** @type {?} */
    DropdownButtonsComponent.prototype.title;
    /** @type {?} */
    DropdownButtonsComponent.prototype.customClass;
    /** @type {?} */
    DropdownButtonsComponent.prototype.disabled;
    /** @type {?} */
    DropdownButtonsComponent.prototype.icon;
    /** @type {?} */
    DropdownButtonsComponent.prototype.lazyload;
    /** @type {?} */
    DropdownButtonsComponent.prototype.loadingIcon;
    /** @type {?} */
    DropdownButtonsComponent.prototype.execute;
    /** @type {?} */
    DropdownButtonsComponent.prototype.items;
    /** @type {?} */
    DropdownButtonsComponent.prototype.loading;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonModule {
}
ButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ButtonComponent, DropdownButtonsComponent, DropdownButtonComponent],
                imports: [
                    CommonModule,
                    BsDropdownModule.forRoot()
                ],
                exports: [ButtonComponent, DropdownButtonsComponent, DropdownButtonComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatetimePickerComponent {
    constructor() {
        this.placeholder = 'Điền thông tin';
        this.startView = 'month';
        this.pickerType = 'calendar';
        this.pickerMode = 'popup';
        this.emitNullOnDestroy = false;
        this.modelChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.emitNullOnDestroy)
            this.modelChange.emit(null);
    }
}
DatetimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-datetime-picker',
                template: "<div class=\"form-group\">\r\n  <label *ngIf=\"title\">{{title}}</label>\r\n  <div class=\"input-group\">\r\n    <input [attr.validation-name]=\"validationName ? validationName : null\" [owlDateTimeTrigger]=\"dt2\"\r\n      class=\"form-control\" [owlDateTime]=\"dt2\" [placeholder]=\"placeholder\" [ngModel]=\"model\"\r\n      (ngModelChange)=\"modelChange.emit($event)\" [attr.scope]=\"validationScope ? validationScope : null\"\r\n      [disabled]=\"disabled\" pattern=\"(0[1-9]|1[0-9]|2[0-9]|3[01])/(0[1-9]|1[012])/[0-9]{4}\" maxlength=\"10\">\r\n    <span [owlDateTimeTrigger]=\"dt2\" class=\"date-time-icon\"><i class=\"fa fa-calendar-o date-icon\"></i></span>\r\n    <owl-date-time #dt2 [pickerType]=\"pickerType\" [startView]=\"startView\" pickerMode=\"popup\"></owl-date-time>\r\n  </div>\r\n</div>",
                styles: [".form-control[readonly]{background-color:#fff}.date-time-icon{position:absolute;top:5px;right:10px;z-index:4;color:#4b4542}.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%;display:flex;position:absolute;z-index:1000}.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%;position:fixed;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.48}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.6)}.cdk-overlay-transparent-backdrop{background:0 0}.cdk-global-scrollblock{width:100%}.owl-dialog-container{position:relative;pointer-events:auto;box-sizing:border-box;display:block;padding:1.5em;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);border-radius:2px;overflow:auto;background:#fff;color:rgba(0,0,0,.87);outline:0}.owl-hidden-accessible{border:0;clip:rect(0 0 0 0);margin:-1px;padding:0;clip:rect(0 0 0 0);height:1px;overflow:hidden;position:absolute;width:1px}.owl-dt-container{box-sizing:border-box;display:block;font-size:1rem;background:#fff;pointer-events:auto;z-index:1000}.owl-dt-container *{box-sizing:border-box}.owl-dt-container-row{border-bottom:1px solid rgba(0,0,0,.12)}.owl-dt-container-row:last-child{border-bottom:none}.owl-dt-calendar{display:flex;flex-direction:column;width:100%}.owl-dt-calendar-control{display:flex;align-items:center;font-size:1em;width:100%;padding:.5em;color:#000}.owl-dt-calendar-control .owl-dt-calendar-control-content{flex:1 1 auto;display:flex;justify-content:center;align-items:center}.owl-dt-calendar-control .owl-dt-calendar-control-content .owl-dt-calendar-control-button{padding:0 .8em}.owl-dt-calendar-control .owl-dt-calendar-control-content .owl-dt-calendar-control-button:hover{background-color:rgba(0,0,0,.12)}.owl-dt-calendar-main{display:flex;flex-direction:column;flex:1 1 auto;padding:0 .5em .5em;outline:0}.owl-dt-calendar-view{display:block;flex:1 1 auto}.owl-dt-calendar-multi-year-view{display:flex;align-items:center}.owl-dt-calendar-multi-year-view .owl-dt-calendar-table{width:calc(100% - 3em)}.owl-dt-calendar-multi-year-view .owl-dt-calendar-table .owl-dt-calendar-header th{padding-bottom:.25em}.owl-dt-calendar-table{width:100%;border-collapse:collapse;border-spacing:0}.owl-dt-calendar-table .owl-dt-calendar-header{color:rgba(0,0,0,.4)}.owl-dt-calendar-table .owl-dt-calendar-header .owl-dt-weekdays th{font-size:.7em;font-weight:400;text-align:center;padding-bottom:1em}.owl-dt-calendar-table .owl-dt-calendar-header .owl-dt-calendar-table-divider{position:relative;height:1px;padding-bottom:.5em}.owl-dt-calendar-table .owl-dt-calendar-header .owl-dt-calendar-table-divider:after{content:\"\";position:absolute;top:0;left:-.5em;right:-.5em;height:1px;background:rgba(0,0,0,.12)}.owl-dt-calendar-table .owl-dt-calendar-cell{position:relative;height:0;line-height:0;text-align:center;outline:0;cursor:pointer;color:rgba(0,0,0,.85);-webkit-appearance:none;-webkit-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent}.owl-dt-calendar-table .owl-dt-calendar-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;font-size:.8em;line-height:1;border:1px solid transparent;border-radius:999px;color:inherit}.owl-dt-calendar-table .owl-dt-calendar-cell-content:hover{background:#f4f3f0}.owl-dt-calendar-table .owl-dt-calendar-cell-out{opacity:.2}.owl-dt-calendar-table .owl-dt-calendar-cell-today:not(.owl-dt-calendar-cell-selected){border-color:rgba(0,0,0,.4)}.owl-dt-calendar-table .owl-dt-calendar-cell-selected{color:rgba(255,255,255,.85);background-color:#338bf8;font-weight:500}.owl-dt-calendar-table .owl-dt-calendar-cell-selected:hover{background:#338bf8}.owl-dt-calendar-table .owl-dt-calendar-cell-selected.owl-dt-calendar-cell-today{box-shadow:inset 0 0 0 1px rgba(255,255,255,.85)}.owl-dt-calendar-table .owl-dt-calendar-cell-disabled{cursor:default}.owl-dt-calendar-table .owl-dt-calendar-cell-disabled>.owl-dt-calendar-cell-content:not(.owl-dt-calendar-cell-selected){color:rgba(0,0,0,.4)}.owl-dt-calendar-table .owl-dt-calendar-cell-disabled>.owl-dt-calendar-cell-content.owl-dt-calendar-cell-selected{opacity:.4}.owl-dt-calendar-table .owl-dt-calendar-cell-disabled>.owl-dt-calendar-cell-today:not(.owl-dt-calendar-cell-selected){border-color:rgba(0,0,0,.2)}.owl-dt-calendar-table .owl-dt-calendar-cell-active:focus>.owl-dt-calendar-cell-content:not(.owl-dt-calendar-cell-selected),.owl-dt-calendar-table:not(.owl-dt-calendar-cell-disabled):hover>.owl-dt-calendar-cell-content:not(.owl-dt-calendar-cell-selected){background-color:rgba(0,0,0,.04)}.owl-dt-calendar-table .owl-dt-calendar-cell-in-range{background:#f8fbff}.owl-dt-calendar-table .owl-dt-calendar-cell-in-range.owl-dt-calendar-cell-range-from{border-top-left-radius:999px;border-bottom-left-radius:999px}.owl-dt-calendar-table .owl-dt-calendar-cell-in-range.owl-dt-calendar-cell-range-to{border-top-right-radius:999px;border-bottom-right-radius:999px}.owl-dt-timer{display:flex;justify-content:center;width:100%;height:7em;padding:.5em;outline:0}.owl-dt-timer-box{position:relative;display:inline-flex;flex-direction:column;align-items:center;width:25%;height:100%}.owl-dt-timer-content{flex:1 1 auto;display:flex;justify-content:center;align-items:center;width:100%;margin:.2em 0}.owl-dt-timer-content .owl-dt-timer-input{display:block;width:2em;text-align:center;border:1px solid rgba(0,0,0,.5);border-radius:3px;outline:0;font-size:1.2em;padding:.2em}.owl-dt-timer-divider{display:inline-block;align-self:flex-end;position:absolute;width:.6em;height:100%;left:-.3em}.owl-dt-timer-divider:after{content:\"\";display:inline-block;width:.35em;height:.35em;position:absolute;left:50%;border-radius:50%;transform:translateX(-50%);background-color:currentColor;bottom:35%}.owl-dt-timer-divider:before{content:\"\";display:inline-block;width:.35em;height:.35em;position:absolute;left:50%;border-radius:50%;transform:translateX(-50%);background-color:currentColor;top:35%}.owl-dt-control-button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;margin:0;padding:0;background-color:transparent;font-size:1em;color:inherit}.owl-dt-control-button .owl-dt-control-button-content{position:relative;display:inline-flex;justify-content:center;align-items:center;outline:0}.owl-dt-control-button:focus>.owl-dt-control-button-content{background-color:rgba(0,0,0,.12)}.owl-dt-control-button:not(:-moz-focusring):focus>.owl-dt-control-button-content{box-shadow:none}.owl-dt-control-period-button .owl-dt-control-button-content{height:1.5em;padding:0 .5em;border-radius:3px;transition:background-color .1s linear}.owl-dt-control-period-button:hover>.owl-dt-control-button-content{background-color:rgba(0,0,0,.12)}.owl-dt-control-period-button .owl-dt-control-button-arrow{display:flex;justify-content:center;align-items:center;width:1em;height:1em;margin:.1em;transition:transform .2s}.owl-dt-control-arrow-button .owl-dt-control-button-content{padding:0;border-radius:50%;width:1.5em;height:1.5em}.owl-dt-control-arrow-button svg{width:50%;height:50%;fill:currentColor}.owl-dt-control-arrow-button[disabled]{color:rgba(0,0,0,.4);cursor:default}.owl-dt-inline-container{position:relative;width:18.5em;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);display:inline-block}.owl-dt-inline-container .owl-dt-calendar{width:100%;height:20.25em}.owl-dt-inline-container .owl-dt-timer{width:100%}.owl-dt-popup-container{position:relative;width:18.5em;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.owl-dt-popup-container .owl-dt-calendar{width:100%;height:20.25em}.owl-dt-popup-container .owl-dt-timer{width:100%}.owl-dt-dialog-container{max-height:95vh;margin:-1.5em}.owl-dt-dialog-container .owl-dt-calendar{min-width:250px;min-height:330px;max-width:750px;max-height:750px}.owl-dt-dialog-container .owl-dt-timer{min-width:250px;max-width:750px}.owl-dt-container-buttons{display:flex;width:100%;height:2em;color:#338bf8}.owl-dt-container-control-button{font-size:13px;font-weight:500;width:50%;height:100%;border-radius:0}.owl-dt-container-control-button .owl-dt-control-button-content{height:100%;width:100%;transition:background-color .1s linear}.owl-dt-container-control-button:hover .owl-dt-control-button-content{background-color:rgba(0,0,0,.1)}.owl-dt-container-info{padding:0 .5em;cursor:pointer;-webkit-tap-highlight-color:transparent}.owl-dt-container-info .owl-dt-container-range{display:flex;justify-content:space-between;padding:.5em 0;font-size:.8em}.owl-dt-container-info .owl-dt-container-range:last-child{border-top:1px solid rgba(0,0,0,.12)}.owl-dt-container-info .owl-dt-container-info-active{color:#338bf8}.owl-dt-container-disabled,.owl-dt-trigger-disabled{opacity:.35;filter:Alpha(Opacity=35);background-image:none;cursor:default!important}.owl-dt-timer-hour12{display:flex;justify-content:center;align-items:center;color:#338bf8}.owl-dt-timer-hour12 .owl-dt-timer-hour12-box{border:1px solid currentColor;border-radius:2px;transition:background .2s}.owl-dt-timer-hour12 .owl-dt-timer-hour12-box .owl-dt-control-button-content{width:100%;height:100%;padding:.5em}.owl-dt-timer-hour12 .owl-dt-timer-hour12-box:focus .owl-dt-control-button-content,.owl-dt-timer-hour12 .owl-dt-timer-hour12-box:hover .owl-dt-control-button-content{background:#3f51b5;color:#fff}@media all and (orientation:landscape){.owl-dt-dialog-container .owl-dt-calendar{width:58vh;height:62vh}.owl-dt-dialog-container .owl-dt-timer{width:58vh}}@media all and (orientation:portrait){.owl-dt-dialog-container .owl-dt-calendar{width:80vw;height:80vw}.owl-dt-dialog-container .owl-dt-timer{width:80vw}}.ui-calendar-button{top:0;right:0}"]
            }] }
];
DatetimePickerComponent.propDecorators = {
    title: [{ type: Input }],
    model: [{ type: Input }],
    disabled: [{ type: Input }],
    minValue: [{ type: Input }],
    maxValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    startView: [{ type: Input }],
    pickerType: [{ type: Input }],
    pickerMode: [{ type: Input }],
    validationName: [{ type: Input }],
    validationScope: [{ type: Input }],
    emitNullOnDestroy: [{ type: Input }],
    modelChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DatetimePickerComponent.prototype.title;
    /** @type {?} */
    DatetimePickerComponent.prototype.model;
    /** @type {?} */
    DatetimePickerComponent.prototype.disabled;
    /** @type {?} */
    DatetimePickerComponent.prototype.minValue;
    /** @type {?} */
    DatetimePickerComponent.prototype.maxValue;
    /** @type {?} */
    DatetimePickerComponent.prototype.placeholder;
    /** @type {?} */
    DatetimePickerComponent.prototype.startView;
    /** @type {?} */
    DatetimePickerComponent.prototype.pickerType;
    /** @type {?} */
    DatetimePickerComponent.prototype.pickerMode;
    /** @type {?} */
    DatetimePickerComponent.prototype.validationName;
    /** @type {?} */
    DatetimePickerComponent.prototype.validationScope;
    /** @type {?} */
    DatetimePickerComponent.prototype.emitNullOnDestroy;
    /** @type {?} */
    DatetimePickerComponent.prototype.modelChange;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaterangePickerComponent {
    constructor() {
        this.placeholder = 'Điền thông tin';
        this.startView = 'month';
        this.pickerType = 'calendar';
        this.pickerMode = 'popup';
        this.selectMode = 'range';
        this.emitNullOnDestroy = false;
        this.modelChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.emitNullOnDestroy)
            this.modelChange.emit(null);
    }
}
DaterangePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-daterange-picker',
                template: "<div class=\"form-group\">\r\n  <label *ngIf=\"title\">{{title}}</label>\r\n  <div class=\"input-group\">\r\n    <input class=\"form-control\" [owlDateTime]=\"dt2\" [owlDateTimeTrigger]=\"dt2\" [placeholder]=\"placeholder\"\r\n      [ngModel]=\"model\" (ngModelChange)=\"modelChange.emit($event)\" [selectMode]=\"selectMode\" [disabled]=\"disabled\"\r\n      [attr.validation-name]=\"validationName ? validationName : null\"\r\n      [attr.scope]=\"validationScope ? validationScope : null\">\r\n    <span [owlDateTimeTrigger]=\"dt2\" class=\"date-time-icon\"><i class=\"fa fa-calendar-o date-icon\"></i></span>\r\n    <owl-date-time #dt2 [pickerType]=\"pickerType\" [startView]=\"startView\" pickerMode=\"popup\"></owl-date-time>\r\n  </div>\r\n</div>",
                styles: [".form-control[readonly]{background-color:#fff}.date-time-icon{position:absolute;top:5px;right:10px;z-index:4;color:#4b4542}.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%;display:flex;position:absolute;z-index:1000}.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%;position:fixed;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.48}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.6)}.cdk-overlay-transparent-backdrop{background:0 0}.cdk-global-scrollblock{width:100%}.owl-dialog-container{position:relative;pointer-events:auto;box-sizing:border-box;display:block;padding:1.5em;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);border-radius:2px;overflow:auto;background:#fff;color:rgba(0,0,0,.87);outline:0}.owl-hidden-accessible{border:0;clip:rect(0 0 0 0);margin:-1px;padding:0;clip:rect(0 0 0 0);height:1px;overflow:hidden;position:absolute;width:1px}.owl-dt-container{box-sizing:border-box;display:block;font-size:1rem;background:#fff;pointer-events:auto;z-index:1000}.owl-dt-container *{box-sizing:border-box}.owl-dt-container-row{border-bottom:1px solid rgba(0,0,0,.12)}.owl-dt-container-row:last-child{border-bottom:none}.owl-dt-calendar{display:flex;flex-direction:column;width:100%}.owl-dt-calendar-control{display:flex;align-items:center;font-size:1em;width:100%;padding:.5em;color:#000}.owl-dt-calendar-control .owl-dt-calendar-control-content{flex:1 1 auto;display:flex;justify-content:center;align-items:center}.owl-dt-calendar-control .owl-dt-calendar-control-content .owl-dt-calendar-control-button{padding:0 .8em}.owl-dt-calendar-control .owl-dt-calendar-control-content .owl-dt-calendar-control-button:hover{background-color:rgba(0,0,0,.12)}.owl-dt-calendar-main{display:flex;flex-direction:column;flex:1 1 auto;padding:0 .5em .5em;outline:0}.owl-dt-calendar-view{display:block;flex:1 1 auto}.owl-dt-calendar-multi-year-view{display:flex;align-items:center}.owl-dt-calendar-multi-year-view .owl-dt-calendar-table{width:calc(100% - 3em)}.owl-dt-calendar-multi-year-view .owl-dt-calendar-table .owl-dt-calendar-header th{padding-bottom:.25em}.owl-dt-calendar-table{width:100%;border-collapse:collapse;border-spacing:0}.owl-dt-calendar-table .owl-dt-calendar-header{color:rgba(0,0,0,.4)}.owl-dt-calendar-table .owl-dt-calendar-header .owl-dt-weekdays th{font-size:.7em;font-weight:400;text-align:center;padding-bottom:1em}.owl-dt-calendar-table .owl-dt-calendar-header .owl-dt-calendar-table-divider{position:relative;height:1px;padding-bottom:.5em}.owl-dt-calendar-table .owl-dt-calendar-header .owl-dt-calendar-table-divider:after{content:\"\";position:absolute;top:0;left:-.5em;right:-.5em;height:1px;background:rgba(0,0,0,.12)}.owl-dt-calendar-table .owl-dt-calendar-cell{position:relative;height:0;line-height:0;text-align:center;outline:0;cursor:pointer;color:rgba(0,0,0,.85);-webkit-appearance:none;-webkit-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent}.owl-dt-calendar-table .owl-dt-calendar-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;font-size:.8em;line-height:1;border:1px solid transparent;border-radius:999px;color:inherit}.owl-dt-calendar-table .owl-dt-calendar-cell-content:hover{background:#f4f3f0}.owl-dt-calendar-table .owl-dt-calendar-cell-out{opacity:.2}.owl-dt-calendar-table .owl-dt-calendar-cell-today:not(.owl-dt-calendar-cell-selected){border-color:rgba(0,0,0,.4)}.owl-dt-calendar-table .owl-dt-calendar-cell-selected{color:rgba(255,255,255,.85);background-color:#338bf8;font-weight:500}.owl-dt-calendar-table .owl-dt-calendar-cell-selected:hover{background:#338bf8}.owl-dt-calendar-table .owl-dt-calendar-cell-selected.owl-dt-calendar-cell-today{box-shadow:inset 0 0 0 1px rgba(255,255,255,.85)}.owl-dt-calendar-table .owl-dt-calendar-cell-disabled{cursor:default}.owl-dt-calendar-table .owl-dt-calendar-cell-disabled>.owl-dt-calendar-cell-content:not(.owl-dt-calendar-cell-selected){color:rgba(0,0,0,.4)}.owl-dt-calendar-table .owl-dt-calendar-cell-disabled>.owl-dt-calendar-cell-content.owl-dt-calendar-cell-selected{opacity:.4}.owl-dt-calendar-table .owl-dt-calendar-cell-disabled>.owl-dt-calendar-cell-today:not(.owl-dt-calendar-cell-selected){border-color:rgba(0,0,0,.2)}.owl-dt-calendar-table .owl-dt-calendar-cell-active:focus>.owl-dt-calendar-cell-content:not(.owl-dt-calendar-cell-selected),.owl-dt-calendar-table:not(.owl-dt-calendar-cell-disabled):hover>.owl-dt-calendar-cell-content:not(.owl-dt-calendar-cell-selected){background-color:rgba(0,0,0,.04)}.owl-dt-calendar-table .owl-dt-calendar-cell-in-range{background:#f8fbff}.owl-dt-calendar-table .owl-dt-calendar-cell-in-range.owl-dt-calendar-cell-range-from{border-top-left-radius:999px;border-bottom-left-radius:999px}.owl-dt-calendar-table .owl-dt-calendar-cell-in-range.owl-dt-calendar-cell-range-to{border-top-right-radius:999px;border-bottom-right-radius:999px}.owl-dt-timer{display:flex;justify-content:center;width:100%;height:7em;padding:.5em;outline:0}.owl-dt-timer-box{position:relative;display:inline-flex;flex-direction:column;align-items:center;width:25%;height:100%}.owl-dt-timer-content{flex:1 1 auto;display:flex;justify-content:center;align-items:center;width:100%;margin:.2em 0}.owl-dt-timer-content .owl-dt-timer-input{display:block;width:2em;text-align:center;border:1px solid rgba(0,0,0,.5);border-radius:3px;outline:0;font-size:1.2em;padding:.2em}.owl-dt-timer-divider{display:inline-block;align-self:flex-end;position:absolute;width:.6em;height:100%;left:-.3em}.owl-dt-timer-divider:after{content:\"\";display:inline-block;width:.35em;height:.35em;position:absolute;left:50%;border-radius:50%;transform:translateX(-50%);background-color:currentColor;bottom:35%}.owl-dt-timer-divider:before{content:\"\";display:inline-block;width:.35em;height:.35em;position:absolute;left:50%;border-radius:50%;transform:translateX(-50%);background-color:currentColor;top:35%}.owl-dt-control-button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;margin:0;padding:0;background-color:transparent;font-size:1em;color:inherit}.owl-dt-control-button .owl-dt-control-button-content{position:relative;display:inline-flex;justify-content:center;align-items:center;outline:0}.owl-dt-control-button:focus>.owl-dt-control-button-content{background-color:rgba(0,0,0,.12)}.owl-dt-control-button:not(:-moz-focusring):focus>.owl-dt-control-button-content{box-shadow:none}.owl-dt-control-period-button .owl-dt-control-button-content{height:1.5em;padding:0 .5em;border-radius:3px;transition:background-color .1s linear}.owl-dt-control-period-button:hover>.owl-dt-control-button-content{background-color:rgba(0,0,0,.12)}.owl-dt-control-period-button .owl-dt-control-button-arrow{display:flex;justify-content:center;align-items:center;width:1em;height:1em;margin:.1em;transition:transform .2s}.owl-dt-control-arrow-button .owl-dt-control-button-content{padding:0;border-radius:50%;width:1.5em;height:1.5em}.owl-dt-control-arrow-button svg{width:50%;height:50%;fill:currentColor}.owl-dt-control-arrow-button[disabled]{color:rgba(0,0,0,.4);cursor:default}.owl-dt-inline-container{position:relative;width:18.5em;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);display:inline-block}.owl-dt-inline-container .owl-dt-calendar{width:100%;height:20.25em}.owl-dt-inline-container .owl-dt-timer{width:100%}.owl-dt-popup-container{position:relative;width:18.5em;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.owl-dt-popup-container .owl-dt-calendar{width:100%;height:20.25em}.owl-dt-popup-container .owl-dt-timer{width:100%}.owl-dt-dialog-container{max-height:95vh;margin:-1.5em}.owl-dt-dialog-container .owl-dt-calendar{min-width:250px;min-height:330px;max-width:750px;max-height:750px}.owl-dt-dialog-container .owl-dt-timer{min-width:250px;max-width:750px}.owl-dt-container-buttons{display:flex;width:100%;height:2em;color:#338bf8}.owl-dt-container-control-button{font-size:13px;font-weight:500;width:50%;height:100%;border-radius:0}.owl-dt-container-control-button .owl-dt-control-button-content{height:100%;width:100%;transition:background-color .1s linear}.owl-dt-container-control-button:hover .owl-dt-control-button-content{background-color:rgba(0,0,0,.1)}.owl-dt-container-info{padding:0 .5em;cursor:pointer;-webkit-tap-highlight-color:transparent}.owl-dt-container-info .owl-dt-container-range{display:flex;justify-content:space-between;padding:.5em 0;font-size:.8em}.owl-dt-container-info .owl-dt-container-range:last-child{border-top:1px solid rgba(0,0,0,.12)}.owl-dt-container-info .owl-dt-container-info-active{color:#338bf8}.owl-dt-container-disabled,.owl-dt-trigger-disabled{opacity:.35;filter:Alpha(Opacity=35);background-image:none;cursor:default!important}.owl-dt-timer-hour12{display:flex;justify-content:center;align-items:center;color:#338bf8}.owl-dt-timer-hour12 .owl-dt-timer-hour12-box{border:1px solid currentColor;border-radius:2px;transition:background .2s}.owl-dt-timer-hour12 .owl-dt-timer-hour12-box .owl-dt-control-button-content{width:100%;height:100%;padding:.5em}.owl-dt-timer-hour12 .owl-dt-timer-hour12-box:focus .owl-dt-control-button-content,.owl-dt-timer-hour12 .owl-dt-timer-hour12-box:hover .owl-dt-control-button-content{background:#3f51b5;color:#fff}@media all and (orientation:landscape){.owl-dt-dialog-container .owl-dt-calendar{width:58vh;height:62vh}.owl-dt-dialog-container .owl-dt-timer{width:58vh}}@media all and (orientation:portrait){.owl-dt-dialog-container .owl-dt-calendar{width:80vw;height:80vw}.owl-dt-dialog-container .owl-dt-timer{width:80vw}}.ui-calendar-button{top:0;right:0}"]
            }] }
];
DaterangePickerComponent.propDecorators = {
    title: [{ type: Input }],
    model: [{ type: Input }],
    disabled: [{ type: Input }],
    minValue: [{ type: Input }],
    maxValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    startView: [{ type: Input }],
    pickerType: [{ type: Input }],
    pickerMode: [{ type: Input }],
    selectMode: [{ type: Input }],
    validationName: [{ type: Input }],
    validationScope: [{ type: Input }],
    emitNullOnDestroy: [{ type: Input }],
    modelChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DaterangePickerComponent.prototype.title;
    /** @type {?} */
    DaterangePickerComponent.prototype.model;
    /** @type {?} */
    DaterangePickerComponent.prototype.disabled;
    /** @type {?} */
    DaterangePickerComponent.prototype.minValue;
    /** @type {?} */
    DaterangePickerComponent.prototype.maxValue;
    /** @type {?} */
    DaterangePickerComponent.prototype.placeholder;
    /** @type {?} */
    DaterangePickerComponent.prototype.startView;
    /** @type {?} */
    DaterangePickerComponent.prototype.pickerType;
    /** @type {?} */
    DaterangePickerComponent.prototype.pickerMode;
    /** @type {?} */
    DaterangePickerComponent.prototype.selectMode;
    /** @type {?} */
    DaterangePickerComponent.prototype.validationName;
    /** @type {?} */
    DaterangePickerComponent.prototype.validationScope;
    /** @type {?} */
    DaterangePickerComponent.prototype.emitNullOnDestroy;
    /** @type {?} */
    DaterangePickerComponent.prototype.modelChange;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations$4 = [DatetimePickerComponent, DaterangePickerComponent];
class DatetimePickerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DatetimePickerModule,
            providers: []
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: DatetimePickerModule,
            providers: [
                { provide: OWL_DATE_TIME_LOCALE, useValue: 'vi' },
                { provide: OwlDateTimeIntl, useClass: DefaultDateTimeLabels }
            ]
        };
    }
}
DatetimePickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: declarations$4,
                imports: [
                    CommonModule,
                    FormsModule,
                    OwlDateTimeModule,
                    OwlNativeDateTimeModule
                ],
                entryComponents: declarations$4,
                exports: declarations$4
            },] }
];
class DefaultDateTimeLabels extends OwlDateTimeIntl {
    constructor() {
        super(...arguments);
        this.upSecondLabel = 'Thêm 1 giây';
        this.downSecondLabel = 'Bớt 1 giây';
        this.upMinuteLabel = 'Thêm 1 phút';
        this.downMinuteLabel = 'Bớt 1 phút';
        this.upHourLabel = 'Thêm 1 giờ';
        this.downHourLabel = 'Bớt 1 giờ';
        this.prevMonthLabel = 'Tháng trước';
        this.nextMonthLabel = 'Tháng tới';
        this.prevYearLabel = 'Năm trước';
        this.nextYearLabel = 'Năm tới';
        this.prevMultiYearLabel = '21 năm trước';
        this.nextMultiYearLabel = '21 năm sau';
        this.switchToMonthViewLabel = 'Xem theo tháng';
        this.switchToMultiYearViewLabel = 'Xem theo tháng năm';
        this.cancelBtnLabel = 'Quay lại';
        this.setBtnLabel = 'Chọn';
        this.rangeFromLabel = 'Từ';
        this.rangeToLabel = 'Đến';
        this.hour12AMLabel = 'AM';
        this.hour12PMLabel = 'PM';
    }
}
DefaultDateTimeLabels.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ DefaultDateTimeLabels.ngInjectableDef = ɵɵdefineInjectable({ factory: function DefaultDateTimeLabels_Factory() { return new DefaultDateTimeLabels(); }, token: DefaultDateTimeLabels, providedIn: "root" });
if (false) {
    /** @type {?} */
    DefaultDateTimeLabels.prototype.upSecondLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.downSecondLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.upMinuteLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.downMinuteLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.upHourLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.downHourLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.prevMonthLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.nextMonthLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.prevYearLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.nextYearLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.prevMultiYearLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.nextMultiYearLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.switchToMonthViewLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.switchToMultiYearViewLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.cancelBtnLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.setBtnLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.rangeFromLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.rangeToLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.hour12AMLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.hour12PMLabel;
}
;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EditorModule {
}
EditorModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EditorComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    CKEditorModule
                ],
                exports: [EditorComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableModule {
}
TableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TableComponent, TableRowDetailDirective],
                imports: [
                    CommonModule,
                    ValidationModule.forRoot(),
                    FormsModule,
                    TextboxModule,
                    DropdownModule,
                    ButtonModule,
                    FormatterModule,
                    CheckboxModule,
                    DatetimePickerModule.forChild(),
                    NgStringPipesModule,
                    TextboxModule,
                    ButtonModule,
                    EditorModule
                ],
                exports: [TableComponent, TableRowDetailDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FullMediaComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.videoPlayerHtml = this.generateHtml();
    }
    /**
     * @private
     * @return {?}
     */
    generateHtml() {
        /** @type {?} */
        const isExternal = /(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/.test(this.model.fullSrc);
        /** @type {?} */
        let videoTag = '';
        if (isExternal) {
            /** @type {?} */
            const match = /(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/.exec(this.model.fullSrc);
            /** @type {?} */
            const videoId = match[1];
            videoTag = `<iframe  style="width:100%; min-height: 500px;"  src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        }
        else {
            videoTag = `<video controls style="width:100%"><source src="${this.model.fullSrc}" type="video/mp4"></video>`;
        }
        return this.sanitizer.bypassSecurityTrustHtml(videoTag);
    }
}
FullMediaComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-full-media',
                template: "<div [innerHTML]=\"videoPlayerHtml\"></div>\r\n"
            }] }
];
/** @nocollapse */
FullMediaComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
FullMediaComponent.propDecorators = {
    model: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FullMediaComponent.prototype.model;
    /** @type {?} */
    FullMediaComponent.prototype.videoPlayerHtml;
    /**
     * @type {?}
     * @private
     */
    FullMediaComponent.prototype.sanitizer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MediaViewerComponent {
    /**
     * @param {?} modalService
     * @param {?} sanitizer
     */
    constructor(modalService, sanitizer) {
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.modelChange = new EventEmitter();
        this.removed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const isExternal = /(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/.test(this.model.fullSrc);
        if (isExternal) {
            /** @type {?} */
            const match = /(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/.exec(this.model.fullSrc);
            /** @type {?} */
            const videoId = match[1];
            this.thumbnailHtml = this.sanitizer.bypassSecurityTrustHtml(`<img style="height:90px" src="https://img.youtube.com/vi/${videoId}/0.jpg"></img>`);
        }
        else {
            this.thumbnailHtml = this.sanitizer.bypassSecurityTrustHtml(`<img style="height:90px" src="${this.model.src}"></img>`);
        }
    }
    /**
     * @return {?}
     */
    viewMedia() {
        this.modalService.showTemplateDialog({
            template: FullMediaComponent,
            title: 'Xem chi tiết',
            customSize: 'modal-lg',
            data: {
                model: this.model
            }
        });
    }
    /**
     * @return {?}
     */
    remove() {
        this.removed.emit(this.model);
        this.modelChange.emit(null);
    }
}
MediaViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-media',
                template: "<div class=\"media-viewer-item\">\r\n  <label *ngIf=\"title\">{{title}}</label>\r\n  <div [ngClass]=\"{'selected-file': selected}\">\r\n    <i class=\"fa fa-tick-mark selected-icon\"></i>\r\n    <div class=\"box--video--item\">\r\n      <a class=\"video--item\" href=\"javascript:;\" (click)=\"viewMedia()\">\r\n        <div [innerHTML]=\"thumbnailHtml\"></div>\r\n      </a>\r\n      <a class=\"remove--video\" *ngIf=\"model\" href=\"javascript:;\" title=\"X\u00F3a\" (click)=\"remove()\"><i class=\"fa fa-times\"\r\n          aria-hidden=\"true\"></i></a>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ['./media-viewer.component.scss']
            }] }
];
/** @nocollapse */
MediaViewerComponent.ctorParameters = () => [
    { type: ModalService },
    { type: DomSanitizer }
];
MediaViewerComponent.propDecorators = {
    title: [{ type: Input }],
    model: [{ type: Input }],
    modelChange: [{ type: Output }],
    removed: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MediaViewerComponent.prototype.title;
    /** @type {?} */
    MediaViewerComponent.prototype.model;
    /** @type {?} */
    MediaViewerComponent.prototype.modelChange;
    /** @type {?} */
    MediaViewerComponent.prototype.removed;
    /** @type {?} */
    MediaViewerComponent.prototype.selected;
    /** @type {?} */
    MediaViewerComponent.prototype.thumbnailHtml;
    /**
     * @type {?}
     * @protected
     */
    MediaViewerComponent.prototype.modalService;
    /**
     * @type {?}
     * @protected
     */
    MediaViewerComponent.prototype.sanitizer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MediaViewerModule {
}
MediaViewerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MediaViewerComponent, FullMediaComponent],
                imports: [
                    CommonModule,
                    FormatterModule
                ],
                exports: [MediaViewerComponent, FullMediaComponent],
                entryComponents: [FullMediaComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageViewerComponent {
    constructor() {
        this.multiple = false;
        this.size = 'small';
        this.defaultImageUrl = 'https://cmcglobal.com.vn/css/image-common/Combined%20Shape.svg';
        this.editable = false;
        this.imageRemoved = new EventEmitter();
        this.radious = false;
        this.cutRatio = 1 / 1;
        this.emitNullOnDestroy = false;
        this.modelChange = new EventEmitter();
        this.selectedChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.emitNullOnDestroy === true)
            this.modelChange.emit(null);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    fileUploaded(file) {
        /** @type {?} */
        let model = this.model;
        if (!model)
            model = {};
        model.src = file.src;
        this.modelChange.emit(model);
    }
    /**
     * @return {?}
     */
    imageSrc() {
        if (this.model && this.model.src) {
            return this.model.src;
        }
        else {
            return this.defaultImageUrl;
        }
    }
    /**
     * @return {?}
     */
    removeImage() {
        this.model.src = this.defaultImageUrl;
        this.modelChange.emit(null);
        this.imageRemoved.emit(this.model.src);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectImage(item) {
        if (!item)
            return;
        if (!item.selected)
            item.selected = false;
        item.selected = !item.selected;
        this.selectedChange.emit(item.selected);
    }
}
ImageViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-image-viewer',
                template: "<div class=\"form-group\">\r\n  <label *ngIf=\"title\">{{title}}</label>\r\n  <div [ngClass]=\"{'selected-file': model?.selected}\">\r\n    <div [ngClass]=\"{'deletable-image': editable}\" (click)=\"selectImage(model)\">\r\n      <i class=\"fa fa-check selected-icon\"></i>\r\n      <div class=\"{{size}}\" [ngClass]=\"{'image-radious': radious}\">\r\n        <div class=\"img-ratio-1-1\">\r\n          <img class=\"img-height\" [attr.src]=\"imageSrc()\">\r\n        </div>\r\n      </div>\r\n      <div class=\"cover-tool\" *ngIf=\"editable\">\r\n        <div class=\"d-flex justify-content-between\">\r\n          <katana-file-uploader [icon]=\"uploadIcon\" [title]=\"uploadTitle\" [multiple]=\"multiple\" (fileUploaded)=\"fileUploaded($event)\" [maintainAspectRatio]=\"maintainAspectRatio\"\r\n            [resizeToWidth]=\"resizeToWidth\" [cropImage]=\"true\" fileType=\"image\" [cutRatio]=\"cutRatio\">\r\n            <i class=\"fa fa-pencil\"></i>\r\n          </katana-file-uploader>\r\n          <a *ngIf=\"model\" href=\"javascript:;\" class=\"remove\" (click)=\"removeImage()\"><i class=\"fa fa-times\"\r\n              aria-hidden=\"true\"></i></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\">\r\n  </div>\r\n</div>",
                styles: [".form-group{cursor:pointer}"]
            }] }
];
ImageViewerComponent.propDecorators = {
    uploadIcon: [{ type: Input }],
    uploadTitle: [{ type: Input }],
    multiple: [{ type: Input }],
    model: [{ type: Input }],
    size: [{ type: Input }],
    defaultImageUrl: [{ type: Input }],
    title: [{ type: Input }],
    editable: [{ type: Input }],
    customClasses: [{ type: Input }],
    imageRemoved: [{ type: Output }],
    radious: [{ type: Input }],
    validationName: [{ type: Input }],
    cutRatio: [{ type: Input }],
    resizeToWidth: [{ type: Input }],
    maintainAspectRatio: [{ type: Input }],
    validationScope: [{ type: Input }],
    emitNullOnDestroy: [{ type: Input }],
    modelChange: [{ type: Output }],
    selectedChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ImageViewerComponent.prototype.uploadIcon;
    /** @type {?} */
    ImageViewerComponent.prototype.uploadTitle;
    /** @type {?} */
    ImageViewerComponent.prototype.multiple;
    /** @type {?} */
    ImageViewerComponent.prototype.model;
    /** @type {?} */
    ImageViewerComponent.prototype.size;
    /** @type {?} */
    ImageViewerComponent.prototype.defaultImageUrl;
    /** @type {?} */
    ImageViewerComponent.prototype.title;
    /** @type {?} */
    ImageViewerComponent.prototype.editable;
    /** @type {?} */
    ImageViewerComponent.prototype.customClasses;
    /** @type {?} */
    ImageViewerComponent.prototype.imageRemoved;
    /** @type {?} */
    ImageViewerComponent.prototype.radious;
    /** @type {?} */
    ImageViewerComponent.prototype.validationName;
    /** @type {?} */
    ImageViewerComponent.prototype.cutRatio;
    /** @type {?} */
    ImageViewerComponent.prototype.resizeToWidth;
    /** @type {?} */
    ImageViewerComponent.prototype.maintainAspectRatio;
    /** @type {?} */
    ImageViewerComponent.prototype.validationScope;
    /** @type {?} */
    ImageViewerComponent.prototype.emitNullOnDestroy;
    /** @type {?} */
    ImageViewerComponent.prototype.modelChange;
    /** @type {?} */
    ImageViewerComponent.prototype.selectedChange;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageViewerModule {
}
ImageViewerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ImageViewerComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    FileModule,
                    ValidationModule,
                ],
                exports: [ImageViewerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GalleryComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewerComponent {
    /**
     * @param {?} _modalService
     * @param {?} _dataService
     * @param {?} authenticationService
     */
    constructor(_modalService, _dataService, authenticationService) {
        this._modalService = _modalService;
        this._dataService = _dataService;
        this.authenticationService = authenticationService;
        this.isLoading = false;
        this.images = [];
        this.useLibrary = true;
        this.headers = ['#', 'Tên', 'Kích thước', 'Ngày tạo'];
        this.componentTitle = 'Thêm ảnh';
        this.uploadDialogTitle = 'Chỉnh sửa ảnh';
        this.uploadDialogIcon = 'fa fa-twitter';
        this.uploadTitle = 'Tải lên';
        this.uploadIcon = 'fa fa-exchange';
        this.openGalleryTitle = 'Chọn từ thư viện';
        this.openGalleryIcon = 'fa fa-google-wallet';
        this.model = [];
        this.zoomPrimaryImage = true;
        this.editable = true;
        this.cutRatio = 1 / 1;
        this.emitNullOnDestroy = false;
        this.modelChange = new EventEmitter();
        this.onOpenUserMediaGallery = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.emitNullOnDestroy === true)
            this.modelChange.emit([]);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    addImage(file) {
        this.images = this.model;
        if (!this.images)
            this.images = [];
        this.images.push({
            src: file.src,
            name: file.name,
            size: file.size,
            createdDate: new Date(),
            lastModifiedDate: new Date(),
            createdBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null,
            lastModifiedBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null
        });
        this.modelChange.emit(this.images);
    }
    /**
     * @param {?} loading
     * @return {?}
     */
    setLoading(loading) {
        this.isLoading = loading;
    }
    /**
     * @return {?}
     */
    openUserMediaGallery() {
        this.onOpenUserMediaGallery.emit();
        /** @type {?} */
        var items = (/** @type {?} */ (this._dataService.cloneItems(this.images)));
        if (!items)
            items = [];
        this._modalService.showTemplateDialog(new TemplateViewModel({
            template: GalleryComponent,
            title: this.openGalleryTitle,
            icon: this.openGalleryIcon,
            customSize: 'modal-lg',
            data: {
                headers: this.headers,
                items: !this.useLibrary ? (/**
                 * @return {?}
                 */
                () => {
                    return of(new FileResponse({
                        code: '200',
                        status: true,
                        totalRecords: 0,
                        items: []
                    }));
                }) : (/**
                 * @return {?}
                 */
                () => {
                    if (!this.galleryItems) {
                        return of(new FileResponse({
                            code: '200',
                            status: true,
                            totalRecords: items.length,
                            items: items
                        }));
                    }
                    else {
                        return this.galleryItems;
                    }
                })
            },
            acceptCallback: (/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                response.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
                    this.images.push(item);
                }));
                this.modelChange.emit(this.images);
            })
        }));
    }
}
ViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-viewer',
                template: "<label *ngIf=\"title\" class=\"title-gallery\">{{title}}</label>\r\n<div class=\"form-group image-gallery-wrapper\">\r\n  <div *ngIf=\"!model || model.length === 0; else main\" class=\"d-flex\">\r\n    <div class=\"add-image-wrapper\">\r\n      <button class=\"btn btn-add-image\">\r\n        <i class=\"plus fa fa-plus\"></i>\r\n        <h6 class=\"mt-1\">{{componentTitle}}</h6>\r\n        <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin loading-icon fa-fw\"></i>\r\n        <ul class=\"add-image-menu\">\r\n          <li>\r\n            <katana-file-uploader [icon]=\"uploadDialogIcon\" [title]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n              (checkedLoading)=\"setLoading($event)\" [maintainAspectRatio]=\"maintainAspectRatio\"\r\n              [resizeToWidth]=\"resizeToWidth\" class=\"katana-upload\" [cropImage]=\"true\" (fileUploaded)=\"addImage($event)\"\r\n              [fileType]=\"'image'\" [cutRatio]=\"cutRatio\">\r\n              <i class=\"{{uploadIcon}}\"></i>\r\n              {{uploadTitle}}\r\n            </katana-file-uploader>\r\n          </li>\r\n          <li *ngIf=\"useLibrary\">\r\n            <a href=\"javascript:;\" (click)=\"openUserMediaGallery()\">\r\n              <i class=\"{{openGalleryIcon}}\" aria-hidden=\"true\"></i>\r\n              {{openGalleryTitle}}\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <katana-file-uploader [icon]=\"uploadDialogIcon\" [title]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n          (checkedLoading)=\"setLoading($event)\" [resizeToWidth]=\"resizeToWidth\"\r\n          [maintainAspectRatio]=\"maintainAspectRatio\" class=\"katana-upload\" [cropImage]=\"true\"\r\n          (fileUploaded)=\"addImage($event)\" [cutRatio]=\"cutRatio\">\r\n          <span class=\"upload-shadow\"></span>\r\n        </katana-file-uploader>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #main>\r\n    <div class=\"d-flex\">\r\n      <div ngxDroppable=\"imagesDropZone\" [model]=\"model\" class=\"ngx-dnd-container d-flex\"\r\n        [ngClass]=\"{'big-image': zoomPrimaryImage}\">\r\n        <div class=\"ngx-dnd-item mr-2\" [model]=\"image\" *ngFor=\"let image of model; let i = index\"\r\n          ngxDraggable=\"imagesDropZone\">\r\n          <katana-image-viewer [uploadIcon]=\"uploadDialogIcon\" [uploadTitle]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n            [cutRatio]=\"cutRatio\" [resizeToWidth]=\"resizeToWidth\" [maintainAspectRatio]=\"maintainAspectRatio\"\r\n            *ngIf=\"i === 0\" [size]=\"zoomPrimaryImage ? 'medium' : 'small'\" [model]=\"image\"\r\n            (imageRemoved)=\"model.splice(i, 1)\" [editable]=\"editable\"></katana-image-viewer>\r\n          <katana-image-viewer [uploadIcon]=\"uploadDialogIcon\" [uploadTitle]=\"uploadDialogTitle\" [multiple]=\"multiple\" [resizeToWidth]=\"resizeToWidth\"\r\n            [cutRatio]=\"cutRatio\" [maintainAspectRatio]=\"maintainAspectRatio\" *ngIf=\"i > 0\" size=\"small\" [model]=\"image\"\r\n            (imageRemoved)=\"model.splice(i, 1)\" [editable]=\"editable\"></katana-image-viewer>\r\n        </div>\r\n      </div>\r\n      <div class=\"add-image-wrapper\">\r\n        <button class=\"btn btn-add-image\">\r\n          <i class=\"plus fa fa-plus\"></i>\r\n          <h6 class=\"mt-1\">{{componentTitle}}</h6>\r\n          <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin loading-icon fa-fw\"></i>\r\n          <ul class=\"add-image-menu\">\r\n            <li>\r\n              <katana-file-uploader [icon]=\"uploadDialogIcon\" [title]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n                (checkedLoading)=\"setLoading($event)\" [resizeToWidth]=\"resizeToWidth\"\r\n                [maintainAspectRatio]=\"maintainAspectRatio\" class=\"katana-upload\" [cropImage]=\"true\"\r\n                (fileUploaded)=\"addImage($event)\" [cutRatio]=\"cutRatio\">\r\n                <i class=\"{{uploadIcon}}\"></i>\r\n                {{uploadTitle}}\r\n              </katana-file-uploader>\r\n            </li>\r\n            <li *ngIf=\"useLibrary\">\r\n              <a href=\"javascript:;\" (click)=\"openUserMediaGallery()\">\r\n                <i class=\"{{openGalleryIcon}}\" aria-hidden=\"true\"></i>\r\n                {{openGalleryTitle}}\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <katana-file-uploader [icon]=\"uploadDialogIcon\" [title]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n            (checkedLoading)=\"setLoading($event)\" [resizeToWidth]=\"resizeToWidth\"\r\n            [maintainAspectRatio]=\"maintainAspectRatio\" class=\"katana-upload \" [cropImage]=\"true\"\r\n            (fileUploaded)=\"addImage($event)\" [cutRatio]=\"cutRatio\">\r\n            <span class=\"upload-shadow\"></span>\r\n          </katana-file-uploader>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  <div [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\">\r\n  </div>\r\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
ViewerComponent.ctorParameters = () => [
    { type: ModalService },
    { type: DataService },
    { type: AuthenticationService }
];
ViewerComponent.propDecorators = {
    headers: [{ type: Input }],
    multiple: [{ type: Input }],
    galleryItems: [{ type: Input }],
    componentTitle: [{ type: Input }],
    uploadDialogTitle: [{ type: Input }],
    uploadDialogIcon: [{ type: Input }],
    uploadTitle: [{ type: Input }],
    uploadIcon: [{ type: Input }],
    openGalleryTitle: [{ type: Input }],
    openGalleryIcon: [{ type: Input }],
    title: [{ type: Input }],
    model: [{ type: Input }],
    zoomPrimaryImage: [{ type: Input }],
    editable: [{ type: Input }],
    cutRatio: [{ type: Input }],
    resizeToWidth: [{ type: Input }],
    maintainAspectRatio: [{ type: Input }],
    validationName: [{ type: Input }],
    validationScope: [{ type: Input }],
    emitNullOnDestroy: [{ type: Input }],
    modelChange: [{ type: Output }],
    onOpenUserMediaGallery: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ViewerComponent.prototype.isLoading;
    /** @type {?} */
    ViewerComponent.prototype.images;
    /** @type {?} */
    ViewerComponent.prototype.useLibrary;
    /** @type {?} */
    ViewerComponent.prototype.headers;
    /** @type {?} */
    ViewerComponent.prototype.multiple;
    /** @type {?} */
    ViewerComponent.prototype.galleryItems;
    /** @type {?} */
    ViewerComponent.prototype.componentTitle;
    /** @type {?} */
    ViewerComponent.prototype.uploadDialogTitle;
    /** @type {?} */
    ViewerComponent.prototype.uploadDialogIcon;
    /** @type {?} */
    ViewerComponent.prototype.uploadTitle;
    /** @type {?} */
    ViewerComponent.prototype.uploadIcon;
    /** @type {?} */
    ViewerComponent.prototype.openGalleryTitle;
    /** @type {?} */
    ViewerComponent.prototype.openGalleryIcon;
    /** @type {?} */
    ViewerComponent.prototype.title;
    /** @type {?} */
    ViewerComponent.prototype.model;
    /** @type {?} */
    ViewerComponent.prototype.zoomPrimaryImage;
    /** @type {?} */
    ViewerComponent.prototype.editable;
    /** @type {?} */
    ViewerComponent.prototype.cutRatio;
    /** @type {?} */
    ViewerComponent.prototype.resizeToWidth;
    /** @type {?} */
    ViewerComponent.prototype.maintainAspectRatio;
    /** @type {?} */
    ViewerComponent.prototype.validationName;
    /** @type {?} */
    ViewerComponent.prototype.validationScope;
    /** @type {?} */
    ViewerComponent.prototype.emitNullOnDestroy;
    /** @type {?} */
    ViewerComponent.prototype.modelChange;
    /** @type {?} */
    ViewerComponent.prototype.onOpenUserMediaGallery;
    /**
     * @type {?}
     * @private
     */
    ViewerComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    ViewerComponent.prototype._dataService;
    /**
     * @type {?}
     * @protected
     */
    ViewerComponent.prototype.authenticationService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewerModule {
}
ViewerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    GalleryComponent,
                    ViewerComponent
                ],
                imports: [
                    CommonModule,
                    ImageCropperModule,
                    ImageViewerModule,
                    FileModule,
                    ValidationModule,
                    NgxDnDModule,
                    TableModule,
                    CardModule,
                    FormatterModule
                ],
                entryComponents: [
                    GalleryComponent,
                    ViewerComponent
                ],
                exports: [
                    GalleryComponent,
                    ViewerComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RadioItemComponent {
    constructor() {
        this.disabled = false;
        this.checked = false;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    changeItem($event) {
        $event.stopPropagation();
        if (this.selectedCallBack) {
            this.selectedCallBack(this);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    select($event) {
        $event.stopPropagation();
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    registerSelectedCallback(callback) {
        this.selectedCallBack = callback;
    }
}
RadioItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-radio-item',
                template: "<div class=\"form-radio d-inline-block\">\r\n    <div class=\"radio radio-inline\">\r\n        <label class=\"form-check-label\" [ngClass]=\"{'radio-disable': disabled}\">\r\n            <input class=\"form-check-input\" type=\"radio\" [attr.value]=\"value\" [disabled]=\"disabled\" [checked]=\"checked\"\r\n                   (change)=\"changeItem($event)\" (click)=\"select($event)\">\r\n            <i class=\"helper\"></i> {{label}}\r\n        </label>\r\n    </div>\r\n</div>",
                styles: [".form-radio{position:relative}.form-radio .form-help{position:absolute;width:100%}.form-radio label{position:relative;padding-left:1.5rem;text-align:left;color:#333;display:block;line-height:1.8;cursor:pointer}.form-radio input{width:auto;opacity:.00000001;position:absolute;left:0}.radio .helper{position:absolute;top:-.15rem;left:-.25rem;cursor:pointer;display:block;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#999}.radio .helper::after{transform:scale(0);background-color:#338bf8}.radio .helper::after,.radio .helper::before{content:\"\";position:absolute;left:0;top:3px;margin:.25rem;width:1rem;height:1rem;transition:transform .28s;border-radius:50%;border:.125rem solid #338bf8}.radio label:hover .helper{color:#338bf8}.radio input:checked~.helper::after{transform:scale(.5)}.radio input:checked~.helper::before{color:#338bf8}.radio.radiofill input:checked~.helper::after{transform:scale(1)}.radio.radiofill .helper::after{background-color:#338bf8}.radio.radio-outline input:checked~.helper::after{transform:scale(.6)}.radio.radio-outline .helper::after{background-color:#fff;border:.225rem solid #338bf8}.radio.radio-matrial input~.helper::after{background-color:#fff}.radio.radio-matrial input:checked~.helper::after{transform:scale(.5);box-shadow:0 1px 7px -1px rgba(0,0,0,.72)}.radio.radio-matrial input:checked~.helper::before{background-color:#338bf8}.radio.radio-disable{opacity:.7}.radio.radio-disable label{cursor:not-allowed}.radio-inline{display:inline-block;margin-right:20px}.radio.radiofill.radio-primary .helper::after{background-color:#338bf8;border-color:#338bf8}.radio.radiofill.radio-primary .helper::before{border-color:#338bf8}.radio.radio-outline.radio-primary .helper::after{background-color:#fff;border:.225rem solid #338bf8}.radio.radio-outline.radio-primary .helper::before{border-color:#338bf8}.radio.radio-matrial.radio-primary input~.helper::after{background-color:#fff;border-color:#fff}.radio.radio-matrial.radio-primary input~.helper::before{background-color:#338bf8;border-color:#338bf8}.radio.radiofill.radio-warning .helper::after{background-color:#ff9800;border-color:#ff9800}.radio.radiofill.radio-warning .helper::before{border-color:#ff9800}.radio.radio-outline.radio-warning .helper::after{background-color:#fff;border:.225rem solid #ff9800}.radio.radio-outline.radio-warning .helper::before{border-color:#ff9800}.radio.radio-matrial.radio-warning input~.helper::after{background-color:#fff;border-color:#fff}.radio.radio-matrial.radio-warning input~.helper::before{background-color:#ff9800;border-color:#ff9800}.radio.radiofill.radio-default .helper::after{background-color:#f2f2f2;border-color:#f2f2f2}.radio.radiofill.radio-default .helper::before{border-color:#f2f2f2}.radio.radio-outline.radio-default .helper::after{background-color:#fff;border:.225rem solid #f2f2f2}.radio.radio-outline.radio-default .helper::before{border-color:#f2f2f2}.radio.radio-matrial.radio-default input~.helper::after{background-color:#fff;border-color:#fff}.radio.radio-matrial.radio-default input~.helper::before{background-color:#f2f2f2;border-color:#f2f2f2}.radio.radiofill.radio-danger .helper::after{background-color:#d61e00;border-color:#d61e00}.radio.radiofill.radio-danger .helper::before{border-color:#d61e00}.radio.radio-outline.radio-danger .helper::after{background-color:#fff;border:.225rem solid #d61e00}.radio.radio-outline.radio-danger .helper::before{border-color:#d61e00}.radio.radio-matrial.radio-danger input~.helper::after{background-color:#fff;border-color:#fff}.radio.radio-matrial.radio-danger input~.helper::before{background-color:#d61e00;border-color:#d61e00}.radio.radiofill.radio-success .helper::after{background-color:#6fbb35;border-color:#6fbb35}.radio.radiofill.radio-success .helper::before{border-color:#6fbb35}.radio.radio-outline.radio-success .helper::after{background-color:#fff;border:.225rem solid #6fbb35}.radio.radio-outline.radio-success .helper::before{border-color:#6fbb35}.radio.radio-matrial.radio-success input~.helper::after{background-color:#fff;border-color:#fff}.radio.radio-matrial.radio-success input~.helper::before{background-color:#6fbb35;border-color:#6fbb35}.radio.radiofill.radio-inverse .helper::after{background-color:#052d3e;border-color:#052d3e}.radio.radiofill.radio-inverse .helper::before{border-color:#052d3e}.radio.radio-outline.radio-inverse .helper::after{background-color:#fff;border:.225rem solid #052d3e}.radio.radio-outline.radio-inverse .helper::before{border-color:#052d3e}.radio.radio-matrial.radio-inverse input~.helper::after{background-color:#fff;border-color:#fff}.radio.radio-matrial.radio-inverse input~.helper::before{background-color:#052d3e;border-color:#052d3e}.radio.radiofill.radio-info .helper::after{background-color:#1d9ce7;border-color:#1d9ce7}.radio.radiofill.radio-info .helper::before{border-color:#1d9ce7}.radio.radio-outline.radio-info .helper::after{background-color:#fff;border:.225rem solid #1d9ce7}.radio.radio-outline.radio-info .helper::before{border-color:#1d9ce7}.radio.radio-matrial.radio-info input~.helper::after{background-color:#fff;border-color:#fff}.radio.radio-matrial.radio-info input~.helper::before{background-color:#1d9ce7;border-color:#1d9ce7}"]
            }] }
];
RadioItemComponent.propDecorators = {
    template: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
    value: [{ type: Input }],
    label: [{ type: Input }],
    disabled: [{ type: Input }],
    checked: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RadioItemComponent.prototype.template;
    /** @type {?} */
    RadioItemComponent.prototype.value;
    /** @type {?} */
    RadioItemComponent.prototype.label;
    /** @type {?} */
    RadioItemComponent.prototype.disabled;
    /** @type {?} */
    RadioItemComponent.prototype.checked;
    /** @type {?} */
    RadioItemComponent.prototype.groupIndex;
    /**
     * @type {?}
     * @private
     */
    RadioItemComponent.prototype.selectedCallBack;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RadioComponent {
    constructor() {
        this.modelChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.items.forEach((/**
         * @param {?} s
         * @param {?} index
         * @return {?}
         */
        (s, index) => {
            s.groupIndex = index;
            if (this.model !== null && this.model !== undefined && this.model === s.value) {
                s.checked = true;
            }
            s.registerSelectedCallback((/**
             * @param {?} componentRef
             * @return {?}
             */
            (componentRef) => {
                this.items.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
                    item.checked = false;
                }));
                /** @type {?} */
                let selectedItem = this.items.find((/**
                 * @param {?} y
                 * @return {?}
                 */
                y => y.groupIndex === componentRef.groupIndex));
                selectedItem.checked = true;
                this.model = componentRef.value;
                this.modelChange.emit(componentRef.value);
            }));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.modelChange.emit(null);
    }
}
RadioComponent.decorators = [
    { type: Directive, args: [{
                selector: 'katana-radio-items'
            },] }
];
RadioComponent.propDecorators = {
    items: [{ type: ContentChildren, args: [RadioItemComponent,] }],
    modelChange: [{ type: Output }],
    model: [{ type: Input }],
    label: [{ type: Input }],
    disabled: [{ type: Input }],
    formControlName: [{ type: Input }],
    validationName: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RadioComponent.prototype.items;
    /** @type {?} */
    RadioComponent.prototype.modelChange;
    /** @type {?} */
    RadioComponent.prototype.model;
    /** @type {?} */
    RadioComponent.prototype.label;
    /** @type {?} */
    RadioComponent.prototype.disabled;
    /** @type {?} */
    RadioComponent.prototype.formControlName;
    /** @type {?} */
    RadioComponent.prototype.validationName;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RadioModule {
}
RadioModule.decorators = [
    { type: NgModule, args: [{
                declarations: [RadioComponent, RadioItemComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    ValidationModule
                ],
                exports: [RadioComponent, RadioItemComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimelineComponent {
    constructor() {
        this.items = [];
    }
}
TimelineComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-timeline',
                template: "<div class=\"timeline-tracking\">\r\n  <div class=\"timeline-tracking-item\" *ngFor=\"let item of items\">\r\n    <div class=\"group-name\">{{item?.date | katanaDate}}</div>\r\n    <div class=\"group-inside\" *ngFor=\"let detail of item.details\">\r\n      <div class=\"body\">\r\n        <div class=\"dot\"></div>\r\n        <div class=\"content\" innerHTML=\"{{detail.description}}\"></div>\r\n        <div class=\"date-time-detail\">{{detail?.time | katanaTime}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [".timeline-tracking{position:relative}.timeline-tracking::before{content:\"\";position:absolute;top:0;left:8px;bottom:0;width:5px;background:#ddd}.timeline-tracking .timeline-tracking-item{margin-bottom:15px}.timeline-tracking .timeline-tracking-item .group-name{font-weight:500;font-size:14px;margin-bottom:10px;padding-left:45px}.timeline-tracking .timeline-tracking-item .group-inside{font-size:13px}.timeline-tracking .timeline-tracking-item .group-inside .body{position:relative;margin-bottom:15px;padding-right:30px;padding-left:45px;transition:.3s ease-in-out;cursor:pointer}.timeline-tracking .timeline-tracking-item .group-inside .body:hover{padding-left:60px}@media (max-width:991px){.timeline-tracking .timeline-tracking-item .group-inside .body:hover{background-color:unset!important;padding-left:45px!important}.timeline-tracking .timeline-tracking-item .group-inside .body:hover .dot{left:0!important}.timeline-tracking .timeline-tracking-item .group-inside .body:hover .content{font-weight:400!important}}.timeline-tracking .timeline-tracking-item .group-inside .body:hover .dot{left:20px}.timeline-tracking .timeline-tracking-item .group-inside .body:hover .content{font-weight:400}.timeline-tracking .timeline-tracking-item .group-inside .body .dot{width:20px;height:20px;border:5px solid green;background-color:#fff;border-radius:100%;position:absolute;left:0;top:0;transition:.3s ease-in-out}.timeline-tracking .timeline-tracking-item .group-inside .body .content{transition:.3s ease-in-out}.timeline-tracking .timeline-tracking-item .group-inside .body .content b{font-weight:500}.timeline-tracking .timeline-tracking-item .group-inside .body .date-time-detail{font-weight:700;position:absolute;right:0;top:0;transition:.3s ease-in-out}.content{white-space:pre-wrap;word-break:break-word}"]
            }] }
];
TimelineComponent.propDecorators = {
    items: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TimelineComponent.prototype.items;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimelineModule {
}
TimelineModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TimelineComponent],
                imports: [
                    CommonModule,
                    FormatterModule
                ],
                entryComponents: [TimelineComponent],
                exports: [TimelineComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChipComponent {
    constructor() {
        this.placeholder = 'Nhập thông tin';
        this.emitNullOnDestroy = false;
        this.modelChange = new EventEmitter();
        this.onAdd = new EventEmitter();
        this.onRemove = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.emitNullOnDestroy === true)
            this.modelChange.emit([]);
    }
}
ChipComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-chips',
                template: "<div class=\"form-group\">\r\n  <label *ngIf=\"title\">{{title}}</label>\r\n  <div [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\">\r\n    <tag-input [disable]=\"disabled\" [ngModel]=\"model\" (ngModelChange)=\"modelChange.emit($event)\" [modelAsStrings]=\"true\"\r\n               ngClass=\"tag-select\" theme=\"minimal\" [maxItems]=\"maxItems\" [placeholder]=\"placeholder\"\r\n               [secondaryPlaceholder]=\"placeholder\" (onAdd)=\"onAdd.emit($event)\" (onRemove)=\"onRemove.emit($event)\"\r\n               [addOnBlur]=\"true\">\r\n    </tag-input>\r\n  </div>\r\n</div>",
                styles: [":host /deep/ tag-input{overflow:hidden}:host /deep/ tag-input .tag-wrapper div{text-overflow:initial}:host /deep/ tag-input .tag-select{border:1px solid #e6e6e6}:host /deep/ tag-input tag-input-form input{width:300%}"]
            }] }
];
ChipComponent.propDecorators = {
    title: [{ type: Input }],
    model: [{ type: Input }],
    placeholder: [{ type: Input }],
    maxItems: [{ type: Input }],
    disabled: [{ type: Input }],
    validationName: [{ type: Input }],
    validationScope: [{ type: Input }],
    emitNullOnDestroy: [{ type: Input }],
    modelChange: [{ type: Output }],
    onAdd: [{ type: Output }],
    onRemove: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ChipComponent.prototype.title;
    /** @type {?} */
    ChipComponent.prototype.model;
    /** @type {?} */
    ChipComponent.prototype.placeholder;
    /** @type {?} */
    ChipComponent.prototype.maxItems;
    /** @type {?} */
    ChipComponent.prototype.disabled;
    /** @type {?} */
    ChipComponent.prototype.validationName;
    /** @type {?} */
    ChipComponent.prototype.validationScope;
    /** @type {?} */
    ChipComponent.prototype.emitNullOnDestroy;
    /** @type {?} */
    ChipComponent.prototype.modelChange;
    /** @type {?} */
    ChipComponent.prototype.onAdd;
    /** @type {?} */
    ChipComponent.prototype.onRemove;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChipModule {
}
ChipModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ChipComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    TagInputModule,
                    ValidationModule
                ],
                entryComponents: [ChipComponent],
                exports: [ChipComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PanelHeaderDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
PanelHeaderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[katana-panel-header]'
            },] }
];
/** @nocollapse */
PanelHeaderDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    PanelHeaderDirective.prototype.template;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PanelComponent {
    constructor() {
        this.includeBorder = true;
        this.expand = true;
    }
    /**
     * @return {?}
     */
    toggle() {
        this.expand = !this.expand;
    }
}
PanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-panel',
                template: "<div class=\"katana-container-panel\" [ngClass]=\"{'katana-panel-container' : includeBorder}\">\r\n  <div class=\"katana-panel-wrapper\" *ngIf=\"title\" [ngClass]=\"{'mb-3':includeBorder === false}\">\r\n    <div class=\"d-flex katana-panel-header align-items-center\" [class.active]=\"expand\" (click)=\"toggle()\">\r\n      <div>\r\n        <i [ngClass]=\"icon\"></i>\r\n        <a href='javascript:;'>{{title}}</a>\r\n      </div>\r\n      <i class=\"m-l-5 icofont icofont-simple-down icon-expand\" [class.change]=\"expand\"></i>\r\n    </div>\r\n    <div class=\"right-place vertical\" *ngIf=\"panelHeader\">\r\n      <div class=\"d-none d-lg-block d-md-block\">\r\n        <ng-template *ngIf=\"panelHeader\" [ngTemplateOutlet]=\"panelHeader.template\"></ng-template>\r\n      </div>\r\n      <div class=\"btn-more-action d-md-none d-sm-block\">\r\n        <a href=\"#\"> <i class=\"icofont icofont-settings\"></i>L\u1EF1a ch\u1ECDn</a>\r\n        <div class=\"menu-action\">\r\n          <ng-template *ngIf=\"panelHeader\" [ngTemplateOutlet]=\"panelHeader.template\"></ng-template>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row panel-content no-gutters\" [@expand]=\"expand\">\r\n    <div class=\"col-sm-12\" [ngClass]=\"{'px-2 py-2': includeBorder}\">\r\n      <fieldset [disabled]=\"disabled\">\r\n        <ng-content></ng-content>\r\n      </fieldset>\r\n    </div>\r\n  </div>\r\n</div>",
                animations: [
                    trigger('expand', [
                        state('false', style({
                            overflow: 'hidden',
                            height: '0px',
                        })),
                        state('true', style({
                            height: AUTO_STYLE,
                        })),
                        transition('0 <=> 1', [
                            animate('300ms ease-in-out')
                        ])
                    ]),
                ],
                styles: [".katana-form-container{padding-top:20px}.katana-panel-container{margin-bottom:10px}.none-space{padding-top:10px!important;margin-left:0!important;margin-right:0!important}.form-space{padding-top:10px!important;margin-left:-8px!important;margin-right:-8px!important}.panel-space{padding-top:0!important;margin-left:-8px!important;margin-right:-8px!important}.space-margin-none{margin:0!important}.katana-panel-wrapper{width:100%;position:relative}.katana-panel-wrapper .right-place{position:absolute;right:25px;top:-1px;z-index:1}.katana-panel-wrapper .right-place .btn-more-action{position:relative;display:inline-block}.katana-panel-wrapper .right-place .btn-more-action:hover .menu-action{display:block}.katana-panel-wrapper .right-place .btn-more-action a{text-transform:unset}.katana-panel-wrapper .right-place .btn-more-action .menu-action{position:absolute;display:none;z-index:99;right:0}.katana-panel-wrapper .right-place .btn-more-action .menu-action button{min-width:125px;text-align:left}.katana-panel-wrapper .katana-panel-header{cursor:pointer;padding:0 .5rem;height:40px;color:#212529;background:#fff;position:relative}.katana-panel-wrapper .katana-panel-header a{color:#338bf8;font-weight:500;text-decoration:none;text-transform:uppercase}.katana-panel-wrapper .katana-panel-header .icon-expand{position:absolute;right:5px;margin:0;font-size:1rem;display:block;transition:.3s;color:#6c757d;z-index:1}.katana-panel-wrapper .katana-panel-header .icon-expand.change{transform:rotate(180deg)}.katana-container-panel{margin-bottom:2.5rem}.katana-container-panel .panel-content{background-color:#fff}"]
            }] }
];
PanelComponent.propDecorators = {
    panelHeader: [{ type: ContentChild, args: [PanelHeaderDirective, { static: true },] }],
    title: [{ type: Input }],
    icon: [{ type: Input }],
    includeBorder: [{ type: Input }],
    expand: [{ type: Input }],
    disabled: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PanelComponent.prototype.panelHeader;
    /** @type {?} */
    PanelComponent.prototype.title;
    /** @type {?} */
    PanelComponent.prototype.icon;
    /** @type {?} */
    PanelComponent.prototype.includeBorder;
    /** @type {?} */
    PanelComponent.prototype.expand;
    /** @type {?} */
    PanelComponent.prototype.disabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PanelModule {
}
PanelModule.decorators = [
    { type: NgModule, args: [{
                declarations: [PanelComponent, PanelHeaderDirective],
                imports: [
                    CommonModule
                ],
                exports: [PanelComponent, PanelHeaderDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListItemDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
ListItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[katana-list-item]'
            },] }
];
/** @nocollapse */
ListItemDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    ListItemDirective.prototype.template;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListComponent {
    constructor() {
        this.eventSelect = true;
        this.direction = 'vertical';
        this.emptyListMessage = 'Không có giá trị nào trong danh sách';
        this.pageSize = 10;
        this.itemSelected = new EventEmitter();
        this.numberOfItemsFromEndBeforeFetchingMore = 3;
        this.searchItems = [];
        this.searchText$ = new BehaviorSubject(null);
        this.subscriptions = [];
        this.currentPage = 0;
        this.selectedItems = [];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    isSelected(item) {
        if (this.eventSelect) {
            return this.selectedItems.indexOf(item) >= 0;
        }
    }
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    selectItem(item, index) {
        if (this.eventSelect) {
            this.model.forEach((/**
             * @param {?} s
             * @return {?}
             */
            s => {
                s.selected = false;
            }));
            /** @type {?} */
            const indexObj = this.model.find((/**
             * @param {?} s
             * @return {?}
             */
            s => s.id === item.id));
            indexObj.selected = true;
        }
        this.itemSelected.emit(item);
    }
    /**
     * @return {?}
     */
    getSelectedItems() {
        return this.selectedItems;
    }
    /**
     * @param {?} lastIndex
     * @return {?}
     */
    scroll(lastIndex) {
        if (this.loading) {
            return;
        }
        if (lastIndex + this.numberOfItemsFromEndBeforeFetchingMore >= this.model.length) {
            this.fetchMore();
        }
    }
    /**
     * @return {?}
     */
    fetchMore() {
        this.currentPage++;
        this.loading = true;
        /** @type {?} */
        const fetchMoreSubsription = this.searchFunction(this.searchText$.getValue(), 0, this.currentPage, this.pageSize)
            .pipe(take(1), finalize((/**
         * @return {?}
         */
        () => this.loading = false)))
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.model = this.model.concat(response.items);
            this.loading = false;
        }));
        this.subscriptions.push(fetchMoreSubsription);
    }
}
ListComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-list',
                template: "<ng-container *ngIf=\"model && model.length > 0; else emptyList\">\r\n  <ul>\r\n    <li *ngFor=\"let item of model; let index = index\" class=\"p-2\"\r\n        [ngClass]=\"{'horizontal-list': direction === 'horizontal', 'selected': item.selected}\"\r\n        (click)=\"selectItem(item, index)\">\r\n      <ng-container [ngTemplateOutlet]=\"listItemTemplate.template\"\r\n                    [ngTemplateOutletContext]=\"{item: item, index: index}\"></ng-container>\r\n    </li>\r\n  </ul>\r\n</ng-container>\r\n<ng-template #emptyList>\r\n  <label>{{emptyListMessage}}</label>\r\n</ng-template>\r\n\r\n<div [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\">\r\n</div>",
                styles: ["ul{margin-bottom:0}ul li{cursor:auto;transition:.4s ease-in-out}ul li.selected{background-color:#ecf7fd}"]
            }] }
];
ListComponent.propDecorators = {
    listItemTemplate: [{ type: ContentChild, args: [ListItemDirective, { static: true },] }],
    eventSelect: [{ type: Input }],
    model: [{ type: Input }],
    direction: [{ type: Input }],
    emptyListMessage: [{ type: Input }],
    validationName: [{ type: Input }],
    validationScope: [{ type: Input }],
    pageSize: [{ type: Input }],
    searchFunction: [{ type: Input }],
    itemSelected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ListComponent.prototype.listItemTemplate;
    /** @type {?} */
    ListComponent.prototype.eventSelect;
    /** @type {?} */
    ListComponent.prototype.model;
    /** @type {?} */
    ListComponent.prototype.direction;
    /** @type {?} */
    ListComponent.prototype.emptyListMessage;
    /** @type {?} */
    ListComponent.prototype.validationName;
    /** @type {?} */
    ListComponent.prototype.validationScope;
    /** @type {?} */
    ListComponent.prototype.pageSize;
    /** @type {?} */
    ListComponent.prototype.searchFunction;
    /** @type {?} */
    ListComponent.prototype.itemSelected;
    /** @type {?} */
    ListComponent.prototype.loading;
    /** @type {?} */
    ListComponent.prototype.numberOfItemsFromEndBeforeFetchingMore;
    /** @type {?} */
    ListComponent.prototype.searchItems;
    /** @type {?} */
    ListComponent.prototype.searchText$;
    /**
     * @type {?}
     * @private
     */
    ListComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    ListComponent.prototype.currentPage;
    /**
     * @type {?}
     * @private
     */
    ListComponent.prototype.selectedItems;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListModule {
}
ListModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ListComponent, ListItemDirective],
                imports: [
                    CommonModule
                ],
                exports: [ListComponent, ListItemDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthComponent {
    /**
     * @param {?} _router
     * @param {?} _cacheService
     * @param {?} _authenticationService
     * @param {?} _validationService
     */
    constructor(_router, _cacheService, _authenticationService, _validationService) {
        this._router = _router;
        this._cacheService = _cacheService;
        this._authenticationService = _authenticationService;
        this._validationService = _validationService;
        this.title = 'Login';
        this.completed = new EventEmitter();
        this.request = new AuthenticationLoginRequest();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initValidations();
    }
    /**
     * @return {?}
     */
    login() {
        if (!this._validationService.isValid())
            return;
        this._authenticationService.login(this.request).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (response.success) {
                this._cacheService.set(AuthConst.User, response.user);
                this.completed.emit(response);
                if (this.succeedPath)
                    this._router.navigate([this.succeedPath]);
            }
            else {
                this._cacheService.remove(AuthConst.User);
                this.completed.emit(response);
                if (this.failurePath)
                    this._router.navigate([this.failurePath]);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    initValidations() {
        if (!this.formRef)
            throw new Error('formRef is null');
        /** @type {?} */
        var options = [
            new ValidationOption({
                validationName: 'UserName',
                valueResolver: (/**
                 * @return {?}
                 */
                () => this.request.payload.userName),
                rules: [new RequiredValidationRule()]
            }),
            new ValidationOption({
                validationName: 'Password',
                valueResolver: (/**
                 * @return {?}
                 */
                () => this.request.payload.password),
                rules: [new RequiredValidationRule()]
            })
        ];
        /** @type {?} */
        var validator = new ClientValidator({
            formRef: this.formRef,
            options: options,
            payloadRef: (/**
             * @template THIS
             * @this {THIS}
             * @return {THIS}
             */
            () => this)
        });
        this._validationService.init({
            validator: this.validator ? this.validator : validator
        });
    }
}
AuthComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-auth',
                template: "<div #formRef>\r\n    <ng-container *ngIf=\"!template then default; else custom\">\r\n    </ng-container>\r\n</div>\r\n\r\n<ng-template #custom>\r\n    <katana-loader *ngIf=\"template\" [data]=\"template?.data\" [template]=\"template?.template\"></katana-loader>\r\n</ng-template>\r\n\r\n<ng-template #default>\r\n    <div class=\"col-xs-12 col-sm-6 col-md-3\" style=\"margin: 25px auto;\">\r\n        <h2 style=\"text-align: center;\">{{title}}</h2>\r\n        <div class=\"container\">\r\n            <div>\r\n                <label for=\"uname\"><b>User Name</b></label>\r\n                <input type=\"text\" validation-name=\"UserName\" [(ngModel)]=\"request.payload.userName\"\r\n                    placeholder=\"Enter Username\" name=\"uname\" required>\r\n            </div>\r\n            <div>\r\n                <label for=\"psw\"><b>Password</b></label>\r\n                <input type=\"password\" validation-name=\"Password\" [(ngModel)]=\"request.payload.password\"\r\n                    placeholder=\"Enter Password\" name=\"psw\" required>\r\n            </div>\r\n            <button (click)=\"login()\" type=\"submit\">Login</button>\r\n        </div>\r\n    </div>\r\n</ng-template>",
                animations: [fadeInOut],
                styles: ["body{font-family:Arial,Helvetica,sans-serif}form{border:3px solid #f1f1f1}input[type=password],input[type=text]{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}button{background-color:#4caf50;color:#fff;padding:14px 20px;margin:8px 0;border:none;cursor:pointer;width:100%}button:hover{opacity:.8}.cancelbtn{width:auto;padding:10px 18px;background-color:#f44336}.imgcontainer{text-align:center;margin:24px 0 12px}img.avatar{width:40%;border-radius:50%}.container{padding:16px}span.psw{float:right;padding-top:16px}@media screen and (max-width:300px){span.psw{display:block;float:none}.cancelbtn{width:100%}}"]
            }] }
];
/** @nocollapse */
AuthComponent.ctorParameters = () => [
    { type: Router },
    { type: CacheService },
    { type: AuthenticationService },
    { type: ValidationService }
];
AuthComponent.propDecorators = {
    title: [{ type: Input }],
    validator: [{ type: Input }],
    succeedPath: [{ type: Input }],
    failurePath: [{ type: Input }],
    template: [{ type: Input }],
    completed: [{ type: Output }],
    formRef: [{ type: ViewChild, args: ['formRef', { static: true },] }]
};
if (false) {
    /** @type {?} */
    AuthComponent.prototype.title;
    /** @type {?} */
    AuthComponent.prototype.validator;
    /** @type {?} */
    AuthComponent.prototype.succeedPath;
    /** @type {?} */
    AuthComponent.prototype.failurePath;
    /** @type {?} */
    AuthComponent.prototype.template;
    /** @type {?} */
    AuthComponent.prototype.completed;
    /** @type {?} */
    AuthComponent.prototype.formRef;
    /** @type {?} */
    AuthComponent.prototype.request;
    /**
     * @type {?}
     * @private
     */
    AuthComponent.prototype._router;
    /**
     * @type {?}
     * @private
     */
    AuthComponent.prototype._cacheService;
    /**
     * @type {?}
     * @private
     */
    AuthComponent.prototype._authenticationService;
    /**
     * @type {?}
     * @private
     */
    AuthComponent.prototype._validationService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations$5 = [
    AuthComponent
];
class AuthModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: AuthModule,
            providers: [
                AuthenticationService
            ]
        };
    }
}
AuthModule.decorators = [
    { type: NgModule, args: [{
                declarations: declarations$5,
                imports: [
                    CommonModule,
                    FormsModule,
                    LoaderModule,
                    ReactiveFormsModule
                ],
                entryComponents: declarations$5,
                exports: declarations$5
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabComponent {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this.change = new EventEmitter();
        this.displayMode = 'default';
        this.activeTabIndex = 0;
        this.clicked = false;
    }
    /**
     * @param {?} tabIndex
     * @param {?} tab
     * @return {?}
     */
    switchTab(tabIndex, tab) {
        if (this.activeTabIndex === tabIndex)
            return;
        this._changeDetectorRef.detectChanges();
        this.activeTabIndex = tabIndex;
        tab.index = tabIndex;
        this.change.emit(tab);
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-tabs',
                template: "<ul class=\"nav nav-tabs\" role=\"tablist\" [ngClass]=\"{'full-card': displayMode === 'full'}\">\r\n    <li class=\"nav-item\" *ngFor=\"let tab of tabs; let i = index\" [ngClass]=\"{ 'active': activeTabIndex === i }\">\r\n        <a class=\"nav-link\" [ngClass]=\"{ 'active': activeTabIndex === i }\" data-toggle=\"tab\" href=\"javascript:;\"\r\n            role=\"tab\" (click)=\"switchTab(i, tab)\"><i [ngClass]=\"tab.icon\" class=\"mr-1\"></i> {{tab.name}}</a>\r\n        <div class=\"slide\"></div>\r\n    </li>\r\n    <div class=\"ml-1 btn-more\">\r\n        <button (mouseover)=\"clicked = false\" class=\"btn btn-default\"><i class=\"fa fa-caret-down\"\r\n                aria-hidden=\"true\"></i></button>\r\n        <ul (mouseup)=\"clicked = true\" [hidden]=\"clicked\">\r\n            <li *ngFor=\"let tab of tabs; let i = index\">\r\n                <a class=\"nav-link\" [ngClass]=\"{ 'active': activeTabIndex === i }\" data-toggle=\"tab\" href=\"javascript:;\"\r\n                    role=\"tab\" (click)=\"switchTab(i, tab)\"><i [ngClass]=\"tab.icon\" class=\"mr-1\"></i> {{tab.name}}</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</ul>\r\n<div class=\"tab-content\">\r\n    <div *ngFor=\"let tab of tabs; let i = index\">\r\n        <ng-container *ngIf=\"activeTabIndex === i\">\r\n            <ng-container *ngTemplateOutlet=\"tab.template\"></ng-container>\r\n        </ng-container>\r\n    </div>\r\n</div>",
                styles: [".nav-tabs{border-bottom:0 solid #f8f9fa!important}.nav-tabs .nav-item{margin-bottom:-2px;min-width:143px}.nav-tabs .nav-item .nav-link{border-radius:1px;border-left:0 solid transparent;border-right:0 solid transparent;border-top:3px solid transparent;border-bottom:none;padding:.5rem 1.8rem;text-align:center;font-weight:500;transition:.2s;color:#495057;background:#fafafa;margin:0}.nav-tabs .nav-item .nav-link:hover{border:none;border-top:3px solid #338bf8;border-left:0 solid #dee2e6;border-right:0 solid #dee2e6;border-bottom:none;background:#fff}.nav-tabs .nav-item .nav-link.active{margin:0;background:#fff;color:#338bf8;border-top:3px solid #338bf8;border-left:0 solid #dee2e6;border-right:0 solid #dee2e6;transition:.2s}.nav-tabs .btn-more{display:none;position:relative}.nav-tabs .btn-more button{background-color:#fafafa;box-shadow:none;height:38px}.nav-tabs .btn-more button i{line-height:2}.nav-tabs .btn-more:hover ul{display:block}.nav-tabs .btn-more ul{display:none;position:absolute;width:150px;right:0;background:#fff;z-index:10;box-shadow:0 4px 8px 0 rgba(0,0,0,.15)}.nav-tabs .btn-more ul li{border:none}.nav-tabs .btn-more ul li a{border:none;color:#343a40}.nav-tabs .btn-more ul li a:focus,.nav-tabs .btn-more ul li a:hover{background-color:#fafafa;border-color:transparent;color:#338bf8;font-weight:500}.nav-tabs .btn-more ul li a.active{color:#338bf8;font-weight:500;background:#fff}.nav-tabs.full-card{background:#fafafa;margin-left:-1rem;margin-right:-1rem;margin-top:-1rem;border-bottom:4px solid #fafafa}@media (min-width:1380px) and (max-width:1820px){.nav-tabs .nav-item:nth-child(n+8){display:none}.nav-tabs .nav-item.active:nth-child(n+8){margin-left:auto!important;display:block}.nav-tabs .btn-more{display:block}.nav-tabs .btn-more ul li:nth-child(-n+7){display:none}}@media (min-width:1024px) and (max-width:1379px){.nav-tabs .nav-item:nth-child(n+6){display:none}.nav-tabs .nav-item.active:nth-child(n+6){margin-left:auto!important;display:block}.nav-tabs .btn-more{display:block}.nav-tabs .btn-more ul li:nth-child(-n+5){display:none}}@media (min-width:768px) and (max-width:1023px){.nav-tabs .nav-item:nth-child(n+4){display:none}.nav-tabs .nav-item.active:nth-child(n+4){margin-left:auto!important;display:block}.nav-tabs .btn-more{display:block}.nav-tabs .btn-more ul li:nth-child(-n+3){display:none}}@media (min-width:480px) and (max-width:767px){.nav-tabs .nav-item:nth-child(n+3){display:none}.nav-tabs .nav-item.active:nth-child(n+3){margin-left:auto!important;display:block}.nav-tabs .btn-more{display:block}.nav-tabs .btn-more ul li:nth-child(-n+2){display:none}}@media screen and (max-width:479px){.nav-tabs .nav-item:nth-child(n+2){display:none}.nav-tabs .nav-item.active:nth-child(n+2){margin-left:auto!important;display:block}.nav-tabs .btn-more{display:block}.nav-tabs .btn-more ul li:nth-child(-n+1){display:none}}"]
            }] }
];
/** @nocollapse */
TabComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
TabComponent.propDecorators = {
    tabs: [{ type: ContentChildren, args: [TabItemComponent,] }],
    change: [{ type: Output }],
    displayMode: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TabComponent.prototype.tabs;
    /** @type {?} */
    TabComponent.prototype.change;
    /** @type {?} */
    TabComponent.prototype.displayMode;
    /** @type {?} */
    TabComponent.prototype.activeTabIndex;
    /** @type {?} */
    TabComponent.prototype.clicked;
    /**
     * @type {?}
     * @private
     */
    TabComponent.prototype._changeDetectorRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations$6 = [
    TabComponent,
    TabItemComponent
];
class TabModule {
}
TabModule.decorators = [
    { type: NgModule, args: [{
                declarations: declarations$6,
                imports: [
                    CommonModule
                ],
                entryComponents: declarations$6,
                exports: declarations$6
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultLayoutService {
    /**
     * @param {?} router
     * @param {?} _aggregatorService
     */
    constructor(router, _aggregatorService) {
        this.router = router;
        this._aggregatorService = _aggregatorService;
        this.subscriptions = new Subscription();
        this.toolbarItems = [];
        this.navType = 'st5';
        this.themeLayout = 'vertical';
        this.vNavigationView = 'view1';
        this.verticalPlacement = 'left';
        this.verticalLayout = 'wide';
        this.deviceType = 'desktop';
        this.verticalNavType = 'offcanvas';
        this.verticalEffect = 'shrink';
        this.pcodedHeaderPosition = 'fixed';
        this.pcodedSidebarPosition = 'fixed';
        this.headerTheme = 'theme1';
        this.logoTheme = 'theme1';
        this.toggleOn = true;
        this.headerFixedMargin = '57px';
        this.navBarTheme = 'themelight1';
        this.activeItemTheme = 'theme4';
        this.isCollapsedMobile = 'no-block';
        this.chatToggle = 'out';
        this.chatToggleInverse = 'in';
        this.chatInnerToggle = 'off';
        this.chatInnerToggleInverse = 'on';
        this.menuTitleTheme = 'theme5';
        this.itemBorder = true;
        this.itemBorderStyle = 'none';
        this.subItemBorder = true;
        this.subItemIcon = 'style6';
        this.dropDownIcon = 'style1';
        this.isSidebarChecked = true;
        this.isHeaderChecked = true;
        /** @type {?} */
        const scrollHeight = window.screen.height - 150;
        this.innerHeight = scrollHeight + 'px';
        this.windowWidth = window.innerWidth;
        this.setMenuAttributes(this.windowWidth);
        /** @type {?} */
        const navigationSubscription = this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event instanceof NavigationEnd))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.toolbarItems = [];
        }));
        this.subscriptions.add(navigationSubscription);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.innerHeight = event.target.innerHeight + 'px';
        this.windowWidth = event.target.innerWidth;
        /** @type {?} */
        let reSizeFlag = true;
        if (this.deviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
            reSizeFlag = false;
        }
        else if (this.deviceType === 'mobile' && this.windowWidth < 768) {
            reSizeFlag = false;
        }
        if (reSizeFlag) {
            this.setMenuAttributes(this.windowWidth);
        }
    }
    /**
     * @param {?} windowWidth
     * @return {?}
     */
    setMenuAttributes(windowWidth) {
        if (windowWidth >= 768 && windowWidth <= 1024) {
            this.deviceType = 'tablet';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'push';
        }
        else if (windowWidth < 768) {
            this.deviceType = 'mobile';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
        }
        else {
            this.deviceType = 'desktop';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'shrink';
        }
    }
    /**
     * @return {?}
     */
    toggleOpened() {
        if (this.windowWidth < 768) {
            this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
        }
        this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClickedOutside(e) {
        if (this.windowWidth < 768 && this.toggleOn && this.verticalNavType !== 'offcanvas') {
            this.toggleOn = true;
            this.verticalNavType = 'offcanvas';
        }
    }
    /**
     * @return {?}
     */
    onMobileMenu() {
        this.isCollapsedMobile = this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
    }
    /**
     * @return {?}
     */
    toggleChat() {
        this.chatToggle = this.chatToggle === 'out' ? 'in' : 'out';
        this.chatToggleInverse = this.chatToggleInverse === 'out' ? 'in' : 'out';
        this.chatInnerToggle = 'off';
        this.chatInnerToggleInverse = 'off';
    }
    /**
     * @return {?}
     */
    toggleChatInner() {
        this.chatInnerToggle = this.chatInnerToggle === 'off' ? 'on' : 'off';
        this.chatInnerToggleInverse = this.chatInnerToggleInverse === 'off' ? 'on' : 'off';
    }
    /**
     * @return {?}
     */
    setSidebarPosition() {
        this.isSidebarChecked = !this.isSidebarChecked;
        this.pcodedSidebarPosition = this.isSidebarChecked === true ? 'fixed' : 'absolute';
    }
    /**
     * @return {?}
     */
    setHeaderPosition() {
        this.isHeaderChecked = !this.isHeaderChecked;
        this.pcodedHeaderPosition = this.isHeaderChecked === true ? 'fixed' : 'relative';
        this.headerFixedMargin = this.isHeaderChecked === true ? '50px' : '';
    }
    /**
     * @param {?} pattern
     * @return {?}
     */
    setBackgroundPattern(pattern) {
        document.querySelector('body').setAttribute('themebg-pattern', pattern);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    setLayoutType(type) {
        this.layoutType = type;
        if (type === 'dark') {
            this.headerTheme = 'theme6';
            this.navBarTheme = 'theme1';
            this.logoTheme = 'theme6';
            document.querySelector('body').classList.add('dark');
        }
        else {
            this.headerTheme = 'theme1';
            this.navBarTheme = 'themelight1';
            this.logoTheme = 'theme1';
            document.querySelector('body').classList.remove('dark');
        }
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    setNavBarTheme(theme) {
        if (theme === 'themelight1') {
            this.navBarTheme = 'themelight1';
        }
        else {
            this.navBarTheme = 'theme1';
        }
    }
    /**
     * @param {?} actions
     * @return {?}
     */
    initToolbarItems(actions) {
        this.toolbarItems = actions.map((/**
         * @param {?} action
         * @return {?}
         */
        action => {
            switch (action) {
                case ToolbarAction.Save:
                    return new ButtonDefinition({ action: action, title: 'Lưu', style: 'primary', lazyload: true });
                case ToolbarAction.SaveAll:
                    return new ButtonDefinition({ action: action, title: 'Lưu tất cả', lazyload: true });
                case ToolbarAction.Cancel:
                    return new ButtonDefinition({ action: action, title: 'Hủy lưu' });
                case ToolbarAction.Back:
                    return new ButtonDefinition({ action: action, title: 'Quay lại' });
                case ToolbarAction.EditColumnOptions:
                    return new ButtonDefinition({ action: action, title: 'Quản lý cột' });
                case ToolbarAction.SaveAndNew:
                    return new ButtonDefinition({ action: action, title: 'Lưu và tạo mới', lazyload: true });
                case ToolbarAction.Reset:
                    return new ButtonDefinition({ action: action, title: 'Làm mới' });
            }
        }));
    }
    /**
     * @return {?}
     */
    getToolbarItems() {
        return this.toolbarItems;
    }
    /**
     * @return {?}
     */
    hasToolbarItems() {
        if (!this.toolbarItems)
            return false;
        return this.toolbarItems.length > 0;
    }
    /**
     * @param {?} image
     * @return {?}
     */
    showImage(image) {
        this._aggregatorService.publish(KeyConst.ViewImage, image);
    }
}
DefaultLayoutService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
DefaultLayoutService.ctorParameters = () => [
    { type: Router },
    { type: AggregatorService }
];
/** @nocollapse */ DefaultLayoutService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DefaultLayoutService_Factory() { return new DefaultLayoutService(ɵɵinject(Router), ɵɵinject(AggregatorService)); }, token: DefaultLayoutService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DefaultLayoutService.prototype.navType;
    /** @type {?} */
    DefaultLayoutService.prototype.themeLayout;
    /** @type {?} */
    DefaultLayoutService.prototype.layoutType;
    /** @type {?} */
    DefaultLayoutService.prototype.verticalPlacement;
    /** @type {?} */
    DefaultLayoutService.prototype.verticalLayout;
    /** @type {?} */
    DefaultLayoutService.prototype.deviceType;
    /** @type {?} */
    DefaultLayoutService.prototype.imgSrc;
    /** @type {?} */
    DefaultLayoutService.prototype.imgTitle;
    /** @type {?} */
    DefaultLayoutService.prototype.verticalNavType;
    /** @type {?} */
    DefaultLayoutService.prototype.verticalEffect;
    /** @type {?} */
    DefaultLayoutService.prototype.vNavigationView;
    /** @type {?} */
    DefaultLayoutService.prototype.pcodedHeaderPosition;
    /** @type {?} */
    DefaultLayoutService.prototype.pcodedSidebarPosition;
    /** @type {?} */
    DefaultLayoutService.prototype.headerTheme;
    /** @type {?} */
    DefaultLayoutService.prototype.logoTheme;
    /** @type {?} */
    DefaultLayoutService.prototype.innerHeight;
    /** @type {?} */
    DefaultLayoutService.prototype.windowWidth;
    /** @type {?} */
    DefaultLayoutService.prototype.toggleOn;
    /** @type {?} */
    DefaultLayoutService.prototype.headerFixedMargin;
    /** @type {?} */
    DefaultLayoutService.prototype.navBarTheme;
    /** @type {?} */
    DefaultLayoutService.prototype.activeItemTheme;
    /** @type {?} */
    DefaultLayoutService.prototype.isCollapsedMobile;
    /** @type {?} */
    DefaultLayoutService.prototype.chatToggle;
    /** @type {?} */
    DefaultLayoutService.prototype.chatToggleInverse;
    /** @type {?} */
    DefaultLayoutService.prototype.chatInnerToggle;
    /** @type {?} */
    DefaultLayoutService.prototype.chatInnerToggleInverse;
    /** @type {?} */
    DefaultLayoutService.prototype.menuTitleTheme;
    /** @type {?} */
    DefaultLayoutService.prototype.itemBorder;
    /** @type {?} */
    DefaultLayoutService.prototype.itemBorderStyle;
    /** @type {?} */
    DefaultLayoutService.prototype.subItemBorder;
    /** @type {?} */
    DefaultLayoutService.prototype.subItemIcon;
    /** @type {?} */
    DefaultLayoutService.prototype.dropDownIcon;
    /** @type {?} */
    DefaultLayoutService.prototype.isSidebarChecked;
    /** @type {?} */
    DefaultLayoutService.prototype.isHeaderChecked;
    /**
     * @type {?}
     * @private
     */
    DefaultLayoutService.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    DefaultLayoutService.prototype.toolbarItems;
    /**
     * @type {?}
     * @private
     */
    DefaultLayoutService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DefaultLayoutService.prototype._aggregatorService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AdminLayoutComponent {
    /**
     * @param {?} workspaceLayoutService
     * @param {?} route
     * @param {?} router
     * @param {?} actionService
     * @param {?} aggregatorService
     */
    constructor(workspaceLayoutService, route, router, actionService, aggregatorService) {
        this.workspaceLayoutService = workspaceLayoutService;
        this.route = route;
        this.router = router;
        this.actionService = actionService;
        this.aggregatorService = aggregatorService;
        this.notifications = [];
        this.logo = 'https://cmcglobal.com.vn/css/image-common/Combined%20Shape.svg';
        this.title = 'CMC Global - Aspire to inspire the Digital World';
        this.isModalShow = false;
        this.modalImageSrc = '';
        this.imageAltText = '';
        this.breadcrumbs = [];
        this.url = '/dashboard';
        this.breadcrumb = new Breadcrumb({
            label: 'Home',
            url: this.url
        });
    }
    ;
    /**
     * @return {?}
     */
    ngOnInit() {
        this.aggregatorService.subscribe(KeyConst.ViewImage, (/**
         * @param {?} image
         * @return {?}
         */
        (image) => {
            this.isModalShow = true;
            this.modalImageSrc = image.src;
            this.imageAltText = image.altText;
        }));
        this.route.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data) {
                this.menuTabs = (/** @type {?} */ (data.menuTabs));
                if (data.logo)
                    this.logo = (/** @type {?} */ (data.logo));
                if (data.title)
                    (/** @type {?} */ (data.title));
                if (data.url)
                    this.url = (/** @type {?} */ (data.url));
                if (data.breadcrumb) {
                    this.breadcrumb = (/** @type {?} */ (data.breadcrumb));
                }
                if (this.router.url == '/') {
                    this.router.navigate([this.url]);
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (event instanceof NavigationStart) {
                if (this.router.url == '/') {
                    this.router.navigate([this.url]);
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    closeImage() {
        this.isModalShow = false;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    changeMenu(items) {
        this.breadcrumbs = items;
        this.breadcrumbs.splice(0, 0, this.breadcrumb);
        this.aggregatorService.publish(KeyConst.MenuChanged, this.breadcrumbs);
    }
}
AdminLayoutComponent.decorators = [
    { type: Component, args: [{
                template: "<div class=\"pcoded\" [attr.nav-type]=\"workspaceLayoutService.navType\"\r\n  [attr.theme-layout]=\"workspaceLayoutService.themeLayout\" [attr.layout-type]=\"workspaceLayoutService.layoutType\"\r\n  [attr.vertical-placement]=\"workspaceLayoutService.verticalPlacement\"\r\n  [attr.vertical-layout]=\"workspaceLayoutService.verticalLayout\"\r\n  [attr.pcoded-device-type]=\"workspaceLayoutService.deviceType\"\r\n  [attr.vertical-nav-type]=\"workspaceLayoutService.verticalNavType\"\r\n  [attr.vertical-effect]=\"workspaceLayoutService.verticalEffect\"\r\n  [attr.vnavigation-view]=\"workspaceLayoutService.vNavigationView\"\r\n  (window:resize)=\"workspaceLayoutService.onResize($event)\">\r\n  <div class=\"pcoded-overlay-box\"></div>\r\n  <div class=\"img-viewer-container\">\r\n    <div (click)=\"closeImage()\" [class.show-now]=\"isModalShow\" class=\"modal\">\r\n      <div class=\"view-wrapper modal-content\">\r\n        <div class=\"adv-popup\">\r\n          <img *ngIf=\"modalImageSrc\" [src]=\"modalImageSrc\">\r\n          <button class=\"btn-close-image\"><i class=\"fa fa-close-line\"></i></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"pcoded-container navbar-wrapper\">\r\n    <default-header [notifications]=\"notifications\" [logo]=\"logo\" [title]=\"title\"></default-header>\r\n    <div class=\"pcoded-main-container\" [style.margin-top]=\"workspaceLayoutService.headerFixedMargin\">\r\n      <div class=\"pcoded-wrapper\">\r\n        <default-sidebar *ngIf=\"menuTabs\" (change)=\"changeMenu($event)\" [menuTabs]=\"menuTabs\"></default-sidebar>\r\n        <div class=\"pcoded-content\">\r\n          <div class=\"pcoded-inner-content\">\r\n            <default-navbar [url]=\"url\" [breadcrumb]=\"breadcrumb\" [menuTabs]=\"menuTabs\" [items]=\"breadcrumbs\"></default-navbar>\r\n            <div class=\"main-body\">\r\n              <div class=\"page-wrapper\">\r\n                <div class=\"page-body\">\r\n                  <katana-card>\r\n                    <router-outlet>\r\n                      <katana-spinner></katana-spinner>\r\n                    </router-outlet>\r\n                  </katana-card>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <default-toolbar></default-toolbar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"
            }] }
];
/** @nocollapse */
AdminLayoutComponent.ctorParameters = () => [
    { type: DefaultLayoutService },
    { type: ActivatedRoute },
    { type: Router },
    { type: ActionService },
    { type: AggregatorService }
];
if (false) {
    /** @type {?} */
    AdminLayoutComponent.prototype.notifications;
    /** @type {?} */
    AdminLayoutComponent.prototype.logo;
    /** @type {?} */
    AdminLayoutComponent.prototype.title;
    /** @type {?} */
    AdminLayoutComponent.prototype.menuTabs;
    /** @type {?} */
    AdminLayoutComponent.prototype.isModalShow;
    /** @type {?} */
    AdminLayoutComponent.prototype.modalImageSrc;
    /** @type {?} */
    AdminLayoutComponent.prototype.imageAltText;
    /** @type {?} */
    AdminLayoutComponent.prototype.breadcrumbs;
    /** @type {?} */
    AdminLayoutComponent.prototype.breadcrumb;
    /** @type {?} */
    AdminLayoutComponent.prototype.url;
    /** @type {?} */
    AdminLayoutComponent.prototype.workspaceLayoutService;
    /** @type {?} */
    AdminLayoutComponent.prototype.route;
    /**
     * @type {?}
     * @protected
     */
    AdminLayoutComponent.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    AdminLayoutComponent.prototype.actionService;
    /**
     * @type {?}
     * @protected
     */
    AdminLayoutComponent.prototype.aggregatorService;
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultBreadcrumbsComponent {
    /**
     * @param {?} aggregatorService
     * @param {?} actionService
     */
    constructor(aggregatorService, actionService) {
        this.aggregatorService = aggregatorService;
        this.actionService = actionService;
        this.change = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.aggregatorService.subscribe(KeyConst.MenuChanged, (/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            this.items = items;
        }));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectItem(item) {
        if (!this.items || this.items.length == 0)
            return;
        /** @type {?} */
        var index = this.items.findIndex((/**
         * @param {?} s
         * @return {?}
         */
        s => s.label == item.label));
        if (index == -1)
            return;
        /** @type {?} */
        var data = [];
        for (let i = 0; i < this.items.length; i++) {
            data.push(this.items[i]);
            if (this.items[i].label == item.label)
                break;
        }
        /** @type {?} */
        var child = this.actionService.retrieveChild(item.state, this.menuTabs);
        if (child) {
            data.push(child);
        }
        this.items = data;
        this.aggregatorService.publish(KeyConst.MenuChanged, this.items);
    }
}
DefaultBreadcrumbsComponent.decorators = [
    { type: Component, args: [{
                selector: 'default-breadcrumbs',
                template: "<ol class=\"breadcrumb\">\r\n    <li *ngFor=\"let breadcrumb of items; let i = index\" class=\"breadcrumb-item\">\r\n        <a *ngIf=\"i < items.length - 1\" (click)=\"selectItem(breadcrumb)\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label}}</a>\r\n        <a style=\"pointer-events: none;\" *ngIf=\"i == items.length - 1\">{{breadcrumb.label}}</a>\r\n    </li>\r\n</ol>",
                encapsulation: ViewEncapsulation.None,
                styles: ["@charset \"UTF-8\";.breadcrumb{display:flex;flex-wrap:wrap;padding:.15rem 0;list-style:none;margin-bottom:0}.breadcrumb-item a,.breadcrumb-item span{font-size:12px!important}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;padding-left:.5rem;color:#87837b;content:\"\uF105\";font:14px/1 FontAwesome}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#87837b}"]
            }] }
];
/** @nocollapse */
DefaultBreadcrumbsComponent.ctorParameters = () => [
    { type: AggregatorService },
    { type: ActionService }
];
DefaultBreadcrumbsComponent.propDecorators = {
    items: [{ type: Input }],
    menuTabs: [{ type: Input }],
    change: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DefaultBreadcrumbsComponent.prototype.items;
    /** @type {?} */
    DefaultBreadcrumbsComponent.prototype.menuTabs;
    /** @type {?} */
    DefaultBreadcrumbsComponent.prototype.change;
    /**
     * @type {?}
     * @protected
     */
    DefaultBreadcrumbsComponent.prototype.aggregatorService;
    /**
     * @type {?}
     * @protected
     */
    DefaultBreadcrumbsComponent.prototype.actionService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultCustomizerComponent {
    /**
     * @param {?} workspaceLayoutService
     */
    constructor(workspaceLayoutService) {
        this.workspaceLayoutService = workspaceLayoutService;
    }
    /**
     * @return {?}
     */
    toggleRightbar() {
        this.configOpenRightBar = this.configOpenRightBar === 'open' ? '' : 'open';
    }
}
DefaultCustomizerComponent.decorators = [
    { type: Component, args: [{
                selector: 'default-customizer',
                template: "<div id=\"styleSelector\" class=\"{{configOpenRightBar}}\">\r\n    <div class=\"selector-toggle\">\r\n        <a href=\"javascript:\" (click)=\"toggleRightbar()\"></a>\r\n    </div>\r\n    <ul>\r\n        <li>\r\n            <p class=\"selector-title main-title st-main-title\">Guru able Customizer</p>\r\n            <span class=\"text-muted\">Live customizer with tons of options</span>\r\n        </li>\r\n        <li>\r\n            <p class=\"selector-title\">Main layouts</p>\r\n        </li>\r\n        <li>\r\n            <div class=\"theme-color\">\r\n                <a href=\"javascript:\" (click)=\"workspaceLayoutService.setNavBarTheme('themelight1')\" navbar-theme=\"themelight1\">\r\n                    <span class=\"head\"></span>\r\n                    <span class=\"cont\"></span>\r\n                </a>\r\n                <a href=\"javascript:\" (click)=\"workspaceLayoutService.setNavBarTheme('theme1')\" navbar-theme=\"theme1\">\r\n                    <span class=\"head\"></span>\r\n                    <span class=\"cont\"></span>\r\n                </a>\r\n                <a href=\"javascript:\" (click)=\"workspaceLayoutService.setLayoutType('light')\" layout-type=\"light\">\r\n                    <span class=\"head\"></span>\r\n                    <span class=\"cont\"></span>\r\n                </a>\r\n                <a href=\"javascript:\" (click)=\"workspaceLayoutService.setLayoutType('dark')\" layout-type=\"dark\">\r\n                    <span class=\"head\"></span>\r\n                    <span class=\"cont\"></span>\r\n                </a>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>",
                animations: [
                    trigger('fadeInOutTranslate', [
                        transition(':enter', [
                            style({ opacity: 0 }),
                            animate('400ms ease-in-out', style({ opacity: 1 }))
                        ]),
                        transition(':leave', [
                            style({ transform: 'translate(0)' }),
                            animate('400ms ease-in-out', style({ opacity: 0 }))
                        ])
                    ])
                ]
            }] }
];
/** @nocollapse */
DefaultCustomizerComponent.ctorParameters = () => [
    { type: DefaultLayoutService }
];
if (false) {
    /** @type {?} */
    DefaultCustomizerComponent.prototype.configOpenRightBar;
    /** @type {?} */
    DefaultCustomizerComponent.prototype.workspaceLayoutService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultFooterComponent {
    constructor() { }
}
DefaultFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'default-footer',
                template: "Footer\r\n<div class=\"d-flex\">\r\n    <div class=\"mr-auto p-l-5\">\r\n        Site summary\r\n    </div>\r\n</div>"
            }] }
];
/** @nocollapse */
DefaultFooterComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultHeaderComponent {
    /**
     * @param {?} layoutService
     * @param {?} router
     * @param {?} route
     * @param {?} actionService
     * @param {?} aggregatorService
     * @param {?} authenticationService
     */
    constructor(layoutService, router, route, actionService, aggregatorService, authenticationService) {
        this.layoutService = layoutService;
        this.router = router;
        this.route = route;
        this.actionService = actionService;
        this.aggregatorService = aggregatorService;
        this.authenticationService = authenticationService;
        this.notifications = [];
        this.loading = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isMobile = this.actionService.isMobile();
        if (this.isMobile) {
            this.toggleMenu();
        }
        this.user = this.authenticationService.currentUser;
        this.user = new UserViewModel({
            fullName: 'Nguyễn Trung Hiếu - CMC Global SA',
            userName: 'nthieu4',
            image: new FileViewModel({
                src: 'https://img.icons8.com/cotton/64/000000/user-female--v3.png'
            })
        });
    }
    /**
     * @return {?}
     */
    toggleMenu() {
        if (this.layoutService.verticalEffect == 'overlay') {
            this.layoutService.verticalEffect = 'shrink';
        }
        else {
            this.layoutService.verticalEffect = 'overlay';
        }
    }
    /**
     * @return {?}
     */
    logout() {
        this.authenticationService.logout();
    }
}
DefaultHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'default-header',
                template: "<nav class=\"navbar header-navbar pcoded-header header-workspace\"\r\n  [attr.pcoded-header-position]=\"layoutService.pcodedHeaderPosition\" [attr.header-theme]=\"layoutService.headerTheme\">\r\n  <div class=\"navbar-wrapper\">\r\n    <div class=\"navbar-container-right\">\r\n      <a class=\"btn-show-hide-menu ml-1\" (click)=\"toggleMenu()\" href=\"javascript:;\"><i class=\"fa fa-bars\"\r\n          aria-hidden=\"true\"></i>\r\n      </a>\r\n    </div>\r\n    <div class=\"navbar-logo\" [attr.logo-theme]=\"layoutService.logoTheme\">\r\n      <a class=\"logo--wrapper\" [routerLink]=\"['/']\">\r\n        <ng-container *ngIf=\"logo\">\r\n          <img class=\"text-logo\" [src]=\"logo\" alt=\"\" [title]=\"title\">\r\n        </ng-container>\r\n      </a>\r\n    </div>\r\n    <ng-container *ngIf=\"!isMobile; else mobileActions\">\r\n      <div class=\"navbar-container ml-auto\">\r\n        <ul class=\"nav-left\">\r\n        </ul>\r\n        <ul class=\"nav-right\" [ngClass]=\"layoutService.isCollapsedMobile\">\r\n          <li>\r\n            <div class=\"row form search-bar form-inline\">\r\n              <div class=\"flex-custom\">\r\n                <div class=\"form-group search-input-wrapper\">\r\n                  <span class=\"search-icon\">\r\n                    <i class=\"fa fa-search\"></i>\r\n                  </span>\r\n                  <input spellcheck=\"false\" [(ngModel)]=\"filter\" type=\"text\" class=\"form-control search-input\"\r\n                    [placeholder]=\"'T\u00ECm ki\u1EBFm...'\">\r\n                  <span class=\"search-reset\" *ngIf=\"filter\">\r\n                    <i *ngIf=\"loading\" class=\"fa fa-spinner rotate-refresh\"></i>\r\n                    <i *ngIf=\"!loading\" class=\"fa fa-times-circle\" (click)=\"filter= ''\"></i>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"header-notification\">\r\n            <a href=\"javascript:;\">\r\n              <i class=\"fa fa-bell bell icon-noti\"></i>\r\n              <span class=\"badge\">1</span>\r\n            </a>\r\n            <div class=\"notify--wrapper\">\r\n              <h6 class=\"m-b-0 text-font-13\">\r\n                <a href=\"javascript:;\" class=\"text-primary text-font-13\">1 Th\u00F4ng\r\n                  b\u00E1o ch\u01B0a \u0111\u1ECDc</a>\r\n              </h6>\r\n              <ul class=\"list-unstyled\">\r\n                <li class=\"w-100\" *ngFor=\"let notification of notifications\">\r\n                  <a href=\"javascript:;\">\r\n                    <p class=\"text-bold mb-1\">FW4C \u0111\u00E3 \u0111\u01B0\u1EE3c kh\u1EDFi t\u1EA1o</p>\r\n                    <p class=\"time m-0\">\r\n                      <i class=\"icofont icofont-clock-time\"></i>25/10/2019\r\n                    </p>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n              <h6 class=\"text-center p-2 view-all-noti m-0\">\r\n                <a href=\"javascript:;\" class=\"text-primary text-font-13 link-view-more\">\r\n                  Xem t\u1EA5t c\u1EA3\r\n                </a>\r\n              </h6>\r\n            </div>\r\n          </li>\r\n          <li class=\"user-profile header-notification\" *ngIf=\"user\">\r\n            <a [routerLink]=\"['/']\">\r\n              <img [hidden]=\"!user?.image?.src\" [src]=\"user?.image?.src\" alt=\"\" srcset=\"\"\r\n                style=\"border: 2px solid #ffffff; background: #f8f8f8; width: auto; height: 25px; width: 25px; border-radius: 50%;\">\r\n              <span [hidden]=\"user?.image?.src\" class=\"ava\"\r\n                [attr.data-letters]=\"(user.lastName | slice:0:1) + (user.firstName | slice:0:1)\"></span>\r\n              <span style=\"font-weight: normal;\">{{user.fullName}}</span>\r\n              <i class=\"ti-angle-down\"></i>\r\n            </a>\r\n            <div style=\"margin-top: 2px;\" class=\"user-list-option--wrapper\">\r\n              <ul class=\"show-notification profile-notification\">\r\n                <li class=\"p-0\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"logout()\">\r\n                    <i></i>T\u00E0i kho\u1EA3n</a>\r\n                </li>\r\n                <li class=\"p-0\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"logout()\">\r\n                    <i></i>Tho\u00E1t</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</nav>\r\n<ng-template #mobileActions>\r\n  <div class=\"navbar-container-mobile ml-auto \">\r\n    <div class=\"header-notification d-flex align-items-center\">\r\n      <img [hidden]=\"!user?.image?.src \" [src]=\"user?.image?.src\" alt=\"\" srcset=\"\"\r\n        style=\" width:32px ;   border: 2px solid #ffffff;  border-radius: 50%; background: #f8f8f8;\">\r\n      <span [hidden]=\"user?.image?.src\" class=\"ava\"\r\n        [attr.data-letters]=\"(user.lastName | slice:0:1) + (user.firstName | slice:0:1)\"></span>\r\n      <i class=\"text-white ti-angle-down\"></i>\r\n      <div class=\"user-list-option--wrapper\">\r\n        <ul class=\"show-notification profile-notification m-0\">\r\n          <li><a class=\"p-0\" [routerLink]=\"['/user-profile']\">H\u1ED3 s\u01A1 c\u00E1 nh\u00E2n</a></li>\r\n          <li><a href=\"javascript:void(0)\" (click)=\"logout()\"><i class=\"ti-layout-sidebar-left\"></i>Tho\u00E1t</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                styles: ["a{text-decoration:none}.header-notification .text-white{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;white-space:normal}.header-notification .text-white.ti-angle-down{padding:0 8px;line-height:40px}span.ava[data-letters]:before{content:attr(data-letters);display:inline-block;font-size:1em;width:35px;height:35px;line-height:35px;text-align:center;border-radius:50%;background:#f8f8f8;vertical-align:middle;margin-right:.3em;color:#a9a9a9}.navbar-wrapper{height:57px}"]
            }] }
];
/** @nocollapse */
DefaultHeaderComponent.ctorParameters = () => [
    { type: DefaultLayoutService },
    { type: Router },
    { type: ActivatedRoute },
    { type: ActionService },
    { type: AggregatorService },
    { type: AuthenticationService }
];
DefaultHeaderComponent.propDecorators = {
    notifications: [{ type: Input }],
    logo: [{ type: Input }],
    title: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DefaultHeaderComponent.prototype.notifications;
    /** @type {?} */
    DefaultHeaderComponent.prototype.logo;
    /** @type {?} */
    DefaultHeaderComponent.prototype.title;
    /** @type {?} */
    DefaultHeaderComponent.prototype.loading;
    /** @type {?} */
    DefaultHeaderComponent.prototype.filter;
    /** @type {?} */
    DefaultHeaderComponent.prototype.user;
    /** @type {?} */
    DefaultHeaderComponent.prototype.isMobile;
    /** @type {?} */
    DefaultHeaderComponent.prototype.layoutService;
    /**
     * @type {?}
     * @protected
     */
    DefaultHeaderComponent.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    DefaultHeaderComponent.prototype.route;
    /**
     * @type {?}
     * @protected
     */
    DefaultHeaderComponent.prototype.actionService;
    /**
     * @type {?}
     * @protected
     */
    DefaultHeaderComponent.prototype.aggregatorService;
    /**
     * @type {?}
     * @protected
     */
    DefaultHeaderComponent.prototype.authenticationService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultNavBarComponent {
    /**
     * @param {?} _actionService
     * @param {?} _router
     * @param {?} aggregatorService
     */
    constructor(_actionService, _router, aggregatorService) {
        this._actionService = _actionService;
        this._router = _router;
        this.aggregatorService = aggregatorService;
        this.hideBreadcrumbsSection = false;
        this.menuTabs = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.items || this.items.length == 0) {
            if (this.menuTabs.length > 0) {
                /** @type {?} */
                var data = this._router.url;
                /** @type {?} */
                var states = data.split('/');
                if (states.length > 0) {
                    /** @type {?} */
                    var state = states[states.length - 1];
                    if (!state && this.url) {
                        data = this.url;
                        states = data.split('/');
                        state = states[states.length - 1];
                    }
                    if (state) {
                        /** @type {?} */
                        var name = this._actionService.retrieveStateName(state, this.menuTabs);
                        this._actionService.changeItem({ state: state, name: name }, this.menuTabs, (/**
                         * @param {?} items
                         * @return {?}
                         */
                        (items) => {
                            this.items = items;
                            this.items.splice(0, 0, this.breadcrumb);
                        }));
                    }
                }
            }
        }
        this.aggregatorService.subscribe(KeyConst.MenuChanged, (/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            this.items = items;
        }));
    }
    /**
     * @return {?}
     */
    retrieveCurrentItem() {
        if (!this.items || this.items.length == 0)
            return null;
        return this.items[this.items.length - 1];
    }
}
DefaultNavBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'default-navbar',
                template: "<div *ngIf=\"!hideBreadcrumbsSection\" class=\"d-flex align-items-center breadcrumbs-wrapper\">\r\n  <div class=\"d-none d-sm-block\">\r\n    <h5 class=\"m-0 784title text-uppercase\">{{retrieveCurrentItem()?.label}}</h5>\r\n  </div>\r\n  <div class=\"ml-auto d-flex align-items-center\">\r\n    <i class=\"icofont icofont-home mr-1 text-primary f-16\"></i>\r\n    <default-breadcrumbs [menuTabs]=\"menuTabs\" [items]=\"items\"></default-breadcrumbs>\r\n  </div>\r\n</div>"
            }] }
];
/** @nocollapse */
DefaultNavBarComponent.ctorParameters = () => [
    { type: ActionService },
    { type: Router },
    { type: AggregatorService }
];
DefaultNavBarComponent.propDecorators = {
    hideBreadcrumbsSection: [{ type: Input }],
    items: [{ type: Input }],
    menuTabs: [{ type: Input }],
    url: [{ type: Input }],
    breadcrumb: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DefaultNavBarComponent.prototype.hideBreadcrumbsSection;
    /** @type {?} */
    DefaultNavBarComponent.prototype.items;
    /** @type {?} */
    DefaultNavBarComponent.prototype.menuTabs;
    /** @type {?} */
    DefaultNavBarComponent.prototype.url;
    /** @type {?} */
    DefaultNavBarComponent.prototype.breadcrumb;
    /**
     * @type {?}
     * @private
     */
    DefaultNavBarComponent.prototype._actionService;
    /**
     * @type {?}
     * @private
     */
    DefaultNavBarComponent.prototype._router;
    /**
     * @type {?}
     * @protected
     */
    DefaultNavBarComponent.prototype.aggregatorService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultSidebarComponent {
    /**
     * @param {?} workspaceLayoutService
     * @param {?} route
     * @param {?} router
     * @param {?} menuService
     * @param {?} actionService
     */
    constructor(workspaceLayoutService, route, router, menuService, actionService) {
        this.workspaceLayoutService = workspaceLayoutService;
        this.route = route;
        this.router = router;
        this.menuService = menuService;
        this.actionService = actionService;
        this.menuTabs = [];
        this.change = new EventEmitter();
        this.menuItems = [];
        this.collapsedItems = [];
        this.isSupplier = false;
        this.tabs = [];
        this.isPageLoad = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.actionService.executeAsync((/**
         * @return {?}
         */
        () => {
            this.menuService.init(this.menuTabs, (/**
             * @return {?}
             */
            () => {
                this.tabs = this.menuService.getTabs();
                this.currentUrl = this.tabs[0].menu;
                this.menuItems = this.menuService.loadFirstTabItems(this.currentUrl);
                this.actionService.executeAsync((/**
                 * @return {?}
                 */
                () => {
                    this.isCollapsedSideBar = 'no-block';
                }));
            }), this.set);
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.navigateTo) {
            this.navigateTo = (/**
             * @param {?} menu
             * @param {?} router
             * @return {?}
             */
            (menu, router) => {
                router.navigate(['/', menu, 'dashboard']);
            });
        }
        this.isMobile = this.actionService.isMobile();
        if (this.isMobile) {
            if (this.workspaceLayoutService.verticalEffect == 'overlay') {
                this.workspaceLayoutService.verticalEffect = 'shrink';
            }
            else {
                this.workspaceLayoutService.verticalEffect = 'overlay';
            }
        }
    }
    /**
     * @return {?}
     */
    toggleMenu() {
        if (this.isMobile) {
            if (this.workspaceLayoutService.verticalEffect == 'overlay') {
                this.workspaceLayoutService.verticalEffect = 'shrink';
            }
            else {
                this.workspaceLayoutService.verticalEffect = 'overlay';
            }
        }
    }
    /**
     * @return {?}
     */
    removeActiveStateNavigationMenu() {
        /** @type {?} */
        let navigationLevelArr = document.querySelectorAll(".pcoded-left-item--wrapper .pcoded-navigatio-lavel");
        for (let i = 0; i < navigationLevelArr.length; i++) {
            navigationLevelArr[i].classList.remove("active");
        }
        /** @type {?} */
        let subMenuLevelArr = document.querySelectorAll(".pcoded-left-item--wrapper .pcoded-left-item");
        for (let i = 0; i < subMenuLevelArr.length; i++) {
            subMenuLevelArr[i].classList.remove("active");
        }
        /** @type {?} */
        let mainContentWrapper = document.querySelector(".pcoded-main-container .pcoded-content");
        mainContentWrapper.classList.remove("active");
    }
    /**
     * @param {?} group
     * @param {?} $event
     * @return {?}
     */
    toggleGroup(group, $event) {
        if (event != null || event != undefined) {
            /** @type {?} */
            let target = $event.target || $event.srcElement || $event.currentTarget;
            /** @type {?} */
            let curNavigationLevel = target.closest(".pcoded-navigatio-lavel");
            if (curNavigationLevel.classList.contains("active")) {
                this.removeActiveStateNavigationMenu();
            }
            else {
                this.removeActiveStateNavigationMenu();
                /** @type {?} */
                let listChildrenItemInTarget = target.closest(".pcoded-left-item--wrapper").children;
                for (let i = 0; i < listChildrenItemInTarget.length; i++) {
                    if (listChildrenItemInTarget[i].classList.contains("pcoded-left-item")) {
                        listChildrenItemInTarget[i].classList.add("active");
                    }
                }
                target.closest(".pcoded-navigatio-lavel").classList.toggle("active");
                /** @type {?} */
                let mainContentWrapper = document.querySelector(".pcoded-main-container .pcoded-content");
                mainContentWrapper.classList.add("active");
            }
        }
        /** @type {?} */
        const index = this.collapsedItems.indexOf(group);
        if (index >= 0) {
            this.collapsedItems.splice(index, 1);
        }
        else {
            this.collapsedItems.push(group);
        }
    }
    /**
     * @param {?} group
     * @return {?}
     */
    isGroupCollapsed(group) {
        return this.collapsedItems.indexOf(group) >= 0;
    }
    /**
     * @return {?}
     */
    toggleOpenedSidebar() {
        this.isCollapsedSideBar = this.isCollapsedSideBar === 'yes-block' ? 'no-block' : 'yes-block';
    }
    /**
     * @param {?} menu
     * @return {?}
     */
    loadMenu(menu) {
        this.menuItems = this.menuService.loadMenuItems(menu);
        this.currentUrl = menu.toLocaleLowerCase();
        this.navigateTo(this.currentUrl, this.router);
    }
    /**
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    selectItem($event, item) {
        /** @type {?} */
        let naviLevelAll = document.querySelectorAll(".pcoded-navigatio-lavel");
        for (let i = 0; i < naviLevelAll.length; i++) {
            naviLevelAll[i].classList.remove("active");
        }
        /** @type {?} */
        let target = $event.target || $event.srcElement || $event.currentTarget;
        target.closest(".pcoded-left-item--wrapper").classList.add("active");
        /** @type {?} */
        let listChildrenItemInTarget = target.closest(".pcoded-left-item--wrapper").children;
        for (let i = 0; i < listChildrenItemInTarget.length; i++) {
            if (listChildrenItemInTarget[i].classList.contains("pcoded-navigatio-lavel")) {
                listChildrenItemInTarget[i].classList.add("active");
            }
        }
        this.changeItem(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    changeItem(item) {
        this.actionService.changeItem(item, this.menuTabs, (/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            this.change.emit(items);
        }));
    }
}
DefaultSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'default-sidebar',
                template: "<nav id=\"main_navbar\" class=\"pcoded-navbar workspace-side-bar\"\r\n    (clickOutside)=\"workspaceLayoutService.onClickedOutside($event)\" [exclude]=\"'#mobile-collapse'\"\r\n    [attr.pcoded-header-position]=\"workspaceLayoutService.pcodedHeaderPosition\"\r\n    [attr.navbar-theme]=\"workspaceLayoutService.navBarTheme\"\r\n    [attr.active-item-theme]=\"workspaceLayoutService.activeItemTheme\" sub-item-theme=\"theme2\" active-item-style=\"style0\"\r\n    [attr.pcoded-navbar-position]=\"workspaceLayoutService.pcodedSidebarPosition\">\r\n    <div class=\"pcoded-inner-navbar main-menu o-hidden pcoded-inner-navbar-workspace\" cAccordion>\r\n        <div width=\"100%\" height=\"calc(100% - 40px)\" size=\"4px\" color=\"#fff\" opacity=\"0.3\" allowPageScroll=\"false\">\r\n            <ul class=\"nav\">\r\n                <li class=\"nav-item\" *ngFor=\"let item of tabs; index as i\"\r\n                    [ngClass]=\"this.currentUrl.toLowerCase() === item.menu.toLowerCase() ? 'active-menu':''\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0);\" (click)=\"loadMenu(item.menu)\">\r\n                        <span>{{item.subName}}</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <div (mouseover)=\"clicked = false\" *ngFor=\"let asideItems of menuItems ; index as i\"\r\n                [ngStyle]=\"{'margin-top': i == 0 ? '1rem': '0'}\" class=\"d-color pcoded-left-item--wrapper\">\r\n                <a class=\"pcoded-navigatio-lavel d-flex align-items-center\" menu-title-theme=\"theme5\"\r\n                    href=\"javascript:void(0)\"\r\n                    routerLink=\"/{{asideItems?.children[0]?.mainState}}/{{asideItems?.children[0]?.state}}\"\r\n                    (click)=\"selectItem($event, asideItems?.children[0])\"\r\n                    *ngIf=\"asideItems.label || menuItems.length > 0\">\r\n                    <span class=\"pcoded-micon\" title=\"{{asideItems.label}}\">\r\n                        <i class=\"{{ asideItems.icon }}\"></i>\r\n                    </span>\r\n                    <span>{{asideItems.label}}</span>\r\n                    <i [hidden]=\"asideItems.children.length == 1\" class=\"show-sub icofont-thin-right icofont\"></i>\r\n                </a>\r\n                <ul *ngIf=\"asideItems.children.length > 1\" (mouseup)=\"clicked = true\" [hidden]=\"clicked\"\r\n                    class=\"pcoded-item pcoded-left-item\" item-border=\"true\" item-border-style=\"none\"\r\n                    subitem-border=\"true\" katanaAccordionLink>\r\n                    <ng-template ngFor let-asideItem [ngForOf]=\"asideItems.children\">\r\n                        <li [routerLinkActive]=\"['active']\" *ngIf=\"asideItem.type === 'link'\" katanaAccordionLink\r\n                            group=\"{{asideItem.state}}\" class=\"pcoded-left-item-child\" (click)=\"toggleMenu()\">\r\n                            <a routerLink=\"/{{asideItem.mainState}}/{{asideItem.state}}\"\r\n                                target=\"{{asideItem.target ? '_blank' : '_self'}}\" katanaAccordionToggle\r\n                                *ngIf=\"asideItem.mainState; else mainContent\"\r\n                                (click)=\"selectItem($event, asideItem)\">\r\n                                <span class=\"pcoded-micon\">\r\n                                    <i class=\"{{ asideItem.icon }}\"></i>\r\n                                    <b>{{ asideItem.shortLabel }}</b>\r\n                                </span>\r\n                                <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\r\n                            </a>\r\n                            <ng-template #mainContent>\r\n                                <a [routerLink]=\"[asideItem.state]\" target=\"{{asideItem.target ? '_blank' : '_self'}}\"\r\n                                    cAccordionToggle>\r\n                                    <span class=\"pcoded-micon\">\r\n                                        <i class=\"{{ asideItem.icon }}\"></i>\r\n                                        <b>{{ asideItem.shortLabel }}</b>\r\n                                    </span>\r\n                                    <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\r\n                                    <span *ngFor=\"let asideBadge of asideItem.badge\"\r\n                                        class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\r\n                                    <span class=\"pcoded-mcaret\"></span>\r\n                                </a>\r\n                            </ng-template>\r\n                        </li>\r\n                    </ng-template>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<div class=\"back-drop\" (click)=\"toggleMenu()\"></div>",
                styles: [".back-drop{display:none}@media (max-width:1024px){.back-drop{background:#000;opacity:.2;position:fixed;width:100%;height:100%;z-index:9}}"]
            }] }
];
/** @nocollapse */
DefaultSidebarComponent.ctorParameters = () => [
    { type: DefaultLayoutService },
    { type: ActivatedRoute },
    { type: Router },
    { type: MenuService },
    { type: ActionService }
];
DefaultSidebarComponent.propDecorators = {
    menuTabs: [{ type: Input }],
    navigateTo: [{ type: Input }],
    set: [{ type: Input }],
    change: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DefaultSidebarComponent.prototype.menuTabs;
    /** @type {?} */
    DefaultSidebarComponent.prototype.navigateTo;
    /** @type {?} */
    DefaultSidebarComponent.prototype.set;
    /** @type {?} */
    DefaultSidebarComponent.prototype.change;
    /** @type {?} */
    DefaultSidebarComponent.prototype.menuItems;
    /** @type {?} */
    DefaultSidebarComponent.prototype.isCollapsedSideBar;
    /** @type {?} */
    DefaultSidebarComponent.prototype.currentUrl;
    /** @type {?} */
    DefaultSidebarComponent.prototype.collapsedItems;
    /** @type {?} */
    DefaultSidebarComponent.prototype.isSupplier;
    /** @type {?} */
    DefaultSidebarComponent.prototype.tabs;
    /** @type {?} */
    DefaultSidebarComponent.prototype.carouselTile;
    /** @type {?} */
    DefaultSidebarComponent.prototype.isPageLoad;
    /** @type {?} */
    DefaultSidebarComponent.prototype.isMobile;
    /** @type {?} */
    DefaultSidebarComponent.prototype.clicked;
    /** @type {?} */
    DefaultSidebarComponent.prototype.workspaceLayoutService;
    /**
     * @type {?}
     * @protected
     */
    DefaultSidebarComponent.prototype.route;
    /**
     * @type {?}
     * @protected
     */
    DefaultSidebarComponent.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    DefaultSidebarComponent.prototype.menuService;
    /**
     * @type {?}
     * @protected
     */
    DefaultSidebarComponent.prototype.actionService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultToolbarComponent {
    /**
     * @param {?} layoutService
     * @param {?} _aggregatorService
     */
    constructor(layoutService, _aggregatorService) {
        this.layoutService = layoutService;
        this._aggregatorService = _aggregatorService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._aggregatorService.subscribe(KeyConst.PageChanged, (/**
         * @return {?}
         */
        () => {
            if (this.errorContainer) {
                this.errorContainer.clear();
            }
        }));
    }
    /**
     * @param {?} loadedCallback
     * @param {?} item
     * @return {?}
     */
    onButtonClicked(loadedCallback, item) {
        /** @type {?} */
        let payload = new ToolbarActionPayload({ action: item.action, loadedCallback: loadedCallback });
        if (item.action === ToolbarAction.Save) {
            payload.callback = (/**
             * @param {?} errors
             * @return {?}
             */
            (errors) => {
                this.errorContainer.clear();
                this.errorContainer.createEmbeddedView(this.errorTemplate, { errors: errors });
            });
        }
        this._aggregatorService.publish('ToolbarButtonClicked', payload);
    }
}
DefaultToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'default-toolbar',
                template: "<ng-container *ngIf=\"layoutService.hasToolbarItems()\">\r\n  <div class=\"action-bar-footer\">\r\n    <div class=\"action-bar\">\r\n      <ng-container #errorContainer></ng-container>\r\n      <ng-container *ngFor=\"let item of layoutService.getToolbarItems()\">\r\n        <ng-container [ngSwitch]=\"item.controlType\">\r\n          <ng-template ngSwitchDefault>\r\n            <katana-button [title]=\"item.title\" [lazyload]=\"item.lazyload\"\r\n              (clicked)=\"onButtonClicked($event, item)\" [customClass]=\"item.style\"></katana-button>\r\n          </ng-template>\r\n          <ng-template ngSwitchCase=\"'Textbox'\">\r\n          </ng-template>\r\n          <ng-template ngSwitchCase=\"'Dropdown'\">\r\n          </ng-template>\r\n        </ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #errorTemplate let-errors=\"errors\">\r\n    <div *ngIf=\"errors.length\" class=\"error-part\">\r\n      <label class=\"title\">Th\u00F4ng tin sau ch\u01B0a h\u1EE3p l\u1EC7</label>\r\n      <ul class=\"list-error\">\r\n        <li class=\"error-item\" *ngFor=\"let error of errors\">\r\n          <div class=\"small-item\" *ngFor=\"let item of error.messages\">\r\n            {{item}}\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </ng-template>\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DefaultToolbarComponent.ctorParameters = () => [
    { type: DefaultLayoutService },
    { type: AggregatorService }
];
DefaultToolbarComponent.propDecorators = {
    errorContainer: [{ type: ViewChild, args: ['errorContainer', { read: ViewContainerRef, static: true },] }],
    errorTemplate: [{ type: ViewChild, args: ['errorTemplate', { static: true },] }]
};
if (false) {
    /** @type {?} */
    DefaultToolbarComponent.prototype.errorContainer;
    /** @type {?} */
    DefaultToolbarComponent.prototype.errorTemplate;
    /** @type {?} */
    DefaultToolbarComponent.prototype.layoutService;
    /**
     * @type {?}
     * @private
     */
    DefaultToolbarComponent.prototype._aggregatorService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FloatingToolbarComponent {
    constructor() {
        this.show = false;
        this.widthProcess = 100;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    clickHide() {
        this.show = false;
    }
}
FloatingToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'floating-toolbar',
                template: "<div class=\"show-progress-loading\" [class.active]=\"show\">\r\n  <i class=\"fa fa-close icon-top-close\" (click)=\"clickHide()\"></i>\r\n  <div class=\"list-file-loading\">\r\n    <div class=\"file-item\">\r\n      <div class=\"progress\">\r\n        <div class=\"progress-bar progress-bar-warning progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"60\"\r\n          aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width.%]=\"widthProcess\">\r\n          100%\r\n        </div>\r\n      </div>\r\n      <div class=\"file-name\">13775992_268327703538306_4149251120615904572_n.jpg</div>\r\n    </div>\r\n    <div class=\"file-item\">\r\n      <div class=\"progress\">\r\n        <div class=\"progress-bar progress-bar-warning progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"60\"\r\n          aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width.%]=\"widthProcess\">\r\n          100%\r\n        </div>\r\n      </div>\r\n      <div class=\"file-name\">13775992_268327703538306_4149251120615904572_n.jpg</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                animations: [
                    trigger('show', [
                        state('true', style({
                            bottom: '15px',
                        })),
                        state('false', style({
                            bottom: '-100%',
                        })),
                        transition('0 <=> 1', [
                            animate('400ms ease-in-out')
                        ])
                    ]),
                ],
                styles: [""]
            }] }
];
/** @nocollapse */
FloatingToolbarComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    FloatingToolbarComponent.prototype.show;
    /** @type {?} */
    FloatingToolbarComponent.prototype.widthProcess;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LayoutModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: LayoutModule,
            providers: [
                DefaultLayoutService,
                AccordionDirective
            ]
        };
    }
}
LayoutModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AdminLayoutComponent,
                    DefaultBreadcrumbsComponent,
                    DefaultCustomizerComponent,
                    DefaultFooterComponent,
                    DefaultHeaderComponent,
                    DefaultNavBarComponent,
                    DefaultSidebarComponent,
                    DefaultToolbarComponent,
                    FloatingToolbarComponent
                ],
                imports: [
                    FormsModule,
                    CommonModule,
                    RouterModule,
                    SpinnerModule,
                    CardModule,
                    ClickOutsideModule,
                    FormatterModule,
                    AccordionModule,
                    ButtonModule
                ],
                exports: [
                    AdminLayoutComponent,
                    DefaultBreadcrumbsComponent,
                    DefaultCustomizerComponent,
                    DefaultFooterComponent,
                    DefaultHeaderComponent,
                    DefaultNavBarComponent,
                    DefaultSidebarComponent,
                    DefaultToolbarComponent,
                    FloatingToolbarComponent
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Framework4CModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: Framework4CModule,
            providers: [
                AggregatorService
            ]
        };
    }
}
Framework4CModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    BrowserModule,
                    BrowserAnimationsModule,
                    HttpClientModule,
                    TabModule,
                    EditorModule,
                    ButtonModule,
                    CardModule,
                    AccordionModule,
                    FormModule,
                    ClickOutsideModule,
                    SpinnerModule,
                    CardModule,
                    CheckboxModule,
                    TextboxModule,
                    TableModule,
                    FileModule,
                    MediaViewerModule,
                    ImageViewerModule,
                    ViewerModule,
                    RadioModule,
                    TimelineModule,
                    ChipModule,
                    PanelModule,
                    ListModule,
                    FormatterModule.forChild(),
                    ValidationModule.forRoot(),
                    CModalModule.forRoot(),
                    AuthModule.forRoot(),
                    DatetimePickerModule.forChild(),
                    LayoutModule.forRoot()
                ],
                exports: [
                    AuthModule,
                    TabModule,
                    CModalModule,
                    DatetimePickerModule,
                    EditorModule,
                    FormModule,
                    DropdownModule,
                    SpinnerModule,
                    CardModule,
                    ButtonModule,
                    AccordionModule,
                    CheckboxModule,
                    TextboxModule,
                    TableModule,
                    FileModule,
                    MediaViewerModule,
                    ImageViewerModule,
                    ViewerModule,
                    RadioModule,
                    TimelineModule,
                    ChipModule,
                    PanelModule,
                    ListModule
                ],
                providers: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AccordionAnchorDirective, AccordionDirective, AccordionLinkDirective, AccordionModule, ActionService, AdminLayoutComponent, AggregatorService, AggregatorViewModel, Audit, AuthComponent, AuthConst, AuthModule, AuthenticationCreateRequest, AuthenticationCreateResponse, AuthenticationDeleteRequest, AuthenticationDeleteResponse, AuthenticationLoginRequest, AuthenticationLoginResponse, AuthenticationRetrieveRequest, AuthenticationRetrieveResponse, AuthenticationSearchRequest, AuthenticationSearchResponse, AuthenticationService, AuthenticationUpdateRequest, AuthenticationUpdateResponse, AuthenticationViewModel, BadgePipe, BaseNotificationService, BaseRequest, BaseResponse, BaseTemplate, BreadCrumbItem, Breadcrumb, ButtonDefinition, CDatePipe, CDatetimePipe, CModalModule, CacheService, CardComponent, CardModule, CembedVideoPipe, ChangeType, ChangedItem, CheckboxComponent, CheckboxModule, ChipComponent, ChipModule, ClientValidator, ConfirmComponent, ConfirmViewModel, ControlType, CropperComponent, CropperModule, CurrencyPipe, CustomCurrencyMaskConfig, CustomValidationRule, DataService, DefaultBreadcrumbsComponent, DefaultCustomizerComponent, DefaultFooterComponent, DefaultHeaderComponent, DefaultLayoutService, DefaultNavBarComponent, DefaultSidebarComponent, DefaultToolbarComponent, DropdownComponent, DropdownModule, EditNotificationThreadViewModel, EditorAdapter, EditorComponent, EdittedField, EmailValidationRule, ExtendedMainMenuGroup, FileConst, FileModule, FilePipe, FileProvider, FileRequest, FileResponse, FileService, FileViewModel, FloatingToolbarComponent, FormComponent, FormDirectorComponent, FormDirectorExtraItemDirective, FormItemDirective, FormModule, FormatterModule, Framework4CModule, FullMediaComponent, GalleryComponent, GetLookupItemsRequest, GetLookupItemsResponse, HtmlPipe, ImageViewerComponent, ImageViewerModule, KbPipe, KeyConst, KeyValueItem, LayoutModule, ListComponent, ListItemDirective, ListModule, LoaderComponent, LoaderModule, LoaderProvider, LoadingComponent, LoadingViewModel, LookupItem, MarkAllNotificationsReadRequest, MarkAllNotificationsReadResponse, MediaItem, MediaViewerComponent, MediaViewerModule, MenuItem, MenuKey, MenuService, MenuTab, MockData, MockService, ModalService, ModalServiceConstant, NotificationComponent, NotificationDetail, NotificationDetailGroup, NotificationTemplateVariable, NotificationType, NotificationViewModel, NumberPipe, ObjectChange, PageModule, PanelComponent, PanelHeaderDirective, PanelModule, PhoneValidationRule, RadioComponent, RadioItemComponent, RadioModule, RegisterChannelRequest, RegisterChannelResponse, RemoveNotificationDetailGroupType, RemoveNotificationDetailRequest, RemoveNotificationDetailResponse, RequiredValidationRule, RetrieveNotificationDetailRequest, RetrieveNotificationDetailResponse, RetrieveNotificationThreadRequest, RetrieveNotificationThreadResponse, SafePipe, SearchBaseRequest, SearchBaseResponse, SearchInboxNotificationsRequest, SearchInboxNotificationsResponse, SendLiveNotificationRequest, SendNotificationRequest, SendNotificationResponse, SettingItemViewModel, SettingSearchRequest, SettingSearchResponse, SettingService, SpinnerComponent, SpinnerModule, SummaryError, TabItemComponent, TableAction, TableColumn, TableColumnType, TableComponent, TableConstant, TableDatetimeFormat, TableMessage, TableMode, TableModule, TableOption, TableRowDetailDirective, TableSorter, TableText, TemplateComponent, TemplateViewModel, TextboxComponent, TextboxModule, TimePipe, TimelineComponent, TimelineModule, ToolbarAction, ToolbarActionPayload, TrackingDetail, TrackingGroup, UploaderComponent, UserViewModel, UtilityService, ValidationConstant, ValidationModule, ValidationOption, ValidationProvider, ValidationRule, ValidationRuleResponse, ValidationService, ViewerComponent, ViewerModule, fadeDownInOut, fadeInOut, fadeRightInOut };
//# sourceMappingURL=ngx-fw4c.js.map
