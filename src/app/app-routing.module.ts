import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CarsComponent } from './cars/cars.component';
import { RentComponent } from './rent/rent.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'rent', component: RentComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
