/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @template T
 */
var /**
 * @template T
 */
MockData = /** @class */ (function () {
    function MockData(init) {
        Object.assign(this, init);
    }
    ;
    return MockData;
}());
/**
 * @template T
 */
export { MockData };
if (false) {
    /** @type {?} */
    MockData.prototype.mockData;
    /* Skipping unhandled member: ;*/
}
/**
 * @template T
 */
var /**
 * @template T
 */
BaseRequest = /** @class */ (function (_super) {
    tslib_1.__extends(BaseRequest, _super);
    function BaseRequest(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    ;
    return BaseRequest;
}(MockData));
/**
 * @template T
 */
export { BaseRequest };
if (false) {
    /** @type {?} */
    BaseRequest.prototype.payload;
    /* Skipping unhandled member: ;*/
}
/**
 * @template T
 */
var /**
 * @template T
 */
BaseResponse = /** @class */ (function () {
    function BaseResponse(init) {
        Object.assign(this, init);
    }
    ;
    return BaseResponse;
}());
/**
 * @template T
 */
export { BaseResponse };
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
var SearchBaseRequest = /** @class */ (function (_super) {
    tslib_1.__extends(SearchBaseRequest, _super);
    function SearchBaseRequest(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    ;
    return SearchBaseRequest;
}(MockData));
export { SearchBaseRequest };
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
var /**
 * @template T
 */
SearchBaseResponse = /** @class */ (function () {
    function SearchBaseResponse(init) {
        Object.assign(this, init);
    }
    ;
    return SearchBaseResponse;
}());
/**
 * @template T
 */
export { SearchBaseResponse };
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
var BaseTemplate = /** @class */ (function () {
    function BaseTemplate(init) {
        Object.assign(this, init);
    }
    ;
    return BaseTemplate;
}());
export { BaseTemplate };
if (false) {
    /** @type {?} */
    BaseTemplate.prototype.data;
    /** @type {?} */
    BaseTemplate.prototype.template;
    /* Skipping unhandled member: ;*/
}
var AggregatorViewModel = /** @class */ (function () {
    function AggregatorViewModel(init) {
        Object.assign(this, init);
    }
    ;
    return AggregatorViewModel;
}());
export { AggregatorViewModel };
if (false) {
    /** @type {?} */
    AggregatorViewModel.prototype.value;
    /** @type {?} */
    AggregatorViewModel.prototype.key;
    /** @type {?} */
    AggregatorViewModel.prototype.currentEmitter;
    /* Skipping unhandled member: ;*/
}
var ButtonDefinition = /** @class */ (function () {
    function ButtonDefinition(init) {
        this.style = 'default';
        Object.assign(this, init);
    }
    return ButtonDefinition;
}());
export { ButtonDefinition };
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
var ToolbarActionPayload = /** @class */ (function () {
    function ToolbarActionPayload(init) {
        Object.assign(this, init);
    }
    return ToolbarActionPayload;
}());
export { ToolbarActionPayload };
if (false) {
    /** @type {?} */
    ToolbarActionPayload.prototype.loadedCallback;
    /** @type {?} */
    ToolbarActionPayload.prototype.action;
    /** @type {?} */
    ToolbarActionPayload.prototype.callback;
}
var ObjectChange = /** @class */ (function () {
    function ObjectChange(init) {
        Object.assign(this, init);
    }
    return ObjectChange;
}());
export { ObjectChange };
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
var LookupItem = /** @class */ (function () {
    function LookupItem(init) {
        Object.assign(this, init);
    }
    return LookupItem;
}());
export { LookupItem };
if (false) {
    /** @type {?} */
    LookupItem.prototype.name;
    /** @type {?} */
    LookupItem.prototype.key;
}
var ExtendedMainMenuGroup = /** @class */ (function () {
    function ExtendedMainMenuGroup(init) {
        Object.assign(this, init);
    }
    return ExtendedMainMenuGroup;
}());
export { ExtendedMainMenuGroup };
if (false) {
    /** @type {?} */
    ExtendedMainMenuGroup.prototype.label;
    /** @type {?} */
    ExtendedMainMenuGroup.prototype.children;
    /** @type {?} */
    ExtendedMainMenuGroup.prototype.icon;
}
var KeyValueItem = /** @class */ (function () {
    function KeyValueItem(init) {
        Object.assign(this, init);
    }
    return KeyValueItem;
}());
export { KeyValueItem };
if (false) {
    /** @type {?} */
    KeyValueItem.prototype.key;
    /** @type {?} */
    KeyValueItem.prototype.value;
}
var BreadCrumbItem = /** @class */ (function () {
    function BreadCrumbItem(init) {
        Object.assign(this, init);
    }
    return BreadCrumbItem;
}());
export { BreadCrumbItem };
if (false) {
    /** @type {?} */
    BreadCrumbItem.prototype.label;
    /** @type {?} */
    BreadCrumbItem.prototype.url;
}
var ControlType = /** @class */ (function () {
    function ControlType(init) {
        Object.assign(this, init);
    }
    ControlType.Textbox = 'Textbox';
    ControlType.Dropdown = 'Dropdown';
    ControlType.Button = 'Button';
    return ControlType;
}());
export { ControlType };
if (false) {
    /** @type {?} */
    ControlType.Textbox;
    /** @type {?} */
    ControlType.Dropdown;
    /** @type {?} */
    ControlType.Button;
}
var MenuTab = /** @class */ (function () {
    function MenuTab(init) {
        Object.assign(this, init);
    }
    return MenuTab;
}());
export { MenuTab };
if (false) {
    /** @type {?} */
    MenuTab.prototype.role;
    /** @type {?} */
    MenuTab.prototype.items;
}
var MenuItem = /** @class */ (function () {
    function MenuItem(init) {
        Object.assign(this, init);
    }
    return MenuItem;
}());
export { MenuItem };
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
var Breadcrumb = /** @class */ (function () {
    function Breadcrumb(init) {
        Object.assign(this, init);
    }
    return Breadcrumb;
}());
export { Breadcrumb };
if (false) {
    /** @type {?} */
    Breadcrumb.prototype.label;
    /** @type {?} */
    Breadcrumb.prototype.url;
    /** @type {?} */
    Breadcrumb.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL21vZGVscy9iYXNlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0E7Ozs7SUFFSSxrQkFBWSxJQUEyQjtRQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQUEsQ0FBQztJQUNOLGVBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7Ozs7OztJQUpHLDRCQUFlOzs7Ozs7QUFNbkI7Ozs7SUFBb0MsdUNBQVc7SUFFM0MscUJBQVksSUFBOEI7UUFBMUMsWUFDSSxpQkFBTyxTQUVWO1FBREcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBQzlCLENBQUM7SUFBQSxDQUFDO0lBQ04sa0JBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBb0MsUUFBUSxHQU0zQzs7Ozs7OztJQUxHLDhCQUFZOzs7Ozs7QUFPaEI7Ozs7SUFLSSxzQkFBWSxJQUErQjtRQUN2QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQUEsQ0FBQztJQUNOLG1CQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7Ozs7Ozs7SUFQRyw0QkFBUzs7SUFDVCwrQkFBa0I7O0lBQ2xCLDRCQUFjOztJQUNkLCtCQUFpQjs7O0FBTXJCO0lBQXVDLDZDQUFhO0lBT2hELDJCQUFZLElBQWlDO1FBQTdDLFlBQ0ksaUJBQU8sU0FFVjtRQURHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUM5QixDQUFDO0lBQUEsQ0FBQztJQUNOLHdCQUFDO0FBQUQsQ0FBQyxBQVhELENBQXVDLFFBQVEsR0FXOUM7Ozs7SUFWRyx1Q0FBb0I7O0lBQ3BCLHNDQUFtQjs7SUFDbkIscUNB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bUJBQU8sR0FBVyxTQUFTLENBQUM7SUFDNUIsb0JBQVEsR0FBVyxVQUFVLENBQUM7SUFDOUIsa0JBQU0sR0FBVyxRQUFRLENBQUM7SUFJckMsa0JBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSxXQUFXOzs7SUFDcEIsb0JBQW1DOztJQUNuQyxxQkFBcUM7O0lBQ3JDLG1CQUFpQzs7QUFNckM7SUFHSSxpQkFBWSxJQUF1QjtRQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQUFORCxJQU1DOzs7O0lBTEcsdUJBQWE7O0lBQ2Isd0JBQStCOztBQU1uQztJQUtJLGtCQUFZLElBQXdCO1FBQ2hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7Ozs7SUFQRyx3QkFBYTs7SUFDYix5QkFBK0I7O0lBQy9CLDJCQUFnQjs7SUFDaEIsd0JBQWM7O0FBTWxCO0lBSUksb0JBQVksSUFBMEI7UUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7Ozs7SUFORywyQkFBYzs7SUFDZCx5QkFBWTs7SUFDWiwyQkFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGFuZ2VUeXBlIH0gZnJvbSAnLi4vZW51bXMvYmFzZS5lbnVtJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNb2NrRGF0YTxUPiB7XHJcbiAgICBtb2NrRGF0YT86IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPE1vY2tEYXRhPFQ+Pikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVJlcXVlc3Q8VD4gZXh0ZW5kcyBNb2NrRGF0YTxUPiB7XHJcbiAgICBwYXlsb2FkPzogVDtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEJhc2VSZXF1ZXN0PFQ+Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlUmVzcG9uc2U8VD4ge1xyXG4gICAgZGF0YT86IFQ7XHJcbiAgICBzdWNjZXNzPzogYm9vbGVhbjtcclxuICAgIGNvZGU/OiBudW1iZXI7XHJcbiAgICBtZXNzYWdlPzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QmFzZVJlc3BvbnNlPFQ+Pikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQmFzZVJlcXVlc3QgZXh0ZW5kcyBNb2NrRGF0YTxhbnk+IHtcclxuICAgIHNlYXJjaFRleHQ/OiBzdHJpbmc7XHJcbiAgICBwYWdlSW5kZXg/OiBudW1iZXI7XHJcbiAgICBwYWdlU2l6ZT86IG51bWJlcjtcclxuICAgIGRpcmVjdGlvbj86IHN0cmluZztcclxuICAgIG9yZGVyQnk/OiBzdHJpbmc7XHJcbiAgICBhbGw/OiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8U2VhcmNoQmFzZVJlcXVlc3Q+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEJhc2VSZXNwb25zZTxUPiB7XHJcbiAgICBpdGVtcz86IFRbXTtcclxuICAgIHN1Y2Nlc3M/OiBib29sZWFuO1xyXG4gICAgY29kZT86IG51bWJlcjtcclxuICAgIG1lc3NhZ2U/OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxTZWFyY2hCYXNlUmVzcG9uc2U8VD4+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlVGVtcGxhdGUge1xyXG4gICAgZGF0YT86IGFueTtcclxuICAgIHRlbXBsYXRlPzogVHlwZTxhbnk+O1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QmFzZVRlbXBsYXRlPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWdncmVnYXRvclZpZXdNb2RlbCB7XHJcbiAgICB2YWx1ZT86IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gICAga2V5Pzogc3RyaW5nO1xyXG4gICAgY3VycmVudEVtaXR0ZXI6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEFnZ3JlZ2F0b3JWaWV3TW9kZWw+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25EZWZpbml0aW9uIHtcclxuICAgIGFjdGlvbjogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGljb246IHN0cmluZztcclxuICAgIGhpZGU6IGJvb2xlYW47XHJcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIGxhenlsb2FkOiBib29sZWFuO1xyXG4gICAgc3R5bGU6ICdkZWZhdWx0JyB8ICdzdWNjZXNzJyB8ICd3YXJuaW5nJyB8ICdkYW5nZXInIHwgJ2xpbmsnIHwgJ2luZm8nIHwgJ2ludmVyc2UnIHwgJ3ByaW1hcnknIHwgJ291dGxpbmUtcHJpbWFyeScgfCAnb3V0bGluZS1pbnZlcnNlJyA9ICdkZWZhdWx0JztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEJ1dHRvbkRlZmluaXRpb24+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvb2xiYXJBY3Rpb25QYXlsb2FkIHtcclxuICAgIGxvYWRlZENhbGxiYWNrOiBGdW5jdGlvbjtcclxuICAgIGFjdGlvbjogc3RyaW5nO1xyXG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8VG9vbGJhckFjdGlvblBheWxvYWQ+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdENoYW5nZSB7XHJcbiAgICBwcm9wZXJ0eU5hbWU6IHN0cmluZztcclxuICAgIG9sZFZhbHVlOiBhbnk7XHJcbiAgICBuZXdWYWx1ZTogYW55O1xyXG4gICAgY2hhbmdlVHlwZTogQ2hhbmdlVHlwZTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPE9iamVjdENoYW5nZT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9va3VwSXRlbSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBrZXk/OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxMb29rdXBJdGVtPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFeHRlbmRlZE1haW5NZW51R3JvdXAge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIGNoaWxkcmVuOiBhbnlbXTtcclxuICAgIGljb246IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEV4dGVuZGVkTWFpbk1lbnVHcm91cD4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5VmFsdWVJdGVtIHtcclxuICAgIGtleTogc3RyaW5nO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEtleVZhbHVlSXRlbT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnJlYWRDcnVtYkl0ZW0ge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QnJlYWRDcnVtYkl0ZW0+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xUeXBlIHtcclxuICAgIHN0YXRpYyBUZXh0Ym94OiBzdHJpbmcgPSAnVGV4dGJveCc7XHJcbiAgICBzdGF0aWMgRHJvcGRvd246IHN0cmluZyA9ICdEcm9wZG93bic7XHJcbiAgICBzdGF0aWMgQnV0dG9uOiBzdHJpbmcgPSAnQnV0dG9uJztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPENvbnRyb2xUeXBlPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51VGFiIHtcclxuICAgIHJvbGU6IHN0cmluZztcclxuICAgIGl0ZW1zOiBFeHRlbmRlZE1haW5NZW51R3JvdXBbXTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPE1lbnVUYWI+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVJdGVtIHtcclxuICAgIG1lbnU6IHN0cmluZztcclxuICAgIGl0ZW1zOiBFeHRlbmRlZE1haW5NZW51R3JvdXBbXTtcclxuICAgIHN1Yk5hbWU6IHN0cmluZztcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxNZW51SXRlbT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYiB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBzdGF0ZT86IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEJyZWFkY3J1bWI+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufSJdfQ==