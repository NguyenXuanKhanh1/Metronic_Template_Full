/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
export class MockData {
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
export class BaseRequest extends MockData {
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
export class BaseResponse {
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
export class SearchBaseRequest extends MockData {
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
export class SearchBaseResponse {
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
export class BaseTemplate {
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
export class AggregatorViewModel {
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
export class ButtonDefinition {
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
export class ToolbarActionPayload {
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
export class ObjectChange {
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
export class LookupItem {
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
export class ExtendedMainMenuGroup {
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
export class KeyValueItem {
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
export class BreadCrumbItem {
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
export class ControlType {
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
export class MenuTab {
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
export class MenuItem {
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
export class Breadcrumb {
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
export class MediaItem {
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
export class Audit {
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
export class TrackingGroup {
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
export class TrackingDetail {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL21vZGVscy9iYXNlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxNQUFNLE9BQU8sUUFBUTs7OztJQUVqQixZQUFZLElBQTJCO1FBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFBQSxDQUFDO0NBQ0w7OztJQUpHLDRCQUFlOzs7Ozs7QUFNbkIsTUFBTSxPQUFPLFdBQWUsU0FBUSxRQUFXOzs7O0lBRTNDLFlBQVksSUFBOEI7UUFDdEMsS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQUEsQ0FBQztDQUNMOzs7SUFMRyw4QkFBWTs7Ozs7O0FBT2hCLE1BQU0sT0FBTyxZQUFZOzs7O0lBS3JCLFlBQVksSUFBK0I7UUFDdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUFBLENBQUM7Q0FDTDs7O0lBUEcsNEJBQVM7O0lBQ1QsK0JBQWtCOztJQUNsQiw0QkFBYzs7SUFDZCwrQkFBaUI7OztBQU1yQixNQUFNLE9BQU8saUJBQWtCLFNBQVEsUUFBYTs7OztJQU9oRCxZQUFZLElBQWlDO1FBQ3pDLEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUFBLENBQUM7Q0FDTDs7O0lBVkcsdUNBQW9COztJQUNwQixzQ0FBbUI7O0lBQ25CLHFDQUFrQjs7SUFDbEIsc0NBQW1COztJQUNuQixvQ0FBaUI7O0lBQ2pCLGdDQUFjOzs7Ozs7QUFPbEIsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUszQixZQUFZ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QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7OztJQUxHLHFDQUFvQjs7SUFDcEIsOEJBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2hhbmdlVHlwZSB9IGZyb20gJy4uL2VudW1zL2Jhc2UuZW51bSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTW9ja0RhdGE8VD4ge1xyXG4gICAgbW9ja0RhdGE/OiBhbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxNb2NrRGF0YTxUPj4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VSZXF1ZXN0PFQ+IGV4dGVuZHMgTW9ja0RhdGE8VD4ge1xyXG4gICAgcGF5bG9hZD86IFQ7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxCYXNlUmVxdWVzdDxUPj4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVJlc3BvbnNlPFQ+IHtcclxuICAgIGRhdGE/OiBUO1xyXG4gICAgc3VjY2Vzcz86IGJvb2xlYW47XHJcbiAgICBjb2RlPzogbnVtYmVyO1xyXG4gICAgbWVzc2FnZT86IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEJhc2VSZXNwb25zZTxUPj4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEJhc2VSZXF1ZXN0IGV4dGVuZHMgTW9ja0RhdGE8YW55PiB7XHJcbiAgICBzZWFyY2hUZXh0Pzogc3RyaW5nO1xyXG4gICAgcGFnZUluZGV4PzogbnVtYmVyO1xyXG4gICAgcGFnZVNpemU/OiBudW1iZXI7XHJcbiAgICBkaXJlY3Rpb24/OiBzdHJpbmc7XHJcbiAgICBvcmRlckJ5Pzogc3RyaW5nO1xyXG4gICAgYWxsPzogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFNlYXJjaEJhc2VSZXF1ZXN0Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hCYXNlUmVzcG9uc2U8VD4ge1xyXG4gICAgaXRlbXM/OiBUW107XHJcbiAgICBzdWNjZXNzPzogYm9vbGVhbjtcclxuICAgIGNvZGU/OiBudW1iZXI7XHJcbiAgICBtZXNzYWdlPzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8U2VhcmNoQmFzZVJlc3BvbnNlPFQ+Pikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVRlbXBsYXRlIHtcclxuICAgIGRhdGE/OiBhbnk7XHJcbiAgICB0ZW1wbGF0ZT86IFR5cGU8YW55PjtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEJhc2VUZW1wbGF0ZT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFnZ3JlZ2F0b3JWaWV3TW9kZWwge1xyXG4gICAgdmFsdWU/OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICAgIGtleT86IHN0cmluZztcclxuICAgIGN1cnJlbnRFbWl0dGVyOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxBZ2dyZWdhdG9yVmlld01vZGVsPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uRGVmaW5pdGlvbiB7XHJcbiAgICBhY3Rpb246IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICBoaWRlOiBib29sZWFuO1xyXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBsYXp5bG9hZDogYm9vbGVhbjtcclxuICAgIHN0eWxlOiAnZGVmYXVsdCcgfCAnc3VjY2VzcycgfCAnd2FybmluZycgfCAnZGFuZ2VyJyB8ICdsaW5rJyB8ICdpbmZvJyB8ICdpbnZlcnNlJyB8ICdwcmltYXJ5JyB8ICdvdXRsaW5lLXByaW1hcnknIHwgJ291dGxpbmUtaW52ZXJzZScgPSAnZGVmYXVsdCc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxCdXR0b25EZWZpbml0aW9uPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb29sYmFyQWN0aW9uUGF5bG9hZCB7XHJcbiAgICBsb2FkZWRDYWxsYmFjazogRnVuY3Rpb247XHJcbiAgICBhY3Rpb246IHN0cmluZztcclxuICAgIGNhbGxiYWNrOiBGdW5jdGlvbjtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFRvb2xiYXJBY3Rpb25QYXlsb2FkPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPYmplY3RDaGFuZ2Uge1xyXG4gICAgcHJvcGVydHlOYW1lOiBzdHJpbmc7XHJcbiAgICBvbGRWYWx1ZTogYW55O1xyXG4gICAgbmV3VmFsdWU6IGFueTtcclxuICAgIGNoYW5nZVR5cGU6IENoYW5nZVR5cGU7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxPYmplY3RDaGFuZ2U+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvb2t1cEl0ZW0ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAga2V5Pzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8TG9va3VwSXRlbT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXh0ZW5kZWRNYWluTWVudUdyb3VwIHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBjaGlsZHJlbjogYW55W107XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxFeHRlbmRlZE1haW5NZW51R3JvdXA+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEtleVZhbHVlSXRlbSB7XHJcbiAgICBrZXk6IHN0cmluZztcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxLZXlWYWx1ZUl0ZW0+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJyZWFkQ3J1bWJJdGVtIHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEJyZWFkQ3J1bWJJdGVtPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sVHlwZSB7XHJcbiAgICBzdGF0aWMgVGV4dGJveDogc3RyaW5nID0gJ1RleHRib3gnO1xyXG4gICAgc3RhdGljIERyb3Bkb3duOiBzdHJpbmcgPSAnRHJvcGRvd24nO1xyXG4gICAgc3RhdGljIEJ1dHRvbjogc3RyaW5nID0gJ0J1dHRvbic7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxDb250cm9sVHlwZT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudVRhYiB7XHJcbiAgICByb2xlOiBzdHJpbmc7XHJcbiAgICBpdGVtczogRXh0ZW5kZWRNYWluTWVudUdyb3VwW107XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxNZW51VGFiPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51SXRlbSB7XHJcbiAgICBtZW51OiBzdHJpbmc7XHJcbiAgICBpdGVtczogRXh0ZW5kZWRNYWluTWVudUdyb3VwW107XHJcbiAgICBzdWJOYW1lOiBzdHJpbmc7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8TWVudUl0ZW0+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWIge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgc3RhdGU/OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxCcmVhZGNydW1iPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNZWRpYUl0ZW0ge1xyXG4gICAgc3JjOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBmdWxsU3JjOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxNZWRpYUl0ZW0+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1ZGl0IHtcclxuICAgIGNyZWF0ZWREYXRlPzogRGF0ZTtcclxuICAgIGNyZWF0ZWRCeT86IHN0cmluZztcclxuICAgIGxhc3RNb2RpZmllZERhdGU/OiBEYXRlO1xyXG4gICAgbGFzdE1vZGlmaWVkQnk/OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxBdWRpdD4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhY2tpbmdHcm91cCB7XHJcbiAgICBkYXRlOiBEYXRlO1xyXG4gICAgZGV0YWlsczogVHJhY2tpbmdEZXRhaWxbXTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFRyYWNraW5nR3JvdXA+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyYWNraW5nRGV0YWlsIHtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICB0aW1lOiBEYXRlO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8VHJhY2tpbmdEZXRhaWw+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufSJdfQ==