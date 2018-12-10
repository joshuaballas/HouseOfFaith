import { NgModule } from '@angular/core';

import { LiveRoutingModule } from './live.routes';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

import { LiveComponent } from './live.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    LiveRoutingModule
  ],
  declarations: [
    LiveComponent
  ]
})
export class LiveModule { }
