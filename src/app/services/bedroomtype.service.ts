import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })


export class BeedRoomService {
    constructor(private http: HttpClient) { }

    createFloor(floors: { floorName: string, floorData: string }) {
        console.log(floors)
        const headers = new HttpHeaders({ 'myHeader': "solWorkingHere" });
        this.http.post<{ name: string }>('http://localhost:8082/floor', floors, { headers: headers }).subscribe((res) => {
            console.log(res)
        })
    }

    getFloor(): Observable<any>{
        const url = 'http://localhost:8082/floor';
        return this.http.get(url)
    }

    // deleteFloor() { }

}