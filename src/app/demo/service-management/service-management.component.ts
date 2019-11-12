import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { TableComponent, TableOption, ModalService, DataService, TemplateViewModel, ConfirmViewModel, TableConstant, TableMode, TableColumnType } from 'ngx-fw4c';
import { ButtonDemoComponent } from '..';
import { ServiceManagementService } from './service-management.service';

@Component({
  selector: 'app-service-management',
  templateUrl: './service-management.component.html',
  styleUrls: ['./service-management.component.scss']
})
export class ServiceManagementComponent implements OnInit {
  @ViewChild("imageTemplate", { static: true })
  public imageTemplate: TemplateRef<any>;
  @ViewChild("tableTemplate", { static: true }) public tableTemplate: TableComponent;
  public option: TableOption;

  @ViewChild("detailTemplate", {static: true}) public datailTemplate: TemplateRef<any>;

  constructor(
    private _modalService: ModalService,
    private _dataService: DataService,
    private _serviceManagement: ServiceManagementService
  ) { }

  ngOnInit(): void {
    this.initTable();
  }

  private initTable(): void {

    this.option = new TableOption({
      topButtons: [
        {
          icon: "fa fa-plus",
          customClass: "primary",
          title: () => "New",
          executeAsync: item => {
            this._modalService.showTemplateDialog(
              new TemplateViewModel({
                template: ButtonDemoComponent,
                data: item
              })
            );
          }
        },
        {
          icon: "fa fa-edit",
          customClass: "danger",
          title: () => "Test",
          executeAsync: item => {
            this._modalService.showTemplateDialog(
              new TemplateViewModel({
                template: ButtonDemoComponent,
                data: item
              })
            );
          }
        },
        {
          icon: "fa fa-copy",
          customClass: "danger",
          title: () => "Copy",
          executeAsync: (items, e, provider: TableComponent) => {
            console.log(provider.selectedItems);
            let selectedItems = provider.selectedItems;
            let element = provider.items;
            if (selectedItems.length === 1) {
              element.unshift(selectedItems[0]);
            } else {
              for (let i = 0; i < selectedItems.length - 1; i++) {
                for (let j = i + 1; j < selectedItems.length; j++) {
                  if (element.indexOf(selectedItems[i]) > element.indexOf(selectedItems[j])) {
                    let temp = selectedItems[i];
                    selectedItems[i] = selectedItems[j];
                    selectedItems[j] = temp;
                  }
                }
              }
              for (let index = selectedItems.length - 1; index >= 0; index--) {
                element.unshift(selectedItems[index]);
              }
            }
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
      inlineEdit: true,
      mode: TableMode.full,
      searchFields: ["name", "age"],
      mainColumns: [
        {
          type: TableColumnType.String,
          title: () => "Host",
          valueRef: () => "host",
          allowFilter: false
        }
      ],
      serviceProvider: {
        searchAsync: request => {
          return this._serviceManagement.getService(request);
        }
      }
    });
  }
}
