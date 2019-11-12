import { Component, ViewChild, ElementRef, AfterViewInit, TemplateRef, OnChanges } from '@angular/core';
import { ValidationService, ValidationOption, RequiredValidationRule, CustomValidationRule, ClientValidator, TableOption, TableComponent, TemplateViewModel, ConfirmViewModel, TableConstant, TableMode, TableColumnType, ModalService, TableAction, ValidationRuleResponse } from 'ngx-fw4c';
import { of } from 'rxjs';
import { ButtonDemoComponent } from '..';
import { ValidationDemoService } from './validation-demo.service';

@Component({
  selector: 'validation-demo',
  templateUrl: './validation-demo.component.html'
})

export class ValidationDemoComponent implements OnChanges {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    throw new Error("Method not implemented.");
  }
  public data: string;
  @ViewChild('imageTemplate', { static: true }) public imageTemplate: TemplateRef<any>;
  @ViewChild("tableTemplate", { static: true }) public tableTemplate: TableComponent;
  public option: TableOption;
  @ViewChild('formRef', { static: true }) public formRef: ElementRef;

  constructor(
    private _validationService: ValidationService,
    private _modalService: ModalService,
    private _checkMailService: ValidationDemoService,
  ) { }

  ngOnInit(): void {
    this.initTable();    
    this.initValidations();
  }

  ngAfterViewInit(): void {
    this.initValidations();    
  }

  private initValidations(): void {
    var options = [
      new ValidationOption({
        validationName: 'Mail',
        valueResolver: () => this.data,
        rules: [
          new RequiredValidationRule(),
          new CustomValidationRule((value, payload) => {            
            return of(new ValidationRuleResponse({
              status:value == 'email'
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

  private initTable(): void { 
    this.option = new TableOption(
      {
      topButtons:[
        {
          icon: "fa fa-copy",
          customClass: "danger",
          title: () => "Copy",
          executeAsync: (items, e, provider: TableComponent) => {
            let selectedItems = this.tableTemplate.selectedItems;
            console.log(selectedItems);
          }
        }
      ],
      actions: [
        {
          icon: "fa fa-edit",
          executeAsync: () => {
            //call other api....
          }
        },
        {
          icon: "fa fa-remove",
          executeAsync: (item, e, provider: TableComponent) => {
            this._modalService.showConfirmDialog(
              new ConfirmViewModel({
                title: "Delete Confirm",
                message: "Bạn chắc chắn muốn xóa cái " + item.name + " chứ ?",
                btnAcceptTitle: "Ừm nè !",
                btnCancelTitle: "Ứ ừ !",
                acceptCallback: () => {
                  let element = provider.items;
                  let delPos = element.indexOf(item);
                  element.splice(delPos, 1);
                }
              })
            );
          }
        },
        {
          icon: "fa fa-search",
          executeAsync: (item, e, provider: TableComponent) => {
            // provider.copy(item);
            this._modalService.showConfirmDialog(
              new ConfirmViewModel({
                title: "Copy cái này nha !!!",
                message: "Ừm nè !",
                btnAcceptTitle: "Không đâu =((",
                acceptCallback: () => {
                  let element = provider.items;
                  element.unshift(item);
                }
              })
            );
          }
        },
        
        {
          type: TableConstant.ActionType.Toolbar,
          icon: "fa fa-refresh",
          title: () => "Refresh",
          executeAsync: () => { }
        }
      ],
      // paging: true,
      inlineEdit: true,
      mode: TableMode.compact,
      // selectedItems: this.tableTemplate.selectedItems,
      // selectedItems: [
      //   {
      //     executeAsync: () => {
      //       let array = [];

      //     }
      //   }
      // ],
      searchFields: ["name"],
      mainColumns: [
        {
          type: TableColumnType.String,
          title: () => "Email",
          valueRef: () => "email",
          allowFilter: false
        },
        {
          type: TableColumnType.String,
          title: () => "Name",
          valueRef: () => "name",
          allowFilter: false
        }
      ],
      serviceProvider: {
        searchAsync: request => {          
          return this._checkMailService.getEmail(request);
        }
      }
    });
  }
  checkVal(){
    if(this.initValidations && !this.checkEmpty(this.tableTemplate.selectedItems)){
      console.log('done');
    }
    else {
      console.log('undone');
    }
  }

  checkEmpty(array: any[]){
    if(array.length === 0){
      return true;
    }
    else return false;
  }

}
