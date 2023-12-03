import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Payment } from '../model/payment';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  getPayment(): Observable<Payment[]> {
    return this.httpClient.get<Payment[]>(`http://localhost:8083/pm`);
  }
}
