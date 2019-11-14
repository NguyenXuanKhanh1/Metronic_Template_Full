/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
        this.items = [];
    }
    TimelineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-timeline',
                    template: "<div class=\"timeline-tracking\">\r\n  <div class=\"timeline-tracking-item\" *ngFor=\"let item of items\">\r\n    <div class=\"group-name\">{{item?.date | katanaDate}}</div>\r\n    <div class=\"group-inside\" *ngFor=\"let detail of item.details\">\r\n      <div class=\"body\">\r\n        <div class=\"dot\"></div>\r\n        <div class=\"content\" innerHTML=\"{{detail.description}}\"></div>\r\n        <div class=\"date-time-detail\">{{detail?.time | katanaTime}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [".timeline-tracking{position:relative}.timeline-tracking::before{content:\"\";position:absolute;top:0;left:8px;bottom:0;width:5px;background:#ddd}.timeline-tracking .timeline-tracking-item{margin-bottom:15px}.timeline-tracking .timeline-tracking-item .group-name{font-weight:500;font-size:14px;margin-bottom:10px;padding-left:45px}.timeline-tracking .timeline-tracking-item .group-inside{font-size:13px}.timeline-tracking .timeline-tracking-item .group-inside .body{position:relative;margin-bottom:15px;padding-right:30px;padding-left:45px;transition:.3s ease-in-out;cursor:pointer}.timeline-tracking .timeline-tracking-item .group-inside .body:hover{padding-left:60px}@media (max-width:991px){.timeline-tracking .timeline-tracking-item .group-inside .body:hover{background-color:unset!important;padding-left:45px!important}.timeline-tracking .timeline-tracking-item .group-inside .body:hover .dot{left:0!important}.timeline-tracking .timeline-tracking-item .group-inside .body:hover .content{font-weight:400!important}}.timeline-tracking .timeline-tracking-item .group-inside .body:hover .dot{left:20px}.timeline-tracking .timeline-tracking-item .group-inside .body:hover .content{font-weight:400}.timeline-tracking .timeline-tracking-item .group-inside .body .dot{width:20px;height:20px;border:5px solid green;background-color:#fff;border-radius:100%;position:absolute;left:0;top:0;transition:.3s ease-in-out}.timeline-tracking .timeline-tracking-item .group-inside .body .content{transition:.3s ease-in-out}.timeline-tracking .timeline-tracking-item .group-inside .body .content b{font-weight:500}.timeline-tracking .timeline-tracking-item .group-inside .body .date-time-detail{font-weight:700;position:absolute;right:0;top:0;transition:.3s ease-in-out}.content{white-space:pre-wrap;word-break:break-word}"]
                }] }
    ];
    TimelineComponent.propDecorators = {
        items: [{ type: Input }]
    };
    return TimelineComponent;
}());
export { TimelineComponent };
if (false) {
    /** @type {?} */
    TimelineComponent.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdqRDtJQUFBO1FBT2tCLFVBQUssR0FBb0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7O2dCQVJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQix1aEJBQXdDOztpQkFFekM7Ozt3QkFHRSxLQUFLOztJQUNSLHdCQUFDO0NBQUEsQUFSRCxJQVFDO1NBRlksaUJBQWlCOzs7SUFDNUIsa0NBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFja2luZ0dyb3VwIH0gZnJvbSAnLi4vbW9kZWxzL2Jhc2UubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrYXRhbmEtdGltZWxpbmUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGltZWxpbmUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBwdWJsaWMgaXRlbXM6IFRyYWNraW5nR3JvdXBbXSA9IFtdO1xyXG59XHJcbiJdfQ==