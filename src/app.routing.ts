import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageContentComponent } from './components/page-content.component';
import { HomeComponent } from './components/home.component';
import { CarouselComponent } from './components/carousel.component';
import { AboutUsComponent } from './components/about-us.component';
import { VenueEventsComponent } from './components/venue-events.component';
import { ContactUsComponent } from './components/contact-us.component';
import { GoogleMapsComponent } from './components/google-maps.component';

const appRoutes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'storyInPictures',
    component: CarouselComponent
  },
  {
    path: 'venueEvents',
    component: VenueEventsComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'location',
    component: GoogleMapsComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
