/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import * as Editor from '@ckeditor/ckeditor5-build-classic';
import { FileService } from '../file';
import { EditorAdapter } from './editor.adaptor';
import { AuthenticationService } from '../../auth/auth.service';
import { ActionService } from '../services/action.service';
export class EditorComponent {
    /**
     * @param {?} fileService
     * @param {?} authenticationService
     * @param {?} _actionService
     */
    constructor(fileService, authenticationService, _actionService) {
        this.fileService = fileService;
        this.authenticationService = authenticationService;
        this._actionService = _actionService;
        this.model = '';
        this.disabled = false;
        this.emitNullOnDestroy = false;
        this.modelChange = new EventEmitter();
        this.plainTextChange = new EventEmitter();
        this.editor = Editor;
        this.config = {
            height: '600px'
        };
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.emitNullOnDestroy === true)
            this.modelChange.emit(null);
    }
    /**
     * @param {?} html
     * @return {?}
     */
    change(html) {
        /** @type {?} */
        const plainText = this.nativeEditor.elementRef.nativeElement.textContent;
        this.plainTextChange.emit(plainText);
        this.modelChange.emit(html);
    }
    /**
     * @param {?} event
     * @param {?} fileService
     * @param {?} authenticationService
     * @return {?}
     */
    ready(event, fileService, authenticationService) {
        event.plugins.get('FileRepository').createUploadAdapter = (/**
         * @param {?} loader
         * @return {?}
         */
        function (loader) {
            return new EditorAdapter(loader, fileService, authenticationService);
        });
        if (this.focus) {
            this._actionService.executeAsync((/**
             * @return {?}
             */
            () => {
                event.ui.getEditableElement().focus();
            }));
        }
    }
}
EditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-editor',
                template: "<div class=\"form-group\">\r\n  <label *ngIf=\"title\">{{title}}</label>\r\n  <ckeditor #nativeEditor [class.disabled]=\"disabled\" [config]=\"config\" [attr.validation-name]=\"validationName\"\r\n    [disabled]=\"disabled\" [editor]=\"editor\" [ngModel]=\"model\" (ngModelChange)=\"change($event)\"\r\n    [attr.scope]=\"validationScope ? validationScope : null\" (ready)=\"ready($event, fileService, authenticationService)\">\r\n  </ckeditor>\r\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
