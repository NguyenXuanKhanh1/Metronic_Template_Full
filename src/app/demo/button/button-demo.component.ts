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

  ngOnInit() {
    this.item.read_timeout = 60000;
    this.item.write_timeout = 60000;
    this.item.connect_timeout = 60000;
    this.item.retries = 5;
  }

  ngAfterViewInit() {
    this.initValidations();
  }

  public isValid(): boolean {
    if(this._validationService.isValid(false, true)){
      return true;
    }
    else return false;
  }

  public callback(): Observable<any> {
//todo save
    // for(let element in this.item){
    //   if(this.item[element] ==="") {
    //     delete this.item[element];
    //   }
    // }
    // console.log(this.item);
    return of(this._service.postService(this.item).subscribe(data => data));
  }

  private initValidations(): void {
    var options = [
      new ValidationOption({
        validationName: 'Name',
        valueResolver: () => this.item.name,
        relevantFields: () => ['Port', 'Host'],
        rules: [
          new RequiredValidationRule(),
          new CustomValidationRule((value) => {
            return this._service.validateString(value);
          })
        ]
      }),
      new ValidationOption({
        validationName: "Tag",
        valueResolver: () => this.item.tags,
        rules: [
          new CustomValidationRule((value, payload) => {
            return this._service.validateString(value);
          })
        ]
      }),
      new ValidationOption({
        validationName: "URL",
        // relevantFields: () => ['Path'],
        valueResolver: () => this.item.url,
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
        validationName: 'Path',
        relevantFields: () => ['url'],
        valueResolver: () => this.item.path,
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
        valueResolver: () => this.item.protocol,
        rules: [
          // grpc, grpcs, http, https, tcp, tls
          new CustomValidationRule(value => {
            return this._service.validateString(value);
          })
        ]
      }),
      new ValidationOption({
        validationName: "Path",
        valueResolver: () => this.item.path,
        rules: [
          new RequiredValidationRule(),
          new CustomValidationRule((value, payload) => {
            return this._service.validateString(value);
          })
        ]
      }),
      new ValidationOption({
        validationName: "Host",
        valueResolver: () => this.item.host,
        rules: [
          new RequiredValidationRule(),
          new CustomValidationRule((value, payload) => {           
            return this._service.validateString(value);
          }),
        ]
      }),
      new ValidationOption({
        validationName: "Port",
        valueResolver: () => this.item.port,
        rules: [
          new RequiredValidationRule(),
          new CustomValidationRule((value, payload) => {           
            return this._service.validateString(value);
          }),
        ]
      }),
      
    ];
    var validator = new ClientValidator({
      formRef: this.formRef,
      options: options,
      payloadRef: () => this.item
    });
    this._validationService.init({ validator });
  }
}
