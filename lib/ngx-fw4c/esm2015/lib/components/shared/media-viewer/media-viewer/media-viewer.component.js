/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FullMediaComponent } from '../full-media/full-media.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaItem } from '../../models/base.model';
import { ModalService } from '../../modals/modal.service';
export class MediaViewerComponent {
    /**
     * @param {?} modalService
     * @param {?} sanitizer
     */
    constructor(modalService, sanitizer) {
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.modelChange = new EventEmitter();
        this.removed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const isExternal = /(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/.test(this.model.fullSrc);
        if (isExternal) {
            /** @type {?} */
            const match = /(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/.exec(this.model.fullSrc);
            /** @type {?} */
            const videoId = match[1];
            this.thumbnailHtml = this.sanitizer.bypassSecurityTrustHtml(`<img style="height:90px" src="https://img.youtube.com/vi/${videoId}/0.jpg"></img>`);
        }
        else {
            this.thumbnailHtml = this.sanitizer.bypassSecurityTrustHtml(`<img style="height:90px" src="${this.model.src}"></img>`);
        }
    }
    /**
     * @return {?}
     */
    viewMedia() {
        this.modalService.showTemplateDialog({
            template: FullMediaComponent,
            title: 'Xem chi tiết',
            customSize: 'modal-lg',
            data: {
                model: this.model
            }
        });
    }
    /**
     * @return {?}
     */
    remove() {
        this.removed.emit(this.model);
        this.modelChange.emit(null);
    }
}
MediaViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'c-media',
                template: "<div class=\"media-viewer-item\">\r\n  <label *ngIf=\"title\">{{title}}</label>\r\n  <div [ngClass]=\"{'selected-file': selected}\">\r\n    <i class=\"fa fa-tick-mark selected-icon\"></i>\r\n    <div class=\"box--video--item\">\r\n      <a class=\"video--item\" href=\"javascript:;\" (click)=\"viewMedia()\">\r\n        <div [innerHTML]=\"thumbnailHtml\"></div>\r\n      </a>\r\n      <a class=\"remove--video\" *ngIf=\"model\" href=\"javascript:;\" title=\"X\u00F3a\" (click)=\"remove()\"><i class=\"fa fa-times\"\r\n          aria-hidden=\"true\"></i></a>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ['./media-viewer.component.scss']
            }] }
];
/** @nocollapse */
MediaViewerComponent.ctorParameters = () => [
    { type: ModalService },
    { type: DomSanitizer }
];
MediaViewerComponent.propDecorators = {
    title: [{ type: Input }],
    model: [{ type: Input }],
    modelChange: [{ type: Output }],
    removed: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL21lZGlhLXZpZXdlci9tZWRpYS12aWV3ZXIvbWVkaWEtdmlld2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVExRCxNQUFNLE9BQU8sb0JBQW9COzs7OztJQVEvQixZQUNZLFlBQTBCLEVBQzFCLFNBQXVCO1FBRHZCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFQekIsZ0JBQVcsR0FBNEIsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUM5RCxZQUFPLEdBQTRCLElBQUksWUFBWSxFQUFFLENBQUM7SUFPbkUsQ0FBQzs7OztJQUVMLFFBQVE7O2NBQ0EsVUFBVSxHQUFHLHlDQUF5QyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNyRixJQUFJLFVBQVUsRUFBRTs7a0JBQ1IsS0FBSyxHQUFHLHlDQUF5QyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7a0JBQzFFLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyw0REFBNEQsT0FBTyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ2xKO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsaUNBQWlDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQztTQUN4SDtJQUNILENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQztZQUNuQyxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLEtBQUssRUFBRSxjQUFjO1lBQ3JCLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDbEI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUE1Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQiw2bEJBQTRDO3lCQUNuQywrQkFBK0I7YUFDekM7Ozs7WUFOUSxZQUFZO1lBRlosWUFBWTs7O29CQVdsQixLQUFLO29CQUNMLEtBQUs7MEJBQ0wsTUFBTTtzQkFDTixNQUFNOzs7O0lBSFAscUNBQXNCOztJQUN0QixxQ0FBMEI7O0lBQzFCLDJDQUErRTs7SUFDL0UsdUNBQXVFOztJQUN2RSx3Q0FBeUI7O0lBQ3pCLDZDQUErQjs7Ozs7SUFHN0IsNENBQW9DOzs7OztJQUNwQyx5Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZ1bGxNZWRpYUNvbXBvbmVudCB9IGZyb20gJy4uL2Z1bGwtbWVkaWEvZnVsbC1tZWRpYS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IE1lZGlhSXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLm1vZGVsJztcclxuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kYWxzL21vZGFsLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjLW1lZGlhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWVkaWEtdmlld2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFsnLi9tZWRpYS12aWV3ZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lZGlhVmlld2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nXHJcbiAgQElucHV0KCkgbW9kZWw6IE1lZGlhSXRlbTtcclxuICBAT3V0cHV0KCkgbW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxNZWRpYUl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxNZWRpYUl0ZW0+KCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyByZW1vdmVkOiBFdmVudEVtaXR0ZXI8TWVkaWFJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBwdWJsaWMgc2VsZWN0ZWQ6IGJvb2xlYW47XHJcbiAgcHVibGljIHRodW1ibmFpbEh0bWw6IFNhZmVIdG1sO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuICAgIHByb3RlY3RlZCBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNFeHRlcm5hbCA9IC8oPzptXFwuKT95b3V0dWJlXFwuY29tXFwvd2F0Y2hcXD92PShbXFx3LV0rKS8udGVzdCh0aGlzLm1vZGVsLmZ1bGxTcmMpO1xyXG4gICAgaWYgKGlzRXh0ZXJuYWwpIHtcclxuICAgICAgY29uc3QgbWF0Y2ggPSAvKD86bVxcLik/eW91dHViZVxcLmNvbVxcL3dhdGNoXFw/dj0oW1xcdy1dKykvLmV4ZWModGhpcy5tb2RlbC5mdWxsU3JjKTtcclxuICAgICAgY29uc3QgdmlkZW9JZCA9IG1hdGNoWzFdO1xyXG4gICAgICB0aGlzLnRodW1ibmFpbEh0bWwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChgPGltZyBzdHlsZT1cImhlaWdodDo5MHB4XCIgc3JjPVwiaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHt2aWRlb0lkfS8wLmpwZ1wiPjwvaW1nPmApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50aHVtYm5haWxIdG1sID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoYDxpbWcgc3R5bGU9XCJoZWlnaHQ6OTBweFwiIHNyYz1cIiR7dGhpcy5tb2RlbC5zcmN9XCI+PC9pbWc+YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2aWV3TWVkaWEoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93VGVtcGxhdGVEaWFsb2coe1xyXG4gICAgICB0ZW1wbGF0ZTogRnVsbE1lZGlhQ29tcG9uZW50LFxyXG4gICAgICB0aXRsZTogJ1hlbSBjaGkgdGnhur90JyxcclxuICAgICAgY3VzdG9tU2l6ZTogJ21vZGFsLWxnJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG1vZGVsOiB0aGlzLm1vZGVsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmVkLmVtaXQodGhpcy5tb2RlbCk7XHJcbiAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQobnVsbCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==