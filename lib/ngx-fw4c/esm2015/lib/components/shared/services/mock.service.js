/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from 'rxjs';
export class MockService {
    /**
     * @template T
     * @param {?} callback
     * @param {?=} response
     * @return {?}
     */
    verify(callback, response) {
        /** @type {?} */
        var mock = this.useMock();
        if (mock)
            return of(response ? response : (/** @type {?} */ ({})));
        return callback;
    }
    /**
     * @private
     * @return {?}
     */
    useMock() {
        /** @type {?} */
        var currentValue = JSON.parse(window.localStorage.getItem('mock'));
        if (!currentValue)
            return false;
        return currentValue;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvbW9jay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXRDLE1BQU0sT0FBTyxXQUFXOzs7Ozs7O0lBQ2IsTUFBTSxDQUFJLFFBQXVCLEVBQUUsUUFBWTs7WUFDOUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDekIsSUFBSSxJQUFJO1lBQUUsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLG1CQUFBLEVBQUUsRUFBSyxDQUFDLENBQUM7UUFDbkQsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTyxPQUFPOztZQUNQLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxZQUFZO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDaEMsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNb2NrU2VydmljZSB7XHJcbiAgICBwdWJsaWMgdmVyaWZ5PFQ+KGNhbGxiYWNrOiBPYnNlcnZhYmxlPFQ+LCByZXNwb25zZT86IFQpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgICAgICB2YXIgbW9jayA9IHRoaXMudXNlTW9jaygpO1xyXG4gICAgICAgIGlmIChtb2NrKSByZXR1cm4gb2YocmVzcG9uc2UgPyByZXNwb25zZSA6IHt9IGFzIFQpO1xyXG4gICAgICAgIHJldHVybiBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVzZU1vY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb2NrJykpO1xyXG4gICAgICAgIGlmICghY3VycmVudFZhbHVlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRWYWx1ZTtcclxuICAgIH1cclxufSJdfQ==