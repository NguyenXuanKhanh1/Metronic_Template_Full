/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE, OwlDateTimeIntl } from 'ng-pick-datetime';
import { DatetimePickerComponent } from './datetime/datetime.component';
import { DaterangePickerComponent } from './daterange/daterange.component';
import * as i0 from "@angular/core";
/** @type {?} */
const declarations = [DatetimePickerComponent, DaterangePickerComponent];
export class DatetimePickerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DatetimePickerModule,
            providers: []
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: DatetimePickerModule,
            providers: [
                { provide: OWL_DATE_TIME_LOCALE, useValue: 'vi' },
                { provide: OwlDateTimeIntl, useClass: DefaultDateTimeLabels }
            ]
        };
    }
}
DatetimePickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: declarations,
                imports: [
                    CommonModule,
                    FormsModule,
                    OwlDateTimeModule,
                    OwlNativeDateTimeModule
                ],
                entryComponents: declarations,
                exports: declarations
            },] }
];
export class DefaultDateTimeLabels extends OwlDateTimeIntl {
    constructor() {
        super(...arguments);
        this.upSecondLabel = 'Thêm 1 giây';
        this.downSecondLabel = 'Bớt 1 giây';
        this.upMinuteLabel = 'Thêm 1 phút';
        this.downMinuteLabel = 'Bớt 1 phút';
        this.upHourLabel = 'Thêm 1 giờ';
        this.downHourLabel = 'Bớt 1 giờ';
        this.prevMonthLabel = 'Tháng trước';
        this.nextMonthLabel = 'Tháng tới';
        this.prevYearLabel = 'Năm trước';
        this.nextYearLabel = 'Năm tới';
        this.prevMultiYearLabel = '21 năm trước';
        this.nextMultiYearLabel = '21 năm sau';
        this.switchToMonthViewLabel = 'Xem theo tháng';
        this.switchToMultiYearViewLabel = 'Xem theo tháng năm';
        this.cancelBtnLabel = 'Quay lại';
        this.setBtnLabel = 'Chọn';
        this.rangeFromLabel = 'Từ';
        this.rangeToLabel = 'Đến';
        this.hour12AMLabel = 'AM';
        this.hour12PMLabel = 'PM';
    }
}
DefaultDateTimeLabels.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ DefaultDateTimeLabels.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DefaultDateTimeLabels_Factory() { return new DefaultDateTimeLabels(); }, token: DefaultDateTimeLabels, providedIn: "root" });
if (false) {
    /** @type {?} */
    DefaultDateTimeLabels.prototype.upSecondLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.downSecondLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.upMinuteLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.downMinuteLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.upHourLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.downHourLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.prevMonthLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.nextMonthLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.prevYearLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.nextYearLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.prevMultiYearLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.nextMultiYearLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.switchToMonthViewLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.switchToMultiYearViewLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.cancelBtnLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.setBtnLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.rangeFromLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.rangeToLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.hour12AMLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.hour12PMLabel;
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUtcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2RhdGV0aW1lLXBpY2tlci9kYXRldGltZS1waWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDckgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7OztNQUVyRSxZQUFZLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSx3QkFBd0IsQ0FBQztBQWN4RSxNQUFNLE9BQU8sb0JBQW9COzs7O0lBQ3RCLE1BQU0sQ0FBQyxPQUFPO1FBQ2pCLE9BQU87WUFDSCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRSxFQUNWO1NBQ0osQ0FBQztJQUNOLENBQUM7Ozs7SUFFTSxNQUFNLENBQUMsUUFBUTtRQUNsQixPQUFPO1lBQ0gsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUU7Z0JBQ1AsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtnQkFDakQsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRTthQUNoRTtTQUNKLENBQUM7SUFDTixDQUFDOzs7WUE3QkosUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRSxZQUFZO2dCQUMxQixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixXQUFXO29CQUNYLGlCQUFpQjtvQkFDakIsdUJBQXVCO2lCQUMxQjtnQkFDRCxlQUFlLEVBQUUsWUFBWTtnQkFDN0IsT0FBTyxFQUFFLFlBQVk7YUFDeEI7O0FBdUJELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxlQUFlO0lBRDFEOztRQUVJLGtCQUFhLEdBQUcsYUFBYSxDQUFDO1FBQzlCLG9CQUFlLEdBQUcsWUFBWSxDQUFDO1FBQy9CLGtCQUFhLEdBQUcsYUFBYSxDQUFDO1FBQzlCLG9CQUFlLEdBQUcsWUFBWSxDQUFDO1FBQy9CLGdCQUFXLEdBQUcsWUFBWSxDQUFDO1FBQzNCLGtCQUFhLEdBQUcsV0FBVyxDQUFDO1FBQzVCLG1CQUFjLEdBQUcsYUFBYSxDQUFDO1FBQy9CLG1CQUFjLEdBQUcsV0FBVyxDQUFDO1FBQzdCLGtCQUFhLEdBQUcsV0FBVyxDQUFDO1FBQzVCLGtCQUFhLEdBQUcsU0FBUyxDQUFDO1FBQzFCLHVCQUFrQixHQUFHLGNBQWMsQ0FBQztRQUNwQyx1QkFBa0IsR0FBRyxZQUFZLENBQUM7UUFDbEMsMkJBQXNCLEdBQUcsZ0JBQWdCLENBQUM7UUFDMUMsK0JBQTBCLEdBQUcsb0JBQW9CLENBQUM7UUFDbEQsbUJBQWMsR0FBRyxVQUFVLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxNQUFNLENBQUM7UUFDckIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsa0JBQWEsR0FBRyxJQUFJLENBQUM7S0FDeEI7OztZQXRCQSxVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OztJQUU5Qiw4Q0FBOEI7O0lBQzlCLGdEQUErQjs7SUFDL0IsOENBQThCOztJQUM5QixnREFBK0I7O0lBQy9CLDRDQUEyQjs7SUFDM0IsOENBQTRCOztJQUM1QiwrQ0FBK0I7O0lBQy9CLCtDQUE2Qjs7SUFDN0IsOENBQTRCOztJQUM1Qiw4Q0FBMEI7O0lBQzFCLG1EQUFvQzs7SUFDcEMsbURBQWtDOztJQUNsQyx1REFBMEM7O0lBQzFDLDJEQUFrRDs7SUFDbEQsK0NBQTRCOztJQUM1Qiw0Q0FBcUI7O0lBQ3JCLCtDQUFzQjs7SUFDdEIsNkNBQXFCOztJQUNyQiw4Q0FBcUI7O0lBQ3JCLDhDQUFxQjs7QUFDeEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPd2xEYXRlVGltZU1vZHVsZSwgT3dsTmF0aXZlRGF0ZVRpbWVNb2R1bGUsIE9XTF9EQVRFX1RJTUVfTE9DQUxFLCBPd2xEYXRlVGltZUludGwgfSBmcm9tICduZy1waWNrLWRhdGV0aW1lJztcclxuaW1wb3J0IHsgRGF0ZXRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGV0aW1lL2RhdGV0aW1lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGVyYW5nZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXJhbmdlL2RhdGVyYW5nZS5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgZGVjbGFyYXRpb25zID0gW0RhdGV0aW1lUGlja2VyQ29tcG9uZW50LCBEYXRlcmFuZ2VQaWNrZXJDb21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBPd2xEYXRlVGltZU1vZHVsZSxcclxuICAgICAgICBPd2xOYXRpdmVEYXRlVGltZU1vZHVsZVxyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogZGVjbGFyYXRpb25zLFxyXG4gICAgZXhwb3J0czogZGVjbGFyYXRpb25zXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGF0ZXRpbWVQaWNrZXJNb2R1bGUge1xyXG4gICAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBEYXRldGltZVBpY2tlck1vZHVsZSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IERhdGV0aW1lUGlja2VyTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogT1dMX0RBVEVfVElNRV9MT0NBTEUsIHVzZVZhbHVlOiAndmknIH0sXHJcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IE93bERhdGVUaW1lSW50bCwgdXNlQ2xhc3M6IERlZmF1bHREYXRlVGltZUxhYmVscyB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdERhdGVUaW1lTGFiZWxzIGV4dGVuZHMgT3dsRGF0ZVRpbWVJbnRsIHtcclxuICAgIHVwU2Vjb25kTGFiZWwgPSAnVGjDqm0gMSBnacOieSc7XHJcbiAgICBkb3duU2Vjb25kTGFiZWwgPSAnQuG7m3QgMSBnacOieSc7XHJcbiAgICB1cE1pbnV0ZUxhYmVsID0gJ1Row6ptIDEgcGjDunQnO1xyXG4gICAgZG93bk1pbnV0ZUxhYmVsID0gJ0Lhu5t0IDEgcGjDunQnO1xyXG4gICAgdXBIb3VyTGFiZWwgPSAnVGjDqm0gMSBnaeG7nSc7XHJcbiAgICBkb3duSG91ckxhYmVsID0gJ0Lhu5t0IDEgZ2nhu50nO1xyXG4gICAgcHJldk1vbnRoTGFiZWwgPSAnVGjDoW5nIHRyxrDhu5tjJztcclxuICAgIG5leHRNb250aExhYmVsID0gJ1Row6FuZyB04bubaSc7XHJcbiAgICBwcmV2WWVhckxhYmVsID0gJ07Eg20gdHLGsOG7m2MnO1xyXG4gICAgbmV4dFllYXJMYWJlbCA9ICdOxINtIHThu5tpJztcclxuICAgIHByZXZNdWx0aVllYXJMYWJlbCA9ICcyMSBuxINtIHRyxrDhu5tjJztcclxuICAgIG5leHRNdWx0aVllYXJMYWJlbCA9ICcyMSBuxINtIHNhdSc7XHJcbiAgICBzd2l0Y2hUb01vbnRoVmlld0xhYmVsID0gJ1hlbSB0aGVvIHRow6FuZyc7XHJcbiAgICBzd2l0Y2hUb011bHRpWWVhclZpZXdMYWJlbCA9ICdYZW0gdGhlbyB0aMOhbmcgbsSDbSc7XHJcbiAgICBjYW5jZWxCdG5MYWJlbCA9ICdRdWF5IGzhuqFpJztcclxuICAgIHNldEJ0bkxhYmVsID0gJ0No4buNbic7XHJcbiAgICByYW5nZUZyb21MYWJlbCA9ICdU4burJztcclxuICAgIHJhbmdlVG9MYWJlbCA9ICfEkOG6v24nO1xyXG4gICAgaG91cjEyQU1MYWJlbCA9ICdBTSc7XHJcbiAgICBob3VyMTJQTUxhYmVsID0gJ1BNJztcclxufTsiXX0=