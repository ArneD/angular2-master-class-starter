import { API_ENDPOINT } from './tokens';
import { OpaqueToken } from '@angular/core';
import { ContactsService } from './contacts.service';

export const APP_PROVIDERS = [
  ContactsService,
  {
    provide: API_ENDPOINT,
    useValue: 'http://localhost:4201/api'
  }
];
