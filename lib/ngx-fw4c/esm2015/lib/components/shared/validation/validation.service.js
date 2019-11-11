/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            option.rules = validatedActions;
            return option;
        })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvdmFsaWRhdGlvbi92YWxpZGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQXFDLGtCQUFrQixFQUFnQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3pILE9BQU8sRUFBRSxZQUFZLEVBQWMsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBRzNELE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7SUFZMUIsWUFDYyxlQUFpQyxFQUNqQyxrQkFBc0MsRUFDeEMsWUFBeUIsRUFDekIsY0FBNkI7UUFIM0Isb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ2pDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDeEMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFmeEIsY0FBUyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVELGFBQVEsR0FBYyxFQUFFLENBQUM7UUFFekIsYUFBUSxHQUFXLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDO1FBQ3hELFdBQU0sR0FBVyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQztRQUN2RCxrQkFBYSxHQUFXLGtCQUFrQixDQUFDLGFBQWEsQ0FB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Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQztRQUM5RSxZQUFZLENBQUMsT0FBTzs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFLENBQzVCLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTTs7O1lBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQztRQUM1RyxDQUFDLEVBQUMsRUFBQyxDQUFDO1FBQ1IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQTdYSixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBUEYsZ0JBQWdCO1lBS3ZDLGtCQUFrQjtZQURsQixXQUFXO1lBQUUsYUFBYTs7O3dCQUs5QixNQUFNOzs7OztJQUFQLHNDQUFvRTs7Ozs7SUFDcEUscUNBQWlDOzs7OztJQUNqQyxzQ0FBbUM7Ozs7O0lBQ25DLHFDQUFnRTs7Ozs7SUFDaEUsbUNBQStEOzs7OztJQUMvRCwwQ0FBaUU7Ozs7O0lBQ2pFLHFDQUE0Qjs7Ozs7SUFDNUIsNkNBQW1EOzs7OztJQUNuRCwwQ0FBeUQ7Ozs7O0lBQ3pELHFEQUEwRDs7Ozs7SUFHdEQsNENBQTJDOzs7OztJQUMzQywrQ0FBZ0Q7Ozs7O0lBQ2hELHlDQUFpQzs7Ozs7SUFDakMsMkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVuZGVyZXIyLCBJbmplY3RhYmxlLCBSZW5kZXJlckZhY3RvcnkyLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uT3B0aW9uLCBDbGllbnRWYWxpZGF0b3IsIFZhbGlkYXRpb25Db25zdGFudCwgU3VtbWFyeUVycm9yLCBWYWxpZGF0aW9uUnVsZSB9IGZyb20gJy4vdmFsaWRhdGlvbi5tb2RlbCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZSwgZm9ya0pvaW4sIG1lcmdlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIGRlZmF1bHRJZkVtcHR5LCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSwgQWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblByb3ZpZGVyIH0gZnJvbSAnLi92YWxpZGF0aW9uLnByb3ZpZGVyJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uU2VydmljZSB7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uRGVzdHJveTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50czogRWxlbWVudFtdID0gW107XHJcbiAgICBwcml2YXRlIHZhbGlkYXRvcjogQ2xpZW50VmFsaWRhdG9yO1xyXG4gICAgcHJpdmF0ZSBlcnJDbGFzczogc3RyaW5nID0gVmFsaWRhdGlvbkNvbnN0YW50LkRlZmF1bHRFcnJvckNsYXNzO1xyXG4gICAgcHJpdmF0ZSBzdHlsZXM6IHN0cmluZyA9IFZhbGlkYXRpb25Db25zdGFudC5EZWZhdWx0RXJyb3JTdHlsZXM7XHJcbiAgICBwcml2YXRlIGF0dHJpYnV0ZU5hbWU6IHN0cmluZyA9IFZhbGlkYXRpb25Db25zdGFudC5BdHRyaWJ1dGVOYW1lO1xyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xyXG4gICAgcHJpdmF0ZSByZWxhdGVkUHJvdmlkZXJzOiBWYWxpZGF0aW9uU2VydmljZVtdID0gW107XHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuICAgIHByaXZhdGUgdmlydHVhbFZhbGlkYXRpb25PcHRpb25zOiBWYWxpZGF0aW9uT3B0aW9uW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxyXG4gICAgICAgIHByb3RlY3RlZCB2YWxpZGF0aW9uUHJvdmlkZXI6IFZhbGlkYXRpb25Qcm92aWRlcixcclxuICAgICAgICBwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfYWN0aW9uU2VydmljZTogQWN0aW9uU2VydmljZSxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3kuZW1pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KG1vZGVsOiB7IHZhbGlkYXRvcjogQ2xpZW50VmFsaWRhdG9yIH0pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IG1vZGVsLnZhbGlkYXRvcjtcclxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdG9yLnBheWxvYWRSZWYpIHRoaXMudmFsaWRhdG9yLnBheWxvYWRSZWYgPSAoKSA9PiB7IHJldHVybiB7fSB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IucmVsYXRlZFZhbGlkYXRpb25Qcm92aWRlcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRSZWxhdGVkUHJvdmlkZXJzKHRoaXMudmFsaWRhdG9yLnJlbGF0ZWRWYWxpZGF0aW9uUHJvdmlkZXJzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudmFsaWRhdG9yLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbi5kaXNwbGF5VGV4dCkgb3B0aW9uLmRpc3BsYXlUZXh0ID0gb3B0aW9uLnZhbGlkYXRpb25OYW1lO1xyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbi5wYXlsb2FkUmVmKSBvcHRpb24ucGF5bG9hZFJlZiA9IHRoaXMudmFsaWRhdG9yLnBheWxvYWRSZWY7XHJcbiAgICAgICAgICAgIG9wdGlvbi5ydWxlcy5mb3JFYWNoKGFjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5pZCkgYWN0aW9uLmlkID0gdGhpcy5fZGF0YVNlcnZpY2UubmV3R3VpZCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24ua2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmFsaWRhdGlvbkNvbnN0YW50LlJlcXVpcmVkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uZXJyb3JNZXNzYWdlID0gKGVsZW1lbnQ6IEVsZW1lbnQsIHJvd0luZGV4OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXNwbGF5aW5nUm93SW5kZXggPSAoK3Jvd0luZGV4ICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7b3B0aW9uLmRpc3BsYXlUZXh0fSR7b3B0aW9uLmR5bmFtaWMgPyAnIFsnICsgZGlzcGxheWluZ1Jvd0luZGV4ICsgJ10nIDogJyd9ICR7dGhpcy52YWxpZGF0b3IucmVxdWlyZWRNZXNzYWdlfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmVycm9yTWVzc2FnZSA9ICgpID0+IGAke29wdGlvbi5kaXNwbGF5VGV4dH0gJHt0aGlzLnZhbGlkYXRvci5pbnZhbGlkTWVzc2FnZX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudmlydHVhbFZhbGlkYXRpb25PcHRpb25zID0gdGhpcy52YWxpZGF0b3Iub3B0aW9ucy5maWx0ZXIoeCA9PiB4LmR5bmFtaWMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQXN5bmMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlQXN5bmMocmVsYXRlZFByb3ZpZGVyc1RvUmVnaXN0ZXI/OiBWYWxpZGF0aW9uU2VydmljZVtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYWN0aW9uU2VydmljZS5leGVjdXRlQXN5bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVsYXRlZFByb3ZpZGVyc1RvUmVnaXN0ZXIgJiYgcmVsYXRlZFByb3ZpZGVyc1RvUmVnaXN0ZXIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFJlbGF0ZWRQcm92aWRlcnMocmVsYXRlZFByb3ZpZGVyc1RvUmVnaXN0ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJFbGVtZW50cygpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV4ZWN1dGVBc3luYyh2YWxpZENhbGxiYWNrOiAoZXJyb3JzPzogU3VtbWFyeUVycm9yW10pID0+IGFueSwgaW52YWxpZENhbGxiYWNrPzogKGVycm9ycz86IFN1bW1hcnlFcnJvcltdKSA9PiBhbnkpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgICAgICB0aGlzLnJldHJpZXZlU3VtbWFyeUVycm9ycygpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkQ2FsbGJhY2spIHZhbGlkQ2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGludmFsaWRDYWxsYmFjaykgaW52YWxpZENhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBvZih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNWYWxpZChzaG93OiBib29sZWFuID0gdHJ1ZSwgZm9jdXM6IGJvb2xlYW4gPSB0cnVlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHNob3cpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXRyaWV2ZVN1bW1hcnlFcnJvcnMoKS5zdWJzY3JpYmUoKGVycm9yczogU3VtbWFyeUVycm9yW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChmb2N1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZvY3VzRWxlbWVudCA9IGVycm9yc1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gPGFueT5mb2N1c0VsZW1lbnQuZWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY3Rpb25TZXJ2aWNlLmV4ZWN1dGVBc3luYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2YWxpZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yLm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3Iub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb24ucnVsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24ucnVsZXMuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxpZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlRXJyb3JzKGNhbGxiYWNrPzogKHJlc3BvbnNlOiBTdW1tYXJ5RXJyb3JbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmV0cmlldmVTdW1tYXJ5RXJyb3JzKCkuc3Vic2NyaWJlKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21taXQoY2FsbGJhY2s/OiBGdW5jdGlvbik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJldHJpZXZlU3VtbWFyeUVycm9ycygpLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcChlcnJvcnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9ycy5sZW5ndGggPT0gMCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pLCB0YWtlKDEpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RWxlbWVudEVycm9yKGVsZW1lbnQ6IEVsZW1lbnQsIGFjdGlvbjogVmFsaWRhdGlvblJ1bGUsIG9wdGlvbjogVmFsaWRhdGlvbk9wdGlvbik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBWYWxpZGF0aW9uQ29uc3RhbnQuU3VjY2Vzc0VsZW1lbnRDbGFzcyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBvcHRpb24uZXJyb3JFbGVtZW50Q2xhc3MpO1xyXG4gICAgICAgIGxldCBlcnJvckVsZW1lbnQgPSB0aGlzLmZpbmRFcnJvckVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKCFlcnJvckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXJyb3JFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlcnJvckVsZW1lbnQsIFZhbGlkYXRpb25Db25zdGFudC5FUlJPUl9FTEVNRU5UX0lELCBgJHt0aGlzLl9kYXRhU2VydmljZS5uZXdHdWlkKCl9YCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVycm9yRWxlbWVudCwgJ3N0eWxlJywgdGhpcy5zdHlsZXMpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVycm9yRWxlbWVudCwgdGhpcy5lcnJDbGFzcyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZXJyb3JFbGVtZW50LCBvcHRpb24uZXJyb3JNZXNzYWdlQ2xhc3MpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHBhcmVudEVsZW1lbnQsIGVycm9yRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlcnJvckl0ZW1FbGVtZW50S2V5OiBzdHJpbmcgPSBgJHthY3Rpb24uaWR9YDtcclxuICAgICAgICBsZXQgZXJyb3JJdGVtRWxlbWVudCA9IHRoaXMuZmluZEVycm9ySXRlbUVsZW1lbnQoZXJyb3JFbGVtZW50LCBlcnJvckl0ZW1FbGVtZW50S2V5KTtcclxuICAgICAgICBjb25zdCBkeW5hbWljU2VxdWVuY2VJZCA9IHRoaXMuZmluZER5bmFtaWNTZXF1ZW5jZUlkKGVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGFjdGlvbi5lcnJvck1lc3NhZ2UoZWxlbWVudCwgZHluYW1pY1NlcXVlbmNlSWQpO1xyXG5cclxuICAgICAgICBpZiAoIWVycm9ySXRlbUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXJyb3JJdGVtRWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZXJyb3JJdGVtRWxlbWVudCwgVmFsaWRhdGlvbkNvbnN0YW50LkVSUk9SX0lURU1fRUxFTUVOVF9JRCwgZXJyb3JJdGVtRWxlbWVudEtleSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoZXJyb3JJdGVtRWxlbWVudCwgdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KGVycm9yTWVzc2FnZSkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChlcnJvckVsZW1lbnQsIGVycm9ySXRlbUVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXJyb3JNZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhckVycm9ySXRlbUVsZW1lbnQoZWxlbWVudDogYW55LCBhY3Rpb246IFZhbGlkYXRpb25SdWxlKSB7XHJcbiAgICAgICAgbGV0IGVycm9yRWxlbWVudCA9IHRoaXMuZmluZEVycm9yRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICBpZiAoIWVycm9yRWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBlcnJvckl0ZW1FbGVtZW50S2V5OiBzdHJpbmcgPSBgJHthY3Rpb24uaWR9YDtcclxuICAgICAgICBsZXQgZXJyb3JJdGVtRWxlbWVudCA9IHRoaXMuZmluZEVycm9ySXRlbUVsZW1lbnQoZXJyb3JFbGVtZW50LCBlcnJvckl0ZW1FbGVtZW50S2V5KTtcclxuICAgICAgICBpZiAoIWVycm9ySXRlbUVsZW1lbnQpIHJldHVybjtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKGVycm9yRWxlbWVudCwgZXJyb3JJdGVtRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlRWxlbWVudChlbGVtZW50OiBhbnksIG9wdGlvbjogVmFsaWRhdGlvbk9wdGlvbik6IE9ic2VydmFibGU8VmFsaWRhdGlvbk9wdGlvbj4ge1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB0aGlzLnZhbGlkYXRvci5wYXlsb2FkUmVmKCk7XHJcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZSA9IG9wdGlvbi52YWx1ZVJlc29sdmVyID8gb3B0aW9uLnZhbHVlUmVzb2x2ZXIocGF5bG9hZCkgOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZEFjdGlvbnMkID0gb3B0aW9uLnJ1bGVzLm1hcChhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbi5rZXkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgVmFsaWRhdGlvbkNvbnN0YW50LlJlcXVpcmVkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblByb3ZpZGVyLnJlcXVpcmVkKGZpZWxkVmFsdWUpLnBpcGUobWFwKGlzVmFsaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uaXNWYWxpZCA9IGlzVmFsaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBWYWxpZGF0aW9uQ29uc3RhbnQuRW1haWw6IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uUHJvdmlkZXIuZW1haWwoZmllbGRWYWx1ZSkucGlwZShtYXAoaXNWYWxpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5pc1ZhbGlkID0gaXNWYWxpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIFZhbGlkYXRpb25Db25zdGFudC5QaG9uZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25Qcm92aWRlci5waG9uZShmaWVsZFZhbHVlKS5waXBlKG1hcChpc1ZhbGlkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmlzVmFsaWQgPSBpc1ZhbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgVmFsaWRhdGlvbkNvbnN0YW50LkN1c3RvbToge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLmV4ZWN1dGUpIHRocm93IG5ldyBFcnJvcignIWFjdGlvbi5leGVjdXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWVsZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5pc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlcXVpcmVkUnVsZSA9IG9wdGlvbi5ydWxlcy5maW5kKHMgPT4gcy5rZXkgPT0gVmFsaWRhdGlvbkNvbnN0YW50LlJlcXVpcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkUnVsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRSdWxlLmlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcXVlbmNlSWQgPSB0aGlzLmZpbmREeW5hbWljU2VxdWVuY2VJZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uLmV4ZWN1dGUoZmllbGRWYWx1ZSwgcGF5bG9hZCwgK3NlcXVlbmNlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5waXBlKG1hcChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uaXNWYWxpZCA9IHJlc3BvbnNlLnN0YXR1cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UubWVzc2FnZSkgYWN0aW9uLmVycm9yTWVzc2FnZSA9ICgpID0+IHsgcmV0dXJuIHJlc3BvbnNlLm1lc3NhZ2U7IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCBhY3Rpb246ICR7YWN0aW9uLmtleX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZm9ya0pvaW4odmFsaWRhdGVkQWN0aW9ucyQpLnBpcGUoXHJcbiAgICAgICAgICAgIHRha2UoMSksXHJcbiAgICAgICAgICAgIG1hcCh2YWxpZGF0ZWRBY3Rpb25zID0+IHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5ydWxlcyA9IHZhbGlkYXRlZEFjdGlvbnM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmV0cmlldmVTdW1tYXJ5RXJyb3JzKCk6IE9ic2VydmFibGU8U3VtbWFyeUVycm9yW10+IHtcclxuICAgICAgICBjb25zdCBlcnJvcnMkID0gdGhpcy5lbGVtZW50cy5tYXAoZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2YWxpZGF0aW9uT3B0aW9uID0gdGhpcy5maW5kRWxlbWVudE9wdGlvbihlbGVtZW50KTtcclxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0aW9uT3B0aW9uKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZUVsZW1lbnQoZWxlbWVudCwgdmFsaWRhdGlvbk9wdGlvbikucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcChuZXdPcHRpb24gPT4gdmFsaWRhdGlvbk9wdGlvbiA9IG5ld09wdGlvbiksXHJcbiAgICAgICAgICAgICAgICBtYXAob3B0aW9uID0+IHRoaXMuc3luY0Vycm9yTWVzc2FnZXMoZWxlbWVudCwgb3B0aW9uKSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVycm9yQmF0Y2ggPSBmb3JrSm9pbihlcnJvcnMkKTtcclxuICAgICAgICBjb25zdCByZWxhdGVkRXJyb3JzID0gPE9ic2VydmFibGU8U3VtbWFyeUVycm9yW10+PnRoaXMucmVsYXRlZFByb3ZpZGVycy5yZWR1Y2UoKHByZXZpb3VzOiBPYnNlcnZhYmxlPFN1bW1hcnlFcnJvcltdPiwgcHJvdmlkZXI6IFZhbGlkYXRpb25TZXJ2aWNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YkVycm9ycyQgPSBwcm92aWRlci5yZXRyaWV2ZVN1bW1hcnlFcnJvcnMoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlKHByZXZpb3VzLCBzdWJFcnJvcnMkKTtcclxuICAgICAgICB9LCBvZihbXSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZm9ya0pvaW4oZXJyb3JCYXRjaCwgcmVsYXRlZEVycm9ycykucGlwZShcclxuICAgICAgICAgICAgZGVmYXVsdElmRW1wdHkoW1tdLCBbXV0pLFxyXG4gICAgICAgICAgICBtYXAodmFsdWUgPT4gWy4uLnZhbHVlWzBdLCAuLi52YWx1ZVsxXV0pLFxyXG4gICAgICAgICAgICBtYXAocmVzdWx0ID0+IFtdLmNvbmNhdChyZXN1bHQuZmlsdGVyKGVycm9yID0+IGVycm9yKSkpLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaW5kRWxlbWVudE9wdGlvbihlbGVtZW50OiBFbGVtZW50KTogVmFsaWRhdGlvbk9wdGlvbiB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25JZEF0dHJpYnV0ZSA9IGVsZW1lbnQuYXR0cmlidXRlc1tWYWxpZGF0aW9uQ29uc3RhbnQuVkFMSURBVElPTl9JRF07XHJcbiAgICAgICAgaWYgKCF2YWxpZGF0aW9uSWRBdHRyaWJ1dGUpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uSWQgPSB2YWxpZGF0aW9uSWRBdHRyaWJ1dGUudmFsdWU7XHJcbiAgICAgICAgaWYgKCF2YWxpZGF0aW9uSWQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5vcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi52YWxpZGF0aW9uSWQgPT09IHZhbGlkYXRpb25JZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaW5kRXJyb3JJdGVtRWxlbWVudChlcnJvckVsZW1lbnQ6IGFueSwga2V5OiBzdHJpbmcpOiBhbnkgfCBudWxsIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IDxFbGVtZW50W10+QXJyYXkuZnJvbShlcnJvckVsZW1lbnQuY2hpbGRyZW4pO1xyXG4gICAgICAgIHJldHVybiBjaGlsZHJlblxyXG4gICAgICAgICAgICAuZmlsdGVyKHggPT4geC5hdHRyaWJ1dGVzW1ZhbGlkYXRpb25Db25zdGFudC5FUlJPUl9JVEVNX0VMRU1FTlRfSURdKVxyXG4gICAgICAgICAgICAuZmluZCh4ID0+IHguYXR0cmlidXRlc1tWYWxpZGF0aW9uQ29uc3RhbnQuRVJST1JfSVRFTV9FTEVNRU5UX0lEXS52YWx1ZSA9PT0ga2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbmREeW5hbWljU2VxdWVuY2VJZChlbGVtZW50OiBFbGVtZW50KTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VJZEF0dHJpYnV0ZSA9IGVsZW1lbnQuYXR0cmlidXRlc1tWYWxpZGF0aW9uQ29uc3RhbnQuQVJSQVlfU0VRVUVOQ0VfSURdO1xyXG4gICAgICAgIGlmICghc2VxdWVuY2VJZEF0dHJpYnV0ZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlcXVlbmNlSWQgPSBzZXF1ZW5jZUlkQXR0cmlidXRlLnZhbHVlO1xyXG4gICAgICAgIGlmICghc2VxdWVuY2VJZCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHNlcXVlbmNlSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaW5kRXJyb3JFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpOiBFbGVtZW50IHtcclxuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50ICYmIGVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBjb25zdCBzbGliaW5ncyA9IDxFbGVtZW50W10+QXJyYXkuZnJvbShlbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gc2xpYmluZ3MuZmlsdGVyKHggPT4geC5hdHRyaWJ1dGVzKS5maW5kKHggPT4geC5hdHRyaWJ1dGVzW1ZhbGlkYXRpb25Db25zdGFudC5FUlJPUl9FTEVNRU5UX0lEXSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJFbGVtZW50cygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBub25EeW5hbWljT3B0aW9ucyA9IHRoaXMudmFsaWRhdG9yLm9wdGlvbnMuZmlsdGVyKHggPT4gIXguZHluYW1pYyk7XHJcbiAgICAgICAgY29uc3Qgbm9uRHluYW1pY0VsZW1lbnRzID0gbm9uRHluYW1pY09wdGlvbnMucmVkdWNlKChwcmV2aW91czogRWxlbWVudFtdLCBjdXJyZW50OiBWYWxpZGF0aW9uT3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBxdWVyeSA9IGAqWyR7dGhpcy5hdHRyaWJ1dGVOYW1lfT1cIiR7Y3VycmVudC52YWxpZGF0aW9uTmFtZX1cIl1gO1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0b3Iuc2NvcGUpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5ICs9IGBbc2NvcGU9XCIke3RoaXMudmFsaWRhdG9yLnNjb3BlfVwiXWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSA8RWxlbWVudFtdPkFycmF5LmZyb20odGhpcy52YWxpZGF0b3IuZm9ybVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpKTtcclxuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25JZCA9IHRoaXMuX2RhdGFTZXJ2aWNlLm5ld0d1aWQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnQsIFZhbGlkYXRpb25Db25zdGFudC5WQUxJREFUSU9OX0lELCB2YWxpZGF0aW9uSWQpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudC52YWxpZGF0aW9uSWQgPSB2YWxpZGF0aW9uSWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMuY29uY2F0KGVsZW1lbnRzKTtcclxuICAgICAgICB9LCBbXSk7XHJcblxyXG4gICAgICAgIGxldCBnZW5lcmF0ZWREeW5hbWljT3B0aW9ucyA9IFtdO1xyXG4gICAgICAgIGxldCBkeW5hbWljRWxlbWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLnZhbGlkYXRvci5vcHRpb25zID0gdGhpcy52YWxpZGF0b3Iub3B0aW9ucy5maWx0ZXIoeCA9PiAheC5keW5hbWljKTtcclxuICAgICAgICB0aGlzLnZpcnR1YWxWYWxpZGF0aW9uT3B0aW9ucy5mb3JFYWNoKChjdXJyZW50OiBWYWxpZGF0aW9uT3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBxdWVyeSA9IGAqWyR7dGhpcy5hdHRyaWJ1dGVOYW1lfT1cIiR7Y3VycmVudC52YWxpZGF0aW9uTmFtZX1cIl1gO1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0b3Iuc2NvcGUpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5ICs9IGBbc2NvcGU9XCIke3RoaXMudmFsaWRhdG9yLnNjb3BlfVwiXWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKHRoaXMudmFsaWRhdG9yLmZvcm1SZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb25lZE9wdGlvbnMgPSBlbGVtZW50cy5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uSWQgPSB0aGlzLl9kYXRhU2VydmljZS5uZXdHdWlkKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50LCBWYWxpZGF0aW9uQ29uc3RhbnQuVkFMSURBVElPTl9JRCwgdmFsaWRhdGlvbklkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnQsIFZhbGlkYXRpb25Db25zdGFudC5BUlJBWV9TRVFVRU5DRV9JRCwgaW5kZXgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmN1cnJlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbklkOiB2YWxpZGF0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVSZXNvbHZlcjogY3VycmVudC52YWx1ZVJlc29sdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKHBheWxvYWQ6IGFueSkgPT4gY3VycmVudC52YWx1ZVJlc29sdmVyKHBheWxvYWQsIGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICgpID0+IHsgcmV0dXJuICg8YW55PmVsZW1lbnQpLnZhbHVlOyB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZHluYW1pY0VsZW1lbnRzLnB1c2goLi4uZWxlbWVudHMpO1xyXG4gICAgICAgICAgICBnZW5lcmF0ZWREeW5hbWljT3B0aW9ucy5wdXNoKC4uLmNsb25lZE9wdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnZhbGlkYXRvci5vcHRpb25zID0gbm9uRHluYW1pY09wdGlvbnMuY29uY2F0KGdlbmVyYXRlZER5bmFtaWNPcHRpb25zKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzID0gbm9uRHluYW1pY0VsZW1lbnRzLmNvbmNhdChkeW5hbWljRWxlbWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJFdmVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50LmF0dHJpYnV0ZXNbdGhpcy5hdHRyaWJ1dGVOYW1lXSkuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudC5mb2N1c291dExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmZvY3Vzb3V0TGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbGVtZW50LCAnZm9jdXNvdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVCbHVyRXZlbnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlQmx1ckV2ZW50KGVsZW1lbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBlbGVtZW50T3B0aW9uID0gdGhpcy5maW5kRWxlbWVudE9wdGlvbihlbGVtZW50KTtcclxuICAgICAgICBpZiAoIWVsZW1lbnRPcHRpb24pIHRocm93IG5ldyBFcnJvcignIWVsZW1lbnRPcHRpb24nKTtcclxuXHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZUVsZW1lbnQoZWxlbWVudCwgZWxlbWVudE9wdGlvbikucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUobmV3T3B0aW9uID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudE9wdGlvbiA9IG5ld09wdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5zeW5jRXJyb3JNZXNzYWdlcyhlbGVtZW50LCBlbGVtZW50T3B0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN5bmNFcnJvck1lc3NhZ2VzKGVsZW1lbnQ6IGFueSwgb3B0aW9uOiBWYWxpZGF0aW9uT3B0aW9uKTogU3VtbWFyeUVycm9yIHwgbnVsbCB7XHJcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgb3B0aW9uLnJ1bGVzLmZvckVhY2goYWN0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRXJyb3JJdGVtRWxlbWVudChlbGVtZW50LCBhY3Rpb24pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy5zZXRFbGVtZW50RXJyb3IoZWxlbWVudCwgYWN0aW9uLCBvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgaW52YWxpZEFjdGlvbnMgPSBvcHRpb24ucnVsZXMuZmlsdGVyKHggPT4gIXguaXNWYWxpZCk7XHJcbiAgICAgICAgaWYgKGludmFsaWRBY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIG9wdGlvbi5lcnJvckVsZW1lbnRDbGFzcyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgb3B0aW9uLnN1Y2Nlc3NFbGVtZW50Q2xhc3MpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBlcnJvck1lc3NhZ2VzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkUmVsYXRlZFByb3ZpZGVycyhwcm92aWRlcnM6IFZhbGlkYXRpb25TZXJ2aWNlW10pOiB2b2lkIHtcclxuICAgICAgICBsZXQgbmV3UHJvdmlkZXJzID0gcHJvdmlkZXJzLmZpbHRlcih4ID0+IHRoaXMucmVsYXRlZFByb3ZpZGVycy5pbmRleE9mKHgpIDwgMCk7XHJcbiAgICAgICAgbmV3UHJvdmlkZXJzLmZvckVhY2gocHJvdmlkZXIgPT5cclxuICAgICAgICAgICAgcHJvdmlkZXIub25EZXN0cm95LnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbGF0ZWRQcm92aWRlcnMgPSB0aGlzLnJlbGF0ZWRQcm92aWRlcnMuZmlsdGVyKCgpID0+IHRoaXMucmVsYXRlZFByb3ZpZGVycy5pbmRleE9mKHByb3ZpZGVyKSA8IDApO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5yZWxhdGVkUHJvdmlkZXJzLnB1c2goLi4ubmV3UHJvdmlkZXJzKTtcclxuICAgIH1cclxufSJdfQ==