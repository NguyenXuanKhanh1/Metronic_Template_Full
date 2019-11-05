import { BaseRequest, BaseResponse, SearchBaseRequest, SearchBaseResponse } from '../shared/models';
import { FileViewModel } from '../shared/file/file.model';
export declare class UserViewModel {
    id: string;
    fullName: string;
    firstName: string;
    lastName: string;
    userName: string;
    email?: string;
    image?: FileViewModel;
    phone?: string;
    dateOfBirth?: Date;
    externalInfo?: any;
    constructor(init?: Partial<UserViewModel>);
}
export declare class AuthenticationViewModel {
    userName: string;
    password: string;
    constructor(init?: Partial<AuthenticationViewModel>);
}
export declare class AuthenticationLoginRequest extends BaseRequest<AuthenticationViewModel> {
    token?: string;
    payload: AuthenticationViewModel;
    constructor(init?: Partial<AuthenticationLoginRequest>);
}
export declare class AuthenticationLoginResponse extends BaseResponse<AuthenticationViewModel> {
    user?: UserViewModel;
    token?: string;
    constructor(init?: Partial<AuthenticationLoginResponse>);
}
export declare class AuthenticationCreateRequest extends BaseRequest<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationCreateRequest>);
}
export declare class AuthenticationCreateResponse extends BaseResponse<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationCreateResponse>);
}
export declare class AuthenticationUpdateRequest extends BaseRequest<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationUpdateRequest>);
}
export declare class AuthenticationUpdateResponse extends BaseResponse<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationUpdateResponse>);
}
export declare class AuthenticationRetrieveRequest extends BaseRequest<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationRetrieveRequest>);
}
export declare class AuthenticationRetrieveResponse extends BaseResponse<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationRetrieveResponse>);
}
export declare class AuthenticationDeleteRequest extends BaseRequest<AuthenticationViewModel> {
    ids: string[];
    constructor(init?: Partial<AuthenticationDeleteRequest>);
}
export declare class AuthenticationDeleteResponse extends BaseResponse<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationDeleteResponse>);
}
export declare class AuthenticationSearchRequest extends SearchBaseRequest {
    constructor(init?: Partial<AuthenticationSearchRequest>);
}
export declare class AuthenticationSearchResponse extends SearchBaseResponse<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationSearchResponse>);
}
