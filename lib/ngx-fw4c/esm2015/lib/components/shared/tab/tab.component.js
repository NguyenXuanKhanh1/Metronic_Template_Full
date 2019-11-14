/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { TabItemComponent } from './tab-item.component';
export class TabComponent {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this.change = new EventEmitter();
        this.displayMode = 'default';
        this.activeTabIndex = 0;
        this.clicked = false;
    }
    /**
     * @param {?} tabIndex
     * @param {?} tab
     * @return {?}
     */
    switchTab(tabIndex, tab) {
        if (this.activeTabIndex === tabIndex)
            return;
        this._changeDetectorRef.detectChanges();
        this.activeTabIndex = tabIndex;
        tab.index = tabIndex;
        this.change.emit(tab);
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-tabs',
                template: "<ul class=\"nav nav-tabs\" role=\"tablist\" [ngClass]=\"{'full-card': displayMode === 'full'}\">\r\n    <li class=\"nav-item\" *ngFor=\"let tab of tabs; let i = index\" [ngClass]=\"{ 'active': activeTabIndex === i }\">\r\n        <a class=\"nav-link\" [ngClass]=\"{ 'active': activeTabIndex === i }\" data-toggle=\"tab\" href=\"javascript:;\"\r\n            role=\"tab\" (click)=\"switchTab(i, tab)\"><i [ngClass]=\"tab.icon\" class=\"mr-1\"></i> {{tab.name}}</a>\r\n        <div class=\"slide\"></div>\r\n    </li>\r\n    <div class=\"ml-1 btn-more\">\r\n        <button (mouseover)=\"clicked = false\" class=\"btn btn-default\"><i class=\"fa fa-caret-down\"\r\n                aria-hidden=\"true\"></i></button>\r\n        <ul (mouseup)=\"clicked = true\" [hidden]=\"clicked\">\r\n            <li *ngFor=\"let tab of tabs; let i = index\">\r\n                <a class=\"nav-link\" [ngClass]=\"{ 'active': activeTabIndex === i }\" data-toggle=\"tab\" href=\"javascript:;\"\r\n                    role=\"tab\" (click)=\"switchTab(i, tab)\"><i [ngClass]=\"tab.icon\" class=\"mr-1\"></i> {{tab.name}}</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</ul>\r\n<div class=\"tab-content\">\r\n    <div *ngFor=\"let tab of tabs; let i = index\">\r\n        <ng-container *ngIf=\"activeTabIndex === i\">\r\n            <ng-container *ngTemplateOutlet=\"tab.template\"></ng-container>\r\n        </ng-container>\r\n    </div>\r\n</div>",
                styles: [".nav-tabs{border-bottom:0 solid #f8f9fa!important}.nav-tabs .nav-item{margin-bottom:-2px;min-width:143px}.nav-tabs .nav-item .nav-link{border-radius:1px;border-left:0 solid transparent;border-right:0 solid transparent;border-top:3px solid transparent;border-bottom:none;padding:.5rem 1.8rem;text-align:center;font-weight:500;transition:.2s;color:#495057;background:#fafafa;margin:0}.nav-tabs .nav-item .nav-link:hover{border:none;border-top:3px solid #338bf8;border-left:0 solid #dee2e6;border-right:0 solid #dee2e6;border-bottom:none;background:#fff}.nav-tabs .nav-item .nav-link.active{margin:0;background:#fff;color:#338bf8;border-top:3px solid #338bf8;border-left:0 solid #dee2e6;border-right:0 solid #dee2e6;transition:.2s}.nav-tabs .btn-more{display:none;position:relative}.nav-tabs .btn-more button{background-color:#fafafa;box-shadow:none;height:38px}.nav-tabs .btn-more button i{line-height:2}.nav-tabs .btn-more:hover ul{display:block}.nav-tabs .btn-more ul{display:none;position:absolute;width:150px;right:0;background:#fff;z-index:10;box-shadow:0 4px 8px 0 rgba(0,0,0,.15)}.nav-tabs .btn-more ul li{border:none}.nav-tabs .btn-more ul li a{border:none;color:#343a40}.nav-tabs .btn-more ul li a:focus,.nav-tabs .btn-more ul li a:hover{background-color:#fafafa;border-color:transparent;color:#338bf8;font-weight:500}.nav-tabs .btn-more ul li a.active{color:#338bf8;font-weight:500;background:#fff}.nav-tabs.full-card{background:#fafafa;margin-left:-1rem;margin-right:-1rem;margin-top:-1rem;border-bottom:4px solid #fafafa}@media (min-width:1380px) and (max-width:1820px){.nav-tabs .nav-item:nth-child(n+8){display:none}.nav-tabs .nav-item.active:nth-child(n+8){margin-left:auto!important;display:block}.nav-tabs .btn-more{display:block}.nav-tabs .btn-more ul li:nth-child(-n+7){display:none}}@media (min-width:1024px) and (max-width:1379px){.nav-tabs .nav-item:nth-child(n+6){display:none}.nav-tabs .nav-item.active:nth-child(n+6){margin-left:auto!important;display:block}.nav-tabs .btn-more{display:block}.nav-tabs .btn-more ul li:nth-child(-n+5){display:none}}@media (min-width:768px) and (max-width:1023px){.nav-tabs .nav-item:nth-child(n+4){display:none}.nav-tabs .nav-item.active:nth-child(n+4){margin-left:auto!important;display:block}.nav-tabs .btn-more{display:block}.nav-tabs .btn-more ul li:nth-child(-n+3){display:none}}@media (min-width:480px) and (max-width:767px){.nav-tabs .nav-item:nth-child(n+3){display:none}.nav-tabs .nav-item.active:nth-child(n+3){margin-left:auto!important;display:block}.nav-tabs .btn-more{display:block}.nav-tabs .btn-more ul li:nth-child(-n+2){display:none}}@media screen and (max-width:479px){.nav-tabs .nav-item:nth-child(n+2){display:none}.nav-tabs .nav-item.active:nth-child(n+2){margin-left:auto!important;display:block}.nav-tabs .btn-more{display:block}.nav-tabs .btn-more ul li:nth-child(-n+1){display:none}}"]
            }] }
];
/** @nocollapse */
TabComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
TabComponent.propDecorators = {
    tabs: [{ type: ContentChildren, args: [TabItemComponent,] }],
    change: [{ type: Output }],
    displayMode: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TabComponent.prototype.tabs;
    /** @type {?} */
    TabComponent.prototype.change;
    /** @type {?} */
    TabComponent.prototype.displayMode;
    /** @type {?} */
    TabComponent.prototype.activeTabIndex;
    /** @type {?} */
    TabComponent.prototype.clicked;
    /**
     * @type {?}
     * @private
     */
    TabComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3RhYi90YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGVBQWUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVF4RCxNQUFNLE9BQU8sWUFBWTs7OztJQVF2QixZQUNVLGtCQUFxQztRQUFyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBUDlCLFdBQU0sR0FBbUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3RCxnQkFBVyxHQUF1QixTQUFTLENBQUM7UUFFckQsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0IsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUk1QixDQUFDOzs7Ozs7SUFFRSxTQUFTLENBQUMsUUFBZ0IsRUFBRSxHQUFxQjtRQUN0RCxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssUUFBUTtZQUFFLE9BQU87UUFDN0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO1FBQy9CLEdBQUcsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLHk2Q0FBbUM7O2FBRXBDOzs7O1lBUHlFLGlCQUFpQjs7O21CQVV4RixlQUFlLFNBQUMsZ0JBQWdCO3FCQUNoQyxNQUFNOzBCQUNOLEtBQUs7Ozs7SUFGTiw0QkFBbUU7O0lBQ25FLDhCQUE2RTs7SUFDN0UsbUNBQTREOztJQUU1RCxzQ0FBa0M7O0lBQ2xDLCtCQUFnQzs7Ozs7SUFHOUIsMENBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENvbnRlbnRDaGlsZHJlbiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90YWItaXRlbS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrYXRhbmEtdGFicycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oVGFiSXRlbUNvbXBvbmVudCkgcHVibGljIHRhYnM6IFRhYkl0ZW1Db21wb25lbnRbXTtcclxuICBAT3V0cHV0KCkgcHVibGljIGNoYW5nZTogRXZlbnRFbWl0dGVyPFRhYkl0ZW1Db21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNwbGF5TW9kZTogJ2Z1bGwnIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xyXG5cclxuICBwdWJsaWMgYWN0aXZlVGFiSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGNsaWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHsgfVxyXG5cclxuICBwdWJsaWMgc3dpdGNoVGFiKHRhYkluZGV4OiBudW1iZXIsIHRhYjogVGFiSXRlbUNvbXBvbmVudCkge1xyXG4gICAgaWYgKHRoaXMuYWN0aXZlVGFiSW5kZXggPT09IHRhYkluZGV4KSByZXR1cm47XHJcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gdGFiSW5kZXg7XHJcbiAgICB0YWIuaW5kZXggPSB0YWJJbmRleDtcclxuICAgIHRoaXMuY2hhbmdlLmVtaXQodGFiKTtcclxuICB9XHJcbn1cclxuIl19