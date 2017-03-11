import { Component } from '@angular/core';

@Component({
  selector: 'google-maps',
  templateUrl: './google-maps.component.html',
  styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
  `]
})
export class GoogleMapsComponent {
  title: string = 'Venue - ISKON Juhu - Sri Sri Radha Rasabihari Temple, Hare Krishna Land, Juhu Church Road, Juhu, Mumbai, Maharashtra 400049, India';
  lat: number = 19.113135;
  lng: number = 72.826725;
  zoom: number = 16;
}
