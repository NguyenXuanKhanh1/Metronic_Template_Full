import { TemplateRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TableOption } from '../../table/table.model';
import { FileResponse, FileRequest, FileViewModel } from '../../file/file.model';
import { TableComponent } from '../../table/table.component';
export declare class GalleryComponent implements OnInit {
    items: (request: FileRequest) => Observable<FileResponse>;
    headers: string[];
    imageTemplate: TemplateRef<any>;
    sizeTemplate: TemplateRef<any>;
    nameTemplate: TemplateRef<any>;
    tableRef: TableComponent;
    option: TableOption;
    ngOnInit(): void;
    isValid(): boolean;
    callback(): Observable<FileViewModel[]>;
    private initTable;
}
