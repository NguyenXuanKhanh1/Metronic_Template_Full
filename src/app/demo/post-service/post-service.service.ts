import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  url = 'http://192.168.110.112:8001/services';
  constructor(private http: HttpClient) { }
  public PostService(data: []): Observable<any>{
    return this.http.post(this.url, data);
  }
}
