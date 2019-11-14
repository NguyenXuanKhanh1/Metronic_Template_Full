/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
var AccordionDirective = /** @class */ (function () {
    function AccordionDirective(router) {
        this.router = router;
        this.navlinks = [];
        this.countState = 1;
    }
    /**
     * @param {?} openLink
     * @return {?}
     */
    AccordionDirective.prototype.closeOtherLinks = /**
     * @param {?} openLink
     * @return {?}
     */
    function (openLink) {
        this.countState++;
        if ((openLink.group !== 'sub-toggled' || openLink.group !== 'main-toggled') && this.countState === 1) {
            if (window.innerWidth < 768 || (window.innerWidth >= 768 && window.innerWidth <= 1024)) {
                /** @type {?} */
                var toggledElement = (/** @type {?} */ (document.querySelector('#mobile-collapse')));
                toggledElement.click();
            }
        }
        this.navlinks.forEach((/**
         * @param {?} link
         * @return {?}
         */
        function (link) {
            if (link !== openLink && (link.group === 'sub-toggled' || openLink.group !== 'sub-toggled')) {
                link.open = false;
            }
        }));
    };
    /**
     * @param {?} link
     * @return {?}
     */
    AccordionDirective.prototype.addLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.navlinks.push(link);
    };
    /**
     * @param {?} link
     * @return {?}
     */
    AccordionDirective.prototype.removeGroup = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        /** @type {?} */
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    /**
     * @return {?}
     */
    AccordionDirective.prototype.getUrl = /**
     * @return {?}
     */
    function () {
        return this.router.url;
    };
    /**
     * @return {?}
     */
    AccordionDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._router = this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event instanceof NavigationEnd; }))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.countState = 0;
            _this.navlinks.forEach((/**
             * @param {?} link
             * @return {?}
             */
            function (link) {
                if (link.group) {
                    /** @type {?} */
                    var routeUrl = _this.getUrl();
                    /** @type {?} */
                    var currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        _this.closeOtherLinks(link);
                    }
                }
            }));
        }));
    };
    AccordionDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[katanaAccordion]',
                },] }
    ];
    /** @nocollapse */
    AccordionDirective.ctorParameters = function () { return [
        { type: Router }
    ]; };
    return AccordionDirective;
}());
export { AccordionDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2FjY29yZGlvbi9hY2NvcmRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDO0lBUUUsNEJBQTJCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSC9CLGFBQVEsR0FBNkIsRUFBRSxDQUFDO1FBQzFDLGVBQVUsR0FBRyxDQUFDLENBQUM7SUFFc0IsQ0FBQzs7Ozs7SUFFdkMsNENBQWU7Ozs7SUFBdEIsVUFBdUIsUUFBZ0M7UUFDckQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLGFBQWEsSUFBSSxRQUFRLENBQUMsS0FBSyxLQUFLLGNBQWMsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO1lBQ3BHLElBQUksTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxFQUFFOztvQkFDaEYsY0FBYyxHQUFHLG1CQUFhLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsRUFBQTtnQkFDOUUsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3hCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLElBQTRCO1lBQ2pELElBQUksSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssYUFBYSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEtBQUssYUFBYSxDQUFDLEVBQUU7Z0JBQzNGLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ25CO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVNLG9DQUFPOzs7O0lBQWQsVUFBZSxJQUE0QjtRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVNLHdDQUFXOzs7O0lBQWxCLFVBQW1CLElBQTRCOztZQUN2QyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3pDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7Ozs7SUFFTSxtQ0FBTTs7O0lBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFTSxxQ0FBUTs7O0lBQWY7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssWUFBWSxhQUFhLEVBQTlCLENBQThCLEVBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQW9CO1lBQ3ZILEtBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsSUFBNEI7Z0JBQ2pELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTs7d0JBQ1IsUUFBUSxHQUFHLEtBQUksQ0FBQyxNQUFNLEVBQUU7O3dCQUN4QixVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7b0JBQ3RDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzt3QkFDakIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDNUI7aUJBQ0Y7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBdERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2lCQUM5Qjs7OztnQkFQUSxNQUFNOztJQTREZix5QkFBQztDQUFBLEFBdkRELElBdURDO1NBbkRZLGtCQUFrQjs7Ozs7O0lBQzdCLHNDQUFrRDs7Ozs7SUFDbEQsd0NBQXVCOzs7OztJQUN2QixxQ0FBOEI7Ozs7O0lBQ1gsb0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uTGlua0RpcmVjdGl2ZSB9IGZyb20gJy4vYWNjb3JkaW9ubGluay5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdba2F0YW5hQWNjb3JkaW9uXScsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcm90ZWN0ZWQgbmF2bGlua3M6IEFjY29yZGlvbkxpbmtEaXJlY3RpdmVbXSA9IFtdO1xyXG4gIHByaXZhdGUgY291bnRTdGF0ZSA9IDE7XHJcbiAgcHJpdmF0ZSBfcm91dGVyOiBTdWJzY3JpcHRpb247XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICBwdWJsaWMgY2xvc2VPdGhlckxpbmtzKG9wZW5MaW5rOiBBY2NvcmRpb25MaW5rRGlyZWN0aXZlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvdW50U3RhdGUrKztcclxuICAgIGlmICgob3BlbkxpbmsuZ3JvdXAgIT09ICdzdWItdG9nZ2xlZCcgfHwgb3BlbkxpbmsuZ3JvdXAgIT09ICdtYWluLXRvZ2dsZWQnKSAmJiB0aGlzLmNvdW50U3RhdGUgPT09IDEpIHtcclxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4IHx8ICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NjggJiYgd2luZG93LmlubmVyV2lkdGggPD0gMTAyNCkpIHtcclxuICAgICAgICBjb25zdCB0b2dnbGVkRWxlbWVudCA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9iaWxlLWNvbGxhcHNlJyk7XHJcbiAgICAgICAgdG9nZ2xlZEVsZW1lbnQuY2xpY2soKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5uYXZsaW5rcy5mb3JFYWNoKChsaW5rOiBBY2NvcmRpb25MaW5rRGlyZWN0aXZlKSA9PiB7XHJcbiAgICAgIGlmIChsaW5rICE9PSBvcGVuTGluayAmJiAobGluay5ncm91cCA9PT0gJ3N1Yi10b2dnbGVkJyB8fCBvcGVuTGluay5ncm91cCAhPT0gJ3N1Yi10b2dnbGVkJykpIHtcclxuICAgICAgICBsaW5rLm9wZW4gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkTGluayhsaW5rOiBBY2NvcmRpb25MaW5rRGlyZWN0aXZlKTogdm9pZCB7XHJcbiAgICB0aGlzLm5hdmxpbmtzLnB1c2gobGluayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlR3JvdXAobGluazogQWNjb3JkaW9uTGlua0RpcmVjdGl2ZSk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm5hdmxpbmtzLmluZGV4T2YobGluayk7XHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHRoaXMubmF2bGlua3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRVcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXIudXJsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IGFueSB7XHJcbiAgICB0aGlzLl9yb3V0ZXIgPSB0aGlzLnJvdXRlci5ldmVudHMucGlwZShmaWx0ZXIoKGV2ZW50KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKS5zdWJzY3JpYmUoKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcbiAgICAgIHRoaXMuY291bnRTdGF0ZSA9IDA7XHJcbiAgICAgIHRoaXMubmF2bGlua3MuZm9yRWFjaCgobGluazogQWNjb3JkaW9uTGlua0RpcmVjdGl2ZSkgPT4ge1xyXG4gICAgICAgIGlmIChsaW5rLmdyb3VwKSB7XHJcbiAgICAgICAgICBjb25zdCByb3V0ZVVybCA9IHRoaXMuZ2V0VXJsKCk7XHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50VXJsID0gcm91dGVVcmwuc3BsaXQoJy8nKTtcclxuICAgICAgICAgIGlmIChjdXJyZW50VXJsLmluZGV4T2YobGluay5ncm91cCkgPiAwKSB7XHJcbiAgICAgICAgICAgIGxpbmsub3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VPdGhlckxpbmtzKGxpbmspO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19