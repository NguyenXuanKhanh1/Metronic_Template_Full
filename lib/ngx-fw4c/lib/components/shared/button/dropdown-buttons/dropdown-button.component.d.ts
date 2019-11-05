import { TemplateRef, EventEmitter } from '@angular/core';
export declare class DropdownButtonComponent {
    template: TemplateRef<any>;
    title: string;
    disabled: boolean;
    lazyload: boolean;
    customClass: string;
    icon: string;
    loadingIcon: string;
    execute: EventEmitter<Function>;
    loading: boolean;
    handleAction($event: any): void;
}
