import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turkish',
  templateUrl: './turkish.component.html',
  styleUrls: ['./turkish.component.scss']
})
export class TurkishComponent implements OnInit {



  restaurantInfo = [

 
  {
    dishName: 'KöfteSpieß',
    dishPrice: '6€',
    dishDescription: 'KöfteSpieß mit Rinderhack oder Kalbshack',
  },
  {
    dishName: 'Iskender',
    dishPrice: '10€',
    dishDescription: 'Kalb oder Lammfleisch mit Fladenbrot, Joghurt, gegrillten Paprika, Tomaten',

  },
  {
    dishName: 'Beti Kebap',
    dishPrice: '12€',
    dishDescription: 'Hackfleisch das in dünnen Lavas-Teig eingewickelt wird mit Reis und Gemüse',
  },

  {
    dishName: 'Hähnchenspieß',
    dishPrice: '8€',
    dishDescription: 'Hähnchenspieß mit Dürümbrot und Gemüse',
  }
    ,
  {
    dishName: 'Döner',
    dishPrice: '3,50€',
    dishDescription: 'Döner mit Fleisch nach wahl und gemüse im Fladenbrot',
  }

  ]

  constructor() { }

  ngOnInit(): void {
  }


}
