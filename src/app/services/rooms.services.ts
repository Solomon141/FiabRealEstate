import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root", })
export class RoomsService {
    constructor(private http: HttpClient) { }

    fetchRooms(): Observable<any> {
        const url = 'http://localhost:8083/rooms';
        return this.http.get(url);
    }

    createRoom() { }

    deleteRoom() { }

    getRoomsGivenParaeters(regionId: number, pmId: number): Observable<any>{
        let param_regionId = new HttpParams().set('regionId', regionId);
        let param_pmId = new HttpParams().set('pmId', pmId);

        return this.http.get("", {params: param_regionId && param_pmId})
    }
}