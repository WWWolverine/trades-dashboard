import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStocksViewComponent } from './dashboard-stocks-view.component';

describe('DashboardStocksViewComponent', () => {
  let component: DashboardStocksViewComponent;
  let fixture: ComponentFixture<DashboardStocksViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardStocksViewComponent]
    });
    fixture = TestBed.createComponent(DashboardStocksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
