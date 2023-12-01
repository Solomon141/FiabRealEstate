import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })


export class PaymentTypeService {
    constructor(private http: HttpClient) { }

    createPayment(payments: { pmName: string }) {
        console.log(payments)
        const headers = new HttpHeaders({ 'myHeader': "solWorkingHere" });
        this.http.post<{ name: string }>('http://localhost:8082/pm', payments, { headers: headers }).subscribe((res) => {
            console.log(res)
        })
    }

    getPayments(): Observable<any>{
        const url = 'http://localhost:8082/pm';
        return this.http.get(url)
    }

    // deleteFloor() { }

}