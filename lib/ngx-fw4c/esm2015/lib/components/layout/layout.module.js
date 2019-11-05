/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClickOutsideModule } from 'ng-click-outside';
import { AdminLayoutComponent } from './backsite-layout.component';
import { DefaultBreadcrumbsComponent } from './breadcrumbs.component';
import { DefaultCustomizerComponent } from './customizer.component';
import { DefaultFooterComponent } from './footer.component';
import { DefaultHeaderComponent } from './header.component';
import { DefaultNavBarComponent } from './navbar.component';
import { DefaultSidebarComponent } from './sidebar.component';
import { DefaultToolbarComponent } from './toolbar.component';
import { FloatingToolbarComponent } from './floating-toolbar.component';
import { DefaultLayoutService } from './layout.service';
import { SpinnerModule } from '../shared/spinner/spinner.module';
import { CardModule } from '../shared/card/card.module';
import { FormatterModule } from '../shared/formatter/formatter.module';
import { AccordionModule } from '../shared/accordion/accordion.module';
import { ButtonModule } from '../shared/button/button.module';
import { AccordionDirective } from '../shared/accordion/accordion.directive';
export class LayoutModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: LayoutModule,
            providers: [
                DefaultLayoutService,
                AccordionDirective
            ]
        };
    }
}
LayoutModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AdminLayoutComponent,
                    DefaultBreadcrumbsComponent,
                    DefaultCustomizerComponent,
                    DefaultFooterComponent,
                    DefaultHeaderComponent,
                    DefaultNavBarComponent,
                    DefaultSidebarComponent,
                    DefaultToolbarComponent,
                    FloatingToolbarComponent
                ],
                imports: [
                    CommonModule,
                    RouterModule,
                    SpinnerModule,
                    CardModule,
                    ClickOutsideModule,
                    FormatterModule,
                    AccordionModule,
                    ButtonModule
                ],
                exports: [
                    AdminLayoutComponent,
                    DefaultBreadcrumbsComponent,
                    DefaultCustomizerComponent,
                    DefaultFooterComponent,
                    DefaultHeaderComponent,
                    DefaultNavBarComponent,
                    DefaultSidebarComponent,
                    DefaultToolbarComponent,
                    FloatingToolbarComponent
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQXFDN0UsTUFBTSxPQUFPLFlBQVk7Ozs7SUFDaEIsTUFBTSxDQUFDLE9BQU87UUFDbkIsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxvQkFBb0I7Z0JBQ3BCLGtCQUFrQjthQUNuQjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUE1Q0YsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixvQkFBb0I7b0JBQ3BCLDJCQUEyQjtvQkFDM0IsMEJBQTBCO29CQUMxQixzQkFBc0I7b0JBQ3RCLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUN0Qix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtvQkFDdkIsd0JBQXdCO2lCQUN6QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLGFBQWE7b0JBQ2IsVUFBVTtvQkFDVixrQkFBa0I7b0JBQ2xCLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxvQkFBb0I7b0JBQ3BCLDJCQUEyQjtvQkFDM0IsMEJBQTBCO29CQUMxQixzQkFBc0I7b0JBQ3RCLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUN0Qix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtvQkFDdkIsd0JBQXdCO2lCQUN6QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDbGlja091dHNpZGVNb2R1bGUgfSBmcm9tICduZy1jbGljay1vdXRzaWRlJztcclxuaW1wb3J0IHsgQWRtaW5MYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2JhY2tzaXRlLWxheW91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZWZhdWx0QnJlYWRjcnVtYnNDb21wb25lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERlZmF1bHRDdXN0b21pemVyQ29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b21pemVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERlZmF1bHRGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2Zvb3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZWZhdWx0SGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVmYXVsdE5hdkJhckNvbXBvbmVudCB9IGZyb20gJy4vbmF2YmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERlZmF1bHRTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERlZmF1bHRUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZsb2F0aW5nVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vZmxvYXRpbmctdG9vbGJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZWZhdWx0TGF5b3V0U2VydmljZSB9IGZyb20gJy4vbGF5b3V0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2NhcmQvY2FyZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBGb3JtYXR0ZXJNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvZm9ybWF0dGVyL2Zvcm1hdHRlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb25Nb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvYWNjb3JkaW9uL2FjY29yZGlvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb25EaXJlY3RpdmUgfSBmcm9tICcuLi9zaGFyZWQvYWNjb3JkaW9uL2FjY29yZGlvbi5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFkbWluTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgRGVmYXVsdEJyZWFkY3J1bWJzQ29tcG9uZW50LFxyXG4gICAgRGVmYXVsdEN1c3RvbWl6ZXJDb21wb25lbnQsXHJcbiAgICBEZWZhdWx0Rm9vdGVyQ29tcG9uZW50LFxyXG4gICAgRGVmYXVsdEhlYWRlckNvbXBvbmVudCxcclxuICAgIERlZmF1bHROYXZCYXJDb21wb25lbnQsXHJcbiAgICBEZWZhdWx0U2lkZWJhckNvbXBvbmVudCxcclxuICAgIERlZmF1bHRUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgRmxvYXRpbmdUb29sYmFyQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICBTcGlubmVyTW9kdWxlLFxyXG4gICAgQ2FyZE1vZHVsZSxcclxuICAgIENsaWNrT3V0c2lkZU1vZHVsZSxcclxuICAgIEZvcm1hdHRlck1vZHVsZSxcclxuICAgIEFjY29yZGlvbk1vZHVsZSxcclxuICAgIEJ1dHRvbk1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQWRtaW5MYXlvdXRDb21wb25lbnQsXHJcbiAgICBEZWZhdWx0QnJlYWRjcnVtYnNDb21wb25lbnQsXHJcbiAgICBEZWZhdWx0Q3VzdG9taXplckNvbXBvbmVudCxcclxuICAgIERlZmF1bHRGb290ZXJDb21wb25lbnQsXHJcbiAgICBEZWZhdWx0SGVhZGVyQ29tcG9uZW50LFxyXG4gICAgRGVmYXVsdE5hdkJhckNvbXBvbmVudCxcclxuICAgIERlZmF1bHRTaWRlYmFyQ29tcG9uZW50LFxyXG4gICAgRGVmYXVsdFRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBGbG9hdGluZ1Rvb2xiYXJDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExheW91dE1vZHVsZSB7XHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IExheW91dE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgRGVmYXVsdExheW91dFNlcnZpY2UsXHJcbiAgICAgICAgQWNjb3JkaW9uRGlyZWN0aXZlXHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==