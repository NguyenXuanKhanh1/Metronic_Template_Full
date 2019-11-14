import { EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListItemDirective } from './list-item.directive';
export declare class ListComponent {
    listItemTemplate: ListItemDirective;
    eventSelect: boolean;
    model: any[];
    direction: 'horizontal' | 'vertical';
    emptyListMessage: string;
    validationName: string;
    validationScope: string;
    pageSize: number;
    searchFunction: Function;
    itemSelected: EventEmitter<any>;
    loading: boolean;
    numberOfItemsFromEndBeforeFetchingMore: number;
    searchItems: any[];
    searchText$: BehaviorSubject<string>;
    private subscriptions;
    private currentPage;
    private selectedItems;
    isSelected(item: any): boolean;
    selectItem(item: any, index: any): void;
    getSelectedItems(): any[];
    scroll(lastIndex: number): void;
    fetchMore(): void;
}
