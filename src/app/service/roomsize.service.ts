import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Roomsize } from '../model/roomsize';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsizeService {
  constructor(private httpClient: HttpClient) {}

  private allRoomsize: Roomsize[] = [
    {
      roomSizeId: 1,
      name: '1 Bed Room',
    },
    {
      roomSizeId: 2,
      name: '2 Bed Room',
    },
    {
      roomSizeId: 3,
      name: '3 Bed Room',
    },
  ];

  getRoomSizes(): Observable<Roomsize[]> {
    // return this.httpClient.get<Roomsize[]>(`http://localhost:8083/roomsize`);
    return of(this.allRoomsize);
  }
}
