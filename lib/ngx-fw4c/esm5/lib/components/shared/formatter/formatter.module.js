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
import { KbPipe } from './kb.pipe';
import { FilePipe } from './file.pipe';
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
    KbPipe,
    FilePipe
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2Zvcm1hdHRlci9mb3JtYXR0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbkMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFFakMsS0FBSyxHQUFHO0lBQ1osWUFBWTtJQUNaLFNBQVM7SUFDVCxhQUFhO0lBQ2IsUUFBUTtJQUNSLFVBQVU7SUFDVixTQUFTO0lBQ1QsUUFBUTtJQUNSLGVBQWU7SUFDZixNQUFNO0lBQ04sUUFBUTtDQUNUO0FBRUQ7SUFBQTtJQXVCQSxDQUFDOzs7O0lBZGUsdUJBQU87OztJQUFyQjtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUUsRUFDVjtTQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRWEsd0JBQVE7OztJQUF0QjtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUUsS0FBSztTQUNqQixDQUFDO0lBQ0osQ0FBQzs7Z0JBdEJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsS0FBSztvQkFDbkIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFLEtBQUs7aUJBQ2Y7O0lBaUJELHNCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FmWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ3VycmVuY3lQaXBlIH0gZnJvbSAnLi9jdXJyZW5jeS5waXBlJztcclxuaW1wb3J0IHsgQ0RhdGVQaXBlIH0gZnJvbSAnLi9kYXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBDRGF0ZXRpbWVQaXBlIH0gZnJvbSAnLi9kYXRldGltZS5waXBlJztcclxuaW1wb3J0IHsgVGltZVBpcGUgfSBmcm9tICcuL3RpbWUucGlwZSc7XHJcbmltcG9ydCB7IE51bWJlclBpcGUgfSBmcm9tICcuL251bWJlci5waXBlJztcclxuaW1wb3J0IHsgQmFkZ2VQaXBlIH0gZnJvbSAnLi9iYWRnZS5waXBlJztcclxuaW1wb3J0IHsgU2FmZVBpcGUgfSBmcm9tICcuL3NhZmUucGlwZSc7XHJcbmltcG9ydCB7IENlbWJlZFZpZGVvUGlwZSB9IGZyb20gJy4vb2VtYmVkLXZpZGVvLnBpcGUnO1xyXG5pbXBvcnQgeyBLYlBpcGUgfSBmcm9tICcuL2tiLnBpcGUnO1xyXG5pbXBvcnQgeyBGaWxlUGlwZSB9IGZyb20gJy4vZmlsZS5waXBlJztcclxuXHJcbmNvbnN0IHBpcGVzID0gW1xyXG4gIEN1cnJlbmN5UGlwZSxcclxuICBDRGF0ZVBpcGUsXHJcbiAgQ0RhdGV0aW1lUGlwZSxcclxuICBUaW1lUGlwZSxcclxuICBOdW1iZXJQaXBlLFxyXG4gIEJhZGdlUGlwZSxcclxuICBTYWZlUGlwZSxcclxuICBDZW1iZWRWaWRlb1BpcGUsXHJcbiAgS2JQaXBlLFxyXG4gIEZpbGVQaXBlXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogcGlwZXMsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBwaXBlc1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1hdHRlck1vZHVsZSB7XHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEZvcm1hdHRlck1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEZvcm1hdHRlck1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBwaXBlc1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19