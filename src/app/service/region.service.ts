import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from '../model/region';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  constructor(private httpClient: HttpClient) {}

  private allRegions: Region[] = [
    {
        "regionId": 1,
        "name": "Addis Ababa"
    },
    {
        "regionId": 2,
        "name": "Mekelle"
    },
    {
        "regionId": 3,
        "name": "Jimma"
    }
];

  fetchRegions(): Observable<any> {
    // return this.httpClient.get('http://localhost:8083/region');
    return of(this.allRegions);
  }
}
