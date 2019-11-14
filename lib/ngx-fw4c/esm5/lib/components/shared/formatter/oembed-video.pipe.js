/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var CembedVideoPipe = /** @class */ (function () {
    function CembedVideoPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    CembedVideoPipe.prototype.transform = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        /** @type {?} */
        var result = text;
        /** @type {?} */
        var extractOembedTagPattern = new RegExp('<\s*oembed[^>]*>.*?<\s*\/\s*oembed>', 'gm');
        /** @type {?} */
        var extractOembedTagsResult = extractOembedTagPattern.exec(text);
        if (extractOembedTagsResult && extractOembedTagsResult.length) {
            /** @type {?} */
            var oembedTags = tslib_1.__spread(extractOembedTagsResult);
            while (extractOembedTagsResult) {
                extractOembedTagsResult = extractOembedTagPattern.exec(text);
                if (extractOembedTagsResult && extractOembedTagsResult.length) {
                    oembedTags.push.apply(oembedTags, tslib_1.__spread(extractOembedTagsResult));
                }
            }
            /** @type {?} */
            var videoTags = oembedTags.map((/**
             * @param {?} tag
             * @return {?}
             */
            function (tag) {
                /** @type {?} */
                var match = /(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/.exec(tag);
                /** @type {?} */
                var videoLink = match[1];
                /** @type {?} */
                var videoTag = "<iframe src=\"https://www.youtube.com/embed/" + videoLink + "\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>";
                return videoTag;
            }));
            videoTags.forEach((/**
             * @param {?} tag
             * @return {?}
             */
            function (tag) {
                result = text.replace(extractOembedTagPattern, tag);
            }));
        }
        return this.sanitizer.bypassSecurityTrustHtml(result);
    };
    CembedVideoPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'katanaEmbedVideo'
                },] }
    ];
    /** @nocollapse */
    CembedVideoPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return CembedVideoPipe;
}());
export { CembedVideoPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CembedVideoPipe.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2VtYmVkLXZpZGVvLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9mb3JtYXR0ZXIvb2VtYmVkLXZpZGVvLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQ7SUFLSSx5QkFDWSxTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQy9CLENBQUM7Ozs7O0lBRUwsbUNBQVM7Ozs7SUFBVCxVQUFVLElBQVM7O1lBQ1gsTUFBTSxHQUFHLElBQUk7O1lBQ1gsdUJBQXVCLEdBQUcsSUFBSSxNQUFNLENBQUMscUNBQXFDLEVBQUUsSUFBSSxDQUFDOztZQUNuRix1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2hFLElBQUksdUJBQXVCLElBQUksdUJBQXVCLENBQUMsTUFBTSxFQUFFOztnQkFDckQsVUFBVSxvQkFBTyx1QkFBdUIsQ0FBQztZQUMvQyxPQUFPLHVCQUF1QixFQUFFO2dCQUM1Qix1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdELElBQUksdUJBQXVCLElBQUksdUJBQXVCLENBQUMsTUFBTSxFQUFFO29CQUMzRCxVQUFVLENBQUMsSUFBSSxPQUFmLFVBQVUsbUJBQVMsdUJBQXVCLEdBQUU7aUJBQy9DO2FBQ0o7O2dCQUVLLFNBQVMsR0FBRyxVQUFVLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsR0FBRzs7b0JBQzFCLEtBQUssR0FBRyx5Q0FBeUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOztvQkFDM0QsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7O29CQUNwQixRQUFRLEdBQUcsaURBQThDLFNBQVMsdUZBQStFO2dCQUN2SixPQUFPLFFBQVEsQ0FBQztZQUNwQixDQUFDLEVBQUM7WUFFRixTQUFTLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsR0FBRztnQkFDakIsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEQsQ0FBQyxFQUFDLENBQUM7U0FDTjtRQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDOztnQkFuQ0osSUFBSSxTQUFDO29CQUNGLElBQUksRUFBRSxrQkFBa0I7aUJBQzNCOzs7O2dCQUpRLFlBQVk7O0lBc0NyQixzQkFBQztDQUFBLEFBcENELElBb0NDO1NBaENZLGVBQWU7Ozs7OztJQUVwQixvQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2thdGFuYUVtYmVkVmlkZW8nXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2VtYmVkVmlkZW9QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHRyYW5zZm9ybSh0ZXh0OiBhbnkpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGV4dDtcclxuICAgICAgICBjb25zdCBleHRyYWN0T2VtYmVkVGFnUGF0dGVybiA9IG5ldyBSZWdFeHAoJzxcXHMqb2VtYmVkW14+XSo+Lio/PFxccypcXC9cXHMqb2VtYmVkPicsICdnbScpO1xyXG4gICAgICAgIGxldCBleHRyYWN0T2VtYmVkVGFnc1Jlc3VsdCA9IGV4dHJhY3RPZW1iZWRUYWdQYXR0ZXJuLmV4ZWModGV4dCk7XHJcbiAgICAgICAgaWYgKGV4dHJhY3RPZW1iZWRUYWdzUmVzdWx0ICYmIGV4dHJhY3RPZW1iZWRUYWdzUmVzdWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBvZW1iZWRUYWdzID0gWy4uLmV4dHJhY3RPZW1iZWRUYWdzUmVzdWx0XTtcclxuICAgICAgICAgICAgd2hpbGUgKGV4dHJhY3RPZW1iZWRUYWdzUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBleHRyYWN0T2VtYmVkVGFnc1Jlc3VsdCA9IGV4dHJhY3RPZW1iZWRUYWdQYXR0ZXJuLmV4ZWModGV4dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXh0cmFjdE9lbWJlZFRhZ3NSZXN1bHQgJiYgZXh0cmFjdE9lbWJlZFRhZ3NSZXN1bHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2VtYmVkVGFncy5wdXNoKC4uLmV4dHJhY3RPZW1iZWRUYWdzUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdmlkZW9UYWdzID0gb2VtYmVkVGFncy5tYXAodGFnID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gLyg/Om1cXC4pP3lvdXR1YmVcXC5jb21cXC93YXRjaFxcP3Y9KFtcXHctXSspLy5leGVjKHRhZyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2aWRlb0xpbmsgPSBtYXRjaFsxXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvVGFnID0gYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0xpbmt9XCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPmA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlkZW9UYWc7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmlkZW9UYWdzLmZvckVhY2godGFnID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRleHQucmVwbGFjZShleHRyYWN0T2VtYmVkVGFnUGF0dGVybiwgdGFnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwocmVzdWx0KTtcclxuICAgIH1cclxufVxyXG4iXX0=