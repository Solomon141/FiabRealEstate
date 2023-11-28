import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root", })
export class RoomsService {
    constructor(private http: HttpClient) { }

    fetchRooms(): Observable<any> {
        const url = 'http://localhost:8082/rooms';
        return this.http.get(url);
    }

    createRoom() { }

    deleteRoom() { }
}