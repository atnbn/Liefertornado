import { Component, OnInit } from '@angular/core';
import { restaurants } from 'src/module/restaurants.class';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  restaurant = new restaurants();

  restaurants = [
    {
      name: 'Murats Döner',
      img: 'src/assets/img/doner-1753615_640.jpg',
    },

    { name: ''}
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
