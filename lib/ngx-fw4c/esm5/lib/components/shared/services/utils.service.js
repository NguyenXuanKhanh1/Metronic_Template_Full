/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { ObjectChange } from '../models/base.model';
import { ChangeType } from '../enums/base.enum';
import * as i0 from "@angular/core";
var UtilityService = /** @class */ (function () {
    function UtilityService() {
    }
    /**
     * @param {?} valueRef
     * @param {?=} lowerCase
     * @return {?}
     */
    UtilityService.prototype.getField = /**
     * @param {?} valueRef
     * @param {?=} lowerCase
     * @return {?}
     */
    function (valueRef, lowerCase) {
        if (!valueRef) {
            return '';
        }
        if (!lowerCase) {
            return valueRef[0].toString().toUpperCase() + valueRef.substring(1, valueRef.length);
        }
        else {
            return valueRef[0].toString().toLowerCase() + valueRef.substring(1, valueRef.length);
        }
    };
    /**
     * @param {?} text
     * @param {?=} lowerCase
     * @return {?}
     */
    UtilityService.prototype.toPascalCase = /**
     * @param {?} text
     * @param {?=} lowerCase
     * @return {?}
     */
    function (text, lowerCase) {
        if (!text) {
            return '';
        }
        if (!lowerCase) {
            return text[0].toString().toUpperCase() + text.substring(1, text.length);
        }
        else {
            return text[0].toString().toLowerCase() + text.substring(1, text.length);
        }
    };
    /**
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    UtilityService.prototype.compareObjects = /**
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    function (source, target) {
        var e_1, _a;
        /** @type {?} */
        var changes = [];
        /** @type {?} */
        var sourceProperties = Object.getOwnPropertyNames(source);
        /** @type {?} */
        var targetProperties = Object.getOwnPropertyNames(target);
        /** @type {?} */
        var addedProperties = targetProperties.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return sourceProperties.indexOf(x) < 0; }));
        /** @type {?} */
        var removedProperties = sourceProperties.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return targetProperties.indexOf(x) < 0; }));
        /** @type {?} */
        var modifiedProperties = sourceProperties.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return removedProperties.indexOf(x) < 0; }));
        try {
            for (var modifiedProperties_1 = tslib_1.__values(modifiedProperties), modifiedProperties_1_1 = modifiedProperties_1.next(); !modifiedProperties_1_1.done; modifiedProperties_1_1 = modifiedProperties_1.next()) {
                var property = modifiedProperties_1_1.value;
                if (!_.isEqual(source[property], target[property])) {
                    changes.push(new ObjectChange({
                        propertyName: property,
                        changeType: ChangeType.Update,
                        oldValue: source[property],
                        newValue: target[property]
                    }));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (modifiedProperties_1_1 && !modifiedProperties_1_1.done && (_a = modifiedProperties_1.return)) _a.call(modifiedProperties_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        changes.push.apply(changes, tslib_1.__spread(addedProperties.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return new ObjectChange({
            propertyName: x,
            changeType: ChangeType.Add,
            oldValue: target[x],
            newValue: target[x]
        }); }))));
        changes.push.apply(changes, tslib_1.__spread(removedProperties.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return new ObjectChange({
            propertyName: x,
            changeType: ChangeType.Delete,
            oldValue: source[x],
            newValue: source[x]
        }); }))));
        return changes;
    };
    UtilityService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ UtilityService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(); }, token: UtilityService, providedIn: "root" });
    return UtilityService;
}());
export { UtilityService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRWhEO0lBQUE7S0EyREM7Ozs7OztJQXpEVSxpQ0FBUTs7Ozs7SUFBZixVQUFnQixRQUFnQixFQUFFLFNBQW1CO1FBQ2pELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxPQUFPLEVBQUUsQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNaLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4RjthQUFNO1lBQ0gsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hGO0lBQ0wsQ0FBQzs7Ozs7O0lBRU0scUNBQVk7Ozs7O0lBQW5CLFVBQW9CLElBQVksRUFBRSxTQUFtQjtRQUNqRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsT0FBTyxFQUFFLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDWixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUs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aCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JqZWN0Q2hhbmdlIH0gZnJvbSAnLi4vbW9kZWxzL2Jhc2UubW9kZWwnO1xyXG5pbXBvcnQgeyBDaGFuZ2VUeXBlIH0gZnJvbSAnLi4vZW51bXMvYmFzZS5lbnVtJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBVdGlsaXR5U2VydmljZSB7XHJcbiAgICBwdWJsaWMgZ2V0RmllbGQodmFsdWVSZWY6IHN0cmluZywgbG93ZXJDYXNlPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZVJlZikge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbG93ZXJDYXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVJlZlswXS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZVJlZi5zdWJzdHJpbmcoMSwgdmFsdWVSZWYubGVuZ3RoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVSZWZbMF0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICsgdmFsdWVSZWYuc3Vic3RyaW5nKDEsIHZhbHVlUmVmLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1Bhc2NhbENhc2UodGV4dDogc3RyaW5nLCBsb3dlckNhc2U/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXRleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWxvd2VyQ2FzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dFswXS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkgKyB0ZXh0LnN1YnN0cmluZygxLCB0ZXh0Lmxlbmd0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRleHRbMF0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICsgdGV4dC5zdWJzdHJpbmcoMSwgdGV4dC5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcGFyZU9iamVjdHMoc291cmNlOiBhbnksIHRhcmdldDogYW55KTogT2JqZWN0Q2hhbmdlW10ge1xyXG4gICAgICAgIGxldCBjaGFuZ2VzOiBPYmplY3RDaGFuZ2VbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZVByb3BlcnRpZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFByb3BlcnRpZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IGFkZGVkUHJvcGVydGllcyA9IHRhcmdldFByb3BlcnRpZXMuZmlsdGVyKHggPT4gc291cmNlUHJvcGVydGllcy5pbmRleE9mKHgpIDwgMCk7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlZFByb3BlcnRpZXMgPSBzb3VyY2VQcm9wZXJ0aWVzLmZpbHRlcih4ID0+IHRhcmdldFByb3BlcnRpZXMuaW5kZXhPZih4KSA8IDApO1xyXG4gICAgICAgIGNvbnN0IG1vZGlmaWVkUHJvcGVydGllcyA9IHNvdXJjZVByb3BlcnRpZXMuZmlsdGVyKHggPT4gcmVtb3ZlZFByb3BlcnRpZXMuaW5kZXhPZih4KSA8IDApO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBvZiBtb2RpZmllZFByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgaWYgKCFfLmlzRXF1YWwoc291cmNlW3Byb3BlcnR5XSwgdGFyZ2V0W3Byb3BlcnR5XSkpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZXMucHVzaChuZXcgT2JqZWN0Q2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVR5cGU6IENoYW5nZVR5cGUuVXBkYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBzb3VyY2VbcHJvcGVydHldLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB0YXJnZXRbcHJvcGVydHldXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoYW5nZXMucHVzaCguLi5hZGRlZFByb3BlcnRpZXMubWFwKHggPT4gbmV3IE9iamVjdENoYW5nZSh7XHJcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogeCxcclxuICAgICAgICAgICAgY2hhbmdlVHlwZTogQ2hhbmdlVHlwZS5BZGQsXHJcbiAgICAgICAgICAgIG9sZFZhbHVlOiB0YXJnZXRbeF0sXHJcbiAgICAgICAgICAgIG5ld1ZhbHVlOiB0YXJnZXRbeF1cclxuICAgICAgICB9KSkpO1xyXG5cclxuICAgICAgICBjaGFuZ2VzLnB1c2goLi4ucmVtb3ZlZFByb3BlcnRpZXMubWFwKHggPT4gbmV3IE9iamVjdENoYW5nZSh7XHJcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogeCxcclxuICAgICAgICAgICAgY2hhbmdlVHlwZTogQ2hhbmdlVHlwZS5EZWxldGUsXHJcbiAgICAgICAgICAgIG9sZFZhbHVlOiBzb3VyY2VbeF0sXHJcbiAgICAgICAgICAgIG5ld1ZhbHVlOiBzb3VyY2VbeF1cclxuICAgICAgICB9KSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBjaGFuZ2VzO1xyXG4gICAgfVxyXG59Il19