/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent } from './textbox.component';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FormModule } from '../form/form.module';
import { CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';
/** @type {?} */
export const CustomCurrencyMaskConfig = {
    align: 'left',
    allowNegative: false,
    decimal: '.',
    precision: 0,
    prefix: '',
    suffix: ' VNĐ',
    thousands: ','
};
export class TextboxModule {
}
TextboxModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TextboxComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    FormModule,
                    CurrencyMaskModule
                ],
                exports: [TextboxComponent],
                providers: [
                    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGJveC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC90ZXh0Ym94L3RleHRib3gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOztBQUVsRixNQUFNLE9BQU8sd0JBQXdCLEdBQUc7SUFDdEMsS0FBSyxFQUFFLE1BQU07SUFDYixhQUFhLEVBQUUsS0FBSztJQUNwQixPQUFPLEVBQUUsR0FBRztJQUNaLFNBQVMsRUFBRSxDQUFDO0lBQ1osTUFBTSxFQUFFLEVBQUU7SUFDVixNQUFNLEVBQUUsTUFBTTtJQUNkLFNBQVMsRUFBRSxHQUFHO0NBQ2Y7QUFnQkQsTUFBTSxPQUFPLGFBQWE7OztZQWR6QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixrQkFBa0I7aUJBQ25CO2dCQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUMzQixTQUFTLEVBQUU7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFO2lCQUN0RTthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVGV4dGJveENvbXBvbmVudCB9IGZyb20gJy4vdGV4dGJveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ3VycmVuY3lNYXNrTW9kdWxlIH0gZnJvbSAnbmcyLWN1cnJlbmN5LW1hc2snO1xyXG5pbXBvcnQgeyBGb3JtTW9kdWxlIH0gZnJvbSAnLi4vZm9ybS9mb3JtLm1vZHVsZSc7XHJcbmltcG9ydCB7IENVUlJFTkNZX01BU0tfQ09ORklHIH0gZnJvbSAnbmcyLWN1cnJlbmN5LW1hc2svc3JjL2N1cnJlbmN5LW1hc2suY29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBDdXN0b21DdXJyZW5jeU1hc2tDb25maWcgPSB7XHJcbiAgYWxpZ246ICdsZWZ0JyxcclxuICBhbGxvd05lZ2F0aXZlOiBmYWxzZSxcclxuICBkZWNpbWFsOiAnLicsXHJcbiAgcHJlY2lzaW9uOiAwLFxyXG4gIHByZWZpeDogJycsXHJcbiAgc3VmZml4OiAnIFZOxJAnLFxyXG4gIHRob3VzYW5kczogJywnXHJcbn07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1RleHRib3hDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgRm9ybU1vZHVsZSxcclxuICAgIEN1cnJlbmN5TWFza01vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1RleHRib3hDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgeyBwcm92aWRlOiBDVVJSRU5DWV9NQVNLX0NPTkZJRywgdXNlVmFsdWU6IEN1c3RvbUN1cnJlbmN5TWFza0NvbmZpZyB9XHJcbiAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRib3hNb2R1bGUge1xyXG59XHJcblxyXG4iXX0=