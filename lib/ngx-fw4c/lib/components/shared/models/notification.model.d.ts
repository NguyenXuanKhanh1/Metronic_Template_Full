import { KeyValueItem } from './base.model';
export interface BaseSearchRequest {
    searchText: string;
    orderBy: string;
    direction: string;
    createdBy: string;
    pageIndex: number;
    pageSize: number;
}
export interface BaseSearchResponse<T> {
    items: T[];
    totalRecords: number;
}
export declare class GetLookupItemsRequest {
    params: string;
    constructor(init?: Partial<GetLookupItemsRequest>);
}
export declare class GetLookupItemsResponse {
    message: string;
    success: boolean;
    id: string;
    item: any;
    constructor(init?: Partial<GetLookupItemsResponse>);
}
export declare class SendNotificationRequest {
    notificationTypes: string[];
    payloadItems: KeyValueItem[];
    templateCode: string;
    recipients: string[];
    fromAbiding: boolean;
    constructor(init?: Partial<SendNotificationRequest>);
}
export declare class SendNotificationResponse {
    message: string;
    success: boolean;
    id: string;
    constructor(init?: Partial<SendNotificationResponse>);
}
export declare class NotificationType {
    static Email: string;
    static Sms: string;
    static Local: string;
}
export declare class EditNotificationThreadViewModel {
    id: string;
    hasRead: boolean;
    detailGroups: NotificationDetailGroup[];
    constructor(init?: Partial<EditNotificationThreadViewModel>);
}
export declare class NotificationDetailGroup {
    details: NotificationDetail[];
    date: Date;
    constructor(init?: Partial<NotificationDetailGroup>);
}
export declare class NotificationDetail {
    description: string;
    title: string;
    time: Date;
    code: string;
    id: string;
    hasRead: boolean;
    payload: any;
    constructor(init?: Partial<NotificationDetail>);
}
export declare class RetrieveNotificationThreadRequest {
    id: string;
    pageIndex: number;
    pageSize: number;
    constructor(init?: Partial<RetrieveNotificationThreadRequest>);
}
export declare class RetrieveNotificationThreadResponse {
    message: string;
    item: EditNotificationThreadViewModel;
    success: boolean;
    id: string;
    constructor(init?: Partial<RetrieveNotificationThreadResponse>);
}
export declare class NotificationTemplateVariable {
    static OrderIdentifier: string;
    static PendingApprovalProductsCount: string;
    static SuppliersCount: string;
    static PendingInquiriesCount: string;
    static BuyerName: string;
    static ProductName: string;
}
export declare class RegisterChannelRequest {
    constructor(init?: Partial<RegisterChannelRequest>);
}
export declare class RegisterChannelResponse {
    message: string;
    id: string;
    success: boolean;
    constructor(init?: Partial<RegisterChannelResponse>);
}
export declare class SendLiveNotificationRequest {
    message: string;
    recipients: string[];
    constructor(init?: Partial<SendLiveNotificationRequest>);
}
export declare class RemoveNotificationDetailRequest {
    id: string;
    groupType: string;
    dateGroup: Date;
    details: string[];
    constructor(init?: Partial<RemoveNotificationDetailRequest>);
}
export declare class RemoveNotificationDetailResponse {
    message: string;
    success: boolean;
    id: string;
    constructor(init?: Partial<RemoveNotificationDetailResponse>);
}
export declare class RemoveNotificationDetailGroupType {
    static All: string;
    static GroupByDate: string;
    static Single: string;
}
export declare class RetrieveNotificationDetailRequest {
    id: string;
    userId: string;
    constructor(init?: Partial<RetrieveNotificationDetailRequest>);
}
export declare class RetrieveNotificationDetailResponse {
    message: string;
    item: NotificationDetail;
    success: boolean;
    id: string;
    constructor(init?: Partial<RetrieveNotificationDetailResponse>);
}
export declare class SearchInboxNotificationsRequest implements BaseSearchRequest {
    pageIndex: number;
    pageSize: number;
    searchText: string;
    orderBy: string;
    direction: string;
    createdBy: string;
    userId: string;
    fromAbiding: boolean;
    constructor(init?: Partial<SearchInboxNotificationsRequest>);
}
export declare class SearchInboxNotificationsResponse implements BaseSearchResponse<NotificationDetailGroup> {
    message: string;
    items: NotificationDetailGroup[];
    totalPendingRecords: number;
    totalRecords: number;
    success: boolean;
    id: string;
    constructor(init?: Partial<SearchInboxNotificationsResponse>);
}
export declare class MarkAllNotificationsReadRequest {
    id: string;
    constructor(init?: Partial<MarkAllNotificationsReadRequest>);
}
export declare class MarkAllNotificationsReadResponse {
    message: string;
    success: boolean;
    id: string;
    constructor(init?: Partial<MarkAllNotificationsReadResponse>);
}
