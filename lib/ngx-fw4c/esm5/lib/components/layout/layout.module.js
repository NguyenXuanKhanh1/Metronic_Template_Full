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
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    /**
     * @return {?}
     */
    LayoutModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: LayoutModule,
            providers: [
                DefaultLayoutService,
                AccordionDirective
            ]
        };
    };
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
    return LayoutModule;
}());
export { LayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUU3RTtJQUFBO0lBNkNBLENBQUM7Ozs7SUFUZSxvQkFBTzs7O0lBQXJCO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxvQkFBb0I7Z0JBQ3BCLGtCQUFrQjthQUNuQjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkE1Q0YsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixvQkFBb0I7d0JBQ3BCLDJCQUEyQjt3QkFDM0IsMEJBQTBCO3dCQUMxQixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLHVCQUF1Qjt3QkFDdkIsd0JBQXdCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsVUFBVTt3QkFDVixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCxvQkFBb0I7d0JBQ3BCLDJCQUEyQjt3QkFDM0IsMEJBQTBCO3dCQUMxQixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLHVCQUF1Qjt3QkFDdkIsd0JBQXdCO3FCQUN6QjtpQkFDRjs7SUFZRCxtQkFBQztDQUFBLEFBN0NELElBNkNDO1NBVlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ2xpY2tPdXRzaWRlTW9kdWxlIH0gZnJvbSAnbmctY2xpY2stb3V0c2lkZSc7XHJcbmltcG9ydCB7IEFkbWluTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9iYWNrc2l0ZS1sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVmYXVsdEJyZWFkY3J1bWJzQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1icy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZWZhdWx0Q3VzdG9taXplckNvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9taXplci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZWZhdWx0Rm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9mb290ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVmYXVsdEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERlZmF1bHROYXZCYXJDb21wb25lbnQgfSBmcm9tICcuL25hdmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZWZhdWx0U2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZWZhdWx0VG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGbG9hdGluZ1Rvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL2Zsb2F0aW5nLXRvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVmYXVsdExheW91dFNlcnZpY2UgfSBmcm9tICcuL2xheW91dC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcclxuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9jYXJkL2NhcmQubW9kdWxlJztcclxuaW1wb3J0IHsgRm9ybWF0dGVyTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2Zvcm1hdHRlci9mb3JtYXR0ZXIubW9kdWxlJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2FjY29yZGlvbi9hY2NvcmRpb24ubW9kdWxlJztcclxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2J1dHRvbi9idXR0b24ubW9kdWxlJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uRGlyZWN0aXZlIH0gZnJvbSAnLi4vc2hhcmVkL2FjY29yZGlvbi9hY2NvcmRpb24uZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBZG1pbkxheW91dENvbXBvbmVudCxcclxuICAgIERlZmF1bHRCcmVhZGNydW1ic0NvbXBvbmVudCxcclxuICAgIERlZmF1bHRDdXN0b21pemVyQ29tcG9uZW50LFxyXG4gICAgRGVmYXVsdEZvb3RlckNvbXBvbmVudCxcclxuICAgIERlZmF1bHRIZWFkZXJDb21wb25lbnQsXHJcbiAgICBEZWZhdWx0TmF2QmFyQ29tcG9uZW50LFxyXG4gICAgRGVmYXVsdFNpZGViYXJDb21wb25lbnQsXHJcbiAgICBEZWZhdWx0VG9vbGJhckNvbXBvbmVudCxcclxuICAgIEZsb2F0aW5nVG9vbGJhckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgU3Bpbm5lck1vZHVsZSxcclxuICAgIENhcmRNb2R1bGUsXHJcbiAgICBDbGlja091dHNpZGVNb2R1bGUsXHJcbiAgICBGb3JtYXR0ZXJNb2R1bGUsXHJcbiAgICBBY2NvcmRpb25Nb2R1bGUsXHJcbiAgICBCdXR0b25Nb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEFkbWluTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgRGVmYXVsdEJyZWFkY3J1bWJzQ29tcG9uZW50LFxyXG4gICAgRGVmYXVsdEN1c3RvbWl6ZXJDb21wb25lbnQsXHJcbiAgICBEZWZhdWx0Rm9vdGVyQ29tcG9uZW50LFxyXG4gICAgRGVmYXVsdEhlYWRlckNvbXBvbmVudCxcclxuICAgIERlZmF1bHROYXZCYXJDb21wb25lbnQsXHJcbiAgICBEZWZhdWx0U2lkZWJhckNvbXBvbmVudCxcclxuICAgIERlZmF1bHRUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgRmxvYXRpbmdUb29sYmFyQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUge1xyXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBMYXlvdXRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIERlZmF1bHRMYXlvdXRTZXJ2aWNlLFxyXG4gICAgICAgIEFjY29yZGlvbkRpcmVjdGl2ZVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=