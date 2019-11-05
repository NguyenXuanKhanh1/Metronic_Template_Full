import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { TabItemComponent } from './tab-item.component';
export declare class TabComponent {
    private _changeDetectorRef;
    tabs: TabItemComponent[];
    change: EventEmitter<TabItemComponent>;
    displayMode: 'full' | 'default';
    activeTabIndex: number;
    clicked: boolean;
    constructor(_changeDetectorRef: ChangeDetectorRef);
    switchTab(tabIndex: number, tab: TabItemComponent): void;
}
