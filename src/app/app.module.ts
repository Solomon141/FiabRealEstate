import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './common/appheader/appheader.component';
import { AppfooterComponent } from './common/appfooter/appfooter.component';
import { HomeComponent } from './home/home/home.component';
import { CarousalsliderComponent } from './home/carousalslider/carousalslider.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './contact/contact/contact.component';
import { AdvancedsearchComponent } from './home/advancedsearch/advancedsearch.component';
import { AboutinhomeComponent } from './home/aboutinhome/aboutinhome.component';
import { OnebedroomComponent } from './home/onebedroom/onebedroom.component';
import { TwobedroomComponent } from './home/twobedroom/twobedroom.component';
import { ThreebedroomComponent } from './home/threebedroom/threebedroom.component';
import { FilteringComponent } from './home/filtering/filtering.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    HomeComponent,
    CarousalsliderComponent,
    TestimonialComponent,
    AboutComponent,
    ContactComponent,
    AdvancedsearchComponent,
    AboutinhomeComponent,
    OnebedroomComponent,
    TwobedroomComponent,
    ThreebedroomComponent,
    FilteringComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
