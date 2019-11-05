import { FileService } from '../file/file.service';
import { AuthenticationService } from '../../auth/auth.service';
export declare class EditorAdapter {
    protected loader: any;
    protected fileService: FileService;
    protected authenticationService: AuthenticationService;
    constructor(loader: any, fileService: FileService, authenticationService: AuthenticationService);
    upload(): any;
}
