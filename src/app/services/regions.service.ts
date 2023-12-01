import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root", })
export class RegionsService {
    constructor(private http: HttpClient) { }

    fetchRegions(): Observable<any> {
        const url = 'http://localhost:8082/region';
        return this.http.get(url);
    }

    createRegion() { }

    deleteRegion() { }
}