import { BaseResponse, SearchBaseRequest } from './base.model';
export declare class SettingItemViewModel {
    key: string;
    value: string;
}
export declare class SettingSearchRequest extends SearchBaseRequest {
}
export declare class SettingSearchResponse extends BaseResponse<SettingItemViewModel> {
}
