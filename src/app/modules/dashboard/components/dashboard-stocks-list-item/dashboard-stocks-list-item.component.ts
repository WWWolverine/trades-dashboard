import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StockInterface} from "../../interfaces/stock.interface";

@Component({
  selector: 'app-dashboard-stocks-list-item',
  templateUrl: './dashboard-stocks-list-item.component.html',
  styleUrls: ['./dashboard-stocks-list-item.component.scss']
})
export class DashboardStocksListItemComponent{

  @Input() stocks!: StockInterface[];

  @Output() displayedStockBySymbol = new EventEmitter<string>();

  findBySymbol(symbol: string){
    this.displayedStockBySymbol.emit(symbol);
  };

}
