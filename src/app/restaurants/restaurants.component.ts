import { Component, OnInit } from '@angular/core';
import { AllArraysService } from '../services/all-arrays.service';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  constructor( public allArrays : AllArraysService) { }

  ngOnInit(): void {
    console.log(this.allArrays.restaurants)
  }

}
