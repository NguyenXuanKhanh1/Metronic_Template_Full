/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ChangeType } from '../enums/base.enum';
import { ObjectChange } from '../models/base.model';
import * as _ from 'lodash';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class DataService {
    /**
     * @param {?} _sanitizer
     */
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    cloneItem(item) {
        if (!item)
            return null;
        /** @type {?} */
        const response = {};
        /** @type {?} */
        const fields = Object.keys(item);
        if (fields) {
            fields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            (field) => {
                response[field] = item[field];
            }));
        }
        return response;
    }
    /**
     * @param {?} items
     * @param {?=} id
     * @return {?}
     */
    cloneItems(items, id = true) {
        if (!items || items.length == 0)
            return null;
        /** @type {?} */
        const response = [];
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            /** @type {?} */
            var newItem = this.cloneItem(item);
            if (id)
                newItem.id = this.newGuid();
            response.push(newItem);
        }));
        return response;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    transformToSafeHtml(input) {
        return this._sanitizer.bypassSecurityTrustHtml(input);
    }
    /**
     * @param {?=} time
     * @return {?}
     */
    initDebounceTime(time = 500) {
        /** @type {?} */
        const delegator = new Subject();
        delegator.pipe(debounceTime(time)).subscribe((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            if (action) {
                action();
            }
        }));
        return delegator;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    removeHTML(str) {
        if (!str)
            return str;
        return str.replace(/<\/?[^>]+>/gi, '').replace(/&nbsp;/g, '');
    }
    /**
     * @param {?=} str
     * @return {?}
     */
    removeAllSpaces(str) {
        if (!str)
            return '';
        return str.replace(/\s/g, '');
    }
    /**
     * @param {?} s
     * @param {?} n
     * @param {?} t
     * @return {?}
     */
    replaceAt(s, n, t) {
        return s.substring(0, n) + t + s.substring(n + 1);
    }
    /**
     * @param {?} email
     * @return {?}
     */
    isValidEmail(email) {
        if (!email)
            return true;
        /** @type {?} */
        const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    /**
     * @param {?} c
     * @return {?}
     */
    convertUCode(c) {
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
    }
    /**
     * @param {?} needle
     * @param {?} haystack
     * @return {?}
     */
    fuzzysearch(needle, haystack) {
        /** @type {?} */
        const haystackLC = this.removeAllSpaces(haystack.toLowerCase());
        /** @type {?} */
        const needleLC = this.removeAllSpaces(needle.toLowerCase());
        /** @type {?} */
        const hlen = haystack.length;
        /** @type {?} */
        const nlen = needleLC.length;
        if (nlen > hlen) {
            return false;
        }
        if (nlen === hlen) {
            return needleLC === haystackLC;
        }
        outer: for (let i = 0, j = 0; i < nlen; i++) {
            /** @type {?} */
            const nch = this.convertUCode(needleLC[i]);
            while (j < hlen) {
                if (this.convertUCode(haystackLC[j++]) === nch) {
                    continue outer;
                }
            }
            return false;
        }
        return true;
    }
    /**
     * @return {?}
     */
    newGuid() {
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
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    isNullOrEmpty(obj) {
        return obj == null || obj === undefined || obj == '';
    }
    /**
     * @param {?} text
     * @param {?=} lowerCase
     * @return {?}
     */
    toPascalCase(text, lowerCase) {
        if (!text)
            return '';
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
    /**
     * @param {?} valueRef
     * @param {?=} lowerCase
     * @return {?}
     */
    getField(valueRef, lowerCase) {
        if (!valueRef)
            return '';
        if (!lowerCase) {
            return valueRef[0].toString().toUpperCase() + valueRef.substring(1, valueRef.length);
        }
        else {
            return valueRef[0].toString().toLowerCase() + valueRef.substring(1, valueRef.length);
        }
    }
    /**
     * @param {?} input
     * @return {?}
     */
    isNumber(input) {
        /** @type {?} */
        var regex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
        return regex.test(input);
    }
    /**
     * @param {?} input
     * @return {?}
     */
    isDigit(input) {
        return /^[0-9]$/.test(input);
    }
}
DataService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
DataService.ctorParameters = () => [
    { type: DomSanitizer }
];
/** @nocollapse */ DataService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(i0.ɵɵinject(i1.DomSanitizer)); }, token: DataService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataService.prototype._sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDOzs7QUFHbkUsTUFBTSxPQUFPLFdBQVc7Ozs7SUFDcEIsWUFDWSxVQUF3QjtRQUF4QixlQUFVLEdBQVYsVUFBVSxDQUFjO0lBQ2hDLENBQUM7Ozs7O0lBRUUsU0FBUyxDQUFDLElBQVM7UUFDdEIsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQzs7Y0FDakIsUUFBUSxHQUFRLEVBQUU7O2NBQ2xCLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLE1BQU0sRUFBRTtZQUNSLE1BQU0sQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDckIsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxDQUFDLEVBQUMsQ0FBQztTQUNOO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQzs7Ozs7O0lBRU0sVUFBVSxDQUFDLEtBQVksRUFBRSxLQUFjLElBQUk7UUFDOUMsSUFBSSxDQUFDLEtB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bmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDaGFuZ2VUeXBlIH0gZnJvbSAnLi4vZW51bXMvYmFzZS5lbnVtJztcclxuaW1wb3J0IHsgT2JqZWN0Q2hhbmdlIH0gZnJvbSAnLi4vbW9kZWxzL2Jhc2UubW9kZWwnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplclxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgY2xvbmVJdGVtKGl0ZW06IGFueSk6IGFueSB7XHJcbiAgICAgICAgaWYgKCFpdGVtKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCByZXNwb25zZTogYW55ID0ge307XHJcbiAgICAgICAgY29uc3QgZmllbGRzID0gT2JqZWN0LmtleXMoaXRlbSk7XHJcbiAgICAgICAgaWYgKGZpZWxkcykge1xyXG4gICAgICAgICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlW2ZpZWxkXSA9IGl0ZW1bZmllbGRdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9uZUl0ZW1zKGl0ZW1zOiBhbnlbXSwgaWQ6IGJvb2xlYW4gPSB0cnVlKTogYW55IHtcclxuICAgICAgICBpZiAoIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCByZXNwb25zZTogYW55W10gPSBbXTtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBuZXdJdGVtID0gdGhpcy5jbG9uZUl0ZW0oaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChpZCkgbmV3SXRlbS5pZCA9IHRoaXMubmV3R3VpZCgpO1xyXG4gICAgICAgICAgICByZXNwb25zZS5wdXNoKG5ld0l0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJhbnNmb3JtVG9TYWZlSHRtbChpbnB1dDogc3RyaW5nKTogU2FmZUh0bWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaW5wdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0RGVib3VuY2VUaW1lKHRpbWU6IG51bWJlciA9IDUwMCk6IFN1YmplY3Q8YW55PiB7XHJcbiAgICAgICAgY29uc3QgZGVsZWdhdG9yOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgICAgIGRlbGVnYXRvci5waXBlKGRlYm91bmNlVGltZSh0aW1lKSkuc3Vic2NyaWJlKChhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZGVsZWdhdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVIVE1MKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXN0cikgcmV0dXJuIHN0cjtcclxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLzxcXC8/W14+XSs+L2dpLCAnJykucmVwbGFjZSgvJm5ic3A7L2csICcnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlQWxsU3BhY2VzKHN0cj86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCFzdHIpIHJldHVybiAnJztcclxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlcGxhY2VBdChzOiBzdHJpbmcsIG46IG51bWJlciwgdDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHMuc3Vic3RyaW5nKDAsIG4pICsgdCArIHMuc3Vic3RyaW5nKG4gKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNWYWxpZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIWVtYWlsKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBjb25zdCByZWdleCA9IC9eKFthLXpBLVowLTlfListXSkrXFxAKChbYS16QS1aMC05LV0pK1xcLikrKFthLXpBLVowLTldezIsNH0pKyQvO1xyXG4gICAgICAgIHJldHVybiByZWdleC50ZXN0KGVtYWlsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29udmVydFVDb2RlKGM6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCdhw6PhuqHDoMOh4bqjxIPEg+G6teG6t+G6seG6s8Oi4bqr4bqt4bqn4bql4bqpJy5pbmRleE9mKGMpID4gLTEpIHJldHVybiAnYSc7XHJcbiAgICAgICAgaWYgKCdkxJEnLmluZGV4T2YoYykgPiAtMSkgcmV0dXJuICdkJztcclxuICAgICAgICBpZiAoJ2/DteG7jcOyw7Phu4/DtOG7l+G7meG7k+G7kcah4buh4buj4bud4bub4bufJy5pbmRleE9mKGMpID4gLTEpIHJldHVybiAnbyc7XHJcbiAgICAgICAgaWYgKCd1xanhu6XDucO64bunxrDhu6/hu7Hhu6vhu6nhu63GsOG7r+G7seG7q+G7qeG7rScuaW5kZXhPZihjKSA+IC0xKSByZXR1cm4gJ3UnO1xyXG4gICAgICAgIGlmICgnacSp4buLw6zDreG7iScuaW5kZXhPZihjKSA+IC0xKSByZXR1cm4gJ2knO1xyXG4gICAgICAgIGlmICgneeG7ueG7teG7s8O94bu3Jy5pbmRleE9mKGMpID4gLTEpIHJldHVybiAneSc7XHJcbiAgICAgICAgaWYgKCdl4bq94bq5w6jDqeG6vcOq4buF4buH4buBw6rhu4MnLmluZGV4T2YoYykgPiAtMSkgcmV0dXJuICdlJztcclxuICAgICAgICByZXR1cm4gYztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZnV6enlzZWFyY2gobmVlZGxlOiBzdHJpbmcsIGhheXN0YWNrOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBoYXlzdGFja0xDID0gdGhpcy5yZW1vdmVBbGxTcGFjZXMoaGF5c3RhY2sudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgY29uc3QgbmVlZGxlTEMgPSB0aGlzLnJlbW92ZUFsbFNwYWNlcyhuZWVkbGUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgY29uc3QgaGxlbiA9IGhheXN0YWNrLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBubGVuID0gbmVlZGxlTEMubGVuZ3RoO1xyXG4gICAgICAgIGlmIChubGVuID4gaGxlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChubGVuID09PSBobGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZWVkbGVMQyA9PT0gaGF5c3RhY2tMQztcclxuICAgICAgICB9XHJcbiAgICAgICAgb3V0ZXI6IGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IG5sZW47IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBuY2ggPSB0aGlzLmNvbnZlcnRVQ29kZShuZWVkbGVMQ1tpXSk7XHJcbiAgICAgICAgICAgIHdoaWxlIChqIDwgaGxlbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udmVydFVDb2RlKGhheXN0YWNrTENbaisrXSkgPT09IG5jaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5ld0d1aWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNOdWxsT3JFbXB0eShvYmo6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBvYmogPT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCB8fCBvYmogPT0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvUGFzY2FsQ2FzZSh0ZXh0OiBzdHJpbmcsIGxvd2VyQ2FzZT86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdGV4dCkgcmV0dXJuICcnO1xyXG4gICAgICAgIGlmICghbG93ZXJDYXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0WzBdLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKSArIHRleHQuc3Vic3RyaW5nKDEsIHRleHQubGVuZ3RoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dFswXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgKyB0ZXh0LnN1YnN0cmluZygxLCB0ZXh0Lmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21wYXJlT2JqZWN0cyhzb3VyY2U6IGFueSwgdGFyZ2V0OiBhbnkpOiBPYmplY3RDaGFuZ2VbXSB7XHJcbiAgICAgICAgbGV0IGNoYW5nZXM6IE9iamVjdENoYW5nZVtdID0gW107XHJcbiAgICAgICAgY29uc3Qgc291cmNlUHJvcGVydGllcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0UHJvcGVydGllcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZGVkUHJvcGVydGllcyA9IHRhcmdldFByb3BlcnRpZXMuZmlsdGVyKHggPT4gc291cmNlUHJvcGVydGllcy5pbmRleE9mKHgpIDwgMCk7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlZFByb3BlcnRpZXMgPSBzb3VyY2VQcm9wZXJ0aWVzLmZpbHRlcih4ID0+IHRhcmdldFByb3BlcnRpZXMuaW5kZXhPZih4KSA8IDApO1xyXG4gICAgICAgIGNvbnN0IG1vZGlmaWVkUHJvcGVydGllcyA9IHNvdXJjZVByb3BlcnRpZXMuZmlsdGVyKHggPT4gcmVtb3ZlZFByb3BlcnRpZXMuaW5kZXhPZih4KSA8IDApO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBvZiBtb2RpZmllZFByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgaWYgKCFfLmlzRXF1YWwoc291cmNlW3Byb3BlcnR5XSwgdGFyZ2V0W3Byb3BlcnR5XSkpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZXMucHVzaChuZXcgT2JqZWN0Q2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVR5cGU6IENoYW5nZVR5cGUuVXBkYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBzb3VyY2VbcHJvcGVydHldLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB0YXJnZXRbcHJvcGVydHldXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoYW5nZXMucHVzaCguLi5hZGRlZFByb3BlcnRpZXMubWFwKHggPT4gbmV3IE9iamVjdENoYW5nZSh7XHJcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogeCxcclxuICAgICAgICAgICAgY2hhbmdlVHlwZTogQ2hhbmdlVHlwZS5BZGQsXHJcbiAgICAgICAgICAgIG9sZFZhbHVlOiB0YXJnZXRbeF0sXHJcbiAgICAgICAgICAgIG5ld1ZhbHVlOiB0YXJnZXRbeF1cclxuICAgICAgICB9KSkpO1xyXG5cclxuICAgICAgICBjaGFuZ2VzLnB1c2goLi4ucmVtb3ZlZFByb3BlcnRpZXMubWFwKHggPT4gbmV3IE9iamVjdENoYW5nZSh7XHJcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogeCxcclxuICAgICAgICAgICAgY2hhbmdlVHlwZTogQ2hhbmdlVHlwZS5EZWxldGUsXHJcbiAgICAgICAgICAgIG9sZFZhbHVlOiBzb3VyY2VbeF0sXHJcbiAgICAgICAgICAgIG5ld1ZhbHVlOiBzb3VyY2VbeF1cclxuICAgICAgICB9KSkpO1xyXG4gICAgICAgIHJldHVybiBjaGFuZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRGaWVsZCh2YWx1ZVJlZjogc3RyaW5nLCBsb3dlckNhc2U/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXZhbHVlUmVmKSByZXR1cm4gJyc7XHJcbiAgICAgICAgaWYgKCFsb3dlckNhc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlUmVmWzBdLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKSArIHZhbHVlUmVmLnN1YnN0cmluZygxLCB2YWx1ZVJlZi5sZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVJlZlswXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgKyB2YWx1ZVJlZi5zdWJzdHJpbmcoMSwgdmFsdWVSZWYubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzTnVtYmVyKGlucHV0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgcmVnZXggPSAvXlsrLV0/XFxkKyhcXC5cXGQrKT8oW2VFXVsrLV0/XFxkKyk/JC87XHJcbiAgICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QoaW5wdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0RpZ2l0KGlucHV0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gL15bMC05XSQvLnRlc3QoaW5wdXQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==