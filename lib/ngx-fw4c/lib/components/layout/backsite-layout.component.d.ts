import { OnInit, AfterViewInit } from "@angular/core";
import { DefaultLayoutService } from './layout.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AggregatorService } from '../shared/services/aggregator.service';
import { NotificationDetail } from '../shared/models/notification.model';
import { MenuTab, Breadcrumb } from '../shared/models/base.model';
import { ActionService } from '../shared/services/action.service';
export declare class AdminLayoutComponent implements OnInit, AfterViewInit {
    workspaceLayoutService: DefaultLayoutService;
    route: ActivatedRoute;
    protected router: Router;
    protected actionService: ActionService;
    protected aggregatorService: AggregatorService;
    notifications: NotificationDetail[];
    logo: string;
    title: string;
    menuTabs: MenuTab[];
    isModalShow: boolean;
    modalImageSrc: string;
    imageAltText: string;
    breadcrumbs: Breadcrumb[];
    breadcrumb: Breadcrumb;
    url: string;
    constructor(workspaceLayoutService: DefaultLayoutService, route: ActivatedRoute, router: Router, actionService: ActionService, aggregatorService: AggregatorService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    closeImage(): void;
    changeMenu(items: Breadcrumb[]): void;
}
