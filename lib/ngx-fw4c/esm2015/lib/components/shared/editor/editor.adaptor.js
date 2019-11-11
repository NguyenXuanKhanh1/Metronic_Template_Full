/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FileRequest, FileViewModel, FileResponse } from '../file/file.model';
export class EditorAdapter {
    /**
     * @param {?} loader
     * @param {?} fileService
     * @param {?} authenticationService
     */
    constructor(loader, fileService, authenticationService) {
        this.loader = loader;
        this.fileService = fileService;
        this.authenticationService = authenticationService;
    }
    /**
     * @return {?}
     */
    upload() {
        return this.loader.file.then((/**
         * @param {?} file
         * @return {?}
         */
        file => new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            /** @type {?} */
            var reader = new FileReader();
            reader.onloadend = (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const base64Data = reader.result.toString().split(',');
                if (base64Data.length < 2) {
                    return;
                }
                /** @type {?} */
                const base64FileData = base64Data[1];
                this.fileService.uploadFiles(new FileRequest({
                    items: [
                        new FileViewModel({
                            name: file.name,
                            src: base64FileData
                        })
                    ],
                    mockData: new FileResponse({
                        items: [new FileViewModel({
                                src: (/** @type {?} */ (reader.result)),
                                name: file.name
                            })]
                    })
                })).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                response => {
                    /** @type {?} */
                    var src = '';
                    if (response.items && response.items.length > 0) {
                        src = response.items[0].src;
                    }
                    resolve({ default: src });
                }), (/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => {
                    console.log(err);
                }));
            });
            reader.readAsDataURL(file);
        }))));
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    EditorAdapter.prototype.loader;
    /**
     * @type {?}
     * @protected
     */
    EditorAdapter.prototype.fileService;
    /**
     * @type {?}
     * @protected
     */
    EditorAdapter.prototype.authenticationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmFkYXB0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9lZGl0b3IvZWRpdG9yLmFkYXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzlFLE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUFLdEIsWUFBWSxNQUFXLEVBQUUsV0FBd0IsRUFBRSxxQkFBNEM7UUFDM0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFTSxNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLE9BQU87Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFOztnQkFDckQsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxTQUFTOzs7WUFBRyxHQUFHLEVBQUU7O3NCQUNkLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQ3RELElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3ZCLE9BQU87aUJBQ1Y7O3NCQUNLLGNBQWMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLFdBQVcsQ0FBQztvQkFDekMsS0FBSyxFQUFFO3dCQUNILElBQUksYUFBYSxDQUFDOzRCQUNkLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTs0QkFDZixHQUFHLEVBQUUsY0FBYzt5QkFDdEIsQ0FBQztxQkFDTDtvQkFDRCxRQUFRLEVBQUUsSUFBSSxZQUFZLENBQUM7d0JBQ3ZCLEtBQUssRUFBRSxDQUFDLElBQUksYUFBYSxDQUFDO2dDQUN0QixHQUFHLEVBQUUsbUJBQVEsTUFBTSxDQUFDLE1BQU0sRUFBQTtnQ0FDMUIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJOzZCQUNsQixDQUFDLENBQUM7cUJBQ04sQ0FBQztpQkFDTCxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLFFBQVEsQ0FBQyxFQUFFOzt3QkFDakIsR0FBRyxHQUFHLEVBQUU7b0JBQ1osSUFBSSxRQUFRLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDN0MsR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO3FCQUMvQjtvQkFDRCxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDOUIsQ0FBQzs7OztnQkFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsRUFBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFBLENBQUE7WUFDRCxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxFQUFDLENBQUM7SUFDUixDQUFDO0NBQ0o7Ozs7OztJQTdDRywrQkFBc0I7Ozs7O0lBQ3RCLG9DQUFtQzs7Ozs7SUFDbkMsOENBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsZVNlcnZpY2UgfSBmcm9tICcuLi9maWxlL2ZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEZpbGVSZXF1ZXN0LCBGaWxlVmlld01vZGVsLCBGaWxlUmVzcG9uc2UgfSBmcm9tICcuLi9maWxlL2ZpbGUubW9kZWwnO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2F1dGguc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9yQWRhcHRlciB7XHJcbiAgICBwcm90ZWN0ZWQgbG9hZGVyOiBhbnk7XHJcbiAgICBwcm90ZWN0ZWQgZmlsZVNlcnZpY2U6IEZpbGVTZXJ2aWNlO1xyXG4gICAgcHJvdGVjdGVkIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogYW55LCBmaWxlU2VydmljZTogRmlsZVNlcnZpY2UsIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5maWxlU2VydmljZSA9IGZpbGVTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlID0gYXV0aGVudGljYXRpb25TZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGxvYWQoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2FkZXIuZmlsZS50aGVuKGZpbGUgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlNjREYXRhID0gcmVhZGVyLnJlc3VsdC50b1N0cmluZygpLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFzZTY0RGF0YS5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0RmlsZURhdGEgPSBiYXNlNjREYXRhWzFdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlU2VydmljZS51cGxvYWRGaWxlcyhuZXcgRmlsZVJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBGaWxlVmlld01vZGVsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogYmFzZTY0RmlsZURhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vY2tEYXRhOiBuZXcgRmlsZVJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtuZXcgRmlsZVZpZXdNb2RlbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IDxzdHJpbmc+cmVhZGVyLnJlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSkpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNyYyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5pdGVtcyAmJiByZXNwb25zZS5pdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYyA9IHJlc3BvbnNlLml0ZW1zWzBdLnNyYztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGRlZmF1bHQ6IHNyYyB9KTtcclxuICAgICAgICAgICAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG59Il19