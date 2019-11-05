import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
export declare class SpinnerComponent implements OnDestroy {
    private router;
    isSpinnerVisible: boolean;
    private subscriptions;
    constructor(router: Router);
    ngOnDestroy(): void;
}
