import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RegionService {
  constructor(private httpClient: HttpClient) {}

  fetchRegions(): Observable<any> {
    const url = 'http://localhost:8083/region';
    return this.httpClient.get(url);
  }
}
