/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { MockData } from '../models';
var FileViewModel = /** @class */ (function () {
    function FileViewModel(init) {
        Object.assign(this, init);
    }
    return FileViewModel;
}());
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
    FileResponse.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2ZpbGUvZmlsZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFckM7SUFNSSx1QkFBWSxJQUE2QjtRQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQzs7OztJQVJHLDJCQUFZOztJQUNaLDZCQUFjOztJQUNkLDRCQUFhOztJQUNiLDZCQUFjOztJQUNkLDZCQUFjOztBQU1sQjtJQUFpQyx1Q0FBc0I7SUFJbkQscUJBQVksSUFBMkI7UUFBdkMsWUFDSSxpQkFBTyxTQUVWO1FBREcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBQzlCLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFSRCxDQUFpQyxRQUFRLEdBUXhDOzs7O0lBUEcsNEJBQXVCOztJQUN2Qiw2QkFBeUI7O0lBQ3pCLGdDQUFrQjs7QUFPdEI7SUFLSSxzQkFBWSxJQUE0QjtRQUR4QyxVQUFLLEdBQW9CLEVBQUUsQ0FBQztRQUV4QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQzs7OztJQVBHLDRCQUFjOztJQUNkLDhCQUFpQjs7SUFDakIsK0JBQWlCOztJQUNqQiw2QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2NrRGF0YSB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVZpZXdNb2RlbCB7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBzcmM/OiBzdHJpbmc7XHJcbiAgICB0eXBlPzogc3RyaW5nO1xyXG4gICAgc2l6ZT86IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEZpbGVWaWV3TW9kZWw+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVSZXF1ZXN0IGV4dGVuZHMgTW9ja0RhdGE8RmlsZVJlc3BvbnNlPiB7XHJcbiAgICBpdGVtczogRmlsZVZpZXdNb2RlbFtdO1xyXG4gICAgb3RoZXJzPzogRmlsZVZpZXdNb2RlbFtdO1xyXG4gICAgY3JlYXRlZEJ5OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxGaWxlUmVxdWVzdD4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlUmVzcG9uc2Uge1xyXG4gICAgY29kZT86IHN0cmluZztcclxuICAgIHN0YXR1cz86IGJvb2xlYW47XHJcbiAgICBtZXNzYWdlPzogc3RyaW5nO1xyXG4gICAgaXRlbXM6IEZpbGVWaWV3TW9kZWxbXSA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8RmlsZVJlc3BvbnNlPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn0iXX0=