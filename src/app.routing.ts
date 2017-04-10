import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageContentComponent } from './components/page-content.component';
import { HomeComponent } from './components/home.component';
import { ContactUsComponent } from './components/contact-us.component';
import { VenueEventsComponent } from './components/venue-events.component';

import { OurStoryComponent } from './components/our-story-component';

const appRoutes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'ourStory',
    component: OurStoryComponent
  },
  {
    path: 'venueEvents',
    component: VenueEventsComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
