import { Component } from '@angular/core';

@Component({
  selector: 'intro-video',
  templateUrl: './intro-video.component.html'
})
export class IntroVideoComponent {
  private loc: string;
  private videoSource: string;

  constructor () {
    this.loc = window.location.hostname;
    if (this.loc === "www.aprajitawedsrahul.com") {
      this.videoSource = "http://d2j1irgaha4o6d.cloudfront.net/AKfZP3Xm8LsSjfNYIpxB.mp4";
    }
    else if (this.loc === "localhost") {
      this.videoSource = "src/video/AKfZP3Xm8LsSjfNYIpxB.mp4";
    }
  }
}
