import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CarsComponent } from './cars/cars.component';
import { RentComponent } from './rent/rent.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'rent', component: RentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
