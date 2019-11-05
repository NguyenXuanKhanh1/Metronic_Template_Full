import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { TableOption, ModalService, DataService, TemplateViewModel, TableComponent, ConfirmViewModel, TableConstant, TableMode, TableColumnType } from 'ngx-fw4c';
import { ButtonDemoComponent } from '..';
import { of } from 'rxjs';
import { DashboardFakeService } from './dashboard-fake.service';

@Component({
  selector: 'app-dashboard-fake',
  templateUrl: './dashboard-fake.component.html',
  styleUrls: ['./dashboard-fake.component.scss']
})
export class DashboardFakeComponent implements OnInit {
  @ViewChild('imageTemplate', { static: true }) public imageTemplate: TemplateRef<any>;
  public option: TableOption;

  constructor(
    private _modalService: ModalService,
    private _dataService: DataService,
    private _fakeService: DashboardFakeService
  ) { }

  ngOnInit(): void {
    this.initTable();
  }

  private initTable(): void {
    var data = [];

    let fakedata = [];
    this._fakeService.getClub().subscribe(data => {
      fakedata = data;
      console.log(fakedata);
    });
    this.option = new TableOption({
      localData: () => {
        return fakedata;
      },
      topButtons: [
        {
          icon: 'fa fa-plus',
          customClass: 'primary',
          title: () => 'New',
          executeAsync: (item) => {
            this._modalService.showTemplateDialog(new TemplateViewModel({
              template: ButtonDemoComponent,
              data: item
            }));
          }
        },
        {
          icon: 'fa fa-edit',
          customClass: 'danger',
          title: () => 'Test',
          executeAsync: (item) => {
            this._modalService.showTemplateDialog(new TemplateViewModel({
              template: ButtonDemoComponent,
              data: item
            }));
          }
        }
      ],
      actions: [
        {
          icon: 'fa fa-edit',
          executeAsync: () => {
            //call other api....
          }
        },
        {
          icon: 'fa fa-remove',
          executeAsync: () => {
          }
        },
        {
          icon: 'fa fa-search',
          executeAsync: (item, e, provider: TableComponent) => {
            provider.copy(item);
            this._modalService.showConfirmDialog(new ConfirmViewModel({
              title: 'Test',
              message: 'abc?',
              btnAcceptTitle: 'changed',
              acceptCallback: () => {
              }
            }));
          }
        },
        {
          type: TableConstant.ActionType.Toolbar,
          icon: 'fa fa-refresh',
          title: () => 'Refresh',
          executeAsync: () => {
          }
        },
      ],
      inlineEdit: true,
      mode: TableMode.full,
      searchFields: ['name', 'age'],
      mainColumns: [
        {
          type: TableColumnType.String,
          title: () => 'Ảnh',
          valueRef: () => 'logo',
          // width: 200,
          // customTemplate: () => this.imageTemplate
        },
        {
          type: TableColumnType.String,
          title: () => 'Tên',
          valueRef: () => 'name',
          allowFilter: false
        },
        {
          type: TableColumnType.Number,
          title: () => 'Rank',
          valueRef: () => 'rank',
          allowFilter: false
        },
        {
          type: TableColumnType.Number,
          title: () => 'Round',
          valueRef: () => 'Round',
          allowFilter: true
        },
        {
          type: TableColumnType.Number,
          title: () => 'Win',
          valueRef: () => 'Win',
          allowFilter: false
        },
        {
          type: TableColumnType.Number,
          title: () => 'Draw',
          valueRef: () => 'Draw',
          allowFilter: false
        },
        {
          type: TableColumnType.Number,
          title: () => 'Lose',
          valueRef: () => 'Lose',
          allowFilter: false
        },
        {
          type: TableColumnType.Number,
          title: () => 'GF',
          valueRef: () => 'GF',
          allowFilter: false
        },
        {
          type: TableColumnType.Number,
          title: () => 'GA',
          valueRef: () => 'GA',
          allowFilter: false
        },
        {
          type: TableColumnType.Number,
          title: () => 'GD',
          valueRef: () => 'GD',
          allowFilter: false
        },
        {
          type: TableColumnType.Number,
          title: () => 'Point',
          valueRef: () => 'Points',
          allowFilter: false
        },
      ],
      serviceProvider: {
        searchAsync: () => {
          return of(true);
        }
      }
    });
  }
}
