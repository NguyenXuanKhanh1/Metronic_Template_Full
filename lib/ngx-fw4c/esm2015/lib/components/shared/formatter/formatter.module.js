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
const pipes = [
    CurrencyPipe,
    CDatePipe,
    CDatetimePipe,
    TimePipe,
    NumberPipe,
    BadgePipe,
    SafePipe,
    CembedVideoPipe,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2Zvcm1hdHRlci9mb3JtYXR0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztNQUVoRCxLQUFLLEdBQUc7SUFDWixZQUFZO0lBQ1osU0FBUztJQUNULGFBQWE7SUFDYixRQUFRO0lBQ1IsVUFBVTtJQUNWLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZUFBZTtDQUNoQjtBQVVELE1BQU0sT0FBTyxlQUFlOzs7O0lBQ25CLE1BQU0sQ0FBQyxPQUFPO1FBQ25CLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUUsRUFDVjtTQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRU0sTUFBTSxDQUFDLFFBQVE7UUFDcEIsT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUM7SUFDSixDQUFDOzs7WUF0QkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxLQUFLO2dCQUNuQixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsS0FBSzthQUNmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ3VycmVuY3lQaXBlIH0gZnJvbSAnLi9jdXJyZW5jeS5waXBlJztcclxuaW1wb3J0IHsgQ0RhdGVQaXBlIH0gZnJvbSAnLi9kYXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBDRGF0ZXRpbWVQaXBlIH0gZnJvbSAnLi9kYXRldGltZS5waXBlJztcclxuaW1wb3J0IHsgVGltZVBpcGUgfSBmcm9tICcuL3RpbWUucGlwZSc7XHJcbmltcG9ydCB7IE51bWJlclBpcGUgfSBmcm9tICcuL251bWJlci5waXBlJztcclxuaW1wb3J0IHsgQmFkZ2VQaXBlIH0gZnJvbSAnLi9iYWRnZS5waXBlJztcclxuaW1wb3J0IHsgU2FmZVBpcGUgfSBmcm9tICcuL3NhZmUucGlwZSc7XHJcbmltcG9ydCB7IENlbWJlZFZpZGVvUGlwZSB9IGZyb20gJy4vb2VtYmVkLXZpZGVvLnBpcGUnO1xyXG5cclxuY29uc3QgcGlwZXMgPSBbXHJcbiAgQ3VycmVuY3lQaXBlLFxyXG4gIENEYXRlUGlwZSxcclxuICBDRGF0ZXRpbWVQaXBlLFxyXG4gIFRpbWVQaXBlLFxyXG4gIE51bWJlclBpcGUsXHJcbiAgQmFkZ2VQaXBlLFxyXG4gIFNhZmVQaXBlLFxyXG4gIENlbWJlZFZpZGVvUGlwZSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBwaXBlcyxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IHBpcGVzXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybWF0dGVyTW9kdWxlIHtcclxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRm9ybWF0dGVyTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRm9ybWF0dGVyTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IHBpcGVzXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=