import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccordionLinkDirective } from './accordionlink.directive';
export declare class AccordionDirective implements OnInit {
    private router;
    protected navlinks: AccordionLinkDirective[];
    private countState;
    private _router;
    constructor(router: Router);
    closeOtherLinks(openLink: AccordionLinkDirective): void;
    addLink(link: AccordionLinkDirective): void;
    removeGroup(link: AccordionLinkDirective): void;
    getUrl(): string;
    ngOnInit(): any;
}
