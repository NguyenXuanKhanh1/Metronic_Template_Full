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
                selector: 'c-cropper',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JvcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9jcm9wcGVyL2Nyb3BwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUscUJBQXFCLEVBQXFCLE1BQU0sbUJBQW1CLENBQUM7QUFDN0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBUTNELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFXekIsWUFDWSxjQUE2QjtRQUE3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQVJ6QixhQUFRLEdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixrQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUM1Qix3QkFBbUIsR0FBWSxJQUFJLENBQUM7UUFDcEQsc0JBQWlCLEdBQVEsRUFBRSxDQUFDO1FBQzVCLGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBSWhCLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ0osSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRU0sUUFBUSxDQUFDLEtBQVU7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVNLFdBQVc7UUFDZCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFTSxZQUFZO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRU0sZUFBZTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRU0sWUFBWSxDQUFDLEtBQXdCO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDOzs7O0lBRU0sT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFTSxRQUFRO1FBQ1gsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFTSxTQUFTO1FBQ1osT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFTyxJQUFJO1FBQ1IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZOzs7UUFBQyxHQUFHLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDNUMsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7WUE5REosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixxWUFBdUM7O2FBRTFDOzs7O1lBTlEsYUFBYTs7O3NCQVNqQixTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFDckMsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSztrQ0FDTCxLQUFLOzs7O0lBTE4sbUNBQThFOztJQUM5RSx3Q0FBK0M7O0lBQy9DLHFDQUErQjs7SUFDL0Isb0NBQXlDOztJQUN6Qyx5Q0FBNEM7O0lBQzVDLCtDQUFvRDs7SUFDcEQsNkNBQTRCOztJQUM1Qix3Q0FBdUI7O0lBQ3ZCLHVDQUFvQjs7Ozs7SUFHaEIsMENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBJbWFnZUNyb3BwZXJDb21wb25lbnQsIEltYWdlQ3JvcHBlZEV2ZW50IH0gZnJvbSBcIm5neC1pbWFnZS1jcm9wcGVyXCI7XHJcbmltcG9ydCB7IEFjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hY3Rpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYy1jcm9wcGVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jcm9wcGVyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2Nyb3BwZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENyb3BwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQFZpZXdDaGlsZCgnY3JvcHBlcicsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBjcm9wcGVyOiBJbWFnZUNyb3BwZXJDb21wb25lbnQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaW1hZ2VFbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgQElucHV0KCkgcHVibGljIGV2ZW50RmlsZTogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGN1dFJhdGlvOiBudW1iZXIgPSAxIC8gMTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByZXNpemVUb1dpZHRoOiBudW1iZXIgPSA4MDA7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbWFpbnRhaW5Bc3BlY3RSYXRpbzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpbWFnZUNoYW5nZWRFdmVudDogYW55ID0gJyc7XHJcbiAgICBjcm9wcGVkSW1hZ2U6IGFueSA9ICcnO1xyXG4gICAgc2hvd0Nyb3BwZXIgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9hY3Rpb25TZXJ2aWNlOiBBY3Rpb25TZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJbWFnZShpbWFnZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZUNoYW5nZWRFdmVudCA9IHRoaXMuZXZlbnRGaWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbWFnZUxvYWRlZCgpIHtcclxuICAgICAgICB0aGlzLnNob3dDcm9wcGVyID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2UgbG9hZGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyb3BwZXJSZWFkeSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ3JvcHBlciByZWFkeScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkSW1hZ2VGYWlsZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0xvYWQgZmFpbGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGltYWdlQ3JvcHBlZChldmVudDogSW1hZ2VDcm9wcGVkRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmNyb3BwZWRJbWFnZSA9IGV2ZW50LmJhc2U2NDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FsbGJhY2soKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gb2YodGhpcy5jcm9wcGVkSW1hZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFcnJvcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIG9mKFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYWN0aW9uU2VydmljZS5leGVjdXRlQXN5bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlQ2hhbmdlZEV2ZW50ID0gdGhpcy5ldmVudEZpbGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19