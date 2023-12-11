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
        "roomId": 1,
        "imgPath": "assets/search/21.jpeg",
        "area": "67",
        "price": "200000",
        "descr": "FIAB REAL ESTATE IS A SHARE COMPANY ESTABLISHED AND ORGANIZED BY AMIGOS SACOO FOUNDERS AND MEMBERS.",
        "isCompleted": false,
        "floor": {
            "floorId": 2,
            "floorName": "Second Floor"
        },
        "region": {
            "regionId": 1,
            "name": "Addis Ababa"
        },
        "payment": {
            "pmId": 2,
            "pmName": "Long Term Payment"
        },
        "roomSize": {
            "roomSizeId": 2,
            "name": "Two Bed Room"
        }
    },
    {
        "roomId": 2,
        "imgPath": "assets/search/22.jpeg",
        "area": "52",
        "price": "200000",
        "descr": "FIAB REAL ESTATE IS A SHARE COMPANY ESTABLISHED AND ORGANIZED BY AMIGOS SACOO FOUNDERS AND MEMBERS.",
        "isCompleted": false,
        "floor": {
            "floorId": 2,
            "floorName": "Second Floor"
        },
        "region": {
            "regionId": 1,
            "name": "Addis Ababa"
        },
        "payment": {
            "pmId": 2,
            "pmName": "Long Term Payment"
        },
        "roomSize": {
            "roomSizeId": 1,
            "name": "One Bed Room"
        }
    },
    {
        "roomId": 3,
        "imgPath": "assets/search/3.jpeg",
        "area": "52",
        "price": "150000",
        "descr": "FIAB REAL ESTATE IS A SHARE COMPANY ESTABLISHED AND ORGANIZED BY AMIGOS SACOO FOUNDERS AND MEMBERS.",
        "isCompleted": false,
        "floor": {
            "floorId": 2,
            "floorName": "Second Floor"
        },
        "region": {
            "regionId": 1,
            "name": "Addis Ababa"
        },
        "payment": {
            "pmId": 1,
            "pmName": "Full Payment"
        },
        "roomSize": {
            "roomSizeId": 1,
            "name": "One Bed Room"
        }
    },
    {
        "roomId": 4,
        "imgPath": "assets/search/4.jpeg",
        "area": "52",
        "price": "150000",
        "descr": "FIAB REAL ESTATE IS A SHARE COMPANY ESTABLISHED AND ORGANIZED BY AMIGOS SACOO FOUNDERS AND MEMBERS.",
        "isCompleted": true,
        "floor": {
            "floorId": 3,
            "floorName": "Third Floor"
        },
        "region": {
            "regionId": 1,
            "name": "Addis Ababa"
        },
        "payment": {
            "pmId": 1,
            "pmName": "Full Payment"
        },
        "roomSize": {
            "roomSizeId": 1,
            "name": "One Bed Room"
        }
    },
    {
        "roomId": 5,
        "imgPath": "assets/search/5.jpeg",
        "area": "52",
        "price": "380000",
        "descr": "FIAB REAL ESTATE IS A SHARE COMPANY ESTABLISHED AND ORGANIZED BY AMIGOS SACOO FOUNDERS AND MEMBERS.",
        "isCompleted": true,
        "floor": {
            "floorId": 1,
            "floorName": "First Floor"
        },
        "region": {
            "regionId": 1,
            "name": "Addis Ababa"
        },
        "payment": {
            "pmId": 1,
            "pmName": "Full Payment"
        },
        "roomSize": {
            "roomSizeId": 1,
            "name": "One Bed Room"
        }
    },
    {
        "roomId": 6,
        "imgPath": "assets/search/6.webp",
        "area": "67",
        "price": "200000",
        "descr": "FIAB REAL ESTATE IS A SHARE COMPANY ESTABLISHED AND ORGANIZED BY AMIGOS SACOO FOUNDERS AND MEMBERS.",
        "isCompleted": false,
        "floor": {
            "floorId": 2,
            "floorName": "Second Floor"
        },
        "region": {
            "regionId": 1,
            "name": "Addis Ababa"
        },
        "payment": {
            "pmId": 2,
            "pmName": "Long Term Payment"
        },
        "roomSize": {
            "roomSizeId": 2,
            "name": "Two Bed Room"
        }
    },
    {
        "roomId": 7,
        "imgPath": "assets/search/7.jpg",
        "area": "130",
        "price": "200000",
        "descr": "FIAB REAL ESTATE IS A SHARE COMPANY ESTABLISHED AND ORGANIZED BY AMIGOS SACOO FOUNDERS AND MEMBERS.",
        "isCompleted": false,
        "floor": {
            "floorId": 2,
            "floorName": "Second Floor"
        },
        "region": {
            "regionId": 1,
            "name": "Addis Ababa"
        },
        "payment": {
            "pmId": 2,
            "pmName": "Long Term Payment"
        },
        "roomSize": {
            "roomSizeId": 3,
            "name": "Three Bed Room"
        }
    },
    {
        "roomId": 8,
        "imgPath": "assets/search/8.jpeg",
        "area": "130",
        "price": "150000",
        "descr": "FIAB REAL ESTATE IS A SHARE COMPANY ESTABLISHED AND ORGANIZED BY AMIGOS SACOO FOUNDERS AND MEMBERS.",
        "isCompleted": false,
        "floor": {
            "floorId": 2,
            "floorName": "Second Floor"
        },
        "region": {
            "regionId": 1,
            "name": "Addis Ababa"
        },
        "payment": {
            "pmId": 1,
            "pmName": "Full Payment"
        },
        "roomSize": {
            "roomSizeId": 3,
            "name": "Three Bed Room"
        }
    },
    {
        "roomId": 9,
        "imgPath": "assets/search/9.jpeg",
        "area": "130",
        "price": "150000",
        "descr": "FIAB REAL ESTATE IS A SHARE COMPANY ESTABLISHED AND ORGANIZED BY AMIGOS SACOO FOUNDERS AND MEMBERS.",
        "isCompleted": true,
        "floor": {
            "floorId": 3,
            "floorName": "Third Floor"
        },
        "region": {
            "regionId": 1,
            "name": "Addis Ababa"
        },
        "payment": {
            "pmId": 1,
            "pmName": "Full Payment"
        },
        "roomSize": {
            "roomSizeId": 3,
            "name": "Three Bed Room"
        }
    },
    {
        "roomId": 10,
        "imgPath": "assets/search/10.jpeg",
        "area": "130",
        "price": "380000",
        "descr": "FIAB REAL ESTATE IS A SHARE COMPANY ESTABLISHED AND ORGANIZED BY AMIGOS SACOO FOUNDERS AND MEMBERS.",
        "isCompleted": true,
        "floor": {
            "floorId": 1,
            "floorName": "First Floor"
        },
        "region": {
            "regionId": 1,
            "name": "Addis Ababa"
        },
        "payment": {
            "pmId": 1,
            "pmName": "Full Payment"
        },
        "roomSize": {
            "roomSizeId": 3,
            "name": "Three Bed Room"
        }
    }
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
