import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsListComponent } from './contacts-list';

export const ContactsAppRoutes: Routes = [
  { path: '', component: ContactsListComponent },
];
