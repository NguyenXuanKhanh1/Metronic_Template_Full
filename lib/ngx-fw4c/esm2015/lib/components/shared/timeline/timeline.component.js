/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class TimelineComponent {
    constructor() {
        this.items = [];
    }
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
if (false) {
    /** @type {?} */
    TimelineComponent.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVNqRCxNQUFNLE9BQU8saUJBQWlCO0lBTjlCO1FBT2tCLFVBQUssR0FBb0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7OztZQVJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQix1aEJBQXdDOzthQUV6Qzs7O29CQUdFLEtBQUs7Ozs7SUFBTixrQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYWNraW5nR3JvdXAgfSBmcm9tICcuLi9tb2RlbHMvYmFzZS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2thdGFuYS10aW1lbGluZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVsaW5lLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90aW1lbGluZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGltZWxpbmVDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpdGVtczogVHJhY2tpbmdHcm91cFtdID0gW107XHJcbn1cclxuIl19