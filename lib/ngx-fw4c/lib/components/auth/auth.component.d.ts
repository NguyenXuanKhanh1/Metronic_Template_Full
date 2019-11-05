import { ElementRef, AfterViewInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationLoginRequest, AuthenticationLoginResponse } from './auth.model';
import { AuthenticationService } from './auth.service';
import { CacheService } from '../shared/services';
import { ValidationService, ClientValidator } from '../shared/validation';
import { BaseTemplate } from '../shared';
export declare class AuthComponent implements AfterViewInit {
    private _router;
    private _cacheService;
    private _authenticationService;
    private _validationService;
    title: string;
    validator: ClientValidator;
    succeedPath: string;
    failurePath: string;
    template: BaseTemplate;
    completed: EventEmitter<AuthenticationLoginResponse>;
    formRef: ElementRef;
    request: AuthenticationLoginRequest;
    constructor(_router: Router, _cacheService: CacheService, _authenticationService: AuthenticationService, _validationService: ValidationService);
    ngAfterViewInit(): void;
    login(): void;
    private initValidations;
}
