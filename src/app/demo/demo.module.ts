import { NgModule } from '@angular/core';
import { TabDemoComponent } from './tab';
import { ValidationDemoComponent } from './validation';
import { DashboardDemoComponent } from './dashboard';
import { DashboardFakeComponent } from '../demo/dashboard-fake/dashboard-fake.component';
import { ButtonDemoComponent } from './button';
import { FormsModule } from '@angular/forms';
import { Framework4CModule } from 'ngx-fw4c';
// import { HttpClient } from '@angular/common/http';

const declarations = [
  TabDemoComponent,
  ValidationDemoComponent,
  DashboardDemoComponent,
  DashboardFakeComponent,
  ButtonDemoComponent
];

@NgModule({
  declarations: declarations,
  exports: declarations,
  entryComponents: declarations,
  imports: [
    FormsModule,
    // HttpClient,
    Framework4CModule.forRoot()
  ]
})

export class DemoModule { }
