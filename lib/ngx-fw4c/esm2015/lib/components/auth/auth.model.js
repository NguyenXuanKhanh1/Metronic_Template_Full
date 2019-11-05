/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseRequest, BaseResponse, SearchBaseRequest, SearchBaseResponse } from '../shared/models';
export class UserViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    UserViewModel.prototype.id;
    /** @type {?} */
    UserViewModel.prototype.fullName;
    /** @type {?} */
    UserViewModel.prototype.firstName;
    /** @type {?} */
    UserViewModel.prototype.lastName;
    /** @type {?} */
    UserViewModel.prototype.userName;
    /** @type {?} */
    UserViewModel.prototype.email;
    /** @type {?} */
    UserViewModel.prototype.image;
    /** @type {?} */
    UserViewModel.prototype.phone;
    /** @type {?} */
    UserViewModel.prototype.dateOfBirth;
    /** @type {?} */
    UserViewModel.prototype.externalInfo;
}
export class AuthenticationViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    AuthenticationViewModel.prototype.userName;
    /** @type {?} */
    AuthenticationViewModel.prototype.password;
}
export class AuthenticationLoginRequest extends BaseRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        this.payload = new AuthenticationViewModel();
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    AuthenticationLoginRequest.prototype.token;
    /** @type {?} */
    AuthenticationLoginRequest.prototype.payload;
}
export class AuthenticationLoginResponse extends BaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    AuthenticationLoginResponse.prototype.user;
    /** @type {?} */
    AuthenticationLoginResponse.prototype.token;
}
export class AuthenticationCreateRequest extends BaseRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
export class AuthenticationCreateResponse extends BaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
export class AuthenticationUpdateRequest extends BaseRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
export class AuthenticationUpdateResponse extends BaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
export class AuthenticationRetrieveRequest extends BaseRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
export class AuthenticationRetrieveResponse extends BaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
export class AuthenticationDeleteRequest extends BaseRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    AuthenticationDeleteRequest.prototype.ids;
}
export class AuthenticationDeleteResponse extends BaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
export class AuthenticationSearchRequest extends SearchBaseRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
export class AuthenticationSearchResponse extends SearchBaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXV0aC9hdXRoLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR3BHLE1BQU0sT0FBTyxhQUFhOzs7O0lBV3RCLFlBQVksSUFBNkI7UUFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKOzs7SUFiRywyQkFBVzs7SUFDWCxpQ0FBaUI7O0lBQ2pCLGtDQUFrQjs7SUFDbEIsaUNBQWlCOztJQUNqQixpQ0FBaUI7O0lBQ2pCLDhCQUFlOztJQUNmLDhCQUFzQjs7SUFDdEIsOEJBQWU7O0lBQ2Ysb0NBQW1COztJQUNuQixxQ0FBbUI7O0FBTXZCLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFHaEMsWUFBWSxJQUF1QztRQUMvQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7OztJQUxHLDJDQUFpQjs7SUFDakIsMkNBQWlCOztBQU1yQixNQUFNLE9BQU8sMEJBQTJCLFNBQVEsV0FBb0M7Ozs7SUFHaEYsWUFBWSxJQUEwQztRQUNsRCxLQUFLLEVBQUUsQ0FBQztRQUZaLFlBQU8sR0FBNEIsSUFBSSx1QkFBdUIsRUFBRSxDQUFDO1FBRzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjs7O0lBTkcsMkNBQWU7O0lBQ2YsNkNBQWlFOztBQU9yRSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsWUFBcUM7Ozs7SUFHbEYsWUFBWSxJQUEyQztRQUNuRCxLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjs7O0lBTkcsMkNBQXFCOztJQUNyQiw0Q0FBZTs7QUFPbkIsTUFBTSxPQUFPLDJCQUE0QixTQUFRLFdBQW9DOzs7O0lBQ2pGLFlBQVksSUFBMkM7UUFDbkQsS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7QUFFRCxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsWUFBcUM7Ozs7SUFDbkYsWUFBWSxJQUE0QztRQUNwRCxLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjtBQUVELE1BQU0sT0FBTywyQkFBNEIsU0FBUSxXQUFvQzs7OztJQUNqRixZQUFZLElBQTJDO1FBQ25ELEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKO0FBRUQsTUFBTSxPQUFPLDRCQUE2QixTQUFRLFlBQXFDOzs7O0lBQ25GLFlBQVksSUFBNEM7UUFDcEQsS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7QUFFRCxNQUFNLE9BQU8sNkJBQThCLFNBQVEsV0FBb0M7Ozs7SUFDbkYsWUFBWSxJQUE2QztRQUNyRCxLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjtBQUVELE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxZQUFxQzs7OztJQUNyRixZQUFZLElBQThDO1FBQ3RELEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKO0FBRUQsTUFBTSxPQUFPLDJCQUE0QixTQUFRLFdBQW9DOzs7O0lBRWpGLFlBQVksSUFBMkM7UUFDbkQsS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7OztJQUxHLDBDQUFjOztBQU9sQixNQUFNLE9BQU8sNEJBQTZCLFNBQVEsWUFBcUM7Ozs7SUFDbkYsWUFBWSxJQUE0QztRQUNwRCxLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjtBQUVELE1BQU0sT0FBTywyQkFBNEIsU0FBUSxpQkFBaUI7Ozs7SUFDOUQsWUFBWSxJQUEyQztRQUNuRCxLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjtBQUVELE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxrQkFBMkM7Ozs7SUFDekYsWUFBWSxJQUE0QztRQUNwRCxLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VSZXF1ZXN0LCBCYXNlUmVzcG9uc2UsIFNlYXJjaEJhc2VSZXF1ZXN0LCBTZWFyY2hCYXNlUmVzcG9uc2UgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzJztcclxuaW1wb3J0IHsgRmlsZVZpZXdNb2RlbCB9IGZyb20gJy4uL3NoYXJlZC9maWxlL2ZpbGUubW9kZWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJWaWV3TW9kZWwge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcclxuICAgIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgZW1haWw/OiBzdHJpbmc7XHJcbiAgICBpbWFnZT86IEZpbGVWaWV3TW9kZWw7XHJcbiAgICBwaG9uZT86IHN0cmluZztcclxuICAgIGRhdGVPZkJpcnRoPzogRGF0ZTtcclxuICAgIGV4dGVybmFsSW5mbz86IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFVzZXJWaWV3TW9kZWw+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uVmlld01vZGVsIHtcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uTG9naW5SZXF1ZXN0IGV4dGVuZHMgQmFzZVJlcXVlc3Q8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+IHtcclxuICAgIHRva2VuPzogc3RyaW5nO1xyXG4gICAgcGF5bG9hZDogQXV0aGVudGljYXRpb25WaWV3TW9kZWwgPSBuZXcgQXV0aGVudGljYXRpb25WaWV3TW9kZWwoKTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uTG9naW5SZXF1ZXN0Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uTG9naW5SZXNwb25zZSBleHRlbmRzIEJhc2VSZXNwb25zZTxBdXRoZW50aWNhdGlvblZpZXdNb2RlbD4ge1xyXG4gICAgdXNlcj86IFVzZXJWaWV3TW9kZWw7XHJcbiAgICB0b2tlbj86IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uTG9naW5SZXNwb25zZT4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkNyZWF0ZVJlcXVlc3QgZXh0ZW5kcyBCYXNlUmVxdWVzdDxBdXRoZW50aWNhdGlvblZpZXdNb2RlbD4ge1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25DcmVhdGVSZXF1ZXN0Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ3JlYXRlUmVzcG9uc2UgZXh0ZW5kcyBCYXNlUmVzcG9uc2U8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+IHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uQ3JlYXRlUmVzcG9uc2U+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25VcGRhdGVSZXF1ZXN0IGV4dGVuZHMgQmFzZVJlcXVlc3Q8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+IHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uVXBkYXRlUmVxdWVzdD4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblVwZGF0ZVJlc3BvbnNlIGV4dGVuZHMgQmFzZVJlc3BvbnNlPEF1dGhlbnRpY2F0aW9uVmlld01vZGVsPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxBdXRoZW50aWNhdGlvblVwZGF0ZVJlc3BvbnNlPikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uUmV0cmlldmVSZXF1ZXN0IGV4dGVuZHMgQmFzZVJlcXVlc3Q8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+IHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uUmV0cmlldmVSZXF1ZXN0Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uUmV0cmlldmVSZXNwb25zZSBleHRlbmRzIEJhc2VSZXNwb25zZTxBdXRoZW50aWNhdGlvblZpZXdNb2RlbD4ge1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25SZXRyaWV2ZVJlc3BvbnNlPikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uRGVsZXRlUmVxdWVzdCBleHRlbmRzIEJhc2VSZXF1ZXN0PEF1dGhlbnRpY2F0aW9uVmlld01vZGVsPiB7XHJcbiAgICBpZHM6IHN0cmluZ1tdO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25EZWxldGVSZXF1ZXN0Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uRGVsZXRlUmVzcG9uc2UgZXh0ZW5kcyBCYXNlUmVzcG9uc2U8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+IHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uRGVsZXRlUmVzcG9uc2U+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZWFyY2hSZXF1ZXN0IGV4dGVuZHMgU2VhcmNoQmFzZVJlcXVlc3Qge1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25TZWFyY2hSZXF1ZXN0Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VhcmNoUmVzcG9uc2UgZXh0ZW5kcyBTZWFyY2hCYXNlUmVzcG9uc2U8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+IHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uU2VhcmNoUmVzcG9uc2U+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59Il19