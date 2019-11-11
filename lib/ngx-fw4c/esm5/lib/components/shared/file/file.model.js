/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { MockData, Audit } from '../models';
var FileViewModel = /** @class */ (function (_super) {
    tslib_1.__extends(FileViewModel, _super);
    function FileViewModel(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return FileViewModel;
}(Audit));
export { FileViewModel };
if (false) {
    /** @type {?} */
    FileViewModel.prototype.id;
    /** @type {?} */
    FileViewModel.prototype.name;
    /** @type {?} */
    FileViewModel.prototype.src;
    /** @type {?} */
    FileViewModel.prototype.type;
    /** @type {?} */
    FileViewModel.prototype.size;
}
var FileRequest = /** @class */ (function (_super) {
    tslib_1.__extends(FileRequest, _super);
    function FileRequest(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return FileRequest;
}(MockData));
export { FileRequest };
if (false) {
    /** @type {?} */
    FileRequest.prototype.items;
    /** @type {?} */
    FileRequest.prototype.others;
    /** @type {?} */
    FileRequest.prototype.createdBy;
}
var FileResponse = /** @class */ (function () {
    function FileResponse(init) {
        this.items = [];
        Object.assign(this, init);
    }
    return FileResponse;
}());
export { FileResponse };
if (false) {
    /** @type {?} */
    FileResponse.prototype.code;
    /** @type {?} */
    FileResponse.prototype.status;
    /** @type {?} */
    FileResponse.prototype.message;
    /** @type {?} */
    FileResponse.prototype.totalRecords;
    /** @type {?} */
    FileResponse.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2ZpbGUvZmlsZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTVDO0lBQW1DLHlDQUFLO0lBTXBDLHVCQUFZLElBQTZCO1FBQXpDLFlBQ0ksaUJBQU8sU0FFVjtRQURHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUM5QixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBbUMsS0FBSyxHQVV2Qzs7OztJQVRHLDJCQUFZOztJQUNaLDZCQUFjOztJQUNkLDRCQUFhOztJQUNiLDZCQUFjOztJQUNkLDZCQUFjOztBQU9sQjtJQUFpQyx1Q0FBc0I7SUFJbkQscUJBQVksSUFBMkI7UUFBdkMsWUFDSSxpQkFBTyxTQUVWO1FBREcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBQzlCLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFSRCxDQUFpQyxRQUFRLEdBUXhDOzs7O0lBUEcsNEJBQXVCOztJQUN2Qiw2QkFBeUI7O0lBQ3pCLGdDQUFrQjs7QUFPdEI7SUFNSSxzQkFBWSxJQUE0QjtRQUR4QyxVQUFLLEdBQW9CLEVBQUUsQ0FBQztRQUV4QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQzs7OztJQVJHLDRCQUFjOztJQUNkLDhCQUFpQjs7SUFDakIsK0JBQWlCOztJQUNqQixvQ0FBc0I7O0lBQ3RCLDZCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vY2tEYXRhLCBBdWRpdCB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVZpZXdNb2RlbCBleHRlbmRzIEF1ZGl0IHtcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIHNyYz86IHN0cmluZztcclxuICAgIHR5cGU/OiBzdHJpbmc7XHJcbiAgICBzaXplPzogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8RmlsZVZpZXdNb2RlbD4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlUmVxdWVzdCBleHRlbmRzIE1vY2tEYXRhPEZpbGVSZXNwb25zZT4ge1xyXG4gICAgaXRlbXM6IEZpbGVWaWV3TW9kZWxbXTtcclxuICAgIG90aGVycz86IEZpbGVWaWV3TW9kZWxbXTtcclxuICAgIGNyZWF0ZWRCeTogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8RmlsZVJlcXVlc3Q+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVJlc3BvbnNlIHtcclxuICAgIGNvZGU/OiBzdHJpbmc7XHJcbiAgICBzdGF0dXM/OiBib29sZWFuO1xyXG4gICAgbWVzc2FnZT86IHN0cmluZztcclxuICAgIHRvdGFsUmVjb3Jkcz86IG51bWJlcjtcclxuICAgIGl0ZW1zOiBGaWxlVmlld01vZGVsW10gPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEZpbGVSZXNwb25zZT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59Il19