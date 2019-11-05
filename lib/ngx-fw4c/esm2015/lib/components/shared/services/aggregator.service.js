/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from '@angular/core';
import { AggregatorViewModel } from '../models/base.model';
import * as i0 from "@angular/core";
export class AggregatorService {
    constructor() {
        this.emitters = [];
    }
    /**
     * @template T
     * @param {?} key
     * @param {?=} value
     * @return {?}
     */
    publish(key, value) {
        if (!key)
            return;
        /** @type {?} */
        let currentEmitter = (/** @type {?} */ (this.emitters.find((/**
         * @param {?} s
         * @return {?}
         */
        s => s.key == key))));
        if (!currentEmitter) {
            currentEmitter = new AggregatorViewModel({
                value: this.register(key)
            });
        }
        currentEmitter.value.emit(value);
    }
    /**
     * @template T
     * @param {?} key
     * @param {?} callback
     * @return {?}
     */
    subscribe(key, callback) {
        if (!key)
            return;
        /** @type {?} */
        let currentEmitter = (/** @type {?} */ (this.emitters.find((/**
         * @param {?} s
         * @return {?}
         */
        s => s.key == key))));
        if (!currentEmitter) {
            currentEmitter = new AggregatorViewModel({
                value: this.register(key)
            });
        }
        currentEmitter.value.subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            callback(response);
        }));
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    register(key) {
        /** @type {?} */
        var emitter = new AggregatorViewModel({
            key: key,
            value: new EventEmitter()
        });
        this.emitters.push(emitter);
        return emitter.value;
    }
}
AggregatorService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ AggregatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AggregatorService_Factory() { return new AggregatorService(); }, token: AggregatorService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AggregatorService.prototype.emitters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYWdncmVnYXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFHM0QsTUFBTSxPQUFPLGlCQUFpQjtJQUQ5QjtRQUVjLGFBQVEsR0FBMEIsRUFBRSxDQUFDO0tBbUNsRDs7Ozs7OztJQWpDVSxPQUFPLENBQUksR0FBVyxFQUFFLEtBQVM7UUFDcEMsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPOztZQUNiLGNBQWMsR0FBRyxtQkFBcUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBQyxFQUFBO1FBQy9FLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDakIsY0FBYyxHQUFHLElBQUksbUJBQW1CLENBQUM7Z0JBQ3JDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQzthQUM1QixDQUFDLENBQUM7U0FDTjtRQUNELGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7Ozs7SUFFTSxTQUFTLENBQUksR0FBVyxFQUFFLFFBQStCO1FBQzVELElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTzs7WUFDYixjQUFjLEdBQUcsbUJBQXFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUMsRUFBQTtRQUMvRSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ2pCLGNBQWMsR0FBRyxJQUFJLG1CQUFtQixDQUFDO2dCQUNyQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7YUFDNUIsQ0FBQyxDQUFDO1NBQ047UUFFRCxjQUFjLENBQUMsS0FBSyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLFFBQVcsRUFBRSxFQUFFO1lBQzNDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7OztJQUVPLFFBQVEsQ0FBQyxHQUFXOztZQUNwQixPQUFPLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQztZQUNsQyxHQUFHLEVBQUUsR0FBRztZQUNSLEtBQUssRUFBRSxJQUFJLFlBQVksRUFBTztTQUNqQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3pCLENBQUM7OztZQXBDSixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7Ozs7OztJQUU5QixxQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWdncmVnYXRvclZpZXdNb2RlbCB9IGZyb20gJy4uL21vZGVscy9iYXNlLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdG9yU2VydmljZSB7XHJcbiAgICBwcm90ZWN0ZWQgZW1pdHRlcnM6IEFnZ3JlZ2F0b3JWaWV3TW9kZWxbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBwdWJsaXNoPFQ+KGtleTogc3RyaW5nLCB2YWx1ZT86IFQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWtleSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjdXJyZW50RW1pdHRlciA9IDxBZ2dyZWdhdG9yVmlld01vZGVsPnRoaXMuZW1pdHRlcnMuZmluZChzID0+IHMua2V5ID09IGtleSk7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50RW1pdHRlcikge1xyXG4gICAgICAgICAgICBjdXJyZW50RW1pdHRlciA9IG5ldyBBZ2dyZWdhdG9yVmlld01vZGVsKHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnJlZ2lzdGVyKGtleSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRFbWl0dGVyLnZhbHVlLmVtaXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWJzY3JpYmU8VD4oa2V5OiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFQpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWtleSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjdXJyZW50RW1pdHRlciA9IDxBZ2dyZWdhdG9yVmlld01vZGVsPnRoaXMuZW1pdHRlcnMuZmluZChzID0+IHMua2V5ID09IGtleSk7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50RW1pdHRlcikge1xyXG4gICAgICAgICAgICBjdXJyZW50RW1pdHRlciA9IG5ldyBBZ2dyZWdhdG9yVmlld01vZGVsKHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnJlZ2lzdGVyKGtleSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdXJyZW50RW1pdHRlci52YWx1ZS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBUKSA9PiB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyKGtleTogc3RyaW5nKTogRXZlbnRFbWl0dGVyPGFueT4ge1xyXG4gICAgICAgIHZhciBlbWl0dGVyID0gbmV3IEFnZ3JlZ2F0b3JWaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgdmFsdWU6IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbWl0dGVycy5wdXNoKGVtaXR0ZXIpO1xyXG4gICAgICAgIHJldHVybiBlbWl0dGVyLnZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==