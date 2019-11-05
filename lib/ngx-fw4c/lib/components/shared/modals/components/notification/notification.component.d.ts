import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BsModalRef } from 'ngx-bootstrap';
import { NotificationViewModel } from '../../modal.model';
export declare class NotificationComponent {
    private _sanitizationService;
    _modalRef: BsModalRef;
    data: NotificationViewModel;
    constructor(_sanitizationService: DomSanitizer, _modalRef: BsModalRef);
    bypassSecurityTrustHtml(html: string): SafeHtml;
    cancel(): void;
}
