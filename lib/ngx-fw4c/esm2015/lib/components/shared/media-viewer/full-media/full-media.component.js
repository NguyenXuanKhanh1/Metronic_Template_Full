/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaItem } from '../../models/base.model';
export class FullMediaComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.videoPlayerHtml = this.generateHtml();
    }
    /**
     * @private
     * @return {?}
     */
    generateHtml() {
        /** @type {?} */
        const isExternal = /(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/.test(this.model.fullSrc);
        /** @type {?} */
        let videoTag = '';
        if (isExternal) {
            /** @type {?} */
            const match = /(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/.exec(this.model.fullSrc);
            /** @type {?} */
            const videoId = match[1];
            videoTag = `<iframe  style="width:100%; min-height: 500px;"  src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        }
        else {
            videoTag = `<video controls style="width:100%"><source src="${this.model.fullSrc}" type="video/mp4"></video>`;
        }
        return this.sanitizer.bypassSecurityTrustHtml(videoTag);
    }
}
FullMediaComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-full-media',
                template: "<div [innerHTML]=\"videoPlayerHtml\"></div>\r\n"
            }] }
];
/** @nocollapse */
FullMediaComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
FullMediaComponent.propDecorators = {
    model: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FullMediaComponent.prototype.model;
    /** @type {?} */
    FullMediaComponent.prototype.videoPlayerHtml;
    /**
     * @type {?}
     * @private
     */
    FullMediaComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1tZWRpYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9tZWRpYS12aWV3ZXIvZnVsbC1tZWRpYS9mdWxsLW1lZGlhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQVFwRCxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBSzdCLFlBQ1UsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUM3QixDQUFDOzs7O0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRU8sWUFBWTs7Y0FDWixVQUFVLEdBQUcseUNBQXlDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDOztZQUVqRixRQUFRLEdBQUcsRUFBRTtRQUNqQixJQUFJLFVBQVUsRUFBRTs7a0JBQ1IsS0FBSyxHQUFHLHlDQUF5QyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7a0JBQzFFLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLFFBQVEsR0FBRyx1RkFBdUYsT0FBTywrRUFBK0UsQ0FBQztTQUMxTDthQUFNO1lBQ0wsUUFBUSxHQUFHLG1EQUFtRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sNkJBQTZCLENBQUM7U0FDL0c7UUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QiwyREFBMEM7YUFFM0M7Ozs7WUFQUSxZQUFZOzs7b0JBVWxCLEtBQUs7Ozs7SUFBTixtQ0FBMEI7O0lBRTFCLDZDQUEwQjs7Ozs7SUFHeEIsdUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgTWVkaWFJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrYXRhbmEtZnVsbC1tZWRpYScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Z1bGwtbWVkaWEuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGdWxsTWVkaWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIG1vZGVsOiBNZWRpYUl0ZW07XHJcblxyXG4gIHZpZGVvUGxheWVySHRtbDogU2FmZUh0bWw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy52aWRlb1BsYXllckh0bWwgPSB0aGlzLmdlbmVyYXRlSHRtbCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZUh0bWwoKTogU2FmZUh0bWwge1xyXG4gICAgY29uc3QgaXNFeHRlcm5hbCA9IC8oPzptXFwuKT95b3V0dWJlXFwuY29tXFwvd2F0Y2hcXD92PShbXFx3LV0rKS8udGVzdCh0aGlzLm1vZGVsLmZ1bGxTcmMpO1xyXG5cclxuICAgIGxldCB2aWRlb1RhZyA9ICcnO1xyXG4gICAgaWYgKGlzRXh0ZXJuYWwpIHtcclxuICAgICAgY29uc3QgbWF0Y2ggPSAvKD86bVxcLik/eW91dHViZVxcLmNvbVxcL3dhdGNoXFw/dj0oW1xcdy1dKykvLmV4ZWModGhpcy5tb2RlbC5mdWxsU3JjKTtcclxuICAgICAgY29uc3QgdmlkZW9JZCA9IG1hdGNoWzFdO1xyXG4gICAgICB2aWRlb1RhZyA9IGA8aWZyYW1lICBzdHlsZT1cIndpZHRoOjEwMCU7IG1pbi1oZWlnaHQ6IDUwMHB4O1wiICBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9XCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPmA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2aWRlb1RhZyA9IGA8dmlkZW8gY29udHJvbHMgc3R5bGU9XCJ3aWR0aDoxMDAlXCI+PHNvdXJjZSBzcmM9XCIke3RoaXMubW9kZWwuZnVsbFNyY31cIiB0eXBlPVwidmlkZW8vbXA0XCI+PC92aWRlbz5gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2aWRlb1RhZyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==