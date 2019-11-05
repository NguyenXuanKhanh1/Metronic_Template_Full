import { PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
export declare class CDatetimePipe extends DatePipe implements PipeTransform {
    transform(value: Date): string;
}
