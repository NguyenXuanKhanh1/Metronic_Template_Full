import { Type, EventEmitter } from '@angular/core';
import { ChangeType } from '../enums/base.enum';
export declare class MockData<T> {
    mockData?: any;
    constructor(init?: Partial<MockData<T>>);
}
export declare class BaseRequest<T> extends MockData<T> {
    payload?: T;
    constructor(init?: Partial<BaseRequest<T>>);
}
export declare class BaseResponse<T> {
    data?: T;
    success?: boolean;
    code?: number;
    message?: string;
    constructor(init?: Partial<BaseResponse<T>>);
}
export declare class SearchBaseRequest extends MockData<any> {
    searchText?: string;
    pageIndex?: number;
    pageSize?: number;
    direction?: string;
    orderBy?: string;
    all?: boolean;
    constructor(init?: Partial<SearchBaseRequest>);
}
export declare class SearchBaseResponse<T> {
    items?: T[];
    success?: boolean;
    code?: number;
    message?: string;
    constructor(init?: Partial<SearchBaseResponse<T>>);
}
export declare class BaseTemplate {
    data?: any;
    template?: Type<any>;
    constructor(init?: Partial<BaseTemplate>);
}
export declare class AggregatorViewModel {
    value?: EventEmitter<any>;
    key?: string;
    currentEmitter: any;
    constructor(init?: Partial<AggregatorViewModel>);
}
export declare class ButtonDefinition {
    action: string;
    title: string;
    icon: string;
    hide: boolean;
    disabled: boolean;
    lazyload: boolean;
    style: 'default' | 'success' | 'warning' | 'danger' | 'link' | 'info' | 'inverse' | 'primary' | 'outline-primary' | 'outline-inverse';
    constructor(init?: Partial<ButtonDefinition>);
}
export declare class ToolbarActionPayload {
    loadedCallback: Function;
    action: string;
    callback: Function;
    constructor(init?: Partial<ToolbarActionPayload>);
}
export declare class ObjectChange {
    propertyName: string;
    oldValue: any;
    newValue: any;
    changeType: ChangeType;
    constructor(init?: Partial<ObjectChange>);
}
export declare class LookupItem {
    name: string;
    key?: string;
    constructor(init?: Partial<LookupItem>);
}
export declare class ExtendedMainMenuGroup {
    label: string;
    children: any[];
    icon: string;
    constructor(init?: Partial<ExtendedMainMenuGroup>);
}
export declare class KeyValueItem {
    key: string;
    value: string;
    constructor(init?: Partial<KeyValueItem>);
}
export declare class BreadCrumbItem {
    label: string;
    url: string;
    constructor(init?: Partial<BreadCrumbItem>);
}
export declare class ControlType {
    static Textbox: string;
    static Dropdown: string;
    static Button: string;
    constructor(init?: Partial<ControlType>);
}
export declare class MenuTab {
    role: string;
    items: ExtendedMainMenuGroup[];
    constructor(init?: Partial<MenuTab>);
}
export declare class MenuItem {
    menu: string;
    items: ExtendedMainMenuGroup[];
    subName: string;
    name?: string;
    constructor(init?: Partial<MenuItem>);
}
export declare class Breadcrumb {
    label: string;
    url: string;
    state?: string;
    constructor(init?: Partial<Breadcrumb>);
}
export declare class MediaItem {
    src: string;
    name: string;
    fullSrc: string;
    constructor(init?: Partial<MediaItem>);
}
export declare class Audit {
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    constructor(init?: Partial<Audit>);
}
export declare class TrackingGroup {
    date: Date;
    details: TrackingDetail[];
    constructor(init?: Partial<TrackingGroup>);
}
export declare class TrackingDetail {
    description: string;
    time: Date;
    constructor(init?: Partial<TrackingDetail>);
}
