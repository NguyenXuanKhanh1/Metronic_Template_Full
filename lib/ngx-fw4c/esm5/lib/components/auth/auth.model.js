/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseRequest, BaseResponse, SearchBaseRequest, SearchBaseResponse } from '../shared/models';
var UserViewModel = /** @class */ (function () {
    function UserViewModel(init) {
        Object.assign(this, init);
    }
    return UserViewModel;
}());
export { UserViewModel };
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
var AuthenticationViewModel = /** @class */ (function () {
    function AuthenticationViewModel(init) {
        Object.assign(this, init);
    }
    return AuthenticationViewModel;
}());
export { AuthenticationViewModel };
if (false) {
    /** @type {?} */
    AuthenticationViewModel.prototype.userName;
    /** @type {?} */
    AuthenticationViewModel.prototype.password;
}
var AuthenticationLoginRequest = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationLoginRequest, _super);
    function AuthenticationLoginRequest(init) {
        var _this = _super.call(this) || this;
        _this.payload = new AuthenticationViewModel();
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationLoginRequest;
}(BaseRequest));
export { AuthenticationLoginRequest };
if (false) {
    /** @type {?} */
    AuthenticationLoginRequest.prototype.token;
    /** @type {?} */
    AuthenticationLoginRequest.prototype.payload;
}
var AuthenticationLoginResponse = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationLoginResponse, _super);
    function AuthenticationLoginResponse(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationLoginResponse;
}(BaseResponse));
export { AuthenticationLoginResponse };
if (false) {
    /** @type {?} */
    AuthenticationLoginResponse.prototype.user;
    /** @type {?} */
    AuthenticationLoginResponse.prototype.token;
}
var AuthenticationCreateRequest = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationCreateRequest, _super);
    function AuthenticationCreateRequest(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationCreateRequest;
}(BaseRequest));
export { AuthenticationCreateRequest };
var AuthenticationCreateResponse = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationCreateResponse, _super);
    function AuthenticationCreateResponse(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationCreateResponse;
}(BaseResponse));
export { AuthenticationCreateResponse };
var AuthenticationUpdateRequest = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationUpdateRequest, _super);
    function AuthenticationUpdateRequest(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationUpdateRequest;
}(BaseRequest));
export { AuthenticationUpdateRequest };
var AuthenticationUpdateResponse = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationUpdateResponse, _super);
    function AuthenticationUpdateResponse(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationUpdateResponse;
}(BaseResponse));
export { AuthenticationUpdateResponse };
var AuthenticationRetrieveRequest = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationRetrieveRequest, _super);
    function AuthenticationRetrieveRequest(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationRetrieveRequest;
}(BaseRequest));
export { AuthenticationRetrieveRequest };
var AuthenticationRetrieveResponse = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationRetrieveResponse, _super);
    function AuthenticationRetrieveResponse(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationRetrieveResponse;
}(BaseResponse));
export { AuthenticationRetrieveResponse };
var AuthenticationDeleteRequest = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationDeleteRequest, _super);
    function AuthenticationDeleteRequest(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationDeleteRequest;
}(BaseRequest));
export { AuthenticationDeleteRequest };
if (false) {
    /** @type {?} */
    AuthenticationDeleteRequest.prototype.ids;
}
var AuthenticationDeleteResponse = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationDeleteResponse, _super);
    function AuthenticationDeleteResponse(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationDeleteResponse;
}(BaseResponse));
export { AuthenticationDeleteResponse };
var AuthenticationSearchRequest = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationSearchRequest, _super);
    function AuthenticationSearchRequest(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationSearchRequest;
}(SearchBaseRequest));
export { AuthenticationSearchRequest };
var AuthenticationSearchResponse = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationSearchResponse, _super);
    function AuthenticationSearchResponse(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationSearchResponse;
}(SearchBaseResponse));
export { AuthenticationSearchResponse };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXV0aC9hdXRoLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdwRztJQVdJLHVCQUFZLElBQTZCO1FBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFkRCxJQWNDOzs7O0lBYkcsMkJBQVc7O0lBQ1gsaUNBQWlCOztJQUNqQixrQ0FBa0I7O0lBQ2xCLGlDQUFpQjs7SUFDakIsaUNBQWlCOztJQUNqQiw4QkFBZTs7SUFDZiw4QkFBc0I7O0lBQ3RCLDhCQUFlOztJQUNmLG9DQUFtQjs7SUFDbkIscUNBQW1COztBQU12QjtJQUdJLGlDQUFZLElBQXVDO1FBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTCw4QkFBQztBQUFELENBQUMsQUFORCxJQU1DOzs7O0lBTEcsMkNBQWlCOztJQUNqQiwyQ0FBaUI7O0FBTXJCO0lBQWdELHNEQUFvQztJQUdoRixvQ0FBWSxJQUEwQztRQUF0RCxZQUNJLGlCQUFPLFNBRVY7UUFKRCxhQUFPLEdBQTRCLElBQUksdUJBQXVCLEVBQUUsQ0FBQztRQUc3RCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFDOUIsQ0FBQztJQUNMLGlDQUFDO0FBQUQsQ0FBQyxBQVBELENBQWdELFdBQVcsR0FPMUQ7Ozs7SUFORywyQ0FBZTs7SUFDZiw2Q0FBaUU7O0FBT3JFO0lBQWlELHVEQUFxQztJQUdsRixxQ0FBWSxJQUEyQztRQUF2RCxZQUNJLGlCQUFP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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VSZXF1ZXN0LCBCYXNlUmVzcG9uc2UsIFNlYXJjaEJhc2VSZXF1ZXN0LCBTZWFyY2hCYXNlUmVzcG9uc2UgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzJztcclxuaW1wb3J0IHsgRmlsZVZpZXdNb2RlbCB9IGZyb20gJy4uL3NoYXJlZC9maWxlL2ZpbGUubW9kZWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJWaWV3TW9kZWwge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcclxuICAgIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgZW1haWw/OiBzdHJpbmc7XHJcbiAgICBpbWFnZT86IEZpbGVWaWV3TW9kZWw7XHJcbiAgICBwaG9uZT86IHN0cmluZztcclxuICAgIGRhdGVPZkJpcnRoPzogRGF0ZTtcclxuICAgIGV4dGVybmFsSW5mbz86IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFVzZXJWaWV3TW9kZWw+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uVmlld01vZGVsIHtcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uTG9naW5SZXF1ZXN0IGV4dGVuZHMgQmFzZVJlcXVlc3Q8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+IHtcclxuICAgIHRva2VuPzogc3RyaW5nO1xyXG4gICAgcGF5bG9hZDogQXV0aGVudGljYXRpb25WaWV3TW9kZWwgPSBuZXcgQXV0aGVudGljYXRpb25WaWV3TW9kZWwoKTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uTG9naW5SZXF1ZXN0Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uTG9naW5SZXNwb25zZSBleHRlbmRzIEJhc2VSZXNwb25zZTxBdXRoZW50aWNhdGlvblZpZXdNb2RlbD4ge1xyXG4gICAgdXNlcj86IFVzZXJWaWV3TW9kZWw7XHJcbiAgICB0b2tlbj86IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uTG9naW5SZXNwb25zZT4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkNyZWF0ZVJlcXVlc3QgZXh0ZW5kcyBCYXNlUmVxdWVzdDxBdXRoZW50aWNhdGlvblZpZXdNb2RlbD4ge1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25DcmVhdGVSZXF1ZXN0Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ3JlYXRlUmVzcG9uc2UgZXh0ZW5kcyBCYXNlUmVzcG9uc2U8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+IHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uQ3JlYXRlUmVzcG9uc2U+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25VcGRhdGVSZXF1ZXN0IGV4dGVuZHMgQmFzZVJlcXVlc3Q8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+IHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uVXBkYXRlUmVxdWVzdD4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblVwZGF0ZVJlc3BvbnNlIGV4dGVuZHMgQmFzZVJlc3BvbnNlPEF1dGhlbnRpY2F0aW9uVmlld01vZGVsPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxBdXRoZW50aWNhdGlvblVwZGF0ZVJlc3BvbnNlPikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uUmV0cmlldmVSZXF1ZXN0IGV4dGVuZHMgQmFzZVJlcXVlc3Q8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+IHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uUmV0cmlldmVSZXF1ZXN0Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uUmV0cmlldmVSZXNwb25zZSBleHRlbmRzIEJhc2VSZXNwb25zZTxBdXRoZW50aWNhdGlvblZpZXdNb2RlbD4ge1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25SZXRyaWV2ZVJlc3BvbnNlPikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uRGVsZXRlUmVxdWVzdCBleHRlbmRzIEJhc2VSZXF1ZXN0PEF1dGhlbnRpY2F0aW9uVmlld01vZGVsPiB7XHJcbiAgICBpZHM6IHN0cmluZ1tdO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25EZWxldGVSZXF1ZXN0Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uRGVsZXRlUmVzcG9uc2UgZXh0ZW5kcyBCYXNlUmVzcG9uc2U8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+IHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uRGVsZXRlUmVzcG9uc2U+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZWFyY2hSZXF1ZXN0IGV4dGVuZHMgU2VhcmNoQmFzZVJlcXVlc3Qge1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25TZWFyY2hSZXF1ZXN0Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VhcmNoUmVzcG9uc2UgZXh0ZW5kcyBTZWFyY2hCYXNlUmVzcG9uc2U8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+IHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uU2VhcmNoUmVzcG9uc2U+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59Il19