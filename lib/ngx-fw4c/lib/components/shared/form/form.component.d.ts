import { OnInit, QueryList, TemplateRef, SimpleChanges } from '@angular/core';
export declare class FormComponent implements OnInit {
    formItems: QueryList<TemplateRef<any>>;
    column: 1 | 2 | 3 | 4;
    smallWidth: number;
    mediumWidth: number;
    largeWidth: number;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
