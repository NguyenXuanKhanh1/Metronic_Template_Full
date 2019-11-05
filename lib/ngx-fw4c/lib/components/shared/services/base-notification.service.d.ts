import { Observable } from 'rxjs';
import { SendNotificationRequest, SendNotificationResponse, RetrieveNotificationThreadRequest, RetrieveNotificationThreadResponse, SearchInboxNotificationsRequest, SearchInboxNotificationsResponse, RemoveNotificationDetailRequest, RemoveNotificationDetailResponse, RetrieveNotificationDetailRequest, RetrieveNotificationDetailResponse, MarkAllNotificationsReadRequest, MarkAllNotificationsReadResponse, NotificationDetail } from '../models/notification.model';
export declare abstract class BaseNotificationService {
    abstract success(message: string, title?: string): void;
    abstract error(message: string, title?: string): void;
    abstract info(message: string, title?: string): void;
    abstract warning(message: string, title?: string): void;
    abstract send(request: SendNotificationRequest): Observable<SendNotificationResponse>;
    abstract retrieveNotificationThread(request: RetrieveNotificationThreadRequest): Observable<RetrieveNotificationThreadResponse>;
    abstract searchNotificationDetails(request: SearchInboxNotificationsRequest): Observable<SearchInboxNotificationsResponse>;
    abstract removeNotificationDetail(request: RemoveNotificationDetailRequest): Observable<RemoveNotificationDetailResponse>;
    abstract retrieveNotificationDetail(request: RetrieveNotificationDetailRequest): Observable<RetrieveNotificationDetailResponse>;
    abstract markAllRead(request: MarkAllNotificationsReadRequest): Observable<MarkAllNotificationsReadResponse>;
    abstract registerConnection(): any;
    abstract redirect(detail: NotificationDetail): void;
}
