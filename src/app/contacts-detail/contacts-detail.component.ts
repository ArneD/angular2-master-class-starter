import { ContactsService } from './../contacts.service';
import { Contact } from './../models/contact';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  contact: Contact;

  constructor(private contactsService: ContactsService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.contact = this.contactsService.getContactById(this.route.snapshot.params['id']);
  }
}
