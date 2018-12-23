import { NgModule } from '@angular/core';

import { MinistriesRoutingModule } from './ministries.routes';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

import { MinistriesComponent } from './ministries.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    MinistriesRoutingModule
  ],
  declarations: [
    MinistriesComponent
  ]
})
export class MinistriesModule { }
