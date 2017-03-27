import { Component } from '@angular/core';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html'
})
export class ContactUsComponent {
  private firstContact: person;
  private secondContact: person;
  private thirdContact: person;

  constructor() {
    this.firstContact = {
      name: "Aprajita Shrivastav",
      email: "aprajita.shrivastav@gmail.com",
      phone: "9619233496"
    };
    this.secondContact = {
      name: "Rahul Verma",
      email: "rahul.uoa@gmail.com",
      phone: "9820655429"
    };
    this.thirdContact = {
      name: "Nachiket Shrivastav",
      email: "nachiket.shrivastav@gmail.com",
      phone: "9769087350"
    }
  }
}

interface person {
  name: string;
  email: string;
  phone: string;
}
