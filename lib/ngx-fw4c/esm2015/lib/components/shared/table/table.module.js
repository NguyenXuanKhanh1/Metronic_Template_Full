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
export class TableModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvdGFibGUvdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQXNCdkQsTUFBTSxPQUFPLFdBQVc7OztZQXBCdkIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSx1QkFBdUIsQ0FBQztnQkFDdkQsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMxQixXQUFXO29CQUNYLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxvQkFBb0IsQ0FBQyxRQUFRLEVBQUU7b0JBQy9CLG1CQUFtQjtvQkFDbkIsYUFBYTtvQkFDYixZQUFZO29CQUNaLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLHVCQUF1QixDQUFDO2FBQ25EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nU3RyaW5nUGlwZXNNb2R1bGUgfSBmcm9tICduZ3gtcGlwZXMnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvbk1vZHVsZSB9IGZyb20gJy4uL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBUZXh0Ym94TW9kdWxlIH0gZnJvbSAnLi4vdGV4dGJveC90ZXh0Ym94Lm1vZHVsZSc7XHJcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAnLi4vZHJvcGRvd24vZHJvcGRvd24ubW9kdWxlJztcclxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBGb3JtYXR0ZXJNb2R1bGUgfSBmcm9tICcuLi9mb3JtYXR0ZXIvZm9ybWF0dGVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IENoZWNrYm94TW9kdWxlIH0gZnJvbSAnLi4vY2hlY2tib3gvY2hlY2tib3gubW9kdWxlJztcclxuaW1wb3J0IHsgRGF0ZXRpbWVQaWNrZXJNb2R1bGUgfSBmcm9tICcuLi9kYXRldGltZS1waWNrZXIvZGF0ZXRpbWUtcGlja2VyLm1vZHVsZSc7XHJcbmltcG9ydCB7IFRhYmxlUm93RGV0YWlsRGlyZWN0aXZlIH0gZnJvbSAnLi90YWJsZS1yb3ctZGV0YWlsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEVkaXRvck1vZHVsZSB9IGZyb20gJy4uL2VkaXRvci9lZGl0b3IubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbVGFibGVDb21wb25lbnQsIFRhYmxlUm93RGV0YWlsRGlyZWN0aXZlXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBWYWxpZGF0aW9uTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgVGV4dGJveE1vZHVsZSxcclxuICAgIERyb3Bkb3duTW9kdWxlLFxyXG4gICAgQnV0dG9uTW9kdWxlLFxyXG4gICAgRm9ybWF0dGVyTW9kdWxlLFxyXG4gICAgQ2hlY2tib3hNb2R1bGUsXHJcbiAgICBEYXRldGltZVBpY2tlck1vZHVsZS5mb3JDaGlsZCgpLFxyXG4gICAgTmdTdHJpbmdQaXBlc01vZHVsZSxcclxuICAgIFRleHRib3hNb2R1bGUsXHJcbiAgICBCdXR0b25Nb2R1bGUsXHJcbiAgICBFZGl0b3JNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtUYWJsZUNvbXBvbmVudCwgVGFibGVSb3dEZXRhaWxEaXJlY3RpdmVdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVNb2R1bGUgeyB9XHJcbiJdfQ==