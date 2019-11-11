/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FileRequest, FileViewModel, FileResponse } from '../file/file.model';
var EditorAdapter = /** @class */ (function () {
    function EditorAdapter(loader, fileService, authenticationService) {
        this.loader = loader;
        this.fileService = fileService;
        this.authenticationService = authenticationService;
    }
    /**
     * @return {?}
     */
    EditorAdapter.prototype.upload = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.loader.file.then((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            /** @type {?} */
            var reader = new FileReader();
            reader.onloadend = (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var base64Data = reader.result.toString().split(',');
                if (base64Data.length < 2) {
                    return;
                }
                /** @type {?} */
                var base64FileData = base64Data[1];
                _this.fileService.uploadFiles(new FileRequest({
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
                function (response) {
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
                function (err) {
                    console.log(err);
                }));
            });
            reader.readAsDataURL(file);
        })); }));
    };
    return EditorAdapter;
}());
export { EditorAdapter };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmFkYXB0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9lZGl0b3IvZWRpdG9yLmFkYXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzlFO0lBS0ksdUJBQVksTUFBVyxFQUFFLFdBQXdCLEVBQUUscUJBQTRDO1FBQzNGLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRU0sOEJBQU07OztJQUFiO1FBQUEsaUJBa0NDO1FBakNHLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxPQUFPOzs7O1FBQUMsVUFBQyxPQUFPOztnQkFDakQsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxTQUFTOzs7WUFBRzs7b0JBQ1QsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDdEQsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDdkIsT0FBTztpQkFDVjs7b0JBQ0ssY0FBYyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxDQUFDO29CQUN6QyxLQUFLLEVBQUU7d0JBQ0gsSUFBSSxhQUFhLENBQUM7NEJBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJOzRCQUNmLEdBQUcsRUFBRSxjQUFjO3lCQUN0QixDQUFDO3FCQUNMO29CQUNELFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQzt3QkFDdkIsS0FBSyxFQUFFLENBQUMsSUFBSSxhQUFhLENBQUM7Z0NBQ3RCLEdBQUcsRUFBRSxtQkFBUSxNQUFNLENBQUMsTUFBTSxFQUFBO2dDQUMxQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7NkJBQ2xCLENBQUMsQ0FBQztxQkFDTixDQUFDO2lCQUNMLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7Z0JBQUMsVUFBQSxRQUFROzt3QkFDZCxHQUFHLEdBQUcsRUFBRTtvQkFDWixJQUFJLFFBQVEsQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUM3QyxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7cUJBQy9CO29CQUNELE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QixDQUFDOzs7O2dCQUFFLFVBQUMsR0FBRztvQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQixDQUFDLEVBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQSxDQUFBO1lBQ0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUMsRUFoQ21DLENBZ0NuQyxFQUFDLENBQUM7SUFDUixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDOzs7Ozs7O0lBN0NHLCtCQUFzQjs7Ozs7SUFDdEIsb0NBQW1DOzs7OztJQUNuQyw4Q0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWxlU2VydmljZSB9IGZyb20gJy4uL2ZpbGUvZmlsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRmlsZVJlcXVlc3QsIEZpbGVWaWV3TW9kZWwsIEZpbGVSZXNwb25zZSB9IGZyb20gJy4uL2ZpbGUvZmlsZS5tb2RlbCc7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JBZGFwdGVyIHtcclxuICAgIHByb3RlY3RlZCBsb2FkZXI6IGFueTtcclxuICAgIHByb3RlY3RlZCBmaWxlU2VydmljZTogRmlsZVNlcnZpY2U7XHJcbiAgICBwcm90ZWN0ZWQgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBhbnksIGZpbGVTZXJ2aWNlOiBGaWxlU2VydmljZSwgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmxvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmZpbGVTZXJ2aWNlID0gZmlsZVNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UgPSBhdXRoZW50aWNhdGlvblNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwbG9hZCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRlci5maWxlLnRoZW4oZmlsZSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NERhdGEgPSByZWFkZXIucmVzdWx0LnRvU3RyaW5nKCkuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgIGlmIChiYXNlNjREYXRhLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlNjRGaWxlRGF0YSA9IGJhc2U2NERhdGFbMV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVTZXJ2aWNlLnVwbG9hZEZpbGVzKG5ldyBGaWxlUmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEZpbGVWaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBiYXNlNjRGaWxlRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgbW9ja0RhdGE6IG5ldyBGaWxlUmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW25ldyBGaWxlVmlld01vZGVsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogPHN0cmluZz5yZWFkZXIucmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3JjID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLml0ZW1zICYmIHJlc3BvbnNlLml0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjID0gcmVzcG9uc2UuaXRlbXNbMF0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgZGVmYXVsdDogc3JjIH0pO1xyXG4gICAgICAgICAgICAgICAgfSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbn0iXX0=