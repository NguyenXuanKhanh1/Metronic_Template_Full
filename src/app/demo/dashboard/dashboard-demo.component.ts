import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { ButtonDemoComponent } from '../button';
import { of } from 'rxjs';
import { TableOption, ModalService, DataService, TemplateViewModel, TableComponent, ConfirmViewModel, TableConstant, TableMode, TableColumnType } from 'ngx-fw4c';

@Component({
  selector: 'dashboard-demo',
  templateUrl: './dashboard-demo.component.html'
})

export class DashboardDemoComponent implements OnInit {
  @ViewChild('imageTemplate', { static: true }) public imageTemplate: TemplateRef<any>;
  @ViewChild("tableTemplate", { static: true }) public tableTemplate: TableComponent;
  public option: TableOption;

  constructor(
    private _modalService: ModalService,
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
    this.initTable();
  }

  private initTable(): void {
    var data = [];

    let fakedata = [
      {
        id: this._dataService.newGuid(),
        name: 'Name',
        age: 18,
        image: 
          'https://www.gameinformer.com/s3/files/styles/body_default/s3/legacy-images/imagefeed/How%20To%20Unlock%20Android%2021%2C%20SSGSS%20Goku%20And%20Vegeta%20In%20Dragon%20Ball%20FighterZ/Goku610.jpg',
        phone: '19001',
        dob: new Date(),
        startTime: new Date(),
        salary:1000,
        active: 1,
        description: 'Sáng 31/10, Quốc hội tiếp tục thảo luận tại hội trường về tình hình kinh tế - xã hội. Phát biểu tại, đây, Thượng tướng Nguyễn Trọng Nghĩa, Phó Chủ nhiệm Tổng cục Chính trị Quân đội nhân dân Việt Nam (đại biểu đoàn Tiền Giang) tham gia ý kiến về vấn đề được cử tri nhân dân và đại biểu rất quan tâm, đó là tình hình về Biển Đông.'
      }
    ];

    for (let i = 0; i < 100; i++) {
      data.push({
        id: this._dataService.newGuid(),
        name: 'Name' + i,
        age: 18 + i,
        image: i % 2 ? 'https://znews-photo.zadn.vn/w660/Uploaded/xbhunku/2017_06_02/338006.jpg' :
          'https://www.gameinformer.com/s3/files/styles/body_default/s3/legacy-images/imagefeed/How%20To%20Unlock%20Android%2021%2C%20SSGSS%20Goku%20And%20Vegeta%20In%20Dragon%20Ball%20FighterZ/Goku610.jpg',
        phone: '19001' + i,
        dob: new Date(),
        startTime: new Date(),
        salary: i + 1000,
        active: i % 2 == 0,
        description: 'Sáng 31/10, Quốc hội tiếp tục thảo luận tại hội trường về tình hình kinh tế - xã hội. Phát biểu tại, đây, Thượng tướng Nguyễn Trọng Nghĩa, Phó Chủ nhiệm Tổng cục Chính trị Quân đội nhân dân Việt Nam (đại biểu đoàn Tiền Giang) tham gia ý kiến về vấn đề được cử tri nhân dân và đại biểu rất quan tâm, đó là tình hình về Biển Đông.'
      })
    }
    this.option = new TableOption({
      localData: () => {
        return data;
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
          executeAsync: (item) => {
            this._modalService.showConfirmDialog(new ConfirmViewModel({
              title: 'Delete Confirm',
              message: 'Bạn đã chắc chắn với sự lựa chọn của mình chứ ?',
              btnAcceptTitle: 'Ừm nè !',
              acceptCallback: () => {
                let delPos = data.indexOf(item);
                this.option.localData().splice(delPos, 1);
                this.tableTemplate.reload(true);
              }
            }));
          }
        },
        {
          icon: 'fa fa-search',
          executeAsync: (item, e, provider: TableComponent) => {
            provider.copy(item);
            
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
          title: () => 'Ảnh',
          width: 200,
          customTemplate: () => this.imageTemplate
        },
        {
          type: TableColumnType.String,
          title: () => 'Tên',
          valueRef: () => 'name',
          allowFilter: false
        },
        {
          type: TableColumnType.Number,
          title: () => 'Tuổi',
          valueRef: () => 'age',
          allowFilter: false
        },
        {
          type: TableColumnType.Date,
          title: () => 'Ngày sinh',
          valueRef: () => 'dob',
          allowFilter: true
        },
        {
          type: TableColumnType.Time,
          title: () => 'Thời gian',
          valueRef: () => 'startTime',
          allowFilter: false
        },
        {
          type: TableColumnType.Currency,
          title: () => 'Lương',
          valueRef: () => 'salary',
          allowFilter: false
        },
        {
          type: TableColumnType.Boolean,
          title: () => 'Trạng thái',
          valueRef: () => 'active',
          allowFilter: false
        },
        {
          type: TableColumnType.Description,
          title: () => 'Mô tả',
          valueRef: () => 'description',
          allowFilter: false,
          showTooltip: true,
          width: 200
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
