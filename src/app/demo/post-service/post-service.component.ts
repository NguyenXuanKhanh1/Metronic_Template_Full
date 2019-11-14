import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ValidationService, ModalService, ValidationOption, RequiredValidationRule, CustomValidationRule, ClientValidator, ValidationRuleResponse } from 'ngx-fw4c';
import { PostServiceService } from './post-service.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-post-service',
  templateUrl: './post-service.component.html',
  styleUrls: ['./post-service.component.scss']
})
export class PostServiceComponent implements OnInit {
  public data: string;
  @ViewChild('formRef', { static: true }) public formRef: ElementRef;
  constructor(private _validationService: ValidationService,
    private _modalService: ModalService,
    private _postService: PostServiceService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.initValidations();    
  }

  private initValidations(): void {
    var options = [
      new ValidationOption({
        dynamic: true,
        validationName: 'Mail',
        valueResolver: () => this.data,
        rules: [
          new RequiredValidationRule(),
          new CustomValidationRule((value, payload) => {
            return of(new ValidationRuleResponse({
            // return of(new ValidationRuleResponse({
              status: value == 'demo',
            }));
          }, () => 'Giá trị nhập vào phải là email')
        ]
      })
    ];

    var validator = new ClientValidator({
      formRef: this.formRef,
      options: options
    });

    this._validationService.init({ validator });
  }

}
