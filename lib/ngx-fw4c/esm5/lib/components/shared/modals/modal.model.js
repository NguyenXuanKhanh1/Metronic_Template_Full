/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseTemplate } from '../models';
var LoadingViewModel = /** @class */ (function () {
    function LoadingViewModel(init) {
        this.threshold = 250;
        this.timeout = 999999;
        Object.assign(this, init);
    }
    return LoadingViewModel;
}());
export { LoadingViewModel };
if (false) {
    /** @type {?} */
    LoadingViewModel.prototype.threshold;
    /** @type {?} */
    LoadingViewModel.prototype.timeout;
    /** @type {?} */
    LoadingViewModel.prototype.template;
    /** @type {?} */
    LoadingViewModel.prototype.loadingText;
}
var NotificationViewModel = /** @class */ (function () {
    function NotificationViewModel(init) {
        Object.assign(this, init);
    }
    return NotificationViewModel;
}());
export { NotificationViewModel };
if (false) {
    /** @type {?} */
    NotificationViewModel.prototype.center;
    /** @type {?} */
    NotificationViewModel.prototype.title;
    /** @type {?} */
    NotificationViewModel.prototype.customSize;
    /** @type {?} */
    NotificationViewModel.prototype.ignoreBackdropClick;
    /** @type {?} */
    NotificationViewModel.prototype.message;
    /** @type {?} */
    NotificationViewModel.prototype.btnTitle;
    /** @type {?} */
    NotificationViewModel.prototype.callback;
    /** @type {?} */
    NotificationViewModel.prototype.autoClose;
}
var ConfirmViewModel = /** @class */ (function () {
    function ConfirmViewModel(init) {
        Object.assign(this, init);
    }
    return ConfirmViewModel;
}());
export { ConfirmViewModel };
if (false) {
    /** @type {?} */
    ConfirmViewModel.prototype.center;
    /** @type {?} */
    ConfirmViewModel.prototype.title;
    /** @type {?} */
    ConfirmViewModel.prototype.icon;
    /** @type {?} */
    ConfirmViewModel.prototype.customSize;
    /** @type {?} */
    ConfirmViewModel.prototype.ignoreBackdropClick;
    /** @type {?} */
    ConfirmViewModel.prototype.message;
    /** @type {?} */
    ConfirmViewModel.prototype.isDeleted;
    /** @type {?} */
    ConfirmViewModel.prototype.btnAcceptTitle;
    /** @type {?} */
    ConfirmViewModel.prototype.btnCancelTitle;
    /** @type {?} */
    ConfirmViewModel.prototype.autoClose;
    /** @type {?} */
    ConfirmViewModel.prototype.acceptCallback;
    /** @type {?} */
    ConfirmViewModel.prototype.cancelCallback;
}
var TemplateViewModel = /** @class */ (function (_super) {
    tslib_1.__extends(TemplateViewModel, _super);
    function TemplateViewModel(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return TemplateViewModel;
}(BaseTemplate));
export { TemplateViewModel };
if (false) {
    /** @type {?} */
    TemplateViewModel.prototype.center;
    /** @type {?} */
    TemplateViewModel.prototype.title;
    /** @type {?} */
    TemplateViewModel.prototype.mode;
    /** @type {?} */
    TemplateViewModel.prototype.customSize;
    /** @type {?} */
    TemplateViewModel.prototype.ignoreBackdropClick;
    /** @type {?} */
    TemplateViewModel.prototype.request;
    /** @type {?} */
    TemplateViewModel.prototype.icon;
    /** @type {?} */
    TemplateViewModel.prototype.btnAcceptTitle;
    /** @type {?} */
    TemplateViewModel.prototype.btnCancelTitle;
    /** @type {?} */
    TemplateViewModel.prototype.autoClose;
    /** @type {?} */
    TemplateViewModel.prototype.acceptCallback;
    /** @type {?} */
    TemplateViewModel.prototype.cancelCallback;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9tb2RhbHMvbW9kYWwubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXpDO0lBS0UsMEJBQVksSUFBZ0M7UUFKNUMsY0FBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixZQUFPLEdBQVcsTUFBTSxDQUFDO1FBSXZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFSRCxJQVFDOzs7O0lBUEMscUNBQXdCOztJQUN4QixtQ0FBeUI7O0lBQ3pCLG9DQUFrQjs7SUFDbEIsdUNBQXFCOztBQU12QjtJQVNFLCtCQUFZLElBQXFDO1FBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFaRCxJQVlDOzs7O0lBWEMsdUNBQWlCOztJQUNqQixzQ0FBZTs7SUFDZiwyQ0FBb0I7O0lBQ3BCLG9EQUE4Qjs7SUFDOUIsd0NBQWlCOztJQUNqQix5Q0FBa0I7O0lBQ2xCLHlDQUFxQzs7SUFDckMsMENBQW9COztBQU10QjtJQWFFLDBCQUFZLElBQWdDO1FBQzFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7Ozs7SUFmQyxrQ0FBaUI7O0lBQ2pCLGlDQUFlOztJQUNmLGdDQUFjOztJQUNkLHNDQUFvQjs7SUFDcEIsK0NBQThCOztJQUM5QixtQ0FBaUI7O0lBQ2pCLHFDQUFvQjs7SUFDcEIsMENBQXdCOztJQUN4QiwwQ0FBd0I7O0lBQ3hCLHFDQUFvQjs7SUFDcEIsMENBQTJDOztJQUMzQywwQ0FBMkM7O0FBTTdDO0lBQXVDLDZDQUFZO0lBYWpELDJCQUFZLElBQWlDO1FBQTdDLFlBQ0UsaUJBQU8sU0FFUjtRQURDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUM1QixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBakJELENBQXVDLFlBQVksR0FpQmxEOzs7O0lBaEJDLG1DQUFpQjs7SUFDakIsa0NBQWU7O0lBQ2YsaUNBQWM7O0lBQ2QsdUNBQW9COztJQUNwQixnREFBOEI7O0lBQzlCLG9DQUFjOztJQUNkLGlDQUFjOztJQUNkLDJDQUF3Qjs7SUFDeEIsMkNBQXdCOztJQUN4QixzQ0FBb0I7O0lBQ3BCLDJDQUE0RTs7SUFDNUUsMkNBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZVRlbXBsYXRlIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nVmlld01vZGVsIHtcclxuICB0aHJlc2hvbGQ6IG51bWJlciA9IDI1MDtcclxuICB0aW1lb3V0OiBudW1iZXIgPSA5OTk5OTk7XHJcbiAgdGVtcGxhdGU/OiBzdHJpbmc7XHJcbiAgbG9hZGluZ1RleHQ/OiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8TG9hZGluZ1ZpZXdNb2RlbD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uVmlld01vZGVsIHtcclxuICBjZW50ZXI/OiBib29sZWFuO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIGN1c3RvbVNpemU/OiBzdHJpbmc7XHJcbiAgaWdub3JlQmFja2Ryb3BDbGljaz86IGJvb2xlYW47XHJcbiAgbWVzc2FnZT86IHN0cmluZztcclxuICBidG5UaXRsZT86IHN0cmluZztcclxuICBjYWxsYmFjaz86IChjbG9zZTogKCkgPT4gYW55KSA9PiBhbnk7XHJcbiAgYXV0b0Nsb3NlPzogYm9vbGVhbjtcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxOb3RpZmljYXRpb25WaWV3TW9kZWw+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpcm1WaWV3TW9kZWwge1xyXG4gIGNlbnRlcj86IGJvb2xlYW47XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgaWNvbj86IHN0cmluZztcclxuICBjdXN0b21TaXplPzogc3RyaW5nO1xyXG4gIGlnbm9yZUJhY2tkcm9wQ2xpY2s/OiBib29sZWFuO1xyXG4gIG1lc3NhZ2U/OiBzdHJpbmc7XHJcbiAgaXNEZWxldGVkPzogYm9vbGVhbjtcclxuICBidG5BY2NlcHRUaXRsZT86IHN0cmluZztcclxuICBidG5DYW5jZWxUaXRsZT86IHN0cmluZztcclxuICBhdXRvQ2xvc2U/OiBib29sZWFuO1xyXG4gIGFjY2VwdENhbGxiYWNrPzogKGNsb3NlOiAoKSA9PiBhbnkpID0+IGFueTtcclxuICBjYW5jZWxDYWxsYmFjaz86IChjbG9zZTogKCkgPT4gYW55KSA9PiBhbnk7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8Q29uZmlybVZpZXdNb2RlbD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVWaWV3TW9kZWwgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xyXG4gIGNlbnRlcj86IGJvb2xlYW47XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgbW9kZT86IHN0cmluZztcclxuICBjdXN0b21TaXplPzogc3RyaW5nO1xyXG4gIGlnbm9yZUJhY2tkcm9wQ2xpY2s/OiBib29sZWFuO1xyXG4gIHJlcXVlc3Q/OiBhbnk7XHJcbiAgaWNvbj86IHN0cmluZztcclxuICBidG5BY2NlcHRUaXRsZT86IHN0cmluZztcclxuICBidG5DYW5jZWxUaXRsZT86IHN0cmluZztcclxuICBhdXRvQ2xvc2U/OiBib29sZWFuO1xyXG4gIGFjY2VwdENhbGxiYWNrPzogKHJlc3BvbnNlPzogYW55LCBwcm92aWRlcj86IGFueSwgY2xvc2U/OiAoKSA9PiBhbnkpID0+IGFueTtcclxuICBjYW5jZWxDYWxsYmFjaz86IChyZXNwb25zZT86IGFueSwgcHJvdmlkZXI/OiBhbnksIGNsb3NlPzogKCkgPT4gYW55KSA9PiBhbnk7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8VGVtcGxhdGVWaWV3TW9kZWw+KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn0iXX0=