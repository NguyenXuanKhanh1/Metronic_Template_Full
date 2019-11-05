import { OnInit, EventEmitter } from '@angular/core';
export declare class ButtonComponent implements OnInit {
    title: string;
    customClass: 'default' | 'success' | 'warning' | 'danger' | 'link' | 'info' | 'inverse' | 'primary' | 'outline-primary' | 'outline-inverse';
    disabled: boolean;
    icon: string;
    loadingIcon: string;
    lazyload: boolean;
    tooltip: string;
    execute: EventEmitter<any>;
    loading: boolean;
    ngOnInit(): void;
    handleAction($event: any): void;
    retrieveButtonClass(): string;
}
