/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, RendererFactory2, EventEmitter, Output } from '@angular/core';
import { ValidationConstant, ChangedItem } from './validation.model';
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
        this.changedItems = [];
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
     * @param {?=} callback
     * @return {?}
     */
    ValidationService.prototype.isDirty = /**
     * @param {?=} callback
     * @return {?}
     */
    function (callback) {
        if (!this.changedItems || this.changedItems.length == 0)
            return false;
        /** @type {?} */
        var response = this.changedItems.filter((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.change; }));
        if (callback)
            callback(response);
        return response.length > 0;
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
            if (option.relevantFields)
                _this.validateRelevantFields(option.relevantFields(payload));
            option.rules = validatedActions;
            return option;
        })));
    };
    /**
     * @private
     * @param {?=} relevantFields
     * @return {?}
     */
    ValidationService.prototype.validateRelevantFields = /**
     * @private
     * @param {?=} relevantFields
     * @return {?}
     */
    function (relevantFields) {
        var _this = this;
        if (!relevantFields || relevantFields.length == 0)
            return;
        if (relevantFields && relevantFields.length > 0) {
            relevantFields.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                var _loop_1 = function (i) {
                    attributes = _this.elements[i].attributes;
                    if (attributes && attributes.length > 0) {
                        if (attributes[_this.attributeName].value == item) {
                            option = _this.findElementOption(_this.elements[i]);
                            if (option) {
                                _this.validateElement(_this.elements[i], option).pipe(map((/**
                                 * @param {?} newOption
                                 * @return {?}
                                 */
                                function (newOption) { return option = newOption; })), map((/**
                                 * @param {?} option
                                 * @return {?}
                                 */
                                function (option) { return _this.syncErrorMessages(_this.elements[i], option); }))).subscribe();
                            }
                            return "break";
                        }
                    }
                };
                var attributes, option;
                for (var i = 0; i < _this.elements.length; i++) {
                    var state_1 = _loop_1(i);
                    if (state_1 === "break")
                        break;
                }
            }));
        }
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
        if (this.elements) {
            this.changedItems = [];
            this.elements.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                /** @type {?} */
                var payload = _this.validator.payloadRef();
                /** @type {?} */
                var elementOption = _this.findElementOption(element);
                _this.changedItems.push(new ChangedItem({
                    id: elementOption.validationId,
                    field: elementOption.validationName,
                    oldValue: elementOption.valueResolver ? elementOption.valueResolver(payload) : null
                }));
            }));
        }
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
                element.focusoutListener = _this.renderer.listen(element, 'change', (/**
                 * @param {?} $event
                 * @return {?}
                 */
                function ($event) {
                    /** @type {?} */
                    var payload = _this.validator.payloadRef();
                    /** @type {?} */
                    var elementOption = _this.findElementOption(element);
                    /** @type {?} */
                    var value = elementOption.valueResolver ? elementOption.valueResolver(payload) : null;
                    if (elementOption && elementOption.dirtyCheck) {
                        /** @type {?} */
                        var currentItem = _this.changedItems.find((/**
                         * @param {?} s
                         * @return {?}
                         */
                        function (s) { return s.id == elementOption.validationId; }));
                        if (!currentItem) {
                            _this.changedItems.push(new ChangedItem({
                                id: elementOption.validationId,
                                field: elementOption.validationName,
                                value: value,
                                change: true
                            }));
                        }
                        else {
                            currentItem.value = value;
                            if (currentItem.oldValue == undefined || currentItem.oldValue == '') {
                                if (value == undefined || value == '') {
                                    currentItem.change = false;
                                }
                                else {
                                    currentItem.change = true;
                                }
                            }
                            else {
                                if (value == undefined || value == '') {
                                    currentItem.change = true;
                                }
                                else {
                                    if (currentItem.oldValue.toString() != currentItem.value.toString()) {
                                        currentItem.change = true;
                                    }
                                    else {
                                        currentItem.change = false;
                                    }
                                }
                            }
                        }
                    }
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
     * @private
     */
    ValidationService.prototype.changedItems;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvdmFsaWRhdGlvbi92YWxpZGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWEsVUFBVSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFxQyxrQkFBa0IsRUFBZ0MsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEksT0FBTyxFQUFFLFlBQVksRUFBYyxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRSxPQUFPLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFFM0Q7SUFjSSwyQkFDYyxlQUFpQyxFQUNqQyxrQkFBc0MsRUFDeEMsWUFBeUIsRUFDekIsY0FBNkI7UUFIM0Isb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ2pDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDeEMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFoQnhCLGNBQVMsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1RCxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBRXpCLGFBQVEsR0FBVyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQztRQUN4RCxXQUFNLEdBQVcsa0JBQWtCLENBQUMsa0JBQWtCLENBQUM7UUFDdkQsa0JBQWEsR0FBVyxrQkFBa0IsQ0FBQyxhQUFhLENBQUM7UUFFekQscUJB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QUN6QixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU07OztnQkFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQTNDLENBQTJDLEVBQUMsQ0FBQztZQUM1RyxDQUFDLEVBQUM7UUFGRixDQUVFLEVBQUMsQ0FBQztRQUNSLENBQUEsS0FBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUEsQ0FBQyxJQUFJLDRCQUFJLFlBQVksR0FBRTtJQUNoRCxDQUFDOztnQkE5Y0osVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFQRixnQkFBZ0I7Z0JBS3ZDLGtCQUFrQjtnQkFEbEIsV0FBVztnQkFBRSxhQUFhOzs7NEJBSzlCLE1BQU07Ozs0QkFUWDtDQXNkQyxBQS9jRCxJQStjQztTQTljWSxpQkFBaUI7OztJQUMxQixzQ0FBb0U7Ozs7O0lBQ3BFLHFDQUFpQzs7Ozs7SUFDakMsc0NBQW1DOzs7OztJQUNuQyxxQ0FBZ0U7Ozs7O0lBQ2hFLG1DQUErRDs7Ozs7SUFDL0QsMENBQWlFOzs7OztJQUNqRSxxQ0FBNEI7Ozs7O0lBQzVCLDZDQUFtRDs7Ozs7SUFDbkQsMENBQXlEOzs7OztJQUN6RCxxREFBMEQ7Ozs7O0lBQzFELHlDQUF5Qzs7Ozs7SUFHckMsNENBQTJDOzs7OztJQUMzQywrQ0FBZ0Q7Ozs7O0lBQ2hELHlDQUFpQzs7Ozs7SUFDakMsMkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVuZGVyZXIyLCBJbmplY3RhYmxlLCBSZW5kZXJlckZhY3RvcnkyLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uT3B0aW9uLCBDbGllbnRWYWxpZGF0b3IsIFZhbGlkYXRpb25Db25zdGFudCwgU3VtbWFyeUVycm9yLCBWYWxpZGF0aW9uUnVsZSwgQ2hhbmdlZEl0ZW0gfSBmcm9tICcuL3ZhbGlkYXRpb24ubW9kZWwnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIE9ic2VydmFibGUsIGZvcmtKb2luLCBtZXJnZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCBkZWZhdWx0SWZFbXB0eSwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UsIEFjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25Qcm92aWRlciB9IGZyb20gJy4vdmFsaWRhdGlvbi5wcm92aWRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblNlcnZpY2Uge1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkRlc3Ryb3k6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIHByaXZhdGUgZWxlbWVudHM6IEVsZW1lbnRbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSB2YWxpZGF0b3I6IENsaWVudFZhbGlkYXRvcjtcclxuICAgIHByaXZhdGUgZXJyQ2xhc3M6IHN0cmluZyA9IFZhbGlkYXRpb25Db25zdGFudC5EZWZhdWx0RXJyb3JDbGFzcztcclxuICAgIHByaXZhdGUgc3R5bGVzOiBzdHJpbmcgPSBWYWxpZGF0aW9uQ29uc3RhbnQuRGVmYXVsdEVycm9yU3R5bGVzO1xyXG4gICAgcHJpdmF0ZSBhdHRyaWJ1dGVOYW1lOiBzdHJpbmcgPSBWYWxpZGF0aW9uQ29uc3RhbnQuQXR0cmlidXRlTmFtZTtcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMjtcclxuICAgIHByaXZhdGUgcmVsYXRlZFByb3ZpZGVyczogVmFsaWRhdGlvblNlcnZpY2VbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcbiAgICBwcml2YXRlIHZpcnR1YWxWYWxpZGF0aW9uT3B0aW9uczogVmFsaWRhdGlvbk9wdGlvbltdID0gW107XHJcbiAgICBwcml2YXRlIGNoYW5nZWRJdGVtczogQ2hhbmdlZEl0ZW1bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RlY3RlZCByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXHJcbiAgICAgICAgcHJvdGVjdGVkIHZhbGlkYXRpb25Qcm92aWRlcjogVmFsaWRhdGlvblByb3ZpZGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9hY3Rpb25TZXJ2aWNlOiBBY3Rpb25TZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMub25EZXN0cm95LmVtaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdChtb2RlbDogeyB2YWxpZGF0b3I6IENsaWVudFZhbGlkYXRvciB9KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBtb2RlbC52YWxpZGF0b3I7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRvci5wYXlsb2FkUmVmKSB0aGlzLnZhbGlkYXRvci5wYXlsb2FkUmVmID0gKCkgPT4geyByZXR1cm4ge30gfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yLnJlbGF0ZWRWYWxpZGF0aW9uUHJvdmlkZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUmVsYXRlZFByb3ZpZGVycyh0aGlzLnZhbGlkYXRvci5yZWxhdGVkVmFsaWRhdGlvblByb3ZpZGVycyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnZhbGlkYXRvci5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKCFvcHRpb24uZGlzcGxheVRleHQpIG9wdGlvbi5kaXNwbGF5VGV4dCA9IG9wdGlvbi52YWxpZGF0aW9uTmFtZTtcclxuICAgICAgICAgICAgaWYgKCFvcHRpb24ucGF5bG9hZFJlZikgb3B0aW9uLnBheWxvYWRSZWYgPSB0aGlzLnZhbGlkYXRvci5wYXlsb2FkUmVmO1xyXG4gICAgICAgICAgICBvcHRpb24ucnVsZXMuZm9yRWFjaChhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uaWQpIGFjdGlvbi5pZCA9IHRoaXMuX2RhdGFTZXJ2aWNlLm5ld0d1aWQoKTtcclxuICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLmVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uLmtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFZhbGlkYXRpb25Db25zdGFudC5SZXF1aXJlZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmVycm9yTWVzc2FnZSA9IChlbGVtZW50OiBFbGVtZW50LCByb3dJbmRleDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzcGxheWluZ1Jvd0luZGV4ID0gKCtyb3dJbmRleCArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke29wdGlvbi5kaXNwbGF5VGV4dH0ke29wdGlvbi5keW5hbWljID8gJyBbJyArIGRpc3BsYXlpbmdSb3dJbmRleCArICddJyA6ICcnfSAke3RoaXMudmFsaWRhdG9yLnJlcXVpcmVkTWVzc2FnZX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5lcnJvck1lc3NhZ2UgPSAoKSA9PiBgJHtvcHRpb24uZGlzcGxheVRleHR9ICR7dGhpcy52YWxpZGF0b3IuaW52YWxpZE1lc3NhZ2V9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnZpcnR1YWxWYWxpZGF0aW9uT3B0aW9ucyA9IHRoaXMudmFsaWRhdG9yLm9wdGlvbnMuZmlsdGVyKHggPT4geC5keW5hbWljKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFzeW5jKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZUFzeW5jKHJlbGF0ZWRQcm92aWRlcnNUb1JlZ2lzdGVyPzogVmFsaWRhdGlvblNlcnZpY2VbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2FjdGlvblNlcnZpY2UuZXhlY3V0ZUFzeW5jKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlbGF0ZWRQcm92aWRlcnNUb1JlZ2lzdGVyICYmIHJlbGF0ZWRQcm92aWRlcnNUb1JlZ2lzdGVyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRSZWxhdGVkUHJvdmlkZXJzKHJlbGF0ZWRQcm92aWRlcnNUb1JlZ2lzdGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRWxlbWVudHMoKTtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGVjdXRlQXN5bmModmFsaWRDYWxsYmFjazogKGVycm9ycz86IFN1bW1hcnlFcnJvcltdKSA9PiBhbnksIGludmFsaWRDYWxsYmFjaz86IChlcnJvcnM/OiBTdW1tYXJ5RXJyb3JbXSkgPT4gYW55KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICAgICAgdGhpcy5yZXRyaWV2ZVN1bW1hcnlFcnJvcnMoKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2UgfHwgcmVzcG9uc2UubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZENhbGxiYWNrKSB2YWxpZENhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvZih0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnZhbGlkQ2FsbGJhY2spIGludmFsaWRDYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gb2YodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzVmFsaWQoc2hvdzogYm9vbGVhbiA9IHRydWUsIGZvY3VzOiBib29sZWFuID0gdHJ1ZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChzaG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmV0cmlldmVTdW1tYXJ5RXJyb3JzKCkuc3Vic2NyaWJlKChlcnJvcnM6IFN1bW1hcnlFcnJvcltdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm9jdXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JzICYmIGVycm9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb2N1c0VsZW1lbnQgPSBlcnJvcnNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IDxhbnk+Zm9jdXNFbGVtZW50LmVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWN0aW9uU2VydmljZS5leGVjdXRlQXN5bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvci5vcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uLnJ1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnJ1bGVzLmZvckVhY2goKGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhbmRsZUVycm9ycyhjYWxsYmFjaz86IChyZXNwb25zZTogU3VtbWFyeUVycm9yW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJldHJpZXZlU3VtbWFyeUVycm9ycygpLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2socmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tbWl0KGNhbGxiYWNrPzogRnVuY3Rpb24pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXRyaWV2ZVN1bW1hcnlFcnJvcnMoKS5waXBlKFxyXG4gICAgICAgICAgICBtYXAoZXJyb3JzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID09IDApIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9KSwgdGFrZSgxKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEVsZW1lbnRFcnJvcihlbGVtZW50OiBFbGVtZW50LCBhY3Rpb246IFZhbGlkYXRpb25SdWxlLCBvcHRpb246IFZhbGlkYXRpb25PcHRpb24pOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgVmFsaWRhdGlvbkNvbnN0YW50LlN1Y2Nlc3NFbGVtZW50Q2xhc3MpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgb3B0aW9uLmVycm9yRWxlbWVudENsYXNzKTtcclxuICAgICAgICBsZXQgZXJyb3JFbGVtZW50ID0gdGhpcy5maW5kRXJyb3JFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIGlmICghZXJyb3JFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVycm9yRWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZXJyb3JFbGVtZW50LCBWYWxpZGF0aW9uQ29uc3RhbnQuRVJST1JfRUxFTUVOVF9JRCwgYCR7dGhpcy5fZGF0YVNlcnZpY2UubmV3R3VpZCgpfWApO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlcnJvckVsZW1lbnQsICdzdHlsZScsIHRoaXMuc3R5bGVzKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlcnJvckVsZW1lbnQsIHRoaXMuZXJyQ2xhc3MpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVycm9yRWxlbWVudCwgb3B0aW9uLmVycm9yTWVzc2FnZUNsYXNzKTtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZShlbGVtZW50KTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChwYXJlbnRFbGVtZW50LCBlcnJvckVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZXJyb3JJdGVtRWxlbWVudEtleTogc3RyaW5nID0gYCR7YWN0aW9uLmlkfWA7XHJcbiAgICAgICAgbGV0IGVycm9ySXRlbUVsZW1lbnQgPSB0aGlzLmZpbmRFcnJvckl0ZW1FbGVtZW50KGVycm9yRWxlbWVudCwgZXJyb3JJdGVtRWxlbWVudEtleSk7XHJcbiAgICAgICAgY29uc3QgZHluYW1pY1NlcXVlbmNlSWQgPSB0aGlzLmZpbmREeW5hbWljU2VxdWVuY2VJZChlbGVtZW50KTtcclxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBhY3Rpb24uZXJyb3JNZXNzYWdlKGVsZW1lbnQsIGR5bmFtaWNTZXF1ZW5jZUlkKTtcclxuXHJcbiAgICAgICAgaWYgKCFlcnJvckl0ZW1FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVycm9ySXRlbUVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVycm9ySXRlbUVsZW1lbnQsIFZhbGlkYXRpb25Db25zdGFudC5FUlJPUl9JVEVNX0VMRU1FTlRfSUQsIGVycm9ySXRlbUVsZW1lbnRLZXkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGVycm9ySXRlbUVsZW1lbnQsIHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dChlcnJvck1lc3NhZ2UpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoZXJyb3JFbGVtZW50LCBlcnJvckl0ZW1FbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVycm9yTWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXJFcnJvckl0ZW1FbGVtZW50KGVsZW1lbnQ6IGFueSwgYWN0aW9uOiBWYWxpZGF0aW9uUnVsZSkge1xyXG4gICAgICAgIGxldCBlcnJvckVsZW1lbnQgPSB0aGlzLmZpbmRFcnJvckVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKCFlcnJvckVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZXJyb3JJdGVtRWxlbWVudEtleTogc3RyaW5nID0gYCR7YWN0aW9uLmlkfWA7XHJcbiAgICAgICAgbGV0IGVycm9ySXRlbUVsZW1lbnQgPSB0aGlzLmZpbmRFcnJvckl0ZW1FbGVtZW50KGVycm9yRWxlbWVudCwgZXJyb3JJdGVtRWxlbWVudEtleSk7XHJcbiAgICAgICAgaWYgKCFlcnJvckl0ZW1FbGVtZW50KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChlcnJvckVsZW1lbnQsIGVycm9ySXRlbUVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0RpcnR5KGNhbGxiYWNrPzogKGl0ZW1zOiBDaGFuZ2VkSXRlbVtdKSA9PiB2b2lkKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5nZWRJdGVtcyB8fCB0aGlzLmNoYW5nZWRJdGVtcy5sZW5ndGggPT0gMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHZhciByZXNwb25zZSA9IHRoaXMuY2hhbmdlZEl0ZW1zLmZpbHRlcihzID0+IHMuY2hhbmdlKTtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGVFbGVtZW50KGVsZW1lbnQ6IGFueSwgb3B0aW9uOiBWYWxpZGF0aW9uT3B0aW9uKTogT2JzZXJ2YWJsZTxWYWxpZGF0aW9uT3B0aW9uPiB7XHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHRoaXMudmFsaWRhdG9yLnBheWxvYWRSZWYoKTtcclxuICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gb3B0aW9uLnZhbHVlUmVzb2x2ZXIgPyBvcHRpb24udmFsdWVSZXNvbHZlcihwYXlsb2FkKSA6IG51bGw7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkQWN0aW9ucyQgPSBvcHRpb24ucnVsZXMubWFwKGFjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uLmtleSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBWYWxpZGF0aW9uQ29uc3RhbnQuUmVxdWlyZWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uUHJvdmlkZXIucmVxdWlyZWQoZmllbGRWYWx1ZSkucGlwZShtYXAoaXNWYWxpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5pc1ZhbGlkID0gaXNWYWxpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIFZhbGlkYXRpb25Db25zdGFudC5FbWFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25Qcm92aWRlci5lbWFpbChmaWVsZFZhbHVlKS5waXBlKG1hcChpc1ZhbGlkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmlzVmFsaWQgPSBpc1ZhbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgVmFsaWRhdGlvbkNvbnN0YW50LlBob25lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblByb3ZpZGVyLnBob25lKGZpZWxkVmFsdWUpLnBpcGUobWFwKGlzVmFsaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uaXNWYWxpZCA9IGlzVmFsaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBWYWxpZGF0aW9uQ29uc3RhbnQuQ3VzdG9tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uZXhlY3V0ZSkgdGhyb3cgbmV3IEVycm9yKCchYWN0aW9uLmV4ZWN1dGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZpZWxkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YoYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVxdWlyZWRSdWxlID0gb3B0aW9uLnJ1bGVzLmZpbmQocyA9PiBzLmtleSA9PSBWYWxpZGF0aW9uQ29uc3RhbnQuUmVxdWlyZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWRSdWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFJ1bGUuaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VxdWVuY2VJZCA9IHRoaXMuZmluZER5bmFtaWNTZXF1ZW5jZUlkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24uZXhlY3V0ZShmaWVsZFZhbHVlLCBwYXlsb2FkLCArc2VxdWVuY2VJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnBpcGUobWFwKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5pc1ZhbGlkID0gcmVzcG9uc2Uuc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5tZXNzYWdlKSBhY3Rpb24uZXJyb3JNZXNzYWdlID0gKCkgPT4geyByZXR1cm4gcmVzcG9uc2UubWVzc2FnZTsgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbjogJHthY3Rpb24ua2V5fWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmb3JrSm9pbih2YWxpZGF0ZWRBY3Rpb25zJCkucGlwZShcclxuICAgICAgICAgICAgdGFrZSgxKSxcclxuICAgICAgICAgICAgbWFwKHZhbGlkYXRlZEFjdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5yZWxldmFudEZpZWxkcykgdGhpcy52YWxpZGF0ZVJlbGV2YW50RmllbGRzKG9wdGlvbi5yZWxldmFudEZpZWxkcyhwYXlsb2FkKSk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24ucnVsZXMgPSB2YWxpZGF0ZWRBY3Rpb25zO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhbGlkYXRlUmVsZXZhbnRGaWVsZHMocmVsZXZhbnRGaWVsZHM/OiBzdHJpbmdbXSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghcmVsZXZhbnRGaWVsZHMgfHwgcmVsZXZhbnRGaWVsZHMubGVuZ3RoID09IDApIHJldHVybjtcclxuICAgICAgICBpZiAocmVsZXZhbnRGaWVsZHMgJiYgcmVsZXZhbnRGaWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZWxldmFudEZpZWxkcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSB0aGlzLmVsZW1lbnRzW2ldLmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMgJiYgYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzW3RoaXMuYXR0cmlidXRlTmFtZV0udmFsdWUgPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IHRoaXMuZmluZEVsZW1lbnRPcHRpb24odGhpcy5lbGVtZW50c1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUVsZW1lbnQodGhpcy5lbGVtZW50c1tpXSwgb3B0aW9uKS5waXBlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAobmV3T3B0aW9uID0+IG9wdGlvbiA9IG5ld09wdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcChvcHRpb24gPT4gdGhpcy5zeW5jRXJyb3JNZXNzYWdlcyh0aGlzLmVsZW1lbnRzW2ldLCBvcHRpb24pKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJldHJpZXZlU3VtbWFyeUVycm9ycygpOiBPYnNlcnZhYmxlPFN1bW1hcnlFcnJvcltdPiB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JzJCA9IHRoaXMuZWxlbWVudHMubWFwKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdmFsaWRhdGlvbk9wdGlvbiA9IHRoaXMuZmluZEVsZW1lbnRPcHRpb24oZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGlvbk9wdGlvbikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVFbGVtZW50KGVsZW1lbnQsIHZhbGlkYXRpb25PcHRpb24pLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBtYXAobmV3T3B0aW9uID0+IHZhbGlkYXRpb25PcHRpb24gPSBuZXdPcHRpb24pLFxyXG4gICAgICAgICAgICAgICAgbWFwKG9wdGlvbiA9PiB0aGlzLnN5bmNFcnJvck1lc3NhZ2VzKGVsZW1lbnQsIG9wdGlvbikpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBlcnJvckJhdGNoID0gZm9ya0pvaW4oZXJyb3JzJCk7XHJcbiAgICAgICAgY29uc3QgcmVsYXRlZEVycm9ycyA9IDxPYnNlcnZhYmxlPFN1bW1hcnlFcnJvcltdPj50aGlzLnJlbGF0ZWRQcm92aWRlcnMucmVkdWNlKChwcmV2aW91czogT2JzZXJ2YWJsZTxTdW1tYXJ5RXJyb3JbXT4sIHByb3ZpZGVyOiBWYWxpZGF0aW9uU2VydmljZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdWJFcnJvcnMkID0gcHJvdmlkZXIucmV0cmlldmVTdW1tYXJ5RXJyb3JzKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXJnZShwcmV2aW91cywgc3ViRXJyb3JzJCk7XHJcbiAgICAgICAgfSwgb2YoW10pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZvcmtKb2luKGVycm9yQmF0Y2gsIHJlbGF0ZWRFcnJvcnMpLnBpcGUoXHJcbiAgICAgICAgICAgIGRlZmF1bHRJZkVtcHR5KFtbXSwgW11dKSxcclxuICAgICAgICAgICAgbWFwKHZhbHVlID0+IFsuLi52YWx1ZVswXSwgLi4udmFsdWVbMV1dKSxcclxuICAgICAgICAgICAgbWFwKHJlc3VsdCA9PiBbXS5jb25jYXQocmVzdWx0LmZpbHRlcihlcnJvciA9PiBlcnJvcikpKSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmluZEVsZW1lbnRPcHRpb24oZWxlbWVudDogRWxlbWVudCk6IFZhbGlkYXRpb25PcHRpb24gfCBudWxsIHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uSWRBdHRyaWJ1dGUgPSBlbGVtZW50LmF0dHJpYnV0ZXNbVmFsaWRhdGlvbkNvbnN0YW50LlZBTElEQVRJT05fSURdO1xyXG4gICAgICAgIGlmICghdmFsaWRhdGlvbklkQXR0cmlidXRlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbklkID0gdmFsaWRhdGlvbklkQXR0cmlidXRlLnZhbHVlO1xyXG4gICAgICAgIGlmICghdmFsaWRhdGlvbklkKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3Iub3B0aW9ucy5maW5kKG9wdGlvbiA9PiBvcHRpb24udmFsaWRhdGlvbklkID09PSB2YWxpZGF0aW9uSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmluZEVycm9ySXRlbUVsZW1lbnQoZXJyb3JFbGVtZW50OiBhbnksIGtleTogc3RyaW5nKTogYW55IHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSA8RWxlbWVudFtdPkFycmF5LmZyb20oZXJyb3JFbGVtZW50LmNoaWxkcmVuKTtcclxuICAgICAgICByZXR1cm4gY2hpbGRyZW5cclxuICAgICAgICAgICAgLmZpbHRlcih4ID0+IHguYXR0cmlidXRlc1tWYWxpZGF0aW9uQ29uc3RhbnQuRVJST1JfSVRFTV9FTEVNRU5UX0lEXSlcclxuICAgICAgICAgICAgLmZpbmQoeCA9PiB4LmF0dHJpYnV0ZXNbVmFsaWRhdGlvbkNvbnN0YW50LkVSUk9SX0lURU1fRUxFTUVOVF9JRF0udmFsdWUgPT09IGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaW5kRHluYW1pY1NlcXVlbmNlSWQoZWxlbWVudDogRWxlbWVudCk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IHNlcXVlbmNlSWRBdHRyaWJ1dGUgPSBlbGVtZW50LmF0dHJpYnV0ZXNbVmFsaWRhdGlvbkNvbnN0YW50LkFSUkFZX1NFUVVFTkNFX0lEXTtcclxuICAgICAgICBpZiAoIXNlcXVlbmNlSWRBdHRyaWJ1dGUpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBzZXF1ZW5jZUlkID0gc2VxdWVuY2VJZEF0dHJpYnV0ZS52YWx1ZTtcclxuICAgICAgICBpZiAoIXNlcXVlbmNlSWQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiBzZXF1ZW5jZUlkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmluZEVycm9yRWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogRWxlbWVudCB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudCAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgY29uc3Qgc2xpYmluZ3MgPSA8RWxlbWVudFtdPkFycmF5LmZyb20oZWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHNsaWJpbmdzLmZpbHRlcih4ID0+IHguYXR0cmlidXRlcykuZmluZCh4ID0+IHguYXR0cmlidXRlc1tWYWxpZGF0aW9uQ29uc3RhbnQuRVJST1JfRUxFTUVOVF9JRF0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyRWxlbWVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgbm9uRHluYW1pY09wdGlvbnMgPSB0aGlzLnZhbGlkYXRvci5vcHRpb25zLmZpbHRlcih4ID0+ICF4LmR5bmFtaWMpO1xyXG4gICAgICAgIGNvbnN0IG5vbkR5bmFtaWNFbGVtZW50cyA9IG5vbkR5bmFtaWNPcHRpb25zLnJlZHVjZSgocHJldmlvdXM6IEVsZW1lbnRbXSwgY3VycmVudDogVmFsaWRhdGlvbk9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcXVlcnkgPSBgKlske3RoaXMuYXR0cmlidXRlTmFtZX09XCIke2N1cnJlbnQudmFsaWRhdGlvbk5hbWV9XCJdYDtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yLnNjb3BlKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeSArPSBgW3Njb3BlPVwiJHt0aGlzLnZhbGlkYXRvci5zY29wZX1cIl1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gPEVsZW1lbnRbXT5BcnJheS5mcm9tKHRoaXMudmFsaWRhdG9yLmZvcm1SZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uSWQgPSB0aGlzLl9kYXRhU2VydmljZS5uZXdHdWlkKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50LCBWYWxpZGF0aW9uQ29uc3RhbnQuVkFMSURBVElPTl9JRCwgdmFsaWRhdGlvbklkKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQudmFsaWRhdGlvbklkID0gdmFsaWRhdGlvbklkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzLmNvbmNhdChlbGVtZW50cyk7XHJcbiAgICAgICAgfSwgW10pO1xyXG5cclxuICAgICAgICBsZXQgZ2VuZXJhdGVkRHluYW1pY09wdGlvbnMgPSBbXTtcclxuICAgICAgICBsZXQgZHluYW1pY0VsZW1lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3Iub3B0aW9ucyA9IHRoaXMudmFsaWRhdG9yLm9wdGlvbnMuZmlsdGVyKHggPT4gIXguZHluYW1pYyk7XHJcbiAgICAgICAgdGhpcy52aXJ0dWFsVmFsaWRhdGlvbk9wdGlvbnMuZm9yRWFjaCgoY3VycmVudDogVmFsaWRhdGlvbk9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcXVlcnkgPSBgKlske3RoaXMuYXR0cmlidXRlTmFtZX09XCIke2N1cnJlbnQudmFsaWRhdGlvbk5hbWV9XCJdYDtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yLnNjb3BlKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeSArPSBgW3Njb3BlPVwiJHt0aGlzLnZhbGlkYXRvci5zY29wZX1cIl1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbSh0aGlzLnZhbGlkYXRvci5mb3JtUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSkpO1xyXG4gICAgICAgICAgICBjb25zdCBjbG9uZWRPcHRpb25zID0gZWxlbWVudHMubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbklkID0gdGhpcy5fZGF0YVNlcnZpY2UubmV3R3VpZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudCwgVmFsaWRhdGlvbkNvbnN0YW50LlZBTElEQVRJT05fSUQsIHZhbGlkYXRpb25JZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50LCBWYWxpZGF0aW9uQ29uc3RhbnQuQVJSQVlfU0VRVUVOQ0VfSUQsIGluZGV4LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25JZDogdmFsaWRhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlUmVzb2x2ZXI6IGN1cnJlbnQudmFsdWVSZXNvbHZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChwYXlsb2FkOiBhbnkpID0+IGN1cnJlbnQudmFsdWVSZXNvbHZlcihwYXlsb2FkLCBpbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoKSA9PiB7IHJldHVybiAoPGFueT5lbGVtZW50KS52YWx1ZTsgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGR5bmFtaWNFbGVtZW50cy5wdXNoKC4uLmVsZW1lbnRzKTtcclxuICAgICAgICAgICAgZ2VuZXJhdGVkRHluYW1pY09wdGlvbnMucHVzaCguLi5jbG9uZWRPcHRpb25zKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3Iub3B0aW9ucyA9IG5vbkR5bmFtaWNPcHRpb25zLmNvbmNhdChnZW5lcmF0ZWREeW5hbWljT3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IG5vbkR5bmFtaWNFbGVtZW50cy5jb25jYXQoZHluYW1pY0VsZW1lbnRzKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHMpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gdGhpcy52YWxpZGF0b3IucGF5bG9hZFJlZigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRPcHRpb24gPSB0aGlzLmZpbmRFbGVtZW50T3B0aW9uKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMucHVzaChuZXcgQ2hhbmdlZEl0ZW0oe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBlbGVtZW50T3B0aW9uLnZhbGlkYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogZWxlbWVudE9wdGlvbi52YWxpZGF0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogZWxlbWVudE9wdGlvbi52YWx1ZVJlc29sdmVyID8gZWxlbWVudE9wdGlvbi52YWx1ZVJlc29sdmVyKHBheWxvYWQpIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlckV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQuYXR0cmlidXRlc1t0aGlzLmF0dHJpYnV0ZU5hbWVdKS5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlbGVtZW50LmZvY3Vzb3V0TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXNvdXRMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKGVsZW1lbnQsICdmb2N1c291dCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUJsdXJFdmVudChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5mb2N1c291dExpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oZWxlbWVudCwgJ2NoYW5nZScsICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gdGhpcy52YWxpZGF0b3IucGF5bG9hZFJlZigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50T3B0aW9uID0gdGhpcy5maW5kRWxlbWVudE9wdGlvbihlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBlbGVtZW50T3B0aW9uLnZhbHVlUmVzb2x2ZXIgPyBlbGVtZW50T3B0aW9uLnZhbHVlUmVzb2x2ZXIocGF5bG9hZCkgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50T3B0aW9uICYmIGVsZW1lbnRPcHRpb24uZGlydHlDaGVjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudEl0ZW0gPSB0aGlzLmNoYW5nZWRJdGVtcy5maW5kKHMgPT4gcy5pZCA9PSBlbGVtZW50T3B0aW9uLnZhbGlkYXRpb25JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY3VycmVudEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zLnB1c2gobmV3IENoYW5nZWRJdGVtKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZWxlbWVudE9wdGlvbi52YWxpZGF0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGVsZW1lbnRPcHRpb24udmFsaWRhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW0udmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbS5vbGRWYWx1ZSA9PSB1bmRlZmluZWQgfHwgY3VycmVudEl0ZW0ub2xkVmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gdW5kZWZpbmVkIHx8IHZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLmNoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLmNoYW5nZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gdW5kZWZpbmVkIHx8IHZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLmNoYW5nZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtLm9sZFZhbHVlLnRvU3RyaW5nKCkgIT0gY3VycmVudEl0ZW0udmFsdWUudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW0uY2hhbmdlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbS5jaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVCbHVyRXZlbnQoZWxlbWVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnRPcHRpb24gPSB0aGlzLmZpbmRFbGVtZW50T3B0aW9uKGVsZW1lbnQpO1xyXG4gICAgICAgIGlmICghZWxlbWVudE9wdGlvbikgdGhyb3cgbmV3IEVycm9yKCchZWxlbWVudE9wdGlvbicpO1xyXG5cclxuICAgICAgICB0aGlzLnZhbGlkYXRlRWxlbWVudChlbGVtZW50LCBlbGVtZW50T3B0aW9uKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZShuZXdPcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50T3B0aW9uID0gbmV3T3B0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLnN5bmNFcnJvck1lc3NhZ2VzKGVsZW1lbnQsIGVsZW1lbnRPcHRpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3luY0Vycm9yTWVzc2FnZXMoZWxlbWVudDogYW55LCBvcHRpb246IFZhbGlkYXRpb25PcHRpb24pOiBTdW1tYXJ5RXJyb3IgfCBudWxsIHtcclxuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBvcHRpb24ucnVsZXMuZm9yRWFjaChhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJFcnJvckl0ZW1FbGVtZW50KGVsZW1lbnQsIGFjdGlvbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLnNldEVsZW1lbnRFcnJvcihlbGVtZW50LCBhY3Rpb24sIG9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBpbnZhbGlkQWN0aW9ucyA9IG9wdGlvbi5ydWxlcy5maWx0ZXIoeCA9PiAheC5pc1ZhbGlkKTtcclxuICAgICAgICBpZiAoaW52YWxpZEFjdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgb3B0aW9uLmVycm9yRWxlbWVudENsYXNzKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBvcHRpb24uc3VjY2Vzc0VsZW1lbnRDbGFzcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgbWVzc2FnZXM6IGVycm9yTWVzc2FnZXNcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRSZWxhdGVkUHJvdmlkZXJzKHByb3ZpZGVyczogVmFsaWRhdGlvblNlcnZpY2VbXSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBuZXdQcm92aWRlcnMgPSBwcm92aWRlcnMuZmlsdGVyKHggPT4gdGhpcy5yZWxhdGVkUHJvdmlkZXJzLmluZGV4T2YoeCkgPCAwKTtcclxuICAgICAgICBuZXdQcm92aWRlcnMuZm9yRWFjaChwcm92aWRlciA9PlxyXG4gICAgICAgICAgICBwcm92aWRlci5vbkRlc3Ryb3kuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVsYXRlZFByb3ZpZGVycyA9IHRoaXMucmVsYXRlZFByb3ZpZGVycy5maWx0ZXIoKCkgPT4gdGhpcy5yZWxhdGVkUHJvdmlkZXJzLmluZGV4T2YocHJvdmlkZXIpIDwgMCk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLnJlbGF0ZWRQcm92aWRlcnMucHVzaCguLi5uZXdQcm92aWRlcnMpO1xyXG4gICAgfVxyXG59Il19