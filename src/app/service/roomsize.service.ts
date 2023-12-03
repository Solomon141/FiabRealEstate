import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Roomsize } from '../model/roomsize';

@Injectable({
  providedIn: 'root',
})
export class RoomsizeService {

  constructor(private httpClient: HttpClient) { }

  getRoomSizes(): Observable<Roomsize[]> {
    return this.httpClient.get<Roomsize[]>(`http://localhost:8083/roomsize`);
  }

}
