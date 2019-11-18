import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { ValidationRuleResponse } from 'ngx-fw4c';
import { delay } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: 'root'
})
export class EditConsumerService {
  constructor(private http: HttpClient) {}
  url = 'http://192.168.35.108:8001/consumers';

  public postService(data: any): Observable<any> {
    return this.http.post(this.url, data, httpOptions);
  }
  
  public validateString(string: string): Observable<ValidationRuleResponse>{
    let regex = /[A-Za-z0-9!#$%&'*+=?^_`{|}~-]/g;
    return of(new ValidationRuleResponse({
      status: regex.test(string),
      message: 'Please input right format'
    })).pipe(delay(500));
  }
}
