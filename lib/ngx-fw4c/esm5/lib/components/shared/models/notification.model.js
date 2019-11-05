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
var GetLookupItemsRequest = /** @class */ (function () {
    function GetLookupItemsRequest(init) {
        Object.assign(this, init);
    }
    return GetLookupItemsRequest;
}());
export { GetLookupItemsRequest };
if (false) {
    /** @type {?} */
    GetLookupItemsRequest.prototype.params;
}
var GetLookupItemsResponse = /** @class */ (function () {
    function GetLookupItemsResponse(init) {
        Object.assign(this, init);
    }
    return GetLookupItemsResponse;
}());
export { GetLookupItemsResponse };
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
var SendNotificationRequest = /** @class */ (function () {
    function SendNotificationRequest(init) {
        this.notificationTypes = [];
        this.payloadItems = [];
        this.recipients = [];
        Object.assign(this, init);
    }
    return SendNotificationRequest;
}());
export { SendNotificationRequest };
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
var SendNotificationResponse = /** @class */ (function () {
    function SendNotificationResponse(init) {
        Object.assign(this, init);
    }
    return SendNotificationResponse;
}());
export { SendNotificationResponse };
if (false) {
    /** @type {?} */
    SendNotificationResponse.prototype.message;
    /** @type {?} */
    SendNotificationResponse.prototype.success;
    /** @type {?} */
    SendNotificationResponse.prototype.id;
}
var NotificationType = /** @class */ (function () {
    function NotificationType() {
    }
    NotificationType.Email = 'Email';
    NotificationType.Sms = 'Sms';
    NotificationType.Local = 'Local';
    return NotificationType;
}());
export { NotificationType };
if (false) {
    /** @type {?} */
    NotificationType.Email;
    /** @type {?} */
    NotificationType.Sms;
    /** @type {?} */
    NotificationType.Local;
}
var EditNotificationThreadViewModel = /** @class */ (function () {
    function EditNotificationThreadViewModel(init) {
        this.detailGroups = [];
        Object.assign(this, init);
    }
    return EditNotificationThreadViewModel;
}());
export { EditNotificationThreadViewModel };
if (false) {
    /** @type {?} */
    EditNotificationThreadViewModel.prototype.id;
    /** @type {?} */
    EditNotificationThreadViewModel.prototype.hasRead;
    /** @type {?} */
    EditNotificationThreadViewModel.prototype.detailGroups;
}
var NotificationDetailGroup = /** @class */ (function () {
    function NotificationDetailGroup(init) {
        this.details = [];
        Object.assign(this, init);
    }
    return NotificationDetailGroup;
}());
export { NotificationDetailGroup };
if (false) {
    /** @type {?} */
    NotificationDetailGroup.prototype.details;
    /** @type {?} */
    NotificationDetailGroup.prototype.date;
}
var NotificationDetail = /** @class */ (function () {
    function NotificationDetail(init) {
        Object.assign(this, init);
    }
    return NotificationDetail;
}());
export { NotificationDetail };
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
var RetrieveNotificationThreadRequest = /** @class */ (function () {
    function RetrieveNotificationThreadRequest(init) {
        Object.assign(this, init);
    }
    return RetrieveNotificationThreadRequest;
}());
export { RetrieveNotificationThreadRequest };
if (false) {
    /** @type {?} */
    RetrieveNotificationThreadRequest.prototype.id;
    /** @type {?} */
    RetrieveNotificationThreadRequest.prototype.pageIndex;
    /** @type {?} */
    RetrieveNotificationThreadRequest.prototype.pageSize;
}
var RetrieveNotificationThreadResponse = /** @class */ (function () {
    function RetrieveNotificationThreadResponse(init) {
        Object.assign(this, init);
    }
    return RetrieveNotificationThreadResponse;
}());
export { RetrieveNotificationThreadResponse };
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
var NotificationTemplateVariable = /** @class */ (function () {
    function NotificationTemplateVariable() {
    }
    NotificationTemplateVariable.OrderIdentifier = 'OrderIdentifier';
    NotificationTemplateVariable.PendingApprovalProductsCount = 'PendingApprovalProductsCount';
    NotificationTemplateVariable.SuppliersCount = 'SuppliersCount';
    NotificationTemplateVariable.PendingInquiriesCount = 'PendingInquiriesCount';
    NotificationTemplateVariable.BuyerName = 'BuyerName';
    NotificationTemplateVariable.ProductName = 'ProductName';
    return NotificationTemplateVariable;
}());
export { NotificationTemplateVariable };
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
var RegisterChannelRequest = /** @class */ (function () {
    function RegisterChannelRequest(init) {
        Object.assign(this, init);
    }
    return RegisterChannelRequest;
}());
export { RegisterChannelRequest };
var RegisterChannelResponse = /** @class */ (function () {
    function RegisterChannelResponse(init) {
        Object.assign(this, init);
    }
    return RegisterChannelResponse;
}());
export { RegisterChannelResponse };
if (false) {
    /** @type {?} */
    RegisterChannelResponse.prototype.message;
    /** @type {?} */
    RegisterChannelResponse.prototype.id;
    /** @type {?} */
    RegisterChannelResponse.prototype.success;
}
var SendLiveNotificationRequest = /** @class */ (function () {
    function SendLiveNotificationRequest(init) {
        this.recipients = [];
        Object.assign(this, init);
    }
    return SendLiveNotificationRequest;
}());
export { SendLiveNotificationRequest };
if (false) {
    /** @type {?} */
    SendLiveNotificationRequest.prototype.message;
    /** @type {?} */
    SendLiveNotificationRequest.prototype.recipients;
}
var RemoveNotificationDetailRequest = /** @class */ (function () {
    function RemoveNotificationDetailRequest(init) {
        Object.assign(this, init);
    }
    return RemoveNotificationDetailRequest;
}());
export { RemoveNotificationDetailRequest };
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
var RemoveNotificationDetailResponse = /** @class */ (function () {
    function RemoveNotificationDetailResponse(init) {
        Object.assign(this, init);
    }
    return RemoveNotificationDetailResponse;
}());
export { RemoveNotificationDetailResponse };
if (false) {
    /** @type {?} */
    RemoveNotificationDetailResponse.prototype.message;
    /** @type {?} */
    RemoveNotificationDetailResponse.prototype.success;
    /** @type {?} */
    RemoveNotificationDetailResponse.prototype.id;
}
var RemoveNotificationDetailGroupType = /** @class */ (function () {
    function RemoveNotificationDetailGroupType() {
    }
    RemoveNotificationDetailGroupType.All = 'All';
    RemoveNotificationDetailGroupType.GroupByDate = 'GroupByDate';
    RemoveNotificationDetailGroupType.Single = 'Single';
    return RemoveNotificationDetailGroupType;
}());
export { RemoveNotificationDetailGroupType };
if (false) {
    /** @type {?} */
    RemoveNotificationDetailGroupType.All;
    /** @type {?} */
    RemoveNotificationDetailGroupType.GroupByDate;
    /** @type {?} */
    RemoveNotificationDetailGroupType.Single;
}
var RetrieveNotificationDetailRequest = /** @class */ (function () {
    function RetrieveNotificationDetailRequest(init) {
        Object.assign(this, init);
    }
    return RetrieveNotificationDetailRequest;
}());
export { RetrieveNotificationDetailRequest };
if (false) {
    /** @type {?} */
    RetrieveNotificationDetailRequest.prototype.id;
    /** @type {?} */
    RetrieveNotificationDetailRequest.prototype.userId;
}
var RetrieveNotificationDetailResponse = /** @class */ (function () {
    function RetrieveNotificationDetailResponse(init) {
        Object.assign(this, init);
    }
    return RetrieveNotificationDetailResponse;
}());
export { RetrieveNotificationDetailResponse };
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
var SearchInboxNotificationsRequest = /** @class */ (function () {
    function SearchInboxNotificationsRequest(init) {
        Object.assign(this, init);
    }
    return SearchInboxNotificationsRequest;
}());
export { SearchInboxNotificationsRequest };
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
var SearchInboxNotificationsResponse = /** @class */ (function () {
    function SearchInboxNotificationsResponse(init) {
        Object.assign(this, init);
    }
    return SearchInboxNotificationsResponse;
}());
export { SearchInboxNotificationsResponse };
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
var MarkAllNotificationsReadRequest = /** @class */ (function () {
    function MarkAllNotificationsReadRequest(init) {
        Object.assign(this, init);
    }
    return MarkAllNotificationsReadRequest;
}());
export { MarkAllNotificationsReadRequest };
if (false) {
    /** @type {?} */
    MarkAllNotificationsReadRequest.prototype.id;
}
var MarkAllNotificationsReadResponse = /** @class */ (function () {
    function MarkAllNotificationsReadResponse(init) {
        Object.assign(this, init);
    }
    return MarkAllNotificationsReadResponse;
}());
export { MarkAllNotificationsReadResponse };
if (false) {
    /** @type {?} */
    MarkAllNotificationsReadResponse.prototype.message;
    /** @type {?} */
    MarkAllNotificationsReadResponse.prototype.success;
    /** @type {?} */
    MarkAllNotificationsReadResponse.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvbW9kZWxzL25vdGlmaWNhdGlvbi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsdUNBT0M7OztJQU5DLHVDQUFtQjs7SUFDbkIsb0NBQWdCOztJQUNoQixzQ0FBa0I7O0lBQ2xCLHNDQUFrQjs7SUFDbEIsc0NBQWtCOztJQUNsQixxQ0FBaUI7Ozs7OztBQUduQix3Q0FHQzs7O0lBRkMsbUNBQVc7O0lBQ1gsMENBQXFCOztBQUd2QjtJQUVFLCtCQUFZLElBQXFDO1FBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFMRCxJQUtDOzs7O0lBSkMsdUNBQXNCOztBQU14QjtJQUtFLGdDQUFZLElBQXNDO1FBQ2hELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFSRCxJQVFDOzs7O0lBUEMseUNBQWdCOztJQUNoQix5Q0FBaUI7O0lBQ2pCLG9DQUFXOztJQUNYLHNDQUFVOztBQU1aO0lBTUUsaUNBQVksSUFBdUM7UUFMbkQsc0JBQWlCLEdBQWEsRUFBRSxDQUFDO1FBQ2pDLGlCQUFZLEdBQW1CLEVBQUUsQ0FBQztRQUVsQyxlQUFVLEdBQWEsRUFBRSxDQUFDO1FBR3hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUFURCxJQVNDOzs7O0lBUkMsb0RBQWlDOztJQUNqQywrQ0FBa0M7O0lBQ2xDLCtDQUFxQjs7SUFDckIsNkNBQTBCOztJQUMxQiw4Q0FBcUI7O0FBTXZCO0lBSUUsa0NBQVksSUFB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QUFDLENBQUM7SUFDNUIsQ0FBQztJQUNILHlDQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7Ozs7SUFQQyxxREFBZ0I7O0lBQ2hCLGtEQUF5Qjs7SUFDekIscURBQWlCOztJQUNqQixnREFBVzs7QUFNYjtJQVNFLHlDQUFZLElBQStDO1FBQ3pELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCxzQ0FBQztBQUFELENBQUMsQUFaRCxJQVlDOzs7O0lBWEMsb0RBQWtCOztJQUNsQixtREFBaUI7O0lBQ2pCLHFEQUFtQjs7SUFDbkIsa0RBQWdCOztJQUNoQixvREFBa0I7O0lBQ2xCLG9EQUFrQjs7SUFDbEIsaURBQWU7O0lBQ2Ysc0RBQXFCOztBQU12QjtJQU9FLDBDQUFZLElBQWdEO1FBQzFELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCx1Q0FBQztBQUFELENBQUMsQUFWRCxJQVVDOzs7O0lBVEMsbURBQWdCOztJQUNoQixpREFBaUM7O0lBQ2pDLCtEQUE0Qjs7SUFDNUIsd0RBQXFCOztJQUNyQixtREFBaUI7O0lBQ2pCLDhDQUFXOztBQU1iO0lBRUUseUNBQVksSUFBK0M7UUFDekQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNILHNDQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7Ozs7SUFKQyw2Q0FBVzs7QUFNYjtJQUlFLDBDQUFZLElBQWdEO1FBQzFELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCx1Q0FBQztBQUFELENBQUMsQUFQRCxJQU9DOzs7O0lBTkMsbURBQWdCOztJQUNoQixtREFBaUI7O0lBQ2pCLDhDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2V5VmFsdWVJdGVtIH0gZnJvbSAnLi9iYXNlLm1vZGVsJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzZVNlYXJjaFJlcXVlc3Qge1xyXG4gIHNlYXJjaFRleHQ6IHN0cmluZztcclxuICBvcmRlckJ5OiBzdHJpbmc7XHJcbiAgZGlyZWN0aW9uOiBzdHJpbmc7XHJcbiAgY3JlYXRlZEJ5OiBzdHJpbmc7XHJcbiAgcGFnZUluZGV4OiBudW1iZXI7XHJcbiAgcGFnZVNpemU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNlU2VhcmNoUmVzcG9uc2U8VD4ge1xyXG4gIGl0ZW1zOiBUW107XHJcbiAgdG90YWxSZWNvcmRzOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRMb29rdXBJdGVtc1JlcXVlc3Qge1xyXG4gIHB1YmxpYyBwYXJhbXM6IHN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxHZXRMb29rdXBJdGVtc1JlcXVlc3Q+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldExvb2t1cEl0ZW1zUmVzcG9uc2Uge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgaXRlbTogYW55O1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEdldExvb2t1cEl0ZW1zUmVzcG9uc2U+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlbmROb3RpZmljYXRpb25SZXF1ZXN0IHtcclxuICBub3RpZmljYXRpb25UeXBlczogc3RyaW5nW10gPSBbXTtcclxuICBwYXlsb2FkSXRlbXM6IEtleVZhbHVlSXRlbVtdID0gW107XHJcbiAgdGVtcGxhdGVDb2RlOiBzdHJpbmc7XHJcbiAgcmVjaXBpZW50czogc3RyaW5nW10gPSBbXTtcclxuICBmcm9tQWJpZGluZzogYm9vbGVhbjtcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxTZW5kTm90aWZpY2F0aW9uUmVxdWVzdD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VuZE5vdGlmaWNhdGlvblJlc3BvbnNlIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBpZDogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFNlbmROb3RpZmljYXRpb25SZXNwb25zZT4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uVHlwZSB7XHJcbiAgcHVibGljIHN0YXRpYyBFbWFpbDogc3RyaW5nID0gJ0VtYWlsJztcclxuICBwdWJsaWMgc3RhdGljIFNtczogc3RyaW5nID0gJ1Ntcyc7XHJcbiAgcHVibGljIHN0YXRpYyBMb2NhbDogc3RyaW5nID0gJ0xvY2FsJztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXROb3RpZmljYXRpb25UaHJlYWRWaWV3TW9kZWwge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgaGFzUmVhZDogYm9vbGVhbjtcclxuICBkZXRhaWxHcm91cHM6IE5vdGlmaWNhdGlvbkRldGFpbEdyb3VwW10gPSBbXTtcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxFZGl0Tm90aWZpY2F0aW9uVGhyZWFkVmlld01vZGVsPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25EZXRhaWxHcm91cCB7XHJcbiAgZGV0YWlsczogTm90aWZpY2F0aW9uRGV0YWlsW10gPSBbXTtcclxuICBkYXRlOiBEYXRlO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPE5vdGlmaWNhdGlvbkRldGFpbEdyb3VwPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25EZXRhaWwge1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0aW1lOiBEYXRlO1xyXG4gIGNvZGU6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIGhhc1JlYWQ6IGJvb2xlYW47XHJcbiAgcGF5bG9hZDogYW55O1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPE5vdGlmaWNhdGlvbkRldGFpbD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmV0cmlldmVOb3RpZmljYXRpb25UaHJlYWRSZXF1ZXN0IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHBhZ2VJbmRleDogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8UmV0cmlldmVOb3RpZmljYXRpb25UaHJlYWRSZXF1ZXN0Pikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXRyaWV2ZU5vdGlmaWNhdGlvblRocmVhZFJlc3BvbnNlIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgaXRlbTogRWRpdE5vdGlmaWNhdGlvblRocmVhZFZpZXdNb2RlbDtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8UmV0cmlldmVOb3RpZmljYXRpb25UaHJlYWRSZXNwb25zZT4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uVGVtcGxhdGVWYXJpYWJsZSB7XHJcbiAgcHVibGljIHN0YXRpYyBPcmRlcklkZW50aWZpZXI6IHN0cmluZyA9ICdPcmRlcklkZW50aWZpZXInO1xyXG4gIHB1YmxpYyBzdGF0aWMgUGVuZGluZ0FwcHJvdmFsUHJvZHVjdHNDb3VudDogc3RyaW5nID0gJ1BlbmRpbmdBcHByb3ZhbFByb2R1Y3RzQ291bnQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU3VwcGxpZXJzQ291bnQ6IHN0cmluZyA9ICdTdXBwbGllcnNDb3VudCc7XHJcbiAgcHVibGljIHN0YXRpYyBQZW5kaW5nSW5xdWlyaWVzQ291bnQ6IHN0cmluZyA9ICdQZW5kaW5nSW5xdWlyaWVzQ291bnQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgQnV5ZXJOYW1lOiBzdHJpbmcgPSAnQnV5ZXJOYW1lJztcclxuICBwdWJsaWMgc3RhdGljIFByb2R1Y3ROYW1lOiBzdHJpbmcgPSAnUHJvZHVjdE5hbWUnO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDaGFubmVsUmVxdWVzdCB7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8UmVnaXN0ZXJDaGFubmVsUmVxdWVzdD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDaGFubmVsUmVzcG9uc2Uge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBpZDogc3RyaW5nOyBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFJlZ2lzdGVyQ2hhbm5lbFJlc3BvbnNlPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZW5kTGl2ZU5vdGlmaWNhdGlvblJlcXVlc3Qge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICByZWNpcGllbnRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFNlbmRMaXZlTm90aWZpY2F0aW9uUmVxdWVzdD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVtb3ZlTm90aWZpY2F0aW9uRGV0YWlsUmVxdWVzdCB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBncm91cFR5cGU6IHN0cmluZztcclxuICBkYXRlR3JvdXA6IERhdGU7XHJcbiAgZGV0YWlsczogc3RyaW5nW107XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8UmVtb3ZlTm90aWZpY2F0aW9uRGV0YWlsUmVxdWVzdD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVtb3ZlTm90aWZpY2F0aW9uRGV0YWlsUmVzcG9uc2Uge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8UmVtb3ZlTm90aWZpY2F0aW9uRGV0YWlsUmVzcG9uc2U+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlbW92ZU5vdGlmaWNhdGlvbkRldGFpbEdyb3VwVHlwZSB7XHJcbiAgcHVibGljIHN0YXRpYyBBbGw6IHN0cmluZyA9ICdBbGwnO1xyXG4gIHB1YmxpYyBzdGF0aWMgR3JvdXBCeURhdGU6IHN0cmluZyA9ICdHcm91cEJ5RGF0ZSc7XHJcbiAgcHVibGljIHN0YXRpYyBTaW5nbGU6IHN0cmluZyA9ICdTaW5nbGUnO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmV0cmlldmVOb3RpZmljYXRpb25EZXRhaWxSZXF1ZXN0IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHVzZXJJZDogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFJldHJpZXZlTm90aWZpY2F0aW9uRGV0YWlsUmVxdWVzdD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmV0cmlldmVOb3RpZmljYXRpb25EZXRhaWxSZXNwb25zZSB7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIGl0ZW06IE5vdGlmaWNhdGlvbkRldGFpbDtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8UmV0cmlldmVOb3RpZmljYXRpb25EZXRhaWxSZXNwb25zZT4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoSW5ib3hOb3RpZmljYXRpb25zUmVxdWVzdCBpbXBsZW1lbnRzIEJhc2VTZWFyY2hSZXF1ZXN0IHtcclxuICBwYWdlSW5kZXg6IG51bWJlcjtcclxuICBwYWdlU2l6ZTogbnVtYmVyO1xyXG4gIHNlYXJjaFRleHQ6IHN0cmluZztcclxuICBvcmRlckJ5OiBzdHJpbmc7XHJcbiAgZGlyZWN0aW9uOiBzdHJpbmc7XHJcbiAgY3JlYXRlZEJ5OiBzdHJpbmc7XHJcbiAgdXNlcklkOiBzdHJpbmc7XHJcbiAgZnJvbUFiaWRpbmc6IGJvb2xlYW47XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8U2VhcmNoSW5ib3hOb3RpZmljYXRpb25zUmVxdWVzdD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoSW5ib3hOb3RpZmljYXRpb25zUmVzcG9uc2UgaW1wbGVtZW50cyBCYXNlU2VhcmNoUmVzcG9uc2U8Tm90aWZpY2F0aW9uRGV0YWlsR3JvdXA+IHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgaXRlbXM6IE5vdGlmaWNhdGlvbkRldGFpbEdyb3VwW107XHJcbiAgdG90YWxQZW5kaW5nUmVjb3JkczogbnVtYmVyO1xyXG4gIHRvdGFsUmVjb3JkczogbnVtYmVyO1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgaWQ6IHN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxTZWFyY2hJbmJveE5vdGlmaWNhdGlvbnNSZXNwb25zZT4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWFya0FsbE5vdGlmaWNhdGlvbnNSZWFkUmVxdWVzdCB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxNYXJrQWxsTm90aWZpY2F0aW9uc1JlYWRSZXF1ZXN0Pikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNYXJrQWxsTm90aWZpY2F0aW9uc1JlYWRSZXNwb25zZSB7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgaWQ6IHN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxNYXJrQWxsTm90aWZpY2F0aW9uc1JlYWRSZXNwb25zZT4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==