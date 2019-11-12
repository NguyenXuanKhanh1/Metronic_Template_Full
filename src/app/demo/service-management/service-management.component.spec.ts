import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceManagementComponent } from './service-management.component';

describe('ServiceManagementComponent', () => {
  let component: ServiceManagementComponent;
  let fixture: ComponentFixture<ServiceManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
