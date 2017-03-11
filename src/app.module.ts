import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation.component';
import { PageContentComponent } from './components/page-content.component';
import { PageHeaderComponent } from './components/page-header.component';
import { PageBodyComponent } from './components/page-body.component';
import { PageFooterComponent } from './components/page-footer.component';

import { HomeComponent } from './components/home.component';
import { CarouselComponent } from './components/carousel.component';
import { AboutUsComponent } from './components/about-us.component';
import { VenueEventsComponent } from './components/venue-events.component';
import { ContactUsComponent } from './components/contact-us.component';
import { GoogleMapsComponent } from './components/google-maps.component';

import { routing } from './app.routing';

@NgModule({
  imports: [BrowserModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYoI_tkSjBumBihVLUAdP-mnzPOp0RjIU'
    })
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    PageContentComponent,
    PageHeaderComponent,
    PageBodyComponent,
    PageFooterComponent,
    HomeComponent,
    CarouselComponent,
    AboutUsComponent,
    VenueEventsComponent,
    ContactUsComponent,
    GoogleMapsComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
