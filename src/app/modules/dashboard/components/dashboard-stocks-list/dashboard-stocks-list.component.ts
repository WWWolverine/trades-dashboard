import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, OnInit} from '@angular/core';
import {StocksListService} from "../../services/stocks-list.service";
import {BehaviorSubject, debounceTime, filter, map, Observable, tap} from "rxjs";
import {StockInterface} from "../../interfaces/stock.interface";
import {CompanyInterace} from "../../interfaces/company.interace";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-dashboard-stocks-list',
  templateUrl: './dashboard-stocks-list.component.html',
  styleUrls: ['./dashboard-stocks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardStocksListComponent implements OnInit {

  search = new FormControl;

  constructor(public deps: Injector) {}

  stocks$: Observable<StockInterface[] | null> = new Observable<StockInterface[] | null>();

  descriptionCompany: BehaviorSubject<CompanyInterace | null> = new BehaviorSubject<CompanyInterace | null>(null);

  symbolCompany: BehaviorSubject<string> = new BehaviorSubject<string>('');

  getCompany(symbol: any) {
    return this.deps.get(StocksListService).getStockBySymbol(symbol).subscribe((company) => {
      this.descriptionCompany.next(company);
      this.symbolCompany.next(symbol);
      this.deps.get(ChangeDetectorRef).detectChanges();
    })
  };

  ngOnInit() {
    this.search.valueChanges.pipe(
      debounceTime(1500)
    ).subscribe((value) => {
        this.stocks$ = this.getStocks().pipe(
          map((resp) => resp.filter((stock:StockInterface) => {
            return stock.displaySymbol.toLowerCase().includes(value.toLowerCase());
          }))
        )
      this.deps.get(ChangeDetectorRef).markForCheck();
    })
    this.getStocks();
  }

  getStocks() {
    return this.stocks$ = this.deps.get(StocksListService).getStocks()
  };
}
