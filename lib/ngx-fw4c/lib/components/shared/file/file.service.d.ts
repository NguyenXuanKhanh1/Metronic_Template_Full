import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileRequest, FileResponse } from './file.model';
import { MockService } from '../services';
export declare class FileService extends MockService {
    private httpClient;
    constructor(httpClient: HttpClient);
    uploadFiles(request: FileRequest): Observable<FileResponse>;
}
