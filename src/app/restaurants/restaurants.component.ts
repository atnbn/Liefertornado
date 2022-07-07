import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {


local:string ="Döner Murat"; 



  constructor() { }

  ngOnInit(): void {
  }

}
