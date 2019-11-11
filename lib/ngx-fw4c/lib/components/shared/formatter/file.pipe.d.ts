import { PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
export declare class FilePipe extends DecimalPipe implements PipeTransform {
    transform(value: string, digits?: string, locale?: string): string | null;
}
