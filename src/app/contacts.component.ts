import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { NgFor } from '@angular/common';
import { CONTACT_DATA } from './data/contact-data';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent {
  contacts = CONTACT_DATA;
}
