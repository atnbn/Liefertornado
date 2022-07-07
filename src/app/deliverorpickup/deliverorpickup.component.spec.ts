import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryorPickupComponent } from './deliverorpickup.component';

describe('DeliverorpickupComponent', () => {
  let component: DeliveryorPickupComponent;
  let fixture: ComponentFixture<DeliveryorPickupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryorPickupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryorPickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
