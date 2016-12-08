import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header';
import { ContactsService } from './contacts.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsAppRoutes } from './app.routes';

@NgModule({
  declarations: [ContactsAppComponent, ContactsHeaderComponent, ContactsListComponent],
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(ContactsAppRoutes)],
  providers: [ContactsService],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
