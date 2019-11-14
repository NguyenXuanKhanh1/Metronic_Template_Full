import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { TabDemoService } from './tab-demo.service';
import { TableComponent, TableOption, ModalService, DataService, TemplateViewModel, ConfirmViewModel, TableConstant, TableMode, TableColumnType } from 'ngx-fw4c';
import { ServiceManagementService } from '../service-management/service-management.service';
import { ButtonDemoComponent } from '..';
import { of } from 'rxjs';

@Component({
  selector: 'tab-demo',
  templateUrl: './tab-demo.component.html'
})

export class TabDemoComponent implements OnInit{

  public items : any[];
  public object = {
    "success": true,
    "totalRecords": 100,
    "items": []
  };

  ngOnInit() {
    this.initTable()
  }

  
  // public changeTab(): void {

  // }

  @ViewChild("imageTemplate", { static: true })
  public imageTemplate: TemplateRef<any>;
  @ViewChild("tableTemplate", { static: true })
  public tableTemplate: TableComponent;
  public option: TableOption;

  @ViewChild("detailTemplate", { static: true })
  public datailTemplate: TemplateRef<any>;

  constructor(
    private _modalService: ModalService,
    private _dataService: DataService,
    private _tabService: TabDemoService
  ) {}

  private initTable(): void {
    this.option = new TableOption({
      
      inlineEdit: true,
      mode: TableMode.compact,
      searchFields: ["name", "age"],
      mainColumns: [
        {
          type: TableColumnType.String,
          title: () => "Name",
          valueRef: () => "name",
          allowFilter: false
        },
        {
          type: TableColumnType.String,
          title: () => "Host",
          valueRef: () => "host",
          allowFilter: false
        },
        {
          type: TableColumnType.String,
          title: () => "Tag",
          valueRef: () => "tag",
          allowFilter: false
        },
        {
          type: TableColumnType.Date,
          title: () => "Create",
          valueRef: () => "updated_at",
          allowFilter: false
        }
      ],
      serviceProvider: {
        searchAsync: request => {
          return this._tabService.getService(request);
          // return of(this._tabService.getService().subscribe(data => {
          //   this.object.items = data.data;
          //   console.log(this.object);
          // }));
        }
      }
    });
  }

}
