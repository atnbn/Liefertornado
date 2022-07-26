import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { TurkishComponent } from './turkish/turkish.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'turkish', component: TurkishComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
