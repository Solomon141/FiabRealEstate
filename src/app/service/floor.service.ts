import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Floor } from '../model/floor';

@Injectable({
  providedIn: 'root',
})
export class FloorService {

  constructor(private httpClient: HttpClient) { }

  getFloors(): Observable<Floor[]> {
    return this.httpClient.get<Floor[]>(`http://localhost:8083/floor`);
  }

}
