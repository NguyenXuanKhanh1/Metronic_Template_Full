import { PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
export declare class CDatePipe extends DatePipe implements PipeTransform {
    transform(value: any, args?: any): any;
}
