/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MockData, Audit } from '../models';
export class FileViewModel extends Audit {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
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
export class FileRequest extends MockData {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    FileRequest.prototype.items;
    /** @type {?} */
    FileRequest.prototype.others;
    /** @type {?} */
    FileRequest.prototype.createdBy;
}
export class FileResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.items = [];
        Object.assign(this, init);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2ZpbGUvZmlsZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUMsTUFBTSxPQUFPLGFBQWMsU0FBUSxLQUFLOzs7O0lBTXBDLFlBQVksSUFBNkI7UUFDckMsS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7OztJQVRHLDJCQUFZOztJQUNaLDZCQUFjOztJQUNkLDRCQUFhOztJQUNiLDZCQUFjOztJQUNkLDZCQUFjOztBQU9sQixNQUFNLE9BQU8sV0FBWSxTQUFRLFFBQXNCOzs7O0lBSW5ELFlBQVksSUFBMkI7UUFDbkMsS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7OztJQVBHLDRCQUF1Qjs7SUFDdkIsNkJBQXlCOztJQUN6QixnQ0FBa0I7O0FBT3RCLE1BQU0sT0FBTyxZQUFZOzs7O0lBTXJCLFlBQVksSUFBNEI7UUFEeEMsVUFBSyxHQUFvQixFQUFFLENBQUM7UUFFeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKOzs7SUFSRyw0QkFBYzs7SUFDZCw4QkFBaUI7O0lBQ2pCLCtCQUFpQjs7SUFDakIsb0NBQXNCOztJQUN0Qiw2QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2NrRGF0YSwgQXVkaXQgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVWaWV3TW9kZWwgZXh0ZW5kcyBBdWRpdCB7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBzcmM/OiBzdHJpbmc7XHJcbiAgICB0eXBlPzogc3RyaW5nO1xyXG4gICAgc2l6ZT86IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEZpbGVWaWV3TW9kZWw+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVJlcXVlc3QgZXh0ZW5kcyBNb2NrRGF0YTxGaWxlUmVzcG9uc2U+IHtcclxuICAgIGl0ZW1zOiBGaWxlVmlld01vZGVsW107XHJcbiAgICBvdGhlcnM/OiBGaWxlVmlld01vZGVsW107XHJcbiAgICBjcmVhdGVkQnk6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEZpbGVSZXF1ZXN0Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVSZXNwb25zZSB7XHJcbiAgICBjb2RlPzogc3RyaW5nO1xyXG4gICAgc3RhdHVzPzogYm9vbGVhbjtcclxuICAgIG1lc3NhZ2U/OiBzdHJpbmc7XHJcbiAgICB0b3RhbFJlY29yZHM/OiBudW1iZXI7XHJcbiAgICBpdGVtczogRmlsZVZpZXdNb2RlbFtdID0gW107XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxGaWxlUmVzcG9uc2U+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufSJdfQ==