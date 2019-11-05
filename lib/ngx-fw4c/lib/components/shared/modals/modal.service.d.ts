import { BsModalService } from 'ngx-bootstrap';
import { NotificationViewModel, TemplateViewModel, ConfirmViewModel } from './modal.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
export declare class ModalService {
    private _bsModalService;
    private Ng4LoadingSpinnerService;
    private _modalInstance;
    constructor(_bsModalService: BsModalService, Ng4LoadingSpinnerService: Ng4LoadingSpinnerService);
    showLoading(): void;
    hideLoading(): void;
    showNotificationDialog(data: NotificationViewModel): void;
    showConfirmDialog(data: ConfirmViewModel): void;
    showTemplateDialog(data: TemplateViewModel): void;
}
