import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './common/appheader/appheader.component';
import { AppfooterComponent } from './common/appfooter/appfooter.component';
import { HomeComponent } from './home/home/home.component';
import { CarousalsliderComponent } from './home/carousalslider/carousalslider.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './contact/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    HomeComponent,
    CarousalsliderComponent,
    TestimonialComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
