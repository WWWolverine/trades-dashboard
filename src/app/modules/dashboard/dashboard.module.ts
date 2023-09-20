import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardStocksListComponent } from './components/dashboard-stocks-list/dashboard-stocks-list.component';
import {HttpClientModule} from "@angular/common/http";
import { DashboardStocksListItemComponent } from './components/dashboard-stocks-list-item/dashboard-stocks-list-item.component';
import { DashboardStocksViewComponent } from './components/dashboard-stocks-view/dashboard-stocks-view.component';
import { DashboardStocksChartComponent } from './components/dashboard-stocks-chart/dashboard-stocks-chart.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DxChartModule} from "devextreme-angular";



@NgModule({
  declarations: [
    DashboardStocksListComponent,
    DashboardStocksListItemComponent,
    DashboardStocksViewComponent,
    DashboardStocksChartComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    DxChartModule,
    FormsModule,
  ]
})
export class DashboardModule { }
