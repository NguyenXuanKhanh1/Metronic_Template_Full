import { EventEmitter, SimpleChanges, OnDestroy } from '@angular/core';
export declare class CheckboxComponent implements OnDestroy {
    model: boolean;
    title: string;
    customModel: any;
    customModelChange: EventEmitter<any>;
    customModelTransformation: (value: any) => any;
    disabled: boolean;
    direction: 'vertical' | 'horizontal';
    validationName: string;
    validationScope: string;
    emitNullOnDestroy: boolean;
    modelChange: EventEmitter<boolean>;
    ngOnChanges(changes: SimpleChanges): void;
    onModelChange(value: boolean): void;
    ngOnDestroy(): void;
}
