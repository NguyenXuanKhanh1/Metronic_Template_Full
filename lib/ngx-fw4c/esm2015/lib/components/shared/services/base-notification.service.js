/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @abstract
 */
export class BaseNotificationService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1ub3RpZmljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL2Jhc2Utbm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFtQjNDLE1BQU0sT0FBZ0IsdUJBQXVCOzs7WUFENUMsVUFBVTs7Ozs7Ozs7O0lBRVQsMEVBQStEOzs7Ozs7O0lBQy9ELHdFQUE2RDs7Ozs7OztJQUM3RCx1RUFBNEQ7Ozs7Ozs7SUFDNUQsMEVBQStEOzs7Ozs7SUFDL0QsZ0VBQTZGOzs7Ozs7SUFDN0Ysc0ZBQXVJOzs7Ozs7SUFDdkkscUZBQWtJOzs7Ozs7SUFDbEksb0ZBQWlJOzs7Ozs7SUFDakksc0ZBQXVJOzs7Ozs7SUFDdkksdUVBQW9IOzs7OztJQUNwSCx1RUFBcUM7Ozs7OztJQUNyQyxtRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtcclxuICBTZW5kTm90aWZpY2F0aW9uUmVxdWVzdCxcclxuICBTZW5kTm90aWZpY2F0aW9uUmVzcG9uc2UsXHJcbiAgUmV0cmlldmVOb3RpZmljYXRpb25UaHJlYWRSZXF1ZXN0LFxyXG4gIFJldHJpZXZlTm90aWZpY2F0aW9uVGhyZWFkUmVzcG9uc2UsXHJcbiAgU2VhcmNoSW5ib3hOb3RpZmljYXRpb25zUmVxdWVzdCxcclxuICBTZWFyY2hJbmJveE5vdGlmaWNhdGlvbnNSZXNwb25zZSxcclxuICBSZW1vdmVOb3RpZmljYXRpb25EZXRhaWxSZXF1ZXN0LFxyXG4gIFJlbW92ZU5vdGlmaWNhdGlvbkRldGFpbFJlc3BvbnNlLFxyXG4gIFJldHJpZXZlTm90aWZpY2F0aW9uRGV0YWlsUmVxdWVzdCxcclxuICBSZXRyaWV2ZU5vdGlmaWNhdGlvbkRldGFpbFJlc3BvbnNlLFxyXG4gIE1hcmtBbGxOb3RpZmljYXRpb25zUmVhZFJlcXVlc3QsXHJcbiAgTWFya0FsbE5vdGlmaWNhdGlvbnNSZWFkUmVzcG9uc2UsXHJcbiAgTm90aWZpY2F0aW9uRGV0YWlsXHJcbn0gZnJvbSAnLi4vbW9kZWxzL25vdGlmaWNhdGlvbi5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlTm90aWZpY2F0aW9uU2VydmljZSB7XHJcbiAgcHVibGljIGFic3RyYWN0IHN1Y2Nlc3MobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZyk6IHZvaWQ7XHJcbiAgcHVibGljIGFic3RyYWN0IGVycm9yKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcpOiB2b2lkO1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBpbmZvKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcpOiB2b2lkO1xyXG4gIHB1YmxpYyBhYnN0cmFjdCB3YXJuaW5nKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcpOiB2b2lkO1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBzZW5kKHJlcXVlc3Q6IFNlbmROb3RpZmljYXRpb25SZXF1ZXN0KTogT2JzZXJ2YWJsZTxTZW5kTm90aWZpY2F0aW9uUmVzcG9uc2U+O1xyXG4gIHB1YmxpYyBhYnN0cmFjdCByZXRyaWV2ZU5vdGlmaWNhdGlvblRocmVhZChyZXF1ZXN0OiBSZXRyaWV2ZU5vdGlmaWNhdGlvblRocmVhZFJlcXVlc3QpOiBPYnNlcnZhYmxlPFJldHJpZXZlTm90aWZpY2F0aW9uVGhyZWFkUmVzcG9uc2U+O1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBzZWFyY2hOb3RpZmljYXRpb25EZXRhaWxzKHJlcXVlc3Q6IFNlYXJjaEluYm94Tm90aWZpY2F0aW9uc1JlcXVlc3QpOiBPYnNlcnZhYmxlPFNlYXJjaEluYm94Tm90aWZpY2F0aW9uc1Jlc3BvbnNlPjtcclxuICBwdWJsaWMgYWJzdHJhY3QgcmVtb3ZlTm90aWZpY2F0aW9uRGV0YWlsKHJlcXVlc3Q6IFJlbW92ZU5vdGlmaWNhdGlvbkRldGFpbFJlcXVlc3QpOiBPYnNlcnZhYmxlPFJlbW92ZU5vdGlmaWNhdGlvbkRldGFpbFJlc3BvbnNlPjtcclxuICBwdWJsaWMgYWJzdHJhY3QgcmV0cmlldmVOb3RpZmljYXRpb25EZXRhaWwocmVxdWVzdDogUmV0cmlldmVOb3RpZmljYXRpb25EZXRhaWxSZXF1ZXN0KTogT2JzZXJ2YWJsZTxSZXRyaWV2ZU5vdGlmaWNhdGlvbkRldGFpbFJlc3BvbnNlPjtcclxuICBwdWJsaWMgYWJzdHJhY3QgbWFya0FsbFJlYWQocmVxdWVzdDogTWFya0FsbE5vdGlmaWNhdGlvbnNSZWFkUmVxdWVzdCk6IE9ic2VydmFibGU8TWFya0FsbE5vdGlmaWNhdGlvbnNSZWFkUmVzcG9uc2U+O1xyXG4gIHB1YmxpYyBhYnN0cmFjdCByZWdpc3RlckNvbm5lY3Rpb24oKTtcclxuICBwdWJsaWMgYWJzdHJhY3QgcmVkaXJlY3QoZGV0YWlsOiBOb3RpZmljYXRpb25EZXRhaWwpOiB2b2lkO1xyXG59XHJcbiJdfQ==