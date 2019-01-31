import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about.routes';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    AboutRoutingModule
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
