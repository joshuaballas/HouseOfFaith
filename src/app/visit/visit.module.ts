import { NgModule } from '@angular/core';

import { VisitRoutingModule } from './visit.routes';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

import { VisitComponent } from './visit.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    VisitRoutingModule
  ],
  declarations: [
    VisitComponent
  ]
})
export class VisitModule { }
