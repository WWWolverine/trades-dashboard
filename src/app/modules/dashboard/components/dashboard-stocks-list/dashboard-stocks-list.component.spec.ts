import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStocksListComponent } from './dashboard-stocks-list.component';

describe('DashboardActionsListComponent', () => {
  let component: DashboardStocksListComponent;
  let fixture: ComponentFixture<DashboardStocksListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardStocksListComponent]
    });
    fixture = TestBed.createComponent(DashboardStocksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
