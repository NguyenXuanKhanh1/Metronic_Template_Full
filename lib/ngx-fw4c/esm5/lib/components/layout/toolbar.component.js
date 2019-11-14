/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ViewContainerRef, TemplateRef } from "@angular/core";
import { DefaultLayoutService } from './layout.service';
import { AggregatorService } from '../shared/services/aggregator.service';
import { ToolbarActionPayload } from '../shared/models/base.model';
import { ToolbarAction } from '../shared/enums/base.enum';
import { KeyConst } from '../shared';
var DefaultToolbarComponent = /** @class */ (function () {
    function DefaultToolbarComponent(layoutService, _aggregatorService) {
        this.layoutService = layoutService;
        this._aggregatorService = _aggregatorService;
    }
    /**
     * @return {?}
     */
    DefaultToolbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._aggregatorService.subscribe(KeyConst.PageChanged, (/**
         * @return {?}
         */
        function () {
            if (_this.errorContainer) {
                _this.errorContainer.clear();
            }
        }));
    };
    /**
     * @param {?} loadedCallback
     * @param {?} item
     * @return {?}
     */
    DefaultToolbarComponent.prototype.onButtonClicked = /**
     * @param {?} loadedCallback
     * @param {?} item
     * @return {?}
     */
    function (loadedCallback, item) {
        var _this = this;
        /** @type {?} */
        var payload = new ToolbarActionPayload({ action: item.action, loadedCallback: loadedCallback });
        if (item.action === ToolbarAction.Save) {
            payload.callback = (/**
             * @param {?} errors
             * @return {?}
             */
            function (errors) {
                _this.errorContainer.clear();
                _this.errorContainer.createEmbeddedView(_this.errorTemplate, { errors: errors });
            });
        }
        this._aggregatorService.publish('ToolbarButtonClicked', payload);
    };
    DefaultToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'default-toolbar',
                    template: "<ng-container *ngIf=\"layoutService.hasToolbarItems()\">\r\n  <div class=\"action-bar-footer\">\r\n    <div class=\"action-bar\">\r\n      <ng-container #errorContainer></ng-container>\r\n      <ng-container *ngFor=\"let item of layoutService.getToolbarItems()\">\r\n        <ng-container [ngSwitch]=\"item.controlType\">\r\n          <ng-template ngSwitchDefault>\r\n            <katana-button [title]=\"item.title\" [lazyload]=\"item.lazyload\"\r\n              (clicked)=\"onButtonClicked($event, item)\" [customClass]=\"item.style\"></katana-button>\r\n          </ng-template>\r\n          <ng-template ngSwitchCase=\"'Textbox'\">\r\n          </ng-template>\r\n          <ng-template ngSwitchCase=\"'Dropdown'\">\r\n          </ng-template>\r\n        </ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #errorTemplate let-errors=\"errors\">\r\n    <div *ngIf=\"errors.length\" class=\"error-part\">\r\n      <label class=\"title\">Th\u00F4ng tin sau ch\u01B0a h\u1EE3p l\u1EC7</label>\r\n      <ul class=\"list-error\">\r\n        <li class=\"error-item\" *ngFor=\"let error of errors\">\r\n          <div class=\"small-item\" *ngFor=\"let item of error.messages\">\r\n            {{item}}\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </ng-template>\r\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    DefaultToolbarComponent.ctorParameters = function () { return [
        { type: DefaultLayoutService },
        { type: AggregatorService }
    ]; };
    DefaultToolbarComponent.propDecorators = {
        errorContainer: [{ type: ViewChild, args: ['errorContainer', { read: ViewContainerRef, static: true },] }],
        errorTemplate: [{ type: ViewChild, args: ['errorTemplate', { static: true },] }]
    };
    return DefaultToolbarComponent;
}());
export { DefaultToolbarComponent };
if (false) {
    /** @type {?} */
    DefaultToolbarComponent.prototype.errorContainer;
    /** @type {?} */
    DefaultToolbarComponent.prototype.errorTemplate;
    /** @type {?} */
    DefaultToolbarComponent.prototype.layoutService;
    /**
     * @type {?}
     * @private
     */
    DefaultToolbarComponent.prototype._aggregatorService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xheW91dC90b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBb0Isb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVyQztJQVNJLGlDQUNXLGFBQW1DLEVBQ2xDLGtCQUFxQztRQUR0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtJQUVqRCxDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXOzs7UUFBRTtZQUNwRCxJQUFJLEtBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3JCLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDL0I7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7OztJQUVNLGlEQUFlOzs7OztJQUF0QixVQUF1QixjQUF3QixFQUFFLElBQXNCO1FBQXZFLGlCQVNDOztZQVJPLE9BQU8sR0FBRyxJQUFJLG9CQUFvQixDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxDQUFDO1FBQy9GLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxhQUFhLENBQUMsSUFBSSxFQUFFO1lBQ3BDLE9BQU8sQ0FBQyxRQUFROzs7O1lBQUcsVUFBQyxNQUFzQjtnQkFDdEMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDbkYsQ0FBQyxDQUFBLENBQUM7U0FDTDtRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Z0JBaENKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixzMENBQXVDO2lCQUMxQzs7OztnQkFWUSxvQkFBb0I7Z0JBQ3BCLGlCQUFpQjs7O2lDQVlyQixTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQ0FDcEUsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBMEJoRCw4QkFBQztDQUFBLEFBakNELElBaUNDO1NBNUJZLHVCQUF1Qjs7O0lBQ2hDLGlEQUErRzs7SUFDL0csZ0RBQXFGOztJQUdqRixnREFBMEM7Ozs7O0lBQzFDLHFEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERlZmF1bHRMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9sYXlvdXQuc2VydmljZSc7XHJcbmltcG9ydCB7IEFnZ3JlZ2F0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2FnZ3JlZ2F0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEJ1dHRvbkRlZmluaXRpb24sIFRvb2xiYXJBY3Rpb25QYXlsb2FkIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy9iYXNlLm1vZGVsJztcclxuaW1wb3J0IHsgVG9vbGJhckFjdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9lbnVtcy9iYXNlLmVudW0nO1xyXG5pbXBvcnQgeyBTdW1tYXJ5RXJyb3IgfSBmcm9tICcuLi9zaGFyZWQvdmFsaWRhdGlvbi92YWxpZGF0aW9uLm1vZGVsJztcclxuaW1wb3J0IHsgS2V5Q29uc3QgfSBmcm9tICcuLi9zaGFyZWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2RlZmF1bHQtdG9vbGJhcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdG9vbGJhci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0VG9vbGJhckNvbXBvbmVudCB7XHJcbiAgICBAVmlld0NoaWxkKCdlcnJvckNvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBlcnJvckNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ2Vycm9yVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgZXJyb3JUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgbGF5b3V0U2VydmljZTogRGVmYXVsdExheW91dFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfYWdncmVnYXRvclNlcnZpY2U6IEFnZ3JlZ2F0b3JTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9hZ2dyZWdhdG9yU2VydmljZS5zdWJzY3JpYmUoS2V5Q29uc3QuUGFnZUNoYW5nZWQsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JDb250YWluZXIuY2xlYXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkJ1dHRvbkNsaWNrZWQobG9hZGVkQ2FsbGJhY2s6IEZ1bmN0aW9uLCBpdGVtOiBCdXR0b25EZWZpbml0aW9uKSB7XHJcbiAgICAgICAgbGV0IHBheWxvYWQgPSBuZXcgVG9vbGJhckFjdGlvblBheWxvYWQoeyBhY3Rpb246IGl0ZW0uYWN0aW9uLCBsb2FkZWRDYWxsYmFjazogbG9hZGVkQ2FsbGJhY2sgfSk7XHJcbiAgICAgICAgaWYgKGl0ZW0uYWN0aW9uID09PSBUb29sYmFyQWN0aW9uLlNhdmUpIHtcclxuICAgICAgICAgICAgcGF5bG9hZC5jYWxsYmFjayA9IChlcnJvcnM6IFN1bW1hcnlFcnJvcltdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ29udGFpbmVyLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLmVycm9yVGVtcGxhdGUsIHsgZXJyb3JzOiBlcnJvcnMgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2FnZ3JlZ2F0b3JTZXJ2aWNlLnB1Ymxpc2goJ1Rvb2xiYXJCdXR0b25DbGlja2VkJywgcGF5bG9hZCk7XHJcbiAgICB9XHJcbn1cclxuIl19