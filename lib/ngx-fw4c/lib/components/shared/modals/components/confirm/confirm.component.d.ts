import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BsModalRef } from 'ngx-bootstrap';
import { ConfirmViewModel } from '../../modal.model';
export declare class ConfirmComponent {
    private _sanitizationService;
    _modalRef: BsModalRef;
    data: ConfirmViewModel;
    constructor(_sanitizationService: DomSanitizer, _modalRef: BsModalRef);
    bypassSecurityTrustHtml(html: string): SafeHtml;
    cancel(): void;
    accept(): void;
}
