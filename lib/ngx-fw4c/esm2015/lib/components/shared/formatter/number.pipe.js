/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DecimalPipe } from '@angular/common';
export class NumberPipe extends DecimalPipe {
    /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    transform(value, digits, locale) {
        return super.transform(value, '1.0');
    }
}
NumberPipe.decorators = [
    { type: Pipe, args: [{
                name: 'katanaNumber'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9mb3JtYXR0ZXIvbnVtYmVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU05QyxNQUFNLE9BQU8sVUFBVyxTQUFRLFdBQVc7Ozs7Ozs7SUFDekMsU0FBUyxDQUFDLEtBQVUsRUFBRSxNQUFlLEVBQUUsTUFBZTtRQUNwRCxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQVBGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsY0FBYzthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdrYXRhbmFOdW1iZXInXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTnVtYmVyUGlwZSBleHRlbmRzIERlY2ltYWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGRpZ2l0cz86IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKHZhbHVlLCAnMS4wJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==