/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ValidationModule } from '../validation/validation.module';
import { ViewerComponent } from './viewer.component';
import { ImageViewerModule } from '../image-viewer/image-viewer.module';
import { FileModule } from '../file/file.module';
import { GalleryComponent } from './gallery/gallery.component';
import { TableModule } from '../table/table.module';
import { CardModule } from '../card/card.module';
import { FormatterModule } from '../formatter/formatter.module';
var ViewerModule = /** @class */ (function () {
    function ViewerModule() {
    }
    ViewerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        GalleryComponent,
                        ViewerComponent
                    ],
                    imports: [
                        CommonModule,
                        ImageCropperModule,
                        ImageViewerModule,
                        FileModule,
                        ValidationModule,
                        NgxDnDModule,
                        TableModule,
                        CardModule,
                        FormatterModule
                    ],
                    entryComponents: [
                        GalleryComponent,
                        ViewerComponent
                    ],
                    exports: [
                        GalleryComponent,
                        ViewerComponent
                    ]
                },] }
    ];
    return ViewerModule;
}());
export { ViewerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3ZpZXdlci92aWV3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVoRTtJQUFBO0lBeUI0QixDQUFDOztnQkF6QjVCLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZ0JBQWdCO3dCQUNoQixlQUFlO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixrQkFBa0I7d0JBQ2xCLGlCQUFpQjt3QkFDakIsVUFBVTt3QkFDVixnQkFBZ0I7d0JBQ2hCLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxVQUFVO3dCQUNWLGVBQWU7cUJBQ2hCO29CQUNELGVBQWUsRUFBRTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGVBQWU7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLGVBQWU7cUJBQUM7aUJBQ25COztJQUUyQixtQkFBQztDQUFBLEFBekI3QixJQXlCNkI7U0FBaEIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5neERuRE1vZHVsZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZG5kJztcclxuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyTW9kdWxlIH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vdmFsaWRhdGlvbi92YWxpZGF0aW9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IFZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vdmlld2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEltYWdlVmlld2VyTW9kdWxlIH0gZnJvbSAnLi4vaW1hZ2Utdmlld2VyL2ltYWdlLXZpZXdlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBGaWxlTW9kdWxlIH0gZnJvbSAnLi4vZmlsZS9maWxlLm1vZHVsZSc7XHJcbmltcG9ydCB7IEdhbGxlcnlDb21wb25lbnQgfSBmcm9tICcuL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJsZU1vZHVsZSB9IGZyb20gJy4uL3RhYmxlL3RhYmxlLm1vZHVsZSc7XHJcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi9jYXJkL2NhcmQubW9kdWxlJztcclxuaW1wb3J0IHsgRm9ybWF0dGVyTW9kdWxlIH0gZnJvbSAnLi4vZm9ybWF0dGVyL2Zvcm1hdHRlci5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEdhbGxlcnlDb21wb25lbnQsXHJcbiAgICBWaWV3ZXJDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEltYWdlQ3JvcHBlck1vZHVsZSxcclxuICAgIEltYWdlVmlld2VyTW9kdWxlLFxyXG4gICAgRmlsZU1vZHVsZSxcclxuICAgIFZhbGlkYXRpb25Nb2R1bGUsXHJcbiAgICBOZ3hEbkRNb2R1bGUsXHJcbiAgICBUYWJsZU1vZHVsZSxcclxuICAgIENhcmRNb2R1bGUsXHJcbiAgICBGb3JtYXR0ZXJNb2R1bGVcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgR2FsbGVyeUNvbXBvbmVudCxcclxuICAgIFZpZXdlckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgR2FsbGVyeUNvbXBvbmVudCxcclxuICAgIFZpZXdlckNvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3ZXJNb2R1bGUgeyB9XHJcbiJdfQ==