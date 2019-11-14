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
                selector: 'katana-auth',
                template: "<div #formRef>\r\n    <ng-container *ngIf=\"!template then default; else custom\">\r\n    </ng-container>\r\n</div>\r\n\r\n<ng-template #custom>\r\n    <katana-loader *ngIf=\"template\" [data]=\"template?.data\" [template]=\"template?.template\"></katana-loader>\r\n</ng-template>\r\n\r\n<ng-template #default>\r\n    <div class=\"col-xs-12 col-sm-6 col-md-3\" style=\"margin: 25px auto;\">\r\n        <h2 style=\"text-align: center;\">{{title}}</h2>\r\n        <div class=\"container\">\r\n            <div>\r\n                <label for=\"uname\"><b>User Name</b></label>\r\n                <input type=\"text\" validation-name=\"UserName\" [(ngModel)]=\"request.payload.userName\"\r\n                    placeholder=\"Enter Username\" name=\"uname\" required>\r\n            </div>\r\n            <div>\r\n                <label for=\"psw\"><b>Password</b></label>\r\n                <input type=\"password\" validation-name=\"Password\" [(ngModel)]=\"request.payload.password\"\r\n                    placeholder=\"Enter Password\" name=\"psw\" required>\r\n            </div>\r\n            <button (click)=\"login()\" type=\"submit\">Login</button>\r\n        </div>\r\n    </div>\r\n</ng-template>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2F1dGgvYXV0aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBaUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDbkgsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSwwQkFBMEIsRUFBK0IsTUFBTSxjQUFjLENBQUM7QUFDdkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBU3pDLE1BQU0sT0FBTyxhQUFhOzs7Ozs7O0lBVXhCLFlBQ1UsT0FBZSxFQUNmLGFBQTJCLEVBQzNCLHNCQUE2QyxFQUM3QyxrQkFBcUM7UUFIckMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBdUI7UUFDN0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQWIvQixVQUFLLEdBQVcsT0FBTyxDQUFDO1FBS3ZCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBK0IsQ0FBQztRQUV0RSxZQUFPLEdBQStCLElBQUks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QTJDOztJQUMzQyxvQ0FBb0M7O0lBQ3BDLG9DQUFvQzs7SUFDcEMsaUNBQXVDOztJQUN2QyxrQ0FBNkU7O0lBQzdFLGdDQUFtRTs7SUFDbkUsZ0NBQThFOzs7OztJQUc1RSxnQ0FBdUI7Ozs7O0lBQ3ZCLHNDQUFtQzs7Ozs7SUFDbkMsK0NBQXFEOzs7OztJQUNyRCwyQ0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uTG9naW5SZXF1ZXN0LCBBdXRoZW50aWNhdGlvbkxvZ2luUmVzcG9uc2UgfSBmcm9tICcuL2F1dGgubW9kZWwnO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhDb25zdCB9IGZyb20gJy4vYXV0aC5jb25zdCc7XHJcbmltcG9ydCB7IENhY2hlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25TZXJ2aWNlLCBWYWxpZGF0aW9uT3B0aW9uLCBSZXF1aXJlZFZhbGlkYXRpb25SdWxlLCBDbGllbnRWYWxpZGF0b3IgfSBmcm9tICcuLi9zaGFyZWQvdmFsaWRhdGlvbic7XHJcbmltcG9ydCB7IGZhZGVJbk91dCB9IGZyb20gJy4uL3NoYXJlZC90cmlnZ2Vycyc7XHJcbmltcG9ydCB7IEJhc2VUZW1wbGF0ZSB9IGZyb20gJy4uL3NoYXJlZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2thdGFuYS1hdXRoJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXV0aC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXV0aC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFtmYWRlSW5PdXRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gJ0xvZ2luJztcclxuICBASW5wdXQoKSBwdWJsaWMgdmFsaWRhdG9yOiBDbGllbnRWYWxpZGF0b3I7XHJcbiAgQElucHV0KCkgcHVibGljIHN1Y2NlZWRQYXRoOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIGZhaWx1cmVQYXRoOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIHRlbXBsYXRlOiBCYXNlVGVtcGxhdGU7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBjb21wbGV0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEF1dGhlbnRpY2F0aW9uTG9naW5SZXNwb25zZT4oKTtcclxuICBAVmlld0NoaWxkKCdmb3JtUmVmJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIGZvcm1SZWY6IEVsZW1lbnRSZWY7XHJcbiAgcHVibGljIHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uTG9naW5SZXF1ZXN0ID0gbmV3IEF1dGhlbnRpY2F0aW9uTG9naW5SZXF1ZXN0KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIF9jYWNoZVNlcnZpY2U6IENhY2hlU2VydmljZSxcclxuICAgIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0VmFsaWRhdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2dpbigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fdmFsaWRhdGlvblNlcnZpY2UuaXNWYWxpZCgpKSByZXR1cm47XHJcbiAgICB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UubG9naW4odGhpcy5yZXF1ZXN0KS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBBdXRoZW50aWNhdGlvbkxvZ2luUmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICB0aGlzLl9jYWNoZVNlcnZpY2Uuc2V0KEF1dGhDb25zdC5Vc2VyLCByZXNwb25zZS51c2VyKTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZC5lbWl0KHJlc3BvbnNlKTtcclxuICAgICAgICBpZiAodGhpcy5zdWNjZWVkUGF0aCkgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFt0aGlzLnN1Y2NlZWRQYXRoXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fY2FjaGVTZXJ2aWNlLnJlbW92ZShBdXRoQ29uc3QuVXNlcik7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQuZW1pdChyZXNwb25zZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuZmFpbHVyZVBhdGgpIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbdGhpcy5mYWlsdXJlUGF0aF0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFZhbGlkYXRpb25zKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmZvcm1SZWYpIHRocm93IG5ldyBFcnJvcignZm9ybVJlZiBpcyBudWxsJyk7XHJcbiAgICB2YXIgb3B0aW9uczogVmFsaWRhdGlvbk9wdGlvbltdID0gW1xyXG4gICAgICBuZXcgVmFsaWRhdGlvbk9wdGlvbih7XHJcbiAgICAgICAgdmFsaWRhdGlvbk5hbWU6ICdVc2VyTmFtZScsXHJcbiAgICAgICAgdmFsdWVSZXNvbHZlcjogKCkgPT4gdGhpcy5yZXF1ZXN0LnBheWxvYWQudXNlck5hbWUsXHJcbiAgICAgICAgcnVsZXM6IFtuZXcgUmVxdWlyZWRWYWxpZGF0aW9uUnVsZSgpXVxyXG4gICAgICB9KSxcclxuICAgICAgbmV3IFZhbGlkYXRpb25PcHRpb24oe1xyXG4gICAgICAgIHZhbGlkYXRpb25OYW1lOiAnUGFzc3dvcmQnLFxyXG4gICAgICAgIHZhbHVlUmVzb2x2ZXI6ICgpID0+IHRoaXMucmVxdWVzdC5wYXlsb2FkLnBhc3N3b3JkLFxyXG4gICAgICAgIHJ1bGVzOiBbbmV3IFJlcXVpcmVkVmFsaWRhdGlvblJ1bGUoKV1cclxuICAgICAgfSlcclxuICAgIF07XHJcblxyXG4gICAgdmFyIHZhbGlkYXRvciA9IG5ldyBDbGllbnRWYWxpZGF0b3Ioe1xyXG4gICAgICBmb3JtUmVmOiB0aGlzLmZvcm1SZWYsXHJcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXHJcbiAgICAgIHBheWxvYWRSZWY6ICgpID0+IHRoaXNcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3ZhbGlkYXRpb25TZXJ2aWNlLmluaXQoe1xyXG4gICAgICB2YWxpZGF0b3I6IHRoaXMudmFsaWRhdG9yID8gdGhpcy52YWxpZGF0b3IgOiB2YWxpZGF0b3JcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=