import { FileService } from './file.service';
import { ModalService } from '../modals';
import { FileViewModel } from './file.model';
import { AuthenticationService } from '../../auth/auth.service';
import { ActionService } from '../services/action.service';
export declare class FileProvider {
    private _fileService;
    private _modalService;
    private _actionService;
    private _authenticationService;
    constructor(_fileService: FileService, _modalService: ModalService, _actionService: ActionService, _authenticationService: AuthenticationService);
    uploadAsync(files: File[], attachments: FileViewModel[], fileRef: any, callback?: () => any): void;
    private uploadFileAsync;
    private calculateTotalBytes;
    private buildRequest;
}
