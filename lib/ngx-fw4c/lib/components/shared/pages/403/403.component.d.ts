import { Router } from '@angular/router';
import { Location } from '@angular/common';
export declare class AccessDeniedComponent {
    private _router;
    private _location;
    constructor(_router: Router, _location: Location);
    gotoHome(): void;
    back(): void;
}
