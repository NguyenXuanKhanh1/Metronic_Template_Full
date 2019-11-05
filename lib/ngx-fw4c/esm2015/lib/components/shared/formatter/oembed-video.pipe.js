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
                name: 'cembedVideo'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2VtYmVkLXZpZGVvLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9mb3JtYXR0ZXIvb2VtYmVkLXZpZGVvLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU16RCxNQUFNLE9BQU8sZUFBZTs7OztJQUN4QixZQUNZLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDL0IsQ0FBQzs7Ozs7SUFFTCxTQUFTLENBQUMsSUFBUzs7WUFDWCxNQUFNLEdBQUcsSUFBSTs7Y0FDWCx1QkFBdUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLENBQUM7O1lBQ25GLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEUsSUFBSSx1QkFBdUIsSUFBSSx1QkFBdUIsQ0FBQyxNQUFNLEVBQUU7O2tCQUNyRCxVQUFVLEdBQUcsQ0FBQyxHQUFHLHVCQUF1QixDQUFDO1lBQy9DLE9BQU8sdUJBQXVCLEVBQUU7Z0JBQzVCLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0QsSUFBSSx1QkFBdUIsSUFBSSx1QkFBdUIsQ0FBQyxNQUFNLEVBQUU7b0JBQzNELFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyxDQUFDO2lCQUMvQzthQUNKOztrQkFFSyxTQUFTLEdBQUcsVUFBVSxDQUFDLEdBQUc7Ozs7WUFBQyxHQUFHLENBQUMsRUFBRTs7c0JBQzdCLEtBQUssR0FBRyx5Q0FBeUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOztzQkFDM0QsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7O3NCQUNwQixRQUFRLEdBQUcsOENBQThDLFNBQVMsK0VBQStFO2dCQUN2SixPQUFPLFFBQVEsQ0FBQztZQUNwQixDQUFDLEVBQUM7WUFFRixTQUFTLENBQUMsT0FBTzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQixNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN4RCxDQUFDLEVBQUMsQ0FBQztTQUNOO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQUM7OztZQW5DSixJQUFJLFNBQUM7Z0JBQ0YsSUFBSSxFQUFFLGFBQWE7YUFDdEI7Ozs7WUFKUSxZQUFZOzs7Ozs7O0lBUWIsb0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdjZW1iZWRWaWRlbydcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDZW1iZWRWaWRlb1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcclxuICAgICkgeyB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHRleHQ6IGFueSkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0ZXh0O1xyXG4gICAgICAgIGNvbnN0IGV4dHJhY3RPZW1iZWRUYWdQYXR0ZXJuID0gbmV3IFJlZ0V4cCgnPFxccypvZW1iZWRbXj5dKj4uKj88XFxzKlxcL1xccypvZW1iZWQ+JywgJ2dtJyk7XHJcbiAgICAgICAgbGV0IGV4dHJhY3RPZW1iZWRUYWdzUmVzdWx0ID0gZXh0cmFjdE9lbWJlZFRhZ1BhdHRlcm4uZXhlYyh0ZXh0KTtcclxuICAgICAgICBpZiAoZXh0cmFjdE9lbWJlZFRhZ3NSZXN1bHQgJiYgZXh0cmFjdE9lbWJlZFRhZ3NSZXN1bHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9lbWJlZFRhZ3MgPSBbLi4uZXh0cmFjdE9lbWJlZFRhZ3NSZXN1bHRdO1xyXG4gICAgICAgICAgICB3aGlsZSAoZXh0cmFjdE9lbWJlZFRhZ3NSZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGV4dHJhY3RPZW1iZWRUYWdzUmVzdWx0ID0gZXh0cmFjdE9lbWJlZFRhZ1BhdHRlcm4uZXhlYyh0ZXh0KTtcclxuICAgICAgICAgICAgICAgIGlmIChleHRyYWN0T2VtYmVkVGFnc1Jlc3VsdCAmJiBleHRyYWN0T2VtYmVkVGFnc1Jlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBvZW1iZWRUYWdzLnB1c2goLi4uZXh0cmFjdE9lbWJlZFRhZ3NSZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2aWRlb1RhZ3MgPSBvZW1iZWRUYWdzLm1hcCh0YWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSAvKD86bVxcLik/eW91dHViZVxcLmNvbVxcL3dhdGNoXFw/dj0oW1xcdy1dKykvLmV4ZWModGFnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvTGluayA9IG1hdGNoWzFdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmlkZW9UYWcgPSBgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvTGlua31cIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWFcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+YDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2aWRlb1RhZztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2aWRlb1RhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGV4dC5yZXBsYWNlKGV4dHJhY3RPZW1iZWRUYWdQYXR0ZXJuLCB0YWcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChyZXN1bHQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==