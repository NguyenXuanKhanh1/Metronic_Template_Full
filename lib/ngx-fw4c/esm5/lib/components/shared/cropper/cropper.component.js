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
                    selector: 'c-cropper',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JvcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9jcm9wcGVyL2Nyb3BwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUscUJBQXFCLEVBQXFCLE1BQU0sbUJBQW1CLENBQUM7QUFDN0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTNEO0lBaUJJLDBCQUNZLGNBQTZCO1FBQTdCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBUnpCLGFBQVEsR0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLGtCQUFhLEdBQVcsR0FBRyxDQUFDO1FBQzVCLHdCQUFtQixHQUFZLElBQUksQ0FBQztRQUNwRCxzQkFBaUIsR0FBUSxFQUFFLENBQUM7UUFDNUIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFJaEIsQ0FBQzs7OztJQUVMLG1DQUFROzs7SUFBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVNLG1DQUFROzs7O0lBQWYsVUFBZ0IsS0FBVTtRQUN0QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRU0sc0NBQVc7OztJQUFsQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVNLHVDQUFZOzs7SUFBbkI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFTSwwQ0FBZTs7O0lBQXRCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVNLHVDQUFZOzs7O0lBQW5CLFVBQW9CLEtBQXdCO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDOzs7O0lBRU0sa0NBQU87OztJQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVNLG1DQUFROzs7SUFBZjtRQUNJLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRU0sb0NBQVM7OztJQUFoQjtRQUNJLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRU8sK0JBQUk7Ozs7SUFBWjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZOzs7UUFBQztZQUM3QixLQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQztRQUM1QyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7O2dCQTlESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLHFZQUF1Qzs7aUJBRTFDOzs7O2dCQU5RLGFBQWE7OzswQkFTakIsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7K0JBQ3JDLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7c0NBQ0wsS0FBSzs7SUFtRFYsdUJBQUM7Q0FBQSxBQS9ERCxJQStEQztTQXpEWSxnQkFBZ0I7OztJQUN6QixtQ0FBOEU7O0lBQzlFLHdDQUErQzs7SUFDL0MscUNBQStCOztJQUMvQixvQ0FBeUM7O0lBQ3pDLHlDQUE0Qzs7SUFDNUMsK0NBQW9EOztJQUNwRCw2Q0FBNEI7O0lBQzVCLHdDQUF1Qjs7SUFDdkIsdUNBQW9COzs7OztJQUdoQiwwQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEltYWdlQ3JvcHBlckNvbXBvbmVudCwgSW1hZ2VDcm9wcGVkRXZlbnQgfSBmcm9tIFwibmd4LWltYWdlLWNyb3BwZXJcIjtcclxuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FjdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjLWNyb3BwZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Nyb3BwZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY3JvcHBlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3JvcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBAVmlld0NoaWxkKCdjcm9wcGVyJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIGNyb3BwZXI6IEltYWdlQ3JvcHBlckNvbXBvbmVudDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBpbWFnZUVsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZXZlbnRGaWxlOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY3V0UmF0aW86IG51bWJlciA9IDEgLyAxO1xyXG4gICAgQElucHV0KCkgcHVibGljIHJlc2l6ZVRvV2lkdGg6IG51bWJlciA9IDgwMDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBtYWludGFpbkFzcGVjdFJhdGlvOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGltYWdlQ2hhbmdlZEV2ZW50OiBhbnkgPSAnJztcclxuICAgIGNyb3BwZWRJbWFnZTogYW55ID0gJyc7XHJcbiAgICBzaG93Q3JvcHBlciA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2FjdGlvblNlcnZpY2U6IEFjdGlvblNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEltYWdlKGltYWdlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmltYWdlQ2hhbmdlZEV2ZW50ID0gdGhpcy5ldmVudEZpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGltYWdlTG9hZGVkKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0Nyb3BwZXIgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSBsb2FkZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JvcHBlclJlYWR5KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDcm9wcGVyIHJlYWR5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRJbWFnZUZhaWxlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTG9hZCBmYWlsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW1hZ2VDcm9wcGVkKGV2ZW50OiBJbWFnZUNyb3BwZWRFdmVudCkge1xyXG4gICAgICAgIHRoaXMuY3JvcHBlZEltYWdlID0gZXZlbnQuYmFzZTY0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYWxsYmFjaygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBvZih0aGlzLmNyb3BwZWRJbWFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEVycm9ycygpIHtcclxuICAgICAgICByZXR1cm4gb2YoW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9hY3Rpb25TZXJ2aWNlLmV4ZWN1dGVBc3luYygoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnQgPSB0aGlzLmV2ZW50RmlsZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=