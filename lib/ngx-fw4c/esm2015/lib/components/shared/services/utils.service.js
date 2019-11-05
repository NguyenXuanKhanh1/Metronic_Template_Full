/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { ObjectChange } from '../models/base.model';
import { ChangeType } from '../enums/base.enum';
import * as i0 from "@angular/core";
export class UtilityService {
    /**
     * @param {?} valueRef
     * @param {?=} lowerCase
     * @return {?}
     */
    getField(valueRef, lowerCase) {
        if (!valueRef) {
            return '';
        }
        if (!lowerCase) {
            return valueRef[0].toString().toUpperCase() + valueRef.substring(1, valueRef.length);
        }
        else {
            return valueRef[0].toString().toLowerCase() + valueRef.substring(1, valueRef.length);
        }
    }
    /**
     * @param {?} text
     * @param {?=} lowerCase
     * @return {?}
     */
    toPascalCase(text, lowerCase) {
        if (!text) {
            return '';
        }
        if (!lowerCase) {
            return text[0].toString().toUpperCase() + text.substring(1, text.length);
        }
        else {
            return text[0].toString().toLowerCase() + text.substring(1, text.length);
        }
    }
    /**
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    compareObjects(source, target) {
        /** @type {?} */
        let changes = [];
        /** @type {?} */
        const sourceProperties = Object.getOwnPropertyNames(source);
        /** @type {?} */
        const targetProperties = Object.getOwnPropertyNames(target);
        /** @type {?} */
        const addedProperties = targetProperties.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => sourceProperties.indexOf(x) < 0));
        /** @type {?} */
        const removedProperties = sourceProperties.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => targetProperties.indexOf(x) < 0));
        /** @type {?} */
        const modifiedProperties = sourceProperties.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => removedProperties.indexOf(x) < 0));
        for (let property of modifiedProperties) {
            if (!_.isEqual(source[property], target[property])) {
                changes.push(new ObjectChange({
                    propertyName: property,
                    changeType: ChangeType.Update,
                    oldValue: source[property],
                    newValue: target[property]
                }));
            }
        }
        changes.push(...addedProperties.map((/**
         * @param {?} x
         * @return {?}
         */
        x => new ObjectChange({
            propertyName: x,
            changeType: ChangeType.Add,
            oldValue: target[x],
            newValue: target[x]
        }))));
        changes.push(...removedProperties.map((/**
         * @param {?} x
         * @return {?}
         */
        x => new ObjectChange({
            propertyName: x,
            changeType: ChangeType.Delete,
            oldValue: source[x],
            newValue: source[x]
        }))));
        return changes;
    }
}
UtilityService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ UtilityService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(); }, token: UtilityService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFHaEQsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQUNoQixRQUFRLENBQUMsUUFBZ0IsRUFBRSxTQUFtQjtRQUNqRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsT0FBTyxFQUFFLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDWixPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEY7YUFBTTtZQUNILE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4RjtJQUNMLENBQUM7Ozs7OztJQUVNLFlBQVksQ0FBQyxJQUFZLEVBQUUsU0FBbUI7UUFDakQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVFO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUU7SUFDTCxDQUFDOzs7Ozs7SUFFTSxjQUFjLENBQUMsTUFBVyxFQUFFLE1BQVc7O1lBQ3RDLE9BQU8sR0FBbUIsRUFBRTs7Y0FDMUIsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQzs7Y0FDckQsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQzs7Y0FDckQsZUFBZSxHQUFHLGdCQUFnQixDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUM7O2NBQy9FLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUM7O2NBQ2pGLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUM7UUFFekYsS0FBSyxJQUFJLFFBQVEsSUFBSSxrQkFBa0IsRUFBRTtZQUNyQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUM7b0JBQzFCLFlBQVksRUFBRSxRQUFRO29CQUN0QixVQUFVLEVBQUUsVUFBVSxDQUFDLE1BQU07b0JBQzdCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDO29CQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQztpQkFDN0IsQ0FBQyxDQUFDLENBQUM7YUFDUDtTQUNKO1FBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLGVBQWUsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFlBQVksQ0FBQztZQUN0RCxZQUFZLEVBQUUsQ0FBQztZQUNmLFVBQVUsRUFBRSxVQUFVLENBQUMsR0FBRztZQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN0QixDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBRUwsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLGlCQUFpQixDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksWUFBWSxDQUFDO1lBQ3hELFlBQVksRUFBRSxDQUFDO1lBQ2YsVUFBVSxFQUFFLFVBQVUsQ0FBQyxNQUFNO1lBQzdCLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3RCLENBQUMsRUFBQyxDQUFDLENBQUM7UUFFTCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDOzs7WUExREosVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYmplY3RDaGFuZ2UgfSBmcm9tICcuLi9tb2RlbHMvYmFzZS5tb2RlbCc7XHJcbmltcG9ydCB7IENoYW5nZVR5cGUgfSBmcm9tICcuLi9lbnVtcy9iYXNlLmVudW0nO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFV0aWxpdHlTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBnZXRGaWVsZCh2YWx1ZVJlZjogc3RyaW5nLCBsb3dlckNhc2U/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXZhbHVlUmVmKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFsb3dlckNhc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlUmVmWzBdLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKSArIHZhbHVlUmVmLnN1YnN0cmluZygxLCB2YWx1ZVJlZi5sZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVJlZlswXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgKyB2YWx1ZVJlZi5zdWJzdHJpbmcoMSwgdmFsdWVSZWYubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvUGFzY2FsQ2FzZSh0ZXh0OiBzdHJpbmcsIGxvd2VyQ2FzZT86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdGV4dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbG93ZXJDYXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0WzBdLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKSArIHRleHQuc3Vic3RyaW5nKDEsIHRleHQubGVuZ3RoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dFswXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgKyB0ZXh0LnN1YnN0cmluZygxLCB0ZXh0Lmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21wYXJlT2JqZWN0cyhzb3VyY2U6IGFueSwgdGFyZ2V0OiBhbnkpOiBPYmplY3RDaGFuZ2VbXSB7XHJcbiAgICAgICAgbGV0IGNoYW5nZXM6IE9iamVjdENoYW5nZVtdID0gW107XHJcbiAgICAgICAgY29uc3Qgc291cmNlUHJvcGVydGllcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0UHJvcGVydGllcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgYWRkZWRQcm9wZXJ0aWVzID0gdGFyZ2V0UHJvcGVydGllcy5maWx0ZXIoeCA9PiBzb3VyY2VQcm9wZXJ0aWVzLmluZGV4T2YoeCkgPCAwKTtcclxuICAgICAgICBjb25zdCByZW1vdmVkUHJvcGVydGllcyA9IHNvdXJjZVByb3BlcnRpZXMuZmlsdGVyKHggPT4gdGFyZ2V0UHJvcGVydGllcy5pbmRleE9mKHgpIDwgMCk7XHJcbiAgICAgICAgY29uc3QgbW9kaWZpZWRQcm9wZXJ0aWVzID0gc291cmNlUHJvcGVydGllcy5maWx0ZXIoeCA9PiByZW1vdmVkUHJvcGVydGllcy5pbmRleE9mKHgpIDwgMCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHByb3BlcnR5IG9mIG1vZGlmaWVkUHJvcGVydGllcykge1xyXG4gICAgICAgICAgICBpZiAoIV8uaXNFcXVhbChzb3VyY2VbcHJvcGVydHldLCB0YXJnZXRbcHJvcGVydHldKSkge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlcy5wdXNoKG5ldyBPYmplY3RDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlVHlwZTogQ2hhbmdlVHlwZS5VcGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IHNvdXJjZVtwcm9wZXJ0eV0sXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IHRhcmdldFtwcm9wZXJ0eV1cclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hhbmdlcy5wdXNoKC4uLmFkZGVkUHJvcGVydGllcy5tYXAoeCA9PiBuZXcgT2JqZWN0Q2hhbmdlKHtcclxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiB4LFxyXG4gICAgICAgICAgICBjaGFuZ2VUeXBlOiBDaGFuZ2VUeXBlLkFkZCxcclxuICAgICAgICAgICAgb2xkVmFsdWU6IHRhcmdldFt4XSxcclxuICAgICAgICAgICAgbmV3VmFsdWU6IHRhcmdldFt4XVxyXG4gICAgICAgIH0pKSk7XHJcblxyXG4gICAgICAgIGNoYW5nZXMucHVzaCguLi5yZW1vdmVkUHJvcGVydGllcy5tYXAoeCA9PiBuZXcgT2JqZWN0Q2hhbmdlKHtcclxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiB4LFxyXG4gICAgICAgICAgICBjaGFuZ2VUeXBlOiBDaGFuZ2VUeXBlLkRlbGV0ZSxcclxuICAgICAgICAgICAgb2xkVmFsdWU6IHNvdXJjZVt4XSxcclxuICAgICAgICAgICAgbmV3VmFsdWU6IHNvdXJjZVt4XVxyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGNoYW5nZXM7XHJcbiAgICB9XHJcbn0iXX0=