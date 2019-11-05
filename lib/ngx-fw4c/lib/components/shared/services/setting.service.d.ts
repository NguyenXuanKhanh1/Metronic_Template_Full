import { Observable } from 'rxjs';
import { SettingSearchResponse } from '../models';
import { HttpClient } from '@angular/common/http';
import { SearchBaseRequest } from '../models/base.model';
import { CacheService } from './cache.service';
export declare class SettingService {
    protected httpClient: HttpClient;
    private _cacheService;
    constructor(httpClient: HttpClient, _cacheService: CacheService);
    search(request: SearchBaseRequest): Observable<SettingSearchResponse>;
    useMock(value?: boolean): boolean;
}
