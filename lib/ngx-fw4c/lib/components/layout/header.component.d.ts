import { DefaultLayoutService } from './layout.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ActionService } from '../shared/services/action.service';
import { NotificationDetail } from '../shared/models/notification.model';
import { UserViewModel } from '../auth/auth.model';
import { AggregatorService } from '../shared/services/aggregator.service';
import { AuthenticationService } from '../auth/auth.service';
export declare class DefaultHeaderComponent {
    layoutService: DefaultLayoutService;
    protected router: Router;
    protected route: ActivatedRoute;
    protected actionService: ActionService;
    protected aggregatorService: AggregatorService;
    protected authenticationService: AuthenticationService;
    notifications: NotificationDetail[];
    logo: string;
    title: string;
    loading: boolean;
    filter: string;
    user: UserViewModel;
    isMobile: boolean;
    constructor(layoutService: DefaultLayoutService, router: Router, route: ActivatedRoute, actionService: ActionService, aggregatorService: AggregatorService, authenticationService: AuthenticationService);
    ngOnInit(): void;
    toggleMenu(): void;
    logout(): void;
}
