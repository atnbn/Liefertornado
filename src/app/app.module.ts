import { NgModule , ViewEncapsulation} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {DeliveryorPickupComponent } from './deliverorpickup/deliverorpickup.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { MenuComponent } from './menu/menu.component';


@NgModule({
 
  declarations: [
    AppComponent,
    HeaderComponent,
    DeliveryorPickupComponent,
    RestaurantsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatChipsModule,
    MatCardModule,
    MatInputModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