EditorComponent.ctorParameters = () => [
    { type: FileService },
    { type: AuthenticationService },
    { type: ActionService }
];
EditorComponent.propDecorators = {
    nativeEditor: [{ type: ViewChild, args: ['nativeEditor', { static: true },] }],
    model: [{ type: Input }],
    plainText: [{ type: Input }],
    title: [{ type: Input }],
    disabled: [{ type: Input }],
    validationName: [{ type: Input }],
    validationScope: [{ type: Input }],
    emitNullOnDestroy: [{ type: Input }],
    modelChange: [{ type: Output }],
    focus: [{ type: Input }],
    plainTextChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    EditorComponent.prototype.nativeEditor;
    /** @type {?} */
    EditorComponent.prototype.model;
    /** @type {?} */
    EditorComponent.prototype.plainText;
    /** @type {?} */
    EditorComponent.prototype.title;
    /** @type {?} */
    EditorComponent.prototype.disabled;
    /** @type {?} */
    EditorComponent.prototype.validationName;
    /** @type {?} */
    EditorComponent.prototype.validationScope;
    /** @type {?} */
    EditorComponent.prototype.emitNullOnDestroy;
    /** @type {?} */
    EditorComponent.prototype.modelChange;
    /** @type {?} */
    EditorComponent.prototype.focus;
    /** @type {?} */
    EditorComponent.prototype.plainTextChange;
    /** @type {?} */
    EditorComponent.prototype.editor;
    /** @type {?} */
    EditorComponent.prototype.config;
    /** @type {?} */
    EditorComponent.prototype.fileService;
    /** @type {?} */
    EditorComponent.prototype.authenticationService;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype._actionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEtBQUssTUFBTSxNQUFNLG1DQUFtQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVEzRCxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBaUIxQixZQUNTLFdBQXdCLEVBQ3hCLHFCQUE0QyxFQUMzQyxjQUE2QjtRQUY5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzNDLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBbEJ2QixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBR25CLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHakMsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQzNCLGdCQUFXLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkQsb0JBQWUsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyRSxXQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2hCLFdBQU0sR0FBUTtZQUNuQixNQUFNLEVBQUUsT0FBTztTQUNoQixDQUFDO0lBTUUsQ0FBQzs7OztJQUVMLFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxJQUFJO1lBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLElBQVk7O2NBQ2xCLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVztRQUN4RSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7O0lBRU0sS0FBSyxDQUFDLEtBQVUsRUFBRSxXQUF3QixFQUFFLHFCQUE0QztRQUM3RixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLG1CQUFtQjs7OztRQUFHLFVBQVUsTUFBVztZQUM3RSxPQUFPLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUEsQ0FBQztRQUNGLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNwQyxLQUFLLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDeEMsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQWpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLGtkQUFzQzs7YUFFdkM7Ozs7WUFUUSxXQUFXO1lBRVgscUJBQXFCO1lBQ3JCLGFBQWE7OzsyQkFTbkIsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7b0JBQzFDLEtBQUs7d0JBQ0wsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7MEJBQ0wsTUFBTTtvQkFDTixLQUFLOzhCQUNMLE1BQU07Ozs7SUFWUCx1Q0FBc0U7O0lBQ3RFLGdDQUFtQzs7SUFDbkMsb0NBQWtDOztJQUNsQyxnQ0FBOEI7O0lBQzlCLG1DQUEwQzs7SUFDMUMseUNBQXVDOztJQUN2QywwQ0FBd0M7O0lBQ3hDLDRDQUE0Qzs7SUFDNUMsc0NBQXdFOztJQUN4RSxnQ0FBK0I7O0lBQy9CLDBDQUE0RTs7SUFDNUUsaUNBQXVCOztJQUN2QixpQ0FFRTs7SUFHQSxzQ0FBK0I7O0lBQy9CLGdEQUFtRDs7Ozs7SUFDbkQseUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIEVkaXRvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnO1xyXG5pbXBvcnQgeyBGaWxlU2VydmljZSB9IGZyb20gJy4uL2ZpbGUnO1xyXG5pbXBvcnQgeyBFZGl0b3JBZGFwdGVyIH0gZnJvbSAnLi9lZGl0b3IuYWRhcHRvcic7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FjdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2F0YW5hLWVkaXRvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXRvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZWRpdG9yLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ25hdGl2ZUVkaXRvcicsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBuYXRpdmVFZGl0b3I6IGFueTtcclxuICBASW5wdXQoKSBwdWJsaWMgbW9kZWw6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBwbGFpblRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBwdWJsaWMgdmFsaWRhdGlvbk5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgdmFsaWRhdGlvblNjb3BlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZW1pdE51bGxPbkRlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcHVibGljIG1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASW5wdXQoKSBwdWJsaWMgZm9jdXM6IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBwbGFpblRleHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHB1YmxpYyBlZGl0b3IgPSBFZGl0b3I7XHJcbiAgcHVibGljIGNvbmZpZzogYW55ID0ge1xyXG4gICAgaGVpZ2h0OiAnNjAwcHgnXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZmlsZVNlcnZpY2U6IEZpbGVTZXJ2aWNlLFxyXG4gICAgcHVibGljIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfYWN0aW9uU2VydmljZTogQWN0aW9uU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuZW1pdE51bGxPbkRlc3Ryb3kgPT09IHRydWUpXHJcbiAgICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdChudWxsKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFuZ2UoaHRtbDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBwbGFpblRleHQgPSB0aGlzLm5hdGl2ZUVkaXRvci5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICB0aGlzLnBsYWluVGV4dENoYW5nZS5lbWl0KHBsYWluVGV4dCk7XHJcbiAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQoaHRtbCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVhZHkoZXZlbnQ6IGFueSwgZmlsZVNlcnZpY2U6IEZpbGVTZXJ2aWNlLCBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSk6IHZvaWQge1xyXG4gICAgZXZlbnQucGx1Z2lucy5nZXQoJ0ZpbGVSZXBvc2l0b3J5JykuY3JlYXRlVXBsb2FkQWRhcHRlciA9IGZ1bmN0aW9uIChsb2FkZXI6IGFueSkge1xyXG4gICAgICByZXR1cm4gbmV3IEVkaXRvckFkYXB0ZXIobG9hZGVyLCBmaWxlU2VydmljZSwgYXV0aGVudGljYXRpb25TZXJ2aWNlKTtcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5mb2N1cykge1xyXG4gICAgICB0aGlzLl9hY3Rpb25TZXJ2aWNlLmV4ZWN1dGVBc3luYygoKSA9PiB7XHJcbiAgICAgICAgZXZlbnQudWkuZ2V0RWRpdGFibGVFbGVtZW50KCkuZm9jdXMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19