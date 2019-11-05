/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
export class AccordionDirective {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.navlinks = [];
        this.countState = 1;
    }
    /**
     * @param {?} openLink
     * @return {?}
     */
    closeOtherLinks(openLink) {
        this.countState++;
        if ((openLink.group !== 'sub-toggled' || openLink.group !== 'main-toggled') && this.countState === 1) {
            if (window.innerWidth < 768 || (window.innerWidth >= 768 && window.innerWidth <= 1024)) {
                /** @type {?} */
                const toggledElement = (/** @type {?} */ (document.querySelector('#mobile-collapse')));
                toggledElement.click();
            }
        }
        this.navlinks.forEach((/**
         * @param {?} link
         * @return {?}
         */
        (link) => {
            if (link !== openLink && (link.group === 'sub-toggled' || openLink.group !== 'sub-toggled')) {
                link.open = false;
            }
        }));
    }
    /**
     * @param {?} link
     * @return {?}
     */
    addLink(link) {
        this.navlinks.push(link);
    }
    /**
     * @param {?} link
     * @return {?}
     */
    removeGroup(link) {
        /** @type {?} */
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    /**
     * @return {?}
     */
    getUrl() {
        return this.router.url;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._router = this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event instanceof NavigationEnd))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.countState = 0;
            this.navlinks.forEach((/**
             * @param {?} link
             * @return {?}
             */
            (link) => {
                if (link.group) {
                    /** @type {?} */
                    const routeUrl = this.getUrl();
                    /** @type {?} */
                    const currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        this.closeOtherLinks(link);
                    }
                }
            }));
        }));
    }
}
AccordionDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cAccordion]',
            },] }
];
/** @nocollapse */
AccordionDirective.ctorParameters = () => [
    { type: Router }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AccordionDirective.prototype.navlinks;
    /**
     * @type {?}
     * @private
     */
    AccordionDirective.prototype.countState;
    /**
     * @type {?}
     * @private
     */
    AccordionDirective.prototype._router;
    /**
     * @type {?}
     * @private
     */
    AccordionDirective.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2FjY29yZGlvbi9hY2NvcmRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTXhDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFJN0IsWUFBMkIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFIL0IsYUFBUSxHQUE2QixFQUFFLENBQUM7UUFDMUMsZUFBVSxHQUFHLENBQUMsQ0FBQztJQUVzQixDQUFDOzs7OztJQUV2QyxlQUFlLENBQUMsUUFBZ0M7UUFDckQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLGFBQWEsSUFBSSxRQUFRLENBQUMsS0FBSyxLQUFLLGNBQWMsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO1lBQ3BHLElBQUksTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxFQUFFOztzQkFDaEYsY0FBYyxHQUFHLG1CQUFhLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsRUFBQTtnQkFDOUUsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3hCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLElBQTRCLEVBQUUsRUFBRTtZQUNyRCxJQUFJLElBQUksS0FBSyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLGFBQWEsSUFBSSxRQUFRLENBQUMsS0FBSyxLQUFLLGFBQWEsQ0FBQyxFQUFFO2dCQUMzRixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUNuQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxPQUFPLENBQUMsSUFBNEI7UUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTSxXQUFXLENBQUMsSUFBNEI7O2NBQ3ZDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDekMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7OztJQUVNLE1BQU07UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLFlBQVksYUFBYSxFQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUU7WUFDM0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxJQUE0QixFQUFFLEVBQUU7Z0JBQ3JELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTs7MEJBQ1IsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7OzBCQUN4QixVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7b0JBQ3RDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzt3QkFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDNUI7aUJBQ0Y7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBdERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7OztZQVBRLE1BQU07Ozs7Ozs7SUFVYixzQ0FBa0Q7Ozs7O0lBQ2xELHdDQUF1Qjs7Ozs7SUFDdkIscUNBQThCOzs7OztJQUNYLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFjY29yZGlvbkxpbmtEaXJlY3RpdmUgfSBmcm9tICcuL2FjY29yZGlvbmxpbmsuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2NBY2NvcmRpb25dJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByb3RlY3RlZCBuYXZsaW5rczogQWNjb3JkaW9uTGlua0RpcmVjdGl2ZVtdID0gW107XHJcbiAgcHJpdmF0ZSBjb3VudFN0YXRlID0gMTtcclxuICBwcml2YXRlIF9yb3V0ZXI6IFN1YnNjcmlwdGlvbjtcclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZU90aGVyTGlua3Mob3Blbkxpbms6IEFjY29yZGlvbkxpbmtEaXJlY3RpdmUpOiB2b2lkIHtcclxuICAgIHRoaXMuY291bnRTdGF0ZSsrO1xyXG4gICAgaWYgKChvcGVuTGluay5ncm91cCAhPT0gJ3N1Yi10b2dnbGVkJyB8fCBvcGVuTGluay5ncm91cCAhPT0gJ21haW4tdG9nZ2xlZCcpICYmIHRoaXMuY291bnRTdGF0ZSA9PT0gMSkge1xyXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjggfHwgKHdpbmRvdy5pbm5lcldpZHRoID49IDc2OCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDI0KSkge1xyXG4gICAgICAgIGNvbnN0IHRvZ2dsZWRFbGVtZW50ID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2JpbGUtY29sbGFwc2UnKTtcclxuICAgICAgICB0b2dnbGVkRWxlbWVudC5jbGljaygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm5hdmxpbmtzLmZvckVhY2goKGxpbms6IEFjY29yZGlvbkxpbmtEaXJlY3RpdmUpID0+IHtcclxuICAgICAgaWYgKGxpbmsgIT09IG9wZW5MaW5rICYmIChsaW5rLmdyb3VwID09PSAnc3ViLXRvZ2dsZWQnIHx8IG9wZW5MaW5rLmdyb3VwICE9PSAnc3ViLXRvZ2dsZWQnKSkge1xyXG4gICAgICAgIGxpbmsub3BlbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRMaW5rKGxpbms6IEFjY29yZGlvbkxpbmtEaXJlY3RpdmUpOiB2b2lkIHtcclxuICAgIHRoaXMubmF2bGlua3MucHVzaChsaW5rKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVHcm91cChsaW5rOiBBY2NvcmRpb25MaW5rRGlyZWN0aXZlKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubmF2bGlua3MuaW5kZXhPZihsaW5rKTtcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgdGhpcy5uYXZsaW5rcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLnJvdXRlci51cmw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogYW55IHtcclxuICAgIHRoaXMuX3JvdXRlciA9IHRoaXMucm91dGVyLmV2ZW50cy5waXBlKGZpbHRlcigoZXZlbnQpID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpLnN1YnNjcmliZSgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuICAgICAgdGhpcy5jb3VudFN0YXRlID0gMDtcclxuICAgICAgdGhpcy5uYXZsaW5rcy5mb3JFYWNoKChsaW5rOiBBY2NvcmRpb25MaW5rRGlyZWN0aXZlKSA9PiB7XHJcbiAgICAgICAgaWYgKGxpbmsuZ3JvdXApIHtcclxuICAgICAgICAgIGNvbnN0IHJvdXRlVXJsID0gdGhpcy5nZXRVcmwoKTtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSByb3V0ZVVybC5zcGxpdCgnLycpO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRVcmwuaW5kZXhPZihsaW5rLmdyb3VwKSA+IDApIHtcclxuICAgICAgICAgICAgbGluay5vcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZU90aGVyTGlua3MobGluayk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=