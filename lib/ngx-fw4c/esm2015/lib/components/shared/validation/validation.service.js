/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class ValidationService {
    /**
     * @param {?} rendererFactory
     * @param {?} validationProvider
     * @param {?} _dataService
     * @param {?} _actionService
     */
    constructor(rendererFactory, validationProvider, _dataService, _actionService) {
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
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.onDestroy.emit();
    }
    /**
     * @param {?} model
     * @return {?}
     */
    init(model) {
        this.validator = model.validator;
        if (!this.validator.payloadRef)
            this.validator.payloadRef = (/**
             * @return {?}
             */
            () => { return {}; });
        if (this.validator.relatedValidationProviders) {
            this.addRelatedProviders(this.validator.relatedValidationProviders);
        }
        this.validator.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            if (!option.displayText)
                option.displayText = option.validationName;
            if (!option.payloadRef)
                option.payloadRef = this.validator.payloadRef;
            option.rules.forEach((/**
             * @param {?} action
             * @return {?}
             */
            action => {
                if (!action.id)
                    action.id = this._dataService.newGuid();
                if (!action.errorMessage) {
                    switch (action.key) {
                        case ValidationConstant.Required: {
                            action.errorMessage = (/**
                             * @param {?} element
                             * @param {?} rowIndex
                             * @return {?}
                             */
                            (element, rowIndex) => {
                                /** @type {?} */
                                const displayingRowIndex = (+rowIndex + 1).toString();
                                return `${option.displayText}${option.dynamic ? ' [' + displayingRowIndex + ']' : ''} ${this.validator.requiredMessage}`;
                            });
                            break;
                        }
                        default: {
                            action.errorMessage = (/**
                             * @return {?}
                             */
                            () => `${option.displayText} ${this.validator.invalidMessage}`);
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
        x => x.dynamic));
        this.updateAsync();
    }
    /**
     * @param {?=} relatedProvidersToRegister
     * @return {?}
     */
    updateAsync(relatedProvidersToRegister) {
        this._actionService.executeAsync((/**
         * @return {?}
         */
        () => {
            if (relatedProvidersToRegister && relatedProvidersToRegister.length) {
                this.addRelatedProviders(relatedProvidersToRegister);
            }
            this.registerElements();
            this.registerEvents();
        }));
    }
    /**
     * @param {?} validCallback
     * @param {?=} invalidCallback
     * @return {?}
     */
    executeAsync(validCallback, invalidCallback) {
        this.retrieveSummaryErrors().subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
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
    }
    /**
     * @param {?=} show
     * @param {?=} focus
     * @return {?}
     */
    isValid(show = true, focus = true) {
        if (show) {
            this.retrieveSummaryErrors().subscribe((/**
             * @param {?} errors
             * @return {?}
             */
            (errors) => {
                if (focus) {
                    if (errors && errors.length > 0) {
                        /** @type {?} */
                        var focusElement = errors[0];
                        /** @type {?} */
                        var el = (/** @type {?} */ (focusElement.element));
                        if (el) {
                            this._actionService.executeAsync((/**
                             * @return {?}
                             */
                            () => {
                                el.focus();
                            }));
                        }
                    }
                }
            }));
        }
        /** @type {?} */
        let valid = true;
        if (this.validator.options) {
            this.validator.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            (option) => {
                if (option.rules) {
                    option.rules.forEach((/**
                     * @param {?} action
                     * @return {?}
                     */
                    (action) => {
                        if (!action.isValid) {
                            valid = false;
                        }
                    }));
                }
            }));
        }
        return valid;
    }
    /**
     * @param {?=} callback
     * @return {?}
     */
    handleErrors(callback) {
        this.retrieveSummaryErrors().subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (callback)
                callback(res);
        }));
    }
    /**
     * @param {?=} callback
     * @return {?}
     */
    commit(callback) {
        return this.retrieveSummaryErrors().pipe(map((/**
         * @param {?} errors
         * @return {?}
         */
        errors => {
            if (callback)
                callback(errors);
            if (errors.length == 0)
                return true;
            return false;
        })), take(1));
    }
    /**
     * @param {?} element
     * @param {?} action
     * @param {?} option
     * @return {?}
     */
    setElementError(element, action, option) {
        if (!element)
            return;
        this.renderer.removeClass(element, ValidationConstant.SuccessElementClass);
        this.renderer.addClass(element, option.errorElementClass);
        /** @type {?} */
        let errorElement = this.findErrorElement(element);
        if (!errorElement) {
            errorElement = this.renderer.createElement('ul');
            this.renderer.setAttribute(errorElement, ValidationConstant.ERROR_ELEMENT_ID, `${this._dataService.newGuid()}`);
            this.renderer.setAttribute(errorElement, 'style', this.styles);
            this.renderer.addClass(errorElement, this.errClass);
            this.renderer.addClass(errorElement, option.errorMessageClass);
            /** @type {?} */
            const parentElement = this.renderer.parentNode(element);
            this.renderer.appendChild(parentElement, errorElement);
        }
        /** @type {?} */
        const errorItemElementKey = `${action.id}`;
        /** @type {?} */
        let errorItemElement = this.findErrorItemElement(errorElement, errorItemElementKey);
        /** @type {?} */
        const dynamicSequenceId = this.findDynamicSequenceId(element);
        /** @type {?} */
        const errorMessage = action.errorMessage(element, dynamicSequenceId);
        if (!errorItemElement) {
            errorItemElement = this.renderer.createElement('li');
            this.renderer.setAttribute(errorItemElement, ValidationConstant.ERROR_ITEM_ELEMENT_ID, errorItemElementKey);
            this.renderer.appendChild(errorItemElement, this.renderer.createText(errorMessage));
            this.renderer.appendChild(errorElement, errorItemElement);
        }
        return errorMessage;
    }
    /**
     * @param {?} element
     * @param {?} action
     * @return {?}
     */
    clearErrorItemElement(element, action) {
        /** @type {?} */
        let errorElement = this.findErrorElement(element);
        if (!errorElement)
            return;
        /** @type {?} */
        const errorItemElementKey = `${action.id}`;
        /** @type {?} */
        let errorItemElement = this.findErrorItemElement(errorElement, errorItemElementKey);
        if (!errorItemElement)
            return;
        this.renderer.removeChild(errorElement, errorItemElement);
    }
    /**
     * @param {?=} callback
     * @return {?}
     */
    isDirty(callback) {
        if (!this.changedItems || this.changedItems.length == 0)
            return false;
        /** @type {?} */
        var response = this.changedItems.filter((/**
         * @param {?} s
         * @return {?}
         */
        s => s.change));
        if (callback)
            callback(response);
        return response.length > 0;
    }
    /**
     * @param {?} element
     * @param {?} option
     * @return {?}
     */
    validateElement(element, option) {
        /** @type {?} */
        const payload = this.validator.payloadRef();
        /** @type {?} */
        const fieldValue = option.valueResolver ? option.valueResolver(payload) : null;
        /** @type {?} */
        const validatedActions$ = option.rules.map((/**
         * @param {?} action
         * @return {?}
         */
        action => {
            switch (action.key) {
                case ValidationConstant.Required: {
                    return this.validationProvider.required(fieldValue).pipe(map((/**
                     * @param {?} isValid
                     * @return {?}
                     */
                    isValid => {
                        action.isValid = isValid;
                        return action;
                    })));
                }
                case ValidationConstant.Email: {
                    return this.validationProvider.email(fieldValue).pipe(map((/**
                     * @param {?} isValid
                     * @return {?}
                     */
                    isValid => {
                        action.isValid = isValid;
                        return action;
                    })));
                }
                case ValidationConstant.Phone: {
                    return this.validationProvider.phone(fieldValue).pipe(map((/**
                     * @param {?} isValid
                     * @return {?}
                     */
                    isValid => {
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
                        s => s.key == ValidationConstant.Required));
                        if (requiredRule) {
                            requiredRule.isValid = true;
                        }
                    }
                    /** @type {?} */
                    const sequenceId = this.findDynamicSequenceId(element);
                    return action.execute(fieldValue, payload, +sequenceId)
                        .pipe(map((/**
                     * @param {?} response
                     * @return {?}
                     */
                    response => {
                        if (response) {
                            action.isValid = response.status;
                            if (response.message)
                                action.errorMessage = (/**
                                 * @return {?}
                                 */
                                () => { return response.message; });
                        }
                        return action;
                    })));
                }
                default: throw new Error(`Unhandled action: ${action.key}`);
            }
        }));
        return forkJoin(validatedActions$).pipe(take(1), map((/**
         * @param {?} validatedActions
         * @return {?}
         */
        validatedActions => {
            if (option.relevantFields)
                this.validateRelevantFields(option.relevantFields(payload));
            option.rules = validatedActions;
            return option;
        })));
    }
    /**
     * @private
     * @param {?=} relevantFields
     * @return {?}
     */
    validateRelevantFields(relevantFields) {
        if (!relevantFields || relevantFields.length == 0)
            return;
        if (relevantFields && relevantFields.length > 0) {
            relevantFields.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                for (let i = 0; i < this.elements.length; i++) {
                    /** @type {?} */
                    var attributes = this.elements[i].attributes;
                    if (attributes && attributes.length > 0) {
                        if (attributes[this.attributeName].value == item) {
                            /** @type {?} */
                            var option = this.findElementOption(this.elements[i]);
                            if (option) {
                                this.validateElement(this.elements[i], option).pipe(map((/**
                                 * @param {?} newOption
                                 * @return {?}
                                 */
                                newOption => option = newOption)), map((/**
                                 * @param {?} option
                                 * @return {?}
                                 */
                                option => this.syncErrorMessages(this.elements[i], option)))).subscribe();
                            }
                            break;
                        }
                    }
                }
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    retrieveSummaryErrors() {
        /** @type {?} */
        const errors$ = this.elements.map((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            /** @type {?} */
            let validationOption = this.findElementOption(element);
            if (!validationOption)
                return;
            return this.validateElement(element, validationOption).pipe(map((/**
             * @param {?} newOption
             * @return {?}
             */
            newOption => validationOption = newOption)), map((/**
             * @param {?} option
             * @return {?}
             */
            option => this.syncErrorMessages(element, option))));
        }));
        /** @type {?} */
        const errorBatch = forkJoin(errors$);
        /** @type {?} */
        const relatedErrors = (/** @type {?} */ (this.relatedProviders.reduce((/**
         * @param {?} previous
         * @param {?} provider
         * @return {?}
         */
        (previous, provider) => {
            /** @type {?} */
            const subErrors$ = provider.retrieveSummaryErrors();
            return merge(previous, subErrors$);
        }), of([]))));
        return forkJoin(errorBatch, relatedErrors).pipe(defaultIfEmpty([[], []]), map((/**
         * @param {?} value
         * @return {?}
         */
        value => [...value[0], ...value[1]])), map((/**
         * @param {?} result
         * @return {?}
         */
        result => [].concat(result.filter((/**
         * @param {?} error
         * @return {?}
         */
        error => error))))));
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    findElementOption(element) {
        /** @type {?} */
        const validationIdAttribute = element.attributes[ValidationConstant.VALIDATION_ID];
        if (!validationIdAttribute)
            return null;
        /** @type {?} */
        const validationId = validationIdAttribute.value;
        if (!validationId)
            return null;
        return this.validator.options.find((/**
         * @param {?} option
         * @return {?}
         */
        option => option.validationId === validationId));
    }
    /**
     * @private
     * @param {?} errorElement
     * @param {?} key
     * @return {?}
     */
    findErrorItemElement(errorElement, key) {
        /** @type {?} */
        const children = (/** @type {?} */ (Array.from(errorElement.children)));
        return children
            .filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.attributes[ValidationConstant.ERROR_ITEM_ELEMENT_ID]))
            .find((/**
         * @param {?} x
         * @return {?}
         */
        x => x.attributes[ValidationConstant.ERROR_ITEM_ELEMENT_ID].value === key));
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    findDynamicSequenceId(element) {
        /** @type {?} */
        const sequenceIdAttribute = element.attributes[ValidationConstant.ARRAY_SEQUENCE_ID];
        if (!sequenceIdAttribute)
            return null;
        /** @type {?} */
        const sequenceId = sequenceIdAttribute.value;
        if (!sequenceId)
            return null;
        return sequenceId;
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    findErrorElement(element) {
        if (element.parentElement && element.parentElement.children) {
            /** @type {?} */
            const slibings = (/** @type {?} */ (Array.from(element.parentElement.children)));
            /** @type {?} */
            let result = slibings.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.attributes)).find((/**
             * @param {?} x
             * @return {?}
             */
            x => x.attributes[ValidationConstant.ERROR_ELEMENT_ID]));
            return result;
        }
        return null;
    }
    /**
     * @private
     * @return {?}
     */
    registerElements() {
        /** @type {?} */
        const nonDynamicOptions = this.validator.options.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !x.dynamic));
        /** @type {?} */
        const nonDynamicElements = nonDynamicOptions.reduce((/**
         * @param {?} previous
         * @param {?} current
         * @return {?}
         */
        (previous, current) => {
            /** @type {?} */
            let query = `*[${this.attributeName}="${current.validationName}"]`;
            if (this.validator.scope) {
                query += `[scope="${this.validator.scope}"]`;
            }
            /** @type {?} */
            const elements = (/** @type {?} */ (Array.from(this.validator.formRef.nativeElement.querySelectorAll(query))));
            elements.forEach((/**
             * @param {?} element
             * @return {?}
             */
            element => {
                /** @type {?} */
                const validationId = this._dataService.newGuid();
                this.renderer.setAttribute(element, ValidationConstant.VALIDATION_ID, validationId);
                current.validationId = validationId;
            }));
            return previous.concat(elements);
        }), []);
        /** @type {?} */
        let generatedDynamicOptions = [];
        /** @type {?} */
        let dynamicElements = [];
        this.validator.options = this.validator.options.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !x.dynamic));
        this.virtualValidationOptions.forEach((/**
         * @param {?} current
         * @return {?}
         */
        (current) => {
            /** @type {?} */
            let query = `*[${this.attributeName}="${current.validationName}"]`;
            if (this.validator.scope) {
                query += `[scope="${this.validator.scope}"]`;
            }
            /** @type {?} */
            const elements = Array.from(this.validator.formRef.nativeElement.querySelectorAll(query));
            /** @type {?} */
            const clonedOptions = elements.map((/**
             * @param {?} element
             * @param {?} index
             * @return {?}
             */
            (element, index) => {
                /** @type {?} */
                const validationId = this._dataService.newGuid();
                this.renderer.setAttribute(element, ValidationConstant.VALIDATION_ID, validationId);
                this.renderer.setAttribute(element, ValidationConstant.ARRAY_SEQUENCE_ID, index.toString());
                return Object.assign({}, current, { validationId: validationId, valueResolver: current.valueResolver
                        ? (/**
                         * @param {?} payload
                         * @return {?}
                         */
                        (payload) => current.valueResolver(payload, index))
                        : (/**
                         * @return {?}
                         */
                        () => { return ((/** @type {?} */ (element))).value; }) });
            }));
            dynamicElements.push(...elements);
            generatedDynamicOptions.push(...clonedOptions);
        }));
        this.validator.options = nonDynamicOptions.concat(generatedDynamicOptions);
        this.elements = nonDynamicElements.concat(dynamicElements);
        if (this.elements) {
            this.changedItems = [];
            this.elements.forEach((/**
             * @param {?} element
             * @return {?}
             */
            (element) => {
                /** @type {?} */
                const payload = this.validator.payloadRef();
                /** @type {?} */
                let elementOption = this.findElementOption(element);
                this.changedItems.push(new ChangedItem({
                    id: elementOption.validationId,
                    field: elementOption.validationName,
                    oldValue: elementOption.valueResolver ? elementOption.valueResolver(payload) : null
                }));
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    registerEvents() {
        this.elements.filter((/**
         * @param {?} element
         * @return {?}
         */
        element => element.attributes[this.attributeName])).forEach((/**
         * @param {?} element
         * @return {?}
         */
        (element) => {
            if (!element.focusoutListener) {
                element.focusoutListener = this.renderer.listen(element, 'focusout', (/**
                 * @return {?}
                 */
                () => {
                    this.handleBlurEvent(element);
                }));
                element.focusoutListener = this.renderer.listen(element, 'change', (/**
                 * @param {?} $event
                 * @return {?}
                 */
                ($event) => {
                    /** @type {?} */
                    const payload = this.validator.payloadRef();
                    /** @type {?} */
                    let elementOption = this.findElementOption(element);
                    /** @type {?} */
                    var value = elementOption.valueResolver ? elementOption.valueResolver(payload) : null;
                    if (elementOption && elementOption.dirtyCheck) {
                        /** @type {?} */
                        var currentItem = this.changedItems.find((/**
                         * @param {?} s
                         * @return {?}
                         */
                        s => s.id == elementOption.validationId));
                        if (!currentItem) {
                            this.changedItems.push(new ChangedItem({
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
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    handleBlurEvent(element) {
        /** @type {?} */
        let elementOption = this.findElementOption(element);
        if (!elementOption)
            throw new Error('!elementOption');
        this.validateElement(element, elementOption).pipe(take(1)).subscribe((/**
         * @param {?} newOption
         * @return {?}
         */
        newOption => {
            elementOption = newOption;
            this.syncErrorMessages(element, elementOption);
        }));
    }
    /**
     * @private
     * @param {?} element
     * @param {?} option
     * @return {?}
     */
    syncErrorMessages(element, option) {
        /** @type {?} */
        let errorMessages = [];
        option.rules.forEach((/**
         * @param {?} action
         * @return {?}
         */
        action => {
            if (action.isValid) {
                this.clearErrorItemElement(element, action);
            }
            else {
                /** @type {?} */
                const errorMessage = this.setElementError(element, action, option);
                errorMessages.push(errorMessage);
            }
        }));
        /** @type {?} */
        const invalidActions = option.rules.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !x.isValid));
        if (invalidActions.length === 0) {
            this.renderer.removeClass(element, option.errorElementClass);
            this.renderer.removeClass(element, option.successElementClass);
            return null;
        }
        return {
            element: element,
            messages: errorMessages
        };
    }
    /**
     * @private
     * @param {?} providers
     * @return {?}
     */
    addRelatedProviders(providers) {
        /** @type {?} */
        let newProviders = providers.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => this.relatedProviders.indexOf(x) < 0));
        newProviders.forEach((/**
         * @param {?} provider
         * @return {?}
         */
        provider => provider.onDestroy.subscribe((/**
         * @return {?}
         */
        () => {
            this.relatedProviders = this.relatedProviders.filter((/**
             * @return {?}
             */
            () => this.relatedProviders.indexOf(provider) < 0));
        }))));
        this.relatedProviders.push(...newProviders);
    }
}
ValidationService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ValidationService.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: ValidationProvider },
    { type: DataService },
    { type: ActionService }
];
ValidationService.propDecorators = {
    onDestroy: [{ type: Output }]
};
/** @nocollapse */ ValidationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ValidationService_Factory() { return new ValidationService(i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i1.ValidationProvider), i0.ɵɵinject(i2.DataService), i0.ɵɵinject(i3.ActionService)); }, token: ValidationService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvdmFsaWRhdGlvbi92YWxpZGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQXFDLGtCQUFrQixFQUFnQyxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0SSxPQUFPLEVBQUUsWUFBWSxFQUFjLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUczRCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7O0lBYTFCLFlBQ2MsZUFBaUMsRUFDakMsa0JBQXNDLEVBQ3hDLFlBQXlCLEVBQ3pCLGNBQTZCO1FBSDNCLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUNqQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3hDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBaEJ4QixjQUFTLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUQsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixhQUFRLEdBQVcsa0JBQWtCLENBQUMsaUJBQWlCLENBQUM7UUFDeEQsV0FBTSxHQUFXLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDO1FBQ3ZELGtCQUFhLEdBQVcsa0JBQWtCLENB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c0NBQW9FOzs7OztJQUNwRSxxQ0FBaUM7Ozs7O0lBQ2pDLHNDQUFtQzs7Ozs7SUFDbkMscUNBQWdFOzs7OztJQUNoRSxtQ0FBK0Q7Ozs7O0lBQy9ELDBDQUFpRTs7Ozs7SUFDakUscUNBQTRCOzs7OztJQUM1Qiw2Q0FBbUQ7Ozs7O0lBQ25ELDBDQUF5RDs7Ozs7SUFDekQscURBQTBEOzs7OztJQUMxRCx5Q0FBeUM7Ozs7O0lBR3JDLDRDQUEyQzs7Ozs7SUFDM0MsK0NBQWdEOzs7OztJQUNoRCx5Q0FBaUM7Ozs7O0lBQ2pDLDJDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlcmVyMiwgSW5qZWN0YWJsZSwgUmVuZGVyZXJGYWN0b3J5MiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvbk9wdGlvbiwgQ2xpZW50VmFsaWRhdG9yLCBWYWxpZGF0aW9uQ29uc3RhbnQsIFN1bW1hcnlFcnJvciwgVmFsaWRhdGlvblJ1bGUsIENoYW5nZWRJdGVtIH0gZnJvbSAnLi92YWxpZGF0aW9uLm1vZGVsJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBPYnNlcnZhYmxlLCBmb3JrSm9pbiwgbWVyZ2UsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgZGVmYXVsdElmRW1wdHksIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlLCBBY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uUHJvdmlkZXIgfSBmcm9tICcuL3ZhbGlkYXRpb24ucHJvdmlkZXInO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25TZXJ2aWNlIHtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25EZXN0cm95OiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBwcml2YXRlIGVsZW1lbnRzOiBFbGVtZW50W10gPSBbXTtcclxuICAgIHByaXZhdGUgdmFsaWRhdG9yOiBDbGllbnRWYWxpZGF0b3I7XHJcbiAgICBwcml2YXRlIGVyckNsYXNzOiBzdHJpbmcgPSBWYWxpZGF0aW9uQ29uc3RhbnQuRGVmYXVsdEVycm9yQ2xhc3M7XHJcbiAgICBwcml2YXRlIHN0eWxlczogc3RyaW5nID0gVmFsaWRhdGlvbkNvbnN0YW50LkRlZmF1bHRFcnJvclN0eWxlcztcclxuICAgIHByaXZhdGUgYXR0cmlidXRlTmFtZTogc3RyaW5nID0gVmFsaWRhdGlvbkNvbnN0YW50LkF0dHJpYnV0ZU5hbWU7XHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XHJcbiAgICBwcml2YXRlIHJlbGF0ZWRQcm92aWRlcnM6IFZhbGlkYXRpb25TZXJ2aWNlW10gPSBbXTtcclxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG4gICAgcHJpdmF0ZSB2aXJ0dWFsVmFsaWRhdGlvbk9wdGlvbnM6IFZhbGlkYXRpb25PcHRpb25bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VkSXRlbXM6IENoYW5nZWRJdGVtW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxyXG4gICAgICAgIHByb3RlY3RlZCB2YWxpZGF0aW9uUHJvdmlkZXI6IFZhbGlkYXRpb25Qcm92aWRlcixcclxuICAgICAgICBwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfYWN0aW9uU2VydmljZTogQWN0aW9uU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLm9uRGVzdHJveS5lbWl0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQobW9kZWw6IHsgdmFsaWRhdG9yOiBDbGllbnRWYWxpZGF0b3IgfSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbW9kZWwudmFsaWRhdG9yO1xyXG4gICAgICAgIGlmICghdGhpcy52YWxpZGF0b3IucGF5bG9hZFJlZikgdGhpcy52YWxpZGF0b3IucGF5bG9hZFJlZiA9ICgpID0+IHsgcmV0dXJuIHt9IH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvci5yZWxhdGVkVmFsaWRhdGlvblByb3ZpZGVycykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFJlbGF0ZWRQcm92aWRlcnModGhpcy52YWxpZGF0b3IucmVsYXRlZFZhbGlkYXRpb25Qcm92aWRlcnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3Iub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghb3B0aW9uLmRpc3BsYXlUZXh0KSBvcHRpb24uZGlzcGxheVRleHQgPSBvcHRpb24udmFsaWRhdGlvbk5hbWU7XHJcbiAgICAgICAgICAgIGlmICghb3B0aW9uLnBheWxvYWRSZWYpIG9wdGlvbi5wYXlsb2FkUmVmID0gdGhpcy52YWxpZGF0b3IucGF5bG9hZFJlZjtcclxuICAgICAgICAgICAgb3B0aW9uLnJ1bGVzLmZvckVhY2goYWN0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLmlkKSBhY3Rpb24uaWQgPSB0aGlzLl9kYXRhU2VydmljZS5uZXdHdWlkKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5lcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbi5rZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWYWxpZGF0aW9uQ29uc3RhbnQuUmVxdWlyZWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5lcnJvck1lc3NhZ2UgPSAoZWxlbWVudDogRWxlbWVudCwgcm93SW5kZXg6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc3BsYXlpbmdSb3dJbmRleCA9ICgrcm93SW5kZXggKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHtvcHRpb24uZGlzcGxheVRleHR9JHtvcHRpb24uZHluYW1pYyA/ICcgWycgKyBkaXNwbGF5aW5nUm93SW5kZXggKyAnXScgOiAnJ30gJHt0aGlzLnZhbGlkYXRvci5yZXF1aXJlZE1lc3NhZ2V9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uZXJyb3JNZXNzYWdlID0gKCkgPT4gYCR7b3B0aW9uLmRpc3BsYXlUZXh0fSAke3RoaXMudmFsaWRhdG9yLmludmFsaWRNZXNzYWdlfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy52aXJ0dWFsVmFsaWRhdGlvbk9wdGlvbnMgPSB0aGlzLnZhbGlkYXRvci5vcHRpb25zLmZpbHRlcih4ID0+IHguZHluYW1pYyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBc3luYygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVBc3luYyhyZWxhdGVkUHJvdmlkZXJzVG9SZWdpc3Rlcj86IFZhbGlkYXRpb25TZXJ2aWNlW10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9hY3Rpb25TZXJ2aWNlLmV4ZWN1dGVBc3luYygoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZWxhdGVkUHJvdmlkZXJzVG9SZWdpc3RlciAmJiByZWxhdGVkUHJvdmlkZXJzVG9SZWdpc3Rlci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkUmVsYXRlZFByb3ZpZGVycyhyZWxhdGVkUHJvdmlkZXJzVG9SZWdpc3Rlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckVsZW1lbnRzKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhlY3V0ZUFzeW5jKHZhbGlkQ2FsbGJhY2s6IChlcnJvcnM/OiBTdW1tYXJ5RXJyb3JbXSkgPT4gYW55LCBpbnZhbGlkQ2FsbGJhY2s/OiAoZXJyb3JzPzogU3VtbWFyeUVycm9yW10pID0+IGFueSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHRoaXMucmV0cmlldmVTdW1tYXJ5RXJyb3JzKCkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlIHx8IHJlc3BvbnNlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRDYWxsYmFjaykgdmFsaWRDYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW52YWxpZENhbGxiYWNrKSBpbnZhbGlkQ2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9mKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1ZhbGlkKHNob3c6IGJvb2xlYW4gPSB0cnVlLCBmb2N1czogYm9vbGVhbiA9IHRydWUpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoc2hvdykge1xyXG4gICAgICAgICAgICB0aGlzLnJldHJpZXZlU3VtbWFyeUVycm9ycygpLnN1YnNjcmliZSgoZXJyb3JzOiBTdW1tYXJ5RXJyb3JbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvY3VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm9jdXNFbGVtZW50ID0gZXJyb3JzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSA8YW55PmZvY3VzRWxlbWVudC5lbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FjdGlvblNlcnZpY2UuZXhlY3V0ZUFzeW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3Iub3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5ydWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5ydWxlcy5mb3JFYWNoKChhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYW5kbGVFcnJvcnMoY2FsbGJhY2s/OiAocmVzcG9uc2U6IFN1bW1hcnlFcnJvcltdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZXRyaWV2ZVN1bW1hcnlFcnJvcnMoKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbW1pdChjYWxsYmFjaz86IEZ1bmN0aW9uKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0cmlldmVTdW1tYXJ5RXJyb3JzKCkucGlwZShcclxuICAgICAgICAgICAgbWFwKGVycm9ycyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PSAwKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSksIHRha2UoMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRFbGVtZW50RXJyb3IoZWxlbWVudDogRWxlbWVudCwgYWN0aW9uOiBWYWxpZGF0aW9uUnVsZSwgb3B0aW9uOiBWYWxpZGF0aW9uT3B0aW9uKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHJldHVybjtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIFZhbGlkYXRpb25Db25zdGFudC5TdWNjZXNzRWxlbWVudENsYXNzKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIG9wdGlvbi5lcnJvckVsZW1lbnRDbGFzcyk7XHJcbiAgICAgICAgbGV0IGVycm9yRWxlbWVudCA9IHRoaXMuZmluZEVycm9yRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICBpZiAoIWVycm9yRWxlbWVudCkge1xyXG4gICAgICAgICAgICBlcnJvckVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVycm9yRWxlbWVudCwgVmFsaWRhdGlvbkNvbnN0YW50LkVSUk9SX0VMRU1FTlRfSUQsIGAke3RoaXMuX2RhdGFTZXJ2aWNlLm5ld0d1aWQoKX1gKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZXJyb3JFbGVtZW50LCAnc3R5bGUnLCB0aGlzLnN0eWxlcyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZXJyb3JFbGVtZW50LCB0aGlzLmVyckNsYXNzKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlcnJvckVsZW1lbnQsIG9wdGlvbi5lcnJvck1lc3NhZ2VDbGFzcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQocGFyZW50RWxlbWVudCwgZXJyb3JFbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVycm9ySXRlbUVsZW1lbnRLZXk6IHN0cmluZyA9IGAke2FjdGlvbi5pZH1gO1xyXG4gICAgICAgIGxldCBlcnJvckl0ZW1FbGVtZW50ID0gdGhpcy5maW5kRXJyb3JJdGVtRWxlbWVudChlcnJvckVsZW1lbnQsIGVycm9ySXRlbUVsZW1lbnRLZXkpO1xyXG4gICAgICAgIGNvbnN0IGR5bmFtaWNTZXF1ZW5jZUlkID0gdGhpcy5maW5kRHluYW1pY1NlcXVlbmNlSWQoZWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYWN0aW9uLmVycm9yTWVzc2FnZShlbGVtZW50LCBkeW5hbWljU2VxdWVuY2VJZCk7XHJcblxyXG4gICAgICAgIGlmICghZXJyb3JJdGVtRWxlbWVudCkge1xyXG4gICAgICAgICAgICBlcnJvckl0ZW1FbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlcnJvckl0ZW1FbGVtZW50LCBWYWxpZGF0aW9uQ29uc3RhbnQuRVJST1JfSVRFTV9FTEVNRU5UX0lELCBlcnJvckl0ZW1FbGVtZW50S2V5KTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChlcnJvckl0ZW1FbGVtZW50LCB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQoZXJyb3JNZXNzYWdlKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGVycm9yRWxlbWVudCwgZXJyb3JJdGVtRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlcnJvck1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyRXJyb3JJdGVtRWxlbWVudChlbGVtZW50OiBhbnksIGFjdGlvbjogVmFsaWRhdGlvblJ1bGUpIHtcclxuICAgICAgICBsZXQgZXJyb3JFbGVtZW50ID0gdGhpcy5maW5kRXJyb3JFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIGlmICghZXJyb3JFbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGVycm9ySXRlbUVsZW1lbnRLZXk6IHN0cmluZyA9IGAke2FjdGlvbi5pZH1gO1xyXG4gICAgICAgIGxldCBlcnJvckl0ZW1FbGVtZW50ID0gdGhpcy5maW5kRXJyb3JJdGVtRWxlbWVudChlcnJvckVsZW1lbnQsIGVycm9ySXRlbUVsZW1lbnRLZXkpO1xyXG4gICAgICAgIGlmICghZXJyb3JJdGVtRWxlbWVudCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoZXJyb3JFbGVtZW50LCBlcnJvckl0ZW1FbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNEaXJ0eShjYWxsYmFjaz86IChpdGVtczogQ2hhbmdlZEl0ZW1bXSkgPT4gdm9pZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5jaGFuZ2VkSXRlbXMgfHwgdGhpcy5jaGFuZ2VkSXRlbXMubGVuZ3RoID09IDApIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgcmVzcG9uc2UgPSB0aGlzLmNoYW5nZWRJdGVtcy5maWx0ZXIocyA9PiBzLmNoYW5nZSk7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlRWxlbWVudChlbGVtZW50OiBhbnksIG9wdGlvbjogVmFsaWRhdGlvbk9wdGlvbik6IE9ic2VydmFibGU8VmFsaWRhdGlvbk9wdGlvbj4ge1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB0aGlzLnZhbGlkYXRvci5wYXlsb2FkUmVmKCk7XHJcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZSA9IG9wdGlvbi52YWx1ZVJlc29sdmVyID8gb3B0aW9uLnZhbHVlUmVzb2x2ZXIocGF5bG9hZCkgOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZEFjdGlvbnMkID0gb3B0aW9uLnJ1bGVzLm1hcChhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbi5rZXkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgVmFsaWRhdGlvbkNvbnN0YW50LlJlcXVpcmVkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblByb3ZpZGVyLnJlcXVpcmVkKGZpZWxkVmFsdWUpLnBpcGUobWFwKGlzVmFsaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uaXNWYWxpZCA9IGlzVmFsaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBWYWxpZGF0aW9uQ29uc3RhbnQuRW1haWw6IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uUHJvdmlkZXIuZW1haWwoZmllbGRWYWx1ZSkucGlwZShtYXAoaXNWYWxpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5pc1ZhbGlkID0gaXNWYWxpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIFZhbGlkYXRpb25Db25zdGFudC5QaG9uZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25Qcm92aWRlci5waG9uZShmaWVsZFZhbHVlKS5waXBlKG1hcChpc1ZhbGlkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmlzVmFsaWQgPSBpc1ZhbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgVmFsaWRhdGlvbkNvbnN0YW50LkN1c3RvbToge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLmV4ZWN1dGUpIHRocm93IG5ldyBFcnJvcignIWFjdGlvbi5leGVjdXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWVsZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5pc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlcXVpcmVkUnVsZSA9IG9wdGlvbi5ydWxlcy5maW5kKHMgPT4gcy5rZXkgPT0gVmFsaWRhdGlvbkNvbnN0YW50LlJlcXVpcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkUnVsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRSdWxlLmlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcXVlbmNlSWQgPSB0aGlzLmZpbmREeW5hbWljU2VxdWVuY2VJZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uLmV4ZWN1dGUoZmllbGRWYWx1ZSwgcGF5bG9hZCwgK3NlcXVlbmNlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5waXBlKG1hcChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uaXNWYWxpZCA9IHJlc3BvbnNlLnN0YXR1cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UubWVzc2FnZSkgYWN0aW9uLmVycm9yTWVzc2FnZSA9ICgpID0+IHsgcmV0dXJuIHJlc3BvbnNlLm1lc3NhZ2U7IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCBhY3Rpb246ICR7YWN0aW9uLmtleX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZm9ya0pvaW4odmFsaWRhdGVkQWN0aW9ucyQpLnBpcGUoXHJcbiAgICAgICAgICAgIHRha2UoMSksXHJcbiAgICAgICAgICAgIG1hcCh2YWxpZGF0ZWRBY3Rpb25zID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb24ucmVsZXZhbnRGaWVsZHMpIHRoaXMudmFsaWRhdGVSZWxldmFudEZpZWxkcyhvcHRpb24ucmVsZXZhbnRGaWVsZHMocGF5bG9hZCkpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnJ1bGVzID0gdmFsaWRhdGVkQWN0aW9ucztcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb247XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZVJlbGV2YW50RmllbGRzKHJlbGV2YW50RmllbGRzPzogc3RyaW5nW10pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXJlbGV2YW50RmllbGRzIHx8IHJlbGV2YW50RmllbGRzLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHJlbGV2YW50RmllbGRzICYmIHJlbGV2YW50RmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmVsZXZhbnRGaWVsZHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVzID0gdGhpcy5lbGVtZW50c1tpXS5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzICYmIGF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlc1t0aGlzLmF0dHJpYnV0ZU5hbWVdLnZhbHVlID09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPSB0aGlzLmZpbmRFbGVtZW50T3B0aW9uKHRoaXMuZWxlbWVudHNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVFbGVtZW50KHRoaXMuZWxlbWVudHNbaV0sIG9wdGlvbikucGlwZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwKG5ld09wdGlvbiA9PiBvcHRpb24gPSBuZXdPcHRpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAob3B0aW9uID0+IHRoaXMuc3luY0Vycm9yTWVzc2FnZXModGhpcy5lbGVtZW50c1tpXSwgb3B0aW9uKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXRyaWV2ZVN1bW1hcnlFcnJvcnMoKTogT2JzZXJ2YWJsZTxTdW1tYXJ5RXJyb3JbXT4ge1xyXG4gICAgICAgIGNvbnN0IGVycm9ycyQgPSB0aGlzLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25PcHRpb24gPSB0aGlzLmZpbmRFbGVtZW50T3B0aW9uKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRpb25PcHRpb24pIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlRWxlbWVudChlbGVtZW50LCB2YWxpZGF0aW9uT3B0aW9uKS5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKG5ld09wdGlvbiA9PiB2YWxpZGF0aW9uT3B0aW9uID0gbmV3T3B0aW9uKSxcclxuICAgICAgICAgICAgICAgIG1hcChvcHRpb24gPT4gdGhpcy5zeW5jRXJyb3JNZXNzYWdlcyhlbGVtZW50LCBvcHRpb24pKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZXJyb3JCYXRjaCA9IGZvcmtKb2luKGVycm9ycyQpO1xyXG4gICAgICAgIGNvbnN0IHJlbGF0ZWRFcnJvcnMgPSA8T2JzZXJ2YWJsZTxTdW1tYXJ5RXJyb3JbXT4+dGhpcy5yZWxhdGVkUHJvdmlkZXJzLnJlZHVjZSgocHJldmlvdXM6IE9ic2VydmFibGU8U3VtbWFyeUVycm9yW10+LCBwcm92aWRlcjogVmFsaWRhdGlvblNlcnZpY2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3ViRXJyb3JzJCA9IHByb3ZpZGVyLnJldHJpZXZlU3VtbWFyeUVycm9ycygpO1xyXG4gICAgICAgICAgICByZXR1cm4gbWVyZ2UocHJldmlvdXMsIHN1YkVycm9ycyQpO1xyXG4gICAgICAgIH0sIG9mKFtdKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmb3JrSm9pbihlcnJvckJhdGNoLCByZWxhdGVkRXJyb3JzKS5waXBlKFxyXG4gICAgICAgICAgICBkZWZhdWx0SWZFbXB0eShbW10sIFtdXSksXHJcbiAgICAgICAgICAgIG1hcCh2YWx1ZSA9PiBbLi4udmFsdWVbMF0sIC4uLnZhbHVlWzFdXSksXHJcbiAgICAgICAgICAgIG1hcChyZXN1bHQgPT4gW10uY29uY2F0KHJlc3VsdC5maWx0ZXIoZXJyb3IgPT4gZXJyb3IpKSksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbmRFbGVtZW50T3B0aW9uKGVsZW1lbnQ6IEVsZW1lbnQpOiBWYWxpZGF0aW9uT3B0aW9uIHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbklkQXR0cmlidXRlID0gZWxlbWVudC5hdHRyaWJ1dGVzW1ZhbGlkYXRpb25Db25zdGFudC5WQUxJREFUSU9OX0lEXTtcclxuICAgICAgICBpZiAoIXZhbGlkYXRpb25JZEF0dHJpYnV0ZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25JZCA9IHZhbGlkYXRpb25JZEF0dHJpYnV0ZS52YWx1ZTtcclxuICAgICAgICBpZiAoIXZhbGlkYXRpb25JZCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yLm9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLnZhbGlkYXRpb25JZCA9PT0gdmFsaWRhdGlvbklkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbmRFcnJvckl0ZW1FbGVtZW50KGVycm9yRWxlbWVudDogYW55LCBrZXk6IHN0cmluZyk6IGFueSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gPEVsZW1lbnRbXT5BcnJheS5mcm9tKGVycm9yRWxlbWVudC5jaGlsZHJlbik7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuXHJcbiAgICAgICAgICAgIC5maWx0ZXIoeCA9PiB4LmF0dHJpYnV0ZXNbVmFsaWRhdGlvbkNvbnN0YW50LkVSUk9SX0lURU1fRUxFTUVOVF9JRF0pXHJcbiAgICAgICAgICAgIC5maW5kKHggPT4geC5hdHRyaWJ1dGVzW1ZhbGlkYXRpb25Db25zdGFudC5FUlJPUl9JVEVNX0VMRU1FTlRfSURdLnZhbHVlID09PSBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmluZER5bmFtaWNTZXF1ZW5jZUlkKGVsZW1lbnQ6IEVsZW1lbnQpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgICAgICBjb25zdCBzZXF1ZW5jZUlkQXR0cmlidXRlID0gZWxlbWVudC5hdHRyaWJ1dGVzW1ZhbGlkYXRpb25Db25zdGFudC5BUlJBWV9TRVFVRU5DRV9JRF07XHJcbiAgICAgICAgaWYgKCFzZXF1ZW5jZUlkQXR0cmlidXRlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VJZCA9IHNlcXVlbmNlSWRBdHRyaWJ1dGUudmFsdWU7XHJcbiAgICAgICAgaWYgKCFzZXF1ZW5jZUlkKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gc2VxdWVuY2VJZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbmRFcnJvckVsZW1lbnQoZWxlbWVudDogRWxlbWVudCk6IEVsZW1lbnQge1xyXG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaWJpbmdzID0gPEVsZW1lbnRbXT5BcnJheS5mcm9tKGVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlbik7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBzbGliaW5ncy5maWx0ZXIoeCA9PiB4LmF0dHJpYnV0ZXMpLmZpbmQoeCA9PiB4LmF0dHJpYnV0ZXNbVmFsaWRhdGlvbkNvbnN0YW50LkVSUk9SX0VMRU1FTlRfSURdKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlckVsZW1lbnRzKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5vbkR5bmFtaWNPcHRpb25zID0gdGhpcy52YWxpZGF0b3Iub3B0aW9ucy5maWx0ZXIoeCA9PiAheC5keW5hbWljKTtcclxuICAgICAgICBjb25zdCBub25EeW5hbWljRWxlbWVudHMgPSBub25EeW5hbWljT3B0aW9ucy5yZWR1Y2UoKHByZXZpb3VzOiBFbGVtZW50W10sIGN1cnJlbnQ6IFZhbGlkYXRpb25PcHRpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IHF1ZXJ5ID0gYCpbJHt0aGlzLmF0dHJpYnV0ZU5hbWV9PVwiJHtjdXJyZW50LnZhbGlkYXRpb25OYW1lfVwiXWA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRvci5zY29wZSkge1xyXG4gICAgICAgICAgICAgICAgcXVlcnkgKz0gYFtzY29wZT1cIiR7dGhpcy52YWxpZGF0b3Iuc2NvcGV9XCJdYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IDxFbGVtZW50W10+QXJyYXkuZnJvbSh0aGlzLnZhbGlkYXRvci5mb3JtUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSkpO1xyXG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbklkID0gdGhpcy5fZGF0YVNlcnZpY2UubmV3R3VpZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudCwgVmFsaWRhdGlvbkNvbnN0YW50LlZBTElEQVRJT05fSUQsIHZhbGlkYXRpb25JZCk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50LnZhbGlkYXRpb25JZCA9IHZhbGlkYXRpb25JZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cy5jb25jYXQoZWxlbWVudHMpO1xyXG4gICAgICAgIH0sIFtdKTtcclxuXHJcbiAgICAgICAgbGV0IGdlbmVyYXRlZER5bmFtaWNPcHRpb25zID0gW107XHJcbiAgICAgICAgbGV0IGR5bmFtaWNFbGVtZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9yLm9wdGlvbnMgPSB0aGlzLnZhbGlkYXRvci5vcHRpb25zLmZpbHRlcih4ID0+ICF4LmR5bmFtaWMpO1xyXG4gICAgICAgIHRoaXMudmlydHVhbFZhbGlkYXRpb25PcHRpb25zLmZvckVhY2goKGN1cnJlbnQ6IFZhbGlkYXRpb25PcHRpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IHF1ZXJ5ID0gYCpbJHt0aGlzLmF0dHJpYnV0ZU5hbWV9PVwiJHtjdXJyZW50LnZhbGlkYXRpb25OYW1lfVwiXWA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRvci5zY29wZSkge1xyXG4gICAgICAgICAgICAgICAgcXVlcnkgKz0gYFtzY29wZT1cIiR7dGhpcy52YWxpZGF0b3Iuc2NvcGV9XCJdYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20odGhpcy52YWxpZGF0b3IuZm9ybVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpKTtcclxuICAgICAgICAgICAgY29uc3QgY2xvbmVkT3B0aW9ucyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25JZCA9IHRoaXMuX2RhdGFTZXJ2aWNlLm5ld0d1aWQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnQsIFZhbGlkYXRpb25Db25zdGFudC5WQUxJREFUSU9OX0lELCB2YWxpZGF0aW9uSWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudCwgVmFsaWRhdGlvbkNvbnN0YW50LkFSUkFZX1NFUVVFTkNFX0lELCBpbmRleC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudCxcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uSWQ6IHZhbGlkYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVJlc29sdmVyOiBjdXJyZW50LnZhbHVlUmVzb2x2ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAocGF5bG9hZDogYW55KSA9PiBjdXJyZW50LnZhbHVlUmVzb2x2ZXIocGF5bG9hZCwgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKCkgPT4geyByZXR1cm4gKDxhbnk+ZWxlbWVudCkudmFsdWU7IH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkeW5hbWljRWxlbWVudHMucHVzaCguLi5lbGVtZW50cyk7XHJcbiAgICAgICAgICAgIGdlbmVyYXRlZER5bmFtaWNPcHRpb25zLnB1c2goLi4uY2xvbmVkT3B0aW9ucyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudmFsaWRhdG9yLm9wdGlvbnMgPSBub25EeW5hbWljT3B0aW9ucy5jb25jYXQoZ2VuZXJhdGVkRHluYW1pY09wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBub25EeW5hbWljRWxlbWVudHMuY29uY2F0KGR5bmFtaWNFbGVtZW50cyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHRoaXMudmFsaWRhdG9yLnBheWxvYWRSZWYoKTtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50T3B0aW9uID0gdGhpcy5maW5kRWxlbWVudE9wdGlvbihlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zLnB1c2gobmV3IENoYW5nZWRJdGVtKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogZWxlbWVudE9wdGlvbi52YWxpZGF0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGVsZW1lbnRPcHRpb24udmFsaWRhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IGVsZW1lbnRPcHRpb24udmFsdWVSZXNvbHZlciA/IGVsZW1lbnRPcHRpb24udmFsdWVSZXNvbHZlcihwYXlsb2FkKSA6IG51bGxcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJFdmVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50LmF0dHJpYnV0ZXNbdGhpcy5hdHRyaWJ1dGVOYW1lXSkuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudC5mb2N1c291dExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmZvY3Vzb3V0TGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbGVtZW50LCAnZm9jdXNvdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVCbHVyRXZlbnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXNvdXRMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKGVsZW1lbnQsICdjaGFuZ2UnLCAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHRoaXMudmFsaWRhdG9yLnBheWxvYWRSZWYoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudE9wdGlvbiA9IHRoaXMuZmluZEVsZW1lbnRPcHRpb24oZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZWxlbWVudE9wdGlvbi52YWx1ZVJlc29sdmVyID8gZWxlbWVudE9wdGlvbi52YWx1ZVJlc29sdmVyKHBheWxvYWQpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudE9wdGlvbiAmJiBlbGVtZW50T3B0aW9uLmRpcnR5Q2hlY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRJdGVtID0gdGhpcy5jaGFuZ2VkSXRlbXMuZmluZChzID0+IHMuaWQgPT0gZWxlbWVudE9wdGlvbi52YWxpZGF0aW9uSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5wdXNoKG5ldyBDaGFuZ2VkSXRlbSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGVsZW1lbnRPcHRpb24udmFsaWRhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBlbGVtZW50T3B0aW9uLnZhbGlkYXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEl0ZW0ub2xkVmFsdWUgPT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRJdGVtLm9sZFZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbS5jaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbS5jaGFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbS5jaGFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbS5vbGRWYWx1ZS50b1N0cmluZygpICE9IGN1cnJlbnRJdGVtLnZhbHVlLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLmNoYW5nZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW0uY2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlQmx1ckV2ZW50KGVsZW1lbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBlbGVtZW50T3B0aW9uID0gdGhpcy5maW5kRWxlbWVudE9wdGlvbihlbGVtZW50KTtcclxuICAgICAgICBpZiAoIWVsZW1lbnRPcHRpb24pIHRocm93IG5ldyBFcnJvcignIWVsZW1lbnRPcHRpb24nKTtcclxuXHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZUVsZW1lbnQoZWxlbWVudCwgZWxlbWVudE9wdGlvbikucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUobmV3T3B0aW9uID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudE9wdGlvbiA9IG5ld09wdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5zeW5jRXJyb3JNZXNzYWdlcyhlbGVtZW50LCBlbGVtZW50T3B0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN5bmNFcnJvck1lc3NhZ2VzKGVsZW1lbnQ6IGFueSwgb3B0aW9uOiBWYWxpZGF0aW9uT3B0aW9uKTogU3VtbWFyeUVycm9yIHwgbnVsbCB7XHJcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgb3B0aW9uLnJ1bGVzLmZvckVhY2goYWN0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRXJyb3JJdGVtRWxlbWVudChlbGVtZW50LCBhY3Rpb24pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy5zZXRFbGVtZW50RXJyb3IoZWxlbWVudCwgYWN0aW9uLCBvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgaW52YWxpZEFjdGlvbnMgPSBvcHRpb24ucnVsZXMuZmlsdGVyKHggPT4gIXguaXNWYWxpZCk7XHJcbiAgICAgICAgaWYgKGludmFsaWRBY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIG9wdGlvbi5lcnJvckVsZW1lbnRDbGFzcyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgb3B0aW9uLnN1Y2Nlc3NFbGVtZW50Q2xhc3MpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBlcnJvck1lc3NhZ2VzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkUmVsYXRlZFByb3ZpZGVycyhwcm92aWRlcnM6IFZhbGlkYXRpb25TZXJ2aWNlW10pOiB2b2lkIHtcclxuICAgICAgICBsZXQgbmV3UHJvdmlkZXJzID0gcHJvdmlkZXJzLmZpbHRlcih4ID0+IHRoaXMucmVsYXRlZFByb3ZpZGVycy5pbmRleE9mKHgpIDwgMCk7XHJcbiAgICAgICAgbmV3UHJvdmlkZXJzLmZvckVhY2gocHJvdmlkZXIgPT5cclxuICAgICAgICAgICAgcHJvdmlkZXIub25EZXN0cm95LnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbGF0ZWRQcm92aWRlcnMgPSB0aGlzLnJlbGF0ZWRQcm92aWRlcnMuZmlsdGVyKCgpID0+IHRoaXMucmVsYXRlZFByb3ZpZGVycy5pbmRleE9mKHByb3ZpZGVyKSA8IDApO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5yZWxhdGVkUHJvdmlkZXJzLnB1c2goLi4ubmV3UHJvdmlkZXJzKTtcclxuICAgIH1cclxufSJdfQ==