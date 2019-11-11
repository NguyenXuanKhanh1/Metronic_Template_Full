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
     * @param {?} items
     * @param {?=} id
     * @return {?}
     */
    DataService.prototype.cloneItems = /**
     * @param {?} items
     * @param {?=} id
     * @return {?}
     */
    function (items, id) {
        var _this = this;
        if (id === void 0) { id = true; }
        if (!items || items.length == 0)
            return null;
        /** @type {?} */
        var response = [];
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var newItem = _this.cloneItem(item);
            if (id)
                newItem.id = _this.newGuid();
            response.push(newItem);
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRW5FO0lBRUkscUJBQ1ksVUFBd0I7UUFBeEIsZUFBVSxHQUFWLFVBQVUsQ0FBYztJQUNoQyxDQUFDOzs7OztJQUVFLCtCQUFTOzs7O0lBQWhCLFVBQWlCLElBQVM7UUFDdEIsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQzs7WUFDakIsUUFBUSxHQUFRLEVBQUU7O1lBQ2xCLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLE1BQU0sRUFBRTtZQUNSLE1BQU0sQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxLQUFLO2dCQUNqQixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLENBQUMsRUFBQyxDQUFDO1NBQ047UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDOzs7Ozs7SUFFTSxnQ0FBVTs7Ozs7SUFBakIsVUFBa0IsS0FBWSxFQUFFLEVBQWtCO1FBQWxELGlCQVNDO1FBVCtCLG1CQUFBLEVB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QUcsbUNBQW1DO1FBQy9DLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVNLDZCQUFPOzs7O0lBQWQsVUFBZSxLQUFhO1FBQ3hCLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkF6S0osVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFGekIsWUFBWTs7O3NCQU5yQjtDQWtMQyxBQTFLRCxJQTBLQztTQXpLWSxXQUFXOzs7Ozs7SUFFaEIsaUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ2hhbmdlVHlwZSB9IGZyb20gJy4uL2VudW1zL2Jhc2UuZW51bSc7XHJcbmltcG9ydCB7IE9iamVjdENoYW5nZSB9IGZyb20gJy4uL21vZGVscy9iYXNlLm1vZGVsJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcclxuICAgICkgeyB9XHJcblxyXG4gICAgcHVibGljIGNsb25lSXRlbShpdGVtOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGlmICghaXRlbSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IGFueSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IE9iamVjdC5rZXlzKGl0ZW0pO1xyXG4gICAgICAgIGlmIChmaWVsZHMpIHtcclxuICAgICAgICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZVtmaWVsZF0gPSBpdGVtW2ZpZWxkXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvbmVJdGVtcyhpdGVtczogYW55W10sIGlkOiBib29sZWFuID0gdHJ1ZSk6IGFueSB7XHJcbiAgICAgICAgaWYgKCFpdGVtcyB8fCBpdGVtcy5sZW5ndGggPT0gMCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IGFueVtdID0gW107XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgbmV3SXRlbSA9IHRoaXMuY2xvbmVJdGVtKGl0ZW0pO1xyXG4gICAgICAgICAgICBpZiAoaWQpIG5ld0l0ZW0uaWQgPSB0aGlzLm5ld0d1aWQoKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UucHVzaChuZXdJdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyYW5zZm9ybVRvU2FmZUh0bWwoaW5wdXQ6IHN0cmluZyk6IFNhZmVIdG1sIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGlucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdERlYm91bmNlVGltZSh0aW1lOiBudW1iZXIgPSA1MDApOiBTdWJqZWN0PGFueT4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGVnYXRvcjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuICAgICAgICBkZWxlZ2F0b3IucGlwZShkZWJvdW5jZVRpbWUodGltZSkpLnN1YnNjcmliZSgoYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRlbGVnYXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlSFRNTChzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCFzdHIpIHJldHVybiBzdHI7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC88XFwvP1tePl0rPi9naSwgJycpLnJlcGxhY2UoLyZuYnNwOy9nLCAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUFsbFNwYWNlcyhzdHI/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghc3RyKSByZXR1cm4gJyc7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMvZywgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXBsYWNlQXQoczogc3RyaW5nLCBuOiBudW1iZXIsIHQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBzLnN1YnN0cmluZygwLCBuKSArIHQgKyBzLnN1YnN0cmluZyhuICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzVmFsaWRFbWFpbChlbWFpbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFlbWFpbCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgY29uc3QgcmVnZXggPSAvXihbYS16QS1aMC05Xy4rLV0pK1xcQCgoW2EtekEtWjAtOS1dKStcXC4pKyhbYS16QS1aMC05XXsyLDR9KSskLztcclxuICAgICAgICByZXR1cm4gcmVnZXgudGVzdChlbWFpbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnZlcnRVQ29kZShjOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICgnYcOj4bqhw6DDoeG6o8SDxIPhurXhurfhurHhurPDouG6q+G6reG6p+G6peG6qScuaW5kZXhPZihjKSA+IC0xKSByZXR1cm4gJ2EnO1xyXG4gICAgICAgIGlmICgnZMSRJy5pbmRleE9mKGMpID4gLTEpIHJldHVybiAnZCc7XHJcbiAgICAgICAgaWYgKCdvw7Xhu43DssOz4buPw7Thu5fhu5nhu5Phu5HGoeG7oeG7o+G7neG7m+G7nycuaW5kZXhPZihjKSA+IC0xKSByZXR1cm4gJ28nO1xyXG4gICAgICAgIGlmICgndcWp4bulw7nDuuG7p8aw4buv4bux4bur4bup4butxrDhu6/hu7Hhu6vhu6nhu60nLmluZGV4T2YoYykgPiAtMSkgcmV0dXJuICd1JztcclxuICAgICAgICBpZiAoJ2nEqeG7i8Osw63hu4knLmluZGV4T2YoYykgPiAtMSkgcmV0dXJuICdpJztcclxuICAgICAgICBpZiAoJ3nhu7nhu7Xhu7PDveG7tycuaW5kZXhPZihjKSA+IC0xKSByZXR1cm4gJ3knO1xyXG4gICAgICAgIGlmICgnZeG6veG6ucOow6nhur3DquG7heG7h+G7gcOq4buDJy5pbmRleE9mKGMpID4gLTEpIHJldHVybiAnZSc7XHJcbiAgICAgICAgcmV0dXJuIGM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZ1enp5c2VhcmNoKG5lZWRsZTogc3RyaW5nLCBoYXlzdGFjazogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgaGF5c3RhY2tMQyA9IHRoaXMucmVtb3ZlQWxsU3BhY2VzKGhheXN0YWNrLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIGNvbnN0IG5lZWRsZUxDID0gdGhpcy5yZW1vdmVBbGxTcGFjZXMobmVlZGxlLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIGNvbnN0IGhsZW4gPSBoYXlzdGFjay5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgbmxlbiA9IG5lZWRsZUxDLmxlbmd0aDtcclxuICAgICAgICBpZiAobmxlbiA+IGhsZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmxlbiA9PT0gaGxlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmVlZGxlTEMgPT09IGhheXN0YWNrTEM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG91dGVyOiBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCBubGVuOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbmNoID0gdGhpcy5jb252ZXJ0VUNvZGUobmVlZGxlTENbaV0pO1xyXG4gICAgICAgICAgICB3aGlsZSAoaiA8IGhsZW4pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnZlcnRVQ29kZShoYXlzdGFja0xDW2orK10pID09PSBuY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZSBvdXRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZXdHdWlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzTnVsbE9yRW1wdHkob2JqOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gb2JqID09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQgfHwgb2JqID09ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1Bhc2NhbENhc2UodGV4dDogc3RyaW5nLCBsb3dlckNhc2U/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXRleHQpIHJldHVybiAnJztcclxuICAgICAgICBpZiAoIWxvd2VyQ2FzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dFswXS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkgKyB0ZXh0LnN1YnN0cmluZygxLCB0ZXh0Lmxlbmd0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRleHRbMF0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICsgdGV4dC5zdWJzdHJpbmcoMSwgdGV4dC5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcGFyZU9iamVjdHMoc291cmNlOiBhbnksIHRhcmdldDogYW55KTogT2JqZWN0Q2hhbmdlW10ge1xyXG4gICAgICAgIGxldCBjaGFuZ2VzOiBPYmplY3RDaGFuZ2VbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZVByb3BlcnRpZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFByb3BlcnRpZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xyXG5cclxuICAgICAgICBjb25zdCBhZGRlZFByb3BlcnRpZXMgPSB0YXJnZXRQcm9wZXJ0aWVzLmZpbHRlcih4ID0+IHNvdXJjZVByb3BlcnRpZXMuaW5kZXhPZih4KSA8IDApO1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZWRQcm9wZXJ0aWVzID0gc291cmNlUHJvcGVydGllcy5maWx0ZXIoeCA9PiB0YXJnZXRQcm9wZXJ0aWVzLmluZGV4T2YoeCkgPCAwKTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZFByb3BlcnRpZXMgPSBzb3VyY2VQcm9wZXJ0aWVzLmZpbHRlcih4ID0+IHJlbW92ZWRQcm9wZXJ0aWVzLmluZGV4T2YoeCkgPCAwKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgb2YgbW9kaWZpZWRQcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIGlmICghXy5pc0VxdWFsKHNvdXJjZVtwcm9wZXJ0eV0sIHRhcmdldFtwcm9wZXJ0eV0pKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VzLnB1c2gobmV3IE9iamVjdENoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VUeXBlOiBDaGFuZ2VUeXBlLlVwZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogc291cmNlW3Byb3BlcnR5XSxcclxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdGFyZ2V0W3Byb3BlcnR5XVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGFuZ2VzLnB1c2goLi4uYWRkZWRQcm9wZXJ0aWVzLm1hcCh4ID0+IG5ldyBPYmplY3RDaGFuZ2Uoe1xyXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHgsXHJcbiAgICAgICAgICAgIGNoYW5nZVR5cGU6IENoYW5nZVR5cGUuQWRkLFxyXG4gICAgICAgICAgICBvbGRWYWx1ZTogdGFyZ2V0W3hdLFxyXG4gICAgICAgICAgICBuZXdWYWx1ZTogdGFyZ2V0W3hdXHJcbiAgICAgICAgfSkpKTtcclxuXHJcbiAgICAgICAgY2hhbmdlcy5wdXNoKC4uLnJlbW92ZWRQcm9wZXJ0aWVzLm1hcCh4ID0+IG5ldyBPYmplY3RDaGFuZ2Uoe1xyXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHgsXHJcbiAgICAgICAgICAgIGNoYW5nZVR5cGU6IENoYW5nZVR5cGUuRGVsZXRlLFxyXG4gICAgICAgICAgICBvbGRWYWx1ZTogc291cmNlW3hdLFxyXG4gICAgICAgICAgICBuZXdWYWx1ZTogc291cmNlW3hdXHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgICByZXR1cm4gY2hhbmdlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RmllbGQodmFsdWVSZWY6IHN0cmluZywgbG93ZXJDYXNlPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZVJlZikgcmV0dXJuICcnO1xyXG4gICAgICAgIGlmICghbG93ZXJDYXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVJlZlswXS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZVJlZi5zdWJzdHJpbmcoMSwgdmFsdWVSZWYubGVuZ3RoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVSZWZbMF0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICsgdmFsdWVSZWYuc3Vic3RyaW5nKDEsIHZhbHVlUmVmLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc051bWJlcihpbnB1dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIHJlZ2V4ID0gL15bKy1dP1xcZCsoXFwuXFxkKyk/KFtlRV1bKy1dP1xcZCspPyQvO1xyXG4gICAgICAgIHJldHVybiByZWdleC50ZXN0KGlucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNEaWdpdChpbnB1dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIC9eWzAtOV0kLy50ZXN0KGlucHV0KTtcclxuICAgIH1cclxufVxyXG4iXX0=