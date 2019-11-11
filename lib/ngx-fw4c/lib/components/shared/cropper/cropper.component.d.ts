import { OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { ImageCropperComponent, ImageCroppedEvent } from "ngx-image-cropper";
import { ActionService } from '../services/action.service';
export declare class CropperComponent implements OnInit {
    private _actionService;
    cropper: ImageCropperComponent;
    imageElement: HTMLImageElement;
    eventFile: any;
    cutRatio: number;
    resizeToWidth: number;
    maintainAspectRatio: boolean;
    imageChangedEvent: any;
    croppedImage: any;
    showCropper: boolean;
    constructor(_actionService: ActionService);
    ngOnInit(): void;
    setImage(image: any): void;
    imageLoaded(): void;
    cropperReady(): void;
    loadImageFailed(): void;
    imageCropped(event: ImageCroppedEvent): void;
    isValid(): boolean;
    callback(): Observable<any>;
    getErrors(): Observable<any[]>;
    private init;
}
