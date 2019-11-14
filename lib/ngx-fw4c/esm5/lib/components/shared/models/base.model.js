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
var MediaItem = /** @class */ (function () {
    function MediaItem(init) {
        Object.assign(this, init);
    }
    return MediaItem;
}());
export { MediaItem };
if (false) {
    /** @type {?} */
    MediaItem.prototype.src;
    /** @type {?} */
    MediaItem.prototype.name;
    /** @type {?} */
    MediaItem.prototype.fullSrc;
}
var Audit = /** @class */ (function () {
    function Audit(init) {
        Object.assign(this, init);
    }
    return Audit;
}());
export { Audit };
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
var TrackingGroup = /** @class */ (function () {
    function TrackingGroup(init) {
        Object.assign(this, init);
    }
    return TrackingGroup;
}());
export { TrackingGroup };
if (false) {
    /** @type {?} */
    TrackingGroup.prototype.date;
    /** @type {?} */
    TrackingGroup.prototype.details;
}
var TrackingDetail = /** @class */ (function () {
    function TrackingDetail(init) {
        Object.assign(this, init);
    }
    return TrackingDetail;
}());
export { TrackingDetail };
if (false) {
    /** @type {?} */
    TrackingDetail.prototype.description;
    /** @type {?} */
    TrackingDetail.prototype.time;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL21vZGVscy9iYXNlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0E7Ozs7SUFFSSxrQkFBWSxJQUEyQjtRQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQUEsQ0FBQztJQUNOLGVBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7Ozs7OztJQUpHLDRCQUFlOzs7Ozs7QUFNbkI7Ozs7SUFBb0MsdUNBQVc7SUFFM0MscUJBQVksSUFBOEI7UUFBMUMsWUFDSSxpQkFBTyxTQUVWO1FBREcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBQzlCLENBQUM7SUFBQSxDQUFDO0lBQ04sa0JBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBb0MsUUFBUSxHQU0zQzs7Ozs7OztJQUxHLDhCQUFZOzs7Ozs7QUFPaEI7Ozs7SUFLSSxzQkFBWSxJQUErQjtRQUN2QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQUEsQ0FBQztJQUNOLG1CQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7Ozs7Ozs7SUFQRyw0QkFBUzs7SUFDVCwrQkFBa0I7O0lBQ2xCLDRCQUFjOztJQUNkLCtCQUFpQjs7O0FBTXJCO0lBQXVDLDZDQUFhO0lBT2hELDJCQUFZLElBQWlDO1FBQTdDLFlBQ0ksaUJBQU8sU0FFVjtRQURHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUM5QixDQUFDO0lBQUEsQ0FBQztJQUNOLHdCQUFDO0FBQUQsQ0FBQyxBQVhELENBQXVDLFFBQVEsR0FXOUM7Ozs7SUFWRyx1Q0FBb0I7O0lBQ3BCLHNDQUFtQjs7SUFDbkIscUNB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Ryw0QkFBbUI7O0lBQ25CLDBCQUFtQjs7SUFDbkIsaUNBQXdCOztJQUN4QiwrQkFBd0I7O0FBTTVCO0lBR0ksdUJBQVksSUFBNkI7UUFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMRyw2QkFBVzs7SUFDWCxnQ0FBMEI7O0FBTTlCO0lBR0ksd0JBQVksSUFBOEI7UUFDdEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMRyxxQ0FBb0I7O0lBQ3BCLDhCQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENoYW5nZVR5cGUgfSBmcm9tICcuLi9lbnVtcy9iYXNlLmVudW0nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vY2tEYXRhPFQ+IHtcclxuICAgIG1vY2tEYXRhPzogYW55O1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8TW9ja0RhdGE8VD4+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlUmVxdWVzdDxUPiBleHRlbmRzIE1vY2tEYXRhPFQ+IHtcclxuICAgIHBheWxvYWQ/OiBUO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QmFzZVJlcXVlc3Q8VD4+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VSZXNwb25zZTxUPiB7XHJcbiAgICBkYXRhPzogVDtcclxuICAgIHN1Y2Nlc3M/OiBib29sZWFuO1xyXG4gICAgY29kZT86IG51bWJlcjtcclxuICAgIG1lc3NhZ2U/OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxCYXNlUmVzcG9uc2U8VD4+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hCYXNlUmVxdWVzdCBleHRlbmRzIE1vY2tEYXRhPGFueT4ge1xyXG4gICAgc2VhcmNoVGV4dD86IHN0cmluZztcclxuICAgIHBhZ2VJbmRleD86IG51bWJlcjtcclxuICAgIHBhZ2VTaXplPzogbnVtYmVyO1xyXG4gICAgZGlyZWN0aW9uPzogc3RyaW5nO1xyXG4gICAgb3JkZXJCeT86IHN0cmluZztcclxuICAgIGFsbD86IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxTZWFyY2hCYXNlUmVxdWVzdD4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQmFzZVJlc3BvbnNlPFQ+IHtcclxuICAgIGl0ZW1zPzogVFtdO1xyXG4gICAgc3VjY2Vzcz86IGJvb2xlYW47XHJcbiAgICBjb2RlPzogbnVtYmVyO1xyXG4gICAgbWVzc2FnZT86IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFNlYXJjaEJhc2VSZXNwb25zZTxUPj4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VUZW1wbGF0ZSB7XHJcbiAgICBkYXRhPzogYW55O1xyXG4gICAgdGVtcGxhdGU/OiBUeXBlPGFueT47XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxCYXNlVGVtcGxhdGU+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdG9yVmlld01vZGVsIHtcclxuICAgIHZhbHVlPzogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgICBrZXk/OiBzdHJpbmc7XHJcbiAgICBjdXJyZW50RW1pdHRlcjogYW55O1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QWdncmVnYXRvclZpZXdNb2RlbD4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkRlZmluaXRpb24ge1xyXG4gICAgYWN0aW9uOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgaWNvbjogc3RyaW5nO1xyXG4gICAgaGlkZTogYm9vbGVhbjtcclxuICAgIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgbGF6eWxvYWQ6IGJvb2xlYW47XHJcbiAgICBzdHlsZTogJ2RlZmF1bHQnIHwgJ3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnIHwgJ2RhbmdlcicgfCAnbGluaycgfCAnaW5mbycgfCAnaW52ZXJzZScgfCAncHJpbWFyeScgfCAnb3V0bGluZS1wcmltYXJ5JyB8ICdvdXRsaW5lLWludmVyc2UnID0gJ2RlZmF1bHQnO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QnV0dG9uRGVmaW5pdGlvbj4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVG9vbGJhckFjdGlvblBheWxvYWQge1xyXG4gICAgbG9hZGVkQ2FsbGJhY2s6IEZ1bmN0aW9uO1xyXG4gICAgYWN0aW9uOiBzdHJpbmc7XHJcbiAgICBjYWxsYmFjazogRnVuY3Rpb247XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxUb29sYmFyQWN0aW9uUGF5bG9hZD4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT2JqZWN0Q2hhbmdlIHtcclxuICAgIHByb3BlcnR5TmFtZTogc3RyaW5nO1xyXG4gICAgb2xkVmFsdWU6IGFueTtcclxuICAgIG5ld1ZhbHVlOiBhbnk7XHJcbiAgICBjaGFuZ2VUeXBlOiBDaGFuZ2VUeXBlO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8T2JqZWN0Q2hhbmdlPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb29rdXBJdGVtIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGtleT86IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPExvb2t1cEl0ZW0+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV4dGVuZGVkTWFpbk1lbnVHcm91cCB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgY2hpbGRyZW46IGFueVtdO1xyXG4gICAgaWNvbjogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8RXh0ZW5kZWRNYWluTWVudUdyb3VwPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBLZXlWYWx1ZUl0ZW0ge1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8S2V5VmFsdWVJdGVtPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCcmVhZENydW1iSXRlbSB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxCcmVhZENydW1iSXRlbT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbFR5cGUge1xyXG4gICAgc3RhdGljIFRleHRib3g6IHN0cmluZyA9ICdUZXh0Ym94JztcclxuICAgIHN0YXRpYyBEcm9wZG93bjogc3RyaW5nID0gJ0Ryb3Bkb3duJztcclxuICAgIHN0YXRpYyBCdXR0b246IHN0cmluZyA9ICdCdXR0b24nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8Q29udHJvbFR5cGU+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVUYWIge1xyXG4gICAgcm9sZTogc3RyaW5nO1xyXG4gICAgaXRlbXM6IEV4dGVuZGVkTWFpbk1lbnVHcm91cFtdO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8TWVudVRhYj4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudUl0ZW0ge1xyXG4gICAgbWVudTogc3RyaW5nO1xyXG4gICAgaXRlbXM6IEV4dGVuZGVkTWFpbk1lbnVHcm91cFtdO1xyXG4gICAgc3ViTmFtZTogc3RyaW5nO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPE1lbnVJdGVtPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iIHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHN0YXRlPzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QnJlYWRjcnVtYj4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWVkaWFJdGVtIHtcclxuICAgIHNyYzogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZnVsbFNyYzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8TWVkaWFJdGVtPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdWRpdCB7XHJcbiAgICBjcmVhdGVkRGF0ZT86IERhdGU7XHJcbiAgICBjcmVhdGVkQnk/OiBzdHJpbmc7XHJcbiAgICBsYXN0TW9kaWZpZWREYXRlPzogRGF0ZTtcclxuICAgIGxhc3RNb2RpZmllZEJ5Pzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXVkaXQ+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyYWNraW5nR3JvdXAge1xyXG4gICAgZGF0ZTogRGF0ZTtcclxuICAgIGRldGFpbHM6IFRyYWNraW5nRGV0YWlsW107XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxUcmFja2luZ0dyb3VwPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFja2luZ0RldGFpbCB7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgdGltZTogRGF0ZTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFRyYWNraW5nRGV0YWlsPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn0iXX0=