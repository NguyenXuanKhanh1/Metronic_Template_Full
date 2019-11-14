import { OnDestroy, EventEmitter } from '@angular/core';
export declare class ChipComponent implements OnDestroy {
    title: string;
    model: string[];
    placeholder: string;
    maxItems: number;
    disabled: boolean;
    validationName: string;
    validationScope: string;
    emitNullOnDestroy: boolean;
    modelChange: EventEmitter<string[]>;
    onAdd: EventEmitter<any>;
    onRemove: EventEmitter<any>;
    ngOnDestroy(): void;
}
