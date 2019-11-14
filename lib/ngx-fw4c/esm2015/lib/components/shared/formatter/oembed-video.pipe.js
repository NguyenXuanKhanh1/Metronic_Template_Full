/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class CembedVideoPipe {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    transform(text) {
        /** @type {?} */
        let result = text;
        /** @type {?} */
        const extractOembedTagPattern = new RegExp('<\s*oembed[^>]*>.*?<\s*\/\s*oembed>', 'gm');
        /** @type {?} */
        let extractOembedTagsResult = extractOembedTagPattern.exec(text);
        if (extractOembedTagsResult && extractOembedTagsResult.length) {
            /** @type {?} */
            const oembedTags = [...extractOembedTagsResult];
            while (extractOembedTagsResult) {
                extractOembedTagsResult = extractOembedTagPattern.exec(text);
                if (extractOembedTagsResult && extractOembedTagsResult.length) {
                    oembedTags.push(...extractOembedTagsResult);
                }
            }
            /** @type {?} */
            const videoTags = oembedTags.map((/**
             * @param {?} tag
             * @return {?}
             */
            tag => {
                /** @type {?} */
                const match = /(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/.exec(tag);
                /** @type {?} */
                const videoLink = match[1];
                /** @type {?} */
                const videoTag = `<iframe src="https://www.youtube.com/embed/${videoLink}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
                return videoTag;
            }));
            videoTags.forEach((/**
             * @param {?} tag
             * @return {?}
             */
            tag => {
                result = text.replace(extractOembedTagPattern, tag);
            }));
        }
        return this.sanitizer.bypassSecurityTrustHtml(result);
    }
}
CembedVideoPipe.decorators = [
    { type: Pipe, args: [{
                name: 'katanaEmbedVideo'
            },] }
];
/** @nocollapse */
CembedVideoPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CembedVideoPipe.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2VtYmVkLXZpZGVvLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9mb3JtYXR0ZXIvb2VtYmVkLXZpZGVvLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU16RCxNQUFNLE9BQU8sZUFBZTs7OztJQUN4QixZQUNZLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDL0IsQ0FBQzs7Ozs7SUFFTCxTQUFTLENBQUMsSUFBUzs7WUFDWCxNQUFNLEdBQUcsSUFBSTs7Y0FDWCx1QkFBdUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLENBQUM7O1lBQ25GLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEUsSUFBSSx1QkFBdUIsSUFBSSx1QkFBdUIsQ0FBQyxNQUFNLEVBQUU7O2tCQUNyRCxVQUFVLEdBQUcsQ0FBQyxHQUFHLHVCQUF1QixDQUFDO1lBQy9DLE9BQU8sdUJBQXVCLEVBQUU7Z0JBQzVCLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0QsSUFBSSx1QkFBdUIsSUFBSSx1QkFBdUIsQ0FBQyxNQUFNLEVBQUU7b0JBQzNELFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyxDQUFDO2lCQUMvQzthQUNKOztrQkFFSyxTQUFTLEdBQUcsVUFBVSxDQUFDLEdBQUc7Ozs7WUFBQyxHQUFHLENBQUMsRUFBRTs7c0JBQzdCLEtBQUssR0FBRyx5Q0FBeUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOztzQkFDM0QsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7O3NCQUNwQixRQUFRLEdBQUcsOENBQThDLFNBQVMsK0VBQStFO2dCQUN2SixPQUFPLFFBQVEsQ0FBQztZQUNwQixDQUFDLEVBQUM7WUFFRixTQUFTLENBQUMsT0FBTzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQixNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN4RCxDQUFDLEVBQUMsQ0FBQztTQUNOO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQUM7OztZQW5DSixJQUFJLFNBQUM7Z0JBQ0YsSUFBSSxFQUFFLGtCQUFrQjthQUMzQjs7OztZQUpRLFlBQVk7Ozs7Ozs7SUFRYixvQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2thdGFuYUVtYmVkVmlkZW8nXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2VtYmVkVmlkZW9QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHRyYW5zZm9ybSh0ZXh0OiBhbnkpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGV4dDtcclxuICAgICAgICBjb25zdCBleHRyYWN0T2VtYmVkVGFnUGF0dGVybiA9IG5ldyBSZWdFeHAoJzxcXHMqb2VtYmVkW14+XSo+Lio/PFxccypcXC9cXHMqb2VtYmVkPicsICdnbScpO1xyXG4gICAgICAgIGxldCBleHRyYWN0T2VtYmVkVGFnc1Jlc3VsdCA9IGV4dHJhY3RPZW1iZWRUYWdQYXR0ZXJuLmV4ZWModGV4dCk7XHJcbiAgICAgICAgaWYgKGV4dHJhY3RPZW1iZWRUYWdzUmVzdWx0ICYmIGV4dHJhY3RPZW1iZWRUYWdzUmVzdWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBvZW1iZWRUYWdzID0gWy4uLmV4dHJhY3RPZW1iZWRUYWdzUmVzdWx0XTtcclxuICAgICAgICAgICAgd2hpbGUgKGV4dHJhY3RPZW1iZWRUYWdzUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBleHRyYWN0T2VtYmVkVGFnc1Jlc3VsdCA9IGV4dHJhY3RPZW1iZWRUYWdQYXR0ZXJuLmV4ZWModGV4dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXh0cmFjdE9lbWJlZFRhZ3NSZXN1bHQgJiYgZXh0cmFjdE9lbWJlZFRhZ3NSZXN1bHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2VtYmVkVGFncy5wdXNoKC4uLmV4dHJhY3RPZW1iZWRUYWdzUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdmlkZW9UYWdzID0gb2VtYmVkVGFncy5tYXAodGFnID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gLyg/Om1cXC4pP3lvdXR1YmVcXC5jb21cXC93YXRjaFxcP3Y9KFtcXHctXSspLy5leGVjKHRhZyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2aWRlb0xpbmsgPSBtYXRjaFsxXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvVGFnID0gYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0xpbmt9XCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPmA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlkZW9UYWc7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmlkZW9UYWdzLmZvckVhY2godGFnID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRleHQucmVwbGFjZShleHRyYWN0T2VtYmVkVGFnUGF0dGVybiwgdGFnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwocmVzdWx0KTtcclxuICAgIH1cclxufVxyXG4iXX0=