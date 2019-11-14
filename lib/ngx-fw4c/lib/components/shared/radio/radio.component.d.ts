import { AfterContentInit, QueryList, EventEmitter, OnDestroy } from '@angular/core';
import { RadioItemComponent } from './radio-item/radio-item.component';
export declare class RadioComponent implements AfterContentInit, OnDestroy {
    items: QueryList<RadioItemComponent>;
    modelChange: EventEmitter<any>;
    model: any;
    label: string;
    disabled: boolean;
    formControlName: string;
    validationName: string;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
