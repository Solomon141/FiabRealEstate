import { Component } from '@angular/core';

@Component({
  selector: 'app-advancedsearch',
  templateUrl: './advancedsearch.component.html',
  styleUrls: ['./advancedsearch.component.css']
})
export class AdvancedsearchComponent {

  allItems = [
    {
      id: 1,
      imgpath: 'assets/search/4.jpeg',
      lacated: {
        region: "Addis Ababa",
        zone: "Addis Ababa",
        woreda: "Bole",
        description: "Around bole ABC Building",
      },
      area: '100',
      price: 100000,
      completed: false
    },
    {
      id: 2,
      imgpath: 'assets/search/5.jpeg',
      lacated: {
        region: "Mekelle",
        zone: "Adi Haki",
        woreda: "Megenagna",
        description: "Around Gullele subcity office building",
      },
      area: '70',
      price: 100000,
      completed: false
    }, {
      id: 3,
      imgpath: 'assets/search/3.jpeg',
      lacated: {
        region: "Hawwassa",
        zone: "Addis Sefer",
        woreda: "Arada",
        description: "Around addis ababa manicipality old office",
      },
      area: '140',
      price: 100000,
      completed: false
    }, {
      id: 4,
      imgpath: 'assets/search/6.webp',
      lacated: {
        region: "Gambella",
        zone: "Audaya",
        woreda: "Arada",
        description: "Around addis ababa manicipality old office",
      },
      area: '140',
      price: 100000,
      completed: false
    }, {
      id: 5,
      imgpath: 'assets/search/7.jpg',
      lacated: {
        region: "Addis Ababa",
        zone: "Addis Ababa",
        woreda: "Arada",
        description: "Around addis ababa manicipality old office",
      },
      area: '140',
      price: 100000,
      completed: false
    }, {
      id: 6,
      imgpath: 'assets/search/8.jpeg',
      lacated: {
        region: "Addis Ababa",
        zone: "Addis Ababa",
        woreda: "Arada",
        description: "Around addis ababa manicipality old office",
      },
      area: '140',
      price: 100000,
      completed: false
    }, {
      id: 7,
      imgpath: 'assets/search/9.jpeg',
      lacated: {
        region: "Addis Ababa",
        zone: "Addis Ababa",
        woreda: "Arada",
        description: "Around addis ababa manicipality old office",
      },
      area: '140',
      price: 100000,
      completed: false
    }, {
      id: 8,
      imgpath: 'assets/search/10.jpeg',
      lacated: {
        region: "Addis Ababa",
        zone: "Addis Ababa",
        woreda: "Arada",
        description: "Around addis ababa manicipality old office",
      },
      area: '140',
      price: 100000,
      completed: false
    }, {
      id: 9,
      imgpath: 'assets/search/11.jpeg',
      lacated: {
        region: "Addis Ababa",
        zone: "Addis Ababa",
        woreda: "Arada",
        description: "Around addis ababa manicipality old office",
      },
      area: '140',
      price: 100000,
      completed: false
    }

  ];

  get items() {
    return this.allItems
  }

}
