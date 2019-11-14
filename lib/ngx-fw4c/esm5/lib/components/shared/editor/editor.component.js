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
var EditorComponent = /** @class */ (function () {
    function EditorComponent(fileService, authenticationService, _actionService) {
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
    EditorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.emitNullOnDestroy === true)
            this.modelChange.emit(null);
    };
    /**
     * @param {?} html
     * @return {?}
     */
    EditorComponent.prototype.change = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        /** @type {?} */
        var plainText = this.nativeEditor.elementRef.nativeElement.textContent;
        this.plainTextChange.emit(plainText);
        this.modelChange.emit(html);
    };
    /**
     * @param {?} event
     * @param {?} fileService
     * @param {?} authenticationService
     * @return {?}
     */
    EditorComponent.prototype.ready = /**
     * @param {?} event
     * @param {?} fileService
     * @param {?} authenticationService
     * @return {?}
     */
    function (event, fileService, authenticationService) {
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
            function () {
                event.ui.getEditableElement().focus();
            }));
        }
    };
    EditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-editor',
                    template: "<div class=\"form-group\">\r\n  <label *ngIf=\"title\">{{title}}</label>\r\n  <ckeditor #nativeEditor [class.disabled]=\"disabled\" [config]=\"config\" [attr.validation-name]=\"validationName\"\r\n    [disabled]=\"disabled\" [editor]=\"editor\" [ngModel]=\"model\" (ngModelChange)=\"change($event)\"\r\n    [attr.scope]=\"validationScope ? validationScope : null\" (ready)=\"ready($event, fileService, authenticationService)\">\r\n  </ckeditor>\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    EditorComponent.ctorParameters = function () { return [
        { type: FileService },
        { type: AuthenticationService },
        { type: ActionService }
    ]; };
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
    return EditorComponent;
}());
export { EditorComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEtBQUssTUFBTSxNQUFNLG1DQUFtQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUzRDtJQXVCRSx5QkFDUyxXQUF3QixFQUN4QixxQkFBNEMsRUFDM0MsY0FBNkI7UUFGOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUMzQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQWxCdkIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUduQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBR2pDLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUMzQixnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZELG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckUsV0FBTSxHQUFHLE1BQU0sQ0FBQztRQUNoQixXQUFNLEdBQVE7WUFDbkIsTUFBTSxFQUFFLE9BQU87U0FDaEIsQ0FBQztJQU1FLENBQUM7Ozs7SUFFTCxxQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxJQUFJO1lBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRU0sZ0NBQU07Ozs7SUFBYixVQUFjLElBQVk7O1lBQ2xCLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVztRQUN4RSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7O0lBRU0sK0JBQUs7Ozs7OztJQUFaLFVBQWEsS0FBVSxFQUFFLFdBQXdCLEVBQUUscUJBQTRDO1FBQzdGLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsbUJBQW1COzs7O1FBQUcsVUFBVSxNQUFXO1lBQzdFLE9BQU8sSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQSxDQUFDO1FBQ0YsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZOzs7WUFBQztnQkFDL0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3hDLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkFqREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixrZEFBc0M7O2lCQUV2Qzs7OztnQkFUUSxXQUFXO2dCQUVYLHFCQUFxQjtnQkFDckIsYUFBYTs7OytCQVNuQixTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt3QkFDMUMsS0FBSzs0QkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSztpQ0FDTCxLQUFLO2tDQUNMLEtBQUs7b0NBQ0wsS0FBSzs4QkFDTCxNQUFNO3dCQUNOLEtBQUs7a0NBQ0wsTUFBTTs7SUFpQ1Qsc0JBQUM7Q0FBQSxBQWxERCxJQWtEQztTQTVDWSxlQUFlOzs7SUFDMUIsdUNBQXNFOztJQUN0RSxnQ0FBbUM7O0lBQ25DLG9DQUFrQzs7SUFDbEMsZ0NBQThCOztJQUM5QixtQ0FBMEM7O0lBQzFDLHlDQUF1Qzs7SUFDdkMsMENBQXdDOztJQUN4Qyw0Q0FBNEM7O0lBQzVDLHNDQUF3RTs7SUFDeEUsZ0NBQStCOztJQUMvQiwwQ0FBNEU7O0lBQzVFLGlDQUF1Qjs7SUFDdkIsaUNBRUU7O0lBR0Esc0NBQStCOztJQUMvQixnREFBbUQ7Ozs7O0lBQ25ELHlDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBWaWV3Q2hpbGQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBFZGl0b3IgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJztcclxuaW1wb3J0IHsgRmlsZVNlcnZpY2UgfSBmcm9tICcuLi9maWxlJztcclxuaW1wb3J0IHsgRWRpdG9yQWRhcHRlciB9IGZyb20gJy4vZWRpdG9yLmFkYXB0b3InO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEFjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hY3Rpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2thdGFuYS1lZGl0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2VkaXRvci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKCduYXRpdmVFZGl0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgbmF0aXZlRWRpdG9yOiBhbnk7XHJcbiAgQElucHV0KCkgcHVibGljIG1vZGVsOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBwdWJsaWMgcGxhaW5UZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcHVibGljIHZhbGlkYXRpb25OYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIHZhbGlkYXRpb25TY29wZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGVtaXROdWxsT25EZXN0cm95OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBtb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCkgcHVibGljIGZvY3VzOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgcGxhaW5UZXh0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBwdWJsaWMgZWRpdG9yID0gRWRpdG9yO1xyXG4gIHB1YmxpYyBjb25maWc6IGFueSA9IHtcclxuICAgIGhlaWdodDogJzYwMHB4J1xyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGZpbGVTZXJ2aWNlOiBGaWxlU2VydmljZSxcclxuICAgIHB1YmxpYyBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgX2FjdGlvblNlcnZpY2U6IEFjdGlvblNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmVtaXROdWxsT25EZXN0cm95ID09PSB0cnVlKVxyXG4gICAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQobnVsbCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlKGh0bWw6IHN0cmluZykge1xyXG4gICAgY29uc3QgcGxhaW5UZXh0ID0gdGhpcy5uYXRpdmVFZGl0b3IuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgdGhpcy5wbGFpblRleHRDaGFuZ2UuZW1pdChwbGFpblRleHQpO1xyXG4gICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KGh0bWwpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlYWR5KGV2ZW50OiBhbnksIGZpbGVTZXJ2aWNlOiBGaWxlU2VydmljZSwgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpOiB2b2lkIHtcclxuICAgIGV2ZW50LnBsdWdpbnMuZ2V0KCdGaWxlUmVwb3NpdG9yeScpLmNyZWF0ZVVwbG9hZEFkYXB0ZXIgPSBmdW5jdGlvbiAobG9hZGVyOiBhbnkpIHtcclxuICAgICAgcmV0dXJuIG5ldyBFZGl0b3JBZGFwdGVyKGxvYWRlciwgZmlsZVNlcnZpY2UsIGF1dGhlbnRpY2F0aW9uU2VydmljZSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHRoaXMuZm9jdXMpIHtcclxuICAgICAgdGhpcy5fYWN0aW9uU2VydmljZS5leGVjdXRlQXN5bmMoKCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnVpLmdldEVkaXRhYmxlRWxlbWVudCgpLmZvY3VzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==