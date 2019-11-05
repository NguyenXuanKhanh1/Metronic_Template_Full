import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BsModalRef } from 'ngx-bootstrap';
import { TemplateViewModel } from '../../modal.model';
import { LoaderComponent } from '../../../loader';
export declare class TemplateComponent {
    private _sanitizationService;
    _modalRef: BsModalRef;
    loader: LoaderComponent;
    data: TemplateViewModel;
    constructor(_sanitizationService: DomSanitizer, _modalRef: BsModalRef);
    bypassSecurityTrustHtml(html: string): SafeHtml;
    cancel(): void;
    accept(): void;
    show(): boolean;
    isValid(): boolean;
}
