import { TemplateRef } from '@angular/core';
export declare class RadioItemComponent {
    template: TemplateRef<any>;
    value: any;
    label: string;
    disabled: boolean;
    checked: boolean;
    groupIndex: number;
    private selectedCallBack;
    changeItem($event: Event): void;
    select($event: any): void;
    registerSelectedCallback(callback: Function): void;
}
