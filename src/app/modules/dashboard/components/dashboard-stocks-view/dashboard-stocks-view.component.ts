import {Component, Input} from '@angular/core';
import {CompanyInterace} from "../../interfaces/company.interace";

@Component({
  selector: 'app-dashboard-stocks-view',
  templateUrl: './dashboard-stocks-view.component.html',
  styleUrls: ['./dashboard-stocks-view.component.scss']
})
export class DashboardStocksViewComponent{

  @Input() company!: CompanyInterace;

}
