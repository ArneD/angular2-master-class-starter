import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header';
import { ContactsService } from './contacts.service';
import { AppRoutingModule, routingComponents } from './app.routes';

@NgModule({
  declarations: [ContactsAppComponent, ContactsHeaderComponent, routingComponents],
  imports: [BrowserModule, CommonModule, AppRoutingModule],
  providers: [ContactsService],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
