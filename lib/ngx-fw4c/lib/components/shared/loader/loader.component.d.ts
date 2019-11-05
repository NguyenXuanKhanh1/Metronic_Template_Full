import { AfterViewInit, Type, ComponentFactoryResolver, ViewContainerRef, ElementRef } from '@angular/core';
import { ActionService } from '../services';
export declare class LoaderComponent implements AfterViewInit {
    private _componentFactoryResolver;
    private _actionService;
    private _viewContainerRef;
    template: Type<any>;
    data: any;
    containerRef: ElementRef;
    componentRef: any;
    constructor(_componentFactoryResolver: ComponentFactoryResolver, _actionService: ActionService, _viewContainerRef: ViewContainerRef);
    ngAfterViewInit(): void;
    private createComponent;
}
