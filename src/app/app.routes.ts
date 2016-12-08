import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsListComponent } from './contacts-list';

const routes: Routes = [
  { path: '', component: ContactsListComponent },
  { path: 'contacts/:id', component: ContactsDetailComponent},
  { path: 'contacts/:id/edit', component: ContactsEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ContactsListComponent, ContactsDetailComponent, ContactsEditorComponent]
