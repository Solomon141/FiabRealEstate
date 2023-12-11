import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Payment } from '../model/payment';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  private allPayments: Payment[]= [
    {
        "pmId": 1,
        "pmName": "Long Term"
    },
    {
        "pmId": 2,
        "pmName": "Short Term"
    },
    {
        "pmId": 3,
        "pmName": "Diaspora"
    }
];

  getPayment(): Observable<Payment[]> {
    // return this.httpClient.get<Payment[]>(`http://localhost:8083/pm`);
    return of(this.allPayments);
  }
}
