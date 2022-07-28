import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryorPickupComponent } from './deliverorpickup/deliverorpickup.component';
import { TurkishComponent } from './turkish/turkish.component';

const routes: Routes = [
  { path: 'turkish', component: TurkishComponent },
  {  path: '', component: DeliveryorPickupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
