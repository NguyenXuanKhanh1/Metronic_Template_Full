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
                    name: 'cembedVideo'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2VtYmVkLXZpZGVvLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9mb3JtYXR0ZXIvb2VtYmVkLXZpZGVvLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQ7SUFLSSx5QkFDWSxTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQy9CLENBQUM7Ozs7O0lBRUwsbUNBQVM7Ozs7SUFBVCxVQUFVLElBQVM7O1lBQ1gsTUFBTSxHQUFHLElBQUk7O1lBQ1gsdUJBQXVCLEdBQUcsSUFBSSxNQUFNLENBQUMscUNBQXFDLEVBQUUsSUFBSSxDQUFDOztZQUNuRix1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2hFLElBQUksdUJBQXVCLElBQUksdUJBQXVCLENBQUMsTUFBTSxFQUFFOztnQkFDckQsVUFBVSxvQkFBTyx1QkFBdUIsQ0FBQztZQUMvQyxPQUFPLHVCQUF1QixFQUFFO2dCQUM1Qix1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdELElBQUksdUJBQXVCLElBQUksdUJBQXVCLENBQUMsTUFBTSxFQUFFO29CQUMzRCxVQUFVLENBQUMsSUFBSSxPQUFmLFVBQVUsbUJBQVMsdUJBQXVCLEdBQUU7aUJBQy9DO2FBQ0o7O2dCQUVLLFNBQVMsR0FBRyxVQUFVLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsR0FBRzs7b0JBQzFCLEtBQUssR0FBRyx5Q0FBeUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOztvQkFDM0QsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7O29CQUNwQixRQUFRLEdBQUcsaURBQThDLFNBQVMsdUZBQStFO2dCQUN2SixPQUFPLFFBQVEsQ0FBQztZQUNwQixDQUFDLEVBQUM7WUFFRixTQUFTLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsR0FBRztnQkFDakIsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEQsQ0FBQyxFQUFDLENBQUM7U0FDTjtRQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDOztnQkFuQ0osSUFBSSxTQUFDO29CQUNGLElBQUksRUFBRSxhQUFhO2lCQUN0Qjs7OztnQkFKUSxZQUFZOztJQXNDckIsc0JBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQWhDWSxlQUFlOzs7Ozs7SUFFcEIsb0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdjZW1iZWRWaWRlbydcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDZW1iZWRWaWRlb1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcclxuICAgICkgeyB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHRleHQ6IGFueSkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0ZXh0O1xyXG4gICAgICAgIGNvbnN0IGV4dHJhY3RPZW1iZWRUYWdQYXR0ZXJuID0gbmV3IFJlZ0V4cCgnPFxccypvZW1iZWRbXj5dKj4uKj88XFxzKlxcL1xccypvZW1iZWQ+JywgJ2dtJyk7XHJcbiAgICAgICAgbGV0IGV4dHJhY3RPZW1iZWRUYWdzUmVzdWx0ID0gZXh0cmFjdE9lbWJlZFRhZ1BhdHRlcm4uZXhlYyh0ZXh0KTtcclxuICAgICAgICBpZiAoZXh0cmFjdE9lbWJlZFRhZ3NSZXN1bHQgJiYgZXh0cmFjdE9lbWJlZFRhZ3NSZXN1bHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9lbWJlZFRhZ3MgPSBbLi4uZXh0cmFjdE9lbWJlZFRhZ3NSZXN1bHRdO1xyXG4gICAgICAgICAgICB3aGlsZSAoZXh0cmFjdE9lbWJlZFRhZ3NSZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGV4dHJhY3RPZW1iZWRUYWdzUmVzdWx0ID0gZXh0cmFjdE9lbWJlZFRhZ1BhdHRlcm4uZXhlYyh0ZXh0KTtcclxuICAgICAgICAgICAgICAgIGlmIChleHRyYWN0T2VtYmVkVGFnc1Jlc3VsdCAmJiBleHRyYWN0T2VtYmVkVGFnc1Jlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBvZW1iZWRUYWdzLnB1c2goLi4uZXh0cmFjdE9lbWJlZFRhZ3NSZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2aWRlb1RhZ3MgPSBvZW1iZWRUYWdzLm1hcCh0YWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSAvKD86bVxcLik/eW91dHViZVxcLmNvbVxcL3dhdGNoXFw/dj0oW1xcdy1dKykvLmV4ZWModGFnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvTGluayA9IG1hdGNoWzFdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmlkZW9UYWcgPSBgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvTGlua31cIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWFcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+YDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2aWRlb1RhZztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2aWRlb1RhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGV4dC5yZXBsYWNlKGV4dHJhY3RPZW1iZWRUYWdQYXR0ZXJuLCB0YWcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChyZXN1bHQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==