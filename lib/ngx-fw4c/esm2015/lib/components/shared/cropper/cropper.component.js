/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from "@angular/core";
import { of } from 'rxjs';
import { ImageCropperComponent } from "ngx-image-cropper";
import { ActionService } from '../services/action.service';
export class CropperComponent {
    /**
     * @param {?} _actionService
     */
    constructor(_actionService) {
        this._actionService = _actionService;
        this.cutRatio = 1 / 1;
        this.resizeToWidth = 800;
        this.maintainAspectRatio = true;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.showCropper = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.init();
    }
    /**
     * @param {?} image
     * @return {?}
     */
    setImage(image) {
        this.imageChangedEvent = this.eventFile;
    }
    /**
     * @return {?}
     */
    imageLoaded() {
        this.showCropper = true;
        console.log('Image loaded');
    }
    /**
     * @return {?}
     */
    cropperReady() {
        console.log('Cropper ready');
    }
    /**
     * @return {?}
     */
    loadImageFailed() {
        console.log('Load failed');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
    /**
     * @return {?}
     */
    isValid() {
        return true;
    }
    /**
     * @return {?}
     */
    callback() {
        return of(this.croppedImage);
    }
    /**
     * @return {?}
     */
    getErrors() {
        return of([]);
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        this._actionService.executeAsync((/**
         * @return {?}
         */
        () => {
            this.imageChangedEvent = this.eventFile;
        }));
    }
}
CropperComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-cropper',
                template: "<image-cropper #cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"maintainAspectRatio\" [aspectRatio]=\"cutRatio\"\r\n               [resizeToWidth]=\"resizeToWidth\" [onlyScaleDown]=\"true\" format=\"png\" (imageCropped)=\"imageCropped($event)\"\r\n               (imageLoaded)=\"imageLoaded()\" (loadImageFailed)=\"loadImageFailed()\"></image-cropper>",
                styles: [""]
            }] }
];
/** @nocollapse */
CropperComponent.ctorParameters = () => [
    { type: ActionService }
];
CropperComponent.propDecorators = {
    cropper: [{ type: ViewChild, args: ['cropper', { static: true },] }],
    imageElement: [{ type: Input }],
    eventFile: [{ type: Input }],
    cutRatio: [{ type: Input }],
    resizeToWidth: [{ type: Input }],
    maintainAspectRatio: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CropperComponent.prototype.cropper;
    /** @type {?} */
    CropperComponent.prototype.imageElement;
    /** @type {?} */
    CropperComponent.prototype.eventFile;
    /** @type {?} */
    CropperComponent.prototype.cutRatio;
    /** @type {?} */
    CropperComponent.prototype.resizeToWidth;
    /** @type {?} */
    CropperComponent.prototype.maintainAspectRatio;
    /** @type {?} */
    CropperComponent.prototype.imageChangedEvent;
    /** @type {?} */
    CropperComponent.prototype.croppedImage;
    /** @type {?} */
    CropperComponent.prototype.showCropper;
    /**
     * @type {?}
     * @private
     */
    CropperComponent.prototype._actionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JvcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9jcm9wcGVyL2Nyb3BwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUscUJBQXFCLEVBQXFCLE1BQU0sbUJBQW1CLENBQUM7QUFDN0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBUTNELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFXekIsWUFDWSxjQUE2QjtRQUE3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQVJ6QixhQUFRLEdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixrQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUM1Qix3QkFBbUIsR0FBWSxJQUFJLENBQUM7UUFDcEQsc0JBQWlCLEdBQVEsRUFBRSxDQUFDO1FBQzVCLGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBSWhCLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ0osSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRU0sUUFBUSxDQUFDLEtBQVU7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVNLFdBQVc7UUFDZCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFTSxZQUFZO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRU0sZUFBZTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRU0sWUFBWSxDQUFDLEtBQXdCO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDOzs7O0lBRU0sT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFTSxRQUFRO1FBQ1gsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFTSxTQUFTO1FBQ1osT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFTyxJQUFJO1FBQ1IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZOzs7UUFBQyxHQUFHLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDNUMsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7WUE5REosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHFZQUF1Qzs7YUFFMUM7Ozs7WUFOUSxhQUFhOzs7c0JBU2pCLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUNyQyxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLO2tDQUNMLEtBQUs7Ozs7SUFMTixtQ0FBOEU7O0lBQzlFLHdDQUErQzs7SUFDL0MscUNBQStCOztJQUMvQixvQ0FBeUM7O0lBQ3pDLHlDQUE0Qzs7SUFDNUMsK0NBQW9EOztJQUNwRCw2Q0FBNEI7O0lBQzVCLHdDQUF1Qjs7SUFDdkIsdUNBQW9COzs7OztJQUdoQiwwQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEltYWdlQ3JvcHBlckNvbXBvbmVudCwgSW1hZ2VDcm9wcGVkRXZlbnQgfSBmcm9tIFwibmd4LWltYWdlLWNyb3BwZXJcIjtcclxuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FjdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdrYXRhbmEtY3JvcHBlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY3JvcHBlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jcm9wcGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDcm9wcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBWaWV3Q2hpbGQoJ2Nyb3BwZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgY3JvcHBlcjogSW1hZ2VDcm9wcGVyQ29tcG9uZW50O1xyXG4gICAgQElucHV0KCkgcHVibGljIGltYWdlRWxlbWVudDogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBldmVudEZpbGU6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjdXRSYXRpbzogbnVtYmVyID0gMSAvIDE7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcmVzaXplVG9XaWR0aDogbnVtYmVyID0gODAwO1xyXG4gICAgQElucHV0KCkgcHVibGljIG1haW50YWluQXNwZWN0UmF0aW86IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaW1hZ2VDaGFuZ2VkRXZlbnQ6IGFueSA9ICcnO1xyXG4gICAgY3JvcHBlZEltYWdlOiBhbnkgPSAnJztcclxuICAgIHNob3dDcm9wcGVyID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfYWN0aW9uU2VydmljZTogQWN0aW9uU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SW1hZ2UoaW1hZ2U6IGFueSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnQgPSB0aGlzLmV2ZW50RmlsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW1hZ2VMb2FkZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93Q3JvcHBlciA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlIGxvYWRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcm9wcGVyUmVhZHkoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Nyb3BwZXIgcmVhZHknKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZEltYWdlRmFpbGVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2FkIGZhaWxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbWFnZUNyb3BwZWQoZXZlbnQ6IEltYWdlQ3JvcHBlZEV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jcm9wcGVkSW1hZ2UgPSBldmVudC5iYXNlNjQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzVmFsaWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbGxiYWNrKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG9mKHRoaXMuY3JvcHBlZEltYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RXJyb3JzKCkge1xyXG4gICAgICAgIHJldHVybiBvZihbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2FjdGlvblNlcnZpY2UuZXhlY3V0ZUFzeW5jKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZUNoYW5nZWRFdmVudCA9IHRoaXMuZXZlbnRGaWxlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==