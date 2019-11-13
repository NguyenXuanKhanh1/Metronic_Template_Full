import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { ButtonService } from "./button.service";
import {
  ValidationOption,
  RequiredValidationRule,
  CustomValidationRule,
  ClientValidator,
  ValidationService,
  ValidationRuleResponse
} from "ngx-fw4c";
import { of, Observable } from "rxjs";
import { ServiceViewModel } from "./button.model";

@Component({
  selector: "button-demo",
  templateUrl: "./button-demo.component.html"
})
export class ButtonDemoComponent implements AfterViewInit {
  @ViewChild("formRef", { static: true }) public formRef: ElementRef;
  public item: ServiceViewModel = {};
  public items: ServiceViewModel[] = [];
  constructor(
    private _service: ButtonService,
    private _validationService: ValidationService
  ) {}

  ngAfterViewInit() {
    this.initValidations();
  }

  public isValid(): boolean {
    return true;
  }

  public callback(): Observable<any> {
//todo save
    return of({name: 'hieunt'});
  }

  private initValidations(): void {
    var options = [
      new ValidationOption({
        validationName: "Name",
        valueResolver: () => this.item.FormName,
        rules: [
          new RequiredValidationRule(),
          new CustomValidationRule((value, payload) => {
            debugger;
            return this._service.validateString(value);
          })
        ]
      }),
      new ValidationOption({
        validationName: "Tag",
        valueResolver: () => this.item.FormTag,
        rules: [
          new CustomValidationRule((value, payload) => {
            return this._service.validateString(value);
          })
        ]
      }),
      new ValidationOption({
        validationName: "URL",
        valueResolver: () => this.item.FormURL,
        payloadRef: () => this.item.FormPath,
        rules: [
          new CustomValidationRule(value => {
            return (
              this._service.validateString(value) &&
              this._service.validateURL(value)
            );
          })
        ]
      }),
      new ValidationOption({
        validationName: "Protocol",
        valueResolver: () => this.item.FormProtocol,
        rules: [
          new CustomValidationRule(value => {
            return this._service.validateString(value);
          })
        ]
      }),
      new ValidationOption({
        validationName: "Path",
        valueResolver: () => this.item.FormPath,
        payloadRef: () => this.item.FormURL,
        rules: [
          new RequiredValidationRule(),
          new CustomValidationRule((value, payload) => {
            return this._service.validateString(value);
          })
        ]
      }),
      new ValidationOption({
        validationName: "Host",
        valueResolver: () => this.item.FormHost,
        rules: [
          new RequiredValidationRule(),
          new CustomValidationRule((value, payload) => {
            return this._service.validateString(value);
          })
        ]
      }),
      new ValidationOption({
        validationName: "Port",
        valueResolver: () => this.item.FormPort,
        rules: [
          new CustomValidationRule((value, payload) => {
            return this._service.validateNumber(value);
          })
        ]
      }),
      new ValidationOption({
        validationName: "Retries",
        valueResolver: () => this.item.FormRetries,
        rules: [
          new CustomValidationRule((value, payload) => {
            return this._service.validateString(value);
          })
        ]
      }),
      new ValidationOption({
        validationName: "Connect",
        valueResolver: () => this.item.FormConnect,
        rules: [
          new CustomValidationRule((value, payload) => {
            return this._service.validateNumber(value);
          })
        ]
      }),
      new ValidationOption({
        validationName: "Write",
        valueResolver: () => this.item.FormWrite,
        rules: [
          new CustomValidationRule((value, payload) => {
            return this._service.validateNumber(value);
          })
        ]
      }),
      new ValidationOption({
        validationName: "Read",
        valueResolver: () => this.item.FormRead,
        rules: [
          new CustomValidationRule((value, payload) => {
            return this._service.validateNumber(value);
          })
        ]
      })
    ];
    var validator = new ClientValidator({
      formRef: this.formRef,
      options: options,
      payloadRef: () => this.item
    });
    this._validationService.init({ validator });
  }

  postService() {
    this._service.postService().subscribe();
  }
}
