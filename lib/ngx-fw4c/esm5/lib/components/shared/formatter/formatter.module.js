/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from './currency.pipe';
import { CDatePipe } from './date.pipe';
import { CDatetimePipe } from './datetime.pipe';
import { TimePipe } from './time.pipe';
import { NumberPipe } from './number.pipe';
import { BadgePipe } from './badge.pipe';
import { SafePipe } from './safe.pipe';
import { CembedVideoPipe } from './oembed-video.pipe';
/** @type {?} */
var pipes = [
    CurrencyPipe,
    CDatePipe,
    CDatetimePipe,
    TimePipe,
    NumberPipe,
    BadgePipe,
    SafePipe,
    CembedVideoPipe,
];
var FormatterModule = /** @class */ (function () {
    function FormatterModule() {
    }
    /**
     * @return {?}
     */
    FormatterModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FormatterModule,
            providers: []
        };
    };
    /**
     * @return {?}
     */
    FormatterModule.forChild = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FormatterModule,
            providers: pipes
        };
    };
    FormatterModule.decorators = [
        { type: NgModule, args: [{
                    declarations: pipes,
                    imports: [
                        CommonModule
                    ],
                    exports: pipes
                },] }
    ];
    return FormatterModule;
}());
export { FormatterModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2Zvcm1hdHRlci9mb3JtYXR0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztJQUVoRCxLQUFLLEdBQUc7SUFDWixZQUFZO0lBQ1osU0FBUztJQUNULGFBQWE7SUFDYixRQUFRO0lBQ1IsVUFBVTtJQUNWLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZUFBZTtDQUNoQjtBQUVEO0lBQUE7SUF1QkEsQ0FBQzs7OztJQWRlLHVCQUFPOzs7SUFBckI7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFLEVBQ1Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVhLHdCQUFROzs7SUFBdEI7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFLEtBQUs7U0FDakIsQ0FBQztJQUNKLENBQUM7O2dCQXRCRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLEtBQUs7b0JBQ25CLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRSxLQUFLO2lCQUNmOztJQWlCRCxzQkFBQztDQUFBLEFBdkJELElBdUJDO1NBZlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEN1cnJlbmN5UGlwZSB9IGZyb20gJy4vY3VycmVuY3kucGlwZSc7XHJcbmltcG9ydCB7IENEYXRlUGlwZSB9IGZyb20gJy4vZGF0ZS5waXBlJztcclxuaW1wb3J0IHsgQ0RhdGV0aW1lUGlwZSB9IGZyb20gJy4vZGF0ZXRpbWUucGlwZSc7XHJcbmltcG9ydCB7IFRpbWVQaXBlIH0gZnJvbSAnLi90aW1lLnBpcGUnO1xyXG5pbXBvcnQgeyBOdW1iZXJQaXBlIH0gZnJvbSAnLi9udW1iZXIucGlwZSc7XHJcbmltcG9ydCB7IEJhZGdlUGlwZSB9IGZyb20gJy4vYmFkZ2UucGlwZSc7XHJcbmltcG9ydCB7IFNhZmVQaXBlIH0gZnJvbSAnLi9zYWZlLnBpcGUnO1xyXG5pbXBvcnQgeyBDZW1iZWRWaWRlb1BpcGUgfSBmcm9tICcuL29lbWJlZC12aWRlby5waXBlJztcclxuXHJcbmNvbnN0IHBpcGVzID0gW1xyXG4gIEN1cnJlbmN5UGlwZSxcclxuICBDRGF0ZVBpcGUsXHJcbiAgQ0RhdGV0aW1lUGlwZSxcclxuICBUaW1lUGlwZSxcclxuICBOdW1iZXJQaXBlLFxyXG4gIEJhZGdlUGlwZSxcclxuICBTYWZlUGlwZSxcclxuICBDZW1iZWRWaWRlb1BpcGUsXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogcGlwZXMsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBwaXBlc1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1hdHRlck1vZHVsZSB7XHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEZvcm1hdHRlck1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEZvcm1hdHRlck1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBwaXBlc1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19