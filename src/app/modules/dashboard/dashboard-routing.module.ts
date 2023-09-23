import {RouterModule, Routes} from "@angular/router";
import {DashboardStocksListComponent} from "./components/dashboard-stocks-list/dashboard-stocks-list.component";
import {NgModule} from "@angular/core";
import {DashboardModule} from "./dashboard.module";


export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: DashboardStocksListComponent
  },
];

@NgModule({
  imports: [DashboardModule, RouterModule.forChild(ROUTES)],
  exports: [DashboardModule]
})

export class DashboardRoutingModule {}
