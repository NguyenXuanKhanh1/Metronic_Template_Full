import { OnDestroy, EventEmitter } from '@angular/core';
import { FileService } from '../file';
import { AuthenticationService } from '../../auth/auth.service';
import { ActionService } from '../services/action.service';
export declare class EditorComponent implements OnDestroy {
    fileService: FileService;
    authenticationService: AuthenticationService;
    private _actionService;
    nativeEditor: any;
    model: string;
    plainText: string;
    title: string;
    disabled: boolean;
    validationName: string;
    validationScope: string;
    emitNullOnDestroy: boolean;
    modelChange: EventEmitter<string>;
    focus: boolean;
    plainTextChange: EventEmitter<string>;
    editor: any;
    config: any;
    constructor(fileService: FileService, authenticationService: AuthenticationService, _actionService: ActionService);
    ngOnDestroy(): void;
    change(html: string): void;
    ready(event: any, fileService: FileService, authenticationService: AuthenticationService): void;
}
