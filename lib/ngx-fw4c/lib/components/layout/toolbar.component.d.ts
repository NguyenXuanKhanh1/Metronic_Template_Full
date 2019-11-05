import { ViewContainerRef, TemplateRef } from "@angular/core";
import { DefaultLayoutService } from './layout.service';
import { AggregatorService } from '../shared/services/aggregator.service';
import { ButtonDefinition } from '../shared/models/base.model';
export declare class DefaultToolbarComponent {
    layoutService: DefaultLayoutService;
    private _aggregatorService;
    errorContainer: ViewContainerRef;
    errorTemplate: TemplateRef<any>;
    constructor(layoutService: DefaultLayoutService, _aggregatorService: AggregatorService);
    ngOnInit(): void;
    onButtonClicked(loadedCallback: Function, item: ButtonDefinition): void;
}
