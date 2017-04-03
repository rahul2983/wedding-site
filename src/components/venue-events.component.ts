import { Component } from '@angular/core';

@Component({
  selector: 'venue-events',
  templateUrl: './venue-events.component.html',
  styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
  `]
})
export class VenueEventsComponent {
  private venue: address;

  constructor() {
    this.venue = {
      name: "ISKCON Juhu",
      addressline1: "Sri Sri Radha Rasabihari Temple",
      addressline2: "Hare Krishna Land",
      street: "Juhu Church Road",
      county: "Juhu",
      city: "Mumbai",
      country: "India",
      state: "Maharashtra",
      zipCode: "400049"
    }
  }
  //For Google Maps
  lat: number = 19.113135;
  lng: number = 72.826725;
  zoom: number = 16;
}
interface address {
  name: string;
  addressline1: string;
  addressline2: string;
  street: string;
  county: string;
  city: string;
  zipCode: string;
  state: string;
  country: string;
}
