import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, map, shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StocksListService {

  constructor(private http: HttpClient) { }

  readonly token =  'ck5kk59r01qls0um8jn0ck5kk59r01qls0um8jng'

  readonly pathGetStocksList = `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${this.token}`

  readonly pathGetCandlestick = `https://finnhub.io/api/v1/stock/candle`

  readonly pathGetCompany = `https://finnhub.io/api/v1/stock/profile2?symbol=`


  getStocks(){
    return this.http.get(this.pathGetStocksList).pipe(
        filter((resp: any) => resp.length !== 0),
        map((resp : any) => {
          return resp.slice(0, (resp.length / 100) * 3);
        }),
        shareReplay(1)
      );
  };

  getStockBySymbol(symbol:string){
    return this.http.get(this.pathGetCompany + symbol + `&token=${this.token}`).pipe(
      filter((resp: any) => resp.length !== 0)
    );
  };

  getCandlestick(symbol:string,from: number,to: number, resolution : string | number){
    return this.http.get(
      this.pathGetCandlestick
      + `?symbol=${symbol}`
      + `&resolution=${resolution}`
      + `&from=${from}`
      + `&to=${to}`
      + `&token=${this.token}`
    )
  };
}
