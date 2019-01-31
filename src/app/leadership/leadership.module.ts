import { NgModule } from '@angular/core';

import { LeadershipRoutingModule } from './leadership.routes';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

import { LeadershipComponent } from './leadership.component';
import { IsackWanjohiComponent } from './isack-wanjohi/isack-wanjohi.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    LeadershipRoutingModule
  ],
  declarations: [
    LeadershipComponent,
    IsackWanjohiComponent
  ]
})
export class LeadershipModule { }
