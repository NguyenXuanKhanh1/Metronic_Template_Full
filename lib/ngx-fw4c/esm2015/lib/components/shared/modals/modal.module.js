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
const declarations = [
    NotificationComponent,
    ConfirmComponent,
    TemplateComponent,
    LoadingComponent
];
export class CModalModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvbW9kYWxzL21vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLHdCQUF3QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O01BRWxELFlBQVksR0FBRztJQUNuQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7Q0FDakI7QUFlRCxNQUFNLE9BQU8sWUFBWTs7OztJQUNoQixNQUFNLENBQUMsT0FBTztRQUNuQixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNULHNCQUFzQjtnQkFDdEIsa0JBQWtCO2dCQUNsQixjQUFjO2dCQUNkLFlBQVk7Z0JBQ1osd0JBQXdCO2FBQ3pCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXpCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLFlBQVk7Z0JBQzFCLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osV0FBVyxDQUFDLE9BQU8sRUFBRTtvQkFDckIsdUJBQXVCLENBQUMsT0FBTyxFQUFFO2lCQUNsQztnQkFDRCxlQUFlLEVBQUUsWUFBWTtnQkFDN0IsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLFNBQVMsRUFBRSxFQUFFO2FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25maXJtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2FkZXJNb2R1bGUgfSBmcm9tICcuLi9sb2FkZXIvbG9hZGVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1vZGFsTW9kdWxlLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5LCBQb3NpdGlvbmluZ1NlcnZpY2UsIEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4vbW9kYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IE5nNExvYWRpbmdTcGlubmVyTW9kdWxlLCBOZzRMb2FkaW5nU3Bpbm5lclNlcnZpY2UgfSBmcm9tICduZzQtbG9hZGluZy1zcGlubmVyJztcclxuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2FkaW5nJztcclxuXHJcbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcclxuICBOb3RpZmljYXRpb25Db21wb25lbnQsXHJcbiAgQ29uZmlybUNvbXBvbmVudCxcclxuICBUZW1wbGF0ZUNvbXBvbmVudCxcclxuICBMb2FkaW5nQ29tcG9uZW50XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIExvYWRlck1vZHVsZSxcclxuICAgIE1vZGFsTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIE5nNExvYWRpbmdTcGlubmVyTW9kdWxlLmZvclJvb3QoKVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBkZWNsYXJhdGlvbnMsXHJcbiAgZXhwb3J0czogZGVjbGFyYXRpb25zLFxyXG4gIHByb3ZpZGVyczogW11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDTW9kYWxNb2R1bGUge1xyXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBDTW9kYWxNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIENvbXBvbmVudExvYWRlckZhY3RvcnksIFxyXG4gICAgICAgIFBvc2l0aW9uaW5nU2VydmljZSxcclxuICAgICAgICBCc01vZGFsU2VydmljZSxcclxuICAgICAgICBNb2RhbFNlcnZpY2UsXHJcbiAgICAgICAgTmc0TG9hZGluZ1NwaW5uZXJTZXJ2aWNlIFxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufSJdfQ==