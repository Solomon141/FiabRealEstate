import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Floor } from '../model/floor';

@Injectable({
  providedIn: 'root',
})
export class FloorService {

  constructor(private httpClient: HttpClient) { }

  private allFloors: Floor[] = [
    {
        "floorId": 1,
        "floorName": "First Floor"
    },
    {
        "floorId": 2,
        "floorName": "Second Floor"
    },
    {
        "floorId": 3,
        "floorName": "Third Floor"
    }
]

  getFloors(): Observable<Floor[]> {
    // return this.httpClient.get<Floor[]>(`http://localhost:8083/floor`);
    return of(this.allFloors)
  }

}
