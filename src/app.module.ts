import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { CarouselModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation.component';
import { PageContentComponent } from './components/page-content.component';
import { PageHeaderComponent } from './components/page-header.component';
import { PageFooterComponent } from './components/page-footer.component';

import { HomeComponent } from './components/home.component';
import { ContactUsComponent } from './components/contact-us.component';
import { VenueEventsComponent } from './components/venue-events.component';
import { OurStoryComponent } from './components/our-story-component';
import { IntroVideoComponent } from './components/intro_video.component';

import { tickerComponent } from './components/ticker.component';

import { routing } from './app.routing';

@NgModule({
  imports: [BrowserModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYoI_tkSjBumBihVLUAdP-mnzPOp0RjIU'
    }),
    CarouselModule.forRoot()
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    PageContentComponent,
    PageHeaderComponent,
    PageFooterComponent,
    HomeComponent,
    ContactUsComponent,
    VenueEventsComponent,
    OurStoryComponent,
    tickerComponent,
    IntroVideoComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
