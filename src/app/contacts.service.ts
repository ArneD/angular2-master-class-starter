import { API_ENDPOINT } from './tokens';
import { Injectable, Inject } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACT_DATA } from './data/contact-data';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactsService {

  constructor(private http: Http, @Inject(API_ENDPOINT) private API_ENDPOINT: string) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get(`${this.API_ENDPOINT}/contacts`)
      .map(res => res.json())
      .map(data => data.items);
  }

  getContactById(id: number) : Observable<Contact> {
    return this.http.get(`${this.API_ENDPOINT}/contacts/${id}`)
        .map(res => res.json().item);
  }

  updateContact(contact: Contact) : Observable<any> {
    return this.http.put(`${this.API_ENDPOINT}/contacts/${contact.id}`, contact);
  }

}
