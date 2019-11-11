/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationLoginRequest } from './auth.model';
import { AuthenticationService } from './auth.service';
import { AuthConst } from './auth.const';
import { CacheService } from '../shared/services';
import { ValidationService, ValidationOption, RequiredValidationRule, ClientValidator } from '../shared/validation';
import { fadeInOut } from '../shared/triggers';
import { BaseTemplate } from '../shared';
export class AuthComponent {
    /**
     * @param {?} _router
     * @param {?} _cacheService
     * @param {?} _authenticationService
     * @param {?} _validationService
     */
    constructor(_router, _cacheService, _authenticationService, _validationService) {
        this._router = _router;
        this._cacheService = _cacheService;
        this._authenticationService = _authenticationService;
        this._validationService = _validationService;
        this.title = 'Login';
        this.completed = new EventEmitter();
        this.request = new AuthenticationLoginRequest();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initValidations();
    }
    /**
     * @return {?}
     */
    login() {
        if (!this._validationService.isValid())
            return;
        this._authenticationService.login(this.request).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (response.success) {
                this._cacheService.set(AuthConst.User, response.user);
                this.completed.emit(response);
                if (this.succeedPath)
                    this._router.navigate([this.succeedPath]);
            }
            else {
                this._cacheService.remove(AuthConst.User);
                this.completed.emit(response);
                if (this.failurePath)
                    this._router.navigate([this.failurePath]);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    initValidations() {
        if (!this.formRef)
            throw new Error('formRef is null');
        /** @type {?} */
        var options = [
            new ValidationOption({
                validationName: 'UserName',
                valueResolver: (/**
                 * @return {?}
                 */
                () => this.request.payload.userName),
                rules: [new RequiredValidationRule()]
            }),
            new ValidationOption({
                validationName: 'Password',
                valueResolver: (/**
                 * @return {?}
                 */
                () => this.request.payload.password),
                rules: [new RequiredValidationRule()]
            })
        ];
        /** @type {?} */
        var validator = new ClientValidator({
            formRef: this.formRef,
            options: options,
            payloadRef: (/**
             * @template THIS
             * @this {THIS}
             * @return {THIS}
             */
            () => this)
        });
        this._validationService.init({
            validator: this.validator ? this.validator : validator
        });
    }
}
AuthComponent.decorators = [
    { type: Component, args: [{
                selector: 'c-auth',
                template: "<div #formRef>\r\n    <ng-container *ngIf=\"!template then default; else custom\">\r\n    </ng-container>\r\n</div>\r\n\r\n<ng-template #custom>\r\n    <c-loader *ngIf=\"template\" [data]=\"template?.data\" [template]=\"template?.template\"></c-loader>\r\n</ng-template>\r\n\r\n<ng-template #default>\r\n    <div class=\"col-xs-12 col-sm-6 col-md-3\" style=\"margin: 25px auto;\">\r\n        <h2 style=\"text-align: center;\">{{title}}</h2>\r\n        <div class=\"container\">\r\n            <div>\r\n                <label for=\"uname\"><b>User Name</b></label>\r\n                <input type=\"text\" validation-name=\"UserName\" [(ngModel)]=\"request.payload.userName\"\r\n                    placeholder=\"Enter Username\" name=\"uname\" required>\r\n            </div>\r\n            <div>\r\n                <label for=\"psw\"><b>Password</b></label>\r\n                <input type=\"password\" validation-name=\"Password\" [(ngModel)]=\"request.payload.password\"\r\n                    placeholder=\"Enter Password\" name=\"psw\" required>\r\n            </div>\r\n            <button (click)=\"login()\" type=\"submit\">Login</button>\r\n        </div>\r\n    </div>\r\n</ng-template>",
                animations: [fadeInOut],
                styles: ["body{font-family:Arial,Helvetica,sans-serif}form{border:3px solid #f1f1f1}input[type=password],input[type=text]{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}button{background-color:#4caf50;color:#fff;padding:14px 20px;margin:8px 0;border:none;cursor:pointer;width:100%}button:hover{opacity:.8}.cancelbtn{width:auto;padding:10px 18px;background-color:#f44336}.imgcontainer{text-align:center;margin:24px 0 12px}img.avatar{width:40%;border-radius:50%}.container{padding:16px}span.psw{float:right;padding-top:16px}@media screen and (max-width:300px){span.psw{display:block;float:none}.cancelbtn{width:100%}}"]
            }] }
];
/** @nocollapse */
AuthComponent.ctorParameters = () => [
    { type: Router },
    { type: CacheService },
    { type: AuthenticationService },
    { type: ValidationService }
];
AuthComponent.propDecorators = {
    title: [{ type: Input }],
    validator: [{ type: Input }],
    succeedPath: [{ type: Input }],
    failurePath: [{ type: Input }],
    template: [{ type: Input }],
    completed: [{ type: Output }],
    formRef: [{ type: ViewChild, args: ['formRef', { static: true },] }]
};
if (false) {
    /** @type {?} */
    AuthComponent.prototype.title;
    /** @type {?} */
    AuthComponent.prototype.validator;
    /** @type {?} */
    AuthComponent.prototype.succeedPath;
    /** @type {?} */
    AuthComponent.prototype.failurePath;
    /** @type {?} */
    AuthComponent.prototype.template;
    /** @type {?} */
    AuthComponent.prototype.completed;
    /** @type {?} */
    AuthComponent.prototype.formRef;
    /** @type {?} */
    AuthComponent.prototype.request;
    /**
     * @type {?}
     * @private
     */
    AuthComponent.prototype._router;
    /**
     * @type {?}
     * @private
     */
    AuthComponent.prototype._cacheService;
    /**
     * @type {?}
     * @private
     */
    AuthComponent.prototype._authenticationService;
    /**
     * @type {?}
     * @private
     */
    AuthComponent.prototype._validationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2F1dGgvYXV0aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBaUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDbkgsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSwwQkFBMEIsRUFBK0IsTUFBTSxjQUFjLENBQUM7QUFDdkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBU3pDLE1BQU0sT0FBTyxhQUFhOzs7Ozs7O0lBVXhCLFlBQ1UsT0FBZSxFQUNmLGFBQTJCLEVBQzNCLHNCQUE2QyxFQUM3QyxrQkFBcUM7UUFIckMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBdUI7UUFDN0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQWIvQixVQUFLLEdBQVcsT0FBTyxDQUFDO1FBS3ZCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBK0IsQ0FBQztRQUV0RSxZQUFPLEdBQStCLElBQUks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QTJDOztJQUMzQyxvQ0FBb0M7O0lBQ3BDLG9DQUFvQzs7SUFDcEMsaUNBQXVDOztJQUN2QyxrQ0FBNkU7O0lBQzdFLGdDQUFtRTs7SUFDbkUsZ0NBQThFOzs7OztJQUc1RSxnQ0FBdUI7Ozs7O0lBQ3ZCLHNDQUFtQzs7Ozs7SUFDbkMsK0NBQXFEOzs7OztJQUNyRCwyQ0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uTG9naW5SZXF1ZXN0LCBBdXRoZW50aWNhdGlvbkxvZ2luUmVzcG9uc2UgfSBmcm9tICcuL2F1dGgubW9kZWwnO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhDb25zdCB9IGZyb20gJy4vYXV0aC5jb25zdCc7XHJcbmltcG9ydCB7IENhY2hlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25TZXJ2aWNlLCBWYWxpZGF0aW9uT3B0aW9uLCBSZXF1aXJlZFZhbGlkYXRpb25SdWxlLCBDbGllbnRWYWxpZGF0b3IgfSBmcm9tICcuLi9zaGFyZWQvdmFsaWRhdGlvbic7XHJcbmltcG9ydCB7IGZhZGVJbk91dCB9IGZyb20gJy4uL3NoYXJlZC90cmlnZ2Vycyc7XHJcbmltcG9ydCB7IEJhc2VUZW1wbGF0ZSB9IGZyb20gJy4uL3NoYXJlZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2MtYXV0aCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dGguY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2F1dGguY29tcG9uZW50LnNjc3MnXSxcclxuICBhbmltYXRpb25zOiBbZmFkZUluT3V0XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBwdWJsaWMgdGl0bGU6IHN0cmluZyA9ICdMb2dpbic7XHJcbiAgQElucHV0KCkgcHVibGljIHZhbGlkYXRvcjogQ2xpZW50VmFsaWRhdG9yO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzdWNjZWVkUGF0aDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBmYWlsdXJlUGF0aDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0ZW1wbGF0ZTogQmFzZVRlbXBsYXRlO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY29tcGxldGVkID0gbmV3IEV2ZW50RW1pdHRlcjxBdXRoZW50aWNhdGlvbkxvZ2luUmVzcG9uc2U+KCk7XHJcbiAgQFZpZXdDaGlsZCgnZm9ybVJlZicsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBmb3JtUmVmOiBFbGVtZW50UmVmO1xyXG4gIHB1YmxpYyByZXF1ZXN0OiBBdXRoZW50aWNhdGlvbkxvZ2luUmVxdWVzdCA9IG5ldyBBdXRoZW50aWNhdGlvbkxvZ2luUmVxdWVzdCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBfY2FjaGVTZXJ2aWNlOiBDYWNoZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgX3ZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdFZhbGlkYXRpb25zKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9naW4oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX3ZhbGlkYXRpb25TZXJ2aWNlLmlzVmFsaWQoKSkgcmV0dXJuO1xyXG4gICAgdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ2luKHRoaXMucmVxdWVzdCkuc3Vic2NyaWJlKChyZXNwb25zZTogQXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgdGhpcy5fY2FjaGVTZXJ2aWNlLnNldChBdXRoQ29uc3QuVXNlciwgcmVzcG9uc2UudXNlcik7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQuZW1pdChyZXNwb25zZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3VjY2VlZFBhdGgpIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbdGhpcy5zdWNjZWVkUGF0aF0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2NhY2hlU2VydmljZS5yZW1vdmUoQXV0aENvbnN0LlVzZXIpO1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkLmVtaXQocmVzcG9uc2UpO1xyXG4gICAgICAgIGlmICh0aGlzLmZhaWx1cmVQYXRoKSB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZmFpbHVyZVBhdGhdKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRWYWxpZGF0aW9ucygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5mb3JtUmVmKSB0aHJvdyBuZXcgRXJyb3IoJ2Zvcm1SZWYgaXMgbnVsbCcpO1xyXG4gICAgdmFyIG9wdGlvbnM6IFZhbGlkYXRpb25PcHRpb25bXSA9IFtcclxuICAgICAgbmV3IFZhbGlkYXRpb25PcHRpb24oe1xyXG4gICAgICAgIHZhbGlkYXRpb25OYW1lOiAnVXNlck5hbWUnLFxyXG4gICAgICAgIHZhbHVlUmVzb2x2ZXI6ICgpID0+IHRoaXMucmVxdWVzdC5wYXlsb2FkLnVzZXJOYW1lLFxyXG4gICAgICAgIHJ1bGVzOiBbbmV3IFJlcXVpcmVkVmFsaWRhdGlvblJ1bGUoKV1cclxuICAgICAgfSksXHJcbiAgICAgIG5ldyBWYWxpZGF0aW9uT3B0aW9uKHtcclxuICAgICAgICB2YWxpZGF0aW9uTmFtZTogJ1Bhc3N3b3JkJyxcclxuICAgICAgICB2YWx1ZVJlc29sdmVyOiAoKSA9PiB0aGlzLnJlcXVlc3QucGF5bG9hZC5wYXNzd29yZCxcclxuICAgICAgICBydWxlczogW25ldyBSZXF1aXJlZFZhbGlkYXRpb25SdWxlKCldXHJcbiAgICAgIH0pXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciB2YWxpZGF0b3IgPSBuZXcgQ2xpZW50VmFsaWRhdG9yKHtcclxuICAgICAgZm9ybVJlZjogdGhpcy5mb3JtUmVmLFxyXG4gICAgICBvcHRpb25zOiBvcHRpb25zLFxyXG4gICAgICBwYXlsb2FkUmVmOiAoKSA9PiB0aGlzXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl92YWxpZGF0aW9uU2VydmljZS5pbml0KHtcclxuICAgICAgdmFsaWRhdG9yOiB0aGlzLnZhbGlkYXRvciA/IHRoaXMudmFsaWRhdG9yIDogdmFsaWRhdG9yXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19