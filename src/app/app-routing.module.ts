import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './contact/contact/contact.component';
import { OnebedroomComponent } from './home/onebedroom/onebedroom.component';
import { TwobedroomComponent } from './home/twobedroom/twobedroom.component';
import { ThreebedroomComponent } from './home/threebedroom/threebedroom.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'onebedroom', component: OnebedroomComponent },
  { path: 'twobedroom', component: TwobedroomComponent },
  { path: 'threebedroom', component: ThreebedroomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
