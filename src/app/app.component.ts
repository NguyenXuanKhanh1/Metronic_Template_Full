import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { AuthenticationLoginResponse, AggregatorService, BaseTemplate, ActionService, SettingService, ModalService, ValidationOption, RequiredValidationAction, ValidationService, ClientValidator } from 'ngx-fw4c';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {
  public title = 'FW4M';
  public template: BaseTemplate;
  public value: string;
  public search: Function;

  @ViewChild('formRef', { static: true }) public formRef: ElementRef;
  // public template: BaseTemplate = new BaseTemplate({
  //   template: TestComponent
  // });

  constructor(
    private _aggregatorService: AggregatorService,
    private _settingService: SettingService,
    private _modalService: ModalService,
    private _validationService: ValidationService
  ) {
    //this.registerEvents();

    this.search = (text) => {
      const items = [
        { id: 1, name: 'category 1' },
        { id: 2, name: 'category 2' },
        { id: 3, name: 'category 3' }
      ];
      let response = items;
      if (text) {
        response = response.filter(s => s.name.indexOf(text) > -1);
      }
      return of({ items: response, totalRecords: response.length }).pipe((delay(500)));
    }
  }

  ngOnInit(): void {
    this._settingService.useMock(true);
  }

  ngAfterViewInit(): void {
    //this.registerValidations();
  }

  public btnClick(close, a, b): void {
    console.log(a + b);
    setTimeout(() => {
      close();
    }, 2000);
  }


  public changeTab(): void {

  }

  public showLoading(): void {
    this._modalService.showLoading();
  }

  public test(response): void {
    this._aggregatorService.publish<AuthenticationLoginResponse>('test', response);
  }

  public registerEvents(): void {
    this._aggregatorService.subscribe<AuthenticationLoginResponse>('test', (response) => {
      console.log(response);
    });
  }
}
