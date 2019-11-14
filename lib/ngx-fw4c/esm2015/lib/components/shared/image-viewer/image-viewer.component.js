/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class ImageViewerComponent {
    constructor() {
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
    ngOnDestroy() {
        if (this.emitNullOnDestroy === true)
            this.modelChange.emit(null);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    fileUploaded(file) {
        /** @type {?} */
        let model = this.model;
        if (!model)
            model = {};
        model.src = file.src;
        this.modelChange.emit(model);
    }
    /**
     * @return {?}
     */
    imageSrc() {
        if (this.model && this.model.src) {
            return this.model.src;
        }
        else {
            return this.defaultImageUrl;
        }
    }
    /**
     * @return {?}
     */
    removeImage() {
        this.model.src = this.defaultImageUrl;
        this.modelChange.emit(null);
        this.imageRemoved.emit(this.model.src);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectImage(item) {
        if (!item)
            return;
        if (!item.selected)
            item.selected = false;
        item.selected = !item.selected;
        this.selectedChange.emit(item.selected);
    }
}
ImageViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-image-viewer',
                template: "<div class=\"form-group\">\r\n  <label *ngIf=\"title\">{{title}}</label>\r\n  <div [ngClass]=\"{'selected-file': model?.selected}\">\r\n    <div [ngClass]=\"{'deletable-image': editable}\" (click)=\"selectImage(model)\">\r\n      <i class=\"fa fa-check selected-icon\"></i>\r\n      <div class=\"{{size}}\" [ngClass]=\"{'image-radious': radious}\">\r\n        <div class=\"img-ratio-1-1\">\r\n          <img class=\"img-height\" [attr.src]=\"imageSrc()\">\r\n        </div>\r\n      </div>\r\n      <div class=\"cover-tool\" *ngIf=\"editable\">\r\n        <div class=\"d-flex justify-content-between\">\r\n          <katana-file-uploader [icon]=\"uploadIcon\" [title]=\"uploadTitle\" [multiple]=\"multiple\" (fileUploaded)=\"fileUploaded($event)\" [maintainAspectRatio]=\"maintainAspectRatio\"\r\n            [resizeToWidth]=\"resizeToWidth\" [cropImage]=\"true\" fileType=\"image\" [cutRatio]=\"cutRatio\">\r\n            <i class=\"fa fa-pencil\"></i>\r\n          </katana-file-uploader>\r\n          <a *ngIf=\"model\" href=\"javascript:;\" class=\"remove\" (click)=\"removeImage()\"><i class=\"fa fa-times\"\r\n              aria-hidden=\"true\"></i></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\">\r\n  </div>\r\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2ltYWdlLXZpZXdlci9pbWFnZS12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU2xGLE1BQU0sT0FBTyxvQkFBb0I7SUFOakM7UUFTb0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixTQUFJLEdBQW1ELE9BQU8sQ0FBQztRQUMvRCxvQkFBZSxHQUFHLGdFQUFnRSxDQUFDO1FBRW5GLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFekIsaUJBQVksR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6RCxZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLGFBQVEsR0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSWhDLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUMzQixnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BELG1CQUFjLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFrQ2hGLENBQUM7Ozs7SUFoQ0csV0FBVztRQUNQLElBQUksSUFBSSxDQUFDLGlCQUFpQixLQUFLLElBQUk7WUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsSUFBbUI7O1lBQy9CLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSztRQUN0QixJQUFJLENBQUMsS0FBSztZQUFFLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFTSxRQUFRO1FBQ1gsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDekI7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUMvQjtJQUNMLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRU0sV0FBVyxDQUFDLElBQVM7UUFDeEIsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUExREosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLG8xQ0FBNEM7O2FBRS9DOzs7eUJBR0ksS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLOzhCQUNMLEtBQUs7b0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsTUFBTTtzQkFDTixLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLO2tDQUNMLEtBQUs7OEJBQ0wsS0FBSztnQ0FDTCxLQUFLOzBCQUNMLE1BQU07NkJBQ04sTUFBTTs7OztJQWxCUCwwQ0FBbUM7O0lBQ25DLDJDQUFvQzs7SUFDcEMsd0NBQTBDOztJQUMxQyxxQ0FBc0I7O0lBQ3RCLG9DQUErRTs7SUFDL0UsK0NBQW1HOztJQUNuRyxxQ0FBOEI7O0lBQzlCLHdDQUEwQzs7SUFDMUMsNkNBQXNDOztJQUN0Qyw0Q0FBeUU7O0lBQ3pFLHVDQUF5Qzs7SUFDekMsOENBQWdDOztJQUNoQyx3Q0FBeUM7O0lBQ3pDLDZDQUFzQzs7SUFDdEMsbURBQTZDOztJQUM3QywrQ0FBaUM7O0lBQ2pDLGlEQUE0Qzs7SUFDNUMsMkNBQXFFOztJQUNyRSw4Q0FBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVWaWV3TW9kZWwgfSBmcm9tICcuLi9maWxlL2ZpbGUubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2thdGFuYS1pbWFnZS12aWV3ZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9pbWFnZS12aWV3ZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlVmlld2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB1cGxvYWRJY29uOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdXBsb2FkVGl0bGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBtdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcHVibGljIG1vZGVsO1xyXG4gICAgQElucHV0KCkgcHVibGljIHNpemU6ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZScgfCAnZnVsbCcgfCAndGlueScgPSAnc21hbGwnO1xyXG4gICAgQElucHV0KCkgcHVibGljIGRlZmF1bHRJbWFnZVVybCA9ICdodHRwczovL2NtY2dsb2JhbC5jb20udm4vY3NzL2ltYWdlLWNvbW1vbi9Db21iaW5lZCUyMFNoYXBlLnN2Zyc7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBlZGl0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcHVibGljIGN1c3RvbUNsYXNzZXM6IHN0cmluZztcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgaW1hZ2VSZW1vdmVkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByYWRpb3VzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSB2YWxpZGF0aW9uTmFtZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcHVibGljIGN1dFJhdGlvOiBudW1iZXIgPSAxIC8gMTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByZXNpemVUb1dpZHRoOiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbWFpbnRhaW5Bc3BlY3RSYXRpbzogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIHZhbGlkYXRpb25TY29wZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgZW1pdE51bGxPbkRlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgbW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmVtaXROdWxsT25EZXN0cm95ID09PSB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbGVVcGxvYWRlZChmaWxlOiBGaWxlVmlld01vZGVsKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5tb2RlbDtcclxuICAgICAgICBpZiAoIW1vZGVsKSBtb2RlbCA9IHt9O1xyXG4gICAgICAgIG1vZGVsLnNyYyA9IGZpbGUuc3JjO1xyXG4gICAgICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdChtb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGltYWdlU3JjKCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwgJiYgdGhpcy5tb2RlbC5zcmMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwuc3JjO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRJbWFnZVVybDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUltYWdlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3JjID0gdGhpcy5kZWZhdWx0SW1hZ2VVcmw7XHJcbiAgICAgICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KG51bGwpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VSZW1vdmVkLmVtaXQodGhpcy5tb2RlbC5zcmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RJbWFnZShpdGVtOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWl0ZW0pIHJldHVybjtcclxuICAgICAgICBpZiAoIWl0ZW0uc2VsZWN0ZWQpIGl0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICBpdGVtLnNlbGVjdGVkID0gIWl0ZW0uc2VsZWN0ZWQ7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KGl0ZW0uc2VsZWN0ZWQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==