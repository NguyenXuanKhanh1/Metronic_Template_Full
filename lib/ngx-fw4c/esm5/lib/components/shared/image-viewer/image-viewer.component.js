/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ImageViewerComponent = /** @class */ (function () {
    function ImageViewerComponent() {
        this.multiple = false;
        this.size = 'small';
        this.defaultImageUrl = 'https://cmcglobal.com.vn/css/image-common/Combined%20Shape.svg';
        this.editable = false;
        this.imageRemoved = new EventEmitter();
        this.radious = false;
        this.cutRatio = 1 / 1;
        this.emitNullOnDestroy = false;
        this.modelChange = new EventEmitter();
        this.selectedChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.emitNullOnDestroy === true)
            this.modelChange.emit(null);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ImageViewerComponent.prototype.fileUploaded = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var model = this.model;
        if (!model)
            model = {};
        model.src = file.src;
        this.modelChange.emit(model);
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.imageSrc = /**
     * @return {?}
     */
    function () {
        if (this.model && this.model.src) {
            return this.model.src;
        }
        else {
            return this.defaultImageUrl;
        }
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.removeImage = /**
     * @return {?}
     */
    function () {
        this.model.src = this.defaultImageUrl;
        this.modelChange.emit(null);
        this.imageRemoved.emit(this.model.src);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ImageViewerComponent.prototype.selectImage = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item)
            return;
        if (!item.selected)
            item.selected = false;
        item.selected = !item.selected;
        this.selectedChange.emit(item.selected);
    };
    ImageViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c-image-viewer',
                    template: "<div class=\"form-group\">\r\n  <label *ngIf=\"title\">{{title}}</label>\r\n  <div [ngClass]=\"{'selected-file': model?.selected}\">\r\n    <div [ngClass]=\"{'deletable-image': editable}\" (click)=\"selectImage(model)\">\r\n      <i class=\"fa fa-check selected-icon\"></i>\r\n      <div class=\"{{size}}\" [ngClass]=\"{'image-radious': radious}\">\r\n        <div class=\"img-ratio-1-1\">\r\n          <img class=\"img-height\" [attr.src]=\"imageSrc()\">\r\n        </div>\r\n      </div>\r\n      <div class=\"cover-tool\" *ngIf=\"editable\">\r\n        <div class=\"d-flex justify-content-between\">\r\n          <c-file-uploader [icon]=\"uploadIcon\" [title]=\"uploadTitle\" [multiple]=\"multiple\" (fileUploaded)=\"fileUploaded($event)\" [maintainAspectRatio]=\"maintainAspectRatio\"\r\n            [resizeToWidth]=\"resizeToWidth\" [cropImage]=\"true\" fileType=\"image\" [cutRatio]=\"cutRatio\">\r\n            <i class=\"fa fa-pencil\"></i>\r\n          </c-file-uploader>\r\n          <a *ngIf=\"model\" href=\"javascript:;\" class=\"remove\" (click)=\"removeImage()\"><i class=\"fa fa-times\"\r\n              aria-hidden=\"true\"></i></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\">\r\n  </div>\r\n</div>",
                    styles: [".form-group{cursor:pointer}"]
                }] }
    ];
    ImageViewerComponent.propDecorators = {
        uploadIcon: [{ type: Input }],
        uploadTitle: [{ type: Input }],
        multiple: [{ type: Input }],
        model: [{ type: Input }],
        size: [{ type: Input }],
        defaultImageUrl: [{ type: Input }],
        title: [{ type: Input }],
        editable: [{ type: Input }],
        customClasses: [{ type: Input }],
        imageRemoved: [{ type: Output }],
        radious: [{ type: Input }],
        validationName: [{ type: Input }],
        cutRatio: [{ type: Input }],
        resizeToWidth: [{ type: Input }],
        maintainAspectRatio: [{ type: Input }],
        validationScope: [{ type: Input }],
        emitNullOnDestroy: [{ type: Input }],
        modelChange: [{ type: Output }],
        selectedChange: [{ type: Output }]
    };
    return ImageViewerComponent;
}());
export { ImageViewerComponent };
if (false) {
    /** @type {?} */
    ImageViewerComponent.prototype.uploadIcon;
    /** @type {?} */
    ImageViewerComponent.prototype.uploadTitle;
    /** @type {?} */
    ImageViewerComponent.prototype.multiple;
    /** @type {?} */
    ImageViewerComponent.prototype.model;
    /** @type {?} */
    ImageViewerComponent.prototype.size;
    /** @type {?} */
    ImageViewerComponent.prototype.defaultImageUrl;
    /** @type {?} */
    ImageViewerComponent.prototype.title;
    /** @type {?} */
    ImageViewerComponent.prototype.editable;
    /** @type {?} */
    ImageViewerComponent.prototype.customClasses;
    /** @type {?} */
    ImageViewerComponent.prototype.imageRemoved;
    /** @type {?} */
    ImageViewerComponent.prototype.radious;
    /** @type {?} */
    ImageViewerComponent.prototype.validationName;
    /** @type {?} */
    ImageViewerComponent.prototype.cutRatio;
    /** @type {?} */
    ImageViewerComponent.prototype.resizeToWidth;
    /** @type {?} */
    ImageViewerComponent.prototype.maintainAspectRatio;
    /** @type {?} */
    ImageViewerComponent.prototype.validationScope;
    /** @type {?} */
    ImageViewerComponent.prototype.emitNullOnDestroy;
    /** @type {?} */
    ImageViewerComponent.prototype.modelChange;
    /** @type {?} */
    ImageViewerComponent.prototype.selectedChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2ltYWdlLXZpZXdlci9pbWFnZS12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2xGO0lBQUE7UUFTb0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixTQUFJLEdBQW1ELE9BQU8sQ0FBQztRQUMvRCxvQkFBZSxHQUFHLGdFQUFnRSxDQUFDO1FBRW5GLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFekIsaUJBQVksR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6RCxZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLGFBQVEsR0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSWhDLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUMzQixnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BELG1CQUFjLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFrQ2hGLENBQUM7Ozs7SUFoQ0csMENBQVc7OztJQUFYO1FBQ0ksSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssSUFBSTtZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVNLDJDQUFZOzs7O0lBQW5CLFVBQW9CLElBQW1COztZQUMvQixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFDdEIsSUFBSSxDQUFDLEtBQUs7WUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRU0sdUNBQVE7OztJQUFmO1FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDekI7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUMvQjtJQUNMLENBQUM7Ozs7SUFFTSwwQ0FBVzs7O0lBQWxCO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRU0sMENBQVc7Ozs7SUFBbEIsVUFBbUIsSUFBUztRQUN4QixJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2dCQTFESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsMDBDQUE0Qzs7aUJBRS9DOzs7NkJBR0ksS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLO2tDQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsTUFBTTswQkFDTixLQUFLO2lDQUNMLEtBQUs7MkJBQ0wsS0FBSztnQ0FDTCxLQUFLO3NDQUNMLEtBQUs7a0NBQ0wsS0FBSztvQ0FDTCxLQUFLOzhCQUNMLE1BQU07aUNBQ04sTUFBTTs7SUFrQ1gsMkJBQUM7Q0FBQSxBQTNERCxJQTJEQztTQXJEWSxvQkFBb0I7OztJQUM3QiwwQ0FBbUM7O0lBQ25DLDJDQUFvQzs7SUFDcEMsd0NBQTBDOztJQUMxQyxxQ0FBc0I7O0lBQ3RCLG9DQUErRTs7SUFDL0UsK0NBQW1HOztJQUNuRyxxQ0FBOEI7O0lBQzlCLHdDQUEwQzs7SUFDMUMsNkNBQXNDOztJQUN0Qyw0Q0FBeUU7O0lBQ3pFLHVDQUF5Qzs7SUFDekMsOENBQWdDOztJQUNoQyx3Q0FBeUM7O0lBQ3pDLDZDQUFzQzs7SUFDdEMsbURBQTZDOztJQUM3QywrQ0FBaUM7O0lBQ2pDLGlEQUE0Qzs7SUFDNUMsMkNBQXFFOztJQUNyRSw4Q0FBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVWaWV3TW9kZWwgfSBmcm9tICcuLi9maWxlL2ZpbGUubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2MtaW1hZ2Utdmlld2VyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS12aWV3ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdXBsb2FkSWNvbjogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcHVibGljIHVwbG9hZFRpdGxlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBtb2RlbDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzaXplOiAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnIHwgJ2Z1bGwnIHwgJ3RpbnknID0gJ3NtYWxsJztcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkZWZhdWx0SW1hZ2VVcmwgPSAnaHR0cHM6Ly9jbWNnbG9iYWwuY29tLnZuL2Nzcy9pbWFnZS1jb21tb24vQ29tYmluZWQlMjBTaGFwZS5zdmcnO1xyXG4gICAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZWRpdGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjdXN0b21DbGFzc2VzOiBzdHJpbmc7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGltYWdlUmVtb3ZlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcmFkaW91czogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgdmFsaWRhdGlvbk5hbWU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjdXRSYXRpbzogbnVtYmVyID0gMSAvIDE7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcmVzaXplVG9XaWR0aDogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgcHVibGljIG1haW50YWluQXNwZWN0UmF0aW86IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSB2YWxpZGF0aW9uU2NvcGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGVtaXROdWxsT25EZXN0cm95OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0ZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5lbWl0TnVsbE9uRGVzdHJveSA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaWxlVXBsb2FkZWQoZmlsZTogRmlsZVZpZXdNb2RlbCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMubW9kZWw7XHJcbiAgICAgICAgaWYgKCFtb2RlbCkgbW9kZWwgPSB7fTtcclxuICAgICAgICBtb2RlbC5zcmMgPSBmaWxlLnNyYztcclxuICAgICAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQobW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbWFnZVNyYygpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsICYmIHRoaXMubW9kZWwuc3JjKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLnNyYztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0SW1hZ2VVcmw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVJbWFnZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1vZGVsLnNyYyA9IHRoaXMuZGVmYXVsdEltYWdlVXJsO1xyXG4gICAgICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdChudWxsKTtcclxuICAgICAgICB0aGlzLmltYWdlUmVtb3ZlZC5lbWl0KHRoaXMubW9kZWwuc3JjKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0SW1hZ2UoaXRlbTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFpdGVtKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFpdGVtLnNlbGVjdGVkKSBpdGVtLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgaXRlbS5zZWxlY3RlZCA9ICFpdGVtLnNlbGVjdGVkO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdChpdGVtLnNlbGVjdGVkKTtcclxuICAgIH1cclxufVxyXG4iXX0=