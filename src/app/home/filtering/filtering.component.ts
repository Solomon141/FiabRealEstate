import { Component } from '@angular/core';
import { RoomsService } from 'src/app/service/rooms.service';
import { RegionService } from 'src/app/service/region.service';
import { Rooms } from 'src/app/model/rooms';
import { Region } from 'src/app/model/region';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css'],
})
export class FilteringComponent {
  constructor(private roomsService: RoomsService, private regionService: RegionService) {}
  lstRooms!: Rooms[];
  lstRegions!: Region[];
  filteredRooms!: Rooms[];

  regionId!: number;

  ngOnInit() {
    this.loadRooms();

    this.regionService.fetchRegions().subscribe(
      data=>{
        this.lstRegions = data;
      }
    )
  }

  loadRooms() {
    this.roomsService.getRooms().subscribe((data) => {
      this.lstRooms = data;
      this.filteredRooms = data;
      console.log(this.lstRooms);
    });
  }

  onSelectionChanged(roomId: any) {
    console.log(' Region id is : ' + roomId);
    this.filteredRooms = this.lstRooms.filter((r) => r.region.regionId == roomId);
    console.log(this.filteredRooms);
  }
}
