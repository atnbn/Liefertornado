import { Component, OnInit } from '@angular/core';
import { AllArraysService } from '../services/all-arrays.service';
@Component({
  selector: 'app-deliverorpickup',
  templateUrl: './deliverorpickup.component.html',
  styleUrls: ['./deliverorpickup.component.scss']
})
export class DeliveryorPickupComponent implements OnInit {


  constructor(
    public allArrays: AllArraysService
  ) { }

  ngOnInit(): void {
  }




  showTurkishFood() {
    console.log('showTurkishFood');
    }
  }
