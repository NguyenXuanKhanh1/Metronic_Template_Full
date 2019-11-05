import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardFakeService {

  constructor(private http: HttpClient) { }
  url= 'http://localhost:3000/club';
  getClub(): Observable<any>{
    return this.http.get(this.url);
  }

}
