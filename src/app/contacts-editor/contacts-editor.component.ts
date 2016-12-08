import { ContactsService } from './../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from './../models/contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
  contact: Contact = <Contact>{ address: { }};

  constructor(private route: ActivatedRoute, private contactsService: ContactsService, private router : Router) { }

  ngOnInit() {
    this.contactsService
      .getContactById(this.route.snapshot.params['id'])
      .subscribe(contact =>
        this.contact = contact);
  }

  cancel(contact: Contact) {
    this.goToDetails(contact);
  }

  save(contact: Contact) {
    this.contactsService.updateContact(contact)
      .subscribe(() => this.goToDetails(contact));
  }

  goToDetails(contact: Contact) {
    this.router.navigate(['/contacts', contact.id]);
  }

}
