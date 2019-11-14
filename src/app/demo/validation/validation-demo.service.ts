import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ValidationRuleResponse } from 'ngx-fw4c';
import { delay } from 'rxjs/operators';

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

  // public check(email: string): ValidationRuleResponse {
  //   return new ValidationRuleResponse({
  //     status: this.regex.test(email),
  //     message:' Error from server'
  //   });
  // }
  public check(email: string): Observable<ValidationRuleResponse> {
    return of(new ValidationRuleResponse({
      status: this.regex.test(email),
      message:' Error from server'
    })).pipe(delay(500));
  }
}
