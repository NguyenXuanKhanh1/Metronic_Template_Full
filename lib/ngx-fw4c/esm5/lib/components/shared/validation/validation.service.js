/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, RendererFactory2, EventEmitter, Output } from '@angular/core';
import { ValidationConstant } from './validation.model';
import { Subscription, forkJoin, merge, of } from 'rxjs';
import { map, defaultIfEmpty, take } from 'rxjs/operators';
import { DataService, ActionService } from '../services';
import { ValidationProvider } from './validation.provider';
import * as i0 from "@angular/core";
import * as i1 from "./validation.provider";
import * as i2 from "../services/data.service";
import * as i3 from "../services/action.service";
var ValidationService = /** @class */ (function () {
    function ValidationService(rendererFactory, validationProvider, _dataService, _actionService) {
        this.rendererFactory = rendererFactory;
        this.validationProvider = validationProvider;
        this._dataService = _dataService;
        this._actionService = _actionService;
        this.onDestroy = new EventEmitter();
        this.elements = [];
        this.errClass = ValidationConstant.DefaultErrorClass;
        this.styles = ValidationConstant.DefaultErrorStyles;
        this.attributeName = ValidationConstant.AttributeName;
        this.relatedProviders = [];
        this.subscriptions = new Subscription();
        this.virtualValidationOptions = [];
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * @return {?}
     */
    ValidationService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.unsubscribe();
        this.onDestroy.emit();
    };
    /**
     * @param {?} model
     * @return {?}
     */
    ValidationService.prototype.init = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        var _this = this;
        this.validator = model.validator;
        if (!this.validator.payloadRef)
            this.validator.payloadRef = (/**
             * @return {?}
             */
            function () { return {}; });
        if (this.validator.relatedValidationProviders) {
            this.addRelatedProviders(this.validator.relatedValidationProviders);
        }
        this.validator.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            if (!option.displayText)
                option.displayText = option.validationName;
            if (!option.payloadRef)
                option.payloadRef = _this.validator.payloadRef;
            option.rules.forEach((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                if (!action.id)
                    action.id = _this._dataService.newGuid();
                if (!action.errorMessage) {
                    switch (action.key) {
                        case ValidationConstant.Required: {
                            action.errorMessage = (/**
                             * @param {?} element
                             * @param {?} rowIndex
                             * @return {?}
                             */
                            function (element, rowIndex) {
                                /** @type {?} */
                                var displayingRowIndex = (+rowIndex + 1).toString();
                                return "" + option.displayText + (option.dynamic ? ' [' + displayingRowIndex + ']' : '') + " " + _this.validator.requiredMessage;
                            });
                            break;
                        }
                        default: {
                            action.errorMessage = (/**
                             * @return {?}
                             */
                            function () { return option.displayText + " " + _this.validator.invalidMessage; });
                            break;
                        }
                    }
                }
            }));
        }));
        this.virtualValidationOptions = this.validator.options.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.dynamic; }));
        this.updateAsync();
    };
    /**
     * @param {?=} relatedProvidersToRegister
     * @return {?}
     */
    ValidationService.prototype.updateAsync = /**
     * @param {?=} relatedProvidersToRegister
     * @return {?}
     */
    function (relatedProvidersToRegister) {
        var _this = this;
        this._actionService.executeAsync((/**
         * @return {?}
         */
        function () {
            if (relatedProvidersToRegister && relatedProvidersToRegister.length) {
                _this.addRelatedProviders(relatedProvidersToRegister);
            }
            _this.registerElements();
            _this.registerEvents();
        }));
    };
    /**
     * @param {?} validCallback
     * @param {?=} invalidCallback
     * @return {?}
     */
    ValidationService.prototype.executeAsync = /**
     * @param {?} validCallback
     * @param {?=} invalidCallback
     * @return {?}
     */
    function (validCallback, invalidCallback) {
        this.retrieveSummaryErrors().subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (!response || response.length == 0) {
                if (validCallback)
                    validCallback(response);
                return of(true);
            }
            else {
                if (invalidCallback)
                    invalidCallback(response);
            }
        }));
        return of(true);
    };
    /**
     * @param {?=} show
     * @param {?=} focus
     * @return {?}
     */
    ValidationService.prototype.isValid = /**
     * @param {?=} show
     * @param {?=} focus
     * @return {?}
     */
    function (show, focus) {
        var _this = this;
        if (show === void 0) { show = true; }
        if (focus === void 0) { focus = true; }
        if (show) {
            this.retrieveSummaryErrors().subscribe((/**
             * @param {?} errors
             * @return {?}
             */
            function (errors) {
                if (focus) {
                    if (errors && errors.length > 0) {
                        /** @type {?} */
                        var focusElement = errors[0];
                        /** @type {?} */
                        var el = (/** @type {?} */ (focusElement.element));
                        if (el) {
                            _this._actionService.executeAsync((/**
                             * @return {?}
                             */
                            function () {
                                el.focus();
                            }));
                        }
                    }
                }
            }));
        }
        /** @type {?} */
        var valid = true;
        if (this.validator.options) {
            this.validator.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                if (option.rules) {
                    option.rules.forEach((/**
                     * @param {?} action
                     * @return {?}
                     */
                    function (action) {
                        if (!action.isValid) {
                            valid = false;
                        }
                    }));
                }
            }));
        }
        return valid;
    };
    /**
     * @param {?=} callback
     * @return {?}
     */
    ValidationService.prototype.handleErrors = /**
     * @param {?=} callback
     * @return {?}
     */
    function (callback) {
        this.retrieveSummaryErrors().subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (callback)
                callback(res);
        }));
    };
    /**
     * @param {?=} callback
     * @return {?}
     */
    ValidationService.prototype.commit = /**
     * @param {?=} callback
     * @return {?}
     */
    function (callback) {
        return this.retrieveSummaryErrors().pipe(map((/**
         * @param {?} errors
         * @return {?}
         */
        function (errors) {
            if (callback)
                callback(errors);
            if (errors.length == 0)
                return true;
            return false;
        })), take(1));
    };
    /**
     * @param {?} element
     * @param {?} action
     * @param {?} option
     * @return {?}
     */
    ValidationService.prototype.setElementError = /**
     * @param {?} element
     * @param {?} action
     * @param {?} option
     * @return {?}
     */
    function (element, action, option) {
        if (!element)
            return;
        this.renderer.removeClass(element, ValidationConstant.SuccessElementClass);
        this.renderer.addClass(element, option.errorElementClass);
        /** @type {?} */
        var errorElement = this.findErrorElement(element);
        if (!errorElement) {
            errorElement = this.renderer.createElement('ul');
            this.renderer.setAttribute(errorElement, ValidationConstant.ERROR_ELEMENT_ID, "" + this._dataService.newGuid());
            this.renderer.setAttribute(errorElement, 'style', this.styles);
            this.renderer.addClass(errorElement, this.errClass);
            this.renderer.addClass(errorElement, option.errorMessageClass);
            /** @type {?} */
            var parentElement = this.renderer.parentNode(element);
            this.renderer.appendChild(parentElement, errorElement);
        }
        /** @type {?} */
        var errorItemElementKey = "" + action.id;
        /** @type {?} */
        var errorItemElement = this.findErrorItemElement(errorElement, errorItemElementKey);
        /** @type {?} */
        var dynamicSequenceId = this.findDynamicSequenceId(element);
        /** @type {?} */
        var errorMessage = action.errorMessage(element, dynamicSequenceId);
        if (!errorItemElement) {
            errorItemElement = this.renderer.createElement('li');
            this.renderer.setAttribute(errorItemElement, ValidationConstant.ERROR_ITEM_ELEMENT_ID, errorItemElementKey);
            this.renderer.appendChild(errorItemElement, this.renderer.createText(errorMessage));
            this.renderer.appendChild(errorElement, errorItemElement);
        }
        return errorMessage;
    };
    /**
     * @param {?} element
     * @param {?} action
     * @return {?}
     */
    ValidationService.prototype.clearErrorItemElement = /**
     * @param {?} element
     * @param {?} action
     * @return {?}
     */
    function (element, action) {
        /** @type {?} */
        var errorElement = this.findErrorElement(element);
        if (!errorElement)
            return;
        /** @type {?} */
        var errorItemElementKey = "" + action.id;
        /** @type {?} */
        var errorItemElement = this.findErrorItemElement(errorElement, errorItemElementKey);
        if (!errorItemElement)
            return;
        this.renderer.removeChild(errorElement, errorItemElement);
    };
    /**
     * @param {?} element
     * @param {?} option
     * @return {?}
     */
    ValidationService.prototype.validateElement = /**
     * @param {?} element
     * @param {?} option
     * @return {?}
     */
    function (element, option) {
        var _this = this;
        /** @type {?} */
        var payload = this.validator.payloadRef();
        /** @type {?} */
        var fieldValue = option.valueResolver ? option.valueResolver(payload) : null;
        /** @type {?} */
        var validatedActions$ = option.rules.map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            switch (action.key) {
                case ValidationConstant.Required: {
                    return _this.validationProvider.required(fieldValue).pipe(map((/**
                     * @param {?} isValid
                     * @return {?}
                     */
                    function (isValid) {
                        action.isValid = isValid;
                        return action;
                    })));
                }
                case ValidationConstant.Email: {
                    return _this.validationProvider.email(fieldValue).pipe(map((/**
                     * @param {?} isValid
                     * @return {?}
                     */
                    function (isValid) {
                        action.isValid = isValid;
                        return action;
                    })));
                }
                case ValidationConstant.Phone: {
                    return _this.validationProvider.phone(fieldValue).pipe(map((/**
                     * @param {?} isValid
                     * @return {?}
                     */
                    function (isValid) {
                        action.isValid = isValid;
                        return action;
                    })));
                }
                case ValidationConstant.Custom: {
                    if (!action.execute)
                        throw new Error('!action.execute');
                    if (!fieldValue) {
                        action.isValid = true;
                        return of(action);
                    }
                    else {
                        /** @type {?} */
                        var requiredRule = option.rules.find((/**
                         * @param {?} s
                         * @return {?}
                         */
                        function (s) { return s.key == ValidationConstant.Required; }));
                        if (requiredRule) {
                            requiredRule.isValid = true;
                        }
                    }
                    /** @type {?} */
                    var sequenceId = _this.findDynamicSequenceId(element);
                    return action.execute(fieldValue, payload, +sequenceId)
                        .pipe(map((/**
                     * @param {?} response
                     * @return {?}
                     */
                    function (response) {
                        if (response) {
                            action.isValid = response.status;
                            if (response.message)
                                action.errorMessage = (/**
                                 * @return {?}
                                 */
                                function () { return response.message; });
                        }
                        return action;
                    })));
                }
                default: throw new Error("Unhandled action: " + action.key);
            }
        }));
        return forkJoin(validatedActions$).pipe(take(1), map((/**
         * @param {?} validatedActions
         * @return {?}
         */
        function (validatedActions) {
            option.rules = validatedActions;
            return option;
        })));
    };
    /**
     * @private
     * @return {?}
     */
    ValidationService.prototype.retrieveSummaryErrors = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var errors$ = this.elements.map((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            /** @type {?} */
            var validationOption = _this.findElementOption(element);
            if (!validationOption)
                return;
            return _this.validateElement(element, validationOption).pipe(map((/**
             * @param {?} newOption
             * @return {?}
             */
            function (newOption) { return validationOption = newOption; })), map((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return _this.syncErrorMessages(element, option); })));
        }));
        /** @type {?} */
        var errorBatch = forkJoin(errors$);
        /** @type {?} */
        var relatedErrors = (/** @type {?} */ (this.relatedProviders.reduce((/**
         * @param {?} previous
         * @param {?} provider
         * @return {?}
         */
        function (previous, provider) {
            /** @type {?} */
            var subErrors$ = provider.retrieveSummaryErrors();
            return merge(previous, subErrors$);
        }), of([]))));
        return forkJoin(errorBatch, relatedErrors).pipe(defaultIfEmpty([[], []]), map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return tslib_1.__spread(value[0], value[1]); })), map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return [].concat(result.filter((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return error; }))); })));
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    ValidationService.prototype.findElementOption = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var validationIdAttribute = element.attributes[ValidationConstant.VALIDATION_ID];
        if (!validationIdAttribute)
            return null;
        /** @type {?} */
        var validationId = validationIdAttribute.value;
        if (!validationId)
            return null;
        return this.validator.options.find((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.validationId === validationId; }));
    };
    /**
     * @private
     * @param {?} errorElement
     * @param {?} key
     * @return {?}
     */
    ValidationService.prototype.findErrorItemElement = /**
     * @private
     * @param {?} errorElement
     * @param {?} key
     * @return {?}
     */
    function (errorElement, key) {
        /** @type {?} */
        var children = (/** @type {?} */ (Array.from(errorElement.children)));
        return children
            .filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.attributes[ValidationConstant.ERROR_ITEM_ELEMENT_ID]; }))
            .find((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.attributes[ValidationConstant.ERROR_ITEM_ELEMENT_ID].value === key; }));
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    ValidationService.prototype.findDynamicSequenceId = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var sequenceIdAttribute = element.attributes[ValidationConstant.ARRAY_SEQUENCE_ID];
        if (!sequenceIdAttribute)
            return null;
        /** @type {?} */
        var sequenceId = sequenceIdAttribute.value;
        if (!sequenceId)
            return null;
        return sequenceId;
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    ValidationService.prototype.findErrorElement = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element.parentElement && element.parentElement.children) {
            /** @type {?} */
            var slibings = (/** @type {?} */ (Array.from(element.parentElement.children)));
            /** @type {?} */
            var result = slibings.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.attributes; })).find((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.attributes[ValidationConstant.ERROR_ELEMENT_ID]; }));
            return result;
        }
        return null;
    };
    /**
     * @private
     * @return {?}
     */
    ValidationService.prototype.registerElements = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var nonDynamicOptions = this.validator.options.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return !x.dynamic; }));
        /** @type {?} */
        var nonDynamicElements = nonDynamicOptions.reduce((/**
         * @param {?} previous
         * @param {?} current
         * @return {?}
         */
        function (previous, current) {
            /** @type {?} */
            var query = "*[" + _this.attributeName + "=\"" + current.validationName + "\"]";
            if (_this.validator.scope) {
                query += "[scope=\"" + _this.validator.scope + "\"]";
            }
            /** @type {?} */
            var elements = (/** @type {?} */ (Array.from(_this.validator.formRef.nativeElement.querySelectorAll(query))));
            elements.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                /** @type {?} */
                var validationId = _this._dataService.newGuid();
                _this.renderer.setAttribute(element, ValidationConstant.VALIDATION_ID, validationId);
                current.validationId = validationId;
            }));
            return previous.concat(elements);
        }), []);
        /** @type {?} */
        var generatedDynamicOptions = [];
        /** @type {?} */
        var dynamicElements = [];
        this.validator.options = this.validator.options.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return !x.dynamic; }));
        this.virtualValidationOptions.forEach((/**
         * @param {?} current
         * @return {?}
         */
        function (current) {
            /** @type {?} */
            var query = "*[" + _this.attributeName + "=\"" + current.validationName + "\"]";
            if (_this.validator.scope) {
                query += "[scope=\"" + _this.validator.scope + "\"]";
            }
            /** @type {?} */
            var elements = Array.from(_this.validator.formRef.nativeElement.querySelectorAll(query));
            /** @type {?} */
            var clonedOptions = elements.map((/**
             * @param {?} element
             * @param {?} index
             * @return {?}
             */
            function (element, index) {
                /** @type {?} */
                var validationId = _this._dataService.newGuid();
                _this.renderer.setAttribute(element, ValidationConstant.VALIDATION_ID, validationId);
                _this.renderer.setAttribute(element, ValidationConstant.ARRAY_SEQUENCE_ID, index.toString());
                return tslib_1.__assign({}, current, { validationId: validationId, valueResolver: current.valueResolver
                        ? (/**
                         * @param {?} payload
                         * @return {?}
                         */
                        function (payload) { return current.valueResolver(payload, index); })
                        : (/**
                         * @return {?}
                         */
                        function () { return ((/** @type {?} */ (element))).value; }) });
            }));
            dynamicElements.push.apply(dynamicElements, tslib_1.__spread(elements));
            generatedDynamicOptions.push.apply(generatedDynamicOptions, tslib_1.__spread(clonedOptions));
        }));
        this.validator.options = nonDynamicOptions.concat(generatedDynamicOptions);
        this.elements = nonDynamicElements.concat(dynamicElements);
    };
    /**
     * @private
     * @return {?}
     */
    ValidationService.prototype.registerEvents = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.elements.filter((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { return element.attributes[_this.attributeName]; })).forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            if (!element.focusoutListener) {
                element.focusoutListener = _this.renderer.listen(element, 'focusout', (/**
                 * @return {?}
                 */
                function () {
                    _this.handleBlurEvent(element);
                }));
            }
        }));
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    ValidationService.prototype.handleBlurEvent = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        /** @type {?} */
        var elementOption = this.findElementOption(element);
        if (!elementOption)
            throw new Error('!elementOption');
        this.validateElement(element, elementOption).pipe(take(1)).subscribe((/**
         * @param {?} newOption
         * @return {?}
         */
        function (newOption) {
            elementOption = newOption;
            _this.syncErrorMessages(element, elementOption);
        }));
    };
    /**
     * @private
     * @param {?} element
     * @param {?} option
     * @return {?}
     */
    ValidationService.prototype.syncErrorMessages = /**
     * @private
     * @param {?} element
     * @param {?} option
     * @return {?}
     */
    function (element, option) {
        var _this = this;
        /** @type {?} */
        var errorMessages = [];
        option.rules.forEach((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            if (action.isValid) {
                _this.clearErrorItemElement(element, action);
            }
            else {
                /** @type {?} */
                var errorMessage = _this.setElementError(element, action, option);
                errorMessages.push(errorMessage);
            }
        }));
        /** @type {?} */
        var invalidActions = option.rules.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return !x.isValid; }));
        if (invalidActions.length === 0) {
            this.renderer.removeClass(element, option.errorElementClass);
            this.renderer.removeClass(element, option.successElementClass);
            return null;
        }
        return {
            element: element,
            messages: errorMessages
        };
    };
    /**
     * @private
     * @param {?} providers
     * @return {?}
     */
    ValidationService.prototype.addRelatedProviders = /**
     * @private
     * @param {?} providers
     * @return {?}
     */
    function (providers) {
        var _a;
        var _this = this;
        /** @type {?} */
        var newProviders = providers.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return _this.relatedProviders.indexOf(x) < 0; }));
        newProviders.forEach((/**
         * @param {?} provider
         * @return {?}
         */
        function (provider) {
            return provider.onDestroy.subscribe((/**
             * @return {?}
             */
            function () {
                _this.relatedProviders = _this.relatedProviders.filter((/**
                 * @return {?}
                 */
                function () { return _this.relatedProviders.indexOf(provider) < 0; }));
            }));
        }));
        (_a = this.relatedProviders).push.apply(_a, tslib_1.__spread(newProviders));
    };
    ValidationService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ValidationService.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: ValidationProvider },
        { type: DataService },
        { type: ActionService }
    ]; };
    ValidationService.propDecorators = {
        onDestroy: [{ type: Output }]
    };
    /** @nocollapse */ ValidationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ValidationService_Factory() { return new ValidationService(i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i1.ValidationProvider), i0.ɵɵinject(i2.DataService), i0.ɵɵinject(i3.ActionService)); }, token: ValidationService, providedIn: "root" });
    return ValidationService;
}());
export { ValidationService };
if (false) {
    /** @type {?} */
    ValidationService.prototype.onDestroy;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.elements;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.validator;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.errClass;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.styles;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.attributeName;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.relatedProviders;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.virtualValidationOptions;
    /**
     * @type {?}
     * @protected
     */
    ValidationService.prototype.rendererFactory;
    /**
     * @type {?}
     * @protected
     */
    ValidationService.prototype.validationProvider;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype._dataService;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype._actionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvdmFsaWRhdGlvbi92YWxpZGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWEsVUFBVSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFxQyxrQkFBa0IsRUFBZ0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN6SCxPQUFPLEVBQUUsWUFBWSxFQUFjLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUUzRDtJQWFJLDJCQUNjLGVBQWlDLEVBQ2pDLGtCQUFzQyxFQUN4QyxZQUF5QixFQUN6QixjQUE2QjtRQUgzQixvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDakMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN4QyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQWZ4QixjQUFTLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUQsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixhQUFRLEdBQVcsa0JBQWtCLENBQUMsaUJBQWlCLENBQUM7UUFDeEQsV0FBTSxHQUFXLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDO1FBQ3ZELGtCQUFhLEdBQVcsa0JBQWtCLENBQUMsYUFBYSxDQUFDO1FBRXpELHFCQUFnQixHQUF3QixF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QUNuQyxxQ0FBZ0U7Ozs7O0lBQ2hFLG1DQUErRDs7Ozs7SUFDL0QsMENBQWlFOzs7OztJQUNqRSxxQ0FBNEI7Ozs7O0lBQzVCLDZDQUFtRDs7Ozs7SUFDbkQsMENBQXlEOzs7OztJQUN6RCxxREFBMEQ7Ozs7O0lBR3RELDRDQUEyQzs7Ozs7SUFDM0MsK0NBQWdEOzs7OztJQUNoRCx5Q0FBaUM7Ozs7O0lBQ2pDLDJDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlcmVyMiwgSW5qZWN0YWJsZSwgUmVuZGVyZXJGYWN0b3J5MiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvbk9wdGlvbiwgQ2xpZW50VmFsaWRhdG9yLCBWYWxpZGF0aW9uQ29uc3RhbnQsIFN1bW1hcnlFcnJvciwgVmFsaWRhdGlvblJ1bGUgfSBmcm9tICcuL3ZhbGlkYXRpb24ubW9kZWwnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIE9ic2VydmFibGUsIGZvcmtKb2luLCBtZXJnZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCBkZWZhdWx0SWZFbXB0eSwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UsIEFjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25Qcm92aWRlciB9IGZyb20gJy4vdmFsaWRhdGlvbi5wcm92aWRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblNlcnZpY2Uge1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkRlc3Ryb3k6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIHByaXZhdGUgZWxlbWVudHM6IEVsZW1lbnRbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSB2YWxpZGF0b3I6IENsaWVudFZhbGlkYXRvcjtcclxuICAgIHByaXZhdGUgZXJyQ2xhc3M6IHN0cmluZyA9IFZhbGlkYXRpb25Db25zdGFudC5EZWZhdWx0RXJyb3JDbGFzcztcclxuICAgIHByaXZhdGUgc3R5bGVzOiBzdHJpbmcgPSBWYWxpZGF0aW9uQ29uc3RhbnQuRGVmYXVsdEVycm9yU3R5bGVzO1xyXG4gICAgcHJpdmF0ZSBhdHRyaWJ1dGVOYW1lOiBzdHJpbmcgPSBWYWxpZGF0aW9uQ29uc3RhbnQuQXR0cmlidXRlTmFtZTtcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMjtcclxuICAgIHByaXZhdGUgcmVsYXRlZFByb3ZpZGVyczogVmFsaWRhdGlvblNlcnZpY2VbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcbiAgICBwcml2YXRlIHZpcnR1YWxWYWxpZGF0aW9uT3B0aW9uczogVmFsaWRhdGlvbk9wdGlvbltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcclxuICAgICAgICBwcm90ZWN0ZWQgdmFsaWRhdGlvblByb3ZpZGVyOiBWYWxpZGF0aW9uUHJvdmlkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2FjdGlvblNlcnZpY2U6IEFjdGlvblNlcnZpY2UsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMub25EZXN0cm95LmVtaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdChtb2RlbDogeyB2YWxpZGF0b3I6IENsaWVudFZhbGlkYXRvciB9KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBtb2RlbC52YWxpZGF0b3I7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRvci5wYXlsb2FkUmVmKSB0aGlzLnZhbGlkYXRvci5wYXlsb2FkUmVmID0gKCkgPT4geyByZXR1cm4ge30gfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yLnJlbGF0ZWRWYWxpZGF0aW9uUHJvdmlkZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUmVsYXRlZFByb3ZpZGVycyh0aGlzLnZhbGlkYXRvci5yZWxhdGVkVmFsaWRhdGlvblByb3ZpZGVycyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnZhbGlkYXRvci5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKCFvcHRpb24uZGlzcGxheVRleHQpIG9wdGlvbi5kaXNwbGF5VGV4dCA9IG9wdGlvbi52YWxpZGF0aW9uTmFtZTtcclxuICAgICAgICAgICAgaWYgKCFvcHRpb24ucGF5bG9hZFJlZikgb3B0aW9uLnBheWxvYWRSZWYgPSB0aGlzLnZhbGlkYXRvci5wYXlsb2FkUmVmO1xyXG4gICAgICAgICAgICBvcHRpb24ucnVsZXMuZm9yRWFjaChhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uaWQpIGFjdGlvbi5pZCA9IHRoaXMuX2RhdGFTZXJ2aWNlLm5ld0d1aWQoKTtcclxuICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLmVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uLmtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZhbGlkYXRpb25Db25zdGFudC5SZXF1aXJlZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmVycm9yTWVzc2FnZSA9IChlbGVtZW50OiBFbGVtZW50LCByb3dJbmRleDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzcGxheWluZ1Jvd0luZGV4ID0gKCtyb3dJbmRleCArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke29wdGlvbi5kaXNwbGF5VGV4dH0ke29wdGlvbi5keW5hbWljID8gJyBbJyArIGRpc3BsYXlpbmdSb3dJbmRleCArICddJyA6ICcnfSAke3RoaXMudmFsaWRhdG9yLnJlcXVpcmVkTWVzc2FnZX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5lcnJvck1lc3NhZ2UgPSAoKSA9PiBgJHtvcHRpb24uZGlzcGxheVRleHR9ICR7dGhpcy52YWxpZGF0b3IuaW52YWxpZE1lc3NhZ2V9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnZpcnR1YWxWYWxpZGF0aW9uT3B0aW9ucyA9IHRoaXMudmFsaWRhdG9yLm9wdGlvbnMuZmlsdGVyKHggPT4geC5keW5hbWljKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFzeW5jKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZUFzeW5jKHJlbGF0ZWRQcm92aWRlcnNUb1JlZ2lzdGVyPzogVmFsaWRhdGlvblNlcnZpY2VbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2FjdGlvblNlcnZpY2UuZXhlY3V0ZUFzeW5jKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlbGF0ZWRQcm92aWRlcnNUb1JlZ2lzdGVyICYmIHJlbGF0ZWRQcm92aWRlcnNUb1JlZ2lzdGVyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRSZWxhdGVkUHJvdmlkZXJzKHJlbGF0ZWRQcm92aWRlcnNUb1JlZ2lzdGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRWxlbWVudHMoKTtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGVjdXRlQXN5bmModmFsaWRDYWxsYmFjazogKGVycm9ycz86IFN1bW1hcnlFcnJvcltdKSA9PiBhbnksIGludmFsaWRDYWxsYmFjaz86IChlcnJvcnM/OiBTdW1tYXJ5RXJyb3JbXSkgPT4gYW55KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICAgICAgdGhpcy5yZXRyaWV2ZVN1bW1hcnlFcnJvcnMoKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2UgfHwgcmVzcG9uc2UubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZENhbGxiYWNrKSB2YWxpZENhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvZih0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnZhbGlkQ2FsbGJhY2spIGludmFsaWRDYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gb2YodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzVmFsaWQoc2hvdzogYm9vbGVhbiA9IHRydWUsIGZvY3VzOiBib29sZWFuID0gdHJ1ZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChzaG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmV0cmlldmVTdW1tYXJ5RXJyb3JzKCkuc3Vic2NyaWJlKChlcnJvcnM6IFN1bW1hcnlFcnJvcltdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm9jdXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JzICYmIGVycm9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb2N1c0VsZW1lbnQgPSBlcnJvcnNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IDxhbnk+Zm9jdXNFbGVtZW50LmVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWN0aW9uU2VydmljZS5leGVjdXRlQXN5bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvci5vcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uLnJ1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnJ1bGVzLmZvckVhY2goKGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhbmRsZUVycm9ycyhjYWxsYmFjaz86IChyZXNwb25zZTogU3VtbWFyeUVycm9yW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJldHJpZXZlU3VtbWFyeUVycm9ycygpLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2socmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tbWl0KGNhbGxiYWNrPzogRnVuY3Rpb24pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXRyaWV2ZVN1bW1hcnlFcnJvcnMoKS5waXBlKFxyXG4gICAgICAgICAgICBtYXAoZXJyb3JzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID09IDApIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9KSwgdGFrZSgxKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEVsZW1lbnRFcnJvcihlbGVtZW50OiBFbGVtZW50LCBhY3Rpb246IFZhbGlkYXRpb25SdWxlLCBvcHRpb246IFZhbGlkYXRpb25PcHRpb24pOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgVmFsaWRhdGlvbkNvbnN0YW50LlN1Y2Nlc3NFbGVtZW50Q2xhc3MpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgb3B0aW9uLmVycm9yRWxlbWVudENsYXNzKTtcclxuICAgICAgICBsZXQgZXJyb3JFbGVtZW50ID0gdGhpcy5maW5kRXJyb3JFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIGlmICghZXJyb3JFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVycm9yRWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZXJyb3JFbGVtZW50LCBWYWxpZGF0aW9uQ29uc3RhbnQuRVJST1JfRUxFTUVOVF9JRCwgYCR7dGhpcy5fZGF0YVNlcnZpY2UubmV3R3VpZCgpfWApO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlcnJvckVsZW1lbnQsICdzdHlsZScsIHRoaXMuc3R5bGVzKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlcnJvckVsZW1lbnQsIHRoaXMuZXJyQ2xhc3MpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVycm9yRWxlbWVudCwgb3B0aW9uLmVycm9yTWVzc2FnZUNsYXNzKTtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZShlbGVtZW50KTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChwYXJlbnRFbGVtZW50LCBlcnJvckVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZXJyb3JJdGVtRWxlbWVudEtleTogc3RyaW5nID0gYCR7YWN0aW9uLmlkfWA7XHJcbiAgICAgICAgbGV0IGVycm9ySXRlbUVsZW1lbnQgPSB0aGlzLmZpbmRFcnJvckl0ZW1FbGVtZW50KGVycm9yRWxlbWVudCwgZXJyb3JJdGVtRWxlbWVudEtleSk7XHJcbiAgICAgICAgY29uc3QgZHluYW1pY1NlcXVlbmNlSWQgPSB0aGlzLmZpbmREeW5hbWljU2VxdWVuY2VJZChlbGVtZW50KTtcclxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBhY3Rpb24uZXJyb3JNZXNzYWdlKGVsZW1lbnQsIGR5bmFtaWNTZXF1ZW5jZUlkKTtcclxuXHJcbiAgICAgICAgaWYgKCFlcnJvckl0ZW1FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVycm9ySXRlbUVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVycm9ySXRlbUVsZW1lbnQsIFZhbGlkYXRpb25Db25zdGFudC5FUlJPUl9JVEVNX0VMRU1FTlRfSUQsIGVycm9ySXRlbUVsZW1lbnRLZXkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGVycm9ySXRlbUVsZW1lbnQsIHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dChlcnJvck1lc3NhZ2UpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoZXJyb3JFbGVtZW50LCBlcnJvckl0ZW1FbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVycm9yTWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXJFcnJvckl0ZW1FbGVtZW50KGVsZW1lbnQ6IGFueSwgYWN0aW9uOiBWYWxpZGF0aW9uUnVsZSkge1xyXG4gICAgICAgIGxldCBlcnJvckVsZW1lbnQgPSB0aGlzLmZpbmRFcnJvckVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKCFlcnJvckVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZXJyb3JJdGVtRWxlbWVudEtleTogc3RyaW5nID0gYCR7YWN0aW9uLmlkfWA7XHJcbiAgICAgICAgbGV0IGVycm9ySXRlbUVsZW1lbnQgPSB0aGlzLmZpbmRFcnJvckl0ZW1FbGVtZW50KGVycm9yRWxlbWVudCwgZXJyb3JJdGVtRWxlbWVudEtleSk7XHJcbiAgICAgICAgaWYgKCFlcnJvckl0ZW1FbGVtZW50KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChlcnJvckVsZW1lbnQsIGVycm9ySXRlbUVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZUVsZW1lbnQoZWxlbWVudDogYW55LCBvcHRpb246IFZhbGlkYXRpb25PcHRpb24pOiBPYnNlcnZhYmxlPFZhbGlkYXRpb25PcHRpb24+IHtcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0gdGhpcy52YWxpZGF0b3IucGF5bG9hZFJlZigpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPSBvcHRpb24udmFsdWVSZXNvbHZlciA/IG9wdGlvbi52YWx1ZVJlc29sdmVyKHBheWxvYWQpIDogbnVsbDtcclxuICAgICAgICBjb25zdCB2YWxpZGF0ZWRBY3Rpb25zJCA9IG9wdGlvbi5ydWxlcy5tYXAoYWN0aW9uID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24ua2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFZhbGlkYXRpb25Db25zdGFudC5SZXF1aXJlZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25Qcm92aWRlci5yZXF1aXJlZChmaWVsZFZhbHVlKS5waXBlKG1hcChpc1ZhbGlkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmlzVmFsaWQgPSBpc1ZhbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgVmFsaWRhdGlvbkNvbnN0YW50LkVtYWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblByb3ZpZGVyLmVtYWlsKGZpZWxkVmFsdWUpLnBpcGUobWFwKGlzVmFsaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uaXNWYWxpZCA9IGlzVmFsaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBWYWxpZGF0aW9uQ29uc3RhbnQuUGhvbmU6IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uUHJvdmlkZXIucGhvbmUoZmllbGRWYWx1ZSkucGlwZShtYXAoaXNWYWxpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5pc1ZhbGlkID0gaXNWYWxpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIFZhbGlkYXRpb25Db25zdGFudC5DdXN0b206IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5leGVjdXRlKSB0aHJvdyBuZXcgRXJyb3IoJyFhY3Rpb24uZXhlY3V0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZmllbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXF1aXJlZFJ1bGUgPSBvcHRpb24ucnVsZXMuZmluZChzID0+IHMua2V5ID09IFZhbGlkYXRpb25Db25zdGFudC5SZXF1aXJlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZFJ1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkUnVsZS5pc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXF1ZW5jZUlkID0gdGhpcy5maW5kRHluYW1pY1NlcXVlbmNlSWQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5leGVjdXRlKGZpZWxkVmFsdWUsIHBheWxvYWQsICtzZXF1ZW5jZUlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucGlwZShtYXAocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmlzVmFsaWQgPSByZXNwb25zZS5zdGF0dXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm1lc3NhZ2UpIGFjdGlvbi5lcnJvck1lc3NhZ2UgPSAoKSA9PiB7IHJldHVybiByZXNwb25zZS5tZXNzYWdlOyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgYWN0aW9uOiAke2FjdGlvbi5rZXl9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZvcmtKb2luKHZhbGlkYXRlZEFjdGlvbnMkKS5waXBlKFxyXG4gICAgICAgICAgICB0YWtlKDEpLFxyXG4gICAgICAgICAgICBtYXAodmFsaWRhdGVkQWN0aW9ucyA9PiB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24ucnVsZXMgPSB2YWxpZGF0ZWRBY3Rpb25zO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJldHJpZXZlU3VtbWFyeUVycm9ycygpOiBPYnNlcnZhYmxlPFN1bW1hcnlFcnJvcltdPiB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JzJCA9IHRoaXMuZWxlbWVudHMubWFwKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdmFsaWRhdGlvbk9wdGlvbiA9IHRoaXMuZmluZEVsZW1lbnRPcHRpb24oZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGlvbk9wdGlvbikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVFbGVtZW50KGVsZW1lbnQsIHZhbGlkYXRpb25PcHRpb24pLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBtYXAobmV3T3B0aW9uID0+IHZhbGlkYXRpb25PcHRpb24gPSBuZXdPcHRpb24pLFxyXG4gICAgICAgICAgICAgICAgbWFwKG9wdGlvbiA9PiB0aGlzLnN5bmNFcnJvck1lc3NhZ2VzKGVsZW1lbnQsIG9wdGlvbikpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBlcnJvckJhdGNoID0gZm9ya0pvaW4oZXJyb3JzJCk7XHJcbiAgICAgICAgY29uc3QgcmVsYXRlZEVycm9ycyA9IDxPYnNlcnZhYmxlPFN1bW1hcnlFcnJvcltdPj50aGlzLnJlbGF0ZWRQcm92aWRlcnMucmVkdWNlKChwcmV2aW91czogT2JzZXJ2YWJsZTxTdW1tYXJ5RXJyb3JbXT4sIHByb3ZpZGVyOiBWYWxpZGF0aW9uU2VydmljZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdWJFcnJvcnMkID0gcHJvdmlkZXIucmV0cmlldmVTdW1tYXJ5RXJyb3JzKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXJnZShwcmV2aW91cywgc3ViRXJyb3JzJCk7XHJcbiAgICAgICAgfSwgb2YoW10pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZvcmtKb2luKGVycm9yQmF0Y2gsIHJlbGF0ZWRFcnJvcnMpLnBpcGUoXHJcbiAgICAgICAgICAgIGRlZmF1bHRJZkVtcHR5KFtbXSwgW11dKSxcclxuICAgICAgICAgICAgbWFwKHZhbHVlID0+IFsuLi52YWx1ZVswXSwgLi4udmFsdWVbMV1dKSxcclxuICAgICAgICAgICAgbWFwKHJlc3VsdCA9PiBbXS5jb25jYXQocmVzdWx0LmZpbHRlcihlcnJvciA9PiBlcnJvcikpKSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmluZEVsZW1lbnRPcHRpb24oZWxlbWVudDogRWxlbWVudCk6IFZhbGlkYXRpb25PcHRpb24gfCBudWxsIHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uSWRBdHRyaWJ1dGUgPSBlbGVtZW50LmF0dHJpYnV0ZXNbVmFsaWRhdGlvbkNvbnN0YW50LlZBTElEQVRJT05fSURdO1xyXG4gICAgICAgIGlmICghdmFsaWRhdGlvbklkQXR0cmlidXRlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbklkID0gdmFsaWRhdGlvbklkQXR0cmlidXRlLnZhbHVlO1xyXG4gICAgICAgIGlmICghdmFsaWRhdGlvbklkKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3Iub3B0aW9ucy5maW5kKG9wdGlvbiA9PiBvcHRpb24udmFsaWRhdGlvbklkID09PSB2YWxpZGF0aW9uSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmluZEVycm9ySXRlbUVsZW1lbnQoZXJyb3JFbGVtZW50OiBhbnksIGtleTogc3RyaW5nKTogYW55IHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSA8RWxlbWVudFtdPkFycmF5LmZyb20oZXJyb3JFbGVtZW50LmNoaWxkcmVuKTtcclxuICAgICAgICByZXR1cm4gY2hpbGRyZW5cclxuICAgICAgICAgICAgLmZpbHRlcih4ID0+IHguYXR0cmlidXRlc1tWYWxpZGF0aW9uQ29uc3RhbnQuRVJST1JfSVRFTV9FTEVNRU5UX0lEXSlcclxuICAgICAgICAgICAgLmZpbmQoeCA9PiB4LmF0dHJpYnV0ZXNbVmFsaWRhdGlvbkNvbnN0YW50LkVSUk9SX0lURU1fRUxFTUVOVF9JRF0udmFsdWUgPT09IGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaW5kRHluYW1pY1NlcXVlbmNlSWQoZWxlbWVudDogRWxlbWVudCk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IHNlcXVlbmNlSWRBdHRyaWJ1dGUgPSBlbGVtZW50LmF0dHJpYnV0ZXNbVmFsaWRhdGlvbkNvbnN0YW50LkFSUkFZX1NFUVVFTkNFX0lEXTtcclxuICAgICAgICBpZiAoIXNlcXVlbmNlSWRBdHRyaWJ1dGUpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBzZXF1ZW5jZUlkID0gc2VxdWVuY2VJZEF0dHJpYnV0ZS52YWx1ZTtcclxuICAgICAgICBpZiAoIXNlcXVlbmNlSWQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiBzZXF1ZW5jZUlkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmluZEVycm9yRWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogRWxlbWVudCB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudCAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgY29uc3Qgc2xpYmluZ3MgPSA8RWxlbWVudFtdPkFycmF5LmZyb20oZWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHNsaWJpbmdzLmZpbHRlcih4ID0+IHguYXR0cmlidXRlcykuZmluZCh4ID0+IHguYXR0cmlidXRlc1tWYWxpZGF0aW9uQ29uc3RhbnQuRVJST1JfRUxFTUVOVF9JRF0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyRWxlbWVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgbm9uRHluYW1pY09wdGlvbnMgPSB0aGlzLnZhbGlkYXRvci5vcHRpb25zLmZpbHRlcih4ID0+ICF4LmR5bmFtaWMpO1xyXG4gICAgICAgIGNvbnN0IG5vbkR5bmFtaWNFbGVtZW50cyA9IG5vbkR5bmFtaWNPcHRpb25zLnJlZHVjZSgocHJldmlvdXM6IEVsZW1lbnRbXSwgY3VycmVudDogVmFsaWRhdGlvbk9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcXVlcnkgPSBgKlske3RoaXMuYXR0cmlidXRlTmFtZX09XCIke2N1cnJlbnQudmFsaWRhdGlvbk5hbWV9XCJdYDtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yLnNjb3BlKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeSArPSBgW3Njb3BlPVwiJHt0aGlzLnZhbGlkYXRvci5zY29wZX1cIl1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gPEVsZW1lbnRbXT5BcnJheS5mcm9tKHRoaXMudmFsaWRhdG9yLmZvcm1SZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uSWQgPSB0aGlzLl9kYXRhU2VydmljZS5uZXdHdWlkKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50LCBWYWxpZGF0aW9uQ29uc3RhbnQuVkFMSURBVElPTl9JRCwgdmFsaWRhdGlvbklkKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQudmFsaWRhdGlvbklkID0gdmFsaWRhdGlvbklkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzLmNvbmNhdChlbGVtZW50cyk7XHJcbiAgICAgICAgfSwgW10pO1xyXG5cclxuICAgICAgICBsZXQgZ2VuZXJhdGVkRHluYW1pY09wdGlvbnMgPSBbXTtcclxuICAgICAgICBsZXQgZHluYW1pY0VsZW1lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3Iub3B0aW9ucyA9IHRoaXMudmFsaWRhdG9yLm9wdGlvbnMuZmlsdGVyKHggPT4gIXguZHluYW1pYyk7XHJcbiAgICAgICAgdGhpcy52aXJ0dWFsVmFsaWRhdGlvbk9wdGlvbnMuZm9yRWFjaCgoY3VycmVudDogVmFsaWRhdGlvbk9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcXVlcnkgPSBgKlske3RoaXMuYXR0cmlidXRlTmFtZX09XCIke2N1cnJlbnQudmFsaWRhdGlvbk5hbWV9XCJdYDtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yLnNjb3BlKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeSArPSBgW3Njb3BlPVwiJHt0aGlzLnZhbGlkYXRvci5zY29wZX1cIl1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbSh0aGlzLnZhbGlkYXRvci5mb3JtUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSkpO1xyXG4gICAgICAgICAgICBjb25zdCBjbG9uZWRPcHRpb25zID0gZWxlbWVudHMubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbklkID0gdGhpcy5fZGF0YVNlcnZpY2UubmV3R3VpZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudCwgVmFsaWRhdGlvbkNvbnN0YW50LlZBTElEQVRJT05fSUQsIHZhbGlkYXRpb25JZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50LCBWYWxpZGF0aW9uQ29uc3RhbnQuQVJSQVlfU0VRVUVOQ0VfSUQsIGluZGV4LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25JZDogdmFsaWRhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlUmVzb2x2ZXI6IGN1cnJlbnQudmFsdWVSZXNvbHZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChwYXlsb2FkOiBhbnkpID0+IGN1cnJlbnQudmFsdWVSZXNvbHZlcihwYXlsb2FkLCBpbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoKSA9PiB7IHJldHVybiAoPGFueT5lbGVtZW50KS52YWx1ZTsgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGR5bmFtaWNFbGVtZW50cy5wdXNoKC4uLmVsZW1lbnRzKTtcclxuICAgICAgICAgICAgZ2VuZXJhdGVkRHluYW1pY09wdGlvbnMucHVzaCguLi5jbG9uZWRPcHRpb25zKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3Iub3B0aW9ucyA9IG5vbkR5bmFtaWNPcHRpb25zLmNvbmNhdChnZW5lcmF0ZWREeW5hbWljT3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IG5vbkR5bmFtaWNFbGVtZW50cy5jb25jYXQoZHluYW1pY0VsZW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyRXZlbnRzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5hdHRyaWJ1dGVzW3RoaXMuYXR0cmlidXRlTmFtZV0pLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQuZm9jdXNvdXRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5mb2N1c291dExpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oZWxlbWVudCwgJ2ZvY3Vzb3V0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQmx1ckV2ZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUJsdXJFdmVudChlbGVtZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZWxlbWVudE9wdGlvbiA9IHRoaXMuZmluZEVsZW1lbnRPcHRpb24oZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50T3B0aW9uKSB0aHJvdyBuZXcgRXJyb3IoJyFlbGVtZW50T3B0aW9uJyk7XHJcblxyXG4gICAgICAgIHRoaXMudmFsaWRhdGVFbGVtZW50KGVsZW1lbnQsIGVsZW1lbnRPcHRpb24pLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKG5ld09wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRPcHRpb24gPSBuZXdPcHRpb247XHJcbiAgICAgICAgICAgIHRoaXMuc3luY0Vycm9yTWVzc2FnZXMoZWxlbWVudCwgZWxlbWVudE9wdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzeW5jRXJyb3JNZXNzYWdlcyhlbGVtZW50OiBhbnksIG9wdGlvbjogVmFsaWRhdGlvbk9wdGlvbik6IFN1bW1hcnlFcnJvciB8IG51bGwge1xyXG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2VzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIG9wdGlvbi5ydWxlcy5mb3JFYWNoKGFjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24uaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckVycm9ySXRlbUVsZW1lbnQoZWxlbWVudCwgYWN0aW9uKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHRoaXMuc2V0RWxlbWVudEVycm9yKGVsZW1lbnQsIGFjdGlvbiwgb3B0aW9uKTtcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZXMucHVzaChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGludmFsaWRBY3Rpb25zID0gb3B0aW9uLnJ1bGVzLmZpbHRlcih4ID0+ICF4LmlzVmFsaWQpO1xyXG4gICAgICAgIGlmIChpbnZhbGlkQWN0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBvcHRpb24uZXJyb3JFbGVtZW50Q2xhc3MpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIG9wdGlvbi5zdWNjZXNzRWxlbWVudENsYXNzKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgICAgICAgICBtZXNzYWdlczogZXJyb3JNZXNzYWdlc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFJlbGF0ZWRQcm92aWRlcnMocHJvdmlkZXJzOiBWYWxpZGF0aW9uU2VydmljZVtdKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG5ld1Byb3ZpZGVycyA9IHByb3ZpZGVycy5maWx0ZXIoeCA9PiB0aGlzLnJlbGF0ZWRQcm92aWRlcnMuaW5kZXhPZih4KSA8IDApO1xyXG4gICAgICAgIG5ld1Byb3ZpZGVycy5mb3JFYWNoKHByb3ZpZGVyID0+XHJcbiAgICAgICAgICAgIHByb3ZpZGVyLm9uRGVzdHJveS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWxhdGVkUHJvdmlkZXJzID0gdGhpcy5yZWxhdGVkUHJvdmlkZXJzLmZpbHRlcigoKSA9PiB0aGlzLnJlbGF0ZWRQcm92aWRlcnMuaW5kZXhPZihwcm92aWRlcikgPCAwKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMucmVsYXRlZFByb3ZpZGVycy5wdXNoKC4uLm5ld1Byb3ZpZGVycyk7XHJcbiAgICB9XHJcbn0iXX0=