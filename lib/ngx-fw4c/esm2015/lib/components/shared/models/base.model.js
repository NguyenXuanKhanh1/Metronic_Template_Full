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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL21vZGVscy9iYXNlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxNQUFNLE9BQU8sUUFBUTs7OztJQUVqQixZQUFZLElBQTJCO1FBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFBQSxDQUFDO0NBQ0w7OztJQUpHLDRCQUFlOzs7Ozs7QUFNbkIsTUFBTSxPQUFPLFdBQWUsU0FBUSxRQUFXOzs7O0lBRTNDLFlBQVksSUFBOEI7UUFDdEMsS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQUEsQ0FBQztDQUNMOzs7SUFMRyw4QkFBWTs7Ozs7O0FBT2hCLE1BQU0sT0FBTyxZQUFZOzs7O0lBS3JCLFlBQVksSUFBK0I7UUFDdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUFBLENBQUM7Q0FDTDs7O0lBUEcsNEJBQVM7O0lBQ1QsK0JBQWtCOztJQUNsQiw0QkFBYzs7SUFDZCwrQkFBaUI7OztBQU1yQixNQUFNLE9BQU8saUJBQWtCLFNBQVEsUUFBYTs7OztJQU9oRCxZQUFZLElBQWlDO1FBQ3pDLEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUFBLENBQUM7Q0FDTDs7O0lBVkcsdUNBQW9COztJQUNwQixzQ0FBbUI7O0lBQ25CLHFDQUFrQjs7SUFDbEIsc0NBQW1COztJQUNuQixvQ0FBaUI7O0lBQ2pCLGdDQUFjOzs7Ozs7QUFPbEIsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUszQixZQUFZLElBQXFDO1FBQzdDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFBQSxDQUFDO0NBQ0w7OztJQVBHLG1DQUFZOztJQUNaLHFDQUFrQjs7SUFDbEIsa0NBQWM7O0lBQ2QscUNBQWlCOzs7QUFNckIsTUFBTSxPQUFPLFlBQVk7Ozs7SUFHckIsWUFBWSxJQUE0QjtRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQUEsQ0FBQztDQUNMOzs7SUFMRyw0QkFBVzs7SUFDWCxnQ0FBcUI7OztBQU16QixNQUFNLE9BQU8sbUJBQW1COzs7O0lBSTVCLFlBQVksSUFBbUM7UUFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUFBLENBQUM7Q0FDTDs7O0lBTkcsb0NBQTBCOztJQUMxQixrQ0FBYTs7SUFDYiw2Q0FBb0I7OztBQU14QixNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBUXpCLFlBQVksSUFBZ0M7UUFENUMsVUFBSyxHQUFtSSxTQUFTLENBQUM7UUFFOUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKOzs7SUFWRyxrQ0FBZTs7SUFDZixpQ0FBYzs7SUFDZCxnQ0FBYTs7SUFDYixnQ0FBYzs7SUFDZCxvQ0FBa0I7O0lBQ2xCLG9DQUFrQjs7SUFDbEIsaUNBQWtKOztBQU10SixNQUFNLE9BQU8sb0JBQW9COzs7O0lBSTdCLFlBQVksSUFBb0M7UUFDNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKOzs7SUFORyw4Q0FBeUI7O0lBQ3pCLHNDQUFlOztJQUNmLHdDQUFtQjs7QUFNdkIsTUFBTSxPQUFPLFlBQVk7Ozs7SUFLckIsWUFBWSxJQUE0QjtRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7OztJQVBHLG9DQUFxQjs7SUFDckIsZ0NBQWM7O0lBQ2QsZ0NBQWM7O0lBQ2Qsa0NBQXVCOztBQU0zQixNQUFNLE9BQU8sVUFBVTs7OztJQUduQixZQUFZLElBQTBCO1FBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjs7O0lBTEcsMEJBQWE7O0lBQ2IseUJBQWE7O0FBTWpCLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFJOUIsWUFBWSxJQUFxQztRQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7OztJQU5HLHNDQUFjOztJQUNkLHlDQUFnQjs7SUFDaEIscUNBQWE7O0FBTWpCLE1BQU0sT0FBTyxZQUFZOzs7O0lBR3JCLFlBQVksSUFBNEI7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKOzs7SUFMRywyQkFBWTs7SUFDWiw2QkFBYzs7QUFNbEIsTUFBTSxPQUFPLGNBQWM7Ozs7SUFHdkIsWUFBWSxJQUE4QjtRQUN0QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7OztJQUxHLCtCQUFjOztJQUNkLDZCQUFZOztBQU1oQixNQUFNLE9BQU8sV0FBVzs7OztJQUlwQixZQUFZLElBQTJCO1FBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7O0FBTE0sbUJBQU8sR0FBVyxTQUFTLENBQUM7QUFDNUIsb0JBQVEsR0FBVyxVQUFVLENBQUM7QUFDOUIsa0JBQU0sR0FBVyxRQUFRLENBQUM7OztJQUZqQyxvQkFBbUM7O0lBQ25DLHFCQUFxQzs7SUFDckMsbUJBQWlDOztBQU1yQyxNQUFNLE9BQU8sT0FBTzs7OztJQUdoQixZQUFZLElBQXVCO1FBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjs7O0lBTEcsdUJBQWE7O0lBQ2Isd0JBQStCOztBQU1uQyxNQUFNLE9BQU8sUUFBUTs7OztJQUtqQixZQUFZLElBQXdCO1FBQ2hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjs7O0lBUEcsd0JBQWE7O0lBQ2IseUJBQStCOztJQUMvQiwyQkFBZ0I7O0lBQ2hCLHdCQUFjOztBQU1sQixNQUFNLE9BQU8sVUFBVTs7OztJQUluQixZQUFZLElBQTBCO1FBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjs7O0lBTkcsMkJBQWM7O0lBQ2QseUJBQVk7O0lBQ1osMkJBQWU7O0FBTW5CLE1BQU0sT0FBTyxTQUFTOzs7O0lBSWxCLFlBQVksSUFBeUI7UUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKOzs7SUFORyx3QkFBWTs7SUFDWix5QkFBYTs7SUFDYiw0QkFBZ0I7O0FBTXBCLE1BQU0sT0FBTyxLQUFLOzs7O0lBS2QsWUFBWSxJQUFxQjtRQUM3QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7OztJQVBHLDRCQUFtQjs7SUFDbkIsMEJBQW1COztJQUNuQixpQ0FBd0I7O0lBQ3hCLCtCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGFuZ2VUeXBlIH0gZnJvbSAnLi4vZW51bXMvYmFzZS5lbnVtJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNb2NrRGF0YTxUPiB7XHJcbiAgICBtb2NrRGF0YT86IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPE1vY2tEYXRhPFQ+Pikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVJlcXVlc3Q8VD4gZXh0ZW5kcyBNb2NrRGF0YTxUPiB7XHJcbiAgICBwYXlsb2FkPzogVDtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEJhc2VSZXF1ZXN0PFQ+Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlUmVzcG9uc2U8VD4ge1xyXG4gICAgZGF0YT86IFQ7XHJcbiAgICBzdWNjZXNzPzogYm9vbGVhbjtcclxuICAgIGNvZGU/OiBudW1iZXI7XHJcbiAgICBtZXNzYWdlPzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QmFzZVJlc3BvbnNlPFQ+Pikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQmFzZVJlcXVlc3QgZXh0ZW5kcyBNb2NrRGF0YTxhbnk+IHtcclxuICAgIHNlYXJjaFRleHQ/OiBzdHJpbmc7XHJcbiAgICBwYWdlSW5kZXg/OiBudW1iZXI7XHJcbiAgICBwYWdlU2l6ZT86IG51bWJlcjtcclxuICAgIGRpcmVjdGlvbj86IHN0cmluZztcclxuICAgIG9yZGVyQnk/OiBzdHJpbmc7XHJcbiAgICBhbGw/OiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8U2VhcmNoQmFzZVJlcXVlc3Q+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEJhc2VSZXNwb25zZTxUPiB7XHJcbiAgICBpdGVtcz86IFRbXTtcclxuICAgIHN1Y2Nlc3M/OiBib29sZWFuO1xyXG4gICAgY29kZT86IG51bWJlcjtcclxuICAgIG1lc3NhZ2U/OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxTZWFyY2hCYXNlUmVzcG9uc2U8VD4+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlVGVtcGxhdGUge1xyXG4gICAgZGF0YT86IGFueTtcclxuICAgIHRlbXBsYXRlPzogVHlwZTxhbnk+O1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QmFzZVRlbXBsYXRlPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWdncmVnYXRvclZpZXdNb2RlbCB7XHJcbiAgICB2YWx1ZT86IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gICAga2V5Pzogc3RyaW5nO1xyXG4gICAgY3VycmVudEVtaXR0ZXI6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEFnZ3JlZ2F0b3JWaWV3TW9kZWw+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25EZWZpbml0aW9uIHtcclxuICAgIGFjdGlvbjogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGljb246IHN0cmluZztcclxuICAgIGhpZGU6IGJvb2xlYW47XHJcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIGxhenlsb2FkOiBib29sZWFuO1xyXG4gICAgc3R5bGU6ICdkZWZhdWx0JyB8ICdzdWNjZXNzJyB8ICd3YXJuaW5nJyB8ICdkYW5nZXInIHwgJ2xpbmsnIHwgJ2luZm8nIHwgJ2ludmVyc2UnIHwgJ3ByaW1hcnknIHwgJ291dGxpbmUtcHJpbWFyeScgfCAnb3V0bGluZS1pbnZlcnNlJyA9ICdkZWZhdWx0JztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEJ1dHRvbkRlZmluaXRpb24+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvb2xiYXJBY3Rpb25QYXlsb2FkIHtcclxuICAgIGxvYWRlZENhbGxiYWNrOiBGdW5jdGlvbjtcclxuICAgIGFjdGlvbjogc3RyaW5nO1xyXG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8VG9vbGJhckFjdGlvblBheWxvYWQ+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdENoYW5nZSB7XHJcbiAgICBwcm9wZXJ0eU5hbWU6IHN0cmluZztcclxuICAgIG9sZFZhbHVlOiBhbnk7XHJcbiAgICBuZXdWYWx1ZTogYW55O1xyXG4gICAgY2hhbmdlVHlwZTogQ2hhbmdlVHlwZTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPE9iamVjdENoYW5nZT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9va3VwSXRlbSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBrZXk/OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxMb29rdXBJdGVtPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFeHRlbmRlZE1haW5NZW51R3JvdXAge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIGNoaWxkcmVuOiBhbnlbXTtcclxuICAgIGljb246IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEV4dGVuZGVkTWFpbk1lbnVHcm91cD4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5VmFsdWVJdGVtIHtcclxuICAgIGtleTogc3RyaW5nO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEtleVZhbHVlSXRlbT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnJlYWRDcnVtYkl0ZW0ge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QnJlYWRDcnVtYkl0ZW0+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xUeXBlIHtcclxuICAgIHN0YXRpYyBUZXh0Ym94OiBzdHJpbmcgPSAnVGV4dGJveCc7XHJcbiAgICBzdGF0aWMgRHJvcGRvd246IHN0cmluZyA9ICdEcm9wZG93bic7XHJcbiAgICBzdGF0aWMgQnV0dG9uOiBzdHJpbmcgPSAnQnV0dG9uJztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPENvbnRyb2xUeXBlPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51VGFiIHtcclxuICAgIHJvbGU6IHN0cmluZztcclxuICAgIGl0ZW1zOiBFeHRlbmRlZE1haW5NZW51R3JvdXBbXTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPE1lbnVUYWI+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVJdGVtIHtcclxuICAgIG1lbnU6IHN0cmluZztcclxuICAgIGl0ZW1zOiBFeHRlbmRlZE1haW5NZW51R3JvdXBbXTtcclxuICAgIHN1Yk5hbWU6IHN0cmluZztcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxNZW51SXRlbT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYiB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBzdGF0ZT86IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEJyZWFkY3J1bWI+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lZGlhSXRlbSB7XHJcbiAgICBzcmM6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGZ1bGxTcmM6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPE1lZGlhSXRlbT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXVkaXQge1xyXG4gICAgY3JlYXRlZERhdGU/OiBEYXRlO1xyXG4gICAgY3JlYXRlZEJ5Pzogc3RyaW5nO1xyXG4gICAgbGFzdE1vZGlmaWVkRGF0ZT86IERhdGU7XHJcbiAgICBsYXN0TW9kaWZpZWRCeT86IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1ZGl0Pikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn0iXX0=