import { OnInit, OnDestroy } from '@angular/core';
import { AccordionDirective } from './accordion.directive';
export declare class AccordionLinkDirective implements OnInit, OnDestroy {
    group: any;
    open: boolean;
    protected _open: boolean;
    protected nav: AccordionDirective;
    constructor(nav: AccordionDirective);
    ngOnInit(): any;
    ngOnDestroy(): any;
    toggle(): any;
}
