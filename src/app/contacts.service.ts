import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACT_DATA } from './data/contact-data';

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts(): Array<Contact> {
    return CONTACT_DATA;
  }

  getContactById(id: number) : Contact {
    return CONTACT_DATA.find(contact => contact.id == id);
  }

}
