import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Rooms } from '../model/rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {

  constructor(private httpClient: HttpClient) {}

  getRooms(): Observable<Rooms[]> {
    console.log('geting rooms');
    return this.httpClient.get<Rooms[]>(`http://localhost:8083/rooms`);
  }

  getRoomsWithFilterParams(roomId: number): Observable<Rooms[]> {
    return this.httpClient.get<Rooms[]>(`http://localhost:8083/rooms/`+ roomId);
  }

}
