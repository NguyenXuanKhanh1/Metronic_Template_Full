import { OnDestroy, EventEmitter } from '@angular/core';
export declare class DaterangePickerComponent implements OnDestroy {
    title: string;
    model: Date[];
    disabled: boolean;
    minValue: Date;
    maxValue: Date;
    placeholder: string;
    startView: 'month' | 'years' | 'multi-years';
    pickerType: 'calendar' | 'timer' | 'both';
    pickerMode: 'popup' | 'dialog';
    selectMode: 'range' | 'single' | 'rangeFrom' | 'rangeTo';
    validationName: string;
    validationScope: string;
    emitNullOnDestroy: boolean;
    modelChange: EventEmitter<Date[]>;
    ngOnDestroy(): void;
}
