import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACT_DATA } from './data/contact-data';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactsService {

  API_ENDPOINT: string = 'http://localhost:4201/api';

  constructor(private http: Http) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get(this.API_ENDPOINT + '/contacts')
      .map(res => res.json())
      .map(data => data.items);
  }

  getContactById(id: number) : Observable<Contact> {
    return this.http.get(this.API_ENDPOINT + '/contacts/' + id)
        .map(res => res.json())
        .map(data => data.item);
  }

}
