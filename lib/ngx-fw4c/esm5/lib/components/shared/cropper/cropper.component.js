/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from "@angular/core";
import { of } from 'rxjs';
import { ImageCropperComponent } from "ngx-image-cropper";
import { ActionService } from '../services/action.service';
var CropperComponent = /** @class */ (function () {
    function CropperComponent(_actionService) {
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
    CropperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.init();
    };
    /**
     * @param {?} image
     * @return {?}
     */
    CropperComponent.prototype.setImage = /**
     * @param {?} image
     * @return {?}
     */
    function (image) {
        this.imageChangedEvent = this.eventFile;
    };
    /**
     * @return {?}
     */
    CropperComponent.prototype.imageLoaded = /**
     * @return {?}
     */
    function () {
        this.showCropper = true;
        console.log('Image loaded');
    };
    /**
     * @return {?}
     */
    CropperComponent.prototype.cropperReady = /**
     * @return {?}
     */
    function () {
        console.log('Cropper ready');
    };
    /**
     * @return {?}
     */
    CropperComponent.prototype.loadImageFailed = /**
     * @return {?}
     */
    function () {
        console.log('Load failed');
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CropperComponent.prototype.imageCropped = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.croppedImage = event.base64;
    };
    /**
     * @return {?}
     */
    CropperComponent.prototype.isValid = /**
     * @return {?}
     */
    function () {
        return true;
    };
    /**
     * @return {?}
     */
    CropperComponent.prototype.callback = /**
     * @return {?}
     */
    function () {
        return of(this.croppedImage);
    };
    /**
     * @return {?}
     */
    CropperComponent.prototype.getErrors = /**
     * @return {?}
     */
    function () {
        return of([]);
    };
    /**
     * @private
     * @return {?}
     */
    CropperComponent.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._actionService.executeAsync((/**
         * @return {?}
         */
        function () {
            _this.imageChangedEvent = _this.eventFile;
        }));
    };
    CropperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-cropper',
                    template: "<image-cropper #cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"maintainAspectRatio\" [aspectRatio]=\"cutRatio\"\r\n               [resizeToWidth]=\"resizeToWidth\" [onlyScaleDown]=\"true\" format=\"png\" (imageCropped)=\"imageCropped($event)\"\r\n               (imageLoaded)=\"imageLoaded()\" (loadImageFailed)=\"loadImageFailed()\"></image-cropper>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CropperComponent.ctorParameters = function () { return [
        { type: ActionService }
    ]; };
    CropperComponent.propDecorators = {
        cropper: [{ type: ViewChild, args: ['cropper', { static: true },] }],
        imageElement: [{ type: Input }],
        eventFile: [{ type: Input }],
        cutRatio: [{ type: Input }],
        resizeToWidth: [{ type: Input }],
        maintainAspectRatio: [{ type: Input }]
    };
    return CropperComponent;
}());
export { CropperComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JvcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9jcm9wcGVyL2Nyb3BwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUscUJBQXFCLEVBQXFCLE1BQU0sbUJBQW1CLENBQUM7QUFDN0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTNEO0lBaUJJLDBCQUNZLGNBQTZCO1FBQTdCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBUnpCLGFBQVEsR0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLGtCQUFhLEdBQVcsR0FBRyxDQUFDO1FBQzVCLHdCQUFtQixHQUFZLElBQUksQ0FBQztRQUNwRCxzQkFBaUIsR0FBUSxFQUFFLENBQUM7UUFDNUIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFJaEIsQ0FBQzs7OztJQUVMLG1DQUFROzs7SUFBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVNLG1DQUFROzs7O0lBQWYsVUFBZ0IsS0FBVTtRQUN0QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRU0sc0NBQVc7OztJQUFsQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVNLHVDQUFZOzs7SUFBbkI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFTSwwQ0FBZTs7O0lBQXRCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVNLHVDQUFZOzs7O0lBQW5CLFVBQW9CLEtBQXdCO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDOzs7O0lBRU0sa0NBQU87OztJQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVNLG1DQUFROzs7SUFBZjtRQUNJLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRU0sb0NBQVM7OztJQUFoQjtRQUNJLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRU8sK0JBQUk7Ozs7SUFBWjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZOzs7UUFBQztZQUM3QixLQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQztRQUM1QyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7O2dCQTlESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIscVlBQXVDOztpQkFFMUM7Ozs7Z0JBTlEsYUFBYTs7OzBCQVNqQixTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFDckMsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7Z0NBQ0wsS0FBSztzQ0FDTCxLQUFLOztJQW1EVix1QkFBQztDQUFBLEFBL0RELElBK0RDO1NBekRZLGdCQUFnQjs7O0lBQ3pCLG1DQUE4RTs7SUFDOUUsd0NBQStDOztJQUMvQyxxQ0FBK0I7O0lBQy9CLG9DQUF5Qzs7SUFDekMseUNBQTRDOztJQUM1QywrQ0FBb0Q7O0lBQ3BELDZDQUE0Qjs7SUFDNUIsd0NBQXVCOztJQUN2Qix1Q0FBb0I7Ozs7O0lBR2hCLDBDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyQ29tcG9uZW50LCBJbWFnZUNyb3BwZWRFdmVudCB9IGZyb20gXCJuZ3gtaW1hZ2UtY3JvcHBlclwiO1xyXG5pbXBvcnQgeyBBY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYWN0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2thdGFuYS1jcm9wcGVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jcm9wcGVyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2Nyb3BwZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENyb3BwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQFZpZXdDaGlsZCgnY3JvcHBlcicsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBjcm9wcGVyOiBJbWFnZUNyb3BwZXJDb21wb25lbnQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaW1hZ2VFbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgQElucHV0KCkgcHVibGljIGV2ZW50RmlsZTogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGN1dFJhdGlvOiBudW1iZXIgPSAxIC8gMTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByZXNpemVUb1dpZHRoOiBudW1iZXIgPSA4MDA7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbWFpbnRhaW5Bc3BlY3RSYXRpbzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpbWFnZUNoYW5nZWRFdmVudDogYW55ID0gJyc7XHJcbiAgICBjcm9wcGVkSW1hZ2U6IGFueSA9ICcnO1xyXG4gICAgc2hvd0Nyb3BwZXIgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9hY3Rpb25TZXJ2aWNlOiBBY3Rpb25TZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJbWFnZShpbWFnZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZUNoYW5nZWRFdmVudCA9IHRoaXMuZXZlbnRGaWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbWFnZUxvYWRlZCgpIHtcclxuICAgICAgICB0aGlzLnNob3dDcm9wcGVyID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2UgbG9hZGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyb3BwZXJSZWFkeSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ3JvcHBlciByZWFkeScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkSW1hZ2VGYWlsZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0xvYWQgZmFpbGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGltYWdlQ3JvcHBlZChldmVudDogSW1hZ2VDcm9wcGVkRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmNyb3BwZWRJbWFnZSA9IGV2ZW50LmJhc2U2NDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FsbGJhY2soKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gb2YodGhpcy5jcm9wcGVkSW1hZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFcnJvcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIG9mKFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYWN0aW9uU2VydmljZS5leGVjdXRlQXN5bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlQ2hhbmdlZEV2ZW50ID0gdGhpcy5ldmVudEZpbGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19