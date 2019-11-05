import { EventEmitter } from '@angular/core';
import { DropdownButtonComponent } from './dropdown-button.component';
export declare class DropdownButtonsComponent {
    title: string;
    customClass: string;
    disabled: boolean;
    icon: string;
    lazyload: boolean;
    loadingIcon: string;
    execute: EventEmitter<any>;
    items: DropdownButtonComponent[];
    loading: boolean;
    handleAction($event: any): void;
}
