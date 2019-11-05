import { BaseTemplate } from '../models';
export declare class LoadingViewModel {
    threshold: number;
    timeout: number;
    template?: string;
    loadingText?: string;
    constructor(init?: Partial<LoadingViewModel>);
}
export declare class NotificationViewModel {
    center?: boolean;
    title?: string;
    customSize?: string;
    ignoreBackdropClick?: boolean;
    message?: string;
    btnTitle?: string;
    callback?: (close: () => any) => any;
    autoClose?: boolean;
    constructor(init?: Partial<NotificationViewModel>);
}
export declare class ConfirmViewModel {
    center?: boolean;
    title?: string;
    icon?: string;
    customSize?: string;
    ignoreBackdropClick?: boolean;
    message?: string;
    isDeleted?: boolean;
    btnAcceptTitle?: string;
    btnCancelTitle?: string;
    autoClose?: boolean;
    acceptCallback?: (close: () => any) => any;
    cancelCallback?: (close: () => any) => any;
    constructor(init?: Partial<ConfirmViewModel>);
}
export declare class TemplateViewModel extends BaseTemplate {
    center?: boolean;
    title?: string;
    mode?: string;
    customSize?: string;
    ignoreBackdropClick?: boolean;
    request?: any;
    icon?: string;
    btnAcceptTitle?: string;
    btnCancelTitle?: string;
    autoClose?: boolean;
    acceptCallback?: (response?: any, provider?: any, close?: () => any) => any;
    cancelCallback?: (response?: any, provider?: any, close?: () => any) => any;
    constructor(init?: Partial<TemplateViewModel>);
}
