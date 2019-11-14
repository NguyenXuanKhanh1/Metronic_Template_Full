import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuTab, AdminLayoutComponent } from 'ngx-fw4c';
import { TabDemoComponent, ValidationDemoComponent, ButtonDemoComponent } from './demo';
import { DashboardDemoComponent } from './demo/dashboard';
import { DashboardFakeComponent } from './demo/dashboard-fake/dashboard-fake.component';
import { ServiceManagementComponent } from './demo/service-management/service-management.component';


const menuTabs: MenuTab[] = [
  {
    role: 'CMC',
    items: [
      {
        label: 'Dashboard',
        icon: 'fa fa-search ',
        children: [
          { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'fa fa-pie-chart' }
        ]
      },
      {
        label: 'Components',
        icon: 'fa fa-search',
        children: [
          { state: 'tab', mainState: 'component', name: 'Tab', type: 'link', icon: 'fa fa-clone' },
          // { state: 'button', mainState: 'component', name: 'Button', type: 'link', icon: 'fa fa-battery-empty' }
        ]
      },
      {
        label: 'Validation 2',
        icon: 'fa fa-twitter',
        children: [
          { state: 'validation', name: 'Validation', type: 'link', icon: 'fa fa-calendar-check-o' }
        ]
      },
      {
        label: 'Dashboard-fake',
        icon: 'fa fa-search',
        children: [
          { state: 'dashboard-fake', name: 'Dashboard-fake', type: 'link', icon: 'fa fa-calendar-check-o' }
        ]
      },
      {
        label: 'Kong-Service',
        icon: 'fa fa-search',
        children: [
          { state: 'kong-service', name: 'Services', type: 'link', icon: 'fa fa-calendar-check-o' }
        ]
      }
    ]
  }
];

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent,
    data: {
      breadcrumb: {
        label: 'CMC Global',
        url: '/dashboard'
      },
      menuTabs: menuTabs
    },
    children: [
      {
        path: 'component',
        children: [
          {
            path: 'tab',
            component: TabDemoComponent
          },
          {
            path: 'button',
            component: ButtonDemoComponent
          }
        ]
      },
      {
        path: 'validation',
        component: ValidationDemoComponent
      },
      {
        path: 'dashboard',
        component: DashboardDemoComponent
      },
      {
        path: 'dashboard-fake',
        component: DashboardFakeComponent
      },
      {
        path: 'kong-service',
        component: ServiceManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
