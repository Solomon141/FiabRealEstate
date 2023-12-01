import { Component, OnInit } from '@angular/core';
import { FloorService } from "../../services/floor.service"
import { RoomsService } from '../../services/rooms.services';

import { Rooms } from 'src/app/classes/rooms';
import { Floors } from 'src/app/classes/floors';
import { Regions } from 'src/app/classes/regions';
import { RegionsService } from 'src/app/services/regions.service';
import { Payments } from 'src/app/classes/payments';
import { PaymentTypeService } from 'src/app/services/payments.service';

@Component({
  selector: 'app-advancedsearch',
  templateUrl: './advancedsearch.component.html',
  styleUrls: ['./advancedsearch.component.css']
})

export class AdvancedsearchComponent {

  lstRooms: Rooms[] | undefined;
  lstFloors: Floors[] | undefined;
  lstRegions: Regions[] | undefined;
  lstPayments: Payments[] | undefined;

  payementMethodSelectedId: number | undefined;
  locationSelectedId: number | undefined;

  constructor(
    private roomsService: RoomsService,
    private floorService: FloorService,
    private regionService: RegionsService,
    private paymentService: PaymentTypeService,
  ) { }


  onBedroomTypeChange(event: Event) {
    let selectedBedroomTypeId = (event.target as HTMLSelectElement).value;
    console.log("selectedBedroomTypeId");
    console.log(selectedBedroomTypeId);
  }

  onPaymentMethodChange(event: Event) {
    console.log(this.payementMethodSelectedId);
    this.lstRooms?.filter((room)=> room.paymentMethod.pmId === this.payementMethodSelectedId)
  }

  onRegionChange(event: Event) {
    let selectedRegionId = (event.target as HTMLSelectElement).value;
    console.log("selectedRegionId");
    console.log(selectedRegionId);
  }

  ngOnInit(): void {
    this.roomsService.fetchRooms().subscribe(
      data=>{
        this.lstRooms = data;
      }
    );

    this.floorService.getFloor().subscribe(
      data=>{
        this.lstFloors = data;
      }
    );

    this.regionService.fetchRegions().subscribe(
      data=>{
        this.lstRegions = data;
      }
    )

    this.paymentService.getPayments().subscribe(
      data=>{
        this.lstPayments = data;
      }
    )

  }

  // allItems = [{
  //   id: 1,
  //   imgpath: 'assets/search/4.jpeg',
  //   lacated: {
  //     region: "Addis Ababa",
  //     zone: "Addis Ababa",
  //     woreda: "Bole",
  //     description: "Around bole ABC Building",
  //   },
  //   area: '100',
  //   price: 100000,
  //   completed: false
  // }, {
  //   id: 2,
  //   imgpath: 'assets/search/5.jpeg',
  //   lacated: {
  //     region: "Mekelle",
  //     zone: "Adi Haki",
  //     woreda: "Megenagna",
  //     description: "Around Gullele subcity office building",
  //   },
  //   area: '70',
  //   price: 100000,
  //   completed: false
  // }, {
  //   id: 3,
  //   imgpath: 'assets/search/3.jpeg',
  //   lacated: {
  //     region: "Hawwassa",
  //     zone: "Addis Sefer",
  //     woreda: "Arada",
  //     description: "Around addis ababa manicipality old office",
  //   },
  //   area: '140',
  //   price: 100000,
  //   completed: false
  // }, {
  //   id: 4,
  //   imgpath: 'assets/search/6.webp',
  //   lacated: {
  //     region: "Gambella",
  //     zone: "Audaya",
  //     woreda: "Arada",
  //     description: "Around addis ababa manicipality old office",
  //   },
  //   area: '140',
  //   price: 100000,
  //   completed: false
  // }, {
  //   id: 5,
  //   imgpath: 'assets/search/7.jpg',
  //   lacated: {
  //     region: "Addis Ababa",
  //     zone: "Addis Ababa",
  //     woreda: "Arada",
  //     description: "Around addis ababa manicipality old office",
  //   },
  //   area: '140',
  //   price: 100000,
  //   completed: false
  // }, {
  //   id: 6,
  //   imgpath: 'assets/search/8.jpeg',
  //   lacated: {
  //     region: "Addis Ababa",
  //     zone: "Addis Ababa",
  //     woreda: "Arada",
  //     description: "Around addis ababa manicipality old office",
  //   },
  //   area: '140',
  //   price: 100000,
  //   completed: false
  // }, {
  //   id: 7,
  //   imgpath: 'assets/search/9.jpeg',
  //   lacated: {
  //     region: "Addis Ababa",
  //     zone: "Addis Ababa",
  //     woreda: "Arada",
  //     description: "Around addis ababa manicipality old office",
  //   },
  //   area: '140',
  //   price: 100000,
  //   completed: false
  // }, {
  //   id: 8,
  //   imgpath: 'assets/search/10.jpeg',
  //   lacated: {
  //     region: "Addis Ababa",
  //     zone: "Addis Ababa",
  //     woreda: "Arada",
  //     description: "Around addis ababa manicipality old office",
  //   },
  //   area: '140',
  //   price: 100000,
  //   completed: false
  // }, {
  //   id: 9,
  //   imgpath: 'assets/search/11.jpeg',
  //   lacated: {
  //     region: "Addis Ababa",
  //     zone: "Addis Ababa",
  //     woreda: "Arada",
  //     description: "Around addis ababa manicipality old office",
  //   },
  //   area: '140',
  //   price: 100000,
  //   completed: false
  // }];

  // get items() {
  //   return this.allItems
  // }

}
