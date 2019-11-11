import { PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
export declare class KbPipe extends DecimalPipe implements PipeTransform {
    transform(value: number, digits?: string, locale?: string): string | null;
}
