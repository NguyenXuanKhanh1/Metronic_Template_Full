import { OnDestroy, EventEmitter } from '@angular/core';
import { FileViewModel } from '../file/file.model';
export declare class ImageViewerComponent implements OnDestroy {
    uploadIcon: string;
    uploadTitle: string;
    multiple: boolean;
    model: any;
    size: 'small' | 'medium' | 'large' | 'full' | 'tiny';
    defaultImageUrl: string;
    title: string;
    editable: boolean;
    customClasses: string;
    imageRemoved: EventEmitter<string>;
    radious: boolean;
    validationName: string;
    cutRatio: number;
    resizeToWidth: number;
    maintainAspectRatio: boolean;
    validationScope: string;
    emitNullOnDestroy: boolean;
    modelChange: EventEmitter<any>;
    selectedChange: EventEmitter<boolean>;
    ngOnDestroy(): void;
    fileUploaded(file: FileViewModel): void;
    imageSrc(): string;
    removeImage(): void;
    selectImage(item: any): void;
}
