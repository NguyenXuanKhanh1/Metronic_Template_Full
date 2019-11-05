/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { NgStringPipesModule } from 'ngx-pipes';
import { FormsModule } from '@angular/forms';
import { ValidationModule } from '../validation/validation.module';
import { TextboxModule } from '../textbox/textbox.module';
import { DropdownModule } from '../dropdown/dropdown.module';
import { ButtonModule } from '../button/button.module';
import { FormatterModule } from '../formatter/formatter.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { DatetimePickerModule } from '../datetime-picker/datetime-picker.module';
import { TableRowDetailDirective } from './table-row-detail.directive';
import { EditorModule } from '../editor/editor.module';
var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TableComponent, TableRowDetailDirective],
                    imports: [
                        CommonModule,
                        ValidationModule.forRoot(),
                        FormsModule,
                        TextboxModule,
                        DropdownModule,
                        ButtonModule,
                        FormatterModule,
                        CheckboxModule,
                        DatetimePickerModule.forChild(),
                        NgStringPipesModule,
                        TextboxModule,
                        ButtonModule,
                        EditorModule
                    ],
                    exports: [TableComponent, TableRowDetailDirective]
                },] }
    ];
    return TableModule;
}());
export { TableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvdGFibGUvdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RDtJQUFBO0lBb0IyQixDQUFDOztnQkFwQjNCLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsdUJBQXVCLENBQUM7b0JBQ3ZELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQixDQUFDLE9BQU8sRUFBRTt3QkFDMUIsV0FBVzt3QkFDWCxhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGNBQWM7d0JBQ2Qsb0JBQW9CLENBQUMsUUFBUSxFQUFFO3dCQUMvQixtQkFBbUI7d0JBQ25CLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSx1QkFBdUIsQ0FBQztpQkFDbkQ7O0lBRTBCLGtCQUFDO0NBQUEsQUFwQjVCLElBb0I0QjtTQUFmLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmdTdHJpbmdQaXBlc01vZHVsZSB9IGZyb20gJ25neC1waXBlcyc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vdmFsaWRhdGlvbi92YWxpZGF0aW9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IFRleHRib3hNb2R1bGUgfSBmcm9tICcuLi90ZXh0Ym94L3RleHRib3gubW9kdWxlJztcclxuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuLi9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vYnV0dG9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IEZvcm1hdHRlck1vZHVsZSB9IGZyb20gJy4uL2Zvcm1hdHRlci9mb3JtYXR0ZXIubW9kdWxlJztcclxuaW1wb3J0IHsgQ2hlY2tib3hNb2R1bGUgfSBmcm9tICcuLi9jaGVja2JveC9jaGVja2JveC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBEYXRldGltZVBpY2tlck1vZHVsZSB9IGZyb20gJy4uL2RhdGV0aW1lLXBpY2tlci9kYXRldGltZS1waWNrZXIubW9kdWxlJztcclxuaW1wb3J0IHsgVGFibGVSb3dEZXRhaWxEaXJlY3RpdmUgfSBmcm9tICcuL3RhYmxlLXJvdy1kZXRhaWwuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRWRpdG9yTW9kdWxlIH0gZnJvbSAnLi4vZWRpdG9yL2VkaXRvci5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtUYWJsZUNvbXBvbmVudCwgVGFibGVSb3dEZXRhaWxEaXJlY3RpdmVdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFZhbGlkYXRpb25Nb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBUZXh0Ym94TW9kdWxlLFxyXG4gICAgRHJvcGRvd25Nb2R1bGUsXHJcbiAgICBCdXR0b25Nb2R1bGUsXHJcbiAgICBGb3JtYXR0ZXJNb2R1bGUsXHJcbiAgICBDaGVja2JveE1vZHVsZSxcclxuICAgIERhdGV0aW1lUGlja2VyTW9kdWxlLmZvckNoaWxkKCksXHJcbiAgICBOZ1N0cmluZ1BpcGVzTW9kdWxlLFxyXG4gICAgVGV4dGJveE1vZHVsZSxcclxuICAgIEJ1dHRvbk1vZHVsZSxcclxuICAgIEVkaXRvck1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1RhYmxlQ29tcG9uZW50LCBUYWJsZVJvd0RldGFpbERpcmVjdGl2ZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZU1vZHVsZSB7IH1cclxuIl19