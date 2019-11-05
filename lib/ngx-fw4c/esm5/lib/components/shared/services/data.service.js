/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ChangeType } from '../enums/base.enum';
import { ObjectChange } from '../models/base.model';
import * as _ from 'lodash';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
var DataService = /** @class */ (function () {
    function DataService(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    DataService.prototype.cloneItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item)
            return null;
        /** @type {?} */
        var response = {};
        /** @type {?} */
        var fields = Object.keys(item);
        if (fields) {
            fields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                response[field] = item[field];
            }));
        }
        return response;
    };
    /**
     * @param {?} input
     * @return {?}
     */
    DataService.prototype.transformToSafeHtml = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return this._sanitizer.bypassSecurityTrustHtml(input);
    };
    /**
     * @param {?=} time
     * @return {?}
     */
    DataService.prototype.initDebounceTime = /**
     * @param {?=} time
     * @return {?}
     */
    function (time) {
        if (time === void 0) { time = 500; }
        /** @type {?} */
        var delegator = new Subject();
        delegator.pipe(debounceTime(time)).subscribe((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            if (action) {
                action();
            }
        }));
        return delegator;
    };
    /**
     * @param {?} str
     * @return {?}
     */
    DataService.prototype.removeHTML = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        if (!str)
            return str;
        return str.replace(/<\/?[^>]+>/gi, '').replace(/&nbsp;/g, '');
    };
    /**
     * @param {?=} str
     * @return {?}
     */
    DataService.prototype.removeAllSpaces = /**
     * @param {?=} str
     * @return {?}
     */
    function (str) {
        if (!str)
            return '';
        return str.replace(/\s/g, '');
    };
    /**
     * @param {?} s
     * @param {?} n
     * @param {?} t
     * @return {?}
     */
    DataService.prototype.replaceAt = /**
     * @param {?} s
     * @param {?} n
     * @param {?} t
     * @return {?}
     */
    function (s, n, t) {
        return s.substring(0, n) + t + s.substring(n + 1);
    };
    /**
     * @param {?} email
     * @return {?}
     */
    DataService.prototype.isValidEmail = /**
     * @param {?} email
     * @return {?}
     */
    function (email) {
        if (!email)
            return true;
        /** @type {?} */
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    };
    /**
     * @param {?} c
     * @return {?}
     */
    DataService.prototype.convertUCode = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        if ('aãạàáảăăẵặằẳâẫậầấẩ'.indexOf(c) > -1)
            return 'a';
        if ('dđ'.indexOf(c) > -1)
            return 'd';
        if ('oõọòóỏôỗộồốơỡợờớở'.indexOf(c) > -1)
            return 'o';
        if ('uũụùúủưữựừứửưữựừứử'.indexOf(c) > -1)
            return 'u';
        if ('iĩịìíỉ'.indexOf(c) > -1)
            return 'i';
        if ('yỹỵỳýỷ'.indexOf(c) > -1)
            return 'y';
        if ('eẽẹèéẽêễệềêể'.indexOf(c) > -1)
            return 'e';
        return c;
    };
    /**
     * @param {?} needle
     * @param {?} haystack
     * @return {?}
     */
    DataService.prototype.fuzzysearch = /**
     * @param {?} needle
     * @param {?} haystack
     * @return {?}
     */
    function (needle, haystack) {
        /** @type {?} */
        var haystackLC = this.removeAllSpaces(haystack.toLowerCase());
        /** @type {?} */
        var needleLC = this.removeAllSpaces(needle.toLowerCase());
        /** @type {?} */
        var hlen = haystack.length;
        /** @type {?} */
        var nlen = needleLC.length;
        if (nlen > hlen) {
            return false;
        }
        if (nlen === hlen) {
            return needleLC === haystackLC;
        }
        outer: for (var i = 0, j = 0; i < nlen; i++) {
            /** @type {?} */
            var nch = this.convertUCode(needleLC[i]);
            while (j < hlen) {
                if (this.convertUCode(haystackLC[j++]) === nch) {
                    continue outer;
                }
            }
            return false;
        }
        return true;
    };
    /**
     * @return {?}
     */
    DataService.prototype.newGuid = /**
     * @return {?}
     */
    function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (/**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            /** @type {?} */
            var r = Math.random() * 16 | 0;
            /** @type {?} */
            var v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }));
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    DataService.prototype.isNullOrEmpty = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return obj == null || obj === undefined || obj == '';
    };
    /**
     * @param {?} text
     * @param {?=} lowerCase
     * @return {?}
     */
    DataService.prototype.toPascalCase = /**
     * @param {?} text
     * @param {?=} lowerCase
     * @return {?}
     */
    function (text, lowerCase) {
        if (!text)
            return '';
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
    DataService.prototype.compareObjects = /**
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
    /**
     * @param {?} valueRef
     * @param {?=} lowerCase
     * @return {?}
     */
    DataService.prototype.getField = /**
     * @param {?} valueRef
     * @param {?=} lowerCase
     * @return {?}
     */
    function (valueRef, lowerCase) {
        if (!valueRef)
            return '';
        if (!lowerCase) {
            return valueRef[0].toString().toUpperCase() + valueRef.substring(1, valueRef.length);
        }
        else {
            return valueRef[0].toString().toLowerCase() + valueRef.substring(1, valueRef.length);
        }
    };
    /**
     * @param {?} input
     * @return {?}
     */
    DataService.prototype.isNumber = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        /** @type {?} */
        var regex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
        return regex.test(input);
    };
    /**
     * @param {?} input
     * @return {?}
     */
    DataService.prototype.isDigit = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return /^[0-9]$/.test(input);
    };
    DataService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    DataService.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    /** @nocollapse */ DataService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(i0.ɵɵinject(i1.DomSanitizer)); }, token: DataService, providedIn: "root" });
    return DataService;
}());
export { DataService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataService.prototype._sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRW5FO0lBRUkscUJBQ1ksVUFBd0I7UUFBeEIsZUFBVSxHQUFWLFVBQVUsQ0FBYztJQUNoQyxDQUFDOzs7OztJQUVFLCtCQUFTOzs7O0lBQWhCLFVBQWlCLElBQVM7UUFDdEIsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQzs7WUFDakIsUUFBUSxHQUFRLEVBQUU7O1lBQ2xCLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLE1BQU0sRUFBRTtZQUNSLE1BQU0sQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxLQUFLO2dCQUNqQixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLENBQUMsRUFBQyxDQUFDO1NBQ047UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVNLHlDQUFtQjs7OztJQUExQixVQUEyQixLQUFhO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIs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LENBS3pDLEVBQUMsR0FBRTtRQUNMLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVNLDhCQUFROzs7OztJQUFmLFVBQWdCLFFBQWdCLEVBQUUsU0FBbUI7UUFDakQsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ1osT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hGO2FBQU07WUFDSCxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEY7SUFDTCxDQUFDOzs7OztJQUVNLDhCQUFROzs7O0lBQWYsVUFBZ0IsS0FBYTs7WUFDckIsS0FBSyxHQUFHLG1DQUFtQztRQUMvQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFTSw2QkFBTzs7OztJQUFkLFVBQWUsS0FBYTtRQUN4QixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0JBOUpKLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBRnpCLFlBQVk7OztzQkFOckI7Q0F1S0MsQUEvSkQsSUErSkM7U0E5SlksV0FBVzs7Ozs7O0lBRWhCLGlDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENoYW5nZVR5cGUgfSBmcm9tICcuLi9lbnVtcy9iYXNlLmVudW0nO1xyXG5pbXBvcnQgeyBPYmplY3RDaGFuZ2UgfSBmcm9tICcuLi9tb2RlbHMvYmFzZS5tb2RlbCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9uZUl0ZW0oaXRlbTogYW55KTogYW55IHtcclxuICAgICAgICBpZiAoIWl0ZW0pIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBhbnkgPSB7fTtcclxuICAgICAgICBjb25zdCBmaWVsZHMgPSBPYmplY3Qua2V5cyhpdGVtKTtcclxuICAgICAgICBpZiAoZmllbGRzKSB7XHJcbiAgICAgICAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VbZmllbGRdID0gaXRlbVtmaWVsZF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyYW5zZm9ybVRvU2FmZUh0bWwoaW5wdXQ6IHN0cmluZyk6IFNhZmVIdG1sIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGlucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdERlYm91bmNlVGltZSh0aW1lOiBudW1iZXIgPSA1MDApOiBTdWJqZWN0PGFueT4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGVnYXRvcjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuICAgICAgICBkZWxlZ2F0b3IucGlwZShkZWJvdW5jZVRpbWUodGltZSkpLnN1YnNjcmliZSgoYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRlbGVnYXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlSFRNTChzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCFzdHIpIHJldHVybiBzdHI7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC88XFwvP1tePl0rPi9naSwgJycpLnJlcGxhY2UoLyZuYnNwOy9nLCAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUFsbFNwYWNlcyhzdHI/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghc3RyKSByZXR1cm4gJyc7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMvZywgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXBsYWNlQXQoczogc3RyaW5nLCBuOiBudW1iZXIsIHQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBzLnN1YnN0cmluZygwLCBuKSArIHQgKyBzLnN1YnN0cmluZyhuICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzVmFsaWRFbWFpbChlbWFpbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFlbWFpbCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgY29uc3QgcmVnZXggPSAvXihbYS16QS1aMC05Xy4rLV0pK1xcQCgoW2EtekEtWjAtOS1dKStcXC4pKyhbYS16QS1aMC05XXsyLDR9KSskLztcclxuICAgICAgICByZXR1cm4gcmVnZXgudGVzdChlbWFpbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnZlcnRVQ29kZShjOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICgnYcOj4bqhw6DDoeG6o8SDxIPhurXhurfhurHhurPDouG6q+G6reG6p+G6peG6qScuaW5kZXhPZihjKSA+IC0xKSByZXR1cm4gJ2EnO1xyXG4gICAgICAgIGlmICgnZMSRJy5pbmRleE9mKGMpID4gLTEpIHJldHVybiAnZCc7XHJcbiAgICAgICAgaWYgKCdvw7Xhu43DssOz4buPw7Thu5fhu5nhu5Phu5HGoeG7oeG7o+G7neG7m+G7nycuaW5kZXhPZihjKSA+IC0xKSByZXR1cm4gJ28nO1xyXG4gICAgICAgIGlmICgndcWp4bulw7nDuuG7p8aw4buv4bux4bur4bup4butxrDhu6/hu7Hhu6vhu6nhu60nLmluZGV4T2YoYykgPiAtMSkgcmV0dXJuICd1JztcclxuICAgICAgICBpZiAoJ2nEqeG7i8Osw63hu4knLmluZGV4T2YoYykgPiAtMSkgcmV0dXJuICdpJztcclxuICAgICAgICBpZiAoJ3nhu7nhu7Xhu7PDveG7tycuaW5kZXhPZihjKSA+IC0xKSByZXR1cm4gJ3knO1xyXG4gICAgICAgIGlmICgnZeG6veG6ucOow6nhur3DquG7heG7h+G7gcOq4buDJy5pbmRleE9mKGMpID4gLTEpIHJldHVybiAnZSc7XHJcbiAgICAgICAgcmV0dXJuIGM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZ1enp5c2VhcmNoKG5lZWRsZTogc3RyaW5nLCBoYXlzdGFjazogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgaGF5c3RhY2tMQyA9IHRoaXMucmVtb3ZlQWxsU3BhY2VzKGhheXN0YWNrLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIGNvbnN0IG5lZWRsZUxDID0gdGhpcy5yZW1vdmVBbGxTcGFjZXMobmVlZGxlLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIGNvbnN0IGhsZW4gPSBoYXlzdGFjay5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgbmxlbiA9IG5lZWRsZUxDLmxlbmd0aDtcclxuICAgICAgICBpZiAobmxlbiA+IGhsZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmxlbiA9PT0gaGxlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmVlZGxlTEMgPT09IGhheXN0YWNrTEM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG91dGVyOiBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCBubGVuOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbmNoID0gdGhpcy5jb252ZXJ0VUNvZGUobmVlZGxlTENbaV0pO1xyXG4gICAgICAgICAgICB3aGlsZSAoaiA8IGhsZW4pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnZlcnRVQ29kZShoYXlzdGFja0xDW2orK10pID09PSBuY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZSBvdXRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZXdHdWlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzTnVsbE9yRW1wdHkob2JqOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gb2JqID09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQgfHwgb2JqID09ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1Bhc2NhbENhc2UodGV4dDogc3RyaW5nLCBsb3dlckNhc2U/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXRleHQpIHJldHVybiAnJztcclxuICAgICAgICBpZiAoIWxvd2VyQ2FzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dFswXS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkgKyB0ZXh0LnN1YnN0cmluZygxLCB0ZXh0Lmxlbmd0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRleHRbMF0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICsgdGV4dC5zdWJzdHJpbmcoMSwgdGV4dC5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcGFyZU9iamVjdHMoc291cmNlOiBhbnksIHRhcmdldDogYW55KTogT2JqZWN0Q2hhbmdlW10ge1xyXG4gICAgICAgIGxldCBjaGFuZ2VzOiBPYmplY3RDaGFuZ2VbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZVByb3BlcnRpZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFByb3BlcnRpZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xyXG5cclxuICAgICAgICBjb25zdCBhZGRlZFByb3BlcnRpZXMgPSB0YXJnZXRQcm9wZXJ0aWVzLmZpbHRlcih4ID0+IHNvdXJjZVByb3BlcnRpZXMuaW5kZXhPZih4KSA8IDApO1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZWRQcm9wZXJ0aWVzID0gc291cmNlUHJvcGVydGllcy5maWx0ZXIoeCA9PiB0YXJnZXRQcm9wZXJ0aWVzLmluZGV4T2YoeCkgPCAwKTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZFByb3BlcnRpZXMgPSBzb3VyY2VQcm9wZXJ0aWVzLmZpbHRlcih4ID0+IHJlbW92ZWRQcm9wZXJ0aWVzLmluZGV4T2YoeCkgPCAwKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgb2YgbW9kaWZpZWRQcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIGlmICghXy5pc0VxdWFsKHNvdXJjZVtwcm9wZXJ0eV0sIHRhcmdldFtwcm9wZXJ0eV0pKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VzLnB1c2gobmV3IE9iamVjdENoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VUeXBlOiBDaGFuZ2VUeXBlLlVwZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogc291cmNlW3Byb3BlcnR5XSxcclxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdGFyZ2V0W3Byb3BlcnR5XVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGFuZ2VzLnB1c2goLi4uYWRkZWRQcm9wZXJ0aWVzLm1hcCh4ID0+IG5ldyBPYmplY3RDaGFuZ2Uoe1xyXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHgsXHJcbiAgICAgICAgICAgIGNoYW5nZVR5cGU6IENoYW5nZVR5cGUuQWRkLFxyXG4gICAgICAgICAgICBvbGRWYWx1ZTogdGFyZ2V0W3hdLFxyXG4gICAgICAgICAgICBuZXdWYWx1ZTogdGFyZ2V0W3hdXHJcbiAgICAgICAgfSkpKTtcclxuXHJcbiAgICAgICAgY2hhbmdlcy5wdXNoKC4uLnJlbW92ZWRQcm9wZXJ0aWVzLm1hcCh4ID0+IG5ldyBPYmplY3RDaGFuZ2Uoe1xyXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHgsXHJcbiAgICAgICAgICAgIGNoYW5nZVR5cGU6IENoYW5nZVR5cGUuRGVsZXRlLFxyXG4gICAgICAgICAgICBvbGRWYWx1ZTogc291cmNlW3hdLFxyXG4gICAgICAgICAgICBuZXdWYWx1ZTogc291cmNlW3hdXHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgICByZXR1cm4gY2hhbmdlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RmllbGQodmFsdWVSZWY6IHN0cmluZywgbG93ZXJDYXNlPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZVJlZikgcmV0dXJuICcnO1xyXG4gICAgICAgIGlmICghbG93ZXJDYXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVJlZlswXS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZVJlZi5zdWJzdHJpbmcoMSwgdmFsdWVSZWYubGVuZ3RoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVSZWZbMF0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICsgdmFsdWVSZWYuc3Vic3RyaW5nKDEsIHZhbHVlUmVmLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc051bWJlcihpbnB1dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIHJlZ2V4ID0gL15bKy1dP1xcZCsoXFwuXFxkKyk/KFtlRV1bKy1dP1xcZCspPyQvO1xyXG4gICAgICAgIHJldHVybiByZWdleC50ZXN0KGlucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNEaWdpdChpbnB1dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIC9eWzAtOV0kLy50ZXN0KGlucHV0KTtcclxuICAgIH1cclxufVxyXG4iXX0=