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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL21vZGVscy9iYXNlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0E7Ozs7SUFFSSxrQkFBWSxJQUEyQjtRQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQUEsQ0FBQztJQUNOLGVBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7Ozs7OztJQUpHLDRCQUFlOzs7Ozs7QUFNbkI7Ozs7SUFBb0MsdUNBQVc7SUFFM0MscUJBQVksSUFBOEI7UUFBMUMsWUFDSSxpQkFBTyxTQUVWO1FBREcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBQzlCLENBQUM7SUFBQSxDQUFDO0lBQ04sa0JBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBb0MsUUFBUSxHQU0zQzs7Ozs7OztJQUxHLDhCQUFZOzs7Ozs7QUFPaEI7Ozs7SUFLSSxzQkFBWSxJQUErQjtRQUN2QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQUEsQ0FBQztJQUNOLG1CQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7Ozs7Ozs7SUFQRyw0QkFBUzs7SUFDVCwrQkFBa0I7O0lBQ2xCLDRCQUFjOztJQUNkLCtCQUFpQjs7O0FBTXJCO0lBQXVDLDZDQUFhO0lBT2hELDJCQUFZLElBQWlDO1FBQTdDLFlBQ0ksaUJBQU8sU0FFVjtRQURHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUM5QixDQUFDO0lBQUEsQ0FBQztJQUNOLHdCQUFDO0FBQUQsQ0FBQyxBQVhELENBQXVDLFFBQVEsR0FXOUM7Ozs7SUFWRyx1Q0FBb0I7O0lBQ3BCLHNDQUFtQjs7SUFDbkIscUNB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Ryw0QkFBbUI7O0lBQ25CLDBCQUFtQjs7SUFDbkIsaUNBQXdCOztJQUN4QiwrQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2hhbmdlVHlwZSB9IGZyb20gJy4uL2VudW1zL2Jhc2UuZW51bSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTW9ja0RhdGE8VD4ge1xyXG4gICAgbW9ja0RhdGE/OiBhbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxNb2NrRGF0YTxUPj4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VSZXF1ZXN0PFQ+IGV4dGVuZHMgTW9ja0RhdGE8VD4ge1xyXG4gICAgcGF5bG9hZD86IFQ7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxCYXNlUmVxdWVzdDxUPj4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVJlc3BvbnNlPFQ+IHtcclxuICAgIGRhdGE/OiBUO1xyXG4gICAgc3VjY2Vzcz86IGJvb2xlYW47XHJcbiAgICBjb2RlPzogbnVtYmVyO1xyXG4gICAgbWVzc2FnZT86IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEJhc2VSZXNwb25zZTxUPj4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEJhc2VSZXF1ZXN0IGV4dGVuZHMgTW9ja0RhdGE8YW55PiB7XHJcbiAgICBzZWFyY2hUZXh0Pzogc3RyaW5nO1xyXG4gICAgcGFnZUluZGV4PzogbnVtYmVyO1xyXG4gICAgcGFnZVNpemU/OiBudW1iZXI7XHJcbiAgICBkaXJlY3Rpb24/OiBzdHJpbmc7XHJcbiAgICBvcmRlckJ5Pzogc3RyaW5nO1xyXG4gICAgYWxsPzogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFNlYXJjaEJhc2VSZXF1ZXN0Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hCYXNlUmVzcG9uc2U8VD4ge1xyXG4gICAgaXRlbXM/OiBUW107XHJcbiAgICBzdWNjZXNzPzogYm9vbGVhbjtcclxuICAgIGNvZGU/OiBudW1iZXI7XHJcbiAgICBtZXNzYWdlPzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8U2VhcmNoQmFzZVJlc3BvbnNlPFQ+Pikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVRlbXBsYXRlIHtcclxuICAgIGRhdGE/OiBhbnk7XHJcbiAgICB0ZW1wbGF0ZT86IFR5cGU8YW55PjtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEJhc2VUZW1wbGF0ZT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFnZ3JlZ2F0b3JWaWV3TW9kZWwge1xyXG4gICAgdmFsdWU/OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICAgIGtleT86IHN0cmluZztcclxuICAgIGN1cnJlbnRFbWl0dGVyOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxBZ2dyZWdhdG9yVmlld01vZGVsPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uRGVmaW5pdGlvbiB7XHJcbiAgICBhY3Rpb246IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICBoaWRlOiBib29sZWFuO1xyXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBsYXp5bG9hZDogYm9vbGVhbjtcclxuICAgIHN0eWxlOiAnZGVmYXVsdCcgfCAnc3VjY2VzcycgfCAnd2FybmluZycgfCAnZGFuZ2VyJyB8ICdsaW5rJyB8ICdpbmZvJyB8ICdpbnZlcnNlJyB8ICdwcmltYXJ5JyB8ICdvdXRsaW5lLXByaW1hcnknIHwgJ291dGxpbmUtaW52ZXJzZScgPSAnZGVmYXVsdCc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxCdXR0b25EZWZpbml0aW9uPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb29sYmFyQWN0aW9uUGF5bG9hZCB7XHJcbiAgICBsb2FkZWRDYWxsYmFjazogRnVuY3Rpb247XHJcbiAgICBhY3Rpb246IHN0cmluZztcclxuICAgIGNhbGxiYWNrOiBGdW5jdGlvbjtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFRvb2xiYXJBY3Rpb25QYXlsb2FkPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPYmplY3RDaGFuZ2Uge1xyXG4gICAgcHJvcGVydHlOYW1lOiBzdHJpbmc7XHJcbiAgICBvbGRWYWx1ZTogYW55O1xyXG4gICAgbmV3VmFsdWU6IGFueTtcclxuICAgIGNoYW5nZVR5cGU6IENoYW5nZVR5cGU7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxPYmplY3RDaGFuZ2U+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvb2t1cEl0ZW0ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAga2V5Pzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8TG9va3VwSXRlbT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXh0ZW5kZWRNYWluTWVudUdyb3VwIHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBjaGlsZHJlbjogYW55W107XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxFeHRlbmRlZE1haW5NZW51R3JvdXA+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEtleVZhbHVlSXRlbSB7XHJcbiAgICBrZXk6IHN0cmluZztcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxLZXlWYWx1ZUl0ZW0+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJyZWFkQ3J1bWJJdGVtIHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEJyZWFkQ3J1bWJJdGVtPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sVHlwZSB7XHJcbiAgICBzdGF0aWMgVGV4dGJveDogc3RyaW5nID0gJ1RleHRib3gnO1xyXG4gICAgc3RhdGljIERyb3Bkb3duOiBzdHJpbmcgPSAnRHJvcGRvd24nO1xyXG4gICAgc3RhdGljIEJ1dHRvbjogc3RyaW5nID0gJ0J1dHRvbic7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxDb250cm9sVHlwZT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudVRhYiB7XHJcbiAgICByb2xlOiBzdHJpbmc7XHJcbiAgICBpdGVtczogRXh0ZW5kZWRNYWluTWVudUdyb3VwW107XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxNZW51VGFiPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51SXRlbSB7XHJcbiAgICBtZW51OiBzdHJpbmc7XHJcbiAgICBpdGVtczogRXh0ZW5kZWRNYWluTWVudUdyb3VwW107XHJcbiAgICBzdWJOYW1lOiBzdHJpbmc7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8TWVudUl0ZW0+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWIge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgc3RhdGU/OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxCcmVhZGNydW1iPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNZWRpYUl0ZW0ge1xyXG4gICAgc3JjOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBmdWxsU3JjOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxNZWRpYUl0ZW0+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1ZGl0IHtcclxuICAgIGNyZWF0ZWREYXRlPzogRGF0ZTtcclxuICAgIGNyZWF0ZWRCeT86IHN0cmluZztcclxuICAgIGxhc3RNb2RpZmllZERhdGU/OiBEYXRlO1xyXG4gICAgbGFzdE1vZGlmaWVkQnk/OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxBdWRpdD4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59Il19