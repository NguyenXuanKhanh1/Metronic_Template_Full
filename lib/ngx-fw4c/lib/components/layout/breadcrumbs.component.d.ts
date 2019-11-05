import { EventEmitter, OnInit } from "@angular/core";
import { Breadcrumb, MenuTab } from '../shared/models/base.model';
import { AggregatorService } from '../shared/services/aggregator.service';
import { ActionService } from '../shared/services/action.service';
export declare class DefaultBreadcrumbsComponent implements OnInit {
    protected aggregatorService: AggregatorService;
    protected actionService: ActionService;
    items: Breadcrumb[];
    menuTabs: MenuTab[];
    change: EventEmitter<Breadcrumb[]>;
    constructor(aggregatorService: AggregatorService, actionService: ActionService);
    ngOnInit(): void;
    selectItem(item: Breadcrumb): void;
}
