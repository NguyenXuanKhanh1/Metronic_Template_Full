/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FullMediaComponent } from '../full-media/full-media.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaItem } from '../../models/base.model';
import { ModalService } from '../../modals/modal.service';
var MediaViewerComponent = /** @class */ (function () {
    function MediaViewerComponent(modalService, sanitizer) {
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.modelChange = new EventEmitter();
        this.removed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MediaViewerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isExternal = /(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/.test(this.model.fullSrc);
        if (isExternal) {
            /** @type {?} */
            var match = /(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/.exec(this.model.fullSrc);
            /** @type {?} */
            var videoId = match[1];
            this.thumbnailHtml = this.sanitizer.bypassSecurityTrustHtml("<img style=\"height:90px\" src=\"https://img.youtube.com/vi/" + videoId + "/0.jpg\"></img>");
        }
        else {
            this.thumbnailHtml = this.sanitizer.bypassSecurityTrustHtml("<img style=\"height:90px\" src=\"" + this.model.src + "\"></img>");
        }
    };
    /**
     * @return {?}
     */
    MediaViewerComponent.prototype.viewMedia = /**
     * @return {?}
     */
    function () {
        this.modalService.showTemplateDialog({
            template: FullMediaComponent,
            title: 'Xem chi tiết',
            customSize: 'modal-lg',
            data: {
                model: this.model
            }
        });
    };
    /**
     * @return {?}
     */
    MediaViewerComponent.prototype.remove = /**
     * @return {?}
     */
    function () {
        this.removed.emit(this.model);
        this.modelChange.emit(null);
    };
    MediaViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c-media',
                    template: "<div class=\"media-viewer-item\">\r\n  <label *ngIf=\"title\">{{title}}</label>\r\n  <div [ngClass]=\"{'selected-file': selected}\">\r\n    <i class=\"fa fa-tick-mark selected-icon\"></i>\r\n    <div class=\"box--video--item\">\r\n      <a class=\"video--item\" href=\"javascript:;\" (click)=\"viewMedia()\">\r\n        <div [innerHTML]=\"thumbnailHtml\"></div>\r\n      </a>\r\n      <a class=\"remove--video\" *ngIf=\"model\" href=\"javascript:;\" title=\"X\u00F3a\" (click)=\"remove()\"><i class=\"fa fa-times\"\r\n          aria-hidden=\"true\"></i></a>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: ['./media-viewer.component.scss']
                }] }
    ];
    /** @nocollapse */
    MediaViewerComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: DomSanitizer }
    ]; };
    MediaViewerComponent.propDecorators = {
        title: [{ type: Input }],
        model: [{ type: Input }],
        modelChange: [{ type: Output }],
        removed: [{ type: Output }]
    };
    return MediaViewerComponent;
}());
export { MediaViewerComponent };
if (false) {
    /** @type {?} */
    MediaViewerComponent.prototype.title;
    /** @type {?} */
    MediaViewerComponent.prototype.model;
    /** @type {?} */
    MediaViewerComponent.prototype.modelChange;
    /** @type {?} */
    MediaViewerComponent.prototype.removed;
    /** @type {?} */
    MediaViewerComponent.prototype.selected;
    /** @type {?} */
    MediaViewerComponent.prototype.thumbnailHtml;
    /**
     * @type {?}
     * @protected
     */
    MediaViewerComponent.prototype.modalService;
    /**
     * @type {?}
     * @protected
     */
    MediaViewerComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL21lZGlhLXZpZXdlci9tZWRpYS12aWV3ZXIvbWVkaWEtdmlld2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUxRDtJQWNFLDhCQUNZLFlBQTBCLEVBQzFCLFNBQXVCO1FBRHZCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFQekIsZ0JBQVcsR0FBNEIsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUM5RCxZQUFPLEdBQTRCLElBQUksWUFBWSxFQUFFLENBQUM7SUFPbkUsQ0FBQzs7OztJQUVMLHVDQUFROzs7SUFBUjs7WUFDUSxVQUFVLEdBQUcseUNBQXlDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3JGLElBQUksVUFBVSxFQUFFOztnQkFDUixLQUFLLEdBQUcseUNBQXlDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDOztnQkFDMUUsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLGlFQUE0RCxPQUFPLG9CQUFnQixDQUFDLENBQUM7U0FDbEo7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxzQ0FBaUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLGNBQVUsQ0FBQyxDQUFDO1NBQ3hIO0lBQ0gsQ0FBQzs7OztJQUVELHdDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUM7WUFDbkMsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixLQUFLLEVBQUUsY0FBYztZQUNyQixVQUFVLEVBQUUsVUFBVTtZQUN0QixJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2FBQ2xCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHFDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkE1Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQiw2bEJBQTRDOzZCQUNuQywrQkFBK0I7aUJBQ3pDOzs7O2dCQU5RLFlBQVk7Z0JBRlosWUFBWTs7O3dCQVdsQixLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsTUFBTTswQkFDTixNQUFNOztJQW1DVCwyQkFBQztDQUFBLEFBN0NELElBNkNDO1NBdkNZLG9CQUFvQjs7O0lBQy9CLHFDQUFzQjs7SUFDdEIscUNBQTBCOztJQUMxQiwyQ0FBK0U7O0lBQy9FLHVDQUF1RTs7SUFDdkUsd0NBQXlCOztJQUN6Qiw2Q0FBK0I7Ozs7O0lBRzdCLDRDQUFvQzs7Ozs7SUFDcEMseUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGdWxsTWVkaWFDb21wb25lbnQgfSBmcm9tICcuLi9mdWxsLW1lZGlhL2Z1bGwtbWVkaWEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBNZWRpYUl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvYmFzZS5tb2RlbCc7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGFscy9tb2RhbC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYy1tZWRpYScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21lZGlhLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbJy4vbWVkaWEtdmlld2VyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNZWRpYVZpZXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZ1xyXG4gIEBJbnB1dCgpIG1vZGVsOiBNZWRpYUl0ZW07XHJcbiAgQE91dHB1dCgpIG1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TWVkaWFJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8TWVkaWFJdGVtPigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgcmVtb3ZlZDogRXZlbnRFbWl0dGVyPE1lZGlhSXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgcHVibGljIHNlbGVjdGVkOiBib29sZWFuO1xyXG4gIHB1YmxpYyB0aHVtYm5haWxIdG1sOiBTYWZlSHRtbDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcbiAgICBwcm90ZWN0ZWQgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlzRXh0ZXJuYWwgPSAvKD86bVxcLik/eW91dHViZVxcLmNvbVxcL3dhdGNoXFw/dj0oW1xcdy1dKykvLnRlc3QodGhpcy5tb2RlbC5mdWxsU3JjKTtcclxuICAgIGlmIChpc0V4dGVybmFsKSB7XHJcbiAgICAgIGNvbnN0IG1hdGNoID0gLyg/Om1cXC4pP3lvdXR1YmVcXC5jb21cXC93YXRjaFxcP3Y9KFtcXHctXSspLy5leGVjKHRoaXMubW9kZWwuZnVsbFNyYyk7XHJcbiAgICAgIGNvbnN0IHZpZGVvSWQgPSBtYXRjaFsxXTtcclxuICAgICAgdGhpcy50aHVtYm5haWxIdG1sID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoYDxpbWcgc3R5bGU9XCJoZWlnaHQ6OTBweFwiIHNyYz1cImh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7dmlkZW9JZH0vMC5qcGdcIj48L2ltZz5gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGh1bWJuYWlsSHRtbCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGA8aW1nIHN0eWxlPVwiaGVpZ2h0OjkwcHhcIiBzcmM9XCIke3RoaXMubW9kZWwuc3JjfVwiPjwvaW1nPmApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmlld01lZGlhKCk6IHZvaWQge1xyXG4gICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd1RlbXBsYXRlRGlhbG9nKHtcclxuICAgICAgdGVtcGxhdGU6IEZ1bGxNZWRpYUNvbXBvbmVudCxcclxuICAgICAgdGl0bGU6ICdYZW0gY2hpIHRp4bq/dCcsXHJcbiAgICAgIGN1c3RvbVNpemU6ICdtb2RhbC1sZycsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBtb2RlbDogdGhpcy5tb2RlbFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlZC5lbWl0KHRoaXMubW9kZWwpO1xyXG4gICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KG51bGwpO1xyXG4gIH1cclxufVxyXG4iXX0=