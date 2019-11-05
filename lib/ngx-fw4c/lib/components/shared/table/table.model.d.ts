import { Observable } from 'rxjs';
import { TableComponent } from './table.component';
import { TemplateRef, ElementRef, Type } from '@angular/core';
export interface TableEditInline {
    enabled?: boolean;
    autoCommit?: boolean;
    createAsync?: (item: any) => Observable<any>;
    updateAsync?: (item: any, column?: TableColumn) => Observable<any>;
}
export interface TableCell {
    item?: any;
    column?: TableColumn;
}
export declare class TableColumn {
    title?: () => string;
    valueRef?: () => any;
    direction?: string;
    allowSort?: boolean;
    allowFilter?: boolean;
    order?: number;
    customClass?: string;
    defaultSorter?: boolean;
    width?: number;
    textAlign?: string;
    type?: TableColumnType;
    showTooltip?: boolean;
    editInline?: boolean;
    callback?: (provider?: TableComponent, element?: ElementRef, $event?: any) => any;
    customTemplate?: () => TemplateRef<any>;
    hide?: () => boolean;
    dropdownConfiguration?: {
        searchFunction: (text: string, index: number, currentPage: number, pageSize: number) => Observable<{
            items: any[];
            totalRecords: number;
        }>;
        multiple?: boolean;
        bindLabel: string;
        bindValue: string;
    };
    id?: string;
    filterTemplate?: () => TemplateRef<any>;
    constructor(init?: Partial<TableColumn>);
}
export declare class TableSorter {
    direction?: string;
    orderBy?: string;
    order?: number;
}
export declare class TableAction {
    id?: string;
    title?: () => string;
    tooltip?: () => string;
    icon?: string;
    type?: string;
    customClass?: string;
    executeAsync?: (item?: any, element?: ElementRef, provider?: any, index?: number, loadedCallback?: Function) => any;
    disabled?: boolean;
    hide?: (item?: any) => boolean;
    lazyload?: boolean;
    constructor(init?: Partial<TableAction>);
}
export interface TableRequest {
    searchText?: string;
    pageSize?: number;
    pageIndex?: number;
    sorters?: TableSorter[];
    data?: any;
}
export declare class TableText {
    placeholderSearch?: string;
    btnSearch?: string;
    btnReset?: string;
    action?: string;
    selectPageSize?: string;
    deleteTitle?: string;
    btnAcceptTitle?: string;
    btnCancelTitle?: string;
    filterTitle?: string;
    applyFilter?: string;
    detailTitle?: string;
    pageTitle?: string;
    advancedSearchTitle?: string;
    advancedBtnTitle?: string;
    advancedBtnCancelTitle?: string;
    allTitle?: string;
}
export declare class TableMessage {
    notFoundMessage?: string;
    foundMessage?: string;
    invalidFormatMessage?: string;
    selectedItemsMessage?: string;
    confirmSelectAllRecordsMessage?: string;
    confirmClearAllRecordsMessage?: string;
    deleteMessage?: string;
    loadingMessage?: string;
    refMessage?: string;
}
export interface TableResponse<T> {
    totalRecords?: number;
    items?: T[];
}
export interface TableServiceProvider {
    searchAsync?: (request?: any) => Observable<any>;
    createAsync?: (item: any) => Observable<any>;
    updateAsync?: (item: any) => Observable<any>;
    deleteAsync?: (ids: string, all?: boolean) => Observable<any>;
    exportAsync?: (request?: any) => Observable<any>;
}
export declare class TableDatetimeFormat {
    format: string;
    full: boolean;
    constructor(init: Partial<TableDatetimeFormat>);
}
export declare class EdittedField {
    item: any;
    field?: string;
    index?: number;
    constructor(init: Partial<EdittedField>);
}
export declare class TableOption {
    sort?: (a: any, b: any, orderBy: string) => number;
    multiple?: boolean;
    datetimeFormat?: TableDatetimeFormat;
    paging?: boolean;
    selectedItems?: any[];
    serviceProvider?: TableServiceProvider;
    localData?: () => any[];
    request?: TableRequest;
    mainColumns: TableColumn[];
    displayText?: TableText;
    message?: TableMessage;
    componentClass?: string;
    actions?: TableAction[];
    topButtons?: TableAction[];
    rowDetailTemplate?: Type<any>;
    expandFilterArea?: boolean;
    pageSizes?: number[];
    defaultPageSize?: number;
    totalToolbarItem?: number;
    maxPage?: number;
    key?: string;
    title?: string;
    maxLenghtext?: number;
    mode: TableMode;
    hideSequenceColumn?: boolean;
    hideCheckboxColumn?: boolean;
    displayMode?: 'list' | 'full';
    defaultOrderBy?: string;
    defautOrderDirection?: string;
    inlineEdit?: boolean;
    searchFields?: string[];
    constructor(init: Partial<TableOption>);
}
export declare enum TableMode {
    compact = "compact",
    full = "full"
}
export declare class TableConstant {
    static ComponentClass: string;
    static Key: string;
    static DatetimeLocate: string;
    static PageSizes: number[];
    static Message: {
        NotFoundMessage: string;
        InvalidFormatMessage: string;
        FoundMessage: string;
        SelectedItemsMessage: string;
        ConfirmSelectAllRecordsMessage: string;
        ConfirmClearAllRecordsMessage: string;
        DeleteMessage: string;
        LoadingMessage: string;
        RefMessage: string;
    };
    static DisplayText: {
        PlaceholderSearch: string;
        BtnReset: string;
        BtnSearch: string;
        Action: string;
        SelectPageSize: string;
        DeleteTitle: string;
        BtnAcceptTitle: string;
        BtnCancelTitle: string;
        FilterTitle: string;
        ApplyFilter: string;
        DetailTitle: string;
        PageTitle: string;
        AdvancedSearchTitle: string;
        AdvancedBtnTitle: string;
        AdvancedBtnCancelTitle: string;
        AllTitle: string;
    };
    static Direction: {
        ASC: string;
        DESC: string;
    };
    static TextAlign: {
        Left: string;
        Right: string;
        Center: string;
    };
    static Action: {
        Edit: string;
        Delete: string;
        Custom: string;
    };
    static ActionType: {
        Both: string;
        Toolbar: string;
        Inline: string;
    };
}
export declare enum TableColumnType {
    Number = "number",
    String = "string",
    Date = "date",
    DateTime = "datetime",
    DateRange = "daterange",
    DateTimeRange = "datetimerange",
    Time = "time",
    TimeRange = "timerange",
    Boolean = "boolean",
    Description = "description",
    Currency = "currency",
    Dropdown = "dropdown",
    Custom = "custom"
}
