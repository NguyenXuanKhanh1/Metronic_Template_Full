import { ModuleWithProviders } from '@angular/core';
import { OwlDateTimeIntl } from 'ng-pick-datetime';
export declare class DatetimePickerModule {
    static forRoot(): ModuleWithProviders;
    static forChild(): ModuleWithProviders;
}
export declare class DefaultDateTimeLabels extends OwlDateTimeIntl {
    upSecondLabel: string;
    downSecondLabel: string;
    upMinuteLabel: string;
    downMinuteLabel: string;
    upHourLabel: string;
    downHourLabel: string;
    prevMonthLabel: string;
    nextMonthLabel: string;
    prevYearLabel: string;
    nextYearLabel: string;
    prevMultiYearLabel: string;
    nextMultiYearLabel: string;
    switchToMonthViewLabel: string;
    switchToMultiYearViewLabel: string;
    cancelBtnLabel: string;
    setBtnLabel: string;
    rangeFromLabel: string;
    rangeToLabel: string;
    hour12AMLabel: string;
    hour12PMLabel: string;
}
