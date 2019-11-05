/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Inject } from '@angular/core';
import { AccordionLinkDirective } from './accordionlink.directive';
export class AccordionAnchorDirective {
    /**
     * @param {?} navlink
     */
    constructor(navlink) {
        this.navlink = navlink;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        this.navlink.toggle();
    }
}
AccordionAnchorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cAccordionToggle]'
            },] }
];
/** @nocollapse */
AccordionAnchorDirective.ctorParameters = () => [
    { type: AccordionLinkDirective, decorators: [{ type: Inject, args: [AccordionLinkDirective,] }] }
];
AccordionAnchorDirective.propDecorators = {
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AccordionAnchorDirective.prototype.navlink;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uYW5jaG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2FjY29yZGlvbi9hY2NvcmRpb25hbmNob3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFNbkUsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQUduQyxZQUE2QyxPQUErQjtRQUMxRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDOzs7OztJQUdNLE9BQU8sQ0FBQyxDQUFNO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7YUFDL0I7Ozs7WUFKUSxzQkFBc0IsdUJBU2YsTUFBTSxTQUFDLHNCQUFzQjs7O3NCQUkxQyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0lBTmpDLDJDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uTGlua0RpcmVjdGl2ZSB9IGZyb20gJy4vYWNjb3JkaW9ubGluay5kaXJlY3RpdmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbY0FjY29yZGlvblRvZ2dsZV0nXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQW5jaG9yRGlyZWN0aXZlIHtcclxuICBwcm90ZWN0ZWQgbmF2bGluazogQWNjb3JkaW9uTGlua0RpcmVjdGl2ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoIEBJbmplY3QoQWNjb3JkaW9uTGlua0RpcmVjdGl2ZSkgbmF2bGluazogQWNjb3JkaW9uTGlua0RpcmVjdGl2ZSkge1xyXG4gICAgdGhpcy5uYXZsaW5rID0gbmF2bGluaztcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICBwdWJsaWMgb25DbGljayhlOiBhbnkpIHtcclxuICAgIHRoaXMubmF2bGluay50b2dnbGUoKTtcclxuICB9XHJcbn1cclxuIl19