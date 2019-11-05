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
                    selector: 'c-editor',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEtBQUssTUFBTSxNQUFNLG1DQUFtQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUzRDtJQXVCRSx5QkFDUyxXQUF3QixFQUN4QixxQkFBNEMsRUFDM0MsY0FBNkI7UUFGOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUMzQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQWxCdkIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUduQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBR2pDLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUMzQixnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZELG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckUsV0FBTSxHQUFHLE1BQU0sQ0FBQztRQUNoQixXQUFNLEdBQVE7WUFDbkIsTUFBTSxFQUFFLE9BQU87U0FDaEIsQ0FBQztJQU1FLENBQUM7Ozs7SUFFTCxxQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxJQUFJO1lBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRU0sZ0NBQU07Ozs7SUFBYixVQUFjLElBQVk7O1lBQ2xCLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVztRQUN4RSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7O0lBRU0sK0JBQUs7Ozs7OztJQUFaLFVBQWEsS0FBVSxFQUFFLFdBQXdCLEVBQUUscUJBQTRDO1FBQzdGLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsbUJBQW1COzs7O1FBQUcsVUFBVSxNQUFXO1lBQzdFLE9BQU8sSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQSxDQUFDO1FBQ0YsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZOzs7WUFBQztnQkFDL0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3hDLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkFqREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixrZEFBc0M7O2lCQUV2Qzs7OztnQkFUUSxXQUFXO2dCQUVYLHFCQUFxQjtnQkFDckIsYUFBYTs7OytCQVNuQixTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt3QkFDMUMsS0FBSzs0QkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSztpQ0FDTCxLQUFLO2tDQUNMLEtBQUs7b0NBQ0wsS0FBSzs4QkFDTCxNQUFNO3dCQUNOLEtBQUs7a0NBQ0wsTUFBTTs7SUFpQ1Qsc0JBQUM7Q0FBQSxBQWxERCxJQWtEQztTQTVDWSxlQUFlOzs7SUFDMUIsdUNBQXNFOztJQUN0RSxnQ0FBbUM7O0lBQ25DLG9DQUFrQzs7SUFDbEMsZ0NBQThCOztJQUM5QixtQ0FBMEM7O0lBQzFDLHlDQUF1Qzs7SUFDdkMsMENBQXdDOztJQUN4Qyw0Q0FBNEM7O0lBQzVDLHNDQUF3RTs7SUFDeEUsZ0NBQStCOztJQUMvQiwwQ0FBNEU7O0lBQzVFLGlDQUF1Qjs7SUFDdkIsaUNBRUU7O0lBR0Esc0NBQStCOztJQUMvQixnREFBbUQ7Ozs7O0lBQ25ELHlDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBWaWV3Q2hpbGQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBFZGl0b3IgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJztcclxuaW1wb3J0IHsgRmlsZVNlcnZpY2UgfSBmcm9tICcuLi9maWxlJztcclxuaW1wb3J0IHsgRWRpdG9yQWRhcHRlciB9IGZyb20gJy4vZWRpdG9yLmFkYXB0b3InO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEFjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hY3Rpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2MtZWRpdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9lZGl0b3IuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZCgnbmF0aXZlRWRpdG9yJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIG5hdGl2ZUVkaXRvcjogYW55O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtb2RlbDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgcHVibGljIHBsYWluVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWxpZGF0aW9uTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWxpZGF0aW9uU2NvcGU6IHN0cmluZztcclxuICBASW5wdXQoKSBlbWl0TnVsbE9uRGVzdHJveTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgbW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBmb2N1czogYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgcHVibGljIHBsYWluVGV4dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgcHVibGljIGVkaXRvciA9IEVkaXRvcjtcclxuICBwdWJsaWMgY29uZmlnOiBhbnkgPSB7XHJcbiAgICBoZWlnaHQ6ICc2MDBweCdcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBmaWxlU2VydmljZTogRmlsZVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9hY3Rpb25TZXJ2aWNlOiBBY3Rpb25TZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5lbWl0TnVsbE9uRGVzdHJveSA9PT0gdHJ1ZSlcclxuICAgICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoYW5nZShodG1sOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHBsYWluVGV4dCA9IHRoaXMubmF0aXZlRWRpdG9yLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgIHRoaXMucGxhaW5UZXh0Q2hhbmdlLmVtaXQocGxhaW5UZXh0KTtcclxuICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdChodG1sKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWFkeShldmVudDogYW55LCBmaWxlU2VydmljZTogRmlsZVNlcnZpY2UsIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKTogdm9pZCB7XHJcbiAgICBldmVudC5wbHVnaW5zLmdldCgnRmlsZVJlcG9zaXRvcnknKS5jcmVhdGVVcGxvYWRBZGFwdGVyID0gZnVuY3Rpb24gKGxvYWRlcjogYW55KSB7XHJcbiAgICAgIHJldHVybiBuZXcgRWRpdG9yQWRhcHRlcihsb2FkZXIsIGZpbGVTZXJ2aWNlLCBhdXRoZW50aWNhdGlvblNlcnZpY2UpO1xyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLmZvY3VzKSB7XHJcbiAgICAgIHRoaXMuX2FjdGlvblNlcnZpY2UuZXhlY3V0ZUFzeW5jKCgpID0+IHtcclxuICAgICAgICBldmVudC51aS5nZXRFZGl0YWJsZUVsZW1lbnQoKS5mb2N1cygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn0iXX0=