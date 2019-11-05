/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function BaseSearchRequest() { }
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
export function BaseSearchResponse() { }
if (false) {
    /** @type {?} */
    BaseSearchResponse.prototype.items;
    /** @type {?} */
    BaseSearchResponse.prototype.totalRecords;
}
export class GetLookupItemsRequest {
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
export class GetLookupItemsResponse {
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
export class SendNotificationRequest {
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
export class SendNotificationResponse {
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
export class NotificationType {
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
export class EditNotificationThreadViewModel {
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
export class NotificationDetailGroup {
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
export class NotificationDetail {
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
export class RetrieveNotificationThreadRequest {
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
export class RetrieveNotificationThreadResponse {
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
export class NotificationTemplateVariable {
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
export class RegisterChannelRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
export class RegisterChannelResponse {
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
export class SendLiveNotificationRequest {
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
export class RemoveNotificationDetailRequest {
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
export class RemoveNotificationDetailResponse {
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
export class RemoveNotificationDetailGroupType {
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
export class RetrieveNotificationDetailRequest {
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
export class RetrieveNotificationDetailResponse {
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
export class SearchInboxNotificationsRequest {
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
export class SearchInboxNotificationsResponse {
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
export class MarkAllNotificationsReadRequest {
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
export class MarkAllNotificationsReadResponse {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvbW9kZWxzL25vdGlmaWNhdGlvbi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsdUNBT0M7OztJQU5DLHVDQUFtQjs7SUFDbkIsb0NBQWdCOztJQUNoQixzQ0FBa0I7O0lBQ2xCLHNDQUFrQjs7SUFDbEIsc0NBQWtCOztJQUNsQixxQ0FBaUI7Ozs7OztBQUduQix3Q0FHQzs7O0lBRkMsbUNBQVc7O0lBQ1gsMENBQXFCOztBQUd2QixNQUFNLE9BQU8scUJBQXFCOzs7O0lBRWhDLFlBQVksSUFBcUM7UUFDL0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGOzs7SUFKQyx1Q0FBc0I7O0FBTXhCLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFLakMsWUFBWSxJQUFzQztRQUNoRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7OztJQVBDLHlDQUFnQjs7SUFDaEIseUNBQWlCOztJQUNqQixvQ0FBVzs7SUFDWCxzQ0FBVTs7QUFNWixNQUFNLE9BQU8sdUJBQXVCOzs7O0lBTWxDLFlBQVksSUFBdUM7UUFMbkQsc0JBQWlCLEdBQWEsRUFBRSxDQUFDO1FBQ2pDLGlCQUFZLEdBQW1CLEVBQUUsQ0FBQztRQUVsQyxlQUFVLEdBQWEsRUFBRSxDQUFDO1FBR3hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjs7O0lBUkMsb0RBQWlDOztJQUNqQywrQ0FBa0M7O0lBQ2xDLCtDQUFxQjs7SUFDckIsNkNBQTBCOztJQUMxQiw4Q0FBcUI7O0FBTXZCLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFJbkMsWUFBWSxJQUF3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O0lBWEMsb0RBQWtCOztJQUNsQixtREFBaUI7O0lBQ2pCLHFEQUFtQjs7SUFDbkIsa0RBQWdCOztJQUNoQixvREFBa0I7O0lBQ2xCLG9EQUFrQjs7SUFDbEIsaURBQWU7O0lBQ2Ysc0RBQXFCOztBQU12QixNQUFNLE9BQU8sZ0NBQWdDOzs7O0lBTzNDLFlBQVksSUFBZ0Q7UUFDMUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGOzs7SUFUQyxtREFBZ0I7O0lBQ2hCLGlEQUFpQzs7SUFDakMsK0RBQTRCOztJQUM1Qix3REFBcUI7O0lBQ3JCLG1EQUFpQjs7SUFDakIsOENBQVc7O0FBTWIsTUFBTSxPQUFPLCtCQUErQjs7OztJQUUxQyxZQUFZLElBQStDO1FBQ3pELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjs7O0lBSkMsNkNBQVc7O0FBTWIsTUFBTSxPQUFPLGdDQUFnQzs7OztJQUkzQyxZQUFZLElBQWdEO1FBQzFELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjs7O0lBTkMsbURBQWdCOztJQUNoQixtREFBaUI7O0lBQ2pCLDhDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2V5VmFsdWVJdGVtIH0gZnJvbSAnLi9iYXNlLm1vZGVsJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzZVNlYXJjaFJlcXVlc3Qge1xyXG4gIHNlYXJjaFRleHQ6IHN0cmluZztcclxuICBvcmRlckJ5OiBzdHJpbmc7XHJcbiAgZGlyZWN0aW9uOiBzdHJpbmc7XHJcbiAgY3JlYXRlZEJ5OiBzdHJpbmc7XHJcbiAgcGFnZUluZGV4OiBudW1iZXI7XHJcbiAgcGFnZVNpemU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNlU2VhcmNoUmVzcG9uc2U8VD4ge1xyXG4gIGl0ZW1zOiBUW107XHJcbiAgdG90YWxSZWNvcmRzOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRMb29rdXBJdGVtc1JlcXVlc3Qge1xyXG4gIHB1YmxpYyBwYXJhbXM6IHN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxHZXRMb29rdXBJdGVtc1JlcXVlc3Q+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldExvb2t1cEl0ZW1zUmVzcG9uc2Uge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgaXRlbTogYW55O1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEdldExvb2t1cEl0ZW1zUmVzcG9uc2U+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlbmROb3RpZmljYXRpb25SZXF1ZXN0IHtcclxuICBub3RpZmljYXRpb25UeXBlczogc3RyaW5nW10gPSBbXTtcclxuICBwYXlsb2FkSXRlbXM6IEtleVZhbHVlSXRlbVtdID0gW107XHJcbiAgdGVtcGxhdGVDb2RlOiBzdHJpbmc7XHJcbiAgcmVjaXBpZW50czogc3RyaW5nW10gPSBbXTtcclxuICBmcm9tQWJpZGluZzogYm9vbGVhbjtcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxTZW5kTm90aWZpY2F0aW9uUmVxdWVzdD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VuZE5vdGlmaWNhdGlvblJlc3BvbnNlIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBpZDogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFNlbmROb3RpZmljYXRpb25SZXNwb25zZT4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uVHlwZSB7XHJcbiAgcHVibGljIHN0YXRpYyBFbWFpbDogc3RyaW5nID0gJ0VtYWlsJztcclxuICBwdWJsaWMgc3RhdGljIFNtczogc3RyaW5nID0gJ1Ntcyc7XHJcbiAgcHVibGljIHN0YXRpYyBMb2NhbDogc3RyaW5nID0gJ0xvY2FsJztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXROb3RpZmljYXRpb25UaHJlYWRWaWV3TW9kZWwge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgaGFzUmVhZDogYm9vbGVhbjtcclxuICBkZXRhaWxHcm91cHM6IE5vdGlmaWNhdGlvbkRldGFpbEdyb3VwW10gPSBbXTtcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxFZGl0Tm90aWZpY2F0aW9uVGhyZWFkVmlld01vZGVsPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25EZXRhaWxHcm91cCB7XHJcbiAgZGV0YWlsczogTm90aWZpY2F0aW9uRGV0YWlsW10gPSBbXTtcclxuICBkYXRlOiBEYXRlO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPE5vdGlmaWNhdGlvbkRldGFpbEdyb3VwPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25EZXRhaWwge1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0aW1lOiBEYXRlO1xyXG4gIGNvZGU6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIGhhc1JlYWQ6IGJvb2xlYW47XHJcbiAgcGF5bG9hZDogYW55O1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPE5vdGlmaWNhdGlvbkRldGFpbD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmV0cmlldmVOb3RpZmljYXRpb25UaHJlYWRSZXF1ZXN0IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHBhZ2VJbmRleDogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8UmV0cmlldmVOb3RpZmljYXRpb25UaHJlYWRSZXF1ZXN0Pikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXRyaWV2ZU5vdGlmaWNhdGlvblRocmVhZFJlc3BvbnNlIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgaXRlbTogRWRpdE5vdGlmaWNhdGlvblRocmVhZFZpZXdNb2RlbDtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8UmV0cmlldmVOb3RpZmljYXRpb25UaHJlYWRSZXNwb25zZT4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uVGVtcGxhdGVWYXJpYWJsZSB7XHJcbiAgcHVibGljIHN0YXRpYyBPcmRlcklkZW50aWZpZXI6IHN0cmluZyA9ICdPcmRlcklkZW50aWZpZXInO1xyXG4gIHB1YmxpYyBzdGF0aWMgUGVuZGluZ0FwcHJvdmFsUHJvZHVjdHNDb3VudDogc3RyaW5nID0gJ1BlbmRpbmdBcHByb3ZhbFByb2R1Y3RzQ291bnQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU3VwcGxpZXJzQ291bnQ6IHN0cmluZyA9ICdTdXBwbGllcnNDb3VudCc7XHJcbiAgcHVibGljIHN0YXRpYyBQZW5kaW5nSW5xdWlyaWVzQ291bnQ6IHN0cmluZyA9ICdQZW5kaW5nSW5xdWlyaWVzQ291bnQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgQnV5ZXJOYW1lOiBzdHJpbmcgPSAnQnV5ZXJOYW1lJztcclxuICBwdWJsaWMgc3RhdGljIFByb2R1Y3ROYW1lOiBzdHJpbmcgPSAnUHJvZHVjdE5hbWUnO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDaGFubmVsUmVxdWVzdCB7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8UmVnaXN0ZXJDaGFubmVsUmVxdWVzdD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDaGFubmVsUmVzcG9uc2Uge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBpZDogc3RyaW5nOyBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFJlZ2lzdGVyQ2hhbm5lbFJlc3BvbnNlPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZW5kTGl2ZU5vdGlmaWNhdGlvblJlcXVlc3Qge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICByZWNpcGllbnRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFNlbmRMaXZlTm90aWZpY2F0aW9uUmVxdWVzdD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVtb3ZlTm90aWZpY2F0aW9uRGV0YWlsUmVxdWVzdCB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBncm91cFR5cGU6IHN0cmluZztcclxuICBkYXRlR3JvdXA6IERhdGU7XHJcbiAgZGV0YWlsczogc3RyaW5nW107XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8UmVtb3ZlTm90aWZpY2F0aW9uRGV0YWlsUmVxdWVzdD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVtb3ZlTm90aWZpY2F0aW9uRGV0YWlsUmVzcG9uc2Uge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8UmVtb3ZlTm90aWZpY2F0aW9uRGV0YWlsUmVzcG9uc2U+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlbW92ZU5vdGlmaWNhdGlvbkRldGFpbEdyb3VwVHlwZSB7XHJcbiAgcHVibGljIHN0YXRpYyBBbGw6IHN0cmluZyA9ICdBbGwnO1xyXG4gIHB1YmxpYyBzdGF0aWMgR3JvdXBCeURhdGU6IHN0cmluZyA9ICdHcm91cEJ5RGF0ZSc7XHJcbiAgcHVibGljIHN0YXRpYyBTaW5nbGU6IHN0cmluZyA9ICdTaW5nbGUnO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmV0cmlldmVOb3RpZmljYXRpb25EZXRhaWxSZXF1ZXN0IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHVzZXJJZDogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFJldHJpZXZlTm90aWZpY2F0aW9uRGV0YWlsUmVxdWVzdD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmV0cmlldmVOb3RpZmljYXRpb25EZXRhaWxSZXNwb25zZSB7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIGl0ZW06IE5vdGlmaWNhdGlvbkRldGFpbDtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8UmV0cmlldmVOb3RpZmljYXRpb25EZXRhaWxSZXNwb25zZT4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoSW5ib3hOb3RpZmljYXRpb25zUmVxdWVzdCBpbXBsZW1lbnRzIEJhc2VTZWFyY2hSZXF1ZXN0IHtcclxuICBwYWdlSW5kZXg6IG51bWJlcjtcclxuICBwYWdlU2l6ZTogbnVtYmVyO1xyXG4gIHNlYXJjaFRleHQ6IHN0cmluZztcclxuICBvcmRlckJ5OiBzdHJpbmc7XHJcbiAgZGlyZWN0aW9uOiBzdHJpbmc7XHJcbiAgY3JlYXRlZEJ5OiBzdHJpbmc7XHJcbiAgdXNlcklkOiBzdHJpbmc7XHJcbiAgZnJvbUFiaWRpbmc6IGJvb2xlYW47XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8U2VhcmNoSW5ib3hOb3RpZmljYXRpb25zUmVxdWVzdD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoSW5ib3hOb3RpZmljYXRpb25zUmVzcG9uc2UgaW1wbGVtZW50cyBCYXNlU2VhcmNoUmVzcG9uc2U8Tm90aWZpY2F0aW9uRGV0YWlsR3JvdXA+IHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgaXRlbXM6IE5vdGlmaWNhdGlvbkRldGFpbEdyb3VwW107XHJcbiAgdG90YWxQZW5kaW5nUmVjb3JkczogbnVtYmVyO1xyXG4gIHRvdGFsUmVjb3JkczogbnVtYmVyO1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgaWQ6IHN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxTZWFyY2hJbmJveE5vdGlmaWNhdGlvbnNSZXNwb25zZT4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWFya0FsbE5vdGlmaWNhdGlvbnNSZWFkUmVxdWVzdCB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxNYXJrQWxsTm90aWZpY2F0aW9uc1JlYWRSZXF1ZXN0Pikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNYXJrQWxsTm90aWZpY2F0aW9uc1JlYWRSZXNwb25zZSB7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgaWQ6IHN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxNYXJrQWxsTm90aWZpY2F0aW9uc1JlYWRSZXNwb25zZT4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==