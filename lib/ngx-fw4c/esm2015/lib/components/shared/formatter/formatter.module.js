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
const pipes = [
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
export class FormatterModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FormatterModule,
            providers: []
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: FormatterModule,
            providers: pipes
        };
    }
}
FormatterModule.decorators = [
    { type: NgModule, args: [{
                declarations: pipes,
                imports: [
                    CommonModule
                ],
                exports: pipes
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2Zvcm1hdHRlci9mb3JtYXR0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbkMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7TUFFakMsS0FBSyxHQUFHO0lBQ1osWUFBWTtJQUNaLFNBQVM7SUFDVCxhQUFhO0lBQ2IsUUFBUTtJQUNSLFVBQVU7SUFDVixTQUFTO0lBQ1QsUUFBUTtJQUNSLGVBQWU7SUFDZixNQUFNO0lBQ04sUUFBUTtDQUNUO0FBVUQsTUFBTSxPQUFPLGVBQWU7Ozs7SUFDbkIsTUFBTSxDQUFDLE9BQU87UUFDbkIsT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRSxFQUNWO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFTSxNQUFNLENBQUMsUUFBUTtRQUNwQixPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFLEtBQUs7U0FDakIsQ0FBQztJQUNKLENBQUM7OztZQXRCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRSxLQUFLO2FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDdXJyZW5jeVBpcGUgfSBmcm9tICcuL2N1cnJlbmN5LnBpcGUnO1xyXG5pbXBvcnQgeyBDRGF0ZVBpcGUgfSBmcm9tICcuL2RhdGUucGlwZSc7XHJcbmltcG9ydCB7IENEYXRldGltZVBpcGUgfSBmcm9tICcuL2RhdGV0aW1lLnBpcGUnO1xyXG5pbXBvcnQgeyBUaW1lUGlwZSB9IGZyb20gJy4vdGltZS5waXBlJztcclxuaW1wb3J0IHsgTnVtYmVyUGlwZSB9IGZyb20gJy4vbnVtYmVyLnBpcGUnO1xyXG5pbXBvcnQgeyBCYWRnZVBpcGUgfSBmcm9tICcuL2JhZGdlLnBpcGUnO1xyXG5pbXBvcnQgeyBTYWZlUGlwZSB9IGZyb20gJy4vc2FmZS5waXBlJztcclxuaW1wb3J0IHsgQ2VtYmVkVmlkZW9QaXBlIH0gZnJvbSAnLi9vZW1iZWQtdmlkZW8ucGlwZSc7XHJcbmltcG9ydCB7IEtiUGlwZSB9IGZyb20gJy4va2IucGlwZSc7XHJcbmltcG9ydCB7IEZpbGVQaXBlIH0gZnJvbSAnLi9maWxlLnBpcGUnO1xyXG5cclxuY29uc3QgcGlwZXMgPSBbXHJcbiAgQ3VycmVuY3lQaXBlLFxyXG4gIENEYXRlUGlwZSxcclxuICBDRGF0ZXRpbWVQaXBlLFxyXG4gIFRpbWVQaXBlLFxyXG4gIE51bWJlclBpcGUsXHJcbiAgQmFkZ2VQaXBlLFxyXG4gIFNhZmVQaXBlLFxyXG4gIENlbWJlZFZpZGVvUGlwZSxcclxuICBLYlBpcGUsXHJcbiAgRmlsZVBpcGVcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBwaXBlcyxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IHBpcGVzXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybWF0dGVyTW9kdWxlIHtcclxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRm9ybWF0dGVyTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRm9ybWF0dGVyTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IHBpcGVzXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=