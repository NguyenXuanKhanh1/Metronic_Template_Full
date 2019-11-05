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
                selector: 'c-editor',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEtBQUssTUFBTSxNQUFNLG1DQUFtQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVEzRCxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBaUIxQixZQUNTLFdBQXdCLEVBQ3hCLHFCQUE0QyxFQUMzQyxjQUE2QjtRQUY5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzNDLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBbEJ2QixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBR25CLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHakMsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQzNCLGdCQUFXLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkQsb0JBQWUsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyRSxXQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2hCLFdBQU0sR0FBUTtZQUNuQixNQUFNLEVBQUUsT0FBTztTQUNoQixDQUFDO0lBTUUsQ0FBQzs7OztJQUVMLFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxJQUFJO1lBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLElBQVk7O2NBQ2xCLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVztRQUN4RSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7O0lBRU0sS0FBSyxDQUFDLEtBQVUsRUFBRSxXQUF3QixFQUFFLHFCQUE0QztRQUM3RixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLG1CQUFtQjs7OztRQUFHLFVBQVUsTUFBVztZQUM3RSxPQUFPLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUEsQ0FBQztRQUNGLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNwQyxLQUFLLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDeEMsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQWpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLGtkQUFzQzs7YUFFdkM7Ozs7WUFUUSxXQUFXO1lBRVgscUJBQXFCO1lBQ3JCLGFBQWE7OzsyQkFTbkIsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7b0JBQzFDLEtBQUs7d0JBQ0wsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7MEJBQ0wsTUFBTTtvQkFDTixLQUFLOzhCQUNMLE1BQU07Ozs7SUFWUCx1Q0FBc0U7O0lBQ3RFLGdDQUFtQzs7SUFDbkMsb0NBQWtDOztJQUNsQyxnQ0FBOEI7O0lBQzlCLG1DQUEwQzs7SUFDMUMseUNBQXVDOztJQUN2QywwQ0FBd0M7O0lBQ3hDLDRDQUE0Qzs7SUFDNUMsc0NBQXdFOztJQUN4RSxnQ0FBK0I7O0lBQy9CLDBDQUE0RTs7SUFDNUUsaUNBQXVCOztJQUN2QixpQ0FFRTs7SUFHQSxzQ0FBK0I7O0lBQy9CLGdEQUFtRDs7Ozs7SUFDbkQseUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIEVkaXRvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnO1xyXG5pbXBvcnQgeyBGaWxlU2VydmljZSB9IGZyb20gJy4uL2ZpbGUnO1xyXG5pbXBvcnQgeyBFZGl0b3JBZGFwdGVyIH0gZnJvbSAnLi9lZGl0b3IuYWRhcHRvcic7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FjdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYy1lZGl0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2VkaXRvci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKCduYXRpdmVFZGl0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgbmF0aXZlRWRpdG9yOiBhbnk7XHJcbiAgQElucHV0KCkgcHVibGljIG1vZGVsOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBwdWJsaWMgcGxhaW5UZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcHVibGljIHZhbGlkYXRpb25OYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIHZhbGlkYXRpb25TY29wZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGVtaXROdWxsT25EZXN0cm95OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBtb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCkgcHVibGljIGZvY3VzOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgcGxhaW5UZXh0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBwdWJsaWMgZWRpdG9yID0gRWRpdG9yO1xyXG4gIHB1YmxpYyBjb25maWc6IGFueSA9IHtcclxuICAgIGhlaWdodDogJzYwMHB4J1xyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGZpbGVTZXJ2aWNlOiBGaWxlU2VydmljZSxcclxuICAgIHB1YmxpYyBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgX2FjdGlvblNlcnZpY2U6IEFjdGlvblNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmVtaXROdWxsT25EZXN0cm95ID09PSB0cnVlKVxyXG4gICAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQobnVsbCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlKGh0bWw6IHN0cmluZykge1xyXG4gICAgY29uc3QgcGxhaW5UZXh0ID0gdGhpcy5uYXRpdmVFZGl0b3IuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgdGhpcy5wbGFpblRleHRDaGFuZ2UuZW1pdChwbGFpblRleHQpO1xyXG4gICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KGh0bWwpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlYWR5KGV2ZW50OiBhbnksIGZpbGVTZXJ2aWNlOiBGaWxlU2VydmljZSwgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpOiB2b2lkIHtcclxuICAgIGV2ZW50LnBsdWdpbnMuZ2V0KCdGaWxlUmVwb3NpdG9yeScpLmNyZWF0ZVVwbG9hZEFkYXB0ZXIgPSBmdW5jdGlvbiAobG9hZGVyOiBhbnkpIHtcclxuICAgICAgcmV0dXJuIG5ldyBFZGl0b3JBZGFwdGVyKGxvYWRlciwgZmlsZVNlcnZpY2UsIGF1dGhlbnRpY2F0aW9uU2VydmljZSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHRoaXMuZm9jdXMpIHtcclxuICAgICAgdGhpcy5fYWN0aW9uU2VydmljZS5leGVjdXRlQXN5bmMoKCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnVpLmdldEVkaXRhYmxlRWxlbWVudCgpLmZvY3VzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==