import { OnInit } from "@angular/core";
import { Breadcrumb, MenuTab } from '../shared/models/base.model';
import { ActionService } from '../shared/services/action.service';
import { Router } from '@angular/router';
import { AggregatorService } from '../shared/services/aggregator.service';
export declare class DefaultNavBarComponent implements OnInit {
    private _actionService;
    private _router;
    protected aggregatorService: AggregatorService;
    hideBreadcrumbsSection: boolean;
    items: Breadcrumb[];
    menuTabs: MenuTab[];
    url: string;
    breadcrumb: Breadcrumb;
    constructor(_actionService: ActionService, _router: Router, aggregatorService: AggregatorService);
    ngOnInit(): void;
    retrieveCurrentItem(): Breadcrumb;
}
