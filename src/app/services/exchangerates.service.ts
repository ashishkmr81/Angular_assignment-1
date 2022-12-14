import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRatesResponse } from './payloads/exchange-rates-response';

@Injectable({
  providedIn: 'root'
})
export class ExchangeratesService {

  constructor(private httpClient: HttpClient) { }

  getRates(base: string): Observable<ExchangeRatesResponse> {
    return this.httpClient.get<ExchangeRatesResponse>(`https://open.er-api.com/v6/latest/${base}`);
  }
}
