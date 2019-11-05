/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { Breadcrumb } from '../shared/models/base.model';
import { ActionService } from '../shared/services/action.service';
import { Router } from '@angular/router';
import { AggregatorService } from '../shared/services/aggregator.service';
import { KeyConst } from '../shared/constants/key.const';
var DefaultNavBarComponent = /** @class */ (function () {
    function DefaultNavBarComponent(_actionService, _router, aggregatorService) {
        this._actionService = _actionService;
        this._router = _router;
        this.aggregatorService = aggregatorService;
        this.hideBreadcrumbsSection = false;
        this.menuTabs = [];
    }
    /**
     * @return {?}
     */
    DefaultNavBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.items || this.items.length == 0) {
            if (this.menuTabs.length > 0) {
                /** @type {?} */
                var data = this._router.url;
                /** @type {?} */
                var states = data.split('/');
                if (states.length > 0) {
                    /** @type {?} */
                    var state = states[states.length - 1];
                    if (!state && this.url) {
                        data = this.url;
                        states = data.split('/');
                        state = states[states.length - 1];
                    }
                    if (state) {
                        /** @type {?} */
                        var name = this._actionService.retrieveStateName(state, this.menuTabs);
                        this._actionService.changeItem({ state: state, name: name }, this.menuTabs, (/**
                         * @param {?} items
                         * @return {?}
                         */
                        function (items) {
                            _this.items = items;
                            _this.items.splice(0, 0, _this.breadcrumb);
                        }));
                    }
                }
            }
        }
        this.aggregatorService.subscribe(KeyConst.MenuChanged, (/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            _this.items = items;
        }));
    };
    /**
     * @return {?}
     */
    DefaultNavBarComponent.prototype.retrieveCurrentItem = /**
     * @return {?}
     */
    function () {
        if (!this.items || this.items.length == 0)
            return null;
        return this.items[this.items.length - 1];
    };
    DefaultNavBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'default-navbar',
                    template: "<div *ngIf=\"!hideBreadcrumbsSection\" class=\"d-flex align-items-center breadcrumbs-wrapper\">\r\n  <div class=\"d-none d-sm-block\">\r\n    <h5 class=\"m-0 784title text-uppercase\">{{retrieveCurrentItem()?.label}}</h5>\r\n  </div>\r\n  <div class=\"ml-auto d-flex align-items-center\">\r\n    <i class=\"icofont icofont-home mr-1 text-primary f-16\"></i>\r\n    <default-breadcrumbs [menuTabs]=\"menuTabs\" [items]=\"items\"></default-breadcrumbs>\r\n  </div>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    DefaultNavBarComponent.ctorParameters = function () { return [
        { type: ActionService },
        { type: Router },
        { type: AggregatorService }
    ]; };
    DefaultNavBarComponent.propDecorators = {
        hideBreadcrumbsSection: [{ type: Input }],
        items: [{ type: Input }],
        menuTabs: [{ type: Input }],
        url: [{ type: Input }],
        breadcrumb: [{ type: Input }]
    };
    return DefaultNavBarComponent;
}());
export { DefaultNavBarComponent };
if (false) {
    /** @type {?} */
    DefaultNavBarComponent.prototype.hideBreadcrumbsSection;
    /** @type {?} */
    DefaultNavBarComponent.prototype.items;
    /** @type {?} */
    DefaultNavBarComponent.prototype.menuTabs;
    /** @type {?} */
    DefaultNavBarComponent.prototype.url;
    /** @type {?} */
    DefaultNavBarComponent.prototype.breadcrumb;
    /**
     * @type {?}
     * @private
     */
    DefaultNavBarComponent.prototype._actionService;
    /**
     * @type {?}
     * @private
     */
    DefaultNavBarComponent.prototype._router;
    /**
     * @type {?}
     * @protected
     */
    DefaultNavBarComponent.prototype.aggregatorService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQVcsTUFBTSw2QkFBNkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV6RDtJQVlJLGdDQUNZLGNBQTZCLEVBQzdCLE9BQWUsRUFDYixpQkFBb0M7UUFGdEMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNiLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFUbEMsMkJBQXNCLEdBQVksS0FBSyxDQUFDO1FBRXhDLGFBQVEsR0FBYyxFQUFFLENBQUM7SUFRckMsQ0FBQzs7OztJQUVMLHlDQUFROzs7SUFBUjtRQUFBLGlCQTBCQztRQXpCRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O29CQUN0QixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHOztvQkFDdkIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUM1QixJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzt3QkFDZixLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUNyQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7d0JBQ3BCLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUNoQixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDekIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNyQztvQkFDRCxJQUFJLEtBQUssRUFBRTs7NEJBQ0gsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7d0JBQ3RFLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVE7Ozs7d0JBQUUsVUFBQyxLQUFLOzRCQUM5RSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs0QkFDbkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQzdDLENBQUMsRUFBQyxDQUFDO3FCQUNOO2lCQUNKO2FBQ0o7U0FDSjtRQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVc7Ozs7UUFBRSxVQUFDLEtBQW1CO1lBQ3ZFLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVNLG9EQUFtQjs7O0lBQTFCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDOztnQkFqREosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLG9lQUFzQztpQkFDekM7Ozs7Z0JBUlEsYUFBYTtnQkFDYixNQUFNO2dCQUNOLGlCQUFpQjs7O3lDQVNyQixLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSztzQkFDTCxLQUFLOzZCQUNMLEtBQUs7O0lBd0NWLDZCQUFDO0NBQUEsQUFsREQsSUFrREM7U0E3Q1ksc0JBQXNCOzs7SUFDL0Isd0RBQXdEOztJQUN4RCx1Q0FBb0M7O0lBQ3BDLDBDQUF5Qzs7SUFDekMscUNBQTRCOztJQUM1Qiw0Q0FBdUM7Ozs7O0lBR25DLGdEQUFxQzs7Ozs7SUFDckMseUNBQXVCOzs7OztJQUN2QixtREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCcmVhZGNydW1iLCBNZW51VGFiIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy9iYXNlLm1vZGVsJztcclxuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hY3Rpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFnZ3JlZ2F0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2FnZ3JlZ2F0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEtleUNvbnN0IH0gZnJvbSAnLi4vc2hhcmVkL2NvbnN0YW50cy9rZXkuY29uc3QnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2RlZmF1bHQtbmF2YmFyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9uYXZiYXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdE5hdkJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaGlkZUJyZWFkY3J1bWJzU2VjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcHVibGljIGl0ZW1zOiBCcmVhZGNydW1iW107XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbWVudVRhYnM6IE1lbnVUYWJbXSA9IFtdO1xyXG4gICAgQElucHV0KCkgcHVibGljIHVybDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcHVibGljIGJyZWFkY3J1bWI6IEJyZWFkY3J1bWI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfYWN0aW9uU2VydmljZTogQWN0aW9uU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcm90ZWN0ZWQgYWdncmVnYXRvclNlcnZpY2U6IEFnZ3JlZ2F0b3JTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pdGVtcyB8fCB0aGlzLml0ZW1zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1lbnVUYWJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fcm91dGVyLnVybDtcclxuICAgICAgICAgICAgICAgIHZhciBzdGF0ZXMgPSBkYXRhLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBzdGF0ZXNbc3RhdGVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3RhdGUgJiYgdGhpcy51cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZXMgPSBkYXRhLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gc3RhdGVzW3N0YXRlcy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gdGhpcy5fYWN0aW9uU2VydmljZS5yZXRyaWV2ZVN0YXRlTmFtZShzdGF0ZSwgdGhpcy5tZW51VGFicyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FjdGlvblNlcnZpY2UuY2hhbmdlSXRlbSh7IHN0YXRlOiBzdGF0ZSwgbmFtZTogbmFtZSB9LCB0aGlzLm1lbnVUYWJzLCAoaXRlbXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKDAsIDAsIHRoaXMuYnJlYWRjcnVtYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hZ2dyZWdhdG9yU2VydmljZS5zdWJzY3JpYmUoS2V5Q29uc3QuTWVudUNoYW5nZWQsIChpdGVtczogQnJlYWRjcnVtYltdKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmV0cmlldmVDdXJyZW50SXRlbSgpOiBCcmVhZGNydW1iIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXRlbXMgfHwgdGhpcy5pdGVtcy5sZW5ndGggPT0gMCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbdGhpcy5pdGVtcy5sZW5ndGggLSAxXTtcclxuICAgIH1cclxufVxyXG4iXX0=