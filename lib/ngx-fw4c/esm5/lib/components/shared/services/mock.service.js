/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from 'rxjs';
var MockService = /** @class */ (function () {
    function MockService() {
    }
    /**
     * @template T
     * @param {?} callback
     * @param {?=} response
     * @return {?}
     */
    MockService.prototype.verify = /**
     * @template T
     * @param {?} callback
     * @param {?=} response
     * @return {?}
     */
    function (callback, response) {
        /** @type {?} */
        var mock = this.useMock();
        if (mock)
            return of(response ? response : (/** @type {?} */ ({})));
        return callback;
    };
    /**
     * @private
     * @return {?}
     */
    MockService.prototype.useMock = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentValue = JSON.parse(window.localStorage.getItem('mock'));
        if (!currentValue)
            return false;
        return currentValue;
    };
    return MockService;
}());
export { MockService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvbW9jay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXRDO0lBQUE7SUFZQSxDQUFDOzs7Ozs7O0lBWFUsNEJBQU07Ozs7OztJQUFiLFVBQWlCLFFBQXVCLEVBQUUsUUFBWTs7WUFDOUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDekIsSUFBSSxJQUFJO1lBQUUsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLG1CQUFBLEVBQUUsRUFBSyxDQUFDLENBQUM7UUFDbkQsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTyw2QkFBTzs7OztJQUFmOztZQUNRLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxZQUFZO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDaEMsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vY2tTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyB2ZXJpZnk8VD4oY2FsbGJhY2s6IE9ic2VydmFibGU8VD4sIHJlc3BvbnNlPzogVCk6IE9ic2VydmFibGU8VD4ge1xyXG4gICAgICAgIHZhciBtb2NrID0gdGhpcy51c2VNb2NrKCk7XHJcbiAgICAgICAgaWYgKG1vY2spIHJldHVybiBvZihyZXNwb25zZSA/IHJlc3BvbnNlIDoge30gYXMgVCk7XHJcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXNlTW9jaygpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgY3VycmVudFZhbHVlID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vY2snKSk7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50VmFsdWUpIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlO1xyXG4gICAgfVxyXG59Il19