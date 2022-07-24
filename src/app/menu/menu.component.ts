import { Component, OnInit } from '@angular/core';
import { AllArraysService } from '../services/all-arrays.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public allArrays : AllArraysService) { }

  ngOnInit(): void {
    console.log(this.allArrays.restaurants);
    
  }

}
