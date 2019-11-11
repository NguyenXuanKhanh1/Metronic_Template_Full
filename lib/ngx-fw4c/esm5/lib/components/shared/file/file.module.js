/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileService } from './file.service';
import { FileProvider } from './file.provider';
import { UploaderComponent } from './file.component';
import { FormsModule } from '@angular/forms';
import { CropperModule } from '../cropper/cropper.module';
var FileModule = /** @class */ (function () {
    function FileModule() {
    }
    FileModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [UploaderComponent],
                    imports: [
                        CommonModule,
                        FormsModule,
                        CropperModule
                    ],
                    exports: [UploaderComponent],
                    entryComponents: [UploaderComponent],
                    providers: [
                        FileService,
                        FileProvider
                    ]
                },] }
    ];
    return FileModule;
}());
export { FileModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9maWxlL2ZpbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQ7SUFBQTtJQWUwQixDQUFDOztnQkFmMUIsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUNqQyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGFBQWE7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQzVCLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUNwQyxTQUFTLEVBQUU7d0JBQ1QsV0FBVzt3QkFDWCxZQUFZO3FCQUNiO2lCQUNGOztJQUV5QixpQkFBQztDQUFBLEFBZjNCLElBZTJCO1NBQWQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9maWxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGaWxlUHJvdmlkZXIgfSBmcm9tICcuL2ZpbGUucHJvdmlkZXInO1xyXG5pbXBvcnQgeyBVcGxvYWRlckNvbXBvbmVudCB9IGZyb20gJy4vZmlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ3JvcHBlck1vZHVsZSB9IGZyb20gJy4uL2Nyb3BwZXIvY3JvcHBlci5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtVcGxvYWRlckNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBDcm9wcGVyTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbVXBsb2FkZXJDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1VwbG9hZGVyQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEZpbGVTZXJ2aWNlLFxyXG4gICAgRmlsZVByb3ZpZGVyXHJcbiAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVNb2R1bGUgeyB9XHJcbiJdfQ==