import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceManagementService {
  urlPost= 'http://192.168.110.112:8001/services';
  // url= 'http://www.mocky.io/v2/5dc3cc723000000d523475cf';
  urlGet= 'http://www.mocky.io/v2/5dca844233000073003dedd1';
  constructor(private http: HttpClient) { }
  public getService(request): Observable<any>{
    return this.http.get(this.urlGet);
  }

  public PostService(data: []): Observable<any>{
    return this.http.post(this.urlPost, data);
  }

}
