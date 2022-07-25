import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllArraysService {
  restaurants = [
    {
      name: 'Murats Döner',
      typeTurkish: false,
      adresse: 'Köpenicker Str. 1',
      img: 'assets/img/doner-1753615_640.jpg',
      description: 'Murats Döner is a Turkish restaurant that serves Turkish cuisine.',
      deliveryTime: '35-50 min',
      minimumorderValue: '5€',
      transportationCosts: '3€',
      menu : [{
        name: 'Köfte',
        price: '5€',
        description: 'Hackfleisch geformt ',
      },
      {
        name: 'iskender',
        price: '12€',
      }
    
    ]
    },

    {
      name: 'Asian Restaurant',
      typeAsian: false,
      adresse: 'heimer Str. 4',
      img: 'assets/img/pexels-cats-coming-1907227.jpg',
      description: 'Asian restaurant is a restaurant that serves Asian cuisine.',
      deliveryTime: '20-45 min',
      minimumorderValue: '15€',
      transportationCosts: '5€',
    },


    {
      name: 'Pizza Restaurant',
      adresse: 'Holznick Str. 1',
      img: 'assets/img/pexels-pixabay-315755.jpg',
      description: 'Pizza restaurant is a restaurant that serves pizza cuisine.',
      deliveryTime: '30-45 min',
      minimumorderValue: '10€',
      transportationCosts: '5€'
    }
  ]

  turkishmenu = [
    {
      name: 'Döner'

    }
  ]


  constructor() { }
}
