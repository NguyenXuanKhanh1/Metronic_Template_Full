import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFakeComponent } from './dashboard-fake.component';

describe('DashboardFakeComponent', () => {
  let component: DashboardFakeComponent;
  let fixture: ComponentFixture<DashboardFakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
