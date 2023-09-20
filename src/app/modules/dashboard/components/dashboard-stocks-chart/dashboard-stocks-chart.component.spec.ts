import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStocksChartComponent } from './dashboard-stocks-chart.component';

describe('DashboardStocksChartComponent', () => {
  let component: DashboardStocksChartComponent;
  let fixture: ComponentFixture<DashboardStocksChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardStocksChartComponent]
    });
    fixture = TestBed.createComponent(DashboardStocksChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
