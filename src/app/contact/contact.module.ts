import { NgModule } from '@angular/core';

import { ContactRoutingModule } from './contact.routes';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

import { ContactService } from './contact.service';

import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    ContactRoutingModule
  ],
  declarations: [ContactComponent],
  providers: [ContactService]
})
export class ContactModule { }
