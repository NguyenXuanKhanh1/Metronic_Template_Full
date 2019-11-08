import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationDemoService {
  constructor(private http: HttpClient) { }
  url = "http://www.mocky.io/v2/5dc516b732000076007696bd";
  regex =/[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  getEmail(request): Observable<any>{
    return this.http.get(this.url);
  }
  checkMail(mail): boolean{
    return this.regex.test(mail);
  }  
}
