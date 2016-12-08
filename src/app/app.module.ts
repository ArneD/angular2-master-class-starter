import { APP_PROVIDERS } from './app.providers';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header';
import { AppRoutingModule, routingComponents } from './app.routes';

import 'rxjs/add/operator/map';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';

@NgModule({
  declarations: [ContactsAppComponent, ContactsHeaderComponent, routingComponents, ContactsEditorComponent],
  imports: [BrowserModule, CommonModule, AppRoutingModule, HttpModule, FormsModule],
  providers: [APP_PROVIDERS],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}


