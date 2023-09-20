import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStocksListItemComponent } from './dashboard-stocks-list-item.component';

describe('DashboardStocksListItemComponent', () => {
  let component: DashboardStocksListItemComponent;
  let fixture: ComponentFixture<DashboardStocksListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardStocksListItemComponent]
    });
    fixture = TestBed.createComponent(DashboardStocksListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
