import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Rooms } from '../model/rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(private httpClient: HttpClient) {}

  private allRooms: Rooms[] = [
    {
      roomId: 4,
      imgPath: 'assets/search/1.jpg',
      area: 'new area',
      price: '100000',
      descr: null,
      isCompleted: false,
      floor: {
        floorId: 1,
        floorName: 'First Floor',
      },
      region: {
        regionId: 1,
        name: 'Addis Ababa',
      },
      payment: {
        pmId: 1,
        pmName: 'Long Term',
      },
      roomSize: {
        roomSizeId: 1,
        name: '1 Bed Room',
      },
    },
    {
      roomId: 5,
      imgPath: 'assets/search/2.jpg',
      area: 'new area',
      price: '100000',
      descr: null,
      isCompleted: false,
      floor: {
        floorId: 2,
        floorName: 'Second Floor',
      },
      region: {
        regionId: 1,
        name: 'Addis Ababa',
      },
      payment: {
        pmId: 1,
        pmName: 'Long Term',
      },
      roomSize: {
        roomSizeId: 2,
        name: '2 Bed Room',
      },
    },
    {
      roomId: 6,
      imgPath: 'assets/search/3.jpeg',
      area: 'new area',
      price: '200000',
      descr: null,
      isCompleted: false,
      floor: {
        floorId: 2,
        floorName: 'Second Floor',
      },
      region: {
        regionId: 1,
        name: 'Addis Ababa',
      },
      payment: {
        pmId: 2,
        pmName: 'Short Term',
      },
      roomSize: {
        roomSizeId: 2,
        name: '2 Bed Room',
      },
    },
    {
      roomId: 7,
      imgPath: 'assets/search/6.webp',
      area: 'new area',
      price: '100000',
      descr: null,
      isCompleted: false,
      floor: {
        floorId: 3,
        floorName: 'Third Floor',
      },
      region: {
        regionId: 1,
        name: 'Addis Ababa',
      },
      payment: {
        pmId: 2,
        pmName: 'Short Term',
      },
      roomSize: {
        roomSizeId: 3,
        name: '3 Bed Room',
      },
    },
    {
      roomId: 8,
      imgPath: 'assets/search/7.jpg',
      area: 'new area',
      price: '100000',
      descr: null,
      isCompleted: false,
      floor: {
        floorId: 3,
        floorName: 'Third Floor',
      },
      region: {
        regionId: 1,
        name: 'Addis Ababa',
      },
      payment: {
        pmId: 2,
        pmName: 'Short Term',
      },
      roomSize: {
        roomSizeId: 3,
        name: '3 Bed Room',
      },
    },
    {
      roomId: 9,
      imgPath: 'assets/search/8.jpeg',
      area: 'new area',
      price: '200000',
      descr: null,
      isCompleted: false,
      floor: {
        floorId: 3,
        floorName: 'Third Floor',
      },
      region: {
        regionId: 1,
        name: 'Addis Ababa',
      },
      payment: {
        pmId: 1,
        pmName: 'Long Term',
      },
      roomSize: {
        roomSizeId: 3,
        name: '3 Bed Room',
      },
    },
  ];

  getRooms(): Observable<Rooms[]> {
    console.log('geting rooms');
    // return this.httpClient.get<Rooms[]>(`http://localhost:8083/rooms`);
    return of(this.allRooms);
  }

  getRoomsWithFilterParams(roomId: number): Observable<Rooms[]> {
    return this.httpClient.get<Rooms[]>(
      `http://localhost:8083/rooms/` + roomId
    );
  }
}
