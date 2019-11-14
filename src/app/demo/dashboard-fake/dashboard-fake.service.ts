import { Injectable, OnChanges, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DashboardFakeService{
  constructor(private http: HttpClient) {}
  url = 'http://www.mocky.io/v2/5dc3cc723000000d523475cf';
  // url = 'http://192.168.110.112:8001/services';

  getClub(request): Observable<any>{

    return this.http.get(this.url);
    
    // return of({
    //   success: true,
    //   totalRecords: this.items.length,
    //   items: this.items
    // });
  }
}
