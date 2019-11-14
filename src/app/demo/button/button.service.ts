import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { ValidationRuleResponse } from 'ngx-fw4c';
import { delay } from 'rxjs/operators';
import { utcAsLocal } from 'ngx-bootstrap/chronos/public_api';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable({
  providedIn: "root"
})
export class ButtonService {

  url = "http://192.168.66.49:8001/services";
  // urlPost= 'http://192.168.110.112:8001/services';

  constructor(private http: HttpClient) {}
  public postService(data: any): Observable<any> {
    return this.http.post(this.url, data, httpOptions);
  }
  public validateNumber(number: string): Observable<ValidationRuleResponse>{
    let regex = /[0-9]*$/g;
    return of(new ValidationRuleResponse({
      status: regex.test(number),
      message: 'Please input only number'
    })).pipe(delay(500));
  }

  public validateString(string: string): Observable<ValidationRuleResponse>{
    let regex = /[A-Za-z0-9!#$%&'*+=?^_`{|}~-]/g;
    return of(new ValidationRuleResponse({
      status: regex.test(string),
      message: 'Please input right format'
    })).pipe(delay(500));
  }

  public validateURL(url: string): Observable<ValidationRuleResponse>{
    return of(new ValidationRuleResponse({
      status: url.startsWith('/',0),
      message: 'should start with: /'
    })).pipe(delay(500));
  }

}
