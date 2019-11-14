import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabDemoService {

  // urlPost= 'http://192.168.110.112:8001/services';
  urlPost= 'http://192.168.66.49:8001/services';
  urlGet= 'http://www.mocky.io/v2/5dca844233000073003dedd1';
  constructor(private http: HttpClient) { }
  public getService(request): Observable<any>{
    return this.http.get(this.urlPost);
  }
}
