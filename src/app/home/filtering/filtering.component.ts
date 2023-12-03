import { Component } from '@angular/core';
import { RoomsService } from 'src/app/service/rooms.service';
import { RegionService } from 'src/app/service/region.service';
import { Rooms } from 'src/app/model/rooms';
import { Region } from 'src/app/model/region';
import { Payment } from 'src/app/model/payment';
import { Floor } from 'src/app/model/floor';
import { Roomsize } from 'src/app/model/roomsize';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css'],
})
export class FilteringComponent {
  constructor(
    private roomsService: RoomsService, 
    private regionService: RegionService,
    private paymentService: PaymentService,
    ) {}
  
  lstRooms!: Rooms[];
  lstRegions!: Region[];
  lstPayments!: Payment[];
  lstFloor!: Floor[];
  lstRoomSize!: Roomsize[];

  filteredRooms!: Rooms[];
  
  regionId!: number;
  paymentId!: number;
  floorId!: number;
  roomSizeId!: number;

  ngOnInit() {
    this.loadRooms();

    this.regionService.fetchRegions().subscribe(
      data=>{
        this.lstRegions = data;
      }
    )

    this.paymentService.getPayment().subscribe(
      data=>{
        this.lstPayments = data;
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
