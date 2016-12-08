import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header';

@NgModule({
  declarations: [ContactsAppComponent, ContactsHeaderComponent],
  imports: [BrowserModule, CommonModule],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
