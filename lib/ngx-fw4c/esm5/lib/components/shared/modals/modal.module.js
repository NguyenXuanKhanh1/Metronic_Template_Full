/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { NotificationComponent } from './components/notification/notification.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { TemplateComponent } from './components/template/template.component';
import { LoaderModule } from '../loader/loader.module';
import { ModalModule, ComponentLoaderFactory, PositioningService, BsModalService } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { ModalService } from './modal.service';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { LoadingComponent } from './components/loading';
/** @type {?} */
var declarations = [
    NotificationComponent,
    ConfirmComponent,
    TemplateComponent,
    LoadingComponent
];
var CModalModule = /** @class */ (function () {
    function CModalModule() {
    }
    /**
     * @return {?}
     */
    CModalModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: CModalModule,
            providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsModalService,
                ModalService,
                Ng4LoadingSpinnerService
            ]
        };
    };
    CModalModule.decorators = [
        { type: NgModule, args: [{
                    declarations: declarations,
                    imports: [
                        CommonModule,
                        LoaderModule,
                        ModalModule.forRoot(),
                        Ng4LoadingSpinnerModule.forRoot()
                    ],
                    entryComponents: declarations,
                    exports: declarations,
                    providers: []
                },] }
    ];
    return CModalModule;
}());
export { CModalModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvbW9kYWxzL21vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLHdCQUF3QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBRWxELFlBQVksR0FBRztJQUNuQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7Q0FDakI7QUFFRDtJQUFBO0lBMEJBLENBQUM7Ozs7SUFaZSxvQkFBTzs7O0lBQXJCO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxzQkFBc0I7Z0JBQ3RCLGtCQUFrQjtnQkFDbEIsY0FBYztnQkFDZCxZQUFZO2dCQUNaLHdCQUF3QjthQUN6QjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkF6QkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxZQUFZO29CQUMxQixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFdBQVcsQ0FBQyxPQUFPLEVBQUU7d0JBQ3JCLHVCQUF1QixDQUFDLE9BQU8sRUFBRTtxQkFDbEM7b0JBQ0QsZUFBZSxFQUFFLFlBQVk7b0JBQzdCLE9BQU8sRUFBRSxZQUFZO29CQUNyQixTQUFTLEVBQUUsRUFBRTtpQkFDZDs7SUFlRCxtQkFBQztDQUFBLEFBMUJELElBMEJDO1NBYlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmZpcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29uZmlybS9jb25maXJtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbXBsYXRlL3RlbXBsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYWRlck1vZHVsZSB9IGZyb20gJy4uL2xvYWRlci9sb2FkZXIubW9kdWxlJztcclxuaW1wb3J0IHsgTW9kYWxNb2R1bGUsIENvbXBvbmVudExvYWRlckZhY3RvcnksIFBvc2l0aW9uaW5nU2VydmljZSwgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9tb2RhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmc0TG9hZGluZ1NwaW5uZXJNb2R1bGUsIE5nNExvYWRpbmdTcGlubmVyU2VydmljZSB9IGZyb20gJ25nNC1sb2FkaW5nLXNwaW5uZXInO1xyXG5pbXBvcnQgeyBMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRpbmcnO1xyXG5cclxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xyXG4gIE5vdGlmaWNhdGlvbkNvbXBvbmVudCxcclxuICBDb25maXJtQ29tcG9uZW50LFxyXG4gIFRlbXBsYXRlQ29tcG9uZW50LFxyXG4gIExvYWRpbmdDb21wb25lbnRcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTG9hZGVyTW9kdWxlLFxyXG4gICAgTW9kYWxNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgTmc0TG9hZGluZ1NwaW5uZXJNb2R1bGUuZm9yUm9vdCgpXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IGRlY2xhcmF0aW9ucyxcclxuICBleHBvcnRzOiBkZWNsYXJhdGlvbnMsXHJcbiAgcHJvdmlkZXJzOiBbXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENNb2RhbE1vZHVsZSB7XHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IENNb2RhbE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSwgXHJcbiAgICAgICAgUG9zaXRpb25pbmdTZXJ2aWNlLFxyXG4gICAgICAgIEJzTW9kYWxTZXJ2aWNlLFxyXG4gICAgICAgIE1vZGFsU2VydmljZSxcclxuICAgICAgICBOZzRMb2FkaW5nU3Bpbm5lclNlcnZpY2UgXHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59Il19