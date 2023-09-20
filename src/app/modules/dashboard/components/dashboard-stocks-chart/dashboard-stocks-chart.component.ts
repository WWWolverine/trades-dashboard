import {
  Component,
  DoCheck,
  Injector,
  Input,
  OnInit,
} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {BehaviorSubject, debounceTime, map} from "rxjs";
import {StocksListService} from "../../services/stocks-list.service";

@Component({
  selector: 'app-dashboard-stocks-chart',
  templateUrl: './dashboard-stocks-chart.component.html',
  styleUrls: ['./dashboard-stocks-chart.component.scss'],
})
export class DashboardStocksChartComponent implements OnInit, DoCheck {

  @Input() symbol!: string;

  form!: FormGroup;

  stockPrices: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private deps: Injector) {};

  customizeTooltip(arg: any) {
    return {
      text: `Open: $${arg.openValue}<br/>`
        + `Close: $${arg.closeValue}<br/>`
        + `High: $${arg.highValue}<br/>`
        + `Low: $${arg.lowValue}<br/>`,
    };
  };


  getCandlestick(params: any) {
    return this.deps.get(StocksListService)
      .getCandlestick(
        this.symbol,
        new Date(params.from).getTime() /1000,
        new Date(params.to).getTime() /1000,
        params.resolution).pipe(
        debounceTime(1000),
        map((resp: any) => {
          if (resp.s !== 'no_data') {
            function convertObject(obj: any): { date: Date, l: number, h: number, o: number, c: number }[] {
              const result: { date: Date, l: number, h: number, o: number, c: number }[] = [];

              for (let i = 0; i < obj.c.length; i++) {
                const date = new Date(obj.t[i] * 1000);
                const convertedObj = {
                  date: date,
                  l: obj.c[i],
                  h: obj.h[i],
                  o: obj.o[i],
                  c: obj.c[i]
                };
                result.push(convertedObj);
              }

              return result;
            }

            const convertedArray = convertObject(resp);
            this.stockPrices.next(convertedArray);
          } else {
            this.stockPrices.next(null);
          }
        })
      )
      .subscribe()
  };

  ngOnInit() {
    this.form = this.deps.get(FormBuilder).group({
      from: new FormControl('2020-01-01'),
      to: new FormControl('2023-01-01'),
      resolution: new FormControl('W'),
    });

    this.getCandlestick(this.form.getRawValue());

    this.form.valueChanges.pipe(
      debounceTime(700)
    ).subscribe((value) => {
      this.getCandlestick(value);
    });
  };

  ngDoCheck(): void {
    this.getCandlestick(this.form.getRawValue());
  };

}
