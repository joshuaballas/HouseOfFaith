import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about.routes';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { VisionComponent } from './vision/vision.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { IsackWanjohiComponent } from './leadership/isack-wanjohi/isack-wanjohi.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    AboutRoutingModule
  ],
  declarations: [
    WhoWeAreComponent,
    VisionComponent,
    LeadershipComponent,
    IsackWanjohiComponent
  ]
})
export class AboutModule { }
