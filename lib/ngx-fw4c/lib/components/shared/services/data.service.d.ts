import { Subject } from 'rxjs';
import { ObjectChange } from '../models/base.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
export declare class DataService {
    private _sanitizer;
    constructor(_sanitizer: DomSanitizer);
    cloneItem(item: any): any;
    cloneItems(items: any[], id?: boolean): any;
    transformToSafeHtml(input: string): SafeHtml;
    initDebounceTime(time?: number): Subject<any>;
    removeHTML(str: string): string;
    removeAllSpaces(str?: string): string;
    replaceAt(s: string, n: number, t: string): string;
    isValidEmail(email: string): boolean;
    convertUCode(c: string): string;
    fuzzysearch(needle: string, haystack: string): boolean;
    newGuid(): string;
    isNullOrEmpty(obj: any): boolean;
    toPascalCase(text: string, lowerCase?: boolean): string;
    compareObjects(source: any, target: any): ObjectChange[];
    getField(valueRef: string, lowerCase?: boolean): string;
    isNumber(input: string): boolean;
    isDigit(input: string): boolean;
}
