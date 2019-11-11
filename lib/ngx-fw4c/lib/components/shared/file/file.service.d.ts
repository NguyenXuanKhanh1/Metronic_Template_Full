import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileRequest, FileResponse } from './file.model';
import { MockService } from '../services';
import { AuthenticationService } from '../../auth/auth.service';
export declare class FileService extends MockService {
    protected httpClient: HttpClient;
    protected authenticationService: AuthenticationService;
    constructor(httpClient: HttpClient, authenticationService: AuthenticationService);
    uploadFiles(request: FileRequest): Observable<FileResponse>;
    uploadProgress(file: File): Observable<HttpEvent<FileResponse>>;
}
