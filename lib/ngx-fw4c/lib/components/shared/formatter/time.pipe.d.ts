import { PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
export declare class TimePipe extends DatePipe implements PipeTransform {
    transform(value: Date): string;
}
