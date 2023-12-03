import { Component } from '@angular/core';

import { Rooms } from 'src/app/model/rooms';
import { Region } from 'src/app/model/region';
import { Payment } from 'src/app/model/payment';
import { Floor } from 'src/app/model/floor';
import { Roomsize } from 'src/app/model/roomsize';

import { RoomsService } from 'src/app/service/rooms.service';
import { RegionService } from 'src/app/service/region.service';
import { PaymentService } from 'src/app/service/payment.service';
import { FloorService } from 'src/app/services/floor.service';
import { RoomsizeService } from 'src/app/service/roomsize.service';

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
    private floorService: FloorService,
    private roomSizeService: RoomsizeService
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

    this.regionService.fetchRegions().subscribe((data: any) => {
      this.lstRegions = data;
    });

    this.paymentService.getPayment().subscribe((data: any) => {
      this.lstPayments = data;
    });

    this.floorService.getFloor().subscribe((data: any) => {
      this.lstFloor = data;
    });

    this.roomSizeService.getRoomSizes().subscribe((data: any) => {
      this.lstRoomSize = data;
    });
  }

  loadRooms() {
    this.roomsService.getRooms().subscribe((data: any) => {
      this.lstRooms = data;
      this.filteredRooms = data;
      console.log(this.lstRooms);
    });
  }

  onReset(){
    this.floorId === undefined;
    this.roomSizeId === undefined;
    this.paymentId === undefined;

    this.filteredRooms = this.lstRooms;
  }

  onPaymentSelectionChanged() {

    if (this.roomSizeId === undefined) {
      this.filteredRooms = this.lstRooms.filter(
        (r) => r.payment.pmId == this.paymentId
      );
    } else {
      this.filteredRooms = this.lstRooms.filter(
        (r) => r.roomSize.roomSizeId == this.roomSizeId
      );
      this.filteredRooms = this.filteredRooms.filter(
        (r) => r.payment.pmId == this.paymentId
      );
    }
  }

  onRoomSizeSelectionChanged() {
    if (this.paymentId === undefined) {
      this.filteredRooms = this.lstRooms.filter(
        (r) => r.roomSize.roomSizeId == this.roomSizeId
      );
    } else {
      this.filteredRooms = this.lstRooms.filter(
        (r) => r.payment.pmId == this.paymentId
      );
      this.filteredRooms = this.filteredRooms.filter(
        (r) => r.roomSize.roomSizeId == this.roomSizeId
      );
    }
  }
}
